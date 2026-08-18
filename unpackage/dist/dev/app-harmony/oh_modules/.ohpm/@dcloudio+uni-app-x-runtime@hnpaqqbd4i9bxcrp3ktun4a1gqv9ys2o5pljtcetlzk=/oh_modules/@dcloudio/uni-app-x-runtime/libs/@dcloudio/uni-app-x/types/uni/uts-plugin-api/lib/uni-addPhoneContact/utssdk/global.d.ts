// 本文件为自动构建生成
import {
  AddPhoneContact as AddPhoneContactOrigin,
  AddPhoneContactSuccess as AddPhoneContactSuccessOrigin,
  AddPhoneContactSuccessCallback as AddPhoneContactSuccessCallbackOrigin,
  AddPhoneContactFail as AddPhoneContactFailOrigin,
  AddPhoneContactFailCallback as AddPhoneContactFailCallbackOrigin,
  AddPhoneContactComplete as AddPhoneContactCompleteOrigin,
  AddPhoneContactCompleteCallback as AddPhoneContactCompleteCallbackOrigin,
  AddPhoneContactOptions as AddPhoneContactOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type AddPhoneContact = AddPhoneContactOrigin
  type AddPhoneContactSuccess = AddPhoneContactSuccessOrigin
  type AddPhoneContactSuccessCallback = AddPhoneContactSuccessCallbackOrigin
  type AddPhoneContactFail = AddPhoneContactFailOrigin
  type AddPhoneContactFailCallback = AddPhoneContactFailCallbackOrigin
  type AddPhoneContactComplete = AddPhoneContactCompleteOrigin
  type AddPhoneContactCompleteCallback = AddPhoneContactCompleteCallbackOrigin
  type AddPhoneContactOptions = AddPhoneContactOptionsOrigin
  interface Uni extends UniOrigin { }
}
