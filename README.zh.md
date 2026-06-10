# Frank 个人网站

一个用 Next.js 16 + Tailwind v4 构建的个人站，视觉风格对标 Anthropic。

## 本地开发

```bash
npm run dev
```

浏览器打开：
- http://localhost:3000 → 会自动跳到英文首页 `/en`
- http://localhost:3000/zh → 中文版

## 常见修改指南

### 添加新项目（作品区）

1. 把项目截图放入 `public/projects/`（比如 `my-app.png`）
2. 打开 `content/projects.ts`，在 `projects` 数组里加一条：

```ts
{
  slug: "my-app",
  title: { en: "My App", zh: "我的应用" },
  description: { en: "One-line pitch.", zh: "一句话介绍。" },
  tags: ["React", "AI"],
  image: "/projects/my-app.png",
  github: "https://github.com/...",
  demo: "https://...",
  featured: true,           // 是否在首页精选展示
  year: 2026,
}
```

保存即生效。首页和 `/projects` 页都会自动更新。

### 改文案

- 中文：`lib/dictionaries/zh.json`
- 英文：`lib/dictionaries/en.json`

所有文字都在这两个 JSON 里，改完刷新页面即可。

### 改主题色

打开 `app/globals.css`，在 `@theme` 块里修改 CSS 变量：
- `--color-cream` 背景
- `--color-ink` 主文字
- `--color-orange` 强调色
- `--color-line` 分割线

### 换个人头像

把一张照片（比如 `avatar.jpg`）放入 `public/`。关于页已经用 `fill` 模式读取 `/avatar.jpg`——换文件就行。如果路径不同，修改 `app/[lang]/about/page.tsx`：

```tsx
<Image src="/your-photo.jpg" alt="Frank" fill sizes="128px" className="object-cover" priority />
```

### 调整地球上的标记点

打开 `components/effects/Globe.tsx`，编辑 `markers` 数组。每个标记是 `{ location: [纬度, 经度], size: 大小 }`。

## 目录速览

```
app/
  [lang]/
    layout.tsx           # 根布局，管理导航、字体、语言、SEO metadata
    page.tsx             # 首页
    projects/page.tsx    # 作品列表
    about/page.tsx       # 个人页
    loading.tsx          # 页面加载骨架屏
    not-found.tsx        # 语言范围内的 404
  globals.css            # 主题 + Tailwind
  manifest.ts            # PWA manifest
  robots.ts              # 搜索引擎爬虫规则
  sitemap.ts             # 站点地图
  error.tsx              # 全局错误边界
  not-found.tsx          # 全局 404
components/
  layout/                # 布局组件
    Navbar.tsx           # 顶部导航（含当前页面高亮）
    Footer.tsx           # 页脚
    FooterNav.tsx        # 页脚导航
    FooterSocial.tsx     # 社交链接（点击复制）
  sections/              # 页面区块
    Hero.tsx             # 首页首屏
    ProjectGrid.tsx      # 作品网格
    ProjectCard.tsx      # 单个作品卡片
  effects/               # 视觉效果
    Globe.tsx            # WebGL 地球
  ui/                    # 基础 UI
    LanguageToggle.tsx   # 语言切换
content/
  projects.ts            # 作品数据源
  models.ts              # AI 模型厂商与模型列表（关于页）
lib/
  constants.ts           # 站点常量（URL、SEO 等）
  clipboard.ts           # 剪贴板工具
  utils.ts               # 通用工具（cn 等）
  locale.ts              # 语言类型和工具
  dictionaries.ts        # 字典加载器
  dictionaries/
    en.json              # 英文文案
    zh.json              # 中文文案
public/
  avatar.jpg             # 个人头像（同时用作 favicon + 关于页）
  og.png                 # Open Graph 预览图
  logos/                 # AI 厂商 SVG logo（关于页）
  projects/              # 项目截图
```

## 技术栈

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- cobe — WebGL 地球
- Framer Motion — 动画
- lucide-react — 图标
- clsx + tailwind-merge — className 工具

---

© 2026 Frank. All rights reserved. 本仓库为个人作品集展示，未授权复用。
