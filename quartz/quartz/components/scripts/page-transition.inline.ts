// P1-⑤: 页面过渡动画 — SPA 切换淡入 + 微位移，200ms
// 监听 Quartz 的 prenav/nav 自定义事件
function initPageTransition() {
  const center = document.querySelector(".center") as HTMLElement | null
  if (!center) return

  // 导航前：淡出
  document.addEventListener("prenav", () => {
    center.classList.add("page-exit")
  })

  // 导航后：淡入（带微位移）
  document.addEventListener("nav", () => {
    // 先移除 exit，添加 enter
    center.classList.remove("page-exit")
    center.classList.add("page-enter")

    // 强制 reflow，确保动画触发
    void center.offsetHeight

    // 移除 enter class 触发过渡
    requestAnimationFrame(() => {
      center.classList.remove("page-enter")
    })
  })
}

initPageTransition()

// SPA 重新导航后也需要绑定
document.addEventListener("nav", () => {
  initPageTransition()
})
