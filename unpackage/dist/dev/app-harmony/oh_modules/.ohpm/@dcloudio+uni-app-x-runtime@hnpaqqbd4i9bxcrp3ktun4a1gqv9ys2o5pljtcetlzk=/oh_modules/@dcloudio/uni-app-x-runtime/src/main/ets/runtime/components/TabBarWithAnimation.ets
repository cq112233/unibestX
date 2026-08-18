import { TabBar, TabBarItem, TabBarListObservedArray, TabBarStyle } from './TabBar'

export interface TabBarWithAnimationOptions {
  onAboutToAppear?: (instance: TabBar) => void
  style: TabBarStyle
  list: TabBarListObservedArray<TabBarItem>
  onTabItemClick?: (index: number) => void
  attributeUpdater?: object
}

@Builder
export function TabBarWithAnimation(options: TabBarWithAnimationOptions) {
  Column() {
    TabBar({
      onAboutToAppear: options.onAboutToAppear,
      list: options.list,
      style: options.style,
      onTabItemClick: options.onTabItemClick
    })
    .width('100%')
  }
  .width('100%')
  .clip(true)
  .attributeModifier(options.attributeUpdater)
}
