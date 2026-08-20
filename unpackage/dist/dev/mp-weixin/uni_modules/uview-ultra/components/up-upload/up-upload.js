"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upUpload_utils = require("./utils.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
require("./types.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_gap_1 = common_vendor.resolveComponent("up-gap");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon_1 + _easycom_up_loading_icon_1 + _easycom_up_gap_1 + _easycom_up_popup_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_gap = () => "../up-gap/up-gap.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_loading_icon + _easycom_up_gap + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-upload"
}, { __name: "up-upload", props: {
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
      return new common_vendor.UTSJSONObject({});
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
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview", "update:fileList", "afterAutoUpload"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const lists = common_vendor.ref([]);
  const isInCount = common_vendor.ref(true);
  const popupShow = common_vendor.ref(false);
  const currentItemIndex = common_vendor.ref(-1);
  const customUploadStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  const itemDimensionStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.width),
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
    });
  });
  function getProgressStyle(item = null) {
    var _a2;
    const it = item;
    const prog = (_a2 = it["progress"]) !== null && _a2 !== void 0 ? _a2 : 0;
    return new common_vendor.UTSJSONObject({
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
      let tmp = common_vendor.UTSJSONObject.assign(common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), item), new common_vendor.UTSJSONObject({
        isImage: item["name"] != null ? uni_modules_uviewUltra_libs_function_test.image(item["name"]) : (_a2 = props.accept == "image") !== null && _a2 !== void 0 ? _a2 : uni_modules_uviewUltra_libs_function_test.image(name),
        isVideo: item["name"] != null ? uni_modules_uviewUltra_libs_function_test.video(item["name"]) : (_b = props.accept == "video") !== null && _b !== void 0 ? _b : uni_modules_uviewUltra_libs_function_test.video(name),
        deletable: typeof item.deletable == "boolean" ? item.deletable : props.deletable
      }));
      let tmpObj = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(tmp));
      if (tmpObj != null) {
        resLists.push(tmpObj);
      }
    });
    lists.value = resLists;
    isInCount.value = resLists.length < maxCount;
  }
  common_vendor.watch(() => {
    return props.fileList;
  }, () => {
    formatFileList();
  }, { immediate: true, deep: true });
  common_vendor.watch(() => {
    return props.deletable;
  }, () => {
    formatFileList();
  });
  common_vendor.watch(() => {
    return props.maxCount;
  }, () => {
    formatFileList();
  });
  common_vendor.watch(() => {
    return props.accept;
  }, () => {
    formatFileList();
  });
  common_vendor.watch(popupShow, (newVal) => {
    if (!newVal) {
      currentItemIndex.value = -1;
    }
  });
  function convertFileToUTSJSON(file) {
    const result = [];
    file.forEach((item = null) => {
      if (item != null) {
        const obj = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(item));
        if (obj != null) {
          result.push(obj);
        }
      }
    });
    return result;
  }
  function getDetail(index = null) {
    return new common_vendor.UTSJSONObject({
      name: props.name,
      index: index == null ? props.fileList.length : index
    });
  }
  function getOtherItemText(item) {
    const isVid = item.isVideo || item.type != null && item.type == "video";
    if (isVid) {
      if (item.name != null && item.name != "")
        return item.name;
      return uni_modules_uviewUltra_libs_i18n_index.t("up.common.video");
    }
    if (item.name != null && item.name != "")
      return item.name;
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.file");
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
      uni_modules_uviewUltra_libs_function_index.toast(uni_modules_uviewUltra_libs_i18n_index.t("up.upload.sizeExceed", new common_vendor.UTSJSONObject({})));
      emit("oversize", common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({
        file: convertFileToUTSJSON(file)
      }), getDetail(null)));
      return null;
    }
    if (typeof afterRead == "function") {
      afterRead(file, getDetail(null));
    }
    emit("afterRead", common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({
      file: convertFileToUTSJSON(file)
    }), getDetail(null)));
  }
  function onBeforeRead(file) {
    let beforeRead = props.beforeRead;
    let useBeforeRead = props.useBeforeRead;
    let res = file;
    if (beforeRead != null && uni_modules_uviewUltra_libs_function_test.func(beforeRead)) {
      res = beforeRead(file, getDetail(null));
    }
    if (useBeforeRead) {
      emit("beforeRead", common_vendor.UTSJSONObject.assign(common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({
        file: convertFileToUTSJSON(file)
      }), getDetail(null)), new common_vendor.UTSJSONObject({
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
    const chooseParams = common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({
      accept: props.accept,
      extension: props.extension,
      multiple: props.multiple,
      capture: props.capture,
      compressed: props.compressed,
      maxDuration: props.maxDuration,
      sizeType: props.sizeType,
      camera: props.camera
    }), new common_vendor.UTSJSONObject(Object.assign({ maxCount: maxCount - lists.value.length }, params)));
    let chooseParamsObj = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(chooseParams));
    if (chooseParamsObj != null) {
      uni_modules_uviewUltra_components_upUpload_utils.chooseFile(chooseParamsObj).then((res) => {
        onBeforeRead(res);
      });
    }
    return true;
  }
  function onChooseTap() {
    chooseFileAction(new common_vendor.UTSJSONObject({}));
  }
  function videoErrorCallback() {
  }
  function deleteItem(index) {
    const currentFileList = [...props.fileList];
    if (props.autoDelete) {
      currentFileList.splice(index, 1);
      emit("update:fileList", currentFileList);
    } else {
      emit("delete", common_vendor.UTSJSONObject.assign(common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), getDetail(index)), new common_vendor.UTSJSONObject({
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
    common_vendor.index.previewImage({
      urls,
      current,
      fail() {
        uni_modules_uviewUltra_libs_function_index.toast(uni_modules_uviewUltra_libs_i18n_index.t("up.upload.previewImageFail", new common_vendor.UTSJSONObject({})));
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
    emit("clickPreview", common_vendor.UTSJSONObject.assign(common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), item), getDetail(index)));
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.previewImage
    }, __props.previewImage ? {
      b: common_vendor.f(lists.value, (item, index, i0) => {
        return common_vendor.e({
          a: item.isImage || item.type != null && item.type == "image"
        }, item.isImage || item.type != null && item.type == "image" ? {
          b: item.thumb != null ? item.thumb : item.url,
          c: __props.imageMode,
          d: common_vendor.o(($event) => {
            return onClickPreview(item, index);
          }, index),
          e: common_vendor.s(common_vendor.unref(itemDimensionStyle))
        } : (item.isVideo || item.type != null && item.type == "video") && __props.getVideoThumb ? common_vendor.e({
          g: item.thumb
        }, item.thumb ? {
          h: item.thumb,
          i: __props.imageMode,
          j: common_vendor.o(($event) => {
            return onClickPreview(item, index);
          }, index),
          k: common_vendor.s(common_vendor.unref(itemDimensionStyle))
        } : {
          l: "bac2b514-0-" + i0,
          m: common_vendor.p({
            color: "#80CBF9",
            size: "26",
            name: item.isVideo || item.type != null && item.type == "video" ? "movie" : "file-text",
            class: "data-v-bac2b514"
          })
        }, {
          n: item.status == "success"
        }, item.status == "success" ? common_vendor.e({
          o: _ctx.$slots["playIcon"] == null
        }, _ctx.$slots["playIcon"] == null ? {
          p: "bac2b514-1-" + i0,
          q: common_vendor.p({
            name: "play-right",
            size: "22px",
            class: "up-upload__wrap__play__icon data-v-bac2b514"
          })
        } : {}, {
          r: common_vendor.o(($event) => {
            return onClickPreview(item, index);
          }, index)
        }) : {}, {
          s: common_vendor.s(common_vendor.unref(itemDimensionStyle))
        }) : {
          t: "bac2b514-2-" + i0,
          v: common_vendor.p({
            color: "#80CBF9",
            size: "26",
            name: item.isVideo || item.type != null && item.type == "video" ? "movie" : "folder",
            class: "data-v-bac2b514"
          }),
          w: common_vendor.t(getOtherItemText(item)),
          x: common_vendor.o(($event) => {
            return onClickPreview(item, index);
          }, index),
          y: common_vendor.s(common_vendor.unref(itemDimensionStyle))
        }, {
          f: (item.isVideo || item.type != null && item.type == "video") && __props.getVideoThumb,
          z: item.status == "uploading" || item.status == "failed"
        }, item.status == "uploading" || item.status == "failed" ? common_vendor.e({
          A: item.status == "failed"
        }, item.status == "failed" ? {
          B: "bac2b514-3-" + i0,
          C: common_vendor.p({
            name: "close-circle",
            color: "#ffffff",
            size: "25",
            class: "data-v-bac2b514"
          })
        } : {
          D: "bac2b514-4-" + i0,
          E: common_vendor.p({
            size: "22",
            mode: "circle",
            class: "data-v-bac2b514"
          })
        }, {
          F: item.message != null && item.message != ""
        }, item.message != null && item.message != "" ? {
          G: common_vendor.t(item.message)
        } : {}, {
          H: common_vendor.s(getProgressStyle(item)),
          I: "bac2b514-5-" + i0,
          J: common_vendor.p({
            height: "3px",
            class: "up-upload__progress data-v-bac2b514",
            style: common_vendor.normalizeStyle(getProgressStyle(item))
          })
        }) : {}, {
          K: item.status != "uploading" && (__props.deletable || item.deletable)
        }, item.status != "uploading" && (__props.deletable || item.deletable) ? {
          L: "bac2b514-6-" + i0,
          M: common_vendor.p({
            name: "close",
            color: "#ffffff",
            size: "10",
            class: "data-v-bac2b514"
          }),
          N: common_vendor.o(($event) => {
            return deleteItem(index);
          }, index)
        } : {}, {
          O: item.status == "success"
        }, item.status == "success" ? {
          P: "bac2b514-7-" + i0,
          Q: common_vendor.p({
            name: "checkmark",
            color: "#ffffff",
            size: "12",
            class: "data-v-bac2b514"
          })
        } : {}, {
          R: index
        });
      })
    } : {}, {
      c: isInCount.value
    }, isInCount.value ? common_vendor.e({
      d: _ctx.$slots["trigger"] != null
    }, _ctx.$slots["trigger"] != null ? {
      e: common_vendor.o(onChooseTap, "da")
    } : _ctx.$slots["trigger"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? {
      g: common_vendor.o(onChooseTap, "32")
    } : common_vendor.e({
      h: common_vendor.p({
        name: __props.uploadIcon,
        size: "26",
        color: __props.uploadIconColor,
        class: "data-v-bac2b514"
      }),
      i: __props.uploadText != ""
    }, __props.uploadText != "" ? {
      j: common_vendor.t(__props.uploadText)
    } : {}, {
      k: !__props.disabled ? "up-upload__button--hover" : "",
      l: common_vendor.o(onChooseTap, "f6"),
      m: common_vendor.n(__props.disabled ? "up-upload__button--disabled" : ""),
      n: common_vendor.s(common_vendor.unref(itemDimensionStyle))
    }), {
      f: _ctx.$slots["trigger"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null)
    }) : {}, {
      o: popupShow.value
    }, popupShow.value ? {
      p: common_vendor.sei("myVideo", "video"),
      q: currentItemIndex.value >= 0 ? lists.value[currentItemIndex.value].url : "",
      r: common_vendor.o(videoErrorCallback, "36"),
      s: __props.videoPreviewObjectFit
    } : {}, {
      t: common_vendor.o(($event) => {
        return popupShow.value = $event;
      }, "f6"),
      v: common_vendor.p({
        mode: "center",
        show: popupShow.value,
        class: "data-v-bac2b514"
      }),
      w: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      x: common_vendor.s(common_vendor.unref(customUploadStyle)),
      y: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bac2b514"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-upload/up-upload.js.map
