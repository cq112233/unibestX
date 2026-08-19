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

#ifndef IMAGE_KNIFE_C_IMAGEKNIFE_NODE_H
#define IMAGE_KNIFE_C_IMAGEKNIFE_NODE_H

#include "animator_option.h"
#include "imageknife_option.h"

namespace ImageKnifePro {
/**
 * @brief ImageKnife图片组件节点
 * 提供组件创建，销毁， 更新以及动图控制的能力
 * 相关接口需在主线程调用
 */
class ImageKnifeNode {
public:
    /**
     * @brief 创建ImageKnifeComponent图片节点
     * 同时支持静态图片和动图
     * 需自己进行组件上下树
     * 只能在主线程中调用，销毁组件时需调用ImageKnifeNode::DisposeNode()
     * @param option 图片加载选项，包含了图片来源等相关参数
     * @return 返回ImageKnifeNode组件节点智能指针
     */
    static std::shared_ptr<ImageKnifeNode> CreateImageKnifeNode(std::shared_ptr<ImageKnifeOption> option);

    /**
     * @brief 创建ImageKnifeComponent图片节点，并交由ImageKnife管理，关联ArkTs层占位组件
     * 同时支持静态图片和动图
     * 可通过ImageKnifeNode::GetImageKnifeNode再次获取该对象指针
     * 只能在主线程中调用，销毁组件时需调用ImageKnifeNode::DisposeNode()
     * @param componentId 组件的唯一标识id，不能与其他组件重复
     * 可以由ArkTs层getUniqueId获取传入。如果在native侧自己生成，不要使用纯数字或以“C_"做前缀加数字作为id
     * @param contentSlot 关联的ArkTs层占位组件
     * @param option 图片加载选项，包含了图片来源等相关参数
     * @param animeOption 动图控制选项，可以不设置。未设置时，展示动图时默认无限循环播放
     * @return
     */
    static std::shared_ptr<ImageKnifeNode> CreateImageKnifeNode(std::string componentId,
                                                                ArkUI_NodeContentHandle contentSlot,
                                                                std::shared_ptr<ImageKnifeOption> option,
                                                                std::shared_ptr<AnimatorOption> animeOption = nullptr);
    /**
     * @brief 创建ImageKnifeNodeAnimator动图节点来显示动态图片(不推荐使用)
     * 显示静态图片时，会将其解释为一帧的动图
     * 只能在主线程中调用，销毁组件时需调用ImageKnifeNode::DisposeNode()
     * 不支持逐帧解码模式
     * 不支持HDR图片
     * 不建议更新加载图片资源
     * 无法使用border设置圆角边框
     * 无法使用ImageFit设置填充效果
     * 无法使用Oncomplete送显完成回调
     * 无法使用Draggable拖拽能力
     * 无法使用ColorFilter设置颜色过滤
     * @param option 图片加载选项，包含了图片来源等相关参数
     * @param animatorOption 动图控制选项
     * @return 返回ImageKnifeNode组件节点智能指针
     */
    static std::shared_ptr<ImageKnifeNode> CreateImageKnifeNodeAnimator(std::shared_ptr<ImageKnifeOption> option,
                                                                        std::shared_ptr<AnimatorOption> animatorOption);

    /**
     * @brief 创建ImageKnifeView图片节点，并交由ImageKnife管理，关联ArkTs层占位组件
     * 同时支持静态图片和动图, ImageKnife自渲染组件
     * 可通过ImageKnifeNode::GetImageKnifeNode再次获取该对象指针
     * 只能在主线程中调用，销毁组件时需调用ImageKnifeNode::DisposeNode()
     * 当前支持的图片填充效果ImageFit为：Contain, Cover, Fill, None, ScaleDown, Auto
     * ImageKnifeView暂不支持组件的隐式动画
     * 暂不支持ResizeableOption
     * 暂不支持HDR图片
     * @param componentId 组件的唯一标识id，不能与其他组件重复
     * 可以由ArkTs层getUniqueId获取传入。如果在native侧自己生成，不要使用纯数字或以“C_"做前缀加数字作为id
     * @param contentSlot 关联的ArkTs层占位组件
     * @param option 图片加载选项，包含了图片来源等相关参数
     * @param animeOption 动图控制选项，可以不设置。未设置时，展示动图时默认无限循环播放
     * @return 返回ImageKnifeNode组件节点智能指针
     */
    static std::shared_ptr<ImageKnifeNode> CreateImageKnifeView(std::string componentId,
                                                                ArkUI_NodeContentHandle contentSlot,
                                                                std::shared_ptr<ImageKnifeOption> option,
                                                                std::shared_ptr<AnimatorOption> animeOption = nullptr);

    /**
     * @brief 通过id获取ImageKnife管理的组件对象
     * 自己上树管理的组件无法通过该接口获取
     * @param componentId
     * @return 返回ImageKnifeNode组件节点智能指针
     */
    static std::shared_ptr<ImageKnifeNode> GetImageKnifeNode(std::string componentId);

    /**
     * @brief 清除组件显示的图片内容，以及持有的资源
     */
    virtual void Clear() = 0;
    /**
     * @brief 根据状态设置，开始组件测算和图片加载
     * 重复调用时，在请求未变化的情况下会忽略
     */
    virtual void Execute() = 0;
    /**
     * @brief 设置组件测算宽高是否适配图片宽高比例
     * 应用于超长图片浏览，定宽不定高，或定高不定宽等方式的布局
     * 开启时会导致依赖测算宽高的降采样失效，组件宽高去适配图片的比例，可以理解为图片将组件撑开
     * 未调用时默认组件测算宽高不适配图片宽高比例，即图片根据设置的组件宽高和填充效果进行缩放填充
     * @param adaptable 为true则组件测算宽高根据图片宽高比例计算，false则组件测算不适配图片宽高
     */
    virtual void Adaptable(bool adaptable) = 0;
    /**
     * @brief 设置组件的同步加载状态，未调用时默认不使用同步加载
     * @param syncLoad 为true则使用同步加载，为false则使用异步加载
     */
    virtual void SyncLoad(bool syncLoad) = 0;
    /**
     * @brief 设置图片是否可以拖拽，未调用时默认不可拖拽
     * 动图组件设置该属性无效
     * @param draggable 为true图片可以拖拽，为false则不可拖拽
     */
    virtual void Draggable(bool draggable) = 0;
    /**
     * @brief 设置组件显示的图片更新时的过渡效果
     * 设备API低于21时不生效
     * 目前仅对ImageKnifeComponent生效
     * @param effectType 内容过渡效果
     */
    virtual void ContentTransition(ContentTransitionType effectType) = 0;
    /**
     * @brief 设置组件的宽度
     * @param width 组件的宽度，单位vp
     */
    virtual void SetWidth(float width) = 0;
    /**
     * @brief 设置组件的高度
     * @param height 组件的高度，单位vp
     */
    virtual void SetHeight(float height) = 0;
    /**
     * @brief 设置组件的百分比宽度
     * @param width 组件的百分比宽度
     */
    virtual void SetPercentWidth(float width) = 0;
    /**
     * @brief 设置组件的百分比高度
     * @param height 组件的百分比高度
     */
    virtual void SetPercentHeight(float height) = 0;
    /**
     * @brief 使用新的图片加载参数更新组件显示的图片
     * 会更新内部的ImageKnifeRequest对象，发起新的图片加载请求
     * @param option 图片加载参数对象
     * C API使用时不同组件的可以复用同一个option以加载相同图片，但更新时需传入新构造的option不要修改旧option的属性值
     * ArkTs组件无此限制，Option是从ArkTs传入解析构造的
     */
    virtual void Update(std::shared_ptr<ImageKnifeOption> option) = 0;
    /**
     * @brief 更新动图的播放状态
     * @param animatorOption 动图播放状态对象
     */
    virtual void UpdateAnimatorOption(std::shared_ptr<AnimatorOption> animatorOption) = 0;
    /**
     * @brief 组件下树不使用后需调用此接口
     * 清理ImageKnifeNode资源
     * @param disposeHandle 设置为true表示自动释放内部的arkui handle，默认为true
     * 设置为false表示仅做ImageKnifeNode资源清理，通过GetHandle()获取的原始ArkUI组件需要稍后手动释放
     */
    virtual void DisposeNode(bool disposeHandle = true) = 0;
    /**
     * @brief 获取组件当前的加载请求对象
     * @return 返回加载请求对象智能指针
     */
    virtual std::shared_ptr<ImageKnifeRequest> GetImageKnifeRequest() const = 0;
    /**
     * @brief 获取原始ArkUI节点的handle
     * @return 返回原始ArkUI_NodeHandle
     */
    virtual ArkUI_NodeHandle GetHandle() const = 0;
    virtual ~ImageKnifeNode() = default;
};

} // namespace ImageKnifePro

#endif // IMAGE_KNIFE_C_IMAGEKNIFE_NODE_H
