import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_cell from '@/uni_modules/uview-ultra/components/up-cell/up-cell.uvue'
import _easycom_up_cell_group from '@/uni_modules/uview-ultra/components/up-cell-group/up-cell-group.uvue'
import type { Ref, PropType } from 'vue'
	import { computed, ref, watch, onMounted, inject } from 'vue'
	import { addUnit } from '../../libs/function/index.uts';
	import defProps from './dropdown-item.uts'
	import { UPDropdownMenu } from '../up-dropdown/types';
	
	
const __sfc__ = defineComponent({
  __name: 'up-dropdown-item',
name: 'up-dropdown-item',
		options: {
            styleIsolation: 'shared',
        },
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
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	
	
	// 定义 props
	const props = __props;
	
	// 定义 emit
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	const parentDropdown = inject<UTSJSONObject | null>('upDropdown', null);
	const itemIndex = ref<number>(-1);

	const parentDropdownProps = computed((): UTSJSONObject | null => {
		if (parentDropdown == null) return null
		const p = (parentDropdown as UTSJSONObject)['props']
		return p != null ? (p as UTSJSONObject) : null
	})
	
	const isActive = computed<boolean>(() => {
		if (parentDropdown != null) {
			const activeRef = (parentDropdown as UTSJSONObject)['active'] as Ref<boolean> | null
			const currentRef = (parentDropdown as UTSJSONObject)['current'] as Ref<number> | null
			if (activeRef != null && currentRef != null) {
				return activeRef.value == true && currentRef.value == itemIndex.value
			}
		}
		return false;
	});
	
	const activeColor = computed<string>(() => {
		if (parentDropdownProps.value != null && (parentDropdownProps.value!['activeColor'] ?? '') != '') {
			return parentDropdownProps.value!['activeColor'] as string;
		}
		return '#2979ff';
	});
	
	const inactiveColor = computed<string>(() => {
		if (parentDropdownProps.value != null && (parentDropdownProps.value!['inactiveColor'] ?? '') != '') {
			return parentDropdownProps.value!['inactiveColor'] as string;
		}
		return '#606266';
	});

	const scrollHeightStyle = computed((): UTSJSONObject => {
		return { height: addUnit(props.height) } as UTSJSONObject
	})
	
	// cell被点击
	function cellClick(value?: any) {
        emit('update:modelValue', value)
		emit('change', value)
		if (parentDropdown != null) {
			const closeFn = (parentDropdown as UTSJSONObject)['close'] as (() => void) | null
			if (closeFn != null) {
				closeFn()
			}
		}
	}
	
	function getItemTextStyle(item: UTSJSONObject): UTSJSONObject {
		const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.uvue", 130, 9), } as UTSJSONObject
		const isSelected = (props.modelValue).toString() == item['value'].toString()
		if (isSelected) {
			style['color'] = activeColor.value
		} else {
			style['color'] = inactiveColor.value
		}
		return style
	}
	
	// 在组件挂载时注册
	onMounted(() => {
		if (parentDropdown != null) {
			const registerFn = (parentDropdown as UTSJSONObject)['registerItem'] as ((item: UPDropdownMenu) => number) | null
			if (registerFn != null) {
				itemIndex.value = registerFn({
					title: props.title.toString(),
					disabled: props.disabled
				} as UPDropdownMenu);
			}
		}
	});
	
	watch((): any => props.title, (newTitle: any) => {
		if (parentDropdown != null && itemIndex.value >= 0) {
			const updateFn = (parentDropdown as UTSJSONObject)['updateItemTitle'] as ((index: number, title: string) => void) | null
			if (updateFn != null) {
				updateFn(itemIndex.value, newTitle.toString());
			}
		}
	});

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_cell = resolveEasyComponent("up-cell",_easycom_up_cell)
const _component_up_cell_group = resolveEasyComponent("up-cell-group",_easycom_up_cell_group)

  return isTrue(isActive.value)
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
              style: _nS(scrollHeightStyle.value)
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
                            style: _nS(getItemTextStyle(item))
                          }), _tD(item['label'].toString()), 7 /* TEXT, CLASS, STYLE */)
                        ]),
                        default: withSlotCtx((): any[] => [
                          (props.modelValue).toString() == item['value'].toString()
                            ? _cV(_component_up_icon, _uM({
                                key: 0,
                                name: "checkbox-mark",
                                color: activeColor.value == '#2979ff' ? 'primary' : activeColor.value,
                                size: "18"
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
