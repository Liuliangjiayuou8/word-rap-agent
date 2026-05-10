import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    ...headers,
  });
  res.end(body);
}

function json(res, status, data) {
  send(res, status, JSON.stringify(data), { "Content-Type": "application/json; charset=utf-8" });
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = url.pathname;
  if (filePath === "/") filePath = "/index.html";
  const absPath = path.join(rootDir, filePath);
  try {
    const stat = await fs.stat(absPath);
    if (stat.isDirectory()) {
      return await serveStatic({ ...req, url: `${filePath.replace(/\/$/, "")}/index.html` }, res);
    }
    const ext = path.extname(absPath).toLowerCase();
    const type = {
      ".html": "text/html; charset=utf-8",
      ".js": "text/javascript; charset=utf-8",
      ".mjs": "text/javascript; charset=utf-8",
      ".webmanifest": "application/manifest+json; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".mp3": "audio/mpeg",
      ".wav": "audio/wav",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".svg": "image/svg+xml",
    }[ext] || "application/octet-stream";
    const data = await fs.readFile(absPath);
    send(res, 200, data, { "Content-Type": type });
  } catch (error) {
    send(res, 404, "Not found");
  }
}

async function proxyMiniMax(req, res, targetPath) {
  const body = await readBody(req);
  const { apiKey, ...payload } = body || {};
  if (!apiKey) return json(res, 400, { error: "Missing apiKey" });

  const upstream = await fetch(`https://api.minimaxi.com${targetPath}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await upstream.text();
  res.writeHead(upstream.status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Content-Type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
  });
  res.end(text);
}

async function proxyRemoteFile(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const target = url.searchParams.get("url");
  if (!target) return send(res, 400, "Missing url");

  let parsed;
  try {
    parsed = new URL(target);
  } catch (_) {
    return send(res, 400, "Invalid url");
  }

  if (!["http:", "https:"].includes(parsed.protocol)) {
    return send(res, 400, "Unsupported url scheme");
  }

  const upstream = await fetch(parsed.href, { method: "GET", redirect: "follow" });
  const body = Buffer.from(await upstream.arrayBuffer());
  const headers = {
    "Content-Type": upstream.headers.get("content-type") || "application/octet-stream",
  };
  const disposition = upstream.headers.get("content-disposition");
  if (disposition) headers["Content-Disposition"] = disposition;
  res.writeHead(upstream.status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    ...headers,
  });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  if (!req.url) return send(res, 400, "Bad request");
  if (req.method === "OPTIONS") return send(res, 204, "");
  if (req.url.startsWith("/api/fetch-file")) return proxyRemoteFile(req, res);
  if (req.url.startsWith("/api/minimax/get-voice")) return proxyMiniMax(req, res, "/v1/get_voice");
  if (req.url.startsWith("/api/minimax/lyrics")) return proxyMiniMax(req, res, "/v1/lyrics_generation");
  if (req.url.startsWith("/api/minimax/chat")) return proxyMiniMax(req, res, "/v1/text/chatcompletion_v2");
  if (req.url.startsWith("/api/minimax/music")) return proxyMiniMax(req, res, "/v1/music_generation");
  return serveStatic(req, res);
});

server.listen(port, () => {
  console.log(`word-rap-agent running at http://127.0.0.1:${port}/`);
});
