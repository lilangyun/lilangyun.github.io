# 关于Codex使用的小技巧
## 解决 Codex imagegen skill 无法使用的方法

### 🎯 首选：绕过门控，借用 OAuth 能力
这类 Skill 的核心思路是：虽然 Codex CLI 对 API Key 认证屏蔽了内置工具，但它不会限制 codex exec 子进程在 OAuth 登录态下的行为。这些 Skill 通过脚本驱动 codex exec，在单次调用中动态启用 image_generation，从而复用你本机的 ChatGPT 订阅额度。

#### codex-image-gen (stephenlzc)
这是最贴近你需求的方案。它通过 codex exec 非交互模式生图，脚本会强制加上 --enable image_generation 参数，完全绕过全局配置的门控。安装后直接用 --prompt 和 --output 调用，还支持精确尺寸校验和 prompt 归档。

```bash
git clone https://github.com/stephenlzc/codex-image-gen.git
cp -r codex-image-gen ~/.codex/skills/
```

但是对于该方法，生成的图片质量一般，而且也不能根本上解决授权问题，导出图片时还需要登录账户，耗时和消耗Token也很多，不建议使用。

## 接着上一次的聊天继续执行任务

```bash
codex resume --last
codex resume
codex resume <SESSION_ID>
```
