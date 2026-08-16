"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_index_anchor_1 = common_vendor.resolveComponent("up-index-anchor");
  const _easycom_up_index_item_1 = common_vendor.resolveComponent("up-index-item");
  const _easycom_up_index_list_1 = common_vendor.resolveComponent("up-index-list");
  (_easycom_NavBar_1 + _easycom_up_index_anchor_1 + _easycom_up_index_item_1 + _easycom_up_index_list_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_index_anchor = () => "../../../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
const _easycom_up_index_item = () => "../../../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
const _easycom_up_index_list = () => "../../../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_index_anchor + _easycom_up_index_item + _easycom_up_index_list + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index-list",
  setup(__props) {
    const indexList = common_vendor.ref(["A", "B", "C", "D", "F", "G", "H", "J", "L", "M", "N", "Q", "R", "S", "T", "W", "X", "Y", "Z"]);
    const itemArr = common_vendor.ref([
      ["阿卡丽", "阿木木", "阿里"],
      ["白起", "百里守约", "百里玄策", "扁鹊"],
      ["曹操", "成吉思汗", "程咬金"],
      ["妲己", "大乔", "狄仁杰", "貂蝉", "达摩"],
      ["范海辛", "飞天"],
      ["高渐离", "公孙离", "关羽", "宫本武藏", "干将莫邪"],
      ["韩信", "后羿", "花木兰", "黄忠"],
      ["姜子牙", "橘右京"],
      ["兰陵王", "老夫子", "李白", "李元芳", "刘邦", "刘备", "刘禅", "吕布", "露娜", "鲁班七号"],
      ["马可波罗", "梦奇", "明世隐", "墨子", "芈月"],
      ["哪吒", "娜可露露", "牛魔", "女娲"],
      ["奇迹暖暖", "青雉"],
      ["任逍遥", "瑞文"],
      ["孙膑", "孙尚香", "孙悟空", "苏烈", "沈梦溪"],
      ["太乙真人", "提莫"],
      ["王昭君", "武则天", "项羽"],
      ["夏侯惇", "项羽", "小乔"],
      ["雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "虞姬", "嬴政", "元歌"],
      ["张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "庄周", "诸葛亮", "猪八戒"]
    ]);
    const windowHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "IndexList 索引列表",
          ["auto-back"]: true,
          class: "data-v-e4508bca"
        }),
        b: common_vendor.f(itemArr.value, (item, index, i0) => {
          return {
            a: "e4508bca-5-" + i0 + "," + ("e4508bca-4-" + i0),
            b: common_vendor.p({
              text: indexList.value[index],
              class: "data-v-e4508bca"
            }),
            c: common_vendor.f(item, (cell, cellIndex, i1) => {
              return {
                a: common_vendor.t(cell),
                b: cellIndex
              };
            }),
            d: "e4508bca-4-" + i0 + ",e4508bca-3",
            e: index
          };
        }),
        c: common_vendor.p({
          class: "data-v-e4508bca"
        }),
        d: common_vendor.p({
          ["index-list"]: indexList.value,
          class: "data-v-e4508bca",
          style: "flex:1"
        }),
        e: `${windowHeight.value}px`,
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-index-list 索引列表",
          class: "data-v-e4508bca"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e4508bca"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4508bca"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/index-list/index-list.js.map
