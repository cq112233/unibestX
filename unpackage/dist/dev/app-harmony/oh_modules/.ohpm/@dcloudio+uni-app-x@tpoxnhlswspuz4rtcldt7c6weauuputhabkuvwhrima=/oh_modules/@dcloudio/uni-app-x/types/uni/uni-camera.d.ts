
export declare type UniCameraStopEventDetail = {
    errorCause?: string | null
}
export declare class UniCameraStopEvent extends UniCustomEvent<UniCameraStopEventDetail> {
    constructor(type: string, detail: UniCameraStopEventDetail)
}


export declare type UniCameraErrorEventDetail = {
    msg?: string | null
}
export declare class UniCameraErrorEvent extends UniCustomEvent<UniCameraErrorEventDetail> {
    constructor(type: string, detail: UniCameraErrorEventDetail)
}


export declare type UniCameraInitDoneEventDetail = {
    maxZoom?: number | null
}
export declare class UniCameraInitDoneEvent extends UniCustomEvent<UniCameraInitDoneEventDetail> {
    constructor(type: string, detail: UniCameraInitDoneEventDetail)
}

export declare type UniCameraScanCodeEventDetail = {
	type?: string | null;
	result?: string | null;
	rawData?: string | null;
	charSet?: string | null;
    scanArea?: Array<number> | null;
}

export declare class UniCameraScanCodeEvent extends UniCustomEvent<UniCameraScanCodeEventDetail> {
	constructor(type : string, detail : UniCameraScanCodeEventDetail)
}
