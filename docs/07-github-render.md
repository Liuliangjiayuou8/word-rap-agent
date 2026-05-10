# 07 GitHub + Render

当前项目已经完成：

- 本地 Git 仓库初始化
- 首次提交
- Render 配置文件
- PWA 基础配置

## 当前本地状态

- 分支：`main`
- 首次提交：`Initial web and PWA app`

## GitHub 建议流程

在 GitHub 登录完成后，可以直接执行：

```bash
cd /Users/maoshan/Desktop/ppt/word-rap-agent
gh repo create word-rap-agent --public --source=. --remote=origin --push
```

如果你想建私有仓库：

```bash
cd /Users/maoshan/Desktop/ppt/word-rap-agent
gh repo create word-rap-agent --private --source=. --remote=origin --push
```

## Render 建议流程

1. 登录 Render
2. 选择 New Web Service
3. 连接 GitHub 仓库 `word-rap-agent`
4. Render 会读取项目中的 `render.yaml`
5. 部署完成后获得公网链接

## 说明

项目不能只用 GitHub Pages，因为它还需要：

- `server.mjs`
- `/api/minimax/*` 代理接口
- `/api/fetch-file`

所以需要能运行 Node.js 服务的平台。
