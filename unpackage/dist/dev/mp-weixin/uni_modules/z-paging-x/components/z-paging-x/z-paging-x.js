"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_zPagingX_components_zPagingX_enums_index = require("./enums/index.js");
const uni_modules_zPagingX_components_zPagingX_config_index = require("./config/index.js");
const uni_modules_zPagingX_components_zPagingX_static_index = require("./static/index.js");
const uni_modules_zPagingX_components_zPagingX_utils_index = require("./utils/index.js");
if (!Math) {
  (common_vendor.unref(zPagingLoadMore) + common_vendor.unref(zPagingRefresher) + common_vendor.unref(zPagingXEmpty))();
}
const zPagingRefresher = () => "./components/z-paging-refresher.js";
const zPagingLoadMore = () => "./components/z-paging-load-more.js";
const zPagingXEmpty = () => "../z-paging-x-empty/z-paging-x-empty.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "z-paging-x",
  props: {
    /**
     * @description 自定义初始的pageNo，默认为1
     * @default 1
     */
    defaultPageNo: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("default-page-no", 1)
    },
    /**
     * @description 自定义初始的pageSize，默认为10
     * @default 10
     */
    defaultPageSize: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("default-page-size", 10)
    },
    /**
     * @description 设置组件的style
     */
    pagingStyle: {
      type: Object,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("paging-style", {})
    },
    /**
     * @description 是否开启自定义下拉刷新
     * @default true
     */
    refresherEnabled: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-enabled", true)
    },
    /**
     * @description 设置自定义下拉刷新阈值，默认等于refresher高度，单位为px
     * @default 0
     */
    refresherThreshold: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-threshold", 0)
    },
    /**
     * @description 自定义下拉刷新默认状态下的文字
     * @default 继续下拉刷新
     */
    refresherDefaultText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-default-text", "继续下拉刷新")
    },
    /**
     * @description 自定义下拉刷新松手立即刷新状态下的文字
     * @default 松开立即刷新
     */
    refresherPullingText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-pulling-text", "松开立即刷新")
    },
    /**
     * @description 自定义下拉刷新刷新中状态下的文字
     * @default 正在刷新...
     */
    refresherRefreshingText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-refreshing-text", "正在刷新...")
    },
    /**
     * @description 自定义下拉刷新刷新结束状态下的文字
     * @default 刷新完成
     */
    refresherCompleteText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-complete-text", "刷新完成")
    },
    /**
     * @description 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒
     * @default 0
     */
    refresherCompleteDelay: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-complete-delay", 0)
    },
    /**
     * @description 自定义下拉刷新结束回弹动画时间，单位为毫秒
     * @default 300
     */
    refresherCompleteDuration: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-complete-duration", 300)
    },
    /**
     * @description 下拉刷新区域背景颜色
     * @default #FFF
     */
    refresherBackground: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-background", "#FFF")
    },
    /**
     * @description 是否使用自定义的下拉刷新，设置为false即代表使用uni-app x自带的下拉刷新
     * @default true
     */
    useCustomRefresher: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("use-custom-refresher", true)
    },
    /**
     * @description 列表刷新时自动显示下拉刷新view
     * @default false
     */
    showRefresherWhenReload: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("show-refresher-when-reload", false)
    },
    /**
     * @description 是否显示最后更新时间
     * @default false
     */
    showRefresherUpdateTime: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("show-refresher-update-time", false)
    },
    /**
     * @description 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
     * @default default
     */
    refresherUpdateTimeKey: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("refresher-update-time-key", "default")
    },
    /**
     * @description 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)
     * @default true
     */
    loadMoreEnabled: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("load-more-enabled", true)
    },
    /**
     * @description 滑动到底部"默认"文字
     * @default 点击加载更多
     */
    loadMoreDefaultText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("load-more-default-text", "点击加载更多")
    },
    /**
     * @description 滑动到底部"加载中"文字
     * @default 正在加载...
     */
    loadMoreLoadingText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("load-more-loading-text", "正在加载...")
    },
    /**
     * @description 滑动到底部"没有更多"文字
     * @default 没有更多了
     */
    loadMoreNoMoreText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("load-more-no-more-text", "没有更多了")
    },
    /**
     * @description 滑动到底部"加载失败"文字
     * @default 加载失败，点击重新加载
     */
    loadMoreFailText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("load-more-fail-text", "加载失败，点击重新加载")
    },
    /**
     * @description mounted后自动调用reload方法(mounted后自动调用接口)
     * @default true
     */
    auto: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("auto", true)
    },
    /**
     * @description reload时自动滚动到顶部
     * @default true
     */
    scrollToTopWhenReload: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("scrollToTopWhenReload", true)
    },
    /**
     * @description reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的
     * @default true
     */
    cleanListWhenReload: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("cleanListWhenReload", true)
    },
    /**
     * @description 空数据描述文字
     * @default 没有数据哦~
     */
    emptyText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("empty-text", "没有数据哦~")
    },
    /**
     * @description 空数据加载失败文字
     * @default 很抱歉，加载失败
     */
    emptyErrorText: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("empty-error-text", "很抱歉，加载失败")
    },
    /**
     * @description 空数据图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyImg: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("empty-img", "")
    },
    /**
     * @description 空数据加载失败图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyErrorImg: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("empty-error-img", "")
    },
    /**
     * @description 自动显示点击返回顶部按钮
     * @default false
     */
    showBackToTop: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("show-back-to-top", false)
    },
    /**
     * @description 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px
     * @default 300
     */
    backToTopThreshold: {
      type: Number,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("back-to-top-threshold", 300)
    },
    /**
     * @description 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
     * @default ''
     */
    backToTopImg: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("back-to-top-img", "")
    },
    /**
     * @description 点击返回顶部按钮的style
     * @default {}
     */
    backToTopStyle: {
      type: Object,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("back-to-top-style", {})
    },
    /**
     * @description 在设置滚动条位置时使用动画过渡
     * @default false
     */
    scrollWithAnimation: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("scroll-with-animation", false)
    },
    /**
     * @description list的类型：list-view或scroll-view
     * @default list-view
     */
    listIs: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("list-is", "scroll-view")
    },
    /**
     * @description list的id
     * @default ''
     */
    listId: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("list-id", "")
    },
    /**
     * @description 控制是否出现滚动条
     * @default true
     */
    showScrollbar: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("show-scrollbar", true)
    },
    /**
     * @description 控制是否回弹效果
     * @default true
     */
    rebound: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("rebound", true)
    },
    /**
     * @description (子元素中使用)子元素是否开启嵌套滚动，将滚动事件与父元素协商处理
     * @default true
     */
    customNestedScroll: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("custom-nested-scroll", true)
    },
    /**
     * @description (仅listIs = scroll-view有效，父元素中使用)是否与子元素开启滚动协商
     * @default true
     */
    startNestedScroll: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("start-nested-scroll", true)
    },
    /**
     * @description (仅listIs = scroll-view有效)嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的nestedprescroll事件，嵌套子元素需要设置custom-nested-scroll = true
     * @default ''
     */
    nestedScrollChild: {
      type: String,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("nested-scroll-child", "")
    },
    /**
     * @description 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图
     * @default false
     */
    layoutOnly: {
      type: Boolean,
      default: uni_modules_zPagingX_components_zPagingX_config_index.gc("layout-only", false)
    }
  },
  emits: ["update:modelValue", "refresherStatusChange", "loadMoreStatusChange", "query", "nestedprescroll", "refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort", "onRefresh", "Refresh", "scrolltolower", "scrolltoupper", "scroll", "backToTopClick"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const slots = common_vendor.useSlots();
    const zPagingX = common_vendor.ref(null);
    const zpxList = common_vendor.ref(null);
    const zpxListRefresher = common_vendor.ref(null);
    const refresherStatus = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default);
    const refresherTriggered = common_vendor.ref(false);
    const refresherNodeHeight = common_vendor.ref(0);
    const refresherTimeTextTimestamp = common_vendor.ref(0);
    const refresherCompleteDelayTimer = common_vendor.ref(null);
    const refresherEndAnimateTimer = common_vendor.ref(null);
    const loadMoreStatus = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Default);
    const queryFrom = common_vendor.ref("");
    const isLoadFailed = common_vendor.ref(false);
    const customNoMore = common_vendor.ref(-1);
    const forceHideLoadMore = common_vendor.ref(false);
    const contentWidth = common_vendor.ref(0);
    const isLoading = common_vendor.ref(true);
    const scrollTop = common_vendor.ref(0);
    const oldScrollTop = common_vendor.ref(0);
    const pageNo = common_vendor.ref(1);
    const totalData = common_vendor.ref([]);
    const base64BackToTopImg = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_static_index.base64BackToTop);
    const backToTopClass = common_vendor.ref("zpx-back-to-top zpx-back-to-top-hide");
    const lastBackToTopShowTime = common_vendor.ref(0);
    const showBackToTopClass = common_vendor.ref(false);
    const privateScrollWithAnimation = common_vendor.ref(-1);
    const isFirstPage = common_vendor.computed(() => {
      return pageNo.value === props.defaultPageNo;
    });
    const finalRefresherThreshold = common_vendor.computed(() => {
      if (props.layoutOnly) {
        return 0;
      }
      return props.refresherThreshold > 0 ? props.refresherThreshold : refresherNodeHeight.value > 0 ? refresherNodeHeight.value : 40;
    });
    const showEmpty = common_vendor.computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return totalData.value.length == 0 && !isLoading.value;
    });
    const showLoading = common_vendor.computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return slots["loading"] != null && isLoading.value && totalData.value.length == 0;
    });
    const showLoadMore = common_vendor.computed(() => {
      if (props.layoutOnly) {
        return false;
      }
      return props.loadMoreEnabled && !forceHideLoadMore.value && (!isLoading.value || totalData.value.length > 0) && !showEmpty.value;
    });
    const finalScrollWithAnimation = common_vendor.computed(() => {
      if (privateScrollWithAnimation.value != -1) {
        const scrollWithAnimation = privateScrollWithAnimation.value == 1;
        privateScrollWithAnimation.value = -1;
        return scrollWithAnimation;
      }
      return props.scrollWithAnimation;
    });
    common_vendor.computed(() => {
      return props.listIs === "list-view" ? "list-item" : "view";
    });
    common_vendor.computed(() => {
      return props.layoutOnly;
    });
    common_vendor.watch(totalData, (newVal) => {
      emit("update:modelValue", newVal);
    });
    common_vendor.watch(refresherStatus, (newVal) => {
      emit("refresherStatusChange", newVal);
    });
    common_vendor.watch(loadMoreStatus, (newVal) => {
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
      common_vendor.nextTick$1(() => {
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
        common_vendor.nextTick$1(() => {
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
      queryFrom.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.QueryFrom.Reload;
      _emitQuery(pageNo.value, props.defaultPageSize);
    };
    const endRefresh = () => {
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      refresherTriggered.value = false;
      refresherStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default;
      isLoading.value = false;
    };
    const complete = (data = null) => {
      const finalData = data === null ? [] : data;
      isLoadFailed.value = false;
      const needCompleteDelay = props.refresherCompleteDelay > 0 && (queryFrom.value === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.QueryFrom.UserPullDown || props.showRefresherWhenReload);
      if (needCompleteDelay) {
        refresherStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Complete;
        _cleanRefresherCompleteDelayTimer();
        _cleanRefresherEndAnimateTimer();
        refresherCompleteDelayTimer.value = setTimeout(() => {
          refresherTriggered.value = false;
          refresherEndAnimateTimer.value = setTimeout(() => {
            refresherStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default;
            isLoading.value = false;
          }, props.refresherCompleteDuration);
        }, props.refresherCompleteDelay);
      } else {
        endRefresh();
      }
      const currentData = [...finalData];
      if (customNoMore.value != -1) {
        if (customNoMore.value == 1 || customNoMore.value != 0 && finalData.length == 0) {
          loadMoreStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.NoMore;
        }
      } else {
        if (finalData.length == 0 || finalData.length > 0 && finalData.length < props.defaultPageSize) {
          loadMoreStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.NoMore;
        } else {
          loadMoreStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Default;
        }
      }
      if (isFirstPage.value) {
        totalData.value = currentData;
        if (props.showRefresherUpdateTime) {
          uni_modules_zPagingX_components_zPagingX_utils_index.updateRefesrherTime(props.refresherUpdateTimeKey);
          refresherTimeTextTimestamp.value = uni_modules_zPagingX_components_zPagingX_utils_index.getTime();
        }
      } else {
        totalData.value = totalData.value.concat(currentData);
      }
      common_vendor.nextTick$1(() => {
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
      common_vendor.nextTick$1(() => {
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
      queryFrom.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.QueryFrom.Refresh;
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
        refresherStatus.value = e.detail.dy < finalRefresherThreshold.value ? uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default : uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.ReleaseToRefresh;
      }
    };
    const _handleRefresh = () => {
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      refresherStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Loading;
      refresherTriggered.value = true;
      pageNo.value = props.defaultPageNo;
      queryFrom.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.QueryFrom.UserPullDown;
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
      if (refresherStatus.value !== uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Complete) {
        refresherStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default;
      }
    };
    const _onRefresherabort = (e) => {
      emit("refresherabort", e);
    };
    const _handleLoadMore = () => {
      if (!props.loadMoreEnabled || isLoading.value || loadMoreStatus.value === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.NoMore)
        return null;
      loadMoreStatus.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Loading;
      pageNo.value++;
      queryFrom.value = uni_modules_zPagingX_components_zPagingX_enums_index.Enum.QueryFrom.LoadMore;
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
      common_vendor.nextTick$1(() => {
        if (!callbacked) {
          _handleToTop();
        }
      });
    };
    common_vendor.onMounted(() => {
      pageNo.value = props.defaultPageNo;
      if (!props.layoutOnly && props.auto) {
        reload();
      }
      if (props.layoutOnly) {
        endRefresh();
      }
      common_vendor.nextTick$1(() => {
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
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: __props.listIs === "list-view"
      }, __props.listIs === "list-view" ? common_vendor.e({
        b: showLoadMore.value
      }, showLoadMore.value ? common_vendor.e({
        c: _ctx.$slots["loadMore"]
      }, _ctx.$slots["loadMore"] ? {
        d: common_vendor.r("loadMore", {
          loadMoreStatus: loadMoreStatus.value
        })
      } : {
        e: common_vendor.o(_handleLoadMore, "c4"),
        f: common_vendor.p({
          status: loadMoreStatus.value,
          ["default-text"]: __props.loadMoreDefaultText,
          ["loading-text"]: __props.loadMoreLoadingText,
          ["no-more-text"]: __props.loadMoreNoMoreText,
          ["fail-text"]: __props.loadMoreFailText,
          class: "data-v-6ee3af36"
        })
      }) : {}, {
        g: _ctx.$slots["refresher"]
      }, _ctx.$slots["refresher"] ? {
        h: common_vendor.r("refresher", {
          refresherStatus: refresherStatus.value
        })
      } : {
        i: common_vendor.sr("commonRefresher", "6ee3af36-1"),
        j: common_vendor.p({
          ["default-text"]: __props.refresherDefaultText,
          ["pulling-text"]: __props.refresherPullingText,
          ["refreshing-text"]: __props.refresherRefreshingText,
          ["complete-text"]: __props.refresherCompleteText,
          status: refresherStatus.value,
          ["show-update-time"]: __props.showRefresherUpdateTime,
          ["update-time-key"]: __props.refresherUpdateTimeKey,
          ["time-text-timestamp"]: refresherTimeTextTimestamp.value,
          class: "r data-v-6ee3af36"
        })
      }, {
        k: common_vendor.sei("r0-6ee3af36", "view", zpxListRefresher, {
          "k": "zpxListRefresher"
        }),
        l: contentWidth.value + "px",
        m: showEmpty.value
      }, showEmpty.value ? common_vendor.e({
        n: _ctx.$slots["empty"]
      }, _ctx.$slots["empty"] ? {
        o: common_vendor.r("empty", {
          isLoadFailed: isLoadFailed.value
        })
      } : {
        p: common_vendor.o(reload, "31"),
        q: common_vendor.p({
          ["empty-text"]: !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText,
          ["empty-img"]: !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg,
          ["is-load-failed"]: isLoadFailed.value,
          ["show-empty-reload"]: isLoadFailed.value,
          class: "data-v-6ee3af36"
        })
      }) : {}, {
        r: showLoading.value
      }, showLoading.value ? {} : {}, {
        s: common_vendor.n(showEmpty.value ? "zpx-flex1" : ""),
        t: common_vendor.sei(__props.listId !== "" ? __props.listId : "r1-6ee3af36", "scroll-view", zpxList, {
          "k": "zpxList"
        }),
        v: __props.refresherEnabled,
        w: finalRefresherThreshold.value,
        x: refresherTriggered.value,
        y: __props.useCustomRefresher ? "none" : "black",
        z: __props.customNestedScroll,
        A: __props.refresherBackground,
        B: __props.rebound,
        C: scrollTop.value,
        D: __props.showScrollbar,
        E: finalScrollWithAnimation.value,
        F: common_vendor.o(_onRefresherpulling, "23"),
        G: common_vendor.o(_onRefresherrefresh, "eb"),
        H: common_vendor.o(_onRefresherrestore, "fe"),
        I: common_vendor.o(_onRefresherabort, "f1"),
        J: common_vendor.o(_onScrolltolower, "d1"),
        K: common_vendor.o(_onScrolltoupper, "f5"),
        L: common_vendor.o(_onScroll, "fc"),
        M: common_vendor.o(_onStartNestedScroll, "a6"),
        N: common_vendor.o(_onNestedPreScroll, "0b")
      }) : common_vendor.e({
        O: showLoadMore.value
      }, showLoadMore.value ? common_vendor.e({
        P: _ctx.$slots["loadMore"]
      }, _ctx.$slots["loadMore"] ? {
        Q: common_vendor.r("loadMore", {
          loadMoreStatus: loadMoreStatus.value
        })
      } : {
        R: common_vendor.o(_handleLoadMore, "8d"),
        S: common_vendor.p({
          status: loadMoreStatus.value,
          ["default-text"]: __props.loadMoreDefaultText,
          ["loading-text"]: __props.loadMoreLoadingText,
          ["no-more-text"]: __props.loadMoreNoMoreText,
          ["fail-text"]: __props.loadMoreFailText,
          class: "data-v-6ee3af36"
        })
      }) : {}, {
        T: _ctx.$slots["refresher"]
      }, _ctx.$slots["refresher"] ? {
        U: common_vendor.r("refresher", {
          refresherStatus: refresherStatus.value
        })
      } : {
        V: common_vendor.sr("commonRefresher", "6ee3af36-4"),
        W: common_vendor.p({
          ["default-text"]: __props.refresherDefaultText,
          ["pulling-text"]: __props.refresherPullingText,
          ["refreshing-text"]: __props.refresherRefreshingText,
          ["complete-text"]: __props.refresherCompleteText,
          status: refresherStatus.value,
          ["show-update-time"]: __props.showRefresherUpdateTime,
          ["update-time-key"]: __props.refresherUpdateTimeKey,
          ["time-text-timestamp"]: refresherTimeTextTimestamp.value,
          class: "r data-v-6ee3af36"
        })
      }, {
        X: common_vendor.sei("r2-6ee3af36", "view", zpxListRefresher, {
          "k": "zpxListRefresher"
        }),
        Y: contentWidth.value + "px",
        Z: showEmpty.value
      }, showEmpty.value ? common_vendor.e({
        aa: _ctx.$slots["empty"]
      }, _ctx.$slots["empty"] ? {
        ab: common_vendor.r("empty", {
          isLoadFailed: isLoadFailed.value
        })
      } : {
        ac: common_vendor.o(reload, "c8"),
        ad: common_vendor.p({
          ["empty-text"]: !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText,
          ["empty-img"]: !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg,
          ["is-load-failed"]: isLoadFailed.value,
          ["show-empty-reload"]: isLoadFailed.value,
          class: "data-v-6ee3af36"
        })
      }) : {}, {
        ae: showLoading.value
      }, showLoading.value ? {} : {}, {
        af: common_vendor.n(showEmpty.value ? "zpx-flex1" : ""),
        ag: common_vendor.sei(__props.listId !== "" ? __props.listId : "r3-6ee3af36", "scroll-view", zpxList, {
          "k": "zpxList"
        }),
        ah: __props.refresherEnabled,
        ai: finalRefresherThreshold.value,
        aj: refresherTriggered.value,
        ak: __props.useCustomRefresher ? "none" : "black",
        al: __props.customNestedScroll,
        am: __props.refresherBackground,
        an: __props.rebound,
        ao: scrollTop.value,
        ap: __props.showScrollbar,
        aq: finalScrollWithAnimation.value,
        ar: common_vendor.o(_onRefresherpulling, "4d"),
        as: common_vendor.o(_onRefresherrefresh, "44"),
        at: common_vendor.o(_onRefresherrestore, "94"),
        av: common_vendor.o(_onRefresherabort, "02"),
        aw: common_vendor.o(_onScrolltolower, "f2"),
        ax: common_vendor.o(_onScrolltoupper, "19"),
        ay: common_vendor.o(_onScroll, "d6"),
        az: common_vendor.o(_onStartNestedScroll, "6d"),
        aA: common_vendor.o(_onNestedPreScroll, "8a")
      }), {
        aB: showBackToTopClass.value
      }, showBackToTopClass.value ? common_vendor.e({
        aC: _ctx.$slots["backToTop"]
      }, _ctx.$slots["backToTop"] ? {} : {
        aD: __props.backToTopImg.length > 0 ? __props.backToTopImg : base64BackToTopImg.value
      }, {
        aE: common_vendor.n(backToTopClass.value),
        aF: common_vendor.s(__props.backToTopStyle),
        aG: common_vendor.o(_onBackToTopClick, "fa")
      }) : {}, {
        aH: common_vendor.sei(common_vendor.gei(_ctx, "", "r4-6ee3af36"), "view", zPagingX, {
          "k": "zPagingX"
        }),
        aI: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
        aJ: common_vendor.s(__props.pagingStyle),
        aK: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        })
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ee3af36"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js.map
