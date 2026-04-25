---
cssclasses: [theorem-list]
---

# 📕 逻辑学 · 定理库

<span class="page-subtitle">15 个定理 · 来自 Copi《逻辑学导论》第15版</span>

<div class="theorem-stats">

<div class="stat-item">📊 <strong>15</strong> 个定理</div>
<div class="stat-item">📐 <strong>3</strong> 个主题领域</div>
<div class="stat-item">📖 <strong>演绎逻辑 · 归纳逻辑 · 概率推理</strong></div>

</div>

## 🔗 演绎逻辑：推论规则

<div class="theorem-cards">

<a class="theorem-card" data-topic="logic" href="./析取三段论">
  <div class="thm-icon">∨</div>
  <div class="thm-body">
    <div class="thm-name">析取三段论</div>
    <div class="thm-desc">从 (p∨q) 和 ¬p 可推出 q；否定一肢则肯定另一肢</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#命题逻辑</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./假言三段论">
  <div class="thm-icon">→</div>
  <div class="thm-body">
    <div class="thm-name">假言三段论</div>
    <div class="thm-desc">从 (p→q) 和 (q→r) 可推出 (p→r)；蕴涵的传递性</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#命题逻辑</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./De Morgan定律">
  <div class="thm-icon">¬</div>
  <div class="thm-body">
    <div class="thm-name">De Morgan 定律</div>
    <div class="thm-desc">¬(p∧q) ≡ ¬p∨¬q；¬(p∨q) ≡ ¬p∧¬q；合取与析取的否定互换</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#命题逻辑 #等价</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./二难推论构成规则">
  <div class="thm-icon">⇔</div>
  <div class="thm-body">
    <div class="thm-name">二难推论构成规则</div>
    <div class="thm-desc">从 (p→q)∧(r→s) 和 (p∨r) 可推出 (q∨s)</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#命题逻辑 #构造性</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./全称实例化与存在泛化规则">
  <div class="thm-icon">∀∃</div>
  <div class="thm-body">
    <div class="thm-name">全称实例化与存在泛化规则</div>
    <div class="thm-desc">UI: ∀xP(x) → P(c)；EG: P(c) → ∃xP(x)；谓词逻辑基本推理规则</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch8</span>
    <span class="thm-tag">#谓词逻辑</span>
  </div>
</a>

</div>

## 🏛️ 演绎逻辑：元定理

<div class="theorem-cards">

<a class="theorem-card" data-topic="logic" href="./对当方阵关系定理">
  <div class="thm-icon">◇</div>
  <div class="thm-body">
    <div class="thm-name">对当方阵关系定理</div>
    <div class="thm-desc">A/E/I/O 四种直言命题间的矛盾、反对、下反对、差等关系的形式化刻画</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch5</span>
    <span class="thm-tag">#直言逻辑</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./直言三段论有效性判定定理">
  <div class="thm-icon">AII</div>
  <div class="thm-body">
    <div class="thm-name">直言三段论有效性判定定理</div>
    <div class="thm-desc">通过文恩图或规则集判定三段论形式的有效性（中项周延等规则）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch6</span>
    <span class="thm-tag">#三段论 #有效性</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./有效性判定定理">
  <div class="thm-icon">✓</div>
  <div class="thm-body">
    <div class="thm-name">有效性判定定理</div>
    <div class="thm-desc">命题逻辑论证有效当且仅当不可能所有前提为真而结论为假</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#命题逻辑 #判定</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./可靠性定理">
  <div class="thm-icon">S</div>
  <div class="thm-body">
    <div class="thm-name">可靠性定理</div>
    <div class="thm-desc">若论证可证明则论证有效；即 ⊢ A → ⊨ A（语法推导蕴含语义有效）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch9</span>
    <span class="thm-tag">#元逻辑</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./完备性定理">
  <div class="thm-icon">C</div>
  <div class="thm-body">
    <div class="thm-name">完备性定理</div>
    <div class="thm-desc">若论证有效则论证可证明；即 ⊨ A → ⊢ A（语义有效蕴含语法可推导）</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch9</span>
    <span class="thm-tag">#元逻辑</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./条件证明定理">
  <div class="thm-icon">→+</div>
  <div class="thm-body">
    <div class="thm-name">条件证明定理</div>
    <div class="thm-desc">若假设 p 后可推出 q，则可证 p→q；条件引入规则的理论基础</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch7</span>
    <span class="thm-tag">#自然演绎</span>
  </div>
</a>

<a class="theorem-card" data-topic="logic" href="./演绎有效性守恒定理">
  <div class="thm-icon">⊢</div>
  <div class="thm-body">
    <div class="thm-name">演绎有效性守恒定理</div>
    <div class="thm-desc">有效论证的结论所含信息不超过前提所含信息的逻辑含量</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch1</span>
    <span class="thm-tag">#演绎 #信息论</span>
  </div>
</a>

</div>

## 📊 归纳逻辑与概率

<div class="theorem-cards">

<a class="theorem-card" data-topic="probability" href="./贝叶斯定理">
  <div class="thm-icon">P(B|A)</div>
  <div class="thm-body">
    <div class="thm-name">贝叶斯定理</div>
    <div class="thm-desc">P(H|E) = P(E|H)·P(H) / P(E)；基于新证据更新假设概率</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch12</span>
    <span class="thm-tag">#概率 #归纳</span>
  </div>
</a>

<a class="theorem-card" data-topic="inference" href="./归纳强度评估准则">
  <div class="thm-icon">%</div>
  <div class="thm-body">
    <div class="thm-name">归纳强度评估准则</div>
    <div class="thm-desc">归纳论证的强度取决于前提为真时结论为真的概率水平</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch11</span>
    <span class="thm-tag">#归纳 #强度</span>
  </div>
</a>

<a class="theorem-card" data-topic="inference" href="./Mill因果五法">
  <div class="thm-icon">⊕</div>
  <div class="thm-body">
    <div class="thm-name">Mill 因果五法</div>
    <div class="thm-desc">求同法、求异法、共变法、剩余法、求同求异并用法——归纳探究因果的方法论</div>
  </div>
  <div class="thm-meta">
    <span class="thm-chapter">Ch12</span>
    <span class="thm-tag">#因果 #方法论</span>
  </div>
</a>

</div>

#学习/逻辑学/导航
