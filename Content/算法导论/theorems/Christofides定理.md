---
title: Christofides定理
type: theorem
tags: [离散数学, 算法, 近似算法, 图论, TSP]
date: 2026-04-24
aliases: [Christofides Algorithm, 3/2-Approximation for Metric TSP]
related:
  - [[离散数学/concepts/贪心算法]]
  - [[离散数学/concepts/哈密顿路径]]
source_chapter: "Ch35"
---

# Christofides定理

> [!abstract] 概述
> ==Christofides定理==（Christofides' Theorem）：对于满足三角不等式的旅行商问题（metric TSP），Christofides算法可以找到一个代价不超过最优TSP回路 $3/2$ 倍的哈密顿回路，即给出 $3/2$-近似解。

## 定理陈述

> [!def] 形式化陈述
>
> 设 $G = (V, E)$ 是完全图，边权函数 $c: E \to \mathbb{R}^+$ 满足**三角不等式**：
> $$c(u, w) \leq c(u, v) + c(v, w), \quad \forall u, v, w \in V$$
>
> 设 $OPT$ 为最优TSP回路的总权重。Christofides算法输出的哈密顿回路 $H$ 满足：
> $$c(H) \leq \frac{3}{2} \cdot OPT$$
>
> 该算法是多项式时间可执行的，时间复杂度主要由最小权完美匹配步骤决定。

## Christofides算法步骤

1. **构造最小生成树** $T$：在 $G$ 上计算MST，权重 $c(T) \leq OPT$
2. **识别奇度顶点**：$T$ 中所有度数为奇数的顶点构成集合 $O$（$|O|$ 必为偶数）
3. **最小权完美匹配** $M$：在 $O$ 上计算最小权完美匹配，权重 $c(M) \leq OPT / 2$
4. **构造欧拉多重图** $H' = T \cup M$：$H'$ 中每个顶点的度数均为偶数，故存在欧拉回路
5. **Shortcut得到哈密顿回路** $H$：沿欧拉回路遍历，利用三角不等式跳过已访问顶点

## 证明概要

> [!info] 证明思路
>
> 证明分为三个关键引理，分别界定MST权重、匹配权重和shortcut代价：
>
> ### 引理1：$c(T) \leq OPT$
>
> - 从最优TSP回路中删除任意一条边，得到一条生成树（哈密顿路径）
> - MST是最小权生成树，故 $c(T) \leq$ 任意生成树的权重 $\leq OPT$
>
> ### 引理2：$c(M) \leq OPT / 2$
>
> - 设最优TSP回路为 $C^*$，将 $C^*$ 中 $O$ 内的顶点按 $C^*$ 上的顺序排列为 $v_1, v_2, \ldots, v_{2k}$
> - 考虑 $C^*$ 上的两种匹配：
>   - $M_1 = \{(v_1, v_2), (v_3, v_4), \ldots, (v_{2k-1}, v_{2k})\}$
>   - $M_2 = \{(v_2, v_3), (v_4, v_5), \ldots, (v_{2k}, v_1)\}$
> - $M_1$ 和 $M_2$ 都是 $O$ 上的完美匹配
> - $c(M_1) + c(M_2) = c(C^*) = OPT$（因为 $M_1 \cup M_2$ 恰好覆盖 $C^*$ 上所有边）
> - 因此 $\min\{c(M_1), c(M_2)\} \leq OPT / 2$
> - $M$ 是最小权完美匹配，故 $c(M) \leq \min\{c(M_1), c(M_2)\} \leq OPT / 2$
>
> ### 引理3：$c(H) \leq c(H')$
>
> - $H'$ 是欧拉多重图，存在欧拉回路遍历每条边恰好一次
> - 欧拉回路总权重 $c(H') = c(T) + c(M)$
> - 利用三角不等式进行shortcut：当欧拉回路经过已访问顶点时，直接跳到下一个未访问顶点
> - 由三角不等式，shortcut不会增加总权重：$c(H) \leq c(H')$
>
> ### 综合结论
>
> $$c(H) \leq c(H') = c(T) + c(M) \leq OPT + \frac{OPT}{2} = \frac{3}{2} \cdot OPT$$
>
> **参考资源**：
> - Cornell CS6820 Christofides算法分析：http://www.cs.cornell.edu/courses/cs6820/2022fa/Handouts/Christofides.pdf
> - Princeton近似算法讲义：https://www.cs.princeton.edu/~wayne/cs423/lectures/approx-alg.pdf
> - UIUC CS598CSC近似算法课程：https://courses.grainger.illinois.edu/cs598csc/sp2009/lectures/lecture_2.pdf

## 关键推论

- **紧致性**：$3/2$ 的近似比是紧的——存在实例使得Christofides算法恰好达到 $3/2 \cdot OPT$
- **P=NP暗示**：若P=NP，则可在多项式时间内精确求解metric TSP，但Christofides的 $3/2$-近似仍是P!=NP假设下最好的多项式时间保证之一
- **超越Christofides**：2011年Svensson、Tarnawski、Vegh等人的工作对特殊情形改进了近似比，但一般metric TSP的 $3/2$-近似仍是经典最优

## 应用场景

在算法导论（CLRS）Ch35近似算法中的具体应用：

1. **旅行商问题的实际求解**：当问题规模较大且需要多项式时间保证时，Christofides算法是metric TSP的标准近似方法
2. **VLSI布线**：芯片设计中需要找到访问一组焊盘的最短路径，距离满足欧几里得距离的三角不等式
3. **物流配送**：快递配送路线规划中，城市间距离满足三角不等式
4. **[[离散数学/concepts/贪心算法]]**：Christofides算法中的MST步骤使用了贪心策略（Kruskal或Prim算法）

## 参见

- [[离散数学/concepts/贪心算法]]
- [[离散数学/concepts/哈密顿路径]]
- [[离散数学/concepts/图论]]
- [[离散数学/concepts/连通图]]
- [[离散数学/concepts/树图]]
