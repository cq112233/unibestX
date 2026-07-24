import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_cell from '@/uni_modules/uview-ultra/components/up-cell/up-cell.uvue'
import _easycom_up_cell_group from '@/uni_modules/uview-ultra/components/up-cell-group/up-cell-group.uvue'
import { computed, ref, watch, onMounted } from 'vue'
	import { addUnit, getParentFunc } from '../../libs/function/index.uts';
	import defProps from './dropdown-item.uts'
	import { UPDropdownMenu } from '../up-dropdown/types';
	import { commonProps, useUltraUI } from '../../libs/composable/useUltraUI'
import config from '../../libs/config/config'
	
const __sfc__ = defineComponent({
  __name: 'up-dropdown-item',

		name: 'up-dropdown-item',
		options: {
            styleIsolation: 'shared',
        }
	,
  props: {

		// 当前选中项的value值
		modelValue: {
			type: [Number, String, Array],
			default: defProps.getAny('dropdownItem.value')
		},








		// 菜单项标题
		title: {
			type: [String, Number],
			default: defProps.getString('dropdownItem.title')
		},
		// 选项数据，如果传入了默认slot，此参数无效
		options: {
			type: Array as PropType<Array<UTSJSONObject>>,
			default: () => defProps.getArray<UTSJSONObject>('dropdownItem.options')
		},
		// 是否禁用此菜单项
		disabled: {
			type: Boolean,
			default: defProps.getBoolean('dropdownItem.disabled')
		},
		// 下拉弹窗的高度
		height: {
			type: [Number, String],
			default: defProps.getNumber('dropdownItem.height')
		},
		// 点击遮罩是否可以收起弹窗
		closeOnClickOverlay: {
			type: Boolean,
			default: defProps.getBoolean('dropdownItem.closeOnClickOverlay')
		}
	},
  emits: ['update:modelValue', 'change'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { parent, parentData, getParentData } = useUltraUI({
		activeColor: config.getString('color.up-primary'),
		inactiveColor: '#606266'
	})
	const instance = getCurrentInstance()!.proxy!
	
	
	
	// 定义 props
	const props = __props;
	
	// 定义 emit
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	// 定义响应式数据
	const active = ref(false); // 当前项是否处于展开状态
	const activeColor = ref(config.getString('color.up-primary') as string); // 激活时左边文字和右边对勾图标的颜色
	const inactiveColor = ref('#606266'); // 未激活时左边文字和右边对勾图标的颜色
	
	// 监听props是否发生了变化，有些值需要传递给父组件up-dropdown，无法双向绑定
	const propsChange = computed(() => {
		return `${props.title}-${props.disabled}`;
	});
	
	// 监听 active 变化
	watch(active, (val: boolean) => {
		// console.log('changed', val)
	});
	
	// 监听 propsChange 变化
	watch(propsChange, () => {
		// 当值变化时，通知父组件重新初始化，让父组件执行每个子组件的init()方法
		// 将所有子组件数据重新整理一遍
		if (parent.value != null) parent.value.$callMethod('init');
	});
	
	function init() {
		// 获取父组件up-dropdown
		getParentData('up-dropdown', instance, false)
		let parentRef = parent.value;
		if (parentRef != null) {
			// 将子组件的激活颜色配置为父组件设置的激活和未激活时的颜色
			if (parentData.value['activeColor'] != null) {
				activeColor.value = parentData.value['activeColor'] as string;
			}
			if (parentData.value['inactiveColor'] != null) {
				inactiveColor.value = parentData.value['inactiveColor'] as string;
			}
			let childrenList = parentRef.$callMethod('getChildren') as ComponentPublicInstance[] | null;
			if (childrenList == null) {
				childrenList = parentRef.$data['children'] as ComponentPublicInstance[] | null;
			}
			if (childrenList != null && childrenList.length == 1) active.value = true;
			// 父组件无法监听children的变化，故将子组件的title，传入父组件的menuList数组中
			parentRef.$callMethod('addMenuListItem', {
				title: props.title.toString(),
				disabled: props.disabled
			} as UPDropdownMenu)
		}
	}
	
	// cell被点击
	function cellClick(value?: any) {
		// 修改通过v-model绑定的值




        emit('update:modelValue', value)

		// 通知父组件(up-dropdown)收起菜单
		if (parent.value != null) parent.value.$callMethod('close')
		// 发出事件，抛出当前勾选项的value
		emit('change', value)
	}
	
	const setActive = (val: boolean) => {
		active.value = val
	}
	
	function getItemTextStyle(item: UTSJSONObject): UTSJSONObject {
		const style = {} as UTSJSONObject
		const isSelected = (props.modelValue).toString() == item['value'].toString()
		if (isSelected) {
			if (activeColor.value != '#2979ff') {
				style['color'] = activeColor.value
			}
		} else {
			style['color'] = inactiveColor.value
		}
		return style
	}
	
	// 在组件挂载时初始化
	onMounted(() => {
		init()
	});
	
	// 暴露方法给父组件
	__expose({
		init,
		active,
		setActive
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_cell = resolveEasyComponent("up-cell",_easycom_up_cell)
const _component_up_cell_group = resolveEasyComponent("up-cell-group",_easycom_up_cell_group)

  return isTrue(active.value)
    ? _cE("view", _uM({
        key: 0,
        class: "up-dropdown-item",
        onTouchmove: withModifiers(() => {}, ["stop","prevent"]),
        onClick: withModifiers(() => {}, ["stop","prevent"])
      }), [
        isTrue(_ctx.$slots['default'] == null && _ctx.$slots['$default'] == null)
          ? _cE("view", _uM({
              key: 0,
              class: "up-dropdown-item__scroll",
              "scroll-y": "false",
              style: _nS(_uM({
				height: _ctx.$up.addUnit(props.height)
			}))
            }), [
              _cE("view", _uM({ class: "up-dropdown-item__options" }), [
                _cV(_component_up_cell_group, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cE(Fragment, null, RenderHelpers.renderList(props.options, (item, index, __index, _cached): any => {
                      return _cV(_component_up_cell, _uM({
                        onClick: () => {cellClick(item['value'])},
                        arrow: false,
                        key: index
                      }), _uM({
                        title: withSlotCtx((): any[] => [
                          _cE("text", _uM({
                            class: _nC(["up-dropdown-item__text", _uM({
									'up-dropdown-item__text--active': (props.modelValue).toString() == item['value'].toString() && activeColor.value == '#2979ff'
								})]),
                            style: _nS([getItemTextStyle(item)])
                          }), _tD(item['label'].toString()), 7 /* TEXT, CLASS, STYLE */)
                        ]),
                        default: withSlotCtx((): any[] => [
                          (props.modelValue).toString() == item['value'].toString()
                            ? _cV(_component_up_icon, _uM({
                                key: 0,
                                name: "checkbox-mark",
                                color: activeColor.value == '#2979ff' ? 'primary' : activeColor.value,
                                size: "32"
                              }), null, 8 /* PROPS */, ["color"])
                            : _cC("v-if", true)
                        ]),
                        _: 2 /* DYNAMIC */
                      }), 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
                    }), 128 /* KEYED_FRAGMENT */)
                  ]),
                  _: 1 /* STABLE */
                }))
              ])
            ], 4 /* STYLE */)
          : renderSlot(_ctx.$slots, "default", _uM({ key: 1 }))
      ], 32 /* NEED_HYDRATION */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpDropdownItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItemStyles = [_uM([["up-dropdown-item__scroll", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#ffffff"]]))], ["up-dropdown-item__text", _pS(_uM([["fontSize", 15]]))], ["up-dropdown-item__text--active", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))]])]
