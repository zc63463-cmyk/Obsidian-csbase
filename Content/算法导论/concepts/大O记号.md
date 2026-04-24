---
title: "大O记号"
type: concept
chapter: "第3章 运行时间刻画"
tags: [算法导论, 渐近分析, 记号]
sources: ["CLRS 4th ed., Section 3.1"]
date: 2026-04-22
related: ["[[3.1 O记号、Ω记号与Θ记号]]"]
aliases: [Big-O Notation, Big O]
---
# 大O记号
> [!abstract] 概述
> ==大O记号== 给出函数的**渐近上界**，是最常用的算法复杂度描述工具。

## 定义
> [!def] 大O记号
> $$O(g(n)) = \{f(n) : \exists\, c > 0,\, \exists\, n_0 > 0,\ \text{使得 } 0 \leq f(n) \leq c \cdot g(n),\ \forall\, n \geq n_0\}$$
> 读作 "$f(n)$ 是 $g(n)$ 的大O"。

## 核心性质
- $O(g(n))$ 是一个**函数集合**，习惯上写 $f(n) = O(g(n))$ 而非 $f(n) \in O(g(n))$。
- $O$ 记号给出的是**上界**，不一定是紧界：$n = O(n^2)$ 成立，但 $n^2$ 不是 $n$ 的紧界。
- 常见等式：$O(1)$（常数）、$O(\lg n)$（对数）、$O(n)$（线性）、$O(n \lg n)$（线性对数）、$O(n^2)$（二次）、$O(2^n)$（指数）。
- 极限判别：若 $\lim_{n \to \infty} f(n)/g(n)$ 存在且有限，则 $f(n) = O(g(n))$。

## 章节扩展
### 第3章：运行时间刻画
- [[3.1 O记号、Ω记号与Θ记号]] 给出 $O$ 记号的形式化定义与基本性质。

## 参见
- [[算法导论/concepts/渐近记号]]
- [[算法导论/concepts/大Omega记号]]
- [[算法导论/concepts/大Theta记号]]
