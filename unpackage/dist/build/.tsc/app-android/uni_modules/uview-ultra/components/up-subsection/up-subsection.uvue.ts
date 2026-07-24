
import { subsectionProps } from "./props";
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { addStyle, addUnit, sleep } from '../../libs/function/index';
/**
 * Subsection 分段器
 * @description 该分段器一般用于用户从几个选项中选择某一个的场景
 * @tutorial https://ijry.github.io/uview-plus/components/subsection.html
 * @property {Array}			list			tab的数据
 * @property {String ｜ Number}	current			当前活动的tab的index（默认 0 ）
 * @property {String}			activeColor		激活时的颜色（默认 '#3c9cff' ）
 * @property {String}			inactiveColor	未激活时的颜色（默认 '#303133' ）
 * @property {String}			mode			模式选择，mode=button为按钮形式，mode=subsection时为分段模式（默认 'button' ）
 * @property {String ｜ Number}	fontSize		字体大小，单位px（默认 12px ）
 * @property {Boolean}			bold			激活选项的字体是否加粗（默认 true ）
 * @property {String}			bgColor			组件背景颜色，mode为button时有效（默认 '#eeeeef' ）
 * @property {Object}			customStyle		定义需要用到的外部样式
 * @property {String}	        keyName	        从`list`元素对象中读取的键名（默认 'name' ）
 *
 * @event {Function} change		分段器选项发生改变时触发  回调 index：选项的index索引值，从0开始
 * @example <up-subsection :list="list" :current="curNow" @change="sectionChange"></up-subsection>
 */
const __sfc__ = defineComponent({
    name: "up-subsection",
    mixins: [
		mpMixin, mixin,
		subsectionProps
	],
    data() {
        return {
            innerCurrent: 0,
            componentWidth: 0,
            firstTime: true,
            windowResizeCallback: {}
        };
    },
    watch: {
        list() {
            this.init();
        },
        current: {
            immediate: true,
            handler(n: string | number) {
				let nn = parseInt(n.toString())
                if (nn !== this.innerCurrent) {
                    this.innerCurrent = nn
                }
            },
        },
    },
    computed: {
        wrapperStyle() {
            const style = {};
            // button模式时，设置背景色
            if (this.mode === "button") {
                style['backgroundColor'] = this.bgColor;
            }
            return style;
        },
        // 滑块的样式
        barStyle(): any {
            const style = {};
            if (this.componentWidth > 0) {
                const itemWidth = this.componentWidth / this.list.length;
                style['width'] = itemWidth.toString() + 'px';
                style['transform'] = `translateX(${this.innerCurrent * itemWidth}px)`;
            } else {
                if (this.list.length > 0) {
                    style['width'] = (100.0 / this.list.length).toString() + '%';
                }
                style['transform'] = `translateX(${this.innerCurrent * 100}%)`;
            }
            if (this.firstTime) {
                style['transitionDuration'] = '0ms';
            } else {
                style['transitionDuration'] = '300ms';
            }
            style['left'] = '0px';
            style['top'] = '0px';
            style['bottom'] = '0px';
            return style;
        },
        innerBarStyle(): any {
            const style = {};
            if (this.mode === "subsection") {
                if (this.activeColor != '#3c9cff') {
                    style['backgroundColor'] = this.activeColor;
                }
            }
            return style;
        }
    },
    mounted() {
        this.init();
        // this.windowResizeCallback = (res) => {
        //     this.init();
        // }
        // uni.onWindowResize(this.windowResizeCallback)
    },
    beforeUnmount() {
        // uni.offWindowResize(this.windowResizeCallback)
    },
	emits: ["change"],
    methods: {
        addStyle(e: any) {
        	return addStyle(e);
        },
        addUnit(e: any) {
        	return addUnit(e);
        },
        init() {
			// @ts-ignore
            this.innerCurrent = parseInt(this.current.toString())
            this.$nextTick(() => {
                this.resize()
            })
        },
        resize() {
            this.getWrapperRect().then((rect: NodeInfo | null) => {
                if (rect != null && rect.width != null && rect.width! > 0) {
                    this.componentWidth = rect.width!
                    if (this.firstTime) {
                        this.$nextTick(() => {
                            setTimeout(() => {
                                this.firstTime = false
                            }, 50)
                        })
                    }
                }
            })
        },
        getWrapperRect(): Promise<NodeInfo | null> {
            return new Promise((resolve) => {
                uni.createSelectorQuery()
                    .in(this)
                    .select('.up-subsection')
                    .boundingClientRect()
                    .exec((rect) => {
                        if (rect != null && rect.length > 0) {
                            resolve(rect[0] as NodeInfo);
                        } else {
                            resolve(null);
                        }
                    })
            })
        },
		itemStyle(index: number) {
			const style = {};
			if (this.mode === "subsection") {
				// 设置border的样式
				if (this.activeColor != '#3c9cff') {
					style['borderColor'] = this.activeColor;
				}
				style['borderWidth'] = "1px";
				style['borderStyle'] = "solid";
			}
			return style;
		},
		textStyle(index: number) {
			const style = {};
			if (this.disabled) {
				style['fontWeight'] = 'normal';
				style['fontSize'] = addUnit(this.fontSize);
				style['color'] = '#c8c9cc';
				return style;
			}
			style['fontWeight'] =
				this.bold && this.innerCurrent === index ? "bold" : "normal";
			style['fontSize'] = addUnit(this.fontSize);
			const item = this.list[index];
			const activeColorTemp =
				typeof item == 'object' && item != null
					? (((item as UTSJSONObject)[this.activeColorKeyName] ?? '') as string)
					: '';
			const inactiveColorTemp =
				typeof item === 'object' && item != null
					? (((item as UTSJSONObject)[this.inactiveColorKeyName] ?? '') as string)
					: '';
			// subsection模式下，激活时默认为白色的文字
			if (this.mode === "subsection") {
				style['color'] =
					this.innerCurrent === index ? (activeColorTemp != '' ? activeColorTemp : "#fff") : (inactiveColorTemp != '' ? inactiveColorTemp : this.inactiveColor);
			} else {
				// button模式下，激活时文字颜色默认为activeColor
				const c = activeColorTemp != '' ? activeColorTemp : this.activeColor;
				if (this.innerCurrent == index) {
					if (c != '#3c9cff') {
						style['color'] = c;
					}
				} else {
					style['color'] = inactiveColorTemp != '' ? inactiveColorTemp : this.inactiveColor;
				}
			}
			return style;
		},
		// 判断展示文本
		getText(item: any|null): string|null {
			if (typeof item === 'string') {
				return item;
			} else if (typeof item === 'object') {
				let temp = JSON.parse(JSON.stringify(item)) as UTSJSONObject;
				return temp.getString(this.keyName);
			} else {
				return "error";
			}
		},

	        clickHandler(index: number) {
				if (this.disabled) return
	            this.innerCurrent = index
	            this.$emit("change", index);
	        }
    },
});

export default __sfc__
function GenUniModulesUviewUltraComponentsUpSubsectionUpSubsectionRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: _nC(["up-subsection", [`up-subsection--${_ctx.mode}`]]),
    ref: "up-subsection",
    style: _nS([_ctx.addStyle(_ctx.customStyle), _ctx.wrapperStyle])
  }), [
    _cE("view", _uM({
      class: "up-subsection__bar cursor-pointer",
      ref: "up-subsection__bar",
      style: _nS(_ctx.barStyle)
    }), [
      _cE("view", _uM({
        class: _nC(["up-subsection__bar__inner", _uM({
					'up-subsection--button__bar': _ctx.mode === 'button',
					'up-subsection__bar__inner--button': _ctx.mode === 'button',
					'up-subsection__bar--first': (_ctx.innerCurrent == 0 && _ctx.mode === 'subsection'),
					'up-subsection__bar--center': (_ctx.innerCurrent > 0 && _ctx.innerCurrent < _ctx.list.length - 1 && _ctx.mode === 'subsection'),
					'up-subsection__bar--last': (_ctx.innerCurrent == _ctx.list.length - 1 && _ctx.mode === 'subsection')
				})]),
        style: _nS(_ctx.innerBarStyle)
      }), null, 6 /* CLASS, STYLE */)
    ], 4 /* STYLE */),
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
      return _cE("view", _uM({
        class: _nC(["up-subsection__item cursor-pointer", [
	                `up-subsection__item--${index.toString()}`,
	                index < _ctx.list.length - 1 ? 
	                    'up-subsection__item--no-border-right' : '',
	                index == 0 ? 'up-subsection__item--first' : '',
	                index == _ctx.list.length - 1 ? 'up-subsection__item--last' : '',
					_ctx.disabled ? 'up-subsection__item--disabled' : ''
	            ]]),
        ref_for: true,
        ref: `up-subsection__item--${index.toString()}`,
        style: _nS([_ctx.itemStyle(index)]),
        onClick: () => {_ctx.clickHandler(index)},
        key: index
      }), [
        renderSlot(_ctx.$slots, "item", _uM({
          item: item,
          index: index
        }), (): any[] => [
          _cE("text", _uM({
            class: _nC(["up-subsection__item__text", [
							_ctx.disabled ? 'up-subsection__item__text--disabled' : '',
							(_ctx.innerCurrent == index && _ctx.mode === 'button' && _ctx.activeColor == '#3c9cff') ? 'up-subsection__item__text--active' : ''
						]]),
            style: _nS([_ctx.textStyle(index)])
          }), _tD(_ctx.getText(item)), 7 /* TEXT, CLASS, STYLE */)
        ])
      ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
    }), 128 /* KEYED_FRAGMENT */)
  ], 6 /* CLASS, STYLE */)
}
export type UpSubsectionComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSubsectionUpSubsectionStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-subsection", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["overflow", "hidden"], ["width", "100%"], ["boxSizing", "border-box"]]))], ["up-subsection--button", _pS(_uM([["height", 34], ["backgroundColor", "#eeeeef"], ["paddingTop", 3], ["paddingRight", 3], ["paddingBottom", 3], ["paddingLeft", 3], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["alignItems", "stretch"]]))], ["up-subsection--button__bar", _pS(_uM([["backgroundColor", "#ffffff"], ["!borderTopLeftRadius", 4], ["!borderTopRightRadius", 4], ["!borderBottomRightRadius", 4], ["!borderBottomLeftRadius", 4]]))], ["up-subsection--subsection", _pS(_uM([["height", 32]]))], ["up-subsection__bar", _pS(_uM([["position", "absolute"], ["left", 0], ["transitionProperty", "transform,color"], ["transitionDuration", "0.3s"], ["transitionTimingFunction", "ease-in-out"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "stretch"]]))], ["up-subsection__bar__inner", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["alignSelf", "stretch"], ["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-subsection__bar__inner--button", _pS(_uM([["marginTop", 3], ["marginRight", 3], ["marginBottom", 3], ["marginLeft", 3], ["backgroundColor", "#ffffff"]]))], ["up-subsection__bar--first", _pS(_uM([["borderTopLeftRadius", 4], ["borderBottomLeftRadius", 4], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-subsection__bar--center", _pS(_uM([["borderTopLeftRadius", 0], ["borderBottomLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-subsection__bar--last", _pS(_uM([["borderTopLeftRadius", 0], ["borderBottomLeftRadius", 0], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4]]))], ["up-subsection__item", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["justifyContent", "center"], ["alignItems", "center"], ["position", "relative"], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-subsection__item--no-border-right", _pS(_uM([["!borderRightWidth", 0]]))], ["up-subsection__item--first", _pS(_uM([["borderTopLeftRadius", 4], ["borderBottomLeftRadius", 4]]))], ["up-subsection__item--last", _pS(_uM([["borderTopRightRadius", 4], ["borderBottomRightRadius", 4]]))], ["up-subsection__item__text", _pS(_uM([["fontSize", 12], ["lineHeight", "14px"], ["transitionProperty", "color"], ["transitionDuration", "0.3s"]]))], ["up-subsection__item__text--disabled", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-subsection__item__text--active", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["@TRANSITION", _uM([["up-subsection__bar", _uM([["property", "transform,color"], ["duration", "0.3s"], ["timingFunction", "ease-in-out"]])], ["up-subsection__item__text", _uM([["property", "color"], ["duration", "0.3s"]])]])]])]
