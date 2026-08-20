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
import { ImageKnifeRequest } from './model/ImageKnifeRequest';
import nativeNode from 'libimageknifepro.so';
import { HeaderOptions, ImageKnifeOption } from './model/ImageKnifeOption';
import { CacheStrategy, ImageKnifeData, CacheErrorCode, DnsOption } from './model/ImageKnifeData';

export class ImageKnife {
  private static instance: ImageKnife;

  private constructor() {

  }

  public static getInstance(): ImageKnife {
    if (!ImageKnife.instance) {
      ImageKnife.instance = new ImageKnife();
    }
    return ImageKnife.instance;
  }

  /**
   * 预创建组件需要与ArkTs ImageKnifeComponent组件关联才能使用
   * 预创建组件只能关联一个ImageKnifeComponent组件
   * 如果需要加载本地图片，请在imageKnifeOption.context上设置对应的页面context，默认的context在此接口中不可用
   * @param customId 唯一的组件id标识，不要使用纯数字字符串
   * @param imageKnifeOption 图片加载参数选项
   */
  public preCreateImageKnifeComponent(customId: string, imageKnifeOption: ImageKnifeOption) {
    nativeNode.preCreateNativeNode(customId, imageKnifeOption);
  }

  /**
   * 设置预创建组件的最大数量，默认最大数量为10个
   * 预创建组件关联成功后会从记录中移除，转为正常组件进行管理
   * 当预创建组件数量到达设定的最大数量时，会按先后顺序，销毁最早的预创建组件
   * @param maxCount 最大数量
   */
  public setMaxPreCreateNodeCount(maxCount: number) {
    nativeNode.setMaxPreCreateNodeCount(maxCount);
  }

  /**
   * 清空所有未关联的预创建组件，释放对应内存
   * 已关联成功的组件，正常显示的组件不受影响
   */
  public releasePreCreatedNode() {
    nativeNode.releasePreCreatedNode();
  }

  /**
   * 初始化文件缓存个数，大小，以及路径
   * @param context 上下文
   * @param size 设置最大图片缓存数量
   * @param maxDiskUsage 设置最大硬盘使用量
   * @param path 设置文件缓存的子目录
   */
  async initFileCache(context: Context, size: number = 256, maxDiskUsage: number = 256 * 1024 * 1024,
    path?: string): Promise<void> {
    if (path === undefined) {
      path = "ImageKnife";
    }
    return await nativeNode.initFileCache(context.filesDir, size, maxDiskUsage, path);
  }

  /**
   * 设置最大请求数量
   * @param concurrency 请求数量
   */
  public setMaxRequests(concurrency: number): void {
    nativeNode.setMaxRequests(concurrency);
  }

  /**
   * 预加载
   * 如果需要预加载本地图片，请在imageKnifeOption.context上设置对应的页面context，默认的context在此接口中不可用
   * @param loadSrc 图片地址url
   * @returns 图片请求request
   */
  preload(loadSrc: string | ImageKnifeOption): ImageKnifeRequest {
    let imageKnifeOption = new ImageKnifeOption()
    if (typeof loadSrc === 'string') {
      imageKnifeOption.loadSrc = loadSrc;
    } else {
      imageKnifeOption = loadSrc;
    }

    const request = new ImageKnifeRequest(
      imageKnifeOption,
    );
    return nativeNode.preload(request);
  }

  /**
   * 预加载图片, 返回文件缓存的对应文件路径
   * @param option 加载图片对应的参数选项
   * @return 返回promise对象，加载成功时获取到正常文件路径，加载失败时获取的是空字符串
   */
  async preloadCache(loadSrc: string | ImageKnifeOption): Promise<string> {
    let imageKnifeOption = new ImageKnifeOption();
    if (typeof loadSrc === 'string') {
      imageKnifeOption.loadSrc = loadSrc;
    } else {
      imageKnifeOption = loadSrc;
    }
    return await nativeNode.preloadCache(imageKnifeOption);
  }

  /**
   * 取消图片预加载
   * @param request 图片请求request
   */
  cancel(request: ImageKnifeRequest): void {
    nativeNode.cancel(request);
  }

  /**
   * 重新加载请求，忽略已过期、已加载成功的请求。不能用于预加载请求的重试
   * @param requestId 图片加载请求的ID信息，通过ImageInfo.requestId获取
   */
  reload(requestId: string): void {
    nativeNode.reload(requestId);
  }

  /**
   * @brief 添加小端文件缓存，并进行初始化
   * 添加一个小端文件缓存实例至默认的文件缓存拦截器中, 不同的缓存实例之前不会相互LRU
   * @param cacheName 小端文件缓存名称，不能为空，不能与其他的小端文件缓存名称一样
   * @param context 上下文
   * @param filePath 设置小端文件缓存的子目录，最终的缓存目录不能与大端缓存目录或其他小端目录一样
   * @return 返回缓存错误码
   */
  async addSmallEndFileCache(cacheName:string, context:Context, filePath:string,
    maxSize: number = 256, maxDiskUsage: number = 256 * 1024 * 1024) : Promise<CacheErrorCode> {
    return await nativeNode.addSmallEndFileCache(cacheName, context.filesDir, filePath, maxSize, maxDiskUsage);
  }

  /**
   * 判断文件缓存初始化是否完成
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @return 返回true表示初始化完成，返回false表示初始化未完成
   */
  isFileCacheInit(cacheName?:string): boolean {
    return nativeNode.isFileCacheInit(cacheName);
  }

  /**
   * 默认的文件缓存启用文件拓展名
   * 调用后，则写文件缓存时会添加文件拓展名
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   */
  fileCacheEnableExtension(cacheName?:string) {
    nativeNode.fileCacheEnableExtension(cacheName)
  }

  /**
   * 获取文件或内存缓存的图片数量上限
   * 该接口只获取默认内存缓存，文件缓存的上限
   * @param cacheStrategy : 指定需要查询类型。CacheStrategy::FILE为查询文件缓存，其余枚举为查询内存缓存
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @return 文件或者内存图片数量上限, 获取文缓存上限失败返回-1
   */
  getCacheLimitNum(cacheStrategy: CacheStrategy, cacheName?:string) :number | undefined {
    return nativeNode.getCacheLimitNum(cacheStrategy, cacheName);
  }

  /**
   * 获取文件或者内存缓存上限(字节)
   * @param cacheStrategy 指定需要查询类型。CacheStrategy.FILE为查询文件缓存，其余枚举为查询内存缓存
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @returns 文件或者内存上限, 获取文缓存上限失败返回-1
   */
  getCacheLimitSize(cacheStrategy?: CacheStrategy, cacheName?:string): number | undefined {
    return nativeNode.getCacheLimitSize(cacheStrategy, cacheName);
  }

  /**
   * 获取文件或者内存缓存当前缓存的图片数量
   * @param cacheStrategy 指定需要查询类型。CacheStrategy.FILE为查询文件缓存，其余枚举为查询内存缓存
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @returns 文件或者内存缓存图片数量,获取文件缓存图片数量返回值为-1时,文件缓存初始化未完成获取不到结果
   */
  getCurrentCacheNum(cacheStrategy : CacheStrategy, cacheName?:string): number | undefined {
    return nativeNode.getCurrentCacheNum(cacheStrategy, cacheName);
  }

  /**
   * 获取磁盘或者内存已用空间大小（字节）
   * @param cacheStrategy 指定需要查询类型。CacheStrategy.FILE为查询文件缓存，其余枚举为查询内存缓存
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @returns 文件或者内存已用空间大小,获取文件缓存已用空间返回值为-1时,文件缓存初始化未完成获取不到结果
   */
  getCurrentCacheSize(cacheStrategy : CacheStrategy, cacheName?:string): number | undefined {
    return nativeNode.getCurrentCacheSize(cacheStrategy, cacheName);
  }

  /**
   * 从内存或文件缓存中获取图片数据，若没有对应缓存，则去加载图片
   * 如果需要加载本地图片，请在imageKnifeOption.context上设置对应的页面context，默认的context在此接口中不可用
   * @param loadSrc 图片地址url 或图片加载详细参数ImageKnifeOption
   * @param cacheType : 缓存策略
   * 值为CacheStrategy::DEFAULT时尝试从内存，文件缓存中获取数据
   * 值为CacheStrategy::MEMORY时仅从内存缓存中取数据
   * 值为CacheStrategy::FILE时仅从文件缓存中取数据
   * 值为CacheStrategy::NONE时不使用缓存，直接去加载图片
   * @param signature 缓存key自定义签名信息，覆盖option中的signature设置
   * @param animator 生成key是否以动图的方式处理，默认为false，动图的图片数据是多帧pixelmap的数组
   * @return 返回promise对象可以获取图片数据ImageKnifeData
   * 返回的ImageKnifeData中包含的pixelmap需要在不使用后主动调用release释放内存
   */
  getCacheImage(loadSrc: string | ImageKnifeOption, cacheType: CacheStrategy = CacheStrategy.DEFAULT,
                signature: string = "", animator: boolean = false): Promise<ImageKnifeData | undefined> {
    let imageKnifeOption = new ImageKnifeOption();
    if (typeof loadSrc === 'string') {
      imageKnifeOption.loadSrc = loadSrc;
    } else {
      imageKnifeOption = loadSrc;
    }
    return nativeNode.getCacheImage(imageKnifeOption, cacheType, signature, animator);
  }

  /**
   * 设置文件或者内存缓存的使用上限
   * 该接口只设置默认文件缓存，内存缓存上限
   * 内存缓存的最大上限为1024*1024*1024(字节)，4096(图片张数)，超过该范围应用最大上限值
   * 大端文件缓存的最大上限为512*1024*1024(字节)，4096(图片张数)，超过该范围应用最大上限值
   * 小端文件文件缓存的最大上限为256*1024*1024(字节), 2048(图片张数), 超过该范围应用最大上限值
   * @param cacheStrategy 指定需要设置的类型。CacheStrategy::FILE为设置文件缓存，其余枚举为设置内存缓存
   * @param maxSize 缓存的最大图片张数
   * @param maxUsage 最大的缓存使用量（字节）
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   */
  setCacheLimit(strategy: CacheStrategy, maxSize: number, maxUsage: number, cacheName?:string) {
    nativeNode.setCacheLimit(strategy, maxSize, maxUsage, cacheName);
  }

  /**
   * 全局添加单个请求头header
   * @param key 请求头属性
   * @param value 请求头值
   */
  addHeader(key: string, value: Object) {
    nativeNode.addHeader(key, value);
  }

  /**
   * 为默认的网络下载设置全局的自定义Dns规则
   * @param dnsOption 自定义Dns配置项
   */
  setGlobalDnsOption(dnsOption: DnsOption) {
    nativeNode.setGlobalDnsOption(dnsOption);
  }

  /**
   * 设置默认解码是否使用优化jpeg图片解码
   * 没有调用时，默认不启用
   * 设置为true后，图片会优化Jpeg解码，以减小解码后的图片内存占用
   * 如果Jpeg图片设置了图形变换，则不会应用该解码优化，仍然使用默认的解码方式
   * 启用后，GetCacheImage接口可能获取到非RGBA像素的格式的pixelmap
   * @param enable 是否开启jpeg解码优化
   */
  setJpegOptimizeDecoding(enable: boolean) {
    nativeNode.setJpegOptimizeDecoding(enable);
  }

  /**
   * 获取默认解码是否开启了jpeg解码优化
   * @return 返回true表示开启了优化解码，返回false表示没有开启
   */
  getJpegOptimizeDecoding(): boolean {
    return nativeNode.getJpegOptimizeDecoding();
  }

  /**
   * 全局设置请求头header
   * @param options 请求头数组
   */
  setHeaderOptions(options: Array<HeaderOptions>) {
    options.forEach((value) => {
      nativeNode.addHeader(value.key, value.value);
    })
  }

  /**
   * 删除单个请求头header
   * @param key 请求头属性
   */
  deleteHeader(key: string) {
    nativeNode.deleteHeader(key);
  }

  /**
   * 清除所有内存缓存
   */
  removeAllMemoryCache(): void {
    nativeNode.removeAllMemoryCache();
  }

  /**
   * 清除指定内存缓存
   * @param url 待清除的url路径或ImageKnifeOption
   */
  removeMemoryCache(url: string | ImageKnifeOption) {
    let imageKnifeOption = new ImageKnifeOption();
    if (typeof url == 'string') {
      imageKnifeOption.loadSrc = url;
    } else {
      imageKnifeOption = url;
    }
    nativeNode.removeMemoryCache(imageKnifeOption);
  }

  /**
   * 清除所有文件缓存
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   * @returns 清除结果
   */
  async removeAllFileCache(cacheName?:string): Promise<void> {
    await nativeNode.removeAllFileCache(cacheName);
  }

  /*
   * 清除指定文件缓存
   * */
  removeFileCache(url: string | ImageKnifeOption): void {
    let imageKnifeOption: ImageKnifeOption;
    if (typeof url == 'string') {
      imageKnifeOption = {
        loadSrc: url
      };
    } else {
      imageKnifeOption = url;
    }
    nativeNode.removeFileCache(imageKnifeOption);
  }

  /**
   * 用于外部已获取pixelmap，需要加入imageknife缓存的场景
   * @param url  图片地址url
   * @param pixelMap 需要缓存的图片数据
   * @param cacheType 写入缓存的类型，DEFAULT为同时写入文件和内存缓存，MEMORY为写入内存缓存，FILE为写入文件缓存
   * @param signature 缓存key自定义签名信息
   * @param cacheName 需要操作的文件缓存名称，默认名称为空即操作大端文件缓存, 不为空则匹配小端文件缓存
   */
  putCacheImage(url: string, pixelMap: PixelMap, cacheType: CacheStrategy = CacheStrategy.DEFAULT,
                signature: string = "", cacheName?:string) {
    nativeNode.putCacheImage(url, pixelMap, cacheType, signature, cacheName);
  }
}