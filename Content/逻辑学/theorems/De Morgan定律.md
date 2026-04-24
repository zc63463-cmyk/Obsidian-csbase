---
title: De Morgan定律
type: theorem
tags: [逻辑学, 命题逻辑, 逻辑等价]
date: 2026-04-24
aliases: [De Morgan's Laws, 德摩根定律]
related:
  - "[[逻辑学/concepts/真值表]]"
  - "[[逻辑学/concepts/逻辑等价]]"
  - "[[逻辑学/concepts/重言式与矛盾式]]"
source_chapter: "Ch08"
source_book: "逻辑学导论"
---

# De Morgan定律

> [!abstract] 概述
> ==De Morgan定律==（De Morgan's Laws）：否定一个合取式等价于分别否定各合取支后再取析取；否定一个析取式等价于分别否定各析取支后再取合取。它是命题逻辑中最基本也最常用的逻辑等价关系之一。

## 定理陈述

> [!def] 形式化陈述
> **定理**（De Morgan定律）：设 $P$、$Q$ 为任意命题，则
>
> 1. $\neg(P \land Q) \equiv \neg P \lor \neg Q$（合取的否定 = 否定的析取）
> 2. $\neg(P \lor Q) \equiv \neg P \land \neg Q$（析取的否定 = 否定的合取）
>
> 其中 $\equiv$ 表示逻辑等价关系，即等号两边的命题形式在所有真值指派下具有相同的真值。

**各项说明：**
- $\neg$：否定（逻辑非），将命题的真值取反
- $\land$：合取（逻辑与），仅当两个命题都为真时为真
- $\lor$：析取（逻辑或），仅当两个命题都为假时为假
- $\equiv$：逻辑等价，要求在所有真值组合下真值相同

## 证明概要

> [!info] 证明思路（真值表验证）

### 核心思想

通过穷举 $P$ 和 $Q$ 的所有真值组合（共4种），逐一验证等号两边的真值是否完全一致。

### 详细步骤

**第一步：构造真值表**

| $P$ | $Q$ | $P \land Q$ | $\neg(P \land Q)$ | $\neg P$ | $\neg Q$ | $\neg P \lor \neg Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | T | **F** | F | F | **F** |
| T | F | F | **T** | F | T | **T** |
| F | T | F | **T** | T | F | **T** |
| F | F | F | **T** | T | T | **T** |

比较第4列与第7列，所有行的真值完全一致，故 $\neg(P \land Q) \equiv \neg P \lor \neg Q$ 成立。

**第二步：同理验证第二式**

| $P$ | $Q$ | $P \lor Q$ | $\neg(P \lor Q)$ | $\neg P$ | $\neg Q$ | $\neg P \land \neg Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | T | **F** | F | F | **F** |
| T | F | T | **F** | F | T | **F** |
| F | T | T | **F** | T | F | **F** |
| F | F | F | **T** | T | T | **T** |

比较第4列与第7列，所有行的真值完全一致，故 $\neg(P \lor Q) \equiv \neg P \land \neg Q$ 成立。

**第三步：推广到 $n$ 个命题**

De Morgan定律可以推广到任意有限个命题的情形：

$$\neg(P_1 \land P_2 \land \cdots \land P_n) \equiv \neg P_1 \lor \neg P_2 \lor \cdots \lor \neg P_n$$

$$\neg(P_1 \lor P_2 \lor \cdots \lor P_n) \equiv \neg P_1 \land \neg P_2 \land \cdots \land \neg P_n$$

证毕。$\blacksquare$

## 关键推论

- **推论1（与集合运算的对应）**：De Morgan定律在集合论中有精确对应——补集的交集等于交集的补集，补集的并集等于并集的补集：$\overline{A \cap B} = \overline{A} \cup \overline{B}$，$\overline{A \cup B} = \overline{A} \cap \overline{B}$。这反映了逻辑运算与集合运算之间的深层同构关系。
- **推论2（电路设计中的应用）**：在数字电路中，De Morgan定律允许用与非门（NAND）和或非门（NOR）相互替代，是电路简化的基础。
- **推论3（谓词逻辑中的推广）**：$\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)$ 和 $\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)$，这是 De Morgan 定律在量词上的自然推广。

## 应用场景

1. **逻辑等价变换**：在 [[逻辑学/concepts/逻辑等价|逻辑等价]] 的证明中，De Morgan定律是最常用的替换规则之一，允许将否定符号"内移"到各个命题变项上。
2. **形式证明**：在 [[逻辑学/concepts/自然演绎|自然演绎]] 系统中，De Morgan定律作为替换规则，可以用于简化复合命题的表达形式。
3. **日常推理**：例如"并非（他既聪明又勤奋）"等价于"他不聪明，或者他不勤奋"——这是第一式在日常语言中的直接体现。
4. **命题的标准化**：将任意复合命题转化为否定范式（NNF）时，De Morgan定律是核心工具。

## 参见

- [[逻辑学/concepts/真值表]] — De Morgan定律的验证工具
- [[逻辑学/concepts/逻辑等价]] — De Morgan定律作为逻辑等价关系的典型实例
- [[逻辑学/concepts/重言式与矛盾式]] — De Morgan等价式的实质等值是重言式
- [[逻辑学/concepts/量词]] — De Morgan定律在谓词逻辑中的推广
