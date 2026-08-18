import { CalendarNative, NativeCalendarOptions } from "./CalendarNative";
import { IUniError, UTSObject, UTS, UniError, UTSJSONObject } from "@dcloudio/uni-app-framework";
type CalendarRepeatInterval = 'day' | 'week' | 'month' | 'year';
type CalendarErrorCode = 601 | 602 | 603 | 604 | 606 | 607 | 608 | 609;
interface ICalendarError extends IUniError {
    errCode: CalendarErrorCode;
}
interface IAddPhoneCalendarFail extends ICalendarError {
}
interface IAddPhoneRepeatCalendarFail extends ICalendarError {
}
class AddPhoneCalendarSuccess extends UTSObject {
    errMsg: string | null = null;
}
type AddPhoneCalendarFail = IAddPhoneCalendarFail;
type AddPhoneCalendarSuccessCallback = (res: AddPhoneCalendarSuccess) => void;
type AddPhoneCalendarFailCallback = (res: AddPhoneCalendarFail) => void;
type AddPhoneCalendarComplete = AddPhoneCalendarSuccess | AddPhoneCalendarFail;
type AddPhoneCalendarCompleteCallback = (res: AddPhoneCalendarComplete) => void;
class AddPhoneRepeatCalendarSuccess extends UTSObject {
    errMsg: string | null = null;
}
type AddPhoneRepeatCalendarFail = IAddPhoneRepeatCalendarFail;
type AddPhoneRepeatCalendarSuccessCallback = (res: AddPhoneRepeatCalendarSuccess) => void;
type AddPhoneRepeatCalendarFailCallback = (res: AddPhoneRepeatCalendarFail) => void;
type AddPhoneRepeatCalendarComplete = AddPhoneRepeatCalendarSuccess | AddPhoneRepeatCalendarFail;
type AddPhoneRepeatCalendarCompleteCallback = (res: AddPhoneRepeatCalendarComplete) => void;
class AddPhoneCalendarOptions extends UTSObject {
    title!: string;
    startTime!: number;
    allDay: boolean | null = null;
    notes: string | null = null;
    location: string | null = null;
    endTime: number | null = null;
    alarm: boolean | null = null;
    alarmOffset: number | null = null;
    path: string | null = null;
    signature: string | null = null;
    success: AddPhoneCalendarSuccessCallback | null = null;
    fail: AddPhoneCalendarFailCallback | null = null;
    complete: AddPhoneCalendarCompleteCallback | null = null;
}
class AddPhoneRepeatCalendarOptions extends UTSObject {
    title!: string;
    startTime!: number;
    allDay: boolean | null = null;
    notes: string | null = null;
    location: string | null = null;
    endTime: number | null = null;
    alarm: boolean | null = null;
    alarmOffset: number | null = null;
    path: string | null = null;
    signature: string | null = null;
    repeatInterval!: CalendarRepeatInterval;
    repeatEndTime: number | null = null;
    success: AddPhoneRepeatCalendarSuccessCallback | null = null;
    fail: AddPhoneRepeatCalendarFailCallback | null = null;
    complete: AddPhoneRepeatCalendarCompleteCallback | null = null;
}
type AddPhoneCalendar = (options: AddPhoneCalendarOptions) => void;
type AddPhoneRepeatCalendar = (options: AddPhoneRepeatCalendarOptions) => void;
class NormalizedCalendarOptions extends UTSObject {
    title!: string;
    startTime!: number;
    endTime!: number;
    allDay!: boolean;
    notes: string | null = null;
    location: string | null = null;
    alarm!: boolean;
    alarmOffset: number | null = null;
    path: string | null = null;
    repeatInterval: CalendarRepeatInterval | null = null;
    repeatEndTime: number | null = null;
}
function hasText(value: string | null): boolean {
    return value != null && value.length > 0;
}
function appendDescriptionLine(lines: Array<string>, value: string | null): Array<string> {
    let set = lines;
    if (hasText(value)) {
        set.push(value as string);
    }
    return set;
}
function buildCalendarDescription(description: string | null, path: string | null): string | null {
    let lines = new Array<string>();
    lines = appendDescriptionLine(lines, description);
    if (hasText(path)) {
        lines.push('[source]');
        lines.push(`path: ${path as string}`);
    }
    if (lines.length == 0) {
        return null;
    }
    return lines.join('\n');
}
function validateBaseOptions(options: AddPhoneCalendarOptions): CalendarErrorCode | null {
    if (options.title.length == 0) {
        return 601;
    }
    if (options.startTime <= 0) {
        return 602;
    }
    if (options.endTime != null && options.endTime! < options.startTime) {
        return 603;
    }
    if (options.alarmOffset != null && options.alarm != true) {
        return 604;
    }
    return null;
}
function validateRepeatOptions(options: AddPhoneRepeatCalendarOptions): CalendarErrorCode | null {
    if (options.title.length == 0) {
        return 601;
    }
    if (options.startTime <= 0) {
        return 602;
    }
    if (options.endTime != null && options.endTime! < options.startTime) {
        return 603;
    }
    if (options.alarmOffset != null && options.alarm != true) {
        return 604;
    }
    if (options.repeatEndTime != null && options.repeatEndTime! < options.startTime) {
        return 606;
    }
    if (options.repeatInterval == 'month') {
        const day = new Date(options.startTime).getDate();
        if (day > 28) {
            return 606;
        }
    }
    return null;
}
function normalizeCalendarOptions(options: AddPhoneCalendarOptions): NormalizedCalendarOptions {
    const allDay = options.allDay == true;
    const startTime = options.startTime!;
    let endTime = options.endTime != null ? options.endTime! : 0;
    if (endTime <= 0) {
        endTime = allDay ? startTime + 86400000 : startTime + 3600000;
    }
    return {
        title: options.title,
        startTime: startTime,
        endTime: endTime,
        allDay: allDay,
        notes: buildCalendarDescription(options.notes ?? null, options.path ?? null),
        location: options.location ?? null,
        alarm: options.alarm == true,
        alarmOffset: options.alarm == true ? options.alarmOffset != null ? options.alarmOffset : 0 : null,
        path: options.path ?? null,
        repeatInterval: null,
        repeatEndTime: null
    } as NormalizedCalendarOptions;
}
function normalizeRepeatCalendarOptions(options: AddPhoneRepeatCalendarOptions): NormalizedCalendarOptions {
    const allDay = options.allDay == true;
    const startTime = options.startTime!;
    let endTime = options.endTime != null ? options.endTime! : 0;
    if (endTime <= 0) {
        endTime = allDay ? startTime + 86400000 : startTime + 3600000;
    }
    return {
        title: options.title,
        startTime: startTime,
        endTime: endTime,
        allDay: allDay,
        notes: buildCalendarDescription(options.notes ?? null, options.path ?? null),
        location: options.location ?? null,
        alarm: options.alarm == true,
        alarmOffset: options.alarm == true ? options.alarmOffset != null ? options.alarmOffset : 0 : null,
        path: options.path ?? null,
        repeatInterval: options.repeatInterval,
        repeatEndTime: options.repeatEndTime ?? null
    } as NormalizedCalendarOptions;
}
const CalendarUniErrorSubject = 'uni-calendar';
const CalendarUniErrors: Map<number, string> = new Map([
    [
        601,
        'title is required'
    ],
    [
        602,
        'startTime is invalid'
    ],
    [
        603,
        'endTime is invalid'
    ],
    [
        604,
        'alarmOffset requires alarm'
    ],
    [
        606,
        'repeat rule is invalid'
    ],
    [
        607,
        'calendar service is unavailable'
    ],
    [
        608,
        'add calendar event failed'
    ],
    [
        609,
        'calendar creation canceled'
    ]
]);
function getCalendarErrorMessage(errCode: CalendarErrorCode): string {
    return UTS.mapGet(CalendarUniErrors, errCode) ?? '';
}
class AddPhoneCalendarFailImpl extends UniError implements IAddPhoneCalendarFail {
    errCode: CalendarErrorCode;
    constructor(errCode: CalendarErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = CalendarUniErrorSubject;
        this.errMsg = getCalendarErrorMessage(errCode);
    }
}
class AddPhoneRepeatCalendarFailImpl extends UniError implements IAddPhoneRepeatCalendarFail {
    errCode: CalendarErrorCode;
    constructor(errCode: CalendarErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = CalendarUniErrorSubject;
        this.errMsg = getCalendarErrorMessage(errCode);
    }
}
function createAddPhoneCalendarFail(errCode: CalendarErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): AddPhoneCalendarFailImpl {
    const fail = new AddPhoneCalendarFailImpl(errCode);
    if (errMsg != null) {
        fail.errMsg = errMsg;
    }
    fail.data = data;
    if (cause != null) {
        fail.cause = cause;
    }
    return fail;
}
function createAddPhoneRepeatCalendarFail(errCode: CalendarErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): AddPhoneRepeatCalendarFailImpl {
    const fail = new AddPhoneRepeatCalendarFailImpl(errCode);
    if (errMsg != null) {
        fail.errMsg = errMsg;
    }
    fail.data = data;
    if (cause != null) {
        fail.cause = cause;
    }
    return fail;
}
function createAddPhoneCalendarSuccess(errMsg: string): AddPhoneCalendarSuccess {
    return {
        errMsg: errMsg
    } as AddPhoneCalendarSuccess;
}
function createAddPhoneRepeatCalendarSuccess(errMsg: string): AddPhoneRepeatCalendarSuccess {
    return {
        errMsg: errMsg
    } as AddPhoneRepeatCalendarSuccess;
}
function callCalendarSuccess(options: AddPhoneCalendarOptions, errMsg: string): void {
    const result = createAddPhoneCalendarSuccess(errMsg);
    options.success?.(result);
    options.complete?.(result);
}
function callRepeatSuccess(options: AddPhoneRepeatCalendarOptions, errMsg: string): void {
    const result = createAddPhoneRepeatCalendarSuccess(errMsg);
    options.success?.(result);
    options.complete?.(result);
}
function callCalendarFail(options: AddPhoneCalendarOptions, fail: AddPhoneCalendarFail): void {
    options.fail?.(fail);
    options.complete?.(fail);
}
function callRepeatFail(options: AddPhoneRepeatCalendarOptions, fail: AddPhoneRepeatCalendarFail): void {
    options.fail?.(fail);
    options.complete?.(fail);
}
function mapAddPhoneCalendarNativeCode(code: number): AddPhoneCalendarFail {
    if (code == 509) {
        return createAddPhoneCalendarFail(609, 'addPhoneCalendar:fail cancel', new UTSJSONObject({
            platformCode: code
        }));
    }
    let errCode: CalendarErrorCode = 608;
    if (code == 501) {
        errCode = 607;
    }
    return createAddPhoneCalendarFail(errCode, 'addPhoneCalendar:fail', new UTSJSONObject({
        platformCode: code
    }));
}
function mapAddPhoneRepeatCalendarNativeCode(code: number): AddPhoneRepeatCalendarFail {
    if (code == 509) {
        return createAddPhoneRepeatCalendarFail(609, 'addPhoneRepeatCalendar:fail cancel', new UTSJSONObject({
            platformCode: code
        }));
    }
    let errCode: CalendarErrorCode = 608;
    if (code == 501) {
        errCode = 607;
    }
    return createAddPhoneRepeatCalendarFail(errCode, 'addPhoneRepeatCalendar:fail', new UTSJSONObject({
        platformCode: code
    }));
}
function toNativeOptions(normalized: NormalizedCalendarOptions): NativeCalendarOptions {
    return new NativeCalendarOptions(normalized.title, normalized.startTime, normalized.endTime, normalized.allDay, normalized.notes, normalized.location, normalized.alarm, normalized.alarmOffset, normalized.repeatInterval, normalized.repeatEndTime);
}
function performAddCalendarByEditor(options: AddPhoneCalendarOptions, normalized: NormalizedCalendarOptions, action: string): void {
    const nativeOptions = toNativeOptions(normalized);
    CalendarNative.editEvent(nativeOptions).then((code: number)=>{
        if (code != 0) {
            callCalendarFail(options, mapAddPhoneCalendarNativeCode(code));
            return null;
        }
        callCalendarSuccess(options, `${action}:ok`);
        return null;
    }, (_: Error | null)=>{
        callCalendarFail(options, createAddPhoneCalendarFail(608, `${action}:fail harmony native rejected`));
        return null;
    });
}
function performAddCalendar(options: AddPhoneCalendarOptions, normalized: NormalizedCalendarOptions, action: string): void {
    performAddCalendarByEditor(options, normalized, action);
}
function performAddRepeatByEditor(options: AddPhoneRepeatCalendarOptions, normalized: NormalizedCalendarOptions, action: string): void {
    const nativeOptions = toNativeOptions(normalized);
    CalendarNative.editEvent(nativeOptions).then((code: number)=>{
        if (code != 0) {
            callRepeatFail(options, mapAddPhoneRepeatCalendarNativeCode(code));
            return null;
        }
        callRepeatSuccess(options, `${action}:ok`);
        return null;
    }, (_: Error | null)=>{
        callRepeatFail(options, createAddPhoneRepeatCalendarFail(608, `${action}:fail harmony native rejected`));
        return null;
    });
}
function performAddRepeat(options: AddPhoneRepeatCalendarOptions, normalized: NormalizedCalendarOptions, action: string): void {
    performAddRepeatByEditor(options, normalized, action);
}
function addPhoneCalendar(options: AddPhoneCalendarOptions): void {
    const error = validateBaseOptions(options);
    if (error != null) {
        callCalendarFail(options, createAddPhoneCalendarFail(error, null));
        return;
    }
    performAddCalendar(options, normalizeCalendarOptions(options), 'addPhoneCalendar');
}
function addPhoneRepeatCalendar(options: AddPhoneRepeatCalendarOptions): void {
    const error = validateRepeatOptions(options);
    if (error != null) {
        callRepeatFail(options, createAddPhoneRepeatCalendarFail(error, null));
        return;
    }
    performAddRepeat(options, normalizeRepeatCalendarOptions(options), 'addPhoneRepeatCalendar');
}
export { AddPhoneCalendarOptions as AddPhoneCalendarOptions, AddPhoneRepeatCalendarOptions as AddPhoneRepeatCalendarOptions, AddPhoneCalendarSuccess as AddPhoneCalendarSuccess, AddPhoneCalendarSuccessCallback as AddPhoneCalendarSuccessCallback, AddPhoneCalendarFail as AddPhoneCalendarFail, AddPhoneCalendarFailCallback as AddPhoneCalendarFailCallback, AddPhoneCalendarComplete as AddPhoneCalendarComplete, AddPhoneCalendarCompleteCallback as AddPhoneCalendarCompleteCallback, AddPhoneRepeatCalendarSuccess as AddPhoneRepeatCalendarSuccess, AddPhoneRepeatCalendarSuccessCallback as AddPhoneRepeatCalendarSuccessCallback, AddPhoneRepeatCalendarFail as AddPhoneRepeatCalendarFail, AddPhoneRepeatCalendarFailCallback as AddPhoneRepeatCalendarFailCallback, AddPhoneRepeatCalendarComplete as AddPhoneRepeatCalendarComplete, AddPhoneRepeatCalendarCompleteCallback as AddPhoneRepeatCalendarCompleteCallback, CalendarErrorCode as CalendarErrorCode, CalendarRepeatInterval as CalendarRepeatInterval, ICalendarError as ICalendarError, AddPhoneCalendar as AddPhoneCalendar, AddPhoneRepeatCalendar as AddPhoneRepeatCalendar };
export { IAddPhoneCalendarFail as IAddPhoneCalendarFail, IAddPhoneRepeatCalendarFail as IAddPhoneRepeatCalendarFail };
export { addPhoneCalendar as addPhoneCalendar };
export { addPhoneRepeatCalendar as addPhoneRepeatCalendar };
