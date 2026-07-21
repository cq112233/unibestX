import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
const { defineComponent, ref, onMounted, computed, resolveDynamicComponent, resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, normalizeStyle, createCommentVNode, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { _ as __easycom_1 } from "../../../uni_modules/uview-ultra/components/up-swiper/up-swiper.js";
import { _ as __easycom_2 } from "../../../uni_modules/uview-ultra/components/up-image/up-image.js";
import { _ as __easycom_3 } from "../../../uni_modules/uview-ultra/components/up-pagination/up-pagination.js";
import { _ as __easycom_4 } from "../../../uni_modules/uview-ultra/components/up-copy/up-copy.js";
import { _ as __easycom_5 } from "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_6 } from "../../../uni_modules/uview-ultra/components/up-th/up-th.js";
import { _ as __easycom_7 } from "../../../uni_modules/uview-ultra/components/up-tr/up-tr.js";
import { _ as __easycom_8 } from "../../../uni_modules/uview-ultra/components/up-td/up-td.js";
import { _ as __easycom_9 } from "../../../uni_modules/uview-ultra/components/up-table/up-table.js";
import { _ as __easycom_10 } from "../../../uni_modules/uview-ultra/components/up-code-input/up-code-input.js";
import { _ as __easycom_11 } from "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import { _ as __easycom_12 } from "../../../uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js";
import { _ as __easycom_13 } from "../../../uni_modules/uview-ultra/components/up-parse/up-parse.js";
import { _ as __easycom_14 } from "../../../uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js";
import { _ as __easycom_15 } from "../../../uni_modules/uview-ultra/components/up-steps/up-steps.js";
import { _ as __easycom_16 } from "../../../uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js";
import { _ as __easycom_17 } from "../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
import { _ as __easycom_18 } from "../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
import { _ as __easycom_19 } from "../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
import { _ as __easycom_20 } from "../../../uni_modules/uview-ultra/components/up-read-more/up-read-more.js";
import { _ as __easycom_21 } from "../../../uni_modules/uview-ultra/components/up-avatar/up-avatar.js";
import { _ as __easycom_22 } from "../../../uni_modules/uview-ultra/components/up-link/up-link.js";
import { _ as __easycom_23 } from "../../../uni_modules/uview-ultra/components/up-lazy-load/up-lazy-load.js";
import { _ as __easycom_24 } from "../../../uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js";
import { _ as __easycom_25 } from "../../../uni_modules/uview-ultra/components/up-album/up-album.js";
import { _ as __easycom_26 } from "../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
import { _ as __easycom_27 } from "../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
import { _ as __easycom_28 } from "../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
import { _ as __easycom_29 } from "../../../uni_modules/uview-ultra/components/up-navbar/up-navbar.js";
import { _ as __easycom_30 } from "../../../uni_modules/uview-ultra/components/up-subsection/up-subsection.js";
import { _ as __easycom_31 } from "../../../uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js";
import { _ as __easycom_32 } from "../../../uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js";
import { _ as __easycom_33 } from "../../../uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js";
import { _ as __easycom_34 } from "../../../uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js";
import { _ as __easycom_35 } from "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_36 } from "../../../uni_modules/uview-ultra/components/up-text/up-text.js";
import { _ as __easycom_37 } from "../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
import { _ as __easycom_38 } from "../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
import { _ as __easycom_39 } from "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import { _ as __easycom_40 } from "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import { _ as __easycom_41 } from "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_42 } from "../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
import { _ as __easycom_43 } from "../../../uni_modules/uview-ultra/components/up-count-down/up-count-down.js";
import { _ as __easycom_44 } from "../../../uni_modules/uview-ultra/components/up-count-to/up-count-to.js";
import { _ as __easycom_45 } from "../../../uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js";
import { _ as __easycom_46 } from "../../../uni_modules/uview-ultra/components/up-empty/up-empty.js";
import { _ as __easycom_47 } from "../../../uni_modules/uview-ultra/components/up-col/up-col.js";
import { _ as __easycom_48 } from "../../../uni_modules/uview-ultra/components/up-row/up-row.js";
import { _ as __easycom_49 } from "../../../uni_modules/uview-ultra/components/up-grid-item/up-grid-item.js";
import { _ as __easycom_50 } from "../../../uni_modules/uview-ultra/components/up-grid/up-grid.js";
import { _ as __easycom_51 } from "../../../uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js";
import { _ as __easycom_52 } from "../../../uni_modules/uview-ultra/components/up-no-network/up-no-network.js";
import { _ as __easycom_53 } from "../../../uni_modules/uview-ultra/components/up-back-top/up-back-top.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { T as ThemeSwitchCard } from "../../pages/basic/components/ThemeSwitchCard.js";
import { D as DemoForm } from "./components/DemoForm.js";
import { D as DemoFeedback } from "./components/DemoFeedback.js";
import { D as DemoShow } from "./components/DemoShow.js";
import { m as mpHtml } from "../../../uni_modules/mp-html/components/mp-html/mp-html.js";
import { _ as _imports_0 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../utils/toast.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/props.js";
import "../../../uni_modules/uview-ultra/components/up-swiper-indicator/swipterIndicator.js";
import "../../../uni_modules/uview-ultra/components/up-swiper/props.js";
import "../../../uni_modules/uview-ultra/components/up-swiper/swiper.js";
import "../../../uni_modules/uview-ultra/components/up-image/image.js";
import "../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../uni_modules/uview-ultra/components/up-th/th.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-td/td.js";
import "../../../uni_modules/uview-ultra/components/up-table/table.js";
import "../../../uni_modules/uview-ultra/components/up-code-input/codeInput.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-qrcode/qrcode.js";
import "../../../uni_modules/uview-ultra/components/up-parse/props.js";
import "../../../uni_modules/uview-ultra/components/up-steps-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-steps-item/stepsItem.js";
import "../../../uni_modules/uview-ultra/components/up-steps/props.js";
import "../../../uni_modules/uview-ultra/components/up-steps/steps.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/props.js";
import "../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../uni_modules/uview-ultra/components/up-line/props.js";
import "../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../uni_modules/uview-ultra/components/up-navbar-mini/props.js";
import "../../../uni_modules/uview-ultra/components/up-navbar-mini/navbarMini.js";
import "../../../uni_modules/uview-ultra/components/up-tabs/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabs/tabs.js";
import "../../../uni_modules/uview-ultra/components/up-badge/badge.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-tabbar-item/tabbarItem.js";
import "../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
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
import "../../../uni_modules/uview-ultra/components/up-avatar/avatar.js";
import "../../../uni_modules/uview-ultra/components/up-link/props.js";
import "../../../uni_modules/uview-ultra/components/up-link/link.js";
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
import "../../../uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown/types.js";
import "../../../uni_modules/uview-ultra/components/up-dropdown/dropdown.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/types.js";
import "../../../uni_modules/uview-ultra/libs/mixin/touch.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/props.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action-item/swipeActionItem.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action/props.js";
import "../../../uni_modules/uview-ultra/components/up-swipe-action/swipeAction.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-text/props.js";
import "../../../uni_modules/uview-ultra/components/up-text/text.js";
import "../../../uni_modules/uview-ultra/components/up-tag/props.js";
import "../../../uni_modules/uview-ultra/components/up-tag/tag.js";
import "../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../uni_modules/uview-ultra/components/up-cell-group/cellGroup.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/components/up-divider/divider.js";
import "../../../uni_modules/uview-ultra/libs/config/props.js";
import "../../../uni_modules/uview-ultra/components/up-count-down/utils.js";
import "../../../uni_modules/uview-ultra/components/up-count-to/countTo.js";
import "../../../uni_modules/uview-ultra/components/up-line-progress/lineProgress.js";
import "../../../uni_modules/uview-ultra/components/up-empty/empty.js";
import "../../../uni_modules/uview-ultra/components/up-col/col.js";
import "../../../uni_modules/uview-ultra/components/up-row/row.js";
import "../../../uni_modules/uview-ultra/components/up-grid-item/gridItem.js";
import "../../../uni_modules/uview-ultra/components/up-grid/grid.js";
import "../../../uni_modules/uview-ultra/components/up-skeleton/props.js";
import "../../../uni_modules/uview-ultra/components/up-skeleton/skeleton.js";
import "../../../uni_modules/uview-ultra/components/up-no-network/props.js";
import "../../../uni_modules/uview-ultra/components/up-no-network/noNetwork.js";
import "../../../uni_modules/uview-ultra/components/up-back-top/backtop.js";
import "../../pages/basic/components/Card.js";
import "../../../uni_modules/uview-ultra/components/up-input/up-input.js";
import "../../../uni_modules/uview-ultra/components/up-input/input.js";
import "../../../uni_modules/uview-ultra/components/up-form-item/up-form-item.js";
import "../../../uni_modules/uview-ultra/components/up-form-item/formItem.js";
import "../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
import "../../../uni_modules/uview-ultra/components/up-radio/props.js";
import "../../../uni_modules/uview-ultra/components/up-radio/radio.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/props.js";
import "../../../uni_modules/uview-ultra/components/up-radio-group/radioGroup.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox/checkbox.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import "../../../uni_modules/uview-ultra/components/up-checkbox-group/checkboxGroup.js";
import "../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
import "../../../uni_modules/uview-ultra/components/up-switch/props.js";
import "../../../uni_modules/uview-ultra/components/up-switch/switch.js";
import "../../../uni_modules/uview-ultra/types/common.js";
import "../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
import "../../../uni_modules/uview-ultra/components/up-rate/props.js";
import "../../../uni_modules/uview-ultra/components/up-rate/rate.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/props.js";
import "../../../uni_modules/uview-ultra/components/up-number-box/numberBox.js";
import "../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
import "../../../uni_modules/uview-ultra/components/up-slider/props.js";
import "../../../uni_modules/uview-ultra/components/up-slider/slider.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/props.js";
import "../../../uni_modules/uview-ultra/components/up-textarea/textarea.js";
import "../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
import "../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../uni_modules/uview-ultra/components/up-popup/props.js";
import "../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../uni_modules/uview-ultra/components/up-upload/utils.js";
import "../../../uni_modules/uview-ultra/components/up-upload/types.js";
import "../../../uni_modules/uview-ultra/components/up-upload/mixin.js";
import "../../../uni_modules/uview-ultra/components/up-form/up-form.js";
import "../../../uni_modules/uview-ultra/components/up-form/form.js";
import "../../../uni_modules/uview-ultra/libs/util/async-validator.js";
import "../../../uni_modules/uview-ultra/components/up-form/types.js";
import "../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
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
import "../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/props.js";
import "../../../uni_modules/uview-ultra/components/up-toolbar/toolbar.js";
import "../../../uni_modules/uview-ultra/components/up-picker/props.js";
import "../../../uni_modules/uview-ultra/components/up-picker/picker.js";
import "../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
import "../../../uni_modules/uview-ultra/components/up-datetime-picker/datetimePicker.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
import "../../../uni_modules/uview-ultra/libs/composable/useButton.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/types.js";
import "../../../uni_modules/uview-ultra/components/up-action-sheet/actionSheet.js";
import "../../../uni_modules/uview-ultra/components/up-alert/up-alert.js";
import "../../../uni_modules/uview-ultra/components/up-alert/alert.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
import "../../../uni_modules/uview-ultra/components/up-column-notice/up-column-notice.js";
import "../../../uni_modules/uview-ultra/components/up-column-notice/columnNotice.js";
import "../../../uni_modules/uview-ultra/components/up-row-notice/up-row-notice.js";
import "../../../uni_modules/uview-ultra/components/up-row-notice/rowNotice.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/props.js";
import "../../../uni_modules/uview-ultra/components/up-notice-bar/noticeBar.js";
import "../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
import "../../../uni_modules/uview-ultra/components/up-collapse-item/collapseItem.js";
import "../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
import "../../../uni_modules/uview-ultra/components/up-collapse/collapse.js";
import "../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import "../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
import "../../../uni_modules/uview-ultra/components/up-notify/props.js";
import "../../../uni_modules/uview-ultra/components/up-notify/notify.js";
import "../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
import "../../../uni_modules/uview-ultra/components/up-modal/props.js";
import "../../../uni_modules/uview-ultra/components/up-modal/modal.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-page/loadingPage.js";
import "../../../uni_modules/uview-ultra/components/up-card/up-card.js";
import "../../../uni_modules/uview-ultra/components/up-card/card.js";
import "../../../uni_modules/uview-ultra/components/up-list/up-list.js";
import "../../../uni_modules/uview-ultra/components/up-list/props.js";
import "../../../uni_modules/uview-ultra/components/up-list/list.js";
import "../../assets/images/logo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uview-ultra",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const scrollTop = ref(0);
    const scrollViewScrollTop = ref(0);
    const scrollHeight = ref(0);
    onMounted(() => {
      const sysInfo = uni.getWindowInfo();
      scrollHeight.value = sysInfo.windowHeight - 44;
    });
    function onScroll(e) {
      const currentScrollTop = e.detail.scrollTop;
      scrollTop.value = currentScrollTop;
    }
    function onBackTopClick() {
      scrollViewScrollTop.value = scrollTop.value;
      setTimeout(() => {
        scrollViewScrollTop.value = 0;
      }, 20);
    }
    const value1 = ref(1);
    const value2 = ref(2);
    const options1 = ref([
      new UTSJSONObject({ label: "默认排序", value: 1 }),
      new UTSJSONObject({ label: "距离优先", value: 2 }),
      new UTSJSONObject({ label: "价格优先", value: 3 })
    ]);
    const options2 = ref([
      new UTSJSONObject({ label: "去冰", value: 1 }),
      new UTSJSONObject({ label: "加冰", value: 2 })
    ]);
    const dropdownGreenValue1 = ref(1);
    const dropdownGreenValue2 = ref(1);
    const dropdownRegionOptions1 = ref([
      new UTSJSONObject({ label: "全部", value: 1 }),
      new UTSJSONObject({ label: "朝阳区", value: 2 }),
      new UTSJSONObject({ label: "海淀区", value: 3 }),
      new UTSJSONObject({ label: "西城区", value: 4 })
    ]);
    const dropdownRegionOptions2 = ref([
      new UTSJSONObject({ label: "综合排序", value: 1 }),
      new UTSJSONObject({ label: "评分最高", value: 2 }),
      new UTSJSONObject({ label: "销量优先", value: 3 }),
      new UTSJSONObject({ label: "价格最低", value: 4 })
    ]);
    const dropdownDisValue1 = ref(1);
    const dropdownEventValue = ref(1);
    function onDropdownChange(value) {
      uni.showToast({ title: `选中值: ${value}`, icon: "none" });
    }
    const uDropdownRef1 = ref(null);
    const uDropdownRef2 = ref(null);
    const uDropdownRef3 = ref(null);
    const uDropdownRefGrid1 = ref(null);
    const uDropdownRefCard = ref(null);
    function closeDropdown(refName) {
      const refMap = new UTSJSONObject({
        uDropdownRef1: uDropdownRef1.value,
        uDropdownRef2: uDropdownRef2.value,
        uDropdownRef3: uDropdownRef3.value,
        uDropdownRefGrid1: uDropdownRefGrid1.value,
        uDropdownRefCard: uDropdownRefCard.value
      });
      const comp = refMap[refName];
      if (comp != null) {
        comp.$callMethod("close");
      }
    }
    const dropdownScrollSelected = ref("暂无");
    function onDropdownScrollSelect(index) {
      dropdownScrollSelected.value = `选项 ${index}`;
    }
    const dropdownHLValue1 = ref(1);
    const dropdownHLValue2 = ref(2);
    function onDropdownOpen(index) {
      const comp = uDropdownRef3.value;
      if (comp != null) {
        comp.$callMethod("highlight");
      }
    }
    function onDropdownClose(index) {
      const comp = uDropdownRef3.value;
      if (comp != null) {
        comp.$callMethod("highlight").then(() => {
        });
      }
    }
    const dropdownGridSelected = ref("暂无");
    const dropdownGridItems = ref([
      new UTSJSONObject({ text: "美食", icon: "star-fill", color: "#f9ae3d" }),
      new UTSJSONObject({ text: "外卖", icon: "car-fill", color: "#2979ff" }),
      new UTSJSONObject({ text: "酒店", icon: "home", color: "#19be6b" }),
      new UTSJSONObject({ text: "电影", icon: "play-right-fill", color: "#fa3534" }),
      new UTSJSONObject({ text: "KTV", icon: "mic", color: "#9c27b0" }),
      new UTSJSONObject({ text: "丽人", icon: "heart-fill", color: "#ff4081" }),
      new UTSJSONObject({ text: "周边游", icon: "map-fill", color: "#00bcd4" }),
      new UTSJSONObject({ text: "更多", icon: "grid-fill", color: "#909399" })
    ]);
    const dropdownGridFilterItems = ref([
      new UTSJSONObject({ text: "智能排序", icon: "list-dot", color: "#2979ff" }),
      new UTSJSONObject({ text: "离我最近", icon: "map", color: "#19be6b" }),
      new UTSJSONObject({ text: "好评优先", icon: "star", color: "#f9ae3d" }),
      new UTSJSONObject({ text: "人气最高", icon: "fire", color: "#fa3534" }),
      new UTSJSONObject({ text: "价格最低", icon: "rmb-circle-fill", color: "#ff9900" }),
      new UTSJSONObject({ text: "最新发布", icon: "clock-fill", color: "#00bcd4" })
    ]);
    function onDropdownGridSelect(text) {
      dropdownGridSelected.value = text;
    }
    const dropdownCardSelected = ref("暂无");
    const dropdownCardItems = ref([
      new UTSJSONObject({ id: "1", image: "https://picsum.photos/400/300?random=50", title: "招牌红烧牛肉面", desc: "精选牛腱肉·慢炖8小时", price: "¥38", tag: "热卖" }),
      new UTSJSONObject({ id: "2", image: "https://picsum.photos/400/300?random=51", title: "海鲜至尊披萨", desc: "12寸·虾仁+鱿鱼+芝士", price: "¥88", tag: "新品" }),
      new UTSJSONObject({ id: "3", image: "https://picsum.photos/400/300?random=52", title: "经典珍珠奶茶", desc: "手作黑糖珍珠·鲜奶", price: "¥18", tag: "爆款" }),
      new UTSJSONObject({ id: "4", image: "https://picsum.photos/400/300?random=53", title: "法式提拉米苏", desc: "马斯卡彭芝士·可可粉", price: "¥32", tag: "甜品" })
    ]);
    const dropdownCardItems2 = ref([
      new UTSJSONObject({ id: "5", image: "https://picsum.photos/400/300?random=54", title: "日式鳗鱼饭", desc: "活鳗现烤·秘制酱汁", price: "¥68", tag: "限量" }),
      new UTSJSONObject({ id: "6", image: "https://picsum.photos/400/300?random=55", title: "泰式冬阴功汤", desc: "鲜虾+香茅+椰浆", price: "¥45", tag: "推荐" }),
      new UTSJSONObject({ id: "7", image: "https://picsum.photos/400/300?random=56", title: "美式牛肉汉堡", desc: "安格斯牛肉饼·双层", price: "¥42", tag: "大份" }),
      new UTSJSONObject({ id: "8", image: "https://picsum.photos/400/300?random=57", title: "冰淇淋华夫饼", desc: "香草冰淇淋·现烤华夫", price: "¥28", tag: "甜蜜" })
    ]);
    function onDropdownCardSelect(title) {
      dropdownCardSelected.value = title;
    }
    const waterfallList = ref([
      new UTSJSONObject({ id: "1", image: "https://picsum.photos/400/300?random=1", title: "简约风小茶几", price: "¥299" }),
      new UTSJSONObject({ id: "2", image: "https://picsum.photos/400/500?random=2", title: "北欧风落地灯", price: "¥599" }),
      new UTSJSONObject({ id: "3", image: "https://picsum.photos/400/350?random=3", title: "日式花瓶摆件", price: "¥89" }),
      new UTSJSONObject({ id: "4", image: "https://picsum.photos/400/450?random=4", title: "复古台灯", price: "¥399" }),
      new UTSJSONObject({ id: "5", image: "https://picsum.photos/400/280?random=5", title: "ins风挂画", price: "¥159" }),
      new UTSJSONObject({ id: "6", image: "https://picsum.photos/400/520?random=6", title: "实木相框组合", price: "¥129" })
    ]);
    const waterfallLeftList = computed(() => {
      return waterfallList.value.filter((_, idx) => {
        return idx % 2 === 0;
      });
    });
    const waterfallRightList = computed(() => {
      return waterfallList.value.filter((_, idx) => {
        return idx % 2 === 1;
      });
    });
    function loadMoreWaterfall() {
      const newItems = [];
      const base = waterfallList.value.length + 1;
      for (let i = 0; i < 4; i++) {
        const idx = base + i;
        const heights = [280, 350, 420, 300, 500, 380];
        newItems.push(new UTSJSONObject({
          id: `${idx}`,
          image: `https://picsum.photos/400/${heights[i % heights.length]}?random=${idx}`,
          title: `商品 ${idx}`,
          price: `¥${(Math.random() * 500 + 50).toFixed(0)}`
        }));
      }
      waterfallList.value = waterfallList.value.concat(newItems);
    }
    function clearWaterfall() {
      waterfallList.value = [];
    }
    const loadmoreStatus = ref("loadmore");
    const loadmoreIsDot = ref(false);
    const albumUrls = ref([
      "https://picsum.photos/400/400?random=10",
      "https://picsum.photos/400/400?random=11",
      "https://picsum.photos/400/400?random=12",
      "https://picsum.photos/400/400?random=13",
      "https://picsum.photos/400/400?random=14",
      "https://picsum.photos/400/400?random=15",
      "https://picsum.photos/400/400?random=16",
      "https://picsum.photos/400/400?random=17",
      "https://picsum.photos/400/400?random=18",
      "https://picsum.photos/400/400?random=19",
      "https://picsum.photos/400/400?random=20"
    ]);
    const readMoreContent = ref(`<p>山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？</p><p>锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。</p>`);
    const avatarSrc = ref("/static/logo.png");
    const avatarGroupUrls = ref([
      "https://picsum.photos/200/200?random=1",
      "https://picsum.photos/200/200?random=2",
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=4",
      "https://picsum.photos/200/200?random=5",
      "https://picsum.photos/200/200?random=6",
      "https://picsum.photos/200/200?random=7"
    ]);
    function onAvatarGroupMore() {
      uni.showToast({ title: "查看更多头像", icon: "none" });
    }
    function onAvatarClick() {
      uni.showToast({ title: "头像被点击", icon: "none" });
    }
    function onLinkClick() {
      uni.showToast({ title: "链接点击事件触发", icon: "none" });
    }
    function onLazyLoadClick(index) {
      uni.showToast({ title: `图片 ${index} 被点击`, icon: "none" });
    }
    function onLazyLoadError(err) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1094", "懒加载图片出错:", err);
    }
    const swiperList = ref([
      new UTSJSONObject({ image: "/static/logo.png", title: "uview-ultra 组件演示" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "高品质 UI 组件库" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "多端适配 · 开箱即用" })
    ]);
    const indexList = ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    const itemArr = ref([
      ["安徽", "澳门"],
      ["北京"],
      ["重庆", "成都", "长沙", "常州"],
      ["东莞", "大连"],
      ["鄂尔多斯"],
      ["福州", "佛山"],
      ["广州", "贵阳", "桂林"],
      ["杭州", "合肥", "哈尔滨", "海口", "呼和浩特"],
      ["济南"],
      ["昆明"],
      ["兰州", "拉萨", "柳州"],
      ["南京", "南昌", "南宁", "宁波"],
      ["青岛", "泉州"],
      ["上海", "深圳", "苏州", "沈阳", "石家庄"],
      ["天津", "太原", "台北"],
      ["武汉", "无锡"],
      ["西安", "厦门", "西宁", "香港"],
      ["银川", "扬州"],
      ["郑州"]
    ]);
    const showTag = ref(true);
    const lineProgressValue1 = ref(70);
    const lineProgressValue2 = ref(45);
    const lineProgressValue3 = ref(90);
    const lineProgressValue4 = ref(30);
    const swipeActionList = ref([
      new UTSJSONObject({ id: "1", title: "左滑可编辑或删除此项（第一项）" }),
      new UTSJSONObject({ id: "2", title: "左滑可编辑或删除此项（第二项）" }),
      new UTSJSONObject({ id: "3", title: "左滑可编辑或删除此项（第三项）" }),
      new UTSJSONObject({ id: "4", title: "左滑可编辑或删除此项（第四项）" })
    ]);
    const swipeActionOptions = ref([
      new UTSJSONObject({ text: "编辑", style: new UTSJSONObject({ backgroundColor: "primary" }) }),
      new UTSJSONObject({ text: "删除", style: new UTSJSONObject({ backgroundColor: "#f56c6c" }) })
    ]);
    function onSwipeActionClick(e) {
      const btnIndex = e["index"];
      const listIndex = e["name"];
      const item = swipeActionList.value[listIndex];
      const btn = swipeActionOptions.value[btnIndex];
      if (btn != null && item != null) {
        const action = btn.text;
        const title = item.title;
        if (action === "删除") {
          swipeActionList.value.splice(listIndex, 1);
          uni.showToast({ title: `已删除: ${title}`, icon: "none" });
        } else {
          uni.showToast({ title: `点击了「${action}」: ${title}`, icon: "none" });
        }
      }
    }
    const skeletonLoading = ref(true);
    function toggleSkeleton() {
      skeletonLoading.value = !skeletonLoading.value;
    }
    const mpHtmlContent = ref(`<h2 style="text-align:center">mp-html 富文本演示</h2>
<p>这是一个 <strong>uni-app X</strong> 原生渲染的富文本组件，支持以下标签：</p>
<h3>1. 文本格式</h3>
<p><b>粗体文字</b>、<i>斜体文字</i>、<u>下划线文字</u>、<s>删除线文字</s></p>
<p><em>强调文本</em>、<strong>加粗强调</strong>、<mark>高亮文本</mark></p>
<p>普通文本中含有 <code>code 代码</code> 和 <small>小号字</small></p>
<h3>2. 链接</h3>
<p>点击 <a href="https://www.baidu.com">百度链接</a> 查看效果</p>
<p>这是 <a href="https://github.com/jin-yufeng/mp-html">mp-html GitHub</a> 仓库</p>
<h3>3. 图片</h3>
<p>以下是一张示例图片：</p>
<img src="https://picsum.photos/400/300?random=2" alt="示例图片" />
<h3>4. 表格</h3>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>姓名</th><th>年龄</th><th>城市</th></tr>
  <tr><td>张三</td><td>28</td><td>北京</td></tr>
  <tr><td>李四</td><td>32</td><td>上海</td></tr>
  <tr><td>王五</td><td>25</td><td>深圳</td></tr>
</table>
<h3>5. 列表</h3>
<ul>
  <li>uni-app X 原生渲染</li>
  <li>完整的 HTML 标签支持</li>
  <li>图片点击预览</li>
  <li>链接点击处理</li>
</ul>
<ol>
  <li>第一步：导入组件</li>
  <li>第二步：传入 content</li>
  <li>第三步：监听事件</li>
</ol>
<h3>6. 预格式文本</h3>
<pre>function hello() {
  uni.__f__('log','at src/sub/uview-ultra/uview-ultra.uvue:1210',"Hello, mp-html!")
}</pre>
<h3>7. 分割线</h3>
<hr />
<p style="text-align:center;color:#909399">以上为 mp-html 组件演示内容</p>`);
    function onMpHtmlLoad() {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1217", "mp-html 渲染完成");
    }
    function onMpHtmlLinktap(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1221", "链接点击:", e);
      const href = e["href"];
      if (href != null) {
        uni.showToast({ title: `链接: ${href}`, icon: "none" });
      }
    }
    function onMpHtmlImgtap(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1230", "图片点击:", e);
    }
    function onMpHtmlError(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1234", "mp-html error:", e);
    }
    const transitionShow1 = ref(true);
    const transitionShow3 = ref(false);
    const transitionModes = ref([
      new UTSJSONObject({ mode: "fade-up", show: false }),
      new UTSJSONObject({ mode: "slide-down", show: false }),
      new UTSJSONObject({ mode: "zoom-in", show: false }),
      new UTSJSONObject({ mode: "fade-left", show: false })
    ]);
    function toggleTransitionMode(item) {
      var _a2;
      const currentShow = (_a2 = item.getBoolean("show")) !== null && _a2 !== void 0 ? _a2 : false;
      item.set("show", !currentShow);
    }
    const tabsList1 = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "音乐" }),
      new UTSJSONObject({ name: "美食" }),
      new UTSJSONObject({ name: "文化" }),
      new UTSJSONObject({ name: "财经" }),
      new UTSJSONObject({ name: "时事" })
    ]);
    const tabsList2 = ref([
      new UTSJSONObject({ name: "关注", badge: new UTSJSONObject({ isDot: false, value: 6 }) }),
      new UTSJSONObject({ name: "推荐", badge: new UTSJSONObject({ isDot: true }) }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技", disabled: true }),
      new UTSJSONObject({ name: "音乐" })
    ]);
    const tabsList4 = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "音乐" })
    ]);
    const tabsList4Small = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" })
    ]);
    function onTabsClick(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1288", "tabs click:", e);
    }
    function onTabsChange(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1292", "tabs change:", e);
    }
    function onTabsRightClick() {
      uni.showToast({ title: "右侧按钮点击", icon: "none" });
    }
    const tabbarValue1 = ref("0");
    const tabbarValue2 = ref("1");
    const tabbarValue3 = ref("home");
    const tabbarValue4 = ref("2");
    const tabbarValue5 = ref("0");
    const tabbarValue6 = ref("0");
    const tabbarValue7 = ref("0");
    function onTabbarChange1(e) {
      tabbarValue1.value = e.toString();
    }
    function onTabbarChange2(e) {
      tabbarValue2.value = e.toString();
    }
    function onTabbarChange3(e) {
      tabbarValue3.value = e.toString();
    }
    function onTabbarChange4(e) {
      tabbarValue4.value = e.toString();
    }
    function onTabbarChange5(e) {
      tabbarValue5.value = e.toString();
    }
    function onTabbarChange6(e) {
      tabbarValue6.value = e.toString();
    }
    function onTabbarChange7(name) {
      if (name === "1") {
        uni.showToast({ title: "请先登录", icon: "none" });
        return null;
      }
      tabbarValue7.value = name.toString();
    }
    const subsectionList = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "热点" })
    ]);
    const subsectionCurrent = ref(0);
    function onSubsectionChange(e) {
      var _a2;
      subsectionCurrent.value = (_a2 = e.getNumber("index")) !== null && _a2 !== void 0 ? _a2 : 0;
    }
    function onQrcodeResult(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1349", "qrcode result:", e);
    }
    const parseContent1 = ref(`<p>这是一段普通的<span style="color: #2979ff;">富文本</span>内容，支持 <strong>加粗</strong>、<em>斜体</em> 等样式。</p><img src="https://picsum.photos/400/300?random=30" />`);
    const parseContent2 = ref(`<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><p><b>粗体文字</b> <i>斜体文字</i> <u>下划线</u></p><blockquote>这是一段引用文字</blockquote><p>行内代码: <code>uni.__f__('log','at src/sub/uview-ultra/uview-ultra.uvue:1354','hello')</code></p><pre>function hello() {
  return 'world'
}</pre>`);
    const parseContent3 = ref(`<p>点击下方图片可预览：</p><img src="https://picsum.photos/400/300?random=31" /><p>点击 <a href="https://www.baidu.com">百度链接</a> 测试链接跳转</p>`);
    const parseContent4 = ref(`<table border="1" cellpadding="4" cellspacing="0"><tr><th>姓名</th><th>年龄</th></tr><tr><td>张三</td><td>28</td></tr><tr><td>李四</td><td>32</td></tr></table>`);
    const parseContent5 = ref(`<p>这是一段可以<span style="color: #fa3534;">长按复制</span>的文本内容，尝试长按选中。</p>`);
    const parseTagStyle = ref(new UTSJSONObject({
      p: "font-size: 15px; color: #303133; line-height: 24px;"
    }));
    function onParseImgTap(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1363", "parse img tap:", e);
    }
    function onParseLinkTap(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1367", "parse link tap:", e);
    }
    function onNavbarMiniLeftClick() {
      uni.showToast({ title: "左侧按钮点击", icon: "none" });
    }
    function onNavbarMiniHomeClick() {
      uni.showToast({ title: "首页按钮点击", icon: "none" });
    }
    const paginationCurrentPage = ref(1);
    const paginationPageSize = ref(10);
    const paginationTotal = ref(100);
    function onPaginationCurrentChange(page) {
      paginationCurrentPage.value = page;
      uni.showToast({ title: `当前页: ${page}`, icon: "none" });
    }
    function onPaginationSizeChange(size) {
      paginationPageSize.value = size;
      uni.showToast({ title: `每页: ${size} 条`, icon: "none" });
    }
    const paginationCurrentPage2 = ref(1);
    const paginationPageSize2 = ref(10);
    const paginationTotal2 = ref(50);
    function onPaginationCurrentChange2(page) {
      paginationCurrentPage2.value = page;
      uni.showToast({ title: `当前页: ${page}`, icon: "none" });
    }
    const paginationCurrentPage3 = ref(1);
    function onPaginationCurrentChange3(page) {
      paginationCurrentPage3.value = page;
    }
    function onCopySuccess() {
      uni.showToast({ title: "复制成功", icon: "success" });
    }
    const codeInputValue1 = ref("");
    const codeInputValue2 = ref("");
    const codeInputValue3 = ref("");
    const codeInputValue4 = ref("");
    const codeInputValue5 = ref("");
    const codeInputValue6 = ref("");
    function onCodeInputChange(e) {
      uni.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1423", "code-input change:", e);
    }
    function onCodeInputFinish(e) {
      uni.showToast({ title: `输入完成: ${e}`, icon: "success" });
    }
    const __returned__ = { scrollTop, scrollViewScrollTop, scrollHeight, onScroll, onBackTopClick, value1, value2, options1, options2, dropdownGreenValue1, dropdownGreenValue2, dropdownRegionOptions1, dropdownRegionOptions2, dropdownDisValue1, dropdownEventValue, onDropdownChange, uDropdownRef1, uDropdownRef2, uDropdownRef3, uDropdownRefGrid1, uDropdownRefCard, closeDropdown, dropdownScrollSelected, onDropdownScrollSelect, dropdownHLValue1, dropdownHLValue2, onDropdownOpen, onDropdownClose, dropdownGridSelected, dropdownGridItems, dropdownGridFilterItems, onDropdownGridSelect, dropdownCardSelected, dropdownCardItems, dropdownCardItems2, onDropdownCardSelect, waterfallList, waterfallLeftList, waterfallRightList, loadMoreWaterfall, clearWaterfall, loadmoreStatus, loadmoreIsDot, albumUrls, readMoreContent, avatarSrc, avatarGroupUrls, onAvatarGroupMore, onAvatarClick, onLinkClick, onLazyLoadClick, onLazyLoadError, swiperList, indexList, itemArr, showTag, lineProgressValue1, lineProgressValue2, lineProgressValue3, lineProgressValue4, swipeActionList, swipeActionOptions, onSwipeActionClick, skeletonLoading, toggleSkeleton, mpHtmlContent, onMpHtmlLoad, onMpHtmlLinktap, onMpHtmlImgtap, onMpHtmlError, transitionShow1, transitionShow3, transitionModes, toggleTransitionMode, tabsList1, tabsList2, tabsList4, tabsList4Small, onTabsClick, onTabsChange, onTabsRightClick, tabbarValue1, tabbarValue2, tabbarValue3, tabbarValue4, tabbarValue5, tabbarValue6, tabbarValue7, onTabbarChange1, onTabbarChange2, onTabbarChange3, onTabbarChange4, onTabbarChange5, onTabbarChange6, onTabbarChange7, subsectionList, subsectionCurrent, onSubsectionChange, onQrcodeResult, parseContent1, parseContent2, parseContent3, parseContent4, parseContent5, parseTagStyle, onParseImgTap, onParseLinkTap, onNavbarMiniLeftClick, onNavbarMiniHomeClick, paginationCurrentPage, paginationPageSize, paginationTotal, onPaginationCurrentChange, onPaginationSizeChange, paginationCurrentPage2, paginationPageSize2, paginationTotal2, onPaginationCurrentChange2, paginationCurrentPage3, onPaginationCurrentChange3, onCopySuccess, codeInputValue1, codeInputValue2, codeInputValue3, codeInputValue4, codeInputValue5, codeInputValue6, onCodeInputChange, onCodeInputFinish, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    }, get ThemeSwitchCard() {
      return ThemeSwitchCard;
    }, get DemoForm() {
      return DemoForm;
    }, get DemoFeedback() {
      return DemoFeedback;
    }, get DemoShow() {
      return DemoShow;
    }, get mpHtml() {
      return mpHtml;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "b": { "": { "borderTopWidth": "var(--un-line-width-default,1px)", "borderRightWidth": "var(--un-line-width-default,1px)", "borderBottomWidth": "var(--un-line-width-default,1px)", "borderLeftWidth": "var(--un-line-width-default,1px)" } }, "bg-purple": { "": { "backgroundColor": "rgba(128,0,128,var(--un-bg-opacity,1))" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-500": { "": { "fontWeight": 500 } }, "h-10px": { "": { "height": 10 } }, "h-40px": { "": { "height": 40 } }, "items-center": { "": { "alignItems": "center" } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "ml-10px": { "": { "marginLeft": 10 } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-15px": { "": { "marginTop": 15 } }, "mt-6px": { "": { "marginTop": 6 } }, "mt-8px": { "": { "marginTop": 8 } }, "none": { "": { "display": "none" } }, "text-__2979ff_": { "": { "color": "#2979ff" } }, "text-__303133_": { "": { "color": "#303133" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-right": { "": { "textAlign": "right" } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-10px": { "": { "width": 10 } }, "w-15px": { "": { "width": 15 } }, "w-20px": { "": { "width": 20 } }, "w-40px": { "": { "width": 40 } } };
const _style_1 = { "page-container": { "": { "display": "flex", "flexDirection": "column", "height": "100%", "backgroundColor": "#f5f5f5" } }, "section-title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16, "fontSize": 18, "fontWeight": "bold", "color": "#303133" } }, "demo-block": { "": { "marginTop": 0, "marginRight": 12, "marginBottom": 12, "marginLeft": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "demo-row": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "marginBottom": 8 } }, "demo-row-start": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "flex-start", "marginBottom": 8 } }, "collapse-text": { "": { "fontSize": 13, "color": "#909399", "lineHeight": "20px" } }, "grid-text": { "": { "fontSize": 12, "color": "#606266", "marginTop": 4 } }, "demo-layout": { "": { "height": 30, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "bg-purple-light": { "": { "backgroundColor": "#eef2f7" } }, "bg-purple": { "": { "backgroundColor": "#ced7e6" } }, "bg-purple-dark": { "": { "backgroundColor": "#a2b4cd" } }, "swipe-action-content": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "backgroundColor": "#ffffff", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f0f0f0" } }, "demo-list-cell": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "backgroundColor": "#ffffff", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f5f5f5" } }, "demo-list-cell-avatar": { "": { "width": 40, "height": 40, "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%", "borderBottomRightRadius": "50%", "borderBottomLeftRadius": "50%", "backgroundColor": "#3c9cff", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginRight": 12 } }, "demo-list-cell-content": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "list-loading": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "waterfall-container": { "": { "display": "flex", "flexDirection": "row", "alignItems": "flex-start" } }, "waterfall-column": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "column" } }, "waterfall-column-right": { "": { "marginLeft": 8 } }, "waterfall-card": { "": { "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "overflow": "hidden", "marginBottom": 8 } }, "waterfall-image": { "": { "width": "100%" } }, "waterfall-info": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "waterfall-title": { "": { "fontSize": 13, "color": "#303133", "lineHeight": "18px" } }, "transition-demo-wrapper": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "transition-demo-grid": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "space-around" } }, "transition-demo-item": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "width": "23%", "marginBottom": 12 } }, "transition-demo-box": { "": { "width": 70, "height": 40, "display": "flex", "alignItems": "center", "justifyContent": "center", "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "marginBottom": 8 } }, "transition-demo-blue": { "": { "backgroundColor": "#2979ff" } }, "transition-demo-green": { "": { "backgroundColor": "#19be6b" } }, "transition-demo-orange": { "": { "width": 180, "backgroundColor": "#ff9900" } }, "qrcode-demo-row": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "parse-demo-wrapper": { "": { "width": "100%", "backgroundColor": "#ffffff", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "steps-slot-icon": { "": { "width": 21, "height": 21, "backgroundColor": "#f9ae3d", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "fontSize": 12, "color": "#ffffff", "lineHeight": "21px", "textAlign": "center" } }, "tabs-right-slot": { "": { "paddingLeft": 4, "display": "flex", "alignItems": "center", "height": "100%" } }, "navbar-mini-demo-wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "backgroundColor": "#f5f5f5", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "navbar-mini-demo-row": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "backgroundColor": "#f5f5f5", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "navbar-mini-demo-item": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "tabbar-demo-wrapper": { "": { "width": "100%", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "overflow": "hidden" } }, "tabbar-slot-icon": { "": { "width": 22, "height": 22 } }, "waterfall-price": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#fa3534", "marginTop": 4 } }, "index-list-demo-wrapper": { "": { "height": 800, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "overflow": "hidden" } }, "up-index-list": { ".index-list-demo-wrapper ": { "height": "100%" } }, "list-cell": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "boxSizing": "border-box", "width": "100%", "paddingTop": 10, "paddingRight": "24rpx", "paddingBottom": 10, "paddingLeft": "24rpx", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "list-cell-text": { "": { "color": "#323233", "fontSize": 14, "lineHeight": "24px" } }, "u-nav-slot": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#e4e7ed", "borderRightColor": "#e4e7ed", "borderBottomColor": "#e4e7ed", "borderLeftColor": "#e4e7ed", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "paddingTop": 4, "paddingRight": 12, "paddingBottom": 4, "paddingLeft": 12, "backgroundColor": "#ffffff" } }, "lazy-load-item": { "": { "width": "30%", "marginRight": 8, "marginBottom": 8 } }, "demo-sub-label": { "": { "fontSize": 13, "fontWeight": "normal", "color": "#909399", "marginBottom": 10 } }, "dropdown-slot-content": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "display": "flex", "flexDirection": "column", "alignItems": "center" } }, "dropdown-scroll-item": { "": { "display": "flex", "flexDirection": "column", "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f5f5f5" } }, "dropdown-scroll-footer": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "dropdown-grid-panel": { "": { "paddingTop": 12, "paddingRight": 8, "paddingBottom": 12, "paddingLeft": 8, "width": "100%" } }, "dropdown-grid-item": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 14, "paddingRight": 4, "paddingBottom": 14, "paddingLeft": 4, "marginBottom": 10, "backgroundColor": "#f7f8fa", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10, "transitionProperty": "backgroundColor", "transitionDuration": "0.2s", "backgroundColor:active": "#eef0f4" } }, "dropdown-grid-icon": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": 44, "height": 44, "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%", "borderBottomRightRadius": "50%", "borderBottomLeftRadius": "50%", "backgroundColor": "#ffffff", "marginBottom": 8 } }, "dropdown-grid-label": { "": { "fontSize": 12, "color": "#606266", "textAlign": "center" } }, "dropdown-card-panel": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "width": "100%" } }, "dropdown-card-grid": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "space-between" } }, "dropdown-card": { "": { "width": "48%", "backgroundColor": "#ffffff", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10, "overflow": "hidden", "marginBottom": 12, "boxShadow": "0 1px 4px rgba(0, 0, 0, 0.08)", "backgroundColor:active": "#f8f8f8" } }, "dropdown-card-img": { "": { "width": "100%", "height": 120, "backgroundColor": "#f5f5f5" } }, "dropdown-card-body": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "display": "flex", "flexDirection": "column" } }, "dropdown-card-title": { "": { "fontSize": 14, "fontWeight": 600, "color": "#303133", "lineHeight": "20px" } }, "dropdown-card-desc": { "": { "fontSize": 12, "color": "#909399", "marginTop": 4, "lineHeight": "16px" } }, "dropdown-card-footer": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "marginTop": 8 } }, "dropdown-card-price": { "": { "fontSize": 15, "fontWeight": "bold", "color": "#fa3534" } }, "dropdown-card-tag": { "": { "paddingTop": 2, "paddingRight": 8, "paddingBottom": 2, "paddingLeft": 8, "backgroundColor": "#fff3e0", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "dropdown-card-tag-text": { "": { "fontSize": 10, "color": "#ff9800" } }, "@FONT-FACE": [{ "fontFamily": "iconfont", "src": "url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype')" }], "@TRANSITION": { "dropdown-grid-item": { "property": "backgroundColor", "duration": "0.2s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_swiper = resolveEasycom(resolveDynamicComponent("up-swiper"), __easycom_1);
  const _component_up_image = resolveEasycom(resolveDynamicComponent("up-image"), __easycom_2);
  const _component_up_pagination = resolveEasycom(resolveDynamicComponent("up-pagination"), __easycom_3);
  const _component_up_copy = resolveEasycom(resolveDynamicComponent("up-copy"), __easycom_4);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_5);
  const _component_up_th = resolveEasycom(resolveDynamicComponent("up-th"), __easycom_6);
  const _component_up_tr = resolveEasycom(resolveDynamicComponent("up-tr"), __easycom_7);
  const _component_up_td = resolveEasycom(resolveDynamicComponent("up-td"), __easycom_8);
  const _component_up_table = resolveEasycom(resolveDynamicComponent("up-table"), __easycom_9);
  const _component_up_code_input = resolveEasycom(resolveDynamicComponent("up-code-input"), __easycom_10);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_11);
  const _component_up_qrcode = resolveEasycom(resolveDynamicComponent("up-qrcode"), __easycom_12);
  const _component_up_parse = resolveEasycom(resolveDynamicComponent("up-parse"), __easycom_13);
  const _component_up_steps_item = resolveEasycom(resolveDynamicComponent("up-steps-item"), __easycom_14);
  const _component_up_steps = resolveEasycom(resolveDynamicComponent("up-steps"), __easycom_15);
  const _component_up_navbar_mini = resolveEasycom(resolveDynamicComponent("up-navbar-mini"), __easycom_16);
  const _component_up_tabs = resolveEasycom(resolveDynamicComponent("up-tabs"), __easycom_17);
  const _component_up_tabbar_item = resolveEasycom(resolveDynamicComponent("up-tabbar-item"), __easycom_18);
  const _component_up_tabbar = resolveEasycom(resolveDynamicComponent("up-tabbar"), __easycom_19);
  const _component_rich_text = resolveComponent("rich-text");
  const _component_up_read_more = resolveEasycom(resolveDynamicComponent("up-read-more"), __easycom_20);
  const _component_up_avatar = resolveEasycom(resolveDynamicComponent("up-avatar"), __easycom_21);
  const _component_up_link = resolveEasycom(resolveDynamicComponent("up-link"), __easycom_22);
  const _component_up_lazy_load = resolveEasycom(resolveDynamicComponent("up-lazy-load"), __easycom_23);
  const _component_up_loadmore = resolveEasycom(resolveDynamicComponent("up-loadmore"), __easycom_24);
  const _component_up_album = resolveEasycom(resolveDynamicComponent("up-album"), __easycom_25);
  const _component_up_index_anchor = resolveEasycom(resolveDynamicComponent("up-index-anchor"), __easycom_26);
  const _component_up_index_item = resolveEasycom(resolveDynamicComponent("up-index-item"), __easycom_27);
  const _component_up_index_list = resolveEasycom(resolveDynamicComponent("up-index-list"), __easycom_28);
  const _component_up_navbar = resolveEasycom(resolveDynamicComponent("up-navbar"), __easycom_29);
  const _component_up_subsection = resolveEasycom(resolveDynamicComponent("up-subsection"), __easycom_30);
  const _component_up_dropdown_item = resolveEasycom(resolveDynamicComponent("up-dropdown-item"), __easycom_31);
  const _component_up_dropdown = resolveEasycom(resolveDynamicComponent("up-dropdown"), __easycom_32);
  const _component_up_swipe_action_item = resolveEasycom(resolveDynamicComponent("up-swipe-action-item"), __easycom_33);
  const _component_up_swipe_action = resolveEasycom(resolveDynamicComponent("up-swipe-action"), __easycom_34);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_36);
  const _component_up_tag = resolveEasycom(resolveDynamicComponent("up-tag"), __easycom_37);
  const _component_up_badge = resolveEasycom(resolveDynamicComponent("up-badge"), __easycom_38);
  const _component_up_cell = resolveEasycom(resolveDynamicComponent("up-cell"), __easycom_39);
  const _component_up_cell_group = resolveEasycom(resolveDynamicComponent("up-cell-group"), __easycom_40);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_divider = resolveEasycom(resolveDynamicComponent("up-divider"), __easycom_42);
  const _component_up_count_down = resolveEasycom(resolveDynamicComponent("up-count-down"), __easycom_43);
  const _component_up_count_to = resolveEasycom(resolveDynamicComponent("up-count-to"), __easycom_44);
  const _component_up_line_progress = resolveEasycom(resolveDynamicComponent("up-line-progress"), __easycom_45);
  const _component_up_empty = resolveEasycom(resolveDynamicComponent("up-empty"), __easycom_46);
  const _component_up_col = resolveEasycom(resolveDynamicComponent("up-col"), __easycom_47);
  const _component_up_row = resolveEasycom(resolveDynamicComponent("up-row"), __easycom_48);
  const _component_up_grid_item = resolveEasycom(resolveDynamicComponent("up-grid-item"), __easycom_49);
  const _component_up_grid = resolveEasycom(resolveDynamicComponent("up-grid"), __easycom_50);
  const _component_up_skeleton = resolveEasycom(resolveDynamicComponent("up-skeleton"), __easycom_51);
  const _component_up_no_network = resolveEasycom(resolveDynamicComponent("up-no-network"), __easycom_52);
  const _component_up_back_top = resolveEasycom(resolveDynamicComponent("up-back-top"), __easycom_53);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "uview-ultra 示例"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container" }, [
            createVNode(_component_NavBar, {
              title: "uview-ultra 组件演示",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("scroll-view", {
              "scroll-y": true,
              direction: "vertical",
              style: normalizeStyle({ height: `${$setup.scrollHeight}px` }),
              "scroll-top": $setup.scrollViewScrollTop,
              "scroll-with-animation": true,
              onScroll: $setup.onScroll
            }, [
              createElementVNode("image", {
                src: _imports_0,
                style: { "width": "60px", "height": "60px" }
              }),
              createElementVNode("image", {
                src: _imports_0,
                style: { "width": "60px", "height": "60px" }
              }),
              createVNode($setup["DemoShow"]),
              createVNode($setup["ThemeSwitchCard"]),
              createCommentVNode(" Swiper 轮播图 "),
              createVNode(_component_up_swiper, {
                list: $setup.swiperList,
                "key-name": "image",
                indicator: true,
                "indicator-mode": "dot",
                circular: true,
                autoplay: true,
                interval: 3e3,
                height: "180",
                "show-title": true
              }, null, 8, ["list"]),
              createCommentVNode(" Image 图片 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-image "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_image, {
                    src: "/static/logo.png",
                    width: "60px",
                    height: "60px"
                  }),
                  createElementVNode("view", { class: "w-15px" }),
                  createVNode(_component_up_image, {
                    src: "/static/logo.png",
                    width: "60px",
                    height: "60px",
                    shape: "circle"
                  }),
                  createElementVNode("view", { class: "w-15px" }),
                  createElementVNode("image", {
                    src: _imports_0,
                    style: { "width": "60px", "height": "60px" },
                    mode: "aspectFill"
                  })
                ])
              ]),
              createCommentVNode(" ==================== Pagination 分页器（置顶方便调试） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-pagination 分页器"),
                createCommentVNode(" 1. 基本使用 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（prev, pager, next, total）"),
                createVNode(_component_up_pagination, {
                  "current-page": $setup.paginationCurrentPage,
                  "page-size": $setup.paginationPageSize,
                  total: $setup.paginationTotal,
                  layout: "prev, pager, next, total",
                  onCurrentChange: $setup.onPaginationCurrentChange,
                  onSizeChange: $setup.onPaginationSizeChange
                }, null, 8, ["current-page", "page-size", "total"]),
                createCommentVNode(" 2. 简化版 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 简化版（prev, total, next）"),
                createVNode(_component_up_pagination, {
                  "current-page": $setup.paginationCurrentPage2,
                  "page-size": $setup.paginationPageSize2,
                  total: $setup.paginationTotal2,
                  layout: "prev, total, next",
                  "prev-text": "上一页",
                  "next-text": "下一页",
                  onCurrentChange: $setup.onPaginationCurrentChange2
                }, null, 8, ["current-page", "page-size", "total"])
              ]),
              createCommentVNode(" ==================== Copy 复制（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-copy 复制"),
                createCommentVNode(" 1. 基本使用 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（content + 默认插槽）"),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_copy, {
                    content: "uview-ultra is great !",
                    onSuccess: $setup.onCopySuccess
                  }, {
                    default: withCtx(() => [
                      createElementVNode("text", { class: "text-14px text-__2979ff_" }, "点击复制")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                createCommentVNode(" 2. 配合按钮使用 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 配合按钮使用"),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_copy, {
                    content: "uview-ultra is great !",
                    onSuccess: $setup.onCopySuccess
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_up_button, {
                        type: "primary",
                        text: "点击复制",
                        size: "mini"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              createCommentVNode(" ==================== Table 表格（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-table 表格"),
                createCommentVNode(" 1. 基本使用 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（th 表头 + td 数据单元格）"),
                createVNode(_component_up_table, null, {
                  default: withCtx(() => [
                    createVNode(_component_up_tr, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("学校")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("班级")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("年龄")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("城市")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_tr, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("浙江大学")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("二年级")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("22")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("杭州")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_tr, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("清华大学")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("05班")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("24")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("北京")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createCommentVNode(" 2. 自定义样式 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 自定义样式（borderColor / bgColor / align / padding / fontSize / color）"),
                createVNode(_component_up_table, {
                  "border-color": "#2979ff",
                  "bg-color": "#f8faff",
                  align: "left",
                  padding: "12rpx 8rpx",
                  "font-size": "13px",
                  color: "#303133"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_up_tr, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("姓名")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("职位")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_th, null, {
                          default: withCtx(() => [
                            createTextVNode("部门")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_tr, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("张三")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("前端开发")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_up_td, null, {
                          default: withCtx(() => [
                            createTextVNode("技术部")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" ==================== CodeInput 验证码输入（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-code-input 验证码输入"),
                createCommentVNode(" 1. 基本使用：box 盒子模式 "),
                createElementVNode("text", { class: "demo-sub-label" }, '1. 基本使用（box 盒子模式 + maxlength="6"）'),
                createElementVNode("view", { class: "code-input-demo-row" }, [
                  createVNode(_component_up_code_input, {
                    modelValue: $setup.codeInputValue1,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.codeInputValue1 = $event),
                    maxlength: 6,
                    mode: "box",
                    onChange: $setup.onCodeInputChange,
                    onFinish: $setup.onCodeInputFinish
                  }, null, 8, ["modelValue"])
                ]),
                createElementVNode("text", { class: "text-12px text-__909399_ mt-6px" }, "输入完成后会触发 finish 事件"),
                createCommentVNode(" 2. 底部横线模式 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, '2. 底部横线模式（mode="line"）'),
                createElementVNode("view", { class: "code-input-demo-row" }, [
                  createVNode(_component_up_code_input, {
                    modelValue: $setup.codeInputValue2,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.codeInputValue2 = $event),
                    maxlength: 4,
                    mode: "line",
                    onFinish: $setup.onCodeInputFinish
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createCommentVNode(" ==================== Transition 动画过渡（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-transition 动画过渡"),
                createCommentVNode(" 1. 基本使用：fade 淡入淡出 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（fade 淡入淡出 + 按钮切换）"),
                createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  createVNode(_component_up_transition, {
                    show: $setup.transitionShow1,
                    mode: "fade"
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "transition-demo-box transition-demo-blue" }, [
                        createElementVNode("text", { class: "text-14px text-white font-500" }, "fade 淡入淡出")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"]),
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: $setup.transitionShow1 ? "隐藏" : "显示",
                    size: "mini",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.transitionShow1 = !$setup.transitionShow1)
                  }, null, 8, ["text"])
                ]),
                createCommentVNode(" 2. 多种动画模式 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 多种动画模式（fade-up / slide-down / zoom-in / fade-left）"),
                createElementVNode("view", { class: "transition-demo-grid" }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.transitionModes, (item) => {
                      return openBlock(), createElementBlock("view", {
                        key: item.getString("mode"),
                        class: "transition-demo-item"
                      }, [
                        createElementVNode(
                          "text",
                          { class: "text-11px text-__909399_ mb-6px" },
                          toDisplayString(item.getString("mode")),
                          1
                          /* TEXT */
                        ),
                        createVNode(_component_up_transition, {
                          show: item.getBoolean("show") ?? false,
                          mode: item.getString("mode")
                        }, {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "transition-demo-box transition-demo-green" }, [
                              createElementVNode(
                                "text",
                                { class: "text-12px text-white" },
                                toDisplayString(item.getString("mode")),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["show", "mode"]),
                        createVNode(_component_up_button, {
                          type: "primary",
                          text: item.getBoolean("show") ?? false ? "隐藏" : "显示",
                          size: "mini",
                          onClick: ($event) => $setup.toggleTransitionMode(item)
                        }, null, 8, ["text", "onClick"])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                createCommentVNode(" 3. 自定义动画时长 + 缓动 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, '3. 自定义时长 + 缓动（duration="800" timing-function="linear"）'),
                createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  createVNode(_component_up_transition, {
                    show: $setup.transitionShow3,
                    mode: "slide-right",
                    duration: 800,
                    "timing-function": "linear"
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "transition-demo-box transition-demo-orange" }, [
                        createElementVNode("text", { class: "text-14px text-white font-500" }, "slide-right · 800ms · linear")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"]),
                  createVNode(_component_up_button, {
                    type: "warning",
                    text: $setup.transitionShow3 ? "隐藏" : "显示",
                    size: "mini",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.transitionShow3 = !$setup.transitionShow3)
                  }, null, 8, ["text"])
                ])
              ]),
              createCommentVNode(" ==================== QRCode 二维码（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-qrcode 二维码"),
                createCommentVNode(" 1. 基本使用 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（size + val）"),
                createElementVNode("view", { class: "qrcode-demo-row" }, [
                  createVNode(_component_up_qrcode, {
                    size: 180,
                    val: "https://uview-ultra.lingyun.net"
                  })
                ]),
                createCommentVNode(" 2. 带 Logo 图标 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 带中间 Logo 图标（icon）"),
                createElementVNode("view", { class: "qrcode-demo-row" }, [
                  createVNode(_component_up_qrcode, {
                    size: 180,
                    val: "uview-ultra",
                    icon: "https://uview-ultra.jiangruyi.com/uview-ultra/common/logo.png"
                  })
                ])
              ]),
              createCommentVNode(" ==================== Parse 富文本解析（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-parse 富文本解析"),
                createCommentVNode(" 1. 基本使用：段落 + 图片 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（段落 + 图片）"),
                createElementVNode("view", { class: "parse-demo-wrapper" }, [
                  createVNode(_component_up_parse, { content: $setup.parseContent1 }, null, 8, ["content"])
                ]),
                createCommentVNode(" 2. 富文本样式：标题、加粗、斜体、引用、代码 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 富文本样式（h1~h6 / b / i / blockquote / code / pre）"),
                createElementVNode("view", { class: "parse-demo-wrapper" }, [
                  createVNode(_component_up_parse, { content: $setup.parseContent2 }, null, 8, ["content"])
                ])
              ]),
              createCommentVNode(" ==================== Steps 步骤条（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-steps 步骤条"),
                createCommentVNode(" 1. 基本使用 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（current + title + desc）"),
                createVNode(_component_up_steps, { current: "0" }, {
                  default: withCtx(() => [
                    createVNode(_component_up_steps_item, {
                      title: "已下单",
                      desc: "10:30"
                    }),
                    createVNode(_component_up_steps_item, {
                      title: "已出库",
                      desc: "10:35"
                    }),
                    createVNode(_component_up_steps_item, {
                      title: "运输中",
                      desc: "11:40"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createCommentVNode(" 2. 错误状态 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, '2. 错误状态（error="true"）'),
                createVNode(_component_up_steps, { current: "1" }, {
                  default: withCtx(() => [
                    createVNode(_component_up_steps_item, {
                      title: "已下单",
                      desc: "10:30"
                    }),
                    createVNode(_component_up_steps_item, {
                      title: "仓库着火",
                      desc: "10:35",
                      error: true
                    }),
                    createVNode(_component_up_steps_item, {
                      title: "破产清算",
                      desc: "11:40"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" ==================== NavbarMini 迷你导航栏（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-navbar-mini 迷你导航栏"),
                createCommentVNode(" 1. 基本使用：固定在顶部，安全区域适配 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（固定顶部 + 安全区域适配）"),
                createElementVNode("view", { class: "navbar-mini-demo-wrapper" }, [
                  createVNode(_component_up_navbar_mini, {
                    fixed: false,
                    "safe-area-inset-top": false,
                    "left-icon": "arrow-left",
                    "bg-color": "rgba(41,121,255,0.85)",
                    "icon-color": "#ffffff",
                    "icon-size": 18,
                    height: "32px",
                    onLeftClick: $setup.onNavbarMiniLeftClick,
                    onHomeClick: $setup.onNavbarMiniHomeClick
                  })
                ]),
                createCommentVNode(" 2. 自定义背景色、图标颜色 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 自定义背景色和图标颜色"),
                createElementVNode("view", { class: "navbar-mini-demo-row" }, [
                  createElementVNode("view", { class: "navbar-mini-demo-item" }, [
                    createVNode(_component_up_navbar_mini, {
                      fixed: false,
                      "safe-area-inset-top": false,
                      "bg-color": "rgba(25,190,107,0.85)",
                      "icon-color": "#ffffff",
                      "icon-size": 16,
                      height: "30px"
                    })
                  ])
                ])
              ]),
              createCommentVNode(" ==================== Tabs 标签页（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-tabs 标签页"),
                createCommentVNode(" 1. 基本使用：list + @click + @change "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（list 数组 + @click + @change）"),
                createVNode(_component_up_tabs, {
                  list: $setup.tabsList1,
                  onClick: $setup.onTabsClick,
                  onChange: $setup.onTabsChange
                }, null, 8, ["list"]),
                createCommentVNode(" 2. 显示徽标 + 禁用 "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 显示徽标（badge.isDot / badge.value）+ 禁用（disabled）"),
                createVNode(_component_up_tabs, {
                  list: $setup.tabsList2,
                  onClick: $setup.onTabsClick
                }, null, 8, ["list"])
              ]),
              createCommentVNode(" ==================== Tabbar 底部导航栏（置顶方便查看） ==================== "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-tabbar 底部导航栏"),
                createCommentVNode(" 1. 基本使用：value + @change + name 匹配 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（数字 name 匹配 value）"),
                createElementVNode("view", { class: "tabbar-demo-wrapper" }, [
                  createVNode(_component_up_tabbar, {
                    value: $setup.tabbarValue1,
                    fixed: false,
                    placeholder: false,
                    "safe-area-inset-bottom": false,
                    onChange: _cache[4] || (_cache[4] = (e) => $setup.onTabbarChange1(e))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_up_tabbar_item, {
                        text: "首页",
                        icon: "home",
                        name: "0"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "放映厅",
                        icon: "photo",
                        name: "1"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "直播",
                        icon: "play-right",
                        name: "2"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "我的",
                        icon: "account",
                        name: "3"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["value"])
                ]),
                createCommentVNode(" 2. 徽标：dot 和 badge "),
                createElementVNode("text", { class: "demo-sub-label mt-15px" }, "2. 显示徽标（dot 小圆点 + badge 数字）"),
                createElementVNode("view", { class: "tabbar-demo-wrapper" }, [
                  createVNode(_component_up_tabbar, {
                    value: $setup.tabbarValue2,
                    fixed: false,
                    placeholder: false,
                    "safe-area-inset-bottom": false,
                    onChange: _cache[5] || (_cache[5] = (e) => $setup.onTabbarChange2(e))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_up_tabbar_item, {
                        text: "首页",
                        icon: "home",
                        dot: "",
                        name: "0"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "消息",
                        icon: "chat",
                        badge: "3",
                        name: "1"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "购物车",
                        icon: "cart",
                        badge: "99+",
                        name: "2"
                      }),
                      createVNode(_component_up_tabbar_item, {
                        text: "我的",
                        icon: "account",
                        name: "3"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["value"])
                ])
              ]),
              createCommentVNode(" ReadMore 展开阅读更多 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-read-more 展开阅读更多 "),
                createCommentVNode(" 基本使用 "),
                createVNode(_component_up_read_more, { "show-height": "120" }, {
                  default: withCtx(() => [
                    createVNode(_component_rich_text, { nodes: $setup.readMoreContent }, null, 8, ["nodes"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createCommentVNode(" 带展开/收起切换 "),
                createElementVNode("view", { class: "mt-10px" }, [
                  createVNode(_component_up_read_more, {
                    toggle: true,
                    "show-height": "120",
                    "close-text": "展开阅读全文",
                    "open-text": "收起"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_rich_text, { nodes: $setup.readMoreContent }, null, 8, ["nodes"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              createCommentVNode(" Avatar 头像 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-avatar 头像 "),
                createCommentVNode(" 图片头像：不同形状和尺寸 "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_avatar, {
                    src: $setup.avatarSrc,
                    size: "40"
                  }, null, 8, ["src"]),
                  createElementVNode("view", { class: "w-15px" }),
                  createVNode(_component_up_avatar, {
                    src: $setup.avatarSrc,
                    size: "40",
                    shape: "square"
                  }, null, 8, ["src"])
                ]),
                createCommentVNode(" 文字头像 "),
                createElementVNode("view", { class: "demo-row-start mt-10px" }, [
                  createVNode(_component_up_avatar, {
                    text: "U",
                    size: "40",
                    "bg-color": "#2979ff"
                  }),
                  createElementVNode("view", { class: "w-15px" }),
                  createVNode(_component_up_avatar, {
                    text: "A",
                    size: "40",
                    "bg-color": "#19be6b"
                  })
                ])
              ]),
              createCommentVNode(" Link 超链接 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-link 超链接 "),
                createCommentVNode(" 基本使用 "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_link, {
                    href: "https://uview-ultra.lingyun.net",
                    text: "打开 uview-ultra UI 文档",
                    onClick: $setup.onLinkClick
                  })
                ]),
                createCommentVNode(" 带下划线 "),
                createElementVNode("view", { class: "demo-row-start mt-8px" }, [
                  createVNode(_component_up_link, {
                    href: "https://uniapp.dcloud.net.cn",
                    text: "uni-app X 官方文档",
                    "under-line": true,
                    onClick: $setup.onLinkClick
                  })
                ])
              ]),
              createCommentVNode(" LazyLoad 懒加载 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-lazy-load 懒加载 "),
                createCommentVNode(" 基本使用 "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createElementVNode("view", { class: "lazy-load-item" }, [
                    createVNode(_component_up_lazy_load, {
                      image: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
                      "loading-img": "/static/logo.png",
                      height: 120,
                      "border-radius": 8,
                      index: "img1",
                      onClick: $setup.onLazyLoadClick,
                      onError: $setup.onLazyLoadError
                    })
                  ]),
                  createElementVNode("view", { class: "lazy-load-item ml-10px" }, [
                    createVNode(_component_up_lazy_load, {
                      image: "https://picsum.photos/240/240?random=22",
                      "loading-img": "/static/logo.png",
                      height: 120,
                      "border-radius": 8,
                      index: "img2",
                      onClick: $setup.onLazyLoadClick,
                      onError: $setup.onLazyLoadError
                    })
                  ])
                ])
              ]),
              createCommentVNode(" mp-html 富文本 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " mp-html 富文本 "),
                createVNode($setup["mpHtml"], {
                  content: $setup.mpHtmlContent,
                  "preview-img": true,
                  "show-img-menu": true,
                  selectable: true,
                  onLoad: $setup.onMpHtmlLoad,
                  onLinktap: $setup.onMpHtmlLinktap,
                  onImgtap: $setup.onMpHtmlImgtap,
                  onError: $setup.onMpHtmlError
                }, null, 8, ["content"])
              ]),
              createCommentVNode(" Loadmore 加载更多 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-loadmore "),
                createElementVNode("view", { class: "flex-col items-center" }, [
                  createVNode(_component_up_loadmore, {
                    status: $setup.loadmoreStatus,
                    "is-dot": $setup.loadmoreIsDot,
                    line: true
                  }, null, 8, ["status", "is-dot"]),
                  createElementVNode("view", { class: "demo-row-start mt-10px" }, [
                    createVNode(_component_up_button, {
                      type: "primary",
                      text: "加载更多",
                      size: "mini",
                      onClick: _cache[6] || (_cache[6] = ($event) => {
                        $setup.loadmoreStatus = "loadmore";
                        $setup.loadmoreIsDot = false;
                      })
                    }),
                    createElementVNode("view", { class: "w-10px" }),
                    createVNode(_component_up_button, {
                      type: "warning",
                      text: "加载中",
                      size: "mini",
                      onClick: _cache[7] || (_cache[7] = ($event) => {
                        $setup.loadmoreStatus = "loading";
                        $setup.loadmoreIsDot = false;
                      })
                    })
                  ])
                ])
              ]),
              createCommentVNode(" Album 相册 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-album "),
                createVNode(_component_up_album, {
                  urls: $setup.albumUrls,
                  "multiple-size": "72",
                  space: "6",
                  "max-count": 9,
                  "show-more": true,
                  "row-count": "3",
                  radius: "6"
                }, null, 8, ["urls"])
              ]),
              createCommentVNode(" IndexList 索引列表 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-index-list "),
                createElementVNode("view", { class: "index-list-demo-wrapper" }, [
                  createVNode(_component_up_index_list, {
                    "index-list": $setup.indexList,
                    sticky: true
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($setup.itemArr, (item, index) => {
                          return openBlock(), createBlock(
                            _component_up_index_item,
                            { key: index },
                            {
                              default: withCtx(() => [
                                createVNode(_component_up_index_anchor, {
                                  text: $setup.indexList[index]
                                }, null, 8, ["text"]),
                                (openBlock(true), createElementBlock(
                                  Fragment,
                                  null,
                                  renderList(item, (cell, cellIndex) => {
                                    return openBlock(), createElementBlock("view", {
                                      key: cellIndex,
                                      class: "list-cell"
                                    }, [
                                      createElementVNode(
                                        "text",
                                        { class: "list-cell-text" },
                                        toDisplayString(cell),
                                        1
                                        /* TEXT */
                                      )
                                    ]);
                                  }),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["index-list"])
                ])
              ]),
              createCommentVNode(" Navbar 导航栏 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-navbar "),
                createVNode(_component_up_navbar, {
                  title: "自定义导航栏",
                  fixed: false,
                  "auto-back": false,
                  "safe-area-inset-top": false,
                  "bg-color": "#2979ff"
                }),
                createElementVNode("view", { class: "h-10px" }),
                createVNode(_component_up_navbar, {
                  title: "浅色主题",
                  fixed: false,
                  "auto-back": false,
                  "safe-area-inset-top": false,
                  "bg-color": "#ffffff",
                  border: true
                })
              ]),
              createCommentVNode(" Subsection 分段器 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-subsection "),
                createVNode(_component_up_subsection, {
                  list: $setup.subsectionList,
                  current: $setup.subsectionCurrent,
                  onChange: $setup.onSubsectionChange
                }, null, 8, ["list", "current"])
              ]),
              createCommentVNode(" Waterfall 瀑布流 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-waterfall"),
                createElementVNode("view", { class: "waterfall-container" }, [
                  createElementVNode("view", { class: "waterfall-column" }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.waterfallLeftList, (item) => {
                        return openBlock(), createElementBlock("view", {
                          key: item.getString("id"),
                          class: "waterfall-card"
                        }, [
                          createElementVNode("image", {
                            src: item.getString("image"),
                            mode: "widthFix",
                            class: "waterfall-image"
                          }, null, 8, ["src"]),
                          createElementVNode("view", { class: "waterfall-info" }, [
                            createElementVNode(
                              "text",
                              { class: "waterfall-title" },
                              toDisplayString(item.getString("title")),
                              1
                              /* TEXT */
                            ),
                            createElementVNode(
                              "text",
                              { class: "waterfall-price" },
                              toDisplayString(item.getString("price")),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  createElementVNode("view", { class: "waterfall-column waterfall-column-right" }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.waterfallRightList, (item) => {
                        return openBlock(), createElementBlock("view", {
                          key: item.getString("id"),
                          class: "waterfall-card"
                        }, [
                          createElementVNode("image", {
                            src: item.getString("image"),
                            mode: "widthFix",
                            class: "waterfall-image"
                          }, null, 8, ["src"]),
                          createElementVNode("view", { class: "waterfall-info" }, [
                            createElementVNode(
                              "text",
                              { class: "waterfall-title" },
                              toDisplayString(item.getString("title")),
                              1
                              /* TEXT */
                            ),
                            createElementVNode(
                              "text",
                              { class: "waterfall-price" },
                              toDisplayString(item.getString("price")),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                createElementVNode("view", { class: "demo-row mt-10px" }, [
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "加载更多",
                    size: "mini",
                    onClick: $setup.loadMoreWaterfall
                  }),
                  createVNode(_component_up_button, {
                    type: "info",
                    text: "清空",
                    size: "mini",
                    onClick: $setup.clearWaterfall
                  })
                ])
              ]),
              createCommentVNode(" Dropdown 下拉菜单 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "up-dropdown 下拉菜单"),
                createCommentVNode(" 1. 基本使用：多列选项 "),
                createElementVNode("text", { class: "demo-sub-label" }, "1. 基本使用（多列选项）"),
                createVNode(_component_up_dropdown, null, {
                  default: withCtx(() => [
                    createVNode(_component_up_dropdown_item, {
                      modelValue: $setup.value1,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.value1 = $event),
                      title: "距离",
                      options: $setup.options1
                    }, null, 8, ["modelValue", "options"]),
                    createVNode(_component_up_dropdown_item, {
                      modelValue: $setup.value2,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.value2 = $event),
                      title: "温度",
                      options: $setup.options2
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" 2. 自定义颜色 + 圆角 + 图标 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-sub-label" }, "2. 自定义颜色、圆角、图标、字号"),
                createVNode(_component_up_dropdown, {
                  "active-color": "#19be6b",
                  "inactive-color": "#909399",
                  "border-radius": 12,
                  "menu-icon": "arrow-down-fill",
                  "menu-icon-size": "22",
                  "title-size": "26",
                  "border-bottom": true
                }, {
                  default: withCtx(() => [
                    createVNode(_component_up_dropdown_item, {
                      modelValue: $setup.dropdownGreenValue1,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.dropdownGreenValue1 = $event),
                      title: "区域",
                      options: $setup.dropdownRegionOptions1
                    }, null, 8, ["modelValue", "options"]),
                    createVNode(_component_up_dropdown_item, {
                      modelValue: $setup.dropdownGreenValue2,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.dropdownGreenValue2 = $event),
                      title: "排序",
                      options: $setup.dropdownRegionOptions2
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" SwipeAction 滑动操作 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-swipe-action "),
                createVNode(_component_up_swipe_action, { "auto-close": true }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.swipeActionList, (item, idx) => {
                        return openBlock(), createBlock(_component_up_swipe_action_item, {
                          key: item.id,
                          options: $setup.swipeActionOptions,
                          name: idx,
                          "close-on-click": true,
                          onClick: $setup.onSwipeActionClick
                        }, {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "swipe-action-content" }, [
                              createElementVNode(
                                "text",
                                { class: "text-14px text-__303133_" },
                                toDisplayString(item.title),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["options", "name"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" ==================== 基础组件 ==================== "),
              createElementVNode("text", { class: "section-title" }, " 基础组件 "),
              createCommentVNode(" Button 按钮 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-button "),
                createElementVNode("view", { class: "demo-row" }, [
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "主要",
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "成功",
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "warning",
                    text: "警告",
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "error",
                    text: "错误",
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "info",
                    text: "信息",
                    size: "mini"
                  })
                ]),
                createElementVNode("view", { class: "demo-row" }, [
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "朴素",
                    plain: true,
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "细边框",
                    plain: true,
                    hairline: true,
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "圆形",
                    shape: "circle",
                    size: "mini"
                  }),
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "禁用",
                    disabled: true,
                    size: "mini"
                  })
                ])
              ]),
              createCommentVNode(" Icon 图标 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-icon "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_icon, {
                    name: "home",
                    size: "28",
                    label: "home",
                    "label-size": "10",
                    "label-pos": "bottom"
                  }),
                  createElementVNode("view", { class: "w-20px" }),
                  createVNode(_component_up_icon, {
                    name: "search",
                    size: "28",
                    color: "#2979ff",
                    label: "search",
                    "label-size": "10",
                    "label-pos": "bottom"
                  })
                ])
              ]),
              createCommentVNode(" Text 文本 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-text "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_text, { text: "普通文本" }),
                  createElementVNode("view", { class: "w-15px" }),
                  createVNode(_component_up_text, {
                    mode: "price",
                    text: "99.9"
                  })
                ])
              ]),
              createCommentVNode(" Tag 标签 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-tag "),
                createElementVNode("view", { class: "demo-row" }, [
                  createVNode(_component_up_tag, {
                    text: "主要",
                    type: "primary"
                  }),
                  createVNode(_component_up_tag, {
                    text: "成功",
                    type: "success"
                  }),
                  createVNode(_component_up_tag, {
                    text: "警告",
                    type: "warning"
                  }),
                  createVNode(_component_up_tag, {
                    text: "错误",
                    type: "error"
                  }),
                  createVNode(_component_up_tag, {
                    text: "信息",
                    type: "info"
                  })
                ]),
                createElementVNode("view", { class: "demo-row" }, [
                  createVNode(_component_up_tag, {
                    text: "朴素",
                    type: "primary",
                    plain: true
                  }),
                  createVNode(_component_up_tag, {
                    text: "圆形",
                    type: "primary",
                    shape: "circle"
                  })
                ])
              ]),
              createCommentVNode(" Badge 徽标 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-badge "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_badge, {
                    value: 9,
                    type: "error"
                  }),
                  createElementVNode("view", { class: "w-20px" }),
                  createVNode(_component_up_badge, {
                    value: 99,
                    type: "error"
                  })
                ])
              ]),
              createCommentVNode(" Cell 单元格 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-cell "),
                createVNode(_component_up_cell_group, null, {
                  default: withCtx(() => [
                    createVNode(_component_up_cell, {
                      title: "单元格",
                      value: "内容"
                    }),
                    createVNode(_component_up_cell, {
                      icon: "setting-fill",
                      title: "个人设置"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" LoadingIcon 加载动画 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-loading-icon "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_loading_icon, { mode: "circle" }),
                  createElementVNode("view", { class: "w-20px" }),
                  createVNode(_component_up_loading_icon, { mode: "spinner" })
                ])
              ]),
              createVNode(_component_up_divider, { text: "基础组件结束" }),
              createVNode($setup["DemoForm"]),
              createCommentVNode(" ==================== 数据组件 ==================== "),
              createElementVNode("text", { class: "section-title" }, " 数据组件 "),
              createCommentVNode(" CountDown 倒计时 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-count-down "),
                createVNode(_component_up_count_down, {
                  time: 30 * 60 * 1e3,
                  format: "HH:mm:ss"
                })
              ]),
              createCommentVNode(" CountTo 数字滚动 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-count-to "),
                createElementVNode("view", { class: "demo-row-start" }, [
                  createVNode(_component_up_count_to, {
                    "start-val": 0,
                    "end-val": 9999,
                    duration: 3e3
                  })
                ])
              ]),
              createCommentVNode(" LineProgress 线形进度条 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-line-progress "),
                createElementVNode("view", { class: "flex-col gap-y-10px" }, [
                  createElementVNode("view", { class: "flex-row items-center gap-x-10px" }, [
                    createElementVNode(
                      "text",
                      { class: "text-12px text-__909399_ w-40px text-right" },
                      toDisplayString($setup.lineProgressValue1) + "%",
                      1
                      /* TEXT */
                    ),
                    createVNode(_component_up_line_progress, {
                      percentage: $setup.lineProgressValue1,
                      "show-text": true,
                      "active-color": "#2979ff"
                    }, null, 8, ["percentage"])
                  ]),
                  createElementVNode("view", { class: "flex-row items-center gap-x-10px" }, [
                    createElementVNode(
                      "text",
                      { class: "text-12px text-__909399_ w-40px text-right" },
                      toDisplayString($setup.lineProgressValue2) + "%",
                      1
                      /* TEXT */
                    ),
                    createVNode(_component_up_line_progress, {
                      percentage: $setup.lineProgressValue2,
                      "show-text": true,
                      "active-color": "#19be6b"
                    }, null, 8, ["percentage"])
                  ])
                ])
              ]),
              createCommentVNode(" Empty 空状态 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-empty "),
                createVNode(_component_up_empty, {
                  mode: "search",
                  text: "暂无搜索结果"
                })
              ]),
              createVNode(_component_up_divider, { text: "数据组件结束" }),
              createVNode($setup["DemoFeedback"]),
              createCommentVNode(" ==================== 布局组件 ==================== "),
              createElementVNode("text", { class: "section-title" }, " 布局组件 "),
              createCommentVNode(" Layout 栅格布局 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-row / up-col "),
                createVNode(_component_up_row, {
                  justify: "space-between",
                  gutter: "10"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_up_col, { span: "2" }, {
                      default: withCtx(() => [
                        createElementVNode("view", { class: "demo-layout bg-purple-light" })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_col, { span: "4" }, {
                      default: withCtx(() => [
                        createElementVNode("view", { class: "demo-layout bg-purple" })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_col, { span: "6" }, {
                      default: withCtx(() => [
                        createElementVNode("view", { class: "demo-layout bg-purple-dark" })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" Grid 宫格 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-grid "),
                createVNode(_component_up_grid, {
                  col: 4,
                  border: true
                }, {
                  default: withCtx(() => [
                    createVNode(_component_up_grid_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_icon, {
                          name: "home",
                          size: 26
                        }),
                        createElementVNode("text", { class: "grid-text" }, "首页")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_up_grid_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_up_icon, {
                          name: "search",
                          size: 26
                        }),
                        createElementVNode("text", { class: "grid-text" }, "搜索")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createCommentVNode(" Skeleton 骨架屏 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-skeleton "),
                createVNode(_component_up_skeleton, {
                  loading: $setup.skeletonLoading,
                  animate: true,
                  rows: 3,
                  title: true,
                  avatar: true
                }, null, 8, ["loading"]),
                createElementVNode("view", { class: "h-10px" }),
                createVNode(_component_up_button, {
                  type: "primary",
                  text: "切换骨架屏状态",
                  size: "mini",
                  onClick: $setup.toggleSkeleton
                })
              ]),
              createCommentVNode(" Divider 分割线 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-divider "),
                createVNode(_component_up_divider, { text: "分割线" }),
                createVNode(_component_up_divider, {
                  text: "虚线",
                  dashed: true
                })
              ]),
              createVNode(_component_up_divider, { text: "布局组件结束" }),
              createCommentVNode(" BackTop 回到顶部 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, " up-back-top "),
                createElementVNode("text", { class: "text-12px text-__909399_ mb-8px" }, " 滚动页面，右下角将出现回到顶部按钮 ")
              ]),
              createCommentVNode(" 底部安全间距 "),
              createElementVNode("view", { class: "h-40px" }),
              createCommentVNode(" NoNetwork 无网络组件 "),
              createVNode(_component_up_no_network)
            ], 44, ["scroll-top"]),
            createCommentVNode(" BackTop 回到顶部 "),
            createVNode(_component_up_back_top, {
              "scroll-top": $setup.scrollTop,
              mode: "circle",
              icon: "arrow-upward",
              text: "顶部",
              top: 200,
              duration: 300,
              bottom: 100,
              right: 20,
              "z-index": 99,
              "icon-style": { fontSize: "20px", color: "#ffffff" },
              "custom-style": { backgroundColor: "#2979ff" },
              onClick: $setup.onBackTopClick
            }, null, 8, ["scroll-top"])
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
const uviewUltra = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/uview-ultra.uvue"]]);
export {
  uviewUltra as default
};
//# sourceMappingURL=uview-ultra.js.map
