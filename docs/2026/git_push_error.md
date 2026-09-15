# Git push运行失败

## 具体报错
```powershell
PS D:\blog> git push
fatal: unable to access 'https://github.com/lilangyun/lilangyun.github.io.git/': Failed to connect to github.com port 443 after 21116 ms: Could not connect to server
```

### 排查与解决方法

你可以按照以下步骤，从最可能的原因开始排查：

**1. 配置 Git 代理（最常见原因）**

如果你使用了代理软件（VPN/加速器），需要让 Git 走同样的通道。关键是端口号必须与你的代理软件设置完全一致。

*   **查看代理端口**：打开你的代理软件，在设置中查找“HTTP 代理”、“端口”或“Mixed Port”等信息。常见的端口有 `7890`、`10809`、`7897` 等。
*   **配置 Git**：在终端中执行以下命令，将 `端口号` 替换为你实际看到的数字：
    ```bash
    git config --global http.proxy 127.0.0.1:端口号
    git config --global https.proxy 127.0.0.1:端口号
    ```
    例如，如果你的代理端口是 `7890`，则命令为 `git config --global http.proxy 127.0.0.1:7890`。
*   **取消代理**：如果之后想取消，可以执行：
    ```bash
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```

**2. 检查网络与代理状态**

*   **确保代理开启**：配置 Git 代理后，请确保你的代理软件**全程处于开启状态**。
*   **切换网络测试**：如果配置代理后依然不行，可以尝试切换网络环境。例如，从公司内网切换到手机热点。部分公司或校园网可能会屏蔽 443 端口。

**3. 尝试使用 SSH 协议（备选方案）**

如果配置代理依然无法解决，或者你不想使用代理，可以考虑将仓库地址从 HTTPS 切换为 SSH，这可以绕过 443 端口限制。

*   **生成 SSH Key**（如果已有可跳过）：`ssh-keygen -t ed25519 -C "你的邮箱"`
*   **添加公钥到 GitHub**：复制 `~/.ssh/id_ed25519.pub` 文件内容，在 GitHub 的 `Settings` -> `SSH and GPG keys` 中添加。
*   **修改远程地址**：在项目目录下执行：
    ```bash
    git remote set-url origin git@github.com:lilangyun/lilangyun.github.io.git
    ```
    然后再次尝试 `git push`。