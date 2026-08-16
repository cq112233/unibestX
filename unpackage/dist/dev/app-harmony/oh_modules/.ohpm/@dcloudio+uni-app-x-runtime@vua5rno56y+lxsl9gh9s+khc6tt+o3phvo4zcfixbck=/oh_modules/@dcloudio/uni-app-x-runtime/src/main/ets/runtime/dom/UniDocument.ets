import {
  UniDocument as IUniDocument,
  INodeData,
  IComment,
  UniElement as IUniElement
} from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from './UniElement'
import { UniElement } from '@dcloudio/uni-app-x/types/native/IUniElement'
import { NodeData } from './NodeData'
import { UniCssDirection, UniCssFlexDirection, UniCssNodeLevel, UniLayoutFlexNode } from 'dcloudlayout'
import { UniBodyElementImpl } from './UniBodyElement'
import { store as customElementsStore } from './CustomElement'
import { setCurrentElementArgument } from './UniElement'
import { UniViewElementImpl } from './UniViewElement'
import { store as builtInElementsStore } from './BuiltInElement'
import { UniCommentElementImpl } from './UniCommentElement'
import { UniNativePageImpl } from './UniNativePage'
import { FrameCallback, FrameNode, typeNode } from '@kit.ArkUI'
import { WeakStore, getSafeAreaInsets, onSafeAreaInsetsChange, offSafeAreaInsetsChange, Unknown } from '../helper'
import { TinyEmitter } from 'tiny-emitter'

interface SafeAreaInsets {
  top: number
  bottom: number
  left: number
  right: number
}

let id = 0

enum RENDER_STATUS {
  INIT,
  RENDERING,
  RENDERED
}

interface Size {
  width: number
  height: number
}

export class UniDocumentImpl extends UniElementImpl<typeNode.Stack> implements IUniDocument {
  body!: UniBodyElementImpl
  store = new WeakStore<UniElementImpl>()
  private _rootSize!: Size
  private _emitter!: TinyEmitter
  private contentFrameNode: typeNode.Stack | undefined = undefined

  static override get defaultStyle() {
    // 根节点暂不设默认样式
    return new Map()
  }

  constructor(page: UniNativePageImpl) {
    super(new NodeData('document', 'document'), page)
    // TODO 优化 Connected 设置方式
    this.setConnected(true)
  }

  protected initClass(): void {
    this._rootSize = {
      width: 0,
      height: 0
    }
    this._emitter = new TinyEmitter()
  }

  /**
   * 在构造函数之后调用
   * @internal
   */
  init(): void {
    const body = this.body = this.createElement('body') as UniBodyElementImpl
    super.appendChild(body)
  }

  protected override createFrameNode(): typeNode.Stack {
    this.contentFrameNode = typeNode.createNode(this.app.context, 'Stack')
    this.contentFrameNode.initialize({ alignContent: Alignment.TopStart })
    this.contentFrameNode.attribute.clip(true)
      .width('100%')
      .flexGrow(1)
      .flexBasis(1)
      .onAreaChange((_, newArea) => {
        this._rootSize.width = newArea.width as number
        this._rootSize.height = newArea.height as number
        this._emitter.emit('rootSizeChange')
      })
    return this.contentFrameNode
  }

  protected override createLayoutNode(): UniLayoutFlexNode {
    const layoutNode = new UniLayoutFlexNode(UniCssNodeLevel.Root)
    layoutNode.setStyleFlexDirection(UniCssFlexDirection.Column)
    return layoutNode
  }

  override checkLayout(): void {
    this.body.checkLayout()
  }

  /**
   * @internal
   */
  getRealDomNodeById<T>(id: string): T | null {
    return this.store.get(id) as T | null
  }

  appendChild(child: IUniElement): void {
    if (!this.body) {
      this.body = child as UniBodyElementImpl
      super.appendChild(child)
    } else {
      this.body.appendChild(child)
    }
  }

  override querySelector(selector: string): IUniElement | null {
    return this.body.querySelector(selector)
  }

  private renderStatus: RENDER_STATUS = RENDER_STATUS.INIT
  private startRenderTimer: number | null = null
  private onStartRenderCallback: (() => void) | null = null
  private onSafeAreaInsetsChangeCallback: ((value: SafeAreaInsets) => void) | null = null

  startRender(): void

  startRender(callback?: (() => void) | null): void

  startRender(callback?: (() => void) | null): void {
    // const rootFrameNode = this.frameNode
    const startRender = () => {
      if (this.renderStatus !== RENDER_STATUS.INIT) {
        return
      }
      clearTimeout(this.startRenderTimer)
      this.startRenderTimer = null
      this.renderStatus = RENDER_STATUS.RENDERING
      const body = this.body

      const safeAreaInsets = getSafeAreaInsets() as SafeAreaInsets
      const setSafeArea = () => {
        // TODO 使用 cache 优化访问
        const frameNode = this.frameNode
        const size = frameNode.getMeasuredSize()
        const position = frameNode.getPositionToWindow()
        const currentWindow = this.app.window
        const props = currentWindow.getWindowProperties()
        const windowRect = props.windowRect
        const top = Math.max(safeAreaInsets.top - position.y, 0)
        const left = Math.max(safeAreaInsets.left - position.x, 0)
        const bottom =
          Math.max(safeAreaInsets.bottom - (px2vp(windowRect.height) - (position.y + px2vp(size.height))), 0,)
        const right =
          Math.max(safeAreaInsets.right - (px2vp(windowRect.width) - (position.x + px2vp(size.width))), 0)
        const layoutNode = this.layoutNode
        layoutNode.setSafeArea(top, right, bottom, left)
      }
      this.onSafeAreaInsetsChangeCallback = (value: SafeAreaInsets) => {
        if (value.top != null) {
          safeAreaInsets.top = value.top
        }
        if (value.bottom != null) {
          safeAreaInsets.bottom = value.bottom
        }
        if (value.left != null) {
          safeAreaInsets.left = value.left
        }
        if (value.right != null) {
          safeAreaInsets.right = value.right
        }
        setSafeArea()
        const layoutNode = this.layoutNode
        layoutNode.setStatusbarHeight(safeAreaInsets.top)
        this.requestRenderQueue()
      }
      this.onSafeAreaInsetsChangeCallback(safeAreaInsets)
      onSafeAreaInsetsChange(this.onSafeAreaInsetsChangeCallback)

      this._emitter.on('rootSizeChange', () => {
        setSafeArea()
        this.requestRenderQueue()
      })

      // 先请求一次排版队列，确保后续无 Dom 时 onReady 触发
      this.requestRenderQueue(() => {
        // 排版后再添加，避免渲染未排版的节点
        this.frameNode.appendChild(body.frameNode)
      })
      this.onStartRenderCallback?.()
      this.onStartRenderCallback = null
      callback?.()
    }
    if (this.renderStatus === RENDER_STATUS.INIT) {
      if (this._rootSize.width === 0 && this._rootSize.height === 0) {
        // 根节点未渲染时等待大小变化回调或者超时
        this._emitter.once('rootSizeChange', () => {
          startRender()
        })
      } else {
        startRender()
      }
    }
  }

  private onStartRender(callback: (() => void)) {
    if (this.renderStatus === RENDER_STATUS.RENDERING) {
      callback()
    } else if (this.renderStatus === RENDER_STATUS.INIT) {
      this.onStartRenderCallback = callback
    }
  }

  private renderQueue: Array<() => void> = []
  private afterRenderQueue: Array<() => void> = []
  private applyRenderQueueTimer: number | null = null
  /**
   * @internal
   */
  firstLayoutDuration: number = 0
  /**
   * @internal
   */
  layoutDuration: number = 0
  /**
   * @internal
   */
  firstRenderDuration: number = 0
  /**
   * @internal
   */
  renderDuration: number = 0
  private isAfterFrame = true

  private applyRenderQueue(): void {
    this.onStartRender(() => {
      const startTime = Date.now()
      const layoutNode = this.layoutNode
      // 注意这里不能使用getMeasuredSize，getMeasuredSize可能会在onSizeChange之后仍获取到width: 0, height: 0。疑似鸿蒙Bug
      const width = this._rootSize.width
      const height = this._rootSize.height
      // 为根节点指定宽高，以解决测量回调不触发的问题
      layoutNode.setStyleWidth(width)
      layoutNode.setStyleHeight(height)
      layoutNode.calculateLayout(width, height, UniCssDirection.LTR)
      const layoutTimeEnd = Date.now()
      const layoutDuration = layoutTimeEnd - startTime
      this.layoutDuration = layoutDuration
      if (this.firstLayoutDuration === 0) {
        this.firstLayoutDuration = layoutDuration
      }
      this.checkLayout()

      const renderQueue = this.renderQueue.slice()
      this.renderQueue.length = 0
      renderQueue!.forEach(callback => callback())

      const onFrame = () => {
        if (this.renderStatus === RENDER_STATUS.RENDERED) {
          return
        }
        this.isAfterFrame = true
        const renderTimeEnd = Date.now()
        const renderDuration = renderTimeEnd - layoutTimeEnd
        this.renderDuration = renderDuration
        if (this.firstRenderDuration === 0) {
          this.firstRenderDuration = renderDuration
        }

        const afterRenderQueue = this.afterRenderQueue.slice()
        this.afterRenderQueue.length = 0
        afterRenderQueue.forEach(callback => callback())

        if (this.onReadyCallback) {
          this.onReadyCallback()
          this.onReadyCallback = null
        }
      }

      class CustomFrameCallback extends FrameCallback {
        onFrame() {
          onFrame()
        }
      }

      const uiContext = this.app.context!
      this.isAfterFrame = false
      uiContext.postFrameCallback(new CustomFrameCallback())
    })
  }

  requestRenderQueue(callback?: () => void, force?: boolean): number | null {
    if (callback) {
      this.renderQueue.push(callback)
    }
    if (this.applyRenderQueueTimer == null) {
      // 文本测量时，鸿蒙会出现状态同步异常，临时等待原生排版完毕再继续，https://issuereporter.developer.huawei.com/detail/250313153757083/comment
      const applyRenderQueueTimer = () => {
        if (this.isAfterFrame) {
          this.applyRenderQueueTimer = null
          this.applyRenderQueue()
        } else {
          // TODO 暂时不直接使用 onFrame 时机，延用 applyRenderQueueTimer 便于管理
          this.applyRenderQueueTimer = setTimeout(applyRenderQueueTimer, 20)
        }
      }
      this.applyRenderQueueTimer = setTimeout(applyRenderQueueTimer, 0)
    }
    // TODO 每隔一定时间强制渲染 force=force??true
    if (force) {
      clearTimeout(this.applyRenderQueueTimer)
      this.applyRenderQueueTimer = null
      this.applyRenderQueue()
    }
    return this.applyRenderQueueTimer
  }

  cancelRenderQueue(timer?: number, callback?: () => void): void {
    if (callback) {
      const index = this.renderQueue.indexOf(callback)
      if (index !== -1) {
        this.renderQueue.splice(index, 1)
      }
    }
    // TODO 需区分不同请求
    if (timer != null) {
      clearTimeout(timer)
    }
  }

  /**
   * @internal
   */
  stopRender(): void {
    if (this.renderStatus === RENDER_STATUS.RENDERED) {
      return
    }
    this.renderStatus = RENDER_STATUS.RENDERED
    this.onStartRenderCallback = null
    clearTimeout(this.startRenderTimer)
    this.startRenderTimer = null
    clearTimeout(this.applyRenderQueueTimer)
    this.applyRenderQueueTimer = null
    const rootFrameNode = this.frameNode
    rootFrameNode.attribute.onAreaChange(undefined)
    this.contentFrameNode?.attribute?.onAreaChange(undefined)
    if (this.onSafeAreaInsetsChangeCallback) {
      offSafeAreaInsetsChange(this.onSafeAreaInsetsChangeCallback)
      this.onSafeAreaInsetsChangeCallback = null
    }
  }

  createElement(data: string | NodeData, attrs?: Map<string, Object>, children?: UniElement[]): IUniElement {
    const nodeData =
      typeof data === 'string' ? new NodeData((id++).toString(), data) : data
    // 观测同步耗时
    // const isBodyChild = nodeData.name === 'scroll-view' || nodeData.name === 'view' || nodeData.name === 'text'
    // if(isBodyChild) {
    //   if(!globalThis.__test__) {
    //     console.time('create element')
    //     setTimeout(() => {
    //       console.timeEnd('create element')
    //       console.log('create element count: ' + globalThis.__test__)
    //     }, 0)
    //   }
    //   globalThis.__test__ = (globalThis.__test__ || 0) + 1
    // }
    const reset = setCurrentElementArgument(nodeData, this.page)
    const currentElement = customElementsStore.get(nodeData.name) ?? builtInElementsStore.get(nodeData.name)
    let result: IUniElement
    try {
      if (currentElement) {
        const elementConstructor = currentElement[0]
        const elementOptions = currentElement[1]
        nodeData.options = elementOptions
        result = new elementConstructor()
        // 和 Web 一致，禁止在构造函数中添加子元素
        if (result.childNodes.length) {
          // NotSupportedError
          throw new Error('Failed to execute \'createElement\' on \'Document\': The result must not have children')
        }
      } else {
        // 默认创建 view 实例
        nodeData.options = { defaultStyle: UniViewElementImpl.defaultStyle }
        result = new UniViewElementImpl()
      }
      if (children && children.length > 0) {
        children.forEach(child => {
          result.appendChild(child)
        })
      }
      if (attrs && attrs.size > 0) {
        attrs.forEach((attrValue, attrName) => {
          // 从attrs进来的style，一定是被格式化成了Map，该入口目前仅供编译器使用
          if (attrName === 'style') {
            result.updateStyle(attrValue as Map<string, Object>)
          } else {
            result.setAnyAttribute(attrName, attrValue)
          }
        })
      }
      this.store.set(nodeData.id, result as Object as UniElementImpl<FrameNode | null>)
    } finally {
      reset()
    }
    return result
  }

  createComment(data: string): IComment {
    return new UniCommentElementImpl(data, this.page)
  }

  createTextNode(data: string, attrs?: Map<string, Object>, children?: UniElement[]): UniElement {
    if (data) {
      attrs = attrs ?? new Map()
      attrs.set('value', data)
    }
    return this.createElement('text', attrs, children)
  }


  notifyLayout(): void {
    throw new Error('Method not implemented.')
  }

  runAsyncDomTask(fn: () => object, callback: (value: object) => void): void {
    throw new Error('Method not implemented.')
  }

  waitNativeRender(callback: () => void): void {
    if (this.renderStatus === RENDER_STATUS.RENDERED) {
      callback()
      return
    }

    // At the end of modification only RENDER_STATUS.INIT
    if (this.renderStatus !== RENDER_STATUS.RENDERING || this.applyRenderQueueTimer != null) {
      this.afterRenderQueue.push(callback)
      return
    }

    callback()
  }

  getElementById(id: string): UniElement | null {
    const bodyNode = this.body;
    if (!bodyNode) {
      return null;
    }
    return bodyNode.querySelector(`#${id}`);
  }

  private onReadyCallback: (() => void) | null = null

  /**
   * @internal
   */
  onReady(callback: () => void): void {
    this.onReadyCallback = callback
  }

  override dispose() {
    clearTimeout(this.applyRenderQueueTimer)
    this.applyRenderQueueTimer = null
    this._emitter.off('rootSizeChange')
    this.stopRender()
    this.store.idMap.forEach((_ele) => {
      const ele = _ele.deref() ?? null
      if (!ele) {
        return
      }
      try {
        ele.remove()
      } catch (e) {
      }
      try {
        ele.dispose()
      } catch (e) {
      }
    })
    this.store.clear()
    this.body?.dispose()
    this.body = undefined as Unknown as UniBodyElementImpl
    super.dispose()
  }
}
