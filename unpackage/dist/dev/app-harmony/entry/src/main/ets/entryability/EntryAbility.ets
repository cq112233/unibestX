import { UniEntryAbility } from '@dcloudio/uni-app-x-runtime'
import BuildProfile from 'BuildProfile'
import { initUniModules } from "../uni_modules/index.generated";

initUniModules()

export default class EntryAbility extends UniEntryAbility {
  constructor() {
    super("__UNI__5198058", {
      debug: BuildProfile.DEBUG
    })
  }

  onImport(path: string): Promise<Object | void> {
    return import(path)
  }
}
