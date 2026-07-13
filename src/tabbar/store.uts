import type { CustomTabBarItem, CustomTabBarItemBadge } from './types'
import { customTabbarList } from './config'

/**
 * tabbar 列表（统一加前导 /）
 */
function normalizeList() : CustomTabBarItem[] {
  const result : CustomTabBarItem[] = []
  for (let i = 0; i < customTabbarList.length; i++) {
    const item = customTabbarList[i]
    result.push({
      text: item.text,
      pagePath: item.pagePath.startsWith('/') ? item.pagePath : `/${item.pagePath}`,
      iconType: item.iconType,
      icon: item.icon,
      iconActive: item.iconActive,
      badge: item.badge,
      isBulge: item.isBulge,
    })
  }
  return result
}

export const tabbarList = reactive(normalizeList())

/**
 * 当前选中的 tab 索引（持久化到 storage）
 */
export const curIdx = ref(0)

/** 全局主题色，供主题设置和 Tabbar 联动使用 */
export const themeColor = ref('#37c2bc')

/** 设置当前索引并持久化 */
export function setCurIdx(idx : number) {
  curIdx.value = idx
  uni.setStorageSync('app-tabbar-index', idx)
}

/** 设置某项的 badge */
export function setTabbarItemBadge(idx : number, badge : CustomTabBarItemBadge) {
  if (tabbarList.length > idx) {
    tabbarList[idx].badge = badge
  }
}

/** 根据给定的页面路径手动同步索引 */
export function setCurIdxByPath(path : string) {
  let cleanPath = path.startsWith('/') ? path : `/${path}`
  const parts = cleanPath.split('?')
  cleanPath = parts[0]
  for (let i = 0; i < tabbarList.length; i++) {
    const tabPath = tabbarList[i].pagePath.startsWith('/') ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`
    if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
      setCurIdx(i)
      break
    }
  }
}

/** 根据当前页面路径自动同步索引 */
export function syncCurIdxByCurrentPage() {
  const pages = getCurrentPages()
  if (pages.length == 0) return
  const currentPage = pages[pages.length - 1]
  const route = currentPage.route
  if (route == null || route.length == 0) return
  setCurIdxByPath(route)
}

/** 判断是否是 tabbar 页面 */
export function isPageTabbar(path : string) : boolean {
  let cleanPath = path.startsWith('/') ? path : `/${path}`
  const parts = cleanPath.split('?')
  cleanPath = parts[0]
  for (let i = 0; i < tabbarList.length; i++) {
    const tabPath = tabbarList[i].pagePath.startsWith('/') ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`
    if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
      return true
    }
  }
  return false
}

