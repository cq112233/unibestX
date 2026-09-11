const pages = [
  new UTSJSONObject({
    path: "src/pages/index/index",
    customPageClass: "border-radius-12",
    customPageStyle: "background-color: transparent;",
    layout: "navbar",
    showBack: false,
    hideNavbar: false,
    enablePullDownRefresh: true,
    style: new UTSJSONObject({
      navigationBarBackgroundColor: "#ffffff",
      navigationBarTitleText: "首页",
      navigationStyle: "custom"
    })
  }),
  new UTSJSONObject({
    path: "src/pages/ai/ai",
    layout: "navbar",
    showBack: true,
    style: new UTSJSONObject({
      navigationBarTitleText: "AI 智能助手",
      navigationStyle: "custom"
    })
  }),
  new UTSJSONObject({
    path: "src/pages/basic/basic",
    layout: "navbar",
    showBack: false,
    enablePullDownRefresh: true,
    style: new UTSJSONObject({
      navigationBarTitleText: "基础",
      navigationStyle: "custom"
    })
  }),
  new UTSJSONObject({
    path: "src/pages/function/function",
    layout: "navbar",
    showBack: false,
    enablePullDownRefresh: true,
    style: new UTSJSONObject({
      navigationBarTitleText: "功能",
      navigationStyle: "custom"
    })
  }),
  new UTSJSONObject({
    path: "src/pages/me/me",
    layout: "navbar",
    showBack: false,
    enablePullDownRefresh: true,
    style: new UTSJSONObject({
      navigationBarTitleText: "我的",
      navigationStyle: "custom"
    })
  })
];
const globalStyle = new UTSJSONObject({
  navigationBarTextStyle: "@navigationBarTextStyle",
  navigationBarTitleText: "uni-app x",
  navigationBarBackgroundColor: "@navigationBarBackgroundColor",
  backgroundColor: "@backgroundColor",
  backgroundColorContent: "@backgroundColorContent",
  backgroundColorTop: "@backgroundColorTop",
  backgroundColorBottom: "@backgroundColorBottom",
  backgroundTextStyle: "@backgroundTextStyle"
});
const easycom = new UTSJSONObject({
  autoscan: true,
  custom: new UTSJSONObject({
    "^e-chart$": "@/uni_modules/e-chart/components/e-chart/e-chart.uvue"
  })
});
const tabBar = new UTSJSONObject({
  custom: true,
  color: "@tabBarColor",
  selectedColor: "@tabBarSelectedColor",
  backgroundColor: "@tabBarBackgroundColor",
  borderStyle: "@tabBarBorderStyle",
  list: [
    new UTSJSONObject({
      pagePath: "src/pages/index/index",
      text: "首页",
      iconPath: "static/tabbar/home.png",
      selectedIconPath: "static/tabbar/home_fill.png"
    }),
    new UTSJSONObject({
      pagePath: "src/pages/basic/basic",
      text: "基础",
      iconPath: "static/tabbar/tune.png",
      selectedIconPath: "static/tabbar/tune_fill.png"
    }),
    new UTSJSONObject({
      pagePath: "src/pages/function/function",
      text: "功能",
      iconPath: "static/tabbar/gear.png",
      selectedIconPath: "static/tabbar/gear_fill.png"
    }),
    new UTSJSONObject({
      pagePath: "src/pages/me/me",
      text: "我的",
      iconPath: "static/tabbar/people.png",
      selectedIconPath: "static/tabbar/people_fill.png"
    })
  ],
  iconWidth: "24px",
  height: "50px"
});
const subPackages = [
  new UTSJSONObject({
    root: "src/sub",
    pages: [
      new UTSJSONObject({
        path: "auth/login",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "登录",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "auth/register",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "注册",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "layoutDemo/layoutDemo",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "布局页面示例",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "tailwindcss/tailwindcss",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "weapp-tailwindcss 示例",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "test/test",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: true,
        style: new UTSJSONObject({
          navigationBarTitleText: "URL 参数测试",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uiTest/uiTest",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "UI 测试",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/action-sheet/action-sheet",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-action-sheet 动作面板",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/album/album",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Album 相册",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/alert/alert",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-alert 警告提示",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/avatar/avatar",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-avatar 头像",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/back-top/back-top",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Back Top 返回顶部",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/badge/badge",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-badge 徽标",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/barcode/barcode",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-barcode 条形码",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/button/button",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-button 按钮",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/calendar/calendar",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-calendar 日历",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/card/card",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-card 卡片",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/cascader/cascader",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-cascader 级联选择器",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/checkbox/checkbox",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-checkbox 复选框",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/circle-progress/circle-progress",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "CircleProgress 圆形进度条",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/code-input/code-input",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "CodeInput 验证码",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/code/code",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Code 验证码倒计时",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/collapse/collapse",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-collapse 折叠面板",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/color-picker/color-picker",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-color-picker 颜色选择",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/copy/copy",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Copy 复制",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/count-down/count-down",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "CountDown 倒计时",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/count-to/count-to",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "CountTo 数字滚动",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/coupon/coupon",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-coupon 优惠券",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/cropper/cropper",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-cropper 裁剪",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/datetime-picker/datetime-picker",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-datetime-picker 时间选择",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/divider/divider",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Divider 分割线",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/dragsort/dragsort",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-dragsort 拖拽排序",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/dropdown/dropdown",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Dropdown 下拉菜单",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/empty/empty",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Empty 空白页",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/float-button/float-button",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-float-button 悬浮按钮",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/form/form",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Form 表单",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/gap/gap",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Gap 间隔槽",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/grid/grid",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Grid 宫格",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/icon/icon",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Icon 图标",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/image/image",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Image 图片",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/index-list copy/index-list",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "IndexList 索引列表",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/index-list/index-list",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "IndexList 索引列表",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/input/input",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-input 输入框",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/keyboard/keyboard",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Keyboard 键盘",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/lazy-load/lazy-load",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Lazy Load 懒加载",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/line-progress/line-progress",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "LineProgress 线型进度条",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/line/line",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Line 线条",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/link/link",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Link 超链接",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/list/list",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-list 双列表嵌套",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/loading-icon/loading-icon",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "LoadingIcon 加载图标",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/loading-page/loading-page",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-loading-page 加载页",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/loadmore/loadmore",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Loadmore 加载更多",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/modal/modal",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-modal 模态框",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/mp-html/mp-html",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "mp-html 富文本组件",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/navbar-mini/navbar-mini",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Navbar Mini 迷你导航栏",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/navbar/navbar",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Navbar 导航栏",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/no-network/no-network",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-no-network 无网络提示",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/notice-bar/notice-bar",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-notice-bar 滚动通知",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/notify/notify",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-notify 消息通知",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/number-box/number-box",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-number-box 步进器",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/overlay/overlay",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-overlay 遮罩层",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/pagination/pagination",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Pagination 分页器",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/parse/parse",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Parse 富文本解析",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/pdf-reader/pdf-reader",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-pdf-reader PDF 阅读",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/picker/picker",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-picker 选择器",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/popup/popup",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-popup 弹出层",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/poster/poster",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-poster 海报",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/qrcode/qrcode",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Qrcode 二维码",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/radio/radio",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-radio 单选框",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/rate/rate",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-rate 评分",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/search/search",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-search 搜索",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/short-video/short-video",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-short-video 短视频",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/signature/signature",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-signature 签名",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/skeleton/skeleton",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Skeleton 骨架屏",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/slider/slider",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-slider 滑块",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/steps/steps",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Steps 步骤条",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/sticky/sticky",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Sticky 吸顶",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/subsection/subsection",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Subsection 分段器",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/swipe-action/swipe-action",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "SwipeAction 滑动操作",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/swiper/swiper",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Swiper 轮播图",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/switch/switch",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-switch 开关",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/tabbar/tabbar",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Tabbar 底部导航",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/table/table",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Table 表格",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/table2/table2",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-table2 表格",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/tabs/tabs",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Tabs 标签页",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/tag/tag",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-tag 标签",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/text/text",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Text 文本",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/textarea/textarea",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-textarea 多行文本",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/title/title",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-title 标题",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/toast/toast",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-toast 消息提示",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/tooltip/tooltip",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-tooltip 长按提示",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/transition/transition",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Transition 动画",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/tree/tree",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-tree 树形",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/upload/upload",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "up-upload 上传",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/demos/waterfall/waterfall",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "Waterfall 瀑布流",
          navigationStyle: "custom"
        })
      }),
      new UTSJSONObject({
        path: "uview-ultra/uview-ultra",
        layout: "navbar",
        showBack: true,
        hideNavbar: false,
        enablePullDownRefresh: false,
        style: new UTSJSONObject({
          navigationBarTitleText: "uview-ultra 示例",
          navigationStyle: "custom"
        })
      })
    ]
  })
];
const e = new UTSJSONObject({
  pages,
  globalStyle,
  easycom,
  tabBar,
  subPackages
});
export {
  e
};
