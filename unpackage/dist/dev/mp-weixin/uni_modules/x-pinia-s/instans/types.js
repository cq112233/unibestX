"use strict";
const common_vendor = require("../../../common/vendor.js");
class SubscriptionMutation extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: false },
          storeId: { type: String, optional: false },
          payload: { type: "Unknown", optional: true },
          timestamp: { type: Number, optional: false }
        };
      },
      name: "SubscriptionMutation"
    };
  }
  constructor(options, metadata = SubscriptionMutation.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.storeId = this.__props__.storeId;
    this.payload = this.__props__.payload;
    this.timestamp = this.__props__.timestamp;
    delete this.__props__;
  }
}
class ActionContext extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          storeId: { type: String, optional: false },
          args: { type: "Unknown", optional: false }
        };
      },
      name: "ActionContext"
    };
  }
  constructor(options, metadata = ActionContext.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.storeId = this.__props__.storeId;
    this.args = this.__props__.args;
    delete this.__props__;
  }
}
class PiniaPluginContext extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          pinia: { type: "Unknown", optional: false },
          storeId: { type: String, optional: false },
          store: { type: "Any", optional: false },
          state: { type: "Any", optional: false }
        };
      },
      name: "PiniaPluginContext"
    };
  }
  constructor(options, metadata = PiniaPluginContext.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.pinia = this.__props__.pinia;
    this.storeId = this.__props__.storeId;
    this.store = this.__props__.store;
    this.state = this.__props__.state;
    delete this.__props__;
  }
}
class PersistSerializer extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          serialize: { type: "Unknown", optional: false },
          deserialize: { type: "Unknown", optional: false }
        };
      },
      name: "PersistSerializer"
    };
  }
  constructor(options, metadata = PersistSerializer.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.serialize = this.__props__.serialize;
    this.deserialize = this.__props__.deserialize;
    delete this.__props__;
  }
}
class PersistOptions extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          keyPrefix: { type: String, optional: false },
          includeStores: { type: "Unknown", optional: true },
          excludeStores: { type: "Unknown", optional: false },
          serializer: { type: PersistSerializer, optional: true }
        };
      },
      name: "PersistOptions"
    };
  }
  constructor(options, metadata = PersistOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.keyPrefix = this.__props__.keyPrefix;
    this.includeStores = this.__props__.includeStores;
    this.excludeStores = this.__props__.excludeStores;
    this.serializer = this.__props__.serializer;
    delete this.__props__;
  }
}
exports.ActionContext = ActionContext;
exports.PersistOptions = PersistOptions;
exports.PersistSerializer = PersistSerializer;
exports.PiniaPluginContext = PiniaPluginContext;
exports.SubscriptionMutation = SubscriptionMutation;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/x-pinia-s/instans/types.js.map
