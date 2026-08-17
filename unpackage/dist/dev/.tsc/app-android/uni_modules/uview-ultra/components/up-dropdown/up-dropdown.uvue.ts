import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, ref, watch, onMounted, getCurrentInstance, provide } from 'vue'
	import { addUnit, getWindowInfo, upGetRect, deepMerge } from '../../libs/function/index.uts';
	import { UPDropdownMenu } from './types.uts';
	
const __sfc__ = defineComponent({
  __name: 'up-dropdown',
name: 'up-dropdown',
  props: {
		// 菜单标题和选项的激活态颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 菜单标题和选项的未激活态颜色
		inactiveColor: {
			type: String,
			default: '#606266'
		},
		// 点击遮罩是否关闭菜单
		closeOnClickMask: {
			type: Boolean,
			default: true
		},
		// 点击当前激活项标题是否关闭菜单
		closeOnClickSelf: {
			type: Boolean,
			default: true
		},
		// 过渡时间
		duration: {
			type: [Number, String],
			default: 300
		},
		// 标题菜单的高度
		height: {
			type: [Number, String],
			default: 40
		},
		// 是否显示下边框
		borderBottom: {
			type: Boolean,
			default: false
		},
		// 标题的字体大小
		titleSize: {
			type: [Number, String],
			default: 14
		},
		// 下拉出来的内容部分的圆角值
		borderRadius: {
			type: [Number, String],
			default: 0
		},
		// 菜单右侧的icon图标
		menuIcon: {
			type: String,
			default: 'arrow-down'
		},
		// 菜单右侧图标的大小
		menuIconSize: {
			type: [Number, String],
			default: 14
		}
	},
  emits: ['open', 'close'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const instance = getCurrentInstance()!.proxy!
	
	
	
	// 定义 props
	const props = __props;
	
	// 定义 emit
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	// 定义响应式数据
	const menuList = ref([] as Array<UPDropdownMenu>);
	const active = ref(false);
	const current = ref(-1 as number);
	const contentStyle = ref<UTSJSONObject>({
		zIndex: -1,
		opacity: 0
	});
	const highlightIndexList = ref([] as Array<number>)
	const contentHeight = ref(0 as number)
	
	watch(contentHeight, (newVal: number) => {
		if (active.value) {
			contentStyle.value['height'] = newVal + 'px'
		}
	})
	
	const dropdownStyle = computed((): UTSJSONObject => {
		const h = active.value
			? addUnit(contentHeight.value + parseInt(props.height.toString()))
			: addUnit(props.height)
		return { height: h } as UTSJSONObject
	})

	const menuStyle = computed((): UTSJSONObject => {
		return { height: addUnit(props.height) } as UTSJSONObject
	})

	const contentWrapStyle = computed((): UTSJSONObject => {
		const style = deepMerge(contentStyle.value, {
			top: addUnit(props.height),
			transition: `opacity ${parseInt(props.duration.toString()) / 1000}s, z-index ${parseInt(props.duration.toString()) / 1000}s linear`,
		} as UTSJSONObject) as UTSJSONObject
		return style
	})

	const menuIconSizeUnit = computed((): string => {
		return addUnit(props.menuIconSize)
	})

	function getMenuIconColor(index: number): string {
		if (index == current.value || highlightIndexList.value.includes(index)) {
			return props.activeColor == '#2979ff' ? 'primary' : props.activeColor
		}
		return '#c0c4cc'
	}

	// 下拉出来部分的样式
	const popupStyle = computed((): UTSJSONObject => {
		let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-dropdown/up-dropdown.uvue", 152, 7), } as UTSJSONObject
		style['transform'] = `translateY(${active.value ? '0%' : '-100%'})`
		style['transition-duration'] = parseInt(props.duration.toString()) / 1000 + 's'
		style['borderRadius'] = `0 0 ${addUnit(props.borderRadius)} ${addUnit(props.borderRadius)}`
		return style
	})

	function getContentHeight() {
		let windowHeight = getWindowInfo().windowHeight;
		upGetRect('.up-dropdown__menu', false, instance).then((res) => {
			if (res.bottom != null && res.bottom! > 0) {
				contentHeight.value = windowHeight - res.bottom!;
			} else {
				contentHeight.value = windowHeight;
			}
		});
	}
	
	function open(index: number) {
		getContentHeight();
		contentStyle.value = {
			zIndex: 11,
			height: contentHeight.value + 'px',
			opacity: 1
		};
		active.value = true;
		current.value = index;
		emit('open', current.value);
	}
	
	function close() {
		emit('close', current.value);
		active.value = false;
		current.value = -1;
		contentStyle.value['zIndex'] = -1;
		contentStyle.value['opacity'] = 0;
		setTimeout(() => {
			contentStyle.value['height'] = 0;
		}, parseInt(props.duration.toString()));
	}
	
	function menuClick(index: number) {
		if (index < 0 || index >= menuList.value.length) return;
		if (menuList.value[index].disabled) return;
		if (index == current.value && props.closeOnClickSelf) {
			close();
			return;
		}
		open(index);
	}
	
	function maskClick() {
		if (!props.closeOnClickMask) return;
		close();
	}
	
	function highlight(index: number | null = null) {
		if (index != null) {
			let indexOf = highlightIndexList.value.indexOf(index);
			if (indexOf == -1) {
				highlightIndexList.value.push(index);
			}
		} else {
			highlightIndexList.value = [];
		}
	}
	
	function getContentTextStyle(item: UPDropdownMenu, index: number) {
		let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-dropdown/up-dropdown.uvue", 220, 7), } as UTSJSONObject;
		if (index == current.value || highlightIndexList.value.includes(index)) {
			if (props.activeColor != '#2979ff') {
				style['color'] = props.activeColor;
			}
		} else {
			if (props.inactiveColor != '#606266') {
				style['color'] = props.inactiveColor;
			}
		}
		if (props.titleSize != 14) {
			style['fontSize'] = addUnit(props.titleSize);
		}
		return style;
	}
	
	function registerItem(item: UPDropdownMenu): number {
		const idx = menuList.value.length;
		menuList.value.push(item);
		return idx;
	}

	function updateItemTitle(idx: number, title: string) {
		if (idx >= 0 && idx < menuList.value.length) {
			menuList.value[idx].title = title;
		}
	}
	
	provide('upDropdown', {
		props,
		current,
		active,
		registerItem,
		updateItemTitle,
		close
	});

	onMounted(() => {
		getContentHeight();
	});
	
	__expose({
		highlight,
		close,
		open,
		getContentHeight
	});

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: "up-dropdown",
    style: _nS(dropdownStyle.value)
  }), [
    _cE("view", _uM({
      class: _nC(["up-dropdown__menu", _uM({
			'u-border-bottom': props.borderBottom
		})]),
      style: _nS(menuStyle.value)
    }), [
      _cE(Fragment, null, RenderHelpers.renderList(menuList.value, (item, index, __index, _cached): any => {
        return _cE("view", _uM({
          class: "up-dropdown__menu__item",
          key: index,
          onClick: withModifiers(() => {menuClick(index)}, ["stop"])
        }), [
          _cE("view", _uM({ class: "up-flex up-flex-row" }), [
            _cE("text", _uM({
              class: _nC(["up-dropdown__menu__item__text", _uM({
						'up-dropdown__menu__item__text--active': (index == current.value || highlightIndexList.value.includes(index)) && props.activeColor == '#2979ff'
					})]),
              style: _nS(getContentTextStyle(item, index))
            }), _tD(item['title']), 7 /* TEXT, CLASS, STYLE */),
            _cE("view", _uM({
              class: _nC(["up-dropdown__menu__item__arrow", _uM({
						'up-dropdown__menu__item__arrow--rotate': index == current.value
					})])
            }), [
              _cV(_component_up_icon, _uM({
                "custom-style": {display: 'flex'},
                name: props.menuIcon,
                size: menuIconSizeUnit.value,
                color: getMenuIconColor(index)
              }), null, 8 /* PROPS */, ["name", "size", "color"])
            ], 2 /* CLASS */)
          ])
        ], 8 /* PROPS */, ["onClick"])
      }), 128 /* KEYED_FRAGMENT */)
    ], 6 /* CLASS, STYLE */),
    _cE("view", _uM({
      class: "up-dropdown__content",
      style: _nS(contentWrapStyle.value),
      onClick: maskClick,
      onTouchmove: withModifiers(() => {}, ["stop","prevent"])
    }), [
      _cE("view", _uM({
        onClick: withModifiers(() => {}, ["stop","prevent"]),
        class: "up-dropdown__content__popup",
        style: _nS(popupStyle.value)
      }), [
        renderSlot(_ctx.$slots, "default")
      ], 12 /* STYLE, PROPS */, ["onClick"]),
      _cE("view", _uM({ class: "up-dropdown__content__mask" }))
    ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["onTouchmove"])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpDropdownComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpDropdownUpDropdownStyles = [_uM([["up-dropdown", _pS(_uM([["flexGrow", 0], ["flexShrink", 0], ["flexBasis", "auto"], ["width", "100%"], ["position", "relative"]]))], ["up-dropdown__menu", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["zIndex", 11], ["height", "80rpx"]]))], ["up-dropdown__menu__item", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-dropdown__menu__item__text", _pS(_uM([["fontSize", "28rpx"], ["color", "#606266"]]))], ["up-dropdown__menu__item__text--active", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-dropdown__menu__item__arrow", _pS(_uM([["marginLeft", "6rpx"], ["transitionProperty", "transform"], ["transitionDuration", "0.3s"], ["alignItems", "center"], ["display", "flex"], ["flexDirection", "row"]]))], ["up-dropdown__menu__item__arrow--rotate", _pS(_uM([["transform", "rotate(180deg)"]]))], ["up-dropdown__content", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#0000FF"], ["borderRightColor", "#0000FF"], ["borderBottomColor", "#0000FF"], ["borderLeftColor", "#0000FF"], ["position", "absolute"], ["zIndex", 8], ["width", "100%"], ["left", 0], ["bottom", 0], ["top", "80rpx"], ["overflow", "hidden"]]))], ["up-dropdown__content__mask", _pS(_uM([["position", "absolute"], ["zIndex", 9], ["backgroundImage", "none"], ["backgroundColor", "rgba(0,0,0,0.3)"], ["width", "100%"], ["left", 0], ["top", 0], ["bottom", 0]]))], ["up-dropdown__content__popup", _pS(_uM([["position", "relative"], ["zIndex", 10], ["transitionProperty", "transform"], ["transitionDuration", "0.3s"], ["transform", "translate3d(0, -100%, 0)"], ["overflow", "hidden"]]))], ["up-flex-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["@TRANSITION", _uM([["up-dropdown__menu__item__arrow", _uM([["property", "transform"], ["duration", "0.3s"]])], ["up-dropdown__content__popup", _uM([["property", "transform"], ["duration", "0.3s"]])]])]])]
