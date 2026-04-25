import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// 学科层：中文名 + emoji
const subjectMap: Record<string, string> = {
  "离散数学": "📐 离散数学",
  "逻辑学": "🧠 逻辑学",
  "算法导论": "💻 算法导论",
  "Wiki": "📚 Wiki",
}

// 内容类型层：统一隐藏，用 emoji 替代
const typeMap: Record<string, string> = {
  "concepts": "📖 概念",
  "notes": "📝 笔记",
  "theorems": "📕 定理",
  "comparisons": "⚖️ 对比",
  "queries": "🔍 题型",
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "📖 知识导航",
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,

      // 过滤内部目录
      filterFn: (node) => {
        const hiddenFolders = [
          "tags",
          "00-Raw素材",
          "private",
          "templates",
          "_templates",
          "index",
        ]
        return !hiddenFolders.includes(node.slugSegment)
      },

      // 学科层 vs 内容类型层差异化命名
      mapFn: (node) => {
        const segment = node.slugSegment

        // 学科层：直接映射
        if (subjectMap[segment]) {
          node.displayName = subjectMap[segment]
        }
        // 内容类型层（concepts/notes/theorems/comparisons）：映射并降级显示
        else if (typeMap[segment]) {
          node.displayName = typeMap[segment]
        }

        return node
      },

      // 排序：学科在前，内容类型在后，同类型按字母
      // 注意：函数会被序列化到浏览器执行，不能引用外部变量
      sortFn: (a, b) => {
        const subjects = new Set(["离散数学", "逻辑学", "算法导论", "Wiki"])
        const aIsSubject = subjects.has(a.slugSegment)
        const bIsSubject = subjects.has(b.slugSegment)

        if (aIsSubject && !bIsSubject) return -1
        if (!aIsSubject && bIsSubject) return 1

        // 同层按字母排序
        return a.displayName.localeCompare(b.displayName, "zh-CN", {
          numeric: true,
          sensitivity: "base",
        })
      },

      // 执行顺序：先过滤 → 再映射 → 最后排序
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "📖 知识导航",
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
      filterFn: (node) => {
        const hiddenFolders = [
          "tags",
          "00-Raw素材",
          "private",
          "templates",
          "_templates",
          "index",
        ]
        return !hiddenFolders.includes(node.slugSegment)
      },
      mapFn: (node) => {
        const segment = node.slugSegment
        if (subjectMap[segment]) {
          node.displayName = subjectMap[segment]
        } else if (typeMap[segment]) {
          node.displayName = typeMap[segment]
        }
        return node
      },
      sortFn: (a, b) => {
        const subjects = new Set(["离散数学", "逻辑学", "算法导论", "Wiki"])
        const aIsSubject = subjects.has(a.slugSegment)
        const bIsSubject = subjects.has(b.slugSegment)
        if (aIsSubject && !bIsSubject) return -1
        if (!aIsSubject && bIsSubject) return 1
        return a.displayName.localeCompare(b.displayName, "zh-CN", {
          numeric: true,
          sensitivity: "base",
        })
      },
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [],
}
