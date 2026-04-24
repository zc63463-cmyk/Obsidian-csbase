---
title: Cantor定理
type: theorem
tags: [离散数学, 集合论, 基数]
date: 2026-04-24
aliases: [Cantor's Theorem, Cantor's Power Set Theorem, 康托尔定理]
related:
  - "[[离散数学/concepts/基数]]"
  - "[[离散数学/concepts/集合]]"
  - "[[离散数学/concepts/函数]]"
source_chapter: "Ch02"
source_book: "离散数学（Rosen）"
---

# Cantor定理

> [!abstract] 概述
> ==Cantor 定理==（Cantor's Theorem）：对任意集合 $A$，其幂集 $\mathcal{P}(A)$ 的基数**严格大于** $A$ 的基数，即 $|A| < |\mathcal{P}(A)|$。这意味着不存在"最大的无穷"，无穷有严格的层次结构。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Cantor, 1891）：
> 设 $A$ 为任意集合，$\mathcal{P}(A) = \{S : S \subseteq A\}$ 为 $A$ 的幂集。则
> $$|A| < |\mathcal{P}(A)|$$
>
> 即：
> - 存在单射 $f\colon A \hookrightarrow \mathcal{P}(A)$（故 $|A| \leq |\mathcal{P}(A)|$）；
> - 不存在满射 $f\colon A \to \mathcal{P}(A)$（故 $|A| \neq |\mathcal{P}(A)|$）。
>
> **推论**：不存在最大的无穷基数。对任意基数 $\kappa$，存在严格更大的基数 $2^\kappa$。

## 证明概要

> [!info] 证明思路（对角线论证法）

### 第一步：$|A| \leq |\mathcal{P}(A)|$

构造单射 $i\colon A \to \mathcal{P}(A)$，定义 $i(a) = \{a\}$（将每个元素映射到其单元素集）。

显然 $i$ 是单射：若 $i(a) = i(b)$，则 $\{a\} = \{b\}$，故 $a = b$。

因此 $|A| \leq |\mathcal{P}(A)|$。

### 第二步：$|A| \neq |\mathcal{P}(A)|$（核心——对角线论证）

**反证法**：假设存在满射 $f\colon A \to \mathcal{P}(A)$，即 $A$ 的每个子集都是某个元素的像。

构造如下"对角线集合"：

$$B = \{a \in A : a \notin f(a)\}$$

即 $B$ 包含所有"不属于自身像集"的元素。

**关键论证**：

$B$ 是 $A$ 的子集，故 $B \in \mathcal{P}(A)$。因为假设 $f$ 是满射，所以存在某个 $b \in A$ 使得 $f(b) = B$。

现在考察 $b$ 是否属于 $B$：

- **若 $b \in B$**：由 $B$ 的定义，$b \notin f(b) = B$。矛盾！
- **若 $b \notin B$**：由 $B$ 的定义，$b \in f(b) = B$。矛盾！

两种情况都导致矛盾，因此假设不成立——**不存在**从 $A$ 到 $\mathcal{P}(A)$ 的满射。

因此 $|A| < |\mathcal{P}(A)|$。$\blacksquare$

### 对角线论证的直觉

这个证明与 **Russell 悖论**（"理发师悖论"——理发师给所有不给自己理发的人理发，那理发师给自己理发吗？）有深刻的结构相似性。本质上，Cantor 的对角线论证揭示了一个自指性的逻辑障碍：任何试图将一个集合"穷尽地"映射到其幂集的尝试，都会因为自指而产生矛盾。

## 关键推论

- **推论1（无穷的层次）**：反复应用 Cantor 定理，得到严格递增的无穷基数链：
  $$|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| < \cdots$$
  即 $\aleph_0 < 2^{\aleph_0} < 2^{2^{\aleph_0}} < \cdots$。

- **推论2（$\mathcal{P}(\mathbb{N})$ 不可数）**：$\mathbb{N}$ 是可数集，但 $\mathcal{P}(\mathbb{N})$ 不可数。事实上 $|\mathcal{P}(\mathbb{N})| = |\mathbb{R}| = 2^{\aleph_0} = \mathfrak{c}$（连续统基数）。

- **推论3（连续统假设）**：是否存在集合 $A$ 使得 $|\mathbb{N}| < |A| < |\mathcal{P}(\mathbb{N})|$？这就是著名的**连续统假设**（Continuum Hypothesis, CH），Godel（1940）和 Cohen（1963）证明 CH 与 ZFC 公理系统**独立**——既不能被证明也不能被证伪。

- **推论4（与 Schröder-Bernstein 定理的关系）**：Cantor 定理保证了 $|A| < |\mathcal{P}(A)|$ 的严格不等式，而 [[离散数学/theorems/Schröder-Bernstein定理|Schröder-Bernstein 定理]] 用于证明两个集合的基数相等。两者共同构成了基数算术的基础。

## 应用场景

1. **不可数性的证明**：Cantor 定理是最基本的"产生更大无穷"的工具。例如，$\mathcal{P}(\mathbb{N})$ 不可数、实数集不可数等结论都可以由此推出。
2. **计算理论**：Cantor 对角线论证的变体被 Turing 用于证明**停机问题不可判定**——这是计算理论中最基本的不可能性结果。
3. **逻辑学与基础数学**：Cantor 定理引发了第三次数学危机（与 Russell 悖论相关），推动了公理化集合论（ZFC）的发展。
4. **基数算术**：$|\mathcal{P}(A)| = 2^{|A|}$，Cantor 定理即 $|A| < 2^{|A|}$，这是基数指数运算的基本性质。

## 数值示例

**有限集情形**：设 $A = \{1, 2, 3\}$，则 $|A| = 3$，$\mathcal{P}(A)$ 有 $2^3 = 8$ 个元素。$3 < 8$。$\checkmark$

**可数无穷情形**：$\mathbb{N}$ 是可数的（$|\mathbb{N}| = \aleph_0$），但 $\mathcal{P}(\mathbb{N})$ 不可数（$|\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}$）。$\aleph_0 < 2^{\aleph_0}$。

**对角线论证的具体演示**（有限情形）：

设 $A = \{1, 2, 3\}$，假设 $f$ 定义为：
- $f(1) = \{1, 2\}$
- $f(2) = \{2, 3\}$
- $f(3) = \{1, 3\}$

则 $B = \{a \in A : a \notin f(a)\}$：
- $1 \in f(1) = \{1, 2\}$，故 $1 \notin B$
- $2 \in f(2) = \{2, 3\}$，故 $2 \notin B$
- $3 \in f(3) = \{1, 3\}$，故 $3 \notin B$

$B = \emptyset$。验证：$\emptyset \neq f(1), f(2), f(3)$，确实 $B$ 不在 $f$ 的像中。

## 参见

- [[离散数学/concepts/基数]]
- [[离散数学/concepts/集合]]
- [[离散数学/concepts/函数]]
- [[离散数学/theorems/Schröder-Bernstein定理]]

## 参考链接

- [Guide to Cantor's Theorem (Stanford CS103)](https://web.stanford.edu/class/archive/cs/cs103/cs103.1222/resources/Guide%20to%20Cantor%27s%20Theorem.pdf)
- [Yet Another Proof of Cantor's Theorem (TIFR)](https://www.tcs.tifr.res.in/~raja/publications/online/dlc09.pdf)
