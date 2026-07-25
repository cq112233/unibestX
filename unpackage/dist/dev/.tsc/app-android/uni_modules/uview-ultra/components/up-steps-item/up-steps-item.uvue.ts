
	import { propsStepsItem } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { sleep, error } from '../../libs/function/index';
	import color from '../../libs/config/color';
	/**
	 * StepsItem 步骤条的子组件
	 * @description 本组件需要和up-steps配合使用
	 * @tutorial https://uview-plus.jiangruyi.com/components/steps.html
	 * @property {String}			title			标题文字
	 * @property {String}			current			描述文本
	 * @property {String | Number}	iconSize		图标大小  (默认 17 )
	 * @property {Boolean}			error			当前步骤是否处于失败状态  (默认 false )
	 * @example <up-steps current="0"><up-steps-item title="已出库" desc="10:35" ></up-steps-item></up-steps>
	 */
	const __sfc__ = defineComponent({
		name: 'up-steps-item',
		mixins: [mpMixin, mixin, propsStepsItem],
		data() {
			return {
				index: 0,
				childLength: 0,
				showLine: false,
				parentData: {
					direction: 'row',
					current: 0,
					activeColor: '',
					inactiveColor: '',
					activeIcon: '',
					inactiveIcon: '',
					dot: false
				} as UTSJSONObject
			}
		},
		watch: {
			parentData() {
			}
		},
		created() {
			this.init()
		},
		computed: {
			itemWidthStyle(): any {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 121, 11),}
				// @ts-ignore
				if (this.parentData['direction'].toString() === 'row' && this.childLength > 0) {
					// @ts-ignore
					style['width'] = (100.0 / this.childLength).toString() + '%'
				}
				return style
			},
			lineStyle2() {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 130, 11),}
				// @ts-ignore
				if (this.parentData['direction'].toString() === 'row') {
					if (this.index == 0) {
						style['display'] = 'none'
					} else {
						style['left'] = '0px'
						style['right'] = '50%'
						style['width'] = 'auto'
					}
				} else {
					if (this.index == 0) {
						style['display'] = 'none'
					} else {
						style['top'] = '0px'
						style['bottom'] = '50%'
						style['left'] = '10px'
						style['height'] = 'auto'
						style['width'] = '1px'
					}
				}

				// 左半段连接线：从上一步连接到当前步骤，应检查当前步骤的 error 状态
				// @ts-ignore
				if (this.error as boolean) {
					style['backgroundColor'] = color['error']
				} else if ((this.index - 1) < parseInt(this.parentData['current'].toString())) {
					// @ts-ignore
					if (this.parentData['activeColor'] != '#3c9cff') {
						style['backgroundColor'] = this.parentData['activeColor']
					}
				} else {
					style['backgroundColor'] = this.parentData['inactiveColor']
				}
				return style
			},
			lineStyle() {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 167, 11),}
				// @ts-ignore
				if (this.parentData['direction'].toString() === 'row') {
					if (this.index == this.childLength - 1) {
						style['display'] = 'none'
					} else {
						style['left'] = '50%'
						style['right'] = '0px'
						style['width'] = 'auto'
					}
				} else {
					if (this.index == this.childLength - 1) {
						style['display'] = 'none'
					} else {
						style['top'] = '50%'
						style['bottom'] = '0px'
						style['left'] = '10px'
						style['height'] = 'auto'
						style['width'] = '1px'
					}
				}
				
				// @ts-ignore
				if (this.parent != null
				// @ts-ignore
					&& this.parent.$data['children'] != null
					// @ts-ignore
					&& this.index + 1 < (this.parent.$data['children'] as ComponentPublicInstance[]).length) {
					// @ts-ignore
					const nextChild = (this.parent.$data['children'] as ComponentPublicInstance[])[this.index + 1];
					// @ts-ignore
					if (nextChild != null && nextChild.$props['error'] as boolean) {
						style['backgroundColor'] = color['error']
						// @ts-ignore
					} else if (this.index < parseInt(this.parentData['current'].toString())) {
						if (this.parentData['activeColor'] != '#3c9cff') {
							style['backgroundColor'] = this.parentData['activeColor']
						}
					} else {
						style['backgroundColor'] = this.parentData['inactiveColor']
					}
				}
				return style
			},
			dotStyle(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 212, 11), } as UTSJSONObject
				const activeColor = this.parentData['activeColor'] as string
				if (this.statusClass === 'finish' || this.statusClass === 'process') {
					if (activeColor != '#3c9cff') {
						style['backgroundColor'] = activeColor
					}
				} else {
					style['backgroundColor'] = this.parentData['inactiveColor']
				}
				return style
			},
			circleStyle(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 224, 11), } as UTSJSONObject
				const activeColor = this.parentData['activeColor'] as string
				const inactiveColor = this.parentData['inactiveColor'] as string
				
				if (activeColor != '#3c9cff' || inactiveColor != '#969799') {
					if (this.statusClass === 'process') {
						style['backgroundColor'] = activeColor
						style['borderColor'] = activeColor
					} else if (this.statusClass === 'finish') {
						style['backgroundColor'] = 'rgba(0, 0, 0, 0)'
						style['borderColor'] = activeColor
					} else if (this.statusClass === 'wait') {
						style['backgroundColor'] = 'rgba(0, 0, 0, 0)'
						style['borderColor'] = inactiveColor
					} else if (this.statusClass === 'error') {
						style['backgroundColor'] = 'rgba(0, 0, 0, 0)'
						style['borderColor'] = color['error']
					}
				}
				return style
			},
			circleTextStyle(): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 246, 11), } as UTSJSONObject
				const activeColor = this.parentData['activeColor'] as string
				const inactiveColor = this.parentData['inactiveColor'] as string
				if (activeColor != '#3c9cff' || inactiveColor != '#969799') {
					if (this.statusClass === 'process') {
						style['color'] = '#ffffff'
					} else {
						style['color'] = inactiveColor
					}
				}
				return style
			},
			itemStyleInner(): any {
				return {
					// @ts-ignore
					...this.itemStyle
				}
			},
			statusClass() {
				let index = this.index
				// @ts-ignore
				let error = this.error
				// @ts-ignore
				let current = parseInt(this.parentData['current'].toString())
				if (current == index) {
					return error == true ? 'error' : 'process'
				} else if (error) {
					return 'error'
				} else if (current > index) {
					return 'finish'
				} else {
					return 'wait'
				}
			},
			statusColor() {
				let colorTmp = '#f1f1f1'
				switch (this.statusClass) {
					case 'finish':
						colorTmp = this.parentData['activeColor'] as string
						break
					case 'error':
						colorTmp = color['error'] as string
						break
					case 'process':
						colorTmp = this.parentData['dot'] as boolean ? this.parentData['activeColor'] as string : 'transparent'
						break
					default:
						colorTmp = this.parentData['inactiveColor'] as string
						break
				}
				return colorTmp
			},
			contentStyle(): any {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 299, 11),}
				// @ts-ignore
				if (this.parentData['direction'].toString() === 'column') {
					// @ts-ignore
					style['marginLeft'] = this.parentData['dot'].toString() == 'true' ? '2px' : '6px'
					// @ts-ignore
					style['marginTop'] = this.parentData['dot'].toString() == 'true' ? '0px' : '6px'
				} else {
					// @ts-ignore
					style['marginTop'] = this.parentData['dot'].toString() == 'true' ? '2px' : '6px'
					// @ts-ignore
					style['marginLeft'] = this.parentData['dot'].toString() == 'true' ? '2px' : '6px'
				}

				return style
			}
		},
		mounted() {
			// @ts-ignore
			if (this.parent != null) {
				// @ts-ignore
				this.parent?.$callMethod('updateFromChild')
			}
		},
		methods: {
			init() {
				// 初始化数据
				this.updateParentData()
				// @ts-ignore
				if (this.parent == null) {
					return error('up-steps-item必须要搭配up-steps组件使用')
				}
				// @ts-ignore
				(this.parent.$data['children'] as ComponentPublicInstance[]).forEach((child: ComponentPublicInstance, index: number) => {
					if (child == this) {
						this.index = index
					}
				})
				// @ts-ignore
				this.childLength = (this.parent.$data['children'] as ComponentPublicInstance[]).length
			},
			updateParentData() {
				// 此方法在mixin中
				// @ts-ignore
				this.getParentData('up-steps')
			},
			// 父组件数据发生变化
			updateFromParent() {
				this.init()
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_text = resolveEasyComponent("up-text",_easycom_up_text)

  return _cE("view", _uM({
    class: _nC(["up-steps-item", [`up-steps-item--${_ctx.parentData['direction']}`]]),
    ref: "up-steps-item",
    style: _nS(_ctx.itemWidthStyle)
  }), [
    _cE("view", _uM({
      class: _nC(["up-steps-item__line", [
				`up-steps-item__line--${_ctx.parentData['direction']}`,
				(_ctx.index < parseInt(_ctx.parentData['current'].toString()) && _ctx.parentData['activeColor'] == '#3c9cff') ? 'up-steps-item__line--active' : ''
			]]),
      style: _nS(_ctx.lineStyle)
    }), null, 6 /* CLASS, STYLE */),
    _cE("view", _uM({
      class: _nC(["up-steps-item__line", [
				`up-steps-item__line--${_ctx.parentData['direction']}`,
				((_ctx.index - 1) < parseInt(_ctx.parentData['current'].toString()) && _ctx.parentData['activeColor'] == '#3c9cff') ? 'up-steps-item__line--active' : ''
			]]),
      style: _nS(_ctx.lineStyle2)
    }), null, 6 /* CLASS, STYLE */),
    _cE("view", _uM({
      class: _nC(["up-steps-item__wrapper", [`up-steps-item__wrapper--${_ctx.parentData['direction']}`,
				(_ctx.parentData['dot'] != null && _ctx.parentData['dot'] as boolean) ? `up-steps-item__wrapper--${_ctx.parentData['direction']}--dot` : '']]),
      style: _nS(_ctx.itemStyleInner)
    }), [
      renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
        isTrue((_ctx.parentData['dot'] != null && _ctx.parentData['dot'] as boolean))
          ? _cE("view", _uM({
              key: 0,
              class: _nC(["up-steps-item__wrapper__dot", [
						(_ctx.statusClass === 'finish' || _ctx.statusClass === 'process') ? 'up-steps-item__wrapper__dot--active' : ''
					]]),
              style: _nS(_ctx.dotStyle)
            }), null, 6 /* CLASS, STYLE */)
          : isTrue(_ctx.parentData['activeIcon'] != '' || _ctx.parentData['inactiveIcon'] != '')
            ? _cE("view", _uM({
                key: 1,
                class: "up-steps-item__wrapper__icon"
              }), [
                _cV(_component_up_icon, _uM({
                  name: _ctx.index <= parseInt(_ctx.parentData['current'].toString()) ? _ctx.parentData['activeIcon'] : _ctx.parentData['inactiveIcon'],
                  size: _ctx.iconSize,
                  color: _ctx.index <= parseInt(_ctx.parentData['current'].toString()) ? (_ctx.parentData['activeColor'] == '#3c9cff' ? 'primary' : _ctx.parentData['activeColor']) : _ctx.parentData['inactiveColor']
                }), null, 8 /* PROPS */, ["name", "size", "color"])
              ])
            : _cE("view", _uM({
                key: 2,
                class: _nC([[
						_ctx.statusClass === 'process' ? 'up-steps-item__wrapper__circle--active' : '',
						_ctx.statusClass === 'finish' ? 'up-steps-item__wrapper__circle--finish' : '',
						_ctx.statusClass === 'wait' ? 'up-steps-item__wrapper__circle--wait' : '',
						_ctx.statusClass === 'error' ? 'up-steps-item__wrapper__circle--error' : ''
					], "up-steps-item__wrapper__circle"]),
                style: _nS(_ctx.circleStyle)
              }), [
                isTrue(_ctx.statusClass === 'process' || _ctx.statusClass === 'wait')
                  ? _cE("text", _uM({
                      key: 0,
                      class: _nC(["up-steps-item__wrapper__circle__text", [
							_ctx.statusClass === 'process' ? 'up-steps-item__wrapper__circle__text--active' : ''
						]]),
                      style: _nS(_ctx.circleTextStyle)
                    }), _tD(_ctx.index + 1), 7 /* TEXT, CLASS, STYLE */)
                  : _cV(_component_up_icon, _uM({
                      key: 1,
                      color: _ctx.statusClass === 'error' ? 'error' : (_ctx.parentData['activeColor'] == '#3c9cff' ? 'primary' : _ctx.parentData['activeColor']),
                      size: "12",
                      name: _ctx.statusClass === 'error' ? 'close' : 'checkmark'
                    }), null, 8 /* PROPS */, ["color", "name"])
              ], 6 /* CLASS, STYLE */)
      ])
    ], 6 /* CLASS, STYLE */),
    _cE("view", _uM({
      class: _nC(["up-steps-item__content", [`up-steps-item__content--${_ctx.parentData['direction']}`,
			parseInt(_ctx.parentData['current'].toString()) == _ctx.index ? 'up-steps-item__content--current' : '']]),
      style: _nS(_ctx.contentStyle)
    }), [
      renderSlot(_ctx.$slots, "content", _uM({ index: _ctx.index })),
      _ctx.$slots['content'] == null
        ? _cE(Fragment, _uM({ key: 0 }), [
            _cE("view", _uM({ class: "up-steps-item__content__title" }), [
              renderSlot(_ctx.$slots, "title"),
              _ctx.$slots['title'] == null
                ? _cV(_component_up_text, _uM({
                    key: 0,
                    text: _ctx.title,
                    lineHeight: "20px",
                    color: parseInt(_ctx.parentData['current'].toString()) == _ctx.index ? (_ctx.parentData['activeColor'] == '#3c9cff' ? '' : (_ctx.parentData['activeColor'] as string)) : (_ctx.parentData['inactiveColor'] as string),
                    type: parseInt(_ctx.parentData['current'].toString()) == _ctx.index && _ctx.parentData['activeColor'] == '#3c9cff' ? 'primary' : 'default',
                    size: parseInt(_ctx.parentData['current'].toString()) == _ctx.index ? 14 : 13
                  }), null, 8 /* PROPS */, ["text", "color", "type", "size"])
                : _cC("v-if", true)
            ]),
            _cE("view", _uM({ class: "up-steps-item__content__desc" }), [
              renderSlot(_ctx.$slots, "desc"),
              _ctx.$slots['desc'] == null
                ? _cV(_component_up_text, _uM({
                    key: 0,
                    text: _ctx.desc,
                    type: "tips",
                    size: "12"
                  }), null, 8 /* PROPS */, ["text"])
                : _cC("v-if", true)
            ])
          ], 64 /* STABLE_FRAGMENT */)
        : _cC("v-if", true)
    ], 6 /* CLASS, STYLE */)
  ], 6 /* CLASS, STYLE */)
}
export type UpStepsItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-steps-item", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "row"]]))], ["up-steps-item--row", _pS(_uM([["flexDirection", "column"], ["alignItems", "center"], ["position", "relative"]]))], ["up-steps-item--column", _pS(_uM([["position", "relative"], ["flexDirection", "row"], ["justifyContent", "flex-start"], ["paddingBottom", 5]]))], ["up-steps-item__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["position", "relative"], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 50], ["borderTopRightRadius", 50], ["borderBottomRightRadius", 50], ["borderBottomLeftRadius", 50]]))], ["up-steps-item__wrapper--column", _pS(_uM([["width", 20], ["height", 20]]))], ["up-steps-item__wrapper--column--dot", _pS(_uM([["height", 20], ["width", 20]]))], ["up-steps-item__wrapper--row", _pS(_uM([["width", 20], ["height", 20]]))], ["up-steps-item__wrapper--row--dot", _pS(_uM([["width", 20], ["height", 20]]))], ["up-steps-item__wrapper__circle", _pS(_uM([["width", 20], ["height", 20], ["boxSizing", "border-box"], ["flexShrink", 0], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-steps-item__wrapper__circle--wait", _pS(_uM([["borderTopColor", "#909193"], ["borderRightColor", "#909193"], ["borderBottomColor", "#909193"], ["borderLeftColor", "#909193"], ["backgroundColor", "rgba(0,0,0,0)"]]))], ["up-steps-item__wrapper__circle--active", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-steps-item__wrapper__circle--finish", _pS(_uM([["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"], ["backgroundColor", "rgba(0,0,0,0)"]]))], ["up-steps-item__wrapper__circle--error", _pS(_uM([["borderTopColor", "#f56c6c"], ["borderRightColor", "#f56c6c"], ["borderBottomColor", "#f56c6c"], ["borderLeftColor", "#f56c6c"], ["backgroundColor", "rgba(0,0,0,0)"]]))], ["up-steps-item__wrapper__circle__text", _pS(_uM([["color", "#909193"], ["fontSize", 11], ["textAlign", "center"]]))], ["up-steps-item__wrapper__circle__text--active", _pS(_uM([["color", "#ffffff"]]))], ["up-steps-item__wrapper__dot", _pS(_uM([["width", 10], ["height", 10], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#606266"]]))], ["up-steps-item__wrapper__dot--active", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-steps-item__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-steps-item__content--row", _pS(_uM([["flexDirection", "column"], ["alignItems", "center"]]))], ["up-steps-item__content--column", _pS(_uM([["flexDirection", "column"], ["marginLeft", 6]]))], ["up-steps-item__line", _pS(_uM([["position", "absolute"], ["backgroundColor", "#909193"]]))], ["up-steps-item__line--active", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-steps-item__line--row", _pS(_uM([["top", 10], ["height", 1]]))], ["up-steps-item__line--column", _pS(_uM([["width", 1], ["left", 10]]))]])]

import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_text from '@/uni_modules/uview-ultra/components/up-text/up-text.uvue'
