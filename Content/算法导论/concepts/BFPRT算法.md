---
title: "BFPRT算法"
type: concept
chapter: "第9章 中位数与序统计"
tags: [算法导论, 选择算法, 线性时间]
sources: ["CLRS 4th ed., Section 9.3"]
date: 2026-04-22
related: ["[[9.3 最坏情况线性时间选择]]"]
aliases: [SELECT算法, 中位数的中位数, Median of Medians]
---
# BFPRT算法

> [!abstract] 概述
> ==BFPRT算法==（SELECT）由 Blum、Floyd、Pratt、Rivest 和 Tarjan 于 1973 年提出，是最坏情况下 $\Theta(n)$ 时间的选择算法。它通过"中位数的中位数"策略保证每次划分至少消除 30% 的元素，从而确保线性时间复杂度。

## 定义

> [!def] BFPRT算法（SELECT）
> SELECT$(A, p, r, i)$ 在子数组 $A[p..r]$ 中找到第 $i$ 小的元素：
> 1. 将 $A[p..r]$ 分为 $\lceil n/5 \rceil$ 组，每组 5 个元素（最后一组可能不足 5 个）。
> 2. 对每组用插入排序找到其中位数。
> 3. 递归调用 SELECT 找到这些中位数的中位数 $x$（即"中位数的中位数"）。
> 4. 用 $x$ 作为主元执行 PARTITION，将数组分为 $A[p..q-1]$（$\leq x$）、$A[q]$（$= x$）、$A[q+1..r]$（$\geq x$）。
> 5. 类似 Quickselect，根据 $k = q - p + 1$ 与 $i$ 的关系决定递归方向。

## 核心性质

- **中位数的中位数保证**：以 $x$ 为主元时，至少有 $\lceil \lceil n/5 \rceil / 2 \rceil - 2 \geq 3n/10 - 6$ 个元素严格小于 $x$，同理至少有这么多元素严格大于 $x$。即每次划分至少消除约 30% 的元素。
- **最坏情况线性时间**：递归式为 $T(n) \leq T(\lceil n/5 \rceil) + T(7n/10 + 6) + O(n) = O(n)$。由代入法可严格证明。
- **常数因子大**：由于分组、排序每组、递归找中位数的中位数等开销，BFPRT 在实际中比 Quickselect 慢 5-10 倍，因此工程中更常用 Quickselect。
- **理论意义**：BFPRT 证明了选择问题可以在最坏情况下 $\Theta(n)$ 内解决，是算法理论的重要成果。

## 章节扩展

### 第9章：中位数与序统计

- [[9.3 最坏情况线性时间选择]] SELECT 算法的完整描述、正确性证明与复杂度分析。

## 参见

- [[算法导论/concepts/Quickselect]]
- [[算法导论/concepts/分治法]]
