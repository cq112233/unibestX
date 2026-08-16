"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
require("../../store/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../../uni_modules/rice-ui/libs/store/useConfig.js");
require("../../../uni_modules/rice-ui/libs/use/useCountDown/index.js");
require("../../../uni_modules/rice-ui/libs/use/useNamespace/index.js");
require("../../../uni_modules/rice-ui/libs/use/usePopup/index.js");
require("../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js");
require("../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js");
require("../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js");
require("../../../uni_modules/rice-ui/libs/use/useTouch/index.js");
require("../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js");
require("../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js");
require("../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js");
require("../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js");
require("../../../uni_modules/rice-ui/components/rice-action-sheet/type.js");
require("../../../uni_modules/rice-ui/components/rice-action-sheet/api.js");
require("../../../uni_modules/rice-ui/components/rice-button/type.js");
require("../../../uni_modules/rice-ui/components/rice-calendar/type.js");
require("../../../uni_modules/rice-ui/components/rice-cascader/type.js");
require("../../../uni_modules/rice-ui/components/rice-dialog/type.js");
require("../../../uni_modules/rice-ui/components/rice-dialog/api.js");
require("../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js");
require("../../../uni_modules/rice-ui/components/rice-float-fab/type.js");
require("../../../uni_modules/rice-ui/components/rice-loading/type.js");
require("../../../uni_modules/rice-ui/components/rice-picker/type.js");
require("../../../uni_modules/rice-ui/libs/utils/basic.js");
require("../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
require("../../../uni_modules/rice-ui/components/rice-tabs/type.js");
require("../../../uni_modules/rice-ui/components/rice-icon/font.js");
require("../../../uni_modules/rice-ui/components/rice-uploader/type.js");
require("../../../uni_modules/rice-ui/components/rice-form/index.js");
require("../../../uni_modules/rice-ui/components/rice-radio/type.js");
require("../../../uni_modules/rice-ui/components/rice-radio-group/index.js");
require("../../../uni_modules/rice-ui/components/rice-checkbox/type.js");
require("../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js");
require("../../../uni_modules/rice-ui/components/rice-code-input/type.js");
require("../../../uni_modules/rice-ui/components/rice-qrcode/type.js");
const src_store_app = require("../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_cell_1 = common_vendor.resolveComponent("rice-cell");
  const _easycom_rice_cell_group_1 = common_vendor.resolveComponent("rice-cell-group");
  (_easycom_NavBar_1 + _easycom_rice_icon_1 + _easycom_rice_cell_1 + _easycom_rice_cell_group_1)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_rice_icon = () => "../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
const _easycom_rice_cell = () => "../../../uni_modules/rice-ui/components/rice-cell/rice-cell.js";
const _easycom_rice_cell_group = () => "../../../uni_modules/rice-ui/components/rice-cell-group/rice-cell-group.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_icon + _easycom_rice_cell + _easycom_rice_cell_group + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "rice-ui",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const isDarkMode = common_vendor.computed(() => {
      return uni_modules_riceUi_libs_store_useConfig.isDark.value;
    });
    function toggleTheme() {
      if (isDarkMode.value) {
        uni_modules_riceUi_libs_store_useConfig.setTheme("light");
      } else {
        uni_modules_riceUi_libs_store_useConfig.setTheme("dark");
      }
    }
    function goToDemo(page) {
      common_vendor.index.navigateTo({
        url: `/src/sub/rice-ui/demos/${page}/${page}`,
        fail: (err) => {
          common_vendor.index.__f__("error", "at src/sub/rice-ui/rice-ui.uvue:362", "goToDemo fail:", err);
          common_vendor.index.showToast({
            title: `打开 ${page} 页面失败`,
            icon: "none"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Rice UI 组件演示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: isDarkMode.value ? "#1e1e1e" : "#ffffff",
          class: "data-v-0b0a08be"
        }),
        b: common_assets._imports_0,
        c: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        d: currentTheme.value,
        e: common_vendor.n(isDarkMode.value ? "text-__94a3b8_" : "text-__64748b_"),
        f: common_vendor.t(isDarkMode.value ? "🌙 暗黑" : "☀️ 明亮"),
        g: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__334155_"),
        h: common_vendor.n(isDarkMode.value ? "bg-__334155_" : "bg-__f1f5f9_"),
        i: common_vendor.o(toggleTheme, "dd"),
        j: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        k: currentTheme.value,
        l: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        m: common_vendor.p({
          name: "plus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        n: common_vendor.o(($event) => {
          return goToDemo("button");
        }, "f8"),
        o: common_vendor.p({
          title: "Button 按钮",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        p: common_vendor.p({
          name: "search",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        q: common_vendor.o(($event) => {
          return goToDemo("icon");
        }, "9c"),
        r: common_vendor.p({
          title: "Icon 图标",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        s: common_vendor.p({
          name: "photo",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        t: common_vendor.o(($event) => {
          return goToDemo("image");
        }, "b7"),
        v: common_vendor.p({
          title: "Image 图片",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        w: common_vendor.p({
          name: "app",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        x: common_vendor.o(($event) => {
          return goToDemo("layout");
        }, "a6"),
        y: common_vendor.p({
          title: "Layout 布局",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        z: common_vendor.p({
          border: false,
          class: "data-v-0b0a08be"
        }),
        A: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        B: currentTheme.value,
        C: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        D: common_vendor.p({
          name: "calendar",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        E: common_vendor.o(($event) => {
          return goToDemo("calendar");
        }, "55"),
        F: common_vendor.p({
          title: "Calendar 日历",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        G: common_vendor.p({
          name: "bars",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        H: common_vendor.o(($event) => {
          return goToDemo("cascader");
        }, "43"),
        I: common_vendor.p({
          title: "Cascader 级联选择器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        J: common_vendor.p({
          name: "checked-circle",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        K: common_vendor.o(($event) => {
          return goToDemo("checkbox");
        }, "02"),
        L: common_vendor.p({
          title: "Checkbox 复选框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        M: common_vendor.p({
          name: "edit",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        N: common_vendor.o(($event) => {
          return goToDemo("code-input");
        }, "67"),
        O: common_vendor.p({
          title: "CodeInput 验证码输入框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        P: common_vendor.p({
          name: "set",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        Q: common_vendor.o(($event) => {
          return goToDemo("color-picker");
        }, "1b"),
        R: common_vendor.p({
          title: "ColorPicker 颜色选择器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        S: common_vendor.p({
          name: "calendar",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        T: common_vendor.o(($event) => {
          return goToDemo("datetime-picker");
        }, "b8"),
        U: common_vendor.p({
          title: "DateTimePicker 时间选择器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        V: common_vendor.p({
          name: "file-success",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        W: common_vendor.o(($event) => {
          return goToDemo("form");
        }, "ff"),
        X: common_vendor.p({
          title: "Form 表单",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        Y: common_vendor.p({
          name: "edit",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        Z: common_vendor.o(($event) => {
          return goToDemo("input");
        }, "56"),
        aa: common_vendor.p({
          title: "Input 输入框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ab: common_vendor.p({
          name: "arrow-down",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ac: common_vendor.o(($event) => {
          return goToDemo("picker");
        }, "58"),
        ad: common_vendor.p({
          title: "Picker 选择器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ae: common_vendor.p({
          name: "checked-circle",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        af: common_vendor.o(($event) => {
          return goToDemo("radio");
        }, "80"),
        ag: common_vendor.p({
          title: "Radio 单选框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ah: common_vendor.p({
          name: "star-fill",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ai: common_vendor.o(($event) => {
          return goToDemo("rate");
        }, "70"),
        aj: common_vendor.p({
          title: "Rate 评分",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ak: common_vendor.p({
          name: "search",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        al: common_vendor.o(($event) => {
          return goToDemo("search");
        }, "d4"),
        am: common_vendor.p({
          title: "Search 搜索框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        an: common_vendor.p({
          name: "edit",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ao: common_vendor.o(($event) => {
          return goToDemo("signature");
        }, "ee"),
        ap: common_vendor.p({
          title: "Signature 签名",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aq: common_vendor.p({
          name: "minus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ar: common_vendor.o(($event) => {
          return goToDemo("slider");
        }, "6d"),
        as: common_vendor.p({
          title: "Slider 滑块",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        at: common_vendor.p({
          name: "plus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        av: common_vendor.o(($event) => {
          return goToDemo("stepper");
        }, "b8"),
        aw: common_vendor.p({
          title: "Stepper 步进器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ax: common_vendor.p({
          name: "checked",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ay: common_vendor.o(($event) => {
          return goToDemo("switch");
        }, "02"),
        az: common_vendor.p({
          title: "Switch 开关",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aA: common_vendor.p({
          name: "edit",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aB: common_vendor.o(($event) => {
          return goToDemo("textarea");
        }, "43"),
        aC: common_vendor.p({
          title: "Textarea 多行文本框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aD: common_vendor.p({
          name: "upload",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aE: common_vendor.o(($event) => {
          return goToDemo("uploader");
        }, "a0"),
        aF: common_vendor.p({
          title: "Uploader 上传",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aG: common_vendor.p({
          border: false,
          class: "data-v-0b0a08be"
        }),
        aH: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        aI: currentTheme.value,
        aJ: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        aK: common_vendor.p({
          name: "user",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aL: common_vendor.o(($event) => {
          return goToDemo("avatar");
        }, "03"),
        aM: common_vendor.p({
          title: "Avatar 头像",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aN: common_vendor.p({
          name: "info",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aO: common_vendor.o(($event) => {
          return goToDemo("badge");
        }, "df"),
        aP: common_vendor.p({
          title: "Badge 徽标",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aQ: common_vendor.p({
          name: "bars",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aR: common_vendor.o(($event) => {
          return goToDemo("cell");
        }, "48"),
        aS: common_vendor.p({
          title: "Cell 单元格",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aT: common_vendor.p({
          name: "arrow-down",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aU: common_vendor.o(($event) => {
          return goToDemo("collapse");
        }, "e9"),
        aV: common_vendor.p({
          title: "Collapse 折叠面板",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aW: common_vendor.p({
          name: "calendar",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        aX: common_vendor.o(($event) => {
          return goToDemo("count-down");
        }, "89"),
        aY: common_vendor.p({
          title: "CountDown 倒计时",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        aZ: common_vendor.p({
          name: "trend",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ba: common_vendor.o(($event) => {
          return goToDemo("count-to");
        }, "f1"),
        bb: common_vendor.p({
          title: "CountTo 数字滚动",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bc: common_vendor.p({
          name: "minus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bd: common_vendor.o(($event) => {
          return goToDemo("divider");
        }, "cb"),
        be: common_vendor.p({
          title: "Divider 分割线",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bf: common_vendor.p({
          name: "app",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bg: common_vendor.o(($event) => {
          return goToDemo("grid");
        }, "94"),
        bh: common_vendor.p({
          title: "Grid 宫格",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bi: common_vendor.p({
          name: "minus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bj: common_vendor.o(($event) => {
          return goToDemo("progress");
        }, "8f"),
        bk: common_vendor.p({
          title: "Progress 进度条",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bl: common_vendor.p({
          name: "replay",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bm: common_vendor.o(($event) => {
          return goToDemo("progress-circle");
        }, "c1"),
        bn: common_vendor.p({
          title: "ProgressCircle 圆环进度条",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bo: common_vendor.p({
          name: "qr",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bp: common_vendor.o(($event) => {
          return goToDemo("qrcode");
        }, "9f"),
        bq: common_vendor.p({
          title: "QRCode 二维码",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        br: common_vendor.p({
          name: "right",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bs: common_vendor.o(($event) => {
          return goToDemo("scroll-x");
        }, "fd"),
        bt: common_vendor.p({
          title: "ScrollX 横向滚动列表",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bv: common_vendor.p({
          name: "gift",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bw: common_vendor.o(($event) => {
          return goToDemo("tag");
        }, "45"),
        bx: common_vendor.p({
          title: "Tag 标签",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        by: common_vendor.p({
          name: "calendar",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bz: common_vendor.o(($event) => {
          return goToDemo("time-format");
        }, "77"),
        bA: common_vendor.p({
          title: "TimeFormat 时间格式化",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bB: common_vendor.p({
          name: "app",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bC: common_vendor.o(($event) => {
          return goToDemo("waterflow");
        }, "58"),
        bD: common_vendor.p({
          title: "Waterflow 瀑布流",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bE: common_vendor.p({
          border: false,
          class: "data-v-0b0a08be"
        }),
        bF: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        bG: currentTheme.value,
        bH: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        bI: common_vendor.p({
          name: "arrow-up",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bJ: common_vendor.o(($event) => {
          return goToDemo("action-sheet");
        }, "af"),
        bK: common_vendor.p({
          title: "ActionSheet 动作面板",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bL: common_vendor.p({
          name: "info",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bM: common_vendor.o(($event) => {
          return goToDemo("dialog");
        }, "b7"),
        bN: common_vendor.p({
          title: "Dialog 对话框",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bO: common_vendor.p({
          name: "plus",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bP: common_vendor.o(($event) => {
          return goToDemo("float-fab");
        }, "21"),
        bQ: common_vendor.p({
          title: "FloatFab 悬浮按钮",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bR: common_vendor.p({
          name: "replay",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bS: common_vendor.o(($event) => {
          return goToDemo("loading");
        }, "d2"),
        bT: common_vendor.p({
          title: "Loading 加载",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bU: common_vendor.p({
          name: "volume",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bV: common_vendor.o(($event) => {
          return goToDemo("notice-bar");
        }, "1e"),
        bW: common_vendor.p({
          title: "NoticeBar 公告",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        bX: common_vendor.p({
          name: "cross",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        bY: common_vendor.o(($event) => {
          return goToDemo("overlay");
        }, "13"),
        bZ: common_vendor.p({
          title: "Overlay 遮罩层",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ca: common_vendor.p({
          name: "arrow-up",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        cb: common_vendor.o(($event) => {
          return goToDemo("popup");
        }, "5e"),
        cc: common_vendor.p({
          title: "Popup 弹出层",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        cd: common_vendor.p({
          name: "left",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        ce: common_vendor.o(($event) => {
          return goToDemo("swipe-actions");
        }, "6c"),
        cf: common_vendor.p({
          title: "SwipeActions 滑动单元格",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        cg: common_vendor.p({
          border: false,
          class: "data-v-0b0a08be"
        }),
        ch: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        ci: currentTheme.value,
        cj: common_vendor.n(isDarkMode.value ? "text-__f8fafc_" : "text-__1e293b_"),
        ck: common_vendor.p({
          name: "back-top",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        cl: common_vendor.o(($event) => {
          return goToDemo("back-top");
        }, "6b"),
        cm: common_vendor.p({
          title: "BackTop 返回顶部",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        cn: common_vendor.p({
          name: "arrow-left",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        co: common_vendor.o(($event) => {
          return goToDemo("navbar");
        }, "31"),
        cp: common_vendor.p({
          title: "Navbar 导航栏",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        cq: common_vendor.p({
          name: "app",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        cr: common_vendor.o(($event) => {
          return goToDemo("subsection");
        }, "8d"),
        cs: common_vendor.p({
          title: "Subsection 分段器",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        ct: common_vendor.p({
          name: "right",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-0b0a08be",
          style: "margin-right:8px"
        }),
        cv: common_vendor.o(($event) => {
          return goToDemo("tabs");
        }, "08"),
        cw: common_vendor.p({
          title: "Tabs 选项卡",
          ["is-link"]: true,
          class: "data-v-0b0a08be"
        }),
        cx: common_vendor.p({
          border: false,
          class: "data-v-0b0a08be"
        }),
        cy: common_vendor.n(isDarkMode.value ? "bg-__1e1e1e_" : "bg-white"),
        cz: common_vendor.n(isDarkMode.value ? "bg-__121212_" : "bg-__f8fafc_"),
        cA: common_vendor.gei(_ctx, ""),
        cB: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0b0a08be"
        }),
        cC: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b0a08be"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/rice-ui/rice-ui.js.map
