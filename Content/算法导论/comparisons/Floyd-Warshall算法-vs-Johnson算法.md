---
title: "Floyd-Warshall算法 vs Johnson算法"
type: comparison
tags: [最短路径, 所有结点对, 动态规划, 稠密图, 稀疏图]
sources:
  - Cormen
date: 2026-04-23
related:
  - "[[\"算法导论/concepts/20-图算法/Floyd-Warshall算法\"]]"
  - "[[\"算法导论/concepts/20-图算法/Johnson算法\"]]"
---
# Floyd-Warshall算法 vs Johnson算法

> [!abstract] 两者都解决所有结点对最短路径问题，但Floyd-Warshall基于动态规划适合稠密图，Johnson结合Bellman-Ford与Dijkstra适合稀疏图。

## 共同点

- 都解决**所有结点对最短路径**（APSP）问题，输出任意两顶点之间的最短距离
- 都能正确处理**负权边**
- 都能**检测负权环**（Floyd-Warshall通过检查 $D^{(n)}_{ii} < 0$，Johnson通过Bellman-Ford预处理）
- 时间复杂度都优于对每个顶点运行Bellman-Ford的朴素方法 $O(VE^2)$

## 关键区别

| 维度 | [[Floyd-Warshall算法]] | [[Johnson算法]] |
|:-----|:----------------------|:----------------|
| **时间复杂度** | $\Theta(V^3)$ | $O(VE + V^2 \lg V)$ = $O(V(E + V \lg V))$ |
| **适用场景** | **稠密图**（$E \approx V^2$ 时为 $\Theta(V^3)$） | **稀疏图**（$E \ll V^2$ 时显著优于FW） |
| **核心思想** | 动态规划，逐步放宽中间顶点约束 | 重赋权 + 对每个顶点运行Dijkstra |
| **负权处理** | 天然支持负权边，无需预处理 | 通过Bellman-Ford计算势函数 $h(v)$ 重赋权 |
| **实现复杂度** | 简洁，三重循环即可实现 | 较复杂，需组合Bellman-Ford和Dijkstra |
| **空间复杂度** | $\Theta(V^2)$（就地更新版本） | $O(V^2)$（距离矩阵 + 势函数） |
| **是否依赖优先队列** | 否 | 是（Dijkstra需要优先队列） |
| **交叉点** | 当 $E = \omega(V \lg V)$ 时FW更优 | 当 $E = o(V \lg V)$ 时Johnson更优 |

## 深层联系

两者在理论上是互补的。Floyd-Warshall的优势在于实现简洁和不依赖优先队列，但其 $V^3$ 的时间在稀疏图上不够高效。Johnson算法通过重赋权技术巧妙地将负权问题转化为非负权问题，从而可以利用Dijkstra算法的高效性。重赋权的关键性质——新边权 $\hat{w}(u,v) = w(u,v) + h(u) - h(v) \geq 0$ 且保持最短路径不变——是Johnson算法的理论核心。

在实际应用中，选择哪个算法取决于图的密度：稠密图选Floyd-Warshall，稀疏图选Johnson。两者的分界点大约在 $E \approx V \lg V$ 附近。

## 参见

- [[算法导论/concepts/Floyd-Warshall算法]] — 基于动态规划的APSP算法
- [[算法导论/concepts/Johnson算法]] — 基于重赋权的APSP算法
- [[算法导论/concepts/Bellman-Ford算法]] — Johnson算法的预处理步骤
- [[算法导论/concepts/Dijkstra算法]] — Johnson算法的核心子程序
