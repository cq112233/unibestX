import { UniNativeViewElement as IUniNativeViewElement } from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from './UniCustomEvent'
import { UniElementImpl } from './UniElement'
import { UniNativeViewInitEvent } from './UniNativeViewInitEvent'
import { BuilderNode } from '@kit.ArkUI'
import { UniFrameNode } from '@dcloudio/uni-runtime-harmony/Node'
import { UTSJSONObject } from '@dcloudio/uni-app-harmony/shared'
import { NotNull } from '../helper'

export class UniNativeViewElementImpl<T extends FrameNode | null = FrameNode | null> extends UniElementImpl<T> implements IUniNativeViewElement {
  private builderNode: BuilderNode<[ESObject]> | null = null
  private controller: ESObject | null = null
  private _frameNodeCallbacks!: Array<(frameNode: NotNull<T>) => void>

  protected override initClass(): void {
    this._frameNodeCallbacks = []
  }

  constructor() {
    super()
    Promise.resolve().then(() => {
      this.dispatchEvent(new UniNativeViewInitEvent('init', { element: this }))
    })
  }

  private onFrameNode(callback: (frameNode: NotNull<T>) => void): void {
    if (this.frameNode) {
      callback(this.frameNode as NotNull<T>)
    } else {
      this._frameNodeCallbacks.push(callback)
    }
  }

  private setFrameNode(value: T) {
    // 暂时仅支持一次设置
    if (this.frameNode !== null || value === null) {
      throw new Error('set frameNode failed')
    }
    this.frameNode = value
    this._frameNodeCallbacks.forEach(callback => {
      callback(value as NotNull<T>)
    })
  }

  protected override initNativeEvent(type: string): void | Object {
    this.onFrameNode(_ => {
      super.initNativeEvent(type)
    })
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined,
    commonAttribute?: CommonAttribute | undefined): void {
    this.onFrameNode(_ => {
      super.updateNativeNodeStyle(key, value, commonAttribute)
    })
  }

  protected override addFrameNode(frameNode: FrameNode | null) {
    if (frameNode === null) {
      this.onFrameNode(frameNode => {
        super.addFrameNode(frameNode)
      })
    } else {
      super.addFrameNode(frameNode)
    }
  }

  getHarmonyFrameNode(): FrameNode | null {
    return this.frameNode
  }

  bindHarmonyFrameNode(node: FrameNode): void {
    this.setFrameNode(node as T)
  }

  getHarmonyBuilderNode<O extends Object>(): BuilderNode<[O]> {
    return this.builderNode as BuilderNode<[O]>
  }

  bindHarmonyWrappedBuilder<O extends Object>(builder: WrappedBuilder<[options: O]>,
    options?: ESObject): BuilderNode<[O]> {
    const context = this.app.context
    if (!context) {
      throw new Error('UIContext is null')
    }
    const builderNode = new BuilderNode<[O]>(context);
    if (!options) {
      options = {}
    }
    let uniFrameNode = new UniFrameNode(context)

    options.attributeUpdater = uniFrameNode.attributeUpdater
    options.nodeContent = uniFrameNode.slotNodeContent
    builderNode.build(builder, options)
    uniFrameNode.bindBuilderNode(builderNode)
    this.setFrameNode(uniFrameNode as FrameNode as T)
    this.builderNode = builderNode
    return builderNode
  }

  override getHarmonyController<T>(): T | null {
    return this.controller as T
  }

  bindHarmonyController<T extends ESObject>(controller: T): void {
    this.controller = controller
  }

  bindAndroidView(view: ESObject): void {
    throw new Error('Method not implemented.')
  }

  bindIOSView(view: ESObject): void {
    throw new Error('Method not implemented.')
  }

  override dispose(): void {
    super.dispose()
    this._frameNodeCallbacks.length = 0
  }
}

export class UniNativeViewEvent extends UniCustomEvent<UTSJSONObject> {
}