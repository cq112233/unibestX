"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_z_paging_x_1 = common_vendor.resolveComponent("z-paging-x");
  _easycom_z_paging_x_1();
}
const _easycom_z_paging_x = () => "../../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
if (!Math) {
  (_easycom_z_paging_x + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
class CompactArticleItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          title: { type: String, optional: false },
          summary: { type: String, optional: false },
          tag: { type: String, optional: false },
          tagBgColor: { type: String, optional: false },
          tagColor: { type: String, optional: false }
        };
      },
      name: "CompactArticleItem"
    };
  }
  constructor(options, metadata = CompactArticleItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.title = this.__props__.title;
    this.summary = this.__props__.summary;
    this.tag = this.__props__.tag;
    this.tagBgColor = this.__props__.tagBgColor;
    this.tagColor = this.__props__.tagColor;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ZPagingDemoCard",
  setup(__props) {
    const shouldFail = common_vendor.ref(false);
    const tabList = ["全部", "技术", "设计"];
    const tabIndex = common_vendor.ref(0);
    const pagingX = common_vendor.ref(null);
    const dataList = common_vendor.ref([]);
    function onUpdateModelValue(val) {
      dataList.value = val;
    }
    function tabChange(index) {
      tabIndex.value = index;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    function triggerError() {
      shouldFail.value = true;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    function triggerClear() {
      dataList.value = [];
      if (pagingX.value != null) {
        pagingX.value.$callMethod("complete", []);
      }
    }
    function getMockArticles(category, pageNo, pageSize) {
      const list = [];
      const start = (pageNo - 1) * pageSize;
      for (let i = 0; i < pageSize; i++) {
        const itemId = start + i + 1;
        if (itemId > 12) {
          break;
        }
        let tag = category;
        if (category == "全部") {
          tag = itemId % 2 == 0 ? "技术" : "设计";
        }
        let tagBgColor = "#e0f2fe";
        let tagColor = "#0284c7";
        if (tag == "设计") {
          tagBgColor = "#f3e8ff";
          tagColor = "#7c3aed";
        }
        list.push(new CompactArticleItem({
          id: itemId,
          title: `${tag}动态 · 原生探索第 ${itemId} 篇`,
          summary: `卡片演示中的 ${tag} 文章，支持局部滚动加载数据。`,
          tag,
          tagBgColor,
          tagColor
        }));
      }
      return list;
    }
    function onQuery(pageNo, pageSize) {
      const currentCategory = tabList[tabIndex.value];
      setTimeout(() => {
        if (shouldFail.value) {
          shouldFail.value = false;
          if (pagingX.value != null) {
            pagingX.value.$callMethod("completeByError");
          }
          return null;
        }
        const data = getMockArticles(currentCategory, pageNo, pageSize);
        if (pagingX.value != null) {
          pagingX.value.$callMethod("complete", data);
        }
      }, 600);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(triggerError, "04"),
        b: common_vendor.o(triggerClear, "69"),
        c: common_vendor.f(tabList, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tabIndex.value === index ? "var(--theme-color, #37c2bc)" : "#64748b",
            c: index,
            d: tabIndex.value === index ? "#ffffff" : "transparent",
            e: common_vendor.o(($event) => {
              return tabChange(index);
            }, index)
          };
        }),
        d: common_vendor.f(dataList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.tag),
            b: item.tagColor,
            c: item.tagBgColor,
            d: common_vendor.t(item.id),
            e: common_vendor.t(item.title),
            f: common_vendor.t(item.summary),
            g: item.id
          };
        }),
        e: common_vendor.sr(pagingX, "fb8e0b6c-1,fb8e0b6c-0", {
          "k": "pagingX"
        }),
        f: common_vendor.o(onUpdateModelValue, "80"),
        g: common_vendor.o(onQuery, "91"),
        h: common_vendor.p({
          ["list-is"]: "scroll-view",
          ["model-value"]: dataList.value,
          ["default-page-size"]: 10,
          ["paging-style"]: {
            height: "200px",
            border: "1px solid #edf2f7",
            borderTopWidth: "0px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            backgroundColor: "#f8fafc"
          },
          class: "r"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          title: "数据分页列表 (z-paging-x)",
          id: common_vendor.gei(_ctx, "")
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ZPagingDemoCard.js.map
