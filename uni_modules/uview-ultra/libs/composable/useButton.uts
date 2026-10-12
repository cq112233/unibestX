/**
 * 按钮相关属性的组合式函数
 * 提供按钮组件的属性定义
 */

export const buttonProps = {
    lang: String,
    sessionFrom: {
        type: String,
        default: 'test'
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String
}

export type buttonPropsType = {
	lang: string,
	sessionFrom: string,
	sendMessageTitle: string,
	sendMessagePath: string,
	sendMessageImg: string,
	showMessageCard: boolean,
	appParameter: string,
	formType: string,
	openType: string
}

export const buttonPropsDefaults = {
    lang: '',
	sessionFrom: '',
	sendMessageTitle: '',
	sendMessagePath: '',
	sendMessageImg: '',
	showMessageCard: false,
	appParameter: '',
	formType: '',
	openType: '',
}

export const useButton = () => {
    const buttonPropsDefaults = {
        lang: '',
        sessionFrom: '',
        sendMessageTitle: '',
        sendMessagePath: '',
        sendMessageImg: '',
        showMessageCard: false,
        appParameter: '',
        formType: '',
        openType: '',
    }

    return {
        buttonPropsDefaults
    }
};