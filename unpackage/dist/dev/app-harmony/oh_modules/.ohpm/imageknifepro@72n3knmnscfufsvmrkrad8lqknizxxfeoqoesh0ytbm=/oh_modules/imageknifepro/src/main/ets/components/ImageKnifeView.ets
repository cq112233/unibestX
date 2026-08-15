/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

/**
 * ImageKnife 自渲染组件
 * 同时支持静态图片和动图, ImageKnife自渲染组件
 * 当前支持的图片填充效果ImageFit为：Contain, Cover, Fill, None, ScaleDown, Auto
 * ImageKnifeView暂不支持组件的隐式动画
 * 暂不支持ResizeableOption
 * 暂不支持HDR图片
 */
@Component
export struct ImageKnifeView {
  private componentId: string = '';
  syncLoad: boolean = false;

  /**
   * 设置组件测算宽高是否适配图片宽高比例
   * 应用于超长图片浏览，定宽不定高，或定高不定宽等方式的布局
   * 开启时会导致依赖测算宽高的降采样失效，组件宽高去适配图片的比例，可以理解为图片将组件撑开
   * 值未false即默认组件测算宽高不适配图片宽高比例，图片根据设置的组件宽高和填充效果进行缩放填充
   */
  @Watch('watchAdaptable') @Prop adaptable: boolean = false;

  @Watch('watchImageKnifeOption') @ObjectLink imageKnifeOption: ImageKnifeOption;
  @Watch('watchAnimatorOption') @Prop animatorOption: AnimatorOption | undefined = undefined;
  // 设置图片可拖拽
  @Watch('watchDraggable') @Prop imageDraggable: boolean = false;

  private rootSlot = new NodeContent();

  aboutToAppear(): void {
    this.componentId = this.getUniqueId().toString();
    nativeNode.createNativeImageView(this.rootSlot, this.componentId, this.imageKnifeOption,
      this.getDefaultContext(), this.animatorOption, {syncLoad:this.syncLoad, draggable:this.imageDraggable, adaptable:this.adaptable})
  }

  aboutToDisappear(): void {
    nativeNode.destroyNativeRoot(this.componentId);
  }

  aboutToRecycle() {
    nativeNode.clearNativeRoot(this.componentId);
  }

  watchAdaptable() {
    nativeNode.updateNodeAdaptable(this.componentId, this.adaptable);
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
      return getContext(this) as common.UIAbilityContext;
    }

    return undefined;
  }
}