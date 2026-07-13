---
title: "使用 Astro 构建高性能博客"
description: "Astro 是一个现代化的静态站点生成器，支持多种前端框架。本文介绍如何用 Astro 快速搭建一个高性能博客。"
date: 2026-07-10
tags: ["Astro", "前端", "博客"]
---

## 为什么选择 Astro？

Astro 是近年来最令人兴奋的前端工具之一。它的核心理念是 **"默认零 JavaScript"** ——意味着只有在必要时才向浏览器发送 JS 代码。

### Islands 架构

Astro 提出了 **Islands Architecture（岛屿架构）** 的概念：

- 页面的大部分内容是**静态 HTML**，不需要 JavaScript
- 只有交互性强的部分（如评论区、搜索框）才作为"岛屿"加载 JS
- 每个岛屿独立加载，互不影响

### 核心特性

1. **多框架支持**：可以在同一项目中混合使用 React、Vue、Svelte 等组件
2. **优秀的性能**：默认零 JS 策略，首屏加载速度极快
3. **内容驱动**：内置 Markdown 和 MDX 支持，非常适合博客和文档站点
4. **灵活的部署**：可以部署到任何静态托管平台

```js
// 在 Astro 中使用 React 组件
import Counter from '../components/Counter.tsx';

<Layout>
  <h1>Hello Astro + React!</h1>
  <Counter client:load />
</Layout>
```

## 快速上手

安装 Astro 只需要一条命令：

```bash
npm create astro@latest
```

选择你需要的配置选项，几分钟内就能启动一个开发服务器。

## 总结

Astro 是现代 Web 开发的一股清流。它让你专注于内容，同时又不会限制使用任何前端框架。如果你正在考虑搭建个人博客或文档站点，Astro 绝对值得一试。
