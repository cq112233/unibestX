const { ref } = globalThis.Vue
import { m as getParentFunc } from "../function/index.js";
import "../function/test.js";
new UTSJSONObject({
  // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
  customStyle: new UTSJSONObject({
    type: [UTSJSONObject, String],
    default: new UTSJSONObject({})
  }),
  customClass: new UTSJSONObject({
    type: String,
    default: ""
  }),
  // 跳转的页面路径
  url: new UTSJSONObject({
    type: String,
    default: ""
  }),
  // 页面跳转的类型
  linkType: new UTSJSONObject({
    type: String,
    default: "navigateTo"
  })
});
class UPUseUltraUIType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          parent: { type: "Unknown", optional: false },
          parentData: { type: "Unknown", optional: false },
          children: { type: "Unknown", optional: false },
          childrenRefs: { type: "Unknown", optional: false },
          openPage: { type: "Unknown", optional: false },
          getChildIndex: { type: "Unknown", optional: false },
          getParent: { type: "Unknown", optional: false },
          addChild: { type: "Unknown", optional: false },
          addChildRef: { type: "Unknown", optional: false },
          getChildren: { type: "Unknown", optional: false },
          getParentData: { type: "Unknown", optional: false },
          onComponentDestroy: { type: "Unknown", optional: false },
          preventEvent: { type: "Unknown", optional: false },
          noop: { type: "Unknown", optional: false }
        };
      },
      name: "UPUseUltraUIType"
    };
  }
  constructor(options, metadata = UPUseUltraUIType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.parent = this.__props__.parent;
    this.parentData = this.__props__.parentData;
    this.children = this.__props__.children;
    this.childrenRefs = this.__props__.childrenRefs;
    this.openPage = this.__props__.openPage;
    this.getChildIndex = this.__props__.getChildIndex;
    this.getParent = this.__props__.getParent;
    this.addChild = this.__props__.addChild;
    this.addChildRef = this.__props__.addChildRef;
    this.getChildren = this.__props__.getChildren;
    this.getParentData = this.__props__.getParentData;
    this.onComponentDestroy = this.__props__.onComponentDestroy;
    this.preventEvent = this.__props__.preventEvent;
    this.noop = this.__props__.noop;
    delete this.__props__;
  }
}
function useUltraUI(parentDataInit = new UTSJSONObject({})) {
  const parent = ref(null);
  const parentData = ref(parentDataInit);
  const children = ref([]);
  const childrenRefs = ref([]);
  const openPage = function(urlKey) {
  };
  const getChildIndex = function(ins) {
    let index = -1;
    if (parent.value != null) {
      const parentIns = parent.value;
      let childs = parentIns.$callMethod("getChildren");
      if (childs == null) {
        childs = parentIns.$data["children"];
      }
      if (childs != null) {
        childs.forEach((child, idx) => {
          if (child == ins) {
            index = idx;
          }
        });
      }
    }
    return index;
  };
  const getParent = function(name, instance) {
    let parentTmp = getParentFunc(name, instance);
    parent.value = parentTmp;
    return parentTmp;
  };
  const addChild = function(ins) {
    let exist = false;
    let childs = children.value;
    childs.map((child) => {
      if (ins == child) {
        exist = true;
      }
    });
    if (!exist) {
      children.value.push(ins);
    }
  };
  const addChildRef = function(str) {
    let index = childrenRefs.value.indexOf("str");
    if (index <= -1) {
      childrenRefs.value.push(str);
    }
  };
  const getChildren = function() {
    return children.value;
  };
  const getParentData = function(parentName, instance, refMode) {
    let parentIns = getParent(parentName, instance);
    if (parentIns != null) {
      let chds = parentIns.$callMethod("getChildren");
      if (chds != null) {
        if (refMode) {
          parentIns === null || parentIns === void 0 ? null : parentIns.$callMethod("addChildRef", instance.$data["refstr"]);
        } else {
          parentIns === null || parentIns === void 0 ? null : parentIns.$callMethod("addChild", instance);
        }
      }
      UTSJSONObject.keys(parentData.value).map((key) => {
        const propsData = parentIns === null || parentIns === void 0 ? null : parentIns.$callMethod("getProps");
        if (propsData != null && UTSJSONObject.keys(propsData).includes(key)) {
          parentData.value[key] = propsData[key];
        }
        const refsData = parentIns === null || parentIns === void 0 ? null : parentIns.$callMethod("getRefs");
        if (refsData != null && UTSJSONObject.keys(refsData).includes(key)) {
          parentData.value[key] = refsData[key];
        }
      });
    }
    return parentIns;
  };
  const preventEvent = function(e) {
    e.stopPropagation();
  };
  const noop = function(e) {
    preventEvent(e);
  };
  const onComponentDestroy = function(instance) {
    if (parent.value != null) {
      const childrenList = parent.value.$callMethod("getChildren");
      childrenList.map((child, index) => {
        if (child === instance) {
          childrenList.splice(index, 1);
        }
      });
    }
  };
  return new UPUseUltraUIType({
    // 响应式数据
    parent,
    parentData,
    children,
    childrenRefs,
    // 方法
    openPage,
    getChildIndex,
    getParent,
    addChild,
    addChildRef,
    getParentData,
    getChildren,
    preventEvent,
    noop,
    onComponentDestroy
  });
}
export {
  useUltraUI as u
};
//# sourceMappingURL=useUltraUI.js.map
