export type UPActionSheetItem = {
  name?: string,
  title?: string,
  subname?: string,
  loading?: boolean,
  disabled?: boolean,
  color?: string,
  fontSize?: string,
  openType?: string,
  iconUrl?: string,
}

export type UPActionSheetProps = {
    /**
     * 操作菜单是否展示 （默认false）
     */
    show?: boolean
    /**
     * 标题
     */
    title?: string
    /**
     * 选项上方的描述信息
     */
    description?: string
    /**
     * 数据
     */
    actions?: Array<UPActionSheetItem>
    /**
     * 取消按钮的文字，不为空时显示按钮
     */
    cancelText?: string
    /**
     * 点击某个菜单项时是否关闭弹窗
     */
    closeOnClickAction?: boolean
    /**
     * 处理底部安全区（默认true）
     */
    safeAreaInsetBottom?: boolean
    /**
     * 小程序的打开方式
     */
    openType?: string
    /**
     * 点击遮罩是否允许关闭 (默认true)
     */
    closeOnClickOverlay?: boolean
    /**
     * 圆角值
     */
    round?: number | string
    /**
     * 语言
     */
    lang?: string
    /**
     * 会话来源
     */
    sessionFrom?: string
    /**
     * 发送的消息标题
     */
    sendMessageTitle?: string
    /**
     * 发送的消息路径
     */
    sendMessagePath?: string
    /**
     * 发送的消息图片
     */
    sendMessageImg?: string
    /**
     * 显示会话内消息卡片
     */
    showMessageCard?: boolean
    /**
     * 打开 APP 时，向 APP 传递的参数
     */
    appParameter?: string
    /**
     * 选项区域最大高度
     */
    wrapMaxHeight?: string
}
