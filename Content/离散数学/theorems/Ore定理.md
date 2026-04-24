---
title: Ore定理
type: theorem
tags: [离散数学, 图论, 哈密顿回路]
date: 2026-04-24
aliases: [Ore's Theorem, Ore's Theorem on Hamiltonian Cycles]
related:
  - "[[离散数学/concepts/哈密顿路径]]"
  - "[[离散数学/concepts/图论]]"
source_chapter: "Ch10"
source_book: "离散数学（Rosen）"
---

# Ore定理

> [!abstract] 概述
> ==Ore定理==（Ore's Theorem）：若简单图 $G$ 有 $n \geq 3$ 个顶点，且对 $G$ 中每对不相邻顶点 $u, v$ 都有 $\deg(u) + \deg(v) \geq n$，则 $G$ 中存在一条哈密顿回路。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Ore, 1960）：设 $G = (V, E)$ 是一个简单图，$|V| = n \geq 3$。若对 $G$ 中所有不相邻的顶点对 $u, v \in V$，均有 $\deg(u) + \deg(v) \geq n$，则 $G$ 中存在一条[[哈密顿路径|哈密顿回路]]。

### 条件说明
- **度数条件**：只要求不相邻顶点的度数之和 $\geq n$，相邻顶点无此限制
- **与Dirac定理的关系**：Dirac定理要求每个顶点度数 $\geq n/2$，这是Ore定理的特例
- **宽松性**：Ore定理的条件比Dirac定理更宽松，能判定更多图为哈密顿图

## 证明概要

> [!info] 证明思路
> 证明采用**反证法+边添加法**，核心思想如下：

### 第一步：假设不存在哈密顿回路

假设 $G$ 满足Ore条件但不含哈密顿回路。

### 第二步：逐步添加边

在 $G$ 中逐步添加不在 $G$ 中的边，每次添加一条边，使得添加后图仍然不含哈密顿回路。由于最终添加到完全图 $K_n$ 时一定有哈密顿回路，这个过程必然终止。

设最终得到的图为 $G^*$，则 $G^*$ 满足：
- $G^*$ 不含哈密顿回路
- 在 $G^*$ 中添加任意一条新边都会产生哈密顿回路

### 第三步：在 $G^*$ 中取最长路径

设 $P = v_1 v_2 \cdots v_k$ 是 $G^*$ 中一条最长路径。与Dirac定理的证明类似，$v_1$ 和 $v_k$ 的所有邻接点都在 $P$ 上。

### 第四步：分析不相邻顶点

由于 $G^*$ 不含哈密顿回路，$v_1$ 与 $v_k$ 不相邻（否则 $P$ 加上边 $v_k v_1$ 就构成哈密顿回路）。

定义集合：
$$S = \{i : v_1 v_{i+1} \in E(G^*), \; 1 \leq i \leq k-1\}$$
$$T = \{i : v_i v_k \in E(G^*), \; 2 \leq i \leq k\}$$

### 第五步：导出矛盾

关键观察：若 $j \in S \cap T$，则可以构造回路 $v_1 v_{j+1} \cdots v_k v_j \cdots v_2 v_1$，且由于 $P$ 是最长路径，$k = n$，从而得到哈密顿回路，矛盾。

因此 $S \cap T = \emptyset$，即 $|S| + |T| \leq k - 1$。

但 $v_1$ 与 $v_k$ 不相邻，由Ore条件 $\deg(v_1) + \deg(v_k) \geq n$，而 $\deg(v_1) = |S|$，$\deg(v_k) = |T|$，所以 $|S| + |T| \geq n$。

又因为 $P$ 是最长路径，$k = n$（否则存在不在 $P$ 上的顶点与 $P$ 相连，可延长路径），故 $|S| + |T| \leq n - 1$。

由此得到 $n \leq |S| + |T| \leq n - 1$，矛盾。

### 参考文献
- Ore, O. (1960). Note on Hamilton circuits. *Amer. Math. Monthly*, 67(1), 55.
- 证明详解: [Proof of Ore's Theorem - NTHU](http://www.m98.nthu.edu.tw/~s9822506/hamilton_ckt.pdf)
- Ore定理综合指南: [Ore's Theorem: A Comprehensive Guide](https://www.numberanalytics.com/blog/ores-theorem-extremal-graph-theory-guide)

## 关键推论

- **推论1**（Dirac定理）：若 $\delta(G) \geq n/2$，则对任意不相邻顶点 $u, v$，$\deg(u) + \deg(v) \geq n/2 + n/2 = n$，Ore条件自动满足
- **推论2**：若 $G$ 满足Ore条件，则 $G$ 一定是连通图
- **推论3**：$G$ 满足Ore条件当且仅当 $G$ 的闭包（closure）是完全图 $K_n$（Bondy-Chvátal闭包定理）

## 应用场景

- **哈密顿图判定**：Ore定理提供了一个实用的充分条件，比Dirac定理适用范围更广
- **网络设计**：在通信网络中，若任意两个不直连的节点度数之和足够大，则网络存在遍历所有节点的环路
- **闭包算法**：Ore定理是Bondy-Chvátal闭包定理的基础，通过反复添加满足度数条件的边来判定哈密顿性
- **DNA计算**：在DNA计算模型中，Ore条件用于分析杂交图的可遍历性

## 参见

- [[Dirac定理]]
- [[离散数学/concepts/哈密顿路径]]
- [[离散数学/concepts/图论]]
- [[离散数学/concepts/完全图]]
- [[离散数学/concepts/连通图]]
