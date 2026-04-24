---
title: Kleene定理
type: theorem
tags: [离散数学, 计算建模, 自动机理论, 形式语言]
date: 2026-04-24
aliases: [Kleene's Theorem, Kleene's Theorem on Regular Languages]
related:
  - "[[离散数学/concepts/算法]]"
  - "[[离散数学/concepts/递归定义]]"
source_chapter: "Ch13"
source_book: "离散数学（Rosen）"
---

# Kleene定理

> [!abstract] 概述
> ==Kleene定理==（Kleene's Theorem）：一个语言是**正则的**（即可以被某个正则表达式描述）当且仅当它可以被某个**有限自动机**识别。换言之，正则表达式、DFA和NFA三者定义的语言类完全相同。

## 定理陈述

> [!def] 形式化陈述
> **定理**（Kleene, 1956）：设 $\Sigma$ 是一个字母表，$L \subseteq \Sigma^*$ 是一个语言。以下三个命题等价：
>
> 1. $L$ 是一个正则语言（存在正则表达式 $r$ 使得 $L = L(r)$）
> 2. $L$ 可以被某个**确定性有限自动机**（DFA）识别
> 3. $L$ 可以被某个**非确定性有限自动机**（NFA）识别

### 核心意义

Kleene定理建立了正则表达式的描述能力与有限自动机的计算能力之间的**等价性**，是形式语言理论的基石之一。

## 证明概要

> [!info] 证明思路
> 证明需要建立三个方向的转化，通常分为以下四个部分：

### 第一部分：正则表达式 → NFA（结构归纳构造）

对正则表达式的结构进行归纳：

- **基础情况**：
  - $\emptyset$：构造只有一个状态的NFA，不接受任何字符串
  - $\varepsilon$：构造一个NFA，起始状态即为接受状态
  - $a \in \Sigma$：构造两个状态的NFA，从起始状态通过边 $a$ 到达接受状态

- **归纳步骤**：
  - **并** $r_1 \cup r_2$：添加新的起始状态，通过 $\varepsilon$-转移分别连接到 $L(r_1)$ 和 $L(r_2)$ 的NFA
  - **连接** $r_1 \circ r_2$：将 $L(r_1)$ 的NFA的接受状态通过 $\varepsilon$-转移连接到 $L(r_2)$ 的NFA的起始状态
  - **Kleene闭包** $r_1^*$：添加新的起始/接受状态，用 $\varepsilon$-转移实现循环

### 第二部分：NFA → DFA（子集构造法）

将NFA的状态集合的幂集作为DFA的状态空间：
- DFA的每个状态对应NFA状态集的一个子集
- DFA的起始状态是包含NFA起始状态的集合
- DFA的转移函数通过对NFA转移函数取 $\varepsilon$-闭包来定义

状态数最多为 $2^n$（$n$ 为NFA的状态数）。

### 第三部分：DFA → 正则表达式（状态消除法/GNFA转化）

- 将DFA转化为**广义非确定性有限自动机**（GNFA）
- GNFA允许转移边上标记正则表达式（而非仅单个符号）
- 通过逐步消除中间状态，最终得到仅含起始状态和接受状态的GNFA
- 起始状态到接受状态之间的转移边上的正则表达式即为所求

消除状态 $q_{rip}$ 时，对所有经过 $q_{rip}$ 的路径 $q_i \to q_{rip} \to q_j$，更新转移标签：
$$R(q_i, q_j) \leftarrow R(q_i, q_j) \cup R(q_i, q_{rip}) \cdot R(q_{rip}, q_{rip})^* \cdot R(q_{rip}, q_j)$$

### 第四部分：DFA → NFA（平凡包含）

每个DFA本身就是一个特殊的NFA（确定性是非确定性的特例），故 $L_{DFA} \subseteq L_{NFA}$。

### 参考文献
- Kleene, S. C. (1956). Representation of events in nerve nets and finite automata. *Automata Studies*, 34, 3-41.
- 证明详解: [Cambridge - Kleene's Theorem](http://www.cl.cam.ac.uk/teaching/1516/DiscMath/lectures/lecture5.pdf)
- 教学讲义: [Hunter CUNY - Notes on Kleene's Theorem](https://cs.hunter.cuny.edu/~sweiss/course_materials/csci265/KleenesTheorem.pdf)
- Cornell课程: [CS 2800 - Kleene's Theorem](https://www.cs.cornell.edu/courses/cs2800/2017sp/lectures/lec27-kleene.html)

## 关键推论

- **推论1**：正则语言在并、连接、Kleene闭包运算下封闭（由正则表达式的定义直接得出）
- **推论2**：正则语言在补、交运算下封闭（可通过DFA的补和交构造证明）
- **推论3**：有限语言一定是正则语言（可以枚举所有字符串用并运算连接）
- **推论4**（Pumping引理）：若 $L$ 是正则语言，则存在常数 $p$（泵长度），使得 $L$ 中任何长度 $\geq p$ 的字符串都可以被"泵化"

## 应用场景

- **正则表达式引擎**：文本编辑器、编程语言中的模式匹配（grep、sed、Perl正则等）的理论基础
- **词法分析**：编译器的词法分析器使用DFA/正则表达式来识别token
- **协议验证**：在通信协议验证中，用有限自动机建模协议行为
- **DNA序列分析**：生物信息学中使用正则表达式描述DNA模式
- **电路设计**：有限状态机是数字电路设计的核心模型

## 参见

- [[离散数学/concepts/算法]]
- [[离散数学/concepts/递归定义]]
- [[离散数学/concepts/递归关系式]]
- [[停机问题不可判定定理]]
