# Claude Code 实用技巧

自己在进行大创和一些实验时，经常需要使用 **Agent** 做一些编写代码或者制作流程图的任务以帮助自己减少工作量，因此在这里记录一些使用 **Agent** 的实用技巧。

## 接着上一次的聊天继续执行任务

```bash
# 继续最近一次会话
claude --continue
# 或简写
claude -c

# 打开会话选择器，手动挑选要恢复的对话
claude --resume
# 或简写
claude -r

# 直接恢复指定会话 ID
claude --resume <SESSION_ID>
```