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
  (_easycom_NavBar + _easycom_up_icon + _easycom_up_cell + _easycom_up_cell_group + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
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
          ["bg-color"]: "#ffffff",
          class: "data-v-e0cc545a"
        }),
        b: common_assets._imports_0,
        c: common_vendor.p({
          name: "plus-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        d: common_vendor.o(($event) => {
          return goToDemo("button");
        }, "7c"),
        e: common_vendor.p({
          title: "Button 按钮",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        f: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        g: common_vendor.o(($event) => {
          return goToDemo("icon");
        }, "f7"),
        h: common_vendor.p({
          title: "Icon 图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        i: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        j: common_vendor.o(($event) => {
          return goToDemo("text");
        }, "ca"),
        k: common_vendor.p({
          title: "Text 文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        l: common_vendor.p({
          name: "attach",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        m: common_vendor.o(($event) => {
          return goToDemo("link");
        }, "17"),
        n: common_vendor.p({
          title: "Link 超链接",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        o: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        p: common_vendor.o(($event) => {
          return goToDemo("empty");
        }, "46"),
        q: common_vendor.p({
          title: "Empty 空白页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        r: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        s: common_vendor.o(($event) => {
          return goToDemo("divider");
        }, "ac"),
        t: common_vendor.p({
          title: "Divider 分割线",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        v: common_vendor.p({
          name: "reload",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        w: common_vendor.o(($event) => {
          return goToDemo("loading-icon");
        }, "9b"),
        x: common_vendor.p({
          title: "LoadingIcon 加载图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        y: common_vendor.p({
          name: "list-dot",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        z: common_vendor.o(($event) => {
          return goToDemo("skeleton");
        }, "f0"),
        A: common_vendor.p({
          title: "Skeleton 骨架屏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        B: common_vendor.p({
          name: "tags",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        C: common_vendor.o(($event) => {
          return goToDemo("tag");
        }, "4c"),
        D: common_vendor.p({
          title: "Tag 标签",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        E: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        F: common_vendor.o(($event) => {
          return goToDemo("badge");
        }, "36"),
        G: common_vendor.p({
          title: "Badge 徽标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        H: common_vendor.p({
          name: "account",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        I: common_vendor.o(($event) => {
          return goToDemo("avatar");
        }, "fc"),
        J: common_vendor.p({
          title: "Avatar 头像",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        K: common_vendor.p({
          name: "map",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        L: common_vendor.o(($event) => {
          return goToDemo("card");
        }, "da"),
        M: common_vendor.p({
          title: "Card 卡片",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        N: common_vendor.p({
          name: "list-dot",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        O: common_vendor.o(($event) => {
          return goToDemo("list");
        }, "41"),
        P: common_vendor.p({
          title: "List 列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        Q: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        R: common_vendor.o(($event) => {
          return goToDemo("swiper");
        }, "12"),
        S: common_vendor.p({
          title: "Swiper 轮播图",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        T: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        U: common_vendor.o(($event) => {
          return goToDemo("image");
        }, "1a"),
        V: common_vendor.p({
          title: "Image 图片组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        W: common_vendor.p({
          name: "play-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        X: common_vendor.o(($event) => {
          return goToDemo("transition");
        }, "0a"),
        Y: common_vendor.p({
          title: "Transition 动画过渡",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        Z: common_vendor.p({
          name: "order",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aa: common_vendor.o(($event) => {
          return goToDemo("steps");
        }, "cd"),
        ab: common_vendor.p({
          title: "Steps 步骤条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ac: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ad: common_vendor.o(($event) => {
          return goToDemo("grid");
        }, "cc"),
        ae: common_vendor.p({
          title: "Grid 宫格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        af: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ag: common_vendor.o(($event) => {
          return goToDemo("line");
        }, "1a"),
        ah: common_vendor.p({
          title: "Line 线条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ai: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aj: common_vendor.o(($event) => {
          return goToDemo("album");
        }, "aa"),
        ak: common_vendor.p({
          title: "Album 相册",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        al: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        am: common_vendor.o(($event) => {
          return goToDemo("gap");
        }, "15"),
        an: common_vendor.p({
          title: "Gap 间隔槽",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ao: common_vendor.p({
          name: "arrow-up",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ap: common_vendor.o(($event) => {
          return goToDemo("sticky");
        }, "f0"),
        aq: common_vendor.p({
          title: "Sticky 吸顶",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ar: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        as: common_vendor.o(($event) => {
          return goToDemo("table");
        }, "78"),
        at: common_vendor.p({
          title: "Table 表格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        av: common_vendor.p({
          name: "photo",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aw: common_vendor.o(($event) => {
          return goToDemo("lazy-load");
        }, "b4"),
        ax: common_vendor.p({
          title: "LazyLoad 懒加载",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ay: common_vendor.p({
          name: "more-dot-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        az: common_vendor.o(($event) => {
          return goToDemo("loadmore");
        }, "26"),
        aA: common_vendor.p({
          title: "Loadmore 加载更多",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aB: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aC: common_vendor.o(($event) => {
          return goToDemo("parse");
        }, "4e"),
        aD: common_vendor.p({
          title: "Parse 富文本解析",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aE: common_vendor.p({
          name: "scan",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aF: common_vendor.o(($event) => {
          return goToDemo("qrcode");
        }, "65"),
        aG: common_vendor.p({
          title: "Qrcode 二维码",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aH: common_vendor.p({
          name: "grid",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aI: common_vendor.o(($event) => {
          return goToDemo("waterfall");
        }, "4c"),
        aJ: common_vendor.p({
          title: "Waterfall 瀑布流",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aK: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        aL: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aM: common_vendor.o(($event) => {
          return goToDemo("input");
        }, "c9"),
        aN: common_vendor.p({
          title: "Input 输入框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aO: common_vendor.p({
          name: "checkbox-mark",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aP: common_vendor.o(($event) => {
          return goToDemo("checkbox");
        }, "fe"),
        aQ: common_vendor.p({
          title: "Checkbox 复选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aR: common_vendor.p({
          name: "checkmark-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aS: common_vendor.o(($event) => {
          return goToDemo("radio");
        }, "82"),
        aT: common_vendor.p({
          title: "Radio 单选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aU: common_vendor.p({
          name: "more-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aV: common_vendor.o(($event) => {
          return goToDemo("switch");
        }, "dd"),
        aW: common_vendor.p({
          title: "Switch 开关",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aX: common_vendor.p({
          name: "star",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aY: common_vendor.o(($event) => {
          return goToDemo("rate");
        }, "ff"),
        aZ: common_vendor.p({
          title: "Rate 评分",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ba: common_vendor.p({
          name: "plus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bb: common_vendor.o(($event) => {
          return goToDemo("number-box");
        }, "03"),
        bc: common_vendor.p({
          title: "NumberBox 步进器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bd: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        be: common_vendor.o(($event) => {
          return goToDemo("slider");
        }, "4d"),
        bf: common_vendor.p({
          title: "Slider 滑块",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bg: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bh: common_vendor.o(($event) => {
          return goToDemo("textarea");
        }, "d7"),
        bi: common_vendor.p({
          title: "Textarea 多行文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bj: common_vendor.p({
          name: "arrow-up",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bk: common_vendor.o(($event) => {
          return goToDemo("upload");
        }, "b2"),
        bl: common_vendor.p({
          title: "Upload 上传",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bm: common_vendor.p({
          name: "search",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bn: common_vendor.o(($event) => {
          return goToDemo("search");
        }, "28"),
        bo: common_vendor.p({
          title: "Search 搜索",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bp: common_vendor.p({
          name: "edit-pen",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bq: common_vendor.o(($event) => {
          return goToDemo("form");
        }, "b3"),
        br: common_vendor.p({
          title: "完整 Form 表单示例",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bs: common_vendor.p({
          name: "more-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bt: common_vendor.o(($event) => {
          return goToDemo("pagination");
        }, "b8"),
        bv: common_vendor.p({
          title: "Pagination 分页器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bw: common_vendor.p({
          name: "grid-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bx: common_vendor.o(($event) => {
          return goToDemo("keyboard");
        }, "09"),
        by: common_vendor.p({
          title: "Keyboard 键盘",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bz: common_vendor.p({
          name: "arrow-down-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bA: common_vendor.o(($event) => {
          return goToDemo("dropdown");
        }, "85"),
        bB: common_vendor.p({
          title: "Dropdown 下拉菜单",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bC: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bD: common_vendor.o(($event) => {
          return goToDemo("swipe-action");
        }, "1f"),
        bE: common_vendor.p({
          title: "SwipeAction 滑动操作",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bF: common_vendor.p({
          name: "lock",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bG: common_vendor.o(($event) => {
          return goToDemo("code-input");
        }, "de"),
        bH: common_vendor.p({
          title: "CodeInput 验证码输入",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bI: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bJ: common_vendor.o(($event) => {
          return goToDemo("code");
        }, "1e"),
        bK: common_vendor.p({
          title: "Code 验证码倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bL: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        bM: common_vendor.p({
          name: "info-circle",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bN: common_vendor.o(($event) => {
          return goToDemo("alert");
        }, "80"),
        bO: common_vendor.p({
          title: "Alert 警告提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bP: common_vendor.p({
          name: "calendar",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bQ: common_vendor.o(($event) => {
          return goToDemo("calendar");
        }, "eb"),
        bR: common_vendor.p({
          title: "Calendar 日历",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bS: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bT: common_vendor.o(($event) => {
          return goToDemo("picker");
        }, "77"),
        bU: common_vendor.p({
          title: "Picker 选择器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bV: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bW: common_vendor.o(($event) => {
          return goToDemo("datetime-picker");
        }, "c8"),
        bX: common_vendor.p({
          title: "DatetimePicker 时间选择",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bY: common_vendor.p({
          name: "server-man",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bZ: common_vendor.o(($event) => {
          return goToDemo("action-sheet");
        }, "18"),
        ca: common_vendor.p({
          title: "ActionSheet 动作面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cb: common_vendor.p({
          name: "volume",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cc: common_vendor.o(($event) => {
          return goToDemo("notice-bar");
        }, "5e"),
        cd: common_vendor.p({
          title: "NoticeBar 滚动通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ce: common_vendor.p({
          name: "arrow-down",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cf: common_vendor.o(($event) => {
          return goToDemo("collapse");
        }, "59"),
        cg: common_vendor.p({
          title: "Collapse 折叠面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ch: common_vendor.p({
          name: "chat",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ci: common_vendor.o(($event) => {
          return goToDemo("toast");
        }, "69"),
        cj: common_vendor.p({
          title: "Toast 消息提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ck: common_vendor.p({
          name: "bell",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cl: common_vendor.o(($event) => {
          return goToDemo("notify");
        }, "f0"),
        cm: common_vendor.p({
          title: "Notify 消息通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cn: common_vendor.p({
          name: "more-dot-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        co: common_vendor.o(($event) => {
          return goToDemo("loading-page");
        }, "d9"),
        cp: common_vendor.p({
          title: "LoadingPage 加载页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cq: common_vendor.p({
          name: "scan",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cr: common_vendor.o(($event) => {
          return goToDemo("overlay");
        }, "32"),
        cs: common_vendor.p({
          title: "Overlay 遮罩层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ct: common_vendor.p({
          name: "email",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cv: common_vendor.o(($event) => {
          return goToDemo("modal");
        }, "dd"),
        cw: common_vendor.p({
          title: "Modal 模态框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cx: common_vendor.p({
          name: "server-man",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cy: common_vendor.o(($event) => {
          return goToDemo("popup");
        }, "e4"),
        cz: common_vendor.p({
          title: "Popup 弹出层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cA: common_vendor.p({
          name: "wifi-off",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cB: common_vendor.o(($event) => {
          return goToDemo("no-network");
        }, "df"),
        cC: common_vendor.p({
          title: "NoNetwork 无网络提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cD: common_vendor.p({
          name: "minus",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cE: common_vendor.o(($event) => {
          return goToDemo("line-progress");
        }, "13"),
        cF: common_vendor.p({
          title: "LineProgress 线型进度",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cG: common_vendor.p({
          name: "clock",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cH: common_vendor.o(($event) => {
          return goToDemo("count-down");
        }, "51"),
        cI: common_vendor.p({
          title: "CountDown 倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cJ: common_vendor.p({
          name: "play-right-fill",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cK: common_vendor.o(($event) => {
          return goToDemo("count-to");
        }, "a2"),
        cL: common_vendor.p({
          title: "CountTo 数字滚动",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cM: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cN: common_vendor.o(($event) => {
          return goToDemo("copy");
        }, "16"),
        cO: common_vendor.p({
          title: "Copy 文本复制",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cP: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        cQ: common_vendor.p({
          name: "arrow-left",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cR: common_vendor.o(($event) => {
          return goToDemo("navbar");
        }, "e6"),
        cS: common_vendor.p({
          title: "Navbar 导航栏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cT: common_vendor.p({
          name: "arrow-left",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cU: common_vendor.o(($event) => {
          return goToDemo("navbar-mini");
        }, "54"),
        cV: common_vendor.p({
          title: "NavbarMini 迷你导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cW: common_vendor.p({
          name: "arrow-upward",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cX: common_vendor.o(($event) => {
          return goToDemo("back-top");
        }, "5c"),
        cY: common_vendor.p({
          title: "BackTop 返回顶部",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cZ: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        da: common_vendor.o(($event) => {
          return goToDemo("tabbar");
        }, "2b"),
        db: common_vendor.p({
          title: "Tabbar 底部导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dc: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dd: common_vendor.o(($event) => {
          return goToDemo("tabs");
        }, "c6"),
        de: common_vendor.p({
          title: "Tabs 标签页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        df: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dg: common_vendor.o(($event) => {
          return goToDemo("subsection");
        }, "8d"),
        dh: common_vendor.p({
          title: "Subsection 分段器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        di: common_vendor.p({
          name: "list",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dj: common_vendor.o(($event) => {
          return goToDemo("index-list");
        }, "2a"),
        dk: common_vendor.p({
          title: "IndexList 索引列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dl: common_vendor.p({
          name: "file-text",
          color: themeColor.value,
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dm: common_vendor.o(($event) => {
          return goToDemo("mp-html");
        }, "f1"),
        dn: common_vendor.p({
          title: "MpHtml 富文本组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dp: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        dq: common_vendor.gei(_ctx, ""),
        dr: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e0cc545a"
        }),
        ds: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0cc545a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/uview-ultra.js.map
