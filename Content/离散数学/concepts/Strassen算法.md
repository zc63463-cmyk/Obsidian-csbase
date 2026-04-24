---
title: Strassen算法
type: concept
tags: [离散数学, 算法, 矩阵运算, 分治]
date: 2026-04-24
aliases: [Strassen's Algorithm, Strassen矩阵乘法]
related:
  - "[[离散数学/concepts/分治法]]"
  - "[[离散数学/concepts/主定理]]"
  - "[[离散数学/concepts/矩阵乘法]]"
  - "[[离散数学/concepts/矩阵]]"
---

# Strassen算法

> [!abstract] 概述
> ==Strassen 算法==（Strassen's Algorithm）是 Volker Strassen 于 1969 年提出的[[离散数学/concepts/分治法|分治]][[离散数学/concepts/矩阵乘法|矩阵乘法]]算法。其核心创新是将两个 $2 \times 2$ 矩阵相乘所需的==乘法次数从 8 次减少为 7 次==，通过递归应用将时间复杂度从朴素 $\Theta(n^3)$ 降低到 $O(n^{\lg 7}) \approx O(n^{2.81})$。这是第一个打破 $O(n^3)$ 壁垒的矩阵乘法算法。

## 定义

> [!def] Strassen 算法（Strassen's Algorithm）
>
> 将两个 $n \times n$ 矩阵 $A$ 和 $B$ 各分为 4 个 $(n/2) \times (n/2)$ 的子矩阵：
>
> $$A = \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}, \quad B = \begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix}$$
>
> 朴素方法需要 8 次子矩阵乘法和 4 次加法。Strassen 算法只做 **7 次**乘法（和 18 次加/减法），构造 7 个中间矩阵：
>
> $$\begin{aligned} P_1 &= A_{11}(B_{12} - B_{22}) \\ P_2 &= (A_{11} + A_{12})B_{22} \\ P_3 &= (A_{21} + A_{22})B_{11} \\ P_4 &= A_{22}(B_{21} - B_{11}) \\ P_5 &= (A_{11} + A_{22})(B_{11} + B_{22}) \\ P_6 &= (A_{12} - A_{22})(B_{21} + B_{22}) \\ P_7 &= (A_{11} - A_{21})(B_{11} + B_{12}) \end{aligned}$$
>
> 最终结果：
>
> $$\begin{aligned} C_{11} &= P_5 + P_4 - P_2 + P_6 \\ C_{12} &= P_1 + P_2 \\ C_{21} &= P_3 + P_4 \\ C_{22} &= P_5 + P_1 - P_3 - P_7 \end{aligned}$$

## 核心性质

| 性质 | 描述 | 备注 |
|:-----|:-----|:-----|
| ==乘法次数== | 7 次（而非朴素 8 次） | 每次递归减少 1 次乘法 |
| ==加法次数== | 18 次加/减法（多于朴素的 4 次） | 加法代价低于乘法 |
| ==时间复杂度== | $T(n) = 7T(n/2) + \Theta(n^2) = O(n^{\lg 7})$ | 由[[离散数学/concepts/主定理|主定理]]情形一得出 |
| ==实际指数== | $\lg 7 \approx 2.807$ | 优于 $n^3$，劣于 $n^{2.376}$ |
| ==历史意义== | 第一个打破 $O(n^3)$ 壁垒的矩阵乘法算法 | 1969 年提出，开创了快速矩阵乘法领域 |

## 复杂度分析

由[[离散数学/concepts/主定理|主定理]]分析递推关系 $T(n) = 7T(n/2) + \Theta(n^2)$：

- $a = 7$，$b = 2$，$n^{\log_b a} = n^{\lg 7} \approx n^{2.807}$
- $f(n) = \Theta(n^2) = O(n^{\lg 7 - \varepsilon})$，其中 $\varepsilon = \lg 7 - 2 \approx 0.807$
- 适用**情形一**：$T(n) = \Theta(n^{\lg 7})$

## 应用场景

- **大规模矩阵乘法**：当 $n$ 较大时，Strassen 算法优于朴素算法
- **理论意义**：证明了矩阵乘法可以亚立方时间完成
- **后续发展**：Coppersmith-Winograd 算法 $O(n^{2.376})$，目前最优 $O(n^{2.373})$

## 参见

- [[离散数学/concepts/分治法]] — Strassen 算法的设计策略
- [[离散数学/concepts/主定理]] — 分析 Strassen 算法复杂度的工具
- [[离散数学/concepts/矩阵乘法]] — 矩阵乘法的各种算法
- [[离散数学/concepts/矩阵]] — 矩阵的基本概念
