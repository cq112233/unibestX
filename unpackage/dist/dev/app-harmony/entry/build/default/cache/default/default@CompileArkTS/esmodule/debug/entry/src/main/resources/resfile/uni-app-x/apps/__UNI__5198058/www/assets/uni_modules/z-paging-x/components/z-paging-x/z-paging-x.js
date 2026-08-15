import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty&";
import { z as zPagingRefresher } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher&";
import { z as zPagingLoadMore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more&";
import { E as Enum } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/enums/index&";
import { g as gc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/config/index&";
import { f as base64BackToTop } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/static/index&";
import { u as updateRefesrherTime, a as getTime } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/utils/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataAttrBoolean: _toSharedDataAttrBoolean, toSharedDataNumber: _toSharedDataNumber, toSharedDataScrollViewRefresherDefaultStyle: _toSharedDataScrollViewRefresherDefaultStyle, toSharedDataColor: _toSharedDataColor, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesZPagingXComponentsZPagingXZPagingX";
const { ref, computed, watch, onMounted, nextTick, useSlots } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "69fde9f4",
  __className,
  __filename: "uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue",
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
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXZPagingXSharedData", sharedDataClassId: 0 })));
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
    computed(() => {
      return props.listIs === "list-view" ? "list-item" : "view";
    });
    computed(() => {
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_z_paging_x_empty = __easycom_0;
      const _component_list_view = _resolveComponent("list-view");
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 60, [__props.pagingStyle]);
      });
      _createSharedDataSlot("top", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.listIs === "list-view"));
      }, () => {
        const n34 = _createSharedDataComponentWithFallback(_component_list_view, "0980364a", {
          class: "zpx-list-view zpx-flex1",
          id: () => {
            return __props.listId;
          },
          "refresher-enabled": () => {
            return __props.refresherEnabled;
          },
          "refresher-threshold": () => {
            return finalRefresherThreshold.value;
          },
          "refresher-triggered": () => {
            return refresherTriggered.value;
          },
          "refresher-default-style": () => {
            return __props.useCustomRefresher ? "none" : "black";
          },
          "custom-nested-scroll": () => {
            return __props.customNestedScroll;
          },
          "refresher-background": () => {
            return __props.refresherBackground;
          },
          rebound: () => {
            return __props.rebound;
          },
          "scroll-top": () => {
            return scrollTop.value;
          },
          "show-scrollbar": () => {
            return __props.showScrollbar;
          },
          "scroll-with-animation": () => {
            return finalScrollWithAnimation.value;
          },
          onRefresherpulling: () => {
            return _onRefresherpulling;
          },
          onRefresherrefresh: () => {
            return _onRefresherrefresh;
          },
          onRefresherrestore: () => {
            return _onRefresherrestore;
          },
          onRefresherabort: () => {
            return _onRefresherabort;
          },
          onScrolltolower: () => {
            return _onScrolltolower;
          },
          onScrolltoupper: () => {
            return _onScrolltoupper;
          },
          onScroll: () => {
            return _onScroll;
          },
          onStartnestedscroll: () => {
            return _onStartNestedScroll;
          },
          onNestedprescroll: () => {
            return _onNestedPreScroll;
          }
        }, {
          "header": _withSharedDataVaporCtx(() => {
            _createSharedDataSlot("default", null, null);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 2, _toSharedDataBoolean(showLoadMore.value));
            }, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 3, _toSharedDataBoolean($slots["loadMore"]));
              }, () => {
                _createSharedDataSlot("loadMore", { loadMoreStatus: () => {
                  return loadMoreStatus.value;
                } }, (data) => {
                  return _setSharedData(__sharedData, 4, data);
                });
              }, () => {
                const n10 = _createSharedDataComponent(zPagingLoadMore, "6cbc3e38", {
                  status: () => {
                    return loadMoreStatus.value;
                  },
                  "default-text": () => {
                    return __props.loadMoreDefaultText;
                  },
                  "loading-text": () => {
                    return __props.loadMoreLoadingText;
                  },
                  "no-more-text": () => {
                    return __props.loadMoreNoMoreText;
                  },
                  "fail-text": () => {
                    return __props.loadMoreFailText;
                  },
                  onClickMore: () => {
                    return _handleLoadMore;
                  }
                });
                _setSharedData(__sharedData, 5, n10.sharedData);
              }, 261);
            });
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 11, showEmpty.value ? "zpx-flex1" : "");
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 6, _toSharedDataBoolean(showEmpty.value));
            }, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 7, _toSharedDataBoolean($slots["empty"]));
              }, () => {
                _createSharedDataSlot("empty", { isLoadFailed: () => {
                  return isLoadFailed.value;
                } }, (data) => {
                  return _setSharedData(__sharedData, 8, data);
                });
              }, () => {
                const n19 = _createSharedDataComponentWithFallback(_component_z_paging_x_empty, "6cbcb9fd", {
                  "empty-text": () => {
                    return !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText;
                  },
                  "empty-img": () => {
                    return !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg;
                  },
                  "is-load-failed": () => {
                    return isLoadFailed.value;
                  },
                  "show-empty-reload": () => {
                    return isLoadFailed.value;
                  },
                  onReload: () => {
                    return reload;
                  }
                });
                _setSharedData(__sharedData, 9, n19?.sharedData);
              }, 773);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 10, _toSharedDataBoolean(showLoading.value));
            }, () => {
              _createSharedDataSlot("loading", null, null);
            });
          }),
          "refresher": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 16, { width: contentWidth.value + "px" });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 12, _toSharedDataBoolean($slots["refresher"]));
            }, () => {
              _createSharedDataSlot("refresher", { refresherStatus: () => {
                return refresherStatus.value;
              } }, (data) => {
                return _setSharedData(__sharedData, 13, data);
              });
            }, () => {
              const n30 = _createSharedDataComponent(zPagingRefresher, "6cbc54a0", {
                "default-text": () => {
                  return __props.refresherDefaultText;
                },
                "pulling-text": () => {
                  return __props.refresherPullingText;
                },
                "refreshing-text": () => {
                  return __props.refresherRefreshingText;
                },
                "complete-text": () => {
                  return __props.refresherCompleteText;
                },
                status: () => {
                  return refresherStatus.value;
                },
                "show-update-time": () => {
                  return __props.showRefresherUpdateTime;
                },
                "update-time-key": () => {
                  return __props.refresherUpdateTimeKey;
                },
                "time-text-timestamp": () => {
                  return refresherTimeTextTimestamp.value;
                }
              });
              _setSharedData(__sharedData, 14, n30.sharedData);
              _setTemplateRef(n30, "commonRefresher");
            }, 1541);
            _setSharedDataTemplateRef(__sharedData, 15, (n31) => {
              _setTemplateRef(n31, zpxListRefresher, null, "zpxListRefresher");
            });
          })
        });
        _setSharedData(__sharedData, 1, n34?.sharedData);
        _setSharedDataTemplateRef(__sharedData, 17, (n342) => {
          _setTemplateRef(n342, zpxList, null, "zpxList");
        });
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataAttr(__sharedData, 41, _toSharedDataString(__props.listId));
          _setSharedDataAttr(__sharedData, 42, _toSharedDataAttrBoolean(__props.refresherEnabled, false));
          _setSharedDataAttr(__sharedData, 43, _toSharedDataNumber(finalRefresherThreshold.value));
          _setSharedDataAttr(__sharedData, 44, _toSharedDataAttrBoolean(refresherTriggered.value, false));
          _setSharedDataAttr(__sharedData, 45, _toSharedDataScrollViewRefresherDefaultStyle(__props.useCustomRefresher ? "none" : "black"));
          _setSharedDataAttr(__sharedData, 46, _toSharedDataColor(__props.refresherBackground));
          _setSharedDataAttr(__sharedData, 47, _toSharedDataNumber(scrollTop.value));
          _setSharedDataAttr(__sharedData, 48, _toSharedDataAttrBoolean(__props.showScrollbar, true));
          _setSharedDataAttr(__sharedData, 49, _toSharedDataAttrBoolean(finalScrollWithAnimation.value, false));
        });
        _createSharedDataSlot("default", null, null);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 18, _toSharedDataBoolean(showLoadMore.value));
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 19, _toSharedDataBoolean($slots["loadMore"]));
          }, () => {
            _createSharedDataSlot("loadMore", { loadMoreStatus: () => {
              return loadMoreStatus.value;
            } }, (data) => {
              return _setSharedData(__sharedData, 20, data);
            });
          }, () => {
            const n43 = _createSharedDataComponent(zPagingLoadMore, "6cbd3967", {
              status: () => {
                return loadMoreStatus.value;
              },
              "default-text": () => {
                return __props.loadMoreDefaultText;
              },
              "loading-text": () => {
                return __props.loadMoreLoadingText;
              },
              "no-more-text": () => {
                return __props.loadMoreNoMoreText;
              },
              "fail-text": () => {
                return __props.loadMoreFailText;
              },
              onClickMore: () => {
                return _handleLoadMore;
              }
            });
            _setSharedData(__sharedData, 21, n43.sharedData);
          }, 2053);
        });
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 50, { width: contentWidth.value + "px" });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 22, _toSharedDataBoolean($slots["refresher"]));
        }, () => {
          _createSharedDataSlot("refresher", { refresherStatus: () => {
            return refresherStatus.value;
          } }, (data) => {
            return _setSharedData(__sharedData, 23, data);
          });
        }, () => {
          const n50 = _createSharedDataComponent(zPagingRefresher, "6cbd9b1c", {
            "default-text": () => {
              return __props.refresherDefaultText;
            },
            "pulling-text": () => {
              return __props.refresherPullingText;
            },
            "refreshing-text": () => {
              return __props.refresherRefreshingText;
            },
            "complete-text": () => {
              return __props.refresherCompleteText;
            },
            status: () => {
              return refresherStatus.value;
            },
            "show-update-time": () => {
              return __props.showRefresherUpdateTime;
            },
            "update-time-key": () => {
              return __props.refresherUpdateTimeKey;
            },
            "time-text-timestamp": () => {
              return refresherTimeTextTimestamp.value;
            }
          });
          _setSharedData(__sharedData, 24, n50.sharedData);
          _setTemplateRef(n50, "commonRefresher");
        }, 2565);
        _setSharedDataTemplateRef(__sharedData, 30, (n51) => {
          _setTemplateRef(n51, zpxListRefresher, null, "zpxListRefresher");
        });
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 51, showEmpty.value ? "zpx-flex1" : "");
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 25, _toSharedDataBoolean(showEmpty.value));
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 26, _toSharedDataBoolean($slots["empty"]));
          }, () => {
            _createSharedDataSlot("empty", { isLoadFailed: () => {
              return isLoadFailed.value;
            } }, (data) => {
              return _setSharedData(__sharedData, 27, data);
            });
          }, () => {
            const n58 = _createSharedDataComponentWithFallback(_component_z_paging_x_empty, "6cbdb165", {
              "empty-text": () => {
                return !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText;
              },
              "empty-img": () => {
                return !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg;
              },
              "is-load-failed": () => {
                return isLoadFailed.value;
              },
              "show-empty-reload": () => {
                return isLoadFailed.value;
              },
              onReload: () => {
                return reload;
              }
            });
            _setSharedData(__sharedData, 28, n58?.sharedData);
          }, 2821);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 29, _toSharedDataBoolean(showLoading.value));
        }, () => {
          _createSharedDataSlot("loading", null, null);
        });
        _setSharedDataEvent(__sharedData, 31, _onRefresherpulling);
        _setSharedDataEvent(__sharedData, 32, _onRefresherrefresh);
        _setSharedDataEvent(__sharedData, 33, _onRefresherrestore);
        _setSharedDataEvent(__sharedData, 34, _onRefresherabort);
        _setSharedDataEvent(__sharedData, 35, _onScrolltolower);
        _setSharedDataEvent(__sharedData, 36, _onScrolltoupper);
        _setSharedDataEvent(__sharedData, 37, _onScroll);
        _setSharedDataEvent(__sharedData, 38, _onStartNestedScroll);
        _setSharedDataEvent(__sharedData, 39, _onNestedPreScroll);
        _setSharedDataTemplateRef(__sharedData, 40, (n64) => {
          _setTemplateRef(n64, zpxList, null, "zpxList");
        });
      }, 1797);
      _createSharedDataSlot("bottom", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 52, _toSharedDataBoolean(showBackToTopClass.value));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 56, backToTopClass.value);
          _setSharedDataStyle(__sharedData, 57, [__props.backToTopStyle]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 53, _toSharedDataBoolean($slots["backToTop"]));
        }, () => {
          _createSharedDataSlot("backToTop", null, null);
        }, () => {
          _renderSharedDataEffect(() => {
            const _backToTopImg = __props.backToTopImg;
            _setSharedDataAttr(__sharedData, 54, _toSharedDataString(_backToTopImg.length > 0 ? _backToTopImg : base64BackToTopImg.value));
          });
        }, 3589);
        _setSharedDataEvent(__sharedData, 55, _onBackToTopClick);
      });
      _setSharedDataClass(__sharedData, 58, { "zpx-content": true });
      _setSharedDataTemplateRef(__sharedData, 59, (n74) => {
        _setTemplateRef(n74, zPagingX, null, "zPagingX");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=z-paging-x.js.map
