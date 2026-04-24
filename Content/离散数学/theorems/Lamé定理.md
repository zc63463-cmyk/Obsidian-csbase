---
title: Lamé定理
type: theorem
tags: [离散数学, 数论, 算法分析]
date: 2026-04-24
aliases: [Lamé's Theorem, Lame定理, Lamé's Theorem on the Euclidean Algorithm]
related:
  - "[[离散数学/concepts/欧几里得算法]]"
  - "[[离散数学/concepts/最大公约数]]"
  - "[[离散数学/concepts/Fibonacci数]]"
source_chapter: "Ch4"
source_book: "离散数学（Rosen）"
---

# Lamé定理

> [!abstract] 概述
> ==Lamé定理==（Lamé's Theorem）：用[[欧几里得算法]]求 $\gcd(a, b)$（$a > b > 0$）时，所需的除法次数不超过 $b$ 的十进制位数的 5 倍。更精确地说，不超过 $\log_\phi(b \sqrt{5})$ 次，其中 $\phi = (1+\sqrt{5})/2$ 是黄金比例。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Lamé, 1844）：设 $a > b > 0$ 为正整数，用欧几里得算法计算 $\gcd(a, b)$ 时所需的除法步数为 $k$，则：
> $$k \leq 5 \cdot \text{number of decimal digits of } b$$
>
> 等价地，设 $F_n$ 为第 $n$ 个Fibonacci数，若 $k$ 步除法完成计算，则 $a \geq F_{k+2}$ 且 $b \geq F_{k+1}$。

### Fibonacci数列回顾

$$F_0 = 0, \quad F_1 = 1, \quad F_n = F_{n-1} + F_{n-2} \;(n \geq 2)$$

前几项：$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots$

## 证明概要

> [!info] 证明思路
> 证明的核心是：**欧几里得算法的最坏情况出现在输入为连续Fibonacci数时**。

### 第一步：引理——Fibonacci数的下界

**引理**：对 $n \geq 3$，有 $F_n > \phi^{n-2}$，其中 $\phi = \dfrac{1+\sqrt{5}}{2} \approx 1.618$。

**证明**（数学归纳法）：
- 基础：$F_3 = 2 > \phi = 1.618$，$F_4 = 3 > \phi^2 = 2.618$，成立
- 归纳：设 $F_k > \phi^{k-2}$ 对所有 $k \leq n$ 成立。则
$$F_{n+1} = F_n + F_{n-1} > \phi^{n-2} + \phi^{n-3} = \phi^{n-3}(\phi + 1) = \phi^{n-3} \cdot \phi^2 = \phi^{n-1}$$
（利用了 $\phi^2 = \phi + 1$）

### 第二步：最坏情况引理

**引理**：若欧几里得算法在 $k$ 步内完成 $\gcd(a, b)$ 的计算（$a > b$），则 $b \geq F_{k+1}$。

**证明**（强归纳法）：
- $k = 1$：一步完成意味着 $b \mid a$，故 $b \geq 1 = F_2$
- 设结论对 $k-1$ 步成立。第 $k$ 步算法计算 $a = qb + r$（$0 \leq r < b$），然后对 $(b, r)$ 继续执行。由于总共 $k$ 步，对 $(b, r)$ 需要 $k-1$ 步，由归纳假设 $r \geq F_k$。又 $b > r$，所以 $b \geq r + 1 \geq F_k + F_{k-1} = F_{k+1}$

### 第三步：推导上界

由 $b \geq F_{k+1} > \phi^{k-1}$，取对数得：
$$k - 1 < \log_\phi b$$
$$k < \log_\phi b + 1 = \frac{\ln b}{\ln \phi} + 1$$

由于 $\ln \phi \approx 0.4812$，$\dfrac{1}{\ln \phi} \approx 2.078$，故：
$$k < 2.078 \cdot \ln b + 1$$

### 第四步：转化为十进制位数

设 $b$ 有 $d$ 个十进制位，则 $10^{d-1} \leq b < 10^d$，故 $\ln b < d \ln 10 \approx 2.303d$。

代入得：
$$k < 2.078 \times 2.303d + 1 \approx 4.785d + 1 < 5d$$

因此 $k \leq 5d$，即除法次数不超过 $b$ 的十进制位数的 5 倍。

### 参考文献
- Lamé, G. (1844). Note sur la limite du nombre des divisions dans la recherche du plus grand commun diviseur entre deux nombres entiers. *C. R. Acad. Sci. Paris*, 19, 867-870.
- 证明详解: [LibreTexts - Lamé's Theorem](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Number_Theory_(Raji)/01%3A_Introduction/1.07%3A_Lame%27s_Theorem)
- OEIS条目: [Euclidean Algorithm - OEIS Wiki](https://oeis.org/wiki/Euclidean_algorithm)

## 关键推论

- **推论1**：欧几里得算法的时间复杂度为 $O(\log b)$，即输入规模的多项式级别，是非常高效的算法
- **推论2**：最坏情况出现在 $a = F_{n+2}$、$b = F_{n+1}$ 时，此时恰好需要 $n$ 步除法
- **推论3**：对扩展欧几里得算法，步数上界同样适用
- **推论4**：$b$ 的二进制位数 $d' = \lfloor \log_2 b \rfloor + 1$，则 $k = O(d')$，算法复杂度为 $O((\log b)^2)$（假设每步除法为 $O(\log b)$）

## 应用场景

- **算法复杂度分析**：Lamé定理是分析欧几里得算法效率的基础，保证其在密码学应用中的实用性
- **RSA密码系统**：RSA中需要计算模逆元，依赖扩展欧几里得算法，Lamé定理保证其效率
- **教学示例**：Lamé定理是展示Fibonacci数列在算法分析中应用的经典案例
- **连分数理论**：欧几里得算法与连分数展开直接对应，Lamé定理也给出连分数展开长度的上界

## 参见

- [[离散数学/concepts/欧几里得算法]]
- [[离散数学/concepts/最大公约数]]
- [[离散数学/concepts/Fibonacci数]]
- [[离散数学/concepts/整除]]
- [[离散数学/concepts/递推关系]]
