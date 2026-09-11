import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import _easycom_up_status_bar from '@/uni_modules/uview-ultra/components/up-status-bar/up-status-bar.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_safe_bottom from '@/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
import { computed, ref, shallowRef, watch } from 'vue';
import { addStyle, addUnit, deepMerge } from '../../libs/function/index';


const __sfc__ = defineComponent({
  __name: 'up-popup',
name: 'up-popup',
  props: {
  show: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: 'bottom'
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  closeable: {
    type: Boolean,
    default: false
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [String, Number],
    default: 10075
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: false
  },
  closeIconPos: {
    type: String,
    default: 'top-right'
  },
  round: {
    type: [Boolean, String, Number],
    default: 0
  },
  zoom: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: ''
  },
  overlayOpacity: {
    type: [Number, String],
    default: 0.5
  },
  pageInline: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => ({})
  },
  // 是否允许手势关闭
  closeOnSlideDown: {
    type: Boolean,
    default: false
  },
  // 滑动关闭阈值 (px)
  slideDownThreshold: {
    type: [Number, String],
    default: 40
  },
  // 弹窗内部滚动容器 ID
  scrollId: {
    type: String,
    default: ''
  },
  // 是否显示拖拽手柄条
  showDragBar: {
    type: Boolean,
    default: false
  },
  dragBarClass: {
    type: String,
    default: ''
  },
  dragWrapClass: {
    type: String,
    default: ''
  }
},
  emits: ["update:show", "close", "open", "click"],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props;

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const position = computed<string>(() => {
  if (props.mode == 'center') {
    return props.zoom ? 'fade-zoom' : 'fade';
  }
  if (props.mode == 'left') {
    return 'slide-left';
  }
  if (props.mode == 'right') {
    return 'slide-right';
  }
  if (props.mode == 'bottom') {
    return 'slide-up';
  }
  if (props.mode == 'top') {
    return 'slide-down';
  }
  return '';
});

const transitionStyle = computed<UTSJSONObject>(() => {
  const style = {
    display: 'flex'
  } as UTSJSONObject;
  if (!props.pageInline) {
    style['zIndex'] = parseInt(props.zIndex.toString()) + 1;
    style['position'] = 'fixed';
  }
  style[props.mode] = 0;
  if (props.mode == 'left' || props.mode == 'right') {
    return deepMerge(style, {
      bottom: 0,
      top: 0
    }) as UTSJSONObject;
  }
  else if (props.mode == 'top' || props.mode == 'bottom') {
    return deepMerge(style, {
      left: 0,
      right: 0
    }) as UTSJSONObject;
  }
  else if (props.mode == 'center') {
    return deepMerge(style, {
      alignItems: 'center',
      'justify-content': 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }) as UTSJSONObject;
  }
  return style;
});

const dragTransform = ref('');
const dragTransitionDuration = ref('');

const contentStyle = computed<UTSJSONObject>(() => {
  const style = {} as UTSJSONObject;
  if (props.mode != 'center') {
    style['flex'] = 1;
  }
  if (props.bgColor != '') {
    style['backgroundColor'] = props.bgColor;
  }
  if (props.round.toString() != '' && props.round != false) {
    const value = addUnit(props.round);
    if (props.mode == 'top') {
      style['borderBottomLeftRadius'] = value;
      style['borderBottomRightRadius'] = value;
    }
    else if (props.mode == 'bottom') {
      style['borderTopLeftRadius'] = value;
      style['borderTopRightRadius'] = value;
    }
    else if (props.mode == 'center') {
      style['borderRadius'] = value;
    }
  }








  return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject;
});

const overlayDuration = computed<number>(() => {
  return parseInt(props.duration.toString()) + 50;
});

// DOM 元素引用
const contentRef = shallowRef<UniElement | null>(null);

// 拖拽关闭状态
let isAnimation = false;
let halfScreenX = 0;
let halfScreenY = 0;
let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;
let lastDragDirectionY = 0;
let lastDragDirectionX = 0;
let halfOffsetY = 0;
let halfOffsetX = 0;
let scrollEl: UniElement | null = null;
let contentTouchStartX = 0;
let contentTouchStartY = 0;
let isContentDragging = false;

// 顶部、底部、左侧、右侧支持手势关闭，居中不支持
const canDrag = computed<boolean>(() => {
  if (!props.closeOnSlideDown) {
    return false;
  }
  return props.mode == 'bottom' || props.mode == 'top' || props.mode == 'left' || props.mode == 'right';
});

function lockScrollAtTop(): void {
  if (scrollEl == null) {
    return;
  }
  if (scrollEl!.scrollTop > 0) {
    scrollEl!.scrollTop = 0;
  }
}

function noop() {}

function overlayClick(): void {
  if (props.closeOnClickOverlay) {
    emit('update:show', false);
    emit('close');
  }
}

function close(): void {
  emit('update:show', false);
  emit('close');
}

function setContentTransform(transform: string, durationMs: number = -1): void {
  const el = contentRef.value;
  if (el != null && el.style != null) {
    if (durationMs >= 0) {
      el.style.setProperty('transition-duration', `${durationMs}ms`);
    }
    el.style.setProperty('transform', transform);
  }






}

function setContentTransitionDuration(durationMs: number): void {
  const el = contentRef.value;
  if (el != null && el.style != null) {
    el.style.setProperty('transition-duration', `${durationMs}ms`);
  }



}

function resetDragState(startY: number, startX: number = 0): void {
  halfScreenY = startY;
  currentY = startY;
  previousY = startY;
  halfScreenX = startX;
  currentX = startX;
  previousX = startX;
  lastDragDirectionY = 0;
  lastDragDirectionX = 0;
  halfOffsetY = 0;
  halfOffsetX = 0;
  setContentTransitionDuration(0);
}

function resetContentTransform(): void {
  setContentTransform('none', 0);




  halfScreenX = 0;
  halfScreenY = 0;
  halfOffsetY = 0;
  halfOffsetX = 0;
  lastDragDirectionY = 0;
  lastDragDirectionX = 0;
  isContentDragging = false;
  isAnimation = false;
}

function onDragstart(e: UniTouchEvent): void {
  if (e.touches.length == 0) {
    return;
  }
  const startY = e.touches[0].screenY;
  const startX = e.touches[0].screenX;
  resetDragState(startY, startX);
  isContentDragging = false;
}

function onDragmove(e: UniTouchEvent): void {
  if (isAnimation || !canDrag.value || e.touches.length == 0) {
    return;
  }
  const p = e.touches[0];
  previousY = currentY;
  currentY = p.screenY;
  previousX = currentX;
  currentX = p.screenX;

  const moveDeltaY = currentY - previousY;
  const moveDeltaX = currentX - previousX;
  if (Math.abs(moveDeltaY) >= 2) {
    lastDragDirectionY = moveDeltaY > 0 ? 1 : -1;
  }
  if (Math.abs(moveDeltaX) >= 2) {
    lastDragDirectionX = moveDeltaX > 0 ? 1 : -1;
  }

  if (halfScreenY == 0) {
    halfScreenY = p.screenY;
  }
  if (halfScreenX == 0) {
    halfScreenX = p.screenX;
  }

  const offsetY = p.screenY - halfScreenY;
  const offsetX = p.screenX - halfScreenX;

  if (props.mode == 'bottom') {
    // 底部：向下拉动
    if (offsetY > 0) {
      lockScrollAtTop();
      setContentTransform(`translateY(${offsetY}px)`);
      halfOffsetY = offsetY;
    }
  }
  else if (props.mode == 'top') {
    // 顶部：向上推动
    if (offsetY < 0) {
      setContentTransform(`translateY(${offsetY}px)`);
      halfOffsetY = offsetY;
    }
  }
  else if (props.mode == 'left') {
    // 左侧：向左滑动
    if (offsetX < 0) {
      setContentTransform(`translateX(${offsetX}px)`);
      halfOffsetX = offsetX;
    }
  }
  else if (props.mode == 'right') {
    // 右侧：向右滑动
    if (offsetX > 0) {
      setContentTransform(`translateX(${offsetX}px)`);
      halfOffsetX = offsetX;
    }
  }




}

function resumedPopup(): void {
  const durationMs = parseInt(props.duration.toString());
  setContentTransform('none', durationMs);
  halfScreenX = 0;
  halfScreenY = 0;
  halfOffsetY = 0;
  halfOffsetX = 0;
  lastDragDirectionY = 0;
  lastDragDirectionX = 0;
  isContentDragging = false;
  isAnimation = false;
}

function onDragend(): void {
  const durationMs = parseInt(props.duration.toString());
  setContentTransitionDuration(durationMs);
  if (!canDrag.value) {
    return;
  }
  halfScreenY = 0;
  halfScreenX = 0;
  if (isAnimation) {
    return;
  }
  const threshold = Math.max(0, parseInt(props.slideDownThreshold.toString()));

  let shouldClose = false;
  if (props.mode == 'bottom') {
    shouldClose = halfOffsetY >= threshold && lastDragDirectionY > 0;
  }
  else if (props.mode == 'top') {
    shouldClose = Math.abs(halfOffsetY) >= threshold && lastDragDirectionY < 0;
  }
  else if (props.mode == 'left') {
    shouldClose = Math.abs(halfOffsetX) >= threshold && lastDragDirectionX < 0;
  }
  else if (props.mode == 'right') {
    shouldClose = halfOffsetX >= threshold && lastDragDirectionX > 0;
  }

  if (shouldClose) {
    isContentDragging = false;
    if (props.mode == 'bottom') {
      setContentTransform('translateY(100%)');
    }
    else if (props.mode == 'top') {
      setContentTransform('translateY(-100%)');
    }
    else if (props.mode == 'left') {
      setContentTransform('translateX(-100%)');
    }
    else if (props.mode == 'right') {
      setContentTransform('translateX(100%)');
    }
    close();
    setTimeout(() => {
      resetContentTransform();
    }, durationMs);
  }
  else {
    resumedPopup();
  }
}

function getFirstScrollEl(el: UniElement | null): UniElement | null {




  if (el == null) {
    return null;
  }
  const scrollTags = ['SCROLL-VIEW', 'LIST-VIEW', 'WATERFLOW'];
  const rawTag = el.tagName;
  if (rawTag != null) {
    const tagName = rawTag.toUpperCase();
    if (scrollTags.includes(tagName)) {
      return el;
    }
  }
  const children = el.children;
  if (children != null) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const target = getFirstScrollEl(child);
      if (target != null) {
        return target;
      }
    }
  }
  return null;

}

function onContentstart(e: UniTouchEvent): void {
  if (!props.closeOnSlideDown || e.touches.length == 0 || !canDrag.value) {
    return;
  }
  if (props.scrollId != '') {

    scrollEl = uni.getElementById(props.scrollId);

  }
  else {
    scrollEl = getFirstScrollEl(contentRef.value);
  }
  contentTouchStartY = e.touches[0].screenY;
  contentTouchStartX = e.touches[0].screenX;
  isContentDragging = false;
  resetDragState(contentTouchStartY, contentTouchStartX);
}

function onContentmove(e: UniTouchEvent): void {
  if (!props.closeOnSlideDown || !canDrag.value || isAnimation || e.touches.length == 0) {
    return;
  }
  const currentTouchY = e.touches[0].screenY;
  const currentTouchX = e.touches[0].screenX;
  const gestureOffsetY = currentTouchY - contentTouchStartY;
  const gestureOffsetX = currentTouchX - contentTouchStartX;

  if (isContentDragging) {
    lockScrollAtTop();
    onDragmove(e);
    return;
  }

  let isMovingToDismiss = false;
  if (props.mode == 'bottom') {
    isMovingToDismiss = gestureOffsetY > 4;
  }
  else if (props.mode == 'top') {
    isMovingToDismiss = gestureOffsetY < -4;
  }
  else if (props.mode == 'left') {
    isMovingToDismiss = gestureOffsetX < -4;
  }
  else if (props.mode == 'right') {
    isMovingToDismiss = gestureOffsetX > 4;
  }

  if (!isMovingToDismiss) {
    return;
  }

  if (scrollEl != null) {
    const top = scrollEl?.scrollTop ?? 0;
    if (top > 0) {
      return;
    }
  }

  isContentDragging = true;
  resetDragState(contentTouchStartY, contentTouchStartX);
  lockScrollAtTop();
  onDragmove(e);
}

function onContentend(): void {
  const durationMs = parseInt(props.duration.toString());
  setContentTransitionDuration(durationMs);
  if (!props.closeOnSlideDown || !canDrag.value) {
    return;
  }
  if (!isContentDragging) {
    resumedPopup();
    return;
  }
  onDragend();
}

watch(
  (): boolean => props.show,
  (newVal: boolean) => {
    if (newVal) {
      resetContentTransform();
    }
  }
);

function afterEnter(): void {
  resetContentTransform();
  emit('open');
}

function clickHandler(): void {
  if (props.mode == 'center') {
    overlayClick();
  }
  emit('click');
}

return (): any | null => {

const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)
const _component_up_status_bar = resolveEasyComponent("up-status-bar",_easycom_up_status_bar)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom",_easycom_up_safe_bottom)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border up-popup", [_ctx.customClass]])
  }), [
    isTrue(_ctx.overlay && !_ctx.pageInline)
      ? _cV(_component_up_overlay, _uM({
          key: 0,
          show: _ctx.show && !_ctx.pageInline,
          "z-index": _ctx.zIndex,
          duration: overlayDuration.value,
          "custom-style": _ctx.overlayStyle,
          opacity: _ctx.overlayOpacity,
          onClick: overlayClick
        }), null, 8 /* PROPS */, ["show", "z-index", "duration", "custom-style", "opacity"])
      : _cC("v-if", true),
    _cV(_component_up_transition, _uM({
      show: _ctx.pageInline ? true : _ctx.show,
      "custom-style": transitionStyle.value,
      mode: _ctx.pageInline ? 'none' : position.value,
      duration: _ctx.duration,
      onAfterEnter: afterEnter,
      onClick: clickHandler
    }), _uM({
      default: withSlotCtx((): any[] => [
        _cE("view", _uM({
          ref_key: "contentRef",
          ref: contentRef,
          class: "weapp-tw-border up-popup__content",
          style: _nS([contentStyle.value]),
          onTouchstart: onContentstart,
          onTouchmove: withModifiers(onContentmove, ["stop"]),
          onTouchend: onContentend,
          onTouchcancel: onContentend,
          onClick: withModifiers(noop, ["stop"])
        }), [
          isTrue(_ctx.showDragBar && _ctx.mode == 'bottom')
            ? _cE("view", _uM({
                key: 0,
                class: _nC(["weapp-tw-border up-popup__drag", _ctx.dragWrapClass]),
                onTouchstart: onDragstart,
                onTouchmove: withModifiers(onDragmove, ["stop"]),
                onTouchend: withModifiers(onDragend, ["stop"]),
                onTouchcancel: withModifiers(onDragend, ["stop"])
              }), [
                renderSlot(_ctx.$slots, "drag", {}, (): any[] => [
                  _cE("view", _uM({
                    class: _nC(["weapp-tw-border up-popup__drag__bar", _ctx.dragBarClass])
                  }), null, 2 /* CLASS */)
                ])
              ], 34 /* CLASS, NEED_HYDRATION */)
            : _cC("v-if", true),
          isTrue(_ctx.safeAreaInsetTop)
            ? _cV(_component_up_status_bar, _uM({ key: 1 }))
            : _cC("v-if", true),
          renderSlot(_ctx.$slots, "default"),
          isTrue(_ctx.showDragBar && _ctx.mode == 'top')
            ? _cE("view", _uM({
                key: 2,
                class: _nC(["weapp-tw-border up-popup__drag", _ctx.dragWrapClass]),
                onTouchstart: onDragstart,
                onTouchmove: withModifiers(onDragmove, ["stop"]),
                onTouchend: withModifiers(onDragend, ["stop"]),
                onTouchcancel: withModifiers(onDragend, ["stop"])
              }), [
                renderSlot(_ctx.$slots, "drag", {}, (): any[] => [
                  _cE("view", _uM({
                    class: _nC(["weapp-tw-border up-popup__drag__bar", _ctx.dragBarClass])
                  }), null, 2 /* CLASS */)
                ])
              ], 34 /* CLASS, NEED_HYDRATION */)
            : _cC("v-if", true),
          isTrue(_ctx.closeable)
            ? _cE("view", _uM({
                key: 3,
                class: _nC(["weapp-tw-border up-popup__content__close", [`up-popup__content__close--${_ctx.closeIconPos}`]]),
                "hover-class": "up-popup__content__close--hover",
                "hover-stay-time": "150",
                onClick: withModifiers(close, ["stop"])
              }), [
                _cV(_component_up_icon, _uM({
                  name: "close",
                  color: "#909399",
                  size: "18",
                  bold: ""
                }))
              ], 2 /* CLASS */)
            : _cC("v-if", true),
          isTrue(_ctx.safeAreaInsetBottom)
            ? _cV(_component_up_safe_bottom, _uM({ key: 4 }))
            : _cC("v-if", true)
        ], 36 /* STYLE, NEED_HYDRATION */)
      ]),
      _: 3 /* FORWARDED */
    }), 8 /* PROPS */, ["show", "custom-style", "mode", "duration"])
  ], 2 /* CLASS */)
}
}

})
export default __sfc__
export type UpPopupComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpPopupUpPopupStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-popup", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-popup__drag", _pS(_uM([["justifyContent", "center"], ["alignItems", "center"], ["minHeight", 24], ["paddingTop", 8], ["paddingBottom", 6]]))], ["up-popup__drag__bar", _pS(_uM([["height", 4], ["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6], ["width", 32], ["backgroundColor", "#c8c9cc"]]))], ["up-popup__content", _pS(_uM([["backgroundColor", "#ffffff"], ["position", "relative"]]))], ["up-popup__content--round-top", _pS(_uM([["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 10]]))], ["up-popup__content--round-left", _pS(_uM([["borderTopLeftRadius", 0], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 0], ["borderBottomRightRadius", 10]]))], ["up-popup__content--round-right", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 0], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 0]]))], ["up-popup__content--round-bottom", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-popup__content--round-center", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 10]]))], ["up-popup__content__close", _pS(_uM([["position", "absolute"]]))], ["up-popup__content__close--hover", _pS(_uM([["opacity", 0.4]]))], ["up-popup__content__close--top-left", _pS(_uM([["top", 15], ["left", 15]]))], ["up-popup__content__close--top-right", _pS(_uM([["top", 15], ["right", 15]]))], ["up-popup__content__close--bottom-left", _pS(_uM([["bottom", 15], ["left", 15]]))], ["up-popup__content__close--bottom-right", _pS(_uM([["right", 15], ["bottom", 15]]))]])]
