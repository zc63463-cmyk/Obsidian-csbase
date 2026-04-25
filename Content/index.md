---
title: "知识库首页"
type: index
tags:
  - 导航
  - Wiki
date: 2026-04-25
cssclasses:
  - wide-page
  - homepage
---

<div class="hero-section">

# CS Wiki

<span class="hero-subtitle">基于 Karpathy 知识编译模式 · Obsidian + Quartz 架构</span>

> [!abstract] 概览
> 一个持续生长的「活体维基」。所有笔记遵循统一规范，通过 **Ingest → Query → Lint → Index** 流水线实现知识复利。

</div>

---

## 统计总览

<div class="stats-grid">

<div class="stat-card">
  <div class="stat-icon">📖</div>
  <div class="stat-label">概念</div>
  <div class="stat-value">368</div>
</div>

<div class="stat-card">
  <div class="stat-icon">📕</div>
  <div class="stat-label">定理</div>
  <div class="stat-value">55</div>
</div>

<div class="stat-card">
  <div class="stat-icon">⚖️</div>
  <div class="stat-label">对比</div>
  <div class="stat-value">44</div>
</div>

<div class="stat-card">
  <div class="stat-icon">📊</div>
  <div class="stat-label">总页数</div>
  <div class="stat-value">467</div>
</div>

</div>

---

## 学习进度

<div class="progress-dashboard">

<div class="dash-subject">
  <div class="dash-subject-header">
    <span class="dash-subject-name">📐 离散数学</span>
    <span class="dash-subject-status status-progress">进行中</span>
  </div>
  <div class="dash-progress-track">
    <div class="dash-progress-fill" style="width: 72%"></div>
  </div>
  <div class="dash-subject-meta">
    <span>概念 150 · 定理 15 · 对比 10</span>
    <span class="dash-percent">72%</span>
  </div>
</div>

<div class="dash-subject">
  <div class="dash-subject-header">
    <span class="dash-subject-name">🧠 逻辑学</span>
    <span class="dash-subject-status status-done">已完成</span>
  </div>
  <div class="dash-progress-track">
    <div class="dash-progress-fill fill-done" style="width: 100%"></div>
  </div>
  <div class="dash-subject-meta">
    <span>概念 70 · 定理 15 · 对比 22</span>
    <span class="dash-percent">100%</span>
  </div>
</div>

<div class="dash-subject">
  <div class="dash-subject-header">
    <span class="dash-subject-name">💻 算法导论</span>
    <span class="dash-subject-status status-new">新启动</span>
  </div>
  <div class="dash-progress-track">
    <div class="dash-progress-fill fill-new" style="width: 18%"></div>
  </div>
  <div class="dash-subject-meta">
    <span>概念 148 · 定理 25 · 对比 12</span>
    <span class="dash-percent">18%</span>
  </div>
</div>

</div>

---

## 学科导航

<div class="subject-cards">

<div class="subject-card">
  <h3>📐 离散数学</h3>
  <div class="subject-info">
    <div class="info-row"><span class="info-key">教材</span><span class="info-val">Rosen《离散数学及其应用》第8版</span></div>
    <div class="info-row"><span class="info-key">状态</span><span class="info-val status-progress">🔵 进行中</span></div>
    <div class="info-row"><span class="info-key">笔记</span><span class="info-val">概念150个 / 定理15个 / 对比10个</span></div>
  </div>
  <a class="subject-link" href="/离散数学/index">进入学科 →</a>
</div>

<div class="subject-card">
  <h3>🧠 逻辑学</h3>
  <div class="subject-info">
    <div class="info-row"><span class="info-key">教材</span><span class="info-val">Copi《逻辑学导论》第15版</span></div>
    <div class="info-row"><span class="info-key">状态</span><span class="info-val status-done">✅ 已完成</span></div>
    <div class="info-row"><span class="info-key">笔记</span><span class="info-val">概念70个 / 定理15个 / 对比22个</span></div>
  </div>
  <a class="subject-link" href="/逻辑学/index">进入学科 →</a>
</div>

<div class="subject-card">
  <h3>💻 算法导论</h3>
  <div class="subject-info">
    <div class="info-row"><span class="info-key">教材</span><span class="info-val">CLRS《算法导论》第4版</span></div>
    <div class="info-row"><span class="info-key">状态</span><span class="info-val status-new">🆕 新启动</span></div>
    <div class="info-row"><span class="info-key">笔记</span><span class="info-val">概念148个 / 定理25个 / 对比12个</span></div>
  </div>
  <a class="subject-link" href="/算法导论/index">进入学科 →</a>
</div>

</div>

---

## 快速入口

<div class="quick-links-grid">

- 🔍 **[Wiki 总目录](Wiki/index)** — 全站概念/定理/对比页索引
- 📋 **[操作日志](Wiki/log)** — 知识库变更记录与操作历史
- 📐 **[架构规范](Wiki/SCHEMA)** — 目录结构、命名规范、标签体系
- 📝 **[学习路线](学习路线 v0.1)** — 三阶段学习计划与执行进度
- 🎨 **[模板目录](_templates/)** — 笔记模板集合
- 📊 **[Wiki 统计](Wiki/index)** — 各学科 Wiki 页面数量汇总

</div>

---

## 知识编译流水线

<div class="pipeline">

```mermaid
graph LR
    A["📥 Ingest<br/>读取笔记 · 提取概念"] --> B["🔍 Query<br/>基于Wiki回答问题"]
    B --> C["🧹 Lint<br/>扫描矛盾 · 孤立 · 缺失"]
    C --> D["📋 Index<br/>维护索引和日志"]
    D --> A
```

| 操作 | 目的 | 频率 |
|:-----|:-----|:-----|
| **Ingest** | 读取新笔记，提取概念，更新 Wiki | 每学完一个章节 |
| **Query** | 基于已编译 Wiki 回答问题 | 日常学习 |
| **Lint** | 扫描矛盾、孤立、缺失 | 每周一次 |
| **Index** | 维护 Wiki Index 和日志 | 每次操作后 |

</div>

<!-- 
最后更新：2026-04-25
Total Wiki Pages: 467
-->

#学习/导航
