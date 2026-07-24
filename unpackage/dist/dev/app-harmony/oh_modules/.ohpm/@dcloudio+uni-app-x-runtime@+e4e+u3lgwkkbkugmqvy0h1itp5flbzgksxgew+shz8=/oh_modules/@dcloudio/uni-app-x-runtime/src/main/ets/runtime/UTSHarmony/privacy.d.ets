type AgreeCallback = (agree: boolean) => void;
/**
 * getPrivacyAgree
 * @internal
 */
export declare function getPrivacyAgree(): boolean;
/**
 * setPrivacyAgree
 * @internal
 */
export declare function setPrivacyAgree(value: boolean): void;
/**
 * resetPrivacyAgree
 * @internal
 */
export declare function resetPrivacyAgree(): void;
/**
 * onPrivacyAgreeChange
 * @internal
 */
export declare function onPrivacyAgreeChange(callback: AgreeCallback): void;
/**
 * offPrivacyAgreeChange
 * @internal
 */
export declare function offPrivacyAgreeChange(callback: AgreeCallback): void;
export {};
