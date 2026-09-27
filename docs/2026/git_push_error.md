# Git push运行失败

自己在将本地的代码提交推送至远程的代码仓库时，由于有时会连接 VPN 访问 Github，所以可能在终端使用了代理端口后，导致正常推送失败，这里记录一下这个报错的具体解决办法。

## 具体报错
```bash
$ git push
fatal: unable to access 'https://github.com/{username}/{username}.github.io.git/': Failed to connect to github.com port 443 after 21116 ms: Could not connect to server
```

### 排查与解决方法

可以按照以下步骤，从最可能的原因开始排查：

**1. 配置 Git 代理**

如果使用了代理软件，例如 VPN 或者加速器，需要让 Git 走同样的通道。关键是端口号必须与代理软件设置完全一致。

*   **查看代理端口**：打开代理软件，在设置中查找“HTTP 代理”、“端口”或“Mixed Port”等信息。常见的端口有 `7890`、`10809`、`7897` 等。
*   **配置 Git**：在终端中执行以下命令，将 `端口号` 替换为实际看到的数字：

    ```bash
    git config --global http.proxy 127.0.0.1:端口号
    git config --global https.proxy 127.0.0.1:端口号
    ```
    例如，如果代理端口是 `7897`，则命令为:
    
    ```bash
    git config --global http.proxy 127.0.0.1:7897
    git config --global https.proxy 127.0.0.1:7897
    ```

*   **取消代理**：如果之后想取消，可以执行：

    ```bash
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```

**2. 检查网络与代理状态**

*   **确保代理开启**：配置 Git 代理后，请确保代理软件**全程处于开启状态**。
*   **切换网络测试**：如果配置代理后依然不行，可以尝试切换网络环境。例如，从公司内网切换到手机热点。部分公司或校园网可能会屏蔽 443 端口。