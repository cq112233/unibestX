import { AVVolumePanel, AVVolumePanelParameter } from '@kit.AudioKit';
import { UniElementImpl } from '../dom/UniElement'
import { createUniFrameNode, UniFrameNode, ComponentBaseOptions } from '../Node'
import { FrameNode } from '@kit.ArkUI';

const createVolumeParameter = (x ?: Length, y ?: Length): AVVolumePanelParameter | undefined => {
  if (typeof x === 'number' || typeof y === 'number') {
    return {
      position: {
        x,
        y
      }
    } as AVVolumePanelParameter
  }
  return undefined
}

export interface AVVolumePanelOptions extends ComponentBaseOptions {
  volumeLevel?: number;
  positionX?: number;
  positionY?: number;
}

@Component
export struct VolumePanel {
  @Prop volumeLevel?: number;
  @Prop volumeParameter?: AVVolumePanelParameter;
  onAboutToAppear?: (instance: VolumePanel) => void

  build() {
    AVVolumePanel({
      volumeLevel: this.volumeLevel,
      volumeParameter: this.volumeParameter
    })
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}

@Builder
export function buildVolumePanel(options: AVVolumePanelOptions) {
  VolumePanel(options)
}

class AVVolumePanelFrameNode extends UniFrameNode {
  componentInstance!: VolumePanel
}

let frameNode: AVVolumePanelFrameNode | null = null

/**
 * 解决鸿蒙上创建多音量面板修改音量时卡顿
 */
export class UniAVVolumePanelElementImpl extends UniElementImpl {
  constructor() {
    super()
  }

  protected override createFrameNode() {
    if (frameNode != null && frameNode.componentInstance != null) {
      return new FrameNode(this.app.context!)
    }
    frameNode =
      createUniFrameNode<AVVolumePanelFrameNode, AVVolumePanelOptions>(this.app.context!, AVVolumePanelFrameNode,
        wrapBuilder(buildVolumePanel), {} as AVVolumePanelOptions)
    return frameNode
  }

  override updateNativeAttribute(key: string, value: ESObject) {
    if (frameNode == null || frameNode.componentInstance == null) {
      return
    }
    switch (key) {
      case 'volumeLevel':
        frameNode.componentInstance.volumeLevel = typeof value === 'number' ? value : undefined
        break
      case 'positionX':
        frameNode.componentInstance.volumeParameter = createVolumeParameter(value)
        break
    }
  }
}
