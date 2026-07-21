export declare type UniMapUpdatedEventDetail = { }
export declare class UniMapUpdatedEvent extends UniCustomEvent<UniMapUpdatedEventDetail> {
  constructor(type: string, detail: UniMapUpdatedEventDetail)
}

export declare type UniMapTapEventDetail = {
  latitude: number | null
  longitude: number | null
}
export declare class UniMapTapEvent extends UniPointerEvent {
  detail ?: UniMapTapEventDetail | null
  constructor(type : string, x : number, y : number, clientX : number, clientY : number, pageX : number, pageY : number, screenX : number, screenY : number)
}

export declare type UniMapRegionChangeEventDetail = {
  skew: number | null
  rotate: number | null
}
export declare class UniMapRegionChangeEvent extends UniCustomEvent<UniMapRegionChangeEventDetail | null> {
  causedBy?: string | null
  constructor(type: string, detail: UniMapRegionChangeEventDetail | null)
}

export declare type UniMapMarkerTapEventDetail = {
  markerId: number | null
}
export declare class UniMapMarkerTapEvent extends UniPointerEvent {
  detail ?: UniMapMarkerTapEventDetail | null
  constructor(type : string, x : number, y : number, clientX : number, clientY : number, pageX : number, pageY : number, screenX : number, screenY : number)
}

export declare type UniMapControlTapEventDetail = {
  controlId: number | null
}
export declare class UniMapControlTapEvent extends UniCustomEvent<UniMapControlTapEventDetail> {
  constructor(type: string, detail: UniMapControlTapEventDetail)
}

export declare type UniMapAnchorPointTapEventDetail = {
  latitude: number | null
  longitude: number | null
}
export declare class UniMapAnchorPointTapEvent extends UniPointerEvent {
  detail ?: UniMapAnchorPointTapEventDetail | null
  constructor(type : string, x : number, y : number, clientX : number, clientY : number, pageX : number, pageY : number, screenX : number, screenY : number)
}

export declare type UniMapPoiTapEventDetail = {
  latitude: number | null
  longitude: number | null
  name: string | null
}
export declare class UniMapPoiTapEvent extends UniPointerEvent {
  detail ?: UniMapPoiTapEventDetail | null
  constructor(type : string, x : number, y : number, clientX : number, clientY : number, pageX : number, pageY : number, screenX : number, screenY : number)
}

export declare type UniMapCalloutTapEventDetail = {
	markerId : number | null;
}
export declare class UniMapCalloutTapEvent extends UniCustomEvent<UniMapCalloutTapEventDetail> {
	constructor(type : string, detail : UniMapCalloutTapEventDetail)
}