# 07 GitHub + Render

当前项目已经完成：

- 本地 Git 仓库初始化
- GitHub 仓库创建并推送
- Render 配置文件
- PWA 基础配置
- Render 免费版发布成功

## 当前仓库状态

- 分支：`main`
- GitHub：`https://github.com/Liuliangjiayuou8/word-rap-agent`
- Render：`https://word-rap-agent.onrender.com`

## 已完成的 GitHub 流程

- GitHub 登录完成
- 仓库已创建为公开仓库
- 本地代码已推送到远端 `main`

## 已完成的 Render 流程

1. 登录 Render
2. 选择 New Web Service
3. 连接 GitHub 仓库 `word-rap-agent`
4. 手动确认构建命令与启动命令
5. 选择 Free 实例
6. 部署完成后获得公网链接

## 说明

项目不能只用 GitHub Pages，因为它还需要：

- `server.mjs`
- `/api/minimax/*` 代理接口
- `/api/fetch-file`

所以需要能运行 Node.js 服务的平台。

## 当前上线参数

- Build Command：`npm install`
- Start Command：`npm start`
- 实例类型：`Free`

## 维护建议

- README 中始终保持：
  - 仓库地址
  - 在线地址
  - 本地启动方式
  - 免费版冷启动说明
- 每次重新部署后，检查 GitHub 首页说明和线上地址是否一致。
