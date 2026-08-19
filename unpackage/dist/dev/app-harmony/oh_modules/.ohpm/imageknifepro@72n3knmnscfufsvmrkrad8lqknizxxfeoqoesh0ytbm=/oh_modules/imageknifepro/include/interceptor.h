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

#ifndef IMAGE_KNIFE_C_INTERCEPTOROH_H
#define IMAGE_KNIFE_C_INTERCEPTOROH_H

#include "imageknife_task.h"

namespace ImageKnifePro {
/**
 * @brief 拦截器公共基类，ImageKnife 通过拦截器-责任链模式允许用户自定义加载，解码，缓存等过程
 * 自定义拦截器需要继承对应子类，并实现Resolve函数，然后通过ImageKnifeLoader添加至对应的责任链中
 */
class Interceptor {
public:
    /**
     * @brief 用于标识拦截器的身份，自定义拦截器建议命名，在日志信息中会体现该信息
     */
    std::string name;
    /**
     * @brief 处理拦截器业务，自定义拦截器需要实现该纯虚函数
     * @param task 图片加载任务对象，用于获取加载请求相关信息以及产出的数据流转
     * @return 返回true表示执行成功，当前责任链将终止。返回false表示
     */
    virtual bool Resolve(std::shared_ptr<ImageKnifeTask> task) = 0;
    /**
     * @brief 任务取消接口，通知当前的拦截器停止执行任务。可选择实现该虚函数来提供取消能力
     * 不实现则加载请求取消时，会等待当前的拦截器继续执行结束后，再结束责任链以及加载请求
     * @param task 图片加载任务对象，用于获取加载请求相关信息
     */
    virtual void Cancel(std::shared_ptr<ImageKnifeTask> task);

    virtual bool Process(std::shared_ptr<ImageKnifeTask> task,
                 std::function<bool(std::shared_ptr<ImageKnifeTask>)> resolveCallback = nullptr);

    virtual ~Interceptor() = default;
protected:
    std::shared_ptr<Interceptor> next_ = nullptr;
};

/**
 * @brief 内存缓存拦截器，继承该基类来实现自定义的内存缓存过程
 * 内存缓存的任务类型由ImageKnifeTask.product.cacheType指定
 */
class MemoryCacheInterceptor : public Interceptor {
public:
    bool Process(std::shared_ptr<ImageKnifeTask> task,
                 std::function<bool(std::shared_ptr<ImageKnifeTask>)> resolveCallback = nullptr) final;
    void SetNext(std::shared_ptr<MemoryCacheInterceptor> interceptor);
};

/**
 * @brief 文件缓存拦截器，继承该基类来实现自定义的文件缓存过程
 * 文件缓存的任务类型由ImageKnifeTask.product.cacheType指定
 */
class FileCacheInterceptor : public Interceptor {
public:
    bool Process(std::shared_ptr<ImageKnifeTask> task,
                 std::function<bool(std::shared_ptr<ImageKnifeTask>)> resolveCallback = nullptr) final;
    void SetNext(std::shared_ptr<FileCacheInterceptor> interceptor);
};

/**
 * @brief 加载拦截器，继承该基类来实现自定义的加载过程，包括网络下载，本地Resource资源读取等
 */
class LoadInterceptor : public Interceptor {
public:
    /**
     * @brief 将网络下载任务进行分离
     * 如果自定义的网络下载过程是异步的，则不必异步转同步阻塞当前线程等待下载结果
     * 可以使用该接口在发起网络下载请求后进行分离，以提高加载的并发数量和下载性能
     * 分离后的task在网络下载成功/失败后，务必使用OnComplete回调来回归，来进行后续的解码等步骤，或是交由下一个拦截器处理
     * @param task 图片加载任务对象
     */
    void Detach(std::shared_ptr<ImageKnifeTask> task);
    /**
     * @brief 分离的下载任务完成回调
     * 使用Detach接口后，需保证在下载结束后调用该接口，否则后续的解码等流程不会进行
     * @param task 图片加载任务对象
     * @param result 下载的结果，成功或失败
     */
    void OnComplete(std::shared_ptr<ImageKnifeTask> task, bool result);
    bool Process(std::shared_ptr<ImageKnifeTask> task,
                 std::function<bool(std::shared_ptr<ImageKnifeTask>)> resolveCallback = nullptr) final;
    void SetNext(std::shared_ptr<LoadInterceptor> interceptor);
protected:
    /**
     * @brief 标志是否从远端加载，即是否用于网络下载
     */
    bool isLoadFromRemote = true;
};

/**
 * @brief 解码拦截器，继承该基类来实现自定义的解码过程
 */
class DecodeInterceptor : public Interceptor {
public:
    bool Process(std::shared_ptr<ImageKnifeTask> task,
                 std::function<bool(std::shared_ptr<ImageKnifeTask>)> resolveCallback = nullptr) final;
    void SetNext(std::shared_ptr<DecodeInterceptor> interceptor);
};
};
#endif // IMAGE_KNIFE_C_INTERCEPTOROH_H
