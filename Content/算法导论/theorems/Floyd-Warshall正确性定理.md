---
title: Floyd-Warshall正确性定理
type: theorem
tags: [离散数学, 算法, 动态规划, 图算法, 最短路径]
date: 2026-04-24
aliases: [Floyd-Warshall Correctness Theorem]
related:
  - [[离散数学/concepts/动态规划]]
source_chapter: "Ch23"
---

# Floyd-Warshall正确性定理

> [!abstract] 概述
> ==Floyd-Warshall正确性定理==（Floyd-Warshall Correctness Theorem）：Floyd-Warshall算法正确计算带权有向图中所有结点对之间的最短路径权重，即使图中存在负权边（但不含负权回路）。

## 定理陈述

> [!def] 形式化陈述
> **定理**：给定带权有向图 $G = (V, E)$，其权重函数 $w: E \to \mathbb{R}$ 不包含负权回路。设 $V = \{1, 2, \ldots, n\}$，对每个顶点对 $i, j \in V$，定义 $d_{ij}^{(k)}$ 为从顶点 $i$ 到顶点 $j$ 的、且**只使用**顶点集合 $\{1, 2, \ldots, k\}$ 中的顶点作为中间顶点的最短路径权重。则 Floyd-Warshall 算法计算出的 $d_{ij}^{(n)}$ 等于从 $i$ 到 $j$ 的最短路径权重 $\delta(i, j)$。
>
> 递推关系为：
> $$d_{ij}^{(k)} = \begin{cases} w_{ij} & \text{若 } k = 0 \\ \min\left(d_{ij}^{(k-1)},\; d_{ik}^{(k-1)} + d_{kj}^{(k-1)}\right) & \text{若 } k \geq 1 \end{cases}$$

## 证明概要

> [!info] 证明思路
> 证明采用**三重归纳法**（对 $k$ 进行归纳），核心思想是将"允许使用更多中间顶点"的最短路径分解为子问题。

### 归纳结构

**归纳基础（$k = 0$）**：当 $k = 0$ 时，不允许使用任何中间顶点。$d_{ij}^{(0)} = w_{ij}$（若边 $(i,j)$ 存在）或 $d_{ij}^{(0)} = \infty$（若边不存在）。这显然等于从 $i$ 到 $j$ 且不经过中间顶点的最短路径权重。基础成立。

**归纳假设**：假设对所有顶点对 $(i, j)$，$d_{ij}^{(k-1)}$ 正确等于只使用 $\{1, \ldots, k-1\}$ 作为中间顶点的最短路径权重。

**归纳步骤（$k \geq 1$）**：考虑从 $i$ 到 $j$ 且只使用 $\{1, \ldots, k\}$ 作为中间顶点的最短路径 $P$。分两种情况：

1. **$P$ 不经过顶点 $k$**：则 $P$ 只使用 $\{1, \ldots, k-1\}$ 中的中间顶点，其权重为 $d_{ij}^{(k-1)}$。

2. **$P$ 经过顶点 $k$**：将 $P$ 分解为 $i \leadsto k \leadsto j$（其中 $\leadsto$ 表示子路径）。由于 $P$ 是简单路径（无负权回路保证），子路径 $i \leadsto k$ 的中间顶点只来自 $\{1, \ldots, k-1\}$（否则 $k$ 会在路径中出现两次），子路径 $k \leadsto j$ 同理。因此路径权重为 $d_{ik}^{(k-1)} + d_{kj}^{(k-1)}$。

取两种情况的最小值，即得 $d_{ij}^{(k)} = \min(d_{ij}^{(k-1)},\; d_{ik}^{(k-1)} + d_{kj}^{(k-1)})$。归纳成立。

### 正确性关键观察

- **路径分解的有效性**：最短路径 $P$ 若经过 $k$，则 $k$ 恰好出现一次（因为负权回路不存在，最短路径一定是简单路径），因此分解 $P = i \leadsto k \leadsto j$ 是良定义的。
- **子路径的最优性**：由最优子结构性质，$P$ 的子路径 $i \leadsto k$ 和 $k \leadsto j$ 本身也是最短路径（使用中间顶点集 $\{1, \ldots, k-1\}$）。
- **归纳终点的完备性**：$d_{ij}^{(n)}$ 允许使用所有 $n$ 个顶点作为中间顶点，因此等于无限制的最短路径 $\delta(i, j)$。

### 算法伪代码

```
FLOYD-WARSHALL(W)
1  n ← W.rows
2  D^(0) ← W
3  for k ← 1 to n
4      for i ← 1 to n
5          for j ← 1 to n
6              d_{ij}^{(k)} ← min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)})
7  return D^(n)
```

算法使用三重嵌套循环，每层遍历所有 $n$ 个顶点，总时间复杂度为 $\Theta(n^3) = \Theta(V^3)$。通过原地更新（$D^{(k)}$ 覆盖 $D^{(k-1)}$），空间复杂度为 $\Theta(n^2) = \Theta(V^2)$。

**参考文献**：
- CLRS 第4版，第23.2节 "All-pairs shortest paths"
- Stanford CS161 Lecture Notes: https://stanford-cs161.github.io/winter2026/assets/files/lecture12-notes.pdf
- UMD CMSC451 Notes: http://www.cs.umd.edu/class/spring2017/cmsc451/fw.pdf

## 关键推论

- **负权边检测**：若算法结束后 $d_{ii} < 0$ 对某个 $i$ 成立，则图中存在经过 $i$ 的负权回路。
- **路径重构**：通过维护前驱矩阵 $\pi^{(k)}$，可以在 $O(n^3)$ 时间内重构所有最短路径的具体路径。
- **传递闭包**：将权重替换为布尔值（0/1），Floyd-Warshall 可用于计算图的传递闭包，时间 $O(n^3)$。
- **与动态规划的关系**：Floyd-Warshall 是动态规划的经典应用，其子问题空间为三维 $(i, j, k)$，但通过原地更新（$k$ 层可覆盖）将空间从 $O(n^3)$ 优化到 $O(n^2)$。

## 应用场景

在算法导论中的具体应用：

1. **所有结点对最短路径**（Ch23）：Floyd-Warshall 是解决稠密图上所有结点对最短路径问题的标准算法，时间复杂度 $\Theta(V^3)$，空间 $\Theta(V^2)$。适用于 $V$ 较小或图较稠密的场景。
2. **传递闭包计算**：将 Floyd-Warshall 的 $\min$ 运算替换为逻辑或（OR），加法替换为逻辑与（AND），即可在 $\Theta(V^3)$ 时间内计算有向图的传递闭包。
3. **网络路由**：在计算机网络中，Floyd-Warshall 可用于预计算所有路由器对之间的最短路径（距离向量路由协议的理论基础之一）。
4. **图论中的距离度量**：计算有向图的直径（所有结点对最短路径的最大值）。

## 参见

- [[离散数学/concepts/动态规划]]
- [[离散数学/concepts/图论]]
- [[离散数学/concepts/贪心算法]]
