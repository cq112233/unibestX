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
 * 图形变换类型
 */
export enum TransformationType {
  /**
   * 未知图形变换
   */
  UNKNOWN = 0,
  /**
   * ArkTs层使用自定义的图形变换，需设置customTransformation参数来选择C侧注册的图形变换对象
   * 图形变换自定义需在C侧继承Transformation类，并将其对象使用全局接口RegisterTransformation注册
   */
  CUSTOM_TRANSFORMATION,
  /**
   * 模糊效果，需设置参数f32[0]，模糊半径，单位为像素,默认值为10
   * 不改变原图片像素alpha值，对周边含透明背景的图片像素模糊效果较弱，需要更平滑的模糊效果可使用GAUSSIAN_BLUR
   * 可选参数 模糊偏移量，影响模糊程度:
   * f32[1]: X轴方向偏移量， 默认值：0.003
   * f32[2]: Y轴方向偏移量， 默认值：0.003
   */
  BLUR,
  /**
   * 高亮效果，需设置参数f32[0]，取值范围在0-1之间，取值为0时图像保持不变，默认值为0.25
   */
  BRIGHTEN,
  /**
   * 灰度效果
   */
  GRAY_SCALE,
  /**
   * 反色效果
   */
  INVERT,
  /**
   * 桑原滤波效果，需要设置f32[0]参数, 默认值25
   */
  KUWAHARA,
  /**
   * 像素化效果，需要设置f32[0]参数, 默认值10
   */
  PIXELATION,
  /**
   * 乌墨色滤波效果，需要设置f32[0]参数，默认值1
   */
  SEPIA,
  /**
   * 素描效果
   */
  SKETCH,
  /**
   * 扭曲效果，需要设置f32参数
   * f32[0]: 扭曲半径，值越大范围越大, 默认值200
   * f32[1]: 扭曲角度，取值范围0~1， 默认值0.9
   * f32[2]: 图中位置centerX，取值范围0~1，默认值0.5
   * f32[3]: 图中位置centerY，取值范围0~1，默认值0.5
   */
  SWIRL,
  /**
   * 动画滤镜效果，需要设置f32参数
   * f32[0]: threshold 默认值0.2
   * f32[1]: quantization levels 默认值4
   */
  TOON,
  /**
   * 装饰效果 需要设置f32参数
   * f32[0]: 图中位置centerX，取值范围0~1，默认值0.5
   * f32[1]: 图中位置centerY，取值范围0~1，默认值0.5
   * f32[2]: Red 取值范围0~255, 默认值90
   * f32[3]: Green 取值范围0~255, 默认值30
   * f32[4]: Blue 取值范围0~255, 默认值30
   * f32[5]: 开始位置 取值范围0~1，默认值0.23
   * f32[6]: 结束位置 默认值4
   */
  VIGNETTE,
  /**
   * 根据给定的宽高缩放裁剪图片顶部位置 需设置f32参数
   * 未设置宽高则直接裁剪图片顶部三分之一的区域
   * f32[0]: width, 默认值为0，即使用目标图片的宽度
   * f32[1]: height, 默认值为0，即使用目标图片的高度的1/3
   */
  CROP_TOP,
  /**
   * 根据给定的宽高缩放裁剪图片中间位置 需设置f32参数
   * 未设置宽高则直接裁剪图片中间三分之一的区域
   * f32[0]: width, 默认值为0，即使用目标图片的宽度
   * f32[1]: height, 默认值为0，即使用目标图片的高度的1/3
   */
  CROP_CENTER,
  /**
   * 根据给定的宽高缩放裁剪图片底部位置 需设置f32参数
   * 未设置宽高则直接裁剪图片底部三分之一的区域
   * f32[0]: width, 默认值为0，即使用目标图片的宽度
   * f32[1]: height, 默认值为0，即使用目标图片的高度的1/3
   */
  CROP_BOTTOM,
  /**
   * 居中裁切成正方形
   */
  CROP_SQUARE,
  /**
   * 裁剪为最大内切圆
   */
  CROP_CIRCLE,
  /**
   * 裁剪为最大内切圆，并附带border, 需设置f32参数
   * f32[0]: border width, 默认值为5
   * f32[1]: border color red， 默认值为128
   * f32[2]: border color green， 默认值为128
   * f32[3]: border color blue， 默认值为128
   */
  CROP_CIRCLE_WITH_BORDER,
  /**
   * 遮罩效果，需要设置imageSource参数,遮罩图片
   * 可选参数: 设置signature，用于遮罩图片的加载，以及Mask图形变换描述信息生成
   * 遮罩图片alpha不为0的像素将设置在目标图片对应位置上
   */
  MASK,
  /**
   * 左右镜像效果
   */
  MIRROR,
  /**
   * 使用自定义的图形变换构造者来构造具体的Transformation对象
   * 需设置customTransformation参数来选择C侧注册的图形变换构造者对象TransformationConstructor
   * 图形变换构造者能接收ArkTs层传入的变换参数
   */
  CUSTOM_TRANSFORMATION_CONSTRUCTOR,
  /**
   * @brief 高斯模糊效果，模糊效果更平滑
   * 需设置参数f32[0]，模糊半径，单位为像素,默认值为10
   */
  GAUSSIAN_BLUR,
};

export class TransformationOption {
  /**
   * 图形变换的类型
   */
  type:TransformationType  = TransformationType.UNKNOWN;
  /**
   * 自定义图形变换对象的名称，需要C侧注册有对应的对象
   */
  customTransformation?: string = ""
  /**
   * float32类型参数, 当参数个数不满足对应图形变换类型时，将使用默认值
   */
  f32?: Array<number>;
  /**
   * @brief 遮罩图片资源 String | Pixelmap | Resource
   */
  imageSrc?: string | PixelMap | Resource;
  /**
   * @brief imageSrc对应的签名信息
   */
  signature?: string;
};