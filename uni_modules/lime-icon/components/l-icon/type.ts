// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif

export interface IconProps {
	name : string;
	color ?: string;
	size ?: string | number;
	prefix : string;
	inherit : boolean;
	web : boolean;
	lClass ?: string | UTSJSONObject;
	lStyle ?: string | UTSJSONObject;
}