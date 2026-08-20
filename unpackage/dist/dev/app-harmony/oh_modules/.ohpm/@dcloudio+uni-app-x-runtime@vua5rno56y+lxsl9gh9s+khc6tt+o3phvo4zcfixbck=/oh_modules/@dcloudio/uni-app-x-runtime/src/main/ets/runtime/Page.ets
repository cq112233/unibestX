import type { PageContainer } from './components/Page'
import { UniNativePageImpl } from './dom/UniNativePage'
import { getUniApp } from './UniNativeApp'
import { nativePageReady } from './polyfill/onNativePageReady'

function initPage(page: PageContainer, id: string) {
  const p = getUniApp()!.pageManager.findPageById(id) as UniNativePageImpl
  // aboutToAppear 可能发生在页面 remove 之后
  p?.init(page)
}

type PageLifeCycle =
  | 'aboutToAppear'
  | 'aboutToDisappear'
  | 'onBackPress'
  | 'onPageShow'
  | 'onPageHide'
  | 'onDidBuild'

export function callPageLifeCycle(name: PageLifeCycle, page: PageContainer) {
  switch (name) {
    case 'aboutToAppear': {
      const id = page.name
      initPage(page, id)
      nativePageReady(page)
      break
    }
  }
}