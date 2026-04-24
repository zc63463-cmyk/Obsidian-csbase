---
title: "BUILD-MAX-HEAP"
type: concept
chapter: "第6章 堆排序"
tags: [算法导论, 堆, 算法]
sources: ["CLRS 4th ed., Section 6.3"]
date: 2026-04-22
related: ["[[6.3 建堆]]"]
aliases: [建堆, build heap, BUILD-MAX-HEAP]
---
# BUILD-MAX-HEAP
> [!abstract] 概述
> ==BUILD-MAX-HEAP== 将一个无序的输入数组转化为一个满足最大堆性质的 [[算法导论/concepts/二叉堆|二叉堆]]，采用自底向上的策略，对每个非叶节点调用 [[算法导论/concepts/MAX-HEAPIFY|MAX-HEAPIFY]]。

## 定义
> [!def] BUILD-MAX-HEAP(A)
> **输入**：数组 $A[1..n]$。
>
> **过程**：
> 1. $\text{heap-size}[A] = n$
> 2. $\textbf{for } i = \lfloor n/2 \rfloor \textbf{ downto } 1$
> 3. $\qquad$ $\text{MAX-HEAPIFY}(A, i)$
>
> 从最后一个非叶节点 $\lfloor n/2 \rfloor$ 开始，自底向上逐个调用 MAX-HEAPIFY，最终将整个数组转化为最大堆。
>
> **时间复杂度**：$O(n)$。

## 核心性质

### 时间复杂度为 $O(n)$ 而非 $O(n \lg n)$
一个常见的错误直觉是：有 $\lfloor n/2 \rfloor$ 个非叶节点，每个调用 MAX-HEAPIFY 耗时 $O(\lg n)$，因此总时间为 $O(n \lg n)$。然而这一上界并不紧确。

**精确分析**：对于高度为 $h$ 的节点，MAX-HEAPIFY 的运行时间为 $O(h)$。堆中高度为 $h$ 的节点最多有 $\lceil n/2^{h+1} \rceil$ 个。因此总时间为：

$$T(n) = \sum_{h=0}^{\lfloor \lg n \rfloor} \left\lceil \frac{n}{2^{h+1}} \right\rceil O(h) = O\left(n \sum_{h=0}^{\infty} \frac{h}{2^h}\right) = O(n)$$

其中利用了 $\sum_{h=0}^{\infty} h/2^h = 2$（一个收敛的等比级数）。

### 为什么自底向上？
从底层开始处理的原因是：MAX-HEAPIFY 的前提是子树已经是最大堆。自底向上保证了在处理节点 $i$ 时，其左右子树已经被处理过，满足调用前提。

### Floyd 建堆法
该算法由 Robert W. Floyd 于 1964 年提出，也称为 Floyd 建堆法（Floyd's heap construction），是线性时间建堆的经典方法。

## 章节扩展
### 第6章：堆排序
BUILD-MAX-HEAP 是 [[算法导论/concepts/堆排序|堆排序]] 的第一步。建堆完成后，排序算法通过反复交换堆顶与末尾元素并缩小堆规模来完成排序。

### 第6章：优先队列
如果需要从一个无序数组快速构建优先队列，BUILD-MAX-HEAP 提供了 $O(n)$ 时间的构建方法。

## 参见
- [[算法导论/concepts/MAX-HEAPIFY]]
- [[算法导论/concepts/二叉堆]]
- [[算法导论/concepts/堆排序]]
