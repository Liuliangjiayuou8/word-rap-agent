# Codex 工作指引

这个文件是 `word-rap-agent` 项目的总入口说明。以后在这个项目里做任何改动，先看这里，再按下面的标准文档执行。

## 标准文档路径

- 需求规范：`/Users/maoshan/Desktop/ppt/word-rap-agent/docs/01-requirements.md`
- 技术规范：`/Users/maoshan/Desktop/ppt/word-rap-agent/docs/02-technical-spec.md`
- 设计规范：`/Users/maoshan/Desktop/ppt/word-rap-agent/docs/03-design-spec.md`
- 执行步骤：`/Users/maoshan/Desktop/ppt/word-rap-agent/docs/04-execution-playbook.md`

## 工作说明

1. 新需求先对照需求规范，确认是不是真的要加。
2. 需要改接口、状态、存储时，先看技术规范。
3. 需要改页面、布局、按钮、交互时，先看设计规范。
4. 动手前按执行步骤走，先做最小闭环，再做增强。
5. 改完以后，如果行为发生变化，要把对应标准文档补上。
6. 不要绕过这些文档直接改大功能，避免后面没人接得住。

## 项目约定

- 页面优先保持单页。
- 黑白风格优先。
- 生成、播放、字幕、历史是主链路。
- 任何会影响用户体验的改动，都要保留明确状态反馈。
