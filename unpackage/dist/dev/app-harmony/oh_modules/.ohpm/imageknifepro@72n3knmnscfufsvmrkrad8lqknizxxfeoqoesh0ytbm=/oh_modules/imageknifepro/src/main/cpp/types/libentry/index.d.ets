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

import { ImageKnifeRequest } from '../../../ets/model/ImageKnifeRequest';
import { AnimatorOption, ImageKnifeOption } from '../../../ets/model/ImageKnifeOption';
import { CacheStrategy, ImageKnifeData, CacheErrorCode, DnsOption,
  ContentTransitionType } from '../../../ets/model/ImageKnifeData';
import common from '@ohos.app.ability.common';

// 组件创建时，属性打包传入
declare class ComponentAttribute {
  syncLoad:boolean;
  draggable:boolean;
  adaptable?:boolean;
  contentTransition?:ContentTransitionType
}

export const createNativeRoot: (content: Object , componentId: string, imageKnifeOption: ImageKnifeOption,
  animatorOption: AnimatorOption | undefined, context: common.UIAbilityContext | undefined, componentAttrs:ComponentAttribute) => void;
export const updateNativeRoot: (componentId: string, imageKnifeOption: ImageKnifeOption, syncLoad: boolean, context: common.UIAbilityContext | undefined) => void;
export const clearNativeRoot: (componentId: string) => void;
export const destroyNativeRoot: (componentId: string) => void;
export const createNativeImageView: (content: Object , componentId: string, imageKnifeOption: ImageKnifeOption,
  context: common.UIAbilityContext | undefined, animatorOption: AnimatorOption | undefined, componentAttrs:ComponentAttribute) => void;
export const createAnimatorImage: (content: Object , componentId: string, imageKnifeOption: ImageKnifeOption,
  animatorOption: AnimatorOption | undefined, context: common.UIAbilityContext | undefined) => void;
export const updateAnimatorImage: (componentId: string, imageKnifeOption: ImageKnifeOption,
  animatorOption: AnimatorOption | undefined, context: common.UIAbilityContext | undefined) => void;
export const controlAnimatorImage: (componentId: string, animatorOption: AnimatorOption | undefined) => void;
export const clearAnimatorImage: (componentId: string) => void;
export const destroyAnimatorImage: (componentId: string) => void;
export const fileCacheEnableExtension: (cacheName?:string) => void;
export const addSmallEndFileCache: (cacheName:string, sandbox:string, path:string, maxSize:number, maxUsage:number) =>Promise<CacheErrorCode>;
export const initFileCache: (filesDir: string, size: number, memory: number, path?: string) => Promise<void>;
export const isFileCacheInit: (cacheName?:string) => boolean;
export const setMaxRequests: (concurrency: number) => void;
export const preload: (imageKnifeRequest: ImageKnifeRequest) => ImageKnifeRequest;
export const preloadCache: (imageKnifeOption: ImageKnifeOption) => Promise<string>;
export const getCacheImage: (imageKnifeOption: ImageKnifeOption, cacheType: CacheStrategy, signature: string, animator:boolean) => Promise<ImageKnifeData | undefined>
export const cancel: (request: ImageKnifeRequest) => void;
export const reload: (requestId: string) => void;
export const getCacheLimitNum: (CacheStrategy: CacheStrategy, cacheName?:string) =>number;
export const getCacheLimitSize: (cacheStrategy?: CacheStrategy, cacheName?:string)=> number;
export const getCurrentCacheNum: (cacheStrategy : CacheStrategy, cacheName?:string)=> number;
export const getCurrentCacheSize: (cacheStrategy : CacheStrategy, cacheName?:string)=> number;
export const addHeader: (key: string, value: Object) => void;
export const deleteHeader: (key: string) => void;
export const setGlobalDnsOption: (dnsOption:DnsOption) => void;
export const removeAllMemoryCache: () => void;
export const removeMemoryCache: (imageKnifeOption: ImageKnifeOption) => void;
export const removeAllFileCache: (cacheName?: string) => Promise<void>;
export const removeFileCache: (imageKnifeOption: ImageKnifeOption) => void;
export const setCacheLimit: (strategy: CacheStrategy, maxSize: number, maxUsage: number, cacheName?:string) => void;
export const putCacheImage: (url: string, pixelMap:PixelMap, cacheType: CacheStrategy, signature: string, cacheName?:string) => void;
export const updateNodeDraggable: (componentId: string, draggable: boolean) => void;
export const updateNodeAdaptable: (componentId: string, adaptable: boolean) => void;
export const updateNodeContentTransition: (componentId: string, transitionType: ContentTransitionType) => void;
export const setJpegOptimizeDecoding:(enable:boolean) => void;
export const getJpegOptimizeDecoding:() => boolean;

export const connectContentSlot: (componentId:string, customId:string, content: Object, imageKnifeOption:ImageKnifeOption,
  animatorOption: AnimatorOption | undefined, context:common.UIAbilityContext | undefined, componentAttr:ComponentAttribute) =>void;
export const preCreateNativeNode: (componentId:string, imageKnifeOption: ImageKnifeOption) => void;
export const setMaxPreCreateNodeCount: (maxCount:number) => void;
export const releasePreCreatedNode: () => void;