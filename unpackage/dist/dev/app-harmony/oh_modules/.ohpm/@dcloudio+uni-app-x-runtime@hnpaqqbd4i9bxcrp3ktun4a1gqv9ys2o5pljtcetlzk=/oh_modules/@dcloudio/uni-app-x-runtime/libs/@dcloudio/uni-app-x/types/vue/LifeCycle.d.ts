// type OnLaunchOptions = {
//   path: string
// }
type OnHide = () => void
export function onHide(hook: OnHide, target?: ComponentInternalInstance | null): void
type OnAppLaunch = (options: OnLaunchOptions) => void
export function onLaunch(hook: OnAppLaunch, target?: ComponentInternalInstance | null): void
// type OnShowOptions = {
//   path: string;
// };
type OnAppShow = (options: OnShowOptions) => void
export function onAppShow(hook: OnAppShow, target?: ComponentInternalInstance | null): void
type OnAppHide = () => void
export function onAppHide(hook: OnAppHide, target?: ComponentInternalInstance | null): void
type OnLastPageBackPress = () => void
export function onLastPageBackPress(hook: OnLastPageBackPress, target?: ComponentInternalInstance | null): void
type OnExit = () => void
export function onExit(hook: OnExit, target?: ComponentInternalInstance | null): void
// type OnLoadOptions = Map<string, string>;
type OnLoad = (options: OnLoadOptions) => void
export function onLoad(hook: OnLoad, target?: ComponentInternalInstance | null): void
type OnPageShow = () => void
export function onPageShow(hook: OnPageShow, target?: ComponentInternalInstance | null): void
type OnPageHide = () => void
export function onPageHide(hook: OnPageHide, target?: ComponentInternalInstance | null): void
type OnReady = () => void
export function onReady(hook: OnReady, target?: ComponentInternalInstance | null): void
type OnUnload = () => void
export function onUnload(hook: OnUnload, target?: ComponentInternalInstance | null): void
type OnPullDownRefresh = () => void
export function onPullDownRefresh(hook: OnPullDownRefresh, target?: ComponentInternalInstance | null): void
// type OnPageScrollOptions = {
//   scrollTop: number;
// };
type OnPageScroll = (options: OnPageScrollOptions) => void
export function onPageScroll(hook: OnPageScroll, target?: ComponentInternalInstance | null): void
type OnReachBottom = () => void
export function onReachBottom(hook: OnReachBottom, target?: ComponentInternalInstance | null): void
// type OnBackPressOptions = {
//   from: 'backbutton' | 'navigateBack';
// };
type OnBackPress = (options: OnBackPressOptions) => boolean | null
export function onBackPress(hook: OnBackPress, target?: ComponentInternalInstance | null): void
// type OnResizeSize = {
//   screenHeight: number;
//   screenWidth: number;
//   windowHeight: number;
//   windowWidth: number;
// };
// type OnResizeOptions = {
//   deviceOrientation: string;
//   size: OnResizeSize;
// };
type OnResize = (options: OnResizeOptions) => void
export function onResize(hook: OnResize, target?: ComponentInternalInstance | null): void
