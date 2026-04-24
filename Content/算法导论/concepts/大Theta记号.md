---
title: "大Theta记号"
type: concept
chapter: "第3章 运行时间刻画"
tags: [算法导论, 渐近分析, 记号]
sources: ["CLRS 4th ed., Section 3.1"]
date: 2026-04-22
related: ["[[3.1 O记号、Ω记号与Θ记号]]", "[[2.2 算法分析]]"]
aliases: [Big-Theta Notation, Big Θ, Theta记号]
---
# 大Theta记号
> [!abstract] 概述
> ==大Theta记号== 给出函数的**渐近紧界**，同时提供上界和下界，是描述算法复杂度最精确的渐近记号。

## 定义
> [!def] 大Theta记号
> $$\Theta(g(n)) = \{f(n) : \exists\, c_1 > 0,\, \exists\, c_2 > 0,\, \exists\, n_0 > 0,\ \text{使得 } 0 \leq c_1 g(n) \leq f(n) \leq c_2 g(n),\ \forall\, n \geq n_0\}$$

## 核心性质
- $f(n) = \Theta(g(n))$ 当且仅当 $f(n) = O(g(n))$ **且** $f(n) = \Omega(g(n))$。
- $\Theta$ 记号刻画的是**等价增长率**：$f(n)$ 与 $g(n)$ 在渐近意义下同阶。
- 极限判别：若 $\lim_{n \to \infty} f(n)/g(n) = c$，其中 $0 < c < \infty$，则 $f(n) = \Theta(g(n))$。
- 归并排序的运行时间为 $\Theta(n \lg n)$，这是紧界——既不可能更快（下界），也不需要更慢（上界）。

## 章节扩展
### 第2章：入门
- [[2.2 算法分析]] 中使用 $\Theta$ 记号描述插入排序的最坏情况和最好情况运行时间。
### 第3章：运行时间刻画
- [[3.1 O记号、Ω记号与Θ记号]] 正式定义 $\Theta$ 记号并证明其与 $O$、$\Omega$ 的等价关系。

## 参见
- [[算法导论/concepts/渐近记号]]
- [[算法导论/concepts/大O记号]]
- [[算法导论/concepts/大Omega记号]]
