import { UniElement, IUniForm, UniViewElementImpl, UniCustomElement, UniFormControlElement, UTSObject, UniCustomEvent, UTSJSONObject } from "@dcloudio/uni-app-framework";
declare class UniButtonElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private borderView;
    private buttonText;
    private disableView;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    appendChild(child: UniElement): void;
    setAnyAttribute(key: string, value: Object): void;
    parseStyle(key: string, value: Object): boolean;
    updateStyle(style: Map<string, string>): void;
    private appendDisabledView;
    private removeDisabledView;
    get disabled(): boolean;
    get size(): string;
    get type(): string;
    get plain(): boolean;
    private getAttributeValue;
    private updateInnerText;
    private setSizeStyle;
    private setTypeStyle;
    private setHoverClass;
    private getBackgroundColor;
    private getBackgroundHoverColor;
    private getBorderColor;
    private getBorderHoverColor;
    private getForegroundColor;
    private getForegroundHoverColor;
    private checkFormAndSubmitOrReset;
    private checkOpenType;
}
export { UniButtonElement as UniButtonElement };
declare class UniCheckboxElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private checkboxView;
    private checkboxText;
    private _initialChecked;
    private _initialCheckedFlag;
    private _checked;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): string;
    set value(value: string);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    get checked(): boolean;
    set checked(value: boolean);
    get disabled(): boolean;
    get foreColor(): string;
    get backgroundColor(): string;
    get activeBackgroundColor(): string;
    get borderColor(): string;
    get activeBorderColor(): string;
    get iconColor(): string;
    get color(): string;
    private getAttributeValue;
    private updateCheckedStyle;
    private updateCheckedStatus;
    private dispatchGroup;
}
declare class UniCheckboxGroupChangeEventDetail extends UTSObject {
    value: Array<string>;
}
declare class UniCheckboxGroupChangeEvent extends UniCustomEvent<UniCheckboxGroupChangeEventDetail> {
    constructor(value: Array<string>);
}
declare class UniCheckboxGroupElement extends UniFormControlElement<Array<string>> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): Array<string>;
    set value(value: Array<string>);
    reset(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    private getAttributeValue;
    _checkboxChange(): void;
    private getCheckboxValues;
    private setCheckboxValues;
    private findChildren;
}
export { UniCheckboxElement as UniCheckboxElement };
export { UniCheckboxGroupChangeEvent as UniCheckboxGroupChangeEvent };
export { UniCheckboxGroupElement as UniCheckboxGroupElement };
declare class UniFormSubmitEventDetail extends UTSObject {
    value: UTSJSONObject;
}
declare class UniFormResetEventDetail extends UTSObject {
}
declare class UniFormSubmitEvent extends UniCustomEvent<UniFormSubmitEventDetail> {
    constructor(value: UTSJSONObject);
}
declare class UniFormResetEvent extends UniCustomEvent<UniFormResetEventDetail> {
    constructor();
}
declare class UniFormElement extends UniViewElementImpl implements UniCustomElement, IUniForm {
    static get observedAttributes(): Array<string>;
    constructor();
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    get disabled(): boolean;
    submit(): void;
    reset(): void;
    private findFormControls;
}
export { UniFormSubmitEvent as UniFormSubmitEvent };
export { UniFormResetEvent as UniFormResetEvent };
export { UniFormElement as UniFormElement };
declare const LabelStopPropagation = "label-stopPropagation";
declare class UniLabelElement extends UniViewElementImpl implements UniCustomElement {
    private labelEvent;
    constructor();
    get disabled(): boolean;
    get for(): string;
    private getAttributeValue;
    private isInteractiveChild;
    private dispatchToInteractiveChild;
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
}
export { LabelStopPropagation as LabelStopPropagation };
export { UniLabelElement as UniLabelElement };
declare class UniPickerViewChangeEventDetail extends UTSObject {
    value: number[];
}
declare function camelize(str: string): string;
declare class UniPickerViewChangeEvent extends UniCustomEvent<UniPickerViewChangeEventDetail> {
    constructor(value: number[]);
}
declare class UniPickerViewElement extends UniFormControlElement<number[]> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private _value;
    private _uniResizeObserver;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): number[];
    set value(value: number[]);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    insertBefore(child: UniElement, anchor?: UniElement | null): UniElement | null;
    _columnChange(): void;
    private _onResize;
    private _setIndicatorStyle;
    private _setMaskTopStyle;
    private _setMaskBottomStyle;
    private _fixStyleToMap;
    private findChildren;
}
declare class UniPickerViewColumnElement extends UniFormControlElement<number> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private status;
    private scrollView;
    private contentView;
    private indicatorView;
    private maskViewTop;
    private maskViewBottom;
    private _indicatorHeight;
    private _selectedIndex;
    private _initialValue;
    private _initialValueFlag;
    private _skipScrollChangeEventOnce;
    private _isAdjusting;
    private _lastMaskTopStyle;
    private _lastMaskBottomStyle;
    private _lastIndicatorStyle;
    private basicMaskTopStyle;
    private basicMaskBottomStyle;
    private basicIndicatorStyle;
    constructor();
    get value(): number;
    set value(value: number);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    appendChild(child: UniElement): void;
    insertBefore(child: UniElement, anchor?: UniElement | null): UniElement | null;
    removeChild(child: UniElement): UniElement | null;
    initialize(): void;
    get disabled(): boolean;
    resize(): void;
    private diffStyle;
    setIndicatorStyle(styles: Map<string, string>): void;
    setMaskTopStyle(styles: Map<string, string>): void;
    setMaskBottomStyle(styles: Map<string, string>): void;
    _setIndex(value: number): void;
    private _onLayout;
    private _getIndicatorClientHeight;
    private _scrollTopSnap;
    private _scrollTopIndex;
    private _dispatchUniPickerView;
}
export { UniPickerViewChangeEvent as UniPickerViewChangeEvent };
export { UniPickerViewElement as UniPickerViewElement };
export { camelize as camelize };
export { UniPickerViewColumnElement as UniPickerViewColumnElement };
declare class UniRadioElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private radioView;
    private radioText;
    private _initialChecked;
    private _initialCheckedFlag;
    private _checked;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): string;
    set value(value: string);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    get checked(): boolean;
    set checked(value: boolean);
    get disabled(): boolean;
    get foreColor(): string;
    get backgroundColor(): string;
    get activeBackgroundColor(): string;
    get borderColor(): string;
    get activeBorderColor(): string;
    get color(): string;
    get iconColor(): string;
    private getAttributeValue;
    private updateCheckedStyle;
    private updateCheckedStatus;
    private dispatchGroup;
}
declare class UniRadioGroupChangeEventDetail extends UTSObject {
    value: string;
}
declare class UniRadioGroupChangeEvent extends UniCustomEvent<UniRadioGroupChangeEventDetail> {
    constructor(value: string);
}
declare class UniRadioGroupElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): string;
    set value(value: string);
    reset(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    private getAttributeValue;
    _radioChange(el: UniRadioElement, value: string): void;
    private findChildren;
}
export { UniRadioElement as UniRadioElement };
export { UniRadioGroupChangeEvent as UniRadioGroupChangeEvent };
export { UniRadioGroupElement as UniRadioGroupElement };
declare class UniSliderChangeEventDetail extends UTSObject {
    value: number;
}
declare class UniSliderChangeEvent extends UniCustomEvent<UniSliderChangeEventDetail> {
    constructor(type: string, value: number);
}
declare class UniSliderElement extends UniFormControlElement<number> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private _sliderTrackWidth;
    private _sliderWidth;
    private _sliderOffsetX;
    private _touchStartFlag;
    private _touchDownX;
    private _touchDownY;
    private _activeStatus;
    private _uniResizeObserver;
    private _drawingContext;
    private _min;
    private _max;
    private _step;
    private _value;
    private _showValue;
    private _initialValue;
    private _initialValueFlag;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): number;
    set value(value: number);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    private _onTouchStart;
    private _onTouchMove;
    private _onTouchEnd;
    private _pointInValueArea;
    private _onTrackInputChange;
    private _onResize;
    private _onLayout;
    private _onRender;
    private _getValuePercentage;
    private _updateSliderHeight;
    private get internalBlockSize();
    get disabled(): boolean;
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
    get step(): number;
    set step(value: number);
    get showValue(): boolean;
    set showValue(value: boolean);
    get blockSize(): number;
    get backgroundColor(): string;
    get activeBackgroundColor(): string;
    get activeColor(): string;
    get foreColor(): string;
    get blockColor(): string;
    get valueColor(): string;
    private getAttributeValue;
}
export { UniSliderChangeEvent as UniSliderChangeEvent };
export { UniSliderElement as UniSliderElement };
declare class UniSwitchChangeEventDetail extends UTSObject {
    value: boolean;
}
declare class UniSwitchChangeEvent extends UniCustomEvent<UniSwitchChangeEventDetail> {
    constructor(value: boolean);
}
declare class UniSwitchElement extends UniFormControlElement<boolean> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private switchThumb;
    private _initialChecked;
    private _initialCheckedFlag;
    private _checked;
    constructor();
    get name(): string;
    set name(value: string);
    get value(): boolean;
    set value(value: boolean);
    reset(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    get disabled(): boolean;
    get checked(): boolean;
    set checked(value: boolean);
    get backgroundColor(): string;
    get activeBackgroundColor(): string;
    get foreColor(): string;
    get activeForeColor(): string;
    get color(): string;
    updateCheckStatus(): void;
    updateCheckStatusColor(): void;
    private getAttributeValue;
}
export { UniSwitchChangeEvent as UniSwitchChangeEvent };
export { UniSwitchElement as UniSwitchElement };
