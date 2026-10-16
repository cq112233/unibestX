// ==========================================
// route-bestX 插件专属：uni-app X 路由 API Options 类型声明
// （navigateTo / redirectTo / reLaunch / switchTab / navigateBack）
//
// 独立放置于 route-bestX 插件目录，保证插件自包含（Self-contained），
// 无需宿主工程手动补充路由 Options 类型声明。
// ==========================================

declare global {
  /** 路由 API 成功 / 完成回调的入参 */
  type UniRouteApiResult = {
    errMsg: string;
  };

  /** 路由 API 失败回调的入参（真源 errCode 为字面量 `4`，这里放宽为 number） */
  type UniRouteApiFailResult = {
    errMsg: string;
    errCode: number;
  };

  type NavigateToOptions = {
    url: string;
    animationType?:
      | 'auto'
      | 'none'
      | 'slide-in-right'
      | 'slide-in-left'
      | 'slide-in-top'
      | 'slide-in-bottom'
      | 'fade-in'
      | 'zoom-out'
      | 'zoom-fade-out'
      | 'pop-in'
      | null;
    animationDuration?: number | null;
    events?: any | null;
    success?: ((result: UniRouteApiResult) => void) | null;
    fail?: ((result: UniRouteApiFailResult) => void) | null;
    complete?: ((result: UniRouteApiResult) => void) | null;
    routeConfig?: any | null;
    routeOptions?: any | null;
    routeType?: string | null;
    withOpenContainer?: any | null;
  };

  type RedirectToOptions = {
    url: string;
    success?: ((result: UniRouteApiResult) => void) | null;
    fail?: ((result: UniRouteApiFailResult) => void) | null;
    complete?: ((result: UniRouteApiResult) => void) | null;
  };

  type ReLaunchOptions = {
    url: string;
    success?: ((result: UniRouteApiResult) => void) | null;
    fail?: ((result: UniRouteApiFailResult) => void) | null;
    complete?: ((result: UniRouteApiResult) => void) | null;
  };

  type SwitchTabOptions = {
    url: string;
    success?: ((result: UniRouteApiResult) => void) | null;
    fail?: ((result: UniRouteApiFailResult) => void) | null;
    complete?: ((result: UniRouteApiResult) => void) | null;
  };

  type NavigateBackOptions = {
    delta?: number | null;
    animationType?:
      | 'auto'
      | 'none'
      | 'slide-out-right'
      | 'slide-out-left'
      | 'slide-out-top'
      | 'slide-out-bottom'
      | 'fade-out'
      | 'zoom-in'
      | 'zoom-fade-in'
      | 'pop-out'
      | null;
    animationDuration?: number | null;
    success?: ((result: UniRouteApiResult) => void) | null;
    fail?: ((result: UniRouteApiFailResult) => void) | null;
    complete?: ((result: UniRouteApiResult) => void) | null;
  };
}

export {};
