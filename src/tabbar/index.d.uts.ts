/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
import type { ComputedRef, Ref } from 'vue';

/**
 * Tabbar 对象完整配置（完全对齐 uni-app 官方 pages.json tabBar 节点规范）
 * 包含 color、selectedColor、backgroundColor、borderStyle、midButton 以及 list 列表等
 */
export declare const customTabbarConfig: TabBarConfig;

/**
 * 当前页面是否处于显示状态
 *
 * 由页面的 onShow / onHide 经 notifyPageShow() / notifyPageHide() 维护。
 * 模式 4（单页面 TabBar）已在容器页 `src/pages/index/index.uvue` 内置桥接；
 * 模式 0-3 若也需要「从子页面返回时触发」，请在对应 Tab 页面里同样调用这两个方法。
 */
export declare const isPageVisible: Ref<boolean>;

/** 页面累计显示次数，> 0 表示页面至少显示过一次（供 onTabPageShow 的 immediate 判定补发时机） */
export declare const pageShowTimes: Ref<number>;

/**
 * 通知「当前页面已显示」：请在页面（Tab 容器页）的 onShow 中调用
 *
 * 与 onTabShow 的 curIdx 监听互补，负责覆盖「页面回来了」这一半场景：
 * 从子页面 navigateBack 返回、App 从后台回到前台、页面重新可见。
 */
export declare function notifyPageShow(): void;

/**
 * 通知「当前页面已隐藏」：请在页面（Tab 容器页）的 onHide 中调用
 *
 * 置为隐藏后，切换 Tab 的通知会被抑制，避免「在子页面里切 Tab，回调却在容器页
 * 尚不可见时提前跑掉」；等页面真的回来时，再由 notifyPageShow() 补发一次。
 */
export declare function notifyPageHide(): void;

/**
 * 监听指定 Tab 页面显示（在「页面可见」且「当前激活 Tab 命中」时触发）
 *
 * 相比 onTabShow 只盯 curIdx，本方法额外要求页面可见，因此能覆盖两类时机：
 * 1. 切换 Tab 到该页（curIdx 变化）——与 onTabShow 相同；
 * 2. 页面重新显示（原生 onShow：从子页面返回、App 回前台）——onTabShow 覆盖不到。
 *
 * @param index 对应 Tab 索引（0: 首页, 1: 基础, 2: 功能, 3: 我的）
 * @param callback 页面显示时的回调函数
 * @param immediate 若注册时页面已经显示过且当前 Tab 正好激活，是否立即补发一次
 *                  （首次进入页面时不会再重复触发：那一次由紧随其后的 onShow 通知负责）
 */
export declare function onTabPageShow(index: number, callback: () => void, immediate: boolean = false): void;

/** tabbar 白色底板高度（px），基准值统一引用 systemInfo 中的 TABBAR_BASE_HEIGHT */
export declare const TABBAR_HEIGHT: number;

/** tabbar 容器总高度（包含鼓包突出的部分，px） */
export declare const TABBAR_CONTAINER_HEIGHT: number;

/** 亮 / 暗主题 token（与 theme.json tabBar 配置同步） */
export declare const themeTokens: any;

/** 安全区底部高度，从全局 systemInfo 工具中响应式读取 */
export declare const safeAreaBottom: ComputedRef<number>;

/** 是否为 5.25 及以上版本编译器（仅在 5.25 及以上 H5 启用 absolute 脱离文档流） */
export declare const isVersionGte525: ComputedRef<boolean>;

/** 占位块高度：统一为 50 + 底部安全区，占据正常文档流防止遮挡滚动内容 */
export declare const tabbarPlaceholderHeight: ComputedRef<number>;

/**
 * 隐藏系统原生 TabBar 并根据编译器版本动态适配 H5 底部容器
 */
export declare function safeHideNativeTabBar(): void;

/**
 * 根据当前 TabBar 模式安全跳转到指定的 Tabbar 页面
 * - 模式 1 / 模式 2 (具备原生底座配置)：调用 uni.switchTab，保留页面缓存
 * - 模式 0 / 模式 3 (无原生配置)：调用 uni.redirectTo
 * 内部自动同步激活索引
 */
export declare function switchTabbar(url: string): void;

/** 点击 tab 切换路由跳转逻辑 */
export declare function handleTabbarClick(index: number): void;

/**
 * 初始化原生 TabBar 中间按钮 (midButton) 点击监听
 * 仅在原生 TabBar 模式 (模式 1) 且配置了 midButton 时自动注册
 */
export declare function initNativeMidButtonTap(): void;

export declare const tabbarList: CustomTabBarItem[];

/**
 * 当前选中的 tab 索引（持久化到 storage）
 */
export declare const curIdx: Ref<number>;

/** 设置当前索引并持久化 */
export declare function setCurIdx(idx: number): void;

/** 设置某项的 badge */
export declare function setTabbarItemBadge(idx: number, badge: CustomTabBarItemBadge): void;

/** 根据给定的页面路径手动同步索引 */
export declare function setCurIdxByPath(path: string): void;

/** 根据当前页面路径自动同步索引 */
export declare function syncCurIdxByCurrentPage(): void;

/** 判断是否是 tabbar 页面 */
export declare function isPageTabbar(path: string): boolean;

/**
 * 监听指定 Tab 激活显示（当单页面模式切换到该 Tab 时触发，可用于刷新数据或重新请求接口）
 * @param index 对应 Tab 索引（0: 首页, 1: 基础, 2: 功能, 3: 我的）
 * @param callback 激活显示时的回调函数
 * @param immediate 若首次加载时当前 Tab 正好处于激活状态，是否立即执行一次（默认 false）
 */
export declare function onTabShow(index: number, callback: () => void, immediate: boolean = false): void;

/**
 * Tabbar 策略映射结构类型
 */
export type TabbarStrategyType = {
  NO_TABBAR: number;
  NATIVE_TABBAR: number;
  CUSTOM_TABBAR_WITH_NATIVE: number;
  CUSTOM_TABBAR_WITHOUT_NATIVE: number;
  SINGLE_PAGE_TABBAR: number;
  CUSTOM_TABBAR: number;
};

/**
 * tabbar 选择的策略（支持 5 种模式）
 * 0: NO_TABBAR (无 tabbar)
 * 1: NATIVE_TABBAR (原生 tabbar，pages.json 自动生成配置，带页面状态缓存，使用 uni.switchTab)
 * 2: CUSTOM_TABBAR_WITH_NATIVE (【带缓存】自定义 tabbar，pages.json custom:true，隐藏原生，保留页面状态缓存，使用 uni.switchTab)
 * 3: CUSTOM_TABBAR_WITHOUT_NATIVE (【不缓存】纯自定义 tabbar，pages.json 无 tabBar 节点，使用 uni.redirectTo，每次切换重新加载页面)
 * 4: SINGLE_PAGE_TABBAR (【单页保活零闪烁】单页面容器切换 TabBar：无跨页面路由跳转，零闪烁，页面状态天然保活，参考 rice-ui)
 */
export declare const TABBAR_STRATEGY_MAP: TabbarStrategyType;

/** 解析环境变量中的 Tabbar 模式 */
export declare function parseTabbarStrategy(): number;

/** 当前激活的 Tabbar 策略 */
export declare const selectedTabbarStrategy: number;

/** 是否为单页面容器 TabBar 模式（模式 4 为 true） */
export declare const isSinglePageTabbar: boolean;

/** 是否使用原生 tabbar（模式 1 为 true） */
export declare const isNativeTabbar: boolean;

/** 是否需要隐藏原生 tabbar（模式 2 为 true） */
export declare const needHideNativeTabbar: boolean;

/** 当前配置的 TabBar UI 风格形态（如 'capsule' | 'default'，从 config.uts 中读取） */
export declare const tabbarType: string;

/** 是否启用了自定义 TabBar（模式 2 或 3 为 true）——根组件 App.ku.uvue 用它决定是否渲染 <Tabbar> */
export declare const customTabbarEnable: boolean;

/** badge 类型：数字或小红点 */
export type CustomTabBarItemBadge = number | 'dot';

/** 自定义 tabbar 单项配置 */
export type CustomTabBarItem = {
  /** 显示文本（支持 i18n key，如 tabbar.home） */
  text: string;
  /** 页面路径（不带前导 /） */
  pagePath: string;
  /** 图标类型，'icon' 为 uni-icons 字体图标，'image' 为本地图片 */
  iconType: string;
  /** 字体图标名称（如 'home'）或图片路径 */
  icon: string;
  /** 高亮字体图标名称（如 'home-filled'）或高亮图片路径 */
  iconActive: string;
  /** 原生 TabBar 图标路径（可选） */
  iconPath?: string;
  /** 原生 TabBar 高亮图标路径（可选） */
  selectedIconPath?: string;
  /** badge */
  badge: CustomTabBarItemBadge | null;
  /** 是否是中间鼓包 tabbarItem */
  isBulge: boolean;
};

/** midButton 的 iconfont 字体图标配置 */
export type TabBarMidButtonIconfont = {
  /** 字体的 unicode 字符内容 */
  text?: string;
  /** 选中时的 unicode 字符内容 */
  selectedText?: string;
  /** 字体大小 */
  fontSize?: string;
  /** 字体颜色 */
  color?: string;
  /** 选中时的字体颜色 */
  selectedColor?: string;
};

/** midButton 中间鼓包按钮配置（完全对齐 uni-app 原生 midButton 规范） */
export type TabBarMidButton = {
  /** 中间按钮的宽度，默认与其它项平分宽度（默认 "80px"） */
  width?: string;
  /** 中间按钮的高度，可以大于 tabBar 高度，达到中间凸起的效果（默认 "80px"） */
  height?: string;
  /** 中间按钮的文字 */
  text?: string;
  /** 中间按钮的图片路径 (ImageURIString) */
  iconPath?: string;
  /** 图标默认宽度（高度等比例缩放，默认 "24px"） */
  iconWidth?: string;
  /** 中间按钮的背景图片路径 */
  backgroundImage?: string;
  /** 字体图标，优先级高于 iconPath */
  iconfont?: TabBarMidButtonIconfont;
  /** 点击跳转路径（自定义模式使用） */
  pagePath?: string;
  /** 可选：单页 TabBar 模式对应视图组件路径（不填则自动探测对应页面的 views 组件） */
  viewPath?: string;
  /** 图标类型，'icon' 为 uni-icons 字体图标，'image' 为本地图片 */
  iconType?: string;
  /** 字体图标名称或图片路径 */
  icon?: string;
  /** 高亮字体图标名称或高亮图片路径 */
  iconActive?: string;
  /** 原生 TabBar 高亮图标路径 */
  selectedIconPath?: string;
  /** badge */
  badge?: CustomTabBarItemBadge | null;
  /** 是否是鼓包按钮 */
  isBulge?: boolean;
};

/** Tabbar 完整对象配置（完全对齐 uni-app 原生 pages.json tabBar 配置项规范） */
export type TabBarConfig = {
  /** 自定义 TabBar 样式形态：'default'（标准贴底底座） | 'capsule'（悬浮胶囊岛屿） */
  type?: string;
  /** tab 上的文字默认颜色 */
  color?: string;
  /** tab 上的文字选中时的颜色 */
  selectedColor?: string;
  /** tab 的背景色 */
  backgroundColor?: string;
  /** tabbar 上边框的颜色，可选值 black、white */
  borderStyle?: string;
  /** tabbar 上边框的颜色（优先级高于 borderStyle） */
  borderColor?: string;
  /** 高斯模糊效果: 'dark' | 'extralight' | 'light' | 'none' */
  blurEffect?: string;
  /** 是否开启玻璃效果 tabBar */
  glassEffect?: boolean;
  /** tabbar 的位置，可选值 bottom、top */
  position?: string;
  /** 文字默认大小 */
  fontSize?: string;
  /** 图标默认宽度 */
  iconWidth?: string;
  /** 图标和文字的间距 */
  spacing?: string;
  /** tabBar 默认高度 */
  height?: string;
  /** 中间按钮配置（仅在 list 项为偶数时有效） */
  midButton?: TabBarMidButton;
  /** list 设置 iconfont 属性时，需要指定字体文件路径 */
  iconfontSrc?: string;
  /** 设置背景图片，优先级高于 backgroundColor */
  backgroundImage?: string;
  /** 设置标题栏的背景图平铺方式 */
  backgroundRepeat?: string;
  /** tabbar 上红点颜色 */
  redDotColor?: string;
  /** tab 列表配置（最少2个、最多5个） */
  list: CustomTabBarItem[];
};
