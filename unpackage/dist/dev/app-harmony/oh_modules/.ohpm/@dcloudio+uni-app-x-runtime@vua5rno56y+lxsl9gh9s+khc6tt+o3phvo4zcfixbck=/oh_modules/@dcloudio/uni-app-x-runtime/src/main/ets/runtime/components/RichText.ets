import { ComponentBaseOptions } from '../Node'

export interface RichTextOptions extends ComponentBaseOptions {
  content: string
  viewportWidth?: number
}

export interface EventDetail {
  src?: string,
  href?: string
}

interface ItemClickEvent {
  detail: EventDetail
}

@Component
export struct UniRichText {
  // 用于获取组件实例
  onAboutToAppear?: (instance: UniRichText) => void
  // 用于获取组件属性
  attributeUpdater?: object
  @Prop content: string = ''
  @Prop viewportWidth?: number
  handleItemClick?: (event: ItemClickEvent) => void = undefined

  build() {
    RichText(`<meta name="viewport" content="width=${this.viewportWidth ??
      'device-width'}"><style>html,body{margin:0;padding:0;}</style>${this.content}`)
      .attributeModifier(this.attributeUpdater)
      .onClick((event) => {
        // TODO: handle item click
        console.log('RichText onClick', event)
      })
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}
