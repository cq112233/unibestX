import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsMediaCard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "618105cc",
  __className,
  __filename: "src/pages/function/components/MediaCard.uvue",
  __name: "MediaCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsMediaCardSharedData", sharedDataClassId: 0 })));
    const photoUrl = ref("");
    const scanResult = ref("");
    function chooseImage() {
      uni.chooseImage(new UTSJSONObject({
        count: 1,
        success: (res) => {
          const paths = res.tempFilePaths;
          if (paths.length > 0) {
            photoUrl.value = paths[0];
          }
        },
        fail: (err) => {
          uni.__f__("error", "at src/pages/function/components/MediaCard.uvue:39", err);
        }
      }));
    }
    function scanCode() {
      uni.scanCode(new UTSJSONObject({
        success: (res) => {
          scanResult.value = res.result;
        },
        fail: (err) => {
          uni.__f__("error", "at src/pages/function/components/MediaCard.uvue:50", err);
        }
      }));
    }
    return () => {
      "raw js";
      const n13 = _createSharedDataComponent(
        Card,
        "679fa9a5",
        { title: "相机与多媒体" },
        {
          "default": () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(photoUrl.value === ""));
            }, () => {
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataAttr(__sharedData, 2, _toSharedDataString(photoUrl.value));
              });
            }, 261);
            _setSharedDataEvent(__sharedData, 3, chooseImage);
            _setSharedDataEvent(__sharedData, 4, scanCode);
            _renderSharedDataEffect(() => {
              const _scanResult = scanResult.value;
              _setSharedData(__sharedData, 5, _toDisplayString(_scanResult !== "" ? _scanResult : "暂无数据"));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n13.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const MediaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  MediaCard as M
};
//# sourceMappingURL=MediaCard.js.map
