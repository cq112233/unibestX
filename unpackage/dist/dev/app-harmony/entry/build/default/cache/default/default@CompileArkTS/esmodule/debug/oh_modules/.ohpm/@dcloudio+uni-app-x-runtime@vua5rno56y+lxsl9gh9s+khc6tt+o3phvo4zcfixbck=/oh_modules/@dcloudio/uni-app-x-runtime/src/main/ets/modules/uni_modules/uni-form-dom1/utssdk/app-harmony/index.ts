import { UniPointerEvent, UTSHarmony, UniViewElementImpl, UniFormControlElement, UTSObject, UniCustomEvent, UTSJSONObject, UniResizeObserver, UTS } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniElement, UniTextElementImpl, IUniForm, UniCustomElement, UniTextElement, UniFormControl, UniResizeObserverEntry, UniElementImpl, UniScrollEvent, UniTouchEvent, DOMRect, DrawableContext } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type ButtonSize = 'default' | 'mini';
type ButtonType = 'default' | 'primary' | 'warn';
type FormType = 'submit' | 'reset';
class UniButtonElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'disabled',
            'size',
            'type',
            'plain'
        ];
    }
    private borderView: UniElement;
    private buttonText: UniTextElementImpl;
    private disableView: UniElement | null = null;
    constructor() {
        super();
        const buttonViewStyle = this.style;
        buttonViewStyle.setProperty('position', 'relative');
        buttonViewStyle.setProperty('border-radius', '5px');
        buttonViewStyle.setProperty('padding-left', '14px');
        buttonViewStyle.setProperty('padding-right', '14px');
        const borderView = this.uniPage.createElement('view');
        const borderViewStyle = borderView.style;
        borderViewStyle.setProperty('position', 'absolute');
        borderViewStyle.setProperty('border-style', 'solid');
        borderViewStyle.setProperty('border-width', '0.5px');
        borderViewStyle.setProperty('border-color', 'rgba(0,0,0,0.2)');
        borderViewStyle.setProperty('border-radius', '5px');
        borderViewStyle.setProperty('left', '0');
        borderViewStyle.setProperty('top', '0');
        borderViewStyle.setProperty('width', '100%');
        borderViewStyle.setProperty('height', '100%');
        const buttonText = this.uniPage.createElement('text') as UniTextElementImpl;
        buttonText.style.setProperty('fontSize', '18px');
        buttonText.style.setProperty('textAlign', 'center');
        this.borderView = borderView;
        this.buttonText = buttonText;
        this.addEventListener('click', (e: UniPointerEvent) => {
            if (this.disabled) {
                e.stopPropagation();
                return;
            }
            this.checkFormAndSubmitOrReset();
            this.checkOpenType();
        });
        this.setHoverClass('');
    }
    connectedCallback() {
        super.appendChild(this.borderView);
        super.appendChild(this.buttonText);
        this.setSizeStyle(this.size as ButtonSize);
        this.setTypeStyle(this.type as ButtonType);
        this.style.setProperty('color', this.getForegroundColor(this.type as ButtonType));
        if (this.disabled) {
            this.appendDisabledView();
        }
    }
    disconnectedCallback() {
        this.buttonText.remove();
        this.borderView.remove();
        this.removeDisabledView();
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'disabled':
                this.setTypeStyle(this.type as ButtonType);
                if (this.isConnected) {
                    const disabledValue = (typeof newValue == 'string' || newValue == true) ? true : false;
                    if (disabledValue) {
                        this.appendDisabledView();
                    }
                    else {
                        this.removeDisabledView();
                    }
                }
                break;
            case 'size':
                this.setSizeStyle(newValue as ButtonSize);
                break;
            case 'type':
                this.setTypeStyle(newValue as ButtonType);
                break;
            case 'plain':
                if (this.plain) {
                    this.style.setProperty('border-style', 'solid');
                    this.style.setProperty('border-width', '1px');
                    this.borderView.style.setProperty('display', 'none');
                }
                this.setTypeStyle(this.type as ButtonType);
                break;
            case 'value':
                this.updateInnerText(this);
                break;
        }
    }
    appendChild(child: UniElement): void {
        this.updateInnerText(child);
    }
    setAnyAttribute(key: string, value: Object): void {
        if (key == 'hoverClass' && !(value instanceof Map)) {
            this.setHoverClass(value as string);
            return;
        }
        super.setAnyAttribute(key, value);
    }
    parseStyle(key: string, value: Object): boolean {
        if (key == 'color') {
            if (this.plain) {
                this.buttonText.style.setProperty('color', this.getForegroundColor(this.type as ButtonType));
            }
            return this.buttonText.parseStyle(key, value);
        }
        return super.parseStyle(key, value);
    }
    updateStyle(style: Map<string, string>): void {
        super.updateStyle(style);
        style.forEach((value, key) => {
            switch (key) {
                case 'backgroundColor':
                    break;
                case 'borderTopLeftRadius':
                case 'borderTopRightRadius':
                case 'borderBottomRightRadius':
                case 'borderBottomLeftRadius':
                case 'borderLeftWidth':
                case 'borderTopWidth':
                case 'borderRightWidth':
                case 'borderBottomWidth':
                case 'borderTopStyle':
                case 'borderRightStyle':
                case 'borderLeftStyle':
                case 'borderBottomStyle':
                case 'borderLeftColor':
                case 'borderTopColor':
                case 'borderRightColor':
                case 'borderBottomColor':
                    this.style.setProperty(key, value);
                    this.borderView.style.setProperty('display', 'none');
                    break;
                case 'color':
                case 'textAlign':
                case 'fontSize':
                case 'fontWeight':
                case 'lineHeight':
                    this.buttonText.style.setProperty(key, value);
                    break;
                default:
                    break;
            }
        });
    }
    private appendDisabledView() {
        if (this.disableView == null) {
            this.disableView = this.uniPage.createElement('view');
            const disableViewStyle = this.disableView!.style;
            disableViewStyle.setProperty('position', 'absolute');
            disableViewStyle.setProperty('left', '0');
            disableViewStyle.setProperty('top', '0');
            disableViewStyle.setProperty('width', '100%');
            disableViewStyle.setProperty('height', '100%');
            this.disableView!.addEventListener('click', (e: UniPointerEvent) => {
                e.stopPropagation();
            });
        }
        super.appendChild(this.disableView!);
    }
    private removeDisabledView() {
        if (this.disableView != null) {
            this.disableView.remove();
        }
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get size(): string {
        return this.getAttributeValue('size', 'default');
    }
    get type(): string {
        return this.getAttributeValue('type', 'default');
    }
    get plain(): boolean {
        return this.getAttribute('plain') == 'true' ? true : false;
    }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value && value.length) {
            return value;
        }
        return defaultValue;
    }
    private updateInnerText(child: UniElement) {
        this.buttonText.setAttribute('value', child.getAttribute('value') ?? "");
    }
    private setSizeStyle(size: ButtonSize) {
        switch (size) {
            case 'default':
                this.buttonText.style.setProperty('fontSize', '18px');
                this.buttonText.style.setProperty('lineHeight', '2.55555556');
                break;
            case 'mini':
                this.buttonText.style.setProperty('fontSize', '13px');
                this.buttonText.style.setProperty('lineHeight', '2.3');
                break;
        }
    }
    private setTypeStyle(type: ButtonType) {
        this.style.setProperty('background-color', this.getBackgroundColor(type));
        this.buttonText.style.setProperty('color', this.getForegroundColor(type));
        if (this.plain) {
            this.style.setProperty('border-color', this.getBorderColor(type));
        }
    }
    private setHoverClass(value: string) {
        if (this.disabled) {
            return;
        }
        const buttonType = this.type as ButtonType;
        const style = new Map<string, string>();
        if (typeof value === 'string' && value == 'none') {
            style.set('backgroundColor', this.getBackgroundColor(buttonType));
        }
        else {
            style.set('backgroundColor', this.getBackgroundHoverColor(buttonType));
        }
        if (this.plain) {
            style.set('color', this.getForegroundHoverColor(buttonType));
            style.set('borderColor', this.getBorderHoverColor(buttonType));
            this.buttonText.style.setProperty('color', this.getForegroundColor(buttonType));
        }
        this.setAnyAttribute('hoverClass', style);
    }
    private getBackgroundColor(type: ButtonType): string {
        if (this.disabled) {
            if (this.plain) {
                return 'rgba(0,0,0,0.2)';
            }
            if (type == 'primary') {
                return 'rgba(0,122,255,0.6)';
            }
            else if (type == 'warn') {
                return '#ec8b89';
            }
            else {
                return '#f7f7f7';
            }
        }
        if (this.plain) {
            return 'transparent';
        }
        if (type == 'primary') {
            return '#007aff';
        }
        else if (type == 'warn') {
            return '#e64340';
        }
        else {
            return '#f7f7f7';
        }
    }
    private getBackgroundHoverColor(type: ButtonType): string {
        if (this.plain) {
            return 'transparent';
        }
        if (type == 'primary') {
            return '#0062cc';
        }
        else if (type == 'warn') {
            return '#ce3c39';
        }
        else {
            return '#dedede';
        }
    }
    private getBorderColor(type: ButtonType): string {
        if (this.disabled) {
            if (type == 'primary') {
                return 'rgba(0,0,0,0.2)';
            }
            else if (type == 'warn') {
                return 'rgba(0,0,0,0.2)';
            }
            else {
                return 'rgba(0,0,0,0.3)';
            }
        }
        if (this.plain) {
            if (type == 'primary') {
                return '#007aff';
            }
            else if (type == 'warn') {
                return '#e64340';
            }
            else {
                return '#353535';
            }
        }
        if (type == 'primary') {
            return 'rgba(0,0,0,0.2)';
        }
        else if (type == 'warn') {
            return 'rgba(0,0,0,0.2)';
        }
        else {
            return 'rgba(0,0,0,0.2)';
        }
    }
    private getBorderHoverColor(type: ButtonType): string {
        if (this.disabled) {
            if (type == 'primary') {
                return 'rgba(0,0,0,0.2)';
            }
            else if (type == 'warn') {
                return 'rgba(0,0,0,0.2)';
            }
            else {
                return 'rgba(0,0,0,0.3)';
            }
        }
        if (this.plain) {
            if (type == 'primary') {
                return 'rgba(0, 122, 255, 0.6)';
            }
            else if (type == 'warn') {
                return 'rgba(230, 67, 64, 0.6)';
            }
            else {
                return 'rgba(53,53,53,0.6)';
            }
        }
        if (type == 'primary') {
            return 'rgba(0,0,0,0.2)';
        }
        else if (type == 'warn') {
            return 'rgba(0,0,0,0.2)';
        }
        else {
            return 'rgba(0,0,0,0.2)';
        }
    }
    private getForegroundColor(type: ButtonType): string {
        if (this.disabled) {
            return 'rgba(0,0,0,0.3)';
        }
        if (this.plain) {
            if (type == 'primary') {
                return '#007aff';
            }
            else if (type == 'warn') {
                return '#e64340';
            }
            else {
                return '#353535';
            }
        }
        if (type == 'primary') {
            return '#fff';
        }
        else if (type == 'warn') {
            return '#fff';
        }
        else {
            return '#000';
        }
    }
    private getForegroundHoverColor(type: ButtonType): string {
        if (this.disabled) {
            return 'rgba(0,0,0,0.3)';
        }
        if (this.plain) {
            if (type == 'primary') {
                return 'rgba(0, 122, 255, 0.6)';
            }
            else if (type == 'warn') {
                return 'rgba(230, 67, 64, 0.6)';
            }
            else {
                return 'rgba(53,53,53,0.6)';
            }
        }
        if (type == 'primary') {
            return '#fff';
        }
        else if (type == 'warn') {
            return '#fff';
        }
        else {
            return '#000';
        }
    }
    private checkFormAndSubmitOrReset() {
        const formType = this.getAttribute('form-type') as FormType;
        if (formType != 'submit' && formType != 'reset') {
            return;
        }
        let formElement = this.parentElement;
        let maxRecursiveDeep = 256;
        while (formElement && maxRecursiveDeep > 0) {
            maxRecursiveDeep--;
            if (formElement.tagName == 'FORM') {
                break;
            }
            formElement = formElement.parentElement;
        }
        if (formElement) {
            const uniFormControl = formElement as Object as IUniForm;
            if (formType == 'submit') {
                uniFormControl.submit();
            }
            else if (formType == 'reset') {
                uniFormControl.reset();
            }
        }
    }
    private checkOpenType() {
        const type = this.getAttribute('openType');
        switch (type) {
            case "agreePrivacyAuthorization":
                UTSHarmony.setPrivacyAgree(true);
                break;
        }
    }
}
export { UniButtonElement as UniButtonElement };
class UniCheckboxElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'name',
            'checked',
            'value',
            'background-color',
            'active-background-color',
            'border-color',
            'active-border-color',
            'fore-color',
            'color',
            'icon-color'
        ];
    }
    private checkboxView!: UniElement;
    private checkboxText!: UniTextElement;
    private _initialChecked = false;
    private _initialCheckedFlag = false;
    private _checked = false;
    constructor() {
        super();
        this.style.setProperty('flexDirection', 'row');
        this.style.setProperty('alignItems', 'center');
        const checkboxView = this.uniPage.createElement('view');
        const checkboxViewStyle = checkboxView.style;
        checkboxViewStyle.setProperty('alignItems', 'center');
        checkboxViewStyle.setProperty('justifyContent', 'center');
        checkboxViewStyle.setProperty('borderStyle', 'solid');
        checkboxViewStyle.setProperty('borderWidth', '1px');
        checkboxViewStyle.setProperty('borderRadius', '3px');
        checkboxViewStyle.setProperty('width', '22px');
        checkboxViewStyle.setProperty('height', '22px');
        checkboxViewStyle.setProperty('marginRight', '5px');
        const checkboxText = this.uniPage.createElement('text') as UniTextElement;
        checkboxText.setAttribute('value', '\uEA08');
        const checkboxTextStyle = checkboxText.style;
        checkboxTextStyle.setProperty('fontFamily', 'uni-icon');
        checkboxTextStyle.setProperty('fontSize', '16px');
        checkboxTextStyle.setProperty('color', this.foreColor);
        this.checkboxView = checkboxView;
        this.checkboxText = checkboxText;
        this.addEventListener('click', (e: UniPointerEvent) => {
            e.stopPropagation();
            if (this.disabled) {
                return;
            }
            this.checked = !this.checked;
            this.dispatchGroup();
        });
        this.updateCheckedStyle(false);
    }
    public get name(): string {
        return this.getAttributeValue('name', '');
    }
    public set name(value: string) {
        this.setAttribute('name', value);
    }
    public get value(): string {
        return this.getAttributeValue('value', '');
    }
    public set value(value: string) {
        this.setAttribute('value', value);
    }
    public reset() {
        this.checked = this._initialChecked;
    }
    connectedCallback() {
        if (this.children.length == 0) {
            this.appendChild(this.checkboxView);
        }
        else {
            this.insertBefore(this.checkboxView, this.firstChild);
        }
    }
    disconnectedCallback() {
        this.removeChild(this.checkboxView);
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'checked':
                const value = (typeof newValue == 'string' || newValue == true) ? true : false;
                if (!this._initialCheckedFlag) {
                    this._initialCheckedFlag = true;
                    this._initialChecked = value;
                }
                this.checked = value;
                break;
            case 'fore-color':
            case 'icon-color':
            case 'color':
                this.checkboxText.style.setProperty('color', this.foreColor);
                break;
            case 'background-color':
            case 'active-background-color':
            case 'border-color':
            case 'active-border-color':
                this.updateCheckedStyle(this.checked);
                break;
        }
    }
    get checked(): boolean {
        return this._checked;
    }
    set checked(value: boolean) {
        if (value == this._checked) {
            return;
        }
        this._checked = value;
        this.updateCheckedStyle(value);
        this.updateCheckedStatus(value);
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get foreColor(): string {
        return this.getAttributeValue('foreColor', this.iconColor);
    }
    get backgroundColor(): string {
        return this.getAttributeValue('backgroundColor', '#ffffff');
    }
    get activeBackgroundColor(): string {
        return this.getAttributeValue('activeBackgroundColor', '#ffffff');
    }
    get borderColor(): string {
        return this.getAttributeValue('borderColor', '#d1d1d1');
    }
    get activeBorderColor(): string {
        return this.getAttributeValue('activeBorderColor', '#d1d1d1');
    }
    get iconColor(): string {
        return this.getAttributeValue('iconColor', this.color);
    }
    get color(): string {
        return this.getAttributeValue('color', '#007aff');
    }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
    private updateCheckedStyle(checked: boolean) {
        const backgroundColor = checked ? this.activeBackgroundColor : this.backgroundColor;
        const borderColor = checked ? this.activeBorderColor : this.borderColor;
        this.checkboxView.style.setProperty('backgroundColor', backgroundColor);
        this.checkboxView.style.setProperty('borderColor', borderColor);
    }
    private updateCheckedStatus(checked: boolean) {
        if (checked) {
            this.checkboxView.appendChild(this.checkboxText);
        }
        else {
            this.checkboxView.removeChild(this.checkboxText);
        }
    }
    private dispatchGroup() {
        let group = this.parentElement;
        let maxRecursiveDeep = 32;
        while (group != null && maxRecursiveDeep > 0) {
            maxRecursiveDeep--;
            if (group instanceof UniCheckboxGroupElement) {
                break;
            }
            group = group!.parentElement;
        }
        if (group != null) {
            (group as UniCheckboxGroupElement)._checkboxChange();
        }
    }
}
class UniCheckboxGroupChangeEventDetail extends UTSObject {
    value!: Array<string>;
}
class UniCheckboxGroupChangeEvent extends UniCustomEvent<UniCheckboxGroupChangeEventDetail> {
    constructor(value: Array<string>) {
        super('change', {
            value
        } as UniCheckboxGroupChangeEventDetail);
    }
}
class UniCheckboxGroupElement extends UniFormControlElement<Array<string>> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [];
    }
    constructor() {
        super();
    }
    get name(): string {
        return this.getAttributeValue('name', '');
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    get value(): Array<string> {
        return this.getCheckboxValues();
    }
    set value(value: Array<string>) {
        this.setCheckboxValues(value);
    }
    reset() {
        this.findChildren(this).forEach((item: UniCheckboxElement) => {
            item.reset();
        });
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) { }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
    _checkboxChange() {
        this.dispatchEvent(new UniCheckboxGroupChangeEvent(this.getCheckboxValues()));
    }
    private getCheckboxValues(): Array<string> {
        const values: Array<string> = [];
        this.findChildren(this).forEach((item: UniCheckboxElement) => {
            if (item.checked) {
                values.push(item.value);
            }
        });
        return values;
    }
    private setCheckboxValues(values: Array<string>) {
        this.findChildren(this).forEach((item: UniCheckboxElement) => {
            if (values.includes(item.value)) {
                item.checked = true;
            }
        });
    }
    private findChildren(el: UniElement): UniCheckboxElement[] {
        const controls: UniCheckboxElement[] = [];
        el.children.forEach((item: UniElement) => {
            if (item instanceof UniCheckboxElement) {
                controls.push(item as UniCheckboxElement);
            }
            else {
                this.findChildren(item).forEach((item: UniCheckboxElement) => {
                    controls.push(item as UniCheckboxElement);
                });
            }
        });
        return controls;
    }
}
export { UniCheckboxElement as UniCheckboxElement };
export { UniCheckboxGroupChangeEvent as UniCheckboxGroupChangeEvent };
export { UniCheckboxGroupElement as UniCheckboxGroupElement };
class UniFormSubmitEventDetail extends UTSObject {
    value!: UTSJSONObject;
}
class UniFormResetEventDetail extends UTSObject {
}
class UniFormSubmitEvent extends UniCustomEvent<UniFormSubmitEventDetail> {
    constructor(value: UTSJSONObject) {
        super('submit', {
            value
        } as UniFormSubmitEventDetail);
    }
}
class UniFormResetEvent extends UniCustomEvent<UniFormResetEventDetail> {
    constructor() {
        super('reset', {} as UniFormResetEventDetail);
    }
}
class UniFormElement extends UniViewElementImpl implements UniCustomElement, IUniForm {
    static get observedAttributes(): Array<string> {
        return [
            'disabled'
        ];
    }
    constructor() {
        super();
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) { }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    submit() {
        if (this.disabled) {
            return;
        }
        const formData = new UTSJSONObject({});
        this.findFormControls(this).forEach((control: UniFormControl<Object>) => {
            formData[control.name] = control.value;
        });
        this.dispatchEvent(new UniFormSubmitEvent(formData));
    }
    reset() {
        if (this.disabled) {
            return;
        }
        this.findFormControls(this).forEach((control: UniFormControl<Object>) => {
            control.reset();
        });
        this.dispatchEvent(new UniFormResetEvent());
    }
    private findFormControls(el: UniElement): UniFormControl<Object>[] {
        const controls: UniFormControl<Object>[] = [];
        el.children.forEach((item: UniElement) => {
            if (item instanceof UniFormControlElement) {
                const control = item as UniFormControl<Object>;
                if (control.name.length > 0) {
                    controls.push(control);
                }
            }
            else {
                this.findFormControls(item).forEach((item: UniFormControl<Object>) => {
                    controls.push(item);
                });
            }
        });
        return controls;
    }
}
export { UniFormSubmitEvent as UniFormSubmitEvent };
export { UniFormResetEvent as UniFormResetEvent };
export { UniFormElement as UniFormElement };
const LabelStopPropagation = 'label-stopPropagation';
const interactiveTags = [
    'CHECKBOX',
    'RADIO',
    'SWITCH',
    'BUTTON'
];
class UniLabelElement extends UniViewElementImpl implements UniCustomElement {
    private labelEvent: UniPointerEvent | null = null;
    constructor() {
        super();
        this.addEventListener('click', (event: UniPointerEvent) => {
            if (this.disabled) {
                return;
            }
            if (this.isInteractiveChild(event.target as UniElement)) {
                event.stopPropagation();
            }
            else if (this.for != '') {
                const elementById = this.uniPage.getElementById(this.for);
                if (elementById != null) {
                    (elementById as UniElement).dispatchEvent('click', event);
                }
            }
            else {
                this.labelEvent = event;
                this.dispatchToInteractiveChild(this);
            }
        });
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get for(): string {
        return this.getAttributeValue(this, 'for', '');
    }
    private getAttributeValue(element: UniElement, key: string, defaultValue: string): string {
        const value = element.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
    private isInteractiveChild(element: UniElement | null): boolean {
        const tag = element?.tagName;
        if (tag == '')
            return false;
        if (interactiveTags.includes(tag as string))
            return true;
        if (element != null) {
            return this.getAttributeValue((element as UniElement), LabelStopPropagation, '') == LabelStopPropagation;
        }
        return false;
    }
    private dispatchToInteractiveChild(element: UniElement): boolean {
        const tag = element.tagName;
        if (interactiveTags.includes(tag as string) && this.labelEvent != null) {
            const event = this.labelEvent;
            const pointerEvent = new UniPointerEvent(event.type, event.x, event.y, event.clientX, event.clientY, event.pageX, event.pageY, event.screenX, event.screenY);
            element.dispatchEvent('click', pointerEvent);
            return true;
        }
        for (const child of element.children) {
            if (this.dispatchToInteractiveChild(child)) {
                return true;
            }
        }
        return false;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    adoptedCallback() { }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) { }
}
export { LabelStopPropagation as LabelStopPropagation };
export { UniLabelElement as UniLabelElement };
class UniPickerViewChangeEventDetail extends UTSObject {
    value!: number[];
}
function camelize(str: string): string {
    const parts = str.split('-');
    if (parts.length == 1) {
        return str;
    }
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        if (part.length > 0) {
            result += part.charAt(0).toUpperCase() + part.slice(1);
        }
    }
    return result;
}
class UniPickerViewChangeEvent extends UniCustomEvent<UniPickerViewChangeEventDetail> {
    constructor(value: number[]) {
        super('change', {
            value
        } as UniPickerViewChangeEventDetail);
    }
}
class UniPickerViewElement extends UniFormControlElement<number[]> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'value',
            'indicator-style',
            'indicatorStyle',
            'mask-class',
            'mask-top-style',
            'mask-bottom-style'
        ];
    }
    private _value = new Array<number>();
    private _uniResizeObserver!: UniResizeObserver;
    constructor() {
        super();
        this.style.setProperty('flexDirection', 'row');
        this._uniResizeObserver = new UniResizeObserver((_: Array<UniResizeObserverEntry>) => {
            this._onResize();
        });
    }
    get name(): string {
        return this.getAttribute('name') ?? '';
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    public get value(): number[] {
        let returnValue = new Array<number>();
        this.findChildren(this).forEach((item: UniPickerViewColumnElement) => {
            returnValue.push(item.value);
        });
        return returnValue;
    }
    public set value(value: number[]) {
        if (this._value.length == value.length) {
            let isSame = true;
            for (let i = 0; i < value.length; i++) {
                if (this._value[i] !== value[i]) {
                    isSame = false;
                    break;
                }
            }
            if (isSame) {
                return;
            }
        }
        const controls: UniPickerViewColumnElement[] = this.findChildren(this);
        const minIndex = Math.min(controls.length as number, value.length as number);
        for (let i = 0; i < minIndex; i++) {
            const changed = controls[i].value != value[i];
            controls[i].setAnyAttribute('value', value[i]);
            if (changed) {
                this._columnChange();
            }
        }
        this._value = value;
    }
    reset() {
        this.findChildren(this).forEach((item: UniPickerViewColumnElement) => {
            item.reset();
        });
    }
    connectedCallback() {
        this._uniResizeObserver!.observe(this);
    }
    disconnectedCallback() {
        this._uniResizeObserver.disconnect();
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        if (newValue == null) {
            return;
        }
        switch (name) {
            case 'value':
                this.value = newValue as Array<number>;
                break;
            case 'indicator-style':
            case 'indicatorStyle':
                this._setIndicatorStyle(newValue);
                break;
            case 'mask-top-style':
                this._setMaskTopStyle(newValue);
                break;
            case 'mask-bottom-style':
                this._setMaskBottomStyle(newValue);
                break;
        }
    }
    insertBefore(child: UniElement, anchor: UniElement | null = null): UniElement | null {
        if (this._value.length > this.children.length) {
            if (child instanceof UniPickerViewColumnElement) {
                (child as UniPickerViewColumnElement).setAnyAttribute('value', this._value[this.children.length]);
            }
        }
        return super.insertBefore(child, anchor);
    }
    _columnChange() {
        this.dispatchEvent(new UniPickerViewChangeEvent(this.value));
    }
    private _onResize() {
        this.children.forEach((item: UniElement) => {
            if (item instanceof UniPickerViewColumnElement) {
                (item as UniPickerViewColumnElement).resize();
            }
        });
    }
    private _setIndicatorStyle(value: Object) {
        const styleMap = this._fixStyleToMap(value);
        this.children.forEach((item: UniElement) => {
            if (item instanceof UniPickerViewColumnElement) {
                (item as UniPickerViewColumnElement).setIndicatorStyle(styleMap);
            }
        });
        styleMap.clear();
    }
    private _setMaskTopStyle(value: Object) {
        const styleMap = this._fixStyleToMap(value);
        this.children.forEach((item: UniElement) => {
            if (item instanceof UniPickerViewColumnElement) {
                (item as UniPickerViewColumnElement).setMaskTopStyle(styleMap);
            }
        });
        styleMap.clear();
    }
    private _setMaskBottomStyle(value: Object) {
        const styleMap = this._fixStyleToMap(value);
        this.children.forEach((item: UniElement) => {
            if (item instanceof UniPickerViewColumnElement) {
                (item as UniPickerViewColumnElement).setMaskBottomStyle(styleMap);
            }
        });
        styleMap.clear();
    }
    private _fixStyleToMap(value: Object): Map<string, string> {
        if (value instanceof Map) {
            return value as Map<string, string>;
        }
        if (typeof value == 'string') {
            const styleMap = new Map<string, string>();
            if (value.length == 0) {
                return styleMap;
            }
            const styles = value.split(';');
            for (let i = 0; i < styles.length; i++) {
                const pair = styles[i].split(':');
                if (pair.length == 2) {
                    styleMap.set(pair[0].trim(), pair[1].trim());
                }
            }
            return styleMap;
        }
        if (typeof value == 'object') {
            const styleMap = new Map<string, string>();
            const valueObject = value as object;
            Object.keys(valueObject).forEach((key: string) => {
                styleMap.set(key, valueObject[key]);
            });
            return styleMap;
        }
        return new Map<string, string>();
    }
    private findChildren(el: UniElement): UniPickerViewColumnElement[] {
        const controls: UniPickerViewColumnElement[] = [];
        el.children.forEach((item: UniElement) => {
            if (item instanceof UniPickerViewColumnElement) {
                controls.push(item as UniPickerViewColumnElement);
            }
            else {
                this.findChildren(item).forEach((item: UniPickerViewColumnElement) => {
                    controls.push(item);
                });
            }
        });
        return controls;
    }
}
class UniPickerViewColumnElement extends UniFormControlElement<number> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'value'
        ];
    }
    private status = 0;
    private scrollView!: UniElement;
    private contentView!: UniElement;
    private indicatorView!: UniElement;
    private maskViewTop!: UniElement;
    private maskViewBottom!: UniElement;
    private _indicatorHeight = 50;
    private _selectedIndex = 0;
    private _initialValue = 0;
    private _initialValueFlag = false;
    private _skipScrollChangeEventOnce = false;
    private _isAdjusting = false;
    private _lastMaskTopStyle = new Map<string, string>();
    private _lastMaskBottomStyle = new Map<string, string>();
    private _lastIndicatorStyle = new Map<string, string>();
    private basicMaskTopStyle = new Map<string, string>([
        [
            'pointerEvents',
            'none'
        ],
        [
            'position',
            'absolute'
        ],
        [
            'height',
            '40%'
        ],
        [
            'left',
            '0px'
        ],
        [
            'top',
            '0px'
        ],
        [
            'right',
            '0px'
        ],
        [
            'backgroundImage',
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))'
        ]
    ]);
    private basicMaskBottomStyle = new Map<string, string>([
        [
            'pointerEvents',
            'none'
        ],
        [
            'position',
            'absolute'
        ],
        [
            'height',
            '40%'
        ],
        [
            'left',
            '0px'
        ],
        [
            'right',
            '0px'
        ],
        [
            'bottom',
            '0px'
        ],
        [
            'backgroundImage',
            'linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))'
        ]
    ]);
    private basicIndicatorStyle = new Map<string, string>([
        [
            'pointerEvents',
            'none'
        ],
        [
            'boxSizing',
            'content-box'
        ],
        [
            'height',
            '50px'
        ],
        [
            'left',
            '0px'
        ],
        [
            'right',
            '0px'
        ],
        [
            'top',
            '0px'
        ],
        [
            'bottom',
            '0px'
        ],
        [
            'marginTop',
            'auto'
        ],
        [
            'marginBottom',
            'auto'
        ],
        [
            'border',
            '1px solid #e5e5e5'
        ],
        [
            'borderStyle',
            'solid'
        ],
        [
            'borderLeftWidth',
            '0px'
        ],
        [
            'borderTopWidth',
            '1px'
        ],
        [
            'borderRightWidth',
            '0px'
        ],
        [
            'borderBottomWidth',
            '1px'
        ],
        [
            'borderColor',
            '#e5e5e5'
        ]
    ]);
    constructor() {
        super();
        this.style.setProperty('flexGrow', '1');
        this.style.setProperty('position', 'relative');
        const scrollView = this.uniPage.createElement('scroll-view');
        scrollView.setAnyAttribute('showScrollbar', false);
        const scrollStyle = scrollView.style;
        scrollStyle.setProperty('flexDirection', 'column');
        scrollStyle.setProperty('position', 'absolute');
        scrollStyle.setProperty('top', '0px');
        scrollStyle.setProperty('left', '0px');
        scrollStyle.setProperty('right', '0px');
        scrollStyle.setProperty('bottom', '0px');
        const contentView = this.uniPage.createElement('view');
        scrollView.appendChild(contentView);
        const indicatorView = this.uniPage.createElement('view');
        const indicatorStyle = indicatorView.style;
        this.basicIndicatorStyle.forEach((value, key) => {
            indicatorStyle.setProperty(key, value);
        });
        const maskViewTop = this.uniPage.createElement('view');
        const maskViewTopStyle = maskViewTop.style;
        this.basicMaskTopStyle.forEach((value, key) => {
            maskViewTopStyle.setProperty(key, value);
        });
        const maskViewBottom = this.uniPage.createElement('view');
        const maskViewBottomStyle = maskViewBottom.style;
        this.basicMaskBottomStyle.forEach((value, key) => {
            maskViewBottomStyle.setProperty(key, value);
        });
        this.scrollView = scrollView;
        this.contentView = contentView;
        this.maskViewTop = maskViewTop;
        this.indicatorView = indicatorView;
        this.maskViewBottom = maskViewBottom;
        (scrollView as UniElementImpl).addEventListener('scrollend', (e: UniScrollEvent) => {
            if (this._indicatorHeight == 0) {
                return;
            }
            this._scrollTopSnap(e.detail.scrollTop as number);
        });
        this.addEventListener('touchstart', (_: UniTouchEvent) => {
            this._skipScrollChangeEventOnce = false;
        });
        this.addEventListener('click', (e: UniPointerEvent) => {
            const offsetY = this.getBoundingClientRect().top;
            const offsetTop = e.clientY - offsetY - maskViewTop.offsetHeight;
            const targetIndex = parseInt((scrollView.scrollTop + offsetTop) / this._indicatorHeight + '');
            this._setIndex(targetIndex);
            this._scrollTopIndex(this._selectedIndex);
        });
    }
    get value(): number {
        return this._selectedIndex;
    }
    set value(value: number) {
        this._setIndex(value);
        this._skipScrollChangeEventOnce = true;
        if (this.isConnected) {
            this._scrollTopIndex(value);
        }
    }
    reset() {
        this.value = this._initialValue;
    }
    connectedCallback() {
        this.initialize();
        this.getBoundingClientRectAsync()?.then((_: DOMRect) => {
            this._onLayout();
            this.scrollView.setAnyAttribute('scroll-with-animation', true);
        });
    }
    disconnectedCallback() {
        super.removeChild(this.maskViewTop);
        super.removeChild(this.indicatorView);
        super.removeChild(this.maskViewBottom);
        super.removeChild(this.scrollView);
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'value':
                const selectedIndex = newValue as number;
                if (!this._initialValueFlag) {
                    this._initialValueFlag = true;
                    this._initialValue = selectedIndex;
                }
                this.value = selectedIndex;
                break;
        }
    }
    appendChild(child: UniElement): void {
        this.initialize();
        if (this.status === 2) {
            return this.contentView.appendChild(child);
        }
        else {
            return super.appendChild(child);
        }
    }
    insertBefore(child: UniElement, anchor: UniElement | null = null): UniElement | null {
        this.initialize();
        if (this.status === 2) {
            return this.contentView.insertBefore(child, anchor);
        }
        else {
            return super.insertBefore(child, anchor);
        }
    }
    removeChild(child: UniElement): UniElement | null {
        return this.contentView.removeChild(child);
    }
    initialize() {
        if (this.status !== 0) {
            return;
        }
        this.status = 1;
        this.appendChild(this.indicatorView);
        this.appendChild(this.scrollView);
        this.appendChild(this.maskViewTop);
        this.appendChild(this.maskViewBottom);
        this.status = 2;
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    resize() {
        this._onLayout();
    }
    private diffStyle(styles: Map<string, string>, lastStyles: Map<string, string>, basicStyles: Map<string, string>): Map<string, string> {
        const diffedStyles = new Map<string, string>();
        if (lastStyles.size > 0) {
            lastStyles.forEach((value, key) => {
                if (!styles.has(key)) {
                    if (basicStyles.has(key)) {
                        diffedStyles.set(key, UTS.mapGet(basicStyles, key) as string);
                    }
                    else if (basicStyles.has(camelize(key))) {
                        diffedStyles.set(key, UTS.mapGet(basicStyles, camelize(key)) as string);
                    }
                    else {
                        diffedStyles.set(key, '');
                    }
                }
            });
        }
        styles.forEach((value, key) => {
            diffedStyles.set(key, value);
        });
        return diffedStyles;
    }
    setIndicatorStyle(styles: Map<string, string>): void {
        const diffedStyles = this.diffStyle(styles, this._lastIndicatorStyle, this.basicIndicatorStyle);
        this._lastIndicatorStyle.clear();
        diffedStyles.forEach((value, key) => {
            this.indicatorView.style.setProperty(key, value);
            if (value != '') {
                this._lastIndicatorStyle.set(key, value);
            }
        });
        this.getBoundingClientRectAsync()?.then((_: DOMRect) => {
            this._onLayout();
        });
    }
    setMaskTopStyle(styles: Map<string, string>): void {
        const diffedStyles = this.diffStyle(styles, this._lastMaskTopStyle, this.basicMaskTopStyle);
        this._lastMaskTopStyle.clear();
        diffedStyles.forEach((value, key) => {
            this.maskViewTop.style.setProperty(key, value);
            if (value != '') {
                this._lastMaskTopStyle.set(key, value);
            }
        });
        this._onLayout();
    }
    setMaskBottomStyle(styles: Map<string, string>): void {
        const diffedStyles = this.diffStyle(styles, this._lastMaskBottomStyle, this.basicMaskBottomStyle);
        this._lastMaskBottomStyle.clear();
        diffedStyles.forEach((value, key) => {
            this.maskViewBottom.style.setProperty(key, value);
            if (value != '') {
                this._lastMaskBottomStyle.set(key, value);
            }
        });
        this._onLayout();
    }
    _setIndex(value: number) {
        if (value < 0) {
            value = 0;
        }
        if (value == this._selectedIndex) {
            return;
        }
        this._selectedIndex = value;
    }
    private _onLayout() {
        if (!this.isConnected) {
            return;
        }
        const indicatorHeight = this._getIndicatorClientHeight();
        const contentPaddingPixel = (this.offsetHeight - indicatorHeight) / 2 + 'px';
        this.maskViewTop.style.setProperty('height', contentPaddingPixel);
        this.maskViewBottom.style.setProperty('height', contentPaddingPixel);
        this.contentView.style.setProperty('paddingTop', contentPaddingPixel);
        this.contentView.style.setProperty('paddingBottom', contentPaddingPixel);
        this._indicatorHeight = indicatorHeight;
        if (this._indicatorHeight <= 0) {
            this._indicatorHeight = 50;
        }
        this._scrollTopIndex(this.value);
    }
    private _getIndicatorClientHeight(): number {
        const borderTopWidth = this.indicatorView.style.getPropertyValue('borderTopWidth');
        const borderBottomWidth = this.indicatorView.style.getPropertyValue('borderBottomWidth');
        const indicatorBorderTop = borderTopWidth.length > 0 ? parseFloat(borderTopWidth) : 0;
        const indicatorBorderBottom = borderBottomWidth.length > 0 ? parseFloat(borderBottomWidth) : 0;
        const indicatorClientHeight = this.indicatorView.offsetHeight - indicatorBorderTop - indicatorBorderBottom;
        return indicatorClientHeight;
    }
    private _scrollTopSnap(y: number) {
        if (this._isAdjusting)
            return;
        const index = Math.round(y / this._indicatorHeight);
        const targetY = index * this._indicatorHeight;
        if (Math.abs(y - targetY) > 0.1) {
            this._isAdjusting = true;
            this._scrollTopIndex(index);
            setTimeout(() => {
                this._isAdjusting = false;
            }, 0);
        }
        const changed = this._selectedIndex != index;
        this._selectedIndex = index;
        if (this._skipScrollChangeEventOnce) {
            this._skipScrollChangeEventOnce = false;
            return;
        }
        if (changed) {
            this._dispatchUniPickerView();
        }
    }
    private _scrollTopIndex(index: number) {
        this.scrollView.scrollTo(0, index * this._indicatorHeight);
    }
    private _dispatchUniPickerView() {
        let pickerView = this.parentElement;
        let maxRecursiveDeep = 32;
        while (pickerView != null && maxRecursiveDeep > 0) {
            maxRecursiveDeep--;
            if (pickerView instanceof UniPickerViewElement) {
                break;
            }
            pickerView = pickerView!.parentElement;
        }
        if (pickerView != null) {
            (pickerView as UniPickerViewElement)._columnChange();
        }
    }
}
export { UniPickerViewChangeEvent as UniPickerViewChangeEvent };
export { UniPickerViewElement as UniPickerViewElement };
export { camelize as camelize };
export { UniPickerViewColumnElement as UniPickerViewColumnElement };
class UniRadioElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'checked',
            'value',
            'background-Color',
            'active-Background-Color',
            'border-Color',
            'active-Border-Color',
            'fore-Color',
            'color',
            'icon-Color'
        ];
    }
    private radioView!: UniElement;
    private radioText!: UniTextElement;
    private _initialChecked = false;
    private _initialCheckedFlag = false;
    private _checked = false;
    constructor() {
        super();
        this.style.setProperty('flexDirection', 'row');
        this.style.setProperty('alignItems', 'center');
        const radioView = this.uniPage.createElement('view');
        const radioViewStyle = radioView.style;
        radioViewStyle.setProperty('alignItems', 'center');
        radioViewStyle.setProperty('justifyContent', 'center');
        radioViewStyle.setProperty('borderStyle', 'solid');
        radioViewStyle.setProperty('borderWidth', '1px');
        radioViewStyle.setProperty('borderColor', '#e9e9ea');
        radioViewStyle.setProperty('borderRadius', '12px');
        radioViewStyle.setProperty('width', '24px');
        radioViewStyle.setProperty('height', '24px');
        radioViewStyle.setProperty('marginRight', '5px');
        const radioText = this.uniPage.createElement('text') as UniTextElement;
        radioText.setAttribute('value', '\uEA08');
        const radioTextStyle = radioText.style;
        radioTextStyle.setProperty('fontFamily', 'uni-icon');
        radioTextStyle.setProperty('fontSize', '16px');
        radioTextStyle.setProperty('color', this.foreColor);
        this.radioView = radioView;
        this.radioText = radioText;
        this.addEventListener('click', (e: UniPointerEvent) => {
            e.stopPropagation();
            if (this.disabled) {
                return;
            }
            if (this.checked) {
                return;
            }
            this.checked = true;
            this.dispatchGroup();
        });
        this.updateCheckedStyle(false);
    }
    get name(): string {
        return this.getAttributeValue('name', '');
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    get value(): string {
        return this.getAttributeValue('value', '');
    }
    set value(value: string) {
        this.setAttribute('value', value);
    }
    reset() {
        this.checked = this._initialChecked;
    }
    connectedCallback() {
        if (this.children.length == 0) {
            this.appendChild(this.radioView);
        }
        else {
            this.insertBefore(this.radioView, this.firstChild);
        }
    }
    disconnectedCallback() {
        this.removeChild(this.radioView);
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'checked':
                const value = (typeof newValue == 'string' || newValue == true) ? true : false;
                if (!this._initialCheckedFlag) {
                    this._initialCheckedFlag = true;
                    this._initialChecked = value;
                }
                this.checked = value;
                break;
            case 'fore-color':
            case 'icon-color':
                this.radioText.style.setProperty('color', this.foreColor);
                break;
            case 'background-color':
            case 'active-background-color':
            case 'border-color':
            case 'active-border-color':
            case 'color':
                this.updateCheckedStyle(this.checked);
                break;
        }
    }
    get checked(): boolean {
        return this._checked;
    }
    set checked(value: boolean) {
        if (value == this._checked) {
            return;
        }
        this._checked = value;
        this.updateCheckedStyle(value);
        this.updateCheckedStatus(value);
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get foreColor(): string {
        return this.getAttributeValue('foreColor', this.iconColor);
    }
    get backgroundColor(): string {
        return this.getAttributeValue('backgroundColor', '#ffffff');
    }
    get activeBackgroundColor(): string {
        return this.getAttributeValue('activeBackgroundColor', this.color);
    }
    get borderColor(): string {
        return this.getAttributeValue('borderColor', '#d1d1d1');
    }
    get activeBorderColor(): string {
        return this.getAttributeValue('activeBorderColor', this.activeBackgroundColor);
    }
    get color(): string {
        return this.getAttributeValue('color', '#007AFF');
    }
    get iconColor(): string {
        return this.getAttributeValue('iconColor', '#fff');
    }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
    private updateCheckedStyle(checked: boolean) {
        const backgroundColor = checked ? this.activeBackgroundColor : this.backgroundColor;
        const borderColor = checked ? this.activeBorderColor : this.borderColor;
        this.radioView.style.setProperty('backgroundColor', backgroundColor);
        this.radioView.style.setProperty('borderColor', borderColor);
    }
    private updateCheckedStatus(checked: boolean) {
        if (checked) {
            setTimeout(() => {
                this.radioView.appendChild(this.radioText);
            }, 1);
        }
        else {
            this.radioView.removeChild(this.radioText);
        }
    }
    private dispatchGroup() {
        let group = this.parentElement;
        let maxRecursiveDeep = 32;
        while (group != null && maxRecursiveDeep > 0) {
            maxRecursiveDeep--;
            if (group instanceof UniRadioGroupElement) {
                break;
            }
            group = group!.parentElement;
        }
        if (group != null) {
            (group as UniRadioGroupElement)._radioChange(this, this.value);
        }
    }
}
class UniRadioGroupChangeEventDetail extends UTSObject {
    value!: string;
}
class UniRadioGroupChangeEvent extends UniCustomEvent<UniRadioGroupChangeEventDetail> {
    constructor(value: string) {
        super('change', {
            value
        } as UniRadioGroupChangeEventDetail);
    }
}
class UniRadioGroupElement extends UniFormControlElement<string> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [];
    }
    constructor() {
        super();
    }
    get name(): string {
        return this.getAttributeValue('name', '');
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    get value(): string {
        let returnValue = '';
        this.findChildren(this).forEach((item: UniRadioElement) => {
            if (item.checked) {
                returnValue = item.value;
            }
        });
        return returnValue;
    }
    set value(value: string) {
        this.findChildren(this).forEach((item: UniRadioElement) => {
            if (item.value == value) {
                item.checked = true;
            }
        });
    }
    reset() {
        this.findChildren(this).forEach((item: UniRadioElement) => {
            item.reset();
        });
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) { }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
    _radioChange(el: UniRadioElement, value: string) {
        this.findChildren(this).forEach((item: UniRadioElement) => {
            if (item != el) {
                item.checked = false;
            }
        });
        this.dispatchEvent(new UniRadioGroupChangeEvent(value));
    }
    private findChildren(el: UniElement): UniRadioElement[] {
        const controls: UniRadioElement[] = [];
        el.children.forEach((item: UniElement) => {
            if (item instanceof UniRadioElement) {
                controls.push(item as UniRadioElement);
            }
            else {
                this.findChildren(item).forEach((item: UniRadioElement) => {
                    controls.push(item as UniRadioElement);
                });
            }
        });
        return controls;
    }
}
export { UniRadioElement as UniRadioElement };
export { UniRadioGroupChangeEvent as UniRadioGroupChangeEvent };
export { UniRadioGroupElement as UniRadioGroupElement };
const SLIDER_VALUE_WIDTH = 34;
const SLIDER_VALUE_FONT_SIZE = 14;
class UniSliderChangeEventDetail extends UTSObject {
    value!: number;
}
class UniSliderChangeEvent extends UniCustomEvent<UniSliderChangeEventDetail> {
    constructor(type: string, value: number) {
        super(type, {
            value
        } as UniSliderChangeEventDetail);
    }
}
class UniSliderElement extends UniFormControlElement<number> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'min',
            'max',
            'step',
            'value',
            'show-value',
            'active-background-color',
            'background-color',
            'block-size',
            'fore-color',
            'selected-color',
            'block-color',
            'active-color',
            'color'
        ];
    }
    private _sliderTrackWidth: number = 0;
    private _sliderWidth: number = 0;
    private _sliderOffsetX: number = 0;
    private _touchStartFlag = false;
    private _touchDownX: number = 0;
    private _touchDownY: number = 0;
    private _activeStatus: number = 0;
    private _uniResizeObserver!: UniResizeObserver;
    private _drawingContext!: DrawableContext;
    private _min: number = 0;
    private _max: number = 100;
    private _step: number = 1;
    private _value: number = 0;
    private _showValue = false;
    private _initialValue = 0;
    private _initialValueFlag = false;
    constructor() {
        super();
        this.style.setProperty('marginTop', '1px');
        this.style.setProperty('marginBottom', '1px');
        this._drawingContext = this.getDrawableContext()!;
        this._updateSliderHeight();
        this.addEventListener('touchstart', (e: UniTouchEvent) => {
            this._onTouchStart(e);
        });
        this.addEventListener('touchmove', (e: UniTouchEvent) => {
            this._onTouchMove(e);
        });
        this.addEventListener('touchend', (e: UniTouchEvent) => {
            this._onTouchEnd(e);
        });
        this._uniResizeObserver = new UniResizeObserver((_: Array<UniResizeObserverEntry>) => {
            this._onResize();
        });
    }
    get name(): string {
        return this.getAttributeValue('name', '');
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    get value(): number {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
        this._onRender();
    }
    reset() {
        this.value = this._initialValue;
    }
    connectedCallback() {
        this.getBoundingClientRectAsync()?.then((_: DOMRect) => {
            setTimeout(() => {
                this._onResize();
            }, 34);
        });
        this._uniResizeObserver!.observe(this);
    }
    disconnectedCallback() {
        this._uniResizeObserver.disconnect();
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'min':
                this._min = newValue as number;
                break;
            case 'max':
                this._max = newValue as number;
                break;
            case 'step':
                this._step = newValue as number;
                break;
            case 'value':
                this._value = newValue as number;
                if (!this._initialValueFlag) {
                    this._initialValueFlag = true;
                    this._initialValue = this._value;
                }
                break;
            case 'block-size':
                this._updateSliderHeight();
                break;
            case 'show-value':
                this._showValue = (typeof newValue == 'string' || newValue == true) ? true : false;
                break;
        }
        if (name == 'block-size' || name == 'show-value') {
            this._onResize();
        }
        else {
            this._onRender();
        }
    }
    private _onTouchStart(e: UniTouchEvent) {
        if (this.disabled) {
            return;
        }
        if (e.changedTouches.length !== 1 || this._touchStartFlag) {
            return;
        }
        this._activeStatus = 0;
        this._touchDownX = e.changedTouches[0].pageX;
        this._touchDownY = e.changedTouches[0].pageY;
        if (this._pointInValueArea(e.changedTouches[0].pageX)) {
            e.preventDefault();
            return;
        }
        this._touchStartFlag = true;
    }
    private _onTouchMove(e: UniTouchEvent) {
        if (this.disabled) {
            return;
        }
        if (e.changedTouches.length !== 1 || !this._touchStartFlag) {
            return;
        }
        const x = e.changedTouches[0].pageX;
        const y = e.changedTouches[0].pageY;
        if (this._activeStatus === 2) {
            return;
        }
        const deltaX = Math.abs(this._touchDownX - x);
        const deltaY = Math.abs(this._touchDownY - y);
        if (this._activeStatus !== 1) {
            if (deltaX <= 4 && deltaY >= 4) {
                this._activeStatus = 2;
                return;
            }
            if (deltaX >= 4 && deltaY <= 4) {
                this._activeStatus = 1;
            }
        }
        if (this._activeStatus !== 1) {
            return;
        }
        e.preventDefault();
        this._onTrackInputChange(x);
        this.dispatchEvent(new UniSliderChangeEvent('changing', this._value));
    }
    private _onTouchEnd(e: UniTouchEvent) {
        if (this.disabled) {
            return;
        }
        if (!this._touchStartFlag) {
            return;
        }
        this._touchStartFlag = false;
        this._touchDownX = 0;
        this._touchDownY = 0;
        if (this._activeStatus === 2) {
            return;
        }
        this._onTrackInputChange(e.changedTouches[0].pageX);
        this.dispatchEvent(new UniSliderChangeEvent('change', this._value));
    }
    private _pointInValueArea(x: number): boolean {
        return (x > this._sliderOffsetX + this._sliderTrackWidth + this.internalBlockSize / 2);
    }
    private _onTrackInputChange(x: number) {
        let px = x - this._sliderOffsetX;
        if (px < 0) {
            px = 0;
        }
        if (px > this._sliderTrackWidth) {
            px = this._sliderTrackWidth;
        }
        const percentage = px / this._sliderTrackWidth;
        let value = this.min + (this.max - this.min) * percentage;
        if (percentage > 0 && percentage < 1) {
            value -= value % this.step;
        }
        if (Number.isInteger(this.step)) {
            this._value = parseInt(value + '');
        }
        else {
            const step_pair = this.step.toString().split('.');
            this._value = parseFloat(value.toFixed(step_pair[1].length));
            const value_pair = this._value.toString().split('.');
            if (value_pair.length > 1 && parseInt(value_pair[1]) == 0) {
                this._value = parseInt(value_pair[0]);
            }
        }
        this._onRender();
    }
    private _onResize() {
        this._onLayout();
        this._onRender();
    }
    private _onLayout() {
        this._sliderWidth = this.offsetWidth;
        this._sliderOffsetX = this.getBoundingClientRect().x + this.internalBlockSize / 2;
        this._sliderTrackWidth = this._sliderWidth - this.internalBlockSize;
        if (this.showValue) {
            this._sliderTrackWidth -= SLIDER_VALUE_WIDTH;
        }
    }
    private _onRender() {
        const drawContext = this._drawingContext!;
        drawContext.reset();
        const radius = this.internalBlockSize / 2;
        const center_y = 4 + radius;
        const value_width = this._sliderTrackWidth * this._getValuePercentage();
        const thumb_center_x = value_width + radius;
        const line_bg_x = thumb_center_x + radius;
        const line_bg_w = this._sliderTrackWidth - line_bg_x + this.internalBlockSize;
        if (line_bg_w > 0) {
            drawContext.fillStyle = this.backgroundColor;
            drawContext.fillRect(line_bg_x, center_y, line_bg_w, 2);
        }
        if (thumb_center_x > radius) {
            const activeBackgroundColor = this.activeBackgroundColor.length > 0 ? this.activeBackgroundColor : this.activeColor;
            drawContext.fillStyle = activeBackgroundColor;
            drawContext.fillRect(0, center_y, value_width, 2);
        }
        const foreColor = this.foreColor.length > 0 ? this.foreColor : this.blockColor;
        drawContext.fillStyle = foreColor;
        drawContext.arc(thumb_center_x, center_y, radius, 0, 2 * Math.PI);
        drawContext.fill();
        drawContext.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
            drawContext.strokeStyle = `rgba(100,100,100,0.0${4 - i})`;
            drawContext.beginPath();
            drawContext.arc(thumb_center_x, center_y, radius + i, 0, 2 * Math.PI);
            drawContext.stroke();
        }
        if (this.showValue) {
            drawContext.font = SLIDER_VALUE_FONT_SIZE + 'px';
            drawContext.fillStyle = this.valueColor;
            drawContext.fillText(this._value.toString(), this._sliderTrackWidth + this.internalBlockSize + 3, center_y + 14 / 2 - 1);
        }
        drawContext.update();
    }
    private _getValuePercentage(): number {
        let value = this._value;
        if (value < this.min) {
            value = this.min;
        }
        if (value > this.max) {
            value = this.max;
        }
        if (this.max <= this.min) {
            return 0;
        }
        return (value - this.min) / (this.max - this.min);
    }
    private _updateSliderHeight() {
        const height = this.internalBlockSize + 4 * 2;
        this.style.setProperty('height', height + 'px');
    }
    private get internalBlockSize(): number {
        return Math.min(Math.max(this.blockSize, 12), 28);
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get min(): number {
        return this._min;
    }
    set min(value: number) {
        this._min = value;
    }
    get max(): number {
        return this._max;
    }
    set max(value: number) {
        this._max = value;
    }
    get step(): number {
        return this._step;
    }
    set step(value: number) {
        this._step = value;
    }
    get showValue(): boolean {
        return this._showValue;
    }
    set showValue(value: boolean) {
        this._showValue = value;
    }
    get blockSize(): number {
        const value = this.getAttribute('blockSize');
        if (value != null && value!.length > 0) {
            return parseInt(value!);
        }
        return 28;
    }
    get backgroundColor(): string {
        return this.getAttributeValue('backgroundColor', '#e9e9e9');
    }
    get activeBackgroundColor(): string {
        return this.getAttributeValue('activeBackgroundColor', this.activeColor);
    }
    get activeColor(): string {
        return this.getAttributeValue('activeColor', '#007aff');
    }
    get foreColor(): string {
        return this.getAttributeValue('foreColor', this.blockColor);
    }
    get blockColor(): string {
        return this.getAttributeValue('blockColor', '#ffffff');
    }
    get valueColor(): string {
        return this.getAttributeValue('valueColor', '#888888');
    }
    private getAttributeValue(key: string, defaultValue: string): string {
        const value = this.getAttribute(key);
        if (value != null && value!.length > 0) {
            return value!;
        }
        return defaultValue;
    }
}
export { UniSliderChangeEvent as UniSliderChangeEvent };
export { UniSliderElement as UniSliderElement };
class UniSwitchChangeEventDetail extends UTSObject {
    value!: boolean;
}
class UniSwitchChangeEvent extends UniCustomEvent<UniSwitchChangeEventDetail> {
    constructor(value: boolean) {
        super('change', {
            value
        } as UniSwitchChangeEventDetail);
    }
}
class UniSwitchElement extends UniFormControlElement<boolean> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'checked',
            'disabled',
            'value',
            'background-color',
            'active-background-color',
            'fore-color',
            'active-fore-color',
            'color'
        ];
    }
    private switchThumb!: UniElement;
    private _initialChecked = false;
    private _initialCheckedFlag = false;
    private _checked = false;
    constructor() {
        super();
        const switchTrackStyle = this.style;
        switchTrackStyle.setProperty('borderStyle', 'solid');
        switchTrackStyle.setProperty('borderWidth', '2px');
        switchTrackStyle.setProperty('borderRadius', '16px');
        switchTrackStyle.setProperty('width', '52px');
        switchTrackStyle.setProperty('height', '32px');
        switchTrackStyle.setProperty('transitionDuration', '0.1s');
        switchTrackStyle.setProperty('transitionProperty', 'backgroundColor');
        const switchThumb = this.uniPage.createElement('view');
        const switchThumbStyle = switchThumb.style;
        switchThumbStyle.setProperty('width', '28px');
        switchThumbStyle.setProperty('height', '28px');
        switchThumbStyle.setProperty('borderRadius', '14px');
        this.switchThumb = switchThumb;
        this.addEventListener('click', (e: UniPointerEvent) => {
            e.stopPropagation();
            if (this.disabled) {
                return;
            }
            this.checked = !this.checked;
            this.dispatchEvent(new UniSwitchChangeEvent(this.checked));
        });
    }
    get name(): string {
        return this.getAttributeValue('name', '');
    }
    set name(value: string) {
        this.setAttribute('name', value);
    }
    get value(): boolean {
        return this._checked;
    }
    set value(value: boolean) {
        this._checked = value;
    }
    reset() {
        this.checked = this._initialChecked;
    }
    connectedCallback() {
        this.updateCheckStatus();
        this.updateCheckStatusColor();
        this.switchThumb.style.setProperty('transitionDuration', '0.3s');
        this.switchThumb.style.setProperty('transitionProperty', 'transform');
        this.appendChild(this.switchThumb);
    }
    disconnectedCallback() {
        this.removeChild(this.switchThumb);
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        switch (name) {
            case 'checked':
                const value = (typeof newValue == 'string' || newValue == true) ? true : false;
                if (!this._initialCheckedFlag) {
                    this._initialCheckedFlag = true;
                    this._initialChecked = value;
                }
                this.checked = value;
                break;
            case 'disabled':
            case 'background-color':
            case 'active-background-color':
            case 'fore-color':
            case 'active-fore-color':
            case 'color':
                if (this.isConnected) {
                    this.updateCheckStatusColor();
                }
                break;
        }
    }
    get disabled(): boolean {
        return this.getAttribute('disabled') == 'true' ? true : false;
    }
    get checked(): boolean {
        return this._checked;
    }
    set checked(value: boolean) {
        this._checked = value;
        if (this.isConnected) {
            this.updateCheckStatus();
            this.updateCheckStatusColor();
        }
    }
    get backgroundColor(): string {
        return this.getAttributeValue('backgroundColor', '#e9e9ea');
    }
    get activeBackgroundColor(): string {
        return this.getAttributeValue('activeBackgroundColor', this.color);
    }
    get foreColor(): string {
        return this.getAttributeValue('foreColor', '#fff');
    }
    get activeForeColor(): string {
        return this.getAttributeValue('activeForeColor', '#fff');
    }
    get color(): string {
        return this.getAttributeValue('color', '#007aff');
    }
    updateCheckStatus() {
        if (this.checked) {
            this.switchThumb.style.setProperty('transform', 'translateX(20px)');
        }
        else {
            this.switchThumb.style.setProperty('transform', 'translateX(0px)');
        }
    }
    updateCheckStatusColor() {
        if (this.disabled) {
            this.style.setProperty('opacity', '0.7');
        }
        else {
            this.style.setProperty('opacity', '1');
        }
        if (this.checked) {
            this.style.setProperty('backgroundColor', this.activeBackgroundColor);
            this.style.setProperty('borderColor', this.activeBackgroundColor);
            this.switchThumb.style.setProperty('backgroundColor', this.activeForeColor);
        }
        else {
            this.style.setProperty('backgroundColor', this.backgroundColor);
            this.style.setProperty('borderColor', this.backgroundColor);
            this.switchThumb.style.setProperty('backgroundColor', this.foreColor);
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
export { UniSwitchChangeEvent as UniSwitchChangeEvent };
export { UniSwitchElement as UniSwitchElement };
