---
cssclasses: [theorem-list]
---

# 📕 离散数学 · 定理库

<span class="page-subtitle">15 个定理 · 来自 Rosen《离散数学及其应用》第8版</span>

<div class="theorem-stats">

<div class="stat-item">📊 <strong>15</strong> 个定理</div>
<div class="stat-item">📐 <strong>5</strong> 个主题领域</div>
<div class="stat-item">📖 <strong>数论 · 图论 · 集合论 · 可计算性</strong></div>

</div>

## 🔢 数论

<div class="theorem-cards">

<a class="theorem-card" data-topic="number" href="./算术基本定理">
  <div class="thm-icon">ℕ</div>
  <div class="thm-body">
    <div class="thm-name">算术基本定理</div>
    <div class="thm-desc">每个大于1的整数可唯一分解为素数之积（不计顺序）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch4</span>
    <span class="thm-tag">#数论</span>
  </div>
</a>

<a class="theorem-card" data-topic="number" href="./费马小定理">
  <div class="thm-icon">a^p</div>
  <div class="thm-body">
    <div class="thm-name">费马小定理</div>
    <div class="thm-desc">若 p 为素数且 gcd(a,p)=1，则 a^(p-1) ≡ 1 (mod p)</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch4</span>
    <span class="thm-tag">#数论 #模运算</span>
  </div>
</a>

<a class="theorem-card" data-topic="number" href="./素数定理">
  <div class="thm-icon">π(x)</div>
  <div class="thm-body">
    <div class="thm-name">素数定理</div>
    <div class="thm-desc">不超过 x 的素数个数 π(x) ~ x / ln x，素数分布渐近规律</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch4</span>
    <span class="thm-tag">#数论 #素数</span>
  </div>
</a>

<a class="theorem-card" data-topic="number" href="./Lamé定理">
  <div class="thm-icon">÷</div>
  <div class="thm-body">
    <div class="thm-name">Lamé 定理</div>
    <div class="thm-desc">欧几里得算法的除法次数不超过较小数的十进制位数的5倍</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch4</span>
    <span class="thm-tag">#数论 #算法</span>
  </div>
</a>

</div>

## 📊 集合论与基数

<div class="theorem-cards">

<a class="theorem-card" data-topic="set" href="./Cantor定理">
  <div class="thm-icon">|A|</div>
  <div class="thm-body">
    <div class="thm-name">Cantor 定理</div>
    <div class="thm-desc">任意集合的幂集基数严格大于原集合基数 |P(A)| > |A|</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch2</span>
    <span class="thm-tag">#集合论 #无限</span>
  </div>
</a>

<a class="theorem-card" data-topic="set" href="./Schröder-Bernstein定理">
  <div class="thm-icon">⇄</div>
  <div class="thm-body">
    <div class="thm-name">Schröder-Bernstein 定理</div>
    <div class="thm-desc">若 |A| ≤ |B| 且 |B| ≤ |A|，则 |A| = |B|，证明基数等价</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch2</span>
    <span class="thm-tag">#集合论 #基数</span>
  </div>
</a>

</div>

## 🕸️ 图论

<div class="theorem-cards">

<a class="theorem-card" data-topic="graph" href="./握手定理">
  <div class="thm-icon">🤝</div>
  <div class="thm-body">
    <div class="thm-name">握手定理</div>
    <div class="thm-desc">无向图中所有顶点度数之和等于边数的两倍 Σ deg(v) = 2|E|</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./欧拉公式">
  <div class="thm-icon">V-E+F</div>
  <div class="thm-body">
    <div class="thm-name">欧拉公式</div>
    <div class="thm-desc">连通平面图满足 V - E + F = 2（顶点-边+面=2）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论 #平面图</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Kuratowski定理">
  <div class="thm-icon">K₅</div>
  <div class="thm-body">
    <div class="thm-name">Kuratowski 定理</div>
    <div class="thm-desc">图是平面图当且仅当不含 K₅ 或 K₃,₃ 的细分</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论 #平面图</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Dirac定理">
  <div class="thm-icon">H</div>
  <div class="thm-body">
    <div class="thm-name">Dirac 定理</div>
    <div class="thm-desc">n≥3 的简单图中若每个顶点度数 ≥ n/2，则存在哈密顿回路</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论 #哈密顿</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Ore定理">
  <div class="thm-icon">deg</div>
  <div class="thm-body">
    <div class="thm-name">Ore 定理</div>
    <div class="thm-desc">n≥3 的简单图中若任意不相邻顶点 u,v 满足 deg(u)+deg(v)≥n，则有哈密顿回路</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论 #哈密顿</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Erdős-Szekeres定理">
  <div class="thm-icon">↑↓</div>
  <div class="thm-body">
    <div class="thm-name">Erdős-Szekeres 定理</div>
    <div class="thm-desc">任意 (r-1)(s-1)+1 个不同实数序列必含长度为 r 的递增或长度为 s 的递减子序列</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch6</span>
    <span class="thm-tag">#组合 #序列</span>
  </div>
</a>

<a class="theorem-card" data-topic="graph" href="./Vizing定理">
  <div class="thm-icon">🎨</div>
  <div class="thm-body">
    <div class="thm-name">Vizing 定理</div>
    <div class="thm-desc">简单图的边着色数 Δ 或 Δ+1（Δ 为最大度数）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch10</span>
    <span class="thm-tag">#图论 #着色</span>
  </div>
</a>

</div>

## 🔄 自动机与可计算性

<div class="theorem-cards">

<a class="theorem-card" data-topic="logic" href="./Kleene定理">
  <div class="thm-icon">∑</div>
  <div class="thm-body">
    <div class="thm-name">Kleene 定理</div>
    <div class="thm-desc">语言可被有限自动机识别当且仅当它是正则的（正则表达式与DFA等价）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch13</span>
    <span class="thm-tag">#自动机 #正则语言</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./停机问题不可判定定理">
  <div class="thm-icon">⏹</div>
  <div class="thm-body">
    <div class="thm-name">停机问题不可判定定理</div>
    <div class="thm-desc">不存在通用算法能判定任意程序在给定输入上是否停机</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch13</span>
    <span class="thm-tag">#可计算性 #判定</span>
  </div>
</a>

</div>

#学习/离散数学/导航
