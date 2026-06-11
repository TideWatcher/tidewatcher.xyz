# tidewatcher.xyz

Tidewatcher 的个人网站，使用纯静态 HTML/CSS/JS 构建，托管在 GitHub Pages，自定义域名 `www.tidewatcher.xyz`。

## 网站结构

网站分为三个一级页面，顶部导航可在三者之间切换，右上角支持中/英文切换（记忆用户选择）。

| 页面 | 文件 | 说明 |
|------|------|------|
| Linktr | `index.html` | 个人主页，Linktree 风格，汇总社交媒体与自媒体链接（Telegram、X、YouTube、GitHub、LinkedIn、知乎、微信公众号等） |
| 博客 | `blog.html` | 文章列表，按分类筛选：朝花夕拾 / 时政观潮 / 行情逼逼 / 行业研究 |
| AI Agent | `agents.html` | 展示自建的 AI Agent 产品，目前包括 CryptoWrite、Token Monitor |

## 目录结构

```
.
├── index.html        # Linktr 首页
├── blog.html         # 博客列表页
├── agents.html       # AI Agent 列表页
├── style.css         # 全站样式
├── lang.js           # 中/英文切换逻辑（基于 data-zh / data-en 属性 + localStorage）
├── posts/
│   ├── index.json    # 文章索引（标题、分类、日期，含中英文字段）
│   └── *.html        # 各篇文章页面
├── CNAME             # GitHub Pages 自定义域名配置
└── .github/workflows/deploy.yml  # 自动部署到 GitHub Pages
```

## 部署

- **托管**：GitHub Pages（境外服务器，无需 ICP 备案）
- **域名解析**：阿里云 DNS，`www` CNAME 指向 `tidewatcher.github.io`，根域名 A 记录指向 GitHub Pages IP
- 推送到 `main` 分支后，GitHub Actions 自动构建并发布，约 1-2 分钟生效

## 写新文章

1. 在 `posts/` 下新建一个 `*.html` 文件（可参考已有文章的结构，包含导航、语言切换标签）
2. 在 `posts/index.json` 中添加一条记录（`slug`、`title`/`titleEn`、`category`/`categoryEn`、`date`）
3. 提交并推送到 `main`

## AI Agent 产品

- **CryptoWrite** — https://write.tidewatcher.xyz/ — 加密货币内容创作 AI Agent
- **Token Monitor** — https://monitor.tidewatcher.xyz/ — 链上代币转账监控与告警 AI Agent

## 社交媒体

- Telegram: https://t.me/TideWatcher_cao
- X: https://x.com/TideWatcherHQ
- GitHub: https://github.com/TideWatcher
- LinkedIn: https://www.linkedin.com/in/cousin-cao-590135120/
- 知乎: https://www.zhihu.com/people/dongfangjiaozhu
- YouTube: https://www.youtube.com/@TidewatcherHQ
- 微信公众号：观潮局长
