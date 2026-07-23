"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_upload_1 = common_vendor.resolveComponent("up-upload");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_upload_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_upload = () => "../../../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_upload + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "upload",
  setup(__props) {
    const fileList1 = common_vendor.ref([]);
    const fileList2 = common_vendor.ref([]);
    function uploadFilePromise(url) {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(url);
          }, 1e3);
        });
      });
    }
    function afterRead(event) {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        const fileData = event.get("file");
        const lists = Array.isArray(fileData) ? fileData : [fileData];
        let fileListLen = fileList1.value.length;
        lists.forEach((item) => {
          fileList1.value.push(new UTSJSONObject(Object.assign(Object.assign({}, item), { status: "uploading", message: "上传中" })));
        });
        for (let i = 0; i < lists.length; i++) {
          const url = lists[i].getString("url");
          const result = yield uploadFilePromise(url);
          const item = fileList1.value[fileListLen];
          fileList1.value.splice(fileListLen, 1, Object.assign(item, new UTSJSONObject({
            status: "success",
            message: "",
            url: result
          })));
          fileListLen++;
        }
      });
    }
    function deletePic(event) {
      fileList1.value.splice(event.getNumber("index"), 1);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-upload 上传",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-0c4ab23d"
        }),
        b: common_vendor.o(afterRead, "55"),
        c: common_vendor.o(deletePic, "15"),
        d: common_vendor.p({
          ["file-list"]: fileList1.value,
          name: "1",
          multiple: true,
          ["max-count"]: 3,
          class: "data-v-0c4ab23d"
        }),
        e: common_vendor.p({
          type: "success",
          text: "选择文件",
          icon: "plus",
          size: "mini",
          class: "data-v-0c4ab23d"
        }),
        f: common_vendor.p({
          ["file-list"]: fileList2.value,
          name: "2",
          multiple: true,
          ["max-count"]: 3,
          class: "data-v-0c4ab23d"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-upload 上传",
          class: "data-v-0c4ab23d"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0c4ab23d"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0c4ab23d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/upload/upload.js.map
