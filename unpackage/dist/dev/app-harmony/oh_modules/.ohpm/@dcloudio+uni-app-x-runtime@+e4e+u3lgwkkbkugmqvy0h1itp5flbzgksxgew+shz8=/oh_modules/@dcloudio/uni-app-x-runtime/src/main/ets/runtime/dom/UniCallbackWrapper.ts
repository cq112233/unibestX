import { UniCallbackWrapper as IUniCallbackWrapper } from '@dcloudio/uni-app-x/types/native'

export class UniCallbackWrapper implements IUniCallbackWrapper {
  constructor(public callback: (...args: any[]) => any) {}
}
