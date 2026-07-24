import { classNames } from '@/uni_modules/lime-shared/classNames'
	import { stringifyStyle } from '@/uni_modules/lime-shared/stringifyStyle'
	import { addUnit } from '@/uni_modules/lime-shared/addUnit';
	import type { IconProps } from './type';
	import { useIcon, loadingFonts } from '@/uni_modules/lime-icon';
	
	
const __sfc__ = defineComponent({
  __name: 'l-icon',

		styleIsolation: 'app-shared',
		inheritAttrs: true,
		externalClasses: ['l-class'],
		options: {

			virtualHost: true,

		}
	,
  __props: IconProps,
  props: {
    name: { type: String, required: true, default: '' },
    color: { type: String, required: false },
    size: { type: [String, Number], required: false },
    prefix: { type: String, required: true, default: 'l' },
    inherit: { type: Boolean, required: true, default: true },
    web: { type: Boolean, required: true, default: false },
    lClass: { type: [String, UTSJSONObject], required: false },
    lStyle: { type: [String, UTSJSONObject], required: false }
  },
  emits: ['click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	/**
	 * LimeIcon 图标
	 * @description ICON集
	 * <br> 插件类型：LIconComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=14057
	 * @property {String} name 图标名称
	 * @property {String} color 颜色
	 * @property {String} size 尺寸
	 * @property {String} prefix 字体图标前缀  
	 * @property {Boolean} inherit 是否继承颜色 
	 * @property {Boolean} web 原生 app(nvue,uvue) 是否使用web渲染  
	 * @event {Function} click 点击事件
	 */
	
	
	const props = __props;
	
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	// 使用 useIcon hook 获取图标信息
	const { type, fontIcon, imageUrl, iconifyUrl, parsed } = useIcon(
		computed((): string => props.name), 
		{ prefix: props.prefix }
	);
	
	// 字体是否正载加载中
	const fontLoading = computed(()=> {
		if(type.value == 'font') {
			if(fontIcon.value?.fontFamily == 'l') return false
			// 在正在加载的字体列表中查找匹配的fontFamily
			return loadingFonts.value.some(item => item.fontFamily == fontIcon.value?.fontFamily)
		}
		return false
	})
	
	const classes = computed(()=> {
		const prefix = props.prefix ?? 'l'
		return classNames( type.value == 'font' ? prefix : null, props.lClass)
	})
	
	// 计算图标样式
	const styles = computed(()=> {
		const fontSize = addUnit(props.size);
		const isFont = type.value == 'font'
		return stringifyStyle({
			fontFamily: isFont ? fontIcon.value?.fontFamily : false,
			fontSize:   isFont ? fontSize : false,
			color:   	isFont ? props.color : false,
			width:    	!isFont ? fontSize: false,
			height:   	!isFont ? fontSize: false,
		}, props.lStyle)
	})
	
	// 处理点击事件
	const handleClick = () => {
		emit('click');
	};

return (): any | null => {

const _component_l_svg = resolveComponent("l-svg")

  return isTrue(unref(type) == 'font' && !unref(fontLoading))
    ? _cE("text", _uM({
        key: 0,
        class: _nC(["l-icon l-icon--font l-class", unref(classes)]),
        style: _nS(unref(styles)),
        onClick: handleClick
      }), _tD(unref(fontIcon)?.char), 7 /* TEXT, CLASS, STYLE */)
    : isTrue(unref(type) == 'image' && (!unref(parsed).isSvg || _ctx.color == null))
      ? _cE("image", _uM({
          key: 1,
          class: _nC(["l-icon l-icon--image l-class", unref(classes)]),
          style: _nS(unref(styles)),
          src: unref(imageUrl),
          onClick: handleClick
        }), null, 14 /* CLASS, STYLE, PROPS */, ["src"])
      : isTrue(unref(iconifyUrl) != null || (unref(type) == 'image' && unref(parsed).isSvg && _ctx.color != null))
        ? _cV(_component_l_svg, _uM({
            key: 2,
            class: _nC(["l-icon l-icon--image l-class", unref(classes)]),
            style: _nS(unref(styles)),
            src: unref(iconifyUrl) ?? unref(imageUrl),
            color: _ctx.color,
            inherit: _ctx.inherit,
            web: _ctx.web,
            onClick: handleClick
          }), null, 8 /* PROPS */, ["class", "style", "src", "color", "inherit", "web"])
        : _cC("v-if", true)
}
}

})
export default __sfc__
export type LIconComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesLimeIconComponentsLIconLIconStyles = [_uM([["l-icon--font", _pS(_uM([["fontFamily", "l"], ["textAlign", "center"]]))], ["l-icon--image", _pS(_uM([["width", "var(--l-icon-size, 16px)"], ["height", "var(--l-icon-size, 16px)"]]))], ["@FONT-FACE", _uM([["0", _uM([["fontFamily", "l"], ["src", "url(\"/uni_modules/lime-icon/static/app/t4.ttf\")"]])]])]])]
