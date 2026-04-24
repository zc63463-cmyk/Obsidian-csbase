---
title: "Strassen算法"
type: concept
chapter: "第4章 分治策略"
tags: [算法导论, 矩阵运算, 分治策略]
sources: ["CLRS 4th ed., Section 4.2"]
date: 2026-04-22
related: ["[[4.2 Strassen算法]]", "[[4.1 矩阵乘法]]"]
aliases: [Strassen's Algorithm]
---
# Strassen算法

> [!abstract] 概述
> ==Strassen算法== 通过巧妙的子矩阵组合，将两个 $n \times n$ 矩阵乘法从 $O(n^3)$ 降至 $O(n^{\lg 7}) \approx O(n^{2.81})$，是分治策略降低递归乘法次数的经典案例。

## 定义

> [!def] Strassen算法
> 将两个 $n \times n$ 矩阵各分为4个 $(n/2) \times (n/2)$ 子矩阵，通过**7次**递归乘法（而非朴素分治的8次）和若干加法运算完成乘法计算。

## 核心性质

- **递归关系**：$T(n) = 7T(n/2) + \Theta(n^2)$，其中 $\Theta(n^2)$ 来源于子矩阵的加减运算
- **时间复杂度**：由[[算法导论/concepts/主定理]]情形1，$T(n) = \Theta(n^{\lg 7}) \approx \Theta(n^{2.8074})$
- **关键思想**：通过代数恒等式，将8次乘法减少为7次，以增加加减法为代价换取乘法次数的降低
- **10次加/减法**：每次递归需要执行10次 $(n/2) \times (n/2)$ 矩阵的加法或减法
- **实际阈值**：当 $n$ 足够大时Strassen算法优于朴素算法，但对小矩阵有较大常数开销，实际实现中常设递归基的阈值

## 章节扩展

### 第4章：Strassen算法是[[4.1 矩阵乘法]]分治思想的改进，展示了减少递归分支数如何直接降低整体复杂度。其思想启发了后续更快的矩阵乘法算法（如Coppersmith-Winograd算法）。

## 参见

- [[4.2 Strassen算法]] — Strassen算法的详细步骤
- [[4.1 矩阵乘法]] — 朴素矩阵乘法与分治基线
- [[算法导论/concepts/主定理]] — 用于分析Strassen算法的递归关系
- [[算法导论/concepts/算法与硬件]] — Strassen算法加速超越摩尔定律的实例
