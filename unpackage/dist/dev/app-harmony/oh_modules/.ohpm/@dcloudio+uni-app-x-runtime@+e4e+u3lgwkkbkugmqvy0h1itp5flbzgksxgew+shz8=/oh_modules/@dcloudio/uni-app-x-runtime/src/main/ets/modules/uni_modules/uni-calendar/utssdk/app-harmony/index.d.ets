import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type CalendarRepeatInterval = 'day' | 'week' | 'month' | 'year';
type CalendarErrorCode = 601 | 602 | 603 | 604 | 606 | 607 | 608 | 609;
interface ICalendarError extends IUniError {
    errCode: CalendarErrorCode;
}
interface IAddPhoneCalendarFail extends ICalendarError {
}
interface IAddPhoneRepeatCalendarFail extends ICalendarError {
}
declare class AddPhoneCalendarSuccess extends UTSObject {
    errMsg: string | null;
}
type AddPhoneCalendarFail = IAddPhoneCalendarFail;
type AddPhoneCalendarSuccessCallback = (res: AddPhoneCalendarSuccess) => void;
type AddPhoneCalendarFailCallback = (res: AddPhoneCalendarFail) => void;
type AddPhoneCalendarComplete = AddPhoneCalendarSuccess | AddPhoneCalendarFail;
type AddPhoneCalendarCompleteCallback = (res: AddPhoneCalendarComplete) => void;
declare class AddPhoneRepeatCalendarSuccess extends UTSObject {
    errMsg: string | null;
}
type AddPhoneRepeatCalendarFail = IAddPhoneRepeatCalendarFail;
type AddPhoneRepeatCalendarSuccessCallback = (res: AddPhoneRepeatCalendarSuccess) => void;
type AddPhoneRepeatCalendarFailCallback = (res: AddPhoneRepeatCalendarFail) => void;
type AddPhoneRepeatCalendarComplete = AddPhoneRepeatCalendarSuccess | AddPhoneRepeatCalendarFail;
type AddPhoneRepeatCalendarCompleteCallback = (res: AddPhoneRepeatCalendarComplete) => void;
declare class AddPhoneCalendarOptions extends UTSObject {
    title: string;
    startTime: number;
    allDay: boolean | null;
    notes: string | null;
    location: string | null;
    endTime: number | null;
    alarm: boolean | null;
    alarmOffset: number | null;
    path: string | null;
    signature: string | null;
    success: AddPhoneCalendarSuccessCallback | null;
    fail: AddPhoneCalendarFailCallback | null;
    complete: AddPhoneCalendarCompleteCallback | null;
}
declare class AddPhoneRepeatCalendarOptions extends UTSObject {
    title: string;
    startTime: number;
    allDay: boolean | null;
    notes: string | null;
    location: string | null;
    endTime: number | null;
    alarm: boolean | null;
    alarmOffset: number | null;
    path: string | null;
    signature: string | null;
    repeatInterval: CalendarRepeatInterval;
    repeatEndTime: number | null;
    success: AddPhoneRepeatCalendarSuccessCallback | null;
    fail: AddPhoneRepeatCalendarFailCallback | null;
    complete: AddPhoneRepeatCalendarCompleteCallback | null;
}
type AddPhoneCalendar = (options: AddPhoneCalendarOptions) => void;
type AddPhoneRepeatCalendar = (options: AddPhoneRepeatCalendarOptions) => void;
declare function addPhoneCalendar(options: AddPhoneCalendarOptions): void;
declare function addPhoneRepeatCalendar(options: AddPhoneRepeatCalendarOptions): void;
export { AddPhoneCalendarOptions as AddPhoneCalendarOptions, AddPhoneRepeatCalendarOptions as AddPhoneRepeatCalendarOptions, AddPhoneCalendarSuccess as AddPhoneCalendarSuccess, AddPhoneCalendarSuccessCallback as AddPhoneCalendarSuccessCallback, AddPhoneCalendarFail as AddPhoneCalendarFail, AddPhoneCalendarFailCallback as AddPhoneCalendarFailCallback, AddPhoneCalendarComplete as AddPhoneCalendarComplete, AddPhoneCalendarCompleteCallback as AddPhoneCalendarCompleteCallback, AddPhoneRepeatCalendarSuccess as AddPhoneRepeatCalendarSuccess, AddPhoneRepeatCalendarSuccessCallback as AddPhoneRepeatCalendarSuccessCallback, AddPhoneRepeatCalendarFail as AddPhoneRepeatCalendarFail, AddPhoneRepeatCalendarFailCallback as AddPhoneRepeatCalendarFailCallback, AddPhoneRepeatCalendarComplete as AddPhoneRepeatCalendarComplete, AddPhoneRepeatCalendarCompleteCallback as AddPhoneRepeatCalendarCompleteCallback, CalendarErrorCode as CalendarErrorCode, CalendarRepeatInterval as CalendarRepeatInterval, ICalendarError as ICalendarError, AddPhoneCalendar as AddPhoneCalendar, AddPhoneRepeatCalendar as AddPhoneRepeatCalendar };
export { IAddPhoneCalendarFail as IAddPhoneCalendarFail, IAddPhoneRepeatCalendarFail as IAddPhoneRepeatCalendarFail };
export { addPhoneCalendar as addPhoneCalendar };
export { addPhoneRepeatCalendar as addPhoneRepeatCalendar };
