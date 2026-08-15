/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ImageKnifeOption, AnimatorOption} from '../model/ImageKnifeOption';
import common from '@ohos.app.ability.common';
import { NodeContent } from '@ohos.arkui.node';
import nativeNode from 'libimageknifepro.so';
import { ContentTransitionType } from '../model/ImageKnifeData';

@Component
export struct ImageKnifeComponent {
  private componentId: string = '';
  /**
   * 关联的预创建组件ID，需要配合预创建组件接口使用
   * 不要使用纯数字字符串作为customId，也不要使用C_加数字做为customId，这两种字符串类型被ImageKnife使用
   * 当该属性不为空时，会去关联预创建的组件
   */
  customId: string | undefined = undefined;
  syncLoad: boolean = false;

  @Watch('watchImageKnifeOption') @ObjectLink imageKnifeOption: ImageKnifeOption;
  @Watch('watchAnimatorOption') @Prop animatorOption: AnimatorOption | undefined = undefined;
  // 设置图片可拖拽
  @Watch('watchDraggable') @Prop imageDraggable: boolean = false;
  // 设置组件内容的过渡效果
  @Watch('watchContentTransition') @Prop contentTransition: ContentTransitionType = ContentTransitionType.IDENTITY;
  private rootSlot = new NodeContent();

  aboutToAppear(): void {
    this.componentId = this.getUniqueId().toString();
    if (this.customId != undefined) {
      // 预创建组件
      nativeNode.connectContentSlot(this.componentId, this.customId, this.rootSlot, this.imageKnifeOption, this.animatorOption,
        this.getDefaultContext(), {syncLoad:this.syncLoad, draggable:this.imageDraggable, contentTransition:this.contentTransition});
    } else {
      nativeNode.createNativeRoot(this.rootSlot, this.componentId, this.imageKnifeOption,
        this.animatorOption, this.getDefaultContext(), {syncLoad:this.syncLoad, draggable:this.imageDraggable, contentTransition:this.contentTransition});
    }
  }

  aboutToDisappear(): void {
    nativeNode.destroyNativeRoot(this.componentId);
  }

  aboutToRecycle() {
    nativeNode.clearNativeRoot(this.componentId);
  }

  watchContentTransition() {
    nativeNode.updateNodeContentTransition(this.componentId, this.contentTransition);
  }

  watchDraggable() {
    nativeNode.updateNodeDraggable(this.componentId, this.imageDraggable);
  }

  watchImageKnifeOption() {
    nativeNode.updateNativeRoot(this.componentId, this.imageKnifeOption, this.syncLoad, this.getDefaultContext());
  }

  watchAnimatorOption() {
    nativeNode.controlAnimatorImage(this.componentId, this.animatorOption);
  }

  build() {
    ContentSlot(this.rootSlot)
  }

  getDefaultContext(): common.UIAbilityContext | undefined {
    if (this.imageKnifeOption == undefined || this.imageKnifeOption?.context == undefined) {
      return this.getUIContext().getHostContext() as common.UIAbilityContext;
    }

    return undefined;
  }
}