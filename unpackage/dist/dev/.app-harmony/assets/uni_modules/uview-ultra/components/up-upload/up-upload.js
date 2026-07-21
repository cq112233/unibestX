import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, createBlock, renderSlot, createCommentVNode, createVNode, toDisplayString, withModifiers, normalizeClass, withCtx } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_3 } from "../up-gap/up-gap.js";
import { _ as __easycom_2 } from "../up-popup/up-popup.js";
import { c as chooseFile } from "./utils.js";
import { m as mixinUpload } from "./mixin.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, b as addStyle, t as toast } from "../../libs/function/index.js";
import { i as image, v as video, f as func, p as promise } from "../../libs/function/test.js";
import { t } from "../../libs/i18n/index.js";
import "./types.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _sfc_main = defineComponent({
  name: "up-upload",
  mixins: [mpMixin, mixin, mixinUpload],
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
      return t(key, new UTSJSONObject({}));
    },
    addUnit(e = null) {
      return addUnit(e);
    },
    addStyle(e = null) {
      return addStyle(e);
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
      uni.getSystemInfoSync().pixelRatio;
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
          isImage: item["name"] != null ? image(item["name"]) : (_a = this.accept === "image") !== null && _a !== void 0 ? _a : image(name),
          isVideo: item["name"] != null ? video(item["name"]) : (_b = this.accept === "video") !== null && _b !== void 0 ? _b : video(name),
          deletable: typeof item.deletable === "boolean" ? item.deletable : this.deletable
        }));
        let tmpObj = UTS.JSON.parse(UTS.JSON.stringify(tmp));
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
      }), new UTSJSONObject({
        maxCount: maxCount - lists.length,
        ...params
      }));
      let chooseParamsObj = UTS.JSON.parseObject(UTS.JSON.stringify(chooseParams));
      if (chooseParamsObj != null) {
        chooseFile(chooseParamsObj).then((res) => {
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
      if (beforeRead != null && func(beforeRead)) {
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
      if (promise(res))
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
          const obj = UTS.JSON.parseObject(UTS.JSON.stringify(item));
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
    async onAfterRead(file) {
      let maxSize = this.maxSize;
      let afterRead = this.afterRead;
      const fileList = this.fileList;
      const even = (item = null) => {
        let tmp = item != null && item.size != null ? item.size : 0;
        return tmp > maxSize;
      };
      const oversize = file.some(even);
      if (oversize) {
        uni.showToast({
          title: t("up.upload.sizeExceed", new UTSJSONObject({}))
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
          const itemJSON = UTS.JSON.parseObject(UTS.JSON.stringify(item));
          if (itemJSON != null) {
            fileList.push(UTSJSONObject.assign(itemJSON, new UTSJSONObject({
              status: "uploading",
              message: t("up.upload.uploading", new UTSJSONObject({})),
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
              uni.request({
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
                    uni.showToast({
                      title: res0["msg"],
                      duration: 1500
                    });
                    return null;
                  }
                  if (res0.getString("data.params.host") != null) {
                    var uploadTask2 = uni.uploadFile({
                      url: (_a = res0.getString("data.params.host")) !== null && _a !== void 0 ? _a : "",
                      filePath: lists[j].url,
                      name: "file",
                      // fileType: 'video', // 仅支付宝小程序，且必填。
                      // header: header,
                      formData,
                      success: (uploadFileRes) => {
                        let thumb = "";
                        let uploadRes = UTS.JSON.parseObject(uploadFileRes.data);
                        result = res0.getString("data.params.host") + "/" + res0.getString("data.params.key");
                        if (that.accept === "video" || video(result)) {
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
              var uploadTask = uni.uploadFile({
                url: this.autoUploadApi,
                filePath: lists[j].url,
                name: "file",
                // fileType: 'video', // 仅支付宝小程序，且必填。
                header: this.autoUploadHeader,
                success: (uploadFileRes) => {
                  var _a;
                  let res0 = UTS.JSON.parseObject(uploadFileRes.data);
                  if (that.customAfterAutoUpload) {
                    that.emitAfterAutoUpload(res0, len + j);
                  } else {
                    if (res0["code"] != 200) {
                      uni.showToast({
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
      fileList.splice(index, 1, new UTSJSONObject({
        ...item,
        // 注意这里不判断会出现succcessUpload先执行又被覆盖的问题
        status: param["progress"] == 100 ? "success" : "uploading",
        message: "",
        progress: param["progress"]
      }));
      this.$emit("update:fileList", fileList);
    },
    succcessUpload(index, url, thumb = "") {
      const fileList = this.fileList;
      let item = fileList[index];
      fileList.splice(index, 1, new UTSJSONObject({
        ...item,
        status: "success",
        message: "",
        url,
        progress: 100,
        thumb
      }));
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
      uni.previewImage({
        urls,
        current,
        fail() {
          toast(t("up.upload.previewImageFail", new UTSJSONObject({})));
        }
      });
    },
    onPreviewVideo(previewItem, index) {
      if (!this.previewFullImage)
        return null;
      const sources = [];
      for (var i = 0; i < this.lists.length; i++) {
        const item = this.lists[i];
        if (item.isVideo || item.type != null && item.type === "video") {
          sources.push(UTSJSONObject.assign(UTSJSONObject.assign(new UTSJSONObject({}), item), new UTSJSONObject({
            type: "video"
          })));
        }
      }
      if (sources.length < 1) {
        return null;
      }
      this.popupShow = true;
      this.currentItemIndex = index;
      uni.__f__("log", "at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:880", this.lists[this.currentItemIndex]);
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
const _style_0 = { "up-upload": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-upload__wrap": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "up-upload__wrap__preview": { "": { "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2, "marginTop": 0, "marginRight": 8, "marginBottom": 8, "marginLeft": 0, "position": "relative", "overflow": "hidden", "display": "flex", "flexDirection": "row" } }, "up-upload__wrap__preview__image": { "": { "width": 80, "height": 80 } }, "up-upload__wrap__preview__video": { "": { "width": 80, "height": 80, "backgroundColor": "#f2f2f2", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "up-upload__wrap__preview__other": { "": { "width": 80, "height": 80, "backgroundColor": "#f2f2f2", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "up-upload__wrap__preview__video__text": { "": { "fontSize": 11, "color": "#909193", "marginTop": 2 } }, "up-upload__wrap__preview__other__text": { "": { "fontSize": 11, "color": "#909193", "marginTop": 2 } }, "up-upload__wrap__play": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "right": 0, "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "up-upload__wrap__play__icon": { "": { "backgroundImage": "none", "backgroundColor": "#ffffff", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "opacity": 0.8 } }, "up-upload__deletable": { "": { "position": "absolute", "top": 0, "right": 0, "backgroundColor": "#373737", "height": 14, "width": 14, "display": "flex", "flexDirection": "row", "borderBottomLeftRadius": 100, "alignItems": "center", "justifyContent": "center", "zIndex": 3 } }, "up-upload__deletable__icon": { "": { "position": "absolute", "transform": "scale(0.7)", "top": 0, "right": 0 } }, "up-upload__success": { "": { "position": "absolute", "bottom": 0, "right": 0, "display": "flex", "flexDirection": "row", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderBottomColor": "#5ac725", "borderRightColor": "#5ac725", "borderTopWidth": 9, "borderRightWidth": 9, "borderBottomWidth": 9, "borderLeftWidth": 9, "alignItems": "center", "justifyContent": "center" } }, "up-upload__success__icon": { "": { "position": "absolute", "transform": "scale(0.7)", "bottom": -10, "right": -10 } }, "up-upload__progress": { "": { "!backgroundColor": "var(--theme-color, #0957de)", "position": "absolute", "bottom": 0, "left": 0 } }, "up-upload__status": { "": { "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.5)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "up-upload__status__icon": { "": { "position": "relative", "zIndex": 1 } }, "up-upload__status__message": { "": { "fontSize": 12, "color": "#FFFFFF", "marginTop": 5 } }, "up-upload__button": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "width": 80, "height": 80, "backgroundColor": "#f4f5f7", "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2, "marginTop": 0, "marginRight": 8, "marginBottom": 8, "marginLeft": 0, "boxSizing": "border-box" } }, "up-upload__button__text": { "": { "fontSize": 11, "color": "#909193", "marginTop": 2 } }, "up-upload__button--hover": { "": { "backgroundColor": "#e6e7e9" } }, "up-upload__button--disabled": { "": { "opacity": 0.5 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  const _component_up_gap = resolveEasycom(resolveDynamicComponent("up-gap"), __easycom_3);
  const _component_video = resolveComponent("video");
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-upload",
      style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
    },
    [
      createElementVNode("view", { class: "up-upload__wrap" }, [
        $props.previewImage ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList($data.lists, (item, index) => {
            return openBlock(), createElementBlock("view", {
              class: "up-upload__wrap__preview",
              key: index
            }, [
              item.isImage || item.type != null && item.type === "image" ? (openBlock(), createElementBlock("image", {
                key: 0,
                src: item.thumb != null ? item.thumb : item.url,
                mode: $props.imageMode,
                class: "up-upload__wrap__preview__image",
                onClick: ($event) => $options.onClickPreview(item, index),
                style: normalizeStyle([{
                  width: $options.addUnit($props.width),
                  height: $options.addUnit($props.height)
                }])
              }, null, 12, ["src", "mode", "onClick"])) : (item.isVideo || item.type != null && item.type === "video") && $props.getVideoThumb ? (openBlock(), createElementBlock(
                "view",
                {
                  key: 1,
                  class: "up-upload__wrap__preview__video",
                  style: normalizeStyle({
                    width: $options.addUnit($props.width),
                    height: $options.addUnit($props.height)
                  })
                },
                [
                  item.thumb ? (openBlock(), createElementBlock("image", {
                    key: 0,
                    src: item.thumb,
                    mode: $props.imageMode,
                    class: "up-upload__wrap__preview__image",
                    onClick: ($event) => $options.onClickPreview(item, index),
                    style: normalizeStyle([{
                      width: $options.addUnit($props.width),
                      height: $options.addUnit($props.height)
                    }])
                  }, null, 12, ["src", "mode", "onClick"])) : (openBlock(), createBlock(_component_up_icon, {
                    key: 1,
                    color: "#80CBF9",
                    size: "26",
                    name: item.isVideo || item.type != null && item.type === "video" ? "movie" : "file-text"
                  }, null, 8, ["name"])),
                  item.status === "success" ? (openBlock(), createElementBlock("view", {
                    key: 2,
                    class: "up-upload__wrap__play",
                    onClick: ($event) => $options.onClickPreview(item, index)
                  }, [
                    renderSlot(_ctx.$slots, "playIcon"),
                    _ctx.$slots["playIcon"] == null ? (openBlock(), createBlock(_component_up_icon, {
                      key: 0,
                      class: "up-upload__wrap__play__icon",
                      name: "play-right",
                      size: "22px"
                    })) : createCommentVNode("v-if", true)
                  ], 8, ["onClick"])) : createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )) : (openBlock(), createElementBlock("view", {
                key: 2,
                class: "up-upload__wrap__preview__other",
                onClick: ($event) => $options.onClickPreview(item, index),
                style: normalizeStyle([{
                  width: $options.addUnit($props.width),
                  height: $options.addUnit($props.height)
                }])
              }, [
                createVNode(_component_up_icon, {
                  color: "#80CBF9",
                  size: "26",
                  name: item.isVideo || item.type != null && item.type === "video" ? "movie" : "folder"
                }, null, 8, ["name"]),
                createElementVNode(
                  "text",
                  { class: "up-upload__wrap__preview__other__text" },
                  toDisplayString(item.isVideo || item.type != null && item.type === "video" ? item.name != null ? item.name : _ctx.$t("up.common.video") : item.name != null ? item.name : _ctx.$t("up.common.file")),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"])),
              item.status === "uploading" || item.status === "failed" ? (openBlock(), createElementBlock("view", {
                key: 3,
                class: "up-upload__status"
              }, [
                createElementVNode("view", { class: "up-upload__status__icon" }, [
                  item.status === "failed" ? (openBlock(), createBlock(_component_up_icon, {
                    key: 0,
                    name: "close-circle",
                    color: "#ffffff",
                    size: "25"
                  })) : (openBlock(), createBlock(_component_up_loading_icon, {
                    key: 1,
                    size: "22",
                    mode: "circle"
                  }))
                ]),
                item.message ? (openBlock(), createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "up-upload__status__message"
                  },
                  toDisplayString(item.message),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true),
                createVNode(_component_up_gap, {
                  class: "up-upload__progress",
                  height: "3px",
                  style: normalizeStyle({ width: (item.progress ?? 0) + "%" })
                }, null, 8, ["style"])
              ])) : createCommentVNode("v-if", true),
              item.status !== "uploading" && ($props.deletable || item.deletable) ? (openBlock(), createElementBlock("view", {
                key: 4,
                class: "up-upload__deletable",
                onClick: withModifiers(($event) => $options.deleteItem(index), ["stop"])
              }, [
                createElementVNode("view", { class: "up-upload__deletable__icon" }, [
                  createVNode(_component_up_icon, {
                    name: "close",
                    color: "#ffffff",
                    size: "10"
                  })
                ])
              ], 8, ["onClick"])) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "success", {}, () => [
                item.status === "success" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "up-upload__success"
                }, [
                  createElementVNode("view", { class: "up-upload__success__icon" }, [
                    createVNode(_component_up_icon, {
                      name: "checkmark",
                      color: "#ffffff",
                      size: "12"
                    })
                  ])
                ])) : createCommentVNode("v-if", true)
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        $data.isInCount ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            _ctx.$slots["trigger"] != null ? (openBlock(), createElementBlock("view", {
              key: 0,
              onClick: _cache[0] || (_cache[0] = (...args) => $options.onChooseTap && $options.onChooseTap(...args))
            }, [
              renderSlot(_ctx.$slots, "trigger")
            ])) : _ctx.$slots["trigger"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? (openBlock(), createElementBlock("view", {
              key: 1,
              onClick: _cache[1] || (_cache[1] = (...args) => $options.onChooseTap && $options.onChooseTap(...args))
            }, [
              renderSlot(_ctx.$slots, "default")
            ])) : (openBlock(), createElementBlock("view", {
              key: 2,
              class: normalizeClass(["up-upload__button", [$props.disabled ? "up-upload__button--disabled" : ""]]),
              "hover-class": !$props.disabled ? "up-upload__button--hover" : "",
              "hover-stay-time": "150",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.onChooseTap && $options.onChooseTap(...args)),
              style: normalizeStyle([{
                width: $options.addUnit($props.width),
                height: $options.addUnit($props.height)
              }])
            }, [
              createVNode(_component_up_icon, {
                name: $props.uploadIcon,
                size: "26",
                color: $props.uploadIconColor
              }, null, 8, ["name", "color"]),
              $props.uploadText ? (openBlock(), createElementBlock(
                "text",
                {
                  key: 0,
                  class: "up-upload__button__text"
                },
                toDisplayString($props.uploadText),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ], 14, ["hover-class"]))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ]),
      createElementVNode("canvas", {
        id: "myCanvas",
        type: "2d",
        style: { "width": "100px", "height": "150px", "display": "none" }
      }),
      createVNode(_component_up_popup, {
        mode: "center",
        show: $data.popupShow,
        "onUpdate:show": _cache[3] || (_cache[3] = ($event) => $data.popupShow = $event)
      }, {
        default: withCtx(() => [
          $data.popupShow ? (openBlock(), createBlock(_component_video, {
            key: 0,
            id: "myVideo",
            src: $data.currentItemIndex >= 0 ? $data.lists[$data.currentItemIndex].url : "",
            onError: $options.videoErrorCallback,
            "show-center-play-btn": "",
            "object-fit": $props.videoPreviewObjectFit,
            "show-fullscreen-btn": "true",
            "enable-play-gesture": "",
            controls: "",
            autoplay: true,
            "auto-pause-if-open-native": "",
            todoloadedmetadata: "loadedVideoMetadata",
            "initial-time": 0.1
          }, null, 8, ["src", "onError", "object-fit"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"])
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-upload/up-upload.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-upload.js.map
