---
title: "Quickselect"
type: concept
chapter: "第9章 中位数与序统计"
tags: [算法导论, 选择算法, 随机化算法]
sources: ["CLRS 4th ed., Section 9.2"]
date: 2026-04-22
related: ["[[9.2 期望线性时间选择]]"]
aliases: [RANDOMIZED-SELECT, Hoare选择算法]
---
# Quickselect

> [!abstract] 概述
> ==Quickselect==（RANDOMIZED-SELECT）是由 Hoare 于 1961 年发明的随机化选择算法。它基于快速排序的 PARTITION 操作，但只递归处理一侧子数组，期望运行时间为 $\Theta(n)$，最坏情况为 $\Theta(n^2)$。

## 定义

> [!def] Quickselect（RANDOMIZED-SELECT）
> RANDOMIZED-SELECT$(A, p, r, i)$ 在子数组 $A[p..r]$ 中找到第 $i$ 小的元素：
> 1. 若 $p = r$，则返回 $A[p]$（基础情形）。
> 2. 随机选择一个主元 $q = \text{RANDOMIZED-PARTITION}(A, p, r)$。
> 3. $k = q - p + 1$（主元是第 $k$ 小的元素）。
> 4. 若 $i = k$，返回 $A[q]$（恰好是主元）。
> 5. 若 $i < k$，在左子数组递归：RANDOMIZED-SELECT$(A, p, q-1, i)$。
> 6. 若 $i > k$，在右子数组递归：RANDOMIZED-SELECT$(A, q+1, r, i-k)$。

## 核心性质

- **只递归一侧**：与快速排序不同，Quickselect 每次只递归处理包含目标元素的那一侧，因此期望时间复杂度为 $\Theta(n)$（而非 $\Theta(n \lg n)$）。
- **期望线性时间**：期望递归式为 $T(n) \leq T(n/2) + O(n)$，由主定理可得 $T(n) = O(n)$。
- **最坏情况**：当每次 PARTITION 都产生极度不平衡的划分时（如每次主元都是最小或最大），退化为 $T(n) = T(n-1) + \Theta(n) = \Theta(n^2)$。
- **原地算法**：不需要额外空间，空间复杂度为 $O(1)$（迭代版本）或 $O(\lg n)$（递归栈）。
- **实际应用**：C++ STL 中的 `std::nth_element` 通常基于 Quickselect 或其变体实现。

## 章节扩展

### 第9章：中位数与序统计

- [[9.2 期望线性时间选择]] RANDOMIZED-SELECT 的完整描述与分析。

## 参见

- [[算法导论/concepts/快速排序]]
- [[算法导论/concepts/BFPRT算法]]
