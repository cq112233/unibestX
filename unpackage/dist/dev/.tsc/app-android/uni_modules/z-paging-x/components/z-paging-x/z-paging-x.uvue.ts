import _easycom_z_paging_x_empty from '@/uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.uvue'
import { ref, computed, watch, onMounted, nextTick, useSlots } from 'vue'
  import zPagingRefresher from './components/z-paging-refresher.uvue'
  import zPagingLoadMore from './components/z-paging-load-more.uvue'
  import zPagingXEmpty from '../z-paging-x-empty/z-paging-x-empty.uvue'
  import Enum from './enums/index.uts'
  import { gc } from './config/index.uts'
  import { base64BackToTop } from './static/index.uts'
  import { updateRefesrherTime, getTime } from './utils/index.uts'

  
const __sfc__ = defineComponent({
  __name: 'z-paging-x',
  props: {
    /**
     * @description 自定义初始的pageNo，默认为1
     * @default 1
     */
    defaultPageNo: {
      type: Number,
      default: gc<number>('default-page-no', 1)
    },
    /**
     * @description 自定义初始的pageSize，默认为10
     * @default 10
     */
    defaultPageSize: {
      type: Number,
      default: gc<number>('default-page-size', 10)
    },
    /**
     * @description 设置组件的style
     */
    pagingStyle: {
      type: Object,
      default: gc<object>('paging-style', {})
    },
    /**
     * @description 是否开启自定义下拉刷新
     * @default true
     */
    refresherEnabled: {
      type: Boolean,
      default: gc<boolean>('refresher-enabled', true)
    },
    /**
     * @description 设置自定义下拉刷新阈值，默认等于refresher高度，单位为px
     * @default 0
     */
    refresherThreshold: {
      type: Number,
      default: gc<number>('refresher-threshold', 0)
    },
    /**
     * @description 自定义下拉刷新默认状态下的文字
     * @default 继续下拉刷新
     */
    refresherDefaultText: {
      type: String,
      default: gc<string>('refresher-default-text', '继续下拉刷新')
    },
    /**
     * @description 自定义下拉刷新松手立即刷新状态下的文字
     * @default 松开立即刷新
     */
    refresherPullingText: {
      type: String,
      default: gc<string>('refresher-pulling-text', '松开立即刷新')
    },
    /**
     * @description 自定义下拉刷新刷新中状态下的文字
     * @default 正在刷新...
     */
    refresherRefreshingText: {
      type: String,
      default: gc<string>('refresher-refreshing-text', '正在刷新...')
    },
    /**
     * @description 自定义下拉刷新刷新结束状态下的文字
     * @default 刷新完成
     */
    refresherCompleteText: {
      type: String,
      default: gc<string>('refresher-complete-text', '刷新完成')
    },
    /**
     * @description 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒
     * @default 0
     */
    refresherCompleteDelay: {
      type: Number,
      default: gc<number>('refresher-complete-delay', 0)
    },
    /**
     * @description 自定义下拉刷新结束回弹动画时间，单位为毫秒
     * @default 300
     */
    refresherCompleteDuration: {
      type: Number,
      default: gc<number>('refresher-complete-duration', 300)
    },
    /**
     * @description 下拉刷新区域背景颜色
     * @default #FFF
     */
    refresherBackground: {
      type: String,
      default: gc<string>('refresher-background', '#FFF')
    },
    /**
     * @description 是否使用自定义的下拉刷新，设置为false即代表使用uni-app x自带的下拉刷新
     * @default true
     */
    useCustomRefresher: {
      type: Boolean,
      default: gc<boolean>('use-custom-refresher', true)
    },
    /**
     * @description 列表刷新时自动显示下拉刷新view
     * @default false
     */
    showRefresherWhenReload: {
      type: Boolean,
      default: gc<boolean>('show-refresher-when-reload', false)
    },
    /**
     * @description 是否显示最后更新时间
     * @default false
     */
    showRefresherUpdateTime: {
      type: Boolean,
      default: gc<boolean>('show-refresher-update-time', false)
    },
    /**
     * @description 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
     * @default default
     */
    refresherUpdateTimeKey: {
      type: String,
      default: gc<string>('refresher-update-time-key', 'default')
    },
    /**
     * @description 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)
     * @default true
     */
    loadMoreEnabled: {
      type: Boolean,
      default: gc<boolean>('load-more-enabled', true)
    },
    /**
     * @description 滑动到底部"默认"文字
     * @default 点击加载更多
     */
    loadMoreDefaultText: {
      type: String,
      default: gc<string>('load-more-default-text', '点击加载更多')
    },
    /**
     * @description 滑动到底部"加载中"文字
     * @default 正在加载...
     */
    loadMoreLoadingText: {
      type: String,
      default: gc<string>('load-more-loading-text', '正在加载...')
    },
    /**
     * @description 滑动到底部"没有更多"文字
     * @default 没有更多了
     */
    loadMoreNoMoreText: {
      type: String,
      default: gc<string>('load-more-no-more-text', '没有更多了')
    },
    /**
     * @description 滑动到底部"加载失败"文字
     * @default 加载失败，点击重新加载
     */
    loadMoreFailText: {
      type: String,
      default: gc<string>('load-more-fail-text', '加载失败，点击重新加载')
    },
    /**
     * @description mounted后自动调用reload方法(mounted后自动调用接口)
     * @default true
     */
    auto: {
      type: Boolean,
      default: gc<boolean>('auto', true)
    },
    /**
     * @description reload时自动滚动到顶部
     * @default true
     */
    scrollToTopWhenReload: {
      type: Boolean,
      default: gc<boolean>('scrollToTopWhenReload', true)
    },
    /**
     * @description reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的
     * @default true
     */
    cleanListWhenReload: {
      type: Boolean,
      default: gc<boolean>('cleanListWhenReload', true)
    },
    /**
     * @description 空数据描述文字
     * @default 没有数据哦~
     */
    emptyText: {
      type: String,
      default: gc<string>('empty-text', '没有数据哦~')
    },
    /**
     * @description 空数据加载失败文字
     * @default 很抱歉，加载失败
     */
    emptyErrorText: {
      type: String,
      default: gc<string>('empty-error-text', '很抱歉，加载失败')
    },
    /**
     * @description 空数据图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyImg: {
      type: String,
      default: gc<string>('empty-img', '')
    },
    /**
     * @description 空数据加载失败图片，默认使用z-paging内置的图片
     * @default ''
     */
    emptyErrorImg: {
      type: String,
      default: gc<string>('empty-error-img', '')
    },
    /**
     * @description 自动显示点击返回顶部按钮
     * @default false
     */
    showBackToTop: {
      type: Boolean,
      default: gc<boolean>('show-back-to-top', false)
    },
    /**
     * @description 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px
     * @default 300
     */
    backToTopThreshold: {
      type: Number,
      default: gc<number>('back-to-top-threshold', 300)
    },
    /**
     * @description 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
     * @default ''
     */
    backToTopImg: {
      type: String,
      default: gc<string>('back-to-top-img', '')
    },
    /**
     * @description 点击返回顶部按钮的style
     * @default {}
     */
    backToTopStyle: {
      type: Object,
      default: gc<object>('back-to-top-style', {}),
    },
    /**
     * @description 在设置滚动条位置时使用动画过渡
     * @default false
     */
    scrollWithAnimation: {
      type: Boolean,
      default: gc<boolean>('scroll-with-animation', false),
    },
    /**
     * @description list的类型：list-view或scroll-view
     * @default list-view
     */
    listIs: {
      type: String,
      default: gc<string>('list-is', 'scroll-view'),
    },
    /**
     * @description list的id
     * @default ''
     */
    listId: {
      type: String,
      default: gc<string>('list-id', ''),
    },
    /**
     * @description 控制是否出现滚动条
     * @default true
     */
    showScrollbar: {
      type: Boolean,
      default: gc<boolean>('show-scrollbar', true),
    },
    /**
     * @description 控制是否回弹效果
     * @default true
     */
    rebound: {
      type: Boolean,
      default: gc<boolean>('rebound', true),
    },
    /**
     * @description (子元素中使用)子元素是否开启嵌套滚动，将滚动事件与父元素协商处理
     * @default true
     */
    customNestedScroll: {
      type: Boolean,
      default: gc<boolean>('custom-nested-scroll', true),
    },
    /**
     * @description (仅listIs = scroll-view有效，父元素中使用)是否与子元素开启滚动协商
     * @default true
     */
    startNestedScroll: {
      type: Boolean,
      default: gc<boolean>('start-nested-scroll', true),
    },
    /**
     * @description (仅listIs = scroll-view有效)嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的nestedprescroll事件，嵌套子元素需要设置custom-nested-scroll = true
     * @default ''
     */
    nestedScrollChild: {
      type: String,
      default: gc<string>('nested-scroll-child', ''),
    },
    /**
     * @description 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图
     * @default false
     */
    layoutOnly: {
      type: Boolean,
      default: gc<boolean>('layout-only', false),
    },
  },
  emits: ["update:modelValue", "refresherStatusChange", "loadMoreStatusChange", "query", "nestedprescroll", "refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort", "onRefresh", "Refresh", "scrolltolower", "scrolltoupper", "scroll", "backToTopClick"],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

  /**
   * z-paging-x下拉刷新、上拉加载
   * @description 分页全自动处理，支持自定义下拉刷新、上拉加载更多、自动管理空数据图、点击返回顶部、下拉显示最后更新时间等等，支持iOS、安卓、h5、小程序、鸿蒙Next等
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "uniVer": "x",
   *       "unixVer": "4.56",
   *       "unixVaporVer": "x"
   *     },
   *     "ios": {
   *       "uniVer": "x",
   *       "unixVer": "4.56",
   *       "unixVaporVer": "x"
   *     },
   *     "harmony": {
   *       "uniVer": "x",
   *       "unixVer": "4.56",
   *       "unixVaporVer": "4.56"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "uniVer": "x",
   *       "unixVer": "4.56"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "4.56"
   *   }
   * }
   */
  const props = __props

  function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

  const slots = useSlots()

  // z-paging-x的根节点
  const zPagingX = ref<UniElement | null>(null)
  // z-paging-x中list-view或scroll-view的节点
  const zpxList = ref<UniElement | null>(null)
  // refresher容器节点
  const zpxListRefresher = ref<UniElement | null>(null)

  // 下拉刷新状态
  const refresherStatus = ref(Enum.Refresher.Default)
  // 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
  const refresherTriggered = ref(false)
  // refresher节点高度
  const refresherNodeHeight = ref(0)
  // 下拉刷新最后更新时间更新的时间戳
  const refresherTimeTextTimestamp = ref(0)
  // 下拉刷新complete状态的延迟定时器（使用ref避免闭包捕获导致的smart cast问题）
  const refresherCompleteDelayTimer = ref<number | null>(null)
  // 下拉刷新回弹动画的定时器
  const refresherEndAnimateTimer = ref<number | null>(null)
  // 底部加载更多状态
  const loadMoreStatus = ref(Enum.More.Default)
  // 触发query来源
  const queryFrom = ref('')
  // 是否是加载失败
  const isLoadFailed = ref(false)
  // 是否是开发者自定义的加载更多，-1代表交由z-paging自行判断；1代表没有更多了；0代表还有更多数据
  const customNoMore = ref(-1)
  // 是否强制隐藏当前加载更多
  const forceHideLoadMore = ref(false)
  // 内容宽度
  const contentWidth = ref(0)

  // 是否是加载中状态
  const isLoading = ref(true)
  // 竖向滚动条位置
  const scrollTop = ref(0)
  // 记录当前滚动位置
  const oldScrollTop = ref(0)

  // 当前页
  const pageNo = ref(1)
  // 当前列表总数据
  const totalData = ref<any[]>([])

  // 默认的点击返回顶部图片
  const base64BackToTopImg = ref(base64BackToTop)
  // 点击返回顶部class
  const backToTopClass = ref('zpx-back-to-top zpx-back-to-top-hide')
  // 上次点击返回顶部的时间
  const lastBackToTopShowTime = ref(0)
  // 点击返回顶部显示的class是否在展示中，使得按钮展示/隐藏过度效果更自然
  const showBackToTopClass = ref(false)
  // z-paging-x内部判断的滚动是否有动画效果，-1代表采取默认状态，1代表有动画效果，0代表没有动画效果
  const privateScrollWithAnimation = ref(-1)

  const isFirstPage = computed((): boolean => {
    return pageNo.value === props.defaultPageNo;
  })
  const finalRefresherThreshold = computed((): number => {
    // layoutOnly时禁用下拉刷新
    if (props.layoutOnly) {
      return 0
    }
    return props.refresherThreshold > 0 ? props.refresherThreshold : refresherNodeHeight.value > 0 ? refresherNodeHeight.value : 40
  })
  const showEmpty = computed((): boolean => {
    // layoutOnly时强制隐藏空数据图
    if (props.layoutOnly) {
      return false
    }
    return totalData.value.length == 0 && !isLoading.value
  })
  const showLoading = computed((): boolean => {
    // layoutOnly时隐藏加载中
    if (props.layoutOnly) {
      return false
    }
    return slots['loading'] != null && isLoading.value && totalData.value.length == 0
  })
  const showLoadMore = computed((): boolean => {
    // layoutOnly时隐藏加载更多
    if (props.layoutOnly) {
      return false
    }
    return props.loadMoreEnabled && !forceHideLoadMore.value && (!isLoading.value || totalData.value.length > 0) && !showEmpty.value;
  })
  const finalScrollWithAnimation = computed((): boolean => {
    if (privateScrollWithAnimation.value != -1) {
      const scrollWithAnimation = privateScrollWithAnimation.value == 1;
      privateScrollWithAnimation.value = -1;
      return scrollWithAnimation;
    }
    return props.scrollWithAnimation;
  })
  const listItemIs = computed((): string => {
    return props.listIs === 'list-view' ? 'list-item' : 'view';
  })

  // 是否只使用基础布局
  const isOnly = computed((): boolean => {
    return props.layoutOnly;
  })

  watch(totalData, (newVal: any[]) => {
    emit('update:modelValue', newVal);
  })
  watch(refresherStatus, (newVal: string) => {
    emit('refresherStatusChange', newVal);
  })
  watch(loadMoreStatus, (newVal: string) => {
    emit('loadMoreStatusChange', newVal);
  })

  //判断是否要显示返回顶部按钮
  const _checkShouldShowBackToTop = (scrollTopValue: number) => {
    if (!props.showBackToTop) {
      showBackToTopClass.value = false;
      return;
    }
    if (scrollTopValue > props.backToTopThreshold) {
      if (!showBackToTopClass.value) {
        showBackToTopClass.value = true;
        lastBackToTopShowTime.value = new Date().getTime();
        setTimeout(() => {
          backToTopClass.value = 'zpx-back-to-top zpx-back-to-top-show';
        }, 300)
      }
    } else {
      if (showBackToTopClass.value) {
        backToTopClass.value = 'zpx-back-to-top zpx-back-to-top-hide';
        setTimeout(() => {
          showBackToTopClass.value = false;
        }, new Date().getTime() - lastBackToTopShowTime.value < 500 ? 0 : 300)
      }
    }
  }
  // 滚动到指定位置，y为与顶部的距离，单位为px
  const scrollToY = (y: number, animate: boolean) => {
    privateScrollWithAnimation.value = animate ? 1 : 0;
    scrollTop.value = oldScrollTop.value;
    nextTick(() => {
      scrollTop.value = y;
    })
  }
  // 滚动到顶部
  const scrollToTop = (animate: boolean) => {
    scrollToY(0, animate);
    _checkShouldShowBackToTop(0);
  }
  // 滚动到底部
  const scrollToBottom = (animate: boolean) => {
    scrollToY(99999999, animate);
  }
  // emit query事件
  const _emitQuery = (pageNoValue: number, pageSizeValue: number) => {
    isLoading.value = true;
    emit('query', pageNoValue, pageSizeValue, queryFrom.value);
  }
  // 清理下拉刷新complete延迟定时器
  const _cleanRefresherCompleteDelayTimer = () => {
    if (refresherCompleteDelayTimer.value !== null) {
      clearTimeout(refresherCompleteDelayTimer.value!);
      refresherCompleteDelayTimer.value = null;
    }
  }

  // 清理下拉刷新回弹动画定时器
  const _cleanRefresherEndAnimateTimer = () => {
    if (refresherEndAnimateTimer.value !== null) {
      clearTimeout(refresherEndAnimateTimer.value!);
      refresherEndAnimateTimer.value = null;
    }
  }

  // 刷新列表数据
  const reload = () => {
    // 清理可能正在进行的complete延迟定时器
    _cleanRefresherCompleteDelayTimer()
    _cleanRefresherEndAnimateTimer()
    pageNo.value = props.defaultPageNo;
    forceHideLoadMore.value = true;
    if (props.showRefresherWhenReload) {
      nextTick(() => {
        refresherTriggered.value = true;
      })
      return;
    }
    if (props.cleanListWhenReload) {
      totalData.value = [];
    }
    if (props.scrollToTopWhenReload) {
      scrollToTop(false);
    }
    queryFrom.value = Enum.QueryFrom.Reload;
    _emitQuery(pageNo.value, props.defaultPageSize);
  }
  // 直接结束下拉刷新状态
  const endRefresh = () => {
    // 清理定时器
    _cleanRefresherCompleteDelayTimer()
    _cleanRefresherEndAnimateTimer()
    // 设置下拉刷新状态为结束
    refresherTriggered.value = false;
    refresherStatus.value = Enum.Refresher.Default;
    isLoading.value = false;
  }

  // 请求结束(成功)调用此方法，将请求的结果数组传递给z-paging-x处理
  const complete = (data: null | any[]) => {
    const finalData: any[] = data === null ? [] : data;
    isLoadFailed.value = false;

    // 计算是否需要显示complete状态（refresherCompleteDelay > 0 且是用户主动下拉刷新或showRefresherWhenReload时为true）
    const needCompleteDelay = props.refresherCompleteDelay > 0 && (queryFrom.value === Enum.QueryFrom.UserPullDown || props.showRefresherWhenReload);

    if (needCompleteDelay) {
      // 先设置为complete状态，显示完成文字和成功图标
      refresherStatus.value = Enum.Refresher.Complete;
      // 不立即结束刷新，等待延迟时间后执行回弹动画
      _cleanRefresherCompleteDelayTimer();
      _cleanRefresherEndAnimateTimer();
      refresherCompleteDelayTimer.value = setTimeout(() => {
        // 触发系统收回动画（refresher-triggered=false），此时仍保持Complete状态显示成功图标和文字
        refresherTriggered.value = false;
        // 等收回动画结束后，再将状态切回default，箭头变回原来的样子
        refresherEndAnimateTimer.value = setTimeout(() => {
          refresherStatus.value = Enum.Refresher.Default;
          isLoading.value = false;
        }, props.refresherCompleteDuration);
      }, props.refresherCompleteDelay);
    } else {
      // 无需延迟，直接结束
      endRefresh();
    }

    const currentData: any[] = [...finalData];

    // customNoMore：-1代表交由z-paging-x自行判断；1代表没有更多了；0代表还有更多数据
    if (customNoMore.value != -1) {
      // 如果customNoMore等于1 或者 customNoMore不是0并且新增数组长度为0(也就是不是明确的还有更多数据并且新增的数组长度为0)，则没有更多数据了
      if (customNoMore.value == 1 || (customNoMore.value != 0 && finalData.length == 0)) {
        loadMoreStatus.value = Enum.More.NoMore;
      }
    } else {
      // 如果新增的数据数组长度为0 或者 新增的数组长度小于默认的pageSize，则没有更多数据了
      if (finalData.length == 0 || (finalData.length > 0 && finalData.length < props.defaultPageSize)) {
        loadMoreStatus.value = Enum.More.NoMore;
      } else {
        loadMoreStatus.value = Enum.More.Default;
      }
    }
    // 如果是第一页，则覆盖当前数据；如果是加载更多，则拼接数据
    if (isFirstPage.value) {
      totalData.value = currentData;
      if (props.showRefresherUpdateTime) {
        // 更新数据刷新时间
        updateRefesrherTime(props.refresherUpdateTimeKey);
        refresherTimeTextTimestamp.value = getTime();
      }
    } else {
      totalData.value = totalData.value.concat(currentData);
    }
    nextTick(() => {
      setTimeout(() => {
        forceHideLoadMore.value = false;
      }, 100)
    })
  }
  //【自行判断是否有更多数据】请求成功调用此方法，将请求的结果传递给z-paging-x处理，第一个参数为请求结果数组，第二个参数为是否没有更多数据
  const completeByNoMore = (data: null | any[], nomore: boolean) => {
    customNoMore.value = nomore == true ? 1 : 0;
    complete(data);
  }
  //【通过total判断是否有更多数据】请求成功调用此方法，将请求的结果传递给z-paging-x处理，第一个参数为请求结果数组，第二个参数为total(列表总数)
  const completeByTotal = (data: null | any[], total: number) => {
    const finalData: any[] = data === null ? [] : data;
    nextTick(() => {
      let nomore = false;
      const realTotalDataCount = isFirstPage.value ? 0 : totalData.value.length;
      const dataLength = finalData.length;
      let exceedCount = realTotalDataCount + dataLength - total;
      // 没有更多数据了
      if (exceedCount >= 0) {
        nomore = true;
        // 仅截取total内部分的数据
        exceedCount = props.defaultPageSize - exceedCount;
        if (exceedCount > 0 && exceedCount < finalData.length) {
          data = finalData.splice(0, exceedCount);
        }
      }
      completeByNoMore(data, nomore);
    })
  }
  // 请求结束(失败)调用此方法，将自动展示失败页面
  const completeByError = () => {
    isLoadFailed.value = true;
    endRefresh();
  }
  // 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取
  // 调用此方法时会自动触发queryList，pageNo=1，pageSize=总条数（前N页的总量）
  // 刷新完成后继续滚动到底部，pageNo会继续累加
  const refresh = () => {
    // 没有数据时降级为reload
    if (totalData.value.length == 0) {
      reload();
      return;
    }
    // 计算目标总条数（从第1页开始刷新，pageSize扩大到覆盖当前所有数据）
    const targetTotal = pageNo.value * props.defaultPageSize;
    isLoading.value = true;
    // 重置pageNo为1，pageSize扩大为覆盖所有数据
    pageNo.value = props.defaultPageNo;
    // 触发query事件，from为refresh
    queryFrom.value = Enum.QueryFrom.Refresh;
    _emitQuery(props.defaultPageNo, targetTotal);
  }
  // (仅listIs = scroll-view有效)子元素开始滚动时触发, return true表示与子元素开启滚动协商
  const _onStartNestedScroll = (_: StartNestedScrollEvent): boolean => {
    return true;
  }
  // (仅listIs = scroll-view有效)子元素滚动时触发，可执行event.consumed(x,y)告知子元素deltaX、deltaY各消耗多少。子元素将执行差值后的deltaX、deltaY滚动距离
  const _onNestedPreScroll = (event: NestedPreScrollEvent) => {
    if (zpxList.value != null) {
      emit('nestedprescroll', event, zpxList.value!);
    }
  }
  // 下拉刷新控件被下拉事件
  const _onRefresherpulling = (e: RefresherEvent) => {
    emit('refresherpulling', e.detail.dy);
    if (!isLoading.value) {
      refresherStatus.value = e.detail.dy < finalRefresherThreshold.value ? Enum.Refresher.Default : Enum.Refresher.ReleaseToRefresh;
    }
  }
  // 处理用户下拉刷新
  const _handleRefresh = () => {
    // 清理可能正在进行的complete延迟定时器
    _cleanRefresherCompleteDelayTimer()
    _cleanRefresherEndAnimateTimer()
    refresherStatus.value = Enum.Refresher.Loading;
    refresherTriggered.value = true;
    pageNo.value = props.defaultPageNo;
    queryFrom.value = Enum.QueryFrom.UserPullDown;
    _emitQuery(pageNo.value, props.defaultPageSize);
  }
  // 下拉刷新被触发事件
  const _onRefresherrefresh = (e: RefresherEvent) => {
    emit('refresherrefresh', e);
    emit('onRefresh');
    emit('Refresh');
    _handleRefresh();
  }
  // 下拉刷新被复位事件
  const _onRefresherrestore = (e: RefresherEvent) => {
    emit('refresherrestore', e);
    // 如果当前正处于complete延迟状态，不要立即切回default，等动画完成后再切
    if (refresherStatus.value !== Enum.Refresher.Complete) {
      refresherStatus.value = Enum.Refresher.Default;
    }
  }
  // 下拉刷新被中止事件
  const _onRefresherabort = (e: RefresherEvent) => {
    emit('refresherabort', e);
  }
  // 处理加载更多数据
  const _handleLoadMore = () => {
    if (!props.loadMoreEnabled || isLoading.value || loadMoreStatus.value === Enum.More.NoMore) return;
    // 将底部加载更多状态设置为加载中
    loadMoreStatus.value = Enum.More.Loading;
    pageNo.value ++;
    queryFrom.value = Enum.QueryFrom.LoadMore;
    _emitQuery(pageNo.value, props.defaultPageSize);
  }
  // 滚动到底部事件
  const _onScrolltolower = (e: ScrollToLowerEvent) => {
    _handleLoadMore();
    emit('scrolltolower', e);
  }
  // 滚动到顶部事件
  const _onScrolltoupper = (e: ScrollToUpperEvent) => {
    emit('scrolltoupper', e);
  }
  // 列表正在滚动事件
  const _onScroll = (e: ScrollEvent) => {
    emit('scroll', e);
    oldScrollTop.value = e.detail.scrollTop;
    _checkShouldShowBackToTop(oldScrollTop.value);
  }
  //处理滚动到顶部
  const _handleToTop = () => {
    scrollToTop(true);
  }
  //点击返回顶部
  const _onBackToTopClick = () => {
    let callbacked: boolean = false;
    emit('backToTopClick', (toTop: boolean) => {
      if (toTop != false) {
        _handleToTop();
      }
      callbacked = true;
    });
    nextTick(() => {
      if (!callbacked) {
        _handleToTop();
      }
    })
  }

  onMounted(() => {
    pageNo.value = props.defaultPageNo;
    // layoutOnly为true时跳过自动加载
    if (!props.layoutOnly && props.auto) {
      reload();
    }
    if (props.layoutOnly) {
      endRefresh();
    }
    // 更新缓存的refresher高度
    nextTick(() => {
      if (props.refresherEnabled) {
        const refresherEle = zpxListRefresher.value;
        if (refresherEle !== null) {
          refresherEle.getBoundingClientRectAsync()!.then((rect : DOMRect) => {
            refresherNodeHeight.value = rect.height;
          })
        }
      }


      const zPagingXEle = zPagingX.value;
      if (zPagingXEle !== null) {
        zPagingXEle.getBoundingClientRectAsync()!.then((rect : DOMRect) => {
          contentWidth.value = rect.width;
        })
      }
    })

  })

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
  })

return (): any | null => {

const _component_z_paging_x_empty = resolveEasyComponent("z-paging-x-empty",_easycom_z_paging_x_empty)

  return _cE("view", _uM({
    ref_key: "zPagingX",
    ref: zPagingX,
    class: _nC(_uM({ 'zpx-content':true })),
    style: _nS([_ctx.pagingStyle])
  }), [
    renderSlot(_ctx.$slots, "top"),
    _ctx.listIs === 'list-view'
      ? _cE("list-view", _uM({
          key: 0,
          ref_key: "zpxList",
          ref: zpxList,
          class: "zpx-list-view zpx-flex1",
          id: _ctx.listId,
          "refresher-enabled": _ctx.refresherEnabled,
          "refresher-threshold": finalRefresherThreshold.value,
          "refresher-triggered": refresherTriggered.value,
          "refresher-default-style": _ctx.useCustomRefresher ? 'none' : 'black',
          "custom-nested-scroll": _ctx.customNestedScroll,
          "refresher-background": _ctx.refresherBackground,
          rebound: _ctx.rebound,
          "scroll-top": scrollTop.value,
          "show-scrollbar": _ctx.showScrollbar,
          "scroll-with-animation": finalScrollWithAnimation.value,
          onRefresherpulling: _onRefresherpulling,
          onRefresherrefresh: _onRefresherrefresh,
          onRefresherrestore: _onRefresherrestore,
          onRefresherabort: _onRefresherabort,
          onScrolltolower: _onScrolltolower,
          onScrolltoupper: _onScrolltoupper,
          onScroll: _onScroll,
          onStartnestedscroll: _onStartNestedScroll,
          onNestedprescroll: _onNestedPreScroll
        }), [
          renderSlot(_ctx.$slots, "default"),
          _cE("list-item", null, [
            isTrue(showLoadMore.value)
              ? _cE(Fragment, _uM({ key: 0 }), [
                  isTrue(_ctx.$slots['loadMore'])
                    ? renderSlot(_ctx.$slots, "loadMore", _uM({
                        key: 0,
                        loadMoreStatus: loadMoreStatus.value
                      }))
                    : _cV(unref(zPagingLoadMore), _uM({
                        key: 1,
                        status: loadMoreStatus.value,
                        "default-text": _ctx.loadMoreDefaultText,
                        "loading-text": _ctx.loadMoreLoadingText,
                        "no-more-text": _ctx.loadMoreNoMoreText,
                        "fail-text": _ctx.loadMoreFailText,
                        onClickMore: _handleLoadMore
                      }), null, 8 /* PROPS */, ["status", "default-text", "loading-text", "no-more-text", "fail-text"])
                ], 64 /* STABLE_FRAGMENT */)
              : _cC("v-if", true)
          ]),
          _cE("list-item", _uM({ slot: "refresher" }), [
            _cE("view", _uM({
              ref_key: "zpxListRefresher",
              ref: zpxListRefresher,
              class: "zpx-list-refresher",
              style: _nS(_uM({ width: contentWidth.value + 'px' }))
            }), [
              isTrue(_ctx.$slots['refresher'])
                ? renderSlot(_ctx.$slots, "refresher", _uM({
                    key: 0,
                    refresherStatus: refresherStatus.value
                  }))
                : _cV(unref(zPagingRefresher), _uM({
                    key: 1,
                    ref: "commonRefresher",
                    "default-text": _ctx.refresherDefaultText,
                    "pulling-text": _ctx.refresherPullingText,
                    "refreshing-text": _ctx.refresherRefreshingText,
                    "complete-text": _ctx.refresherCompleteText,
                    status: refresherStatus.value,
                    "show-update-time": _ctx.showRefresherUpdateTime,
                    "update-time-key": _ctx.refresherUpdateTimeKey,
                    "time-text-timestamp": refresherTimeTextTimestamp.value
                  }), null, 8 /* PROPS */, ["default-text", "pulling-text", "refreshing-text", "complete-text", "status", "show-update-time", "update-time-key", "time-text-timestamp"])
            ], 4 /* STYLE */)
          ]),
          _cE("list-item", _uM({
            class: _nC(showEmpty.value ? 'zpx-flex1' : '')
          }), [
            isTrue(showEmpty.value)
              ? _cE(Fragment, _uM({ key: 0 }), [
                  isTrue(_ctx.$slots['empty'])
                    ? renderSlot(_ctx.$slots, "empty", _uM({
                        key: 0,
                        isLoadFailed: isLoadFailed.value
                      }))
                    : _cV(_component_z_paging_x_empty, _uM({
                        key: 1,
                        "empty-text": !isLoadFailed.value ? _ctx.emptyText : _ctx.emptyErrorText,
                        "empty-img": !isLoadFailed.value ? _ctx.emptyImg : _ctx.emptyErrorImg,
                        "is-load-failed": isLoadFailed.value,
                        "show-empty-reload": isLoadFailed.value,
                        onReload: reload
                      }), null, 8 /* PROPS */, ["empty-text", "empty-img", "is-load-failed", "show-empty-reload"])
                ], 64 /* STABLE_FRAGMENT */)
              : _cC("v-if", true),
            isTrue(showLoading.value)
              ? renderSlot(_ctx.$slots, "loading", _uM({ key: 1 }))
              : _cC("v-if", true)
          ], 2 /* CLASS */)
        ], 40 /* PROPS, NEED_HYDRATION */, ["id", "refresher-enabled", "refresher-threshold", "refresher-triggered", "refresher-default-style", "custom-nested-scroll", "refresher-background", "rebound", "scroll-top", "show-scrollbar", "scroll-with-animation"])
      : _cE("scroll-view", _uM({
          key: 1,
          ref_key: "zpxList",
          ref: zpxList,
          class: "zpx-list-view zpx-flex1",
          id: _ctx.listId,
          "refresher-enabled": _ctx.refresherEnabled,
          "refresher-threshold": finalRefresherThreshold.value,
          "refresher-triggered": refresherTriggered.value,
          "refresher-default-style": _ctx.useCustomRefresher ? 'none' : 'black',
          "custom-nested-scroll": _ctx.customNestedScroll,
          "refresher-background": _ctx.refresherBackground,
          rebound: _ctx.rebound,
          "scroll-top": scrollTop.value,
          "show-scrollbar": _ctx.showScrollbar,
          "scroll-with-animation": finalScrollWithAnimation.value,
          onRefresherpulling: _onRefresherpulling,
          onRefresherrefresh: _onRefresherrefresh,
          onRefresherrestore: _onRefresherrestore,
          onRefresherabort: _onRefresherabort,
          onScrolltolower: _onScrolltolower,
          onScrolltoupper: _onScrolltoupper,
          onScroll: _onScroll,
          onStartnestedscroll: _onStartNestedScroll,
          onNestedprescroll: _onNestedPreScroll
        }), [
          renderSlot(_ctx.$slots, "default"),
          _cE("view", null, [
            isTrue(showLoadMore.value)
              ? _cE(Fragment, _uM({ key: 0 }), [
                  isTrue(_ctx.$slots['loadMore'])
                    ? renderSlot(_ctx.$slots, "loadMore", _uM({
                        key: 0,
                        loadMoreStatus: loadMoreStatus.value
                      }))
                    : _cV(unref(zPagingLoadMore), _uM({
                        key: 1,
                        status: loadMoreStatus.value,
                        "default-text": _ctx.loadMoreDefaultText,
                        "loading-text": _ctx.loadMoreLoadingText,
                        "no-more-text": _ctx.loadMoreNoMoreText,
                        "fail-text": _ctx.loadMoreFailText,
                        onClickMore: _handleLoadMore
                      }), null, 8 /* PROPS */, ["status", "default-text", "loading-text", "no-more-text", "fail-text"])
                ], 64 /* STABLE_FRAGMENT */)
              : _cC("v-if", true)
          ]),
          _cE("view", _uM({ slot: "refresher" }), [
            _cE("view", _uM({
              ref_key: "zpxListRefresher",
              ref: zpxListRefresher,
              class: "zpx-list-refresher",
              style: _nS(_uM({ width: contentWidth.value + 'px' }))
            }), [
              isTrue(_ctx.$slots['refresher'])
                ? renderSlot(_ctx.$slots, "refresher", _uM({
                    key: 0,
                    refresherStatus: refresherStatus.value
                  }))
                : _cV(unref(zPagingRefresher), _uM({
                    key: 1,
                    ref: "commonRefresher",
                    "default-text": _ctx.refresherDefaultText,
                    "pulling-text": _ctx.refresherPullingText,
                    "refreshing-text": _ctx.refresherRefreshingText,
                    "complete-text": _ctx.refresherCompleteText,
                    status: refresherStatus.value,
                    "show-update-time": _ctx.showRefresherUpdateTime,
                    "update-time-key": _ctx.refresherUpdateTimeKey,
                    "time-text-timestamp": refresherTimeTextTimestamp.value
                  }), null, 8 /* PROPS */, ["default-text", "pulling-text", "refreshing-text", "complete-text", "status", "show-update-time", "update-time-key", "time-text-timestamp"])
            ], 4 /* STYLE */)
          ]),
          _cE("view", _uM({
            class: _nC(showEmpty.value ? 'zpx-flex1' : '')
          }), [
            isTrue(showEmpty.value)
              ? _cE(Fragment, _uM({ key: 0 }), [
                  isTrue(_ctx.$slots['empty'])
                    ? renderSlot(_ctx.$slots, "empty", _uM({
                        key: 0,
                        isLoadFailed: isLoadFailed.value
                      }))
                    : _cV(_component_z_paging_x_empty, _uM({
                        key: 1,
                        "empty-text": !isLoadFailed.value ? _ctx.emptyText : _ctx.emptyErrorText,
                        "empty-img": !isLoadFailed.value ? _ctx.emptyImg : _ctx.emptyErrorImg,
                        "is-load-failed": isLoadFailed.value,
                        "show-empty-reload": isLoadFailed.value,
                        onReload: reload
                      }), null, 8 /* PROPS */, ["empty-text", "empty-img", "is-load-failed", "show-empty-reload"])
                ], 64 /* STABLE_FRAGMENT */)
              : _cC("v-if", true),
            isTrue(showLoading.value)
              ? renderSlot(_ctx.$slots, "loading", _uM({ key: 1 }))
              : _cC("v-if", true)
          ], 2 /* CLASS */)
        ], 40 /* PROPS, NEED_HYDRATION */, ["id", "refresher-enabled", "refresher-threshold", "refresher-triggered", "refresher-default-style", "custom-nested-scroll", "refresher-background", "rebound", "scroll-top", "show-scrollbar", "scroll-with-animation"]),
    renderSlot(_ctx.$slots, "bottom"),
    isTrue(showBackToTopClass.value)
      ? _cE("view", _uM({
          key: 2,
          class: _nC(backToTopClass.value),
          style: _nS([_ctx.backToTopStyle]),
          onClick: withModifiers(_onBackToTopClick, ["stop"])
        }), [
          isTrue(_ctx.$slots['backToTop'])
            ? renderSlot(_ctx.$slots, "backToTop", _uM({ key: 0 }))
            : _cE("image", _uM({
                key: 1,
                class: "zpx-back-to-top-img",
                src: _ctx.backToTopImg.length > 0 ? _ctx.backToTopImg : base64BackToTopImg.value
              }), null, 8 /* PROPS */, ["src"])
        ], 6 /* CLASS, STYLE */)
      : _cC("v-if", true)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type ZPagingXComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesZPagingXComponentsZPagingXZPagingXStyles = [_uM([["zpx-content", _pS(_uM([["height", "100%"]]))], ["zpx-flex1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["zpx-back-to-top", _pS(_uM([["width", "76rpx"], ["height", "76rpx"], ["zIndex", 999], ["position", "absolute"], ["bottom", "260rpx"], ["right", "25rpx"], ["transitionDuration", ".3s"], ["transitionProperty", "opacity"]]))], ["zpx-back-to-top-show", _pS(_uM([["opacity", 1]]))], ["zpx-back-to-top-hide", _pS(_uM([["opacity", 0]]))], ["zpx-back-to-top-img", _pS(_uM([["width", "100%"], ["height", "100%"], ["zIndex", 999]]))], ["@TRANSITION", _uM([["zpx-back-to-top", _uM([["duration", ".3s"], ["property", "opacity"]])]])]])]
