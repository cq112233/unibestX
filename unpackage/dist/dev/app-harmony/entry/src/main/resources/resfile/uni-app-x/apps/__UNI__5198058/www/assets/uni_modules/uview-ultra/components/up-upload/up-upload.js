import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_1$2 } from "../up-gap/up-gap.js";
import { _ as __easycom_2 } from "../up-popup/up-popup.js";
import { c as chooseFile } from "./utils.js";
import { b as addStyle, a as addUnit, t as toast } from "../../libs/function/index.js";
import { i as image, v as video, f as func } from "../../libs/function/test.js";
import { t } from "../../libs/i18n/index.js";
import "./types.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, createSharedDataFor: _createSharedDataFor, setSharedDataClass: _setSharedDataClass, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpUploadUpUpload";
const { ref, watch } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-upload"
  },
  __dynamicSharedData: true,
  __hash: "4c855d80",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-upload/up-upload.uvue",
  __name: "up-upload",
  props: {
    accept: {
      type: String,
      default: "image"
    },
    extension: {
      type: Array,
      default: () => {
        return [];
      }
    },
    capture: {
      type: [Array, String],
      default: () => {
        return ["album", "camera"];
      }
    },
    compressed: {
      type: Boolean,
      default: true
    },
    camera: {
      type: String,
      default: "back"
    },
    maxDuration: {
      type: Number,
      default: 60
    },
    uploadIcon: {
      type: String,
      default: "camera-fill"
    },
    uploadIconColor: {
      type: String,
      default: "#D3D4D6"
    },
    useBeforeRead: {
      type: Boolean,
      default: false
    },
    afterRead: {
      type: Function,
      default: null
    },
    beforeRead: {
      type: Function,
      default: null
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    maxCount: {
      type: [String, Number],
      default: 52
    },
    disabled: {
      type: Boolean,
      default: false
    },
    imageMode: {
      type: String,
      default: "aspectFill"
    },
    name: {
      type: String,
      default: ""
    },
    sizeType: {
      type: Array,
      default: () => {
        return ["original", "compressed"];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: [String, Number],
      default: Number.MAX_VALUE
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    uploadText: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: 80
    },
    height: {
      type: [String, Number],
      default: 80
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    autoDelete: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: false
    },
    autoUploadApi: {
      type: String,
      default: ""
    },
    autoUploadDriver: {
      type: String,
      default: ""
    },
    autoUploadAuthUrl: {
      type: String,
      default: ""
    },
    autoUploadHeader: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    getVideoThumb: {
      type: Boolean,
      default: false
    },
    customAfterAutoUpload: {
      type: Boolean,
      default: false
    },
    videoPreviewObjectFit: {
      type: String,
      default: "cover"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview", "update:fileList", "afterAutoUpload"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpUploadUpUploadSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const lists = ref([]);
    const isInCount = ref(true);
    const popupShow = ref(false);
    const currentItemIndex = ref(-1);
    const customUploadStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const itemDimensionStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.width),
        height: addUnit(props.height)
      });
    });
    function getProgressStyle(item = null) {
      var _a2;
      const it = item;
      const prog = (_a2 = it["progress"]) !== null && _a2 !== void 0 ? _a2 : 0;
      return new UTSJSONObject({
        width: `${prog}%`
      });
    }
    function formatFileList() {
      let fileList = props.fileList;
      let maxCount = parseInt(props.maxCount.toString());
      let resLists = [];
      fileList.forEach((item) => {
        var _a2, _b;
        const name = item["name"] != null ? item["name"] : item["url"] != null ? item["url"] : item["thumb"];
        let tmp = UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), new UTSJSONObject({
          isImage: item["name"] != null ? image(item["name"]) : (_a2 = props.accept == "image") !== null && _a2 !== void 0 ? _a2 : image(name),
          isVideo: item["name"] != null ? video(item["name"]) : (_b = props.accept == "video") !== null && _b !== void 0 ? _b : video(name),
          deletable: typeof item.deletable == "boolean" ? item.deletable : props.deletable
        }));
        let tmpObj = UTS.JSON.parse(UTS.JSON.stringify(tmp));
        if (tmpObj != null) {
          resLists.push(tmpObj);
        }
      });
      lists.value = resLists;
      isInCount.value = resLists.length < maxCount;
    }
    watch(() => {
      return props.fileList;
    }, () => {
      formatFileList();
    }, { immediate: true, deep: true });
    watch(() => {
      return props.deletable;
    }, () => {
      formatFileList();
    });
    watch(() => {
      return props.maxCount;
    }, () => {
      formatFileList();
    });
    watch(() => {
      return props.accept;
    }, () => {
      formatFileList();
    });
    watch(popupShow, (newVal) => {
      if (!newVal) {
        currentItemIndex.value = -1;
      }
    });
    function convertFileToUTSJSON(file) {
      const result = [];
      file.forEach((item = null) => {
        if (item != null) {
          const obj = UTS.JSON.parseObject(UTS.JSON.stringify(item));
          if (obj != null) {
            result.push(obj);
          }
        }
      });
      return result;
    }
    function getDetail(index = null) {
      return new UTSJSONObject({
        name: props.name,
        index: index == null ? props.fileList.length : index
      });
    }
    function getOtherItemText(item) {
      const isVid = item.isVideo || item.type != null && item.type == "video";
      if (isVid) {
        if (item.name != null && item.name != "")
          return item.name;
        return t("up.common.video");
      }
      if (item.name != null && item.name != "")
        return item.name;
      return t("up.common.file");
    }
    function onAfterRead(file) {
      let maxSize = parseFloat(props.maxSize.toString());
      let afterRead = props.afterRead;
      const even = (item = null) => {
        let tmp = item != null && item.size != null ? item.size : 0;
        return tmp > maxSize;
      };
      const oversize = file.some(even);
      if (oversize) {
        toast(t("up.upload.sizeExceed", new UTSJSONObject({})));
        emit("oversize", UTSJSONObject.assign(new UTSJSONObject({
          file: convertFileToUTSJSON(file)
        }), getDetail(null)));
        return null;
      }
      if (typeof afterRead == "function") {
        afterRead(file, getDetail(null));
      }
      emit("afterRead", UTSJSONObject.assign(new UTSJSONObject({
        file: convertFileToUTSJSON(file)
      }), getDetail(null)));
    }
    function onBeforeRead(file) {
      let beforeRead = props.beforeRead;
      let useBeforeRead = props.useBeforeRead;
      let res = file;
      if (beforeRead != null && func(beforeRead)) {
        res = beforeRead(file, getDetail(null));
      }
      if (useBeforeRead) {
        emit("beforeRead", UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({
          file: convertFileToUTSJSON(file)
        }), getDetail(null)), new UTSJSONObject({
          callback: (ok) => {
            if (ok) {
              onAfterRead(file);
            }
          }
        })));
        return null;
      }
      if (typeof res == "boolean" && !res) {
        return null;
      }
      const readFile = res != null ? res : file;
      onAfterRead(readFile);
    }
    function chooseFileAction(params) {
      let maxCount = parseInt(props.maxCount.toString());
      let disabled = props.disabled;
      if (disabled)
        return false;
      const chooseParams = UTSJSONObject.assign(new UTSJSONObject({
        accept: props.accept,
        extension: props.extension,
        multiple: props.multiple,
        capture: props.capture,
        compressed: props.compressed,
        maxDuration: props.maxDuration,
        sizeType: props.sizeType,
        camera: props.camera
      }), new UTSJSONObject({
        maxCount: maxCount - lists.value.length,
        ...params
      }));
      let chooseParamsObj = UTS.JSON.parseObject(UTS.JSON.stringify(chooseParams));
      if (chooseParamsObj != null) {
        chooseFile(chooseParamsObj).then((res) => {
          onBeforeRead(res);
        });
      }
      return true;
    }
    function onChooseTap() {
      chooseFileAction(new UTSJSONObject({}));
    }
    function videoErrorCallback() {
    }
    function deleteItem(index) {
      const currentFileList = [...props.fileList];
      if (props.autoDelete) {
        currentFileList.splice(index, 1);
        emit("update:fileList", currentFileList);
      } else {
        emit("delete", UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), getDetail(index)), new UTSJSONObject({
          file: currentFileList[index]
        })));
      }
    }
    function onPreviewImage(previewItem, index) {
      if (!previewItem.isImage || !props.previewFullImage)
        return null;
      let current = 0;
      const urls = [];
      let imageIndex = 0;
      for (let i = 0; i < lists.value.length; i++) {
        const item = lists.value[i];
        if (item.isImage || item.type != null && item.type == "image") {
          urls.push(item.url != null ? item.url : item.thumb);
          if (i == index) {
            current = imageIndex;
          }
          imageIndex += 1;
        }
      }
      if (urls.length < 1) {
        return null;
      }
      uni.previewImage({
        urls,
        current,
        fail() {
          toast(t("up.upload.previewImageFail", new UTSJSONObject({})));
        }
      });
    }
    function onPreviewVideo(previewItem, index) {
      if (!props.previewFullImage)
        return null;
      popupShow.value = true;
      currentItemIndex.value = index;
    }
    function onClickPreview(item, index) {
      if (props.previewFullImage) {
        switch (item.type) {
          case "image":
            onPreviewImage(item, index);
            break;
          case "video":
            onPreviewVideo(item, index);
            break;
        }
      }
      emit("clickPreview", UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), getDetail(index)));
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_loading_icon = __easycom_1$1;
      const _component_up_gap = __easycom_1$2;
      const _component_video = _resolveComponent("video");
      const _component_up_popup = __easycom_2;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 17, _unref(customUploadStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.previewImage));
      }, () => {
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return lists.value;
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value.isImage || _for_item0.value.type != null && _for_item0.value.type == "image"));
          }, () => {
            _setSharedDataEvent(__sharedData_VFor0, 2, () => {
              return onClickPreview(_for_item0.value, _for_key0.value);
            });
            _renderSharedDataEffect(() => {
              const _item = _for_item0.value;
              const _item_thumb = _item.thumb;
              _setSharedDataAttr(__sharedData_VFor0, 3, _toSharedDataString(_item_thumb != null ? _item_thumb : _item.url));
              _setSharedDataAttr(__sharedData_VFor0, 4, _toSharedDataImageMode(__props.imageMode));
              _setSharedDataStyle(__sharedData_VFor0, 5, _unref(itemDimensionStyle));
            });
          }, () => {
            return _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 6, _toSharedDataBoolean((_for_item0.value.isVideo || _for_item0.value.type != null && _for_item0.value.type == "video") && __props.getVideoThumb));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData_VFor0, 17, _unref(itemDimensionStyle));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 7, _toSharedDataBoolean(_for_item0.value.thumb));
              }, () => {
                _setSharedDataEvent(__sharedData_VFor0, 8, () => {
                  return onClickPreview(_for_item0.value, _for_key0.value);
                });
                _renderSharedDataEffect(() => {
                  _setSharedDataAttr(__sharedData_VFor0, 9, _toSharedDataString(_for_item0.value.thumb));
                  _setSharedDataAttr(__sharedData_VFor0, 10, _toSharedDataImageMode(__props.imageMode));
                  _setSharedDataStyle(__sharedData_VFor0, 11, _unref(itemDimensionStyle));
                });
              }, () => {
                const n12 = _createSharedDataComponentWithFallback(_component_up_icon, "6a9793ae-" + _for_key0.value, {
                  color: "#80CBF9",
                  size: "26",
                  name: () => {
                    return _for_item0.value.isVideo || _for_item0.value.type != null && _for_item0.value.type == "video" ? "movie" : "file-text";
                  }
                });
                _setSharedData(__sharedData_VFor0, 12, n12?.sharedData);
              }, 773);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 13, _toSharedDataBoolean(_for_item0.value.status == "success"));
              }, () => {
                _createSharedDataSlot("playIcon", null, null);
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData_VFor0, 14, _toSharedDataBoolean($slots["playIcon"] == null));
                }, () => {
                  const n18 = _createSharedDataComponentWithFallback(_component_up_icon, "e8624520-" + _for_key0.value, {
                    class: "up-upload__wrap__play__icon",
                    name: "play-right",
                    size: "22px"
                  });
                  _setSharedData(__sharedData_VFor0, 15, n18?.sharedData);
                });
                _setSharedDataEvent(__sharedData_VFor0, 16, () => {
                  return onClickPreview(_for_item0.value, _for_key0.value);
                });
              });
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData_VFor0, 20, _unref(itemDimensionStyle));
              });
              const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "e8622de6-" + _for_key0.value, {
                color: "#80CBF9",
                size: "26",
                name: () => {
                  return _for_item0.value.isVideo || _for_item0.value.type != null && _for_item0.value.type == "video" ? "movie" : "folder";
                }
              });
              _setSharedData(__sharedData_VFor0, 18, n22?.sharedData);
              _setSharedDataEvent(__sharedData_VFor0, 19, () => {
                return onClickPreview(_for_item0.value, _for_key0.value);
              });
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData_VFor0, 21, _toDisplayString(getOtherItemText(_for_item0.value)));
              });
            }, 517);
          }, 261);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 22, _toSharedDataBoolean(_for_item0.value.status == "uploading" || _for_item0.value.status == "failed"));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 26, _toSharedDataBoolean(_for_item0.value.status == "failed"));
            }, () => {
              const n29 = _createSharedDataComponentWithFallback(_component_up_icon, "e8616b6e-" + _for_key0.value, {
                name: "close-circle",
                color: "#ffffff",
                size: "25"
              });
              _setSharedData(__sharedData_VFor0, 27, n29?.sharedData);
            }, () => {
              const n31 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "e86162bc-" + _for_key0.value, {
                size: "22",
                mode: "circle"
              });
              _setSharedData(__sharedData_VFor0, 28, n31?.sharedData);
            }, 1541);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 23, _toSharedDataBoolean(_for_item0.value.message != null && _for_item0.value.message != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData_VFor0, 24, _toDisplayString(_for_item0.value.message));
              });
            });
            const n36 = _createSharedDataComponentWithFallback(_component_up_gap, "e8614d2c-" + _for_key0.value, {
              class: "up-upload__progress",
              height: "3px",
              style: () => {
                return getProgressStyle(_for_item0.value);
              }
            });
            _setSharedData(__sharedData_VFor0, 25, n36?.sharedData);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 29, _toSharedDataBoolean(_for_item0.value.status != "uploading" && (__props.deletable || _for_item0.value.deletable)));
          }, () => {
            const n40 = _createSharedDataComponentWithFallback(_component_up_icon, "e86135de-" + _for_key0.value, {
              name: "close",
              color: "#ffffff",
              size: "10"
            });
            _setSharedData(__sharedData_VFor0, 30, n40?.sharedData);
            _setSharedDataEvent(__sharedData_VFor0, 31, () => {
              return deleteItem(_for_key0.value);
            });
          });
          _createSharedDataSlot("success", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 32, _toSharedDataBoolean(_for_item0.value.status == "success"));
            }, () => {
              const n47 = _createSharedDataComponentWithFallback(_component_up_icon, "e8608180-" + _for_key0.value, {
                name: "checkmark",
                color: "#ffffff",
                size: "12"
              });
              _setSharedData(__sharedData_VFor0, 33, n47?.sharedData);
            });
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(isInCount.value));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean($slots["trigger"] != null));
        }, () => {
          _createSharedDataSlot("trigger", null, null);
          _setSharedDataEvent(__sharedData, 7, onChooseTap);
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 8, _toSharedDataBoolean($slots["trigger"] == null && ($slots["default"] != null || $slots["$default"] != null)));
          }, () => {
            _createSharedDataSlot("default", null, null);
            _setSharedDataEvent(__sharedData, 9, onChooseTap);
          }, () => {
            _renderSharedDataEffect(() => {
              const _disabled = __props.disabled;
              _setSharedDataClass(__sharedData, 14, ["up-upload__button", [_disabled ? "up-upload__button--disabled" : ""]]);
              _setSharedDataClass(__sharedData, 15, _toSharedDataString(!_disabled ? "up-upload__button--hover" : ""));
              _setSharedDataStyle(__sharedData, 16, _unref(itemDimensionStyle));
            });
            const n62 = _createSharedDataComponentWithFallback(_component_up_icon, "e86045aa", {
              name: () => {
                return __props.uploadIcon;
              },
              size: "26",
              color: () => {
                return __props.uploadIconColor;
              }
            });
            _setSharedData(__sharedData, 10, n62?.sharedData);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 11, _toSharedDataBoolean(__props.uploadText != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 12, _toDisplayString(__props.uploadText));
              });
            });
            _setSharedDataEvent(__sharedData, 13, onChooseTap);
          }, 3333);
        }, 3077);
      });
      const n72 = _createSharedDataComponentWithFallback(_component_up_popup, "e85f9270", {
        mode: "center",
        show: () => {
          return popupShow.value;
        },
        "onUpdate:show": () => {
          return (_value) => {
            return popupShow.value = _value;
          };
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(popupShow.value));
          }, () => {
            const n71 = _createSharedDataComponentWithFallback(_component_video, "e85f90fe", {
              id: "myVideo",
              src: () => {
                return currentItemIndex.value >= 0 ? lists.value[currentItemIndex.value].url : "";
              },
              onError: () => {
                return videoErrorCallback;
              },
              "show-center-play-btn": "",
              "object-fit": () => {
                return __props.videoPreviewObjectFit;
              },
              "show-fullscreen-btn": "true",
              "enable-play-gesture": "",
              controls: "",
              autoplay: true,
              "auto-pause-if-open-native": "",
              "initial-time": 0.1
            });
            _setSharedData(__sharedData, 2, n71?.sharedData);
          }, null, 129);
        })
      });
      _setSharedData(__sharedData, 0, n72?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-upload.js.map
