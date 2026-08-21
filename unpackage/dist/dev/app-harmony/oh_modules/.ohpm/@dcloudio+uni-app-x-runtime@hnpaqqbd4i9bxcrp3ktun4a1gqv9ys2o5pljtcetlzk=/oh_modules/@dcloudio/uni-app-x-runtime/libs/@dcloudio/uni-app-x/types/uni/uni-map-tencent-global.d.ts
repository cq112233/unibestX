import {
  UniMapUpdatedEvent as UniMapUpdatedEventOrigin,
  UniMapTapEvent as UniMapTapEventOrigin,
  UniMapRegionChangeEvent as UniMapRegionChangeEventOrigin,
  UniMapMarkerTapEvent as UniMapMarkerTapEventOrigin,
  UniMapControlTapEvent as UniMapControlTapEventOrigin,
  UniMapAnchorPointTapEvent as UniMapAnchorPointTapEventOrigin,
  UniMapPoiTapEvent as UniMapPoiTapEventOrigin,
  UniMapCalloutTapEvent as UniMapCalloutTapEventOrigin,
  UniMapUpdatedEventDetail as UniMapUpdatedEventDetailOrigin,
  UniMapTapEventDetail as UniMapTapEventDetailOrigin,
  UniMapRegionChangeEventDetail as UniMapRegionChangeEventDetailOrigin,
  UniMapMarkerTapEventDetail as UniMapMarkerTapEventDetailOrigin,
  UniMapControlTapEventDetail as UniMapControlTapEventDetailOrigin,
  UniMapAnchorPointTapEventDetail as UniMapAnchorPointTapEventDetailOrigin,
  UniMapPoiTapEventDetail as UniMapPoiTapEventDetailOrigin,
  UniMapCalloutTapEventDetail as UniMapCalloutTapEventDetailOrigin
} from "./uni-map-tencent-map"

declare global {
  type UniMapUpdatedEvent = UniMapUpdatedEventOrigin
  type UniMapTapEvent = UniMapTapEventOrigin
  type UniMapRegionChangeEvent = UniMapRegionChangeEventOrigin
  type UniMapMarkerTapEvent = UniMapMarkerTapEventOrigin
  type UniMapControlTapEvent = UniMapControlTapEventOrigin
  type UniMapAnchorPointTapEvent = UniMapAnchorPointTapEventOrigin
  type UniMapPoiTapEvent = UniMapPoiTapEventOrigin
  type UniMapCalloutTapEvent = UniMapCalloutTapEventOrigin
  type UniMapUpdatedEventDetail = UniMapUpdatedEventDetailOrigin
  type UniMapTapEventDetail = UniMapTapEventDetailOrigin
  type UniMapRegionChangeEventDetail = UniMapRegionChangeEventDetailOrigin
  type UniMapMarkerTapEventDetail = UniMapMarkerTapEventDetailOrigin
  type UniMapControlTapEventDetail = UniMapControlTapEventDetailOrigin
  type UniMapAnchorPointTapEventDetail = UniMapAnchorPointTapEventDetailOrigin
  type UniMapPoiTapEventDetail = UniMapPoiTapEventDetailOrigin
  type UniMapCalloutTapEventDetail = UniMapCalloutTapEventDetailOrigin
}
