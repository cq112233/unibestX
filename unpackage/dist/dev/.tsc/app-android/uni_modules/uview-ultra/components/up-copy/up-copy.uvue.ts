
const __sfc__ = defineComponent({
  __name: 'up-copy',
name: 'up-copy',
  props: {
    content: {
        type: String,
        default: ''
    },
    alertStyle: {
        type: String,
        default: 'toast'
    },
    notice: {
        type: String,
        default: '复制成功'
    }
},
  emits: ['success'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const handleClick = (): void => {
    const rawContent = props.content
    if (rawContent == null || rawContent == '') {
        uni.showToast({
            title: '暂无',
            icon: 'none',
            duration: 2000,
        })
        return
    }
    const content = `${rawContent}`
    
    /**
    * 小程序端 和 app端的复制逻辑
    */
    uni.setClipboardData({
        data: content,
        success: function() {
            const alertStyle = props.alertStyle == null ? 'toast' : props.alertStyle
            const notice = props.notice == null ? '复制成功' : props.notice
            if (alertStyle == 'modal') {
                uni.showModal({
                    title: '提示',
                    content: notice
                });
            } else {
                uni.showToast({
                    title: notice,
                    icon: 'none'
                });
            }
            emit('success')
        },
        fail: function() {
            uni.showToast({
                title: '复制失败',
                icon: 'none',
                duration: 3000,
            });
        }
    });
}

return (): any | null => {

  return _cE("view", _uM({
    class: "up-copy",
    onClick: handleClick
  }), [
    renderSlot(_ctx.$slots, "default", {}, (): any[] => ["复制"])
  ])
}
}

})
export default __sfc__
export type UpCopyComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCopyUpCopyStyles = []
