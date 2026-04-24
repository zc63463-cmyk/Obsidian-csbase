---
title: Vizing定理
type: theorem
tags: [离散数学, 图论, 图的着色]
date: 2026-04-24
aliases: [Vizing's Theorem, Vizing定理, Vizing's Edge Coloring Theorem]
related:
  - "[[离散数学/concepts/图的着色]]"
  - "[[离散数学/concepts/图论]]"
  - "[[离散数学/concepts/连通图]]"
source_chapter: "Ch10"
source_book: "离散数学（Rosen）"
---

# Vizing定理

> [!abstract] 概述
> ==Vizing定理==（Vizing's Theorem）：对于简单图 $G$，其边色数 $\chi'(G)$ 满足 $\Delta(G) \leq \chi'(G) \leq \Delta(G) + 1$，其中 $\Delta(G)$ 是 $G$ 的最大度数。换言之，简单图的边色数要么等于最大度数，要么等于最大度数加一。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Vizing, 1964）：设 $G = (V, E)$ 是一个简单图，$\Delta(G) = \max_{v \in V} \deg(v)$ 为最大度数，$\chi'(G)$ 为边色数（用最少的颜色给边着色使相邻边颜色不同），则：
> $$\Delta(G) \leq \chi'(G) \leq \Delta(G) + 1$$

### 图的分类

根据Vizing定理，简单图可分为两类：
- **第一类图**（Class 1）：$\chi'(G) = \Delta(G)$，如二部图、完全图 $K_{2n}$、偶数阶轮图
- **第二类图**（Class 2）：$\chi'(G) = \Delta(G) + 1$，如奇数阶完全图 $K_{2n+1}$、Petersen图

### 多重图的推广

对于允许有重边的多重图（最大重数为 $\mu$），Vizing定理推广为：
$$\Delta(G) \leq \chi'(G) \leq \Delta(G) + \mu$$

## 证明概要

> [!info] 证明思路
> 证明采用**归纳法+贪心着色+Kempe链交换**技术：

### 第一步：归纳基础

对边数 $|E|$ 进行归纳。$|E| = 0$ 时平凡成立。

### 第二步：取极小反例

假设 $G$ 是不满足定理的最小反例（边数最少）。设 $\Delta = \Delta(G)$，$k = \Delta + 1$。

取一条边 $e = vw$，由归纳假设 $G - e$ 可以用 $k$ 种颜色正常边着色。

### 第三步：尝试贪心着色

在 $G - e$ 的 $k$-着色基础上，尝试给 $e = vw$ 着色。

设 $v$ 的缺失颜色集合为 $A$（$v$ 的邻边未使用的颜色），$w$ 的缺失颜色集合为 $B$。

- 若 $A \cap B \neq \emptyset$，则用 $A \cap B$ 中的颜色给 $e$ 着色，完成。
- 若 $A \cap B = \emptyset$，需要更精细的处理。

### 第四步：Kempe链技术

取 $A$ 中的颜色 $\alpha$ 和 $B$ 中的颜色 $\beta$。

考虑由颜色 $\alpha$ 和 $\beta$ 交替着色的极大路径（**Kempe链**）：
- 从 $v$ 出发的 $\alpha$-$\beta$ 交替路径
- 从 $w$ 出发的 $\alpha$-$\beta$ 交替路径

**关键观察**：
1. 若从 $v$ 出发的 $\alpha$-$\beta$ 链不到达 $w$，则交换该链上 $\alpha$ 和 $\beta$ 的颜色，使 $\alpha$ 成为 $v$ 的缺失颜色且 $\alpha \in B$，可用 $\alpha$ 给 $e$ 着色
2. 若从 $v$ 出发的 $\alpha$-$\beta$ 链到达 $w$，则形成一条从 $v$ 到 $w$ 的 $\alpha$-$\beta$ 交替路径

### 第五步：构造扇形结构

当直接Kempe链交换不成功时，构造以 $v$ 为中心的"扇形"（fan）：

选择 $w$ 的一个邻居 $w_1$，使得 $vw_1$ 的颜色 $\alpha_1 \in B$。然后考虑 $w_1$ 的缺失颜色...

通过扇形中颜色的逐步调整（类似于Kempe链交换的推广），最终可以为 $e$ 找到可用颜色。

### 第六步：导出矛盾

通过上述构造，总能将 $k$-着色扩展到包含 $e$ 的图 $G$，与 $G$ 是反例的假设矛盾。

### 参考文献
- Vizing, V. G. (1964). On an estimate of the chromatic class of a $p$-graph. *Diskret. Analiz.*, 3, 25-30.
- 证明详解: [University of Chicago - Vizing's Theorem](https://www.math.uchicago.edu/~may/REU2015/REUPapers/Green.pdf)
- Bondy-Murty教材: [Vizing's Theorem - ETSU](https://faculty.etsu.edu/gardnerr/5340/notes-Bondy-Murty-GT/Bondy-Murty-GT-17-2.pdf)
- 简短证明: [PlanetMath - Proof of Vizing's Theorem](https://planetmath.org/proofofvizingstheoremforgraphs)

## 关键推论

- **推论1**（König定理）：二部图一定是第一类图，即 $\chi'(G) = \Delta(G)$
- **推论2**：完全图 $K_n$ 中，$\chi'(K_n) = n$（$n$ 为奇数），$\chi'(K_n) = n-1$（$n$ 为偶数）
- **推论3**：Petersen图是第二类图，$\chi'(\text{Petersen}) = 4 = \Delta + 1$
- **推论4**（Vizing猜想）：若 $G$ 是第二类图，则 $G$ 包含一个度数为 $\Delta$ 的重边子图（尚未完全证明）

## 应用场景

- **调度问题**：边着色可直接应用于时间表调度——图的顶点代表任务，边代表冲突关系，边色数给出最少时间段
- **网络通信**：在光纤网络中，边着色对应波分复用中的波长分配问题
- **编译器优化**：寄存器分配问题可以建模为图的边着色问题
- **考试安排**：若将学生视为边、考试视为顶点，边着色给出无冲突的考试时间安排

## 参见

- [[离散数学/concepts/图的着色]]
- [[离散数学/concepts/图论]]
- [[离散数学/concepts/连通图]]
- [[离散数学/concepts/二部图]]
- [[离散数学/concepts/完全图]]
