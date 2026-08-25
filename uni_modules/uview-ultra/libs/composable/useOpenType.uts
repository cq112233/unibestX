/**
 * 小程序开放能力相关事件处理的组合式函数
 * 提供处理各种开放能力事件的方法
 */
import { getCurrentInstance } from 'vue'

export const useOpenType = (emit: Function) => {
	const instance = getCurrentInstance()
	const onOpenType = (name: string, event: UniCustomEvent<UTSJSONObject>) => {
	    emit(name, event.detail);
	};
    /**
     * 获取用户信息事件处理
     */
    const onGetUserInfo = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('getuserinfo', event.detail);
    };

    /**
     * 联系人事件处理
     */
    const onContact = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('contact', event.detail);
    };

    /**
     * 获取手机号事件处理
     */
    const onGetPhoneNumber = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('getphonenumber', event.detail);
    };

    /**
     * 错误事件处理
     */
    const onError = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('error', event.detail);
    };

    /**
     * 启动APP事件处理
     */
    const onLaunchApp = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('launchapp', event.detail);
    };

    /**
     * 打开设置事件处理
     */
    const onOpenSetting = (event: UniCustomEvent<UTSJSONObject>) => {
        instance!!.emit('opensetting', event.detail);
    };

    return {
		onOpenType,
        onGetUserInfo,
        onContact,
        onGetPhoneNumber,
        onError,
        onLaunchApp,
        onOpenSetting
    };
};