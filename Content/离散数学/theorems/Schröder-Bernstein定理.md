---
title: Schröder-Bernstein定理
type: theorem
tags: [离散数学, 集合论, 基数]
date: 2026-04-24
aliases: [Cantor-Schröder-Bernstein Theorem, CSB Theorem, Schröder-Bernstein Theorem, 康托尔-伯恩斯坦-施罗德定理]
related:
  - "[[离散数学/concepts/函数]]"
  - "[[离散数学/concepts/集合]]"
  - "[[离散数学/concepts/基数]]"
source_chapter: "Ch02"
source_book: "离散数学（Rosen）"
---

# Schröder-Bernstein定理

> [!abstract] 概述
> ==Schröder-Bernstein 定理==（Cantor-Schröder-Bernstein Theorem）：若存在从集合 $A$ 到集合 $B$ 的**单射** $f$ 和从 $B$ 到 $A$ 的**单射** $g$，则存在从 $A$ 到 $B$ 的**双射** $h$。换言之，$|A| \leq |B|$ 且 $|B| \leq |A|$ 蕴含 $|A| = |B|$。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Schröder-Bernstein, 1897/1898）：
> 设 $A$、$B$ 为集合。若存在单射 $f\colon A \to B$ 和单射 $g\colon B \to A$，则存在双射 $h\colon A \to B$。
>
> **基数语言**：若 $|A| \leq |B|$ 且 $|B| \leq |A|$，则 $|A| = |B|$。
>
> **等价表述**：集合间的基数关系 $\leq$ 是**反对称的**（antisymmetric），即 $\leq$ 构成一个偏序关系。

## 证明概要

> [!info] 证明思路（构造性证明——链分解法）

### 核心思想

利用 $f$ 和 $g$ 的迭代，将 $A$ 划分为两个不相交的子集 $A_{\text{even}}$ 和 $A_{\text{odd}}$，然后分别用 $f$ 和 $g^{-1}$ 来构造双射。

### 详细证明

**第一步：定义迭代映射**

定义映射 $F\colon \mathcal{P}(A) \to \mathcal{P}(A)$ 如下：对任意 $S \subseteq A$，

$$F(S) = A \setminus g(B \setminus f(S))$$

即：先对 $S$ 用 $f$ 映射到 $B$ 的子集 $f(S)$，取 $B$ 中不在 $f(S)$ 里的部分 $B \setminus f(S)$，再用 $g$ 映回 $A$ 得到 $g(B \setminus f(S))$，最后取 $A$ 中的补集。

**第二步：寻找不动点**

可以验证 $F$ 是**单调递增**的：若 $S_1 \subseteq S_2$，则 $F(S_1) \subseteq F(S_2)$。

令 $C = \bigcup \{S \subseteq A : S \subseteq F(S)\}$（所有被 $F$ 包含的子集的并）。

由 $F$ 的单调性，可以证明 $C = F(C)$，即 $C$ 是 $F$ 的**不动点**。

**第三步：构造双射**

由不动点条件 $C = A \setminus g(B \setminus f(C))$，可推出：

$$A \setminus C = g(B \setminus f(C))$$

因为 $g$ 是单射，$g$ 在 $B \setminus f(C)$ 上的限制是到 $A \setminus C$ 的双射。同时，$f$ 在 $C$ 上的限制是到 $f(C) \subseteq B$ 的单射。

现在定义 $h\colon A \to B$：

$$h(a) = \begin{cases} f(a) & \text{若 } a \in C \\ g^{-1}(a) & \text{若 } a \in A \setminus C \end{cases}$$

**验证 $h$ 是双射**：

- **$h$ 是良定义的**：若 $a \in A \setminus C$，则 $a \in g(B \setminus f(C))$，所以存在唯一的 $b \in B \setminus f(C)$ 使得 $g(b) = a$，即 $g^{-1}(a) = b$ 是良定义的。
- **$h$ 是单射**：$h$ 在 $C$ 上是 $f$（单射），在 $A \setminus C$ 上是 $g^{-1}$（单射），且 $h(C) = f(C)$ 与 $h(A \setminus C) = B \setminus f(C)$ 不相交。
- **$h$ 是满射**：$h(C) = f(C)$，$h(A \setminus C) = B \setminus f(C)$，故 $h(A) = f(C) \cup (B \setminus f(C)) = B$。

因此 $h$ 是从 $A$ 到 $B$ 的双射。$\blacksquare$

### 直观理解（链分解视角）

从任意 $a \in A$ 出发，交替使用 $f$ 和 $g^{-1}$ 向前追溯：

$$\cdots \xrightarrow{g^{-1}} a_{-2} \xrightarrow{f} a_{-1} \xrightarrow{g^{-1}} a_0 \xrightarrow{f} a_1 \xrightarrow{g^{-1}} a_2 \xrightarrow{f} \cdots$$

每条"链"有三种可能：
1. **$A$-终止链**：从 $A$ 中的某个元素开始（没有前驱 $g^{-1}$）
2. **$B$-终止链**：从 $B$ 中的某个元素开始（没有前驱 $f^{-1}$）
3. **双向无限链**：向两个方向无限延伸

对 $A$-终止链和双向无限链，使用 $f$ 来映射；对 $B$-终止链，使用 $g^{-1}$ 来映射。这样恰好构造出双射。

## 关键推论

- **推论1（基数等价的自反性）**：$|A| = |B|$ 当且仅当 $|A| \leq |B|$ 且 $|B| \leq |A|$。这确立了基数比较的反对称性。
- **推论2（$\mathbb{R}$ 与 $(0,1)$ 等势）**：$f(x) = \frac{1}{\pi}\arctan(x) + \frac{1}{2}$ 是 $\mathbb{R} \to (0,1)$ 的双射，故 $|\mathbb{R}| = |(0,1)|$。
- **推论3（幂集链的单调性）**：$|A| \leq |B|$ 蕴含 $|\mathcal{P}(A)| \leq |\mathcal{P}(B)|$。

## 应用场景

1. **基数比较**：Schröder-Bernstein 定理是集合论中比较无穷集合大小的核心工具。要证明 $|A| = |B|$，只需分别构造单射 $A \hookrightarrow B$ 和 $B \hookrightarrow A$，而不必直接构造双射。
2. **实数集的等势证明**：证明 $|\mathbb{R}| = |(0,1)|$、$|\mathbb{R}^2| = |\mathbb{R}|$ 等结果时，Schröder-Bernstein 定理大大简化了证明。
3. **可数集理论**：在证明某些集合是可数集或不可数集时，提供了一种"双向夹逼"的方法。

## 数值示例

证明 $|[0,1]| = |(0,1)|$：

- 单射 $f\colon (0,1) \to [0,1]$：$f(x) = x$（恒等映射）。
- 单射 $g\colon [0,1] \to (0,1)$：$g(x) = \frac{x}{2} + \frac{1}{4}$（将 $[0,1]$ 压缩到 $[1/4, 3/4] \subset (0,1)$）。
- 由 Schröder-Bernstein 定理，$|[0,1]| = |(0,1)|$。

## 参见

- [[离散数学/concepts/函数]]
- [[离散数学/concepts/集合]]
- [[离散数学/concepts/基数]]
- [[离散数学/theorems/Cantor定理]]

## 参考链接

- [Cantor-Schröder-Bernstein Theorem (nLab)](https://ncatlab.org/nlab/show/Cantor-Schroeder-Bernstein+theorem)
- [Elementary Set Theory - Cardinal Numbers (BNU)](http://math0.bnu.edu.cn/~shi/teaching/fall2025/ST/03.pdf)
