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
import common from '@ohos.app.ability.common'
import {ImageInfo, EventImage, Priority, CacheStrategy,
        Orientation, ResizableOption, AnimationDecodeMode,
  AllocationMode, DnsOption, DynamicRange} from './ImageKnifeData';
import { common2D,drawing } from '@kit.ArkGraphics2D'
import { TransformationOption } from './TransformationOption'
import { DownSamplingStrategy } from './DownSamplingStrategy'

// http header配置项
export interface HeaderOptions {
  key: string; // 请求头名称
  value: Object; // 请求头值
}

// http 请求配置项
export interface HttpRequestOption{
  caPath?:string;  // CA证书路径
  connectTimeout?:number;   // 链接建立超时时间，默认60s，单位毫秒
  readTimeout?:number;  // 下载超时时间，默认60s，单位毫秒
}

// 图片颜色过滤
export interface DrawingColorFilter {
  color:common2D.Color;
  mode:drawing.BlendMode;
}

@Observed
export class AnimatorOption {
  @Track
  state?: AnimationStatus = AnimationStatus.Running
  @Track
  iterations?: number = -1
  @Track
  reverse?: boolean = false
  @Track
  onStart?:()=>void
  @Track
  onFinish?:()=>void
  @Track
  onPause?:()=>void
  @Track
  onCancel?:()=>void
  @Track
  onRepeat?:()=>void
}

@Observed
export class ImageKnifeOption {
  /**
   * 主图资源，必须设置
   * Pixelmap类型图片将直接显示不执行责任链
   * RESOURCE资源读取依赖ArkTs页面上下文，C API方式使用时不生效
   */
  loadSrc: string | PixelMap | Resource = '';
  /**
   * 占位图资源
   * Pixelmap类型图片将直接显示不执行责任链
   * RESOURCE资源读取依赖ArkTs页面上下文，C API方式使用时不生效
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新
   */
  placeholderSrc?: string | PixelMap | Resource;
  /**
   * 缩略图资源
   * Pixelmap 类型图片将直接显示不执行责任链
   * RESOURCE 资源读取依赖ArkTs页面上下文，C API方式使用时不生效
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新
   */
  thumbnailSrc?: string | PixelMap | Resource;
  /**
   * 错误图资源
   * 在主图和缩略图都加载失败或无效的情况下进行加载展示
   * Pixelmap类型图片将直接显示不执行责任链
   * RESOURCE资源读取依赖ArkTs页面上下文，C API方式使用时不生效
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新
   */
  errorSrc?: string | PixelMap | Resource;
  /**
   * 自定义图片加载loader, 需要在C侧实现自定义loader并注册，此项不设置会使用全局默认loader加载
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  imageKnifeLoader?: string;
  /**
   * 自定义网络加载请求头列表
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  headerOption?: Array<HeaderOptions>;
  /**
   * 自定义dns设置
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  dnsOption?: DnsOption;
  /**
   * 自定义缓存key生成所用的签名
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  signature?: string;
  /**
   * 给加载过程中的pixelmap设置memory name用于定位内存问题，不影响图片加载
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  pixelName?: string;
  /**
   * 主图填充效果
   */
  objectFit?: ImageFit;
  /**
   * 占位图填充效果
   */
  placeholderObjectFit?: ImageFit;
  /**
   * 缩略图填充效果
   */
  thumbnailObjectFit?: ImageFit;
  /**
   * 错误图填充效果
   */
  errorObjectFit?: ImageFit;
  /**
   * 主图期望的图像内容显示方向,默认值AUTO
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  orientation?: Orientation;
  /**
   * 主图期望的解码动态范围,默认值AUTO
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  dynamicRange?: DynamicRange;
  /**
   * 设置图像拉伸时可调整大小的图像选项
   */
  resizeable?: ResizableOption;
  /**
   * 组件圆角边框效果
   */
  border?: BorderOptions;
  /**
   * 主图选择的小端文件缓存名称
   * 默认为空，即不使用小端文件缓存，用大端文件文件缓存进行读写
   * 小端文件缓存需要添加初始化，可以添加多个，各个文件缓存实例之间不会互相LRU
   * 只对默认的文件缓存拦截器有效
   * 当名称匹配失败时，使用大端文件缓存进行读写兜底
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  fileCacheName?: string;
  /**
   * 图片写缓存策略，默认同时使用内存和文件缓存
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  writeCacheStrategy?: CacheStrategy;
  /**
   * 设置主图是否仅使用缓存进行图片加载。仅使用缓存如没有对应图片缓存，则加载失败
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  onlyRetrieveFromCache?: boolean;
  /**
   * 加载队列的优先级
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  priority?: Priority;
  /**
   * 图形变换对象，在图片加载过程中执行一次，在multiTransformation不为空的情况下无效
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  transformationOption?: TransformationOption;
  /**
   * 多次图形变换对象，不为空的情况的下会忽略transformation
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  multiTransformationOption?: Array<TransformationOption>;
  /**
   * 页面上下文
   */
  context?: common.UIAbilityContext;
  /**
   * 监听监听网络下载进度回调
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  progressListener?: (progress: number) => void;
  /**
   * 监听请求加载的对象，可设置相关加载回调
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  onLoadListener?: OnLoadCallBack | undefined;
  /**
   * 系统Image组件加载完成的回调
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  onComplete?:(event:EventImage | undefined) => void;
  /**
   * http请求设置
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  httpOption?:HttpRequestOption;
  /**
   * 设置图片的ColorFilter属性
   */
  drawingColorFilter?:DrawingColorFilter;
  /**
   * @brief 动图解码模式
   * 默认为AnimationDecodeMode.AUTO
   */
  animationDecodeMode?:AnimationDecodeMode;
  /**
   * 解码图片的PixelMap内存分配模式
   * 在API15以下系统版本无效
   * 默认为AllocationMode.AUTO
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  allocationMode?:AllocationMode;
  /**
   * 降采样策略
   * 变更该属性会导致主图请求状态变更，重新开始加载
   */
  downSampling?: DownSamplingStrategy;
  /**
   * 校验图片传输数据
   * 使用时机：【图片下载成功】
   * 校验失败的图片会被抛弃，默认进行校验
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  crc32?: number;
  /**
   * 备用图片地址
   * 使用时机：【图片下载失败、crc32值校验失败】
   * 在主图请求状态未发生变换的情况下，变更该属性不会触发更新，不会影响在加载的请求
   */
  fallbackUrls?: Array<string>;
  /**
   * 修改此属性于来强制触发组件对ImageKnifeOption的watch
   * 该属性与图片加载无关
   * 触发Watch不一定会导致组件实际去更新加载
   */
  forceWatch?: number;
  constructor() {
  }
}

/**
 * 图片加载回调，只对主图加载生效
 */
export interface OnLoadCallBack {
  // 请求开始
  onLoadStart?: (imageInfo: ImageInfo) => void;

  // 请求成功
  onLoadSuccess?: (imageInfo: ImageInfo) => void;

  // 请求结束
  onLoadFailed?: (err: string, imageInfo: ImageInfo) => void;

  // 请求取消
  onLoadCancel?: (reason: string, imageInfo: ImageInfo) => void;

  /**
   * 图片内存读取成功回调
   * 主图成功获取图片内存缓存时触发，若图片没有内存缓存，则不会触发
   */
  onMemorySuccess?: (imageInfo: ImageInfo) => void;

  /**
   * 图片下载成功回调
   * 主图下载成功回调，若没有经过下载过程，则不会触发
   * 对应C接口回调在子线程中触发，arkTs侧注册的回调会抛回主线程执行，存在跨线程的延迟
   */
  onDownloadSuccess?: (imageInfo: ImageInfo) => void;

  /**
   * 图片解码成功回调
   * 主图解码成功回调，若没有经过解码过程，则不会触发
   * 对应C接口回调在子线程中触发，arkTs侧注册的回调会抛回主线程执行，存在跨线程的延迟
   */
  onDecodeSuccess?: (imageInfo: ImageInfo) => void;
}