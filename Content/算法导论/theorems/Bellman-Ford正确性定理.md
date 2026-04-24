---
title: Bellman-Ford正确性定理
type: theorem
tags: [离散数学, 算法, 图论, 最短路径, 动态规划]
date: 2026-04-24
aliases: [Bellman-Ford Correctness Theorem, Bellman-Ford Relaxation Theorem]
related:
  - [[离散数学/concepts/贪心算法]]
source_chapter: "Ch22"
---

# Bellman-Ford正确性定理

> [!abstract] 概述
> ==Bellman-Ford正确性定理==（Bellman-Ford Correctness Theorem）：Bellman-Ford算法在经过 $n-1$ 轮边松弛后，能正确计算从源点到所有其他顶点的单源最短路径，前提是不存在从源点可达的负权回路。

## 定理陈述

> [!def] 形式化陈述
>
> 设 $G = (V, E)$ 是带权有向图，$w: E \to \mathbb{R}$ 是边权函数，$s \in V$ 是源点，$n = |V|$。
>
> **Bellman-Ford正确性定理**：若 $G$ 中不存在从 $s$ 可达的负权回路，则Bellman-Ford算法在 $n-1$ 轮松弛后，对所有 $v \in V$：
> $$d[v] = \delta(s, v)$$
>
> 其中 $d[v]$ 是算法维护的距离估计值，$\delta(s, v)$ 是从 $s$ 到 $v$ 的最短路径权重。
>
> **负权回路检测**：若第 $n$ 轮松弛仍有边可以被松弛，则 $G$ 中存在从 $s$ 可达的负权回路。

## Bellman-Ford算法

```
BELLMAN-FORD(G, w, s):
    for each v ∈ V:
        d[v] = +∞
        π[v] = NIL
    d[s] = 0

    for i = 1 to |V| - 1:           // n-1 轮松弛
        for each (u, v) ∈ E:         // 遍历所有边
            if d[v] > d[u] + w(u, v):
                d[v] = d[u] + w(u, v)
                π[v] = u

    for each (u, v) ∈ E:             // 第 n 轮：检测负权回路
        if d[v] > d[u] + w(u, v):
            return FALSE              // 存在负权回路
    return TRUE
```

## 证明概要

> [!info] 证明思路（数学归纳法）
>
> 证明的核心是**归纳法**：证明第 $i$ 轮松弛后，$d[v]$ 不超过从 $s$ 到 $v$ 的最多使用 $i$ 条边的最短路径权重。
>
> ### 引理（松弛引理）
>
> 设 $(u, v) \in E$，若在某一时刻对边 $(u, v)$ 执行松弛操作 $d[v] = d[u] + w(u, v)$，则此后恒有 $d[v] \leq \delta(s, v)$（距离估计值始终不超过真实最短距离）。
>
> **证明**：松弛前 $d[u] \leq \delta(s, u)$（归纳假设），松弛后：
> $$d[v] = d[u] + w(u, v) \leq \delta(s, u) + w(u, v) \leq \delta(s, v)$$
> 最后一步因为 $\delta(s, u) + w(u, v)$ 是从 $s$ 经 $u$ 到 $v$ 的某条路径的权重，不小于最短路径权重。
>
> ### 主定理的归纳证明
>
> **归纳命题**：第 $i$ 轮松弛完成后（$1 \leq i \leq n-1$），对所有顶点 $v$：
> $$d[v] \leq \text{从 } s \text{ 到 } v \text{ 的最多使用 } i \text{ 条边的最短路径权重}$$
>
> 记从 $s$ 到 $v$ 的最多使用 $i$ 条边的最短路径权重为 $\delta_i(s, v)$。
>
> **基础情况（$i = 1$）**：
> - 最多使用1条边的路径只能是单条边 $(s, v)$（若存在）或不可达
> - 第1轮松弛遍历所有边，若 $(s, v) \in E$，则 $d[v] = w(s, v) = \delta_1(s, v)$
> - 若 $(s, v) \notin E$，$d[v] = +\infty = \delta_1(s, v)$
> - 因此 $d[v] \leq \delta_1(s, v)$ 对所有 $v$ 成立
>
> **归纳步骤**：假设第 $i-1$ 轮后 $d[v] \leq \delta_{i-1}(s, v)$ 对所有 $v$ 成立。
>
> 考虑从 $s$ 到 $v$ 的最多 $i$ 条边的最短路径 $p$：
> - 若 $p$ 最多 $i-1$ 条边，则 $\delta_i(s, v) = \delta_{i-1}(s, v) \geq d[v]$（由归纳假设）
> - 若 $p$ 恰好 $i$ 条边，设 $p$ 的倒数第二条边到达 $u$，则前缀路径从 $s$ 到 $u$ 最多 $i-1$ 条边：
>   $$\delta_i(s, v) = \delta_{i-1}(s, u) + w(u, v)$$
>   由归纳假设，第 $i-1$ 轮后 $d[u] \leq \delta_{i-1}(s, u)$。第 $i$ 轮松弛边 $(u, v)$ 时：
>   $$d[v] \leq d[u] + w(u, v) \leq \delta_{i-1}(s, u) + w(u, v) = \delta_i(s, v)$$
>
> 因此第 $i$ 轮后 $d[v] \leq \delta_i(s, v)$ 对所有 $v$ 成立。
>
> **最终结论**：
>
> 由于不存在从 $s$ 可达的负权回路，从 $s$ 到任意 $v$ 的最短路径最多 $n-1$ 条边（简单路径）。因此：
> $$\delta(s, v) = \delta_{n-1}(s, v)$$
>
> 第 $n-1$ 轮后：
> $$d[v] \leq \delta_{n-1}(s, v) = \delta(s, v)$$
>
> 结合松弛引理 $d[v] \geq \delta(s, v)$，得 $d[v] = \delta(s, v)$。
>
> **参考资源**：
> - MIT 6.006 Bellman-Ford讲义：https://people.csail.mit.edu/alinush/6.006-spring-2014/mit-fall-2010-bellman-ford.pdf
> - Stanford CS161 Bellman-Ford讲义：https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture14.pdf
> - UMD CMSC451最短路径讲义：http://www.cs.umd.edu/class/fall2025/cmsc451-0101/Lects/lect04-graph-shortest-path.pdf

## 关键推论

- **负权回路检测**：第 $n$ 轮若仍能松弛，则存在从 $s$ 可达的负权回路。这是因为若不存在负权回路，$n-1$ 轮已足够；第 $n$ 轮的松弛意味着某条路径可以通过绕行负权回路无限缩短
- **与Dijkstra算法的对比**：Dijkstra算法不能处理负权边，而Bellman-Ford可以。但Bellman-Ford的时间复杂度为 $O(VE)$，比Dijkstra的 $O(E \log V)$（使用斐波那契堆）更慢
- **SPFA优化**：Shortest Path Faster Algorithm是Bellman-Ford的队列优化版本，平均情况下更快，但最坏情况仍为 $O(VE)$
- **路径重建**：通过前驱指针 $\pi[v]$ 可以在 $O(n)$ 时间内重建最短路径

## 应用场景

在算法导论（CLRS）Ch22单源最短路径中的具体应用：

1. **网络路由**：互联网路由协议（如RIP）使用Bellman-Ford的分布式版本（距离向量算法）计算最短路径
2. **负权边的处理**：当图中存在负权边（如金融网络中的套利检测、某些优化问题中的惩罚代价）时，Bellman-Ford是标准选择
3. **负权回路检测**：在金融领域，Bellman-Ford可用于检测套利机会（负权回路对应可获利的货币兑换循环）
4. **[[离散数学/concepts/贪心算法]]**：Dijkstra算法本质上是贪心策略（每次选择最近的未访问顶点），而Bellman-Ford采用动态规划思想（逐轮松弛所有边），两者形成有趣的对比
5. **约束满足**：差分约束系统可以转化为最短路径问题，使用Bellman-Ford求解

## 参见

- [[离散数学/concepts/贪心算法]]
- [[离散数学/concepts/动态规划]]
- [[离散数学/concepts/加权图]]
- [[离散数学/concepts/有向图]]
- [[离散数学/concepts/数学归纳法]]
- [[离散数学/concepts/循环不变量]]
