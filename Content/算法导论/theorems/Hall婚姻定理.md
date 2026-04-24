---
title: Hall婚姻定理
type: theorem
tags: [离散数学, 算法, 图论, 匹配, 组合数学]
date: 2026-04-24
aliases: [Hall's Marriage Theorem, Hall定理, 婚姻定理, SDR定理]
related:
  - "[[离散数学/concepts/二部图]]"
  - "[[离散数学/concepts/二分匹配]]"
  - "[[离散数学/concepts/最大流]]"
source_chapter: "Ch24/25"
---

# Hall婚姻定理

> [!abstract] 概述
> ==Hall婚姻定理==（Hall's Marriage Theorem）：二部图 $G = (X, Y, E)$ 存在==完美匹配==（覆盖 $X$ 中所有顶点的匹配），当且仅当对 $X$ 的每个子集 $S$，其邻居集 $N(S)$ 满足 $|N(S)| \geq |S|$。该定理由 Philip Hall 于 1935 年证明，是组合数学中最优美的定理之一。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Hall, 1935）：设 $G = (X, Y, E)$ 是一个二部图。则 $G$ 中存在覆盖 $X$ 中所有顶点的匹配（即 $|M| = |X|$ 的匹配），当且仅当：
>
> $$\forall S \subseteq X,\quad |N(S)| \geq |S|$$
>
> 其中 $N(S) = \{y \in Y \mid \exists x \in S, (x, y) \in E\}$ 是 $S$ 的邻居集。
>
> 条件 $|N(S)| \geq |S|$ 对所有 $S \subseteq X$ 成立，称为 **Hall 条件**（或**婚姻条件**）。

## 证明概要

> [!info] 证明思路
> 证明分为必要性（$\Rightarrow$）和充分性（$\Leftarrow$）两个方向。
>
> **步骤 1：必要性（$\Rightarrow$）——平凡方向**
>
> 设 $M$ 是覆盖 $X$ 的匹配。对任意 $S \subseteq X$，$M$ 中与 $S$ 关联的边将 $S$ 中的每个顶点映射到 $N(S)$ 中不同的顶点（因为 $M$ 是匹配，不同端点映射到不同邻居）。因此 $|N(S)| \geq |S|$。
>
> **步骤 2：充分性（$\Leftarrow$）——核心证明**
>
> 对 $|X|$ 使用数学归纳法。
>
> **基础步**：$|X| = 1$ 时，Hall 条件给出 $|N(\{x\})| \geq 1$，即 $x$ 至少有一个邻居，匹配显然存在。
>
> **归纳步**：假设 $|X| \leq k$ 时定理成立，考虑 $|X| = k + 1$。
>
> 分两种情况讨论：
>
> **情况 A（"严格"条件）**：存在非空真子集 $\emptyset \subsetneq S \subsetneq X$ 使得 $|N(S)| = |S|$。
> - 对 $G[S \cup N(S)]$ 应用归纳假设（Hall 条件在 $S$ 上自然成立），得到 $S$ 的完美匹配 $M_1$
> - 对 $G[(X \setminus S) \cup (Y \setminus N(S))]$ 验证 Hall 条件：对任意 $T \subseteq X \setminus S$，$N_G(T) \setminus N(S) \supseteq N_{G'}(T)$，且 $|N_G(T \cup S)| \geq |T| + |S|$，因此 $|N_G(T) \setminus N(S)| \geq |T|$（否则 $|N_G(T \cup S)| < |T| + |S|$，矛盾）
> - 对 $G'$ 应用归纳假设，得到 $X \setminus S$ 的完美匹配 $M_2$
> - $M_1 \cup M_2$ 即为 $X$ 的完美匹配
>
> **情况 B（"无严格"条件）**：对所有非空真子集 $S \subsetneq X$，$|N(S)| > |S|$。
> - 任取 $x \in X$，令 $S = X \setminus \{x\}$。由条件 $|N(S)| \geq |S| = |X| - 1$。
> - 由于 $|N(X)| > |X| - 1$（情况 B），存在 $y \in N(X) \setminus N(S)$，即 $y$ 仅与 $x$ 相邻
> - 在 $G' = G - \{x, y\}$ 中，对任意 $T \subseteq X \setminus \{x\}$：$|N_{G'}(T)| \geq |N_G(T)| - 1 \geq |T|$（因为 $y$ 最多是 $T$ 的一个邻居，且 $|N_G(T)| \geq |T| + 1$）
> - 由归纳假设，$G'$ 存在完美匹配 $M'$，则 $M' \cup \{(x, y)\}$ 是 $G$ 的完美匹配
>
> **学术参考**：ISI Bangalore 的课程笔记包含归纳法证明的完整细节：https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch6.S1.html

## 关键推论

- **SDR（相异代表系）定理**：族 $\{A_1, A_2, \ldots, A_n\}$ 存在相异代表系当且仅当对任意 $I \subseteq \{1, \ldots, n\}$，$|\bigcup_{i \in I} A_i| \geq |I|$。这是 Hall 定理在集合族上的等价表述
- **正则二部图必有完美匹配**：若二部图 $G = (X, Y, E)$ 中每个顶点的度数都为 $k$（$k$-正则），则 $G$ 存在完美匹配
- **König 定理的推导**：Hall 定理可以推导出 König 定理（二部图中最大匹配 = 最小顶点覆盖）
- **与最大流最小割定理的关系**：Hall 条件等价于流网络中不存在容量小于 $|X|$ 的割

## 应用场景

- **算法导论 Ch24/25**：Hall 定理是二分匹配理论的核心，用于判断完美匹配的存在性
- **任务分配**：判断是否存在一种分配方案，使每个工人都能分配到其能胜任的任务
- **排课问题**：判断是否存在一种排课方案，使每门课程都能安排到合适的教室
- **拉丁方构造**：Hall 定理在拉丁方和组合设计的构造中起关键作用
- **化学图论**：判断分子结构中是否存在某种匹配模式

## 参见

- [[离散数学/concepts/二部图]] -- 二部图的定义、奇环刻画与判定
- [[离散数学/concepts/二分匹配]] -- 二分匹配的定义、Berge 定理、求解算法
- [[离散数学/concepts/最大流]] -- 通过最大流验证 Hall 条件
