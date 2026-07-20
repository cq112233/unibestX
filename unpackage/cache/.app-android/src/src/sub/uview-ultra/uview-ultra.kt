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
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcSubUviewUltraUviewUltra : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
        var setup: (__props: GenSrcSubUviewUltraUviewUltra) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraUviewUltra
            val _cache = __ins.renderCache
            val scrollTop = ref(0)
            val scrollViewScrollTop = ref(0)
            val scrollHeight = ref(0)
            onMounted(fun(){
                val sysInfo = uni_getWindowInfo()
                scrollHeight.value = sysInfo.windowHeight - 44
            }
            )
            fun gen_onScroll_fn(e: UniScrollEvent): Unit {
                val currentScrollTop = e.detail.scrollTop
                console.log("scroll-view scrollTop:", currentScrollTop, " at src/sub/uview-ultra/uview-ultra.uvue:1706")
                scrollTop.value = currentScrollTop
            }
            val onScroll = ::gen_onScroll_fn
            fun gen_onBackTopClick_fn(): Unit {
                scrollViewScrollTop.value = scrollTop.value
                setTimeout(fun(){
                    scrollViewScrollTop.value = 0
                }
                , 20)
            }
            val onBackTopClick = ::gen_onBackTopClick_fn
            val value1 = ref(1)
            val value2 = ref(2)
            val options1 = ref(_uA<UTSJSONObject>(_uO("label" to "默认排序", "value" to 1), _uO("label" to "距离优先", "value" to 2), _uO("label" to "价格优先", "value" to 3)))
            val options2 = ref(_uA<UTSJSONObject>(_uO("label" to "去冰", "value" to 1), _uO("label" to "加冰", "value" to 2)))
            val dropdownGreenValue1 = ref(1)
            val dropdownGreenValue2 = ref(1)
            val dropdownRegionOptions1 = ref(_uA<UTSJSONObject>(_uO("label" to "全部", "value" to 1), _uO("label" to "朝阳区", "value" to 2), _uO("label" to "海淀区", "value" to 3), _uO("label" to "西城区", "value" to 4)))
            val dropdownRegionOptions2 = ref(_uA<UTSJSONObject>(_uO("label" to "综合排序", "value" to 1), _uO("label" to "评分最高", "value" to 2), _uO("label" to "销量优先", "value" to 3), _uO("label" to "价格最低", "value" to 4)))
            val dropdownDisValue1 = ref(1)
            val dropdownEventValue = ref(1)
            fun onDropdownChange(value: Any): Unit {
                uni_showToast(ShowToastOptions(title = "选中值: " + value, icon = "none"))
            }
            val uDropdownRef1 = ref(null as ComponentPublicInstance?)
            val uDropdownRef2 = ref(null as ComponentPublicInstance?)
            val uDropdownRef3 = ref(null as ComponentPublicInstance?)
            val uDropdownRefGrid1 = ref(null as ComponentPublicInstance?)
            val uDropdownRefCard = ref(null as ComponentPublicInstance?)
            fun gen_closeDropdown_fn(refName: String): Unit {
                val refMap: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("refMap", "src/sub/uview-ultra/uview-ultra.uvue", 1763, 9), "uDropdownRef1" to uDropdownRef1.value, "uDropdownRef2" to uDropdownRef2.value, "uDropdownRef3" to uDropdownRef3.value, "uDropdownRefGrid1" to uDropdownRefGrid1.value, "uDropdownRefCard" to uDropdownRefCard.value)
                val comp = refMap[refName] as ComponentPublicInstance?
                if (comp != null) {
                    comp.`$callMethod`("close")
                }
            }
            val closeDropdown = ::gen_closeDropdown_fn
            val dropdownScrollSelected = ref("暂无")
            fun gen_onDropdownScrollSelect_fn(index: Number): Unit {
                dropdownScrollSelected.value = "选项 " + index
            }
            val onDropdownScrollSelect = ::gen_onDropdownScrollSelect_fn
            val dropdownHLValue1 = ref(1)
            val dropdownHLValue2 = ref(2)
            fun gen_onDropdownOpen_fn(index: Number): Unit {
                val comp = uDropdownRef3.value
                if (comp != null) {
                    comp.`$callMethod`("highlight")
                }
            }
            val onDropdownOpen = ::gen_onDropdownOpen_fn
            fun gen_onDropdownClose_fn(index: Number): Unit {
                val comp = uDropdownRef3.value
                if (comp != null) {
                    (comp.`$callMethod`("highlight") as UTSPromise<Any>).then(fun(){})
                }
            }
            val onDropdownClose = ::gen_onDropdownClose_fn
            val dropdownGridSelected = ref("暂无")
            val dropdownGridItems = ref(_uA<UTSJSONObject>(_uO("text" to "美食", "icon" to "star-fill", "color" to "#f9ae3d"), _uO("text" to "外卖", "icon" to "car-fill", "color" to "#2979ff"), _uO("text" to "酒店", "icon" to "home", "color" to "#19be6b"), _uO("text" to "电影", "icon" to "play-right-fill", "color" to "#fa3534"), _uO("text" to "KTV", "icon" to "mic", "color" to "#9c27b0"), _uO("text" to "丽人", "icon" to "heart-fill", "color" to "#ff4081"), _uO("text" to "周边游", "icon" to "map-fill", "color" to "#00bcd4"), _uO("text" to "更多", "icon" to "grid-fill", "color" to "#909399")))
            val dropdownGridFilterItems = ref(_uA<UTSJSONObject>(_uO("text" to "智能排序", "icon" to "list-dot", "color" to "#2979ff"), _uO("text" to "离我最近", "icon" to "map", "color" to "#19be6b"), _uO("text" to "好评优先", "icon" to "star", "color" to "#f9ae3d"), _uO("text" to "人气最高", "icon" to "fire", "color" to "#fa3534"), _uO("text" to "价格最低", "icon" to "rmb-circle-fill", "color" to "#ff9900"), _uO("text" to "最新发布", "icon" to "clock-fill", "color" to "#00bcd4")))
            fun gen_onDropdownGridSelect_fn(text: String): Unit {
                dropdownGridSelected.value = text
            }
            val onDropdownGridSelect = ::gen_onDropdownGridSelect_fn
            val dropdownCardSelected = ref("暂无")
            val dropdownCardItems = ref(_uA<UTSJSONObject>(_uO("id" to "1", "image" to "https://picsum.photos/400/300?random=50", "title" to "招牌红烧牛肉面", "desc" to "精选牛腱肉·慢炖8小时", "price" to "¥38", "tag" to "热卖"), _uO("id" to "2", "image" to "https://picsum.photos/400/300?random=51", "title" to "海鲜至尊披萨", "desc" to "12寸·虾仁+鱿鱼+芝士", "price" to "¥88", "tag" to "新品"), _uO("id" to "3", "image" to "https://picsum.photos/400/300?random=52", "title" to "经典珍珠奶茶", "desc" to "手作黑糖珍珠·鲜奶", "price" to "¥18", "tag" to "爆款"), _uO("id" to "4", "image" to "https://picsum.photos/400/300?random=53", "title" to "法式提拉米苏", "desc" to "马斯卡彭芝士·可可粉", "price" to "¥32", "tag" to "甜品")))
            val dropdownCardItems2 = ref(_uA<UTSJSONObject>(_uO("id" to "5", "image" to "https://picsum.photos/400/300?random=54", "title" to "日式鳗鱼饭", "desc" to "活鳗现烤·秘制酱汁", "price" to "¥68", "tag" to "限量"), _uO("id" to "6", "image" to "https://picsum.photos/400/300?random=55", "title" to "泰式冬阴功汤", "desc" to "鲜虾+香茅+椰浆", "price" to "¥45", "tag" to "推荐"), _uO("id" to "7", "image" to "https://picsum.photos/400/300?random=56", "title" to "美式牛肉汉堡", "desc" to "安格斯牛肉饼·双层", "price" to "¥42", "tag" to "大份"), _uO("id" to "8", "image" to "https://picsum.photos/400/300?random=57", "title" to "冰淇淋华夫饼", "desc" to "香草冰淇淋·现烤华夫", "price" to "¥28", "tag" to "甜蜜")))
            fun gen_onDropdownCardSelect_fn(title: String): Unit {
                dropdownCardSelected.value = title
            }
            val onDropdownCardSelect = ::gen_onDropdownCardSelect_fn
            val waterfallList = ref(_uA<UTSJSONObject>(_uO("id" to "1", "image" to "https://picsum.photos/400/300?random=1", "title" to "简约风小茶几", "price" to "¥299"), _uO("id" to "2", "image" to "https://picsum.photos/400/500?random=2", "title" to "北欧风落地灯", "price" to "¥599"), _uO("id" to "3", "image" to "https://picsum.photos/400/350?random=3", "title" to "日式花瓶摆件", "price" to "¥89"), _uO("id" to "4", "image" to "https://picsum.photos/400/450?random=4", "title" to "复古台灯", "price" to "¥399"), _uO("id" to "5", "image" to "https://picsum.photos/400/280?random=5", "title" to "ins风挂画", "price" to "¥159"), _uO("id" to "6", "image" to "https://picsum.photos/400/520?random=6", "title" to "实木相框组合", "price" to "¥129")))
            val waterfallLeftList = computed(fun(): UTSArray<UTSJSONObject> {
                return waterfallList.value.filter(fun(_: UTSJSONObject, idx: Number): Boolean {
                    return idx % 2 === 0
                }
                )
            }
            )
            val waterfallRightList = computed(fun(): UTSArray<UTSJSONObject> {
                return waterfallList.value.filter(fun(_: UTSJSONObject, idx: Number): Boolean {
                    return idx % 2 === 1
                }
                )
            }
            )
            fun gen_loadMoreWaterfall_fn(): Unit {
                val newItems: UTSArray<UTSJSONObject> = _uA()
                val base = waterfallList.value.length + 1
                run {
                    var i: Number = 0
                    while(i < 4){
                        val idx = base + i
                        val heights: UTSArray<Number> = _uA(
                            280,
                            350,
                            420,
                            300,
                            500,
                            380
                        )
                        newItems.push(_uO("id" to ("" + idx), "image" to ("https://picsum.photos/400/" + heights[i % heights.length] + "?random=" + idx), "title" to ("商品 " + idx), "price" to ("\u00A5" + (Math.random() * 500 + 50).toFixed(0))))
                        i++
                    }
                }
                waterfallList.value = waterfallList.value.concat(newItems)
            }
            val loadMoreWaterfall = ::gen_loadMoreWaterfall_fn
            fun gen_clearWaterfall_fn(): Unit {
                waterfallList.value = _uA<UTSJSONObject>()
            }
            val clearWaterfall = ::gen_clearWaterfall_fn
            val loadmoreStatus = ref("loadmore")
            val loadmoreIsDot = ref(false)
            val albumUrls = ref(_uA<String>("https://picsum.photos/400/400?random=10", "https://picsum.photos/400/400?random=11", "https://picsum.photos/400/400?random=12", "https://picsum.photos/400/400?random=13", "https://picsum.photos/400/400?random=14", "https://picsum.photos/400/400?random=15", "https://picsum.photos/400/400?random=16", "https://picsum.photos/400/400?random=17", "https://picsum.photos/400/400?random=18", "https://picsum.photos/400/400?random=19", "https://picsum.photos/400/400?random=20"))
            val readMoreContent = ref("<p>山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？</p><p>锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。</p>")
            val avatarSrc = ref("/static/logo.png")
            val avatarGroupUrls = ref(_uA<String>("https://picsum.photos/200/200?random=1", "https://picsum.photos/200/200?random=2", "https://picsum.photos/200/200?random=3", "https://picsum.photos/200/200?random=4", "https://picsum.photos/200/200?random=5", "https://picsum.photos/200/200?random=6", "https://picsum.photos/200/200?random=7"))
            fun gen_onAvatarGroupMore_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "查看更多头像", icon = "none"))
            }
            val onAvatarGroupMore = ::gen_onAvatarGroupMore_fn
            fun gen_onAvatarClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "头像被点击", icon = "none"))
            }
            val onAvatarClick = ::gen_onAvatarClick_fn
            fun gen_onLinkClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "链接点击事件触发", icon = "none"))
            }
            val onLinkClick = ::gen_onLinkClick_fn
            fun gen_onLazyLoadClick_fn(index: Number): Unit {
                uni_showToast(ShowToastOptions(title = "图片 " + index + " 被点击", icon = "none"))
            }
            val onLazyLoadClick = ::gen_onLazyLoadClick_fn
            fun gen_onLazyLoadError_fn(err: UTSJSONObject): Unit {
                console.log("懒加载图片出错:", err, " at src/sub/uview-ultra/uview-ultra.uvue:1930")
            }
            val onLazyLoadError = ::gen_onLazyLoadError_fn
            val swiperList = ref(_uA<UTSJSONObject>(_uO("image" to "/static/logo.png", "title" to "uview-ultra 组件演示"), _uO("image" to "/static/logo.png", "title" to "高品质 UI 组件库"), _uO("image" to "/static/logo.png", "title" to "多端适配 · 开箱即用")))
            val indexList = ref(_uA<String>("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"))
            val itemArr = ref(_uA<UTSArray<String>>(_uA(
                "安徽",
                "澳门"
            ), _uA(
                "北京"
            ), _uA(
                "重庆",
                "成都",
                "长沙",
                "常州"
            ), _uA(
                "东莞",
                "大连"
            ), _uA(
                "鄂尔多斯"
            ), _uA(
                "福州",
                "佛山"
            ), _uA(
                "广州",
                "贵阳",
                "桂林"
            ), _uA(
                "杭州",
                "合肥",
                "哈尔滨",
                "海口",
                "呼和浩特"
            ), _uA(
                "济南"
            ), _uA(
                "昆明"
            ), _uA(
                "兰州",
                "拉萨",
                "柳州"
            ), _uA(
                "南京",
                "南昌",
                "南宁",
                "宁波"
            ), _uA(
                "青岛",
                "泉州"
            ), _uA(
                "上海",
                "深圳",
                "苏州",
                "沈阳",
                "石家庄"
            ), _uA(
                "天津",
                "太原",
                "台北"
            ), _uA(
                "武汉",
                "无锡"
            ), _uA(
                "西安",
                "厦门",
                "西宁",
                "香港"
            ), _uA(
                "银川",
                "扬州"
            ), _uA(
                "郑州"
            )))
            val showTag = ref(true)
            val lineProgressValue1 = ref(70)
            val lineProgressValue2 = ref(45)
            val lineProgressValue3 = ref(90)
            val lineProgressValue4 = ref(30)
            val swipeActionList = ref(_uA<UTSJSONObject>(_uO("id" to "1", "title" to "左滑可编辑或删除此项（第一项）"), _uO("id" to "2", "title" to "左滑可编辑或删除此项（第二项）"), _uO("id" to "3", "title" to "左滑可编辑或删除此项（第三项）"), _uO("id" to "4", "title" to "左滑可编辑或删除此项（第四项）")))
            val swipeActionOptions = ref(_uA<UTSJSONObject>(_uO("text" to "编辑", "style" to _uO("backgroundColor" to "primary")), _uO("text" to "删除", "style" to _uO("backgroundColor" to "#f56c6c"))))
            fun gen_onSwipeActionClick_fn(e: UTSJSONObject): Unit {
                val btnIndex = e["index"] as Number
                val listIndex = e["name"] as Number
                val item = swipeActionList.value[listIndex]
                val btn = swipeActionOptions.value[btnIndex]
                if (btn != null && item != null) {
                    val action = btn["text"] as String
                    val title = item["title"] as String
                    if (action === "删除") {
                        swipeActionList.value.splice(listIndex, 1)
                        uni_showToast(ShowToastOptions(title = "已删除: " + title, icon = "none"))
                    } else {
                        uni_showToast(ShowToastOptions(title = "点击了「" + action + "」: " + title, icon = "none"))
                    }
                }
            }
            val onSwipeActionClick = ::gen_onSwipeActionClick_fn
            val skeletonLoading = ref(true)
            fun gen_toggleSkeleton_fn() {
                skeletonLoading.value = !skeletonLoading.value
            }
            val toggleSkeleton = ::gen_toggleSkeleton_fn
            val mpHtmlContent = ref("<h2 style=\"text-align:center\">mp-html 富文本演示</h2>\n<p>这是一个 <strong>uni-app X</strong> 原生渲染的富文本组件，支持以下标签：</p>\n<h3>1. 文本格式</h3>\n<p><b>粗体文字</b>、<i>斜体文字</i>、<u>下划线文字</u>、<s>删除线文字</s></p>\n<p><em>强调文本</em>、<strong>加粗强调</strong>、<mark>高亮文本</mark></p>\n<p>普通文本中含有 <code>code 代码</code> 和 <small>小号字</small></p>\n<h3>2. 链接</h3>\n<p>点击 <a href=\"https://www.baidu.com\">百度链接</a> 查看效果</p>\n<p>这是 <a href=\"https://github.com/jin-yufeng/mp-html\">mp-html GitHub</a> 仓库</p>\n<h3>3. 图片</h3>\n<p>以下是一张示例图片：</p>\n<img src=\"https://picsum.photos/400/300?random=2\" alt=\"示例图片\" />\n<h3>4. 表格</h3>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\">\n  <tr><th>姓名</th><th>年龄</th><th>城市</th></tr>\n  <tr><td>张三</td><td>28</td><td>北京</td></tr>\n  <tr><td>李四</td><td>32</td><td>上海</td></tr>\n  <tr><td>王五</td><td>25</td><td>深圳</td></tr>\n</table>\n<h3>5. 列表</h3>\n<ul>\n  <li>uni-app X 原生渲染</li>\n  <li>完整的 HTML 标签支持</li>\n  <li>图片点击预览</li>\n  <li>链接点击处理</li>\n</ul>\n<ol>\n  <li>第一步：导入组件</li>\n  <li>第二步：传入 content</li>\n  <li>第三步：监听事件</li>\n</ol>\n<h3>6. 预格式文本</h3>\n<pre>function hello() {\n  console.log(\"Hello, mp-html!\")\n}</pre>\n<h3>7. 分割线</h3>\n<hr />\n<p style=\"text-align:center;color:#909399\">以上为 mp-html 组件演示内容</p>")
            fun gen_onMpHtmlLoad_fn(): Unit {
                console.log("mp-html 渲染完成", " at src/sub/uview-ultra/uview-ultra.uvue:2053")
            }
            val onMpHtmlLoad = ::gen_onMpHtmlLoad_fn
            fun gen_onMpHtmlLinktap_fn(e: UTSJSONObject): Unit {
                console.log("链接点击:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2057")
                val href = e["href"] as String
                if (href != null) {
                    uni_showToast(ShowToastOptions(title = "链接: " + href, icon = "none"))
                }
            }
            val onMpHtmlLinktap = ::gen_onMpHtmlLinktap_fn
            fun gen_onMpHtmlImgtap_fn(e: UTSJSONObject): Unit {
                console.log("图片点击:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2066")
            }
            val onMpHtmlImgtap = ::gen_onMpHtmlImgtap_fn
            fun gen_onMpHtmlError_fn(e: UTSJSONObject): Unit {
                console.log("mp-html error:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2070")
            }
            val onMpHtmlError = ::gen_onMpHtmlError_fn
            val transitionShow1 = ref(true)
            val transitionShow3 = ref(false)
            val transitionModes = ref(_uA<UTSJSONObject>(_uO("mode" to "fade-up", "show" to false), _uO("mode" to "slide-down", "show" to false), _uO("mode" to "zoom-in", "show" to false), _uO("mode" to "fade-left", "show" to false)))
            fun gen_toggleTransitionMode_fn(item: UTSJSONObject): Unit {
                val currentShow = (item.getBoolean("show") ?: false) as Boolean
                item.set("show", !currentShow)
            }
            val toggleTransitionMode = ::gen_toggleTransitionMode_fn
            val tabsList1 = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "科技"), _uO("name" to "音乐"), _uO("name" to "美食"), _uO("name" to "文化"), _uO("name" to "财经"), _uO("name" to "时事")))
            val tabsList2 = ref(_uA<UTSJSONObject>(_uO("name" to "关注", "badge" to _uO("isDot" to false, "value" to 6)), _uO("name" to "推荐", "badge" to _uO("isDot" to true)), _uO("name" to "电影"), _uO("name" to "科技", "disabled" to true), _uO("name" to "音乐")))
            val tabsList4 = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "科技"), _uO("name" to "音乐")))
            val tabsList4Small = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影")))
            fun gen_onTabsClick_fn(e: UTSJSONObject): Unit {
                console.log("tabs click:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2124")
            }
            val onTabsClick = ::gen_onTabsClick_fn
            fun gen_onTabsChange_fn(e: UTSJSONObject): Unit {
                console.log("tabs change:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2128")
            }
            val onTabsChange = ::gen_onTabsChange_fn
            fun gen_onTabsRightClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "右侧按钮点击", icon = "none"))
            }
            val onTabsRightClick = ::gen_onTabsRightClick_fn
            val tabbarValue1 = ref("0")
            val tabbarValue2 = ref("1")
            val tabbarValue3 = ref("home")
            val tabbarValue4 = ref("2")
            val tabbarValue5 = ref("0")
            val tabbarValue6 = ref("0")
            val tabbarValue7 = ref("0")
            fun onTabbarChange1(e: Any): Unit {
                tabbarValue1.value = e.toString()
            }
            fun onTabbarChange2(e: Any): Unit {
                tabbarValue2.value = e.toString()
            }
            fun onTabbarChange3(e: Any): Unit {
                tabbarValue3.value = e.toString()
            }
            fun onTabbarChange4(e: Any): Unit {
                tabbarValue4.value = e.toString()
            }
            fun onTabbarChange5(e: Any): Unit {
                tabbarValue5.value = e.toString()
            }
            fun onTabbarChange6(e: Any): Unit {
                tabbarValue6.value = e.toString()
            }
            fun onTabbarChange7(name: Any): Unit {
                if (name === "1") {
                    uni_showToast(ShowToastOptions(title = "请先登录", icon = "none"))
                    return
                }
                tabbarValue7.value = name.toString()
            }
            val subsectionList = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "热点")))
            val subsectionCurrent = ref(0)
            fun gen_onSubsectionChange_fn(e: UTSJSONObject): Unit {
                subsectionCurrent.value = e.getNumber("index") ?: 0
            }
            val onSubsectionChange = ::gen_onSubsectionChange_fn
            fun gen_onQrcodeResult_fn(e: String): Unit {
                console.log("qrcode result:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2185")
            }
            val onQrcodeResult = ::gen_onQrcodeResult_fn
            val parseContent1 = ref("<p>这是一段普通的<span style=\"color: #2979ff;\">富文本</span>内容，支持 <strong>加粗</strong>、<em>斜体</em> 等样式。</p><img src=\"https://picsum.photos/400/300?random=30\" />")
            val parseContent2 = ref("<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><p><b>粗体文字</b> <i>斜体文字</i> <u>下划线</u></p><blockquote>这是一段引用文字</blockquote><p>行内代码: <code>console.log('hello')</code></p><pre>function hello() {\n  return 'world'\n}</pre>")
            val parseContent3 = ref("<p>点击下方图片可预览：</p><img src=\"https://picsum.photos/400/300?random=31\" /><p>点击 <a href=\"https://www.baidu.com\">百度链接</a> 测试链接跳转</p>")
            val parseContent4 = ref("<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\"><tr><th>姓名</th><th>年龄</th></tr><tr><td>张三</td><td>28</td></tr><tr><td>李四</td><td>32</td></tr></table>")
            val parseContent5 = ref("<p>这是一段可以<span style=\"color: #fa3534;\">长按复制</span>的文本内容，尝试长按选中。</p>")
            val parseTagStyle = ref(_uO("p" to "font-size: 15px; color: #303133; line-height: 24px;"))
            fun gen_onParseImgTap_fn(e: UTSJSONObject): Unit {
                console.log("parse img tap:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2199")
            }
            val onParseImgTap = ::gen_onParseImgTap_fn
            fun gen_onParseLinkTap_fn(e: UTSJSONObject): Unit {
                console.log("parse link tap:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2203")
            }
            val onParseLinkTap = ::gen_onParseLinkTap_fn
            fun gen_onNavbarMiniLeftClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "左侧按钮点击", icon = "none"))
            }
            val onNavbarMiniLeftClick = ::gen_onNavbarMiniLeftClick_fn
            fun gen_onNavbarMiniHomeClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "首页按钮点击", icon = "none"))
            }
            val onNavbarMiniHomeClick = ::gen_onNavbarMiniHomeClick_fn
            val paginationCurrentPage = ref(1)
            val paginationPageSize = ref(10)
            val paginationTotal = ref(100)
            fun gen_onPaginationCurrentChange_fn(page: Number): Unit {
                paginationCurrentPage.value = page
                uni_showToast(ShowToastOptions(title = "当前页: " + page, icon = "none"))
            }
            val onPaginationCurrentChange = ::gen_onPaginationCurrentChange_fn
            fun gen_onPaginationSizeChange_fn(size: Number): Unit {
                paginationPageSize.value = size
                uni_showToast(ShowToastOptions(title = "每页: " + size + " 条", icon = "none"))
            }
            val onPaginationSizeChange = ::gen_onPaginationSizeChange_fn
            val paginationCurrentPage2 = ref(1)
            val paginationPageSize2 = ref(10)
            val paginationTotal2 = ref(50)
            fun gen_onPaginationCurrentChange2_fn(page: Number): Unit {
                paginationCurrentPage2.value = page
                uni_showToast(ShowToastOptions(title = "当前页: " + page, icon = "none"))
            }
            val onPaginationCurrentChange2 = ::gen_onPaginationCurrentChange2_fn
            val paginationCurrentPage3 = ref(1)
            fun gen_onPaginationCurrentChange3_fn(page: Number): Unit {
                paginationCurrentPage3.value = page
            }
            val onPaginationCurrentChange3 = ::gen_onPaginationCurrentChange3_fn
            fun gen_onCopySuccess_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "复制成功", icon = "success"))
            }
            val onCopySuccess = ::gen_onCopySuccess_fn
            val codeInputValue1 = ref("")
            val codeInputValue2 = ref("")
            val codeInputValue3 = ref("")
            val codeInputValue4 = ref("")
            val codeInputValue5 = ref("")
            val codeInputValue6 = ref("")
            fun gen_onCodeInputChange_fn(e: String): Unit {
                console.log("code-input change:", e, " at src/sub/uview-ultra/uview-ultra.uvue:2261")
            }
            val onCodeInputChange = ::gen_onCodeInputChange_fn
            fun gen_onCodeInputFinish_fn(e: String): Unit {
                uni_showToast(ShowToastOptions(title = "输入完成: " + e, icon = "success"))
            }
            val onCodeInputFinish = ::gen_onCodeInputFinish_fn
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_pagination = resolveEasyComponent("up-pagination", GenUniModulesUviewUltraComponentsUpPaginationUpPaginationClass)
                val _component_up_copy = resolveEasyComponent("up-copy", GenUniModulesUviewUltraComponentsUpCopyUpCopyClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_th = resolveEasyComponent("up-th", GenUniModulesUviewUltraComponentsUpThUpThClass)
                val _component_up_tr = resolveEasyComponent("up-tr", GenUniModulesUviewUltraComponentsUpTrUpTrClass)
                val _component_up_td = resolveEasyComponent("up-td", GenUniModulesUviewUltraComponentsUpTdUpTdClass)
                val _component_up_table = resolveEasyComponent("up-table", GenUniModulesUviewUltraComponentsUpTableUpTableClass)
                val _component_up_tag = resolveEasyComponent("up-tag", GenUniModulesUviewUltraComponentsUpTagUpTagClass)
                val _component_up_code_input = resolveEasyComponent("up-code-input", GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInputClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                val _component_up_qrcode = resolveEasyComponent("up-qrcode", GenUniModulesUviewUltraComponentsUpQrcodeUpQrcodeClass)
                val _component_up_parse = resolveEasyComponent("up-parse", GenUniModulesUviewUltraComponentsUpParseUpParseClass)
                val _component_up_steps_item = resolveEasyComponent("up-steps-item", GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemClass)
                val _component_up_steps = resolveEasyComponent("up-steps", GenUniModulesUviewUltraComponentsUpStepsUpStepsClass)
                val _component_up_navbar_mini = resolveEasyComponent("up-navbar-mini", GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMiniClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_tabs = resolveEasyComponent("up-tabs", GenUniModulesUviewUltraComponentsUpTabsUpTabsClass)
                val _component_up_tabbar_item = resolveEasyComponent("up-tabbar-item", GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItemClass)
                val _component_up_tabbar = resolveEasyComponent("up-tabbar", GenUniModulesUviewUltraComponentsUpTabbarUpTabbarClass)
                val _component_rich_text = resolveComponent("rich-text")
                val _component_up_read_more = resolveEasyComponent("up-read-more", GenUniModulesUviewUltraComponentsUpReadMoreUpReadMoreClass)
                val _component_up_avatar = resolveEasyComponent("up-avatar", GenUniModulesUviewUltraComponentsUpAvatarUpAvatarClass)
                val _component_up_avatar_group = resolveEasyComponent("up-avatar-group", GenUniModulesUviewUltraComponentsUpAvatarGroupUpAvatarGroupClass)
                val _component_up_link = resolveEasyComponent("up-link", GenUniModulesUviewUltraComponentsUpLinkUpLinkClass)
                val _component_up_lazy_load = resolveEasyComponent("up-lazy-load", GenUniModulesUviewUltraComponentsUpLazyLoadUpLazyLoadClass)
                val _component_mp_html = resolveEasyComponent("mp-html", GenUniModulesMpHtmlComponentsMpHtmlMpHtmlClass)
                val _component_up_loadmore = resolveEasyComponent("up-loadmore", GenUniModulesUviewUltraComponentsUpLoadmoreUpLoadmoreClass)
                val _component_up_album = resolveEasyComponent("up-album", GenUniModulesUviewUltraComponentsUpAlbumUpAlbumClass)
                val _component_up_index_anchor = resolveEasyComponent("up-index-anchor", GenUniModulesUviewUltraComponentsUpIndexAnchorUpIndexAnchorClass)
                val _component_up_index_item = resolveEasyComponent("up-index-item", GenUniModulesUviewUltraComponentsUpIndexItemUpIndexItemClass)
                val _component_up_index_list = resolveEasyComponent("up-index-list", GenUniModulesUviewUltraComponentsUpIndexListUpIndexListClass)
                val _component_up_navbar = resolveEasyComponent("up-navbar", GenUniModulesUviewUltraComponentsUpNavbarUpNavbarClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                val _component_up_subsection = resolveEasyComponent("up-subsection", GenUniModulesUviewUltraComponentsUpSubsectionUpSubsectionClass)
                val _component_up_dropdown_item = resolveEasyComponent("up-dropdown-item", GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItemClass)
                val _component_up_dropdown = resolveEasyComponent("up-dropdown", GenUniModulesUviewUltraComponentsUpDropdownUpDropdownClass)
                val _component_up_col = resolveEasyComponent("up-col", GenUniModulesUviewUltraComponentsUpColUpColClass)
                val _component_up_row = resolveEasyComponent("up-row", GenUniModulesUviewUltraComponentsUpRowUpRowClass)
                val _component_up_swipe_action_item = resolveEasyComponent("up-swipe-action-item", GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItemClass)
                val _component_up_swipe_action = resolveEasyComponent("up-swipe-action", GenUniModulesUviewUltraComponentsUpSwipeActionUpSwipeActionClass)
                val _component_up_swiper = resolveEasyComponent("up-swiper", GenUniModulesUviewUltraComponentsUpSwiperUpSwiperClass)
                val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
                val _component_up_badge = resolveEasyComponent("up-badge", GenUniModulesUviewUltraComponentsUpBadgeUpBadgeClass)
                val _component_up_image = resolveEasyComponent("up-image", GenUniModulesUviewUltraComponentsUpImageUpImageClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_cell_group = resolveEasyComponent("up-cell-group", GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_divider = resolveEasyComponent("up-divider", GenUniModulesUviewUltraComponentsUpDividerUpDividerClass)
                val _component_up_count_down = resolveEasyComponent("up-count-down", GenUniModulesUviewUltraComponentsUpCountDownUpCountDownClass)
                val _component_up_count_to = resolveEasyComponent("up-count-to", GenUniModulesUviewUltraComponentsUpCountToUpCountToClass)
                val _component_up_line_progress = resolveEasyComponent("up-line-progress", GenUniModulesUviewUltraComponentsUpLineProgressUpLineProgressClass)
                val _component_up_empty = resolveEasyComponent("up-empty", GenUniModulesUviewUltraComponentsUpEmptyUpEmptyClass)
                val _component_up_grid_item = resolveEasyComponent("up-grid-item", GenUniModulesUviewUltraComponentsUpGridItemUpGridItemClass)
                val _component_up_grid = resolveEasyComponent("up-grid", GenUniModulesUviewUltraComponentsUpGridUpGridClass)
                val _component_up_skeleton = resolveEasyComponent("up-skeleton", GenUniModulesUviewUltraComponentsUpSkeletonUpSkeletonClass)
                val _component_up_no_network = resolveEasyComponent("up-no-network", GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetworkClass)
                val _component_up_back_top = resolveEasyComponent("up-back-top", GenUniModulesUviewUltraComponentsUpBackTopUpBackTopClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "uview-ultra 示例"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "uview-ultra 组件演示", "auto-back" to true, "safe-area-inset-top" to true, "bg-color" to "#ffffff")),
                                    _cE("scroll-view", _uM("scroll-y" to true, "direction" to "vertical", "style" to _nS(_uM("height" to ("" + scrollHeight.value + "px"))), "scroll-top" to scrollViewScrollTop.value, "scroll-with-animation" to true, "onScroll" to onScroll), _uA(
                                        _cV(unref(GenSrcPagesBasicComponentsThemeSwitchCardClass)),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-pagination 分页器"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（prev, pager, next, total）"),
                                            _cV(_component_up_pagination, _uM("current-page" to paginationCurrentPage.value, "page-size" to paginationPageSize.value, "total" to paginationTotal.value, "layout" to "prev, pager, next, total", "onCurrentChange" to onPaginationCurrentChange, "onSizeChange" to onPaginationSizeChange), null, 8, _uA(
                                                "current-page",
                                                "page-size",
                                                "total"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 简化版（prev, total, next）"),
                                            _cV(_component_up_pagination, _uM("current-page" to paginationCurrentPage2.value, "page-size" to paginationPageSize2.value, "total" to paginationTotal2.value, "layout" to "prev, total, next", "prev-text" to "上一页", "next-text" to "下一页", "onCurrentChange" to onPaginationCurrentChange2), null, 8, _uA(
                                                "current-page",
                                                "page-size",
                                                "total"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 仅一页时隐藏（hideOnSinglePage）"),
                                            _cV(_component_up_pagination, _uM("current-page" to paginationCurrentPage3.value, "page-size" to 10, "total" to 5, "hide-on-single-page" to true, "onCurrentChange" to onPaginationCurrentChange3), null, 8, _uA(
                                                "current-page"
                                            )),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mt-4px"), "total=5, pageSize=10 → 只有 1 页，分页器自动隐藏")
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-copy 复制"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（content + 默认插槽）"),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_copy, _uM("content" to "uview-ultra is great !", "onSuccess" to onCopySuccess), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("text", _uM("class" to "text-14px text-__2979ff_"), "点击复制")
                                                    )
                                                }
                                                ), "_" to 1))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 配合按钮使用"),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_copy, _uM("content" to "uview-ultra is great !", "onSuccess" to onCopySuccess), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_button, _uM("type" to "primary", "text" to "点击复制", "size" to "mini"))
                                                    )
                                                }
                                                ), "_" to 1))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 不同提示样式（toast / modal / notice）"),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_copy, _uM("content" to "复制的内容 toast", "alert-style" to "toast", "onSuccess" to onCopySuccess), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_button, _uM("type" to "primary", "text" to "toast 提示", "size" to "mini"))
                                                    )
                                                }
                                                ), "_" to 1)),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_copy, _uM("content" to "复制的内容 modal", "alert-style" to "modal", "onSuccess" to onCopySuccess), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_button, _uM("type" to "success", "text" to "modal 提示", "size" to "mini"))
                                                    )
                                                }
                                                ), "_" to 1)),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_copy, _uM("content" to "复制的内容 notice", "alert-style" to "notice", "onSuccess" to onCopySuccess), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_button, _uM("type" to "warning", "text" to "notice 提示", "size" to "mini"))
                                                    )
                                                }
                                                ), "_" to 1))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-table 表格"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（th 表头 + td 数据单元格）"),
                                            _cV(_component_up_table, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "学校"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "班级"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "年龄"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "城市"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "浙江大学"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "二年级"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "22"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "杭州"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "清华大学"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "05班"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "24"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "北京"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "复旦大学"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "12班"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "21"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "上海"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 自定义样式（borderColor / bgColor / align / padding / fontSize / color）"),
                                            _cV(_component_up_table, _uM("border-color" to "#2979ff", "bg-color" to "#f8faff", "align" to "left", "padding" to "12rpx 8rpx", "font-size" to "13px", "color" to "#303133"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "姓名"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "职位"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "部门"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "张三"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "前端开发"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "技术部"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "李四"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "产品经理"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "产品部"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 自定义 th 表头样式（thStyle）"),
                                            _cV(_component_up_table, _uM("th-style" to _uO("backgroundColor" to "#19be6b", "color" to "#ffffff", "fontWeight" to "bold")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "商品"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "价格"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "销量"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "状态"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "苹果"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "¥5.8"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "1280"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "在售"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "香蕉"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "¥3.2"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "2560"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "在售"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "西瓜"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "¥12.5"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "890"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "售罄"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 自定义列宽（width 百分比）"),
                                            _cV(_component_up_table, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_th, _uM("width" to "30%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "姓名"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, _uM("width" to "20%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "年龄"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, _uM("width" to "50%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "地址"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, _uM("width" to "30%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "小明"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, _uM("width" to "20%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "18"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, _uM("width" to "50%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "北京市朝阳区xxx路"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, _uM("width" to "30%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "小红"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, _uM("width" to "20%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "20"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, _uM("width" to "50%"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "上海市浦东新区xxx号"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. content 插槽（非纯文本内容：按钮、图标等）"),
                                            _cV(_component_up_table, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "用户"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "等级"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_th, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "操作"
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "张三"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "VIP"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("content" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                                        _cV(_component_up_button, _uM("type" to "primary", "text" to "编辑", "size" to "mini")),
                                                                        _cE("view", _uM("class" to "w-8px")),
                                                                        _cV(_component_up_button, _uM("type" to "error", "text" to "删除", "size" to "mini"))
                                                                    ))
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_tr, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_td, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    "李四"
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("content" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cV(_component_up_tag, _uM("text" to "高级会员", "type" to "warning"))
                                                                )
                                                            }
                                                            ), "_" to 1)),
                                                            _cV(_component_up_td, null, _uM("content" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cV(_component_up_button, _uM("type" to "primary", "text" to "查看", "size" to "mini"))
                                                                )
                                                            }
                                                            ), "_" to 1))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-code-input 验证码输入"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（box 盒子模式 + maxlength=\"6\"）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue1.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue1.value = `$event`
                                                }
                                                , "maxlength" to 6, "mode" to "box", "onChange" to onCodeInputChange, "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mt-6px"), "输入完成后会触发 finish 事件"),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 底部横线模式（mode=\"line\"）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue2.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue2.value = `$event`
                                                }
                                                , "maxlength" to 4, "mode" to "line", "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 圆点密码模式（dot）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue3.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue3.value = `$event`
                                                }
                                                , "maxlength" to 6, "mode" to "box", "dot" to true, "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 自定义样式（size / color / fontSize / borderColor / bold）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue4.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue4.value = `$event`
                                                }
                                                , "maxlength" to 6, "mode" to "box", "size" to 50, "color" to "#19be6b", "font-size" to 22, "border-color" to "#19be6b", "bold" to true, "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. 自定义间距 + 细边框（space + hairline）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue5.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue5.value = `$event`
                                                }
                                                , "maxlength" to 6, "mode" to "box", "space" to 12, "hairline" to true, "border-color" to "#ff9900", "color" to "#ff9900", "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "6. 自动获取焦点（:focus=\"true\"）"),
                                            _cE("view", _uM("class" to "code-input-demo-row"), _uA(
                                                _cV(_component_up_code_input, _uM("modelValue" to codeInputValue6.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    codeInputValue6.value = `$event`
                                                }
                                                , "maxlength" to 4, "mode" to "box", "focus" to true, "onFinish" to onCodeInputFinish), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-transition 动画过渡"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（fade 淡入淡出 + 按钮切换）"),
                                            _cE("view", _uM("class" to "transition-demo-wrapper"), _uA(
                                                _cV(_component_up_transition, _uM("show" to transitionShow1.value, "mode" to "fade"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("view", _uM("class" to "transition-demo-box transition-demo-blue"), _uA(
                                                            _cE("text", _uM("class" to "text-14px text-white font-500"), "fade 淡入淡出")
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "show"
                                                )),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to if (transitionShow1.value) {
                                                    "隐藏"
                                                } else {
                                                    "显示"
                                                }
                                                , "size" to "mini", "onClick" to fun(){
                                                    transitionShow1.value = !transitionShow1.value
                                                }
                                                ), null, 8, _uA(
                                                    "text",
                                                    "onClick"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 多种动画模式（fade-up / slide-down / zoom-in / fade-left）"),
                                            _cE("view", _uM("class" to "transition-demo-grid"), _uA(
                                                _cE(Fragment, null, RenderHelpers.renderList(transitionModes.value, fun(item, __key, __index, _cached): Any {
                                                    return _cE("view", _uM("key" to item.getString("mode"), "class" to "transition-demo-item"), _uA(
                                                        _cE("text", _uM("class" to "text-11px text-__909399_ mb-6px"), _tD(item.getString("mode")), 1),
                                                        _cV(_component_up_transition, _uM("show" to (item.getBoolean("show") ?: false) as Boolean, "mode" to item.getString("mode")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                            return _uA(
                                                                _cE("view", _uM("class" to "transition-demo-box transition-demo-green"), _uA(
                                                                    _cE("text", _uM("class" to "text-12px text-white"), _tD(item.getString("mode")), 1)
                                                                ))
                                                            )
                                                        }
                                                        ), "_" to 2), 1032, _uA(
                                                            "show",
                                                            "mode"
                                                        )),
                                                        _cV(_component_up_button, _uM("type" to "primary", "text" to if ((item.getBoolean("show") ?: false)) {
                                                            "隐藏"
                                                        } else {
                                                            "显示"
                                                        }
                                                        , "size" to "mini", "onClick" to fun(){
                                                            toggleTransitionMode(item)
                                                        }
                                                        ), null, 8, _uA(
                                                            "text",
                                                            "onClick"
                                                        ))
                                                    ))
                                                }
                                                ), 128)
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 自定义时长 + 缓动（duration=\"800\" timing-function=\"linear\"）"),
                                            _cE("view", _uM("class" to "transition-demo-wrapper"), _uA(
                                                _cV(_component_up_transition, _uM("show" to transitionShow3.value, "mode" to "slide-right", "duration" to 800, "timing-function" to "linear"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("view", _uM("class" to "transition-demo-box transition-demo-orange"), _uA(
                                                            _cE("text", _uM("class" to "text-14px text-white font-500"), "slide-right · 800ms · linear")
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "show"
                                                )),
                                                _cV(_component_up_button, _uM("type" to "warning", "text" to if (transitionShow3.value) {
                                                    "隐藏"
                                                } else {
                                                    "显示"
                                                }
                                                , "size" to "mini", "onClick" to fun(){
                                                    transitionShow3.value = !transitionShow3.value
                                                }
                                                ), null, 8, _uA(
                                                    "text",
                                                    "onClick"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-qrcode 二维码"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（size + val）"),
                                            _cE("view", _uM("class" to "qrcode-demo-row"), _uA(
                                                _cV(_component_up_qrcode, _uM("size" to 180, "val" to "https://uview-ultra.lingyun.net"))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 带中间 Logo 图标（icon）"),
                                            _cE("view", _uM("class" to "qrcode-demo-row"), _uA(
                                                _cV(_component_up_qrcode, _uM("size" to 180, "val" to "uview-ultra", "icon" to "https://uview-ultra.jiangruyi.com/uview-ultra/common/logo.png"))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 自定义颜色（background / foreground）"),
                                            _cE("view", _uM("class" to "qrcode-demo-row"), _uA(
                                                _cV(_component_up_qrcode, _uM("size" to 160, "val" to "hello world", "background" to "#19be6b", "foreground" to "#ffffff"))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 加载状态（showLoading + loadingText）"),
                                            _cE("view", _uM("class" to "qrcode-demo-row"), _uA(
                                                _cV(_component_up_qrcode, _uM("size" to 160, "val" to "https://github.com", "show-loading" to true, "loading-text" to "生成中...", "onResult" to onQrcodeResult))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-parse 富文本解析"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（段落 + 图片）"),
                                            _cE("view", _uM("class" to "parse-demo-wrapper"), _uA(
                                                _cV(_component_up_parse, _uM("content" to parseContent1.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 富文本样式（h1~h6 / b / i / blockquote / code / pre）"),
                                            _cE("view", _uM("class" to "parse-demo-wrapper"), _uA(
                                                _cV(_component_up_parse, _uM("content" to parseContent2.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 图片 + 链接 + 预览（:preview-img=\"true\" @imgTap @linkTap）"),
                                            _cE("view", _uM("class" to "parse-demo-wrapper"), _uA(
                                                _cV(_component_up_parse, _uM("content" to parseContent3.value, "preview-img" to true, "onImgTap" to onParseImgTap, "onLinkTap" to onParseLinkTap), null, 8, _uA(
                                                    "content"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 表格渲染（table / tr / th / td）"),
                                            _cE("view", _uM("class" to "parse-demo-wrapper"), _uA(
                                                _cV(_component_up_parse, _uM("content" to parseContent4.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. 自定义标签样式（tagStyle）+ 长按复制（:selectable=\"true\"）"),
                                            _cE("view", _uM("class" to "parse-demo-wrapper"), _uA(
                                                _cV(_component_up_parse, _uM("content" to parseContent5.value, "tag-style" to parseTagStyle.value, "selectable" to true), null, 8, _uA(
                                                    "content",
                                                    "tag-style"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-steps 步骤条"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（current + title + desc）"),
                                            _cV(_component_up_steps, _uM("current" to "0"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "已出库", "desc" to "10:35")),
                                                    _cV(_component_up_steps_item, _uM("title" to "运输中", "desc" to "11:40"))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 错误状态（error=\"true\"）"),
                                            _cV(_component_up_steps, _uM("current" to "1"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "仓库着火", "desc" to "10:35", "error" to true)),
                                                    _cV(_component_up_steps_item, _uM("title" to "破产清算", "desc" to "11:40"))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 点状模式（dot）"),
                                            _cV(_component_up_steps, _uM("current" to "1", "dot" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "已出库", "desc" to "10:35")),
                                                    _cV(_component_up_steps_item, _uM("title" to "运输中", "desc" to "11:40"))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 竖向模式（direction=\"column\"）"),
                                            _cV(_component_up_steps, _uM("current" to "1", "direction" to "column"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "2026-06-23 10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "已出库", "desc" to "2026-06-23 10:35")),
                                                    _cV(_component_up_steps_item, _uM("title" to "运输中", "desc" to "2026-06-23 11:40"))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. 自定义图标（activeIcon + inactiveIcon）"),
                                            _cV(_component_up_steps, _uM("current" to "1", "active-icon" to "checkmark", "inactive-icon" to "arrow-right"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "已出库", "desc" to "10:35")),
                                                    _cV(_component_up_steps_item, _uM("title" to "运输中", "desc" to "11:40"))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "6. Slot 自定义图标（#icon）"),
                                            _cV(_component_up_steps, _uM("current" to "1"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "已下单", "desc" to "10:30")),
                                                    _cV(_component_up_steps_item, _uM("title" to "已出库", "desc" to "10:35")),
                                                    _cV(_component_up_steps_item, _uM("title" to "运输中", "desc" to "11:40"), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("text", _uM("class" to "steps-slot-icon"), "运")
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "7. 自定义颜色（activeColor / inactiveColor）"),
                                            _cV(_component_up_steps, _uM("current" to "2", "active-color" to "#19be6b", "inactive-color" to "#909399"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_steps_item, _uM("title" to "提交订单", "desc" to "已完成")),
                                                    _cV(_component_up_steps_item, _uM("title" to "商家审核", "desc" to "已通过")),
                                                    _cV(_component_up_steps_item, _uM("title" to "派送中", "desc" to "进行中")),
                                                    _cV(_component_up_steps_item, _uM("title" to "确认收货", "desc" to "待完成"))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-navbar-mini 迷你导航栏"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（固定顶部 + 安全区域适配）"),
                                            _cE("view", _uM("class" to "navbar-mini-demo-wrapper"), _uA(
                                                _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "left-icon" to "arrow-left", "bg-color" to "rgba(41,121,255,0.85)", "icon-color" to "#ffffff", "icon-size" to 18, "height" to "32px", "onLeftClick" to onNavbarMiniLeftClick, "onHomeClick" to onNavbarMiniHomeClick))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 自定义背景色和图标颜色"),
                                            _cE("view", _uM("class" to "navbar-mini-demo-row"), _uA(
                                                _cE("view", _uM("class" to "navbar-mini-demo-item"), _uA(
                                                    _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "bg-color" to "rgba(25,190,107,0.85)", "icon-color" to "#ffffff", "icon-size" to 16, "height" to "30px"))
                                                )),
                                                _cE("view", _uM("class" to "navbar-mini-demo-item"), _uA(
                                                    _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "bg-color" to "rgba(250,53,52,0.85)", "icon-color" to "#ffffff", "icon-size" to 16, "height" to "30px"))
                                                )),
                                                _cE("view", _uM("class" to "navbar-mini-demo-item"), _uA(
                                                    _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "bg-color" to "rgba(156,39,176,0.85)", "icon-color" to "#ffffff", "icon-size" to 16, "height" to "30px"))
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 自动返回上一页（:auto-back=\"true\"）+ 自定义首页路径"),
                                            _cE("view", _uM("class" to "navbar-mini-demo-wrapper"), _uA(
                                                _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "auto-back" to true, "home-url" to "/", "bg-color" to "rgba(255,152,0,0.85)", "icon-color" to "#ffffff", "icon-size" to 18, "height" to "32px"))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 自定义 slot 图标"),
                                            _cE("view", _uM("class" to "navbar-mini-demo-wrapper"), _uA(
                                                _cV(_component_up_navbar_mini, _uM("fixed" to false, "safe-area-inset-top" to false, "bg-color" to "rgba(0,0,0,0.6)", "icon-size" to 18, "height" to "34px"), _uM("left" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-left", "size" to "18", "color" to "#ffffff"))
                                                    )
                                                }
                                                ), "center" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "search", "size" to "18", "color" to "#ffffff"))
                                                    )
                                                }
                                                ), "_" to 1))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-tabs 标签页"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（list 数组 + @click + @change）"),
                                            _cV(_component_up_tabs, _uM("list" to tabsList1.value, "onClick" to onTabsClick, "onChange" to onTabsChange), null, 8, _uA(
                                                "list"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 显示徽标（badge.isDot / badge.value）+ 禁用（disabled）"),
                                            _cV(_component_up_tabs, _uM("list" to tabsList2.value, "onClick" to onTabsClick), null, 8, _uA(
                                                "list"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 自定义样式（activeStyle / inactiveStyle / itemStyle / lineWidth / lineColor）"),
                                            _cV(_component_up_tabs, _uM("list" to tabsList4.value, "line-width" to "30", "line-color" to "#f56c6c", "active-style" to _uO("color" to "#303133", "fontWeight" to "bold"), "inactive-style" to _uO("color" to "#606266"), "item-style" to "padding-left: 15px; padding-right: 15px; height: 34px;", "onClick" to onTabsClick), null, 8, _uA(
                                                "list"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 不可滚动（:scrollable=\"false\"）- 适用于标签少的场景"),
                                            _cV(_component_up_tabs, _uM("list" to tabsList4Small.value, "scrollable" to false, "onClick" to onTabsClick), null, 8, _uA(
                                                "list"
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. 右侧自定义插槽（#right slot）"),
                                            _cV(_component_up_tabs, _uM("list" to tabsList1.value), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "tabs-right-slot", "onClick" to withModifiers(onTabsRightClick, _uA(
                                                        "stop"
                                                    ))), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "size" to "21", "bold" to ""))
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-tabbar 底部导航栏"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（数字 name 匹配 value）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue1.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "onChange" to fun(e: Any){
                                                    return onTabbarChange1(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "name" to "0")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "放映厅", "icon" to "photo", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "直播", "icon" to "play-right", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "2. 显示徽标（dot 小圆点 + badge 数字）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue2.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "onChange" to fun(e: Any){
                                                    return onTabbarChange2(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "dot" to "", "name" to "0")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "消息", "icon" to "chat", "badge" to "3", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "购物车", "icon" to "cart", "badge" to "99+", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "3. 字符串 name 匹配"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue3.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "onChange" to fun(e: Any){
                                                    return onTabbarChange3(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "name" to "home")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "分类", "icon" to "list-dot", "name" to "category")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "消息", "icon" to "chat", "name" to "message")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "mine"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "4. 自定义选中颜色（active-color / inactive-color）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue4.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "active-color" to "#d81e06", "inactive-color" to "#999999", "onChange" to fun(e: Any){
                                                    return onTabbarChange4(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "name" to "0")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "放映厅", "icon" to "photo", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "直播", "icon" to "play-right", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "5. 自定义插槽图标（active-icon / inactive-icon slot）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue5.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "active-color" to "#2979ff", "onChange" to fun(e: Any){
                                                    return onTabbarChange5(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "name" to "0"), _uM("active-icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                            return _uA(
                                                                _cE("image", _uM("class" to "tabbar-slot-icon", "src" to "https://cdn.uviewui.com/uview/common/bell-selected.png"))
                                                            )
                                                        }
                                                        ), "inactive-icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                            return _uA(
                                                                _cE("image", _uM("class" to "tabbar-slot-icon", "src" to "https://cdn.uviewui.com/uview/common/bell.png"))
                                                            )
                                                        }
                                                        ), "_" to 1)),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "放映厅", "icon" to "photo", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "直播", "icon" to "play-right", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "6. 移除顶部边框（:border=\"false\"）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue6.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "border" to false, "onChange" to fun(e: Any){
                                                    return onTabbarChange6(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "name" to "0")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "放映厅", "icon" to "photo", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "直播", "icon" to "play-right", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            )),
                                            _cE("text", _uM("class" to "demo-sub-label mt-15px"), "7. 拦截切换（点击\"放映厅\"弹 toast 拦截）"),
                                            _cE("view", _uM("class" to "tabbar-demo-wrapper"), _uA(
                                                _cV(_component_up_tabbar, _uM("value" to tabbarValue7.value, "fixed" to false, "placeholder" to false, "safe-area-inset-bottom" to false, "onChange" to fun(e: Any){
                                                    return onTabbarChange7(e)
                                                }
                                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_tabbar_item, _uM("text" to "首页", "icon" to "home", "name" to "0")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "放映厅", "icon" to "photo", "name" to "1")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "直播", "icon" to "play-right", "name" to "2")),
                                                        _cV(_component_up_tabbar_item, _uM("text" to "我的", "icon" to "account", "name" to "3"))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "value",
                                                    "onChange"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-read-more 展开阅读更多 "),
                                            _cV(_component_up_read_more, _uM("show-height" to "120"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_rich_text, _uM("nodes" to readMoreContent.value), null, 8, _uA(
                                                        "nodes"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "mt-10px"), _uA(
                                                _cV(_component_up_read_more, _uM("toggle" to true, "show-height" to "120", "close-text" to "展开阅读全文", "open-text" to "收起"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_rich_text, _uM("nodes" to readMoreContent.value), null, 8, _uA(
                                                            "nodes"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1))
                                            )),
                                            _cE("view", _uM("class" to "mt-10px"), _uA(
                                                _cV(_component_up_read_more, _uM("show-height" to "100", "color" to "#19be6b", "font-size" to 12, "close-text" to "查看更多"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_rich_text, _uM("nodes" to readMoreContent.value), null, 8, _uA(
                                                            "nodes"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-avatar 头像 "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_avatar, _uM("src" to avatarSrc.value, "size" to "40"), null, 8, _uA(
                                                    "src"
                                                )),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("src" to avatarSrc.value, "size" to "40", "shape" to "square"), null, 8, _uA(
                                                    "src"
                                                )),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("src" to avatarSrc.value, "size" to "55", "mode" to "aspectFill"), null, 8, _uA(
                                                    "src"
                                                )),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("src" to "/invalid-path.png", "size" to "40", "default-url" to "/static/logo.png"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px"), _uA(
                                                _cV(_component_up_avatar, _uM("text" to "U", "size" to "40", "bg-color" to "#2979ff")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("text" to "A", "size" to "40", "bg-color" to "#19be6b")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("random-bg-color" to true, "text" to "张", "size" to "40")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("random-bg-color" to true, "text" to "李", "size" to "40", "font-size" to "16")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("random-bg-color" to true, "text" to "王五", "size" to "45", "font-size" to "14"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px"), _uA(
                                                _cV(_component_up_avatar, _uM("icon" to "star-fill", "size" to "40", "bg-color" to "#ffca28", "font-size" to "22")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("icon" to "heart-fill", "size" to "40", "bg-color" to "#fa3534", "font-size" to "22")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("icon" to "setting-fill", "size" to "40", "bg-color" to "#909399", "font-size" to "22")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_avatar, _uM("icon" to "photo-fill", "size" to "40", "bg-color" to "#19be6b", "font-size" to "22"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px items-center"), _uA(
                                                _cE("text", _uM("class" to "text-12px text-__909399_ mr-10px"), "头像组:"),
                                                _cV(_component_up_avatar_group, _uM("urls" to avatarGroupUrls.value, "size" to "35", "gap" to 0.4, "max-count" to 5, "show-more" to true, "onShowMore" to onAvatarGroupMore), null, 8, _uA(
                                                    "urls"
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px items-center"), _uA(
                                                _cV(_component_up_avatar, _uM("src" to avatarSrc.value, "size" to "40", "onClick" to onAvatarClick), null, 8, _uA(
                                                    "src"
                                                )),
                                                _cE("text", _uM("class" to "text-12px text-__909399_ ml-10px"), "点击头像可触发事件")
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-link 超链接 "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_link, _uM("href" to "https://uview-ultra.lingyun.net", "text" to "打开 uview-ultra UI 文档", "onClick" to onLinkClick))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-8px"), _uA(
                                                _cV(_component_up_link, _uM("href" to "https://uniapp.dcloud.net.cn", "text" to "uni-app X 官方文档", "under-line" to true, "onClick" to onLinkClick))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-8px"), _uA(
                                                _cV(_component_up_link, _uM("href" to "https://github.com", "text" to "GitHub", "color" to "#19be6b", "line-color" to "#19be6b", "under-line" to true, "font-size" to "16", "onClick" to onLinkClick)),
                                                _cE("view", _uM("class" to "w-20px")),
                                                _cV(_component_up_link, _uM("href" to "https://www.baidu.com", "text" to "百度一下", "color" to "#fa3534", "line-color" to "#fa3534", "under-line" to true, "font-size" to "16", "onClick" to onLinkClick)),
                                                _cE("view", _uM("class" to "w-20px")),
                                                _cV(_component_up_link, _uM("href" to "https://www.zhihu.com", "text" to "知乎", "color" to "#ff9900", "font-size" to "16", "onClick" to onLinkClick))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-8px"), _uA(
                                                _cV(_component_up_link, _uM("href" to "https://uview-ultra.lingyun.net", "text" to "小程序内打开（复制链接到浏览器）", "under-line" to true, "mp-tips" to "链接已复制，请在浏览器中打开", "font-size" to "13", "color" to "#909399", "onClick" to onLinkClick))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-lazy-load 懒加载 "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cE("view", _uM("class" to "lazy-load-item"), _uA(
                                                    _cV(_component_up_lazy_load, _uM("image" to "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg", "loading-img" to "/static/logo.png", "height" to 1020, "border-radius" to 8, "index" to "img1", "onClick" to onLazyLoadClick, "onError" to onLazyLoadError))
                                                )),
                                                _cE("view", _uM("class" to "lazy-load-item"), _uA(
                                                    _cV(_component_up_lazy_load, _uM("image" to "https://picsum.photos/240/240?random=22", "loading-img" to "/static/logo.png", "height" to 120, "border-radius" to 8, "index" to "img2", "onClick" to onLazyLoadClick, "onError" to onLazyLoadError))
                                                )),
                                                _cE("view", _uM("class" to "lazy-load-item"), _uA(
                                                    _cV(_component_up_lazy_load, _uM("image" to "https://picsum.photos/240/240?random=23", "loading-img" to "/static/logo.png", "height" to 120, "border-radius" to 8, "index" to "img3", "onClick" to onLazyLoadClick, "onError" to onLazyLoadError))
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px items-center"), _uA(
                                                _cE("view", _uM("class" to "lazy-load-item"), _uA(
                                                    _cV(_component_up_lazy_load, _uM("image" to "https://invalid-url-test/not-exist.png", "loading-img" to "/static/logo.png", "error-img" to "/static/logo.png", "height" to 100, "border-radius" to 8, "index" to "error-img"))
                                                )),
                                                _cE("text", _uM("class" to "text-12px text-__909399_ ml-10px"), "加载失败自动展示 error-img 占位图")
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " mp-html 富文本 "),
                                            _cV(_component_mp_html, _uM("content" to mpHtmlContent.value, "preview-img" to true, "show-img-menu" to true, "selectable" to true, "onLoad" to onMpHtmlLoad, "onLinktap" to onMpHtmlLinktap, "onImgtap" to onMpHtmlImgtap, "onError" to onMpHtmlError), null, 8, _uA(
                                                "content"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-loadmore "),
                                            _cE("view", _uM("class" to "flex-col items-center"), _uA(
                                                _cV(_component_up_loadmore, _uM("status" to loadmoreStatus.value, "is-dot" to loadmoreIsDot.value, "line" to true), null, 8, _uA(
                                                    "status",
                                                    "is-dot"
                                                )),
                                                _cE("view", _uM("class" to "demo-row mt-10px"), _uA(
                                                    _cV(_component_up_button, _uM("type" to "primary", "text" to "加载更多", "size" to "mini", "onClick" to fun(){
                                                        loadmoreStatus.value = "loadmore"
                                                        loadmoreIsDot.value = false
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_button, _uM("type" to "warning", "text" to "加载中", "size" to "mini", "onClick" to fun(){
                                                        loadmoreStatus.value = "loading"
                                                        loadmoreIsDot.value = false
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_button, _uM("type" to "info", "text" to "没有更多", "size" to "mini", "onClick" to fun(){
                                                        loadmoreStatus.value = "nomore"
                                                        loadmoreIsDot.value = false
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_button, _uM("type" to "error", "text" to "显示圆点", "size" to "mini", "onClick" to fun(){
                                                        loadmoreStatus.value = "nomore"
                                                        loadmoreIsDot.value = true
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    ))
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-album "),
                                            _cV(_component_up_album, _uM("urls" to albumUrls.value, "multiple-size" to "72", "space" to "6", "max-count" to 9, "show-more" to true, "row-count" to "3", "radius" to "6"), null, 8, _uA(
                                                "urls"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-index-list "),
                                            _cE("view", _uM("class" to "index-list-demo-wrapper"), _uA(
                                                _cV(_component_up_index_list, _uM("index-list" to indexList.value, "sticky" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE(Fragment, null, RenderHelpers.renderList(itemArr.value, fun(item, index, __index, _cached): Any {
                                                            return _cV(_component_up_index_item, _uM("key" to index), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cV(_component_up_index_anchor, _uM("text" to indexList.value[index]), null, 8, _uA(
                                                                        "text"
                                                                    )),
                                                                    _cE(Fragment, null, RenderHelpers.renderList(item, fun(cell, cellIndex, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to cellIndex, "class" to "list-cell"), _uA(
                                                                            _cE("text", _uM("class" to "list-cell-text"), _tD(cell as String), 1)
                                                                        ))
                                                                    }
                                                                    ), 128)
                                                                )
                                                            }
                                                            ), "_" to 2), 1024)
                                                        }
                                                        ), 128)
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "index-list"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-navbar "),
                                            _cV(_component_up_navbar, _uM("title" to "自定义导航栏", "fixed" to false, "auto-back" to false, "safe-area-inset-top" to false, "bg-color" to "#2979ff")),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_navbar, _uM("title" to "浅色主题", "fixed" to false, "auto-back" to false, "safe-area-inset-top" to false, "bg-color" to "#ffffff", "border" to true)),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_navbar, _uM("title" to "带返回按钮", "fixed" to false, "auto-back" to true, "safe-area-inset-top" to false, "bg-color" to "#f5f5f5")),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_navbar, _uM("title" to "自定义标题", "fixed" to false, "auto-back" to false, "safe-area-inset-top" to false, "bg-color" to "#ffffff", "border" to true, "left-text" to "返回", "right-text" to "更多")),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_navbar, _uM("title" to "自定义图标", "fixed" to false, "auto-back" to false, "safe-area-inset-top" to false, "bg-color" to "#ffffff", "border" to true, "left-text" to "返回", "left-icon" to "arrow-left", "right-icon" to "setting")),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_navbar, _uM("fixed" to false, "left-text" to "返回", "title" to "个人中心", "safe-area-inset-top" to false), _uM("left" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "u-nav-slot"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-left", "size" to "19")),
                                                        _cV(_component_up_line, _uM("direction" to "column", "hairline" to false, "length" to "16", "margin" to "0 8px")),
                                                        _cV(_component_up_icon, _uM("name" to "home", "size" to "20"))
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-subsection "),
                                            _cV(_component_up_subsection, _uM("list" to subsectionList.value, "current" to subsectionCurrent.value, "onChange" to onSubsectionChange), null, 8, _uA(
                                                "list",
                                                "current"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-waterfall"),
                                            _cE("view", _uM("class" to "waterfall-container"), _uA(
                                                _cE("view", _uM("class" to "waterfall-column"), _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(waterfallLeftList.value, fun(item, __key, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to item.getString("id"), "class" to "waterfall-card"), _uA(
                                                            _cE("image", _uM("src" to item.getString("image"), "mode" to "widthFix", "class" to "waterfall-image"), null, 8, _uA(
                                                                "src"
                                                            )),
                                                            _cE("view", _uM("class" to "waterfall-info"), _uA(
                                                                _cE("text", _uM("class" to "waterfall-title"), _tD(item.getString("title")), 1),
                                                                _cE("text", _uM("class" to "waterfall-price"), _tD(item.getString("price")), 1)
                                                            ))
                                                        ))
                                                    }
                                                    ), 128)
                                                )),
                                                _cE("view", _uM("class" to "waterfall-column waterfall-column-right"), _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(waterfallRightList.value, fun(item, __key, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to item.getString("id"), "class" to "waterfall-card"), _uA(
                                                            _cE("image", _uM("src" to item.getString("image"), "mode" to "widthFix", "class" to "waterfall-image"), null, 8, _uA(
                                                                "src"
                                                            )),
                                                            _cE("view", _uM("class" to "waterfall-info"), _uA(
                                                                _cE("text", _uM("class" to "waterfall-title"), _tD(item.getString("title")), 1),
                                                                _cE("text", _uM("class" to "waterfall-price"), _tD(item.getString("price")), 1)
                                                            ))
                                                        ))
                                                    }
                                                    ), 128)
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "demo-row mt-10px"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "加载更多", "size" to "mini", "onClick" to loadMoreWaterfall)),
                                                _cV(_component_up_button, _uM("type" to "info", "text" to "清空", "size" to "mini", "onClick" to clearWaterfall))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "up-dropdown 下拉菜单"),
                                            _cE("text", _uM("class" to "demo-sub-label"), "1. 基本使用（多列选项）"),
                                            _cV(_component_up_dropdown, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to value1.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        value1.value = `$event`
                                                    }
                                                    , "title" to "距离", "options" to options1.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    )),
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to value2.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        value2.value = `$event`
                                                    }
                                                    , "title" to "温度", "options" to options2.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "2. 自定义颜色、圆角、图标、字号"),
                                            _cV(_component_up_dropdown, _uM("active-color" to "#19be6b", "inactive-color" to "#909399", "border-radius" to 12, "menu-icon" to "arrow-down-fill", "menu-icon-size" to "22", "title-size" to "26", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownGreenValue1.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownGreenValue1.value = `$event`
                                                    }
                                                    , "title" to "区域", "options" to dropdownRegionOptions1.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    )),
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownGreenValue2.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownGreenValue2.value = `$event`
                                                    }
                                                    , "title" to "排序", "options" to dropdownRegionOptions2.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "3. 禁用某个选项卡"),
                                            _cV(_component_up_dropdown, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownDisValue1.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownDisValue1.value = `$event`
                                                    }
                                                    , "title" to "正常项", "options" to options1.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    )),
                                                    _cV(_component_up_dropdown_item, _uM("title" to "已禁用", "options" to options2.value, "disabled" to true), null, 8, _uA(
                                                        "options"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "4. 点击遮罩/自身标题不关闭，选项 change 事件"),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mb-6px"), "当前选中值: " + _tD(dropdownEventValue.value), 1),
                                            _cV(_component_up_dropdown, _uM("close-on-click-mask" to false, "close-on-click-self" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownEventValue.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownEventValue.value = `$event`
                                                    }
                                                    , "title" to "选项（不自动关）", "options" to options1.value, "onChange" to fun(value: Any){
                                                        return onDropdownChange(value)
                                                    }
                                                    ), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options",
                                                        "onChange"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "5. 自定义 Slot 内容（带按钮关闭）"),
                                            _cV(_component_up_dropdown, _uM("ref_key" to "uDropdownRef1", "ref" to uDropdownRef1), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("title" to "自定义"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-slot-content"), _uA(
                                                                _cE("view", _uM("class" to "py-15px"), _uA(
                                                                    _cE("text", _uM("class" to "text-14px text-__606266_"), "其他自定义内容")
                                                                )),
                                                                _cE("view", _uM("class" to "pb-15px"), _uA(
                                                                    _cE("text", _uM("class" to "text-12px text-__909399_"), "可以放任意组件或表单")
                                                                )),
                                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "确定", "size" to "mini", "onClick" to fun(){
                                                                    closeDropdown("uDropdownRef1")
                                                                }
                                                                ), null, 8, _uA(
                                                                    "onClick"
                                                                ))
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 512)
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "6. Slot 内嵌 scroll-view 滚动内容"),
                                            _cV(_component_up_dropdown, _uM("ref_key" to "uDropdownRef2", "ref" to uDropdownRef2), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("title" to "滚动列表"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-slot-content", "style" to _nS(_uM("background-color" to "#ffffff"))), _uA(
                                                                _cE("scroll-view", _uM("scroll-y" to "true", "style" to _nS(_uM("height" to "180px"))), _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList(15, fun(i, __key, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to i, "class" to "dropdown-scroll-item", "onClick" to fun(){
                                                                            onDropdownScrollSelect(i)
                                                                            closeDropdown("uDropdownRef2")
                                                                        }
                                                                        ), _uA(
                                                                            _cE("text", _uM("class" to "text-14px text-__303133_"), "选项 " + _tD(i), 1),
                                                                            _cE("text", _uM("class" to "text-12px text-__909399_"), "这是第 " + _tD(i) + " 项的描述信息", 1)
                                                                        ), 8, _uA(
                                                                            "onClick"
                                                                        ))
                                                                    }
                                                                    ), 64)
                                                                ), 4),
                                                                _cE("view", _uM("class" to "dropdown-scroll-footer"), _uA(
                                                                    _cV(_component_up_button, _uM("type" to "info", "text" to "关闭", "size" to "mini", "onClick" to fun(){
                                                                        closeDropdown("uDropdownRef2")
                                                                    }
                                                                    ), null, 8, _uA(
                                                                        "onClick"
                                                                    ))
                                                                ))
                                                            ), 4)
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 512),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mt-6px"), "已选滚动项: " + _tD(dropdownScrollSelected.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "7. 手动控制菜单高亮（open / close 事件 + highlight 方法）"),
                                            _cV(_component_up_dropdown, _uM("ref_key" to "uDropdownRef3", "ref" to uDropdownRef3, "onOpen" to onDropdownOpen, "onClose" to onDropdownClose), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownHLValue1.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownHLValue1.value = `$event`
                                                    }
                                                    , "title" to "距离", "options" to options1.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    )),
                                                    _cV(_component_up_dropdown_item, _uM("modelValue" to dropdownHLValue2.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                                        dropdownHLValue2.value = `$event`
                                                    }
                                                    , "title" to "温度", "options" to options2.value), null, 8, _uA(
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                        "options"
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 512)
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "8. 自定义 Slot 多列宫格布局（模拟服务分类菜单）"),
                                            _cV(_component_up_dropdown, _uM("ref_key" to "uDropdownRefGrid1", "ref" to uDropdownRefGrid1), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("title" to "分类"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-grid-panel"), _uA(
                                                                _cV(_component_up_row, _uM("gutter" to "10", "justify" to "space-between"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                    return _uA(
                                                                        _cE(Fragment, null, RenderHelpers.renderList(dropdownGridItems.value, fun(item, __key, __index, _cached): Any {
                                                                            return _cV(_component_up_col, _uM("key" to item.getString("text"), "span" to "6"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                                return _uA(
                                                                                    _cE("view", _uM("class" to "dropdown-grid-item", "onClick" to fun(){
                                                                                        onDropdownGridSelect(item.getString("text") ?: "")
                                                                                        closeDropdown("uDropdownRefGrid1")
                                                                                    }
                                                                                    ), _uA(
                                                                                        _cE("view", _uM("class" to "dropdown-grid-icon"), _uA(
                                                                                            _cV(_component_up_icon, _uM("name" to item.getString("icon"), "size" to "24", "color" to (item.getString("color") ?: "#2979ff")), null, 8, _uA(
                                                                                                "name",
                                                                                                "color"
                                                                                            ))
                                                                                        )),
                                                                                        _cE("text", _uM("class" to "dropdown-grid-label"), _tD(item.getString("text")), 1)
                                                                                    ), 8, _uA(
                                                                                        "onClick"
                                                                                    ))
                                                                                )
                                                                            }
                                                                            ), "_" to 2), 1024)
                                                                        }
                                                                        ), 128)
                                                                    )
                                                                }
                                                                ), "_" to 1))
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_dropdown_item, _uM("title" to "筛选"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-grid-panel"), _uA(
                                                                _cV(_component_up_row, _uM("gutter" to "10", "justify" to "space-between"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                    return _uA(
                                                                        _cE(Fragment, null, RenderHelpers.renderList(dropdownGridFilterItems.value, fun(item, __key, __index, _cached): Any {
                                                                            return _cV(_component_up_col, _uM("key" to item.getString("text"), "span" to "6"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                                return _uA(
                                                                                    _cE("view", _uM("class" to "dropdown-grid-item", "onClick" to fun(){
                                                                                        onDropdownGridSelect(item.getString("text") ?: "")
                                                                                        closeDropdown("uDropdownRefGrid1")
                                                                                    }
                                                                                    ), _uA(
                                                                                        _cE("view", _uM("class" to "dropdown-grid-icon"), _uA(
                                                                                            _cV(_component_up_icon, _uM("name" to item.getString("icon"), "size" to "24", "color" to (item.getString("color") ?: "#19be6b")), null, 8, _uA(
                                                                                                "name",
                                                                                                "color"
                                                                                            ))
                                                                                        )),
                                                                                        _cE("text", _uM("class" to "dropdown-grid-label"), _tD(item.getString("text")), 1)
                                                                                    ), 8, _uA(
                                                                                        "onClick"
                                                                                    ))
                                                                                )
                                                                            }
                                                                            ), "_" to 2), 1024)
                                                                        }
                                                                        ), 128)
                                                                    )
                                                                }
                                                                ), "_" to 1))
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 512),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mt-6px"), "已选宫格项: " + _tD(dropdownGridSelected.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-sub-label"), "9. 自定义 Slot 卡片式布局（带图片 + 标题 + 描述）"),
                                            _cV(_component_up_dropdown, _uM("ref_key" to "uDropdownRefCard", "ref" to uDropdownRefCard), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_dropdown_item, _uM("title" to "热门推荐"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-card-panel"), _uA(
                                                                _cE("view", _uM("class" to "dropdown-card-grid"), _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList(dropdownCardItems.value, fun(card, __key, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to card.getString("id"), "class" to "dropdown-card", "onClick" to fun(){
                                                                            onDropdownCardSelect(card.getString("title") ?: "")
                                                                            closeDropdown("uDropdownRefCard")
                                                                        }
                                                                        ), _uA(
                                                                            _cE("image", _uM("src" to card.getString("image"), "mode" to "aspectFill", "class" to "dropdown-card-img"), null, 8, _uA(
                                                                                "src"
                                                                            )),
                                                                            _cE("view", _uM("class" to "dropdown-card-body"), _uA(
                                                                                _cE("text", _uM("class" to "dropdown-card-title"), _tD(card.getString("title")), 1),
                                                                                _cE("text", _uM("class" to "dropdown-card-desc"), _tD(card.getString("desc")), 1),
                                                                                _cE("view", _uM("class" to "dropdown-card-footer"), _uA(
                                                                                    _cE("text", _uM("class" to "dropdown-card-price"), _tD(card.getString("price")), 1),
                                                                                    _cE("view", _uM("class" to "dropdown-card-tag"), _uA(
                                                                                        _cE("text", _uM("class" to "dropdown-card-tag-text"), _tD(card.getString("tag")), 1)
                                                                                    ))
                                                                                ))
                                                                            ))
                                                                        ), 8, _uA(
                                                                            "onClick"
                                                                        ))
                                                                    }
                                                                    ), 128)
                                                                ))
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_dropdown_item, _uM("title" to "新品上市"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "dropdown-card-panel"), _uA(
                                                                _cE("view", _uM("class" to "dropdown-card-grid"), _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList(dropdownCardItems2.value, fun(card, __key, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to card.getString("id"), "class" to "dropdown-card", "onClick" to fun(){
                                                                            onDropdownCardSelect(card.getString("title") ?: "")
                                                                            closeDropdown("uDropdownRefCard")
                                                                        }
                                                                        ), _uA(
                                                                            _cE("image", _uM("src" to card.getString("image"), "mode" to "aspectFill", "class" to "dropdown-card-img"), null, 8, _uA(
                                                                                "src"
                                                                            )),
                                                                            _cE("view", _uM("class" to "dropdown-card-body"), _uA(
                                                                                _cE("text", _uM("class" to "dropdown-card-title"), _tD(card.getString("title")), 1),
                                                                                _cE("text", _uM("class" to "dropdown-card-desc"), _tD(card.getString("desc")), 1),
                                                                                _cE("view", _uM("class" to "dropdown-card-footer"), _uA(
                                                                                    _cE("text", _uM("class" to "dropdown-card-price"), _tD(card.getString("price")), 1),
                                                                                    _cE("view", _uM("class" to "dropdown-card-tag"), _uA(
                                                                                        _cE("text", _uM("class" to "dropdown-card-tag-text"), _tD(card.getString("tag")), 1)
                                                                                    ))
                                                                                ))
                                                                            ))
                                                                        ), 8, _uA(
                                                                            "onClick"
                                                                        ))
                                                                    }
                                                                    ), 128)
                                                                ))
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 512),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mt-6px"), "已选卡片: " + _tD(dropdownCardSelected.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-swipe-action "),
                                            _cV(_component_up_swipe_action, _uM("auto-close" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(swipeActionList.value, fun(item, idx, __index, _cached): Any {
                                                        return _cV(_component_up_swipe_action_item, _uM("key" to item["id"] as String, "options" to swipeActionOptions.value, "name" to idx, "close-on-click" to true, "onClick" to onSwipeActionClick), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                            return _uA(
                                                                _cE("view", _uM("class" to "swipe-action-content"), _uA(
                                                                    _cE("text", _uM("class" to "text-14px text-__303133_"), _tD(item["title"] as String), 1)
                                                                ))
                                                            )
                                                        }
                                                        ), "_" to 2), 1032, _uA(
                                                            "options",
                                                            "name"
                                                        ))
                                                    }
                                                    ), 128)
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cV(_component_up_swiper, _uM("list" to swiperList.value, "key-name" to "image", "indicator" to true, "indicator-mode" to "dot", "circular" to true, "autoplay" to true, "interval" to 3000, "height" to "180", "show-title" to true), null, 8, _uA(
                                            "list"
                                        )),
                                        _cE("text", _uM("class" to "section-title"), " 基础组件 "),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-button "),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "主要", "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "成功", "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "warning", "text" to "警告", "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "error", "text" to "错误", "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "info", "text" to "信息", "size" to "mini"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "朴素", "plain" to true, "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "细边框", "plain" to true, "hairline" to true, "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "圆形", "shape" to "circle", "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "禁用", "disabled" to true, "size" to "mini"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "加载中", "loading" to true, "size" to "mini")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "自定义色", "color" to "#7232dd", "size" to "mini"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-icon "),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_icon, _uM("name" to "home", "size" to "28", "label" to "home", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "search", "size" to "28", "color" to "#2979ff", "label" to "search", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "setting", "size" to "28", "color" to "#ff9900", "label" to "setting", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "heart", "size" to "28", "color" to "#fa3534", "label" to "heart", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "star", "size" to "28", "color" to "#ffca28", "label" to "star", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "photo", "size" to "28", "color" to "#19be6b", "label" to "photo", "label-size" to "10", "label-pos" to "bottom")),
                                                _cV(_component_up_icon, _uM("name" to "map", "size" to "28", "color" to "#909399", "label" to "map", "label-size" to "10", "label-pos" to "bottom"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-text "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_text, _uM("text" to "普通文本")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_text, _uM("type" to "primary", "text" to "主色文本")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_text, _uM("type" to "error", "text" to "错误提示", "bold" to true))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px"), _uA(
                                                _cV(_component_up_text, _uM("mode" to "price", "text" to "99.9")),
                                                _cE("view", _uM("class" to "w-20px")),
                                                _cV(_component_up_text, _uM("mode" to "phone", "text" to "13800000000", "format" to "encrypt"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-tag "),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_tag, _uM("text" to "主要", "type" to "primary")),
                                                _cV(_component_up_tag, _uM("text" to "成功", "type" to "success")),
                                                _cV(_component_up_tag, _uM("text" to "警告", "type" to "warning")),
                                                _cV(_component_up_tag, _uM("text" to "错误", "type" to "error")),
                                                _cV(_component_up_tag, _uM("text" to "信息", "type" to "info"))
                                            )),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_tag, _uM("text" to "朴素", "type" to "primary", "plain" to true)),
                                                _cV(_component_up_tag, _uM("text" to "圆形", "type" to "primary", "shape" to "circle")),
                                                _cV(_component_up_tag, _uM("text" to "大号", "type" to "primary", "size" to "large")),
                                                _cV(_component_up_tag, _uM("text" to "中号", "type" to "primary", "size" to "medium")),
                                                _cV(_component_up_tag, _uM("text" to "小号", "type" to "primary", "size" to "mini")),
                                                _cV(_component_up_tag, _uM("text" to "可关闭", "type" to "error", "plain" to true, "closable" to true, "show" to showTag.value, "onClose" to fun(){
                                                    showTag.value = false
                                                }
                                                ), null, 8, _uA(
                                                    "show",
                                                    "onClose"
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "demo-row-start mt-10px"), _uA(
                                                _cV(_component_up_tag, _uM("text" to "图片标签", "icon" to "/static/logo.png", "size" to "medium", "plain" to true))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-badge "),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_badge, _uM("value" to 9, "type" to "error")),
                                                _cV(_component_up_badge, _uM("value" to 99, "type" to "error")),
                                                _cV(_component_up_badge, _uM("value" to 999, "type" to "error", "max" to 99)),
                                                _cV(_component_up_badge, _uM("is-dot" to true, "type" to "error")),
                                                _cV(_component_up_badge, _uM("value" to "new", "type" to "error"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-image "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_image, _uM("src" to "/static/logo.png", "width" to "60px", "height" to "60px")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_image, _uM("src" to "/static/logo.png", "width" to "60px", "height" to "60px", "shape" to "circle")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_image, _uM("src" to "/static/logo.png", "width" to "60px", "height" to "60px", "radius" to "8px")),
                                                _cE("view", _uM("class" to "w-15px")),
                                                _cV(_component_up_image, _uM("src" to "https://invalid-url-test", "width" to "60px", "height" to "60px"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-cell "),
                                            _cV(_component_up_cell_group, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_cell, _uM("title" to "单元格", "value" to "内容")),
                                                    _cV(_component_up_cell, _uM("icon" to "setting-fill", "title" to "个人设置")),
                                                    _cV(_component_up_cell, _uM("icon" to "integral-fill", "title" to "会员等级", "value" to "新版本")),
                                                    _cV(_component_up_cell, _uM("title" to "可点击", "value" to "内容", "is-link" to "")),
                                                    _cV(_component_up_cell, _uM("title" to "箭头向下", "value" to "内容", "is-link" to "", "arrow-direction" to "down"))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-loading-icon "),
                                            _cE("view", _uM("class" to "demo-row"), _uA(
                                                _cV(_component_up_loading_icon, _uM("mode" to "circle")),
                                                _cV(_component_up_loading_icon, _uM("mode" to "spinner")),
                                                _cV(_component_up_loading_icon, _uM("mode" to "semicircle")),
                                                _cV(_component_up_loading_icon, _uM("mode" to "circle", "text" to "加载中", "vertical" to true))
                                            ))
                                        )),
                                        _cV(_component_up_divider, _uM("text" to "基础组件结束")),
                                        _cV(unref(GenSrcSubUviewUltraComponentsDemoFormClass)),
                                        _cE("text", _uM("class" to "section-title"), " 数据组件 "),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-count-down "),
                                            _cV(_component_up_count_down, _uM("time" to 1800000, "format" to "HH:mm:ss"))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-count-to "),
                                            _cE("view", _uM("class" to "demo-row-start"), _uA(
                                                _cV(_component_up_count_to, _uM("start-val" to 0, "end-val" to 9999, "duration" to 3000))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-line-progress "),
                                            _cE("view", _uM("class" to "flex-col gap-y-10px"), _uA(
                                                _cE("view", _uM("class" to "flex-row items-center gap-x-10px"), _uA(
                                                    _cE("text", _uM("class" to "text-12px text-__909399_ w-40px text-right"), _tD(lineProgressValue1.value) + "%", 1),
                                                    _cV(_component_up_line_progress, _uM("percentage" to lineProgressValue1.value, "show-text" to true, "active-color" to "#2979ff"), null, 8, _uA(
                                                        "percentage"
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "flex-row items-center gap-x-10px"), _uA(
                                                    _cE("text", _uM("class" to "text-12px text-__909399_ w-40px text-right"), _tD(lineProgressValue2.value) + "%", 1),
                                                    _cV(_component_up_line_progress, _uM("percentage" to lineProgressValue2.value, "show-text" to true, "active-color" to "#19be6b"), null, 8, _uA(
                                                        "percentage"
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "flex-row items-center gap-x-10px"), _uA(
                                                    _cE("text", _uM("class" to "text-12px text-__909399_ w-40px text-right"), _tD(lineProgressValue3.value) + "%", 1),
                                                    _cV(_component_up_line_progress, _uM("percentage" to lineProgressValue3.value, "show-text" to true, "active-color" to "#ff9900"), null, 8, _uA(
                                                        "percentage"
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "flex-row items-center gap-x-10px"), _uA(
                                                    _cE("text", _uM("class" to "text-12px text-__909399_ w-40px text-right"), _tD(lineProgressValue4.value) + "%", 1),
                                                    _cV(_component_up_line_progress, _uM("percentage" to lineProgressValue4.value, "show-text" to false, "active-color" to "#fa3534", "height" to "8"), null, 8, _uA(
                                                        "percentage"
                                                    ))
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-empty "),
                                            _cV(_component_up_empty, _uM("mode" to "search", "text" to "暂无搜索结果"))
                                        )),
                                        _cV(_component_up_divider, _uM("text" to "数据组件结束")),
                                        _cV(unref(GenSrcSubUviewUltraComponentsDemoFeedbackClass)),
                                        _cE("text", _uM("class" to "section-title"), " 布局组件 "),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-row / up-col "),
                                            _cV(_component_up_row, _uM("justify" to "space-between", "gutter" to "10"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_col, _uM("span" to "2"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "demo-layout bg-purple-light"))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_col, _uM("span" to "4"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "demo-layout bg-purple"))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_col, _uM("span" to "6"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cE("view", _uM("class" to "demo-layout bg-purple-dark"))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-grid "),
                                            _cV(_component_up_grid, _uM("col" to 4, "border" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "home", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "首页")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "search", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "搜索")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "setting", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "设置")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "heart", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "收藏")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "photo", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "相册")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "star", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "评分")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "map", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "地图")
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_grid_item, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "chat", "size" to 26)),
                                                            _cE("text", _uM("class" to "grid-text"), "消息")
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-skeleton "),
                                            _cV(_component_up_skeleton, _uM("loading" to skeletonLoading.value, "animate" to true, "rows" to 3, "title" to true, "avatar" to true), null, 8, _uA(
                                                "loading"
                                            )),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "切换骨架屏状态", "size" to "mini", "onClick" to toggleSkeleton))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-divider "),
                                            _cV(_component_up_divider, _uM("text" to "分割线")),
                                            _cV(_component_up_divider, _uM("text" to "虚线", "dashed" to true))
                                        )),
                                        _cV(_component_up_divider, _uM("text" to "布局组件结束")),
                                        _cV(unref(GenSrcSubUviewUltraComponentsDemoNavClass)),
                                        _cV(unref(GenSrcSubUviewUltraComponentsDemoShowClass)),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), " up-back-top "),
                                            _cE("text", _uM("class" to "text-12px text-__909399_ mb-8px"), " 滚动页面，右下角将出现回到顶部按钮 ")
                                        )),
                                        _cE("view", _uM("class" to "h-40px")),
                                        _cV(_component_up_no_network)
                                    ), 44, _uA(
                                        "scroll-top"
                                    )),
                                    _cV(_component_up_back_top, _uM("scroll-top" to scrollTop.value, "mode" to "circle", "icon" to "arrow-upward", "text" to "顶部", "top" to 200, "duration" to 300, "bottom" to 100, "right" to 20, "z-index" to 99, "icon-style" to _uO("fontSize" to "20px", "color" to "#ffffff"), "custom-style" to _uO("backgroundColor" to "#2979ff"), "onClick" to onBackTopClick), null, 8, _uA(
                                        "scroll-top"
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("b" to _pS(_uM("borderTopWidth" to "var(--un-line-width-default,1px)", "borderRightWidth" to "var(--un-line-width-default,1px)", "borderBottomWidth" to "var(--un-line-width-default,1px)", "borderLeftWidth" to "var(--un-line-width-default,1px)")), "bg-purple" to _pS(_uM("backgroundColor" to "#ced7e6")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-500" to _pS(_uM("fontWeight" to "500")), "h-10px" to _pS(_uM("height" to 10)), "h-40px" to _pS(_uM("height" to 40)), "items-center" to _pS(_uM("alignItems" to "center")), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "ml-10px" to _pS(_uM("marginLeft" to 10)), "mr-10px" to _pS(_uM("marginRight" to 10)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-15px" to _pS(_uM("marginTop" to 15)), "mt-4px" to _pS(_uM("marginTop" to 4)), "mt-6px" to _pS(_uM("marginTop" to 6)), "mt-8px" to _pS(_uM("marginTop" to 8)), "none" to _pS(_uM("display" to "none")), "pb-15px" to _pS(_uM("paddingBottom" to 15)), "py-15px" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "text-__2979ff_" to _pS(_uM("color" to "#2979ff")), "text-__303133_" to _pS(_uM("color" to "#303133")), "text-__606266_" to _pS(_uM("color" to "#606266")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-11px" to _pS(_uM("fontSize" to 11)), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-right" to _pS(_uM("textAlign" to "right")), "text-white" to _pS(_uM("color" to "rgba(255,255,255,var(--un-color-opacity,1))")), "w-15px" to _pS(_uM("width" to 15)), "w-20px" to _pS(_uM("width" to 20)), "w-40px" to _pS(_uM("width" to 40)), "w-8px" to _pS(_uM("width" to 8)), "page-container" to _pS(_uM("display" to "flex", "flexDirection" to "column", "height" to "100%", "backgroundColor" to "#f5f5f5")), "section-title" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 8, "paddingLeft" to 16, "fontSize" to 18, "fontWeight" to "bold", "color" to "#303133")), "demo-block" to _pS(_uM("marginTop" to 0, "marginRight" to 12, "marginBottom" to 12, "marginLeft" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "demo-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "space-between", "marginBottom" to 8)), "demo-row-start" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "flex-start", "marginBottom" to 8)), "collapse-text" to _pS(_uM("fontSize" to 13, "color" to "#909399", "lineHeight" to "20px")), "grid-text" to _pS(_uM("fontSize" to 12, "color" to "#606266", "marginTop" to 4)), "demo-layout" to _pS(_uM("height" to 30, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "bg-purple-light" to _pS(_uM("backgroundColor" to "#eef2f7")), "bg-purple-dark" to _pS(_uM("backgroundColor" to "#a2b4cd")), "swipe-action-content" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16, "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f0f0f0")), "demo-list-cell" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16, "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f5f5f5")), "demo-list-cell-avatar" to _pS(_uM("width" to 40, "height" to 40, "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "backgroundColor" to "#3c9cff", "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "marginRight" to 12)), "demo-list-cell-content" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "list-loading" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "waterfall-container" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-start")), "waterfall-column" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column")), "waterfall-column-right" to _pS(_uM("marginLeft" to 8)), "waterfall-card" to _pS(_uM("backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "overflow" to "hidden", "marginBottom" to 8)), "waterfall-image" to _pS(_uM("width" to "100%")), "waterfall-info" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "waterfall-title" to _pS(_uM("fontSize" to 13, "color" to "#303133", "lineHeight" to "18px")), "transition-demo-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "transition-demo-grid" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "justifyContent" to "space-around")), "transition-demo-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "width" to "23%", "marginBottom" to 12)), "transition-demo-box" to _pS(_uM("width" to 70, "height" to 40, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "marginBottom" to 8)), "transition-demo-blue" to _pS(_uM("backgroundColor" to "#2979ff")), "transition-demo-green" to _pS(_uM("backgroundColor" to "#19be6b")), "transition-demo-orange" to _pS(_uM("width" to 180, "backgroundColor" to "#ff9900")), "qrcode-demo-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "parse-demo-wrapper" to _pS(_uM("width" to "100%", "backgroundColor" to "#ffffff", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "steps-slot-icon" to _pS(_uM("width" to 21, "height" to 21, "backgroundColor" to "#f9ae3d", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "fontSize" to 12, "color" to "#ffffff", "lineHeight" to "21px", "textAlign" to "center")), "tabs-right-slot" to _pS(_uM("paddingLeft" to 4, "display" to "flex", "alignItems" to "center", "height" to "100%")), "navbar-mini-demo-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "backgroundColor" to "#f5f5f5", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "navbar-mini-demo-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-around", "backgroundColor" to "#f5f5f5", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "navbar-mini-demo-item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "tabbar-demo-wrapper" to _pS(_uM("width" to "100%", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "overflow" to "hidden")), "tabbar-slot-icon" to _pS(_uM("width" to 22, "height" to 22)), "waterfall-price" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#fa3534", "marginTop" to 4)), "index-list-demo-wrapper" to _pS(_uM("height" to 800, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "overflow" to "hidden")), "up-index-list" to _uM(".index-list-demo-wrapper " to _uM("height" to "100%")), "list-cell" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "boxSizing" to "border-box", "width" to "100%", "paddingTop" to 10, "paddingRight" to "24rpx", "paddingBottom" to 10, "paddingLeft" to "24rpx", "overflow" to "hidden", "backgroundColor" to "#ffffff")), "list-cell-text" to _pS(_uM("color" to "#323233", "fontSize" to 14, "lineHeight" to "24px")), "u-nav-slot" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e4e7ed", "borderRightColor" to "#e4e7ed", "borderBottomColor" to "#e4e7ed", "borderLeftColor" to "#e4e7ed", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "paddingTop" to 4, "paddingRight" to 12, "paddingBottom" to 4, "paddingLeft" to 12, "backgroundColor" to "#ffffff")), "lazy-load-item" to _pS(_uM("width" to "30%", "marginRight" to 8, "marginBottom" to 8)), "demo-sub-label" to _pS(_uM("fontSize" to 13, "fontWeight" to "normal", "color" to "#909399", "marginBottom" to 10)), "dropdown-slot-content" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16, "display" to "flex", "flexDirection" to "column", "alignItems" to "center")), "dropdown-scroll-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "paddingTop" to 12, "paddingRight" to 16, "paddingBottom" to 12, "paddingLeft" to 16, "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f5f5f5")), "dropdown-scroll-footer" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "dropdown-grid-panel" to _pS(_uM("paddingTop" to 12, "paddingRight" to 8, "paddingBottom" to 12, "paddingLeft" to 8, "width" to "100%")), "dropdown-grid-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "paddingTop" to 14, "paddingRight" to 4, "paddingBottom" to 14, "paddingLeft" to 4, "marginBottom" to 10, "backgroundColor" to "#f7f8fa", "borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10, "transitionProperty" to "backgroundColor", "transitionDuration" to "0.2s", "backgroundColor:active" to "#eef0f4")), "dropdown-grid-icon" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to 44, "height" to 44, "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "backgroundColor" to "#ffffff", "marginBottom" to 8)), "dropdown-grid-label" to _pS(_uM("fontSize" to 12, "color" to "#606266", "textAlign" to "center")), "dropdown-card-panel" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "width" to "100%")), "dropdown-card-grid" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "justifyContent" to "space-between")), "dropdown-card" to _pS(_uM("width" to "48%", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10, "overflow" to "hidden", "marginBottom" to 12, "boxShadow" to "0 1px 4px rgba(0, 0, 0, 0.08)", "backgroundColor:active" to "#f8f8f8")), "dropdown-card-img" to _pS(_uM("width" to "100%", "height" to 120, "backgroundColor" to "#f5f5f5")), "dropdown-card-body" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "display" to "flex", "flexDirection" to "column")), "dropdown-card-title" to _pS(_uM("fontSize" to 14, "fontWeight" to "600", "color" to "#303133", "lineHeight" to "20px")), "dropdown-card-desc" to _pS(_uM("fontSize" to 12, "color" to "#909399", "marginTop" to 4, "lineHeight" to "16px")), "dropdown-card-footer" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between", "marginTop" to 8)), "dropdown-card-price" to _pS(_uM("fontSize" to 15, "fontWeight" to "bold", "color" to "#fa3534")), "dropdown-card-tag" to _pS(_uM("paddingTop" to 2, "paddingRight" to 8, "paddingBottom" to 2, "paddingLeft" to 8, "backgroundColor" to "#fff3e0", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "dropdown-card-tag-text" to _pS(_uM("fontSize" to 10, "color" to "#ff9800")), "@FONT-FACE" to _uM("0" to _uM("fontFamily" to "iconfont", "src" to "url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype')")), "@TRANSITION" to _uM("dropdown-grid-item" to _uM("property" to "backgroundColor", "duration" to "0.2s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
