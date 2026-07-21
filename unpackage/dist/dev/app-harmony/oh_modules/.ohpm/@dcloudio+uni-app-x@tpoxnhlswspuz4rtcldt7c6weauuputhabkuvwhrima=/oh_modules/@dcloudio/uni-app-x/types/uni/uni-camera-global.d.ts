import {
    UniCameraStopEventDetail as UniCameraStopEventDetailOrigin,
    UniCameraStopEvent as uniCameraStopEventOrigin,
    UniCameraErrorEventDetail as UniCameraErrorEventDetailOrigin,
    UniCameraErrorEvent as UniCameraErrorEventOrigin,
    UniCameraInitDoneEventDetail as UniCameraInitDoneEventDetailOrigin,
    UniCameraInitDoneEvent as UniCameraInitDoneEventOrigin,
    UniCameraScanCodeEventDetail as UniCameraScanCodeEventDetailOrigin,
    UniCameraScanCodeEvent as UniCameraScanCodeEventOrigin
} from './uni-camera'



declare global {
    type UniCameraStopEventDetail = UniCameraStopEventDetailOrigin
    type UniCameraStopEvent = uniCameraStopEventOrigin
    type UniCameraErrorEventDetail = UniCameraErrorEventDetailOrigin
    type UniCameraErrorEvent = UniCameraErrorEventOrigin
    type UniCameraInitDoneEventDetail = UniCameraInitDoneEventDetailOrigin
    type UniCameraInitDoneEvent = UniCameraInitDoneEventOrigin
    type UniCameraScanCodeEventDetail = UniCameraScanCodeEventDetailOrigin
    type UniCameraScanCodeEvent = UniCameraScanCodeEventOrigin
}