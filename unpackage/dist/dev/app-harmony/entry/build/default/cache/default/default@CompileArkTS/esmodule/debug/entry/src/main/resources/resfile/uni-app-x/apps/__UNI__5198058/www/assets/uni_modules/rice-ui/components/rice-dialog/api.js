import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-dialog/type&";
import { g as getUID } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { d as debugWarn } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/debug&";
class DialogBusEvent extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: false },
          errMsg: { type: String, optional: true },
          pageIns: { type: "Unknown", optional: true }
        };
      },
      name: "DialogBusEvent"
    };
  }
  constructor(options, metadata = DialogBusEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.errMsg = this.__props__.errMsg;
    this.pageIns = this.__props__.pageIns;
    delete this.__props__;
  }
}
const url = "uni_modules/rice-ui/pages/dialog/dialog";
const showDialog = (options) => {
  const uid = getUID();
  const baseEventName = `rice_dialog_${uid}`;
  const readyEventName = baseEventName + "_ready";
  const optionsEventName = baseEventName + "_options";
  const busEventName = baseEventName + "_bus";
  uni.$on(readyEventName, () => {
    uni.$emit(optionsEventName, options);
  });
  uni.$on(busEventName, (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const type = event.type;
    if (type == "confirm") {
      (_a = options.confirm) === null || _a === void 0 ? null : _a.call(options);
    } else if (type == "cancel") {
      (_b = options.cancel) === null || _b === void 0 ? null : _b.call(options);
    } else if (type == "open") {
      (_c = options.open) === null || _c === void 0 ? null : _c.call(options);
    } else if (type == "close") {
      (_d = options.close) === null || _d === void 0 ? null : _d.call(options);
    } else if (type == "opened") {
      (_e = options.opened) === null || _e === void 0 ? null : _e.call(options);
    } else if (type == "closed") {
      (_f = options.closed) === null || _f === void 0 ? null : _f.call(options);
    } else if (type == "ready") {
      (_g = options.ready) === null || _g === void 0 ? null : _g.call(options, event.pageIns);
    } else if (type == "clickOverlay") {
      (_h = options.clickOverlay) === null || _h === void 0 ? null : _h.call(options);
    } else if (type == "fail") {
      (_j = options.fail) === null || _j === void 0 ? null : _j.call(options, (_k = event.errMsg) !== null && _k !== void 0 ? _k : "");
    }
  });
  uni.openDialogPage({
    url: `/${url}?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&busEventName=${busEventName}`,
    fail: (err) => {
      var _a;
      (_a = options.fail) === null || _a === void 0 ? null : _a.call(options, err.errMsg);
      uni.$off(readyEventName);
      uni.$off(busEventName);
      debugWarn("action-sheet", `请在pages.json 中注册${url}页面！errMsg:${err.errMsg}`);
    }
  });
};
export {
  showDialog as s
};
//# sourceMappingURL=api.js.map
