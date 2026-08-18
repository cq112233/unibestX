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


#ifndef IMAGE_KNIFE_C_KEKE_ANIMATOR_OPTION_H
#define IMAGE_KNIFE_C_KEKE_ANIMATOR_OPTION_H

#include <arkui/native_type.h>
#include <functional>

namespace ImageKnifePro {
/**
 * @brief 用于控制动图播放状态，设置动图事件监听回调
 */
struct AnimatorOption {
    /**
     * @brief 动图组件的状态，默认为播放
     */
    ArkUI_AnimationStatus state = ARKUI_ANIMATION_STATUS_RUNNING;
    /**
     * @brief 动图播放的次数，默认为-1无限播放
     */
    int iterations = -1;
    /**
     * @brief 控制动图播放是否逆序，默认正序播放
     */
    bool reverse = false;
    /**
     * @brief 动图开始播放的事件回调
     */
    std::function<void()> onStart = nullptr;
    /**
     * @brief 动图结束播放的事件回调
     */
    std::function<void()> onFinish = nullptr;
    /**
     * @brief 动图暂停播放的事件回调
     */
    std::function<void()> onPause = nullptr;
    /**
     * @brief 动图取消播放的事件回调，在状态回到initial时触发
     */
    std::function<void()> onCancel = nullptr;
    /**
     * @brief 动图开始重复播放的事件回调
     */
    std::function<void()> onRepeat = nullptr;
};

}
#endif // IMAGE_KNIFE_C_KEKE_ANIMATOR_OPTION_H
