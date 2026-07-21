import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
const { defineComponent, onBackPress, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../store/index.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/uview-ultra/components/up-pagination/up-pagination.js";
import "../../../uni_modules/uview-ultra/components/up-th/up-th.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/components/up-td/up-td.js";
import "../../../uni_modules/uview-ultra/components/up-table/up-table.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
import "../../../uni_modules/uview-ultra/components/up-code-input/up-code-input.js";
import "../../../uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js";
import "../../../uni_modules/uview-ultra/components/up-parse/up-parse.js";
import "../../../uni_modules/uview-ultra/components/up-link/up-link.js";
import "../../../uni_modules/uview-ultra/components/up-text/up-text.js";
import "../../../uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js";
import "../../../uni_modules/uview-ultra/components/up-steps/up-steps.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js";
import "../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
import "../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
import "../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
import "../../../uni_modules/uview-ultra/components/up-read-more/up-read-more.js";
import "../../../uni_modules/uview-ultra/components/up-avatar/up-avatar.js";
import "../../../uni_modules/uview-ultra/components/up-avatar-group/avatarGroup.js";
import "../../../uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js";
import "../../../uni_modules/uview-ultra/components/up-album/up-album.js";
import "../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
import "../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
import "../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
import "../../../uni_modules/uview-ultra/components/up-navbar/up-navbar.js";
import "../../../uni_modules/uview-ultra/components/up-subsection/up-subsection.js";
import "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js";
import "../../../uni_modules/uview-ultra/components/up-col/up-col.js";
import "../../../uni_modules/uview-ultra/components/up-row/up-row.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.js";
import "../../../uni_modules/uview-ultra/components/up-swiper/up-swiper.js";
import "../../../uni_modules/uview-ultra/components/up-image/image.js";
import "../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
import "../../../uni_modules/uview-ultra/components/up-count-down/up-count-down.js";
import "../../../uni_modules/uview-ultra/components/up-count-to/up-count-to.js";
import "../../../uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js";
import "../../../uni_modules/uview-ultra/components/up-empty/up-empty.js";
import "../../../uni_modules/uview-ultra/components/up-grid-item/up-grid-item.js";
import "../../../uni_modules/uview-ultra/components/up-grid/up-grid.js";
import "../../../uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-no-network/up-no-network.js";
import "../../../uni_modules/uview-ultra/components/up-back-top/up-back-top.js";
import "../../../uni_modules/uview-ultra/components/up-input/up-input.js";
import "../../../uni_modules/uview-ultra/components/up-search/up-search.js";
import "../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import "../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
import "../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
import "../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
import "../../../uni_modules/uview-ultra/components/up-form-item/up-form-item.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
import "../../../uni_modules/uview-ultra/components/up-form/up-form.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
import "../../../uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js";
import "../../../uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.js";
import "../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js";
import "../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
import "../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
import "../../../uni_modules/uview-ultra/components/up-alert/up-alert.js";
import "../../../uni_modules/uview-ultra/components/up-column-notice/columnNotice.js";
import "../../../uni_modules/uview-ultra/components/up-row-notice/up-row-notice.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
import "../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
import "../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
import "../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
import "../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js";
import "../../../uni_modules/uview-ultra/components/up-card/up-card.js";
import "../../../uni_modules/uview-ultra/components/up-list/up-list.js";
import "../../../uni_modules/mp-html/components/mp-html/mp-html.js";
import { _ as _imports_0 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../utils/toast.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-th/th.js";
import "../../../uni_modules/uview-ultra/components/up-td/td.js";
import "../../../uni_modules/uview-ultra/components/up-table/table.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-tag/props.js";
import "../../../uni_modules/uview-ultra/components/up-tag/tag.js";
import "../../../uni_modules/uview-ultra/components/up-code-input/codeInput.js";
import "../../../uni_modules/uview-ultra/components/up-qrcode/qrcode.js";
import "../../../uni_modules/uview-ultra/components/up-parse/props.js";
import "../../../uni_modules/uview-ultra/components/up-link/props.js";
import "../../../uni_modules/uview-ultra/components/up-link/link.js";
import "../../../uni_modules/uview-ultra/components/up-text/props.js";
import "../../../uni_modules/uview-ultra/components/up-text/text.js";
import "../../../uni_modules/uview-ultra/components/up-steps-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-steps-item/stepsItem.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../uni_modules/uview-ultra/components/up-steps/props.js";
import "../../../uni_modules/uview-ultra/components/up-steps/steps.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/props.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../uni_modules/uview-ultra/components/up-line/props.js";
import "../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../uni_modules/uview-ultra/components/up-navbar-mini/props.js";
import "../../../uni_modules/uview-ultra/components/up-navbar-mini/navbarMini.js";
import "../../../uni_modules/uview-ultra/components/up-badge/badge.js";
import "../../../uni_modules/uview-ultra/components/up-tabs/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabs/tabs.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar-item/tabbarItem.js";
import "../../../uni_modules/uview-ultra/components/up-safe-bottom/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar/tabbar.js";
import "../../../uni_modules/uview-ultra/components/up-read-more/props.js";
import "../../../uni_modules/uview-ultra/components/up-read-more/readMore.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-avatar/avatar.js";
import "../../../uni_modules/uview-ultra/components/up-loadmore/props.js";
import "../../../uni_modules/uview-ultra/components/up-loadmore/loadmore.js";
import "../../../uni_modules/uview-ultra/components/up-album/album.js";
import "../../../uni_modules/uview-ultra/components/up-index-anchor/indexAnchor.js";
import "../../../uni_modules/uview-ultra/components/up-index-item/indexItem.js";
import "../../../uni_modules/uview-ultra/components/up-index-list/indexList.js";
import "../../../uni_modules/uview-ultra/components/up-navbar/props.js";
import "../../../uni_modules/uview-ultra/components/up-navbar/navbar.js";
import "../../../uni_modules/uview-ultra/components/up-subsection/props.js";
import "../../../uni_modules/uview-ultra/components/up-subsection/subsection.js";
import "../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../uni_modules/uview-ultra/components/up-cell-group/cellGroup.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown/types.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown/dropdown.js";
import "../../../uni_modules/uview-ultra/components/up-col/col.js";
import "../../../uni_modules/uview-ultra/components/up-row/row.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/types.js";
import "../../../uni_modules/uview-ultra/types/common.js";
import "../../../uni_modules/uview-ultra/libs/mixin/touch.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/swipeActionItem.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action/props.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action/swipeAction.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/props.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/swipterIndicator.js";
import "../../../uni_modules/uview-ultra/components/up-swiper/props.js";
import "../../../uni_modules/uview-ultra/components/up-swiper/swiper.js";
import "../../../uni_modules/uview-ultra/components/up-divider/divider.js";
import "../../../uni_modules/uview-ultra/libs/config/props.js";
import "../../../uni_modules/uview-ultra/components/up-count-down/utils.js";
import "../../../uni_modules/uview-ultra/components/up-count-to/countTo.js";
import "../../../uni_modules/uview-ultra/components/up-line-progress/lineProgress.js";
import "../../../uni_modules/uview-ultra/components/up-empty/empty.js";
import "../../../uni_modules/uview-ultra/components/up-grid-item/gridItem.js";
import "../../../uni_modules/uview-ultra/components/up-grid/grid.js";
import "../../../uni_modules/uview-ultra/components/up-skeleton/props.js";
import "../../../uni_modules/uview-ultra/components/up-skeleton/skeleton.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import "../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../uni_modules/uview-ultra/components/up-no-network/props.js";
import "../../../uni_modules/uview-ultra/components/up-no-network/noNetwork.js";
import "../../../uni_modules/uview-ultra/components/up-back-top/backtop.js";
import "../../../uni_modules/uview-ultra/components/up-input/input.js";
import "../../../uni_modules/uview-ultra/components/up-search/props.js";
import "../../../uni_modules/uview-ultra/components/up-search/search.js";
import "../../../uni_modules/uview-ultra/components/up-switch/props.js";
import "../../../uni_modules/uview-ultra/components/up-switch/switch.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox/checkbox.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox-group/checkboxGroup.js";
import "../../../uni_modules/uview-ultra/components/up-radio/props.js";
import "../../../uni_modules/uview-ultra/components/up-radio/radio.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/props.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/radioGroup.js";
import "../../../uni_modules/uview-ultra/components/up-slider/props.js";
import "../../../uni_modules/uview-ultra/components/up-slider/slider.js";
import "../../../uni_modules/uview-ultra/components/up-rate/props.js";
import "../../../uni_modules/uview-ultra/components/up-rate/rate.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/props.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/numberBox.js";
import "../../../uni_modules/uview-ultra/components/up-form-item/formItem.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/props.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/textarea.js";
import "../../../uni_modules/uview-ultra/components/up-form/form.js";
import "../../../uni_modules/uview-ultra/libs/util/async-validator.js";
import "../../../uni_modules/uview-ultra/components/up-form/types.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-popup/props.js";
import "../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../uni_modules/uview-ultra/components/up-upload/utils.js";
import "../../../uni_modules/uview-ultra/components/up-upload/types.js";
import "../../../uni_modules/uview-ultra/components/up-upload/mixin.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/header.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/types.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/month.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/calendar.js";
import "../../../uni_modules/lime-dayuts/common/index.js";
import "../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../uni_modules/lime-dayuts/common/use.js";
import "../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/props.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/util.js";
import "../../../uni_modules/uview-ultra/components/up-number-keyboard/props.js";
import "../../../uni_modules/uview-ultra/components/up-number-keyboard/numberKeyboard.js";
import "../../../uni_modules/uview-ultra/components/up-car-keyboard/carKeyboard.js";
import "../../../uni_modules/uview-ultra/components/up-keyboard/props.js";
import "../../../uni_modules/uview-ultra/components/up-keyboard/keyboard.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/props.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/toolbar.js";
import "../../../uni_modules/uview-ultra/components/up-picker/props.js";
import "../../../uni_modules/uview-ultra/components/up-picker/picker.js";
import "../../../uni_modules/uview-ultra/components/up-datetime-picker/datetimePicker.js";
import "../../../uni_modules/uview-ultra/libs/composable/useButton.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/types.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/actionSheet.js";
import "../../../uni_modules/uview-ultra/components/up-alert/alert.js";
import "../../../uni_modules/uview-ultra/components/up-row-notice/rowNotice.js";
import "../../../uni_modules/uview-ultra/components/up-column-notice/up-column-notice.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/props.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/noticeBar.js";
import "../../../uni_modules/uview-ultra/components/up-collapse-item/collapseItem.js";
import "../../../uni_modules/uview-ultra/components/up-collapse/collapse.js";
import "../../../uni_modules/uview-ultra/components/up-notify/props.js";
import "../../../uni_modules/uview-ultra/components/up-notify/notify.js";
import "../../../uni_modules/uview-ultra/components/up-modal/props.js";
import "../../../uni_modules/uview-ultra/components/up-modal/modal.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/loadingPage.js";
import "../../../uni_modules/uview-ultra/components/up-card/card.js";
import "../../../uni_modules/uview-ultra/components/up-list/props.js";
import "../../../uni_modules/uview-ultra/components/up-list/list.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    const themeSwitchVal = ref(true);
    const themeSwitchVal2 = ref(false);
    const checkboxValue = ref(["apple"]);
    const radioValue = ref("male");
    const sliderValue = ref(30);
    const rateValue = ref(3);
    const isBg = ref(true);
    function switchBg() {
      isBg.value = !isBg.value;
    }
    const __returned__ = { themeSwitchVal, themeSwitchVal2, checkboxValue, radioValue, sliderValue, rateValue, isBg, switchBg, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "flex-col": { "": { "flexDirection": "column" } }, "h-100px": { "": { "height": 100 } }, "items-center": { "": { "alignItems": "center" } }, "m-auto": { "": { "marginTop": "auto", "marginRight": "auto", "marginBottom": "auto", "marginLeft": "auto" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-15px": { "": { "marginTop": 15 } }, "mt-20px": { "": { "marginTop": 20 } }, "mt-40px": { "": { "marginTop": 40 } }, "mx-30px": { "": { "marginLeft": 30, "marginRight": 30 } }, "mx-auto": { "": { "marginLeft": "auto", "marginRight": "auto" } }, "pb-20px": { "": { "paddingBottom": 20 } }, "px-15px": { "": { "paddingLeft": 15, "paddingRight": 15 } }, "px-20px": { "": { "paddingLeft": 20, "paddingRight": 20 } }, "px-30px": { "": { "paddingLeft": 30, "paddingRight": 30 } }, "py-15px": { "": { "paddingTop": 15, "paddingBottom": 15 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "text-__606266_": { "": { "color": "#606266" } }, "text-__d14328_": { "": { "color": "#d14328" } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "text-25px": { "": { "fontSize": 25 } }, "text-32px": { "": { "fontSize": 32 } }, "text-center": { "": { "textAlign": "center" } }, "w-100px": { "": { "width": 100 } } };
const _style_1 = { "bg": { "": { "backgroundColor": "var(--theme-color, #0957de)" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "首页"
      }, {
        default: withCtx(() => [
          createElementVNode("view", null, [
            createVNode(_component_NavBar, {
              title: "首页",
              "show-back": false
            }),
            createElementVNode("view", { class: "content-container" }, [
              createCommentVNode(" <uviewUltra></uviewUltra> "),
              createElementVNode("image", {
                class: "w-100px h-100px mx-auto mt-40px rounded-20px",
                src: _imports_0
              }),
              createElementVNode("text", { class: "text-32px text-bold mx-auto mt-10px text-__d14328_" }, " unibestX "),
              createElementVNode("text", { class: "text-center text-25px mt-10px" }, " 最好用的 uni-appX 开发模板 "),
              createElementVNode("text", { class: "mt-10px m-auto px-30px text-justify text-16px text-bold" }, " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + UnoCss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uni-appX 拥有 best 体验。 "),
              createElementVNode("view", {
                class: "mt-15px mx-30px px-20px py-15px rounded-12px",
                style: { "background-color": "rgba(55, 194, 188, 0.08)" }
              }, [
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎭 主题换色 — 五种预设主题色，原生与组件同步生效 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ")
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/index/index.uvue"]]);
export {
  index as default
};
//# sourceMappingURL=index.js.map
