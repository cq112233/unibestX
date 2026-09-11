@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIB120614
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
import io.dcloud.uniapp.extapi.getElementById as uni_getElementById
open class GenUniModulesUviewUltraComponentsUpPopupUpPopup : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var overlay: Boolean by `$props`
    open var mode: String by `$props`
    open var duration: Any by `$props`
    open var closeable: Boolean by `$props`
    open var overlayStyle: Any by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var zIndex: Any by `$props`
    open var safeAreaInsetBottom: Boolean by `$props`
    open var safeAreaInsetTop: Boolean by `$props`
    open var closeIconPos: String by `$props`
    open var round: Any by `$props`
    open var zoom: Boolean by `$props`
    open var bgColor: String by `$props`
    open var overlayOpacity: Any by `$props`
    open var pageInline: Boolean by `$props`
    open var customClass: String by `$props`
    open var customStyle: Any by `$props`
    open var closeOnSlideDown: Boolean by `$props`
    open var slideDownThreshold: Any by `$props`
    open var scrollId: String by `$props`
    open var showDragBar: Boolean by `$props`
    open var dragBarClass: String by `$props`
    open var dragWrapClass: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>())
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNIB120614.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open var getChildIndex = ::gen_getChildIndex_fn
    open fun gen_getChildIndex_fn(ins: ComponentPublicInstance): Number {
        var index: Number = -1
        if (this.parent != null) {
            (this.parent!!!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, idx: Number){
                if (child == ins) {
                    index = idx
                }
            }
            )
        }
        return index
    }
    open var getParent = ::gen_getParent_fn
    open fun gen_getParent_fn(name: String): ComponentPublicInstance? {
        var parent = this.`$parent`
        while(parent != null){
            if (parent.`$options`["name"] != name) {
                parent = parent.`$parent`
            } else {
                break
            }
        }
        return parent
    }
    open var addChild = ::gen_addChild_fn
    open fun gen_addChild_fn(ins: ComponentPublicInstance): Unit {
        var exist = false
        var childs: UTSArray<ComponentPublicInstance> = this.children
        childs.map(fun(child: ComponentPublicInstance){
            if (ins == child) {
                exist = true
            }
        }
        )
        if (exist == false) {
            this.children.push(ins)
        }
    }
    open var addChildRef = ::gen_addChildRef_fn
    open fun gen_addChildRef_fn(str: String): Unit {
        var index = this.childrenRefs.indexOf("str")
        if (index <= -1) {
            this.childrenRefs.push(str)
        }
    }
    open fun getParentData(parentName: String, refMode: Boolean = false): Any {
        var parent = this.getParent(parentName)
        this.parent = parent
        if (parent != null) {
            if (parent?.`$data` != null && parent?.`$data`?.get("children") != null) {
                if (refMode) {
                    parent?.`$callMethod`("addChildRef", this.`$data`["refstr"])
                } else {
                    parent?.`$callMethod`("addChild", this)
                }
            }
            UTSJSONObject.keys(this.parentData).map(fun(key: String){
                if (parent?.`$props` != null && parent?.`$props`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$props`?.get(key)
                    }
                }
                if (parent?.`$data` != null && parent?.`$data`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$data`?.get(key)
                    }
                }
            }
            )
        }
        return _uO()
    }
    open var preventEvent = ::gen_preventEvent_fn
    open fun gen_preventEvent_fn(e: UniEvent) {
        e.stopPropagation()
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUviewUltraComponentsUpPopupUpPopup) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpPopupUpPopup
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val position = computed<String>(fun(): String {
                if (props.mode == "center") {
                    return if (props.zoom) {
                        "fade-zoom"
                    } else {
                        "fade"
                    }
                }
                if (props.mode == "left") {
                    return "slide-left"
                }
                if (props.mode == "right") {
                    return "slide-right"
                }
                if (props.mode == "bottom") {
                    return "slide-up"
                }
                if (props.mode == "top") {
                    return "slide-down"
                }
                return ""
            }
            )
            val transitionStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("display" to "flex")
                if (!props.pageInline) {
                    style["zIndex"] = parseInt(props.zIndex.toString()) + 1
                    style["position"] = "fixed"
                }
                style[props.mode] = 0
                if (props.mode == "left" || props.mode == "right") {
                    return deepMerge(style, _uO("bottom" to 0, "top" to 0)) as UTSJSONObject
                } else if (props.mode == "top" || props.mode == "bottom") {
                    return deepMerge(style, _uO("left" to 0, "right" to 0)) as UTSJSONObject
                } else if (props.mode == "center") {
                    return deepMerge(style, _uO("alignItems" to "center", "justify-content" to "center", "top" to 0, "left" to 0, "right" to 0, "bottom" to 0)) as UTSJSONObject
                }
                return style
            }
            )
            val dragTransform = ref("")
            val dragTransitionDuration = ref("")
            val contentStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.mode != "center") {
                    style["flex"] = 1
                }
                if (props.bgColor != "") {
                    style["backgroundColor"] = props.bgColor
                }
                if (props.round.toString() != "" && props.round != false) {
                    val value = addUnit(props.round)
                    if (props.mode == "top") {
                        style["borderBottomLeftRadius"] = value
                        style["borderBottomRightRadius"] = value
                    } else if (props.mode == "bottom") {
                        style["borderTopLeftRadius"] = value
                        style["borderTopRightRadius"] = value
                    } else if (props.mode == "center") {
                        style["borderRadius"] = value
                    }
                }
                return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
            }
            )
            val overlayDuration = computed<Number>(fun(): Number {
                return parseInt(props.duration.toString()) + 50
            }
            )
            val contentRef = shallowRef<UniElement?>(null)
            var isAnimation = false
            var halfScreenX: Number = 0
            var halfScreenY: Number = 0
            var currentX: Number = 0
            var currentY: Number = 0
            var previousX: Number = 0
            var previousY: Number = 0
            var lastDragDirectionY: Number = 0
            var lastDragDirectionX: Number = 0
            var halfOffsetY: Number = 0
            var halfOffsetX: Number = 0
            var scrollEl: UniElement? = null
            var contentTouchStartX: Number = 0
            var contentTouchStartY: Number = 0
            var isContentDragging = false
            val canDrag = computed<Boolean>(fun(): Boolean {
                if (!props.closeOnSlideDown) {
                    return false
                }
                return props.mode == "bottom" || props.mode == "top" || props.mode == "left" || props.mode == "right"
            }
            )
            fun gen_lockScrollAtTop_fn(): Unit {
                if (scrollEl == null) {
                    return
                }
                if (scrollEl!!.scrollTop > 0) {
                    scrollEl!!.scrollTop = 0
                }
            }
            val lockScrollAtTop = ::gen_lockScrollAtTop_fn
            fun gen_noop_fn() {}
            val noop = ::gen_noop_fn
            fun gen_overlayClick_fn(): Unit {
                if (props.closeOnClickOverlay) {
                    emit("update:show", false)
                    emit("close")
                }
            }
            val overlayClick = ::gen_overlayClick_fn
            fun gen_close_fn(): Unit {
                emit("update:show", false)
                emit("close")
            }
            val close = ::gen_close_fn
            fun setContentTransform(transform: String, durationMs: Number = -1): Unit {
                val el = contentRef.value
                if (el != null && el.style != null) {
                    if (durationMs >= 0) {
                        el.style.setProperty("transition-duration", "" + durationMs + "ms")
                    }
                    el.style.setProperty("transform", transform)
                }
            }
            fun gen_setContentTransitionDuration_fn(durationMs: Number): Unit {
                val el = contentRef.value
                if (el != null && el.style != null) {
                    el.style.setProperty("transition-duration", "" + durationMs + "ms")
                }
            }
            val setContentTransitionDuration = ::gen_setContentTransitionDuration_fn
            fun resetDragState(startY: Number, startX: Number = 0): Unit {
                halfScreenY = startY
                currentY = startY
                previousY = startY
                halfScreenX = startX
                currentX = startX
                previousX = startX
                lastDragDirectionY = 0
                lastDragDirectionX = 0
                halfOffsetY = 0
                halfOffsetX = 0
                setContentTransitionDuration(0)
            }
            fun gen_resetContentTransform_fn(): Unit {
                setContentTransform("none", 0)
                halfScreenX = 0
                halfScreenY = 0
                halfOffsetY = 0
                halfOffsetX = 0
                lastDragDirectionY = 0
                lastDragDirectionX = 0
                isContentDragging = false
                isAnimation = false
            }
            val resetContentTransform = ::gen_resetContentTransform_fn
            fun gen_onDragstart_fn(e: UniTouchEvent): Unit {
                if (e.touches.length == 0) {
                    return
                }
                val startY = e.touches[0].screenY
                val startX = e.touches[0].screenX
                resetDragState(startY, startX)
                isContentDragging = false
            }
            val onDragstart = ::gen_onDragstart_fn
            fun gen_onDragmove_fn(e: UniTouchEvent): Unit {
                if (isAnimation || !canDrag.value || e.touches.length == 0) {
                    return
                }
                val p = e.touches[0]
                previousY = currentY
                currentY = p.screenY
                previousX = currentX
                currentX = p.screenX
                val moveDeltaY = currentY - previousY
                val moveDeltaX = currentX - previousX
                if (Math.abs(moveDeltaY) >= 2) {
                    lastDragDirectionY = if (moveDeltaY > 0) {
                        1
                    } else {
                        -1
                    }
                }
                if (Math.abs(moveDeltaX) >= 2) {
                    lastDragDirectionX = if (moveDeltaX > 0) {
                        1
                    } else {
                        -1
                    }
                }
                if (halfScreenY == 0) {
                    halfScreenY = p.screenY
                }
                if (halfScreenX == 0) {
                    halfScreenX = p.screenX
                }
                val offsetY = p.screenY - halfScreenY
                val offsetX = p.screenX - halfScreenX
                if (props.mode == "bottom") {
                    if (offsetY > 0) {
                        lockScrollAtTop()
                        setContentTransform("translateY(" + offsetY + "px)")
                        halfOffsetY = offsetY
                    }
                } else if (props.mode == "top") {
                    if (offsetY < 0) {
                        setContentTransform("translateY(" + offsetY + "px)")
                        halfOffsetY = offsetY
                    }
                } else if (props.mode == "left") {
                    if (offsetX < 0) {
                        setContentTransform("translateX(" + offsetX + "px)")
                        halfOffsetX = offsetX
                    }
                } else if (props.mode == "right") {
                    if (offsetX > 0) {
                        setContentTransform("translateX(" + offsetX + "px)")
                        halfOffsetX = offsetX
                    }
                }
            }
            val onDragmove = ::gen_onDragmove_fn
            fun gen_resumedPopup_fn(): Unit {
                val durationMs = parseInt(props.duration.toString())
                setContentTransform("none", durationMs)
                halfScreenX = 0
                halfScreenY = 0
                halfOffsetY = 0
                halfOffsetX = 0
                lastDragDirectionY = 0
                lastDragDirectionX = 0
                isContentDragging = false
                isAnimation = false
            }
            val resumedPopup = ::gen_resumedPopup_fn
            fun gen_onDragend_fn(): Unit {
                val durationMs = parseInt(props.duration.toString())
                setContentTransitionDuration(durationMs)
                if (!canDrag.value) {
                    return
                }
                halfScreenY = 0
                halfScreenX = 0
                if (isAnimation) {
                    return
                }
                val threshold = Math.max(0, parseInt(props.slideDownThreshold.toString()))
                var shouldClose = false
                if (props.mode == "bottom") {
                    shouldClose = halfOffsetY >= threshold && lastDragDirectionY > 0
                } else if (props.mode == "top") {
                    shouldClose = Math.abs(halfOffsetY) >= threshold && lastDragDirectionY < 0
                } else if (props.mode == "left") {
                    shouldClose = Math.abs(halfOffsetX) >= threshold && lastDragDirectionX < 0
                } else if (props.mode == "right") {
                    shouldClose = halfOffsetX >= threshold && lastDragDirectionX > 0
                }
                if (shouldClose) {
                    isContentDragging = false
                    if (props.mode == "bottom") {
                        setContentTransform("translateY(100%)")
                    } else if (props.mode == "top") {
                        setContentTransform("translateY(-100%)")
                    } else if (props.mode == "left") {
                        setContentTransform("translateX(-100%)")
                    } else if (props.mode == "right") {
                        setContentTransform("translateX(100%)")
                    }
                    close()
                    setTimeout(fun(){
                        resetContentTransform()
                    }, durationMs)
                } else {
                    resumedPopup()
                }
            }
            val onDragend = ::gen_onDragend_fn
            fun gen_getFirstScrollEl_fn(el: UniElement?): UniElement? {
                if (el == null) {
                    return null
                }
                val scrollTags = _uA(
                    "SCROLL-VIEW",
                    "LIST-VIEW",
                    "WATERFLOW"
                )
                val rawTag = el.tagName
                if (rawTag != null) {
                    val tagName = rawTag.toUpperCase()
                    if (scrollTags.includes(tagName)) {
                        return el
                    }
                }
                val children = el.children
                if (children != null) {
                    run {
                        var i: Number = 0
                        while(i < children.length){
                            val child = children[i]
                            val target = gen_getFirstScrollEl_fn(child)
                            if (target != null) {
                                return target
                            }
                            i++
                        }
                    }
                }
                return null
            }
            val getFirstScrollEl = ::gen_getFirstScrollEl_fn
            fun gen_onContentstart_fn(e: UniTouchEvent): Unit {
                if (!props.closeOnSlideDown || e.touches.length == 0 || !canDrag.value) {
                    return
                }
                if (props.scrollId != "") {
                    scrollEl = uni_getElementById(props.scrollId)
                } else {
                    scrollEl = getFirstScrollEl(contentRef.value)
                }
                contentTouchStartY = e.touches[0].screenY
                contentTouchStartX = e.touches[0].screenX
                isContentDragging = false
                resetDragState(contentTouchStartY, contentTouchStartX)
            }
            val onContentstart = ::gen_onContentstart_fn
            fun gen_onContentmove_fn(e: UniTouchEvent): Unit {
                if (!props.closeOnSlideDown || !canDrag.value || isAnimation || e.touches.length == 0) {
                    return
                }
                val currentTouchY = e.touches[0].screenY
                val currentTouchX = e.touches[0].screenX
                val gestureOffsetY = currentTouchY - contentTouchStartY
                val gestureOffsetX = currentTouchX - contentTouchStartX
                if (isContentDragging) {
                    lockScrollAtTop()
                    onDragmove(e)
                    return
                }
                var isMovingToDismiss = false
                if (props.mode == "bottom") {
                    isMovingToDismiss = gestureOffsetY > 4
                } else if (props.mode == "top") {
                    isMovingToDismiss = gestureOffsetY < -4
                } else if (props.mode == "left") {
                    isMovingToDismiss = gestureOffsetX < -4
                } else if (props.mode == "right") {
                    isMovingToDismiss = gestureOffsetX > 4
                }
                if (!isMovingToDismiss) {
                    return
                }
                if (scrollEl != null) {
                    val top = scrollEl?.scrollTop ?: 0
                    if (top > 0) {
                        return
                    }
                }
                isContentDragging = true
                resetDragState(contentTouchStartY, contentTouchStartX)
                lockScrollAtTop()
                onDragmove(e)
            }
            val onContentmove = ::gen_onContentmove_fn
            fun gen_onContentend_fn(): Unit {
                val durationMs = parseInt(props.duration.toString())
                setContentTransitionDuration(durationMs)
                if (!props.closeOnSlideDown || !canDrag.value) {
                    return
                }
                if (!isContentDragging) {
                    resumedPopup()
                    return
                }
                onDragend()
            }
            val onContentend = ::gen_onContentend_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newVal: Boolean){
                if (newVal) {
                    resetContentTransform()
                }
            }
            )
            fun gen_afterEnter_fn(): Unit {
                resetContentTransform()
                emit("open")
            }
            val afterEnter = ::gen_afterEnter_fn
            fun gen_clickHandler_fn(): Unit {
                if (props.mode == "center") {
                    overlayClick()
                }
                emit("click")
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
                val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom", GenUniModulesUviewUltraComponentsUpSafeBottomUpSafeBottomClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-popup",
                    _uA(
                        _ctx.customClass
                    )
                ))), _uA(
                    if (isTrue(_ctx.overlay && !_ctx.pageInline)) {
                        _cV(_component_up_overlay, _uM("key" to 0, "show" to (_ctx.show && !_ctx.pageInline), "z-index" to _ctx.zIndex, "duration" to overlayDuration.value, "custom-style" to _ctx.overlayStyle, "opacity" to _ctx.overlayOpacity, "onClick" to overlayClick), null, 8, _uA(
                            "show",
                            "z-index",
                            "duration",
                            "custom-style",
                            "opacity"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cV(_component_up_transition, _uM("show" to if (_ctx.pageInline) {
                        true
                    } else {
                        _ctx.show
                    }
                    , "custom-style" to transitionStyle.value, "mode" to if (_ctx.pageInline) {
                        "none"
                    } else {
                        position.value
                    }
                    , "duration" to _ctx.duration, "onAfterEnter" to afterEnter, "onClick" to clickHandler), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("ref_key" to "contentRef", "ref" to contentRef, "class" to "weapp-tw-border up-popup__content", "style" to _nS(_uA(
                                contentStyle.value
                            )), "onTouchstart" to onContentstart, "onTouchmove" to withModifiers(onContentmove, _uA(
                                "stop"
                            )), "onTouchend" to onContentend, "onTouchcancel" to onContentend, "onClick" to withModifiers(noop, _uA(
                                "stop"
                            ))), _uA(
                                if (isTrue(_ctx.showDragBar && _ctx.mode == "bottom")) {
                                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                        "weapp-tw-border up-popup__drag",
                                        _ctx.dragWrapClass
                                    )), "onTouchstart" to onDragstart, "onTouchmove" to withModifiers(onDragmove, _uA(
                                        "stop"
                                    )), "onTouchend" to withModifiers(onDragend, _uA(
                                        "stop"
                                    )), "onTouchcancel" to withModifiers(onDragend, _uA(
                                        "stop"
                                    ))), _uA(
                                        renderSlot(_ctx.`$slots`, "drag", _uO(), fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE("view", _uM("class" to _nC(_uA(
                                                    "weapp-tw-border up-popup__drag__bar",
                                                    _ctx.dragBarClass
                                                ))), null, 2)
                                            )
                                        })
                                    ), 34)
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.safeAreaInsetTop)) {
                                    _cV(_component_up_status_bar, _uM("key" to 1))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                renderSlot(_ctx.`$slots`, "default"),
                                if (isTrue(_ctx.showDragBar && _ctx.mode == "top")) {
                                    _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                        "weapp-tw-border up-popup__drag",
                                        _ctx.dragWrapClass
                                    )), "onTouchstart" to onDragstart, "onTouchmove" to withModifiers(onDragmove, _uA(
                                        "stop"
                                    )), "onTouchend" to withModifiers(onDragend, _uA(
                                        "stop"
                                    )), "onTouchcancel" to withModifiers(onDragend, _uA(
                                        "stop"
                                    ))), _uA(
                                        renderSlot(_ctx.`$slots`, "drag", _uO(), fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE("view", _uM("class" to _nC(_uA(
                                                    "weapp-tw-border up-popup__drag__bar",
                                                    _ctx.dragBarClass
                                                ))), null, 2)
                                            )
                                        })
                                    ), 34)
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.closeable)) {
                                    _cE("view", _uM("key" to 3, "class" to _nC(_uA(
                                        "weapp-tw-border up-popup__content__close",
                                        _uA(
                                            "up-popup__content__close--" + _ctx.closeIconPos
                                        )
                                    )), "hover-class" to "up-popup__content__close--hover", "hover-stay-time" to "150", "onClick" to withModifiers(close, _uA(
                                        "stop"
                                    ))), _uA(
                                        _cV(_component_up_icon, _uM("name" to "close", "color" to "#909399", "size" to "18", "bold" to ""))
                                    ), 2)
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.safeAreaInsetBottom)) {
                                    _cV(_component_up_safe_bottom, _uM("key" to 4))
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 36)
                        )
                    }
                    ), "_" to 3), 8, _uA(
                        "show",
                        "custom-style",
                        "mode",
                        "duration"
                    ))
                ), 2)
            }
        }
        var name = "up-popup"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-popup" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-popup__drag" to _pS(_uM("justifyContent" to "center", "alignItems" to "center", "minHeight" to 24, "paddingTop" to 8, "paddingBottom" to 6)), "up-popup__drag__bar" to _pS(_uM("height" to 4, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "width" to 32, "backgroundColor" to "#c8c9cc")), "up-popup__content" to _pS(_uM("backgroundColor" to "#ffffff", "position" to "relative")), "up-popup__content--round-top" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 10)), "up-popup__content--round-left" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 0, "borderBottomRightRadius" to 10)), "up-popup__content--round-right" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 0, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 0)), "up-popup__content--round-bottom" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 0, "borderBottomRightRadius" to 0)), "up-popup__content--round-center" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 10)), "up-popup__content__close" to _pS(_uM("position" to "absolute")), "up-popup__content__close--hover" to _pS(_uM("opacity" to 0.4)), "up-popup__content__close--top-left" to _pS(_uM("top" to 15, "left" to 15)), "up-popup__content__close--top-right" to _pS(_uM("top" to 15, "right" to 15)), "up-popup__content__close--bottom-left" to _pS(_uM("bottom" to 15, "left" to 15)), "up-popup__content__close--bottom-right" to _pS(_uM("right" to 15, "bottom" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:show" to null, "close" to null, "open" to null, "click" to null)
        var props = _nP(_uM("url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to false), "overlay" to _uM("type" to "Boolean", "default" to true), "mode" to _uM("type" to "String", "default" to "bottom"), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 300), "closeable" to _uM("type" to "Boolean", "default" to false), "overlayStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to true), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 10075), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to true), "safeAreaInsetTop" to _uM("type" to "Boolean", "default" to false), "closeIconPos" to _uM("type" to "String", "default" to "top-right"), "round" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to 0), "zoom" to _uM("type" to "Boolean", "default" to true), "bgColor" to _uM("type" to "String", "default" to ""), "overlayOpacity" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 0.5), "pageInline" to _uM("type" to "Boolean", "default" to false), "customClass" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "closeOnSlideDown" to _uM("type" to "Boolean", "default" to false), "slideDownThreshold" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 40), "scrollId" to _uM("type" to "String", "default" to ""), "showDragBar" to _uM("type" to "Boolean", "default" to false), "dragBarClass" to _uM("type" to "String", "default" to ""), "dragWrapClass" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "url",
            "linkType",
            "show",
            "overlay",
            "mode",
            "duration",
            "closeable",
            "overlayStyle",
            "closeOnClickOverlay",
            "zIndex",
            "safeAreaInsetBottom",
            "safeAreaInsetTop",
            "closeIconPos",
            "round",
            "zoom",
            "bgColor",
            "overlayOpacity",
            "pageInline",
            "customClass",
            "customStyle",
            "closeOnSlideDown",
            "slideDownThreshold",
            "scrollId",
            "showDragBar",
            "dragBarClass",
            "dragWrapClass"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
