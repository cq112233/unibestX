"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_poster_1 = common_vendor.resolveComponent("up-poster");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_button_1 + _easycom_up_poster_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_poster = () => "../../../../../uni_modules/uview-ultra/components/up-poster/up-poster.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_button + _easycom_up_poster + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "poster",
  setup(__props) {
    const baseJson = common_vendor.ref(new common_vendor.UTSJSONObject({
      css: new common_vendor.UTSJSONObject({
        width: "375px",
        height: "600px",
        background: "linear-gradient(to bottom, #0957de, #7c3aed)",
        radius: "12px"
      }),
      views: [
        new common_vendor.UTSJSONObject({
          type: "view",
          css: new common_vendor.UTSJSONObject({
            left: 20,
            top: 20,
            width: 335,
            height: 120,
            background: "rgba(255, 255, 255, 0.2)",
            radius: 12
          })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "unibestX",
          css: new common_vendor.UTSJSONObject({ left: 40, top: 40, width: 240, fontSize: 28, lineHeight: 34, color: "#ffffff", fontWeight: "bold" })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "uni-app X 开发模板",
          css: new common_vendor.UTSJSONObject({ left: 40, top: 84, width: 260, fontSize: 15, lineHeight: 20, color: "#e2e8f0" })
        }),
        new common_vendor.UTSJSONObject({
          type: "image",
          src: "/static/logo.png",
          css: new common_vendor.UTSJSONObject({ left: 30, top: 170, width: 100, height: 100, radius: 50 })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "uview-ultra",
          css: new common_vendor.UTSJSONObject({ left: 150, top: 188, width: 200, fontSize: 22, lineHeight: 28, color: "#1e293b", fontWeight: "bold" })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "基于 uni-app X 的组件库",
          css: new common_vendor.UTSJSONObject({ left: 150, top: 224, width: 200, fontSize: 14, lineHeight: 20, color: "#64748b" })
        }),
        new common_vendor.UTSJSONObject({
          type: "view",
          css: new common_vendor.UTSJSONObject({
            left: 30,
            top: 300,
            width: 315,
            height: 120,
            background: "#f8fafc",
            radius: 12
          })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "扫码查看",
          css: new common_vendor.UTSJSONObject({ left: 60, top: 320, width: 120, fontSize: 16, lineHeight: 22, color: "#334155", fontWeight: "bold" })
        }),
        new common_vendor.UTSJSONObject({
          type: "qrcode",
          text: "https://uview-ultra.lingyun.net",
          css: new common_vendor.UTSJSONObject({ left: 200, top: 310, width: 100, foreground: "#0957de", background: "#ffffff", lv: 3 })
        }),
        new common_vendor.UTSJSONObject({
          type: "view",
          css: new common_vendor.UTSJSONObject({
            left: 30,
            top: 440,
            width: 315,
            height: 130,
            background: "linear-gradient(to right, #f59e0b, #ef4444)",
            radius: 12
          })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "2026.08.20",
          css: new common_vendor.UTSJSONObject({ left: 60, top: 486, width: 260, fontSize: 24, lineHeight: 30, color: "#ffffff", fontWeight: "bold" })
        })
      ]
    }));
    const posterJson = common_vendor.ref(baseJson.value);
    const customJson = common_vendor.ref(new common_vendor.UTSJSONObject({
      css: new common_vendor.UTSJSONObject({
        width: "300px",
        height: "480px",
        background: "linear-gradient(to bottom, #0f172a, #334155)",
        radius: "8px"
      }),
      views: [
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "CUSTOM POSTER",
          css: new common_vendor.UTSJSONObject({ left: 30, top: 30, width: 240, fontSize: 24, lineHeight: 30, color: "#fbbf24", fontWeight: "bold" })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "自定义样式海报",
          css: new common_vendor.UTSJSONObject({ left: 30, top: 74, width: 240, fontSize: 15, lineHeight: 20, color: "#e2e8f0" })
        }),
        new common_vendor.UTSJSONObject({
          type: "qrcode",
          text: "https://github.com/cq112233/unibestX",
          css: new common_vendor.UTSJSONObject({ left: 100, top: 140, width: 100, foreground: "#f8fafc", background: "#ffffff", lv: 3 })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "扫码关注",
          css: new common_vendor.UTSJSONObject({ left: 30, top: 270, width: 240, fontSize: 16, lineHeight: 22, color: "#94a3b8" })
        }),
        new common_vendor.UTSJSONObject({
          type: "view",
          css: new common_vendor.UTSJSONObject({
            left: 30,
            top: 330,
            width: 240,
            height: 80,
            background: "linear-gradient(to right, #0ea5e9, #6366f1)",
            radius: 40
          })
        }),
        new common_vendor.UTSJSONObject({
          type: "text",
          text: "立即体验",
          css: new common_vendor.UTSJSONObject({ left: 30, top: 360, width: 240, fontSize: 20, lineHeight: 26, color: "#ffffff", fontWeight: "bold" })
        })
      ]
    }));
    const posterPath = common_vendor.ref("");
    const eventLog = common_vendor.ref("");
    const isCustom = common_vendor.ref(false);
    const posterRef = common_vendor.ref(null);
    function onGenerate() {
      const poster = posterRef.value;
      if (poster == null)
        return null;
      poster.$callMethod("exportImage");
      eventLog.value = "正在生成海报...";
    }
    function onSwitchJson() {
      const poster = posterRef.value;
      if (poster == null)
        return null;
      if (isCustom.value) {
        posterJson.value = baseJson.value;
        isCustom.value = false;
        eventLog.value = "已切换回默认样式，正在生成...";
      } else {
        posterJson.value = customJson.value;
        isCustom.value = true;
        eventLog.value = "已切换自定义样式，正在生成...";
      }
      poster.$callMethod("exportImage");
    }
    function onExport(event) {
      const path = event.path;
      if (path != null && path.toString().length > 0) {
        posterPath.value = path.toString();
        eventLog.value = "生成成功";
      } else {
        eventLog.value = "生成失败：未返回图片路径";
      }
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "生成失败" : message.toString()}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "up-poster 海报",
          class: "data-v-fee2782f"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-fee2782f"
        }),
        c: posterPath.value.length > 0
      }, posterPath.value.length > 0 ? {
        d: posterPath.value
      } : {}, {
        e: common_vendor.o(onGenerate, "67"),
        f: common_vendor.p({
          text: "生成海报",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-fee2782f"
        }),
        g: common_vendor.o(onSwitchJson, "e2"),
        h: common_vendor.p({
          text: "切换样式",
          type: "primary",
          plain: true,
          size: "small",
          class: "demo-btn data-v-fee2782f"
        }),
        i: common_vendor.t(eventLog.value),
        j: common_vendor.p({
          class: "demo-title data-v-fee2782f"
        }),
        k: common_vendor.sr(posterRef, "fee2782f-7,fee2782f-1", {
          "k": "posterRef"
        }),
        l: common_vendor.o(onExport, "97"),
        m: common_vendor.o(onError, "e7"),
        n: common_vendor.p({
          json: posterJson.value,
          class: "r data-v-fee2782f"
        }),
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-poster 海报",
          class: "data-v-fee2782f"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-fee2782f"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fee2782f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/poster/poster.js.map
