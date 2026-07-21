@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
open class GenUniModulesUviewUltraComponentsUpIndexListUpIndexList : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var inactiveColor: String by `$props`
    open var activeColor: String by `$props`
    open var indexList: UTSArray<Any> by `$props`
    open var sticky: Boolean by `$props`
    open var customNavHeight: Any by `$props`
    open var safeBottomFix: Boolean by `$props`
    open var itemMargin: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var addAnchors: (anchorIns: ComponentPublicInstance) -> Unit
        get() {
            return unref(this.`$exposed`["addAnchors"]) as (anchorIns: ComponentPublicInstance) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "addAnchors", value)
        }
    open var getProps: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getProps"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getProps", value)
        }
    open var getRefs: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getRefs"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getRefs", value)
        }
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
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpIndexListUpIndexList, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpIndexListUpIndexList
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val children = _useUltraUI.children
            val addChild = _useUltraUI.addChild
            val getChildren = _useUltraUI.getChildren
            val instance = getCurrentInstance()!!.proxy!!
            val indexList = fun(): UTSArray<String> {
                val indexListArray: UTSArray<String> = _uA()
                val charCodeOfA: Number? = "A".charCodeAt(0)
                run {
                    var i: Number = 0
                    while(i < 26){
                        indexListArray.push(String.fromCharCode(charCodeOfA!! + i))
                        i++
                    }
                }
                return indexListArray
            }
            val props = __props
            val activeIndex = ref(-1)
            val touching = ref(false)
            val scrollTop = ref(0)
            val scrollIntoView = ref("")
            val indicatorHeight = ref(50)
            val anchors = ref(_uA<ComponentPublicInstance>())
            val indicatorText = ref("")
            val letterInfo = ref(_uO("height" to 0, "itemHeight" to 0, "top" to 0))
            val pageY = ref(0)
            val topOffset = ref(0)
            val sys = ref(null as GetWindowInfoResult?)
            val scrollViewHeight = ref(0)
            val scrolling = ref(false)
            val uIndexList = computed(fun(): UTSArray<Any> {
                if (props.indexList.length > 0) {
                    return props.indexList as UTSArray<Any>
                } else {
                    val list = _uA<Any>()
                    indexList().forEach(fun(item: String){
                        list.push(item)
                    }
                    )
                    return list
                }
            }
            )
            val getIndexListLetterRect = fun(): UTSPromise<NodeInfo> {
                return UTSPromise(fun(resolve, _reject){
                    uni.UNI5198058.upGetRect(".up-index-list__letter", false, instance).then(fun(size: NodeInfo){
                        resolve(size)
                    }
                    )
                }
                )
            }
            val setIndexListLetterInfo = fun(){
                getIndexListLetterRect().then(fun(size: NodeInfo){
                    val height = size.height
                    val sysData = getWindowInfo()
                    val windowHeight = sysData.windowHeight
                    var customNavHeight: Number = 0
                    if (props.customNavHeight == 0) {
                        customNavHeight = -(sysData.statusBarHeight + 44)
                    } else {
                        customNavHeight = parseInt(getPx(props.customNavHeight))
                    }
                    val scrollHeight = if (scrollViewHeight.value > 0) {
                        scrollViewHeight.value
                    } else {
                        (sysData.windowHeight - customNavHeight)
                    }
                    letterInfo.value = _uO("height" to (height ?: 0), "top" to (scrollHeight / 2), "itemHeight" to Math.floor((height ?: 0) / uIndexList.value.length))
                }
                )
            }
            val indicatorTop = computed(fun(): Number {
                var top = letterInfo.value["top"] as Number
                var height = letterInfo.value["height"] as Number
                var itemHeight = letterInfo.value["itemHeight"] as Number
                return Math.floor(top - (height / 2) + itemHeight * activeIndex.value + itemHeight - 35)
            }
            )
            watch(fun(): UTSArray<Any> {
                return uIndexList.value
            }
            , fun(){
                sleep(30).then(fun(){
                    setIndexListLetterInfo()
                }
                )
            }
            , WatchOptions(immediate = false))
            val keyVal = fun(item: Any): String {
                if (item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) == "string") {
                    return item as String
                }
                val itemObj = item as UTSJSONObject
                val keyNames = _uA<String>("key", "name", "value", "label", "text")
                run {
                    var i: Number = 0
                    while(i < keyNames.length){
                        val value = itemObj[keyNames[i]]
                        if (value != null) {
                            return value.toString()
                        }
                        i++
                    }
                }
                return item.toString()
            }
            fun gen_getIndexListRect_fn(): UTSPromise<NodeInfo> {
                return UTSPromise(fun(resolve, _reject){
                    uni.UNI5198058.upGetRect(".up-index-list__scroll-view", false, instance).then(fun(size: NodeInfo){
                        resolve(size)
                    }
                    )
                }
                )
            }
            val getIndexListRect = ::gen_getIndexListRect_fn
            val init = fun(){
                var customNavHeight = getPx(props.customNavHeight)
                sys.value = getWindowInfo()
                getIndexListRect().then(fun(sizeScroll: NodeInfo){
                    val h = if (sizeScroll?.height != null && sizeScroll.height!! > 0) {
                        sizeScroll.height!!
                    } else {
                        sys.value!!!!.windowHeight - parseInt(customNavHeight)
                    }
                    scrollViewHeight.value = h
                    topOffset.value = sys.value!!!!.windowHeight - h
                }
                )
            }
            val getHeaderRect = fun(): UTSPromise<NodeInfo> {
                return UTSPromise(fun(resolve, _reject){
                    if (instance.`$slots`["header"] == null) {
                        resolve(NodeInfo(width = 0, height = 0))
                    }
                    uni.UNI5198058.upGetRect(".up-index-list__header", false, instance).then(fun(size: NodeInfo){
                        resolve(size)
                    }
                    )
                }
                )
            }
            val setValueForTouch = fun(currentIndex: Number): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        if (currentIndex !== activeIndex.value) {
                            activeIndex.value = currentIndex
                            indicatorText.value = keyVal(uIndexList.value[currentIndex])
                            var tmpId = keyVal(uIndexList.value[currentIndex]).charCodeAt(0).toString(10)
                            scrollIntoView.value = "up-index-item-" + tmpId
                            console.log(scrollIntoView.value, " at uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue:311")
                            val customNavHeight = props.customNavHeight
                            val header = await(getHeaderRect())
                            var top = header.height ?: 0
                            var childrenItems = children.value.map(fun(item: ComponentPublicInstance, index: Number): UTSJSONObject {
                                var itemRefs = item.`$callMethod`("getRefs") as UTSJSONObject
                                val childHeight = itemRefs["height"] as Number + parseFloat(getPx(props.itemMargin))
                                val child: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("child", "uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue", 328, 11), "height" to childHeight, "top" to top)
                                top = top + childHeight
                                return child
                            }
                            )
                            if (childrenItems[currentIndex]?.get("top") != null || childrenItems[currentIndex]["top"] == 0) {
                                scrollTop.value = ((childrenItems[currentIndex]["top"] ?: 0) as Number) - parseFloat(getPx(customNavHeight))
                            }
                        }
                })
            }
            val getIndexListLetter = fun(pageYO: Number): Number {
                pageY.value = pageYO
                var top = letterInfo.value["top"] as Number
                var height = letterInfo.value["height"] as Number
                var itemHeight = letterInfo.value["itemHeight"] as Number
                var index: Number = 0
                top = top - (height / 2)
                pageY.value = pageY.value - topOffset.value
                if (pageY.value < top) {
                    index = 0
                } else if (pageY.value >= top + height) {
                    index = uIndexList.value.length - 1
                } else {
                    index = Math.floor((pageY.value - top) / itemHeight)
                }
                return index
            }
            val touchStart = fun(e: UniTouchEvent){
                e.preventDefault()
                val touchStartData = e.changedTouches[0]
                touching.value = true
                val pageY = touchStartData.pageY
                val screenY = touchStartData.screenY
                val currentIndex = getIndexListLetter(pageY)
                setValueForTouch(currentIndex)
            }
            val touchMove = fun(e: UniTouchEvent){
                e.preventDefault()
                var touchMoveData = e.changedTouches[0]
                val pageY = touchMoveData.pageY
                val screenY = touchMoveData.screenY
                val currentIndex = getIndexListLetter(pageY)
                setValueForTouch(currentIndex)
            }
            val touchEnd = fun(e: UniTouchEvent){
                e.preventDefault()
                sleep(300).then(fun(){
                    touching.value = false
                    scrollIntoView.value = ""
                }
                )
            }
            val scrollHandler = fun(e: UniScrollEvent): UTSPromise<Unit> {
                return wrapUTSPromise(suspend w1@{
                        if (touching.value || scrolling.value) {
                            return@w1
                        }
                        scrolling.value = true
                        sleep(10).then(fun(){
                            scrolling.value = false
                        }
                        )
                        var scrollTopNum: Number = 0
                        val len = children.value.length
                        var childrenItems: UTSArray<UPIndexListChildrenItemType> = _uA()
                        val header = await(getHeaderRect())
                        var top = header.height ?: 0
                        childrenItems = children.value!!!!.map(fun(item: ComponentPublicInstance, index: Number): UPIndexListChildrenItemType {
                            var itemRefs = item.`$callMethod`("getRefs") as UTSJSONObject
                            val childHeight = (itemRefs["height"] as Number) + parseInt(getPx(props.itemMargin))
                            val child = UPIndexListChildrenItemType(height = childHeight, top = top)
                            top = top + childHeight
                            return child
                        }
                        )
                        scrollTopNum = e.detail.scrollTop
                        scrollTopNum = scrollTopNum + parseInt(getPx(props.customNavHeight))
                        run {
                            var i: Number = 0
                            while(i < len){
                                val item: UPIndexListChildrenItemType = childrenItems[i]
                                var nextItem: UPIndexListChildrenItemType? = null
                                if (i < childrenItems.length - 1) {
                                    nextItem = childrenItems[i + 1]
                                }
                                if (scrollTopNum <= childrenItems[0].top || scrollTopNum >= childrenItems[len - 1].top + childrenItems[len - 1].height) {
                                    activeIndex.value = -1
                                    break
                                } else if (nextItem == null) {
                                    activeIndex.value = len - 1
                                    break
                                } else if (scrollTopNum > item.top && scrollTopNum < nextItem.top) {
                                    activeIndex.value = i
                                    break
                                }
                                i++
                            }
                        }
                })
            }
            onMounted(fun(){
                init()
                sleep(50).then(fun(){
                    setIndexListLetterInfo()
                }
                )
                anchors.value = _uA<ComponentPublicInstance>()
                sys.value = getWindowInfo()
            }
            )
            val getItemStyle = fun(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue", 499, 9))
                if (activeIndex.value === index && props.activeColor !== "#5677fc") {
                    style["backgroundColor"] = props.activeColor
                }
                return style
            }
            val addAnchors = fun(anchorIns: ComponentPublicInstance) {
                anchors.value.push(anchorIns)
            }
            val getProps = fun(): UTSJSONObject {
                return _uO()
            }
            val getRefs = fun(): UTSJSONObject {
                return _uO()
            }
            __expose(_uM("addAnchors" to addAnchors, "getChildren" to getChildren, "addChild" to addChild, "getProps" to getProps, "getRefs" to getRefs))
            return fun(): Any? {
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cE("view", _uM("ref" to "up-index-list", "class" to "up-index-list"), _uA(
                    _cE("scroll-view", _uM("scroll-top" to scrollTop.value, "scroll-into-view" to scrollIntoView.value, "style" to _nS(_uM("height" to "100%")), "direction" to "vertical", "scroll-y" to true, "onScroll" to scrollHandler, "ref" to "up-index-list__scroll-view", "class" to "up-index-list__scroll-view"), _uA(
                        if (_ctx.`$slots`["header"] != null) {
                            _cE("view", _uM("key" to 0, "class" to "up-index-list__header"), _uA(
                                renderSlot(_ctx.`$slots`, "header")
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        renderSlot(_ctx.`$slots`, "default"),
                        if (_ctx.`$slots`["footer"] != null) {
                            _cE("view", _uM("key" to 1, "class" to "up-index-list__footer"), _uA(
                                renderSlot(_ctx.`$slots`, "footer")
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ), 44, _uA(
                        "scroll-top",
                        "scroll-into-view"
                    )),
                    _cE("view", _uM("class" to "up-index-list__letter", "ref" to "up-index-list__letter", "style" to _nS(_uM("top" to _ctx.`$up`.addUnit(letterInfo.value["top"] ?: ""), "transform" to "translateY(-50%)")), "onTouchstart" to touchStart, "onTouchmove" to touchMove, "onTouchend" to touchEnd, "onTouchcancel" to touchEnd), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(uIndexList.value, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("class" to _nC(_uA(
                                "up-index-list__letter__item",
                                _uM("up-index-list__letter__item--active" to (activeIndex.value === index && _ctx.activeColor === "#5677fc"))
                            )), "key" to index, "style" to _nS(getItemStyle(index))), _uA(
                                _cE("text", _uM("class" to "up-index-list__letter__item__index", "style" to _nS(_uM("color" to if (activeIndex.value === index) {
                                    "#fff"
                                } else {
                                    _ctx.inactiveColor
                                }
                                ))), _tD(keyVal(item)), 5)
                            ), 6)
                        }
                        ), 128)
                    ), 36),
                    _cV(_component_up_transition, _uM("mode" to "fade", "show" to touching.value, "customStyle" to _uO("position" to "absolute", "right" to "30px", "top" to _ctx.`$up`.addUnit(indicatorTop.value, "px"), "width" to _ctx.`$up`.addUnit(indicatorHeight.value + 10), "zIndex" to 3)), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "up-index-list__indicator",
                                _uA(
                                    "up-index-list__indicator--show"
                                )
                            )), "style" to _nS(_uM("height" to _ctx.`$up`.addUnit(indicatorHeight.value), "width" to _ctx.`$up`.addUnit(indicatorHeight.value)))), _uA(
                                _cE("text", _uM("class" to "up-index-list__indicator__text"), _tD(if (activeIndex.value >= 0) {
                                    keyVal(uIndexList.value[activeIndex.value])
                                } else {
                                    ""
                                }
                                ), 1)
                            ), 4)
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show",
                        "customStyle"
                    ))
                ), 512)
            }
        }
        var name = "up-index-list"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-index-list" to _pS(_uM("position" to "relative")), "up-index-list__letter" to _pS(_uM("position" to "absolute", "right" to 0, "zIndex" to 3, "paddingTop" to 0, "paddingRight" to 6, "paddingBottom" to 0, "paddingLeft" to 6, "width" to 30)), "up-index-list__letter__item" to _pS(_uM("width" to 16, "height" to 16, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "marginTop" to 1, "marginRight" to 0, "marginBottom" to 1, "marginLeft" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-index-list__letter__item--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-index-list__letter__item__index" to _pS(_uM("fontSize" to 12, "textAlign" to "center", "lineHeight" to "12px")), "up-index-list__indicator" to _pS(_uM("width" to 50, "height" to 50, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 0, "borderBottomLeftRadius" to 100, "backgroundColor" to "#c9c9c9", "transform" to "rotate(-45deg)", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "up-index-list__indicator__text" to _pS(_uM("fontSize" to 28, "lineHeight" to "28px", "fontWeight" to "bold", "color" to "#ffffff", "transform" to "rotate(45deg)", "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "inactiveColor" to _uM("type" to "String", "default" to default__44.getString("indexList.inactiveColor")), "activeColor" to _uM("type" to "String", "default" to default__44.getString("indexList.activeColor")), "indexList" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            val list = _uA<Any>()
            default__44.getArray<String>("indexList.indexList")!!!!.forEach(fun(item: String){
                list.push(item)
            }
            )
            return list
        }
        ), "sticky" to _uM("type" to "Boolean", "default" to default__44.getBoolean("indexList.sticky")), "customNavHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__44.getNumber("indexList.customNavHeight")), "safeBottomFix" to _uM("type" to "Boolean", "default" to default__44.getBoolean("indexList.safeBottomFix")), "itemMargin" to _uM("type" to _uA(
            "String"
        ), "default" to default__44.getString("indexList.itemMargin"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "inactiveColor",
            "activeColor",
            "indexList",
            "sticky",
            "customNavHeight",
            "safeBottomFix",
            "itemMargin"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
