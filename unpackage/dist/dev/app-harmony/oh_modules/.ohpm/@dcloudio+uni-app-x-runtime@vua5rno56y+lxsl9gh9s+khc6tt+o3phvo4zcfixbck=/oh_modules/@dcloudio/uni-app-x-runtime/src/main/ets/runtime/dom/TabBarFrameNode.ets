import { TabBar, TabBarOptions } from '../components/TabBar'
import { createUniFrameNode, UniFrameNode } from '../Node'

@Builder
export function TabBarBuilder(options: TabBarOptions) {
  TabBar({
    onAboutToAppear: options.onAboutToAppear,
    list: options.list,
    style: options.style,
    onTabItemClick: options.onTabItemClick
  })
}

export class TabBarFrameNode extends UniFrameNode {
  componentInstance!: TabBar
}

export function createTabBarFrameNode(context: UIContext, options: TabBarOptions): TabBarFrameNode {
  const node = createUniFrameNode<TabBarFrameNode, TabBarOptions>(context, TabBarFrameNode,
    wrapBuilder(TabBarBuilder),
    options)
  return node
}