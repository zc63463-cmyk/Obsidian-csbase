---
title: "RB-DELETE-FIXUP"
type: concept
chapter: "第13章 红黑树"
tags: [算法导论, 数据结构, 红黑树, 删除]
sources: ["CLRS 4th ed., Section 13.3"]
date: 2026-04-22
related: ["[[算法导论/concepts/13.4 删除]]"]
aliases: [RB-DELETE-FIXUP, 红黑树删除修复]
---
# RB-DELETE-FIXUP

> [!abstract] 概述
> ==RB-DELETE-FIXUP== 是红黑树删除操作中的**修复过程**。当被删除（或被移动）的节点 $y$ 为黑色时，会导致某些路径上的黑色节点数减少，违反红黑性质 5。RB-DELETE-FIXUP 通过 [[算法导论/concepts/额外黑色|额外黑色]] 机制和**旋转 + 变色**操作恢复红黑性质，最多执行 **3 次旋转**，总时间复杂度为 $O(\lg n)$。

## 定义

> [!def] RB-DELETE-FIXUP(T, x)
> 给定红黑树 $T$ 和"问题节点" $x$（$x$ 带有 [[算法导论/concepts/额外黑色|额外黑色]]），RB-DELETE-FIXUP 通过迭代修复，消除额外黑色，恢复 $T$ 的所有红黑性质。

## 问题来源

在 RB-DELETE 中，设 $y$ 是从树中实际移除的节点，$x$ 是替代 $y$ 位置的节点：

- 若 $y$ 为**红色**：删除不影响任何路径的黑高度，红黑性质自动满足，无需修复。
- 若 $y$ 为**黑色**：删除导致经过 $x$ 的所有路径上黑色节点数减少 1，违反性质 5。此时需要 RB-DELETE-FIXUP 来修复。

## 四种情况分析

设 $x$ 为问题节点（带有额外黑色），$w = x$ 的**兄弟节点**（sibling）。以下分析假设 $x$ 是其父节点 $x.p$ 的**左子节点**。$x$ 是右子节点的情况完全对称。

### Case 1：兄弟 $w$ 为红色

```
      p(B)               p(B)
     /    \    →        /    \
   x(??)  w(R)       x(??)  w(B)
          / \               / \
        a(B) b(B)         a(B) b(R)
                                \
                                 c(R)
```

**处理方法：**
1. 将 $w$ 着为黑色
2. 将 $x.p$ 着为红色
3. 对 $x.p$ 执行**左旋** [[算法导论/concepts/旋转]]
4. 更新 $w = x.p.right$（新的兄弟节点，现在是黑色的）
5. 转入 **Case 2、3 或 4**

**效果：** Case 1 本身不修复问题，而是将红色的兄弟转化为黑色的兄弟，使情况落入 Case 2/3/4 的范畴。Case 1 最多执行 1 次。

### Case 2：兄弟 $w$ 为黑色，$w$ 的两个子节点都为黑色

```
      p(?)               p(?)
     /    \    →        /    \
   x(??)  w(B)       x(??)  w(R)
          / \               / \
        a(B) b(B)         a(B) b(B)
```

**处理方法：**
1. 将 $w$ 着为红色
2. 令 $x = x.p$，将**额外黑色上移一层**到父节点

**效果：** $x$ 原来所在路径失去一个黑色（$w$ 从黑变红），但额外黑色上移到 $x.p$，使得 $x.p$ 的路径上的黑色数保持一致。如果 $x.p$ 原来是红色，则它吸收额外黑色变为"双重黑色"再变为黑色，循环终止；如果 $x.p$ 原来是黑色，则它变为带有额外黑色的新问题节点，继续循环。

### Case 3：兄弟 $w$ 为黑色，$w$ 的左子节点为红色，右子节点为黑色

```
      p(?)               p(?)
     /    \    →        /    \
   x(??)  w(B)       x(??)  a(B)
          / \                \
        a(R) b(B)            w(R)
                                \
                                b(B)
```

**处理方法：**
1. 将 $w$ 的左子节点 $a$ 着为黑色
2. 将 $w$ 着为红色
3. 对 $w$ 执行**右旋** [[算法导论/concepts/旋转]]
4. 更新 $w = x.p.right$（新的兄弟节点）
5. 转入 **Case 4**

**效果：** Case 3 本身不修复问题，而是调整兄弟子树的结构，将一个红色节点移到 $w$ 的右侧，为 Case 4 做准备。

### Case 4：兄弟 $w$ 为黑色，$w$ 的右子节点为红色

```
      p(?)               w(?)
     /    \    →        /    \
   x(??)  w(B)       p(?)   b(B)
          / \        / \
        a(?) c(R)  x(??) a(?)
```

**处理方法：**
1. 将 $w$ 着为 $x.p$ 的颜色
2. 将 $x.p$ 着为黑色
3. 将 $w$ 的右子节点 $c$ 着为黑色
4. 对 $x.p$ 执行**左旋** [[算法导论/concepts/旋转]]
5. 令 $x = T.root$，终止循环

**效果：** 修复完成。$x$ 的额外黑色被消除，所有路径的黑高度恢复一致。变色操作确保旋转后黑高度不变。

## 伪代码

```
RB-DELETE-FIXUP(T, x)
  while x ≠ T.root and x.color == BLACK
      if x == x.p.left
          w = x.p.right              // w 是兄弟
          if w.color == RED          // Case 1
              w.color = BLACK
              x.p.color = RED
              LEFT-ROTATE(T, x.p)
              w = x.p.right
          if w.left.color == BLACK and w.right.color == BLACK  // Case 2
              w.color = RED
              x = x.p
          else
              if w.right.color == BLACK  // Case 3
                  w.left.color = BLACK
                  w.color = RED
                  RIGHT-ROTATE(T, w)
                  w = x.p.right
              // Case 4
              w.color = x.p.color
              x.p.color = BLACK
              w.right.color = BLACK
              LEFT-ROTATE(T, x.p)
              x = T.root
      else                             // 对称情况（x 是右子节点）
          // 与上面完全对称，left/right 互换
  x.color = BLACK
```

## 核心性质

### 旋转次数

> [!note] 最多 3 次旋转
> - Case 1：1 次左旋（最多执行 1 次，之后兄弟变为黑色）
> - Case 3：1 次右旋（最多执行 1 次，之后转入 Case 4）
> - Case 4：1 次左旋（修复完成）
> - 因此，整个修复过程最多需要 **3 次旋转**。

### 时间复杂度

> [!note] $O(\lg n)$
> - Case 2 的循环最多执行 $O(\lg n)$ 次（每次 $x$ 上移一层），但每次只有 $O(1)$ 的变色操作。
> - Case 1 + Case 3 + Case 4 最多 3 次旋转，$O(1)$ 时间。
> - 总时间复杂度为 $O(\lg n)$。

### 循环终止条件

循环在以下情况下终止：
1. $x$ 变为红色：此时去掉额外黑色后 $x$ 为红色，不违反任何性质，最后将其着为黑色。
2. $x$ 到达根节点：根节点的额外黑色直接丢弃（根节点多一个黑色不影响任何路径的相对黑高度）。

## 章节扩展

RB-DELETE 的完整流程：

1. **BST 删除**：找到要删除的节点 $z$，确定实际被移除的节点 $y$ 和替代节点 $x$。
2. **记录颜色**：记录 $y$ 的原始颜色 $y-original-color$。
3. **执行删除**：将 $x$ 移到 $y$ 的位置。
4. **修复**：若 $y-original-color$ 为黑色，调用 RB-DELETE-FIXUP(T, x)。

## 参见

- [[算法导论/concepts/红黑树]] — 红黑树的完整定义与五条性质
- [[算法导论/concepts/旋转]] — 左旋与右旋操作
- [[算法导论/concepts/额外黑色]] — "额外黑色"的概念
- [[算法导论/concepts/RB-INSERT-FIXUP]] — 插入修复（更简单的三种情况）
- [[算法导论/concepts/黑高度]] — 黑高度的定义
