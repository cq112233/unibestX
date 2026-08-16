import { UTS, uni, UniViewElementImpl } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniPointerEvent, UniError, NavigateToOptions, NavigateBackOptions, RedirectToOptions, ReLaunchOptions, SwitchTabOptions, UniCustomElement } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type OpenType = 'navigate' | 'navigateBack' | 'redirect' | 'reLaunch' | 'switchTab';
class UniNavigatorElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'animation-type',
            'delta',
            'open-type',
            'url'
        ];
    }
    constructor() {
        super();
        this.addEventListener('click', (_: UniPointerEvent) => {
            this._onClick();
        });
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) { }
    private _onClick() {
        const url = this.getAttribute('url');
        const openType = this.getAttributeValue('openType', 'navigate') as OpenType;
        const animationType = this.getAttributeValue('animationType', 'pop-in');
        const animationDuration = parseFloat(this.getAttributeValue('animationDuration', '300'));
        const onFail = (error: UniError) => {
            UTS.console.error(error.message);
        };
        switch (openType) {
            case 'navigate':
                uni.navigateTo({
                    url: url!,
                    animationType: animationType!,
                    animationDuration,
                    fail: onFail
                } as NavigateToOptions);
                break;
            case 'navigateBack':
                const delta = parseInt(this.getAttributeValue('delta', '1'));
                uni.navigateBack({
                    delta: delta,
                    animationType: this.getAttributeValue('animationType', 'pop-out'),
                    animationDuration,
                    fail: onFail
                } as NavigateBackOptions);
                break;
            case 'redirect':
                uni.redirectTo({
                    url: url!,
                    fail: onFail
                } as RedirectToOptions);
                break;
            case 'reLaunch':
                uni.reLaunch({
                    url: url!,
                    fail: onFail
                } as ReLaunchOptions);
                break;
            case 'switchTab':
                uni.switchTab({
                    url: url!,
                    fail: onFail
                } as SwitchTabOptions);
                break;
            default:
                UTS.console.log('<navigator/> openType attribute invalid');
                break;
        }
    }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
}
export { UniNavigatorElement as UniNavigatorElement };
