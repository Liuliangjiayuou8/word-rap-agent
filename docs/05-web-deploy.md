# 05 网页部署

这个项目现在已经支持作为一个完整网页服务部署，不再只依赖本地 `127.0.0.1`。

## 当前部署形态

- 前端页面：`index.html`
- 后端服务：`server.mjs`
- 启动命令：`node server.mjs`
- 默认端口：读取 `PORT`，未提供时使用 `4173`

## 为什么不能只发静态 HTML

项目里有 MiniMax 代理接口：

- `/api/minimax/chat`
- `/api/minimax/music`
- `/api/minimax/get-voice`
- `/api/fetch-file`

所以它不是纯静态站点，发布时要带上 `server.mjs` 一起跑。

## 推荐发布方式

### Render

项目已经带了 `render.yaml`，适合直接部署：

1. 新建一个 Web Service
2. 绑定这个项目目录
3. 让平台执行 `node server.mjs`
4. 部署完成后会得到一个公网域名

### Railway

也可以直接用：

1. 导入项目
2. 运行 `npm start`
3. 平台会分配公网域名

## 代码里的网页适配

前端已改成：

- 本地 `file://` 时，仍然走 `http://127.0.0.1:4180`
- 网页部署到公网域名时，自动走当前域名的同源 API

这样部署后不用再手改前端接口地址。

## 对外测试链接

真正的测试链接需要在部署平台发布成功后生成。
当前本地可用地址仍然是：

- `http://127.0.0.1:4180/index.html`
