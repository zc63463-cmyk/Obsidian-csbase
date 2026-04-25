// P1-③: 阅读进度条 — 60fps 流畅渐变进度
// 使用 rAF 节流 + will-change 优化，确保滚动丝滑
function initReadingProgress() {
  const bar = document.querySelector(".reading-progress-bar") as HTMLElement | null
  if (!bar) return

  let ticking = false
  let lastPercent = -1

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const percent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0

    // 仅在变化超过 0.5% 时更新 DOM，减少重排
    if (Math.abs(percent - lastPercent) > 0.3) {
      bar.style.transform = `scaleX(${percent / 100})`
      lastPercent = percent
    }
    ticking = false
  }

  function onScroll() {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(updateProgress)
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  updateProgress() // 初始化

  // SPA 导航后重新计算
  window.addCleanup(() => {
    window.removeEventListener("scroll", onScroll)
  })
}

// 每次 SPA 导航后重新绑定
document.addEventListener("nav", () => {
  initReadingProgress()
})

// 首次加载
initReadingProgress()
