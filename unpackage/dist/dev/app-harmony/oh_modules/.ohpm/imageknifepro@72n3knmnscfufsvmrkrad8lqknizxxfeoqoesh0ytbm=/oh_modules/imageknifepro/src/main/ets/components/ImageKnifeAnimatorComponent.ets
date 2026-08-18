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
import { AnimatorOption, ImageKnifeOption } from '../model/ImageKnifeOption';
import common from '@ohos.app.ability.common';
import { NodeContent } from '@ohos.arkui.node';
import nativeNode from 'libimageknifepro.so';


/**
 * ImageKnifeNodeAnimator动图组件来显示动态图片(不推荐使用)
 * 显示静态图片时，会将其解释为一帧的动图
 * 能力受限于系统Animator组件:
 * 不支持逐帧解码模式
 * 不支持HDR图片
 * 不建议更新加载图片资源
 * 无法使用border设置圆角边框
 * 无法使用ImageFit设置填充效果
 * 无法使用Oncomplete送显完成回调
 * 无法使用Draggable拖拽能力
 * 无法使用ColorFilter设置颜色过滤
 * 不支持ResizeableOption
 */
@Component
export struct ImageKnifeAnimatorComponent {
  @Watch('watchImageKnifeOption') @ObjectLink imageKnifeOption: ImageKnifeOption;
  @Watch('watchAnimatorOption') @ObjectLink animatorOption: AnimatorOption;
  private componentId: string = '';
  private rootSlot = new NodeContent();

  aboutToAppear(): void {
    this.componentId = this.getUniqueId().toString();
    nativeNode.createAnimatorImage(this.rootSlot, this.componentId, this.imageKnifeOption, this.animatorOption,
      this.getDefaultContext());
  }

  aboutToDisappear(): void {
    nativeNode.destroyAnimatorImage(this.componentId);
  }

  aboutToRecycle() {
    nativeNode.clearAnimatorImage(this.componentId);
  }

  watchImageKnifeOption() {
    nativeNode.updateAnimatorImage(this.componentId, this.imageKnifeOption,
                                   this.animatorOption, this.getDefaultContext());
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