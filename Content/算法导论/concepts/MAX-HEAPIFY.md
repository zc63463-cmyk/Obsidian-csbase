---
title: "MAX-HEAPIFY"
type: concept
chapter: "第6章 堆排序"
tags: [算法导论, 堆, 算法]
sources: ["CLRS 4th ed., Section 6.2"]
date: 2026-04-22
related: ["[[6.2 维护堆性质]]"]
aliases: [堆化, heapify, MAX-HEAPIFY]
---
# MAX-HEAPIFY
> [!abstract] 概述
> ==MAX-HEAPIFY== 是维护 [[算法导论/concepts/二叉堆|二叉堆]] 最大堆性质的核心原语，输入为数组 $A$ 和下标 $i$，假设以 $\text{LEFT}(i)$ 和 $\text{RIGHT}(i)$ 为根的子树已经是最大堆，但 $A[i]$ 可能违反最大堆性质，通过让 $A[i]$ 在堆中"逐级下降"来恢复最大堆性质。

## 定义
> [!def] MAX-HEAPIFY(A, i)
> **输入**：数组 $A$ 和下标 $i$，其中以 $\text{LEFT}(i)$ 和 $\text{RIGHT}(i)$ 为根的两棵子树都是最大堆，但 $A[i]$ 可能小于其子节点。
>
> **过程**：
> 1. 设 $l = \text{LEFT}(i)$，$r = \text{RIGHT}(i)$。
> 2. 在 $A[i]$、$A[l]$、$A[r]$ 中找到最大值，记其下标为 $\text{largest}$。
> 3. 若 $\text{largest} \neq i$，交换 $A[i]$ 与 $A[\text{largest}]$，然后递归地对 $\text{largest}$ 调用 $\text{MAX-HEAPIFY}(A, \text{largest})$。
>
> **时间复杂度**：$O(\lg n)$，其中 $n$ 为堆中元素个数。

## 核心性质

### 递归关系式
设 $T(n)$ 为 MAX-HEAPIFY 在一个大小为 $n$ 的堆上的运行时间。在最坏情况下，每次递归调用处理的子树大小至多为 $2n/3$（当底层恰好半满时），因此：

$$T(n) \leq T(2n/3) + \Theta(1)$$

由主定理可得 $T(n) = O(\lg n)$。

### 核心原语地位
MAX-HEAPIFY 是所有堆操作的核心构建块：
- [[算法导论/concepts/BUILD-MAX-HEAP|BUILD-MAX-HEAP]]：自底向上对每个非叶节点调用 MAX-HEAPIFY。
- [[算法导论/concepts/堆排序|堆排序]]：在 BUILD-MAX-HEAP 之后反复调用。
- [[算法导论/concepts/优先队列|优先队列]] 的 EXTRACT-MAX 操作：取出堆顶后调用 MAX-HEAPIFY 恢复堆性质。

### 迭代版本
MAX-HEAPIFY 可以改写为迭代（循环）版本，避免递归调用的开销，逻辑等价但常数因子更优。

## 章节扩展
### 第6章：堆排序
MAX-HEAPIFY 是堆排序算法中维护堆性质的关键步骤。在排序过程中，每次将堆顶元素与末尾交换后，需要对新的堆顶调用 MAX-HEAPIFY 来恢复最大堆性质。

### 第6章：建堆
BUILD-MAX-HEAP 通过从最后一个非叶节点到根节点，依次调用 MAX-HEAPIFY 来构建最大堆。

## 参见
- [[算法导论/concepts/二叉堆]]
- [[算法导论/concepts/递归关系式]]
- [[算法导论/concepts/主定理]]
- [[算法导论/concepts/BUILD-MAX-HEAP]]
