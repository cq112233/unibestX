import { getResourceStr } from '@dcloudio/uni-runtime-harmony'
import { ComponentBaseOptions } from '../Node'
import { SafeAreaOffset } from './SafeAreaOffset'

export interface ITabBar {
  style: TabBarStyle
  list: TabBarListObservedArray<TabBarItem>
  onTabItemClick: ((index: number) => void)
}

export interface TabBarOptions extends ComponentBaseOptions, ITabBar {}

@Observed
export class TabBarItem {
  text?: string
  iconPath?: string
  selectedIconPath?: string
  pagePath: string
  visible: boolean
  badgeType?: undefined | 'dot' | 'number'
  badgeText?: string

  constructor(options: TabBarItem) {
    this.text = options.text
    this.iconPath = options.iconPath
    this.selectedIconPath = options.selectedIconPath
    this.pagePath = options.pagePath
    this.visible = options.visible == null ? true : options.visible
    this.badgeType = options.badgeType
    this.badgeText = options.badgeText
  }
}

@Observed
export class TabBarStyle {
  backgroundColor?: string
  borderColor?: string
  color?: string
  selectedColor?: string
}

@Observed
export class TabBarListObservedArray<T> extends Array<T> {
  constructor() {
    super()
  }
}

@Component
struct TabBarItemComponent {
  @ObjectLink item: TabBarItem
  @Prop selectedIndex: number
  @Prop index: number
  @ObjectLink style: TabBarStyle

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Flex({
        direction: FlexDirection.Column,
        alignItems: ItemAlign.Center,
        justifyContent: FlexAlign.Center
      }) {
        if (this.item.iconPath) {
          // TODO 补充静态资源 /
          Image(getResourceStr("/" + (this.selectedIndex == this.index ? (this.item.selectedIconPath || this.item.iconPath) : this.item.iconPath)))
            .objectFit(ImageFit.Contain).width(24).height(24)
        }
        if (this.item.text) {
          Text(this.item.text)
            .fontSize(10)
            .fontColor(this.selectedIndex == this.index ? this.style.selectedColor : this.style.color)
            .margin({ top: 3 }).lineHeight(10)
        }
        if (this.item.badgeType == 'dot') {
          Circle({ width: 12, height: 12 })
            .fill('#f43530')
            .position({ top: 2, right: 0 })
            .translate({ x: '50%' })
        } else if (this.item.badgeType == 'number') {
          Text(this.item.badgeText?.toString())
            .fontColor('#fff')
            .fontSize(12)
            .textAlign(TextAlign.Center)
            .backgroundColor('#f43530')
            .border({ radius: 16 })
            .padding({ left: 4, right: 4 })
            .constraintSize({ minWidth: 16 })
            .lineHeight(16)
            .position({ top: 2, right: 0 })
            .translate({ x: '50%' })
        }
      }
    }
    .width('100%')
    .height('100%')
  }
}

@Component
export struct TabBar {
  onAboutToAppear?: (instance: TabBar) => void
  attributeUpdater?: object
  @ObjectLink list: TabBarListObservedArray<TabBarItem>
  @ObjectLink style: TabBarStyle
  @State selectedIndex: number = 0
  onTabItemClick?: ((index: number) => void)

  build() {
    Column() {
      Flex({ direction: FlexDirection.Row }) {
        Divider()
          .position({ x: 0, y: 0 })
          .margin(0)
          .padding(0)
          .strokeWidth(0.5)
          .color(this.style.borderColor)
        ForEach(this.list, (item: TabBarItem, index) => {
          if (item.visible !== false) {
            TabBarItemComponent({
              item: item,
              index,
              selectedIndex: this.selectedIndex,
              style: this.style
            }).layoutWeight(1).onClick(() => {
              this.onTabItemClick?.(index);
            })
            // Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
            //   Flex({
            //     direction: FlexDirection.Column,
            //     alignItems: ItemAlign.Center,
            //     justifyContent: FlexAlign.Center
            //   }) {
            //     if (item.iconPath) {
            //       Image(getResourceStr("/" + (this.selectedIndex == index ? (item.selectedIconPath || item.iconPath) :
            //       item.iconPath)))
            //         .objectFit(ImageFit.Contain).width(24).height(24)
            //     }
            //     if (item.text) {
            //       Text(item.text)
            //         .fontSize(10)
            //         .fontColor(this.selectedIndex == index ? this.style.selectedColor : this.style.color)
            //         .margin({ top: 3 }).lineHeight(10)
            //     }
            //     if (item.badgeType == 'dot') {
            //       Circle({ width: 12, height: 12 })
            //         .fill('#f43530')
            //         .position({ top: 2, right: 0 })
            //         .translate({ x: '50%' })
            //     } else if (item.badgeType == 'number') {
            //       Text(item.badgeText?.toString())
            //         .fontColor('#fff')
            //         .fontSize(12)
            //         .textAlign(TextAlign.Center)
            //         .backgroundColor('#f43530')
            //         .border({ radius: 16 })
            //         .padding({ left: 4, right: 4 })
            //         .constraintSize({ minWidth: 16 })
            //         .lineHeight(16)
            //         .position({ top: 2, right: 0 })
            //         .translate({ x: '50%' })
            //     }
            //   }
            // }
            // .width('100%')
            // .height('100%')
            // .onClick(() => {
            //   this.onTabItemClick?.(index);
            // })
          }
        })
      }
      .width('100%')
      .height(50)

      SafeAreaOffset({ type: 'bottom' })
    }.attributeModifier(this.attributeUpdater)
    .backgroundColor(this.style.backgroundColor)
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}
