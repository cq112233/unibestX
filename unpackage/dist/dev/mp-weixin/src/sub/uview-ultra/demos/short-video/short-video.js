"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_short_video_1 = common_vendor.resolveComponent("up-short-video");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_up_short_video_1 + _easycom_up_button_1)();
}
const _easycom_up_short_video = () => "../../../../../uni_modules/uview-ultra/components/up-short-video/up-short-video.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_up_short_video + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "short-video",
  setup(__props) {
    function makeVideo(url, name, avatar, desc, likeCount, commentCount, shareCount, collectCount) {
      return new common_vendor.UTSJSONObject({
        videoUrl: url,
        author: new common_vendor.UTSJSONObject({
          name,
          avatar,
          desc
        }),
        likeCount,
        commentCount,
        shareCount,
        collectCount,
        isLiked: false,
        isCollected: false,
        playbackRate: 1,
        progress: 0,
        aspectRatio: 16 / 9
      });
    }
    const videoList = common_vendor.ref([
      makeVideo("https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4", "uni-app 官方示例", "/static/logo.png", "DCloud 官方示例视频（国内 CDN）", "1.2w", "356", "89", "120"),
      makeVideo("https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4", "xgplayer 示例 360P", "/static/qq_uniBestX.jpg", "字节跳动 xgplayer 官方示例视频", "8600", "124", "45", "67"),
      makeVideo("https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4", "xgplayer 示例 720P", "/static/qr-code.png", "字节跳动 xgplayer 官方示例视频", "5300", "88", "30", "42")
    ]);
    const eventLog = common_vendor.ref("上下滑动切换视频，右侧按钮点赞/评论/分享/收藏");
    const shortVideoRef = common_vendor.ref(null);
    const windowHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight);
    function onTabChange(index) {
      eventLog.value = `tabChange => ${index.toString()}`;
    }
    function onVideoChange(index) {
      eventLog.value = `videoChange => 第 ${(index + 1).toString()} 个视频`;
    }
    function getEventIndex(event) {
      const value = event.index;
      if (typeof value == "number") {
        return value;
      }
      if (value == null) {
        return 0;
      }
      const parsed = parseInt(value.toString());
      return isNaN(parsed) ? 0 : parsed;
    }
    function onLike(event) {
      eventLog.value = `like => 第 ${(getEventIndex(event) + 1).toString()} 个视频`;
    }
    function onComment(event) {
      eventLog.value = `comment => 第 ${(getEventIndex(event) + 1).toString()} 个视频`;
    }
    function onShare(event) {
      eventLog.value = `share => 第 ${(getEventIndex(event) + 1).toString()} 个视频`;
    }
    function onCollect(event) {
      eventLog.value = `collect => 第 ${(getEventIndex(event) + 1).toString()} 个视频`;
    }
    function onProgressChange(event) {
      const progress = event.progress;
      const value = progress == null ? 0 : progress.toString();
      eventLog.value = `progressChange => ${value}`;
    }
    function onGoNext() {
      eventLog.value = "goNext => 点击了 Home 底部导航";
    }
    function onBack() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.sr(shortVideoRef, "558d0f03-2,558d0f03-1", {
          "k": "shortVideoRef"
        }),
        b: common_vendor.o(onTabChange, "b6"),
        c: common_vendor.o(onVideoChange, "4f"),
        d: common_vendor.o(onLike, "a2"),
        e: common_vendor.o(onComment, "8b"),
        f: common_vendor.o(onShare, "e6"),
        g: common_vendor.o(onCollect, "0e"),
        h: common_vendor.o(onProgressChange, "79"),
        i: common_vendor.o(onGoNext, "da"),
        j: common_vendor.p({
          ["video-list"]: videoList.value,
          ["current-tab"]: 0,
          ["current-video"]: 0,
          class: "r data-v-558d0f03"
        }),
        k: common_vendor.o(onBack, "ec"),
        l: common_vendor.p({
          text: "返回",
          type: "primary",
          size: "small",
          color: "rgba(0, 0, 0, 0.4)",
          class: "back-btn data-v-558d0f03"
        }),
        m: common_vendor.t(eventLog.value),
        n: `${windowHeight.value}px`,
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-short-video 短视频",
          class: "data-v-558d0f03"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-558d0f03"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-558d0f03"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/short-video/short-video.js.map
