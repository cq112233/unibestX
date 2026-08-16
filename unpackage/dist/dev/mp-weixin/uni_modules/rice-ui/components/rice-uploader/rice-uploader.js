"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceUploader_utils = require("./utils.js");
const uni_modules_riceUi_components_riceUploader_type = require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  (_easycom_rice_icon_1 + _easycom_rice_loading_1)();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
const _easycom_rice_loading = () => "../rice-loading/rice-loading.js";
if (!Math) {
  (_easycom_rice_icon + _easycom_rice_loading)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-uploader",
  styleIsolation: "app-and-page"
}, { __name: "rice-uploader", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  action: {},
  accept: { default: "image" },
  autoUpload: { type: Boolean, default: true },
  name: {},
  header: {},
  formData: {},
  timeout: { default: 12e4 },
  maxCount: { default: 9 },
  maxDuration: { default: 60 },
  showFileList: { type: Boolean, default: true },
  preview: { type: Boolean, default: true },
  imageMode: { default: "scaleToFill" },
  objectFit: { default: "contain" },
  uploadIcon: { default: "camera" },
  uploadIconStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  uploadText: {},
  loadingText: { default: "上传中…" },
  uploadFailText: { default: "上传失败" },
  showPercent: { type: Boolean, default: false },
  showSuccess: { type: Boolean, default: true },
  deletable: { type: Boolean, default: true },
  deleteIcon: { default: "cross" },
  deleteIconStyle: {},
  width: {},
  height: {},
  bgColor: {},
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  camera: { default: "back" },
  pageOrientation: { default: "auto" },
  uploadIconSize: {},
  deleteStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  sizeType: { default: () => {
    return ["original", "compressed"];
  } },
  sourceType: { default: () => {
    return ["album", "camera"];
  } },
  extension: {},
  successCode: {},
  beforeRead: {},
  afterRead: {},
  beforeUpload: {},
  beforeRemove: {},
  onSuccess: {},
  onFail: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: Array,
    default: () => {
      return [];
    }
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["add", "remove", "complete", "clickPreview", "error"], ["update:modelValue"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("uploader");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const isDisabled = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2, _b;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
  });
  const formatFileList = () => {
    var _a2;
    const files = (_a2 = modelValue.value) !== null && _a2 !== void 0 ? _a2 : [];
    const list = files.map((file = null) => {
      var _a3, _b, _c;
      return new uni_modules_riceUi_components_riceUploader_type.UploaderFileItem(Object.assign(Object.assign({ url: null, poster: null, fileName: null, status: null, message: null, percent: null, size: null, duration: null, name: null, action: null, formData: null, header: null }, file), { uid: (_a3 = file.uid) !== null && _a3 !== void 0 ? _a3 : uni_modules_riceUi_components_riceUploader_utils.getFileId(), fileType: (_b = file.fileType) !== null && _b !== void 0 ? _b : uni_modules_riceUi_components_riceUploader_utils.getFileType(file), deletable: (_c = file.deletable) !== null && _c !== void 0 ? _c : props.deletable }));
    });
    return list;
  };
  const fileList = common_vendor.ref(formatFileList());
  const isOverLimit = common_vendor.computed(() => {
    return fileList.value.length >= props.maxCount;
  });
  const remainCount = common_vendor.computed(() => {
    return Math.max(props.maxCount - fileList.value.length, 0);
  });
  const getImageUrl = (file) => {
    if (file.poster != null && file.poster != "")
      return file.poster;
    return file.url;
  };
  const getUploadingText = (file) => {
    var _a2;
    if (props.showPercent && file.status == "uploading") {
      return ((_a2 = file.percent) !== null && _a2 !== void 0 ? _a2 : 0) + "%";
    }
    let message = file.message;
    if (message != null)
      return message;
    if (file.status == "failed") {
      message = message !== null && message !== void 0 ? message : props.uploadFailText;
    }
    return message !== null && message !== void 0 ? message : props.loadingText;
  };
  const showDeletable = (file) => {
    var _a2;
    if (file.deletable == false || file.status == "uploading")
      return false;
    return (_a2 = file.deletable) !== null && _a2 !== void 0 ? _a2 : props.deletable;
  };
  const uploadSingleFile = (file) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (typeof props.beforeUpload == "function") {
        const response = yield props.beforeUpload(file);
        if (response == false) {
          return Promise.resolve(null);
        }
      }
      return new Promise((resolve, reject) => {
        var _a2, _b, _c, _d, _g, _h, _j, _k;
        const uploadFail = (errCode, errMsg, data) => {
          file.status = "failed";
          const failInfo = new uni_modules_riceUi_components_riceUploader_type.UploaderFail({ errCode, statusCode: errCode, errMsg, data, file });
          if (typeof props.onFail == "function") {
            props.onFail(failInfo, file);
          }
          reject(failInfo);
        };
        const uploadSuccess = (res) => {
          const successInfo = new uni_modules_riceUi_components_riceUploader_type.UploaderSuccess({ statusCode: res.statusCode, data: res.data, file });
          if (typeof props.onSuccess == "function") {
            const flag = props.onSuccess(successInfo, file);
            if (flag == false) {
              uploadFail(res.statusCode, "上传失败", res.data);
              return null;
            }
          }
          file.status = "success";
          resolve(successInfo);
        };
        const url = (_b = (_a2 = file.action) !== null && _a2 !== void 0 ? _a2 : props.action) !== null && _b !== void 0 ? _b : "";
        if (url == "" || file.url == "") {
          uploadFail(600009, `上传${url == "" ? "URL" : "文件的url"}不能为空`, "");
          return null;
        }
        file.status = "uploading";
        const formData = common_vendor.UTSJSONObject.assign((_c = props.formData) !== null && _c !== void 0 ? _c : new common_vendor.UTSJSONObject({}), (_d = file.formData) !== null && _d !== void 0 ? _d : new common_vendor.UTSJSONObject({}));
        const header = common_vendor.UTSJSONObject.assign((_g = props.header) !== null && _g !== void 0 ? _g : new common_vendor.UTSJSONObject({}), (_h = file.header) !== null && _h !== void 0 ? _h : new common_vendor.UTSJSONObject({}));
        const task = common_vendor.index.uploadFile({
          url,
          filePath: file.url,
          name: (_k = (_j = file.name) !== null && _j !== void 0 ? _j : props.name) !== null && _k !== void 0 ? _k : "file",
          formData,
          header,
          timeout: props.timeout,
          success: (res) => {
            const isSuccess = props.successCode != null ? uni_modules_riceUi_libs_utils_basic.isSameValue(res.statusCode, props.successCode) : true;
            isSuccess ? uploadSuccess(res) : uploadFail(res.statusCode, "上传失败", res.data);
          },
          fail: (err) => {
            var _a3, _b2;
            const errData = typeof err.data == "string" ? err.data : "上传失败";
            const errCode = (_b2 = (_a3 = err.errCode) !== null && _a3 !== void 0 ? _a3 : err.errno) !== null && _b2 !== void 0 ? _b2 : -1;
            uploadFail(errCode, err.errMsg, errData);
          }
        });
        task.onProgressUpdate((res) => {
          file.percent = res.progress;
        });
      });
    });
  };
  const startUpload = (files) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (files.length <= 0) {
        return Promise.resolve(null);
      }
      const uploadFiles = files.map((file) => {
        return uploadSingleFile(file);
      });
      const results = yield Promise.allSettled(uploadFiles);
      const successList = results.filter((v) => {
        return v.status == "fulfilled";
      }).map((v) => {
        return v.value;
      }).filter((v = null) => {
        return v != null;
      });
      const failList = results.filter((v) => {
        return v.status == "rejected";
      }).map((v) => {
        const rejected = v;
        return rejected.reason;
      }).filter((v) => {
        return v != null;
      });
      emit("complete", fileList.value, new uni_modules_riceUi_components_riceUploader_type.UploaderComplete({
        successList,
        failList
      }));
    });
  };
  const upload = () => {
    const files = fileList.value.filter((v) => {
      return v.status == "ready";
    });
    startUpload(files);
  };
  const onAfterRead = (files) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const lastIndex = fileList.value.length - 1;
      fileList.value = fileList.value.concat(files);
      const _files = fileList.value.filter((_, index) => {
        return index > lastIndex;
      });
      if (typeof props.afterRead == "function") {
        props.afterRead(_files);
      }
      if (props.autoUpload == true) {
        startUpload(_files);
      }
      emit("add", _files);
    });
  };
  const readFiles = (files) => {
    if (files.length > remainCount.value) {
      files = files.slice(0, remainCount.value);
    }
    onAfterRead(files);
  };
  const onBeforeRead = (files) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (typeof props.beforeRead == "function") {
        const response = yield props.beforeRead(files);
        if (response == true) {
          readFiles(files);
        } else if (Array.isArray(response)) {
          const list = response.filter((v = null) => {
            return common_vendor.UTS.isInstanceOf(v, uni_modules_riceUi_components_riceUploader_type.UploaderFileItem);
          });
          readFiles(list);
        }
      } else {
        readFiles(files);
      }
    });
  };
  const chooseImage = () => {
    common_vendor.index.chooseImage(new common_vendor.UTSJSONObject({
      pageOrientation: props.pageOrientation,
      count: remainCount.value,
      sizeType: props.sizeType,
      sourceType: props.sourceType,
      success: (res) => {
        const tempFiles = res.tempFiles;
        const files = tempFiles.map((file) => {
          return new uni_modules_riceUi_components_riceUploader_type.UploaderFileItem({
            poster: null,
            fileName: null,
            message: null,
            name: null,
            action: null,
            formData: null,
            header: null,
            url: file.path,
            status: "ready",
            percent: 0,
            size: file.size,
            duration: 0,
            deletable: props.deletable,
            uid: uni_modules_riceUi_components_riceUploader_utils.getFileId(),
            fileType: "image"
          });
        });
        onBeforeRead(files);
      },
      fail: (err) => {
        emit("error", err.errMsg);
      }
    }));
  };
  const getVideoInfo = (path) => {
    return new Promise((resolve) => {
      common_vendor.index.getVideoInfo({
        src: path,
        success: (res) => {
          var _a2;
          resolve((_a2 = res.thumbTempFilePath) !== null && _a2 !== void 0 ? _a2 : "");
        },
        fail: () => {
          resolve(path);
        }
      });
    });
  };
  const chooseVideo = () => {
    common_vendor.index.chooseVideo(new common_vendor.UTSJSONObject({
      pageOrientation: props.pageOrientation,
      sourceType: props.sourceType,
      maxDuration: props.maxDuration,
      camera: props.camera,
      success: (file) => {
        getVideoInfo(file.tempFilePath).then((poster) => {
          const files = [new uni_modules_riceUi_components_riceUploader_type.UploaderFileItem({
            fileName: null,
            message: null,
            name: null,
            action: null,
            formData: null,
            header: null,
            url: file.tempFilePath,
            poster,
            status: "ready",
            percent: 0,
            size: file.size,
            duration: file.duration,
            deletable: props.deletable,
            uid: uni_modules_riceUi_components_riceUploader_utils.getFileId(),
            fileType: "video"
          })];
          onBeforeRead(files);
        });
      },
      fail: (err) => {
        emit("error", err.errMsg);
      }
    }));
  };
  const chooseMedia = () => {
    common_vendor.index.chooseMedia(new common_vendor.UTSJSONObject({
      pageOrientation: props.pageOrientation,
      count: remainCount.value,
      sourceType: props.sourceType,
      maxDuration: props.maxDuration,
      camera: props.camera,
      success: (res) => {
        const files = res.tempFiles.map((file) => {
          return new uni_modules_riceUi_components_riceUploader_type.UploaderFileItem({
            fileName: null,
            message: null,
            name: null,
            action: null,
            formData: null,
            header: null,
            url: file.tempFilePath,
            poster: file.thumbTempFilePath,
            status: "ready",
            percent: 0,
            size: file.size,
            duration: file.duration,
            deletable: props.deletable,
            uid: uni_modules_riceUi_components_riceUploader_utils.getFileId(),
            fileType: file.fileType
          });
        });
        onBeforeRead(files);
      },
      fail: (err) => {
        emit("error", err.errMsg);
      }
    }));
  };
  const startChooseFiles = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (isDisabled.value || isReadonly.value || isOverLimit.value)
        return Promise.resolve(null);
      if (props.accept == "media") {
        chooseMedia();
      } else if (props.accept == "video") {
        chooseVideo();
      } else {
        chooseImage();
      }
    });
  };
  const previewFile = (file) => {
    if (file.fileType == "image" && props.preview == true) {
      const urls = fileList.value.filter((v) => {
        return v.fileType == "image";
      }).map((v) => {
        return v.url;
      });
      common_vendor.index.previewImage({
        current: urls.findIndex((v) => {
          return v == file.url;
        }),
        urls
      });
    }
    emit("clickPreview", file, fileList.value);
  };
  const handleRemove = (file, index) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (isDisabled.value || isReadonly.value)
        return Promise.resolve(null);
      if (typeof props.beforeRemove == "function") {
        const response = yield props.beforeRemove(file, index);
        if (response === false)
          return Promise.resolve(null);
      }
      fileList.value.splice(index, 1);
      emit("remove", file, index);
    });
  };
  const getFileViewName = (file) => {
    if (file.fileName != null)
      return file.fileName;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(file.fileType))
      return file.fileType;
    return file.url;
  };
  let isUpdating = false;
  common_vendor.watch(modelValue, () => {
    const newFiles = formatFileList();
    if (!isUpdating && !uni_modules_riceUi_libs_utils_basic.isSameValue(newFiles, fileList.value)) {
      isUpdating = true;
      fileList.value = newFiles;
      common_vendor.nextTick$1(() => {
        isUpdating = false;
      });
    }
  }, {
    deep: true
  });
  common_vendor.watch(fileList, (newVal) => {
    if (!isUpdating && !uni_modules_riceUi_libs_utils_basic.isSameValue(newVal, modelValue.value)) {
      modelValue.value = newVal;
    }
  }, {
    deep: true
  });
  const uploaderClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.is("disabled", isDisabled.value),
      ns.theme()
    ];
  });
  const uploadItemStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.width != null)
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor))
      css.set("background-color", props.bgColor);
    return css;
  });
  __expose({
    upload
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.showFileList
    }, _ctx.showFileList ? {
      b: common_vendor.f(common_vendor.unref(fileList), (item, index, i0) => {
        return common_vendor.e({
          a: item.fileType == "image" || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.poster)
        }, item.fileType == "image" || common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.poster) ? {
          b: getImageUrl(item),
          c: _ctx.imageMode
        } : item.fileType == "video" ? {
          e: item.url,
          f: _ctx.objectFit
        } : {
          g: "087e45b0-0-" + i0,
          h: common_vendor.p({
            name: "file-success-fill",
            size: "25px",
            class: "data-v-087e45b0"
          }),
          i: common_vendor.t(getFileViewName(item))
        }, {
          d: item.fileType == "video",
          j: item.fileType == "video"
        }, item.fileType == "video" ? {
          k: "087e45b0-1-" + i0,
          l: common_vendor.p({
            name: "play",
            size: "35px",
            color: "#fff",
            ["custom-style"]: {
              opacity: item.status == "failed" || item.status == "uploading" ? 0.4 : 0.8
            },
            class: "data-v-087e45b0"
          })
        } : {}, {
          m: item.status == "uploading" || item.status == "failed"
        }, item.status == "uploading" || item.status == "failed" ? common_vendor.e({
          n: item.status == "failed"
        }, item.status == "failed" ? {
          o: "087e45b0-2-" + i0,
          p: common_vendor.p({
            name: "clear",
            color: "#fff",
            size: "24px",
            class: "data-v-087e45b0"
          })
        } : item.status == "uploading" ? {
          r: "087e45b0-3-" + i0,
          s: common_vendor.p({
            color: "#fff",
            size: "22px",
            class: "data-v-087e45b0"
          })
        } : {}, {
          q: item.status == "uploading",
          t: common_vendor.t(getUploadingText(item))
        }) : {}, {
          v: showDeletable(item)
        }, showDeletable(item) ? {
          w: "087e45b0-4-" + i0,
          x: common_vendor.p({
            name: _ctx.deleteIcon,
            color: "#fff",
            size: "12px",
            ["custom-style"]: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(_ctx.deleteStyle).textCssProperty,
            class: "data-v-087e45b0"
          }),
          y: common_vendor.s(common_vendor.unref(uni_modules_riceUi_libs_utils_basic.splitCssProperty)(_ctx.deleteStyle).rectCssProperty),
          z: common_vendor.o(($event) => {
            return handleRemove(item, index);
          }, index)
        } : {}, {
          A: item.status == "success" && _ctx.showSuccess
        }, item.status == "success" && _ctx.showSuccess ? {
          B: "087e45b0-5-" + i0,
          C: common_vendor.p({
            name: "checked",
            color: "#fff",
            size: "12px",
            class: "data-v-087e45b0"
          })
        } : {}, {
          D: index,
          E: common_vendor.o(($event) => {
            return previewFile(item);
          }, index)
        });
      }),
      c: common_vendor.s(common_vendor.unref(uploadItemStyle))
    } : {}, {
      d: !common_vendor.unref(isOverLimit) || !_ctx.showFileList
    }, !common_vendor.unref(isOverLimit) || !_ctx.showFileList ? common_vendor.e({
      e: common_vendor.s(_ctx.uploadIconStyle),
      f: common_vendor.p({
        name: _ctx.uploadIcon,
        size: "26px",
        class: "data-v-087e45b0",
        style: common_vendor.normalizeStyle(_ctx.uploadIconStyle)
      }),
      g: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.uploadText)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.uploadText) ? {
      h: common_vendor.t(_ctx.uploadText)
    } : {}, {
      i: common_vendor.s(common_vendor.unref(uploadItemStyle)),
      j: common_vendor.o(startChooseFiles, "37")
    }) : {}, {
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.n(common_vendor.unref(uploaderClass)),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      n: common_vendor.s(_ctx.customStyle),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-087e45b0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-uploader/rice-uploader.js.map
