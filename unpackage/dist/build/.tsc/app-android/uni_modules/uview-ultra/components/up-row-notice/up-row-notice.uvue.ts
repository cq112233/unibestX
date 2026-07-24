import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { ref, computed, watch, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
	import type { PropType } from 'vue'
	import defProps from './rowNotice.uts'
	import { addUnit, error, sleep, getPx, upGetRect } from '../../libs/function/index'
	import { string as testString } from '../../libs/function/test'
	
	
const __sfc__ = defineComponent({
  __name: 'up-row-notice',
  props: {
		text: {
			type: String,
			default: defProps.getString('rowNotice.text')
		},
		icon: {
			type: String,
			default: defProps.getString('rowNotice.icon')
		},
		mode: {
			type: String,
			default: defProps.getString('rowNotice.mode')
		},
		color: {
			type: String,
			default: defProps.getString('rowNotice.color')
		},
		bgColor: {
			type: String,
			default: defProps.getString('rowNotice.bgColor')
		},
		fontSize: {
			type: [String, Number],
			default: defProps.getNumber('rowNotice.fontSize')
		},
		speed: {
			type: [String, Number],
			default: defProps.getNumber('rowNotice.speed')
		}
	},
  emits: ['click', 'close'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const props = __props
	
	const instance = getCurrentInstance()?.proxy!
	const transform = ref('')
	const animationFrameId = ref(0)       // requestAnimationFrame 的 ID
	const startTime = ref(0)              // 动画开始时间
	const currentPosition = ref(0)        // 当前滚动位置
	const scrollWidth = ref(0)            // 文本宽度
	const containerWidth = ref(0)         // 容器宽度
	const isAnimating = ref(false)        // 是否正在动画中
	const show = ref(true)
	const webviewHide = ref(false)        // 页面是否隐藏
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	// 文字内容的样式
	const textStyle = computed(() => {
		let style = {}
		style['whiteSpace'] = 'nowrap !important'
		style['color'] = props.color
		style['fontSize'] = addUnit(props.fontSize)
		return style
	})
	
	// 动画样式
	const animationStyle = computed(() => {
		let style = {}
		style['transform'] = transform.value
		// 使用 requestAnimationFrame 进行动画，不需要 transition 或 animation 相关样式
		return style
	})
	
	// 内部对用户传入的数据进一步分割，放到多个text标签循环，否则如果用户传入的字符串很长（100个字符以上）
	// 放在一个text标签中进行滚动，在低端安卓机上，动画可能会出现抖动现象，需要分割到多个text中可解决此问题
	const innerText = computed(() => {
		let result: string[] = [],
			// 每组text标签的字符长度
			len = 20
		// @ts-ignore
		const textArr = props.text.split('')
		for (let i = 0; i < textArr.length; i += len) {
			// 对拆分的后的text进行slice分割，得到的为数组再进行join拼接为字符串
			result.push(textArr.slice(i, i + len).join(''))
		}
		return result
	})
	
	// 点击通告栏
	const clickHandler = (index: number) => {
		emit('click')
	}
	
	// 点击右侧按钮，需要判断点击的是关闭图标还是箭头图标
	const close = () => {
		emit('close')
	}

	// 动画循环函数(不能定义为函数表达式和箭头函数，否则无法递归调用)
	function animate(timestamp: number) {
		if (!isAnimating.value) return;
		
		if (startTime.value == 0) startTime.value = timestamp;
		
		// 计算经过的时间
		const elapsed = timestamp - startTime.value;
		
		// 根据速度计算移动距离（speed 是每秒移动的像素数）
		const speedNum = parseInt(getPx(props.speed))
		const distance = (speedNum * elapsed) / 1000;
		
		// 更新当前位置
		currentPosition.value = containerWidth.value - distance;
		
		// 当文本完全滚出左侧时，重置到右侧
		if (currentPosition.value <= -scrollWidth.value) {
			startTime.value = timestamp;  // 重置起始时间
			currentPosition.value = containerWidth.value;
		}
		
		// 应用变换
		transform.value = `translateX(${currentPosition.value}px)`;
		
		// 继续下一帧动画
		animationFrameId.value = setTimeout(() => animate(Date.now()), 16);
	}
	
	// 初始化并开始滚动
	const startScroll = async () => {
		// 如果已在动画中，先停止
		if (animationFrameId.value > 0) {
			clearTimeout(animationFrameId.value);
			animationFrameId.value = 0;
		}
		
		// 获取容器和文字的宽度
		// @ts-ignore
		await sleep(10); // 短暂延迟确保DOM渲染完成
		// @ts-ignore
		const textRect = await upGetRect('.up-notice__content__text', false, instance) as NodeInfo;
		// @ts-ignore
		const containerRect = await upGetRect('.up-notice__content', false, instance) as NodeInfo;
		
		scrollWidth.value = textRect.width ?? 0;
		containerWidth.value = containerRect.width ?? 0;
		
		// 设置初始位置在容器右侧外
		currentPosition.value = containerWidth.value;
		startTime.value = 0;
		isAnimating.value = true;
		
		// 开始动画循环
		animate(0);
	}
	
	// 停止滚动动画
	const stopScroll = () => {
		isAnimating.value = false;
		if (animationFrameId.value > 0) {
			clearTimeout(animationFrameId.value);
			animationFrameId.value = 0;
		}
	}
	
	watch(():string => props.text, (newValue: string) => {
		startScroll();
		
		if(!testString(newValue)) {
			error('noticebar组件direction为row时，要求text参数为字符串形式')
		}
	}, {immediate: true})
	
	watch((): string|number => props.fontSize, () => {
		startScroll();
	})
	
	watch((): string|number => props.speed, () => {
		startScroll();
	})
	
	onMounted(() => {
















		startScroll();

		if(!testString(props.text)) {
			error('noticebar组件direction为row时，要求text参数为字符串形式')
		}
	})
	
	onBeforeUnmount(() => {
		stopScroll(); // 组件销毁前清理动画
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: "up-notice",
    onClick: clickHandler
  }), [
    renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
      isTrue(_ctx.icon)
        ? _cE("view", _uM({
            key: 0,
            class: "up-notice__left-icon"
          }), [
            _cV(_component_up_icon, _uM({
              name: _ctx.icon,
              color: _ctx.color,
              size: "19"
            }), null, 8 /* PROPS */, ["name", "color"])
          ])
        : _cC("v-if", true)
    ]),
    _cE("view", _uM({
      class: "up-notice__content",
      ref: "up-notice__content"
    }), [
      _cE("view", _uM({
        ref: "up-notice__content__text",
        class: "up-notice__content__text",
        style: _nS([animationStyle.value])
      }), [
        _cE(Fragment, null, RenderHelpers.renderList(innerText.value, (item, index, __index, _cached): any => {
          return _cE("text", _uM({
            key: index,
            style: _nS([textStyle.value])
          }), _tD(item), 5 /* TEXT, STYLE */)
        }), 128 /* KEYED_FRAGMENT */)
      ], 4 /* STYLE */)
    ], 512 /* NEED_PATCH */),
    isTrue(['link', 'closable'].includes(_ctx.mode))
      ? _cE("view", _uM({
          key: 0,
          class: "up-notice__right-icon"
        }), [
          _ctx.mode === 'link'
            ? _cV(_component_up_icon, _uM({
                key: 0,
                name: "arrow-right",
                size: 17,
                color: _ctx.color
              }), null, 8 /* PROPS */, ["color"])
            : _cC("v-if", true),
          _ctx.mode === 'closable'
            ? _cV(_component_up_icon, _uM({
                key: 1,
                onClick: close,
                name: "close",
                size: 16,
                color: _ctx.color
              }), null, 8 /* PROPS */, ["color"])
            : _cC("v-if", true)
        ])
      : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
export type UpRowNoticeComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNoticeStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-notice", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "space-between"]]))], ["up-notice__left-icon", _pS(_uM([["alignItems", "center"], ["marginRight", 5]]))], ["up-notice__right-icon", _pS(_uM([["marginLeft", 5], ["alignItems", "center"]]))], ["up-notice__content", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "row"], ["flexWrap", "nowrap"], ["overflow", "hidden"]]))], ["up-notice__content__text", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))]])]
