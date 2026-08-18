// 本文件为自动构建生成
import {
  SecureNetworkManager as SecureNetworkManagerOrigin,
  SecureNetworkErrorCode as SecureNetworkErrorCodeOrigin,
  SecureNetworkFail as SecureNetworkFailOrigin,
  HasClientKeyOptions as HasClientKeyOptionsOrigin,
  EncryptGetClientKeyPayloadOptions as EncryptGetClientKeyPayloadOptionsOrigin,
  SetClientKeyOptions as SetClientKeyOptionsOrigin,
  EncryptOptions as EncryptOptionsOrigin,
  DecryptOptions as DecryptOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type SecureNetworkManager = SecureNetworkManagerOrigin
  type SecureNetworkErrorCode = SecureNetworkErrorCodeOrigin
  type SecureNetworkFail = SecureNetworkFailOrigin
  type HasClientKeyOptions = HasClientKeyOptionsOrigin
  type EncryptGetClientKeyPayloadOptions = EncryptGetClientKeyPayloadOptionsOrigin
  type SetClientKeyOptions = SetClientKeyOptionsOrigin
  type EncryptOptions = EncryptOptionsOrigin
  type DecryptOptions = DecryptOptionsOrigin
  interface Uni extends UniOrigin { }
}
