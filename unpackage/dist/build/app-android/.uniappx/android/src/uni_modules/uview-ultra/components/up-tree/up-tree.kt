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
open class GenUniModulesUviewUltraComponentsUpTreeUpTree : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var data: UTSArray<UTSJSONObject> by `$props`
    open var props: UTSJSONObject by `$props`
    open var nodeKey: String by `$props`
    open var showCheckbox: Boolean by `$props`
    open var defaultExpandAll: Boolean by `$props`
    open var defaultExpandedKeys: UTSArray<Any> by `$props`
    open var defaultCheckedKeys: UTSArray<Any> by `$props`
    open var expandOnClickNode: Boolean by `$props`
    open var checkOnClickNode: Boolean by `$props`
    open var checkStrictly: Boolean by `$props`
    open var accordion: Boolean by `$props`
    open var highlightCurrent: Boolean by `$props`
    open var currentNodeKey: Any by `$props`
    open var indent: Any by `$props`
    open var iconSize: Any by `$props`
    open var checkboxSize: Any by `$props`
    open var expandIcon: String by `$props`
    open var collapseIcon: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open fun getCheckedNodes(leafOnly: Boolean = false): UTSArray<UTSJSONObject> {
        return callKotlinFunction(this.`$exposed`["getCheckedNodes"]!!, _uA(
            leafOnly
        )) as UTSArray<UTSJSONObject>
    }
    open fun getCheckedKeys(leafOnly: Boolean = false): UTSArray<String> {
        return callKotlinFunction(this.`$exposed`["getCheckedKeys"]!!, _uA(
            leafOnly
        )) as UTSArray<String>
    }
    open var getHalfCheckedNodes: () -> UTSArray<UTSJSONObject>
        get() {
            return unref(this.`$exposed`["getHalfCheckedNodes"]) as () -> UTSArray<UTSJSONObject>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getHalfCheckedNodes", value)
        }
    open var getHalfCheckedKeys: () -> UTSArray<String>
        get() {
            return unref(this.`$exposed`["getHalfCheckedKeys"]) as () -> UTSArray<String>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getHalfCheckedKeys", value)
        }
    open fun setCheckedKeys(keys: UTSArray<Any>, leafOnly: Boolean = false): Unit {
        return callKotlinFunction(this.`$exposed`["setCheckedKeys"]!!, _uA(
            keys,
            leafOnly
        )) as Unit
    }
    open fun setChecked(key: Any, checked: Boolean, deep: Boolean = true): Unit {
        return callKotlinFunction(this.`$exposed`["setChecked"]!!, _uA(
            key,
            checked,
            deep
        )) as Unit
    }
    open var setCurrentKey: (key: Any) -> Unit
        get() {
            return unref(this.`$exposed`["setCurrentKey"]) as (key: Any) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setCurrentKey", value)
        }
    open var getCurrentKey: () -> String
        get() {
            return unref(this.`$exposed`["getCurrentKey"]) as () -> String
        }
        set(value) {
            setRefValue(this.`$exposed`, "getCurrentKey", value)
        }
    open var getCurrentNode: () -> UTSJSONObject?
        get() {
            return unref(this.`$exposed`["getCurrentNode"]) as () -> UTSJSONObject?
        }
        set(value) {
            setRefValue(this.`$exposed`, "getCurrentNode", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTreeUpTree, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTreeUpTree
            val _cache = __ins.renderCache
            fun gen_createTreeList_fn(): UTSArray<UTSJSONObject> {
                return _uA<UTSJSONObject>()
            }
            val createTreeList = ::gen_createTreeList_fn
            fun gen_createNodeMap_fn(): Map<String, UTSJSONObject> {
                return Map<String, UTSJSONObject>()
            }
            val createNodeMap = ::gen_createNodeMap_fn
            fun gen_createTreeProps_fn(): UTSJSONObject {
                return _uO("label" to "label", "children" to "children", "nodeKey" to "id", "disabled" to "disabled")
            }
            val createTreeProps = ::gen_createTreeProps_fn
            fun gen_valueToString_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val valueToString = ::gen_valueToString_fn
            fun gen_valueToBoolean_fn(value: Any?): Boolean {
                return value == true
            }
            val valueToBoolean = ::gen_valueToBoolean_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val treeData = ref<UTSArray<UTSJSONObject>>(createTreeList())
            val currentKey = ref<String>(valueToString(props.currentNodeKey))
            var nodeMap: Map<String, UTSJSONObject> = createNodeMap()
            var privateKeySeed: Number = 0
            val treeProps = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val merged = createTreeProps()
                val custom = props.props
                val label = custom["label"]
                if (valueToString(label) != "") {
                    merged["label"] = label
                }
                val children = custom["children"]
                if (valueToString(children) != "") {
                    merged["children"] = children
                }
                val nKey = custom["nodeKey"]
                if (valueToString(nKey) != "") {
                    merged["nodeKey"] = nKey
                }
                val disabled = custom["disabled"]
                if (valueToString(disabled) != "") {
                    merged["disabled"] = disabled
                }
                return merged
            }
            )
            val labelKey = computed<String>(fun(): String {
                return if (valueToString(treeProps.value["label"]) == "") {
                    "label"
                } else {
                    valueToString(treeProps.value["label"])
                }
            }
            )
            val childrenKey = computed<String>(fun(): String {
                return if (valueToString(treeProps.value["children"]) == "") {
                    "children"
                } else {
                    valueToString(treeProps.value["children"])
                }
            }
            )
            val disabledKey = computed<String>(fun(): String {
                return if (valueToString(treeProps.value["disabled"]) == "") {
                    "disabled"
                } else {
                    valueToString(treeProps.value["disabled"])
                }
            }
            )
            val keyField = computed<String>(fun(): String {
                return if (props.nodeKey != "") {
                    props.nodeKey
                } else {
                    valueToString(treeProps.value["nodeKey"])
                }
            }
            )
            val switcherColor = computed<String>(fun(): String {
                return "#606266"
            }
            )
            fun gen_getItemHasChildren_fn(item: UTSJSONObject): Boolean {
                return valueToBoolean(item["hasChildren"])
            }
            val getItemHasChildren = ::gen_getItemHasChildren_fn
            fun gen_getItemExpanded_fn(item: UTSJSONObject): Boolean {
                return valueToBoolean(item["expanded"])
            }
            val getItemExpanded = ::gen_getItemExpanded_fn
            fun gen_getItemChecked_fn(item: UTSJSONObject): Boolean {
                return valueToBoolean(item["checked"])
            }
            val getItemChecked = ::gen_getItemChecked_fn
            fun gen_getItemIndeterminate_fn(item: UTSJSONObject): Boolean {
                return valueToBoolean(item["indeterminate"])
            }
            val getItemIndeterminate = ::gen_getItemIndeterminate_fn
            fun gen_getItemDisabled_fn(item: UTSJSONObject): Boolean {
                return valueToBoolean(item["disabled"])
            }
            val getItemDisabled = ::gen_getItemDisabled_fn
            fun gen_getItemSlotLevel_fn(item: UTSJSONObject): Number {
                val kVal = item["slotLevel"]
                if (UTSAndroid.`typeof`(kVal) === "number") {
                    return kVal as Number
                }
                return parseInt(valueToString(kVal))
            }
            val getItemSlotLevel = ::gen_getItemSlotLevel_fn
            fun gen_getItemLabel_fn(item: UTSJSONObject): String {
                return valueToString(item["label"])
            }
            val getItemLabel = ::gen_getItemLabel_fn
            fun gen_getChildren_fn(node: UTSJSONObject): UTSArray<UTSJSONObject> {
                val rawChildren = node[childrenKey.value] as UTSArray<UTSJSONObject>?
                if (UTSArray.isArray(rawChildren)) {
                    return rawChildren as UTSArray<UTSJSONObject>
                }
                return createTreeList()
            }
            val getChildren = ::gen_getChildren_fn
            fun gen_getNodeKey_fn(node: UTSJSONObject): String {
                return valueToString(node["__upTreeKey"])
            }
            val getNodeKey = ::gen_getNodeKey_fn
            fun gen_getNodeLabel_fn(node: UTSJSONObject): String {
                return valueToString(node[labelKey.value])
            }
            val getNodeLabel = ::gen_getNodeLabel_fn
            fun gen_isNodeDisabled_fn(node: UTSJSONObject): Boolean {
                return valueToBoolean(node[disabledKey.value])
            }
            val isNodeDisabled = ::gen_isNodeDisabled_fn
            fun gen_includesKey_fn(keys: UTSArray<Any>, key: String): Boolean {
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        if (valueToString(keys[i]) == key) {
                            return true
                        }
                        i++
                    }
                }
                return false
            }
            val includesKey = ::gen_includesKey_fn
            fun gen_resolveNodeKey_fn(node: UTSJSONObject, parentKey: String, index: Number): String {
                val rawKey = node[keyField.value]
                val normalized = valueToString(rawKey)
                if (normalized != "") {
                    return normalized
                }
                privateKeySeed = privateKeySeed + 1
                return (if (parentKey == "") {
                    "root"
                } else {
                    parentKey
                }
                ) + "-" + index.toString(10) + "-" + privateKeySeed.toString(10)
            }
            val resolveNodeKey = ::gen_resolveNodeKey_fn
            fun gen_setChildrenChecked_fn(node: UTSJSONObject, checked: Boolean): Unit {
                val children = getChildren(node)
                run {
                    var i: Number = 0
                    while(i < children.length){
                        val child = children[i] as UTSJSONObject
                        if (!isNodeDisabled(child)) {
                            child["checked"] = checked
                            child["indeterminate"] = false
                            gen_setChildrenChecked_fn(child, checked)
                        }
                        i++
                    }
                }
            }
            val setChildrenChecked = ::gen_setChildrenChecked_fn
            fun gen_cloneNodes_fn(nodes: UTSArray<UTSJSONObject>, parentKey: String, level: Number): UTSArray<UTSJSONObject> {
                val list = _uA<UTSJSONObject>()
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val source = nodes[i] as UTSJSONObject
                        val cloned = deepClone(source) as UTSJSONObject?
                        val clone = if (cloned == null) {
                            (_uO())
                        } else {
                            cloned
                        }
                        val key = resolveNodeKey(clone, parentKey, i)
                        val rawChildren = source[childrenKey.value] as UTSArray<UTSJSONObject>?
                        val children = if (UTSArray.isArray(rawChildren)) {
                            (rawChildren as UTSArray<UTSJSONObject>)
                        } else {
                            createTreeList()
                        }
                        val expanded = props.defaultExpandAll || includesKey(props.defaultExpandedKeys, key) || valueToBoolean(clone["expanded"])
                        val checked = includesKey(props.defaultCheckedKeys, key) || valueToBoolean(clone["checked"])
                        clone["__upTreeKey"] = key
                        clone["__upTreeParentKey"] = parentKey
                        clone["__upTreeLevel"] = level
                        clone["expanded"] = expanded
                        clone["checked"] = checked
                        clone["indeterminate"] = false
                        clone[childrenKey.value] = gen_cloneNodes_fn(children, key, level + 1)
                        if (checked && !props.checkStrictly) {
                            setChildrenChecked(clone, true)
                        }
                        nodeMap.set(key, clone)
                        list.push(clone)
                        i++
                    }
                }
                return list
            }
            val cloneNodes = ::gen_cloneNodes_fn
            fun gen_syncParentChecked_fn(nodes: UTSArray<UTSJSONObject>): Unit {
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val node = nodes[i] as UTSJSONObject
                        val children = getChildren(node)
                        if (children.length > 0) {
                            gen_syncParentChecked_fn(children)
                            var enabledCount: Number = 0
                            var checkedCount: Number = 0
                            var someChecked = false
                            run {
                                var j: Number = 0
                                while(j < children.length){
                                    val child = children[j] as UTSJSONObject
                                    if (!isNodeDisabled(child)) {
                                        enabledCount = enabledCount + 1
                                        if (valueToBoolean(child["checked"])) {
                                            checkedCount = checkedCount + 1
                                        }
                                        if (valueToBoolean(child["checked"]) || valueToBoolean(child["indeterminate"])) {
                                            someChecked = true
                                        }
                                    }
                                    j++
                                }
                            }
                            val allChecked = enabledCount > 0 && checkedCount == enabledCount
                            node["checked"] = allChecked
                            node["indeterminate"] = !allChecked && someChecked
                        }
                        i++
                    }
                }
            }
            val syncParentChecked = ::gen_syncParentChecked_fn
            fun gen_collectVisibleNodes_fn(nodes: UTSArray<UTSJSONObject>, level: Number, result: UTSArray<UTSJSONObject>): Unit {
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val node = nodes[i] as UTSJSONObject
                        val children = getChildren(node)
                        val item: UTSJSONObject = _uO("key" to getNodeKey(node), "node" to node, "level" to level, "slotLevel" to (level + 1), "label" to getNodeLabel(node), "hasChildren" to (children.length > 0), "expanded" to valueToBoolean(node["expanded"]), "checked" to valueToBoolean(node["checked"]), "indeterminate" to valueToBoolean(node["indeterminate"]), "disabled" to isNodeDisabled(node))
                        result.push(item)
                        if (children.length > 0 && valueToBoolean(node["expanded"])) {
                            gen_collectVisibleNodes_fn(children, level + 1, result)
                        }
                        i++
                    }
                }
            }
            val collectVisibleNodes = ::gen_collectVisibleNodes_fn
            val visibleItems = ref<UTSArray<UTSJSONObject>>(createTreeList())
            var renderVersion: Number = 0
            fun gen_rebuildVisibleItems_fn(): Unit {
                renderVersion = renderVersion + 1
                val result = _uA<UTSJSONObject>()
                collectVisibleNodes(treeData.value, 0, result)
                run {
                    var i: Number = 0
                    while(i < result.length){
                        val item = result[i] as UTSJSONObject
                        item["renderKey"] = valueToString(item["key"]) + "@" + renderVersion.toString(10)
                        i++
                    }
                }
                visibleItems.value = result
            }
            val rebuildVisibleItems = ::gen_rebuildVisibleItems_fn
            fun gen_getItemKey_fn(item: UTSJSONObject): String {
                return valueToString(item["renderKey"])
            }
            val getItemKey = ::gen_getItemKey_fn
            fun gen_getItemNode_fn(item: UTSJSONObject): UTSJSONObject {
                val node = item["node"] as UTSJSONObject?
                return if (node == null) {
                    (_uO())
                } else {
                    node
                }
            }
            val getItemNode = ::gen_getItemNode_fn
            fun gen_initTree_fn(): Unit {
                privateKeySeed = 0
                nodeMap = createNodeMap()
                treeData.value = cloneNodes(props.data, "", 0)
                if (!props.checkStrictly) {
                    syncParentChecked(treeData.value)
                }
                rebuildVisibleItems()
            }
            val initTree = ::gen_initTree_fn
            fun gen_getNodeClass_fn(item: UTSJSONObject): String {
                val classes = _uA<String>()
                if (valueToBoolean(item["disabled"])) {
                    classes.push("up-tree-node--disabled")
                }
                return classes.join(" ")
            }
            val getNodeClass = ::gen_getNodeClass_fn
            fun gen_getNodeContentClass_fn(item: UTSJSONObject): String {
                if (props.highlightCurrent && valueToString(item["key"]) == currentKey.value) {
                    return "up-tree-node__content--current"
                }
                return ""
            }
            val getNodeContentClass = ::gen_getNodeContentClass_fn
            fun gen_getIndentValue_fn(level: Number): String {
                val raw = props.indent
                if (UTSAndroid.`typeof`(raw) == "number") {
                    return ((raw as Number) * level).toString(10) + "rpx"
                }
                val kVal = valueToString(raw)
                if (kVal == "") {
                    return "0rpx"
                }
                if (kVal.endsWith("px")) {
                    return (parseFloat(kVal.replace("px", "")) * level).toString(10) + "px"
                }
                if (kVal.endsWith("rpx")) {
                    return (parseFloat(kVal.replace("rpx", "")) * level).toString(10) + "rpx"
                }
                return (parseFloat(kVal) * level).toString(10) + "rpx"
            }
            val getIndentValue = ::gen_getIndentValue_fn
            fun gen_getNodeByKey_fn(key: Any): UTSJSONObject? {
                return nodeMap.get(valueToString(key)) as UTSJSONObject?
            }
            val getNodeByKey = ::gen_getNodeByKey_fn
            fun gen_getCurrentNode_fn(): UTSJSONObject? {
                return getNodeByKey(currentKey.value)
            }
            val getCurrentNode = ::gen_getCurrentNode_fn
            fun gen_getParentNode_fn(node: UTSJSONObject): UTSJSONObject? {
                val parentKey = valueToString(node["__upTreeParentKey"])
                if (parentKey == "") {
                    return null
                }
                return nodeMap.get(parentKey) as UTSJSONObject?
            }
            val getParentNode = ::gen_getParentNode_fn
            fun gen_collapseSiblingNodes_fn(node: UTSJSONObject): Unit {
                val parent = getParentNode(node)
                val siblings = if (parent == null) {
                    treeData.value
                } else {
                    getChildren(parent)
                }
                val curKey = getNodeKey(node)
                run {
                    var i: Number = 0
                    while(i < siblings.length){
                        val sibling = siblings[i] as UTSJSONObject
                        if (getNodeKey(sibling) != curKey) {
                            sibling["expanded"] = false
                        }
                        i++
                    }
                }
            }
            val collapseSiblingNodes = ::gen_collapseSiblingNodes_fn
            fun gen_getNodeContentStyle_fn(item: UTSJSONObject): UTSJSONObject {
                return _uO("paddingLeft" to getIndentValue(item["level"] as Number))
            }
            val getNodeContentStyle = ::gen_getNodeContentStyle_fn
            fun gen_toggleExpand_fn(item: UTSJSONObject): Unit {
                val node = item["node"] as UTSJSONObject
                val nextExpanded = !valueToBoolean(node["expanded"])
                if (props.accordion && nextExpanded) {
                    collapseSiblingNodes(node)
                }
                node["expanded"] = nextExpanded
                if (nextExpanded) {
                    emit("node-expand", node)
                } else {
                    emit("node-collapse", node)
                }
            }
            val toggleExpand = ::gen_toggleExpand_fn
            fun gen_handleExpandClick_fn(item: UTSJSONObject): Unit {
                if (valueToBoolean(item["hasChildren"])) {
                    toggleExpand(item)
                    rebuildVisibleItems()
                }
            }
            val handleExpandClick = ::gen_handleExpandClick_fn
            fun gen_updateParentChecked_fn(node: UTSJSONObject): Unit {
                val parent = getParentNode(node)
                if (parent == null) {
                    return
                }
                val children = getChildren(parent)
                var enabledCount: Number = 0
                var checkedCount: Number = 0
                var someChecked = false
                run {
                    var i: Number = 0
                    while(i < children.length){
                        val child = children[i] as UTSJSONObject
                        if (!isNodeDisabled(child)) {
                            enabledCount = enabledCount + 1
                            if (valueToBoolean(child["checked"])) {
                                checkedCount = checkedCount + 1
                            }
                            if (valueToBoolean(child["checked"]) || valueToBoolean(child["indeterminate"])) {
                                someChecked = true
                            }
                        }
                        i++
                    }
                }
                val allChecked = enabledCount > 0 && checkedCount == enabledCount
                parent["checked"] = allChecked
                parent["indeterminate"] = !allChecked && someChecked
                gen_updateParentChecked_fn(parent)
            }
            val updateParentChecked = ::gen_updateParentChecked_fn
            fun gen_setNodeChecked_fn(node: UTSJSONObject, checked: Boolean, deep: Boolean): Unit {
                node["checked"] = checked
                node["indeterminate"] = false
                if (!props.checkStrictly && deep) {
                    setChildrenChecked(node, checked)
                }
                if (!props.checkStrictly) {
                    updateParentChecked(node)
                }
            }
            val setNodeChecked = ::gen_setNodeChecked_fn
            fun gen_walkNodes_fn(nodes: UTSArray<UTSJSONObject>, callback: (node: UTSJSONObject) -> Unit): Unit {
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val node = nodes[i] as UTSJSONObject
                        callback(node)
                        gen_walkNodes_fn(getChildren(node), callback)
                        i++
                    }
                }
            }
            val walkNodes = ::gen_walkNodes_fn
            fun getCheckedNodes(leafOnly: Boolean = false): UTSArray<UTSJSONObject> {
                val result = _uA<UTSJSONObject>()
                walkNodes(treeData.value, fun(node: UTSJSONObject): Unit {
                    val isLeaf = getChildren(node).length == 0
                    if (valueToBoolean(node["checked"]) && (!leafOnly || isLeaf)) {
                        result.push(node)
                    }
                }
                )
                return result
            }
            fun getCheckedKeys(leafOnly: Boolean = false): UTSArray<String> {
                val checkedNodes = getCheckedNodes(leafOnly)
                val result = _uA<String>()
                run {
                    var i: Number = 0
                    while(i < checkedNodes.length){
                        result.push(getNodeKey(checkedNodes[i] as UTSJSONObject))
                        i++
                    }
                }
                return result
            }
            fun gen_getHalfCheckedNodes_fn(): UTSArray<UTSJSONObject> {
                val result = _uA<UTSJSONObject>()
                walkNodes(treeData.value, fun(node: UTSJSONObject): Unit {
                    if (valueToBoolean(node["indeterminate"])) {
                        result.push(node)
                    }
                }
                )
                return result
            }
            val getHalfCheckedNodes = ::gen_getHalfCheckedNodes_fn
            fun gen_getHalfCheckedKeys_fn(): UTSArray<String> {
                val halfCheckedNodes = getHalfCheckedNodes()
                val result = _uA<String>()
                run {
                    var i: Number = 0
                    while(i < halfCheckedNodes.length){
                        result.push(getNodeKey(halfCheckedNodes[i] as UTSJSONObject))
                        i++
                    }
                }
                return result
            }
            val getHalfCheckedKeys = ::gen_getHalfCheckedKeys_fn
            fun gen_emitCheck_fn(node: UTSJSONObject): Unit {
                emit("check", node, _uO("checkedNodes" to getCheckedNodes(false), "checkedKeys" to getCheckedKeys(false), "halfCheckedNodes" to getHalfCheckedNodes(), "halfCheckedKeys" to getHalfCheckedKeys()))
            }
            val emitCheck = ::gen_emitCheck_fn
            fun gen_handleNodeClick_fn(item: UTSJSONObject): Unit {
                val node = item["node"] as UTSJSONObject
                val oldCurrentNode = getCurrentNode()
                currentKey.value = valueToString(item["key"])
                if (props.expandOnClickNode && valueToBoolean(item["hasChildren"])) {
                    toggleExpand(item)
                }
                if (props.checkOnClickNode && props.showCheckbox && !valueToBoolean(item["disabled"])) {
                    setNodeChecked(node, !valueToBoolean(node["checked"]), true)
                    emitCheck(node)
                }
                emit("node-click", node)
                if (oldCurrentNode !== node) {
                    emit("current-change", node, oldCurrentNode)
                }
                rebuildVisibleItems()
            }
            val handleNodeClick = ::gen_handleNodeClick_fn
            fun gen_handleCheckboxChange_fn(item: UTSJSONObject, checked: Boolean): Unit {
                if (valueToBoolean(item["disabled"])) {
                    return
                }
                val node = item["node"] as UTSJSONObject
                setNodeChecked(node, checked, true)
                emit("check-change", node, checked)
                emitCheck(node)
                rebuildVisibleItems()
            }
            val handleCheckboxChange = ::gen_handleCheckboxChange_fn
            fun gen_handleCheckboxChangeEvent_fn(item: UTSJSONObject, event: Any?): Unit {
                handleCheckboxChange(item, valueToBoolean(event))
            }
            val handleCheckboxChangeEvent = ::gen_handleCheckboxChangeEvent_fn
            fun setCheckedKeys(keys: UTSArray<Any>, leafOnly: Boolean = false): Unit {
                walkNodes(treeData.value, fun(node: UTSJSONObject): Unit {
                    node["checked"] = false
                    node["indeterminate"] = false
                }
                )
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        val node = getNodeByKey(keys[i])
                        if (node != null) {
                            val isLeaf = getChildren(node).length == 0
                            if (!leafOnly || isLeaf) {
                                setNodeChecked(node, true, !props.checkStrictly)
                            }
                        }
                        i++
                    }
                }
                if (!props.checkStrictly) {
                    syncParentChecked(treeData.value)
                }
                rebuildVisibleItems()
            }
            fun setChecked(key: Any, checked: Boolean, deep: Boolean = true): Unit {
                val node = getNodeByKey(key)
                if (node != null) {
                    setNodeChecked(node, checked, deep)
                    rebuildVisibleItems()
                }
            }
            fun gen_setCurrentKey_fn(key: Any): Unit {
                currentKey.value = valueToString(key)
            }
            val setCurrentKey = ::gen_setCurrentKey_fn
            fun gen_getCurrentKey_fn(): String {
                return currentKey.value
            }
            val getCurrentKey = ::gen_getCurrentKey_fn
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.data
            }
            , fun(){
                initTree()
            }
            , WatchOptions(deep = true, immediate = true))
            watch(fun(): UTSJSONObject {
                return props.props
            }
            , fun(){
                initTree()
            }
            , WatchOptions(deep = true))
            watch(fun(): String {
                return props.nodeKey
            }
            , fun(){
                initTree()
            }
            )
            watch(fun(): Boolean {
                return props.defaultExpandAll
            }
            , fun(){
                initTree()
            }
            )
            watch(fun(): UTSArray<Any> {
                return props.defaultExpandedKeys
            }
            , fun(){
                initTree()
            }
            )
            watch(fun(): UTSArray<Any> {
                return props.defaultCheckedKeys
            }
            , fun(){
                initTree()
            }
            )
            watch(fun(): Boolean {
                return props.checkStrictly
            }
            , fun(){
                initTree()
            }
            )
            watch(fun(): Any? {
                return props.currentNodeKey
            }
            , fun(value: Any){
                currentKey.value = valueToString(value)
            }
            , WatchOptions(immediate = true))
            __expose(_uM("getCheckedNodes" to ::getCheckedNodes, "getCheckedKeys" to ::getCheckedKeys, "getHalfCheckedNodes" to getHalfCheckedNodes, "getHalfCheckedKeys" to getHalfCheckedKeys, "setCheckedKeys" to ::setCheckedKeys, "setChecked" to ::setChecked, "setCurrentKey" to setCurrentKey, "getCurrentKey" to getCurrentKey, "getCurrentNode" to getCurrentNode))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_checkbox = resolveEasyComponent("up-checkbox", GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-tree"), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(visibleItems.value, fun(item, __key, __index, _cached): Any {
                        return _cE("view", _uM("key" to getItemKey(item), "class" to _nC(_uA(
                            "weapp-tw-border up-tree-node",
                            getNodeClass(item)
                        ))), _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-tree-node__content",
                                getNodeContentClass(item)
                            )), "style" to _nS(getNodeContentStyle(item)), "onClick" to fun(){
                                handleNodeClick(item)
                            }
                            ), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-tree-node__switcher", "onClick" to withModifiers(fun(){
                                    handleExpandClick(item)
                                }
                                , _uA(
                                    "stop"
                                ))), _uA(
                                    if (isTrue(getItemHasChildren(item))) {
                                        _cV(_component_up_icon, _uM("key" to 0, "name" to if (getItemExpanded(item)) {
                                            _ctx.collapseIcon
                                        } else {
                                            _ctx.expandIcon
                                        }, "size" to _ctx.iconSize, "color" to switcherColor.value), null, 8, _uA(
                                            "name",
                                            "size",
                                            "color"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ), 8, _uA(
                                    "onClick"
                                )),
                                if (isTrue(_ctx.showCheckbox)) {
                                    _cV(_component_up_checkbox, _uM("key" to 0, "class" to "up-tree-node__checkbox", "usedAlone" to "", "size" to _ctx.checkboxSize, "checked" to getItemChecked(item), "disabled" to getItemDisabled(item), "onChange" to fun(`$event`: Any){
                                        handleCheckboxChangeEvent(item, `$event`)
                                    }), null, 8, _uA(
                                        "size",
                                        "checked",
                                        "disabled",
                                        "onChange"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE("view", _uM("class" to "weapp-tw-border up-tree-node__label"), _uA(
                                    renderSlot(_ctx.`$slots`, "default", _uM("node" to getItemNode(item), "data" to getItemNode(item), "level" to getItemSlotLevel(item), "expanded" to getItemExpanded(item), "checked" to getItemChecked(item), "indeterminate" to getItemIndeterminate(item), "disabled" to getItemDisabled(item)), fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border up-tree-node__text"), _tD(getItemLabel(item)), 1)
                                        )
                                    }
                                    )
                                ))
                            ), 14, _uA(
                                "onClick"
                            ))
                        ), 2)
                    }
                    ), 128)
                ))
            }
        }
        var name = "up-tree"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-tree-node__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "minHeight" to "72rpx", "boxSizing" to "border-box", "borderTopLeftRadius" to "8rpx", "borderTopRightRadius" to "8rpx", "borderBottomRightRadius" to "8rpx", "borderBottomLeftRadius" to "8rpx")), "up-tree-node__content--current" to _pS(_uM("backgroundColor" to "var(--up-primary-light, #ecf5ff)")), "up-tree-node--disabled" to _pS(_uM("opacity" to 0.55)), "up-tree-node__switcher" to _pS(_uM("width" to "36rpx", "height" to "36rpx", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexShrink" to 0)), "up-tree-node__checkbox" to _pS(_uM("marginLeft" to "8rpx", "marginRight" to "8rpx")), "up-tree-node__label" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "minWidth" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-tree-node__text" to _pS(_uM("color" to "var(--up-main-color, #303133)", "fontSize" to "28rpx", "lineHeight" to "40rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("node-click" to null, "check-change" to null, "check" to null, "node-expand" to null, "node-collapse" to null, "current-change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "data" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "props" to _uM("type" to "Object", "default" to fun(): UTSJSONObject {
            return (_uO("label" to "label", "children" to "children", "nodeKey" to "id", "disabled" to "disabled"))
        }
        ), "nodeKey" to _uM("type" to "String", "default" to ""), "showCheckbox" to _uM("type" to "Boolean", "default" to false), "defaultExpandAll" to _uM("type" to "Boolean", "default" to false), "defaultExpandedKeys" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "defaultCheckedKeys" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "expandOnClickNode" to _uM("type" to "Boolean", "default" to true), "checkOnClickNode" to _uM("type" to "Boolean", "default" to false), "checkStrictly" to _uM("type" to "Boolean", "default" to false), "accordion" to _uM("type" to "Boolean", "default" to false), "highlightCurrent" to _uM("type" to "Boolean", "default" to false), "currentNodeKey" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "indent" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 32), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 14), "checkboxSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 16), "expandIcon" to _uM("type" to "String", "default" to "play-right-fill"), "collapseIcon" to _uM("type" to "String", "default" to "arrow-down-fill")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "data",
            "props",
            "nodeKey",
            "showCheckbox",
            "defaultExpandAll",
            "defaultExpandedKeys",
            "defaultCheckedKeys",
            "expandOnClickNode",
            "checkOnClickNode",
            "checkStrictly",
            "accordion",
            "highlightCurrent",
            "currentNodeKey",
            "indent",
            "iconSize",
            "checkboxSize",
            "expandIcon",
            "collapseIcon"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
