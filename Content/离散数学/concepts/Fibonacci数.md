---
title: Fibonacci数
type: concept
tags: [离散数学, 算法, 递归, 数学]
date: 2026-04-24
aliases: [Fibonacci Numbers, 斐波那契数, 斐波那契数列]
related:
  - "[[离散数学/concepts/递归关系式]]"
  - "[[离散数学/concepts/特征方程]]"
  - "[[离散数学/concepts/动态规划]]"
  - "[[离散数学/concepts/递归定义]]"
---

# Fibonacci数

> [!abstract] 概述
> ==Fibonacci 数==（Fibonacci Numbers）是由递推关系 $F(n) = F(n-1) + F(n-2)$ 定义的整数序列，初始条件为 $F(0) = 0$，$F(1) = 1$。Fibonacci 数的增长速率约为 $\phi^n$（$\phi = (1+\sqrt{5})/2$ 为黄金比例）。在算法分析中，Fibonacci 数常作为递归算法的示例，展示从朴素递归 $O(\phi^n)$ 到[[离散数学/concepts/动态规划|动态规划]] $O(n)$ 再到矩阵幂 $O(\log n)$ 的优化过程。

## 定义

> [!def] Fibonacci 数（Fibonacci Numbers）
>
> ==Fibonacci 数列==由以下递推关系定义：
>
> $$F(n) = \begin{cases} 0 & n = 0 \\ 1 & n = 1 \\ F(n-1) + F(n-2) & n \geq 2 \end{cases}$$
>
> 前若干项：$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots$

> [!def] Binet 公式（闭式解）
>
> 通过[[离散数学/concepts/特征方程|特征方程]]求解递推关系，得到闭式解：
>
> $$F(n) = \frac{\phi^n - \hat{\phi}^n}{\sqrt{5}}$$
>
> 其中 $\phi = \frac{1+\sqrt{5}}{2} \approx 1.618$（黄金比例），$\hat{\phi} = \frac{1-\sqrt{5}}{2} \approx -0.618$。
>
> 由于 $|\hat{\phi}| < 1$，当 $n$ 较大时 $F(n) \approx \phi^n / \sqrt{5}$。

## 核心性质

| 性质 | 描述 | 备注 |
|:-----|:-----|:-----|
| ==增长速率== | $F(n) = \Theta(\phi^n)$，$\phi \approx 1.618$ | 指数增长 |
| ==黄金比例== | $\lim_{n \to \infty} F(n+1)/F(n) = \phi$ | 黄金比例的来源 |
| ==加法恒等式== | $F(n) = F(k)F(n-k+1) + F(k-1)F(n-k)$ | 对任意 $1 \leq k \leq n$ |
| ==与矩阵的关系== | $\begin{pmatrix}1&1\\1&0\end{pmatrix}^n = \begin{pmatrix}F(n+1)&F(n)\\F(n)&F(n-1)\end{pmatrix}$ | 矩阵幂方法的基础 |

## 计算 Fibonacci 数的算法对比

| 方法 | 时间复杂度 | 空间复杂度 | 描述 |
|:-----|:-----------|:-----------|:-----|
| 朴素递归 | $O(\phi^n) \approx O(1.618^n)$ | $O(n)$（递归栈） | 重复计算大量子问题 |
| [[离散数学/concepts/动态规划|自底向上 DP]] | $O(n)$ | $O(1)$ | 迭代计算，只保留前两项 |
| 记忆化递归 | $O(n)$ | $O(n)$ | 递归 + 缓存 |
| 矩阵幂 | $O(\log n)$ | $O(1)$ | 利用矩阵幂的快速幂算法 |
| Binet 公式 | $O(1)$（浮点运算） | $O(1)$ | 浮点精度有限 |

## 应用场景

- **算法教学**：展示递归、动态规划、矩阵幂等概念的经典示例
- **[[离散数学/concepts/递归关系式|递推关系]]分析**：Fibonacci 递推是算法分析中最常见的递推关系之一
- **算法复杂度下界**：某些递归算法的最坏情况复杂度与 Fibonacci 数相关
- **数据结构**：Fibonacci 堆（Fibonacci Heap）的合并操作
- **数学应用**：黄金比例、植物叶序、兔子繁殖模型

## 参见

- [[离散数学/concepts/递归关系式]] — Fibonacci 递推是递推关系的经典示例
- [[离散数学/concepts/特征方程]] — 求解 Fibonacci 递推的代数方法
- [[离散数学/concepts/动态规划]] — DP 优化 Fibonacci 计算的典型示例
- [[离散数学/concepts/递归定义]] — Fibonacci 数的递归定义
