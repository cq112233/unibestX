export declare class NativeCalendarOptions {
    title: string;
    startTime: number;
    endTime: number;
    allDay: boolean;
    notes: string | null;
    location: string | null;
    alarm: boolean;
    alarmOffset: number | null;
    repeatInterval: string | null;
    repeatEndTime: number | null;
    constructor(title: string, startTime: number, endTime: number, allDay: boolean, notes: string | null, location: string | null, alarm: boolean, alarmOffset: number | null, repeatInterval: string | null, repeatEndTime: number | null);
}
export declare class CalendarNative {
    private static toReminderMinutes;
    static addEvent(options: NativeCalendarOptions): Promise<number>;
    static editEvent(options: NativeCalendarOptions): Promise<number>;
    private static createEvent;
    private static isCanceled;
    private static mapFrequency;
}
