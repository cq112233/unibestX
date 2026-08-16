import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { _ as __easycom_2 } from "../rice-loading/rice-loading.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { e as isSameValue, a as addUnit, h as hasStrValue, s as splitCssProperty } from "../../libs/utils/basic.js";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "../rice-form/index.js";
import { g as getFileId, a as getFileType } from "./utils.js";
import { U as UploaderFileItem, a as UploaderComplete, b as UploaderFail, c as UploaderSuccess } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceUploaderRiceUploader";
const { inject, computed, ref, watch, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-uploader",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "3768ba4f",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-uploader/rice-uploader.uvue",
  __name: "rice-uploader",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    action: { type: String },
    accept: { default: "image", type: String },
    autoUpload: { type: Boolean, default: true },
    name: { type: String },
    header: { type: null },
    formData: { type: null },
    timeout: { default: 12e4, type: Number },
    maxCount: { default: 9, type: Number },
    maxDuration: { default: 60, type: Number },
    showFileList: { type: Boolean, default: true },
    preview: { type: Boolean, default: true },
    imageMode: { default: "scaleToFill", type: String },
    objectFit: { default: "contain", type: String },
    uploadIcon: { default: "camera", type: String },
    uploadIconStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    uploadText: { type: String },
    loadingText: { default: "上传中…", type: String },
    uploadFailText: { default: "上传失败", type: String },
    showPercent: { type: Boolean, default: false },
    showSuccess: { type: Boolean, default: true },
    deletable: { type: Boolean, default: true },
    deleteIcon: { default: "cross", type: String },
    deleteIconStyle: { type: null },
    width: { type: [String, Number] },
    height: { type: [String, Number] },
    bgColor: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    camera: { default: "back", type: String },
    pageOrientation: { default: "auto", type: String },
    uploadIconSize: { type: [String, Number] },
    deleteStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    sizeType: { default: () => {
      return ["original", "compressed"];
    }, type: Array },
    sourceType: { default: () => {
      return ["album", "camera"];
    }, type: Array },
    extension: { type: Array },
    successCode: { type: Number },
    beforeRead: { type: Function },
    afterRead: { type: Function },
    beforeUpload: { type: Function },
    beforeRemove: { type: Function },
    onSuccess: { type: Function },
    onFail: { type: Function },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: Array,
      default: () => {
        return [];
      }
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["add", "remove", "complete", "clickPreview", "error"], ["update:modelValue"]),
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceUploaderRiceUploaderSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("uploader");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const isDisabled = computed(() => {
      var _a2, _b;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.disabled) !== null && _b !== void 0 ? _b : false);
    });
    const isReadonly = computed(() => {
      var _a2, _b;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || ((_b = props.readonly) !== null && _b !== void 0 ? _b : false);
    });
    const formatFileList = () => {
      var _a2;
      const files = (_a2 = modelValue.value) !== null && _a2 !== void 0 ? _a2 : [];
      const list = files.map((file = null) => {
        var _a3, _b, _c;
        return new UploaderFileItem({
          url: null,
          poster: null,
          fileName: null,
          status: null,
          message: null,
          percent: null,
          size: null,
          duration: null,
          name: null,
          action: null,
          formData: null,
          header: null,
          ...file,
          uid: (_a3 = file.uid) !== null && _a3 !== void 0 ? _a3 : getFileId(),
          fileType: (_b = file.fileType) !== null && _b !== void 0 ? _b : getFileType(file),
          deletable: (_c = file.deletable) !== null && _c !== void 0 ? _c : props.deletable
        });
      });
      return list;
    };
    const fileList = ref(formatFileList());
    const isOverLimit = computed(() => {
      return fileList.value.length >= props.maxCount;
    });
    const remainCount = computed(() => {
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
    const uploadSingleFile = async (file) => {
      if (typeof props.beforeUpload == "function") {
        const response = await props.beforeUpload(file);
        if (response == false) {
          return Promise.resolve(null);
        }
      }
      return new Promise((resolve, reject) => {
        var _a2, _b, _c, _d, _e, _f;
        const uploadFail = (errCode, errMsg, data) => {
          file.status = "failed";
          const failInfo = new UploaderFail({ errCode, statusCode: errCode, errMsg, data, file });
          if (typeof props.onFail == "function") {
            props.onFail(failInfo, file);
          }
          reject(new Error(UTS.JSON.stringify(failInfo)));
        };
        const uploadSuccess = (res) => {
          const successInfo = new UploaderSuccess({ statusCode: res.statusCode, data: res.data, file });
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
        const formData = UTSJSONObject.assign((_c = props.formData) !== null && _c !== void 0 ? _c : new UTSJSONObject({}), (_d = file.formData) !== null && _d !== void 0 ? _d : new UTSJSONObject({}));
        const header = UTSJSONObject.assign((_e = props.header) !== null && _e !== void 0 ? _e : new UTSJSONObject({}), (_f = file.header) !== null && _f !== void 0 ? _f : new UTSJSONObject({}));
        const task = uni.uploadFile({
          url,
          filePath: file.url,
          formData,
          header,
          timeout: props.timeout,
          success: (res) => {
            const isSuccess = props.successCode != null ? isSameValue(res.statusCode, props.successCode) : true;
            isSuccess ? uploadSuccess(res) : uploadFail(res.statusCode, "上传失败", res.data);
          },
          fail: (err) => {
            const errData = typeof err.data == "string" ? err.data : "上传失败";
            const errCode = err.errCode;
            uploadFail(errCode, err.errMsg, errData);
          }
        });
        task.onProgressUpdate((res) => {
          file.percent = res.progress;
        });
      });
    };
    const startUpload = async (files) => {
      if (files.length <= 0) {
        return Promise.resolve(null);
      }
      const uploadFiles = files.map((file) => {
        return uploadSingleFile(file);
      });
      const results = await Promise.allSettled(uploadFiles);
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
        const err = rejected.reason;
        return UTS.JSON.parse(err.message);
      }).filter((v = null) => {
        return v != null;
      });
      emit("complete", fileList.value, new UploaderComplete({
        successList,
        failList
      }));
    };
    const upload = () => {
      const files = fileList.value.filter((v) => {
        return v.status == "ready";
      });
      startUpload(files);
    };
    const onAfterRead = async (files) => {
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
    };
    const readFiles = (files) => {
      if (files.length > remainCount.value) {
        files = files.slice(0, remainCount.value);
      }
      onAfterRead(files);
    };
    const onBeforeRead = async (files) => {
      if (typeof props.beforeRead == "function") {
        const response = await props.beforeRead(files);
        if (response == true) {
          readFiles(files);
        } else if (Array.isArray(response)) {
          const list = response.filter((v = null) => {
            return UTS.isInstanceOf(v, UploaderFileItem);
          });
          readFiles(list);
        }
      } else {
        readFiles(files);
      }
    };
    const chooseImage = () => {
      uni.chooseImage(new UTSJSONObject({
        pageOrientation: props.pageOrientation,
        count: remainCount.value,
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: (res) => {
          const tempFiles = res.tempFiles;
          const files = tempFiles.map((file) => {
            return new UploaderFileItem({
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
              uid: getFileId(),
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
        uni.getVideoInfo({
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
      uni.chooseVideo(new UTSJSONObject({
        pageOrientation: props.pageOrientation,
        sourceType: props.sourceType,
        maxDuration: props.maxDuration,
        camera: props.camera,
        success: (file) => {
          getVideoInfo(file.tempFilePath).then((poster) => {
            const files = [new UploaderFileItem({
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
              uid: getFileId(),
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
      uni.chooseMedia(new UTSJSONObject({
        pageOrientation: props.pageOrientation,
        count: remainCount.value,
        sourceType: props.sourceType,
        maxDuration: props.maxDuration,
        camera: props.camera,
        success: (res) => {
          const files = res.tempFiles.map((file) => {
            return new UploaderFileItem({
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
              uid: getFileId(),
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
    const startChooseFiles = async () => {
      if (isDisabled.value || isReadonly.value || isOverLimit.value)
        return Promise.resolve(null);
      if (props.accept == "media") {
        chooseMedia();
      } else if (props.accept == "video") {
        chooseVideo();
      } else {
        chooseImage();
      }
    };
    const previewFile = (file) => {
      if (file.fileType == "image" && props.preview == true) {
        const urls = fileList.value.filter((v) => {
          return v.fileType == "image";
        }).map((v) => {
          return v.url;
        });
        uni.previewImage({
          current: urls.findIndex((v) => {
            return v == file.url;
          }),
          urls
        });
      }
      emit("clickPreview", file, fileList.value);
    };
    const handleRemove = async (file, index) => {
      if (isDisabled.value || isReadonly.value)
        return Promise.resolve(null);
      if (typeof props.beforeRemove == "function") {
        const response = await props.beforeRemove(file, index);
        if (response === false)
          return Promise.resolve(null);
      }
      fileList.value.splice(index, 1);
      emit("remove", file, index);
    };
    const getFileViewName = (file) => {
      if (file.fileName != null)
        return file.fileName;
      if (hasStrValue(file.fileType))
        return file.fileType;
      return file.url;
    };
    let isUpdating = false;
    watch(modelValue, () => {
      const newFiles = formatFileList();
      if (!isUpdating && !isSameValue(newFiles, fileList.value)) {
        isUpdating = true;
        fileList.value = newFiles;
        nextTick(() => {
          isUpdating = false;
        });
      }
    }, {
      deep: true
    });
    watch(fileList, (newVal) => {
      if (!isUpdating && !isSameValue(newVal, modelValue.value)) {
        modelValue.value = newVal;
      }
    }, {
      deep: true
    });
    const uploaderClass = computed(() => {
      return [
        ns.b(""),
        ns.is("disabled", isDisabled.value),
        ns.theme()
      ];
    });
    const uploadItemStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.width != null)
        css.set("width", addUnit(props.width));
      if (props.height != null)
        css.set("height", addUnit(props.height));
      if (hasStrValue(props.bgColor))
        css.set("background-color", props.bgColor);
      return css;
    });
    __expose({
      upload
    });
    return () => {
      "raw js";
      const _component_video = _resolveComponent("video");
      const _component_rice_icon = __easycom_0;
      const _component_rice_loading = __easycom_2;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 8, _unref(uploaderClass));
        _setSharedDataStyle(__sharedData, 9, __props.customStyle);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showFileList));
      }, () => {
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return _unref(fileList);
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData_VFor0, 23, _unref(uploadItemStyle));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value.fileType == "image" || _unref(hasStrValue)(_for_item0.value.poster)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataAttr(__sharedData_VFor0, 2, _toSharedDataString(getImageUrl(_for_item0.value)));
              _setSharedDataAttr(__sharedData_VFor0, 3, _toSharedDataImageMode(__props.imageMode));
            });
          }, () => {
            return _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 4, _toSharedDataBoolean(_for_item0.value.fileType == "video"));
            }, () => {
              const n8 = _createSharedDataComponentWithFallback(_component_video, "95651b88-" + _for_key0.value, {
                src: () => {
                  return _for_item0.value.url;
                },
                controls: false,
                muted: true,
                "show-fullscreen-btn": false,
                "show-play-btn": false,
                "show-center-play-btn": false,
                "enable-progress-gesture": false,
                "object-fit": () => {
                  return __props.objectFit;
                },
                class: "rice-uploader__preview__image"
              });
              _setSharedData(__sharedData_VFor0, 5, n8?.sharedData);
            }, () => {
              const n10 = _createSharedDataComponentWithFallback(_component_rice_icon, "9565040a-" + _for_key0.value, {
                name: "file-success-fill",
                size: "25px"
              });
              _setSharedData(__sharedData_VFor0, 6, n10?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData_VFor0, 7, _toDisplayString(getFileViewName(_for_item0.value)));
              });
            }, 517);
          }, 261);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 8, _toSharedDataBoolean(_for_item0.value.fileType == "video"));
          }, () => {
            const n15 = _createSharedDataComponentWithFallback(_component_rice_icon, "9564f400-" + _for_key0.value, {
              name: "play",
              size: "35px",
              color: "#fff",
              "custom-style": () => {
                return { opacity: _for_item0.value.status == "failed" || _for_item0.value.status == "uploading" ? 0.4 : 0.8 };
              }
            });
            _setSharedData(__sharedData_VFor0, 9, n15?.sharedData);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 10, _toSharedDataBoolean(_for_item0.value.status == "uploading" || _for_item0.value.status == "failed"));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 11, _toSharedDataBoolean(_for_item0.value.status == "failed"));
            }, () => {
              const n21 = _createSharedDataComponentWithFallback(_component_rice_icon, "1740ff54-" + _for_key0.value, {
                name: "clear",
                color: "#fff",
                size: "24px"
              });
              _setSharedData(__sharedData_VFor0, 12, n21?.sharedData);
            }, () => {
              return _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 13, _toSharedDataBoolean(_for_item0.value.status == "uploading"));
              }, () => {
                const n23 = _createSharedDataComponentWithFallback(_component_rice_loading, "1740f842-" + _for_key0.value, {
                  color: "#fff",
                  size: "22px"
                });
                _setSharedData(__sharedData_VFor0, 14, n23?.sharedData);
              });
            }, 1029);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData_VFor0, 15, _toDisplayString(getUploadingText(_for_item0.value)));
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 16, _toSharedDataBoolean(showDeletable(_for_item0.value)));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor0, 19, _unref(splitCssProperty)(__props.deleteStyle).rectCssProperty);
            });
            _createSharedDataSlot("delete", null, null, () => {
              const n30 = _createSharedDataComponentWithFallback(_component_rice_icon, "1740e008-" + _for_key0.value, {
                name: () => {
                  return __props.deleteIcon;
                },
                color: "#fff",
                size: "12px",
                "custom-style": () => {
                  return _unref(splitCssProperty)(__props.deleteStyle).textCssProperty;
                }
              });
              _setSharedData(__sharedData_VFor0, 17, n30?.sharedData);
            });
            _setSharedDataEvent(__sharedData_VFor0, 18, () => {
              return handleRemove(_for_item0.value, _for_key0.value);
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 20, _toSharedDataBoolean(_for_item0.value.status == "success" && __props.showSuccess));
          }, () => {
            const n34 = _createSharedDataComponentWithFallback(_component_rice_icon, "1740cac8-" + _for_key0.value, {
              name: "checked",
              color: "#fff",
              size: "12px"
            });
            _setSharedData(__sharedData_VFor0, 21, n34?.sharedData);
          });
          _setSharedDataEvent(__sharedData_VFor0, 22, () => {
            return previewFile(_for_item0.value);
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(!_unref(isOverLimit) || !__props.showFileList));
      }, () => {
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 6, _unref(uploadItemStyle));
          });
          const n41 = _createSharedDataComponentWithFallback(_component_rice_icon, "17401d12", {
            name: () => {
              return __props.uploadIcon;
            },
            size: "26px",
            style: () => {
              return __props.uploadIconStyle;
            }
          });
          _setSharedData(__sharedData, 3, n41?.sharedData);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 4, _toSharedDataBoolean(_unref(hasStrValue)(__props.uploadText)));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 5, _toDisplayString(__props.uploadText));
            });
          });
        });
        _setSharedDataEvent(__sharedData, 7, startChooseFiles);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-uploader.js.map
