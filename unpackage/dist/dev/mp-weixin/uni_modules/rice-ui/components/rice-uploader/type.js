"use strict";
const common_vendor = require("../../../../common/vendor.js");
class UploaderFileItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          url: { type: String, optional: false },
          poster: { type: String, optional: true },
          fileName: { type: String, optional: true },
          status: { type: "Unknown", optional: true },
          fileType: { type: String, optional: true },
          message: { type: String, optional: true },
          percent: { type: Number, optional: true },
          size: { type: Number, optional: true },
          duration: { type: Number, optional: true },
          deletable: { type: Boolean, optional: true },
          uid: { type: String, optional: true },
          name: { type: String, optional: true },
          action: { type: String, optional: true },
          formData: { type: "Unknown", optional: true },
          header: { type: "Unknown", optional: true }
        };
      },
      name: "UploaderFileItem"
    };
  }
  constructor(options, metadata = UploaderFileItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.url = this.__props__.url;
    this.poster = this.__props__.poster;
    this.fileName = this.__props__.fileName;
    this.status = this.__props__.status;
    this.fileType = this.__props__.fileType;
    this.message = this.__props__.message;
    this.percent = this.__props__.percent;
    this.size = this.__props__.size;
    this.duration = this.__props__.duration;
    this.deletable = this.__props__.deletable;
    this.uid = this.__props__.uid;
    this.name = this.__props__.name;
    this.action = this.__props__.action;
    this.formData = this.__props__.formData;
    this.header = this.__props__.header;
    delete this.__props__;
  }
}
class UploaderSuccess extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          statusCode: { type: Number, optional: false },
          data: { type: String, optional: false },
          file: { type: UploaderFileItem, optional: false }
        };
      },
      name: "UploaderSuccess"
    };
  }
  constructor(options, metadata = UploaderSuccess.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.statusCode = this.__props__.statusCode;
    this.data = this.__props__.data;
    this.file = this.__props__.file;
    delete this.__props__;
  }
}
class UploaderFail extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          errCode: { type: Number, optional: false },
          statusCode: { type: Number, optional: false },
          data: { type: "Any", optional: true },
          errMsg: { type: String, optional: false },
          file: { type: UploaderFileItem, optional: false }
        };
      },
      name: "UploaderFail"
    };
  }
  constructor(options, metadata = UploaderFail.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.errCode = this.__props__.errCode;
    this.statusCode = this.__props__.statusCode;
    this.data = this.__props__.data;
    this.errMsg = this.__props__.errMsg;
    this.file = this.__props__.file;
    delete this.__props__;
  }
}
class UploaderComplete extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          successList: { type: common_vendor.UTS.UTSType.withGenerics(Array, [UploaderSuccess]), optional: false },
          failList: { type: common_vendor.UTS.UTSType.withGenerics(Array, [UploaderFail]), optional: false }
        };
      },
      name: "UploaderComplete"
    };
  }
  constructor(options, metadata = UploaderComplete.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.successList = this.__props__.successList;
    this.failList = this.__props__.failList;
    delete this.__props__;
  }
}
class UploaderProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          action: { type: String, optional: true },
          accept: { type: "Unknown", optional: true },
          autoUpload: { type: Boolean, optional: true },
          name: { type: String, optional: true },
          header: { type: "Unknown", optional: true },
          formData: { type: "Unknown", optional: true },
          timeout: { type: Number, optional: true },
          maxCount: { type: Number, optional: true },
          maxDuration: { type: Number, optional: true },
          showFileList: { type: Boolean, optional: true },
          preview: { type: Boolean, optional: true },
          imageMode: { type: String, optional: true },
          objectFit: { type: String, optional: true },
          uploadIcon: { type: String, optional: true },
          uploadIconStyle: { type: "Unknown", optional: true },
          uploadText: { type: String, optional: true },
          loadingText: { type: String, optional: true },
          uploadFailText: { type: String, optional: true },
          showPercent: { type: Boolean, optional: true },
          showSuccess: { type: Boolean, optional: true },
          deletable: { type: Boolean, optional: true },
          deleteIcon: { type: String, optional: true },
          deleteIconStyle: { type: "Unknown", optional: true },
          width: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          camera: { type: String, optional: true },
          pageOrientation: { type: String, optional: true },
          uploadIconSize: { type: "Unknown", optional: true },
          deleteStyle: { type: "Unknown", optional: true },
          sizeType: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: true },
          sourceType: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: true },
          extension: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: true },
          successCode: { type: Number, optional: true },
          beforeRead: { type: "Unknown", optional: true },
          afterRead: { type: "Unknown", optional: true },
          beforeUpload: { type: "Unknown", optional: true },
          beforeRemove: { type: "Unknown", optional: true },
          onSuccess: { type: "Unknown", optional: true },
          onFail: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "UploaderProps"
    };
  }
  constructor(options, metadata = UploaderProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.action = this.__props__.action;
    this.accept = this.__props__.accept;
    this.autoUpload = this.__props__.autoUpload;
    this.name = this.__props__.name;
    this.header = this.__props__.header;
    this.formData = this.__props__.formData;
    this.timeout = this.__props__.timeout;
    this.maxCount = this.__props__.maxCount;
    this.maxDuration = this.__props__.maxDuration;
    this.showFileList = this.__props__.showFileList;
    this.preview = this.__props__.preview;
    this.imageMode = this.__props__.imageMode;
    this.objectFit = this.__props__.objectFit;
    this.uploadIcon = this.__props__.uploadIcon;
    this.uploadIconStyle = this.__props__.uploadIconStyle;
    this.uploadText = this.__props__.uploadText;
    this.loadingText = this.__props__.loadingText;
    this.uploadFailText = this.__props__.uploadFailText;
    this.showPercent = this.__props__.showPercent;
    this.showSuccess = this.__props__.showSuccess;
    this.deletable = this.__props__.deletable;
    this.deleteIcon = this.__props__.deleteIcon;
    this.deleteIconStyle = this.__props__.deleteIconStyle;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.bgColor = this.__props__.bgColor;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.camera = this.__props__.camera;
    this.pageOrientation = this.__props__.pageOrientation;
    this.uploadIconSize = this.__props__.uploadIconSize;
    this.deleteStyle = this.__props__.deleteStyle;
    this.sizeType = this.__props__.sizeType;
    this.sourceType = this.__props__.sourceType;
    this.extension = this.__props__.extension;
    this.successCode = this.__props__.successCode;
    this.beforeRead = this.__props__.beforeRead;
    this.afterRead = this.__props__.afterRead;
    this.beforeUpload = this.__props__.beforeUpload;
    this.beforeRemove = this.__props__.beforeRemove;
    this.onSuccess = this.__props__.onSuccess;
    this.onFail = this.__props__.onFail;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
exports.UploaderComplete = UploaderComplete;
exports.UploaderFail = UploaderFail;
exports.UploaderFileItem = UploaderFileItem;
exports.UploaderSuccess = UploaderSuccess;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-uploader/type.js.map
