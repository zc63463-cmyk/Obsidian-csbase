---
title: Akra-Bazzi定理
type: theorem
tags: [离散数学, 算法, 分治法, 递推关系, 渐近分析]
date: 2026-04-24
aliases: [Akra-Bazzi Theorem, Master Theorem Generalization]
related:
  - [[离散数学/concepts/主定理]]
  - [[离散数学/concepts/分治法]]
source_chapter: "Ch4"
---

# Akra-Bazzi定理

> [!abstract] 概述
> ==Akra-Bazzi定理==（Akra-Bazzi Theorem）：主定理（Master Theorem）的推广形式，能够处理形如 $T(n) = \sum_{i=1}^{k} a_i T(b_i n + h_i(n)) + f(n)$ 的分治递推关系，其中 $a_i > 0$，$0 < b_i < 1$，$h_i(n) = O(n / \log^2 n)$。其解通过参数 $p$ 和积分表达式给出。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Akra-Bazzi, 1998）：设递推关系
> $$T(n) = \sum_{i=1}^{k} a_i \, T(b_i n + h_i(n)) + f(n)$$
>
> 其中：
> - $a_i > 0$ 为常数（子问题个数）
> - $0 < b_i < 1$ 为常数（子问题规模比例）
> - $h_i(n) = O\left(\frac{n}{\log^2 n}\right)$ 为低阶扰动项（处理取整等误差）
> - $f(n)$ 为非负函数，定义在足够大的 $n$ 上
>
> 设 $p$ 是满足以下方程的唯一实数：
> $$\sum_{i=1}^{k} a_i \, b_i^p = 1$$
>
> 则 $T(n)$ 的渐近解为：
> $$T(n) = \Theta\!\left(n^p \left(1 + \int_1^n \frac{f(u)}{u^{p+1}} \, du\right)\right)$$

## 证明概要

> [!info] 证明思路
> 证明的核心是**递归树方法**（recursion tree method）结合**积分近似**（integral approximation）。将递归展开为递归树，逐层求和，然后用积分近似求和，最终得到闭式渐近解。

### 证明的关键步骤

**第一步：构造递归树**

将递推关系展开为递归树。根节点代价为 $f(n)$，第 $j$ 层有 $\sum_{i=1}^{k} a_i^j$ 个节点，每个节点的规模约为 $b_i^j n$。递归树的总层数为 $O(\log n)$（因为每层规模至少缩小 $b = \min_i b_i$ 倍）。

**第二步：逐层求和**

递归树的总代价为所有层代价之和：

$$T(n) = \sum_{j=0}^{O(\log n)} \sum_{i_1, \ldots, i_j} f\left(b_{i_1} b_{i_2} \cdots b_{i_j} n\right)$$

其中内层求和遍历所有可能的子问题选择序列。

**第三步：积分近似**

关键观察：参数 $p$ 的定义 $\sum a_i b_i^p = 1$ 使得递归树中"规模为 $s$ 的节点个数"约为 $(n/s)^p$。因此，总代价可以近似为：

$$T(n) \approx \int_1^n \left(\frac{n}{u}\right)^p \cdot f(u) \cdot \frac{du}{u} = n^p \int_1^n \frac{f(u)}{u^{p+1}} \, du$$

加上叶子节点的贡献 $n^p$，即得 $T(n) = \Theta\!\left(n^p \left(1 + \int_1^n \frac{f(u)}{u^{p+1}} \, du\right)\right)$。

**第四步：处理扰动项**

$h_i(n) = O(n / \log^2 n)$ 的条件保证取整误差（如 $\lfloor n/2 \rfloor$ 与 $n/2$ 的差异）不会影响渐近结果。通过细致的分析可以证明，扰动项对总代价的贡献被吸收到 $\Theta$ 中。

**参考文献**：
- Akra, M. and Bazzi, L., "On the solution of linear recurrence equations", Computational Optimization and Applications, 10(2):195-210, 1998
- CLRS 第4版，第4.6节 "Proof of the master theorem"（主定理的证明使用了类似方法）
- Rochester CS172 Notes: http://ftp.cs.rochester.edu/users/faculty/brown/172/readings_texts/99-recurrences.pdf
- Akra-Bazzi 综述 (arXiv): https://arxiv.org/html/2507.16064v1/

## 关键推论

- **主定理是特例**：当 $k = 1$，$a_1 = a$，$b_1 = 1/b$，$h_1(n) = 0$ 时，Akra-Bazzi 定理退化为经典主定理。方程 $a \cdot b^{-p} = 1$ 给出 $p = \log_b a$，与主定理一致。
- **多子问题分治**：当 $k > 1$ 时（如 $T(n) = T(n/3) + T(n/4) + n$），Akra-Bazzi 定理可以处理，而经典主定理无法直接应用。
- **非多项式 $f(n)$**：Akra-Bazzi 定理对 $f(n)$ 的形式限制更少，可以处理 $f(n) = n \log n$、$f(n) = n / \log n$ 等经典主定理难以处理的情况。
- **积分的三种典型情况**：
  - 积分发散（$f(n)$ 增长较快）：$T(n) = \Theta(f(n))$（合并代价主导）
  - 积分收敛：$T(n) = \Theta(n^p)$（叶子代价主导）
  - 积分为对数级：$T(n) = \Theta(n^p \log n)$（平衡情况）

## 应用场景

在算法导论中的具体应用：

1. **分治算法分析**（Ch4）：Akra-Bazzi 定理是分析分治算法时间复杂度的通用工具，适用于递推关系不满足经典主定理条件的情况。
2. **非均匀分治**：当分治算法将问题分成大小不等的子问题（如 $T(n) = T(n/3) + T(2n/3) + n$），Akra-Bazzi 定理可以直接求解。
3. **多路分治**：当分治算法产生多个子问题（如 $T(n) = 2T(n/2) + T(n/3) + n \log n$），经典主定理无法处理，但 Akra-Bazzi 定理可以。
4. **Strassen 矩阵乘法**：$T(n) = 7T(n/2) + \Theta(n^2)$ 可以用 Akra-Bazzi 定理分析（也可用经典主定理），得到 $T(n) = \Theta(n^{\log_2 7})$。

### 典型计算示例

**例1**：$T(n) = T(n/3) + T(2n/3) + n$

- 方程：$(1/3)^p + (2/3)^p = 1$，解得 $p = 1$
- 积分：$\int_1^n \frac{u}{u^2} \, du = \int_1^n \frac{1}{u} \, du = \ln n$
- 结果：$T(n) = \Theta(n \log n)$

**例2**：$T(n) = T(n/2) + T(n/4) + T(n/8) + n$

- 方程：$(1/2)^p + (1/4)^p + (1/8)^p = 1$，解得 $p \approx 0.774$
- 积分：$\int_1^n \frac{u}{u^{1.774}} \, du = \int_1^n u^{-0.774} \, du = \Theta(n^{0.226})$
- 结果：$T(n) = \Theta(n^p \cdot n^{1-p}) = \Theta(n)$（合并代价主导）

## 参见

- [[离散数学/concepts/主定理]]
- [[离散数学/concepts/分治法]]
- [[离散数学/concepts/动态规划]]
