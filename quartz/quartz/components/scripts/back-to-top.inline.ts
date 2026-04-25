// P1-④: 回到顶部按钮 — 毛玻璃效果，300px 后浮现
function initBackToTop() {
  const btn = document.querySelector(".back-to-top") as HTMLElement | null
  if (!btn) return

  let ticking = false
  let isVisible = false

  function toggleVisibility() {
    const shouldShow = window.scrollY > 300
    if (shouldShow !== isVisible) {
      isVisible = shouldShow
      if (isVisible) {
        btn.classList.add("visible")
      } else {
        btn.classList.remove("visible")
      }
    }
    ticking = false
  }

  function onScroll() {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(toggleVisibility)
    }
  }

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  window.addEventListener("scroll", onScroll, { passive: true })
  toggleVisibility() // 初始状态

  window.addCleanup(() => {
    window.removeEventListener("scroll", onScroll)
    btn.removeEventListener("click", () => {})
  })
}

document.addEventListener("nav", () => {
  initBackToTop()
})

initBackToTop()
