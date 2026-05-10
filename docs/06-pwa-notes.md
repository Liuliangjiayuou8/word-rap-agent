# 06 PWA 说明

项目现在已经具备 PWA 基础能力：

- `manifest.webmanifest`
- `sw.js`
- `icon.svg`
- 页面内安装按钮

## 当前能力

- 可作为网页链接访问
- 支持浏览器“安装应用 / 添加到主屏幕”
- 支持基础离线缓存

## 仍然需要服务端的部分

因为项目要调用：

- `/api/minimax/chat`
- `/api/minimax/music`
- `/api/minimax/get-voice`
- `/api/fetch-file`

所以它仍然不是“纯静态托管”项目，发布时要让 `server.mjs` 一起运行。

## 朋友测试方式

最理想的方式是把整个项目部署到一个公网域名：

- 朋友直接点链接打开
- 支持安装成桌面 / 主屏幕应用
- 同时还能正常走 MiniMax 代理链路
