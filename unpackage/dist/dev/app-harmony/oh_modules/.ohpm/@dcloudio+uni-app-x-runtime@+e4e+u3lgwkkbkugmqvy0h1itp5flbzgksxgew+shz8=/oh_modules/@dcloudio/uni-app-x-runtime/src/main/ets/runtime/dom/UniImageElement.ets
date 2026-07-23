import { UniImageElement as IUniImageElement, INodeData } from '@dcloudio/uni-app-x/types/native'
import { FrameNode, typeNode } from '@kit.ArkUI'
import { SVGImageView, SVGBase } from '@ohos/svg';
import { util } from '@kit.ArkTS';
import { UniElementImpl } from './UniElement'
import { UniImageLoadEvent } from './UniImageLoadEvent'
import { UniImageErrorEvent } from './UniImageErrorEvent'
import { getFileURL } from '../helper'
import { UniNativePageImpl } from './UniNativePage'
import { BusinessError } from '@kit.BasicServicesKit';

const IMAGE_MODE_DEFAULT = 'scaleToFill'
const IMAGE_MODE_ASPECT_FIT = 'aspectFit'
const IMAGE_MODE_ASPECT_FILL = 'aspectFill'
const IMAGE_MODE_WIDTH_FIX = 'widthFix'
const IMAGE_MODE_HEIGHT_FIX = 'heightFix'
const WIDTH = 'width'
const HEIGHT = 'height'

const IMAGE_MODES = new Map<string, ImageFit>([
  [IMAGE_MODE_DEFAULT, ImageFit.Fill],
  [IMAGE_MODE_ASPECT_FIT, ImageFit.Contain],
  [IMAGE_MODE_ASPECT_FILL, ImageFit.Cover],
  [IMAGE_MODE_WIDTH_FIX, ImageFit.Fill],
  [IMAGE_MODE_HEIGHT_FIX, ImageFit.Fill],
  ['top', ImageFit.TOP],
  ['bottom', ImageFit.BOTTOM],
  ['center', ImageFit.CENTER],
  ['left', ImageFit.START],
  ['right', ImageFit.END],
  ['top left', ImageFit.TOP_START],
  ['top right', ImageFit.TOP_END],
  ['bottom left', ImageFit.BOTTOM_START],
  ['bottom right', ImageFit.BOTTOM_END],
])

const IMAGE_MODES_NORMAL = [
  IMAGE_MODE_DEFAULT,
  IMAGE_MODE_ASPECT_FIT,
  IMAGE_MODE_ASPECT_FILL,
  IMAGE_MODE_WIDTH_FIX,
  IMAGE_MODE_HEIGHT_FIX,
]

interface Size {
  width: number
  height: number
}

const DEFAULT_WIDTH = 320
const DEFAULT_HEIGHT = 240
const RATIO_DEFAULT = -1
const SVGTagRegExp = /<\s*svg\b\s*[^>]*>([\s\S]*?)<\s*\/\s*svg\s*>/

export class UniImageElementImpl
  extends UniElementImpl<FrameNode>
implements IUniImageElement {
  get src(): string {
    return this.getAttribute('src') ?? ''
  }

  private get mode(): string {
    return this.getAttribute('mode') ?? IMAGE_MODE_DEFAULT
  }

  private styleFilter?: string
  private nativeStyleArgs ?: Map<string, Object>
  private layoutStyleArgs ?: Map<string, [string, Array<Object | undefined>]>
  private ratio: number = RATIO_DEFAULT
  private onLoadCallback?: (event: Size) => void
  private imageFrameNode!: typeNode.Image
  private model!: SVGImageView.SVGImageViewModel

  static override get defaultStyle() {
    // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
    const baseDefaultStyle = super.defaultStyle as Map<string, [string] | [string, boolean]>
    const defaultStyle = new Map(baseDefaultStyle)

    defaultStyle.set(WIDTH, [DEFAULT_WIDTH + 'px', true])
    defaultStyle.set(HEIGHT, [DEFAULT_HEIGHT + 'px', true])
    return defaultStyle
  }

  constructor(data?: INodeData, page?: UniNativePageImpl) {
    super(data, page)
    this.setMeasureFunction((width, widthMode, height, heightMode) => {
      return this.measure(width, height)
    })
    // 事件监听只能添加一个，统一在此处理
    this.imageFrameNode.attribute.onComplete(event => {
      if (event?.loadingStatus === 0) {
        const ratio = event.width / event.height
        if (this.ratio !== ratio) {
          this.ratio = ratio
          this.layoutNodeDirty(() => {
            this.imageFrameNode.attribute.visibility(Visibility.Visible)
          })
        }
      }
      if (event?.loadingStatus === 1) {
        // TODO 确认使用哪种 width/contentWidth/componentWidth
        this.onLoadCallback?.({
          width: event.width,
          height: event.height,
        })
      }
    })
  }

  private measure(width: number, height: number): Size {
    const mode = this.mode
    const ratio = this.ratio
    // 仅对 fix 后的物理像素值向下取整
    const calc = vp2px(1)
    const floor = (value: number) => Math.floor(value * calc) / calc
    if (mode === IMAGE_MODE_WIDTH_FIX) {
      height = ratio === RATIO_DEFAULT ? DEFAULT_HEIGHT : floor(width / ratio)
    } else if (mode === IMAGE_MODE_HEIGHT_FIX) {
      width = ratio === RATIO_DEFAULT ? DEFAULT_WIDTH : floor(height * ratio)
    }
    return { width: width, height: height }
  }

  protected override createFrameNode(): FrameNode {
    const context = this.app.context!
    const wrapper = new FrameNode(context)
    wrapper.commonAttribute.clip(true)
    const image = this.imageFrameNode = typeNode.createNode(context, 'Image')
    // 默认隐藏，加载完成后显示
    image.attribute.objectFit(IMAGE_MODES.get(IMAGE_MODE_DEFAULT)).visibility(Visibility.Hidden)
    wrapper.appendChild(image)
    this.model = new SVGImageView.SVGImageViewModel();
    return wrapper
  }

  onload(): void | null {
    throw new Error('Method not implemented.')
  }

  private initializeImageFrameNode(src: string | PixelMap) {
    this.ratio = RATIO_DEFAULT
    // 默认隐藏，加载完成后显示
    this.imageFrameNode.initialize(src || ImageContent.EMPTY).visibility(Visibility.Hidden)
  }

  override updateNativeAttribute(key: string, value: ESObject): void {
    switch (key) {
      case 'src': {
        let src = getFileURL(value)
        // 不支持 data:image/*; 需要替换 * 为 png|jpeg|bmp|webp|heif 任意格式
        const dataImageFix = 'data:image/*'
        if (typeof src === 'string' && src.startsWith(dataImageFix)) {
          let base64 = src.split(/^\s*data:image\/\*;\s*base64\s*,\s*/)[1]
          if (base64 && base64.length > 0) {
            try {
              const Base64Helper = new util.Base64Helper()
              const byteArray = Base64Helper.decodeSync(base64)
              const isSVGBase64 = SVGTagRegExp.test(SVGBase.unit8ArrayToString(byteArray))
              if (isSVGBase64) {
                this.model.getSVGPixelMap(byteArray).then(pixelMap => {
                  this.initializeImageFrameNode(pixelMap)
                }).catch((err: BusinessError) => {
                  this.dispatchEvent(new UniImageErrorEvent('error', {
                    errMsg: err.message,
                  }))
                })
                return
              }
            } catch (e) {
              this.dispatchEvent(new UniImageErrorEvent('error', {
                errMsg: (e as BusinessError).message,
              }))
            }
          }
          src = (src as string).replace(dataImageFix, 'data:image/png')
        }
        this.initializeImageFrameNode(src)
        break
      }
      case 'mode': {
        let imageFit = IMAGE_MODES.get(value)
        if (imageFit) {
          this.imageFrameNode.attribute.objectFit(imageFit)
        }
        const commonAttribute = this.frameNode.commonAttribute
        const layoutNode = this.layoutNode
        if (value === IMAGE_MODE_WIDTH_FIX) {
          commonAttribute.height(undefined)
          layoutNode.setStyleHeight(NaN)
          this.layoutNodeDirty()
          this.styleFilter = HEIGHT
        } else if (value === IMAGE_MODE_HEIGHT_FIX) {
          commonAttribute.width(undefined)
          layoutNode.setStyleWidth(NaN)
          this.layoutNodeDirty()
          this.styleFilter = WIDTH
        } else {
          const styleFilter = this.styleFilter
          if (styleFilter) {
            this.styleFilter = undefined
            const layoutStyleArgs = this.layoutStyleArgs
            if (layoutStyleArgs) {
              const value = layoutStyleArgs.get(styleFilter)!
              this.updateLayoutNodeStyle(styleFilter, value[0], ...value[1])
            }
            this.layoutNodeDirty()
          }
        }
        this.updateImageSize()
        break
      }
    }
  }

  protected updateLayoutNodeStyle(key: string, method: string, ...args: Array<Object | undefined>): void {
    if (key === WIDTH || key === HEIGHT) {
      let layoutStyleArgs = this.layoutStyleArgs
      if (!layoutStyleArgs) {
        layoutStyleArgs = new Map()
        this.layoutStyleArgs = layoutStyleArgs
      }
      layoutStyleArgs.set(key, [method, args])
    }
    const styleFilter = this.styleFilter
    if (styleFilter && styleFilter === key) {
      return
    }
    super.updateLayoutNodeStyle(key, method, ...args)
  }

  private updateImageSize(): void {
    // 原生 image 使用物理像素，部分模式需要转换
    let width: Length
    let height: Length
    let scale: number
    const imageAttribute = this.imageFrameNode.attribute
    if (IMAGE_MODES_NORMAL.includes(this.mode)) {
      width = '100%'
      height = '100%'
      scale = 1
    } else {
      let nativeStyleArgs = this.nativeStyleArgs
      width = (nativeStyleArgs?.get(WIDTH) || 0) as number + 'px'
      height = (nativeStyleArgs?.get(HEIGHT) || 0) as number + 'px'
      scale = vp2px(1)
    }
    imageAttribute.width(width).height(height).scale({
      x: scale,
      y: scale,
      centerX: 0,
      centerY: 0,
    })
  }

  override updateNativeNodeStyle(key: string, value: Object): void {
    if (key === WIDTH || key === HEIGHT) {
      let nativeStyleArgs = this.nativeStyleArgs
      if (!nativeStyleArgs) {
        nativeStyleArgs = new Map<string, Object>()
        this.nativeStyleArgs = nativeStyleArgs
      }
      nativeStyleArgs.set(key, value)
      this.updateImageSize()
    } else if (key === 'clip') {
      return
    }
    if (key === 'pixelRound') {
      // 与外层采用一致的像素取整策略
      this.imageFrameNode.attribute.pixelRound(value as PixelRoundPolicy)
    }
    super.updateNativeNodeStyle(key, value)
  }

  protected override initNativeEvent(type: string): void | Object {
    switch (type) {
      case 'load': {
        this.onLoadCallback = (event: Size) => {
          this.dispatchEvent(new UniImageLoadEvent('load', event))
        }
        break
      }
      case 'error':
        this.imageFrameNode.attribute.onError((error) => {
          const errMsg = error.message
          // 屏蔽首次加载 ImageContent.EMPTY 报错 empty sourceFailed to create image loader, Image source type not supported
          if (errMsg.includes('empty sourceFailed')) {
            return
          }
          this.dispatchEvent(new UniImageErrorEvent('error', {
            errMsg,
          }))
        })
        break
      default:
        super.initNativeEvent(type)
        break
    }
  }

  protected override deleteNativeEvent(type: string, res: void | Object): boolean {
    switch (type) {
      case 'load': {
        this.onLoadCallback = undefined
        return true
      }
      case 'error':
        this.imageFrameNode.attribute.onError(undefined)
        return true
      default:
        return super.deleteNativeEvent(type, res)
    }
  }

  override dispose(): void {
    this.imageFrameNode.attribute.onComplete(undefined).onError(undefined)
    this.imageFrameNode.dispose()
    super.dispose()
  }
}
