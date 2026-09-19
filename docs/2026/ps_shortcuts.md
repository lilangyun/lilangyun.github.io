# 记录使用终端的一些小技巧

## 在终端输入了很长一段指令，但是删除却很麻烦

### Powershell

| 快捷键 | 作用         |
| ------ | ------------ |
| `Esc`  | 删除全部内容 |

### Bash

| 快捷键     | 作用                             |
| ---------- | -------------------------------- |
| `Ctrl + U` | 删除光标前面的所有内容（最常用） |
| `Ctrl + K` | 删除光标后面的所有内容           |
| `Ctrl + W` | 删除光标前的一个单词             |
| `Ctrl + A` | 光标跳到行首                     |
| `Ctrl + E` | 光标跳到行尾                     |
| `Ctrl + C` | 直接放弃当前这行，重新来         |
| `Esc`      | 清除当前整行                     |

## PS如何切换为Emacs模式

### 一、直接运行（当前会话立即生效）
打开 PowerShell，粘贴运行：

```powershell
Set-PSReadLineOption -EditMode Emacs
```

运行后立刻试 Ctrl+U，应该就能删除光标前所有内容。

### 二、永久配置（每次启动自动生效）

#### 第 1 步：创建配置文件（如果还没有）

```powershell
if (-not (Test-Path $PROFILE)) { New-Item -Force $PROFILE }
```

#### 第 2 步：写入配置

```powershell
Add-Content -Path $PROFILE -Value @'
Import-Module PSReadLine
Set-PSReadLineOption -EditMode Emacs
'@
```

#### 第 3 步：立即加载

```powershell
. $PROFILE
```

之后每次打开 PowerShell 都会自动应用。

### 三、验证是否生效

```powershell
Get-PSReadLineOption | Select-Object EditMode
```

显示 Emacs 即成功。

### 四、Emacs 模式下常用快捷键

| 快捷键 | 作用 |
| ---------- | -------------------------------- |
| `Ctrl + U` |	删除光标前所有内容 |
| `Ctrl + K` |	删除光标后所有内容 |
| `Ctrl + A` |	光标跳到行首 |
| `Ctrl + E` |	光标跳到行尾 |
| `Ctrl + W` |	删除光标前一个单词 |
| `Ctrl + R` |	反向搜索历史命令 |
| `Esc` | 清空当前整行 |

### 五、如果还是无效

按顺序排查：

#### 确认模块已加载

```powershell
Get-Module PSReadLine
```

无输出就先运行 Import-Module PSReadLine。

#### 确认版本

```powershell
Get-Module PSReadLine | Select-Object Version
```

低于 2.2.0 建议更新：

```powershell
Update-Module PSReadLine -Force
```

更新后关闭窗口重开。

#### 确认配置文件路径正确

```powershell
$PROFILE
```

查看路径，确认文件确实存在且内容已写入。

### 六、配置文件长什么样（参考）

```powershell
Import-Module PSReadLine
Set-PSReadLineOption -EditMode Emacs
```

就这两行，干净利落。不需要其他多余设置。

一句话总结：运行 Set-PSReadLineOption -EditMode Emacs 立即生效；写入 $PROFILE 永久生效；验证看 EditMode 是否为 Emacs。