---
title: "TRANSPLANT"
type: concept
chapter: "第12章 二叉搜索树"
tags: [算法导论, 二叉搜索树, 删除, 子树替换]
sources: ["CLRS 4th ed., Section 12.3"]
date: 2026-04-22
related: ["[[12.3 插入和删除]]"]
aliases: [transplant, 子树替换]
---
# TRANSPLANT
> [!abstract] 概述
> ==TRANSPLANT== 是==二叉搜索树==删除操作的核心子程序。它将一棵子树 $v$ **替换**另一棵子树 $u$ 在其父节点中的位置。TRANSPLANT 本身不负责释放 $u$ 的内存，也不更新 $v$ 的子节点指针，仅处理 $u$ 的父节点与 $v$ 之间的连接关系。该操作在 $O(1)$ 时间内完成，是 `TREE-DELETE` 的基础构件。

## 定义
> [!def] TRANSPLANT
> 给定二叉搜索树 $T$ 和两个节点 $u$、$v$，`TRANSPLANT(T, u, v)` 用子树 $v$ 替换子树 $u$ 成为 $u$ 的父节点的子节点。
>
> 具体来说：
> - 若 $u$ 是根节点，则 $v$ 成为新的根
> - 若 $u$ 是其父节点的左子节点，则 $v$ 成为父节点的新左子节点
> - 若 $u$ 是其父节点的右子节点，则 $v$ 成为父节点的新右子节点
>
> 操作完成后，$v.p$ 被设置为 $u$ 的原父节点（除非 $v = NIL$）。

### 伪代码

```
TRANSPLANT(T, u, v)
1  if u.p == NIL
2      T.root = v
3  elseif u == u.p.left
4      u.p.left = v
5  else u.p.right = v
6  if v ≠ NIL
7      v.p = u.p
```

### 逐步执行示例

**示例1**：$u$ 是根节点

```
替换前 (u=6, v=8)：    替换后：
      6                    8
     / \                  /
    2   8       →        2
   / \   \              / \
  1   4   9            1   4
       / \                / \
      3   5              3   5
```

| 步骤 | 条件判断 | 操作 |
|------|---------|------|
| 1 | `u.p == NIL`（6 是根） | `T.root = v`，即 `T.root = 8` |
| 2 | `v ≠ NIL` | `v.p = u.p`，即 `8.p = NIL` |

注意：TRANSPLANT **不处理** $v$ 的子节点（8 的右子节点 9 仍然保留），也不释放 $u$（节点 6）。

**示例2**：$u$ 是父节点的左子节点

```
替换前 (u=2, v=4)：    替换后：
      6                    6
     / \                  / \
    2   8       →        4   8
   / \   \              / \   \
  1   4   9            1   3   9
     / \                    \
    3   5                    5
```

| 步骤 | 条件判断 | 操作 |
|------|---------|------|
| 1 | `u.p ≠ NIL`（2 的父是 6） | 跳过 |
| 2 | `u == u.p.left`（2 是 6 的左子节点） | `u.p.left = v`，即 `6.left = 4` |
| 3 | `v ≠ NIL` | `v.p = u.p`，即 `4.p = 6` |

## 核心性质

### 时间复杂度

> [!note] 时间复杂度：$O(1)$
> TRANSPLANT 仅执行常数次指针修改操作（最多修改 2 个指针：父节点的子指针和 $v$ 的父指针），不涉及任何遍历或搜索，因此时间为 $\Theta(1)$。

### TRANSPLANT 的职责边界

> [!warning] 重要：TRANSPLANT 不做的事
> TRANSPLANT **仅负责**将 $v$ "嫁接"到 $u$ 的父节点上，以下事项**不在**其职责范围内：
> - **不释放** $u$ 的内存
> - **不修改** $v$ 的子节点指针（$v.left$ 和 $v.right$ 保持不变）
> - **不维护** $u$ 原有子节点的连接（$u$ 的子节点会"悬空"）
>
> 这些额外工作由调用者（`TREE-DELETE`）负责处理。

### CLRS 第4版的设计动机

> [!note] 为什么需要 TRANSPLANT？
> 在 CLRS 第4版中，`TREE-DELETE` 需要处理三种情况：
> 1. $u$ 无子节点：直接删除
> 2. $u$ 有一个子节点：用该子节点替换 $u$
> 3. $u$ 有两个子节点：找到后继 $v$，用 $v$ 替换 $u$
>
> 情况 2 和情况 3 都涉及"用一棵子树替换另一棵子树在父节点中的位置"这一操作。将此逻辑抽取为 `TRANSPLANT` 子程序可以：
> - **避免代码重复**：删除的三种情况都复用同一段逻辑
> - **避免外部指针失效**：直接修改指针可能导致外部持有的引用失效，通过统一的子程序管理指针变更更安全
> - **提高可读性**：将复杂的指针操作封装为语义清晰的子操作

### 在 TREE-DELETE 中的作用

`TREE-DELETE(T, z)` 的删除逻辑可概括为：

```
TREE-DELETE(T, z)
1  if z.left == NIL
2      TRANSPLANT(T, z, z.right)       // 情况1/2：无左子节点
3  elseif z.right == NIL
4      TRANSPLANT(T, z, z.left)        // 情况2：无右子节点
5  else                                 // 情况3：有两个子节点
6      y = TREE-MINIMUM(z.right)       // 找后继
7      if y.p ≠ z
8          TRANSPLANT(T, y, y.right)   // 先把后继从原位置移出
9          y.right = z.right
10         y.right.p = y
11     TRANSPLANT(T, z, y)             // 用后继替换被删节点
12     y.left = z.left
13     y.left.p = y
```

可以看到，`TRANSPLANT` 在删除过程中被调用了 1-2 次，是整个删除算法的核心构件。

### 生活化类比

将 TRANSPLANT 想象为**公司组织架构调整**中的"岗位交接"：
- $u$ 是即将离职的员工，$v$ 是接替者
- TRANSPLANT 做的事情：让 $v$ 接管 $u$ 的上级关系（$v$ 的汇报对象变为 $u$ 的原上级，$u$ 的上级的下属变为 $v$）
- TRANSPLANT **不做**的事情：不安排 $u$ 原来的下属去向，不处理 $v$ 原来岗位的交接

## 章节扩展

| 操作 | 作用 | 时间 |
|------|------|------|
| [[算法导论/concepts/TREE-INSERT]] | 插入新节点 | $O(h)$ |
| TRANSPLANT | 替换子树位置 | $O(1)$ |
| TREE-DELETE | 删除节点（调用 TRANSPLANT） | $O(h)$ |

## 参见
- [[算法导论/concepts/二叉搜索树]] — BST 的定义与性质
- [[算法导论/concepts/TREE-INSERT]] — 向 BST 插入新节点
- [[算法导论/concepts/TREE-SEARCH]] — 在 BST 中查找关键字
- [[12.3 插入和删除]] — TREE-DELETE 的完整算法
- [[算法导论/concepts/散列表|散列表]] — 散列表的删除操作（使用惰性删除或开链法），与 BST 删除的思路完全不同
