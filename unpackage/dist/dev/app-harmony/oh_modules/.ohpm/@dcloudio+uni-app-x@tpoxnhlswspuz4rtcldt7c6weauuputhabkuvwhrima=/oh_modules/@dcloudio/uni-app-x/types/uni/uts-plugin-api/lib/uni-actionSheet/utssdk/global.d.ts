// 本文件为自动构建生成
import {
  Popover as PopoverOrigin,
  ShowActionSheetErrorCode as ShowActionSheetErrorCodeOrigin,
  ShowActionSheetSuccess as ShowActionSheetSuccessOrigin,
  ShowActionSheetFail as ShowActionSheetFailOrigin,
  ShowActionSheetComplete as ShowActionSheetCompleteOrigin,
  ShowActionSheetOptions as ShowActionSheetOptionsOrigin,
  ShowActionSheet as ShowActionSheetOrigin,
  HideActionSheet as HideActionSheetOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type Popover = PopoverOrigin
  type ShowActionSheetErrorCode = ShowActionSheetErrorCodeOrigin
  type ShowActionSheetSuccess = ShowActionSheetSuccessOrigin
  type ShowActionSheetFail = ShowActionSheetFailOrigin
  type ShowActionSheetComplete = ShowActionSheetCompleteOrigin
  type ShowActionSheetOptions = ShowActionSheetOptionsOrigin
  type ShowActionSheet = ShowActionSheetOrigin
  type HideActionSheet = HideActionSheetOrigin
  interface Uni extends UniOrigin { }
}
