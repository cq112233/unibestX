import { AbilityConstant, Configuration, UIAbility, Want } from '@kit.AbilityKit'
import { window } from '@kit.ArkUI'
import { setEntryAbility, setWindowStage } from './App'
import { closeUniApp, openUniApp } from './UniNativeApp'
import { appAbilityEmitter } from './UTSHarmony/appAbility'

export interface IInitConfig {
  debug?: boolean
}

export abstract class UniEntryAbility extends UIAbility {
  private entryAbilityAppID: string
  private entryAbilityConfig: IInitConfig | undefined
  public startTime = Date.now()

  constructor(appID: string, config?: IInitConfig) {
    super()
    setEntryAbility(this)
    this.entryAbilityAppID = appID
    this.entryAbilityConfig = config
    // TODO WebviewController.setWebDebuggingAccess
  }

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    globalThis.__uni__InitRuntime();
    const applicationContext = this.context.getApplicationContext();
    const sanboxPath = applicationContext.filesDir.replace(/\/files$/, '');
    globalThis.setAppInfo(this.entryAbilityAppID, this.context.resourceDir, applicationContext.cacheDir, applicationContext.filesDir, applicationContext.tempDir, sanboxPath);
    appAbilityEmitter.emit('create', want, launchParam)
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    appAbilityEmitter.emit('newWant', want, launchParam)
  }

  onShare(wantParam: Record<string, Object>): void {
    appAbilityEmitter.emit('share', wantParam)
  }

  onWindowStageCreate(windowStage: window.WindowStage, autoLaunch = true): void {
    setWindowStage(windowStage)
    if (autoLaunch) {
      openUniApp(this.entryAbilityAppID, {
        isMain: true,
      })
    }
    appAbilityEmitter.emit('windowStageCreate', windowStage)
  }

  onWindowStageDestroy(): void {
    closeUniApp()
    setWindowStage(undefined)
  }

  onDestroy(): void | Promise<void> {
    setEntryAbility(undefined)
  }

  onConfigurationUpdate(newConfig: Configuration): void {
    appAbilityEmitter.emit('configurationUpdate', newConfig)
  }

  /**
   * return import(path)
   */
  abstract onImport(path: string): Promise<Object | void>
}
