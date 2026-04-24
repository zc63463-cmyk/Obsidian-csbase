---
title: Erdős-Szekeres定理
type: theorem
tags: [离散数学, 计数, 组合数学]
date: 2026-04-24
aliases: [Erdős-Szekeres Theorem, Erdős-Szekeres Theorem on Monotone Subsequences, 单调子序列定理]
related:
  - "[[离散数学/concepts/鸽巢原理]]"
  - "[[离散数学/concepts/排列]]"
  - "[[离散数学/concepts/序列与求和]]"
source_chapter: "Ch6"
source_book: "离散数学（Rosen）"
---

# Erdős-Szekeres定理

> [!abstract] 概述
> ==Erdős-Szekeres定理==（Erdős-Szekeres Theorem）：任意由 $n^2 + 1$ 个不同实数组成的序列中，必存在长度为 $n + 1$ 的单调递增子序列或单调递减子序列。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Erdős & Szekeres, 1935）：设 $a_1, a_2, \ldots, a_{n^2+1}$ 是由 $n^2 + 1$ 个不同实数组成的序列，则该序列中必存在长度至少为 $n + 1$ 的严格递增子序列或严格递减子序列。

### 一般形式

更一般地，对任意正整数 $r, s$，由 $rs + 1$ 个不同实数组成的序列中，必存在长度为 $r + 1$ 的递增子序列或长度为 $s + 1$ 的递减子序列。

取 $r = s = n$ 即得到上述经典形式。

## 证明概要

> [!info] 证明思路
> 证明采用**Seidenberg鸽巢论证**（1959），优雅而简洁：

### 第一步：定义配对

对序列中每个位置 $i$（$1 \leq i \leq n^2 + 1$），定义有序对：
$$p_i = (a_i, d_i)$$
其中：
- $a_i$ = 以 $a_i$ 为结尾的**最长递增子序列**的长度
- $d_i$ = 以 $a_i$ 为结尾的**最长递减子序列**的长度

### 第二步：证明配对互不相同

**关键引理**：若 $i < j$ 且 $a_i < a_j$，则 $d_i > d_j$。

证明：设以 $a_i$ 结尾的最长递减子序列为 $S$。若 $d_i \leq d_j$，则在以 $a_j$ 结尾的最长递减子序列中，$a_i$ 可以接在 $a_j$ 前面（因为 $a_i < a_j$ 且 $i < j$），从而得到一条以 $a_i$ 结尾的、长度至少为 $d_j + 1$ 的递减子序列，与 $d_i$ 的定义矛盾。

类似地，若 $i < j$ 且 $a_i > a_j$，则 $a_i > a_j$（即 $a$ 值减小时 $d$ 值增大）。

因此，当 $i \neq j$ 时，$p_i \neq p_j$，即所有 $n^2 + 1$ 个配对互不相同。

### 第三步：应用鸽巢原理

假设结论不成立，即不存在长度为 $n + 1$ 的递增子序列，也不存在长度为 $n + 1$ 的递减子序列。

那么对每个 $i$，$1 \leq a_i \leq n$ 且 $1 \leq d_i \leq n$。

因此每个配对 $(a_i, d_i)$ 都取自集合 $\{1, 2, \ldots, n\} \times \{1, 2, \ldots, n\}$，该集合共有 $n^2$ 个元素。

但我们有 $n^2 + 1$ 个互不相同的配对，由[[鸽巢原理]]，至少有两个配对相同，矛盾。

### 参考文献
- Erdős, P. & Szekeres, G. (1935). A combinatorial problem in geometry. *Compositio Math.*, 2, 463-470.
- Seidenberg, A. (1959). A simple proof of a theorem of Erdős and Szekeres. *J. London Math. Soc.*, 34, 352.
- 证明详解: [LibreTexts - The Pigeon Hole Principle](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Combinatorics_(Keller_and_Trotter)/04%3A_Combinatorial_Basics/4.01%3A_The_Pigeon_Hole_Principle)
- Dilworth定理证明: [Erdős-Szekeres Theorem - en-academic](https://en-academic.com/dic.nsf/enwiki/1469660)

## 关键推论

- **推论1**：在任意 $n^2 + 1$ 人的队列中，总能找到 $n + 1$ 个人按身高递增或递减排列
- **推论2**：该定理与Dilworth定理（偏序集的链分解）密切相关——序列上的"小于"关系构成偏序，递增子序列对应链，递减子序列对应反链
- **推论3**：$n^2 + 1$ 是紧的（tight），即存在长度为 $n^2$ 的序列既不含长度为 $n + 1$ 的递增子序列，也不含长度为 $n + 1$ 的递减子序列（例如将 $\{1, 2, \ldots, n^2\}$ 按特定方式排列）

## 应用场景

- **排序算法分析**：该定理给出了比较排序的下界直觉——任何排序算法在最坏情况下需要 $\Omega(n \log n)$ 次比较
- **计算几何**：在点集的凸包问题中，Erdős-Szekeres定理保证足够大的点集中存在凸 $n$ 边形
- **Ramsey理论**：该定理是Ramsey理论的一个经典实例，展示了"足够大的结构中必然出现特定模式"的思想
- **偏序集理论**：通过Dilworth定理的桥梁，该定理在偏序集的宽度和链分解中有重要应用
- **数据压缩**：在序列编码和信息论中，单调子序列的存在性影响最优编码策略

## 参见

- [[离散数学/concepts/鸽巢原理]]
- [[离散数学/concepts/排列]]
- [[离散数学/concepts/序列与求和]]
- [[离散数学/concepts/组合]]
- [[离散数学/concepts/拉姆齐理论]]
