import { UniRichTextElement as IUniRichTextElement } from '@dcloudio/uni-app-x/types/native'
import { UniFormControlElementImpl } from './UniFormControlElement'
import { UniRichText, RichTextOptions } from '../components/RichText'
import { createUniFrameNode, UniFrameNode } from '../Node'

@Builder
export function RichTextBuilder(options: RichTextOptions) {
  UniRichText(options)
}

class RichTextFrameNode extends UniFrameNode {
  componentInstance!: UniRichText
}

interface NodeItem {
  type?: 'node' | 'text',
  name: string,
  attrs?: object,
  children?: (NodeItem | TextItem)[]
}

interface TextItem {
  type?: 'node' | 'text',
  text: string
}

type ChildItem = NodeItem | TextItem

const HEIGHT = 'height'
const DEFAULT_HEIGHT = 150

export class UniRichTextElementImpl extends UniFormControlElementImpl<string, RichTextFrameNode> implements IUniRichTextElement {
  static override get defaultStyle() {
    // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
    const baseDefaultStyle = super.defaultStyle as Map<string, [string] | [string, boolean]>
    const defaultStyle = new Map(baseDefaultStyle)

    defaultStyle.set(HEIGHT, [DEFAULT_HEIGHT + 'px', true])
    return defaultStyle
  }

  constructor() {
    super()
  }

  protected override createFrameNode(): RichTextFrameNode {
    const context = this.app.context!
    const text = createUniFrameNode<RichTextFrameNode, RichTextOptions>(context, RichTextFrameNode,
      wrapBuilder(RichTextBuilder),
      { content: '' })
    return text
  }

  override updateNativeAttribute(key: string, value: Object) {
    switch (key) {
      case 'nodes': {
        let content = ''
        if (Array.isArray(value)) {
          content = this.parseArrayNodesToString(value)
        } else if (typeof value === 'string') {
          content = value
        }
        this.frameNode.componentInstance.content = content
        break
      }
      case 'selectable':
        break
    }
  }

  parseArrayNodesToString(nodes: ChildItem[]): string {
    let str = ''
    for (let i = 0; i < nodes.length; i++) {
      // TODO: node to stirng
    }
    return str
  }

  protected override initNativeEvent(type: string): void {
    switch (type) {
      case 'itemclick': {
        this.frameNode.componentInstance.handleItemClick = () => {
        }
        break
      }
      default:
        super.initNativeEvent(type)
        break
    }
  }

  protected override deleteNativeEvent(type: string, res: void | Object): boolean {
    switch (type) {
      case 'itemclick': {
        this.frameNode.componentInstance.handleItemClick = undefined
        return true
      }
      default:
        return super.deleteNativeEvent(type, res)
    }
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined,
    commonAttribute?: CommonAttribute | undefined): void {
    if (key === 'width') {
      this.frameNode.componentInstance.viewportWidth = value as number
    }
    super.updateNativeNodeStyle(key, value, commonAttribute)
  }
}
