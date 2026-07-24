const { defineComponent, useSlots, ref, computed, watch, onMounted, nextTick, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, createElementVNode, Fragment, createBlock, withModifiers } = globalThis.Vue
import { z as zPagingRefresher } from "./components/z-paging-refresher.js";
import { z as zPagingLoadMore } from "./components/z-paging-load-more.js";
import { z as zPagingXEmpty } from "../z-paging-x-empty/z-paging-x-empty.js";
import { E as Enum } from "./enums/index.js";
import { g as gc } from "./config/index.js";
import { f as base64BackToTop } from "./static/index.js";
import { u as updateRefesrherTime, a as getTime } from "./utils/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "z-paging-x",
  props: {
    /**
     * @description 自定义初始的pageNo，默认为1
     * @default 1
     */
    defaultPageNo: {
      type: Number,
      default: gc("default-page-no", 1)
    },
    /**
     * @description 自定义初始的pageSize，默认为10
     * @default 10
     */
    defaultPageSize: {
      type: Number,
      default: gc("default-page-size", 10)
    },
    /**
     * @description 设置组件的style
     */
    pagingStyle: {
      type: Object,
      default: gc("paging-style", {})
    },
    /**
     * @description 是否开启自定义下拉刷新
     * @default true
     */
    refresherEnabled: {
      type: Boolean,
      default: gc("refresher-enabled", true)
    },
    /**
     * @description 设置自定义下拉刷新阈值，默认等于refresher高度，单位为px
     * @default 0
     */
    refresherThreshold: {
      type: Number,
      default: gc("refresher-threshold", 0)
    },
    /**
     * @description 自定义下拉刷新默认状态下的文字
     * @default 继续下拉刷新
     */
    refresherDefaultText: {
      type: String,
      default: gc("refresher-default-text", "继续下拉刷新")
    },
    /**
     * @description 自定义下拉刷新松手立即刷新状态下的文字
     * @default 松开立即刷新
     */
    refresherPullingText: {
      type: String,
      default: gc("refresher-pulling-text", "松开立即刷新")
    },
    /**
     * @description 自定义下拉刷新刷新中状态下的文字
     * @default 正在刷新...
     */
    refresherRefreshingText: {
      type: String,
      default: gc("refresher-refreshing-text", "正在刷新...")
    },
    /**
     * @description 自定义下拉刷新刷新结束状态下的文字
     * @default 刷新完成
     */
    refresherCompleteText: {
      type: String,
      default: gc("refresher-complete-text", "刷新完成")
    },
    /**
     * @description 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒
     * @default 0
     */
    refresherCompleteDelay: {
      type: Number,
      default: gc("refresher-complete-delay", 0)
    },
    /**
     * @description 自定义下拉刷新结束回弹动画时间，单位为毫秒
     * @default 300
     */
    refresherCompleteDuration: {
      type: Number,
      default: gc("refresher-complete-duration", 300)
    },
    /**
     * @description 下拉刷新区域背景颜色
     * @default #FFF
     */
    refresherBackground: {
      type: String,
      default: gc("refresher-background", "#FFF")
    },
    /**
     * @description 是否使用自定义的下拉刷新，设置为false即代表使用uni-app x自带的下拉刷新
     * @default true
     */
    useCustomRefresher: {
      type: Boolean,
      default: gc("use-custom-refresher", true)
    },
    /**
     * @description 列表刷新时自动显示下拉刷新view
     * @default false
     */
    showRefresherWhenReload: {
      type: Boolean,
      default: gc("show-refresher-when-reload", false)
    },
    /**
     * @description 是否显示最后更新时间
     * @default false
     */
    showRefresherUpdateTime: {
      type: Boolean,
      default: gc("show-refresher-update-time", false)
    },
    /**
     * @description 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
     * @default default
     */
    refresherUpdateTimeKey: {
      type: String,
      default: gc("refresher-update-time-key", "default")
    },
    /**
     * @description 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)
     * @default true
     */
    loadMoreEnabled: {
      type: Boolean,
      default: gc("load-more-enabled", true)
    },
    /**
     * @description 滑动到底部"默认"文字
     * @default 点击加载更多
     */
    loadMoreDefaultText: {
      type: String,
      default: gc("load-more-default-text", "点击加载更多")
    },
    /**
     * @description 滑动到底部"加载中"文字
     * @default 正在加载...
     */
    loadMoreLoadingText: {
      type: String,
      default: gc("load-more-loading-text", "正在加载...")
    },
    /**
     * @description 滑动到底部"没有更多"文字
     * @default 没有更多了
     */
    loadMoreNoMoreText: {
      type: String,
      default: gc("load-more-no-more-text", "没有更多了")
    },
    /**
     * @description 滑动到底部"加载失败"文字
     * @default 加载失败，点击重新加载
     */
    loadMoreFailText: {
      type: String,
      default: gc("load-more-fail-text", "加载失败，点击重新加载")
    },
    /**
     * @description mounted后自动调用reload方法(mounted后自动调用接口)
     * @default true
     */
    auto: {
      type: Boolean,
      default: gc("auto", true)
    },
    /**
     * @description reload时自动滚动到顶部
     * @default true
     */
    scrollToTopWhenReload: {
      type: Boolean,
      default: gc("scrollToTopWhenReload", true)
    },
    /**
     * @description reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的
     * @default true
     */
    cleanListWhenReload: {
      type: Boolean,
      default: gc("cleanListWhenReload", true)
    },
    /**
     * @description 空数据描述文字
     * @default 没有数据哦~
     */
    emptyText: {
      type: String,
      default: gc("empty-text", "没有数据哦~")
    },
    /**
     * @description 空数据加载失败文字
     * @default 很抱歉，加载失败
     */
    emptyErrorText: {
      type: String,
      default: gc("empty-error-text", "很抱歉，加载失败")
    },
    /**
     * @description 空数据图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyImg: {
      type: String,
      default: gc("empty-img", "")
    },
    /**
     * @description 空数据加载失败图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyErrorImg: {
      type: String,
      default: gc("empty-error-img", "")
    },
    /**
     * @description 自动显示点击返回顶部按钮
     * @default false
     */
    showBackToTop: {
      type: Boolean,
      default: gc("show-back-to-top", false)
    },
    /**
     * @description 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px
     * @default 300
     */
    backToTopThreshold: {
      type: Number,
      default: gc("back-to-top-threshold", 300)
    },
    /**
     * @description 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
     * @default ''
     */
    backToTopImg: {
      type: String,
      default: gc("back-to-top-img", "")
    },
    /**
     * @description 点击返回顶部按钮的style
     * @default {}
     */
    backToTopStyle: {
      type: Object,
      default: gc("back-to-top-style", {})
    },
    /**
     * @description 在设置滚动条位置时使用动画过渡
     * @default false
     */
    scrollWithAnimation: {
      type: Boolean,
      default: gc("scroll-with-animation", false)
    },
    /**
     * @description list的类型：list-view或scroll-view
     * @default list-view
     */
    listIs: {
      type: String,
      default: gc("list-is", "scroll-view")
    },
    /**
     * @description list的id
     * @default ''
     */
    listId: {
      type: String,
      default: gc("list-id", "")
    },
    /**
     * @description 控制是否出现滚动条
     * @default true
     */
    showScrollbar: {
      type: Boolean,
      default: gc("show-scrollbar", true)
    },
    /**
     * @description 控制是否回弹效果
     * @default true
     */
    rebound: {
      type: Boolean,
      default: gc("rebound", true)
    },
    /**
     * @description (子元素中使用)子元素是否开启嵌套滚动，将滚动事件与父元素协商处理
     * @default true
     */
    customNestedScroll: {
      type: Boolean,
      default: gc("custom-nested-scroll", true)
    },
    /**
     * @description (仅listIs = scroll-view有效，父元素中使用)是否与子元素开启滚动协商
     * @default true
     */
    startNestedScroll: {
      type: Boolean,
      default: gc("start-nested-scroll", true)
    },
    /**
     * @description (仅listIs = scroll-view有效)嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的nestedprescroll事件，嵌套子元素需要设置custom-nested-scroll = true
     * @default ''
     */
    nestedScrollChild: {
      type: String,
      default: gc("nested-scroll-child", "")
    },
    /**
     * @description 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图
     * @default false
     */
    layoutOnly: {
      type: Boolean,
      default: gc("layout-only", false)
    }
  },
  emits: ["update:modelValue", "refresherStatusChange", "loadMoreStatusChange", "query", "nestedprescroll", "refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort", "onRefresh", "Refresh", "scrolltolower", "scrolltoupper", "scroll", "backToTopClick"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const zPagingX = ref(null);
    const zpxList = ref(null);
    const zpxListRefresher = ref(null);
    const refresherStatus = ref(Enum.Refresher.Default);
    const refresherTriggered = ref(false);
    const refresherNodeHeight = ref(0);
    const refresherTimeTextTimestamp = ref(0);
    const refresherCompleteDelayTimer = ref(null);
    const refresherEndAnimateTimer = ref(null);
    const loadMoreStatus = ref(Enum.More.Default);
    const queryFrom = ref("");
    const isLoadFailed = ref(false);
    const customNoMore = ref(-1);
    const forceHideLoadMore = ref(false);
    const contentWidth = ref(0);
    const isLoading = ref(true);
    const scrollTop = ref(0);
    const oldScrollTop = ref(0);
    const pageNo = ref(1);
    const totalData = ref([]);
    const base64BackToTopImg = ref(base64BackToTop);
    const backToTopClass = ref("zpx-back-to-top zpx-back-to-top-hide");
    const lastBackToTopShowTime = ref(0);
    const showBackToTopClass = ref(false);
    const privateScrollWithAnimation = ref(-1);
    const isFirstPage = computed(() => {
      return pageNo.value === props.defaultPageNo;
    });
    const finalRefresherThreshold = computed(() => {
      if (props.layoutOnly) {
        return 0;
      }
      return props.refresherThreshold > 0 ? props.refresherThreshold : refresherNodeHeight.value > 0 ? refresherNodeHeight.value : 40;
    });
    const showEmpty = computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return totalData.value.length == 0 && !isLoading.value;
    });
    const showLoading = computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return slots["loading"] != null && isLoading.value && totalData.value.length == 0;
    });
    const showLoadMore = computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return props.loadMoreEnabled && !forceHideLoadMore.value && (!isLoading.value || totalData.value.length > 0) && !showEmpty.value;
    });
    const finalScrollWithAnimation = computed(() => {
      if (privateScrollWithAnimation.value != -1) {
        const scrollWithAnimation = privateScrollWithAnimation.value == 1;
        privateScrollWithAnimation.value = -1;
        return scrollWithAnimation;
      }
      return props.scrollWithAnimation;
    });
    const listItemIs = computed(() => {
      return props.listIs === "list-view" ? "list-item" : "view";
    });
    const isOnly = computed(() => {
      return props.layoutOnly;
    });
    watch(totalData, (newVal) => {
      emit("update:modelValue", newVal);
    });
    watch(refresherStatus, (newVal) => {
      emit("refresherStatusChange", newVal);
    });
    watch(loadMoreStatus, (newVal) => {
      emit("loadMoreStatusChange", newVal);
    });
    const _checkShouldShowBackToTop = (scrollTopValue) => {
      if (!props.showBackToTop) {
        showBackToTopClass.value = false;
        return null;
      }
      if (scrollTopValue > props.backToTopThreshold) {
        if (!showBackToTopClass.value) {
          showBackToTopClass.value = true;
          lastBackToTopShowTime.value = (/* @__PURE__ */ new Date()).getTime();
          setTimeout(() => {
            backToTopClass.value = "zpx-back-to-top zpx-back-to-top-show";
          }, 300);
        }
      } else {
        if (showBackToTopClass.value) {
          backToTopClass.value = "zpx-back-to-top zpx-back-to-top-hide";
          setTimeout(() => {
            showBackToTopClass.value = false;
          }, (/* @__PURE__ */ new Date()).getTime() - lastBackToTopShowTime.value < 500 ? 0 : 300);
        }
      }
    };
    const scrollToY = (y, animate) => {
      privateScrollWithAnimation.value = animate ? 1 : 0;
      scrollTop.value = oldScrollTop.value;
      nextTick(() => {
        scrollTop.value = y;
      });
    };
    const scrollToTop = (animate) => {
      scrollToY(0, animate);
      _checkShouldShowBackToTop(0);
    };
    const scrollToBottom = (animate) => {
      scrollToY(99999999, animate);
    };
    const _emitQuery = (pageNoValue, pageSizeValue) => {
      isLoading.value = true;
      emit("query", pageNoValue, pageSizeValue, queryFrom.value);
    };
    const _cleanRefresherCompleteDelayTimer = () => {
      if (refresherCompleteDelayTimer.value !== null) {
        clearTimeout(refresherCompleteDelayTimer.value);
        refresherCompleteDelayTimer.value = null;
      }
    };
    const _cleanRefresherEndAnimateTimer = () => {
      if (refresherEndAnimateTimer.value !== null) {
        clearTimeout(refresherEndAnimateTimer.value);
        refresherEndAnimateTimer.value = null;
      }
    };
    const reload = () => {
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      pageNo.value = props.defaultPageNo;
      forceHideLoadMore.value = true;
      if (props.showRefresherWhenReload) {
        nextTick(() => {
          refresherTriggered.value = true;
        });
        return null;
      }
      if (props.cleanListWhenReload) {
        totalData.value = [];
      }
      if (props.scrollToTopWhenReload) {
        scrollToTop(false);
      }
      queryFrom.value = Enum.QueryFrom.Reload;
      _emitQuery(pageNo.value, props.defaultPageSize);
    };
    const endRefresh = () => {
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      refresherTriggered.value = false;
      refresherStatus.value = Enum.Refresher.Default;
      isLoading.value = false;
    };
    const complete = (data = null) => {
      const finalData = data === null ? [] : data;
      isLoadFailed.value = false;
      const needCompleteDelay = props.refresherCompleteDelay > 0 && (queryFrom.value === Enum.QueryFrom.UserPullDown || props.showRefresherWhenReload);
      if (needCompleteDelay) {
        refresherStatus.value = Enum.Refresher.Complete;
        _cleanRefresherCompleteDelayTimer();
        _cleanRefresherEndAnimateTimer();
        refresherCompleteDelayTimer.value = setTimeout(() => {
          refresherTriggered.value = false;
          refresherEndAnimateTimer.value = setTimeout(() => {
            refresherStatus.value = Enum.Refresher.Default;
            isLoading.value = false;
          }, props.refresherCompleteDuration);
        }, props.refresherCompleteDelay);
      } else {
        endRefresh();
      }
      const currentData = [...finalData];
      if (customNoMore.value != -1) {
        if (customNoMore.value == 1 || customNoMore.value != 0 && finalData.length == 0) {
          loadMoreStatus.value = Enum.More.NoMore;
        }
      } else {
        if (finalData.length == 0 || finalData.length > 0 && finalData.length < props.defaultPageSize) {
          loadMoreStatus.value = Enum.More.NoMore;
        } else {
          loadMoreStatus.value = Enum.More.Default;
        }
      }
      if (isFirstPage.value) {
        totalData.value = currentData;
        if (props.showRefresherUpdateTime) {
          updateRefesrherTime(props.refresherUpdateTimeKey);
          refresherTimeTextTimestamp.value = getTime();
        }
      } else {
        totalData.value = totalData.value.concat(currentData);
      }
      nextTick(() => {
        setTimeout(() => {
          forceHideLoadMore.value = false;
        }, 100);
      });
    };
    const completeByNoMore = (data = null, nomore) => {
      customNoMore.value = nomore == true ? 1 : 0;
      complete(data);
    };
    const completeByTotal = (data = null, total) => {
      const finalData = data === null ? [] : data;
      nextTick(() => {
        let nomore = false;
        const realTotalDataCount = isFirstPage.value ? 0 : totalData.value.length;
        const dataLength = finalData.length;
        let exceedCount = realTotalDataCount + dataLength - total;
        if (exceedCount >= 0) {
          nomore = true;
          exceedCount = props.defaultPageSize - exceedCount;
          if (exceedCount > 0 && exceedCount < finalData.length) {
            data = finalData.splice(0, exceedCount);
          }
        }
        completeByNoMore(data, nomore);
      });
    };
    const completeByError = () => {
      isLoadFailed.value = true;
      endRefresh();
    };
    const refresh = () => {
      if (totalData.value.length == 0) {
        reload();
        return null;
      }
      const targetTotal = pageNo.value * props.defaultPageSize;
      isLoading.value = true;
      pageNo.value = props.defaultPageNo;
      queryFrom.value = Enum.QueryFrom.Refresh;
      _emitQuery(props.defaultPageNo, targetTotal);
    };
    const _onStartNestedScroll = (_) => {
      return true;
    };
    const _onNestedPreScroll = (event) => {
      if (zpxList.value != null) {
        emit("nestedprescroll", event, zpxList.value);
      }
    };
    const _onRefresherpulling = (e) => {
      emit("refresherpulling", e.detail.dy);
      if (!isLoading.value) {
        refresherStatus.value = e.detail.dy < finalRefresherThreshold.value ? Enum.Refresher.Default : Enum.Refresher.ReleaseToRefresh;
      }
    };
    const _handleRefresh = () => {
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      refresherStatus.value = Enum.Refresher.Loading;
      refresherTriggered.value = true;
      pageNo.value = props.defaultPageNo;
      queryFrom.value = Enum.QueryFrom.UserPullDown;
      _emitQuery(pageNo.value, props.defaultPageSize);
    };
    const _onRefresherrefresh = (e) => {
      emit("refresherrefresh", e);
      emit("onRefresh");
      emit("Refresh");
      _handleRefresh();
    };
    const _onRefresherrestore = (e) => {
      emit("refresherrestore", e);
      if (refresherStatus.value !== Enum.Refresher.Complete) {
        refresherStatus.value = Enum.Refresher.Default;
      }
    };
    const _onRefresherabort = (e) => {
      emit("refresherabort", e);
    };
    const _handleLoadMore = () => {
      if (!props.loadMoreEnabled || isLoading.value || loadMoreStatus.value === Enum.More.NoMore)
        return null;
      loadMoreStatus.value = Enum.More.Loading;
      pageNo.value++;
      queryFrom.value = Enum.QueryFrom.LoadMore;
      _emitQuery(pageNo.value, props.defaultPageSize);
    };
    const _onScrolltolower = (e) => {
      _handleLoadMore();
      emit("scrolltolower", e);
    };
    const _onScrolltoupper = (e) => {
      emit("scrolltoupper", e);
    };
    const _onScroll = (e) => {
      emit("scroll", e);
      oldScrollTop.value = e.detail.scrollTop;
      _checkShouldShowBackToTop(oldScrollTop.value);
    };
    const _handleToTop = () => {
      scrollToTop(true);
    };
    const _onBackToTopClick = () => {
      let callbacked = false;
      emit("backToTopClick", (toTop) => {
        if (toTop != false) {
          _handleToTop();
        }
        callbacked = true;
      });
      nextTick(() => {
        if (!callbacked) {
          _handleToTop();
        }
      });
    };
    onMounted(() => {
      pageNo.value = props.defaultPageNo;
      if (!props.layoutOnly && props.auto) {
        reload();
      }
      if (props.layoutOnly) {
        endRefresh();
      }
      nextTick(() => {
        if (props.refresherEnabled) {
          const refresherEle = zpxListRefresher.value;
          if (refresherEle !== null) {
            refresherEle.getBoundingClientRectAsync().then((rect) => {
              refresherNodeHeight.value = rect.height;
            });
          }
        }
        const zPagingXEle = zPagingX.value;
        if (zPagingXEle !== null) {
          zPagingXEle.getBoundingClientRectAsync().then((rect) => {
            contentWidth.value = rect.width;
          });
        }
      });
    });
    __expose({
      reload,
      refresh,
      complete,
      completeByTotal,
      completeByNoMore,
      completeByError,
      endRefresh,
      scrollToTop,
      scrollToBottom,
      scrollToY
    });
    const __returned__ = { props, emit, slots, zPagingX, zpxList, zpxListRefresher, refresherStatus, refresherTriggered, refresherNodeHeight, refresherTimeTextTimestamp, refresherCompleteDelayTimer, refresherEndAnimateTimer, loadMoreStatus, queryFrom, isLoadFailed, customNoMore, forceHideLoadMore, contentWidth, isLoading, scrollTop, oldScrollTop, pageNo, totalData, base64BackToTopImg, backToTopClass, lastBackToTopShowTime, showBackToTopClass, privateScrollWithAnimation, isFirstPage, finalRefresherThreshold, showEmpty, showLoading, showLoadMore, finalScrollWithAnimation, listItemIs, isOnly, _checkShouldShowBackToTop, scrollToY, scrollToTop, scrollToBottom, _emitQuery, _cleanRefresherCompleteDelayTimer, _cleanRefresherEndAnimateTimer, reload, endRefresh, complete, completeByNoMore, completeByTotal, completeByError, refresh, _onStartNestedScroll, _onNestedPreScroll, _onRefresherpulling, _handleRefresh, _onRefresherrefresh, _onRefresherrestore, _onRefresherabort, _handleLoadMore, _onScrolltolower, _onScrolltoupper, _onScroll, _handleToTop, _onBackToTopClick, get zPagingRefresher() {
      return zPagingRefresher;
    }, get zPagingLoadMore() {
      return zPagingLoadMore;
    }, get zPagingXEmpty() {
      return zPagingXEmpty;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "zpx-content": { "": { "height": "100%" } }, "zpx-flex1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "zpx-back-to-top": { "": { "width": "76rpx", "height": "76rpx", "zIndex": 999, "position": "absolute", "bottom": "260rpx", "right": "25rpx", "transitionDuration": ".3s", "transitionProperty": "opacity" } }, "zpx-back-to-top-show": { "": { "opacity": 1 } }, "zpx-back-to-top-hide": { "": { "opacity": 0 } }, "zpx-back-to-top-img": { "": { "width": "100%", "height": "100%", "zIndex": 999 } }, "@TRANSITION": { "zpx-back-to-top": { "duration": ".3s", "property": "opacity" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      ref: "zPagingX",
      class: normalizeClass({ "zpx-content": true }),
      style: normalizeStyle([$props.pagingStyle])
    },
    [
      createCommentVNode(" 顶部固定的slot "),
      renderSlot(_ctx.$slots, "top"),
      createCommentVNode(" 因使用component :is的时候设置的list-view在web端无法正常渲染，且不支持微信小程序，因此目前只能先写死list-view和scroll-view节点，通过v-if切换 "),
      $props.listIs === "list-view" ? (openBlock(), createElementBlock("list-view", {
        key: 0,
        ref: "zpxList",
        class: "zpx-list-view zpx-flex1",
        id: $props.listId,
        "refresher-enabled": $props.refresherEnabled,
        "refresher-threshold": $setup.finalRefresherThreshold,
        "refresher-triggered": $setup.refresherTriggered,
        "refresher-default-style": $props.useCustomRefresher ? "none" : "black",
        "custom-nested-scroll": $props.customNestedScroll,
        "refresher-background": $props.refresherBackground,
        rebound: $props.rebound,
        "scroll-top": $setup.scrollTop,
        "show-scrollbar": $props.showScrollbar,
        "scroll-with-animation": $setup.finalScrollWithAnimation,
        onRefresherpulling: $setup._onRefresherpulling,
        onRefresherrefresh: $setup._onRefresherrefresh,
        onRefresherrestore: $setup._onRefresherrestore,
        onRefresherabort: $setup._onRefresherabort,
        onScrolltolower: $setup._onScrolltolower,
        onScrolltoupper: $setup._onScrolltoupper,
        onScroll: $setup._onScroll,
        onStartnestedscroll: $setup._onStartNestedScroll,
        onNestedprescroll: $setup._onNestedPreScroll
      }, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("list-item", null, [
          $setup.showLoadMore ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              _ctx.$slots["loadMore"] ? renderSlot(_ctx.$slots, "loadMore", {
                key: 0,
                loadMoreStatus: $setup.loadMoreStatus
              }) : (openBlock(), createBlock($setup["zPagingLoadMore"], {
                key: 1,
                status: $setup.loadMoreStatus,
                "default-text": $props.loadMoreDefaultText,
                "loading-text": $props.loadMoreLoadingText,
                "no-more-text": $props.loadMoreNoMoreText,
                "fail-text": $props.loadMoreFailText,
                onClickMore: $setup._handleLoadMore
              }, null, 8, ["status", "default-text", "loading-text", "no-more-text", "fail-text"]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ]),
        createCommentVNode(" 这里微信小程序不支持component，但是如果直接使用list-item在web中无法显示下拉刷新，因此需要分开处理 "),
        createElementVNode("list-item", { slot: "refresher" }, [
          createElementVNode(
            "view",
            {
              ref: "zpxListRefresher",
              class: "zpx-list-refresher",
              style: normalizeStyle({ width: $setup.contentWidth + "px" })
            },
            [
              _ctx.$slots["refresher"] ? renderSlot(_ctx.$slots, "refresher", {
                key: 0,
                refresherStatus: $setup.refresherStatus
              }) : (openBlock(), createBlock($setup["zPagingRefresher"], {
                key: 1,
                ref: "commonRefresher",
                "default-text": $props.refresherDefaultText,
                "pulling-text": $props.refresherPullingText,
                "refreshing-text": $props.refresherRefreshingText,
                "complete-text": $props.refresherCompleteText,
                status: $setup.refresherStatus,
                "show-update-time": $props.showRefresherUpdateTime,
                "update-time-key": $props.refresherUpdateTimeKey,
                "time-text-timestamp": $setup.refresherTimeTextTimestamp
              }, null, 8, ["default-text", "pulling-text", "refreshing-text", "complete-text", "status", "show-update-time", "update-time-key", "time-text-timestamp"]))
            ],
            4
            /* STYLE */
          )
        ]),
        createElementVNode(
          "list-item",
          {
            class: normalizeClass($setup.showEmpty ? "zpx-flex1" : "")
          },
          [
            $setup.showEmpty ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                _ctx.$slots["empty"] ? renderSlot(_ctx.$slots, "empty", {
                  key: 0,
                  isLoadFailed: $setup.isLoadFailed
                }) : (openBlock(), createBlock($setup["zPagingXEmpty"], {
                  key: 1,
                  "empty-text": !$setup.isLoadFailed ? $props.emptyText : $props.emptyErrorText,
                  "empty-img": !$setup.isLoadFailed ? $props.emptyImg : $props.emptyErrorImg,
                  "is-load-failed": $setup.isLoadFailed,
                  "show-empty-reload": $setup.isLoadFailed,
                  onReload: $setup.reload
                }, null, 8, ["empty-text", "empty-img", "is-load-failed", "show-empty-reload"]))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            $setup.showLoading ? renderSlot(_ctx.$slots, "loading", { key: 1 }) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ], 40, ["id", "refresher-enabled", "refresher-threshold", "refresher-triggered", "refresher-default-style", "custom-nested-scroll", "refresher-background", "rebound", "scroll-top", "show-scrollbar", "scroll-with-animation"])) : (openBlock(), createElementBlock("scroll-view", {
        key: 1,
        ref: "zpxList",
        class: "zpx-list-view zpx-flex1",
        id: $props.listId,
        "refresher-enabled": $props.refresherEnabled,
        "refresher-threshold": $setup.finalRefresherThreshold,
        "refresher-triggered": $setup.refresherTriggered,
        "refresher-default-style": $props.useCustomRefresher ? "none" : "black",
        "custom-nested-scroll": $props.customNestedScroll,
        "refresher-background": $props.refresherBackground,
        rebound: $props.rebound,
        "scroll-top": $setup.scrollTop,
        "show-scrollbar": $props.showScrollbar,
        "scroll-with-animation": $setup.finalScrollWithAnimation,
        onRefresherpulling: $setup._onRefresherpulling,
        onRefresherrefresh: $setup._onRefresherrefresh,
        onRefresherrestore: $setup._onRefresherrestore,
        onRefresherabort: $setup._onRefresherabort,
        onScrolltolower: $setup._onScrolltolower,
        onScrolltoupper: $setup._onScrolltoupper,
        onScroll: $setup._onScroll,
        onStartnestedscroll: $setup._onStartNestedScroll,
        onNestedprescroll: $setup._onNestedPreScroll
      }, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("view", null, [
          $setup.showLoadMore ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              _ctx.$slots["loadMore"] ? renderSlot(_ctx.$slots, "loadMore", {
                key: 0,
                loadMoreStatus: $setup.loadMoreStatus
              }) : (openBlock(), createBlock($setup["zPagingLoadMore"], {
                key: 1,
                status: $setup.loadMoreStatus,
                "default-text": $props.loadMoreDefaultText,
                "loading-text": $props.loadMoreLoadingText,
                "no-more-text": $props.loadMoreNoMoreText,
                "fail-text": $props.loadMoreFailText,
                onClickMore: $setup._handleLoadMore
              }, null, 8, ["status", "default-text", "loading-text", "no-more-text", "fail-text"]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ]),
        createCommentVNode(" 这里微信小程序不支持component，但是如果直接使用view在web中无法显示下拉刷新，因此需要分开处理 "),
        createElementVNode("view", { slot: "refresher" }, [
          createElementVNode(
            "view",
            {
              ref: "zpxListRefresher",
              class: "zpx-list-refresher",
              style: normalizeStyle({ width: $setup.contentWidth + "px" })
            },
            [
              _ctx.$slots["refresher"] ? renderSlot(_ctx.$slots, "refresher", {
                key: 0,
                refresherStatus: $setup.refresherStatus
              }) : (openBlock(), createBlock($setup["zPagingRefresher"], {
                key: 1,
                ref: "commonRefresher",
                "default-text": $props.refresherDefaultText,
                "pulling-text": $props.refresherPullingText,
                "refreshing-text": $props.refresherRefreshingText,
                "complete-text": $props.refresherCompleteText,
                status: $setup.refresherStatus,
                "show-update-time": $props.showRefresherUpdateTime,
                "update-time-key": $props.refresherUpdateTimeKey,
                "time-text-timestamp": $setup.refresherTimeTextTimestamp
              }, null, 8, ["default-text", "pulling-text", "refreshing-text", "complete-text", "status", "show-update-time", "update-time-key", "time-text-timestamp"]))
            ],
            4
            /* STYLE */
          )
        ]),
        createElementVNode(
          "view",
          {
            class: normalizeClass($setup.showEmpty ? "zpx-flex1" : "")
          },
          [
            $setup.showEmpty ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                _ctx.$slots["empty"] ? renderSlot(_ctx.$slots, "empty", {
                  key: 0,
                  isLoadFailed: $setup.isLoadFailed
                }) : (openBlock(), createBlock($setup["zPagingXEmpty"], {
                  key: 1,
                  "empty-text": !$setup.isLoadFailed ? $props.emptyText : $props.emptyErrorText,
                  "empty-img": !$setup.isLoadFailed ? $props.emptyImg : $props.emptyErrorImg,
                  "is-load-failed": $setup.isLoadFailed,
                  "show-empty-reload": $setup.isLoadFailed,
                  onReload: $setup.reload
                }, null, 8, ["empty-text", "empty-img", "is-load-failed", "show-empty-reload"]))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            $setup.showLoading ? renderSlot(_ctx.$slots, "loading", { key: 1 }) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ], 40, ["id", "refresher-enabled", "refresher-threshold", "refresher-triggered", "refresher-default-style", "custom-nested-scroll", "refresher-background", "rebound", "scroll-top", "show-scrollbar", "scroll-with-animation"])),
      createCommentVNode(" 底部固定的slot "),
      renderSlot(_ctx.$slots, "bottom"),
      createCommentVNode(" 点击返回顶部view "),
      $setup.showBackToTopClass ? (openBlock(), createElementBlock(
        "view",
        {
          key: 2,
          class: normalizeClass($setup.backToTopClass),
          style: normalizeStyle([$props.backToTopStyle]),
          onClick: withModifiers($setup._onBackToTopClick, ["stop"])
        },
        [
          _ctx.$slots["backToTop"] ? renderSlot(_ctx.$slots, "backToTop", { key: 0 }) : (openBlock(), createElementBlock("image", {
            key: 1,
            class: "zpx-back-to-top-img",
            src: $props.backToTopImg.length > 0 ? $props.backToTopImg : $setup.base64BackToTopImg
          }, null, 8, ["src"]))
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=z-paging-x.js.map
