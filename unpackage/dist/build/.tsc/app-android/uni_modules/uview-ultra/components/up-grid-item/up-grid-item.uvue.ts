import type { PropType } from 'vue'
	import { ref, nextTick, computed, onMounted, onUnmounted, getCurrentInstance } from 'vue'
	import { mpSharedMpOptions } from '../../libs/composable/useMp'
	import { addStyle, deepMerge } from '../../libs/function/index'
	import defProps from './gridItem.uts'
	import { commonProps, useUltraUI } from '../../libs/composable/useUltraUI'
	
const __sfc__ = defineComponent({
  __name: 'up-grid-item',

		name: "up-grid-item"
	,
  props: {
		name: {
			type: [String, Number],
			default: defProps.getArray('grid-item.name')
		},
		bgColor: {
			type: String,
			default: defProps.getString('grid-item.bgColor')
		}
	},
  emits: ["click"],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { parent, parentData, getParentData } = useUltraUI({
		col: 0, // 父组件划分的宫格数
		border: true, // 是否显示边框，根据父组件决定
		width: 0,
	})
	const instance = getCurrentInstance()!.proxy!
	
	// options
	
	
	// props
	const props = __props
	
	// 定义事件
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	const width = ref<string>('');
	const classes = ref<String | String[]>(''); // 类名集合，用于判断是否显示右边和下边框
	
	// 计算属性：父组件列数
	const parentCol = computed<number>(() => {
		if (parentData.value['col'] != null) {
			return parseInt(parentData.value['col'].toString());
		}
		return 0;
	})
	
	// 计算属性：项目样式
	const itemStyle = computed(() => {
		const style = {
			background: props.bgColor
		};
		style['width'] = width.value;
		return deepMerge(style, addStyle({}));
	})
	
	// 点击处理
	const clickHandler = () => {
		let name = props.name;
		// 如果没有设置name属性，历遍父组件的children数组，判断当前的元素是否和本实例this相等，找出当前组件的索引
		let children = parent.value?.$callMethod('getChildren') as ComponentPublicInstance[] | null;
		if (children == null) {
			children = parent.value?.$data['children'] as ComponentPublicInstance[] | null;
		}
		const finalChildren = children != null ? children : ([] as ComponentPublicInstance[]);
		if(props.name === null) {
			// @ts-ignore
			name = finalChildren.findIndex((child: ComponentPublicInstance) => child === instance);
		}
		// 调用父组件方法，发出事件
		// @ts-ignore
		parent.value!.$callMethod('childClick', name);
		emit('click', name);
	}
	
	// 获取项目宽度
	const getItemWidth = (): void => {
		// 如果是nvue，不能使用百分比，只能使用固定宽度
		let widthVal = '';
		if(parent.value != null) {
			// 获取父组件宽度后，除以栅格数，得出每个item的宽度
			// const parentWidth = await this.getParentWidth()
			// @ts-ignore
			// let parentProps = parent.value.$callMethod('getProps') as UTSJSONObject
			let parentRefs = parent.value.$callMethod('getRefs') as UTSJSONObject
			// @ts-ignore
			const parentWidth = parseFloat(parentRefs['width'].toString());
			// @ts-ignore
			widthVal = (parentWidth / parseInt(parentData.value['col'].toString())).toString() + 'px';
		}
		width.value = widthVal;
	};
	
	// 更新边框类
	const gridItemClasses = () => {
		if(parentData.value['border'] as boolean) {
			let classList = [] as String[];
			if (parent.value != null) {
				// @ts-ignore
				let childrenPat = parent.value.$callMethod('getChildren') as ComponentPublicInstance[];
				childrenPat.map((
					child: ComponentPublicInstance, index: number) =>{
					// @ts-ignore
					let parentCol = parseInt(parentData.value['col'].toString())
					// @ts-ignore
					if(instance === child && parentCol > 0) {
						// @ts-ignore
						const len = childrenPat.length;
						// 贴近右边屏幕边沿的child，并且最后一个（比如只有横向2个的时候），无需右边框
						if((index + 1) % parentCol != 0 && index + 1 != len) {
							classList.push('up-border-right');
						}
						// 总的宫格数量对列数取余的值
						// 如果取余后，值为0，则意味着要将最后一排的宫格，都不需要下边框
						const lessNum = len % parentCol == 0 ? parentCol : len % parentCol;
						// 最下面的一排child，无需下边框
						if(index < len - lessNum) {
							classList.push('up-border-bottom');
						}
					} else {
						// console.log('parentCol is 0');
					}
				});
			}
			// 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



			classes.value = classList;
		}
	};
	
	// 初始化
	const init = () => {
		// 用于在父组件up-grid的children中被添加入子组件时，
		// 重新计算item的边框
		// uni.$on('$upGridItem', () => {
		// 	gridItemClasses();
		// });
		
		// 父组件的实例
		// @ts-ignore
		getParentData('up-grid', instance, false);
		
		// 获取元素该有的长度，nvue下要延时才准确
		nextTick(() => {
			getItemWidth();
		});
		
		// 发出事件，通知所有的grid-item都重新计算自己的边框
		uni.$emit('$upGridItem');
		gridItemClasses();
	};
	
	onMounted(() => {
		init();
	});
	
	onUnmounted(() => {
		// 移除事件监听，释放性能
		uni.$off('$upGridItem');
	});
	
	__expose({
		gridItemClasses
	});

return (): any | null => {

  return parentCol.value > 0
    ? _cE("view", _uM({
        key: 0,
        class: _nC(["up-grid-item", classes.value]),
        "hover-class": "up-grid-item--hover-class",
        "hover-stay-time": 200,
        onClick: clickHandler,
        style: _nS([itemStyle.value])
      }), [
        renderSlot(_ctx.$slots, "default")
      ], 6 /* CLASS, STYLE */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpGridItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpGridItemUpGridItemStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-grid-item", _pS(_uM([["alignItems", "center"], ["justifyContent", "center"], ["position", "relative"], ["flexDirection", "column"], ["boxSizing", "border-box"], ["display", "flex"]]))], ["up-grid-item--hover-class", _pS(_uM([["opacity", 0.5]]))]])]
