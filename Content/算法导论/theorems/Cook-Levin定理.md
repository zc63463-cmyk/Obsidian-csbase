---
title: Cook-Levin定理
type: theorem
tags: [离散数学, 算法, 计算复杂性, NP完全性]
date: 2026-04-24
aliases: [Cook-Levin Theorem, Cook定理, Levin定理]
related:
  - "[[离散数学/concepts/可满足性]]"
  - "[[离散数学/concepts/布尔代数]]"
  - "[[离散数学/concepts/逻辑电路]]"
  - "[[离散数学/concepts/命题逻辑]]"
source_chapter: "Ch34"
---

# Cook-Levin定理

> [!abstract] 概述
> ==Cook-Levin定理==（Cook-Levin Theorem）：==布尔可满足性问题（SAT）是NP完全的==。这是计算复杂性理论中的奠基性结果，由 Stephen Cook（1971）和 Leonid Levin（1973）独立发现，确立了 SAT 作为"最难"NP问题的地位。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Cook, 1971; Levin, 1973）：布尔可满足性问题（SAT）是 ==NP 完全==的。即：
> 1. **SAT $\in$ NP**：给定一个布尔公式 $\varphi$ 和一组赋值，可以在多项式时间内验证该赋值是否满足 $\varphi$
> 2. **SAT 是 NP 困难的**：对任意语言 $L \in \text{NP}$，存在多项式时间归约 $L \leq_p \text{SAT}$
>
> 推论：若 SAT $\in$ P，则 P = NP。

## 证明概要

> [!info] 证明思路
> 证明分为两部分。SAT $\in$ NP 是显然的（赋值即为证书）。核心在于证明 NP 困难性：将任意 NP 问题的非确定型图灵机（NTM）计算编码为布尔公式。
>
> **关键步骤**：
>
> **步骤 1：确定 NTM 模型**。设语言 $L \in \text{NP}$，则存在 NTM $N$ 在多项式时间 $p(n)$ 内接受 $L$。对长度为 $n$ 的输入 $x$，$N$ 的计算恰好在 $p(n)$ 步内完成（可通过添加"接受后空转"来补齐步数）。
>
> **步骤 2：构造"计算表格"**。将 $N$ 在输入 $x$ 上的计算表示为一张 $(p(n)+1) \times p(n)$ 的表格 $C$，其中：
> - 第 $i$ 行记录第 $i$ 步时磁带的内容
> - 每个单元格包含一个磁带符号
> - 表格的第 0 行是输入 $x$（后补空白符）
>
> **步骤 3：定义布尔变量**。引入布尔变量：
> - $T[i,j,k]$：表格第 $i$ 行第 $j$ 列的符号为 $a_k$（$0 \leq i \leq p(n)$，$0 \leq j \leq p(n)$，$0 \leq k \leq |\Gamma|$）
> - $H[i,j]$：第 $i$ 步时读写头在第 $j$ 列
> - $Q[i,q]$：第 $i$ 步时状态为 $q_q$
>
> 变量总数为 $O(p(n)^2)$，是多项式级别的。
>
> **步骤 4：构造约束公式**。将 NTM 计算的正确性编码为以下子公式的合取：
> - $\varphi_{\text{cell}}$：每个单元格恰好包含一个符号
> - $\varphi_{\text{start}}$：第 0 行正确编码输入 $x$，初始状态为 $q_0$，读写头在位置 0
> - $\varphi_{\text{move}}$：相邻两行之间的转换符合 NTM 的转移函数
> - $\varphi_{\text{accept}}$：某一步进入接受状态 $q_{\text{accept}}$
>
> 最终公式 $\varphi = \varphi_{\text{cell}} \wedge \varphi_{\text{start}} \wedge \varphi_{\text{move}} \wedge \varphi_{\text{accept}}$。
>
> **步骤 5：正确性论证**。$\varphi$ 可满足当且仅当 NTM $N$ 接受输入 $x$。公式 $\varphi$ 的大小为 $O(p(n)^2)$，构造时间为多项式。
>
> **学术参考**：CMU 教学讲义详细给出了完整证明过程：https://www.cs.cmu.edu/~lblum/flac/Lectures_pdf/Lecture17.pdf

## 关键推论

- **3-SAT 也是 NP 完全的**：可以将任意 SAT 实例通过 Tseitin 变换在多项式时间内转化为 3-CNF-SAT 实例
- **NP 完全性归约链**：通过从 SAT 出发的多项式时间归约，已证明数千个问题都是 NP 完全的
- **P vs NP**：若 P $\neq$ NP（普遍猜测），则 SAT 不存在多项式时间算法
- **实际意义**：SAT 求解器的效率直接影响硬件验证、软件测试、AI 规划等领域

## 应用场景

- **算法导论 Ch34**：作为 NP 完全性理论的起点，所有其他 NP 完全性证明都通过归约到 SAT（或 3-SAT）来完成
- **硬件验证**：将电路正确性检查编码为 SAT 问题，使用 SAT 求解器验证
- **软件测试**：将程序路径覆盖条件编码为 SAT 公式
- **AI 规划**：将规划问题编码为 SAT，利用高效求解器求解
- **密码分析**：某些密码系统的安全性依赖于 SAT 问题的困难性

## 参见

- [[离散数学/concepts/可满足性]] -- SAT 问题的定义与性质
- [[离散数学/concepts/布尔代数]] -- 布尔公式与布尔运算的代数基础
- [[离散数学/concepts/逻辑电路]] -- 布尔公式在电路中的物理实现
- [[离散数学/concepts/命题逻辑]] -- 命题逻辑是 SAT 问题的逻辑基础
