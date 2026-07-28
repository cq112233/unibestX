import { UniSwiperItemElement as IUniSwiperItemElement } from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from './UniElement'
import { typeNode } from '@kit.ArkUI'

// TODO: swiper 高度100，swiper-item 不设置高度 justify-content: center; align-items: center; swiper-item 中的子元素未上下居中
export class UniSwiperItemElementImpl extends UniElementImpl<typeNode.Stack>
implements IUniSwiperItemElement {
  itemId: string = ''

  protected override createFrameNode(): typeNode.Stack {
    const view = typeNode.createNode(this.app.context, 'Stack')
    view.initialize({ alignContent: Alignment.TopStart })
    return view
  }

  override updateNativeAttribute(key: string, value: string): void {
    switch (key) {
      case 'itemId': {
        this.itemId = value
        break
      }
      default:
        super.updateNativeAttribute(key, value)
    }
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
    switch (key) {
      case 'x':
      case 'y':
        break;
      default:
        super.updateNativeNodeStyle(key, value, commonAttribute)
    }
  }
}
