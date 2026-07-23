import { uni, customElements, setGlobalVar, OptionalNull } from '@dcloudio/uni-app-framework'
import {
  onAccelerometerChange,
  offAccelerometerChange,
  startAccelerometer,
  stopAccelerometer
} from './uni_modules/uni-accelerometer/utssdk/app-harmony'
import {
  AccelerometerErrorCode,
  AccelerometerInterval,
  IAccelerometerError,
  IStartAccelerometerFail,
  IStopAccelerometerFail,
  OffAccelerometerChange,
  OnAccelerometerChange,
  OnAccelerometerChangeCallback,
  OnAccelerometerChangeCallbackResult,
  StartAccelerometer,
  StartAccelerometerComplete,
  StartAccelerometerCompleteCallback,
  StartAccelerometerFail,
  StartAccelerometerFailCallback,
  StartAccelerometerOptions,
  StartAccelerometerSuccess,
  StartAccelerometerSuccessCallback,
  StopAccelerometer,
  StopAccelerometerComplete,
  StopAccelerometerCompleteCallback,
  StopAccelerometerFail,
  StopAccelerometerFailCallback,
  StopAccelerometerOptions,
  StopAccelerometerSuccess,
  StopAccelerometerSuccessCallback
} from './uni_modules/uni-accelerometer/utssdk/app-harmony'
import {
  showActionSheet,
  hideActionSheet
} from './uni_modules/uni-actionSheet/utssdk/app-harmony'
import * as uniActionSheet from './uni_modules/uni-actionSheet/utssdk/app-harmony'
import {
  HideActionSheet,
  Popover,
  ShowActionSheet,
  ShowActionSheetComplete,
  ShowActionSheetErrorCode,
  ShowActionSheetFail,
  ShowActionSheetFailImpl,
  ShowActionSheetOptions,
  ShowActionSheetSuccess,
  ShowActionSheetSuccessImpl
} from './uni_modules/uni-actionSheet/utssdk/app-harmony'
import {
  arrayBufferToBase64
} from './uni_modules/uni-arrayBufferToBase64/utssdk/app-harmony'
import {
  ArrayBufferToBase64
} from './uni_modules/uni-arrayBufferToBase64/utssdk/app-harmony'
import {
  startSoterAuthentication,
  checkIsSupportSoterAuthentication,
  checkIsSoterEnrolledInDevice
} from './uni_modules/uni-authentication/utssdk/app-harmony'
import {
  CheckIsSoterEnrolledInDevice,
  CheckIsSoterEnrolledInDeviceComplete,
  CheckIsSoterEnrolledInDeviceCompleteCallback,
  CheckIsSoterEnrolledInDeviceFail,
  CheckIsSoterEnrolledInDeviceFailCallback,
  CheckIsSoterEnrolledInDeviceOptions,
  CheckIsSoterEnrolledInDeviceSuccess,
  CheckIsSoterEnrolledInDeviceSuccessCallback,
  CheckIsSupportSoterAuthentication,
  CheckIsSupportSoterAuthenticationComplete,
  CheckIsSupportSoterAuthenticationCompleteCallback,
  CheckIsSupportSoterAuthenticationFail,
  CheckIsSupportSoterAuthenticationFailCallback,
  CheckIsSupportSoterAuthenticationOptions,
  CheckIsSupportSoterAuthenticationSuccess,
  CheckIsSupportSoterAuthenticationSuccessCallback,
  ICheckIsSoterEnrolledInDeviceFail,
  ICheckIsSupportSoterAuthenticationFail,
  IStartSoterAuthenticationFail,
  SoterAuthMode,
  StartSoterAuthentication,
  StartSoterAuthenticationComplete,
  StartSoterAuthenticationCompleteCallback,
  StartSoterAuthenticationFail,
  StartSoterAuthenticationFailCallback,
  StartSoterAuthenticationOptions,
  StartSoterAuthenticationSuccess,
  StartSoterAuthenticationSuccessCallback
} from './uni_modules/uni-authentication/utssdk/app-harmony'
import {
  base64ToArrayBuffer
} from './uni_modules/uni-base64ToArrayBuffer/utssdk/app-harmony'
import {
  Base64ToArrayBuffer
} from './uni_modules/uni-base64ToArrayBuffer/utssdk/app-harmony'
import {
  addPhoneCalendar,
  addPhoneRepeatCalendar
} from './uni_modules/uni-calendar/utssdk/app-harmony'
import {
  AddPhoneCalendar,
  AddPhoneCalendarComplete,
  AddPhoneCalendarCompleteCallback,
  AddPhoneCalendarFail,
  AddPhoneCalendarFailCallback,
  AddPhoneCalendarOptions,
  AddPhoneCalendarSuccess,
  AddPhoneCalendarSuccessCallback,
  AddPhoneRepeatCalendar,
  AddPhoneRepeatCalendarComplete,
  AddPhoneRepeatCalendarCompleteCallback,
  AddPhoneRepeatCalendarFail,
  AddPhoneRepeatCalendarFailCallback,
  AddPhoneRepeatCalendarOptions,
  AddPhoneRepeatCalendarSuccess,
  AddPhoneRepeatCalendarSuccessCallback,
  CalendarErrorCode,
  CalendarRepeatInterval,
  IAddPhoneCalendarFail,
  IAddPhoneRepeatCalendarFail,
  ICalendarError
} from './uni_modules/uni-calendar/utssdk/app-harmony'
import {
  createCanvasContextAsync
} from './uni_modules/uni-canvas/utssdk/app-harmony'
import {
  CanvasContext,
  CreateCanvasContextAsync,
  CreateCanvasContextAsyncCompleteCallback,
  CreateCanvasContextAsyncFailCallback,
  CreateCanvasContextAsyncOptions,
  CreateCanvasContextAsyncSuccessCallback,
  RequestAnimationFrameCallback,
  UniCanvasElement,
  UniCanvasRenderingContext2D
} from './uni_modules/uni-canvas/utssdk/app-harmony'
import {
  chooseLocation
} from './uni_modules/uni-chooseLocation/utssdk/app-harmony'
import * as uniChooseLocation from './uni_modules/uni-chooseLocation/utssdk/app-harmony'
import {
  ChooseLocation,
  ChooseLocationComplete,
  ChooseLocationErrorCode,
  ChooseLocationFail,
  ChooseLocationFailImpl,
  ChooseLocationOptions,
  ChooseLocationSuccess,
  ChooseLocationSuccessImpl
} from './uni_modules/uni-chooseLocation/utssdk/app-harmony'
import {
  chooseMedia
} from './uni_modules/uni-chooseMedia/utssdk/app-harmony'
import {
  ChooseMedia,
  ChooseMediaCompleteCallback,
  ChooseMediaErrorCode,
  ChooseMediaFail,
  ChooseMediaFailCallback,
  ChooseMediaFileType,
  ChooseMediaOptions,
  ChooseMediaPageOrientation,
  ChooseMediaSuccess,
  ChooseMediaSuccessCallback,
  ChooseMediaTempFile,
  IChooseMediaError
} from './uni_modules/uni-chooseMedia/utssdk/app-harmony'
import {
  getClipboardData,
  setClipboardData
} from './uni_modules/uni-clipboard/utssdk/app-harmony'
import {
  ClipBoardErrorCode,
  GetClipboardData,
  GetClipboardDataComplete,
  GetClipboardDataCompleteCallback,
  GetClipboardDataFail,
  GetClipboardDataFailCallback,
  GetClipboardDataOptions,
  GetClipboardDataSuccess,
  GetClipboardDataSuccessCallback,
  IClipBoardError,
  SetClipboardData,
  SetClipboardDataComplete,
  SetClipboardDataCompleteCallback,
  SetClipboardDataFail,
  SetClipboardDataFailCallback,
  SetClipboardDataOptions,
  SetClipboardDataSuccess,
  SetClipboardDataSuccessCallback
} from './uni_modules/uni-clipboard/utssdk/app-harmony'
import {
  onCompassChange,
  offCompassChange,
  startCompass,
  stopCompass
} from './uni_modules/uni-compass/utssdk/app-harmony'
import {
  CompassAccuracy,
  CompassErrorCode,
  ICompassError,
  IStartCompassFail,
  IStopCompassFail,
  OffCompassChange,
  OnCompassChange,
  OnCompassChangeCallback,
  OnCompassChangeCallbackResult,
  StartCompass,
  StartCompassComplete,
  StartCompassCompleteCallback,
  StartCompassFail,
  StartCompassFailCallback,
  StartCompassOptions,
  StartCompassSuccess,
  StartCompassSuccessCallback,
  StopCompass,
  StopCompassComplete,
  StopCompassCompleteCallback,
  StopCompassFail,
  StopCompassFailCallback,
  StopCompassOptions,
  StopCompassSuccess,
  StopCompassSuccessCallback
} from './uni_modules/uni-compass/utssdk/app-harmony'
import {
  __onAppCrash,
  __offAppCrash,
  __getAppCrashInfo,
  __deleteAppCrashInfo,
  __createAppCrash
} from './uni_modules/uni-crash/utssdk/app-harmony'
import {
  AppCrashInfo,
  CreateAppCrash,
  DeleteAppCrashInfo,
  GetAppCrashInfo,
  OffAppCrash,
  OnAppCrash,
  OnAppCrashCallback
} from './uni_modules/uni-crash/utssdk/app-harmony'
import {
  createInnerAudioContext,
  setInnerAudioOption
} from './uni_modules/uni-createInnerAudioContext/utssdk/app-harmony'
import {
  CreateInnerAudioContext,
  CreateInnerAudioContextErrorCode,
  ICreateInnerAudioContextFail,
  InnerAudioContext,
  SetInnerAudioOption,
  SetInnerAudioOptionComplete,
  SetInnerAudioOptionCompleteCallback,
  SetInnerAudioOptionFail,
  SetInnerAudioOptionFailCallback,
  SetInnerAudioOptionOptions,
  SetInnerAudioOptionSuccess,
  SetInnerAudioOptionSuccessCallback
} from './uni_modules/uni-createInnerAudioContext/utssdk/app-harmony'
import {
  createWebviewContext,
  createWebViewContext
} from './uni_modules/uni-createWebviewContext/utssdk/app-harmony'
import {
  CreateWebViewContext,
  CreateWebviewContext,
  UniWebviewContextLoadDataOptions,
  WebViewContext
} from './uni_modules/uni-createWebviewContext/utssdk/app-harmony'
import {
  createWorker
} from './uni_modules/uni-createWorker/utssdk/app-harmony'
import {
  CreateWorker,
  Worker,
  WorkerOnErrorCallback,
  WorkerOnErrorCallbackResult,
  WorkerOnErrorCallbackResultErrorCode,
  WorkerOnMessageCallback,
  WorkerPostMessageOptions,
  WorkerTaskImpl
} from './uni_modules/uni-createWorker/utssdk/app-harmony'
import {
  createEditorContextAsync
} from './uni_modules/uni-editor/utssdk/app-harmony'
import * as uniEditor from './uni_modules/uni-editor/utssdk/app-harmony'
import {
  CreateEditorContextAsync,
  CreateEditorContextAsyncOptions,
  EditorContext,
  IUniEditorElement,
  UniEditorElementGetContentsOptions,
  UniEditorElementGetContentsOptionsRes,
  UniEditorElementGetSelectionTextOptions,
  UniEditorElementGetSelectionTextOptionsRes,
  UniEditorElementInsertImageOptions,
  UniEditorElementInsertLinkOptions,
  UniEditorElementInsertMentionOptions,
  UniEditorElementInsertTextOptions,
  UniEditorElementOptions,
  UniEditorElementOptionsCompleteRes,
  UniEditorElementOptionsFailRes,
  UniEditorElementOptionsSuccessRes,
  UniEditorElementSetContentsOptions,
  UniEditorElement
} from './uni_modules/uni-editor/utssdk/app-harmony'
import {
  $on,
  $once,
  $off,
  $emit
} from './uni_modules/uni-event/utssdk/app-harmony'
import {
  $Emit,
  $Off,
  $On,
  $Once
} from './uni_modules/uni-event/utssdk/app-harmony'
import {
  exit
} from './uni_modules/uni-exit/utssdk/app-harmony'
import {
  Exit,
  ExitCompleteCallback,
  ExitErrorCode,
  ExitFail,
  ExitFailCallback,
  ExitOptions,
  ExitSuccess,
  ExitSuccessCallback,
  IExitError
} from './uni_modules/uni-exit/utssdk/app-harmony'
import {
  saveFile,
  getSavedFileList,
  getSavedFileInfo,
  removeSavedFile,
  getFileInfo
} from './uni_modules/uni-file/utssdk/app-harmony'
import {
  GetFileInfo,
  GetSavedFileInfo,
  GetSavedFileList,
  LegacyGetFileInfoCompleteCallback,
  LegacyGetFileInfoFail,
  LegacyGetFileInfoFailCallback,
  LegacyGetFileInfoOptions,
  LegacyGetFileInfoSuccess,
  LegacyGetFileInfoSuccessCallback,
  LegacyGetSavedFileInfoCompleteCallback,
  LegacyGetSavedFileInfoFail,
  LegacyGetSavedFileInfoFailCallback,
  LegacyGetSavedFileInfoOptions,
  LegacyGetSavedFileInfoSuccess,
  LegacyGetSavedFileInfoSuccessCallback,
  LegacyGetSavedFileListCompleteCallback,
  LegacyGetSavedFileListFail,
  LegacyGetSavedFileListFailCallback,
  LegacyGetSavedFileListOptions,
  LegacyGetSavedFileListSuccess,
  LegacyGetSavedFileListSuccessCallback,
  LegacyRemoveSavedFileCompleteCallback,
  LegacyRemoveSavedFileFail,
  LegacyRemoveSavedFileFailCallback,
  LegacyRemoveSavedFileOptions,
  LegacyRemoveSavedFileSuccess,
  LegacyRemoveSavedFileSuccessCallback,
  LegacySaveFileCompleteCallback,
  LegacySaveFileFail,
  LegacySaveFileFailCallback,
  LegacySaveFileOptions,
  LegacySaveFileSuccess,
  LegacySaveFileSuccessCallback,
  LegacySavedFileListItem,
  RemoveSavedFile,
  SaveFile
} from './uni_modules/uni-file/utssdk/app-harmony'
import {
  getFileSystemManager
} from './uni_modules/uni-fileSystemManager/utssdk/app-harmony'
import {
  AccessOptions,
  AppendFileOptions,
  CloseOptions,
  CloseSyncOptions,
  CopyFileOptions,
  EntriesResult,
  EntryItem,
  FStatOptions,
  FStatSuccessCallback,
  FStatSuccessResult,
  FStatSyncOptions,
  FTruncateFileOptions,
  FTruncateFileSyncOptions,
  FileManagerCompleteCallback,
  FileManagerFailCallback,
  FileManagerSuccessCallback,
  FileManagerSuccessResult,
  FileStats,
  FileSystemManager,
  FileSystemManagerErrorCode,
  FileSystemManagerFail,
  GetFileInfoOptions,
  GetFileInfoSuccessCallback,
  GetFileInfoSuccessResult,
  GetFileSystemManager,
  GetSavedFileListCallback,
  GetSavedFileListOptions,
  GetSavedFileListResult,
  IFileSystemManagerFail,
  MkDirOptions,
  MkDirSuccessCallback,
  OpenFileOptions,
  OpenFileSuccessCallback,
  OpenFileSuccessResult,
  OpenFileSyncOptions,
  ReadCompressedFileCallback,
  ReadCompressedFileOptions,
  ReadCompressedFileResult,
  ReadDirOptions,
  ReadDirSuccessCallback,
  ReadDirSuccessResult,
  ReadFileOptions,
  ReadFileSuccessCallback,
  ReadFileSuccessResult,
  ReadOption,
  ReadResult,
  ReadSuccessCallback,
  ReadSuccessCallbackResult,
  ReadSyncOption,
  ReadZipEntryCallback,
  ReadZipEntryOptions,
  RemoveSavedFileOptions,
  RenameOptions,
  RmDirOptions,
  SaveFileOptions,
  SaveFileSuccessCallback,
  SaveFileSuccessResult,
  StatOptions,
  StatSuccessCallback,
  StatSuccessResult,
  Stats,
  TruncateFileOptions,
  UnLinkOptions,
  UnLinkSuccessCallback,
  UnzipFileOptions,
  WriteCallback,
  WriteFileOptions,
  WriteOptions,
  WriteResult,
  WriteSyncOptions,
  ZipFileItem
} from './uni_modules/uni-fileSystemManager/utssdk/app-harmony'
import {
  UniButtonElement,
  UniCheckboxElement,
  UniCheckboxGroupChangeEvent,
  UniCheckboxGroupElement,
  UniFormElement,
  UniFormResetEvent,
  UniFormSubmitEvent,
  UniLabelElement,
  UniPickerViewChangeEvent,
  UniPickerViewColumnElement,
  UniPickerViewElement,
  UniRadioElement,
  UniRadioGroupChangeEvent,
  UniRadioGroupElement,
  UniSliderChangeEvent,
  UniSliderElement,
  UniSwitchChangeEvent,
  UniSwitchElement
} from './uni_modules/uni-form-dom1/utssdk/app-harmony'
import {
  getAppAuthorizeSetting
} from './uni_modules/uni-getAppAuthorizeSetting/utssdk/app-harmony'
import {
  GetAppAuthorizeSetting,
  GetAppAuthorizeSettingResult
} from './uni_modules/uni-getAppAuthorizeSetting/utssdk/app-harmony'
import {
  getAppBaseInfo
} from './uni_modules/uni-getAppBaseInfo/utssdk/app-harmony'
import {
  GetAppBaseInfo,
  GetAppBaseInfoOptions,
  GetAppBaseInfoResult
} from './uni_modules/uni-getAppBaseInfo/utssdk/app-harmony'
import {
  getBackgroundAudioManager
} from './uni_modules/uni-getBackgroundAudioManager/utssdk/app-harmony'
import {
  BackgroundAudioManager,
  CreateBackgroundAudioErrorCode,
  GetBackgroundAudioManager,
  ICreateBackgroundAudioFail
} from './uni_modules/uni-getBackgroundAudioManager/utssdk/app-harmony'
import {
  getDeviceInfo
} from './uni_modules/uni-getDeviceInfo/utssdk/app-harmony'
import {
  GetDeviceInfo,
  GetDeviceInfoOptions,
  GetDeviceInfoResult
} from './uni_modules/uni-getDeviceInfo/utssdk/app-harmony'
import {
  getElementById
} from './uni_modules/uni-getElementById/utssdk/app-harmony'
import {
  GetElementById
} from './uni_modules/uni-getElementById/utssdk/app-harmony'
import {
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange
} from './uni_modules/uni-getNetworkType/utssdk/app-harmony'
import {
  GetNetworkType,
  GetNetworkTypeComplete,
  GetNetworkTypeCompleteCallback,
  GetNetworkTypeFail,
  GetNetworkTypeFailCallback,
  GetNetworkTypeOptions,
  GetNetworkTypeSuccess,
  GetNetworkTypeSuccessCallback,
  OffNetworkStatusChange,
  OnNetworkStatusChange,
  OnNetworkStatusChangeCallback,
  OnNetworkStatusChangeCallbackResult
} from './uni_modules/uni-getNetworkType/utssdk/app-harmony'
import {
  getProvider,
  getProviderSync
} from './uni_modules/uni-getProvider/utssdk/app-harmony'
import {
  GetProvider,
  GetProviderComplete,
  GetProviderCompleteCallback,
  GetProviderFail,
  GetProviderFailCallback,
  GetProviderFailImpl,
  GetProviderOptions,
  GetProviderSuccess,
  GetProviderSuccessCallback,
  GetProviderSync,
  GetProviderSyncOptions,
  GetProviderSyncSuccess,
  IGetProviderFail,
  ProviderErrorCode
} from './uni_modules/uni-getProvider/utssdk/app-harmony'
import {
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo
} from './uni_modules/uni-getSystemInfo/utssdk/app-harmony'
import {
  CutoutRect,
  GetSystemInfo,
  GetSystemInfoComplete,
  GetSystemInfoCompleteCallback,
  GetSystemInfoOptions,
  GetSystemInfoResult,
  GetSystemInfoSuccessCallback,
  GetSystemInfoSync,
  GetWindowInfo,
  GetWindowInfoResult,
  SafeArea,
  SafeAreaInsets
} from './uni_modules/uni-getSystemInfo/utssdk/app-harmony'
import {
  getSystemSetting
} from './uni_modules/uni-getSystemSetting/utssdk/app-harmony'
import {
  GetSystemSetting,
  GetSystemSettingResult
} from './uni_modules/uni-getSystemSetting/utssdk/app-harmony'
import {
  startGyroscope,
  stopGyroscope,
  onGyroscopeChange,
  offGyroscopeChange
} from './uni_modules/uni-gyroscope/utssdk/app-harmony'
import {
  GyroscopeErrorCode,
  GyroscopeInterval,
  IGyroscopeError,
  IStartGyroscopeFail,
  IStopGyroscopeFail,
  OffGyroscopeChange,
  OnGyroscopeChange,
  OnGyroscopeChangeCallback,
  OnGyroscopeChangeCallbackResult,
  StartGyroscope,
  StartGyroscopeComplete,
  StartGyroscopeCompleteCallback,
  StartGyroscopeFail,
  StartGyroscopeFailCallback,
  StartGyroscopeOptions,
  StartGyroscopeSuccess,
  StartGyroscopeSuccessCallback,
  StopGyroscope,
  StopGyroscopeComplete,
  StopGyroscopeCompleteCallback,
  StopGyroscopeFail,
  StopGyroscopeFailCallback,
  StopGyroscopeOptions,
  StopGyroscopeSuccess,
  StopGyroscopeSuccessCallback
} from './uni_modules/uni-gyroscope/utssdk/app-harmony'
import {
  hideKeyboard,
  onKeyboardHeightChange,
  offKeyboardHeightChange
} from './uni_modules/uni-keyboard/utssdk/app-harmony'
import {
  HideKeyboard,
  HideKeyboardCompleteCallback,
  HideKeyboardFail,
  HideKeyboardFailCallback,
  HideKeyboardOptions,
  HideKeyboardSuccess,
  HideKeyboardSuccessCallback,
  OffKeyboardHeightChange,
  OnKeyboardHeightChange,
  OnKeyboardHeightChangeCallback,
  OnKeyboardHeightChangeCallbackResult
} from './uni_modules/uni-keyboard/utssdk/app-harmony'
import {
  loadFontFace
} from './uni_modules/uni-loadFontFace/utssdk/app-harmony'
import {
  LoadFontFace,
  LoadFontFaceComplete,
  LoadFontFaceCompleteCallback,
  LoadFontFaceErrCode,
  LoadFontFaceFail,
  LoadFontFaceFailCallback,
  LoadFontFaceOptionDesc,
  LoadFontFaceOptions,
  LoadFontFaceSuccess,
  LoadFontFaceSuccessCallback
} from './uni_modules/uni-loadFontFace/utssdk/app-harmony'
import * as uniLoading from './uni_modules/uni-loading/utssdk/app-harmony'
import {
  UniLoadingElement
} from './uni_modules/uni-loading/utssdk/app-harmony'
import {
  getLocation,
  startLocationUpdate,
  stopLocationUpdate,
  onLocationChange,
  offLocationChange,
  startLocationUpdateBackground,
  onLocationChangeError,
  offLocationChangeError
} from './uni_modules/uni-location/utssdk/app-harmony'
import {
  GetLocation,
  GetLocationFail,
  GetLocationFailImpl,
  GetLocationOptions,
  GetLocationSuccess,
  IGetLocationFail,
  LocationErrorCode,
  OffLocationChange,
  OffLocationChangeError,
  OnLocationChange,
  OnLocationChangeCallback,
  OnLocationChangeError,
  OnLocationChangeErrorCallback,
  OnLocationChangeResult,
  StartLocationUpdate,
  StartLocationUpdateBackground,
  StartLocationUpdateBackgroundOptions,
  StartLocationUpdateBackgroundOptionsType,
  StartLocationUpdateBackgroundSuccess,
  StartLocationUpdateOptions,
  StartLocationUpdateOptionsType,
  StartLocationUpdateSuccess,
  StopLocationUpdate,
  StopLocationUpdateOptions,
  StopLocationUpdateSuccess,
  UniLocationProvider
} from './uni_modules/uni-location/utssdk/app-harmony'
import {
  makePhoneCall
} from './uni_modules/uni-makePhoneCall/utssdk/app-harmony'
import {
  IMakePhoneCallError,
  MakePhoneCall,
  MakePhoneCallComplete,
  MakePhoneCallCompleteCallback,
  MakePhoneCallErrorCode,
  MakePhoneCallFail,
  MakePhoneCallFailCallback,
  MakePhoneCallOptions,
  MakePhoneCallSuccess,
  MakePhoneCallSuccessCallback
} from './uni_modules/uni-makePhoneCall/utssdk/app-harmony'
import {
  UniMatchMediaElement
} from './uni_modules/uni-match-media/utssdk/app-harmony'
import {
  chooseImage,
  getImageInfo,
  saveImageToPhotosAlbum,
  compressImage,
  chooseVideo,
  saveVideoToPhotosAlbum,
  getVideoInfo,
  compressVideo,
  chooseFile
} from './uni_modules/uni-media/utssdk/app-harmony'
import {
  ChooseFile,
  ChooseFileComplete,
  ChooseFileCompleteCallback,
  ChooseFileFail,
  ChooseFileFailCallback,
  ChooseFileOptions,
  ChooseFileSuccess,
  ChooseFileSuccessCallback,
  ChooseFileTempFile,
  ChooseImage,
  ChooseImageAlbumMode,
  ChooseImageCompleteCallback,
  ChooseImageCropOptions,
  ChooseImageFail,
  ChooseImageFailCallback,
  ChooseImageOptions,
  ChooseImagePageOrientation,
  ChooseImageSuccess,
  ChooseImageSuccessCallback,
  ChooseImageTempFile,
  ChooseVideo,
  ChooseVideoAlbumMode,
  ChooseVideoCompleteCallback,
  ChooseVideoFail,
  ChooseVideoFailCallback,
  ChooseVideoOptions,
  ChooseVideoPageOrientation,
  ChooseVideoSuccess,
  ChooseVideoSuccessCallback,
  CompressImage,
  CompressImageCompleteCallback,
  CompressImageFail,
  CompressImageFailCallback,
  CompressImageOptions,
  CompressImageSuccess,
  CompressImageSuccessCallback,
  CompressVideo,
  CompressVideoCompleteCallback,
  CompressVideoFail,
  CompressVideoFailCallback,
  CompressVideoOptions,
  CompressVideoSuccess,
  CompressVideoSuccessCallback,
  GetImageInfo,
  GetImageInfoCompleteCallback,
  GetImageInfoFail,
  GetImageInfoFailCallback,
  GetImageInfoOptions,
  GetImageInfoSuccess,
  GetImageInfoSuccessCallback,
  GetVideoInfo,
  GetVideoInfoCompleteCallback,
  GetVideoInfoFail,
  GetVideoInfoFailCallback,
  GetVideoInfoOptions,
  GetVideoInfoSuccess,
  GetVideoInfoSuccessCallback,
  IMediaError,
  MediaErrorCode,
  MediaOrientation,
  SaveImageToPhotosAlbum,
  SaveImageToPhotosAlbumCompleteCallback,
  SaveImageToPhotosAlbumFail,
  SaveImageToPhotosAlbumFailCallback,
  SaveImageToPhotosAlbumOptions,
  SaveImageToPhotosAlbumSuccess,
  SaveImageToPhotosAlbumSuccessCallback,
  SaveVideoToPhotosAlbum,
  SaveVideoToPhotosAlbumCompleteCallback,
  SaveVideoToPhotosAlbumFail,
  SaveVideoToPhotosAlbumFailCallback,
  SaveVideoToPhotosAlbumOptions,
  SaveVideoToPhotosAlbumSuccess,
  SaveVideoToPhotosAlbumSuccessCallback
} from './uni_modules/uni-media/utssdk/app-harmony'
import {
  onMemoryWarning,
  offMemoryWarning
} from './uni_modules/uni-memory/utssdk/app-harmony'
import {
  MemoryWarningCallbackResult,
  MemoryWarningErrorCode,
  MemoryWarningFail,
  OffMemoryWarning,
  OnMemoryWarning,
  OnMemoryWarningCallback
} from './uni_modules/uni-memory/utssdk/app-harmony'
import {
  showModal,
  hideModal
} from './uni_modules/uni-modal/utssdk/app-harmony'
import * as uniModal from './uni_modules/uni-modal/utssdk/app-harmony'
import {
  HideModal,
  HideModalErrorCode,
  HideModalFail,
  HideModalFailImpl,
  HideModalOptions,
  HideModalSuccess,
  HideModalSuccessImpl,
  ModalPage,
  ShowModal,
  ShowModalErrorCode,
  ShowModalFail,
  ShowModalFailImpl,
  ShowModalOptions,
  ShowModalSuccess,
  ShowModalSuccessImpl
} from './uni_modules/uni-modal/utssdk/app-harmony'
import {
  setNavigationBarColor,
  showNavigationBarLoading,
  hideNavigationBarLoading
} from './uni_modules/uni-navigationBar/utssdk/app-harmony'
import {
  HideNavigationBarLoading,
  HideNavigationBarLoadingFail,
  HideNavigationBarLoadingFailCallback,
  HideNavigationBarLoadingOptions,
  HideNavigationBarLoadingSuccess,
  HideNavigationBarLoadingSuccessCallback,
  SetNavigationBarColor,
  SetNavigationBarColorComplete,
  SetNavigationBarColorCompleteCallback,
  SetNavigationBarColorErrorCode,
  SetNavigationBarColorFail,
  SetNavigationBarColorFailCallback,
  SetNavigationBarColorOptions,
  SetNavigationBarColorSuccess,
  SetNavigationBarColorSuccessCallback,
  SetNavigationBarTitle,
  SetNavigationBarTitleComplete,
  SetNavigationBarTitleCompleteCallback,
  SetNavigationBarTitleErrorCode,
  SetNavigationBarTitleFail,
  SetNavigationBarTitleFailCallback,
  SetNavigationBarTitleOptions,
  SetNavigationBarTitleSuccess,
  SetNavigationBarTitleSuccessCallback,
  ShowNavigationBarLoading,
  ShowNavigationBarLoadingFail,
  ShowNavigationBarLoadingFailCallback,
  ShowNavigationBarLoadingOptions,
  ShowNavigationBarLoadingSuccess,
  ShowNavigationBarLoadingSuccessCallback
} from './uni_modules/uni-navigationBar/utssdk/app-harmony'
import {
  UniNavigatorElement
} from './uni_modules/uni-navigator/utssdk/app-harmony'
import {
  request,
  uploadFile,
  downloadFile,
  configMTLS
} from './uni_modules/uni-network/utssdk/app-harmony'
import {
  Certificate,
  ConfigMTLS,
  ConfigMTLSComplete,
  ConfigMTLSCompleteCallback,
  ConfigMTLSFail,
  ConfigMTLSFailCallback,
  ConfigMTLSOptions,
  ConfigMTLSSuccess,
  ConfigMTLSSuccessCallback,
  DownloadFile,
  DownloadFileComplete,
  DownloadFileCompleteCallback,
  DownloadFileFail,
  DownloadFileFailCallback,
  DownloadFileOptions,
  DownloadFileProgressUpdateCallback,
  DownloadFileSuccess,
  DownloadFileSuccessCallback,
  DownloadTask,
  OnProgressDownloadResult,
  OnProgressUpdateResult,
  RequestCompleteCallback,
  RequestErrorCode,
  RequestFail,
  RequestFailCallback,
  RequestMethod,
  RequestOptions as OriginalRequestOptions,
  RequestSuccess,
  RequestSuccessCallback,
  RequestTask,
  RequestTaskOnChunkReceivedCallback,
  RequestTaskOnChunkReceivedListenerResult,
  RequestTaskOnHeadersReceivedCallback,
  RequestTaskOnHeadersReceivedListenerResult,
  UploadFile,
  UploadFileCompleteCallback,
  UploadFileFail,
  UploadFileFailCallback,
  UploadFileOptionFiles,
  UploadFileOptions,
  UploadFileProgressUpdateCallback,
  UploadFileSuccess,
  UploadFileSuccessCallback,
  UploadTask
} from './uni_modules/uni-network/utssdk/app-harmony'
import {
  login,
  getUserInfo
} from './uni_modules/uni-oauth/utssdk/app-harmony'
import {
  AppleLoginAppleInfo,
  GetUserInfo,
  GetUserInfoComplete,
  GetUserInfoCompleteCallback,
  GetUserInfoFail,
  GetUserInfoFailCallback,
  GetUserInfoOptions,
  GetUserInfoSuccess,
  GetUserInfoSuccessCallback,
  IOauthFail,
  Login,
  LoginComplete,
  LoginCompleteCallback,
  LoginFail,
  LoginFailCallback,
  LoginOptions,
  LoginSuccess,
  LoginSuccessCallback,
  OauthErrorCode,
  UniOAuthProvider,
  UniVerifyButtonListItem,
  UniVerifyButtonsStyles,
  UniverifyAuthButtonStyles,
  UniverifyIconStyles,
  UniverifyOtherButtonStyles,
  UniverifyPhoneNumStyles,
  UniverifyPrivacyItemStyles,
  UniverifyPrivacyTermsStyles,
  UniverifySloganStyles,
  UniverifyStyle,
  UserInfo
} from './uni_modules/uni-oauth/utssdk/app-harmony'
import {
  openAppAuthorizeSetting
} from './uni_modules/uni-openAppAuthorizeSetting/utssdk/app-harmony'
import {
  OpenAppAuthorizeSetting,
  OpenAppAuthorizeSettingComplete,
  OpenAppAuthorizeSettingCompleteCallback,
  OpenAppAuthorizeSettingFail,
  OpenAppAuthorizeSettingFailCallback,
  OpenAppAuthorizeSettingOptions,
  OpenAppAuthorizeSettingSuccess,
  OpenAppAuthorizeSettingSuccessCallback
} from './uni_modules/uni-openAppAuthorizeSetting/utssdk/app-harmony'
import {
  openDocument
} from './uni_modules/uni-openDocument/utssdk/app-harmony'
import {
  IOpenDocumentError,
  OpenDocument,
  OpenDocumentCompleteCallback,
  OpenDocumentErrorCode,
  OpenDocumentFail,
  OpenDocumentFailCallback,
  OpenDocumentOptions,
  OpenDocumentSuccess,
  OpenDocumentSuccessCallback,
  OpenDocumentSupportedTypes
} from './uni_modules/uni-openDocument/utssdk/app-harmony'
import {
  openLocation
} from './uni_modules/uni-openLocation/utssdk/app-harmony'
import * as uniOpenLocation from './uni_modules/uni-openLocation/utssdk/app-harmony'
import {
  OpenLocation,
  OpenLocationComplete,
  OpenLocationErrorCode,
  OpenLocationFail,
  OpenLocationOptions,
  OpenLocationSuccess,
  OpenLocationSuccessImpl
} from './uni_modules/uni-openLocation/utssdk/app-harmony'
import {
  requestPayment
} from './uni_modules/uni-payment/utssdk/app-harmony'
import {
  IRequestPaymentFail,
  RequestPayment,
  RequestPaymentComplete,
  RequestPaymentCompleteCallback,
  RequestPaymentErrorCode,
  RequestPaymentFail,
  RequestPaymentFailCallback,
  RequestPaymentFailImpl,
  RequestPaymentOptions,
  RequestPaymentSuccess,
  RequestPaymentSuccessCallback,
  UniPaymentProvider
} from './uni_modules/uni-payment/utssdk/app-harmony'
import {
  addPhoneContact,
  chooseContact
} from './uni_modules/uni-phoneContact/utssdk/app-harmony'
import {
  AddPhoneContact,
  AddPhoneContactComplete,
  AddPhoneContactCompleteCallback,
  AddPhoneContactErrorCode,
  AddPhoneContactFail,
  AddPhoneContactFailCallback,
  AddPhoneContactOptions,
  AddPhoneContactSuccess,
  AddPhoneContactSuccessCallback,
  ChooseContact,
  ChooseContactComplete,
  ChooseContactCompleteCallback,
  ChooseContactErrorCode,
  ChooseContactFail,
  ChooseContactFailCallback,
  ChooseContactOptions,
  ChooseContactSuccess,
  ChooseContactSuccessCallback,
  IAddPhoneContactFail,
  IChooseContactFail
} from './uni_modules/uni-phoneContact/utssdk/app-harmony'
import {
  UniPickerCancelEvent,
  UniPickerChangeEvent,
  UniPickerColumnChangeEvent,
  UniPickerElement
} from './uni_modules/uni-picker/utssdk/app-harmony'
import {
  previewImage,
  closePreviewImage
} from './uni_modules/uni-previewImage/utssdk/app-harmony'
import * as uniPreviewImage from './uni_modules/uni-previewImage/utssdk/app-harmony'
import {
  ClosePreviewImage,
  ClosePreviewImageCompleteCallback,
  ClosePreviewImageFail,
  ClosePreviewImageFailCallback,
  ClosePreviewImageOptions,
  ClosePreviewImageSuccess,
  ClosePreviewImageSuccessCallback,
  IPreviewImageError,
  LongPressActionsFailResult,
  LongPressActionsOptions,
  LongPressActionsSuccessResult,
  PreviewImage,
  PreviewImageCompleteCallback,
  PreviewImageErrorCode,
  PreviewImageFail,
  PreviewImageFailCallback,
  PreviewImageOptions,
  PreviewImageSuccess,
  PreviewImageSuccessCallback
} from './uni_modules/uni-previewImage/utssdk/app-harmony'
import {
  onPrivacyAuthorizationChange,
  offPrivacyAuthorizationChange,
  getPrivacySetting,
  resetPrivacyAuthorization,
  agreePrivacyAuthorization
} from './uni_modules/uni-privacy/utssdk/app-harmony'
import {
  AgreePrivacyAuthorization,
  GetPrivacySetting,
  GetPrivacySettingCompleteCallback,
  GetPrivacySettingFailCallback,
  GetPrivacySettingOptions,
  GetPrivacySettingSuccessCallback,
  GetPrivacySettingSuccessResult,
  OffPrivacyAuthorizationChange,
  OnPrivacyAuthorizationChange,
  OnPrivacyAuthorizationChangeCallback,
  PrivacyChangeResult,
  ResetPrivacyAuthorization
} from './uni_modules/uni-privacy/utssdk/app-harmony'
import {
  UniProgressActiveendEvent,
  UniProgressElement
} from './uni_modules/uni-progress/utssdk/app-harmony'
import {
  showToast,
  hideToast
} from './uni_modules/uni-prompt/utssdk/app-harmony'
import {
  HideToast,
  IPromptError,
  Icon,
  PromptErrorCode,
  ShowToast,
  ShowToastCompleteCallback,
  ShowToastFail,
  ShowToastFailCallback,
  ShowToastOptions,
  ShowToastPosition,
  ShowToastSuccess,
  ShowToastSuccessCallback
} from './uni_modules/uni-prompt/utssdk/app-harmony'
import {
  getRecorderManager
} from './uni_modules/uni-recorder/utssdk/app-harmony'
import {
  GetRecorderManager,
  IRecorderManagerFail,
  RecorderManager,
  RecorderManagerErrorCode,
  RecorderManagerOnStopResult,
  RecorderManagerStartOptions
} from './uni_modules/uni-recorder/utssdk/app-harmony'
import {
  rpx2px
} from './uni_modules/uni-rpx2px/utssdk/app-harmony'
import {
  Rpx2px
} from './uni_modules/uni-rpx2px/utssdk/app-harmony'
import {
  scanCode
} from './uni_modules/uni-scanCode/utssdk/app-harmony'
import * as uniScanCode from './uni_modules/uni-scanCode/utssdk/app-harmony'
import {
  ScanCode,
  ScanCodeCompleteCallback,
  ScanCodeFail,
  ScanCodeFailCallback,
  ScanCodeOptions,
  ScanCodeSuccess,
  ScanCodeSuccessCallback,
  ScanCodeSupportedTypes
} from './uni_modules/uni-scanCode/utssdk/app-harmony'
import {
  setScreenBrightness,
  getScreenBrightness,
  setKeepScreenOn
} from './uni_modules/uni-screenBrightness/utssdk/app-harmony'
import {
  GetScreenBrightness,
  GetScreenBrightnessComplete,
  GetScreenBrightnessCompleteCallback,
  GetScreenBrightnessFail,
  GetScreenBrightnessFailCallback,
  GetScreenBrightnessOptions,
  GetScreenBrightnessSuccess,
  GetScreenBrightnessSuccessCallback,
  IGetScreenBrightnessFail,
  ISetKeepScreenOnFail,
  ISetScreenBrightnessFail,
  SetKeepScreenOn,
  SetKeepScreenOnComplete,
  SetKeepScreenOnCompleteCallback,
  SetKeepScreenOnFail,
  SetKeepScreenOnFailCallback,
  SetKeepScreenOnOptions,
  SetKeepScreenOnSuccess,
  SetKeepScreenOnSuccessCallback,
  SetScreenBrightness,
  SetScreenBrightnessComplete,
  SetScreenBrightnessCompleteCallback,
  SetScreenBrightnessFail,
  SetScreenBrightnessFailCallback,
  SetScreenBrightnessOptions,
  SetScreenBrightnessSuccess,
  SetScreenBrightnessSuccessCallback
} from './uni_modules/uni-screenBrightness/utssdk/app-harmony'
import {
  share
} from './uni_modules/uni-share/utssdk/app-harmony'
import {
  IShareFail,
  Share,
  ShareComplete,
  ShareCompleteCallback,
  ShareErrorCode,
  ShareFail,
  ShareFailCallback,
  ShareMiniProgramShareOptions,
  ShareMiniProgramShareType,
  ShareOptions,
  ShareProvider,
  ShareScene,
  ShareSuccess,
  ShareSuccessCallback,
  ShareType,
  UniShareProvider
} from './uni_modules/uni-share/utssdk/app-harmony'
import {
  shareWithSystem
} from './uni_modules/uni-shareWithSystem/utssdk/app-harmony'
import {
  IShareWithSystemFail,
  ShareWithSystem,
  ShareWithSystemCallback,
  ShareWithSystemErrorCode,
  ShareWithSystemFail,
  ShareWithSystemFailCallback,
  ShareWithSystemOptions,
  ShareWithSystemSuccess,
  ShareWithSystemSuccessCallback
} from './uni_modules/uni-shareWithSystem/utssdk/app-harmony'
import {
  showLoading,
  hideLoading
} from './uni_modules/uni-showLoading/utssdk/app-harmony'
import * as uniShowLoading from './uni_modules/uni-showLoading/utssdk/app-harmony'
import {
  HideLoading,
  HideLoadingComplete,
  HideLoadingCompleteCallback,
  HideLoadingFail,
  HideLoadingFailCallback,
  HideLoadingFailErrorCode,
  HideLoadingFailImpl,
  HideLoadingOptions,
  HideLoadingSuccess,
  HideLoadingSuccessCallback,
  HideLoadingSuccessImpl,
  LoadingPage,
  ShowLoading,
  ShowLoadingComplete,
  ShowLoadingCompleteCallback,
  ShowLoadingFail,
  ShowLoadingFailCallback,
  ShowLoadingFailErrorCode,
  ShowLoadingFailImpl,
  ShowLoadingOptions,
  ShowLoadingSuccess,
  ShowLoadingSuccessCallback,
  ShowLoadingSuccessImpl
} from './uni_modules/uni-showLoading/utssdk/app-harmony'
import {
  setStorage,
  setStorageSync,
  getStorage,
  getStorageSync,
  getStorageInfo,
  getStorageInfoSync,
  removeStorage,
  removeStorageSync,
  clearStorage,
  clearStorageSync
} from './uni_modules/uni-storage/utssdk/app-harmony'
import {
  ClearStorage,
  ClearStorageCompleteCallback,
  ClearStorageFailCallback,
  ClearStorageOptions,
  ClearStorageSuccess,
  ClearStorageSuccessCallback,
  ClearStorageSync,
  GetStorage,
  GetStorageCompleteCallback,
  GetStorageFailCallback,
  GetStorageInfo,
  GetStorageInfoCompleteCallback,
  GetStorageInfoFailCallback,
  GetStorageInfoOptions,
  GetStorageInfoSuccess,
  GetStorageInfoSuccessCallback,
  GetStorageInfoSync,
  GetStorageOptions,
  GetStorageSuccess,
  GetStorageSuccessCallback,
  GetStorageSync,
  RemoveStorage,
  RemoveStorageCompleteCallback,
  RemoveStorageFailCallback,
  RemoveStorageOptions,
  RemoveStorageSuccess,
  RemoveStorageSuccessCallback,
  RemoveStorageSync,
  SetStorage,
  SetStorageCompleteCallback,
  SetStorageFailCallback,
  SetStorageOptions,
  SetStorageSuccess,
  SetStorageSuccessCallback,
  SetStorageSync
} from './uni_modules/uni-storage/utssdk/app-harmony'
import {
  onOsThemeChange,
  offOsThemeChange,
  setAppTheme,
  onAppThemeChange,
  offAppThemeChange,
  onHostThemeChange,
  offHostThemeChange
} from './uni_modules/uni-theme/utssdk/app-harmony'
import {
  AppThemeChangeResult,
  AppThemeErrorCode,
  AppThemeFail,
  IAppThemeFail,
  OffAppThemeChange,
  OffHostThemeChange,
  OffOsThemeChange,
  OnAppThemeChange,
  OnAppThemeChangeCallback,
  OnHostThemeChange,
  OnHostThemeChangeCallback,
  OnHostThemeChangeCallbackResult,
  OnOsThemeChange,
  OnOsThemeChangeCallback,
  OnThemeChangeCallbackResult,
  OsThemeChangeResult,
  SetAppTheme,
  SetAppThemeCompleteCallback,
  SetAppThemeFailCallback,
  SetAppThemeOptions,
  SetAppThemeSuccessCallback,
  SetAppThemeSuccessResult
} from './uni_modules/uni-theme/utssdk/app-harmony'
import {
  vibrateShort,
  vibrateLong
} from './uni_modules/uni-vibrate/utssdk/app-harmony'
import {
  IVibrateLongFail,
  IVibrateShortFail,
  VibrateErrorCode,
  VibrateLong,
  VibrateLongComplete,
  VibrateLongCompleteCallback,
  VibrateLongFail,
  VibrateLongFailCallback,
  VibrateLongOptions,
  VibrateLongSuccess,
  VibrateLongSuccessCallback,
  VibrateShort,
  VibrateShortComplete,
  VibrateShortCompleteCallback,
  VibrateShortFail,
  VibrateShortFailCallback,
  VibrateShortOptions,
  VibrateShortSuccess,
  VibrateShortSuccessCallback,
  VibrateShortType
} from './uni_modules/uni-vibrate/utssdk/app-harmony'
import {
  createVideoContext
} from './uni_modules/uni-video/utssdk/app-harmony'
import * as uniVideo from './uni_modules/uni-video/utssdk/app-harmony'
import {
  CreateVideoContext,
  Danmu,
  RequestFullScreenOptions,
  UniVideoControlsToggleEvent,
  UniVideoControlsToggleEventDetail,
  UniVideoErrorEvent,
  UniVideoEvent,
  UniVideoFullScreenChangeEvent,
  UniVideoFullScreenChangeEventDetail,
  UniVideoFullScreenClickEvent,
  UniVideoFullScreenClickEventDetail,
  UniVideoFullScreenDirection,
  UniVideoProgressEvent,
  UniVideoProgressEventDetail,
  UniVideoTimeUpdateEvent,
  UniVideoTimeUpdateEventDetail,
  VideoContext,
  VideoError,
  VideoErrorCode,
  UniVideoElement
} from './uni_modules/uni-video/utssdk/app-harmony'
import {
  connectSocket,
  sendSocketMessage,
  closeSocket,
  onSocketOpen,
  onSocketMessage,
  onSocketClose,
  onSocketError
} from './uni_modules/uni-websocket/utssdk/app-harmony'
import {
  CloseSocket,
  CloseSocketOptions,
  ConnectSocket,
  ConnectSocketErrorCode,
  ConnectSocketFail,
  ConnectSocketOptions,
  ConnectSocketSuccess,
  GeneralCallbackResult,
  OnSocketClose,
  OnSocketCloseCallback,
  OnSocketCloseCallbackResult,
  OnSocketError,
  OnSocketErrorCallback,
  OnSocketErrorCallbackResult,
  OnSocketMessage,
  OnSocketMessageCallback,
  OnSocketMessageCallbackResult,
  OnSocketOpen,
  OnSocketOpenCallback,
  OnSocketOpenCallbackResult,
  SendSocketMessage,
  SendSocketMessageErrorCode,
  SendSocketMessageFail,
  SendSocketMessageOptions,
  SocketTask
} from './uni_modules/uni-websocket/utssdk/app-harmony'
uni.onAccelerometerChange = onAccelerometerChange
uni.offAccelerometerChange = offAccelerometerChange
uni.startAccelerometer = startAccelerometer
uni.stopAccelerometer = stopAccelerometer
uni.showActionSheet = showActionSheet
uni.hideActionSheet = hideActionSheet
uni.registerUTSPlugin('uni_modules/uni-actionSheet', uniActionSheet)
uni.arrayBufferToBase64 = arrayBufferToBase64
uni.startSoterAuthentication = startSoterAuthentication
uni.checkIsSupportSoterAuthentication = checkIsSupportSoterAuthentication
uni.checkIsSoterEnrolledInDevice = checkIsSoterEnrolledInDevice
uni.base64ToArrayBuffer = base64ToArrayBuffer
uni.addPhoneCalendar = addPhoneCalendar
uni.addPhoneRepeatCalendar = addPhoneRepeatCalendar
uni.createCanvasContextAsync = createCanvasContextAsync
customElements.define('canvas', UniCanvasElement);
setGlobalVar('UniCanvasElement', UniCanvasElement);
uni.chooseLocation = chooseLocation
uni.registerUTSPlugin('uni_modules/uni-chooseLocation', uniChooseLocation)
uni.chooseMedia = chooseMedia
uni.getClipboardData = getClipboardData
uni.setClipboardData = setClipboardData
uni.onCompassChange = onCompassChange
uni.offCompassChange = offCompassChange
uni.startCompass = startCompass
uni.stopCompass = stopCompass
uni.__onAppCrash = __onAppCrash
uni.__offAppCrash = __offAppCrash
uni.__getAppCrashInfo = __getAppCrashInfo
uni.__deleteAppCrashInfo = __deleteAppCrashInfo
uni.__createAppCrash = __createAppCrash
uni.createInnerAudioContext = createInnerAudioContext
uni.setInnerAudioOption = setInnerAudioOption
uni.createWebviewContext = createWebviewContext
uni.createWebViewContext = createWebViewContext
uni.createWorker = createWorker
uni.createEditorContextAsync = createEditorContextAsync
uni.registerUTSPlugin('uni_modules/uni-editor', uniEditor)
setGlobalVar('UniEditorElement', UniEditorElement);
uni.$on = $on
uni.$once = $once
uni.$off = $off
uni.$emit = $emit
uni.exit = exit
uni.saveFile = saveFile
uni.getSavedFileList = getSavedFileList
uni.getSavedFileInfo = getSavedFileInfo
uni.removeSavedFile = removeSavedFile
uni.getFileInfo = getFileInfo
uni.getFileSystemManager = getFileSystemManager
customElements.define('button', UniButtonElement);
setGlobalVar('UniButtonElement', UniButtonElement);
customElements.define('checkbox', UniCheckboxElement);
setGlobalVar('UniCheckboxElement', UniCheckboxElement);
customElements.define('checkbox-group', UniCheckboxGroupElement);
setGlobalVar('UniCheckboxGroupElement', UniCheckboxGroupElement);
customElements.define('form', UniFormElement);
setGlobalVar('UniFormElement', UniFormElement);
customElements.define('label', UniLabelElement);
setGlobalVar('UniLabelElement', UniLabelElement);
customElements.define('picker-view', UniPickerViewElement);
setGlobalVar('UniPickerViewElement', UniPickerViewElement);
customElements.define('picker-view-column', UniPickerViewColumnElement);
setGlobalVar('UniPickerViewColumnElement', UniPickerViewColumnElement);
customElements.define('radio', UniRadioElement);
setGlobalVar('UniRadioElement', UniRadioElement);
customElements.define('radio-group', UniRadioGroupElement);
setGlobalVar('UniRadioGroupElement', UniRadioGroupElement);
customElements.define('slider', UniSliderElement);
setGlobalVar('UniSliderElement', UniSliderElement);
customElements.define('switch', UniSwitchElement);
setGlobalVar('UniSwitchElement', UniSwitchElement);
uni.getAppAuthorizeSetting = getAppAuthorizeSetting
uni.getAppBaseInfo = getAppBaseInfo
uni.getBackgroundAudioManager = getBackgroundAudioManager
uni.getDeviceInfo = getDeviceInfo
uni.getElementById = getElementById
uni.getNetworkType = getNetworkType
uni.onNetworkStatusChange = onNetworkStatusChange
uni.offNetworkStatusChange = offNetworkStatusChange
uni.getProvider = getProvider
uni.getProviderSync = getProviderSync
uni.getSystemInfo = getSystemInfo
uni.getSystemInfoSync = getSystemInfoSync
uni.getWindowInfo = getWindowInfo
uni.getSystemSetting = getSystemSetting
uni.startGyroscope = startGyroscope
uni.stopGyroscope = stopGyroscope
uni.onGyroscopeChange = onGyroscopeChange
uni.offGyroscopeChange = offGyroscopeChange
uni.hideKeyboard = hideKeyboard
uni.onKeyboardHeightChange = onKeyboardHeightChange
uni.offKeyboardHeightChange = offKeyboardHeightChange
uni.loadFontFace = loadFontFace
uni.registerUTSPlugin('uni_modules/uni-loading', uniLoading)
setGlobalVar('UniLoadingElement', UniLoadingElement);
uni.getLocation = getLocation
uni.startLocationUpdate = startLocationUpdate
uni.stopLocationUpdate = stopLocationUpdate
uni.onLocationChange = onLocationChange
uni.offLocationChange = offLocationChange
uni.startLocationUpdateBackground = startLocationUpdateBackground
uni.onLocationChangeError = onLocationChangeError
uni.offLocationChangeError = offLocationChangeError
uni.makePhoneCall = makePhoneCall
customElements.define('match-media', UniMatchMediaElement);
setGlobalVar('UniMatchMediaElement', UniMatchMediaElement);
uni.chooseImage = chooseImage
uni.getImageInfo = getImageInfo
uni.saveImageToPhotosAlbum = saveImageToPhotosAlbum
uni.compressImage = compressImage
uni.chooseVideo = chooseVideo
uni.saveVideoToPhotosAlbum = saveVideoToPhotosAlbum
uni.getVideoInfo = getVideoInfo
uni.compressVideo = compressVideo
uni.chooseFile = chooseFile
uni.onMemoryWarning = onMemoryWarning
uni.offMemoryWarning = offMemoryWarning
uni.showModal = showModal
uni.hideModal = hideModal
uni.registerUTSPlugin('uni_modules/uni-modal', uniModal)
uni.setNavigationBarColor = setNavigationBarColor
uni.showNavigationBarLoading = showNavigationBarLoading
uni.hideNavigationBarLoading = hideNavigationBarLoading
customElements.define('navigator', UniNavigatorElement);
setGlobalVar('UniNavigatorElement', UniNavigatorElement);
uni.request = request
uni.uploadFile = uploadFile
uni.downloadFile = downloadFile
uni.configMTLS = configMTLS
uni.login = login
uni.getUserInfo = getUserInfo
uni.openAppAuthorizeSetting = openAppAuthorizeSetting
uni.openDocument = openDocument
uni.openLocation = openLocation
uni.registerUTSPlugin('uni_modules/uni-openLocation', uniOpenLocation)
uni.requestPayment = requestPayment
uni.addPhoneContact = addPhoneContact
uni.chooseContact = chooseContact
customElements.define('picker', UniPickerElement);
setGlobalVar('UniPickerElement', UniPickerElement);
uni.previewImage = previewImage
uni.closePreviewImage = closePreviewImage
uni.registerUTSPlugin('uni_modules/uni-previewImage', uniPreviewImage)
uni.onPrivacyAuthorizationChange = onPrivacyAuthorizationChange
uni.offPrivacyAuthorizationChange = offPrivacyAuthorizationChange
uni.getPrivacySetting = getPrivacySetting
uni.resetPrivacyAuthorization = resetPrivacyAuthorization
uni.agreePrivacyAuthorization = agreePrivacyAuthorization
customElements.define('progress', UniProgressElement);
setGlobalVar('UniProgressElement', UniProgressElement);
uni.showToast = showToast
uni.hideToast = hideToast
uni.getRecorderManager = getRecorderManager
uni.rpx2px = rpx2px
uni.scanCode = scanCode
uni.registerUTSPlugin('uni_modules/uni-scanCode', uniScanCode)
uni.setScreenBrightness = setScreenBrightness
uni.getScreenBrightness = getScreenBrightness
uni.setKeepScreenOn = setKeepScreenOn
uni.share = share
uni.shareWithSystem = shareWithSystem
uni.showLoading = showLoading
uni.hideLoading = hideLoading
uni.registerUTSPlugin('uni_modules/uni-showLoading', uniShowLoading)
uni.setStorage = setStorage
uni.setStorageSync = setStorageSync
uni.getStorage = getStorage
uni.getStorageSync = getStorageSync
uni.getStorageInfo = getStorageInfo
uni.getStorageInfoSync = getStorageInfoSync
uni.removeStorage = removeStorage
uni.removeStorageSync = removeStorageSync
uni.clearStorage = clearStorage
uni.clearStorageSync = clearStorageSync
uni.onOsThemeChange = onOsThemeChange
uni.offOsThemeChange = offOsThemeChange
uni.setAppTheme = setAppTheme
uni.onAppThemeChange = onAppThemeChange
uni.offAppThemeChange = offAppThemeChange
uni.onHostThemeChange = onHostThemeChange
uni.offHostThemeChange = offHostThemeChange
uni.vibrateShort = vibrateShort
uni.vibrateLong = vibrateLong
uni.createVideoContext = createVideoContext
uni.registerUTSPlugin('uni_modules/uni-video', uniVideo)
setGlobalVar('UniVideoElement', UniVideoElement);
uni.connectSocket = connectSocket
uni.sendSocketMessage = sendSocketMessage
uni.closeSocket = closeSocket
uni.onSocketOpen = onSocketOpen
uni.onSocketMessage = onSocketMessage
uni.onSocketClose = onSocketClose
uni.onSocketError = onSocketError
type RequestOptions<T = Object> = OptionalNull<OriginalRequestOptions<T>>
type Request<T = Object> = (param: RequestOptions<T>) => RequestTask;
export {
  AccelerometerErrorCode,
  AccelerometerInterval,
  IAccelerometerError,
  IStartAccelerometerFail,
  IStopAccelerometerFail,
  OffAccelerometerChange,
  OnAccelerometerChange,
  OnAccelerometerChangeCallback,
  OnAccelerometerChangeCallbackResult,
  StartAccelerometer,
  StartAccelerometerComplete,
  StartAccelerometerCompleteCallback,
  StartAccelerometerFail,
  StartAccelerometerFailCallback,
  StartAccelerometerOptions,
  StartAccelerometerSuccess,
  StartAccelerometerSuccessCallback,
  StopAccelerometer,
  StopAccelerometerComplete,
  StopAccelerometerCompleteCallback,
  StopAccelerometerFail,
  StopAccelerometerFailCallback,
  StopAccelerometerOptions,
  StopAccelerometerSuccess,
  StopAccelerometerSuccessCallback
}
export {
  HideActionSheet,
  Popover,
  ShowActionSheet,
  ShowActionSheetComplete,
  ShowActionSheetErrorCode,
  ShowActionSheetFail,
  ShowActionSheetFailImpl,
  ShowActionSheetOptions,
  ShowActionSheetSuccess,
  ShowActionSheetSuccessImpl
}
export {
  ArrayBufferToBase64
}
export {
  CheckIsSoterEnrolledInDevice,
  CheckIsSoterEnrolledInDeviceComplete,
  CheckIsSoterEnrolledInDeviceCompleteCallback,
  CheckIsSoterEnrolledInDeviceFail,
  CheckIsSoterEnrolledInDeviceFailCallback,
  CheckIsSoterEnrolledInDeviceOptions,
  CheckIsSoterEnrolledInDeviceSuccess,
  CheckIsSoterEnrolledInDeviceSuccessCallback,
  CheckIsSupportSoterAuthentication,
  CheckIsSupportSoterAuthenticationComplete,
  CheckIsSupportSoterAuthenticationCompleteCallback,
  CheckIsSupportSoterAuthenticationFail,
  CheckIsSupportSoterAuthenticationFailCallback,
  CheckIsSupportSoterAuthenticationOptions,
  CheckIsSupportSoterAuthenticationSuccess,
  CheckIsSupportSoterAuthenticationSuccessCallback,
  ICheckIsSoterEnrolledInDeviceFail,
  ICheckIsSupportSoterAuthenticationFail,
  IStartSoterAuthenticationFail,
  SoterAuthMode,
  StartSoterAuthentication,
  StartSoterAuthenticationComplete,
  StartSoterAuthenticationCompleteCallback,
  StartSoterAuthenticationFail,
  StartSoterAuthenticationFailCallback,
  StartSoterAuthenticationOptions,
  StartSoterAuthenticationSuccess,
  StartSoterAuthenticationSuccessCallback
}
export {
  Base64ToArrayBuffer
}
export {
  AddPhoneCalendar,
  AddPhoneCalendarComplete,
  AddPhoneCalendarCompleteCallback,
  AddPhoneCalendarFail,
  AddPhoneCalendarFailCallback,
  AddPhoneCalendarOptions,
  AddPhoneCalendarSuccess,
  AddPhoneCalendarSuccessCallback,
  AddPhoneRepeatCalendar,
  AddPhoneRepeatCalendarComplete,
  AddPhoneRepeatCalendarCompleteCallback,
  AddPhoneRepeatCalendarFail,
  AddPhoneRepeatCalendarFailCallback,
  AddPhoneRepeatCalendarOptions,
  AddPhoneRepeatCalendarSuccess,
  AddPhoneRepeatCalendarSuccessCallback,
  CalendarErrorCode,
  CalendarRepeatInterval,
  IAddPhoneCalendarFail,
  IAddPhoneRepeatCalendarFail,
  ICalendarError
}
export {
  CanvasContext,
  CreateCanvasContextAsync,
  CreateCanvasContextAsyncCompleteCallback,
  CreateCanvasContextAsyncFailCallback,
  CreateCanvasContextAsyncOptions,
  CreateCanvasContextAsyncSuccessCallback,
  RequestAnimationFrameCallback,
  UniCanvasElement,
  UniCanvasRenderingContext2D
}
export {
  ChooseLocation,
  ChooseLocationComplete,
  ChooseLocationErrorCode,
  ChooseLocationFail,
  ChooseLocationFailImpl,
  ChooseLocationOptions,
  ChooseLocationSuccess,
  ChooseLocationSuccessImpl
}
export {
  ChooseMedia,
  ChooseMediaCompleteCallback,
  ChooseMediaErrorCode,
  ChooseMediaFail,
  ChooseMediaFailCallback,
  ChooseMediaFileType,
  ChooseMediaOptions,
  ChooseMediaPageOrientation,
  ChooseMediaSuccess,
  ChooseMediaSuccessCallback,
  ChooseMediaTempFile,
  IChooseMediaError
}
export {
  ClipBoardErrorCode,
  GetClipboardData,
  GetClipboardDataComplete,
  GetClipboardDataCompleteCallback,
  GetClipboardDataFail,
  GetClipboardDataFailCallback,
  GetClipboardDataOptions,
  GetClipboardDataSuccess,
  GetClipboardDataSuccessCallback,
  IClipBoardError,
  SetClipboardData,
  SetClipboardDataComplete,
  SetClipboardDataCompleteCallback,
  SetClipboardDataFail,
  SetClipboardDataFailCallback,
  SetClipboardDataOptions,
  SetClipboardDataSuccess,
  SetClipboardDataSuccessCallback
}
export {
  CompassAccuracy,
  CompassErrorCode,
  ICompassError,
  IStartCompassFail,
  IStopCompassFail,
  OffCompassChange,
  OnCompassChange,
  OnCompassChangeCallback,
  OnCompassChangeCallbackResult,
  StartCompass,
  StartCompassComplete,
  StartCompassCompleteCallback,
  StartCompassFail,
  StartCompassFailCallback,
  StartCompassOptions,
  StartCompassSuccess,
  StartCompassSuccessCallback,
  StopCompass,
  StopCompassComplete,
  StopCompassCompleteCallback,
  StopCompassFail,
  StopCompassFailCallback,
  StopCompassOptions,
  StopCompassSuccess,
  StopCompassSuccessCallback
}
export {
  AppCrashInfo,
  CreateAppCrash,
  DeleteAppCrashInfo,
  GetAppCrashInfo,
  OffAppCrash,
  OnAppCrash,
  OnAppCrashCallback
}
export {
  CreateInnerAudioContext,
  CreateInnerAudioContextErrorCode,
  ICreateInnerAudioContextFail,
  InnerAudioContext,
  SetInnerAudioOption,
  SetInnerAudioOptionComplete,
  SetInnerAudioOptionCompleteCallback,
  SetInnerAudioOptionFail,
  SetInnerAudioOptionFailCallback,
  SetInnerAudioOptionOptions,
  SetInnerAudioOptionSuccess,
  SetInnerAudioOptionSuccessCallback
}
export {
  CreateWebViewContext,
  CreateWebviewContext,
  UniWebviewContextLoadDataOptions,
  WebViewContext
}
export {
  CreateWorker,
  Worker,
  WorkerOnErrorCallback,
  WorkerOnErrorCallbackResult,
  WorkerOnErrorCallbackResultErrorCode,
  WorkerOnMessageCallback,
  WorkerPostMessageOptions,
  WorkerTaskImpl
}
export {
  CreateEditorContextAsync,
  CreateEditorContextAsyncOptions,
  EditorContext,
  IUniEditorElement,
  UniEditorElementGetContentsOptions,
  UniEditorElementGetContentsOptionsRes,
  UniEditorElementGetSelectionTextOptions,
  UniEditorElementGetSelectionTextOptionsRes,
  UniEditorElementInsertImageOptions,
  UniEditorElementInsertLinkOptions,
  UniEditorElementInsertMentionOptions,
  UniEditorElementInsertTextOptions,
  UniEditorElementOptions,
  UniEditorElementOptionsCompleteRes,
  UniEditorElementOptionsFailRes,
  UniEditorElementOptionsSuccessRes,
  UniEditorElementSetContentsOptions,
  UniEditorElement
}
export {
  $Emit,
  $Off,
  $On,
  $Once
}
export {
  Exit,
  ExitCompleteCallback,
  ExitErrorCode,
  ExitFail,
  ExitFailCallback,
  ExitOptions,
  ExitSuccess,
  ExitSuccessCallback,
  IExitError
}
export {
  GetFileInfo,
  GetSavedFileInfo,
  GetSavedFileList,
  LegacyGetFileInfoCompleteCallback,
  LegacyGetFileInfoFail,
  LegacyGetFileInfoFailCallback,
  LegacyGetFileInfoOptions,
  LegacyGetFileInfoSuccess,
  LegacyGetFileInfoSuccessCallback,
  LegacyGetSavedFileInfoCompleteCallback,
  LegacyGetSavedFileInfoFail,
  LegacyGetSavedFileInfoFailCallback,
  LegacyGetSavedFileInfoOptions,
  LegacyGetSavedFileInfoSuccess,
  LegacyGetSavedFileInfoSuccessCallback,
  LegacyGetSavedFileListCompleteCallback,
  LegacyGetSavedFileListFail,
  LegacyGetSavedFileListFailCallback,
  LegacyGetSavedFileListOptions,
  LegacyGetSavedFileListSuccess,
  LegacyGetSavedFileListSuccessCallback,
  LegacyRemoveSavedFileCompleteCallback,
  LegacyRemoveSavedFileFail,
  LegacyRemoveSavedFileFailCallback,
  LegacyRemoveSavedFileOptions,
  LegacyRemoveSavedFileSuccess,
  LegacyRemoveSavedFileSuccessCallback,
  LegacySaveFileCompleteCallback,
  LegacySaveFileFail,
  LegacySaveFileFailCallback,
  LegacySaveFileOptions,
  LegacySaveFileSuccess,
  LegacySaveFileSuccessCallback,
  LegacySavedFileListItem,
  RemoveSavedFile,
  SaveFile
}
export {
  AccessOptions,
  AppendFileOptions,
  CloseOptions,
  CloseSyncOptions,
  CopyFileOptions,
  EntriesResult,
  EntryItem,
  FStatOptions,
  FStatSuccessCallback,
  FStatSuccessResult,
  FStatSyncOptions,
  FTruncateFileOptions,
  FTruncateFileSyncOptions,
  FileManagerCompleteCallback,
  FileManagerFailCallback,
  FileManagerSuccessCallback,
  FileManagerSuccessResult,
  FileStats,
  FileSystemManager,
  FileSystemManagerErrorCode,
  FileSystemManagerFail,
  GetFileInfoOptions,
  GetFileInfoSuccessCallback,
  GetFileInfoSuccessResult,
  GetFileSystemManager,
  GetSavedFileListCallback,
  GetSavedFileListOptions,
  GetSavedFileListResult,
  IFileSystemManagerFail,
  MkDirOptions,
  MkDirSuccessCallback,
  OpenFileOptions,
  OpenFileSuccessCallback,
  OpenFileSuccessResult,
  OpenFileSyncOptions,
  ReadCompressedFileCallback,
  ReadCompressedFileOptions,
  ReadCompressedFileResult,
  ReadDirOptions,
  ReadDirSuccessCallback,
  ReadDirSuccessResult,
  ReadFileOptions,
  ReadFileSuccessCallback,
  ReadFileSuccessResult,
  ReadOption,
  ReadResult,
  ReadSuccessCallback,
  ReadSuccessCallbackResult,
  ReadSyncOption,
  ReadZipEntryCallback,
  ReadZipEntryOptions,
  RemoveSavedFileOptions,
  RenameOptions,
  RmDirOptions,
  SaveFileOptions,
  SaveFileSuccessCallback,
  SaveFileSuccessResult,
  StatOptions,
  StatSuccessCallback,
  StatSuccessResult,
  Stats,
  TruncateFileOptions,
  UnLinkOptions,
  UnLinkSuccessCallback,
  UnzipFileOptions,
  WriteCallback,
  WriteFileOptions,
  WriteOptions,
  WriteResult,
  WriteSyncOptions,
  ZipFileItem
}
export {
  UniButtonElement,
  UniCheckboxElement,
  UniCheckboxGroupChangeEvent,
  UniCheckboxGroupElement,
  UniFormElement,
  UniFormResetEvent,
  UniFormSubmitEvent,
  UniLabelElement,
  UniPickerViewChangeEvent,
  UniPickerViewColumnElement,
  UniPickerViewElement,
  UniRadioElement,
  UniRadioGroupChangeEvent,
  UniRadioGroupElement,
  UniSliderChangeEvent,
  UniSliderElement,
  UniSwitchChangeEvent,
  UniSwitchElement
}
export {
  GetAppAuthorizeSetting,
  GetAppAuthorizeSettingResult
}
export {
  GetAppBaseInfo,
  GetAppBaseInfoOptions,
  GetAppBaseInfoResult
}
export {
  BackgroundAudioManager,
  CreateBackgroundAudioErrorCode,
  GetBackgroundAudioManager,
  ICreateBackgroundAudioFail
}
export {
  GetDeviceInfo,
  GetDeviceInfoOptions,
  GetDeviceInfoResult
}
export {
  GetElementById
}
export {
  GetNetworkType,
  GetNetworkTypeComplete,
  GetNetworkTypeCompleteCallback,
  GetNetworkTypeFail,
  GetNetworkTypeFailCallback,
  GetNetworkTypeOptions,
  GetNetworkTypeSuccess,
  GetNetworkTypeSuccessCallback,
  OffNetworkStatusChange,
  OnNetworkStatusChange,
  OnNetworkStatusChangeCallback,
  OnNetworkStatusChangeCallbackResult
}
export {
  GetProvider,
  GetProviderComplete,
  GetProviderCompleteCallback,
  GetProviderFail,
  GetProviderFailCallback,
  GetProviderFailImpl,
  GetProviderOptions,
  GetProviderSuccess,
  GetProviderSuccessCallback,
  GetProviderSync,
  GetProviderSyncOptions,
  GetProviderSyncSuccess,
  IGetProviderFail,
  ProviderErrorCode
}
export {
  CutoutRect,
  GetSystemInfo,
  GetSystemInfoComplete,
  GetSystemInfoCompleteCallback,
  GetSystemInfoOptions,
  GetSystemInfoResult,
  GetSystemInfoSuccessCallback,
  GetSystemInfoSync,
  GetWindowInfo,
  GetWindowInfoResult,
  SafeArea,
  SafeAreaInsets
}
export {
  GetSystemSetting,
  GetSystemSettingResult
}
export {
  GyroscopeErrorCode,
  GyroscopeInterval,
  IGyroscopeError,
  IStartGyroscopeFail,
  IStopGyroscopeFail,
  OffGyroscopeChange,
  OnGyroscopeChange,
  OnGyroscopeChangeCallback,
  OnGyroscopeChangeCallbackResult,
  StartGyroscope,
  StartGyroscopeComplete,
  StartGyroscopeCompleteCallback,
  StartGyroscopeFail,
  StartGyroscopeFailCallback,
  StartGyroscopeOptions,
  StartGyroscopeSuccess,
  StartGyroscopeSuccessCallback,
  StopGyroscope,
  StopGyroscopeComplete,
  StopGyroscopeCompleteCallback,
  StopGyroscopeFail,
  StopGyroscopeFailCallback,
  StopGyroscopeOptions,
  StopGyroscopeSuccess,
  StopGyroscopeSuccessCallback
}
export {
  HideKeyboard,
  HideKeyboardCompleteCallback,
  HideKeyboardFail,
  HideKeyboardFailCallback,
  HideKeyboardOptions,
  HideKeyboardSuccess,
  HideKeyboardSuccessCallback,
  OffKeyboardHeightChange,
  OnKeyboardHeightChange,
  OnKeyboardHeightChangeCallback,
  OnKeyboardHeightChangeCallbackResult
}
export {
  LoadFontFace,
  LoadFontFaceComplete,
  LoadFontFaceCompleteCallback,
  LoadFontFaceErrCode,
  LoadFontFaceFail,
  LoadFontFaceFailCallback,
  LoadFontFaceOptionDesc,
  LoadFontFaceOptions,
  LoadFontFaceSuccess,
  LoadFontFaceSuccessCallback
}
export {
  UniLoadingElement
}
export {
  GetLocation,
  GetLocationFail,
  GetLocationFailImpl,
  GetLocationOptions,
  GetLocationSuccess,
  IGetLocationFail,
  LocationErrorCode,
  OffLocationChange,
  OffLocationChangeError,
  OnLocationChange,
  OnLocationChangeCallback,
  OnLocationChangeError,
  OnLocationChangeErrorCallback,
  OnLocationChangeResult,
  StartLocationUpdate,
  StartLocationUpdateBackground,
  StartLocationUpdateBackgroundOptions,
  StartLocationUpdateBackgroundOptionsType,
  StartLocationUpdateBackgroundSuccess,
  StartLocationUpdateOptions,
  StartLocationUpdateOptionsType,
  StartLocationUpdateSuccess,
  StopLocationUpdate,
  StopLocationUpdateOptions,
  StopLocationUpdateSuccess,
  UniLocationProvider
}
export {
  IMakePhoneCallError,
  MakePhoneCall,
  MakePhoneCallComplete,
  MakePhoneCallCompleteCallback,
  MakePhoneCallErrorCode,
  MakePhoneCallFail,
  MakePhoneCallFailCallback,
  MakePhoneCallOptions,
  MakePhoneCallSuccess,
  MakePhoneCallSuccessCallback
}
export {
  UniMatchMediaElement
}
export {
  ChooseFile,
  ChooseFileComplete,
  ChooseFileCompleteCallback,
  ChooseFileFail,
  ChooseFileFailCallback,
  ChooseFileOptions,
  ChooseFileSuccess,
  ChooseFileSuccessCallback,
  ChooseFileTempFile,
  ChooseImage,
  ChooseImageAlbumMode,
  ChooseImageCompleteCallback,
  ChooseImageCropOptions,
  ChooseImageFail,
  ChooseImageFailCallback,
  ChooseImageOptions,
  ChooseImagePageOrientation,
  ChooseImageSuccess,
  ChooseImageSuccessCallback,
  ChooseImageTempFile,
  ChooseVideo,
  ChooseVideoAlbumMode,
  ChooseVideoCompleteCallback,
  ChooseVideoFail,
  ChooseVideoFailCallback,
  ChooseVideoOptions,
  ChooseVideoPageOrientation,
  ChooseVideoSuccess,
  ChooseVideoSuccessCallback,
  CompressImage,
  CompressImageCompleteCallback,
  CompressImageFail,
  CompressImageFailCallback,
  CompressImageOptions,
  CompressImageSuccess,
  CompressImageSuccessCallback,
  CompressVideo,
  CompressVideoCompleteCallback,
  CompressVideoFail,
  CompressVideoFailCallback,
  CompressVideoOptions,
  CompressVideoSuccess,
  CompressVideoSuccessCallback,
  GetImageInfo,
  GetImageInfoCompleteCallback,
  GetImageInfoFail,
  GetImageInfoFailCallback,
  GetImageInfoOptions,
  GetImageInfoSuccess,
  GetImageInfoSuccessCallback,
  GetVideoInfo,
  GetVideoInfoCompleteCallback,
  GetVideoInfoFail,
  GetVideoInfoFailCallback,
  GetVideoInfoOptions,
  GetVideoInfoSuccess,
  GetVideoInfoSuccessCallback,
  IMediaError,
  MediaErrorCode,
  MediaOrientation,
  SaveImageToPhotosAlbum,
  SaveImageToPhotosAlbumCompleteCallback,
  SaveImageToPhotosAlbumFail,
  SaveImageToPhotosAlbumFailCallback,
  SaveImageToPhotosAlbumOptions,
  SaveImageToPhotosAlbumSuccess,
  SaveImageToPhotosAlbumSuccessCallback,
  SaveVideoToPhotosAlbum,
  SaveVideoToPhotosAlbumCompleteCallback,
  SaveVideoToPhotosAlbumFail,
  SaveVideoToPhotosAlbumFailCallback,
  SaveVideoToPhotosAlbumOptions,
  SaveVideoToPhotosAlbumSuccess,
  SaveVideoToPhotosAlbumSuccessCallback
}
export {
  MemoryWarningCallbackResult,
  MemoryWarningErrorCode,
  MemoryWarningFail,
  OffMemoryWarning,
  OnMemoryWarning,
  OnMemoryWarningCallback
}
export {
  HideModal,
  HideModalErrorCode,
  HideModalFail,
  HideModalFailImpl,
  HideModalOptions,
  HideModalSuccess,
  HideModalSuccessImpl,
  ModalPage,
  ShowModal,
  ShowModalErrorCode,
  ShowModalFail,
  ShowModalFailImpl,
  ShowModalOptions,
  ShowModalSuccess,
  ShowModalSuccessImpl
}
export {
  HideNavigationBarLoading,
  HideNavigationBarLoadingFail,
  HideNavigationBarLoadingFailCallback,
  HideNavigationBarLoadingOptions,
  HideNavigationBarLoadingSuccess,
  HideNavigationBarLoadingSuccessCallback,
  SetNavigationBarColor,
  SetNavigationBarColorComplete,
  SetNavigationBarColorCompleteCallback,
  SetNavigationBarColorErrorCode,
  SetNavigationBarColorFail,
  SetNavigationBarColorFailCallback,
  SetNavigationBarColorOptions,
  SetNavigationBarColorSuccess,
  SetNavigationBarColorSuccessCallback,
  SetNavigationBarTitle,
  SetNavigationBarTitleComplete,
  SetNavigationBarTitleCompleteCallback,
  SetNavigationBarTitleErrorCode,
  SetNavigationBarTitleFail,
  SetNavigationBarTitleFailCallback,
  SetNavigationBarTitleOptions,
  SetNavigationBarTitleSuccess,
  SetNavigationBarTitleSuccessCallback,
  ShowNavigationBarLoading,
  ShowNavigationBarLoadingFail,
  ShowNavigationBarLoadingFailCallback,
  ShowNavigationBarLoadingOptions,
  ShowNavigationBarLoadingSuccess,
  ShowNavigationBarLoadingSuccessCallback
}
export {
  UniNavigatorElement
}
export {
  Certificate,
  ConfigMTLS,
  ConfigMTLSComplete,
  ConfigMTLSCompleteCallback,
  ConfigMTLSFail,
  ConfigMTLSFailCallback,
  ConfigMTLSOptions,
  ConfigMTLSSuccess,
  ConfigMTLSSuccessCallback,
  DownloadFile,
  DownloadFileComplete,
  DownloadFileCompleteCallback,
  DownloadFileFail,
  DownloadFileFailCallback,
  DownloadFileOptions,
  DownloadFileProgressUpdateCallback,
  DownloadFileSuccess,
  DownloadFileSuccessCallback,
  DownloadTask,
  OnProgressDownloadResult,
  OnProgressUpdateResult,
  RequestCompleteCallback,
  RequestErrorCode,
  RequestFail,
  RequestFailCallback,
  RequestMethod,
  RequestOptions,
  RequestSuccess,
  RequestSuccessCallback,
  RequestTask,
  RequestTaskOnChunkReceivedCallback,
  RequestTaskOnChunkReceivedListenerResult,
  RequestTaskOnHeadersReceivedCallback,
  RequestTaskOnHeadersReceivedListenerResult,
  UploadFile,
  UploadFileCompleteCallback,
  UploadFileFail,
  UploadFileFailCallback,
  UploadFileOptionFiles,
  UploadFileOptions,
  UploadFileProgressUpdateCallback,
  UploadFileSuccess,
  UploadFileSuccessCallback,
  UploadTask
}
export {
  AppleLoginAppleInfo,
  GetUserInfo,
  GetUserInfoComplete,
  GetUserInfoCompleteCallback,
  GetUserInfoFail,
  GetUserInfoFailCallback,
  GetUserInfoOptions,
  GetUserInfoSuccess,
  GetUserInfoSuccessCallback,
  IOauthFail,
  Login,
  LoginComplete,
  LoginCompleteCallback,
  LoginFail,
  LoginFailCallback,
  LoginOptions,
  LoginSuccess,
  LoginSuccessCallback,
  OauthErrorCode,
  UniOAuthProvider,
  UniVerifyButtonListItem,
  UniVerifyButtonsStyles,
  UniverifyAuthButtonStyles,
  UniverifyIconStyles,
  UniverifyOtherButtonStyles,
  UniverifyPhoneNumStyles,
  UniverifyPrivacyItemStyles,
  UniverifyPrivacyTermsStyles,
  UniverifySloganStyles,
  UniverifyStyle,
  UserInfo
}
export {
  OpenAppAuthorizeSetting,
  OpenAppAuthorizeSettingComplete,
  OpenAppAuthorizeSettingCompleteCallback,
  OpenAppAuthorizeSettingFail,
  OpenAppAuthorizeSettingFailCallback,
  OpenAppAuthorizeSettingOptions,
  OpenAppAuthorizeSettingSuccess,
  OpenAppAuthorizeSettingSuccessCallback
}
export {
  IOpenDocumentError,
  OpenDocument,
  OpenDocumentCompleteCallback,
  OpenDocumentErrorCode,
  OpenDocumentFail,
  OpenDocumentFailCallback,
  OpenDocumentOptions,
  OpenDocumentSuccess,
  OpenDocumentSuccessCallback,
  OpenDocumentSupportedTypes
}
export {
  OpenLocation,
  OpenLocationComplete,
  OpenLocationErrorCode,
  OpenLocationFail,
  OpenLocationOptions,
  OpenLocationSuccess,
  OpenLocationSuccessImpl
}
export {
  IRequestPaymentFail,
  RequestPayment,
  RequestPaymentComplete,
  RequestPaymentCompleteCallback,
  RequestPaymentErrorCode,
  RequestPaymentFail,
  RequestPaymentFailCallback,
  RequestPaymentFailImpl,
  RequestPaymentOptions,
  RequestPaymentSuccess,
  RequestPaymentSuccessCallback,
  UniPaymentProvider
}
export {
  AddPhoneContact,
  AddPhoneContactComplete,
  AddPhoneContactCompleteCallback,
  AddPhoneContactErrorCode,
  AddPhoneContactFail,
  AddPhoneContactFailCallback,
  AddPhoneContactOptions,
  AddPhoneContactSuccess,
  AddPhoneContactSuccessCallback,
  ChooseContact,
  ChooseContactComplete,
  ChooseContactCompleteCallback,
  ChooseContactErrorCode,
  ChooseContactFail,
  ChooseContactFailCallback,
  ChooseContactOptions,
  ChooseContactSuccess,
  ChooseContactSuccessCallback,
  IAddPhoneContactFail,
  IChooseContactFail
}
export {
  UniPickerCancelEvent,
  UniPickerChangeEvent,
  UniPickerColumnChangeEvent,
  UniPickerElement
}
export {
  ClosePreviewImage,
  ClosePreviewImageCompleteCallback,
  ClosePreviewImageFail,
  ClosePreviewImageFailCallback,
  ClosePreviewImageOptions,
  ClosePreviewImageSuccess,
  ClosePreviewImageSuccessCallback,
  IPreviewImageError,
  LongPressActionsFailResult,
  LongPressActionsOptions,
  LongPressActionsSuccessResult,
  PreviewImage,
  PreviewImageCompleteCallback,
  PreviewImageErrorCode,
  PreviewImageFail,
  PreviewImageFailCallback,
  PreviewImageOptions,
  PreviewImageSuccess,
  PreviewImageSuccessCallback
}
export {
  AgreePrivacyAuthorization,
  GetPrivacySetting,
  GetPrivacySettingCompleteCallback,
  GetPrivacySettingFailCallback,
  GetPrivacySettingOptions,
  GetPrivacySettingSuccessCallback,
  GetPrivacySettingSuccessResult,
  OffPrivacyAuthorizationChange,
  OnPrivacyAuthorizationChange,
  OnPrivacyAuthorizationChangeCallback,
  PrivacyChangeResult,
  ResetPrivacyAuthorization
}
export {
  UniProgressActiveendEvent,
  UniProgressElement
}
export {
  HideToast,
  IPromptError,
  Icon,
  PromptErrorCode,
  ShowToast,
  ShowToastCompleteCallback,
  ShowToastFail,
  ShowToastFailCallback,
  ShowToastOptions,
  ShowToastPosition,
  ShowToastSuccess,
  ShowToastSuccessCallback
}
export {
  GetRecorderManager,
  IRecorderManagerFail,
  RecorderManager,
  RecorderManagerErrorCode,
  RecorderManagerOnStopResult,
  RecorderManagerStartOptions
}
export {
  Rpx2px
}
export {
  ScanCode,
  ScanCodeCompleteCallback,
  ScanCodeFail,
  ScanCodeFailCallback,
  ScanCodeOptions,
  ScanCodeSuccess,
  ScanCodeSuccessCallback,
  ScanCodeSupportedTypes
}
export {
  GetScreenBrightness,
  GetScreenBrightnessComplete,
  GetScreenBrightnessCompleteCallback,
  GetScreenBrightnessFail,
  GetScreenBrightnessFailCallback,
  GetScreenBrightnessOptions,
  GetScreenBrightnessSuccess,
  GetScreenBrightnessSuccessCallback,
  IGetScreenBrightnessFail,
  ISetKeepScreenOnFail,
  ISetScreenBrightnessFail,
  SetKeepScreenOn,
  SetKeepScreenOnComplete,
  SetKeepScreenOnCompleteCallback,
  SetKeepScreenOnFail,
  SetKeepScreenOnFailCallback,
  SetKeepScreenOnOptions,
  SetKeepScreenOnSuccess,
  SetKeepScreenOnSuccessCallback,
  SetScreenBrightness,
  SetScreenBrightnessComplete,
  SetScreenBrightnessCompleteCallback,
  SetScreenBrightnessFail,
  SetScreenBrightnessFailCallback,
  SetScreenBrightnessOptions,
  SetScreenBrightnessSuccess,
  SetScreenBrightnessSuccessCallback
}
export {
  IShareFail,
  Share,
  ShareComplete,
  ShareCompleteCallback,
  ShareErrorCode,
  ShareFail,
  ShareFailCallback,
  ShareMiniProgramShareOptions,
  ShareMiniProgramShareType,
  ShareOptions,
  ShareProvider,
  ShareScene,
  ShareSuccess,
  ShareSuccessCallback,
  ShareType,
  UniShareProvider
}
export {
  IShareWithSystemFail,
  ShareWithSystem,
  ShareWithSystemCallback,
  ShareWithSystemErrorCode,
  ShareWithSystemFail,
  ShareWithSystemFailCallback,
  ShareWithSystemOptions,
  ShareWithSystemSuccess,
  ShareWithSystemSuccessCallback
}
export {
  HideLoading,
  HideLoadingComplete,
  HideLoadingCompleteCallback,
  HideLoadingFail,
  HideLoadingFailCallback,
  HideLoadingFailErrorCode,
  HideLoadingFailImpl,
  HideLoadingOptions,
  HideLoadingSuccess,
  HideLoadingSuccessCallback,
  HideLoadingSuccessImpl,
  LoadingPage,
  ShowLoading,
  ShowLoadingComplete,
  ShowLoadingCompleteCallback,
  ShowLoadingFail,
  ShowLoadingFailCallback,
  ShowLoadingFailErrorCode,
  ShowLoadingFailImpl,
  ShowLoadingOptions,
  ShowLoadingSuccess,
  ShowLoadingSuccessCallback,
  ShowLoadingSuccessImpl
}
export {
  ClearStorage,
  ClearStorageCompleteCallback,
  ClearStorageFailCallback,
  ClearStorageOptions,
  ClearStorageSuccess,
  ClearStorageSuccessCallback,
  ClearStorageSync,
  GetStorage,
  GetStorageCompleteCallback,
  GetStorageFailCallback,
  GetStorageInfo,
  GetStorageInfoCompleteCallback,
  GetStorageInfoFailCallback,
  GetStorageInfoOptions,
  GetStorageInfoSuccess,
  GetStorageInfoSuccessCallback,
  GetStorageInfoSync,
  GetStorageOptions,
  GetStorageSuccess,
  GetStorageSuccessCallback,
  GetStorageSync,
  RemoveStorage,
  RemoveStorageCompleteCallback,
  RemoveStorageFailCallback,
  RemoveStorageOptions,
  RemoveStorageSuccess,
  RemoveStorageSuccessCallback,
  RemoveStorageSync,
  SetStorage,
  SetStorageCompleteCallback,
  SetStorageFailCallback,
  SetStorageOptions,
  SetStorageSuccess,
  SetStorageSuccessCallback,
  SetStorageSync
}
export {
  AppThemeChangeResult,
  AppThemeErrorCode,
  AppThemeFail,
  IAppThemeFail,
  OffAppThemeChange,
  OffHostThemeChange,
  OffOsThemeChange,
  OnAppThemeChange,
  OnAppThemeChangeCallback,
  OnHostThemeChange,
  OnHostThemeChangeCallback,
  OnHostThemeChangeCallbackResult,
  OnOsThemeChange,
  OnOsThemeChangeCallback,
  OnThemeChangeCallbackResult,
  OsThemeChangeResult,
  SetAppTheme,
  SetAppThemeCompleteCallback,
  SetAppThemeFailCallback,
  SetAppThemeOptions,
  SetAppThemeSuccessCallback,
  SetAppThemeSuccessResult
}
export {
  IVibrateLongFail,
  IVibrateShortFail,
  VibrateErrorCode,
  VibrateLong,
  VibrateLongComplete,
  VibrateLongCompleteCallback,
  VibrateLongFail,
  VibrateLongFailCallback,
  VibrateLongOptions,
  VibrateLongSuccess,
  VibrateLongSuccessCallback,
  VibrateShort,
  VibrateShortComplete,
  VibrateShortCompleteCallback,
  VibrateShortFail,
  VibrateShortFailCallback,
  VibrateShortOptions,
  VibrateShortSuccess,
  VibrateShortSuccessCallback,
  VibrateShortType
}
export {
  CreateVideoContext,
  Danmu,
  RequestFullScreenOptions,
  UniVideoControlsToggleEvent,
  UniVideoControlsToggleEventDetail,
  UniVideoErrorEvent,
  UniVideoEvent,
  UniVideoFullScreenChangeEvent,
  UniVideoFullScreenChangeEventDetail,
  UniVideoFullScreenClickEvent,
  UniVideoFullScreenClickEventDetail,
  UniVideoFullScreenDirection,
  UniVideoProgressEvent,
  UniVideoProgressEventDetail,
  UniVideoTimeUpdateEvent,
  UniVideoTimeUpdateEventDetail,
  VideoContext,
  VideoError,
  VideoErrorCode,
  UniVideoElement
}
export {
  CloseSocket,
  CloseSocketOptions,
  ConnectSocket,
  ConnectSocketErrorCode,
  ConnectSocketFail,
  ConnectSocketOptions,
  ConnectSocketSuccess,
  GeneralCallbackResult,
  OnSocketClose,
  OnSocketCloseCallback,
  OnSocketCloseCallbackResult,
  OnSocketError,
  OnSocketErrorCallback,
  OnSocketErrorCallbackResult,
  OnSocketMessage,
  OnSocketMessageCallback,
  OnSocketMessageCallbackResult,
  OnSocketOpen,
  OnSocketOpenCallback,
  OnSocketOpenCallbackResult,
  SendSocketMessage,
  SendSocketMessageErrorCode,
  SendSocketMessageFail,
  SendSocketMessageOptions,
  SocketTask
}
export interface UniModuleApi {
  onAccelerometerChange: OnAccelerometerChange,
  offAccelerometerChange: OffAccelerometerChange,
  startAccelerometer: StartAccelerometer,
  stopAccelerometer: StopAccelerometer,
  showActionSheet: ShowActionSheet,
  hideActionSheet: HideActionSheet,
  arrayBufferToBase64: ArrayBufferToBase64,
  startSoterAuthentication: StartSoterAuthentication,
  checkIsSupportSoterAuthentication: CheckIsSupportSoterAuthentication,
  checkIsSoterEnrolledInDevice: CheckIsSoterEnrolledInDevice,
  base64ToArrayBuffer: Base64ToArrayBuffer,
  addPhoneCalendar: AddPhoneCalendar,
  addPhoneRepeatCalendar: AddPhoneRepeatCalendar,
  createCanvasContextAsync: CreateCanvasContextAsync,
  chooseLocation: ChooseLocation,
  chooseMedia: ChooseMedia,
  getClipboardData: GetClipboardData,
  setClipboardData: SetClipboardData,
  onCompassChange: OnCompassChange,
  offCompassChange: OffCompassChange,
  startCompass: StartCompass,
  stopCompass: StopCompass,
  __onAppCrash: OnAppCrash,
  __offAppCrash: OffAppCrash,
  __getAppCrashInfo: GetAppCrashInfo,
  __deleteAppCrashInfo: DeleteAppCrashInfo,
  __createAppCrash: CreateAppCrash,
  createInnerAudioContext: CreateInnerAudioContext,
  setInnerAudioOption: SetInnerAudioOption,
  createWebviewContext: CreateWebviewContext,
  createWebViewContext: CreateWebViewContext,
  createWorker: CreateWorker,
  createEditorContextAsync: CreateEditorContextAsync,
  $on: $On,
  $once: $Once,
  $off: $Off,
  $emit: $Emit,
  exit: Exit,
  saveFile: SaveFile,
  getSavedFileList: GetSavedFileList,
  getSavedFileInfo: GetSavedFileInfo,
  removeSavedFile: RemoveSavedFile,
  getFileInfo: GetFileInfo,
  getFileSystemManager: GetFileSystemManager,
  getAppAuthorizeSetting: GetAppAuthorizeSetting,
  getAppBaseInfo: GetAppBaseInfo,
  getBackgroundAudioManager: GetBackgroundAudioManager,
  getDeviceInfo: GetDeviceInfo,
  getElementById: GetElementById,
  getNetworkType: GetNetworkType,
  onNetworkStatusChange: OnNetworkStatusChange,
  offNetworkStatusChange: OffNetworkStatusChange,
  getProvider: GetProvider,
  getProviderSync: GetProviderSync,
  getSystemInfo: GetSystemInfo,
  getSystemInfoSync: GetSystemInfoSync,
  getWindowInfo: GetWindowInfo,
  getSystemSetting: GetSystemSetting,
  startGyroscope: StartGyroscope,
  stopGyroscope: StopGyroscope,
  onGyroscopeChange: OnGyroscopeChange,
  offGyroscopeChange: OffGyroscopeChange,
  hideKeyboard: HideKeyboard,
  onKeyboardHeightChange: OnKeyboardHeightChange,
  offKeyboardHeightChange: OffKeyboardHeightChange,
  loadFontFace: LoadFontFace,
  getLocation: GetLocation,
  startLocationUpdate: StartLocationUpdate,
  stopLocationUpdate: StopLocationUpdate,
  onLocationChange: OnLocationChange,
  offLocationChange: OffLocationChange,
  startLocationUpdateBackground: StartLocationUpdateBackground,
  onLocationChangeError: OnLocationChangeError,
  offLocationChangeError: OffLocationChangeError,
  makePhoneCall: MakePhoneCall,
  chooseImage: ChooseImage,
  getImageInfo: GetImageInfo,
  saveImageToPhotosAlbum: SaveImageToPhotosAlbum,
  compressImage: CompressImage,
  chooseVideo: ChooseVideo,
  saveVideoToPhotosAlbum: SaveVideoToPhotosAlbum,
  getVideoInfo: GetVideoInfo,
  compressVideo: CompressVideo,
  chooseFile: ChooseFile,
  onMemoryWarning: OnMemoryWarning,
  offMemoryWarning: OffMemoryWarning,
  showModal: ShowModal,
  hideModal: HideModal,
  setNavigationBarColor: SetNavigationBarColor,
  showNavigationBarLoading: ShowNavigationBarLoading,
  hideNavigationBarLoading: HideNavigationBarLoading,
  request: Request<Object>,
  uploadFile: UploadFile,
  downloadFile: DownloadFile,
  configMTLS: ConfigMTLS,
  login: Login,
  getUserInfo: GetUserInfo,
  openAppAuthorizeSetting: OpenAppAuthorizeSetting,
  openDocument: OpenDocument,
  openLocation: OpenLocation,
  requestPayment: RequestPayment,
  addPhoneContact: AddPhoneContact,
  chooseContact: ChooseContact,
  previewImage: PreviewImage,
  closePreviewImage: ClosePreviewImage,
  onPrivacyAuthorizationChange: OnPrivacyAuthorizationChange,
  offPrivacyAuthorizationChange: OffPrivacyAuthorizationChange,
  getPrivacySetting: GetPrivacySetting,
  resetPrivacyAuthorization: ResetPrivacyAuthorization,
  agreePrivacyAuthorization: AgreePrivacyAuthorization,
  showToast: ShowToast,
  hideToast: HideToast,
  getRecorderManager: GetRecorderManager,
  rpx2px: Rpx2px,
  scanCode: ScanCode,
  setScreenBrightness: SetScreenBrightness,
  getScreenBrightness: GetScreenBrightness,
  setKeepScreenOn: SetKeepScreenOn,
  share: Share,
  shareWithSystem: ShareWithSystem,
  showLoading: ShowLoading,
  hideLoading: HideLoading,
  setStorage: SetStorage,
  setStorageSync: SetStorageSync,
  getStorage: GetStorage,
  getStorageSync: GetStorageSync,
  getStorageInfo: GetStorageInfo,
  getStorageInfoSync: GetStorageInfoSync,
  removeStorage: RemoveStorage,
  removeStorageSync: RemoveStorageSync,
  clearStorage: ClearStorage,
  clearStorageSync: ClearStorageSync,
  onOsThemeChange: OnOsThemeChange,
  offOsThemeChange: OffOsThemeChange,
  setAppTheme: SetAppTheme,
  onAppThemeChange: OnAppThemeChange,
  offAppThemeChange: OffAppThemeChange,
  onHostThemeChange: OnHostThemeChange,
  offHostThemeChange: OffHostThemeChange,
  vibrateShort: VibrateShort,
  vibrateLong: VibrateLong,
  createVideoContext: CreateVideoContext,
  connectSocket: ConnectSocket,
  sendSocketMessage: SendSocketMessage,
  closeSocket: CloseSocket,
  onSocketOpen: OnSocketOpen,
  onSocketMessage: OnSocketMessage,
  onSocketClose: OnSocketClose,
  onSocketError: OnSocketError
}
