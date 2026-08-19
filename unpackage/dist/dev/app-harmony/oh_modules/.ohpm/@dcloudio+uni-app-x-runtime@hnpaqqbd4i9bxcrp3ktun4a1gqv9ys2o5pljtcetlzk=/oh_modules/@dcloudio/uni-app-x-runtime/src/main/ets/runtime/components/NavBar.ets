import { ComponentBaseOptions } from '../Node'
import { SafeAreaOffset } from './SafeAreaOffset'

export interface ITitleNView {
  titleText?: string;
  titleBackgroundColor?: string;
  titleColor?: string;
  autoBackButton?: boolean;
  loading?: boolean
}

export interface NavBarOptions extends ComponentBaseOptions, ITitleNView {
  onBackClick?: () => void
}

const FlexRowCenter = (): FlexOptions => {
  return { direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }
}

@Component
export struct NavBar {
  onAboutToAppear?: (instance: NavBar) => void
  onBackClick?: () => void;
  @Prop titleText?: string;
  @Prop titleBackgroundColor?: string;
  @Prop titleColor?: string;
  @Prop autoBackButton?: boolean;
  @Prop loading?: boolean
  @Prop navigationStyle?: string

  build() {
    Column() {
      if (this.navigationStyle !== 'custom') {
        SafeAreaOffset({ type: 'top' })
        Flex(FlexRowCenter()) {
          Stack({ alignContent: Alignment.Start }) {
            Flex(FlexRowCenter()) {
              // 使用 Row 在 titleText 过长时 LoadingProgress 会静止
              Flex(FlexRowCenter()) {
                if (this.loading) {
                  LoadingProgress()
                    .width(32)
                    .margin(4)
                    .color(this.titleColor)
                }
                if (this.titleText) {
                  Text(this.titleText)
                    .fontSize(20)
                    .fontColor(this.titleColor)
                    .maxLines(1)
                    .textOverflow({
                      overflow: TextOverflow.Ellipsis
                    })
                    .textAlign(TextAlign.Center)
                }
              }.margin({ left: 50, right: 50 })
            }.width('100%')

            // 按钮在栈顶不影响点击
            if (this.autoBackButton) {
              Stack() {
                Text('\uE601')
                  .fontSize(27)
                  .fontColor(this.titleColor ?? Color.Black)
                  .halfLeading(true)
                  .fontFamily('uni-icon')
              }
              .width(30)
              .height(30)
              .margin({ left: 5 })
              .onClick(() => {
                this.onBackClick?.();
              });
            }
          }.height(44)
        }
      }
    }
    .backgroundColor(this.titleBackgroundColor || '#F8F8F8')
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}
