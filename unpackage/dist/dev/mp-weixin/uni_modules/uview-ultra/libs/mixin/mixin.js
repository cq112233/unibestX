"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_test = require("../function/test.js");
const uni_modules_uviewUltra_libs_function_index = require("../function/index.js");
const mixin = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: new UTSJSONObject({})
    },
    customClass: {
      type: String,
      default: ""
    },
    // 跳转的页面路径
    url: {
      type: String,
      default: ""
    },
    // 页面跳转的类型
    linkType: {
      type: String,
      default: "navigateTo"
    }
  },
  data() {
    return {
      parent: null,
      parentData: new UTSJSONObject({}),
      children: [],
      childrenRefs: []
    };
  },
  onLoad() {
  },
  created() {
  },
  computed: {},
  methods: {
    $upAddUnit(val = null, unit = "") {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val, unit);
    },
    $upAddStyle(customStyle = null, target = "object") {
      return uni_modules_uviewUltra_libs_function_index.addStyle(customStyle, target);
    },
    $upGetPx(val = null, unit = false) {
      return uni_modules_uviewUltra_libs_function_index.getPx(val, unit);
    },
    /**
    * 生成bem规则类名
    * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
    * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
    * @param {String} name 组件名称
    * @param {Array} fixed 一直会存在的类名
    * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
    * @returns {Array|string}
    */
    bem: function(name, fixed, change) {
      return uni_modules_uviewUltra_libs_function_index.bem(name, fixed, change);
    },
    // 跳转某一个页面
    openPage: function(urlKey = "url") {
    },
    $uGetRect(selector, all = false) {
      return uni_modules_uviewUltra_libs_function_index.upGetRect(selector, all, this);
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    upGetRect(selector, all = false) {
      return uni_modules_uviewUltra_libs_function_index.upGetRect(selector, all, this);
    },
    getChildIndex(ins) {
      let index = -1;
      if (this.parent != null) {
        this.parent.$data["children"].forEach((child, idx) => {
          if (child == ins) {
            index = idx;
          }
        });
      }
      return index;
    },
    getParent(name) {
      let parent = this.$parent;
      while (parent != null) {
        if (
          // parent.$options != null &&
          parent.$options["name"] != name
        ) {
          parent = parent.$parent;
        } else {
          break;
        }
      }
      return parent;
    },
    addChild(ins) {
      let exist = false;
      let childs = this.children;
      childs.map((child) => {
        if (ins == child) {
          exist = true;
        }
      });
      if (exist == false) {
        this.children.push(ins);
      }
    },
    addChildRef(str) {
      let index = this.childrenRefs.indexOf("str");
      if (index <= -1) {
        this.childrenRefs.push(str);
      }
    },
    /**
     * 获取父组件数据
     * @author jry ijry@qq.com
     * @param parentName 父组件名称如up-row
     * @returns
     */
    getParentData: function(parentName, refMode = false) {
      var _a;
      let parent = this.getParent(parentName);
      this.parent = parent;
      if (parent != null) {
        if ((parent === null || parent === void 0 ? null : parent.$data) != null && ((_a = parent === null || parent === void 0 ? null : parent.$data) === null || _a === void 0 ? null : _a["children"]) != null) {
          if (refMode) {
            parent === null || parent === void 0 ? null : parent.$callMethod("addChildRef", this.$data["refstr"]);
          } else {
            parent === null || parent === void 0 ? null : parent.$callMethod("addChild", this);
          }
        }
        UTSJSONObject.keys(this.parentData).map((key) => {
          var _a2, _b, _c, _d, _e, _f;
          if ((parent === null || parent === void 0 ? null : parent.$props) != null && ((_a2 = parent === null || parent === void 0 ? null : parent.$props) === null || _a2 === void 0 ? null : _a2[key]) != null) {
            if (((_b = this.parentData) === null || _b === void 0 ? null : _b[key]) != null) {
              this.parentData[key] = (_c = parent === null || parent === void 0 ? null : parent.$props) === null || _c === void 0 ? null : _c[key];
            }
          }
          if ((parent === null || parent === void 0 ? null : parent.$data) != null && ((_d = parent === null || parent === void 0 ? null : parent.$data) === null || _d === void 0 ? null : _d[key]) != null) {
            if (((_e = this.parentData) === null || _e === void 0 ? null : _e[key]) != null) {
              this.parentData[key] = (_f = parent === null || parent === void 0 ? null : parent.$data) === null || _f === void 0 ? null : _f[key];
            }
          }
        });
      }
      return new UTSJSONObject({});
    },
    // 阻止事件冒泡
    preventEvent(e) {
      e.stopPropagation();
    },
    // 空操作
    noop(e) {
      this.preventEvent(e);
    }
  },
  onReachBottom() {
  },
  beforeDestroy() {
    if (this.$parent && uni_modules_uviewUltra_libs_function_test.array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index) => {
        if (child === this) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.mixin = mixin;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/libs/mixin/mixin.js.map
