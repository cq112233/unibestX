
import { propsTextarea } from "./props";
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { addStyle, addUnit, deepMerge, formValidate, os } from '../../libs/function/index';
/**
 * Textarea 文本域
 * @author jry ijry@qq.com
 * @description 文本域此组件满足了可能出现的表单信息补充，编辑等实际逻辑的功能，内置了字数校验等
 * @tutorial https://ijry.github.io/uview-plus/components/textarea.html
 *
 * @property {String | Number} 		value					输入框的内容
 * @property {String | Number}		placeholder				输入框为空时占位符
 * @property {String}			    placeholderClass		指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ （ 默认 'input-placeholder' ）
 * @property {String | Object}	    placeholderStyle		指定placeholder的样式，字符串/对象形式，如"color: red;"
 * @property {String | Number}		height					输入框高度（默认 70 ）
 * @property {String}				confirmType				设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效（默认 'done' ）
 * @property {Boolean}				disabled				是否禁用（默认 false ）
 * @property {Boolean}				count					是否显示统计字数（默认 false ）
 * @property {Boolean}				focus					是否自动获取焦点，nvue不支持，H5取决于浏览器的实现（默认 false ）
 * @property {Boolean | Function}	autoHeight				是否自动增加高度（默认 false ）
 * @property {Boolean}				fixed					如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true（默认 false ）
 * @property {Number}				cursorSpacing			指定光标与键盘的距离（默认 0 ）
 * @property {String | Number}		cursor					指定focus时的光标位置
 * @property {Function}			    formatter			    内容式化函数
 * @property {Boolean}				showConfirmBar			是否显示键盘上方带有”完成“按钮那一栏，（默认 true ）
 * @property {Number}				selectionStart			光标起始位置，自动聚焦时有效，需与selection-end搭配使用，（默认 -1 ）
 * @property {Number | Number}		selectionEnd			光标结束位置，自动聚焦时有效，需与selection-start搭配使用（默认 -1 ）
 * @property {Boolean}				adjustPosition			键盘弹起时，是否自动上推页面（默认 true ）
 * @property {Boolean | Number}		disableDefaultPadding	是否去掉 iOS 下的默认内边距，只微信小程序有效（默认 false ）
 * @property {Boolean}				holdKeyboard			focus时，点击页面的时候不收起键盘，只微信小程序有效（默认 false ）
 * @property {String | Number}		maxlength				最大输入长度，设置为 -1 的时候不限制最大长度（默认 140 ）
 * @property {String}				border					边框类型，surround-四周边框，none-无边框，bottom-底部边框（默认 'surround' ）
 * @property {Boolean}				ignoreCompositionEvent	是否忽略组件内对文本合成系统事件的处理
 *
 * @event {Function(e)} focus					输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度
 * @event {Function(e)} blur					输入框失去焦点时触发，event.detail = {value, cursor}
 * @event {Function(e)} linechange				输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}
 * @event {Function(e)} input					当键盘输入时，触发 input 事件
 * @event {Function(e)} confirm					点击完成时， 触发 confirm 事件
 * @event {Function(e)} keyboardheightchange	键盘高度发生变化的时候触发此事件
 * @example <up-textarea v-model="value1" placeholder="请输入内容" ></up-textarea>
 */
const defaultFormat = function(value: string): string {
    return value
}
const __sfc__ = defineComponent({
    name: "up-textarea",
    mixins: [mpMixin, mixin, propsTextarea],
	data() {
		return {
			// 输入框的值
			innerValue: "",
			// 是否处于获得焦点状态
			focused: false,
			// value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
			firstChange: true,
			// value绑定值的变化是由内部还是外部引起的
			changeFromInner: false,
			// 过滤处理方法
			innerFormatter: defaultFormat as Function
		}
	},
	created() {
	},
	watch: {
        modelValue: {
	        immediate: true,
	        handler(newVal: string, oldVal: string) {
	            this.innerValue = newVal;









	            this.firstChange = false;
	            // 重置changeFromInner的值为false，标识下一次引起默认为外部引起的
	            this.changeFromInner = false;
	        }
	    }
	},
    computed: {
        // 组件的类名
        textareaClass(): string {
            let classes: string[] = [],
                { border, disabled } = this;
            if (border === "surround") {
                (classes = classes.concat(["up-border", "up-textarea--radius"]));
            }
            if (border === "bottom") {
                (classes = classes.concat([
                    "up-border-bottom",
                    "up-textarea--no-radius",
                ]));
            }
            if (disabled) {
                classes.push("up-textarea--disabled");
            }
            return classes.join(" ");
        },
        // 组件的样式
        textareaStyle(): any {
            const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-textarea/up-textarea.uvue", 151, 19),};
            return deepMerge(style, addStyle(this.customStyle));
        },
    },

    emits: ['update:modelValue', 'linechange', 'focus', 'blur', 'change', 'confirm', 'keyboardheightchange'],

    methods: {
        addStyle(style: any): any {
			return addStyle(style)
		},
        addUnit(str: any): string {
			return addUnit(str)
		},
		// 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
		setFormatter(e: Function) {
			this.innerFormatter = e
		},
        onFocus(e: UniTextareaFocusEvent): void {
            this.$emit("focus", e)
        },
        onBlur(e: UniTextareaBlurEvent): void {
            this.$emit("blur", e)
            // 尝试调用up-form的验证方法
            formValidate(this, "blur")
        },
        onLinechange(e: UniTextareaLineChangeEvent): void {
            this.$emit("linechange", e)
        },
        onInput(e: UniInputEvent): void {
			let value = e.detail.value
			// 格式化过滤方法
            // todox
            // const formatter = this.formatter || this.innerFormatter
			// const formatter = this.innerFormatter
			// todo
			// const formatValue = formatter(value)
			const formatValue = (value)
			// 为了避免props的单向数据流特性，需要先将innerValue值设置为当前值，再在$nextTick中重新赋予设置后的值才有效
			this.innerValue = value
			this.$nextTick(() => {
				this.innerValue = formatValue;
				this.valueChange();
			})
        },
		// 内容发生变化，进行处理
		valueChange(): void {
		    const value = this.innerValue;
		    this.$nextTick(() => {
                this.$emit("update:modelValue", value);
		        // 标识value值的变化是由内部引起的
		        this.changeFromInner = true;
		        this.$emit("change", value);
		        // 尝试调用up-form的验证方法
		        formValidate(this, "change");
		    });
		},
        onConfirm(e: UniInputConfirmEvent) {
            this.$emit("confirm", e);
        },
        onKeyboardheightchange(e: UniInputKeyboardHeightChangeEvent) {
            this.$emit("keyboardheightchange", e);
        },
    },
});

export default __sfc__
function GenUniModulesUviewUltraComponentsUpTextareaUpTextareaRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: _nC(["up-textarea", _ctx.textareaClass]),
    style: _nS(_ctx.textareaStyle)
  }), [
    _cE("textarea", _uM({
      class: "up-textarea__field",
      value: _ctx.innerValue,
      style: _nS(_uM({ height: _ctx.addUnit(_ctx.height) })),
      placeholder: _ctx.placeholder,
      "placeholder-style": _ctx.addStyle(_ctx.placeholderStyle),
      "placeholder-class": _ctx.placeholderClass,
      disabled: _ctx.disabled,
      focus: _ctx.focus,
      autoHeight: _ctx.autoHeight,
      fixed: _ctx.fixed,
      cursorSpacing: _ctx.cursorSpacing,
      cursor: _ctx.cursor,
      showConfirmBar: _ctx.showConfirmBar,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      holdKeyboard: _ctx.holdKeyboard,
      maxlength: _ctx.maxlength,
      "confirm-type": _ctx.confirmType,
      ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
      onFocus: _ctx.onFocus,
      onBlur: _ctx.onBlur,
      onLinechange: _ctx.onLinechange,
      onInput: _ctx.onInput,
      onConfirm: _ctx.onConfirm,
      onKeyboardheightchange: _ctx.onKeyboardheightchange
    }), null, 44 /* STYLE, PROPS, NEED_HYDRATION */, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent", "onFocus", "onBlur", "onLinechange", "onInput", "onConfirm", "onKeyboardheightchange"]),
    isTrue(_ctx.count)
      ? _cE("text", _uM({
          key: 0,
          class: "up-textarea__count",
          style: _nS(_uM({
                'background-color': _ctx.disabled ? 'transparent' : '#fff',
            }))
        }), _tD(_ctx.innerValue.length) + "/" + _tD(_ctx.maxlength), 5 /* TEXT, STYLE */)
      : _cC("v-if", true)
  ], 6 /* CLASS, STYLE */)
}
export type UpTextareaComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTextareaUpTextareaStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-textarea", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["backgroundColor", "#ffffff"], ["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["paddingTop", 9], ["paddingRight", 9], ["paddingBottom", 9], ["paddingLeft", 9]]))], ["up-textarea--radius", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["up-textarea--no-radius", _pS(_uM([["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0], ["borderBottomLeftRadius", 0]]))], ["up-textarea--disabled", _pS(_uM([["backgroundColor", "#f5f7fa"]]))], ["up-textarea__field", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["fontSize", 15], ["color", "#606266"], ["width", "100%"]]))], ["up-textarea__count", _pS(_uM([["position", "absolute"], ["right", 5], ["bottom", 2], ["fontSize", 12], ["color", "#909193"], ["backgroundColor", "#ffffff"], ["paddingTop", 1], ["paddingRight", 4], ["paddingBottom", 1], ["paddingLeft", 4]]))]])]
