import { C as Card } from "./Card.js";
import { F as FOO_UPLOAD_PATH, g as getFooList, f as foo, u as uploadFooFile } from "../../../api/foo.js";
import { a as DEFAULT_OSS_BASE_URL } from "../../../utils/upload.js";
import { J as Js } from "../../../../@dcloudio/uni-cloud.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsHttpDemoCard";
const { computed, ref } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/basic/components/HttpDemoCard.uvue",
  __name: "HttpDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsHttpDemoCardSharedData", sharedDataClassId: 0 })));
    const mockList = ref([]);
    const loading = ref(false);
    const requestStatus = ref("idle");
    const responseData = ref(null);
    const errorMsg = ref("");
    const userInfo = ref("");
    const cloudLoading = ref(false);
    const cloudErrorMsg = ref("");
    const uploadPath = ref(FOO_UPLOAD_PATH);
    const uploadLoading = ref(false);
    const uploadResult = ref("");
    const uploadError = ref("");
    const statusText = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "请求中";
        case "success":
          return "请求成功";
        case "error":
          return "请求失败";
        default:
          return "待请求";
      }
    });
    const statusTextClass = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "wtu-kl45yb-2k";
        case "success":
          return "wtu-fv1izt-2l";
        case "error":
          return "wtu-1ivzueh-16";
        default:
          return "wtu-6tsugz-15";
      }
    });
    const statusBgClass = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "wtu-1xrn6ww-2m";
        case "success":
          return "wtu-k3m9e2-2n";
        case "error":
          return "wtu-1jk4s61-2o";
        default:
          return "wtu-1y83w1l-1f";
      }
    });
    const hasResponseData = computed(() => {
      return responseData.value != null;
    });
    const hasErrorMsg = computed(() => {
      return errorMsg.value.length > 0;
    });
    const responseText = computed(() => {
      const data = responseData.value;
      if (data == null)
        return "";
      return `id: ${data.id}, name: ${data.name}`;
    });
    const hasCloudError = computed(() => {
      return cloudErrorMsg.value.length > 0;
    });
    const cloudStatusText = computed(() => {
      if (cloudLoading.value)
        return "连接中";
      if (hasCloudError.value)
        return "连接失败";
      return "已连接";
    });
    const cloudStatusBgClass = computed(() => {
      if (cloudLoading.value)
        return "wtu-1xrn6ww-2m";
      if (hasCloudError.value)
        return "wtu-1jk4s61-2o";
      return "wtu-p7uzb7-2p";
    });
    const cloudStatusDotClass = computed(() => {
      if (cloudLoading.value)
        return "wtu-o857rv-2q";
      if (hasCloudError.value)
        return "wtu-1f8d0xd-2r";
      return "wtu-tcezrl-2s";
    });
    const cloudStatusTextClass = computed(() => {
      if (cloudLoading.value)
        return "wtu-92z56f-2t";
      if (hasCloudError.value)
        return "wtu-y8jpqd-2u";
      return "wtu-1t7q418-l";
    });
    const hasUploadError = computed(() => {
      return uploadError.value.length > 0;
    });
    const hasUploadResult = computed(() => {
      return uploadResult.value.length > 0;
    });
    const uploadResultText = computed(() => {
      return uploadResult.value;
    });
    async function loadMockData() {
      try {
        const list = await getFooList();
        mockList.value = list;
      } catch (err) {
        uni.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:308", "loadMockData error:", err);
      }
    }
    async function fetchRealApi() {
      var _a, _b;
      loading.value = true;
      requestStatus.value = "loading";
      responseData.value = null;
      errorMsg.value = "";
      try {
        const res = await foo();
        responseData.value = res;
        requestStatus.value = "success";
      } catch (err) {
        uni.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:328", err, "err");
        requestStatus.value = "error";
        let msg = "请求失败";
        if (UTS.isInstanceOf(err, Error)) {
          msg = err.message;
        } else if (UTS.isInstanceOf(err, UTSJSONObject)) {
          const errMsg = (_b = (_a = err.getString("message")) !== null && _a !== void 0 ? _a : err.getString("msg")) !== null && _b !== void 0 ? _b : err.getString("errMsg");
          if (errMsg != null) {
            msg = errMsg;
          } else {
            msg = UTS.JSON.stringify(err);
          }
        } else if (err != null) {
          msg = `${err}`;
        }
        errorMsg.value = msg;
      }
      loading.value = false;
    }
    async function getUserInfo() {
      cloudLoading.value = true;
      cloudErrorMsg.value = "";
      try {
        const res = await Js.importObject("user").getUserInfo();
        userInfo.value = UTS.JSON.stringify(res.data);
        uni.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:359", "res", res);
      } catch (err) {
        cloudErrorMsg.value = "云端数据获取失败，请检查 uniCloud 配置后重试";
        uni.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:363", "getUserInfo error:", err);
      }
      cloudLoading.value = false;
    }
    async function uploadFileByPath(filePath) {
      if (DEFAULT_OSS_BASE_URL == "" || DEFAULT_OSS_BASE_URL.includes("xxx") || uploadPath.value == "" || uploadPath.value.includes("xxx")) {
        uploadError.value = "请在对应环境的 .env 文件中配置真实的 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH";
        uni.showToast({
          title: "请先在 .env 中配置真实上传地址",
          icon: "none"
        });
        return Promise.resolve(null);
      }
      uploadLoading.value = true;
      uploadError.value = "";
      uploadResult.value = "";
      try {
        const ossUrl = await uploadFooFile(filePath, true, uploadPath.value);
        uploadResult.value = ossUrl;
      } catch (err) {
        let msg = "上传失败";
        if (UTS.isInstanceOf(err, Error)) {
          msg = err.message;
        } else if (err != null) {
          msg = `${err}`;
        }
        uploadError.value = msg;
      }
      uploadLoading.value = false;
    }
    function chooseAndUpload() {
      if (uploadLoading.value) {
        return null;
      }
      uploadError.value = "";
      uni.chooseImage(new UTSJSONObject({
        count: 1,
        sourceType: ["album", "camera"],
        success: (res) => {
          const paths = res.tempFilePaths;
          if (paths.length <= 0) {
            uploadError.value = "未选择文件";
            return null;
          }
          uploadFileByPath(paths[0]);
        },
        fail: (err) => {
          uni.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:423", "chooseImage fail:", err);
          let errMsg = "";
          if (err != null && err.errMsg != null) {
            errMsg = `${err.errMsg}`;
          }
          if (errMsg.includes("cancel")) {
            return null;
          }
          uploadError.value = errMsg != "" ? `选择文件失败: ${errMsg}` : "选择文件失败";
        }
      }));
    }
    function copyUploadUrl() {
      const url = uploadResult.value;
      if (url == "") {
        return null;
      }
      uni.setClipboardData({
        data: url,
        showToast: false,
        success: () => {
          uni.showToast({ title: "链接已复制", icon: "success" });
        }
      });
    }
    function previewUploadedImage() {
      const url = uploadResult.value;
      if (url == "") {
        return null;
      }
      uni.previewImage({
        urls: [url]
      });
    }
    onMounted(() => {
      loadMockData();
      getUserInfo();
    });
    return () => {
      "raw js";
      const n97 = _createSharedDataComponent(
        Card,
        "51bfa7fe",
        { title: "HTTP 请求 Demo" },
        {
          "default": () => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 23, ["weapp-tw-border wtu-1p3s0p7-9 wtu-or3po3-a wtu-1jy1lu-q wtu-t9pnvh-r wtu-edhfgi-s", cloudStatusBgClass.value]);
              _setSharedDataClass(__sharedData, 24, ["weapp-tw-border wtu-ga9uen-t wtu-1l83xre-u wtu-11tvxcq-v wtu-ofr59w-w", cloudStatusDotClass.value]);
              _setSharedDataClass(__sharedData, 25, ["weapp-tw-border wtu-52xho3-o", cloudStatusTextClass.value]);
              _setSharedData(__sharedData, 26, _toDisplayString(cloudStatusText.value));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(cloudLoading.value));
            }, () => {
            }, () => {
              return _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 2, _toSharedDataBoolean(hasCloudError.value));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 3, _toDisplayString(cloudErrorMsg.value));
                });
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 4, _toDisplayString(userInfo.value));
                });
              }, 517);
            }, 261);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 5, _toSharedDataBoolean(hasCloudError.value));
            }, () => {
              _setSharedDataEvent(__sharedData, 6, getUserInfo);
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return mockList.value;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                _setSharedData(__sharedData_VFor0, 1, _toDisplayString(_item.id));
                _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_item.name));
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            });
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 27, ["weapp-tw-border wtu-1jy1lu-q wtu-uaewvr-1n wtu-edhfgi-s", statusBgClass.value]);
              _setSharedDataClass(__sharedData, 28, ["weapp-tw-border wtu-mcng40-6", statusTextClass.value]);
              _setSharedData(__sharedData, 29, _toDisplayString(statusText.value));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 8, _toSharedDataBoolean(hasResponseData.value));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 9, _toDisplayString(responseText.value));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 10, _toSharedDataBoolean(hasErrorMsg.value));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 11, _toDisplayString(errorMsg.value));
              });
            });
            _setSharedDataEvent(__sharedData, 20, loadMockData);
            _setSharedDataEvent(__sharedData, 21, fetchRealApi);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 30, _toDisplayString(loading.value ? "请求中..." : "真实 API 请求"));
              _setSharedData(__sharedData, 31, _toDisplayString(uploadPath.value));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 12, _toSharedDataBoolean(uploadLoading.value));
            }, () => {
            }, () => {
              return _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 13, _toSharedDataBoolean(hasUploadError.value));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 14, _toDisplayString(uploadError.value));
                });
              }, () => {
                return _createSharedDataIf(() => {
                  return _setSharedData(__sharedData, 15, _toSharedDataBoolean(hasUploadResult.value));
                }, () => {
                  _setSharedDataEvent(__sharedData, 16, previewUploadedImage);
                  _setSharedDataEvent(__sharedData, 17, copyUploadUrl);
                  _renderSharedDataEffect(() => {
                    const _uploadResultText = uploadResultText.value;
                    _setSharedDataAttr(__sharedData, 18, _toSharedDataString(_uploadResultText));
                    _setSharedData(__sharedData, 19, _toDisplayString(_uploadResultText));
                  });
                }, () => {
                }, 2053);
              }, 1797);
            }, 1541);
            _setSharedDataEvent(__sharedData, 22, chooseAndUpload);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 32, _toDisplayString(uploadLoading.value ? "上传中..." : "选择图片并上传"));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n97.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const HttpDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  HttpDemoCard as H
};
