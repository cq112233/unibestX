import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-float-button',
name: 'up-float-button',
  props: {
    backgroundColor: {
        type: String,
        default: '#2979ff'
    },
    color: {
        type: String,
        default: '#fff'
    },
    width: {
        type: String,
        default: '50px'
    },
    height: {
        type: String,
        default: '50px'
    },
    borderColor: {
        type: String,
        default: ''
    },
    right: {
        type: [String, Number],
        default: '30px'
    },
    top: {
        type: [String, Number],
        default: ''
    },
    bottom: {
        type: [String, Number],
        default: ''
    },
    isMenu: {
        type: Boolean,
        default: false
    },
    list: {
        type: Array as PropType<UTSJSONObject[]>,
        default: () => [] as UTSJSONObject[]
    }
},
  emits: ['click', 'item-click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const showList = ref<boolean>(false)

function stringValue(value: any | null): string {
    return value == null ? '' : value.toString()
}

function copyObject(item: UTSJSONObject): UTSJSONObject {
    const copied = {} as UTSJSONObject
    const keys = UTSJSONObject.keys(item)
    for (let i = 0; i < keys.length; i++) {
        copied[keys[i]] = item[keys[i]]
    }
    return copied
}

function getItemBackgroundColor(item: UTSJSONObject): string {
    const value = stringValue(item['backgroundColor'])
    return value == '' ? props.backgroundColor : value
}

function getItemColor(item: UTSJSONObject): string {
    const value = stringValue(item['color'])
    return value == '' ? props.color : value
}

function getItemBorderColor(item: UTSJSONObject): string {
    const value = stringValue(item['borderColor'])
    return value == '' ? props.borderColor : value
}

function getItemName(item: UTSJSONObject): string {
    return stringValue(item['name'])
}

function getItemStyle(item: UTSJSONObject): UTSJSONObject {
    const style = {} as UTSJSONObject
    style['backgroundColor'] = getItemBackgroundColor(item)
    style['display'] = 'flex'
    style['flexDirection'] = 'row'
    style['justifyContent'] = 'center'
    style['alignItems'] = 'center'
    style['width'] = props.width
    style['height'] = props.height
    style['borderRadius'] = '50%'
    style['borderColor'] = getItemBorderColor(item)
    return style
}

function clickHandler(e: UniPointerEvent): void {
    if (props.isMenu) {
        showList.value = !showList.value
    }
    emit('click', e)
}

function itemClick(item: UTSJSONObject, index: number): void {
    const payload = copyObject(item)
    payload['index'] = index
    emit('item-click', payload)
}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: "weapp-tw-border up-float-button",
    style: _nS(_uM({
            position: 'fixed',
            top: _ctx.top,
            bottom: _ctx.bottom,
            right: _ctx.right,
        }))
  }), [
    _cE("view", _uM({
      class: "weapp-tw-border up-float-button__main",
      onClick: clickHandler,
      style: _nS(_uM({
                backgroundColor: _ctx.backgroundColor,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: _ctx.width,
                height: _ctx.height,
                borderRadius: '50%',
                borderColor: _ctx.borderColor,
                overflow: 'visible',
            }))
    }), [
      renderSlot(_ctx.$slots, "default", _uM({ showList: showList.value }), (): any[] => [
        _cV(_component_up_icon, _uM({
          class: _nC(["wtu-1bvspap-0", _uM({ 'show-list': showList.value })]),
          name: "plus",
          color: _ctx.color
        }), null, 8 /* PROPS */, ["class", "color"])
      ])
    ], 4 /* STYLE */),
    isTrue(showList.value)
      ? _cE("view", _uM({
          key: 0,
          class: "weapp-tw-border up-float-button__list",
          style: _nS(_uM({
                bottom: _ctx.height
            }))
        }), [
          renderSlot(_ctx.$slots, "list", {}, (): any[] => [
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
              return _cE("view", _uM({
                key: index,
                class: "weapp-tw-border up-float-button__item",
                style: _nS(getItemStyle(item)),
                onClick: () => {itemClick(item, index)}
              }), [
                _cV(_component_up_icon, _uM({
                  name: getItemName(item),
                  color: getItemColor(item)
                }), null, 8 /* PROPS */, ["name", "color"])
              ], 12 /* STYLE, PROPS */, ["onClick"])
            }), 128 /* KEYED_FRAGMENT */)
          ])
        ], 4 /* STYLE */)
      : _cC("v-if", true)
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpFloatButtonComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButtonStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-float-button", _pS(_uM([["zIndex", 999]]))], ["up-float-button__list", _pS(_uM([["position", "absolute"], ["bottom", 0], ["left", 0], ["display", "flex"], ["flexDirection", "column"], ["zIndex", 999], ["alignItems", "center"]]))], ["show-list", _pS(_uM([["transform", "rotate(45deg)"]]))], ["wtu-1bvspap-0", _pS(_uM([["cursor", "pointer"]]))]])]
