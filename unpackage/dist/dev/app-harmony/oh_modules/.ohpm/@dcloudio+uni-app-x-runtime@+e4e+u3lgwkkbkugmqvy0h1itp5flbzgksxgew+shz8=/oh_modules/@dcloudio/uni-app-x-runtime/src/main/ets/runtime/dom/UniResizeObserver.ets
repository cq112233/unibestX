import {
  UniResizeObserverEntry as IUniResizeObserverEntry,
  UniElement as IUniElement,
  UniBorderBoxSize as IUniBorderBoxSize,
  UniContentBoxSize as IUniContentBoxSize,
  UniDevicePixelContentBoxSize as IUniDevicePixelContentBoxSize,
} from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from './UniElement'
import { IUniResizeObserver } from './NativeTypes'
import { addEventListenerByProxy, removeEventListenerByProxy } from '../helper'
import { UniCssFlexEdge } from 'dcloudlayout'
import { DOMRect } from './DOMRect'

type UniResizeObserverCallback = (entries: IUniResizeObserverEntry[]) => void

/**
 * 特性记录
 * - 对同一个element多次observe在触发时仅会触发一次
 * - 对同一个element多次observe再unobserve会移除所有的监听
 * - entries内仅包含变动的element，数量不固定
 */

// TODO 确认onFrameNode是否还需要

export class UniResizeObserver implements IUniResizeObserver {
  private _callback: UniResizeObserverCallback
  private _elements: Set<UniElementImpl> = new Set()
  private _changedElements: Set<UniElementImpl> = new Set()
  private _resizeCallback: WeakMap<UniElementImpl, (ele: UniElementImpl) => void> = new WeakMap()

  constructor(callback: UniResizeObserverCallback) {
    this._callback = callback
  }

  private flush() {
    if(this._changedElements.size === 0) {
      return
    }
    const entries: IUniResizeObserverEntry[] = []
    const pixelRatio = vp2px(1)
    this._changedElements.forEach((ele: UniElementImpl) => {
      const visible = ele.frameNode!.isVisible()
      if(!visible) {
        entries.push({
          target: ele,
          borderBoxSize: [{
            blockSize: 0,
            inlineSize: 0
          }],
          contentBoxSize: [{
            blockSize: 0,
            inlineSize: 0
          }],
          devicePixelContentBoxSize: [{
            blockSize: 0,
            inlineSize: 0
          }],
          contentRect: new DOMRect(
            0,
            0,
            0,
            0
          )
        })
        return
      }
      const layoutNode = ele.layoutNode
      const width = layoutNode.getLayoutWidth()
      const height = layoutNode.getLayoutWidth()
      const borderTop = layoutNode.getLayoutBorder(UniCssFlexEdge.Top)
      const borderBottom = layoutNode.getLayoutBorder(UniCssFlexEdge.Bottom)
      const borderLeft = layoutNode.getLayoutBorder(UniCssFlexEdge.Left)
      const borderRight = layoutNode.getLayoutBorder(UniCssFlexEdge.Right)
      const paddingTop = layoutNode.getLayoutPadding(UniCssFlexEdge.Top)
      const paddingBottom = layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom)
      const paddingLeft = layoutNode.getLayoutPadding(UniCssFlexEdge.Left)
      const paddingRight = layoutNode.getLayoutPadding(UniCssFlexEdge.Right)
      // TODO writing-mode
      const borderBoxSize: IUniBorderBoxSize = {
        blockSize: height,
        inlineSize: width
      }
      const contentBoxSize: IUniContentBoxSize = {
        blockSize: height - borderTop - borderBottom - paddingTop - paddingBottom,
        inlineSize: width - borderLeft - borderRight - paddingLeft - paddingRight
      }
      const devicePixelContentBoxSize: IUniDevicePixelContentBoxSize = {
        blockSize: contentBoxSize.blockSize * pixelRatio,
        inlineSize: contentBoxSize.inlineSize * pixelRatio
      }
      const contentRect: DOMRect = new DOMRect(
        paddingLeft,
        paddingTop,
        contentBoxSize.inlineSize,
        contentBoxSize.blockSize
      )
      entries.push({
        target: ele,
        borderBoxSize: [borderBoxSize],
        contentBoxSize: [contentBoxSize],
        devicePixelContentBoxSize: [devicePixelContentBoxSize],
        contentRect: contentRect
      })
    })
    this._changedElements.clear()
    this._callback(entries)
  }

  private triggerResize(ele: UniElementImpl) {
    this._changedElements.add(ele)
    const isConnected = ele.isConnected
    if (isConnected) {
      ele.page.document.waitNativeRender(() => {
        setTimeout(() => {
          this.flush()
        }, 0)
      })
    } else {
      setTimeout(() => {
        this.flush()
      }, 0)
    }
  }

  observe(target: IUniElement): void {
    const ele = target as Object as UniElementImpl
    if (this._elements.has(ele)) {
      return
    }
    this._elements.add(ele);
    const resizeCallback = () => {
      this.triggerResize(ele)
    }
    this._resizeCallback.set(ele, resizeCallback)
    const commonEvent = ele.frameNode!.commonEvent
    addEventListenerByProxy(commonEvent, 'setOnSizeChange', resizeCallback)
  }

  private _unobserve(target: UniElementImpl) {
    const resizeCallback = this._resizeCallback.get(target)
    const commonEvent = target.frameNode!.commonEvent
    if (resizeCallback) {
      removeEventListenerByProxy(commonEvent, 'setOnSizeChange', resizeCallback)
    }
    this._resizeCallback.delete(target)
  }

  unobserve(target: IUniElement): void {
    const ele = target as Object as UniElementImpl
    this._unobserve(ele)
    this._elements.delete(ele);
  }

  disconnect(): void {
    this._elements.forEach((ele: UniElementImpl) => {
      this._unobserve(ele)
    })
    this._elements.clear()
  }
}

export {
  IUniResizeObserverEntry as UniResizeObserverEntry,
  IUniBorderBoxSize as UniBorderBoxSize,
  IUniContentBoxSize as UniContentBoxSize,
  IUniDevicePixelContentBoxSize as UniDevicePixelContentBoxSize
}