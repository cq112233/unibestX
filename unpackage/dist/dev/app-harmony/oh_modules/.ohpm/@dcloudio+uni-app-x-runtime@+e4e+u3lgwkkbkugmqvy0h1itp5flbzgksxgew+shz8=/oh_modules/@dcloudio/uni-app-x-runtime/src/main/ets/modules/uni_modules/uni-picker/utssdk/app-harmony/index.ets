import { UTSObject, UniCustomEventOptions, UniCustomEvent, uni, OpenDialogPageOptions, UTSJSONObject, UniFormControlElement, UniCustomElement } from "@dcloudio/uni-app-framework";
class UniPickerCancelEventDetail extends UTSObject {
}
class UniPickerChangeEventDetail extends UTSObject {
    value!: number | string | number[];
}
class UniPickerColumnChangeEventDetail extends UTSObject {
    value!: number;
    column!: number;
}
class UniPickerCancelEvent extends UniCustomEvent<UniPickerCancelEventDetail> {
    constructor(){
        super('cancel', {
            detail: {} as UniPickerCancelEventDetail
        } as UniCustomEventOptions<UniPickerCancelEventDetail>);
    }
}
class UniPickerChangeEvent extends UniCustomEvent<UniPickerChangeEventDetail> {
    constructor(value: number | string | number[]){
        super('change', {
            detail: {
                value
            } as UniPickerChangeEventDetail
        } as UniCustomEventOptions<UniPickerChangeEventDetail>);
    }
}
class UniPickerColumnChangeEvent extends UniCustomEvent<UniPickerColumnChangeEventDetail> {
    constructor(column: number, value: number){
        super('columnchange', {
            detail: {
                value,
                column
            } as UniPickerColumnChangeEventDetail
        } as UniCustomEventOptions<UniPickerColumnChangeEventDetail>);
    }
}
class UniPickerElement extends UniFormControlElement<Object> implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'header-text',
            'disabled',
            'mode',
            'bindcancel',
            'start',
            'end',
            'range',
            'range-key',
            'value'
        ];
    }
    private uuid: string;
    private _value: Object = '';
    private _initialValue: Object = '';
    private _initialValueFlag = false;
    private readyEventName: string = '';
    private optionsEventName: string = '';
    private cancelEventName: string = '';
    private selectorChangeEventName: string = '';
    private multiSelectorChangeEventName: string = '';
    private timeChangeEventName: string = '';
    private columnChangeEventName: string = '';
    constructor(){
        super();
        this.uuid = `${Date.now()}${Math.floor(Math.random() * 1e7)}`;
        const baseEventName = `uni_action_sheet_${this.uuid}`;
        this.readyEventName = `${baseEventName}_ready`;
        this.optionsEventName = `${baseEventName}_options`;
        this.cancelEventName = `${baseEventName}_cancel`;
        this.selectorChangeEventName = `${baseEventName}_selector_change`;
        this.multiSelectorChangeEventName = `${baseEventName}_multiSelector_change`;
        this.timeChangeEventName = `${baseEventName}_time_change`;
        this.columnChangeEventName = `${baseEventName}_column_change`;
        this.addEventListener('click', ()=>{
            if (this.disabledType) return;
            uni.openDialogPage({
                url: `uni:picker?readyEventName=${this.readyEventName}&optionsEventName=${this.optionsEventName}&cancelEventName=${this.cancelEventName}&selectorChangeEventName=${this.selectorChangeEventName}&multiSelectorChangeEventName=${this.multiSelectorChangeEventName}&timeChangeEventName=${this.timeChangeEventName}&columnChangeEventName=${this.columnChangeEventName}`,
                success (_) {},
                fail (_) {
                    uni.$off(this.readyEventName);
                    uni.$off(this.optionsEventName);
                }
            } as OpenDialogPageOptions);
        });
        uni.$on(this.readyEventName, ()=>{
            this.sendOptions(this.optionsEventName);
        });
        uni.$on(this.cancelEventName, ()=>{
            this.dispatchEvent(new UniPickerCancelEvent());
        });
        uni.$on(this.selectorChangeEventName, (value: number)=>{
            this._value = value;
            this.dispatchEvent(new UniPickerChangeEvent(value));
        });
        uni.$on(this.multiSelectorChangeEventName, (value: number[])=>{
            this._value = value;
            this.dispatchEvent(new UniPickerChangeEvent(value));
        });
        uni.$on(this.timeChangeEventName, (value: string)=>{
            this._value = value;
            this.dispatchEvent(new UniPickerChangeEvent(value));
        });
        uni.$on(this.columnChangeEventName, (column: number, value: number)=>{
            this.dispatchEvent(new UniPickerColumnChangeEvent(column, value));
        });
    }
    sendOptions(eventName: string) {
        let baseParams = new UTSJSONObject({
            headerText: this.headerTextType,
            mode: this.modeType
        });
        switch(this.modeType){
            case 'selector':
                baseParams["range"] = this.rangeType;
                baseParams["rangeKey"] = this.rangeKeyType;
                baseParams["selectorValue"] = this.selectorValue;
                break;
            case 'multiSelector':
                baseParams["range"] = this.rangeType;
                baseParams["rangeKey"] = this.rangeKeyType;
                baseParams["multiSelectorValue"] = this.multiSelectorValue;
                break;
            case 'time':
                baseParams["timeValue"] = this.timeValue;
                baseParams["start"] = this.timeStartVal;
                baseParams["end"] = this.timeEndVal;
                break;
            case 'date':
                baseParams["dateValue"] = this.dateValue;
                baseParams["fields"] = this.fieldsVal;
                baseParams["start"] = this.dateStartVal;
                baseParams["end"] = this.dateEndVal;
        }
        uni.$emit(eventName, baseParams);
    }
    connectedCallback() {}
    disconnectedCallback() {
        uni.$off(this.readyEventName, null);
        uni.$off(this.cancelEventName, null);
        uni.$off(this.selectorChangeEventName, null);
        uni.$off(this.multiSelectorChangeEventName, null);
        uni.$off(this.timeChangeEventName, null);
        uni.$off(this.columnChangeEventName, null);
    }
    attributeChangedCallback(name: string) {
        switch(name){
            case 'value':
                let value: Object = '';
                if (this.modeType == 'selector') {
                    value = this.selectorValue;
                }
                if (this.modeType == 'multiSelector') {
                    value = this.multiSelectorValue;
                    uni.$emit(this.optionsEventName, new UTSJSONObject({
                        range: this.rangeType,
                        rangeKey: this.rangeKeyType,
                        multiSelectorValue: this.multiSelectorValue
                    }));
                }
                if (this.modeType == 'time') {
                    value = this.timeValue;
                }
                if (this.modeType == 'date') {
                    value = this.dateValue;
                }
                if (!this._initialValueFlag) {
                    this._initialValueFlag = true;
                    this._initialValue = value;
                }
                this._value = value;
                break;
        }
    }
    get value(): Object {
        return this._value;
    }
    reset() {
        this._value = this._initialValue;
    }
    get headerTextType() {
        return this.getAttribute('header-text') as string ?? '';
    }
    get disabledType() {
        const disabled = this.getAttribute('disabled') as string;
        if (disabled == null) {
            return false;
        }
        return disabled == 'true' || disabled == '' ? true : false;
    }
    get modeType() {
        return this.getAttribute('mode') as string ?? 'selector';
    }
    get rangeType() {
        let range = this.getAnyAttribute('range');
        return range ?? [];
    }
    get rangeKeyType() {
        return this.getAttribute('range-key') ?? '';
    }
    get selectorValue(): number {
        return Number(this.getAttribute('value') ?? 0);
    }
    get multiSelectorValue() {
        let value = this.getAnyAttribute('value');
        return value ?? [];
    }
    get timeValue() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeArray = [
            hours,
            minutes
        ];
        let time = this.getAttribute('value');
        let val: string[];
        if (time) {
            let timeval = time.split(':');
            if (time.length < 2) {
                val = timeArray;
            } else {
                val = this.formatteTime(timeval);
            }
        } else {
            val = timeArray;
        }
        return val;
    }
    get timeStartVal() {
        return this.parseStartAndEndTime('start');
    }
    get timeEndVal() {
        return this.parseStartAndEndTime('end');
    }
    get dateStartVal() {
        return this.parseStartAndEndDate('start');
    }
    get dateEndVal() {
        return this.parseStartAndEndDate('end');
    }
    get dateValue() {
        const today = this.parseTime(new Date());
        let date = this.getAttribute('value');
        let date_data: string[] = [];
        if (date != '' && date != null) {
            let date_val = date.split('-') as string[];
            while(date_val.length < 3){
                date_val.push('1');
            }
            const year = Number(date_val[0]);
            if (year < 1900 || year > 2100) {
                date_val[0] = "2001";
            }
            try {
                const year = Number(date_val[0]);
                const month = Number(date_val[1]);
                const day = Number(date_val[2]);
                date_data = this.parseTime(new Date(year, month - 1, day));
            } catch (_) {
                date_data = today;
            }
        } else {
            date_data = today;
        }
        return date_data;
    }
    get fieldsVal() {
        return this.getAttribute('fields') ?? 'day';
    }
    formatteTime(time: string[]): string[] {
        const formattedHours = String(time[0]).padStart(2, '0');
        const formattedMinutes = String(time[1]).padStart(2, '0');
        return [
            formattedHours,
            formattedMinutes
        ];
    }
    parseTime(date: Date): string[] {
        const year = date.getFullYear().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return [
            year,
            month,
            day
        ];
    }
    parseStartAndEndTime(timeStr: string): string[] {
        let time = this.getAttribute(timeStr);
        let defualtVal = [
            '00',
            '00'
        ];
        if (timeStr == 'end') {
            defualtVal = [
                '23',
                '59'
            ];
        }
        let val: string[];
        if (time) {
            let timeval = time.split(':');
            if (time.length < 2) {
                val = defualtVal;
            } else {
                val = this.formatteTime(timeval);
            }
        } else {
            return defualtVal;
        }
        return val;
    }
    parseStartAndEndDate(type: 'start' | 'end'): string[] {
        let dateStr = this.getAttribute(type);
        const defaultDate = type == 'start' ? [
            '1970',
            '01',
            '01'
        ] : [
            '2099',
            '12',
            '31'
        ];
        if (dateStr == null || dateStr.length == 0) return defaultDate;
        const parts = dateStr.split('-');
        if (parts.length != 3) return defaultDate;
        const formatPart = (value: string, length: number): string =>{
            return value.padStart(length, '0').slice(0, length);
        };
        const year = formatPart(parts[0], 4);
        const month = formatPart(parts[1], 2);
        const day = formatPart(parts[2], 2);
        return [
            year,
            month,
            day
        ];
    }
}
export { UniPickerCancelEvent as UniPickerCancelEvent };
export { UniPickerChangeEvent as UniPickerChangeEvent };
export { UniPickerColumnChangeEvent as UniPickerColumnChangeEvent };
export { UniPickerElement as UniPickerElement };
