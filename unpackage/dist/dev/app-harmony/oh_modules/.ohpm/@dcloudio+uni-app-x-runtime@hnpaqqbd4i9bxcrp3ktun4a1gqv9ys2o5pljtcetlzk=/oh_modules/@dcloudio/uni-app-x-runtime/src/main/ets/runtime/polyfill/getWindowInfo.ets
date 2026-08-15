import { display } from '@kit.ArkUI';
import { getSafeAreaInsets } from '../helper';
import { UniPageImpl } from "../UniPage";

import {
  IWindowInfo,
  getNativeWindowRect,
  formatValueCeil,
  formatValueRound,
} from "../window";

function getWindowInfoWithoutPage(): IWindowInfo {
  const windowRect = getNativeWindowRect();
  const safeAreaInsets = getSafeAreaInsets(true);

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
  baseWindowInfo.windowWidth = pageBody.width
  baseWindowInfo.windowHeight = pageBody.height
  return baseWindowInfo
}

export function getWindowInfo(): IWindowInfo {
  const pages = globalThis.getCurrentPages() as UniPageImpl[];
  if (pages.length > 0) {
    return getWindowInfoWithPage(pages[pages.length - 1]);
  }
  return getWindowInfoWithoutPage();
}