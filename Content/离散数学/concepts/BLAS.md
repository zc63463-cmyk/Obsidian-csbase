---
title: BLAS
type: concept
tags: [离散数学, 线性代数, 数值计算]
date: 2026-04-24
aliases: [Basic Linear Algebra Subprograms, 基础线性代数子程序]
---

# BLAS

> [!abstract] 概述
> ==BLAS==（Basic Linear Algebra Subprograms）是基础线性代数子程序库，定义了向量-向量、矩阵-向量、矩阵-矩阵运算的标准接口。分为三级：BLAS-1（向量运算，$O(n)$）、BLAS-2（矩阵-向量运算，$O(n^2)$）、BLAS-3（矩阵-矩阵运算，$O(n^3)$）。高效的 BLAS 实现充分利用缓存层次结构，是科学计算和机器学习的底层计算基石。

## 定义

> [!def] 形式化定义
>
> BLAS（Basic Linear Algebra Subprograms）是一组规范化的底层线性代数运算接口，按计算复杂度分为三级：
>
> | 级别 | 名称 | 操作类型 | 计算量 | 数据重用 | 代表运算 |
> |:----:|:-----|:---------|:------:|:--------:|:---------|
> | BLAS-1 | 向量-向量 | $y \leftarrow \alpha x + y$ | $O(n)$ | 低 | 标量乘向量、向量点积、向量范数 |
> | BLAS-2 | 矩阵-向量 | $y \leftarrow \alpha Ax + \beta y$ | $O(n^2)$ | 中 | 矩阵-向量乘法、秩1更新 |
> | BLAS-3 | 矩阵-矩阵 | $C \leftarrow \alpha AB + \beta C$ | $O(n^3)$ | 高 | 矩阵乘法（GEMM）、矩阵求逆 |
>
> 其中 $\alpha, \beta$ 为标量，$x, y$ 为向量，$A, B, C$ 为矩阵。

> [!def] 关键运算详解
>
> **BLAS-1：`AXPY`（$y = \alpha x + y$）**
> - 对向量的每个元素执行一次乘加运算
> - 每个数据元素仅被访问一次，数据重用率最低
>
> **BLAS-2：`GEMV`（$y = \alpha Ax + \beta y$）**
> - 矩阵 $A$ 的每个元素被访问一次，向量 $x$ 的每个元素被访问 $n$ 次
> - 数据重用率中等，但受限于缓存容量
>
> **BLAS-3：`GEMM`（$C = \alpha AB + \beta C$）**
> - 矩阵乘法是 BLAS-3 的核心运算
> - 每个数据元素被重用 $O(n)$ 次，数据重用率最高
> - 通过分块（blocking）充分利用缓存层次结构

## 核心性质

| 性质 | 描述 |
|:-----|:-----|
| ==层级越高效率越高== | BLAS-3 的运算强度（flops/byte）远高于 BLAS-1 和 BLAS-2 |
| ==缓存友好== | 高效 BLAS 实现通过分块策略最大化缓存利用率 |
| ==接口标准化== | 统一接口使得算法可在不同硬件平台上移植 |
| ==性能关键== | 几乎所有高层线性代数库（LAPACK、MATLAB、NumPy）都基于 BLAS |
| ==硬件优化== | 现代 BLAS 实现（如 OpenBLAS、MKL）针对特定 CPU 架构深度优化 |

**运算强度分析**（flops per byte）：
- BLAS-1：$O(1/n)$，受内存带宽限制
- BLAS-2：$O(1)$，接近内存带宽瓶颈
- BLAS-3：$O(n)$，可充分利用计算单元，达到接近峰值性能

## 应用场景

BLAS 是科学计算和机器学习的底层基石：

- **科学计算**：LAPACK（线性方程组、特征值、SVD）完全基于 BLAS 构建
- **机器学习**：深度学习框架（PyTorch、TensorFlow）的核心张量运算依赖 BLAS
- **数值线性代数**：迭代法（CG、GMRES）、直接法（LU 分解、Cholesky 分解）
- **信号处理**：FFT、滤波、相关运算
- **数据科学**：NumPy、R、MATLAB 的矩阵运算底层调用 BLAS

## 参见

- [[矩阵]] -- BLAS 运算的基本对象
- [[缓存优化]] -- 高效 BLAS 实现的核心技术：分块与缓存层次结构利用
- [[并行计算模型]] -- BLAS 运算在并行系统上的性能分析
- [[PRAM模型]] -- 并行矩阵运算的理论分析模型
