"use strict";
const common_vendor = require("../../../../common/vendor.js");
class UPUploadListItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          type: { type: String, optional: true },
          status: { type: String, optional: true },
          isImage: { type: Boolean, optional: false },
          isVideo: { type: Boolean, optional: false },
          thumb: { type: String, optional: true },
          url: { type: String, optional: true },
          message: { type: String, optional: true },
          progress: { type: Number, optional: true },
          deletable: { type: Boolean, optional: false },
          index: { type: Number, optional: true },
          width: { type: Number, optional: true },
          height: { type: Number, optional: true }
        };
      },
      name: "UPUploadListItem"
    };
  }
  constructor(options, metadata = UPUploadListItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.type = this.__props__.type;
    this.status = this.__props__.status;
    this.isImage = this.__props__.isImage;
    this.isVideo = this.__props__.isVideo;
    this.thumb = this.__props__.thumb;
    this.url = this.__props__.url;
    this.message = this.__props__.message;
    this.progress = this.__props__.progress;
    this.deletable = this.__props__.deletable;
    this.index = this.__props__.index;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
class UPUploadFileChoosed extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: String, optional: true },
          url: { type: String, optional: true },
          thumb: { type: String, optional: true },
          size: { type: Number, optional: true },
          name: { type: String, optional: true },
          width: { type: Number, optional: true },
          height: { type: Number, optional: true },
          file: { type: "Unknown", optional: true }
        };
      },
      name: "UPUploadFileChoosed"
    };
  }
  constructor(options, metadata = UPUploadFileChoosed.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.url = this.__props__.url;
    this.thumb = this.__props__.thumb;
    this.size = this.__props__.size;
    this.name = this.__props__.name;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.file = this.__props__.file;
    delete this.__props__;
  }
}
class UPUploadChooseFileOptions extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          accept: { type: String, optional: false },
          multiple: { type: Boolean, optional: false },
          capture: { type: "Unknown", optional: false },
          compressed: { type: Boolean, optional: false },
          maxDuration: { type: Number, optional: false },
          sizeType: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          camera: { type: String, optional: false },
          maxCount: { type: Number, optional: false },
          extension: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false }
        };
      },
      name: "UPUploadChooseFileOptions"
    };
  }
  constructor(options, metadata = UPUploadChooseFileOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.accept = this.__props__.accept;
    this.multiple = this.__props__.multiple;
    this.capture = this.__props__.capture;
    this.compressed = this.__props__.compressed;
    this.maxDuration = this.__props__.maxDuration;
    this.sizeType = this.__props__.sizeType;
    this.camera = this.__props__.camera;
    this.maxCount = this.__props__.maxCount;
    this.extension = this.__props__.extension;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-upload/types.js.map
