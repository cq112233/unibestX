// 本文件为自动构建生成
import {
  StreamingContextListener as StreamingContextListenerOrigin,
  StreamingBufferingListener as StreamingBufferingListenerOrigin,
  StreamingMuteChangedListener as StreamingMuteChangedListenerOrigin,
  StreamingProgressListener as StreamingProgressListenerOrigin,
  LivePlayerStreamingStateListener as LivePlayerStreamingStateListenerOrigin,
  LivePlayerStreamingErrorListener as LivePlayerStreamingErrorListenerOrigin,
  StreamingFullScreenChangedListener as StreamingFullScreenChangedListenerOrigin,
  UniLivePlayerStatechangeEvent as UniLivePlayerStatechangeEventOrigin,
  UniLivePlayerStatechangeEventDetail as UniLivePlayerStatechangeEventDetailOrigin,
  UniLivePlayerFullscreenchangeEvent as UniLivePlayerFullscreenchangeEventOrigin,
  UniLivePlayerFullscreenchangeEventDetail as UniLivePlayerFullscreenchangeEventDetailOrigin,
  UniLivePlayerErrorEvent as UniLivePlayerErrorEventOrigin,
  UniLivePlayerError as UniLivePlayerErrorOrigin,
  LivePlayerSuccess as LivePlayerSuccessOrigin,
  LivePlayerSuccessCallback as LivePlayerSuccessCallbackOrigin,
  LivePlayerFail as LivePlayerFailOrigin,
  LivePlayerFailCallback as LivePlayerFailCallbackOrigin,
  LivePlayerComplete as LivePlayerCompleteOrigin,
  LivePlayerCompleteCallback as LivePlayerCompleteCallbackOrigin,
  LivePlayerOptions as LivePlayerOptionsOrigin,
  LivePlayerContext as LivePlayerContextOrigin,
  CreateLivePlayerContext as CreateLivePlayerContextOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type StreamingContextListener = StreamingContextListenerOrigin
  type StreamingBufferingListener = StreamingBufferingListenerOrigin
  type StreamingMuteChangedListener = StreamingMuteChangedListenerOrigin
  type StreamingProgressListener = StreamingProgressListenerOrigin
  type LivePlayerStreamingStateListener = LivePlayerStreamingStateListenerOrigin
  type LivePlayerStreamingErrorListener = LivePlayerStreamingErrorListenerOrigin
  type StreamingFullScreenChangedListener = StreamingFullScreenChangedListenerOrigin
  type UniLivePlayerStatechangeEvent = UniLivePlayerStatechangeEventOrigin
  type UniLivePlayerStatechangeEventDetail = UniLivePlayerStatechangeEventDetailOrigin
  type UniLivePlayerFullscreenchangeEvent = UniLivePlayerFullscreenchangeEventOrigin
  type UniLivePlayerFullscreenchangeEventDetail = UniLivePlayerFullscreenchangeEventDetailOrigin
  type UniLivePlayerErrorEvent = UniLivePlayerErrorEventOrigin
  type UniLivePlayerError = UniLivePlayerErrorOrigin
  type LivePlayerSuccess = LivePlayerSuccessOrigin
  type LivePlayerSuccessCallback = LivePlayerSuccessCallbackOrigin
  type LivePlayerFail = LivePlayerFailOrigin
  type LivePlayerFailCallback = LivePlayerFailCallbackOrigin
  type LivePlayerComplete = LivePlayerCompleteOrigin
  type LivePlayerCompleteCallback = LivePlayerCompleteCallbackOrigin
  type LivePlayerOptions = LivePlayerOptionsOrigin
  type LivePlayerContext = LivePlayerContextOrigin
  type CreateLivePlayerContext = CreateLivePlayerContextOrigin
  interface Uni extends UniOrigin { }
}
