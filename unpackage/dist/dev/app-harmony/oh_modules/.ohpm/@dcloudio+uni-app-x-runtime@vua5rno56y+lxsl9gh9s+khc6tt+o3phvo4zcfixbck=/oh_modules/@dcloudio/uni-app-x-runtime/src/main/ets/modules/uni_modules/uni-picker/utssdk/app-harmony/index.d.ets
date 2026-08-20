import { UTSObject, UniCustomEvent, UniFormControlElement, UniCustomElement } from "@dcloudio/uni-app-framework";
declare class UniPickerCancelEventDetail extends UTSObject {
}
declare class UniPickerChangeEventDetail extends UTSObject {
    value: number | string | number[];
}
declare class UniPickerColumnChangeEventDetail extends UTSObject {
    value: number;
    column: number;
}
declare class UniPickerCancelEvent extends UniCustomEvent<UniPickerCancelEventDetail> {
    constructor();
}
declare class UniPickerChangeEvent extends UniCustomEvent<UniPickerChangeEventDetail> {
    constructor(value: number | string | number[]);
}
declare class UniPickerColumnChangeEvent extends UniCustomEvent<UniPickerColumnChangeEventDetail> {
    constructor(column: number, value: number);
}
declare class UniPickerElement extends UniFormControlElement<Object> implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private uuid;
    private _value;
    private _initialValue;
    private _initialValueFlag;
    private readyEventName;
    private optionsEventName;
    private cancelEventName;
    private selectorChangeEventName;
    private multiSelectorChangeEventName;
    private timeChangeEventName;
    private columnChangeEventName;
    constructor();
    sendOptions(eventName: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string): void;
    get value(): Object;
    reset(): void;
    get headerTextType(): string;
    get disabledType(): boolean;
    get modeType(): string;
    get rangeType(): Object;
    get rangeKeyType(): string;
    get selectorValue(): number;
    get multiSelectorValue(): Object;
    get timeValue(): string[];
    get timeStartVal(): string[];
    get timeEndVal(): string[];
    get dateStartVal(): string[];
    get dateEndVal(): string[];
    get dateValue(): string[];
    get fieldsVal(): string;
    formatteTime(time: string[]): string[];
    parseTime(date: Date): string[];
    parseStartAndEndTime(timeStr: string): string[];
    parseStartAndEndDate(type: 'start' | 'end'): string[];
}
export { UniPickerCancelEvent as UniPickerCancelEvent };
export { UniPickerChangeEvent as UniPickerChangeEvent };
export { UniPickerColumnChangeEvent as UniPickerColumnChangeEvent };
export { UniPickerElement as UniPickerElement };
