---
title: "Fibonacci数"
type: concept
chapter: "第3章 运行时间刻画"
tags: [算法导论, 数学函数, 递归]
sources: ["CLRS 4th ed., Section 3.3"]
date: 2026-04-22
related: ["[[3.3 标准记号与常见函数]]"]
aliases: [Fibonacci Numbers, 斐波那契数]
---
# Fibonacci数
> [!abstract] 概述
> ==Fibonacci数== 是经典的递归定义序列，$F_n = F_{n-1} + F_{n-2}$，其增长速率由**黄金比例** $\varphi$ 决定。

## 定义
> [!def] Fibonacci数
> $$F_0 = 0,\quad F_1 = 1,\quad F_n = F_{n-1} + F_{n-2}\quad (n \geq 2)$$

## 核心性质
- **黄金比例**：$\varphi = \dfrac{1 + \sqrt{5}}{2} \approx 1.61803$，$\hat{\varphi} = \dfrac{1 - \sqrt{5}}{2} \approx -0.61803$
- **Binet 公式**（闭合形式）：$F_n = \dfrac{\varphi^n - \hat{\varphi}^n}{\sqrt{5}} = \left\lfloor \dfrac{\varphi^n}{\sqrt{5}} + \dfrac{1}{2} \right\rfloor$
- 渐近行为：$F_n = \Theta(\varphi^n)$，即 $F_n$ 以指数速率增长。
- Fibonacci 数在算法分析中频繁出现，如朴素递归计算 $F_n$ 的时间复杂度为 $\Omega(\varphi^n)$。
- **恒等式**：$F_0 + F_1 + \cdots + F_n = F_{n+2} - 1$；$F_n^2 + F_{n+1}^2 = F_{2n+1}$

## 章节扩展
### 第3章：运行时间刻画
- [[3.3 标准记号与常见函数]] 给出 Fibonacci 数的定义与 Binet 公式的推导。

## 参见
- [[算法导论/concepts/阶乘]]
- [[算法导论/concepts/对数函数]]
