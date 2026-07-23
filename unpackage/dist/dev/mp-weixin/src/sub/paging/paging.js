"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_z_paging_x_1 = common_vendor.resolveComponent("z-paging-x");
  (_easycom_NavBar_1 + _easycom_z_paging_x_1)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_z_paging_x = () => "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
if (!Math) {
  (_easycom_NavBar + _easycom_z_paging_x + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
class ArticleItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          title: { type: String, optional: false },
          summary: { type: String, optional: false },
          author: { type: String, optional: false },
          createTime: { type: String, optional: false },
          tag: { type: String, optional: false },
          tagBgColor: { type: String, optional: false },
          tagColor: { type: String, optional: false }
        };
      },
      name: "ArticleItem"
    };
  }
  constructor(options, metadata = ArticleItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.title = this.__props__.title;
    this.summary = this.__props__.summary;
    this.author = this.__props__.author;
    this.createTime = this.__props__.createTime;
    this.tag = this.__props__.tag;
    this.tagBgColor = this.__props__.tagBgColor;
    this.tagColor = this.__props__.tagColor;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "paging",
  setup(__props) {
    const tabList = ["全部", "技术", "设计", "生活"];
    const tabIndex = common_vendor.ref(0);
    const pagingX = common_vendor.ref(null);
    const dataList = common_vendor.ref([]);
    function onUpdateModelValue(val) {
      dataList.value = val;
    }
    function getMockArticles(category, pageNo, pageSize) {
      const list = [];
      const start = (pageNo - 1) * pageSize;
      for (let i = 0; i < pageSize; i++) {
        const itemId = start + i + 1;
        if (itemId > 35) {
          break;
        }
        let tag = category;
        if (category == "全部") {
          const idx = itemId % 3;
          if (idx == 0)
            tag = "技术";
          else if (idx == 1)
            tag = "设计";
          else
            tag = "生活";
        }
        let tagBgColor = "#e0f2fe";
        let tagColor = "#0284c7";
        if (tag == "设计") {
          tagBgColor = "#f3e8ff";
          tagColor = "#7c3aed";
        } else if (tag == "生活") {
          tagBgColor = "#dcfce7";
          tagColor = "#16a34a";
        }
        list.push(new ArticleItem({
          id: itemId,
          title: `${tag}专栏 · 探索移动端开发的未来第 ${itemId} 篇`,
          summary: `这是关于 ${tag} 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。`,
          author: "技术专家 · unix",
          createTime: `06-04 15:${30 - i}`,
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
        try {
          const data = getMockArticles(currentCategory, pageNo, pageSize);
          if (pagingX.value != null) {
            pagingX.value.$callMethod("complete", data);
          }
        } catch (e) {
          if (pagingX.value != null) {
            pagingX.value.$callMethod("completeByError");
          }
        }
      }, 800);
    }
    function tabChange(index) {
      tabIndex.value = index;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "分页加载 (z-paging-x)",
          ["show-back"]: true
        }),
        b: common_vendor.f(tabList, (tab, index, i0) => {
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
        c: common_vendor.f(dataList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.tag),
            b: item.tagColor,
            c: item.tagBgColor,
            d: common_vendor.t(item.id),
            e: common_vendor.t(item.title),
            f: common_vendor.t(item.summary),
            g: common_vendor.t(item.author),
            h: common_vendor.t(item.createTime),
            i: item.id
          };
        }),
        d: common_vendor.sr(pagingX, "0ef71e88-3,0ef71e88-1", {
          "k": "pagingX"
        }),
        e: common_vendor.o(onUpdateModelValue, "2e"),
        f: common_vendor.o(onQuery, "c0"),
        g: common_vendor.p({
          ["model-value"]: dataList.value,
          ["default-page-size"]: 10,
          class: "flex-1 r"
        }),
        h: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "分页加载"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/paging/paging.js.map
