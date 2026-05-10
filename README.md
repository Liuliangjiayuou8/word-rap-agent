# 一词成歌 RAP 智能体

一个可部署为网页/PWA 的中文说唱生成工具。

- 在线地址：https://word-rap-agent.onrender.com
- GitHub 仓库：https://github.com/Liuliangjiayuou8/word-rap-agent

## 功能

- 输入一个词、一句话、一首诗，或一段文稿
- 生成中文 RAP 歌词
- 支持风格、情绪、篇幅、演唱音色选择
- 支持 MiniMax 生成歌词与唱出来
- 支持生成历史、播放、下载音频、PWA 安装
- 支持部署成公网网页链接给朋友直接访问

## 在线体验

- 正式地址：`https://word-rap-agent.onrender.com`
- 免费版 Render 会冷启动，长时间无人访问后首次打开可能需要等待几十秒

## 使用说明

1. 在输入区填写一个词、一句话、一首诗，或一段文稿。
2. 选择风格、情绪、长度和演唱音色。
3. 点击“生成歌词”先产出 RAP 文本。
4. 点击“生成并唱出来”生成音频。
5. 生成成功后，可在历史记录中继续播放、下载或删除。

## 当前产品说明

- 生成历史只会在“生成并唱出来”成功后保存。
- 项目当前以黑白单页工作台为主，适合快速创作和试听。
- 页面中的 AI 接入入口已默认隐藏，优先保持普通用户可直接使用。
- 由于没有真实逐句时间轴，歌词字幕同步功能已移除，避免误导用户。

## 本地启动

```bash
npm install
npm start
```

默认打开地址：

```text
http://127.0.0.1:4173/
```

如果你本地还有旧的调试端口，也可以按实际启动日志访问。

## 技术结构

- `index.html`：主界面与前端交互逻辑
- `server.mjs`：静态资源服务 + MiniMax 代理接口
- `render.yaml`：Render 部署配置
- `manifest.webmanifest` / `sw.js`：PWA 能力
- `docs/`：需求、技术、设计、部署与维护文档

## 接口说明

项目通过服务端代理调用 MiniMax，主要包括：

- `/api/minimax/chat`
- `/api/minimax/lyrics`
- `/api/minimax/music`
- `/api/minimax/get-voice`
- `/api/fetch-file`

这也是项目不能只部署为纯静态页面的原因。

## 部署

项目适合部署到支持 Node.js Web Service 的平台，例如：

- Render
- Railway

### 一键部署到 Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Liuliangjiayuou8/word-rap-agent)

参考：

- [网页部署说明](./docs/05-web-deploy.md)
- [PWA 说明](./docs/06-pwa-notes.md)
- [GitHub + Render 发布记录](./docs/07-github-render.md)

## 目录

- `index.html`：前端页面
- `server.mjs`：静态资源 + MiniMax 代理服务
- `manifest.webmanifest`：PWA 配置
- `sw.js`：Service Worker
- `docs/`：需求、技术、设计、部署文档
- `codex.md`：协作入口与文档指引

## 文档入口

- [docs/README.md](./docs/README.md)
- [codex.md](./codex.md)
