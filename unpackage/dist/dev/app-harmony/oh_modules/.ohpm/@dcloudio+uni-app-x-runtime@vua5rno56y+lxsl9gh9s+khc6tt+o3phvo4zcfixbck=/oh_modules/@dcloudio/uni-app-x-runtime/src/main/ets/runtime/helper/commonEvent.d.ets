/**
 * 事件监听代理
 * 用于解决 UICommonEvent 只能设置一个监听函数的问题
 */
export declare function addEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute, eventMethod: string, callback: Function): void;
export declare function clearEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute): void;
export declare function removeEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute, eventMethod: string, callback: Function): void;
