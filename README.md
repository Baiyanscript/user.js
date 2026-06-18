# 🛡️ user.js
> 被 Ban 算你牛皮克拉斯 | 专治各种 .io 不服

[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-支持-brightgreen?logo=tampermonkey)](https://www.tampermonkey.net/)
[![Violentmonkey](https://img.shields.io/badge/Violentmonkey-支持-blue)](https://violentmonkey.github.io/)
[![JavaScript](https://img.shields.io/badge/语言-JavaScript-yellow)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![警告](https://img.shields.io/badge/⚠️-封号风险-red)](#-免责声明)

本仓库收录了针对多款热门 `.io` 网页游戏的 **UserScript** 注入脚本。包含透视雷达、自动瞄准、去广告、功能增强等黑科技。

---

## 📦 脚本索引

| 游戏平台 | 脚本文件 | 核心功能（基于文件名推测） |
| :--- | :--- | :--- |
| **2v2.io** | `2v2.ioESPRadar+Aimbot.user.js` | 🎯 透视雷达 + 子弹自瞄 |
| **2v2.io** | `2v2.ioGameEnhancements.user.js` | ⚡ 游戏内置功能增强（加速/无限体力等） |
| **Minefun.io** | `Minebuns.user.js` | ⛏️ 挖矿/生存辅助（秒挖矿、快速建造） |
| **Poxel.io** | `Poxel.ioRecte.user.js` | 🧱 方块世界辅助（可能包含透视或快速放置） |
| **kour.io** | `Kour.io_Ad_blocker.user.js` | 🚫 纯净去广告（移除游戏内视频/弹窗广告） |
| 根目录 | `SMST.user.js` | 🧩 通用工具箱 / 待补充具体说明 |

> ⚠️ *注：具体热键及开关请安装后按 `F12` 查看控制台输出提示。*

---

## 🚀 极速安装指南

**方法一（推荐）：一键安装**
1. 确保浏览器已安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 扩展。
2. 在本仓库中找到对应游戏的 `.user.js` 文件并点击进入。
3. 点击页面右上角的 **`Raw`** 按钮。
4. 扩展程序会自动弹出安装提示，点击 **安装** 即可。

**方法二（手动）：**
复制 `Raw` 页面的全部代码，在 Tampermonkey 管理面板中点击“新建脚本”，粘贴并保存（Ctrl+S）。

---

## 🎮 使用说明
- 安装脚本后，进入对应的游戏官网（如 `2v2.io`），脚本将自动加载。
- 默认功能通常**自动开启**，若有菜单开关，请在游戏界面中寻找 `GUI` 面板或按键盘上的 `~` / `Insert` 键呼出。
- **广告拦截脚本**需确保在游戏加载前生效，建议刷新页面测试。

---

## ⚠️ 免责声明（重点阅读）

本项目及脚本**仅供技术交流与学习研究**使用。使用本脚本将**严重违反**对应游戏的服务条款。

1. **封号风险极高**：使用透视、自瞄等外挂功能，游戏后台极易检测并**永久封禁您的 IP/账号**。
2. **后果自负**：使用者需自行承担因使用本脚本而产生的一切账号损失、设备风险及法律纠纷。
3. **禁止商用**：请勿将本仓库内容用于任何商业目的或非法获利。

**如果你怕封号，现在就点右上角 Star 收藏后关掉页面；如果你头铁，那就开搞！**

---

## 📜 许可证
本项目遵循 **仅供学习参考** 原则，不授予任何商业或非法用途的使用权。

---

> **最后更新**：2026-06-18  
> **友情提示**：且用且珍惜，且玩且保号 🚬
