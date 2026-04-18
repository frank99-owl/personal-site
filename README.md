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

### 🔧 添加新项目（作品区）

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

### ✏️ 改文案

- 中文：`lib/dictionaries/zh.json`
- 英文：`lib/dictionaries/en.json`

所有文字都在这两个 JSON 里，改完刷新页面即可。

### 🎨 改主题色

打开 `app/globals.css`，在 `@theme` 块里修改 CSS 变量：
- `--color-cream` 背景
- `--color-ink` 主文字
- `--color-orange` 强调色
- `--color-line` 分割线

### 📷 换个人头像

把一张照片（比如 `avatar.jpg`）放入 `public/`，然后在 `app/[lang]/about/page.tsx` 里把头像占位块替换成：

```tsx
<Image src="/avatar.jpg" alt="Frank" width={112} height={112} className="rounded-full" />
```

### 🌍 调整地球上的标记点

打开 `components/Globe.tsx`，编辑 `markers` 数组。每个标记是 `{ location: [纬度, 经度], size: 大小 }`。

## 目录速览

```
app/
  [lang]/
    layout.tsx        # 根布局，管理导航、字体、语言
    page.tsx          # 首页
    projects/page.tsx # 作品列表
    about/page.tsx    # 个人页
  globals.css         # 主题 + Tailwind
components/           # UI 组件
content/projects.ts   # ⭐ 作品数据
lib/
  dictionaries/       # ⭐ 中英文案
  dictionaries.ts     # 加载器
public/               # 静态资源
```

## 技术栈

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- cobe — WebGL 地球
- Framer Motion — 动画
- lucide-react — 图标

---

© 2026 Frank. All rights reserved. 本仓库为个人作品集展示，未授权复用。
