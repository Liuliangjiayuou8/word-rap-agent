# 一词成歌 RAP 智能体

一个可部署为网页/PWA 的中文说唱生成工具。

## 功能

- 输入一个词、一句话、一首诗，或一段文稿
- 生成中文 RAP 歌词
- 支持风格、情绪、篇幅、演唱音色选择
- 支持 MiniMax 生成歌词与唱出来
- 支持生成历史、下载音频、PWA 安装

## 本地启动

```bash
npm start
```

默认打开地址：

```text
http://127.0.0.1:4173/
```

## 部署

项目适合部署到支持 Node.js Web Service 的平台，例如：

- Render
- Railway

参考：

- [网页部署说明](./docs/05-web-deploy.md)
- [PWA 说明](./docs/06-pwa-notes.md)

## 目录

- `index.html`：前端页面
- `server.mjs`：静态资源 + MiniMax 代理服务
- `manifest.webmanifest`：PWA 配置
- `sw.js`：Service Worker
- `docs/`：需求、技术、设计、部署文档
