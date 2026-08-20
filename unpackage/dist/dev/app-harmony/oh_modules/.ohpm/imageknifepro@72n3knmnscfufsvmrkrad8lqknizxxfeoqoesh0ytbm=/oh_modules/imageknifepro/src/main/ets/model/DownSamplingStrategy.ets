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


/**
 *  降采样策略
 */
export enum DownSamplingStrategy {
  /**
   * 不进行降采样
   */
  NONE = 0,
  /**
   * 默认值，仅在图片分辨率超过上限7680 * 4320时，宽高等比降为7680 * 4320
   */
  DEFAULT,
  /**
   * 两边自适应内存优先
   */
  FIT_CENTER_MEMORY,
  /**
   * 两边自适应质量优先
   */
  FIT_CENTER_QUALITY,
  /**
   * 按照宽高比的最大比进行适配内存优先
   */
  CENTER_INSIDE_MEMORY,
  /**
   * 按照宽高比的最大比进行适配质量优先
   */
  CENTER_INSIDE_QUALITY,
  /**
   * 宽高进行等比缩放宽高里面最小的比例先放进去，然后再根据原图的缩放比去适配
   */
  AT_LEAST,
  /**
   * 请求尺寸大于实际尺寸不进行放大
   */
  AT_MOST
};