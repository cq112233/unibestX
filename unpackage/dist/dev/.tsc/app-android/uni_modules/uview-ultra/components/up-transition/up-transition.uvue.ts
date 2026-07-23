
import { nextTick } from 'vue'
import { propsTransition } from './props';
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { addStyle } from '../../libs/function/index';
import { sleep } from '../../libs/function/index';
/**
 * transition  动画组件
 * @description
 * @tutorial
 * @property {String}			show			是否展示组件 （默认 false ）
 * @property {String}			mode			使用的动画模式 （默认 'fade' ）
 * @property {String | Number}	duration		动画的执行时间，单位ms （默认 '300' ）
 * @property {String}			timingFunction	使用的动画过渡函数 （默认 'ease-out' ）
 * @property {Object}			customStyle		自定义样式
 * @event {Function} before-enter	进入前触发
 * @event {Function} enter			进入中触发
 * @event {Function} after-enter	进入后触发
 * @event {Function} before-leave	离开前触发
 * @event {Function} leave			离开中触发
 * @event {Function} after-leave	离开后触发
 * @example
 */
// 定义一个一定时间后自动成功的promise，让调用nextTick方法处，进入下一个then方法
const waitTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 50))

// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
const getClassNames = function (name: string): UTSJSONObject {
	return {
		'enter': `up-${name}-enter up-${name}-enter-active`,
		'enter-to': `up-${name}-enter-to up-${name}-enter-active`,
		'leave': `up-${name}-leave up-${name}-leave-active`,
		'leave-to': `up-${name}-leave-to up-${name}-leave-active`
	}
}
const __sfc__ = defineComponent({
	name: 'up-transition',
	data() {
		return {
			inited: false, // 是否显示/隐藏组件
			viewStyle: {}, // 组件内部的样式
			status: '', // 记录组件动画的状态
			transitionEnded: false, // 组件是否结束的标记
			display: false, // 组件是否展示
			classes: '', // 应用的类名
		}
	},
	emits: ['click', 'beforeEnter', 'enter', 'afterEnter', 'beforeLeave', 'leave', 'afterLeave'],
	computed: {
	    mergeStyle(): UTSJSONObject {
	        const { viewStyle, customStyle } = this
			const modeVal = (this.$props['mode'] ?? 'fade').toString()
			const durationVal = this.$props['duration']
			const duration = durationVal != null ? durationVal.toString() : '0'
			
			// 显式指定 transitionProperty 以确保在 App 原生平台可靠触发过渡
			let transitionProp = 'all'
			if (modeVal === 'fade') {
				transitionProp = 'opacity'
			} else if (modeVal.startsWith('slide')) {
				transitionProp = 'transform'
			} else if (modeVal.startsWith('fade-zoom') || modeVal === 'zoom' || modeVal.startsWith('fade-up') || modeVal.startsWith('fade-down') || modeVal.startsWith('fade-left') || modeVal.startsWith('fade-right')) {
				transitionProp = 'transform, opacity'
			}
			
	        return {
				transitionProperty: transitionProp,
	            transitionDuration: `${duration}ms`,
	            // display: `${this.display ? '' : 'none'}`,
				transitionTimingFunction: this.timingFunction as string,
				// 避免自定义样式影响到动画属性，所以写在viewStyle前面
	            ...addStyle(customStyle) as UTSJSONObject,
	            ...viewStyle
	        }
	    }
	},
	// 将mixin挂在到组件中，实际上为一个vue格式对象。
	mixins: [mpMixin, mixin, propsTransition],
	watch: {
		show: {
			handler(newVal: Boolean): void {
				if (newVal) {
					this.vueEnter()
				} else {
					this.vueLeave()
				}
			},
			// 表示同时监听初始化时的props的show的意思
			immediate: true
		}
	},
	methods: {
	    // 组件被点击发出事件
	    clickHandler() {
	        this.$emit('click')
	    },
	    // vue版本的组件进场处理
	    async vueEnter() {
	        // 动画进入时的类名
	        const classNames = getClassNames(this.mode)
	        // 定义状态和发出动画进入前事件
	        this.status = 'enter'
	        this.$emit('beforeEnter')
	        this.inited = true
	        this.display = true
	        this.classes = classNames['enter']!!.toString()
			// 设置初始进场状态的行内样式
			this.viewStyle = getModeStyle(this.mode, 'enter')
			await nextTick()
			await sleep(20)
			// 标识动画尚未结束
			this.$emit('enter')
			this.transitionEnded = false
			// 组件动画进入后触发的事件
			this.$emit('afterEnter')
			// 赋予组件enter-to类名
			this.classes = classNames['enter-to']!!.toString()
			// 过渡到最终进场状态的行内样式
			this.viewStyle = getModeStyle(this.mode, 'enter-to')
	    },
	    // 动画离场处理
	    async vueLeave() {
	        // 如果不是展示状态，无需执行逻辑
	        if (!this.display) return
	        const classNames = getClassNames(this.mode)
	        // 标记离开状态和发出事件
	        this.status = 'leave'
	        this.$emit('beforeLeave')
	        // 获得类名
	        this.classes = classNames['leave']!!.toString()
			// 设置初始离场状态的行内样式
			this.viewStyle = getModeStyle(this.mode, 'leave')

	        await nextTick()
			// 动画正在离场的状态
			this.transitionEnded = false
			this.$emit('leave')
			 // 组件执行动画，到了执行的执行时间后，执行一些额外处理
			 setTimeout(this.onTransitionEnd, parseInt(this.duration != null ? this.$props['duration'].toString() : '0'))
			 this.classes = classNames['leave-to']!!.toString()
			 // 过渡到最终离场状态的行内样式
			 this.viewStyle = getModeStyle(this.mode, 'leave-to')
	    },
	    // 完成过渡后触发
	    onTransitionEnd() {
	        // 如果已经是结束的状态，无需再处理
	        if (this.transitionEnded) return
	        this.transitionEnded = true
	        // 发出组件动画执行后的事件
	        this.$emit(this.status === 'leave' ? 'afterLeave' : 'afterEnter')
	        if (!this.show && this.display) {
	            this.display = false
	            this.inited = false
	        }
	    }
	}
})

// 定义不同模式和状态下的行内样式，用于在原生App端更可靠地触发过渡动画
const getModeStyle = function (mode: string, state: string): UTSJSONObject {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-transition/up-transition.uvue", 175, 8), } as UTSJSONObject
	if (state === 'enter' || state === 'leave-to') {
		if (mode === 'fade') {
			style['opacity'] = 0
		} else if (mode === 'zoom') {
			style['transform'] = 'scale(0.95)'
		} else if (mode === 'fade-zoom') {
			style['transform'] = 'scale(0.95)'
			style['opacity'] = 0
		} else if (mode === 'fade-up') {
			style['transform'] = 'translateY(100%)'
			style['opacity'] = 0
		} else if (mode === 'fade-down') {
			style['transform'] = 'translateY(-100%)'
			style['opacity'] = 0
		} else if (mode === 'fade-left') {
			style['transform'] = 'translateX(-100%)'
			style['opacity'] = 0
		} else if (mode === 'fade-right') {
			style['transform'] = 'translateX(100%)'
			style['opacity'] = 0
		} else if (mode === 'slide-up') {
			style['transform'] = 'translateY(100%)'
		} else if (mode === 'slide-down') {
			style['transform'] = 'translateY(-100%)'
		} else if (mode === 'slide-left') {
			style['transform'] = 'translateX(-100%)'
		} else if (mode === 'slide-right') {
			style['transform'] = 'translateX(100%)'
		}
	} else if (state === 'enter-to' || state === 'leave') {
		if (mode === 'fade') {
			style['opacity'] = 1
		} else if (mode === 'zoom') {
			style['transform'] = 'scale(1)'
		} else if (mode === 'fade-zoom') {
			style['transform'] = 'scale(1)'
			style['opacity'] = 1
		} else if (mode === 'fade-up' || mode === 'fade-down' || mode === 'fade-left' || mode === 'fade-right' ||
				   mode === 'slide-up' || mode === 'slide-down' || mode === 'slide-left' || mode === 'slide-right') {
			style['transform'] = 'translate(0, 0)'
			if (mode.startsWith('fade')) {
				style['opacity'] = 1
			}
		}
	}
	return style
}

export default __sfc__
function GenUniModulesUviewUltraComponentsUpTransitionUpTransitionRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return isTrue(_ctx.inited)
    ? _cE("view", _uM({
        key: 0,
        class: _nC(["up-transition", _ctx.classes]),
        ref: "up-transition",
        onClick: _ctx.clickHandler,
        style: _nS([_ctx.mergeStyle])
      }), [
        renderSlot(_ctx.$slots, "default")
      ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
    : _cC("v-if", true)
}
export type UpTransitionComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTransitionUpTransitionStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-fade-enter-active", _pS(_uM([["transitionProperty", "opacity"]]))], ["up-fade-leave-active", _pS(_uM([["transitionProperty", "opacity"]]))], ["up-fade-enter", _pS(_uM([["opacity", 0]]))], ["up-fade-leave-to", _pS(_uM([["opacity", 0]]))], ["up-fade-zoom-enter", _pS(_uM([["transform", "scale(0.95)"], ["opacity", 0]]))], ["up-fade-zoom-leave-to", _pS(_uM([["transform", "scale(0.95)"], ["opacity", 0]]))], ["up-fade-zoom-enter-active", _pS(_uM([["transitionProperty", "transform,opacity"]]))], ["up-fade-zoom-leave-active", _pS(_uM([["transitionProperty", "transform,opacity"]]))], ["up-fade-down-enter-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-down-leave-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-left-enter-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-left-leave-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-right-enter-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-right-leave-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-up-enter-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-up-leave-active", _pS(_uM([["transitionProperty", "opacity,transform"]]))], ["up-fade-up-enter", _pS(_uM([["transform", "translateY(100%)"], ["opacity", 0]]))], ["up-fade-up-leave-to", _pS(_uM([["transform", "translateY(100%)"], ["opacity", 0]]))], ["up-fade-down-enter", _pS(_uM([["transform", "translateY(-100%)"], ["opacity", 0]]))], ["up-fade-down-leave-to", _pS(_uM([["transform", "translateY(-100%)"], ["opacity", 0]]))], ["up-fade-left-enter", _pS(_uM([["transform", "translateX(-100%)"], ["opacity", 0]]))], ["up-fade-left-leave-to", _pS(_uM([["transform", "translateX(-100%)"], ["opacity", 0]]))], ["up-fade-right-enter", _pS(_uM([["transform", "translateX(100%)"], ["opacity", 0]]))], ["up-fade-right-leave-to", _pS(_uM([["transform", "translateX(100%)"], ["opacity", 0]]))], ["up-slide-down-enter-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-down-leave-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-left-enter-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-left-leave-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-right-enter-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-right-leave-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-up-enter-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-up-leave-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-slide-up-enter", _pS(_uM([["transform", "translateY(100%)"]]))], ["up-slide-up-leave-to", _pS(_uM([["transform", "translateY(100%)"]]))], ["up-slide-down-enter", _pS(_uM([["transform", "translateY(-100%)"]]))], ["up-slide-down-leave-to", _pS(_uM([["transform", "translateY(-100%)"]]))], ["up-slide-left-enter", _pS(_uM([["transform", "translateX(-100%)"]]))], ["up-slide-left-leave-to", _pS(_uM([["transform", "translateX(-100%)"]]))], ["up-slide-right-enter", _pS(_uM([["transform", "translateX(100%)"]]))], ["up-slide-right-leave-to", _pS(_uM([["transform", "translateX(100%)"]]))], ["up-zoom-enter-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-zoom-leave-active", _pS(_uM([["transitionProperty", "transform"]]))], ["up-zoom-enter", _pS(_uM([["transform", "scale(0.95)"]]))], ["up-zoom-leave-to", _pS(_uM([["transform", "scale(0.95)"]]))], ["@TRANSITION", _uM([["up-fade-enter-active", _uM([["property", "opacity"]])], ["up-fade-leave-active", _uM([["property", "opacity"]])], ["up-fade-zoom-enter-active", _uM([["property", "transform,opacity"]])], ["up-fade-zoom-leave-active", _uM([["property", "transform,opacity"]])], ["up-fade-down-enter-active", _uM([["property", "opacity,transform"]])], ["up-fade-down-leave-active", _uM([["property", "opacity,transform"]])], ["up-fade-left-enter-active", _uM([["property", "opacity,transform"]])], ["up-fade-left-leave-active", _uM([["property", "opacity,transform"]])], ["up-fade-right-enter-active", _uM([["property", "opacity,transform"]])], ["up-fade-right-leave-active", _uM([["property", "opacity,transform"]])], ["up-fade-up-enter-active", _uM([["property", "opacity,transform"]])], ["up-fade-up-leave-active", _uM([["property", "opacity,transform"]])], ["up-slide-down-enter-active", _uM([["property", "transform"]])], ["up-slide-down-leave-active", _uM([["property", "transform"]])], ["up-slide-left-enter-active", _uM([["property", "transform"]])], ["up-slide-left-leave-active", _uM([["property", "transform"]])], ["up-slide-right-enter-active", _uM([["property", "transform"]])], ["up-slide-right-leave-active", _uM([["property", "transform"]])], ["up-slide-up-enter-active", _uM([["property", "transform"]])], ["up-slide-up-leave-active", _uM([["property", "transform"]])], ["up-zoom-enter-active", _uM([["property", "transform"]])], ["up-zoom-leave-active", _uM([["property", "transform"]])]])]])]
