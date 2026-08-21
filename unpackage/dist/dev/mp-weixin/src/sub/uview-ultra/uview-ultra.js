"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
require("../../store/index.js");
const src_store_app = require("../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group_1 = common_vendor.resolveComponent("up-cell-group");
  (_easycom_NavBar_1 + _easycom_up_icon_1 + _easycom_up_cell_1 + _easycom_up_cell_group_1)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_up_icon = () => "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_cell = () => "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
const _easycom_up_cell_group = () => "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_icon + _easycom_up_cell + _easycom_up_cell_group + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const demoCount = 85;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "uview-ultra",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const themeColor = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    function goToDemo(page) {
      common_vendor.index.navigateTo({
        url: `/src/sub/uview-ultra/demos/${page}/${page}`
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "uview-ultra 组件演示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          class: "data-v-e0cc545a"
        }),
        b: common_assets._imports_0,
        c: common_vendor.t(demoCount),
        d: common_vendor.p({
          name: "coupon",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        e: common_vendor.o(($event) => {
          return goToDemo("coupon");
        }, "48"),
        f: common_vendor.p({
          title: "Coupon 优惠券",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        g: common_vendor.p({
          name: "file-text-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        h: common_vendor.o(($event) => {
          return goToDemo("pdf-reader");
        }, "6d"),
        i: common_vendor.p({
          title: "PdfReader PDF 阅读",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        j: common_vendor.p({
          name: "list-dot",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        k: common_vendor.o(($event) => {
          return goToDemo("tree");
        }, "58"),
        l: common_vendor.p({
          title: "Tree 树形",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        m: common_vendor.p({
          name: "scan",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        n: common_vendor.o(($event) => {
          return goToDemo("barcode");
        }, "27"),
        o: common_vendor.p({
          title: "Barcode 条形码",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        p: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        q: common_vendor.o(($event) => {
          return goToDemo("poster");
        }, "b2"),
        r: common_vendor.p({
          title: "Poster 海报",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        s: common_vendor.p({
          name: "play-right",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        t: common_vendor.o(($event) => {
          return goToDemo("short-video");
        }, "94"),
        v: common_vendor.p({
          title: "ShortVideo 短视频",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        w: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        x: common_vendor.o(($event) => {
          return goToDemo("color-picker");
        }, "bd"),
        y: common_vendor.p({
          title: "ColorPicker 颜色选择",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        z: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        A: common_vendor.o(($event) => {
          return goToDemo("cropper");
        }, "2f"),
        B: common_vendor.p({
          title: "Cropper 裁剪",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        C: common_vendor.p({
          name: "order",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        D: common_vendor.o(($event) => {
          return goToDemo("dragsort");
        }, "a6"),
        E: common_vendor.p({
          title: "Dragsort 拖拽排序",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        F: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        G: common_vendor.o(($event) => {
          return goToDemo("signature");
        }, "eb"),
        H: common_vendor.p({
          title: "Signature 签名",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        I: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        J: common_vendor.o(($event) => {
          return goToDemo("table2");
        }, "a4"),
        K: common_vendor.p({
          title: "Table2 表格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        L: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        M: common_vendor.o(($event) => {
          return goToDemo("title");
        }, "35"),
        N: common_vendor.p({
          title: "Title 标题",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        O: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        P: common_vendor.o(($event) => {
          return goToDemo("cascader");
        }, "7b"),
        Q: common_vendor.p({
          title: "Cascader 级联选择器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        R: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        S: common_vendor.p({
          name: "plus-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        T: common_vendor.o(($event) => {
          return goToDemo("button");
        }, "d0"),
        U: common_vendor.p({
          title: "Button 按钮",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        V: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        W: common_vendor.o(($event) => {
          return goToDemo("icon");
        }, "42"),
        X: common_vendor.p({
          title: "Icon 图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        Y: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        Z: common_vendor.o(($event) => {
          return goToDemo("text");
        }, "e3"),
        aa: common_vendor.p({
          title: "Text 文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ab: common_vendor.p({
          name: "attach",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ac: common_vendor.o(($event) => {
          return goToDemo("link");
        }, "9c"),
        ad: common_vendor.p({
          title: "Link 超链接",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ae: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        af: common_vendor.o(($event) => {
          return goToDemo("empty");
        }, "1b"),
        ag: common_vendor.p({
          title: "Empty 空白页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ah: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ai: common_vendor.o(($event) => {
          return goToDemo("divider");
        }, "5f"),
        aj: common_vendor.p({
          title: "Divider 分割线",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ak: common_vendor.p({
          name: "reload",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        al: common_vendor.o(($event) => {
          return goToDemo("loading-icon");
        }, "b2"),
        am: common_vendor.p({
          title: "LoadingIcon 加载图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        an: common_vendor.p({
          name: "list-dot",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ao: common_vendor.o(($event) => {
          return goToDemo("skeleton");
        }, "fa"),
        ap: common_vendor.p({
          title: "Skeleton 骨架屏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aq: common_vendor.p({
          name: "tags",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ar: common_vendor.o(($event) => {
          return goToDemo("tag");
        }, "cc"),
        as: common_vendor.p({
          title: "Tag 标签",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        at: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        av: common_vendor.o(($event) => {
          return goToDemo("badge");
        }, "38"),
        aw: common_vendor.p({
          title: "Badge 徽标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ax: common_vendor.p({
          name: "account",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ay: common_vendor.o(($event) => {
          return goToDemo("avatar");
        }, "b6"),
        az: common_vendor.p({
          title: "Avatar 头像",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aA: common_vendor.p({
          name: "map",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aB: common_vendor.o(($event) => {
          return goToDemo("card");
        }, "d8"),
        aC: common_vendor.p({
          title: "Card 卡片",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aD: common_vendor.p({
          name: "list-dot",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aE: common_vendor.o(($event) => {
          return goToDemo("list");
        }, "69"),
        aF: common_vendor.p({
          title: "List 列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aG: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aH: common_vendor.o(($event) => {
          return goToDemo("swiper");
        }, "41"),
        aI: common_vendor.p({
          title: "Swiper 轮播图",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aJ: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aK: common_vendor.o(($event) => {
          return goToDemo("image");
        }, "92"),
        aL: common_vendor.p({
          title: "Image 图片组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aM: common_vendor.p({
          name: "play-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aN: common_vendor.o(($event) => {
          return goToDemo("transition");
        }, "13"),
        aO: common_vendor.p({
          title: "Transition 动画过渡",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aP: common_vendor.p({
          name: "order",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aQ: common_vendor.o(($event) => {
          return goToDemo("steps");
        }, "9b"),
        aR: common_vendor.p({
          title: "Steps 步骤条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aS: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aT: common_vendor.o(($event) => {
          return goToDemo("grid");
        }, "65"),
        aU: common_vendor.p({
          title: "Grid 宫格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aV: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aW: common_vendor.o(($event) => {
          return goToDemo("line");
        }, "a3"),
        aX: common_vendor.p({
          title: "Line 线条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aY: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        aZ: common_vendor.o(($event) => {
          return goToDemo("album");
        }, "7d"),
        ba: common_vendor.p({
          title: "Album 相册",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bb: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bc: common_vendor.o(($event) => {
          return goToDemo("gap");
        }, "d4"),
        bd: common_vendor.p({
          title: "Gap 间隔槽",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        be: common_vendor.p({
          name: "arrow-up",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bf: common_vendor.o(($event) => {
          return goToDemo("sticky");
        }, "67"),
        bg: common_vendor.p({
          title: "Sticky 吸顶",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bh: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bi: common_vendor.o(($event) => {
          return goToDemo("table");
        }, "ef"),
        bj: common_vendor.p({
          title: "Table 表格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bk: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bl: common_vendor.o(($event) => {
          return goToDemo("lazy-load");
        }, "08"),
        bm: common_vendor.p({
          title: "LazyLoad 懒加载",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bn: common_vendor.p({
          name: "more-dot-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bo: common_vendor.o(($event) => {
          return goToDemo("loadmore");
        }, "13"),
        bp: common_vendor.p({
          title: "Loadmore 加载更多",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bq: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        br: common_vendor.o(($event) => {
          return goToDemo("parse");
        }, "2b"),
        bs: common_vendor.p({
          title: "Parse 富文本解析",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bt: common_vendor.p({
          name: "scan",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bv: common_vendor.o(($event) => {
          return goToDemo("qrcode");
        }, "5e"),
        bw: common_vendor.p({
          title: "Qrcode 二维码",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bx: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        by: common_vendor.o(($event) => {
          return goToDemo("waterfall");
        }, "5d"),
        bz: common_vendor.p({
          title: "Waterfall 瀑布流",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bA: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        bB: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bC: common_vendor.o(($event) => {
          return goToDemo("input");
        }, "9e"),
        bD: common_vendor.p({
          title: "Input 输入框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bE: common_vendor.p({
          name: "checkbox-mark",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bF: common_vendor.o(($event) => {
          return goToDemo("checkbox");
        }, "8e"),
        bG: common_vendor.p({
          title: "Checkbox 复选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bH: common_vendor.p({
          name: "checkmark-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bI: common_vendor.o(($event) => {
          return goToDemo("radio");
        }, "09"),
        bJ: common_vendor.p({
          title: "Radio 单选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bK: common_vendor.p({
          name: "more-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bL: common_vendor.o(($event) => {
          return goToDemo("switch");
        }, "bd"),
        bM: common_vendor.p({
          title: "Switch 开关",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bN: common_vendor.p({
          name: "star",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bO: common_vendor.o(($event) => {
          return goToDemo("rate");
        }, "12"),
        bP: common_vendor.p({
          title: "Rate 评分",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bQ: common_vendor.p({
          name: "plus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bR: common_vendor.o(($event) => {
          return goToDemo("number-box");
        }, "fe"),
        bS: common_vendor.p({
          title: "NumberBox 步进器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bT: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bU: common_vendor.o(($event) => {
          return goToDemo("slider");
        }, "7d"),
        bV: common_vendor.p({
          title: "Slider 滑块",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bW: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        bX: common_vendor.o(($event) => {
          return goToDemo("textarea");
        }, "59"),
        bY: common_vendor.p({
          title: "Textarea 多行文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bZ: common_vendor.p({
          name: "arrow-up",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ca: common_vendor.o(($event) => {
          return goToDemo("upload");
        }, "85"),
        cb: common_vendor.p({
          title: "Upload 上传",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cc: common_vendor.p({
          name: "search",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cd: common_vendor.o(($event) => {
          return goToDemo("search");
        }, "bd"),
        ce: common_vendor.p({
          title: "Search 搜索",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cf: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cg: common_vendor.o(($event) => {
          return goToDemo("form");
        }, "76"),
        ch: common_vendor.p({
          title: "完整 Form 表单示例",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ci: common_vendor.p({
          name: "more-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cj: common_vendor.o(($event) => {
          return goToDemo("pagination");
        }, "7f"),
        ck: common_vendor.p({
          title: "Pagination 分页器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cl: common_vendor.p({
          name: "grid-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cm: common_vendor.o(($event) => {
          return goToDemo("keyboard");
        }, "80"),
        cn: common_vendor.p({
          title: "Keyboard 键盘",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        co: common_vendor.p({
          name: "arrow-down-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cp: common_vendor.o(($event) => {
          return goToDemo("dropdown");
        }, "69"),
        cq: common_vendor.p({
          title: "Dropdown 下拉菜单",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cr: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cs: common_vendor.o(($event) => {
          return goToDemo("swipe-action");
        }, "68"),
        ct: common_vendor.p({
          title: "SwipeAction 滑动操作",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cv: common_vendor.p({
          name: "lock",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cw: common_vendor.o(($event) => {
          return goToDemo("code-input");
        }, "2d"),
        cx: common_vendor.p({
          title: "CodeInput 验证码输入",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cy: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cz: common_vendor.o(($event) => {
          return goToDemo("code");
        }, "9e"),
        cA: common_vendor.p({
          title: "Code 验证码倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cB: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        cC: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cD: common_vendor.o(($event) => {
          return goToDemo("alert");
        }, "b7"),
        cE: common_vendor.p({
          title: "Alert 警告提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cF: common_vendor.p({
          name: "calendar",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cG: common_vendor.o(($event) => {
          return goToDemo("calendar");
        }, "a0"),
        cH: common_vendor.p({
          title: "Calendar 日历",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cI: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cJ: common_vendor.o(($event) => {
          return goToDemo("picker");
        }, "51"),
        cK: common_vendor.p({
          title: "Picker 选择器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cL: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cM: common_vendor.o(($event) => {
          return goToDemo("datetime-picker");
        }, "12"),
        cN: common_vendor.p({
          title: "DatetimePicker 时间选择",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cO: common_vendor.p({
          name: "server-man",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cP: common_vendor.o(($event) => {
          return goToDemo("action-sheet");
        }, "d0"),
        cQ: common_vendor.p({
          title: "ActionSheet 动作面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cR: common_vendor.p({
          name: "volume",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cS: common_vendor.o(($event) => {
          return goToDemo("notice-bar");
        }, "be"),
        cT: common_vendor.p({
          title: "NoticeBar 滚动通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cU: common_vendor.p({
          name: "arrow-down",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cV: common_vendor.o(($event) => {
          return goToDemo("collapse");
        }, "7d"),
        cW: common_vendor.p({
          title: "Collapse 折叠面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cX: common_vendor.p({
          name: "chat",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        cY: common_vendor.o(($event) => {
          return goToDemo("toast");
        }, "4b"),
        cZ: common_vendor.p({
          title: "Toast 消息提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        da: common_vendor.p({
          name: "bell",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        db: common_vendor.o(($event) => {
          return goToDemo("notify");
        }, "ac"),
        dc: common_vendor.p({
          title: "Notify 消息通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dd: common_vendor.p({
          name: "more-dot-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        de: common_vendor.o(($event) => {
          return goToDemo("loading-page");
        }, "45"),
        df: common_vendor.p({
          title: "LoadingPage 加载页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dg: common_vendor.p({
          name: "scan",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dh: common_vendor.o(($event) => {
          return goToDemo("overlay");
        }, "4c"),
        di: common_vendor.p({
          title: "Overlay 遮罩层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dj: common_vendor.p({
          name: "email",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dk: common_vendor.o(($event) => {
          return goToDemo("modal");
        }, "fb"),
        dl: common_vendor.p({
          title: "Modal 模态框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dm: common_vendor.p({
          name: "server-man",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dn: common_vendor.o(($event) => {
          return goToDemo("popup");
        }, "fd"),
        dp: common_vendor.p({
          title: "Popup 弹出层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dq: common_vendor.p({
          name: "wifi-off",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dr: common_vendor.o(($event) => {
          return goToDemo("no-network");
        }, "0f"),
        ds: common_vendor.p({
          title: "NoNetwork 无网络提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dt: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dv: common_vendor.o(($event) => {
          return goToDemo("line-progress");
        }, "ac"),
        dw: common_vendor.p({
          title: "LineProgress 线型进度",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dx: common_vendor.p({
          name: "reload",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dy: common_vendor.o(($event) => {
          return goToDemo("circle-progress");
        }, "30"),
        dz: common_vendor.p({
          title: "CircleProgress 圆形进度条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dA: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dB: common_vendor.o(($event) => {
          return goToDemo("count-down");
        }, "13"),
        dC: common_vendor.p({
          title: "CountDown 倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dD: common_vendor.p({
          name: "play-right-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dE: common_vendor.o(($event) => {
          return goToDemo("count-to");
        }, "1f"),
        dF: common_vendor.p({
          title: "CountTo 数字滚动",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dG: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dH: common_vendor.o(($event) => {
          return goToDemo("copy");
        }, "c7"),
        dI: common_vendor.p({
          title: "Copy 文本复制",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dJ: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        dK: common_vendor.p({
          name: "arrow-left",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dL: common_vendor.o(($event) => {
          return goToDemo("navbar");
        }, "e2"),
        dM: common_vendor.p({
          title: "Navbar 导航栏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dN: common_vendor.p({
          name: "arrow-left",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dO: common_vendor.o(($event) => {
          return goToDemo("navbar-mini");
        }, "bf"),
        dP: common_vendor.p({
          title: "NavbarMini 迷你导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dQ: common_vendor.p({
          name: "arrow-upward",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dR: common_vendor.o(($event) => {
          return goToDemo("back-top");
        }, "91"),
        dS: common_vendor.p({
          title: "BackTop 返回顶部",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dT: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dU: common_vendor.o(($event) => {
          return goToDemo("tabbar");
        }, "b3"),
        dV: common_vendor.p({
          title: "Tabbar 底部导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dW: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        dX: common_vendor.o(($event) => {
          return goToDemo("tabs");
        }, "a2"),
        dY: common_vendor.p({
          title: "Tabs 标签页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dZ: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ea: common_vendor.o(($event) => {
          return goToDemo("subsection");
        }, "3f"),
        eb: common_vendor.p({
          title: "Subsection 分段器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ec: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        ed: common_vendor.o(($event) => {
          return goToDemo("index-list");
        }, "7a"),
        ee: common_vendor.p({
          title: "IndexList 索引列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ef: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-_b8px_B data-v-e0cc545a"
        }),
        eg: common_vendor.o(($event) => {
          return goToDemo("mp-html");
        }, "89"),
        eh: common_vendor.p({
          title: "MpHtml 富文本组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ei: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        ej: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "uview-ultra 示例",
          class: "data-v-e0cc545a"
        }),
        ek: common_vendor.gei(_ctx, ""),
        el: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e0cc545a"
        }),
        em: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0cc545a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/uview-ultra.js.map
