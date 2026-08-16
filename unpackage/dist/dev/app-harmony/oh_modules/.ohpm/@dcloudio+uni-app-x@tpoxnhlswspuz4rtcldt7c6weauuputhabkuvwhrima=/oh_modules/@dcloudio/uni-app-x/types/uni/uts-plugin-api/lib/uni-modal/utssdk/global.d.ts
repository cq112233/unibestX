// 本文件为自动构建生成
import {
  UniShowModalResult as UniShowModalResultOrigin,
  UniShowModalErrorCode as UniShowModalErrorCodeOrigin,
  UniShowModalFail as UniShowModalFailOrigin,
  ShowModalOptions as ShowModalOptionsOrigin,
  ShowModal as ShowModalOrigin,
  ModalPage as ModalPageOrigin,
  UniHideModalResult as UniHideModalResultOrigin,
  UniHideModalErrorCode as UniHideModalErrorCodeOrigin,
  UniHideModalFail as UniHideModalFailOrigin,
  HideModalOptions as HideModalOptionsOrigin,
  HideModal as HideModalOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type UniShowModalResult = UniShowModalResultOrigin
  type UniShowModalErrorCode = UniShowModalErrorCodeOrigin
  type UniShowModalFail = UniShowModalFailOrigin
  type ShowModalOptions = ShowModalOptionsOrigin
  type ShowModal = ShowModalOrigin
  type ModalPage = ModalPageOrigin
  type UniHideModalResult = UniHideModalResultOrigin
  type UniHideModalErrorCode = UniHideModalErrorCodeOrigin
  type UniHideModalFail = UniHideModalFailOrigin
  type HideModalOptions = HideModalOptionsOrigin
  type HideModal = HideModalOrigin
  interface Uni extends UniOrigin { }
}
