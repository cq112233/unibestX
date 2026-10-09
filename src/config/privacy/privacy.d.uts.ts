/**
 * 隐私合规配置与授权闸门声明文件
 */
export type PrivacyConfig = {
  /** 《用户协议》链接 */
  userAgreementUrl: string;
  /** 《隐私政策》链接 */
  privacyPolicyUrl: string;
  /** 协议版本号：内容更新时递增，老用户会被要求重新确认 */
  policyVersion: string;
  /** 公司 / 开发者名称 */
  companyName: string;
};

export declare const privacyConfig: PrivacyConfig;

export declare const PRIVACY_PAGE: string;
export declare const MODE_RECONFIRM: string;

export declare function hasPrivacyAgreed(): boolean;
export declare function getAgreedPrivacyVersion(): string;
export declare function setPrivacyAgreed(): void;
export declare function clearPrivacyAgreed(): void;
export declare function needsPrivacyReconfirm(): boolean;
export declare function runPrivacyGate(): boolean;
