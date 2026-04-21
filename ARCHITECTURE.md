# 架构说明

本文档说明本项目的关键设计决策和代码组织原则。

## 设计原则

### 1. 服务端优先

所有页面组件都是异步 Server Components，数据（字典、项目列表）在服务端获取并传入客户端组件。只有交互性组件（Globe、LanguageToggle、FooterSocial）标记为 `"use client"`。

### 2. 字典驱动文案

所有用户可见文案集中到 `lib/dictionaries/{en,zh}.json`，通过 `lib/dictionaries.ts` 按需加载。组件不硬编码任何文案——包括 "Demo"/"Source" 这样的通用词。

### 3. 类型安全

- `lib/locale.ts` 导出 `Locale` 和 `Dictionary` 类型，从英文字典自动推断
- 所有组件 Props 显式声明类型
- TypeScript `strict: true`

### 4. 零运行时依赖膨胀

- 动画只用 `framer-motion`（已安装）
- 图标只用 `lucide-react`（已安装）
- 工具函数（`cn`、`copyToClipboard`）自研，不引入额外库

## 关键模块

### 路由

```
/           → 301 重定向到 /en
/en         → 英文首页
/zh         → 中文首页
/en/projects → 英文作品页
/zh/projects → 中文作品页
/en/about    → 英文关于页
/zh/about    → 中文关于页
```

`[lang]` dynamic segment 配合 `generateStaticParams()` 在构建时生成所有语言变体。

### 国际化

- `lib/locale.ts` —— 语言列表、类型守卫、语言切换工具
- `lib/dictionaries.ts` —— 服务端字典加载器（`server-only`）
- `components/ui/LanguageToggle.tsx` —— 客户端语言切换，通过 pathname 替换实现

### SEO

- `layout.tsx` 生成完整 metadata（title、description、OG、Twitter card、alternates）
- `robots.ts` —— 允许所有爬虫
- `sitemap.ts` —— 自动生成所有路由的站点地图
- `manifest.ts` —— PWA manifest

### 错误处理

- `app/error.tsx` —— 全局错误边界，带 "Try again" 重置按钮
- `app/[lang]/not-found.tsx` —— 语言范围内的 404
- `app/not-found.tsx` —— 全局 404（语言不匹配时）

### 性能

- `next.config.ts` 中配置了图片格式（avif/webp）和 HTTP 安全头
- `loading.tsx` 提供骨架屏
- Globe 使用 `requestAnimationFrame` 自驱动，避免不必要的重渲染

## 扩展指南

### 添加新页面

1. 在 `app/[lang]/` 下创建 `newpage/page.tsx`
2. 在字典 JSON 中添加对应文案
3. 在 `Navbar` 的 links 数组中添加导航项
4. 在 `sitemap.ts` 的 `routes` 数组中添加路径

### 添加新语言

1. 在 `lib/locale.ts` 的 `locales` 数组中添加语言代码
2. 创建 `lib/dictionaries/{lang}.json`
3. 在 `layout.tsx` 的 `alternates.languages` 中添加映射
4. 如有需要，在 `layout.tsx` 中添加对应字体

### 添加新组件

按功能放入对应目录：
- `layout/` —— 出现在每个页面的布局元素
- `sections/` —— 页面中的独立区块
- `effects/` —— 视觉/动画效果
- `ui/` —— 可复用的基础控件
