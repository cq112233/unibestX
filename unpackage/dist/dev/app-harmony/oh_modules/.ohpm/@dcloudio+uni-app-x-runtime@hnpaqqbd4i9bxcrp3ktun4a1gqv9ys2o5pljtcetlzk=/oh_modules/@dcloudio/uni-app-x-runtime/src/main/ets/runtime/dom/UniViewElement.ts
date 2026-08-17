import {
  RequestFullscreenOptions,
  UniViewElement as IUniViewElement,
  ExitFullscreenOptions
} from '@dcloudio/uni-app-x/types/native'
import { window } from '@kit.ArkUI'
import { UniElementImpl } from '../libs/dom'
import { getUniApp } from '../UniNativeAppManager'
import { getFullscreenError } from '../libs/dom'
import { bridge } from '../helper/bridge'
import { UniNativePageImpl } from './IUniNativePage'

export class UniViewElementImpl extends UniElementImpl implements IUniViewElement {
  /**
   * @internal
   */
  page: UniNativePageImpl
  protected isFullscreen = false
  protected requestFullscreenOptions: RequestFullscreenOptions = {
    success: null,
    fail: null,
    complete: null
  }

  protected setNavigation(status: 'show' | 'hide') {
    const appWindow = getUniApp()?.window
    appWindow?.setSpecificSystemBarEnabled('navigationIndicator', status === 'show')
  }

  override requestFullscreen(options?: RequestFullscreenOptions | null | undefined): void {
    const appWindow = getUniApp()?.window
    if (options?.navigationUI) {
      this.requestFullscreenOptions.navigationUI = options.navigationUI
    } else {
      this.requestFullscreenOptions.navigationUI = 'hide'
    }
    if (options?.orientation) {
      this.requestFullscreenOptions.orientation = options.orientation
    } else {
      this.requestFullscreenOptions.orientation = 'landscape'
    }

    let orientation: window.Orientation = window.Orientation.PORTRAIT
    switch (this.requestFullscreenOptions.orientation) {
      case 'auto':
        if (canIUse('SystemCapability.Window.SessionManager')) {
          orientation = window.Orientation.AUTO_ROTATION_UNSPECIFIED
        } else {
          orientation = window.Orientation.AUTO_ROTATION_RESTRICTED
        }
        break;
      case 'landscape':
        orientation = window.Orientation.AUTO_ROTATION_LANDSCAPE_RESTRICTED
        break;
      case 'landscape-primary':
        orientation = window.Orientation.LANDSCAPE
        break;
      case 'landscape-secondary':
        orientation = window.Orientation.LANDSCAPE_INVERTED
        break;
      case 'portrait':
        orientation = window.Orientation.PORTRAIT
        break;
    }

    appWindow.setPreferredOrientation(orientation).then(() => {
      appWindow.setWindowSystemBarEnable([])
      switch (this.requestFullscreenOptions.navigationUI) {
        case 'auto':
        case 'show':
          this.setNavigation('show')
          break;
        case 'hide':
          this.setNavigation('hide')
          break;
      }

      setTimeout(() => {
        this.page.fullscreenElement = this
        this.isFullscreen = true
        this.nativeElement.requestFullscreen({
          navigationUI: options?.navigationUI,
          orientation: options?.orientation,
          success: () => {
            options?.success?.()
          },
          fail: (err) => {
            this.page.fullscreenElement = null
            this.isFullscreen = false
            options?.fail(getFullscreenError('requestFullscreen', err.errCode))
          },
          complete: options?.complete
        } as RequestFullscreenOptions)
      }, 20)
    })
  }

  _exitFullscreen(options?: ExitFullscreenOptions | null): Promise<boolean> {
    if (!this.isFullscreen) {
      return Promise.resolve(false)
    }
    return new Promise((resolve) => {
      bridge.__uni__page_ExitFullscreen(getUniApp()?.id, Number(this.page.pageId), {
        success: () => {
          options?.success?.()
          resolve(true)
        },
        fail: (err) => {
          options?.fail?.(getFullscreenError('exitFullscreen', err.errCode))
          resolve(false)
        },
        complete: () => {
          options?.complete?.({})
        }
      })
    })
  }
}
