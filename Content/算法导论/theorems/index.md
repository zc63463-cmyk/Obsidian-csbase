---
cssclasses: [theorem-list]
---

# 📕 算法导论 · 定理库

<span class="page-subtitle">25 个定理 · 来自 CLRS 第4版</span>

<div class="theorem-stats">

<div class="stat-item">📊 <strong>25</strong> 个定理</div>
<div class="stat-item">📐 <strong>8</strong> 个主题领域</div>
<div class="stat-item">📖 <strong>Ch4–35</strong> 覆盖范围</div>

</div>

## 🧮 基础与排序 (Part I-II)

<div class="theorem-cards">

<a class="theorem-card" data-topic="sorting" href="./排序下界定理">
  <div class="thm-icon">📐</div>
  <div class="thm-body">
    <div class="thm-name">排序下界定理</div>
    <div class="thm-desc">比较排序算法的下界为 Ω(n lg n)，归并/堆排序可达最优</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch8</span>
    <span class="thm-tag">#比较排序</span>
  </div>
</a>

<a class="theorem-card" data-topic="dp" href="./Akra-Bazzi定理">
  <div class="thm-icon">∑</div>
  <div class="thm-body">
    <div class="thm-name">Akra-Bazzi 定理</div>
    <div class="thm-desc">分治递推式渐近界的通用求解方法，推广主定理</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch4</span>
    <span class="thm-tag">#递推关系</span>
  </div>
</a>

</div>

## 🔴 数据结构 (Part III)

<div class="theorem-cards">

<a class="theorem-card" data-topic="data-structure" href="./红黑树高度定理">
  <div class="thm-icon">🔴</div>
  <div class="thm-body">
    <div class="thm-name">红黑树高度定理</div>
    <div class="thm-desc">含 n 个内部节点的红黑树高度不超过 2lg(n+1)</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch13</span>
    <span class="thm-tag">#红黑树</span>
  </div>
</a>

<a class="theorem-card" data-topic="data-structure" href="./红黑树扩张定理">
  <div class="thm-icon">🔴</div>
  <div class="thm-body">
    <div class="thm-name">红黑树扩张定理</div>
    <div class="thm-desc">数据结构扩张四步法保持红黑性质的充分条件</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch17</span>
    <span class="thm-tag">#数据结构扩张</span>
  </div>
</a>

<a class="theorem-card" data-topic="data-structure" href="./B树高度定理">
  <div class="thm-icon">🌳</div>
  <div class="thm-body">
    <div class="thm-name">B 树高度定理</div>
    <div class="thm-desc">包含 n 个关键字的 B 树高度 O(log n)，磁盘 I/O 最优</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch18</span>
    <span class="thm-tag">#B树</span>
  </div>
</a>

<a class="theorem-card" data-topic="data-structure" href="./按秩合并与路径压缩定理">
  <div class="thm-icon">🔗</div>
  <div class="thm-body">
    <div class="thm-name">按秩合并与路径压缩定理</div>
    <div class="thm-desc">并查集 m 次操作总时间 O(m α(n))，反阿克曼函数近乎常数</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch19</span>
    <span class="thm-tag">#并查集</span>
  </div>
</a>

</div>

## 🎯 算法设计策略 (Part IV-V)

<div class="theorem-cards">

<a class="theorem-card" data-topic="dp" href="./Huffman最优前缀码定理">
  <div class="thm-icon">🌲</div>
  <div class="thm-body">
    <div class="thm-name">Huffman 最优前缀码定理</div>
    <div class="thm-desc">Huffman 算法产生期望编码长度最小的最优前缀码</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch15</span>
    <span class="thm-tag">#贪心算法</span>
  </div>
</a>

<a class="theorem-card" data-topic="number" href="./欧拉定理">
  <div class="thm-icon">φ</div>
  <div class="thm-body">
    <div class="thm-name">欧拉定理</div>
    <div class="thm-desc">k^φ(n) ≡ 1 (mod n) 当 gcd(k,n)=1，RSA 的理论基础</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch31</span>
    <span class="thm-tag">#数论</span>
  </div>
</a>

<a class="theorem-card" data-topic="number" href="./RSA正确性定理">
  <div class="thm-icon">🔐</div>
  <div class="thm-body">
    <div class="thm-name">RSA 正确性定理</div>
    <div class="thm-desc">证明 RSA 加解密过程的数学正确性与唯一可逆性</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch31</span>
    <span class="thm-tag">#密码学</span>
  </div>
</a>

</div>

## 🕸️ 图算法基础 (Part VI)

<div class="theorem-cards">

<a class="theorem-card" data-topic="graph" href="./括号定理">
  <div class="thm-icon">( )</div>
  <div class="thm-body">
    <div class="thm-name">括号定理</div>
    <div class="thm-desc">DFS 时间戳区间完全嵌套或不相交，与括号结构对应</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch20</span>
    <span class="thm-tag">#DFS</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./拓扑排序正确性定理">
  <div class="thm-icon">⬆️</div>
  <div class="thm-body">
    <div class="thm-name">拓扑排序正确性定理</div>
    <div class="thm-desc">DFS 完成时间递减排序 ⇔ 图为 DAG</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch20</span>
    <span class="thm-tag">#有向图</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./安全边定理">
  <div class="thm-icon">✂️</div>
  <div class="thm-body">
    <div class="thm-name">安全边定理</div>
    <div class="thm-desc">跨越割的轻边是 MST 安全边的充要条件</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch21</span>
    <span class="thm-tag">#MST</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Kruskal正确性定理">
  <div class="thm-icon">🌳</div>
  <div class="thm-body">
    <div class="thm-name">Kruskal 正确性定理</div>
    <div class="thm-desc">按权值增量选边 + 并查集检测环 → 生成最小生成树</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch21</span>
    <span class="thm-tag">#MST #贪心</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Prim正确性定理">
  <div class="thm-icon">🔵</div>
  <div class="thm-body">
    <div class="thm-name">Prim 正确性定理</div>
    <div class="thm-desc">每次将轻边连接的顶点加入集合 A 保持 MST 切分性质</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch21</span>
    <span class="thm-tag">#MST #贪心</span>
  </div>
</a>

</div>

## 🔀 高级图与网络流

<div class="theorem-cards">

<a class="theorem-card" data-topic="graph" href="./Dijkstra正确性定理">
  <div class="thm-icon">D→</div>
  <div class="thm-body">
    <div class="thm-name">Dijkstra 正确性定理</div>
    <div class="thm-desc">非负权图中贪心选择最近未确定顶点的松弛策略正确</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch22</span>
    <span class="thm-tag">#最短路径</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Bellman-Ford正确性定理">
  <div class="thm-icon">B-F</div>
  <div class="thm-body">
    <div class="thm-name">Bellman-Ford 正确性定理</div>
    <div class="thm-desc">n-1 轮松弛后正确计算单源最短路径（无负权回路）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch22</span>
    <span class="thm-tag">#最短路径 #DP</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Floyd-Warshall正确性定理">
  <div class="thm-icon">F-W</div>
  <div class="thm-body">
    <div class="thm-name">Floyd-Warshall 正确性定理</div>
    <div class="thm-desc">DP 逐点扩展中间结点集，正确计算所有结点对最短路径</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch23</span>
    <span class="thm-tag">#全源最短路 #DP</span>
  </div>
</a>

<a class="theorem-card" data-topic="flow" href="./最大流最小割定理">
  <div class="thm-icon">💧</div>
  <div class="thm-body">
    <div class="thm-name">最大流最小割定理</div>
    <div class="thm-desc">流网络中 max flow = min cut capacity（Ford-Fulkerson 方法核心）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch24</span>
    <span class="thm-tag">#网络流</span>
  </div>
</a>

<a class="theorem-card" data-topic="flow" href="./Hall婚姻定理">
  <div class="thm-icon">💍</div>
  <div class="thm-body">
    <div class="thm-name">Hall 婚姻定理</div>
    <div class="thm-desc">二部图存在完美匹配 ⇔ 任意子集邻域 ≥ |子集|</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch24/25</span>
    <span class="thm-tag">#匹配 #组合</span>
  </div>
</a>

<a class="theorem-card" data-topic="flow" href="./Berge定理">
  <div class="thm-icon">↔</div>
  <div class="thm-body">
    <div class="thm-name">Berge 定理</div>
    <div class="thm-desc">匹配 M 最大 ⇔ 无 M 增广路径；增广路迭代终止于最优</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch25</span>
    <span class="thm-tag">#匹配</span>
  </div>
</a>

<a class="theorem-card" data-topic="flow" href="./Konig-Egervary定理">
  <div class="thm-icon">K-E</div>
  <div class="thm-body">
    <div class="thm-name">König-Egerváry 定理</div>
    <div class="thm-desc">二部图中最大匹配数 = 最小顶点覆盖数</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch25/29</span>
    <span class="thm-tag">#二部图 #对偶</span>
  </div>
</a>

</div>

## 📈 高级专题

<div class="theorem-cards">

<a class="theorem-card" data-topic="advanced" href="./强弱对偶定理">
  <div class="thm-icon">⇄</div>
  <div class="thm-body">
    <div class="thm-name">强弱对偶定理</div>
    <div class="thm-desc">线性规划中弱对偶（primal ≤ dual）与强对偶（相等条件）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch29</span>
    <span class="thm-tag">#线性规划</span>
  </div>
</a>

<a class="theorem-card" data-topic="np" href="./Cook-Levin定理">
  <div class="thm-icon">NP</div>
  <div class="thm-body">
    <div class="thm-name">Cook-Levin 定理</div>
    <div class="thm-desc">SAT 是 NP 完全的；所有 NP 问题可多项式归约到 SAT</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch34</span>
    <span class="thm-tag">#NP完全性</span>
  </div>
</a>

<a class="theorem-card" data-topic="np" href="./Christofides定理">
  <div class="thm-icon">TSP</div>
  <div class="thm-body">
    <div class="thm-name">Christofides 定理</div>
    <div class="thm-desc">度量 TSP 的 3/2 近似算法：MST + 最小权重完美匹配</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch35</span>
    <span class="thm-tag">#近似算法</span>
  </div>
</a>

<a class="theorem-card" data-topic="np" href="./集合覆盖贪心近似定理">
  <div class="thm-icon">⊆</div>
  <div class="thm-body">
    <div class="thm-name">集合覆盖贪心近似定理</div>
    <div class="thm-desc">贪心集合覆盖近似比 ≤ H(d) ≤ ln d + 1（d 为最大集合大小）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch35</span>
    <span class="thm-tag">#近似 #贪心</span>
  </div>
</a>

</div>
