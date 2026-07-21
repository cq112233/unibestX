import { UTSObject, UniCustomEvent, UniViewElementImpl, UniCustomElement } from "@dcloudio/uni-app-framework";
declare class UniProgressActiveendEventDetail extends UTSObject {
    curPercent: number;
}
declare class UniProgressActiveendEvent extends UniCustomEvent<UniProgressActiveendEventDetail> {
    constructor(type: string, curPercent: number);
}
declare class UniProgressElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private progressBar;
    private progressBarValue;
    private progressInfo;
    private _showInfo;
    private _percent;
    private _lastPercent;
    private _timerId;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    get active(): boolean;
    get activeMode(): string;
    get showInfo(): boolean;
    set showInfo(value: boolean);
    get duration(): number;
    get percent(): number;
    set percent(value: number);
    get percentToPixel(): string;
    get fontSize(): number;
    get fontSizeToPixel(): string;
    get borderRadius(): number;
    get borderRadiusToPixel(): string;
    get strokeWidth(): number;
    get strokeWidthToPixel(): string;
    get backgroundColor(): string;
    get activeColor(): string;
    get color(): string;
    get finalPercent(): number;
    private _animate;
    private clearTimer;
    private getAttributeValue;
    private updateMinWidth;
}
export { UniProgressActiveendEvent as UniProgressActiveendEvent };
export { UniProgressElement as UniProgressElement };
