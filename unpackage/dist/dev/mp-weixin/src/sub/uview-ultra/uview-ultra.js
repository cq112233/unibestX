"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _component_ThemeSwitchCard = common_vendor.resolveComponent("ThemeSwitchCard");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group_1 = common_vendor.resolveComponent("up-cell-group");
  (_easycom_NavBar_1 + _component_ThemeSwitchCard + _easycom_up_icon_1 + _easycom_up_cell_1 + _easycom_up_cell_group_1)();
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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "uview-ultra",
  setup(__props) {
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
          class: "mx-12px mb-12px data-v-e0cc545a"
        }),
        d: common_vendor.p({
          name: "plus-circle",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        e: common_vendor.o(($event) => {
          return goToDemo("button");
        }, "21"),
        f: common_vendor.p({
          title: "Button 按钮",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        g: common_vendor.p({
          name: "photo",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        h: common_vendor.o(($event) => {
          return goToDemo("icon");
        }, "91"),
        i: common_vendor.p({
          title: "Icon 图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        j: common_vendor.p({
          name: "file-text",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        k: common_vendor.o(($event) => {
          return goToDemo("text");
        }, "48"),
        l: common_vendor.p({
          title: "Text 文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        m: common_vendor.p({
          name: "attach",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        n: common_vendor.o(($event) => {
          return goToDemo("link");
        }, "34"),
        o: common_vendor.p({
          title: "Link 超链接",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        p: common_vendor.p({
          name: "info-circle",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        q: common_vendor.o(($event) => {
          return goToDemo("empty");
        }, "08"),
        r: common_vendor.p({
          title: "Empty 空白页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        s: common_vendor.p({
          name: "minus",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        t: common_vendor.o(($event) => {
          return goToDemo("divider");
        }, "93"),
        v: common_vendor.p({
          title: "Divider 分割线",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        w: common_vendor.p({
          name: "reload",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        x: common_vendor.o(($event) => {
          return goToDemo("loading-icon");
        }, "4d"),
        y: common_vendor.p({
          title: "LoadingIcon 加载图标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        z: common_vendor.p({
          name: "list-dot",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        A: common_vendor.o(($event) => {
          return goToDemo("skeleton");
        }, "b5"),
        B: common_vendor.p({
          title: "Skeleton 骨架屏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        C: common_vendor.p({
          name: "tags",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        D: common_vendor.o(($event) => {
          return goToDemo("tag");
        }, "1f"),
        E: common_vendor.p({
          title: "Tag 标签",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        F: common_vendor.p({
          name: "info-circle",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        G: common_vendor.o(($event) => {
          return goToDemo("badge");
        }, "5a"),
        H: common_vendor.p({
          title: "Badge 徽标",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        I: common_vendor.p({
          name: "account",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        J: common_vendor.o(($event) => {
          return goToDemo("avatar");
        }, "80"),
        K: common_vendor.p({
          title: "Avatar 头像",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        L: common_vendor.p({
          name: "map",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        M: common_vendor.o(($event) => {
          return goToDemo("card");
        }, "b4"),
        N: common_vendor.p({
          title: "Card 卡片",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        O: common_vendor.p({
          name: "list-dot",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        P: common_vendor.o(($event) => {
          return goToDemo("list");
        }, "8e"),
        Q: common_vendor.p({
          title: "List 列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        R: common_vendor.p({
          name: "photo",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        S: common_vendor.o(($event) => {
          return goToDemo("swiper");
        }, "13"),
        T: common_vendor.p({
          title: "Swiper 轮播图",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        U: common_vendor.p({
          name: "photo",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        V: common_vendor.o(($event) => {
          return goToDemo("image");
        }, "b6"),
        W: common_vendor.p({
          title: "Image 图片组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        X: common_vendor.p({
          name: "play-circle",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        Y: common_vendor.o(($event) => {
          return goToDemo("transition");
        }, "60"),
        Z: common_vendor.p({
          title: "Transition 动画过渡",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aa: common_vendor.p({
          name: "order",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ab: common_vendor.o(($event) => {
          return goToDemo("steps");
        }, "77"),
        ac: common_vendor.p({
          title: "Steps 步骤条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ad: common_vendor.p({
          name: "grid",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ae: common_vendor.o(($event) => {
          return goToDemo("grid");
        }, "bf"),
        af: common_vendor.p({
          title: "Grid 宫格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ag: common_vendor.p({
          name: "minus",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ah: common_vendor.o(($event) => {
          return goToDemo("line");
        }, "d3"),
        ai: common_vendor.p({
          title: "Line 线条",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aj: common_vendor.p({
          name: "photo",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ak: common_vendor.o(($event) => {
          return goToDemo("album");
        }, "51"),
        al: common_vendor.p({
          title: "Album 相册",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        am: common_vendor.p({
          name: "minus",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        an: common_vendor.o(($event) => {
          return goToDemo("gap");
        }, "2b"),
        ao: common_vendor.p({
          title: "Gap 间隔槽",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ap: common_vendor.p({
          name: "arrow-up",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aq: common_vendor.o(($event) => {
          return goToDemo("sticky");
        }, "02"),
        ar: common_vendor.p({
          title: "Sticky 吸顶",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        as: common_vendor.p({
          name: "grid",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        at: common_vendor.o(($event) => {
          return goToDemo("table");
        }, "32"),
        av: common_vendor.p({
          title: "Table 表格",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aw: common_vendor.p({
          name: "photo",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ax: common_vendor.o(($event) => {
          return goToDemo("lazy-load");
        }, "36"),
        ay: common_vendor.p({
          title: "LazyLoad 懒加载",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        az: common_vendor.p({
          name: "more-dot-fill",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aA: common_vendor.o(($event) => {
          return goToDemo("loadmore");
        }, "f4"),
        aB: common_vendor.p({
          title: "Loadmore 加载更多",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aC: common_vendor.p({
          name: "file-text",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aD: common_vendor.o(($event) => {
          return goToDemo("parse");
        }, "5d"),
        aE: common_vendor.p({
          title: "Parse 富文本解析",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aF: common_vendor.p({
          name: "scan",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aG: common_vendor.o(($event) => {
          return goToDemo("qrcode");
        }, "aa"),
        aH: common_vendor.p({
          title: "Qrcode 二维码",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aI: common_vendor.p({
          name: "grid",
          color: "#2979ff",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aJ: common_vendor.o(($event) => {
          return goToDemo("waterfall");
        }, "d4"),
        aK: common_vendor.p({
          title: "Waterfall 瀑布流",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aL: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        aM: common_vendor.p({
          name: "edit-pen",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aN: common_vendor.o(($event) => {
          return goToDemo("input");
        }, "06"),
        aO: common_vendor.p({
          title: "Input 输入框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aP: common_vendor.p({
          name: "checkbox-mark",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aQ: common_vendor.o(($event) => {
          return goToDemo("checkbox");
        }, "45"),
        aR: common_vendor.p({
          title: "Checkbox 复选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aS: common_vendor.p({
          name: "checkmark-circle",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aT: common_vendor.o(($event) => {
          return goToDemo("radio");
        }, "14"),
        aU: common_vendor.p({
          title: "Radio 单选框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aV: common_vendor.p({
          name: "more-circle",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aW: common_vendor.o(($event) => {
          return goToDemo("switch");
        }, "51"),
        aX: common_vendor.p({
          title: "Switch 开关",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        aY: common_vendor.p({
          name: "star",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        aZ: common_vendor.o(($event) => {
          return goToDemo("rate");
        }, "0f"),
        ba: common_vendor.p({
          title: "Rate 评分",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bb: common_vendor.p({
          name: "plus",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bc: common_vendor.o(($event) => {
          return goToDemo("number-box");
        }, "c7"),
        bd: common_vendor.p({
          title: "NumberBox 步进器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        be: common_vendor.p({
          name: "minus",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bf: common_vendor.o(($event) => {
          return goToDemo("slider");
        }, "93"),
        bg: common_vendor.p({
          title: "Slider 滑块",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bh: common_vendor.p({
          name: "file-text",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bi: common_vendor.o(($event) => {
          return goToDemo("textarea");
        }, "42"),
        bj: common_vendor.p({
          title: "Textarea 多行文本",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bk: common_vendor.p({
          name: "arrow-up",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bl: common_vendor.o(($event) => {
          return goToDemo("upload");
        }, "46"),
        bm: common_vendor.p({
          title: "Upload 上传",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bn: common_vendor.p({
          name: "search",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bo: common_vendor.o(($event) => {
          return goToDemo("search");
        }, "61"),
        bp: common_vendor.p({
          title: "Search 搜索",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bq: common_vendor.p({
          name: "edit-pen",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        br: common_vendor.o(($event) => {
          return goToDemo("form");
        }, "56"),
        bs: common_vendor.p({
          title: "完整 Form 表单示例",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bt: common_vendor.p({
          name: "more-circle",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bv: common_vendor.o(($event) => {
          return goToDemo("pagination");
        }, "d1"),
        bw: common_vendor.p({
          title: "Pagination 分页器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bx: common_vendor.p({
          name: "grid-fill",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        by: common_vendor.o(($event) => {
          return goToDemo("keyboard");
        }, "6e"),
        bz: common_vendor.p({
          title: "Keyboard 键盘",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bA: common_vendor.p({
          name: "arrow-down-fill",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bB: common_vendor.o(($event) => {
          return goToDemo("dropdown");
        }, "0d"),
        bC: common_vendor.p({
          title: "Dropdown 下拉菜单",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bD: common_vendor.p({
          name: "list",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bE: common_vendor.o(($event) => {
          return goToDemo("swipe-action");
        }, "47"),
        bF: common_vendor.p({
          title: "SwipeAction 滑动操作",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bG: common_vendor.p({
          name: "lock",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bH: common_vendor.o(($event) => {
          return goToDemo("code-input");
        }, "99"),
        bI: common_vendor.p({
          title: "CodeInput 验证码输入",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bJ: common_vendor.p({
          name: "clock",
          color: "#19be6b",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bK: common_vendor.o(($event) => {
          return goToDemo("code");
        }, "10"),
        bL: common_vendor.p({
          title: "Code 验证码倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bM: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        bN: common_vendor.p({
          name: "info-circle",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bO: common_vendor.o(($event) => {
          return goToDemo("alert");
        }, "49"),
        bP: common_vendor.p({
          title: "Alert 警告提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bQ: common_vendor.p({
          name: "calendar",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bR: common_vendor.o(($event) => {
          return goToDemo("calendar");
        }, "24"),
        bS: common_vendor.p({
          title: "Calendar 日历",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bT: common_vendor.p({
          name: "list",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bU: common_vendor.o(($event) => {
          return goToDemo("picker");
        }, "be"),
        bV: common_vendor.p({
          title: "Picker 选择器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bW: common_vendor.p({
          name: "clock",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        bX: common_vendor.o(($event) => {
          return goToDemo("datetime-picker");
        }, "8d"),
        bY: common_vendor.p({
          title: "DatetimePicker 时间选择",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        bZ: common_vendor.p({
          name: "server-man",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        ca: common_vendor.o(($event) => {
          return goToDemo("action-sheet");
        }, "b0"),
        cb: common_vendor.p({
          title: "ActionSheet 动作面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cc: common_vendor.p({
          name: "volume",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cd: common_vendor.o(($event) => {
          return goToDemo("notice-bar");
        }, "ae"),
        ce: common_vendor.p({
          title: "NoticeBar 滚动通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cf: common_vendor.p({
          name: "arrow-down",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cg: common_vendor.o(($event) => {
          return goToDemo("collapse");
        }, "99"),
        ch: common_vendor.p({
          title: "Collapse 折叠面板",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        ci: common_vendor.p({
          name: "chat",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cj: common_vendor.o(($event) => {
          return goToDemo("toast");
        }, "9f"),
        ck: common_vendor.p({
          title: "Toast 消息提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cl: common_vendor.p({
          name: "bell",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cm: common_vendor.o(($event) => {
          return goToDemo("notify");
        }, "50"),
        cn: common_vendor.p({
          title: "Notify 消息通知",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        co: common_vendor.p({
          name: "more-dot-fill",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cp: common_vendor.o(($event) => {
          return goToDemo("loading-page");
        }, "b4"),
        cq: common_vendor.p({
          title: "LoadingPage 加载页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cr: common_vendor.p({
          name: "scan",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cs: common_vendor.o(($event) => {
          return goToDemo("overlay");
        }, "c3"),
        ct: common_vendor.p({
          title: "Overlay 遮罩层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cv: common_vendor.p({
          name: "email",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cw: common_vendor.o(($event) => {
          return goToDemo("modal");
        }, "ee"),
        cx: common_vendor.p({
          title: "Modal 模态框",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cy: common_vendor.p({
          name: "server-man",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cz: common_vendor.o(($event) => {
          return goToDemo("popup");
        }, "5a"),
        cA: common_vendor.p({
          title: "Popup 弹出层",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cB: common_vendor.p({
          name: "wifi-off",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cC: common_vendor.o(($event) => {
          return goToDemo("no-network");
        }, "d3"),
        cD: common_vendor.p({
          title: "NoNetwork 无网络提示",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cE: common_vendor.p({
          name: "minus",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cF: common_vendor.o(($event) => {
          return goToDemo("line-progress");
        }, "df"),
        cG: common_vendor.p({
          title: "LineProgress 线型进度",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cH: common_vendor.p({
          name: "clock",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cI: common_vendor.o(($event) => {
          return goToDemo("count-down");
        }, "a4"),
        cJ: common_vendor.p({
          title: "CountDown 倒计时",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cK: common_vendor.p({
          name: "play-right-fill",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cL: common_vendor.o(($event) => {
          return goToDemo("count-to");
        }, "f0"),
        cM: common_vendor.p({
          title: "CountTo 数字滚动",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cN: common_vendor.p({
          name: "file-text",
          color: "#ff9900",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cO: common_vendor.o(($event) => {
          return goToDemo("copy");
        }, "7b"),
        cP: common_vendor.p({
          title: "Copy 文本复制",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cQ: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        cR: common_vendor.p({
          name: "arrow-left",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cS: common_vendor.o(($event) => {
          return goToDemo("navbar");
        }, "90"),
        cT: common_vendor.p({
          title: "Navbar 导航栏",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cU: common_vendor.p({
          name: "arrow-left",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cV: common_vendor.o(($event) => {
          return goToDemo("navbar-mini");
        }, "8b"),
        cW: common_vendor.p({
          title: "NavbarMini 迷你导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        cX: common_vendor.p({
          name: "arrow-upward",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        cY: common_vendor.o(($event) => {
          return goToDemo("back-top");
        }, "4e"),
        cZ: common_vendor.p({
          title: "BackTop 返回顶部",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        da: common_vendor.p({
          name: "list",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        db: common_vendor.o(($event) => {
          return goToDemo("tabbar");
        }, "d2"),
        dc: common_vendor.p({
          title: "Tabbar 底部导航",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dd: common_vendor.p({
          name: "list",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        de: common_vendor.o(($event) => {
          return goToDemo("tabs");
        }, "6c"),
        df: common_vendor.p({
          title: "Tabs 标签页",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dg: common_vendor.p({
          name: "list",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dh: common_vendor.o(($event) => {
          return goToDemo("subsection");
        }, "01"),
        di: common_vendor.p({
          title: "Subsection 分段器",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dj: common_vendor.p({
          name: "list",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dk: common_vendor.o(($event) => {
          return goToDemo("index-list");
        }, "d2"),
        dl: common_vendor.p({
          title: "IndexList 索引列表",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dm: common_vendor.p({
          name: "file-text",
          color: "#909399",
          size: "20",
          class: "mr-8px data-v-e0cc545a"
        }),
        dn: common_vendor.o(($event) => {
          return goToDemo("mp-html");
        }, "6b"),
        dp: common_vendor.p({
          title: "MpHtml 富文本组件",
          ["is-link"]: true,
          class: "data-v-e0cc545a"
        }),
        dq: common_vendor.p({
          border: false,
          class: "data-v-e0cc545a"
        }),
        dr: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "uview-ultra 示例",
          class: "data-v-e0cc545a"
        }),
        ds: common_vendor.gei(_ctx, ""),
        dt: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e0cc545a"
        }),
        dv: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0cc545a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/uview-ultra.js.map
