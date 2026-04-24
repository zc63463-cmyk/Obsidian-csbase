---
title: RSA正确性定理
type: theorem
tags: [离散数学, 算法, 数论, 密码学, RSA]
date: 2026-04-24
aliases: [RSA Correctness Theorem]
related:
  - [[离散数学/concepts/公钥密码学]]
  - [[离散数学/concepts/模运算]]
source_chapter: "Ch31"
---

# RSA正确性定理

> [!abstract] 概述
> ==RSA正确性定理==（RSA Correctness Theorem）：在RSA密码系统中，对任意消息 $m \in \mathbb{Z}_n$，使用公钥 $(e, n)$ 加密后再使用私钥 $(d, n)$ 解密，能够正确恢复原始消息，即 $(m^e)^d \equiv m \pmod{n}$。

## 定理陈述

> [!def] 形式化陈述
>
> **RSA密钥生成**：
> 1. 选择两个大素数 $p$ 和 $q$，计算 $n = pq$
> 2. 计算欧拉函数 $\varphi(n) = (p-1)(q-1)$
> 3. 选择加密指数 $e$，满足 $1 < e < \varphi(n)$ 且 $\gcd(e, \varphi(n)) = 1$
> 4. 计算解密指数 $d$，满足 $ed \equiv 1 \pmod{\varphi(n)}$
>
> **RSA正确性定理**：对任意消息 $m \in \mathbb{Z}_n = \{0, 1, \ldots, n-1\}$：
> $$m^{ed} \equiv m \pmod{n}$$
>
> 等价地，加密 $c \equiv m^e \pmod{n}$ 后解密 $c^d \equiv m \pmod{n}$。

## 证明概要

> [!info] 证明思路
>
> 证明的核心是利用欧拉定理，但需要分两种情况讨论，因为欧拉定理要求 $\gcd(m, n) = 1$，而 $m$ 可能与 $n$ 不互素。
>
> ### 情况1：$\gcd(m, n) = 1$
>
> 这是最直接的情况，直接应用[[离散数学/concepts/欧拉定理|欧拉定理]]：
>
> 1. 由密钥生成，$ed \equiv 1 \pmod{\varphi(n)}$，即存在整数 $k$ 使得：
>   $$ed = k \cdot \varphi(n) + 1$$
>
> 2. 由欧拉定理（因为 $\gcd(m, n) = 1$）：
>   $$m^{\varphi(n)} \equiv 1 \pmod{n}$$
>
> 3. 因此：
>   $$m^{ed} = m^{k \cdot \varphi(n) + 1} = (m^{\varphi(n)})^k \cdot m \equiv 1^k \cdot m = m \pmod{n}$$
>
> ### 情况2：$\gcd(m, n) > 1$
>
> 此时 $m$ 与 $n = pq$ 不互素。由于 $n = pq$ 且 $0 \leq m < n$，$\gcd(m, n) > 1$ 意味着 $p \mid m$ 或 $q \mid m$（或两者同时）。
>
> **子情况2a：$p \mid m$ 但 $q \nmid m$**
>
> 1. $p \mid m$，所以 $m \equiv 0 \pmod{p}$，故 $m^{ed} \equiv 0 \equiv m \pmod{p}$ ✓
>
> 2. $q \nmid m$，所以 $\gcd(m, q) = 1$。由费马小定理（$q$ 是素数）：
>   $$m^{q-1} \equiv 1 \pmod{q}$$
>
> 3. 由于 $ed = k(p-1)(q-1) + 1$：
>   $$m^{ed} = m^{k(p-1)(q-1)+1} = (m^{q-1})^{k(p-1)} \cdot m \equiv 1^{k(p-1)} \cdot m = m \pmod{q}$$
>
> 4. 由中国剩余定理，$m^{ed} \equiv m \pmod{p}$ 且 $m^{ed} \equiv m \pmod{q}$，故：
>   $$m^{ed} \equiv m \pmod{pq} = m \pmod{n}$$
>
> **子情况2b：$p \mid m$ 且 $q \mid m$**
>
> 1. $pq \mid m$，但 $0 \leq m < n = pq$，故 $m = 0$
> 2. $0^{ed} = 0 \equiv 0 = m \pmod{n}$ ✓
>
> ### 总结
>
> 在所有情况下，$m^{ed} \equiv m \pmod{n}$ 均成立，RSA解密正确。
>
> **参考资源**：
> - SJSU RSA数学基础：https://www.cs.sjsu.edu/~stamp/CS265/SecurityEngineering/chapter5_SE/RSAmath.html
> - UCSD CSE107现代密码学：https://cseweb.ucsd.edu/classes/wi25/cse107-a/slides/13-rsa.pdf

## 关键推论

- **解密唯一性**：在 $\mathbb{Z}_n$ 上，RSA的加密-解密映射是双射（一一对应），保证了消息的可逆性
- **模幂运算效率**：加密和解密都只需 $O(\log e)$ 或 $O(\log d)$ 次模乘法（利用快速幂算法），效率很高
- **安全性基础**：RSA的安全性基于大整数分解的困难性——已知 $n$ 和 $e$，求 $d$ 需要知道 $\varphi(n) = (p-1)(q-1)$，这等价于分解 $n = pq$
- **选择密文攻击的防范**：实际应用中需配合适当的填充方案（如OAEP）以防止选择密文攻击

## 应用场景

在算法导论（CLRS）Ch31数论算法中的具体应用：

1. **[[离散数学/concepts/公钥密码学]]**：RSA是最广泛使用的公钥密码系统之一，用于安全通信、数字签名、密钥交换等
2. **SSL/TLS协议**：HTTPS中的密钥交换阶段使用RSA加密对称密钥
3. **数字签名**：发送者用私钥对消息摘要签名，接收者用公钥验证，保证消息的完整性和不可否认性
4. **[[离散数学/concepts/模运算]]**：RSA的整个机制建立在模运算的理论基础上，展示了数论在实际系统中的核心地位
5. **[[离散数学/concepts/快速幂]]**：RSA的加密解密过程需要高效的模幂运算，直接使用快速幂算法实现

## 参见

- [[离散数学/concepts/公钥密码学]]
- [[离散数学/concepts/模运算]]
- [[离散数学/concepts/欧拉函数]]
- [[离散数学/concepts/费马小定理]]
- [[离散数学/concepts/模逆元]]
- [[离散数学/concepts/快速幂]]
- [[离散数学/concepts/中国剩余定理]]
- [[离散数学/concepts/RSA密码系统]]
