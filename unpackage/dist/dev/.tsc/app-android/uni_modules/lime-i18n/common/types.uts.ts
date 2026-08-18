





export type AnyOrNull = any | null;
export type NumberOrNull = number | null;
export type StringOrNull = string | null;

// 定义特定的函数类型别名
export type Interpolate = (key : string, locale : StringOrNull, values : any, visitedLinkStack : string[], interpolateMode : string) => StringOrNull;
export type Link = (str : string, locale : StringOrNull, values : any, visitedLinkStack : string[], interpolateMode : string) => StringOrNull;
export type WarnDefault = (key : string, message : StringOrNull, values : any, interpolateMode : string) => StringOrNull;

export type LinkedModify = (str : string) => string;
export type PluralizationRule = (choice : number, choicesLength : number) => number


export interface Availabilities {
	dateTimeFormat : boolean
	numberFormat : boolean
}

export type Composer = {
	id : number,
	locale : Ref<string>,
	fallbackLocale : ComputedRefImpl<any>,
	messages : Ref<Map<string, UTSJSONObject>>,
	t(key : string, values ?: any, locale ?: string) : string,
	tc(key : string, choice ?: number, values ?: any, locale ?: string) : string,
	d(date : any, key : StringOrNull, locale : StringOrNull, options : UTSJSONObject | null) : string
	n(number : number, key : StringOrNull, locale : StringOrNull, options : UTSJSONObject | null) : string

	setLocaleMessage(locale : string, message : UTSJSONObject) : void,
	getLocaleMessage(locale : string) : UTSJSONObject,
	mergeLocaleMessage(locale : string, message : UTSJSONObject) : void,

	setDateTimeFormat(locale : string, format : UTSJSONObject) : void,
	getDateTimeFormat(locale : string) : UTSJSONObject,
	mergeDateTimeFormat(locale : string, format : UTSJSONObject) : void,

	setNumberFormat(locale : string, format : UTSJSONObject) : void,
	getNumberFormat(locale : string) : UTSJSONObject,
	mergeNumberFormat(locale : string, format : UTSJSONObject) : void,

	setTabBar(locale : string, tabbar : string[]) : void,
	getTabBar(locale : string) : string[],
	// 可用的语言环境列表。
	availableLocales : string[],
	// 可用的功能列表。
	availabilities : Availabilities
}