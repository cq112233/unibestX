// 本文件为自动构建生成
import {
  UrlCallbackOptions as UrlCallbackOptionsOrigin,
  CreateInterstitialAdOptions as CreateInterstitialAdOptionsOrigin,
  CreateRewardedVideoAdOptions as CreateRewardedVideoAdOptionsOrigin,
  RewardedVideoAd as RewardedVideoAdOrigin,
  InterstitialAd as InterstitialAdOrigin,
  IVideoAd as IVideoAdOrigin,
  IRewardedVideoAd as IRewardedVideoAdOrigin,
  VideoAdClose as VideoAdCloseOrigin,
  RewardedVideoAdClose as RewardedVideoAdCloseOrigin,
  UniAdErrorCode as UniAdErrorCodeOrigin,
  IUniAdError as IUniAdErrorOrigin,
  UniAdErrorEvent as UniAdErrorEventOrigin,
  AdCallBackEvent as AdCallBackEventOrigin,
  AdCloseCallBackEvent as AdCloseCallBackEventOrigin,
  AdErrorCallBackEvent as AdErrorCallBackEventOrigin,
  AdVerifyCallBackEvent as AdVerifyCallBackEventOrigin,
  CreateRewardedVideoAd as CreateRewardedVideoAdOrigin,
  CreateInterstitialAd as CreateInterstitialAdOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type UrlCallbackOptions = UrlCallbackOptionsOrigin
  type CreateInterstitialAdOptions = CreateInterstitialAdOptionsOrigin
  type CreateRewardedVideoAdOptions = CreateRewardedVideoAdOptionsOrigin
  type RewardedVideoAd = RewardedVideoAdOrigin
  type InterstitialAd = InterstitialAdOrigin
  type IVideoAd = IVideoAdOrigin
  type IRewardedVideoAd = IRewardedVideoAdOrigin
  type VideoAdClose = VideoAdCloseOrigin
  type RewardedVideoAdClose = RewardedVideoAdCloseOrigin
  type UniAdErrorCode = UniAdErrorCodeOrigin
  type IUniAdError = IUniAdErrorOrigin
  type UniAdErrorEvent = UniAdErrorEventOrigin
  type AdCallBackEvent = AdCallBackEventOrigin
  type AdCloseCallBackEvent = AdCloseCallBackEventOrigin
  type AdErrorCallBackEvent = AdErrorCallBackEventOrigin
  type AdVerifyCallBackEvent = AdVerifyCallBackEventOrigin
  type CreateRewardedVideoAd = CreateRewardedVideoAdOrigin
  type CreateInterstitialAd = CreateInterstitialAdOrigin
  interface Uni extends UniOrigin { }
}
