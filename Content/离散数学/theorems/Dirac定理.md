---
title: Dirac定理
type: theorem
tags: [离散数学, 图论, 哈密顿回路]
date: 2026-04-24
aliases: [Dirac's Theorem, Dirac's Theorem on Hamiltonian Cycles]
related:
  - "[[离散数学/concepts/哈密顿路径]]"
  - "[[离散数学/concepts/完全图]]"
  - "[[离散数学/concepts/图论]]"
source_chapter: "Ch10"
source_book: "离散数学（Rosen）"
---

# Dirac定理

> [!abstract] 概述
> ==Dirac定理==（Dirac's Theorem）：若简单图 $G$ 有 $n \geq 3$ 个顶点且每个顶点的度数 $\deg(v) \geq n/2$，则 $G$ 中存在一条哈密顿回路。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Dirac, 1952）：设 $G = (V, E)$ 是一个简单图，$|V| = n \geq 3$。若对 $G$ 中每个顶点 $v$ 都有 $\deg(v) \geq n/2$，则 $G$ 中存在一条[[哈密顿路径|哈密顿回路]]。

### 条件说明
- **简单图**：无自环、无重边的无向图
- **度数条件**：$\delta(G) \geq \lceil n/2 \rceil$，即最小度不低于 $n/2$
- **结论**：$G$ 是哈密顿图（存在经过每个顶点恰好一次的回路）

## 证明概要

> [!info] 证明思路
> 证明采用**最长路径论证法**（longest path argument），核心思想如下：

### 第一步：取最长路径

设 $P = v_1 v_2 \cdots v_k$ 是 $G$ 中一条**最长的路径**（即无法再向两端延伸的路径）。由于 $P$ 是最长的，$v_1$ 和 $v_k$ 的所有邻接点都必须在 $P$ 上。

### 第二步：分析端点邻接关系

定义两个集合：
$$S = \{i : v_1 v_{i+1} \in E, \; 1 \leq i \leq k-1\}$$
$$T = \{i : v_i v_k \in E, \; 2 \leq i \leq k\}$$

由于 $\deg(v_1) \geq n/2$ 且 $\deg(v_k) \geq n/2$，有 $|S| \geq n/2$，$|T| \geq n/2$。

### 第三步：利用鸽巢原理

$S$ 和 $T$ 都是 $\{1, 2, \ldots, k-1\}$ 的子集，且 $|S| + |T| \geq n \geq k$。由鸽巢原理，$S \cap T \neq \emptyset$。

设 $j \in S \cap T$，则 $v_1 v_{j+1} \in E$ 且 $v_j v_k \in E$。

### 第四步：构造回路

由此可以构造回路：
$$C = v_1 v_{j+1} v_{j+2} \cdots v_k v_j v_{j-1} \cdots v_2 v_1$$

### 第五步：证明回路是哈密顿回路

若 $k < n$，由于 $G$ 是连通的（$\delta(G) \geq n/2$ 保证连通性），存在不在 $P$ 上的顶点与 $P$ 上的某顶点相邻，这与 $P$ 是最长路径矛盾。因此 $k = n$，$C$ 是哈密顿回路。

### 参考文献
- Dirac, G. A. (1952). Some theorems on abstract graphs. *Proc. London Math. Soc.*, s3-2(1), 69-81.
- 证明详解: [Mathematics LibreTexts - Hamilton Paths and Cycles](https://math.libretexts.org/BookShelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_(Morris)/03:_Graph_Theory/13:_Euler_and_Hamilton/13.02:_Hamilton_Paths_and_Cycles)
- 多种证明方法: [Dirac's Theorem on Hamiltonian Graphs](https://umcconnell.github.io/posts/2024-07-31-dirac-theorem-hamiltonian/)

## 关键推论

- **推论1**：完全图 $K_n$（$n \geq 3$）一定是哈密顿图（因为 $\deg(v) = n-1 \geq n/2$）
- **推论2**：Dirac定理是Ore定理的特殊情形——当 $\deg(u) + \deg(v) \geq n$ 对所有不相邻顶点成立时，若每个顶点度数都 $\geq n/2$，条件自然满足
- **推论3**：满足Dirac条件的图一定是连通图（因为任意两个不相邻顶点的度数之和 $\geq n$，不可能被割集分离）

## 应用场景

- **旅行商问题（TSP）**：Dirac定理给出了哈密顿回路存在的充分条件，为TSP的可解性提供理论保证
- **网络可靠性**：在网络拓扑设计中，若每个节点的连接数不低于节点总数的一半，则网络中存在遍历所有节点的环路
- **调度问题**：在任务调度中，哈密顿回路对应一种可行的任务轮转方案
- **竞赛图分析**：Dirac定理可用于分析竞赛图中的哈密顿性质

## 参见

- [[离散数学/concepts/哈密顿路径]]
- [[离散数学/concepts/完全图]]
- [[离散数学/concepts/图论]]
- [[Ore定理]]
- [[离散数学/concepts/连通图]]
- [[离散数学/concepts/鸽巢原理]]
