---
title: "大Omega记号"
type: concept
chapter: "第3章 运行时间刻画"
tags: [算法导论, 渐近分析, 记号]
sources: ["CLRS 4th ed., Section 3.1"]
date: 2026-04-22
related: ["[[3.1 O记号、Ω记号与Θ记号]]"]
aliases: [Big-Omega Notation, Big Ω]
---
# 大Omega记号
> [!abstract] 概述
> ==大Omega记号== 给出函数的**渐近下界**，与 [[算法导论/concepts/大O记号]] 对称，描述算法至少需要多少资源。

## 定义
> [!def] 大Omega记号
> $$\Omega(g(n)) = \{f(n) : \exists\, c > 0,\, \exists\, n_0 > 0,\ \text{使得 } 0 \leq c \cdot g(n) \leq f(n),\ \forall\, n \geq n_0\}$$
> 读作 "$f(n)$ 是 $g(n)$ 的大Omega"。

## 核心性质
- $\Omega(g(n))$ 是一个**函数集合**，$f(n) = \Omega(g(n))$ 表示 $f(n)$ 的增长**至少和** $g(n)$ 一样快。
- $\Omega$ 给出的是**下界**，不一定是紧界：$n^2 = \Omega(n)$ 成立，但 $n$ 不是 $n^2$ 的紧下界。
- 与 $O$ 记号的对偶关系：$f(n) = \Omega(g(n))$ 当且仅当 $g(n) = O(f(n))$。
- 极限判别：若 $\lim_{n \to \infty} f(n)/g(n) > 0$（含 $= \infty$），则 $f(n) = \Omega(g(n))$。

## 章节扩展
### 第3章：运行时间刻画
- [[3.1 O记号、Ω记号与Θ记号]] 给出 $\Omega$ 记号的形式化定义，并与 $O$ 记号对比讨论。

## 参见
- [[算法导论/concepts/渐近记号]]
- [[算法导论/concepts/大O记号]]
- [[算法导论/concepts/大Theta记号]]
