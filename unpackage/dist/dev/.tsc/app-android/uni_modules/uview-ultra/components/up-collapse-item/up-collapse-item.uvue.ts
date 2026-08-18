import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_cell from '@/uni_modules/uview-ultra/components/up-cell/up-cell.uvue'
import _easycom_up_line from '@/uni_modules/uview-ultra/components/up-line/up-line.uvue'
import { nextTick, ref, watch, computed, onMounted, getCurrentInstance } from 'vue'
	import { guid, sleep, upGetRect, error, addUnit } from '../../libs/function/index'
	import { array as testArray } from '../../libs/function/test'
	import { useUltraUI } from '../../libs/composable/useUltraUI'
	
	
const __sfc__ = defineComponent({
  __name: 'up-collapse-item',
name: "up-collapse-item",
  props: {
		title: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		isLink: {
			type: Boolean,
			default: true
		},
		clickable: {
			type: Boolean,
			default: true
		},
		border: {
			type: Boolean,
			default: true
		},
		align: {
			type: String,
			default: 'left'
		},
		name: {
			type: [String, Number],
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		duration: {
			type: [Number, String],
			default: 300
		},
		showRight: {
			type: Boolean,
			default: true
		}
	},
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { parent, parentData, getParentData } = useUltraUI()
	const instance = getCurrentInstance()!.proxy!
	
	
	
	const props = __props
	
	const timer = ref(0)
	const elId = ref(guid())
	const height = ref<number | string>(0)
	const expanded = ref(false)
	const showBorder = ref(false)
	const animating = ref(false)
	
	watch(expanded, (n: boolean) => {
		clearTimeout(timer.value)
		timer.value = 0
		timer.value = setTimeout(() => {
			showBorder.value = n
		}, n ? 10 : 290)
	})
	
	const titleCpu = computed((): string => {
		if (instance?.$slots['title'] == null) {
			return props.title.toString()
		} else {
			return ''
		}
	})

	const contentHeightStyle = computed((): UTSJSONObject => {
		return { height: addUnit(height.value) } as UTSJSONObject
	})
	
	async function setContentAnimate(expandedFrom: boolean) {
		expanded.value = expandedFrom
		const rect: NodeInfo = await upGetRect(`#${elId.value}`, false, instance)
		height.value = expanded.value ? (rect.height == null ? 'auto' : rect.height) : 0
		animating.value = true
		await sleep(parseInt(props.duration.toString()))
		animating.value = false
	}
	
	async function init() {
		getParentData('up-collapse', instance, false)
		if (parent.value == null) {
			return error('up-collapse-item必须要搭配up-collapse组件使用')
		}
		let value = parentData.value['value'] ?? ''
		const accordion = parentData.value['accordion']

		if (accordion != null && (accordion as boolean)) {
			if (testArray(value)) {
				return error('手风琴模式下，up-collapse组件的value参数不能为数组')
			}
			expanded.value = (props.name.toString() == value.toString())
		} else {
			if (!testArray(value) && value != '') {
				return error('非手风琴模式下，up-collapse组件的value参数必须为数组')
			}
			if (value == '') {
				value = [] as string[]
			}
			const valueArr = value as string[]
			const sameName = (element: string): boolean => element == props.name.toString()
			expanded.value = valueArr.some(sameName)
		}
		await nextTick()
		setContentAnimate(expanded.value)
	}
	
	const clickHandler = function() {
		if (props.disabled || animating.value) return
		if (parent.value != null ) {
			parent.value.$callMethod('onChange', instance)
		}
	}
	
	onMounted(() => {
		init()
	})
	
	const getInternalState = (): UTSJSONObject => {
		return {
			name: props.name,
			expanded: expanded.value
		} as UTSJSONObject
	}

	__expose({
		init,
		setContentAnimate,
		getInternalState
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_cell = resolveEasyComponent("up-cell",_easycom_up_cell)
const _component_up_line = resolveEasyComponent("up-line",_easycom_up_line)

  return _cE("view", _uM({ class: "up-collapse-item" }), [
    _cV(_component_up_cell, _uM({
      title: titleCpu.value,
      value: _ctx.value,
      label: _ctx.label,
      icon: _ctx.icon,
      isLink: _ctx.isLink,
      clickable: _ctx.clickable,
      border: _ctx.border && showBorder.value,
      onClick: clickHandler,
      customStyle: {
				padding: '10px 0'
			}
    }), _uM({
      title: withSlotCtx((): any[] => [
        renderSlot(_ctx.$slots, "title", {}, (): any[] => [
          isTrue(_ctx.$slots['title'] != null && _ctx.title != '')
            ? _cE("text", _uM({ key: 0 }), _tD(_ctx.title), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ]),
      icon: withSlotCtx((): any[] => [
        renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
          isTrue(_ctx.$slots['icon'] != null && _ctx.icon != '')
            ? _cE("text", _uM({ key: 0 }), _tD(_ctx.icon), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ]),
      value: withSlotCtx((): any[] => [
        renderSlot(_ctx.$slots, "value", {}, (): any[] => [
          isTrue(_ctx.$slots['value'] != null && _ctx.value != '')
            ? _cE("text", _uM({ key: 0 }), _tD(_ctx.value), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ]),
      "right-icon": withSlotCtx((): any[] => [
        isTrue(_ctx.showRight)
          ? _cE(Fragment, _uM({ key: 0 }), [
              _ctx.$slots['right-icon'] != null
                ? _cV(_component_up_icon, _uM({
                    key: 0,
                    size: 16,
                    name: "arrow-right"
                  }))
                : _cC("v-if", true),
              renderSlot(_ctx.$slots, "right-icon")
            ], 64 /* STABLE_FRAGMENT */)
          : _cC("v-if", true)
      ]),
      _: 3 /* FORWARDED */
    }), 8 /* PROPS */, ["title", "value", "label", "icon", "isLink", "clickable", "border"]),
    _cE("view", _uM({
      class: "up-collapse-item__content",
      style: _nS(contentHeightStyle.value)
    }), [
      _cE("view", _uM({
        class: "up-collapse-item__content__text content-class",
        id: elId.value,
        ref: elId.value
      }), [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, ["id"])
    ], 4 /* STYLE */),
    isTrue(unref(parentData)['border'] != null && (unref(parentData)['border'] as boolean))
      ? _cV(_component_up_line, _uM({ key: 0 }))
      : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
export type UpCollapseItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItemStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-collapse-item__content", _pS(_uM([["overflow", "hidden"], ["height", 0], ["transitionProperty", "height"], ["transitionDuration", "0.3s"], ["transitionTimingFunction", "ease-out"]]))], ["up-collapse-item__content__text", _pS(_uM([["paddingTop", 12], ["paddingRight", 15], ["paddingBottom", 12], ["paddingLeft", 15], ["color", "#606266"], ["fontSize", 14], ["lineHeight", "18px"]]))], ["@TRANSITION", _uM([["up-collapse-item__content", _uM([["property", "height"], ["duration", "0.3s"], ["timingFunction", "ease-out"]])]])]])]
