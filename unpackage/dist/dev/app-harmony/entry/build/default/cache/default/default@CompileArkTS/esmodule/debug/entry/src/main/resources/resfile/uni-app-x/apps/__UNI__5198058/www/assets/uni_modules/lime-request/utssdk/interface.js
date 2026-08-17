class LimeRequestSource extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          url: { type: String, optional: true },
          baseURL: { type: String, optional: true },
          path: { type: String, optional: true },
          method: { type: String, optional: true },
          timestamp: { type: Number, optional: true }
        };
      },
      name: "LimeRequestSource"
    };
  }
  constructor(options, metadata = LimeRequestSource.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.url = this.__props__.url;
    this.baseURL = this.__props__.baseURL;
    this.path = this.__props__.path;
    this.method = this.__props__.method;
    this.timestamp = this.__props__.timestamp;
    delete this.__props__;
  }
}
class LimeRequestFail extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          errCode: { type: Number, optional: false },
          errSubject: { type: String, optional: false },
          data: { type: "Any", optional: true },
          cause: { type: "Unknown", optional: true },
          errMsg: { type: String, optional: false },
          source: { type: LimeRequestSource, optional: true }
        };
      },
      name: "LimeRequestFail"
    };
  }
  constructor(options, metadata = LimeRequestFail.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.errCode = this.__props__.errCode;
    this.errSubject = this.__props__.errSubject;
    this.data = this.__props__.data;
    this.cause = this.__props__.cause;
    this.errMsg = this.__props__.errMsg;
    this.source = this.__props__.source;
    delete this.__props__;
  }
}
class LimeRequestHandler extends UTS.UTSType {
  static get$UTSMetadata$(T) {
    return {
      kind: 2,
      get fields() {
        return {
          fulfilled: { type: "Unknown", optional: false },
          rejected: { type: "Unknown", optional: true }
        };
      },
      name: "LimeRequestHandler"
    };
  }
  constructor(options, metadata = LimeRequestHandler.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.fulfilled = this.__props__.fulfilled;
    this.rejected = this.__props__.rejected;
    delete this.__props__;
  }
}
class LimeReducerFactoryResult extends UTS.UTSType {
  static get$UTSMetadata$(T) {
    return {
      kind: 2,
      get fields() {
        return {
          use: { type: "Unknown", optional: false },
          resolve: { type: "Unknown", optional: false },
          reject: { type: "Unknown", optional: false }
        };
      },
      name: "LimeReducerFactoryResult"
    };
  }
  constructor(options, metadata = LimeReducerFactoryResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.use = this.__props__.use;
    this.resolve = this.__props__.resolve;
    this.reject = this.__props__.reject;
    delete this.__props__;
  }
}
class LimeInterceptors extends UTS.UTSType {
  static get$UTSMetadata$(T, U) {
    return {
      kind: 2,
      get fields() {
        return {
          request: { type: UTS.UTSType.withGenerics(LimeReducerFactoryResult, ["Unknown"]), optional: false },
          response: { type: UTS.UTSType.withGenerics(LimeReducerFactoryResult, ["Unknown"]), optional: false }
        };
      },
      name: "LimeInterceptors"
    };
  }
  constructor(options, metadata = LimeInterceptors.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.request = this.__props__.request;
    this.response = this.__props__.response;
    delete this.__props__;
  }
}
class LimeRequestConfig extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          baseURL: { type: String, optional: true },
          params: { type: "Unknown", optional: true },
          getTask: { type: "Unknown", optional: true },
          data: { type: "Any", optional: true },
          extra: { type: "Unknown", optional: true },
          url: { type: String, optional: true },
          header: { type: "Unknown", optional: true },
          method: { type: "Unknown", optional: true },
          timeout: { type: Number, optional: true },
          dataType: { type: String, optional: true },
          responseType: { type: String, optional: true },
          sslVerify: { type: Boolean, optional: true },
          withCredentials: { type: Boolean, optional: true },
          firstIpv4: { type: Boolean, optional: true },
          enableHttp2: { type: Boolean, optional: true },
          enableQuic: { type: Boolean, optional: true },
          enableCache: { type: Boolean, optional: true },
          enableHttpDNS: { type: Boolean, optional: true },
          httpDNSServiceId: { type: Boolean, optional: true },
          enableChunked: { type: Boolean, optional: true },
          forceCellularNetwork: { type: Boolean, optional: true },
          enableCookie: { type: Boolean, optional: true },
          cloudCache: { type: "Unknown", optional: true },
          defer: { type: Boolean, optional: true },
          files: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: true },
          fileType: { type: "Unknown", optional: true },
          filePath: { type: String, optional: true },
          name: { type: String, optional: true },
          formData: { type: "Unknown", optional: true }
        };
      },
      name: "LimeRequestConfig"
    };
  }
  constructor(options, metadata = LimeRequestConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.baseURL = this.__props__.baseURL;
    this.params = this.__props__.params;
    this.getTask = this.__props__.getTask;
    this.data = this.__props__.data;
    this.extra = this.__props__.extra;
    this.url = this.__props__.url;
    this.header = this.__props__.header;
    this.method = this.__props__.method;
    this.timeout = this.__props__.timeout;
    this.dataType = this.__props__.dataType;
    this.responseType = this.__props__.responseType;
    this.sslVerify = this.__props__.sslVerify;
    this.withCredentials = this.__props__.withCredentials;
    this.firstIpv4 = this.__props__.firstIpv4;
    this.enableHttp2 = this.__props__.enableHttp2;
    this.enableQuic = this.__props__.enableQuic;
    this.enableCache = this.__props__.enableCache;
    this.enableHttpDNS = this.__props__.enableHttpDNS;
    this.httpDNSServiceId = this.__props__.httpDNSServiceId;
    this.enableChunked = this.__props__.enableChunked;
    this.forceCellularNetwork = this.__props__.forceCellularNetwork;
    this.enableCookie = this.__props__.enableCookie;
    this.cloudCache = this.__props__.cloudCache;
    this.defer = this.__props__.defer;
    this.files = this.__props__.files;
    this.fileType = this.__props__.fileType;
    this.filePath = this.__props__.filePath;
    this.name = this.__props__.name;
    this.formData = this.__props__.formData;
    delete this.__props__;
  }
}
export {
  LimeRequestConfig as L,
  LimeRequestFail as a,
  LimeInterceptors as b,
  LimeReducerFactoryResult as c,
  LimeRequestHandler as d
};
//# sourceMappingURL=interface.js.map
