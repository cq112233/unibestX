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

export enum Priority {
  HIGH = 0, // 高队列优先级
  MEDIUM, // 中队列优先级
  LOW // 低队列优先级
};

export enum ImageFormat {
  UNKNOWN = 0,
  JPG,
  PNG,
  WEBP,
  BMP,
  GIF,
  SVG,
  TIFF,
  HEIC,
  ICO,
  CUSTOM_FORMAT, // 自定义的图片格式
  AVIF
};

/**
 * 描述期望的图像内容显示方向
 */
export enum Orientation {
  /**
   * 读取图片携带的EXIF元数据作为显示方向，支持旋转和镜像
   * 如果使用该值，则自定义解码过程需要自行读取图片元数据，并完成图片旋转翻转操作
   */
  AUTO = 0,
  /**
   * 按照当前图片的像素数据进行显示，不做任何处理
   */
  UP,
  /**
   * 将当前图片顺时针旋转90度后显示
   */
  RIGHT,
  /**
   * 将当前图片顺时针旋转180度后显示
   */
  DOWN,
  /**
   * 将当前图片顺时针旋转270度后显示
   */
  LEFT
};

/**
 * 指定期望动态范围
 */
export enum DynamicRange {
  /**
   * 根据图片自适应处理
   */
  AUTO = 0,
  /**
   * 标准动态范围
   */
  SDR,
  /**
   * 高动态范围
   */
  HDR
};

/**
 * 内容过渡效果
 * 在组件显示的图片更新时，展示的过渡效果
 * 设备API版本低于21不生效
 */
export enum ContentTransitionType {
  /**
   * 默认值，没有过渡效果
   */
  IDENTITY = 0,
  /**
   * 淡入淡出效果
   */
  OPACITY = 1
}

/**
 * 图像拉伸时可调整大小的图像选项
 * 当设置 top+bottom 大于原图的高或者 left+right 大于原图的宽时不生效
 */
export class ResizableOption {
  /**
   * 图片左部拉伸时，图片的像素值保持不变，单位vp
   */
  left:number = 0
  /**
   * 图片顶部拉伸时，图片的像素值保持不变，单位vp
   */
  top:number = 0
  /**
   * 图片右部拉伸时，图片的像素值保持不变，单位vp
   */
  right:number = 0
  /**
   * 图片底部拉伸时，图片的像素值保持不变，单位vp
   */
  bottom:number = 0
}

/**
 * 缓存错误码
 */
export enum CacheErrorCode {
  /**
   * 操作成功
   */
  SUCCESS = 0,
  /**
   * 添加小端缓存时，缓存名称为空
   */
  CACHE_NAME_EMPTY = 401,
  /**
   * 添加小端缓存时，缓存名称已存在
   */
  CACHE_NAME_OCCUPIED = 409,
  /**
   * 缓存路径非法
   */
  FILE_PATH_INVALID = 503,
  /**
   * 添加小端缓存时，缓存路径已被使用
   */
  FILE_PATH_OCCUPIED = 509,
};

/**
 * 加载回调图片信息
 */
export interface ImageInfo {
  requestId: string, // 图片加载请求的ID标识
  isMergedRequest: boolean, // 是否为合并的请求
  imageSourceFrom: ImageSourceFrom, // 图片加载的来源
  imageWidth: number, // 原始图片宽度
  imageHeight: number, // 原始图片高度
  componentWidth?: number, // 请求时组件测算宽度
  componentHeight?: number, // 请求时组件测算高度
  bufSize?: number, // 图片的字节数
  type?: ImageFormat, // 图片文件格式
  customFormat?: string, // 描述具体的自定义文件格式
  httpCode?: number, // 网络请求状态码
  frameCount ?: number // 图片的帧数
  decodeImages?: Array<DecodeImageInfo> //Image组件或者ImageAnimator组件可以加载一张或者多张
  transformationInfos?: Array<TransformationInfo> // 图形变换的信息，包含执行过的每个图形变换
  timeInfo?: TimeInfo // 加载图片的各个时间点
  errorInfo?: ErrorInfo // 错误信息
}

/**
 * 图片内存pixelmap数据
 */
export interface ImageKnifeData {
  pixelmapList?: Array<PixelMap>
  delayTimeList?: Array<number>
  frameCount: number
}

/**
 * 解码后的图片的size
 */
export interface DecodeImageInfo {
  contentWidth ?: number // 解码后宽高
  contentHeight?: number
}

/**
 * 加载的错误信息
 */
export interface ErrorInfo {
  phase: string, //图片加载阶段信息，如：网络加载阶段，缓存获取阶段及其解码阶段等
  code: number
}

/**
 * 图片加载的时间戳信息
 */
export interface TimeInfo {
  /**
   * 请求创建完成，开始处理的时间
   * 对于被合并请求，该时间可能晚于加载解码时间，因为加载过程是由其他请求进行的，被合并的请求进行了复用
   */
  executeTime?: number,
  /**
   * 请求开始加载的时间
   * requestStartTime - executeTime 等于队列排队等其他耗时时间
   * 对于被合并请求，该时间可能晚于加载解码时间，因为加载过程是由其他请求进行的，被合并的请求进行了复用
   */
  requestStartTime?: number,
  requestEndTime?: number, //请求结束时间
  requestCancelTime?: number, //请求取消时间
  memoryCheckStartTime?: number, //内存缓存责任链读缓存任务开始时间
  memoryCheckEndTime?: number, //内存缓存责任链读缓存任务结束时间
  diskCheckStartTime?: number, //文件缓存责任链读缓存任务开始时间
  diskCheckEndTime?: number, //文件缓存责任链读缓存任务结束时间
  loadImageStartTime?: number, //图片加载责任链开始时间
  loadImageEndTime?: number, //图片加载责任链结束时间
  decodeStartTime?: number, //图片解码责任链开始时间
  decodeEndTime?: number, //图片解码责任链结束时间
}

/**
 * 记录执行的图形变换对象信息
 */
export interface TransformationInfo {
  /**
   * 图形变换对象的描述，包含其参数信息
   */
  desc:string;
  /**
   * 图形变换是否成功
   */
  isSuccess:boolean;
  /**
   * 图片变换对象执行的开始时间
   */
  startTime?:number;
  /**
   * 图片变换对象执行的结束时间
   */
  endTime?:number;
}

/**
 * @brief 图片加载的来源
 */
export enum ImageSourceFrom {
  /**
   * 图片来源位置，加载失败，未完成
   */
  UNKNOWN = 0,
  /**
   * 图片加载自内存缓存
   */
  FROM_MEMORY_CACHE,
  /**
   * 图片加载自文件缓存
   */
  FROM_FILE_CACHE,
  /**
   * 图片加载自本地资源文件，raw file
   */
  FROM_LOCAL_FILE,
  /**
   * 图片加载自网络下载
   */
  FROM_NETWORK_DOWNLOAD,
  /**
   * 图片直接使用传入的Pixelmap显示
   */
  FROM_PIXELMAP
};

/**
 * onComplete回调的入参
 */
export interface EventImage {
  width: number;  //图片宽度
  height: number; //图片高度
  componentWidth: number; //组件宽度
  componentHeight: number; //组件高度
  loadingStatus: number; //加载状态，0为加载，1为解码。
  contentWidth: number; //
  contentHeight: number;
  contentOffsetX: number;
  contentOffsetY: number;
}
/**
 * 缓存策略
 */
export enum CacheStrategy {
  // 使用内存和文件缓存
  DEFAULT = 0,
  // 只使用内存缓存
  MEMORY = 1,
  // 只使用文件缓存
  FILE = 2,
  // 不使用缓存
  NONE = 3
}

/**
 * 动图解码模式
 * 不会影响单帧的静态图片
 */
export enum AnimationDecodeMode {
  /**
   * 根据图片分辨率与帧数自动选择解码模式
   * 对于宽 * 高 * 帧数小于720 * 720 * 32的图片选择批量解码，否则选择逐帧解码
   */
  AUTO = 0,
  /**
   * 批量解码模式
   * 将图片所有帧全部解码至内存，播放时无解码开销，但内存占用比较高
   */
  BATCH_MODE,
  /**
   * 逐帧解码模式
   * 动图播放时每一帧实时解码，内存占用小
   */
  FRAME_MODE
};

/**
 * 解码的图片PixelMap内存分配模式
 */
export enum AllocationMode {
  /**
   * 根据图片格式，大小宽度自动选择内存分配模式
   */
  AUTO = 0,
  /**
   * 使用DMA buffer来创建PixelMap
   * SVG图片不支持此模式
   */
  DMA,
  /**
   * 使用share内存来创建PixelMap
   */
  SHARE_MEMORY
};

/**
 * 静态Dns规则列表元素
 */
export class StaticDnsRuleItem {
  /**
   * 匹配的host name, 最大字节数：256
   */
  host:string = "";
  /**
   * 匹配的端口号, 范围0-65535
   */
  port:number = 80;
  /**
   * 当解析host:port时，期望访问的ip地址列表
   */
  ipAddresses:Array<string> = []
}

/**
 * 自定义Dns设置
 */
export class DnsOption {
  /**
   * 静态Dns规则
   */
  staticDnsRule:Array<StaticDnsRuleItem> = []
}