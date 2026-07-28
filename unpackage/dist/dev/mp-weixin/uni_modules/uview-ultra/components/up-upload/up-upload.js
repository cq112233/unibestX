"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upUpload_utils = require("./utils.js");
const uni_modules_uviewUltra_components_upUpload_mixin = require("./mixin.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
require("./types.js");
function createStringList(values = []) {
  return values;
}
function createCaptureList() {
  return ["album", "camera"];
}
function createFileList() {
  return [];
}
function createHeader() {
  return new UTSJSONObject({});
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-upload",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upUpload_mixin.mixinUpload],
  props: {
    accept: {
      type: String,
      default: "image"
    },
    extension: {
      type: Array,
      default() {
        return createStringList();
      }
    },
    capture: {
      type: [Array, String],
      default() {
        return createCaptureList();
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
      default() {
        return createStringList(["original", "compressed"]);
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
      default() {
        return createFileList();
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
      default() {
        return createHeader();
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
    }
  },
  data() {
    return {
      lists: [],
      isInCount: true,
      popupShow: false,
      currentItemIndex: -1
    };
  },
  watch: {
    // 监听文件列表的变化，重新整理内部数据
    fileList: {
      handler() {
        this.formatFileList();
      },
      immediate: true,
      deep: true
    },
    deletable(newVal = null) {
      this.formatFileList();
    },
    maxCount(newVal = null) {
      this.formatFileList();
    },
    accept(newVal = null) {
      this.formatFileList();
    },
    popupShow(newVal = null) {
      if (!newVal) {
        this.currentItemIndex = -1;
      }
    }
  },
  emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview", "update:fileList", "afterAutoUpload"],
  methods: {
    t(key) {
      return uni_modules_uviewUltra_libs_i18n_index.t(key, new UTSJSONObject({}));
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    videoErrorCallback() {
    },
    loadedVideoMetadata(e = null) {
      if (this.currentItemIndex < 0) {
        return null;
      }
      if (this.autoUploadDriver != "local") {
        return null;
      }
      if (!this.getVideoThumb) {
        return null;
      }
      this.lists[this.currentItemIndex].width;
      this.lists[this.currentItemIndex].height;
      common_vendor.index.getSystemInfoSync().pixelRatio;
    },
    formatFileList() {
      let fileList = this.fileList;
      let maxCount = parseInt(this.maxCount.toString());
      let lists = [];
      fileList.forEach((item) => {
        var _a, _b;
        const name = item["name"] != null ? item["name"] : item["url"] != null ? item["url"] : item["thumb"];
        let tmp = UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), new UTSJSONObject({
          // 如果item.url为本地选择的blob文件的话，无法判断其为video还是image，此处优先通过accept做判断处理
          isImage: item["name"] != null ? uni_modules_uviewUltra_libs_function_test.image(item["name"]) : (_a = this.accept === "image") !== null && _a !== void 0 ? _a : uni_modules_uviewUltra_libs_function_test.image(name),
          isVideo: item["name"] != null ? uni_modules_uviewUltra_libs_function_test.video(item["name"]) : (_b = this.accept === "video") !== null && _b !== void 0 ? _b : uni_modules_uviewUltra_libs_function_test.video(name),
          deletable: typeof item.deletable === "boolean" ? item.deletable : this.deletable
        }));
        let tmpObj = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(tmp));
        if (tmpObj != null) {
          lists.push(tmpObj);
        }
      });
      this.lists = lists;
      this.isInCount = lists.length < maxCount;
    },
    // @tap 事件处理器，不接收事件对象参数，内部透传到 chooseFile
    onChooseTap() {
      this.chooseFile(new UTSJSONObject({}));
    },
    chooseFile(params) {
      let maxCount = this.maxCount;
      this.multiple;
      let lists = this.lists;
      let disabled = this.disabled;
      if (disabled)
        return false;
      const chooseParams = UTSJSONObject.assign(new UTSJSONObject({
        accept: this.accept,
        extension: this.extension,
        multiple: this.multiple,
        capture: this.capture,
        compressed: this.compressed,
        maxDuration: this.maxDuration,
        sizeType: this.sizeType,
        camera: this.camera
      }), new UTSJSONObject(Object.assign({ maxCount: maxCount - lists.length }, params)));
      let chooseParamsObj = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(chooseParams));
      if (chooseParamsObj != null) {
        uni_modules_uviewUltra_components_upUpload_utils.chooseFile(chooseParamsObj).then((res) => {
          const result = chooseParams["multiple"] != null && chooseParams["multiple"] != false ? res : res;
          this.onBeforeRead(result);
        });
      }
      return true;
    },
    // 文件读取之前
    onBeforeRead(file) {
      let beforeRead = this.beforeRead;
      let useBeforeRead = this.useBeforeRead;
      let res = file;
      if (beforeRead != null && uni_modules_uviewUltra_libs_function_test.func(beforeRead)) {
        res = beforeRead(file, this.getDetail(null));
      }
      if (useBeforeRead) {
        this.$emit("beforeRead", UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({
          file: this.convertFileToUTSJSON(file)
        }), this.getDetail(null)), new UTSJSONObject({
          callback: (ok) => {
            if (ok) {
              this.onAfterRead(file);
            }
          }
        })));
        return null;
      }
      if (uni_modules_uviewUltra_libs_function_test.promise(res))
        ;
      else {
        if (typeof res == "boolean" && !res) {
          return null;
        }
        const readFile = res != null ? res : file;
        this.onAfterRead(readFile);
      }
    },
    // 将 UPUploadFileChoosed 数组转换为 UTSJSONObject 数组，用于 emit 到父组件
    convertFileToUTSJSON(file) {
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
    },
    getDetail(index = null) {
      const fileList = this.fileList;
      return new UTSJSONObject({
        name: this.name,
        // @ts-ignore
        index: index == null ? fileList.length : index
      });
    },
    onAfterRead(file) {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        let maxSize = this.maxSize;
        let afterRead = this.afterRead;
        const fileList = this.fileList;
        const even = (item = null) => {
          let tmp = item != null && item.size != null ? item.size : 0;
          return tmp > maxSize;
        };
        const oversize = file.some(even);
        if (oversize) {
          common_vendor.index.showToast({
            title: uni_modules_uviewUltra_libs_i18n_index.t("up.upload.sizeExceed", new UTSJSONObject({}))
          });
          this.$emit("oversize", UTSJSONObject.assign(new UTSJSONObject({
            file: this.convertFileToUTSJSON(file)
          }), this.getDetail(null)));
          return Promise.resolve(null);
        }
        let len = fileList.length;
        if (this.autoUpload) {
          let lists = [].concat(file);
          fileList.length;
          lists.map((item) => {
            const itemJSON = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(item));
            if (itemJSON != null) {
              fileList.push(UTSJSONObject.assign(itemJSON, new UTSJSONObject({
                status: "uploading",
                message: uni_modules_uviewUltra_libs_i18n_index.t("up.upload.uploading", new UTSJSONObject({})),
                progress: 0
              })));
            }
          });
          let that = this;
          this.$emit("update:fileList", fileList);
          for (let i = 0; i < lists.length; i++) {
            let j = i;
            let result = "";
            switch (this.autoUploadDriver) {
              case "cos":
                break;
              case "kodo":
                break;
              case "oss":
              case "upload_oss":
                console.log();
                let formData = new UTSJSONObject({});
                common_vendor.index.request({
                  url: this.autoUploadAuthUrl,
                  method: "GET",
                  header: this.autoUploadHeader,
                  data: new UTSJSONObject({
                    filename: lists[j]["name"]
                  }),
                  success: (ret) => {
                    var _a;
                    let res0 = ret.data;
                    if (res0["code"] == 200) {
                      formData = res0.getAny("data.params");
                    } else {
                      common_vendor.index.showToast({
                        title: res0["msg"],
                        duration: 1500
                      });
                      return null;
                    }
                    if (res0.getString("data.params.host") != null) {
                      var uploadTask2 = common_vendor.index.uploadFile({
                        url: (_a = res0.getString("data.params.host")) !== null && _a !== void 0 ? _a : "",
                        filePath: lists[j].url,
                        name: "file",
                        // fileType: 'video', // 仅支付宝小程序，且必填。
                        // header: header,
                        formData,
                        success: (uploadFileRes) => {
                          let thumb = "";
                          let uploadRes = common_vendor.UTS.JSON.parseObject(uploadFileRes.data);
                          result = res0.getString("data.params.host") + "/" + res0.getString("data.params.key");
                          if (that.accept === "video" || uni_modules_uviewUltra_libs_function_test.video(result)) {
                            thumb = result + "?x-oss-process=video/snapshot,t_10000,m_fast";
                          }
                          if (that.customAfterAutoUpload) {
                            that.emitAfterAutoUpload(uploadRes, len + j, result, thumb);
                          } else {
                            that.succcessUpload(len + j, result, thumb);
                          }
                        }
                      });
                      uploadTask2.onProgressUpdate((res) => {
                        that.updateUpload(len + j, new UTSJSONObject({
                          progress: res.progress
                        }));
                      });
                    }
                  }
                });
                break;
              case "local":
              default:
                var uploadTask = common_vendor.index.uploadFile({
                  url: this.autoUploadApi,
                  filePath: lists[j].url,
                  name: "file",
                  // fileType: 'video', // 仅支付宝小程序，且必填。
                  header: this.autoUploadHeader,
                  success: (uploadFileRes) => {
                    var _a;
                    let res0 = common_vendor.UTS.JSON.parseObject(uploadFileRes.data);
                    if (that.customAfterAutoUpload) {
                      that.emitAfterAutoUpload(res0, len + j);
                    } else {
                      if (res0["code"] != 200) {
                        common_vendor.index.showToast({
                          title: res0["msg"]
                        });
                      } else {
                        result = (_a = res0.getString("data.url")) !== null && _a !== void 0 ? _a : "";
                        that.succcessUpload(len + j, result);
                      }
                    }
                  }
                });
                uploadTask.onProgressUpdate((res) => {
                  that.updateUpload(len + j, new UTSJSONObject({
                    progress: res.progress
                  }));
                });
                break;
            }
          }
        } else {
          if (typeof afterRead === "function") {
            afterRead(file, this.getDetail(null));
          }
          this.$emit("afterRead", UTSJSONObject.assign(new UTSJSONObject({
            file: this.convertFileToUTSJSON(file)
          }), this.getDetail(null)));
        }
      });
    },
    emitAfterAutoUpload(res = null, index, defaultUrl = "", defaultThumb = "") {
      const payload = UTSJSONObject.assign(res != null ? res : new UTSJSONObject({}), new UTSJSONObject({
        url: defaultUrl,
        thumb: defaultThumb,
        callback: (r) => {
          var _a, _b;
          const url = (_a = r.getString("url")) !== null && _a !== void 0 ? _a : defaultUrl;
          if (url == "") {
            return null;
          }
          const thumb = (_b = r.getString("thumb")) !== null && _b !== void 0 ? _b : defaultThumb;
          this.succcessUpload(index, url, thumb);
        }
      }));
      this.$emit("afterAutoUpload", payload);
    },
    updateUpload(index, param) {
      const fileList = this.fileList;
      let item = fileList[index];
      fileList.splice(index, 1, new UTSJSONObject(Object.assign(Object.assign({}, item), {
        // 注意这里不判断会出现succcessUpload先执行又被覆盖的问题
        status: param["progress"] == 100 ? "success" : "uploading",
        message: "",
        progress: param["progress"]
      })));
      this.$emit("update:fileList", fileList);
    },
    succcessUpload(index, url, thumb = "") {
      const fileList = this.fileList;
      let item = fileList[index];
      fileList.splice(index, 1, new UTSJSONObject(Object.assign(Object.assign({}, item), { status: "success", message: "", url, progress: 100, thumb })));
      this.$emit("update:fileList", fileList);
    },
    deleteItem(index) {
      const fileList = this.fileList;
      if (this.autoDelete) {
        fileList.splice(index, 1);
        this.$emit("update:fileList", fileList);
      } else {
        this.$emit("delete", UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), this.getDetail(index)), new UTSJSONObject({
          file: fileList[index]
        })));
      }
    },
    // 预览图片
    onPreviewImage(previewItem, index) {
      if (!previewItem.isImage || !this.previewFullImage)
        return null;
      let current = 0;
      const urls = [];
      let imageIndex = 0;
      for (var i = 0; i < this.lists.length; i++) {
        const item = this.lists[i];
        if (item.isImage || item.type != null && item.type === "image") {
          urls.push(item.url != null ? item.url : item.thumb);
          if (i === index) {
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
          uni_modules_uviewUltra_libs_function_index.toast(uni_modules_uviewUltra_libs_i18n_index.t("up.upload.previewImageFail", new UTSJSONObject({})));
        }
      });
    },
    onPreviewVideo(previewItem, index) {
      if (!this.previewFullImage)
        return null;
      let current = 0;
      const sources = [];
      let videoIndex = 0;
      for (var i = 0; i < this.lists.length; i++) {
        const item = this.lists[i];
        if (item.isVideo || item.type != null && item.type === "video") {
          sources.push(UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), new UTSJSONObject({
            type: "video"
          })));
          if (i === index) {
            current = videoIndex;
          }
          videoIndex += 1;
        }
      }
      if (sources.length < 1) {
        return null;
      }
      common_vendor.wx$1.previewMedia(new UTSJSONObject({
        sources,
        current,
        fail() {
          uni_modules_uviewUltra_libs_function_index.toast(t("up.upload.previewVideoFail"));
        }
      }));
    },
    onClickPreview(item, index) {
      if (this.previewFullImage) {
        switch (item.type) {
          case "image":
            this.onPreviewImage(item, index);
            break;
          case "video":
            this.onPreviewVideo(item, index);
            break;
        }
      }
      this.$emit(
        "clickPreview",
        // @ts-ignore
        UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), this.getDetail(index))
      );
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_gap2 = common_vendor.resolveComponent("up-gap");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon2 + _easycom_up_loading_icon2 + _easycom_up_gap2 + _easycom_up_popup2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_gap = () => "../up-gap/up-gap.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_loading_icon + _easycom_up_gap + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $props.previewImage
  }, $props.previewImage ? {
    b: common_vendor.f($data.lists, (item, index, i0) => {
      return common_vendor.e({
        a: item.isImage || item.type != null && item.type === "image"
      }, item.isImage || item.type != null && item.type === "image" ? {
        b: item.thumb != null ? item.thumb : item.url,
        c: $props.imageMode,
        d: common_vendor.o(($event) => $options.onClickPreview(item, index), index),
        e: common_vendor.s({
          width: $options.addUnit($props.width),
          height: $options.addUnit($props.height)
        })
      } : (item.isVideo || item.type != null && item.type === "video") && $props.getVideoThumb ? common_vendor.e({
        g: item.thumb
      }, item.thumb ? {
        h: item.thumb,
        i: $props.imageMode,
        j: common_vendor.o(($event) => $options.onClickPreview(item, index), index),
        k: common_vendor.s({
          width: $options.addUnit($props.width),
          height: $options.addUnit($props.height)
        })
      } : {
        l: "bac2b514-0-" + i0,
        m: common_vendor.p({
          color: "#80CBF9",
          size: "26",
          name: item.isVideo || item.type != null && item.type === "video" ? "movie" : "file-text",
          class: "data-v-bac2b514"
        })
      }, {
        n: item.status === "success"
      }, item.status === "success" ? common_vendor.e({
        o: _ctx.$slots["playIcon"] == null
      }, _ctx.$slots["playIcon"] == null ? {
        p: "bac2b514-1-" + i0,
        q: common_vendor.p({
          name: "play-right",
          size: "22px",
          class: "up-upload__wrap__play__icon data-v-bac2b514"
        })
      } : {}, {
        r: common_vendor.o(($event) => $options.onClickPreview(item, index), index)
      }) : {}, {
        s: $options.addUnit($props.width),
        t: $options.addUnit($props.height)
      }) : {
        v: "bac2b514-2-" + i0,
        w: common_vendor.p({
          color: "#80CBF9",
          size: "26",
          name: item.isVideo || item.type != null && item.type === "video" ? "movie" : "folder",
          class: "data-v-bac2b514"
        }),
        x: common_vendor.t(item.isVideo || item.type != null && item.type === "video" ? item.name != null ? item.name : _ctx.$t("up.common.video") : item.name != null ? item.name : _ctx.$t("up.common.file")),
        y: common_vendor.o(($event) => $options.onClickPreview(item, index), index),
        z: common_vendor.s({
          width: $options.addUnit($props.width),
          height: $options.addUnit($props.height)
        })
      }, {
        f: (item.isVideo || item.type != null && item.type === "video") && $props.getVideoThumb,
        A: item.status === "uploading" || item.status === "failed"
      }, item.status === "uploading" || item.status === "failed" ? common_vendor.e({
        B: item.status === "failed"
      }, item.status === "failed" ? {
        C: "bac2b514-3-" + i0,
        D: common_vendor.p({
          name: "close-circle",
          color: "#ffffff",
          size: "25",
          class: "data-v-bac2b514"
        })
      } : {
        E: "bac2b514-4-" + i0,
        F: common_vendor.p({
          size: "22",
          mode: "circle",
          class: "data-v-bac2b514"
        })
      }, {
        G: item.message
      }, item.message ? {
        H: common_vendor.t(item.message)
      } : {}, {
        I: (item.progress ?? 0) + "%",
        J: "bac2b514-5-" + i0,
        K: common_vendor.p({
          height: "3px",
          class: "up-upload__progress data-v-bac2b514",
          style: common_vendor.normalizeStyle({
            width: (item.progress ?? 0) + "%"
          })
        })
      }) : {}, {
        L: item.status !== "uploading" && ($props.deletable || item.deletable)
      }, item.status !== "uploading" && ($props.deletable || item.deletable) ? {
        M: "bac2b514-6-" + i0,
        N: common_vendor.p({
          name: "close",
          color: "#ffffff",
          size: "10",
          class: "data-v-bac2b514"
        }),
        O: common_vendor.o(($event) => $options.deleteItem(index), index)
      } : {}, {
        P: item.status === "success"
      }, item.status === "success" ? {
        Q: "bac2b514-7-" + i0,
        R: common_vendor.p({
          name: "checkmark",
          color: "#ffffff",
          size: "12",
          class: "data-v-bac2b514"
        })
      } : {}, {
        S: index
      });
    })
  } : {}, {
    c: $data.isInCount
  }, $data.isInCount ? common_vendor.e({
    d: _ctx.$slots["trigger"] != null
  }, _ctx.$slots["trigger"] != null ? {
    e: common_vendor.o((...args) => $options.onChooseTap && $options.onChooseTap(...args), "ef")
  } : _ctx.$slots["trigger"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? {
    g: common_vendor.o((...args) => $options.onChooseTap && $options.onChooseTap(...args), "84")
  } : common_vendor.e({
    h: common_vendor.p({
      name: $props.uploadIcon,
      size: "26",
      color: $props.uploadIconColor,
      class: "data-v-bac2b514"
    }),
    i: $props.uploadText
  }, $props.uploadText ? {
    j: common_vendor.t($props.uploadText)
  } : {}, {
    k: !$props.disabled ? "up-upload__button--hover" : "",
    l: common_vendor.o((...args) => $options.onChooseTap && $options.onChooseTap(...args), "6b"),
    m: common_vendor.n($props.disabled ? "up-upload__button--disabled" : ""),
    n: common_vendor.s({
      width: $options.addUnit($props.width),
      height: $options.addUnit($props.height)
    })
  }), {
    f: _ctx.$slots["trigger"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null)
  }) : {}, {
    o: common_vendor.sei("myCanvas", "canvas"),
    p: $data.popupShow
  }, $data.popupShow ? {
    q: common_vendor.sei("myVideo", "video"),
    r: $data.currentItemIndex >= 0 ? $data.lists[$data.currentItemIndex].url : "",
    s: common_vendor.o((...args) => $options.videoErrorCallback && $options.videoErrorCallback(...args), "f0"),
    t: $props.videoPreviewObjectFit
  } : {}, {
    v: common_vendor.o(($event) => $data.popupShow = $event, "a9"),
    w: common_vendor.p({
      mode: "center",
      show: $data.popupShow,
      class: "data-v-bac2b514"
    }),
    x: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    y: common_vendor.s($options.addStyle(_ctx.customStyle)),
    z: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bac2b514"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-upload/up-upload.js.map
