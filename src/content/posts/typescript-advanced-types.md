---
title: "TypeScript 高级类型技巧"
description: "掌握 TypeScript 的高级类型系统，让你的代码更安全、更优雅。本文介绍条件类型、模板字面量类型、映射类型等实用技巧。"
date: 2026-06-15
tags: ["TypeScript", "前端"]
---

## 类型即文档

TypeScript 的强大之处在于它的类型系统。当你在编写代码时，类型既是约束，也是最好的文档。

### 条件类型

条件类型允许你根据类型关系创建新类型：

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>;      // false
```

### 模板字面量类型

TypeScript 4.1 引入的模板字面量类型让字符串类型的操作变得非常灵活：

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<'click'>; // 'onClick'
type ChangeEvent = EventName<'change'>; // 'onChange'
```

### 映射类型

映射类型可以基于已有类型创建新类型：

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }
```

### infer 关键字

`infer` 关键字在条件类型中用于推断类型：

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet() { return 'hello'; }
type GreetReturn = ReturnType<typeof greet>; // string
```

## 实践建议

- 优先使用 `interface` 定义对象类型，用 `type` 定义联合类型和工具类型
- 善用 `satisfies` 操作符进行类型检查而不改变推断类型
- 合理使用泛型约束（`extends`）来限制类型参数范围

掌握这些技巧，你的 TypeScript 代码将更上一层楼。
