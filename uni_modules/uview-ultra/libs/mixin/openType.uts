import { defineMixin } from '../vue.uts'

export const openType = defineMixin({
    props: {
        openType: String
    },
    methods: {
        onGetUserInfo(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('getuserinfo', event.detail)
        },
        onContact(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('contact', event.detail)
        },
        onGetPhoneNumber(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('getphonenumber', event.detail)
        },
        onError(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('error', event.detail)
        },
        onLaunchApp(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('launchapp', event.detail)
        },
        onOpenSetting(event: UniCustomEvent<UTSJSONObject>) {
			// @ts-ignore
            this.$emit('opensetting', event.detail)
        }
    }
})

// 注意：此文件已被弃用，请使用 composable/useOpenType.uts 组合式函数
// 保留此文件仅用于向后兼容性提示
