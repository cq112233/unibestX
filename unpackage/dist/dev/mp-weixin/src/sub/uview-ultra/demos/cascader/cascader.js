"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_cascader_1 = common_vendor.resolveComponent("up-cascader");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_button_1 + _easycom_up_cascader_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_cascader = () => "../../../../../uni_modules/uview-ultra/components/up-cascader/up-cascader.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_button + _easycom_up_cascader + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cascader",
  setup(__props) {
    const showArea = common_vendor.ref(false);
    const showCategory = common_vendor.ref(false);
    const showOrg = common_vendor.ref(false);
    const showColumn = common_vendor.ref(false);
    const showAuto = common_vendor.ref(false);
    const areaValue = common_vendor.ref([]);
    const categoryValue = common_vendor.ref(["2", "2-2"]);
    const orgValue = common_vendor.ref([]);
    const columnValue = common_vendor.ref([]);
    const autoValue = common_vendor.ref([]);
    const eventLog = common_vendor.ref("选择后 change / confirm 事件会返回选中的值数组");
    const areaData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        label: "北京市",
        value: "11",
        children: [
          new common_vendor.UTSJSONObject({
            label: "北京市",
            value: "1101",
            children: [
              new common_vendor.UTSJSONObject({ label: "东城区", value: "110101" }),
              new common_vendor.UTSJSONObject({ label: "西城区", value: "110102" }),
              new common_vendor.UTSJSONObject({ label: "朝阳区", value: "110105" })
            ]
          })
        ]
      }),
      new common_vendor.UTSJSONObject({
        label: "广东省",
        value: "44",
        children: [
          new common_vendor.UTSJSONObject({
            label: "广州市",
            value: "4401",
            children: [
              new common_vendor.UTSJSONObject({ label: "天河区", value: "440106" }),
              new common_vendor.UTSJSONObject({ label: "越秀区", value: "440104" }),
              new common_vendor.UTSJSONObject({ label: "海珠区", value: "440105" })
            ]
          })
        ]
      }),
      new common_vendor.UTSJSONObject({
        label: "浙江省",
        value: "33",
        children: [
          new common_vendor.UTSJSONObject({
            label: "杭州市",
            value: "3301",
            children: [
              new common_vendor.UTSJSONObject({ label: "西湖区", value: "330106" }),
              new common_vendor.UTSJSONObject({ label: "滨江区", value: "330108" })
            ]
          })
        ]
      })
    ]);
    const categoryData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        label: "服装",
        value: "1",
        children: [
          new common_vendor.UTSJSONObject({
            label: "上装",
            value: "1-1",
            children: [
              new common_vendor.UTSJSONObject({ label: "T恤", value: "1-1-1" }),
              new common_vendor.UTSJSONObject({ label: "衬衫", value: "1-1-2" })
            ]
          })
        ]
      }),
      new common_vendor.UTSJSONObject({
        label: "数码",
        value: "2",
        children: [
          new common_vendor.UTSJSONObject({
            label: "电脑",
            value: "2-2",
            children: [
              new common_vendor.UTSJSONObject({ label: "笔记本", value: "2-2-1" }),
              new common_vendor.UTSJSONObject({ label: "台式机", value: "2-2-2" })
            ]
          })
        ]
      }),
      new common_vendor.UTSJSONObject({
        label: "食品",
        value: "3",
        children: [
          new common_vendor.UTSJSONObject({
            label: "零食",
            value: "3-3",
            children: [
              new common_vendor.UTSJSONObject({ label: "坚果", value: "3-3-1" }),
              new common_vendor.UTSJSONObject({ label: "饼干", value: "3-3-2" })
            ]
          })
        ]
      })
    ]);
    const orgData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        name: "总部",
        id: "1",
        childs: [
          new common_vendor.UTSJSONObject({
            name: "研发部",
            id: "1-1",
            childs: [
              new common_vendor.UTSJSONObject({ name: "前端组", id: "1-1-1" }),
              new common_vendor.UTSJSONObject({ name: "后端组", id: "1-1-2" })
            ]
          }),
          new common_vendor.UTSJSONObject({
            name: "市场部",
            id: "1-2",
            childs: [
              new common_vendor.UTSJSONObject({ name: "品牌组", id: "1-2-1" }),
              new common_vendor.UTSJSONObject({ name: "运营组", id: "1-2-2" })
            ]
          })
        ]
      })
    ]);
    function getValueText(value) {
      if (value.length == 0) {
        return "未选择";
      }
      const texts = [];
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        texts.push(item == null ? "" : item.toString());
      }
      return texts.join(" / ");
    }
    function openArea() {
      showArea.value = true;
    }
    function openCategory() {
      showCategory.value = true;
    }
    function openOrg() {
      showOrg.value = true;
    }
    function openColumn() {
      showColumn.value = true;
    }
    function openAuto() {
      showAuto.value = true;
    }
    function onAreaChange(value) {
      eventLog.value = "基础用法 change => " + getValueText(value);
    }
    function onAreaConfirm(value) {
      eventLog.value = "基础用法 confirm => " + getValueText(value);
    }
    function onCategoryConfirm(value) {
      eventLog.value = "默认值 confirm => " + getValueText(value);
    }
    function onOrgConfirm(value) {
      eventLog.value = "自定义字段 confirm => " + getValueText(value);
    }
    function onColumnConfirm(value) {
      eventLog.value = "垂直头部 confirm => " + getValueText(value);
    }
    function onAutoConfirm(value) {
      eventLog.value = "自动关闭 confirm => " + getValueText(value);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-cascader 级联选择器",
          class: "data-v-3d6ec480"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        c: common_vendor.o(openArea, "60"),
        d: common_vendor.p({
          type: "primary",
          text: "选择地区",
          class: "data-v-3d6ec480"
        }),
        e: common_vendor.t(getValueText(areaValue.value)),
        f: common_vendor.o(onAreaChange, "f8"),
        g: common_vendor.o(onAreaConfirm, "35"),
        h: common_vendor.o(($event) => {
          return showArea.value = $event;
        }, "46"),
        i: common_vendor.o(($event) => {
          return areaValue.value = $event;
        }, "07"),
        j: common_vendor.p({
          data: areaData.value,
          show: showArea.value,
          modelValue: areaValue.value,
          class: "data-v-3d6ec480"
        }),
        k: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        l: common_vendor.o(openCategory, "d7"),
        m: common_vendor.p({
          type: "primary",
          text: "选择商品分类",
          class: "data-v-3d6ec480"
        }),
        n: common_vendor.t(getValueText(categoryValue.value)),
        o: common_vendor.o(onCategoryConfirm, "db"),
        p: common_vendor.o(($event) => {
          return showCategory.value = $event;
        }, "40"),
        q: common_vendor.o(($event) => {
          return categoryValue.value = $event;
        }, "7c"),
        r: common_vendor.p({
          data: categoryData.value,
          show: showCategory.value,
          modelValue: categoryValue.value,
          class: "data-v-3d6ec480"
        }),
        s: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        t: common_vendor.o(openOrg, "ea"),
        v: common_vendor.p({
          type: "primary",
          text: "选择组织架构",
          class: "data-v-3d6ec480"
        }),
        w: common_vendor.t(getValueText(orgValue.value)),
        x: common_vendor.o(onOrgConfirm, "0d"),
        y: common_vendor.o(($event) => {
          return showOrg.value = $event;
        }, "e9"),
        z: common_vendor.o(($event) => {
          return orgValue.value = $event;
        }, "0e"),
        A: common_vendor.p({
          data: orgData.value,
          ["value-key"]: "id",
          ["label-key"]: "name",
          ["children-key"]: "childs",
          show: showOrg.value,
          modelValue: orgValue.value,
          class: "data-v-3d6ec480"
        }),
        B: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        C: common_vendor.o(openColumn, "c7"),
        D: common_vendor.p({
          type: "primary",
          text: "选择商品分类",
          class: "data-v-3d6ec480"
        }),
        E: common_vendor.t(getValueText(columnValue.value)),
        F: common_vendor.o(onColumnConfirm, "3f"),
        G: common_vendor.o(($event) => {
          return showColumn.value = $event;
        }, "fb"),
        H: common_vendor.o(($event) => {
          return columnValue.value = $event;
        }, "5d"),
        I: common_vendor.p({
          data: categoryData.value,
          headerDirection: "column",
          optionsCols: 1,
          show: showColumn.value,
          modelValue: columnValue.value,
          class: "data-v-3d6ec480"
        }),
        J: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        K: common_vendor.o(openAuto, "b7"),
        L: common_vendor.p({
          type: "primary",
          text: "选择地区",
          class: "data-v-3d6ec480"
        }),
        M: common_vendor.t(getValueText(autoValue.value)),
        N: common_vendor.o(onAutoConfirm, "18"),
        O: common_vendor.o(($event) => {
          return showAuto.value = $event;
        }, "85"),
        P: common_vendor.o(($event) => {
          return autoValue.value = $event;
        }, "65"),
        Q: common_vendor.p({
          data: areaData.value,
          ["auto-close"]: true,
          show: showAuto.value,
          modelValue: autoValue.value,
          class: "data-v-3d6ec480"
        }),
        R: common_vendor.p({
          class: "demo-title data-v-3d6ec480"
        }),
        S: common_vendor.t(eventLog.value),
        T: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-cascader 级联选择器",
          class: "data-v-3d6ec480"
        }),
        U: common_vendor.gei(_ctx, ""),
        V: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-3d6ec480"
        }),
        W: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3d6ec480"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/cascader/cascader.js.map
