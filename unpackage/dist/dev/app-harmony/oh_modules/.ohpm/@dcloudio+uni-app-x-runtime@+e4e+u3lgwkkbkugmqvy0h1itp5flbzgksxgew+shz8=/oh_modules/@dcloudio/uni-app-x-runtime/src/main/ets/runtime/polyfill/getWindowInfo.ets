import { display } from '@kit.ArkUI';
import { UniPageImpl } from "../UniPage";

import {
  IWindowInfo,
  getNativeSafeAreaInsets,
  getNativeWindowRect,
  formatValueCeil,
  formatValueRound,
} from "../window";

function getWindowInfoWithoutPage(): IWindowInfo {
  const windowRect = getNativeWindowRect();
  const safeAreaInsets = getNativeSafeAreaInsets();

  const displayInfo = display.getDefaultDisplaySync();
  return {
    safeAreaInsets: {
      top: formatValueRound(safeAreaInsets.top),
      bottom: formatValueRound(safeAreaInsets.bottom),
      left: formatValueRound(safeAreaInsets.left),
      right: formatValueRound(safeAreaInsets.right),
    },
    safeArea: {
      top: formatValueRound(safeAreaInsets.top),
      bottom: formatValueCeil(windowRect.height - safeAreaInsets.bottom),
      left: formatValueRound(safeAreaInsets.left),
      right: formatValueCeil(windowRect.width - safeAreaInsets.right),
      width: formatValueCeil(
        windowRect.width - safeAreaInsets.left - safeAreaInsets.right
      ),
      height: formatValueCeil(
        windowRect.height - safeAreaInsets.top - safeAreaInsets.bottom
      ),
    },
    statusBarHeight: formatValueRound(safeAreaInsets.top),
    pixelRatio: vp2px(1),
    screenWidth: formatValueCeil(displayInfo.width),
    screenHeight: formatValueCeil(displayInfo.height),
    windowWidth: formatValueCeil(windowRect.width),
    windowHeight: formatValueCeil(windowRect.height),
    screenTop: 0,
    windowTop: 0,
    windowBottom: 0,
  } as IWindowInfo
}

function getWindowInfoWithPage(page: UniPageImpl): IWindowInfo {
  const baseWindowInfo = getWindowInfoWithoutPage()
  const pageBody = page.pageBody
  baseWindowInfo.screenTop = pageBody.top
  // 时机过早document尺寸无法确定时，返回baseWindowInfo内的数据
  baseWindowInfo.windowWidth = pageBody.width || baseWindowInfo.windowWidth
  baseWindowInfo.windowHeight = pageBody.height || baseWindowInfo.windowHeight
  return baseWindowInfo
}

export function getWindowInfo(): IWindowInfo {
  const pages = globalThis.getCurrentPages() as UniPageImpl[];
  if (pages.length > 0) {
    const currentPage = pages[pages.length - 1]
    if(currentPage && currentPage.getNativePage()) {
      return getWindowInfoWithPage(currentPage);
    }
  }
  return getWindowInfoWithoutPage();
}