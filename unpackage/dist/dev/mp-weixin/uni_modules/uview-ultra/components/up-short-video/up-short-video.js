"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_avatar_1 = common_vendor.resolveComponent("up-avatar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_action_sheet_1 = common_vendor.resolveComponent("up-action-sheet");
  const _easycom_up_slider_1 = common_vendor.resolveComponent("up-slider");
  const _easycom_up_tabbar_item_1 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar_1 = common_vendor.resolveComponent("up-tabbar");
  (_easycom_up_icon_1 + _easycom_up_tabs_1 + _easycom_up_avatar_1 + _easycom_up_button_1 + _easycom_up_action_sheet_1 + _easycom_up_slider_1 + _easycom_up_tabbar_item_1 + _easycom_up_tabbar_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_tabs = () => "../up-tabs/up-tabs.js";
const _easycom_up_avatar = () => "../up-avatar/up-avatar.js";
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_action_sheet = () => "../up-action-sheet/up-action-sheet.js";
const _easycom_up_slider = () => "../up-slider/up-slider.js";
const _easycom_up_tabbar_item = () => "../up-tabbar-item/up-tabbar-item.js";
const _easycom_up_tabbar = () => "../up-tabbar/up-tabbar.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_tabs + _easycom_up_avatar + _easycom_up_button + _easycom_up_action_sheet + _easycom_up_slider + _easycom_up_tabbar_item + _easycom_up_tabbar)();
}
const DEFAULT_ASPECT_RATIO = 16 / 9;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-short-video"
}, { __name: "up-short-video", props: {
  tabsList: {
    type: Array,
    default: () => {
      return [];
    }
  },
  videoList: {
    type: Array,
    default: () => {
      return [];
    }
  },
  currentTab: {
    type: Number,
    default: 0
  },
  currentVideo: {
    type: Number,
    default: 0
  }
}, emits: [
  "tabChange",
  "videoChange",
  "like",
  "comment",
  "share",
  "collect",
  "progressChanging",
  "progressChange",
  "videoPlay",
  "videoPause",
  "videoEnded",
  "timeUpdate",
  "loadedMetadata",
  "goNext"
], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function createSpeedOptions() {
    const options = [];
    const values = [0.5, 0.75, 1, 1.25, 1.5, 2];
    for (let i = 0; i < values.length; i++) {
      const item = new common_vendor.UTSJSONObject({});
      item["name"] = `${values[i]}x`;
      item["value"] = values[i];
      options.push(item);
    }
    return options;
  }
  function copyObject(item) {
    const copied = new common_vendor.UTSJSONObject({});
    const keys = common_vendor.UTSJSONObject.keys(item);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = item[key];
      if (value != null && typeof value == "object" && !Array.isArray(value)) {
        copied[key] = copyObject(value);
      } else {
        copied[key] = value;
      }
    }
    return copied;
  }
  function copyVideoList(list) {
    const copied = [];
    for (let i = 0; i < list.length; i++) {
      copied.push(copyObject(list[i]));
    }
    return copied;
  }
  function normalizeNumber(value = null, defaultValue = 0) {
    if (typeof value == "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function stringValue(value = null) {
    return value == null ? "" : value.toString();
  }
  function booleanValue(value = null) {
    if (typeof value == "boolean") {
      return value;
    }
    return value != null && value.toString() == "true";
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const internalVideoList = common_vendor.ref([]);
  const showSpeedSheet = common_vendor.ref(false);
  const currentSpeedVideoIndex = common_vendor.ref(0);
  const speedOptions = common_vendor.ref(createSpeedOptions());
  const activeVideoIndex = common_vendor.ref(props.currentVideo);
  const windowWidth = common_vendor.ref(common_vendor.index.getWindowInfo().windowWidth);
  const windowHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight);
  const videoItems = common_vendor.computed(() => {
    return internalVideoList.value;
  });
  let useNativeSlider = common_vendor.ref(false);
  const progressDragging = common_vendor.ref(false);
  const playingIndex = common_vendor.ref(-1);
  function getVideoItem(index) {
    const list = videoItems.value;
    if (index < 0 || index >= list.length) {
      return null;
    }
    return list[index];
  }
  const currentProgress = common_vendor.computed(() => {
    const item = getVideoItem(activeVideoIndex.value);
    if (item == null) {
      return 0;
    }
    return normalizeNumber(item["progress"], 0);
  });
  function syncVideoList(list) {
    internalVideoList.value = copyVideoList(list);
  }
  function getVideoId(index) {
    return `video-${index}`;
  }
  function getPlaybackRate(item) {
    return normalizeNumber(item["playbackRate"], 1);
  }
  function getVideoUrl(item) {
    return stringValue(item["videoUrl"]);
  }
  function getVideoStyle(index) {
    const style = new common_vendor.UTSJSONObject({});
    const item = getVideoItem(index);
    const containerWidth = windowWidth.value;
    const containerHeight = windowHeight.value;
    if (containerWidth <= 0 || containerHeight <= 0) {
      style["width"] = "100%";
      style["height"] = "100%";
      return style;
    }
    const ratio = normalizeNumber(item == null ? null : item["aspectRatio"], DEFAULT_ASPECT_RATIO);
    if (ratio <= 0) {
      style["width"] = "100%";
      style["height"] = "100%";
      return style;
    }
    const fitWidth = containerHeight * ratio;
    if (fitWidth <= containerWidth) {
      style["width"] = `${Math.floor(fitWidth)}px`;
      style["height"] = `${Math.floor(containerHeight)}px`;
    } else {
      style["width"] = `${Math.floor(containerWidth)}px`;
      style["height"] = `${Math.floor(containerWidth / ratio)}px`;
    }
    return style;
  }
  function getAuthor(item) {
    const author = item["author"];
    return author == null ? new common_vendor.UTSJSONObject({}) : author;
  }
  function getAuthorAvatar(item) {
    return stringValue(getAuthor(item)["avatar"]);
  }
  function getAuthorName(item) {
    return stringValue(getAuthor(item)["name"]);
  }
  function getAuthorDesc(item) {
    return stringValue(getAuthor(item)["desc"]);
  }
  function isLiked(item) {
    return booleanValue(item["isLiked"]);
  }
  function isCollected(item) {
    return booleanValue(item["isCollected"]);
  }
  function getCountText(item, key) {
    return stringValue(item[key]);
  }
  function updateVideoItemValue(index, key, value = null) {
    const item = getVideoItem(index);
    if (item == null) {
      return null;
    }
    item[key] = value;
  }
  function getVideoContext(index) {
    const id = getVideoId(index);
    return common_vendor.index.createVideoContext(id, instance === null || instance === void 0 ? null : instance.proxy);
  }
  function handleTabChange(event, index) {
    emit("tabChange", index);
  }
  function playVideo(index) {
    const context = getVideoContext(index);
    if (context != null) {
      context.play();
    }
  }
  function pauseCurrentVideo() {
    const context = getVideoContext(activeVideoIndex.value);
    if (context != null) {
      context.pause();
    }
  }
  function pauseVideo(index) {
    const context = getVideoContext(index);
    if (context != null) {
      context.pause();
    }
  }
  function stopVideo(index) {
    const context = getVideoContext(index);
    if (context != null) {
      context.stop();
    }
  }
  function handleSwiperChange(e) {
    const curIndex = e.detail.current;
    activeVideoIndex.value = curIndex;
    playingIndex.value = -1;
    for (let i = 0; i < videoItems.value.length; i++) {
      if (i != curIndex) {
        stopVideo(i);
      }
    }
    common_vendor.nextTick$1(() => {
      playVideo(curIndex);
    });
    emit("videoChange", curIndex);
  }
  function handleLike(item, index) {
    emit("like", new common_vendor.UTSJSONObject({ item, index }));
  }
  function handleComment(item, index) {
    emit("comment", new common_vendor.UTSJSONObject({ item, index }));
  }
  function handleShare(item, index) {
    emit("share", new common_vendor.UTSJSONObject({ item, index }));
  }
  function handleCollect(item, index) {
    emit("collect", new common_vendor.UTSJSONObject({ item, index }));
  }
  function onProgressChanging(value) {
    const progress = normalizeNumber(value, 0);
    progressDragging.value = true;
    updateVideoItemValue(activeVideoIndex.value, "progressValue", progress);
    emit("progressChanging", new common_vendor.UTSJSONObject({
      progress,
      index: activeVideoIndex.value
    }));
  }
  function onProgressChange(value) {
    const progress = normalizeNumber(value, 0);
    const wasDragging = progressDragging.value;
    progressDragging.value = false;
    if (wasDragging) {
      const item = getVideoItem(activeVideoIndex.value);
      const duration = item == null ? 0 : normalizeNumber(item["duration"], 0);
      if (duration > 0) {
        const context = getVideoContext(activeVideoIndex.value);
        if (context != null) {
          context.seek(progress / 100 * duration);
        }
      }
    }
    updateVideoItemValue(activeVideoIndex.value, "progressValue", progress);
    updateVideoItemValue(activeVideoIndex.value, "progress", progress);
    emit("progressChange", new common_vendor.UTSJSONObject({
      progress,
      index: activeVideoIndex.value
    }));
  }
  function showSpeedOptions(index) {
    currentSpeedVideoIndex.value = index;
    showSpeedSheet.value = true;
  }
  function selectSpeed(action) {
    const videoContext = getVideoContext(currentSpeedVideoIndex.value);
    const speed = normalizeNumber(action["value"], 1);
    if (videoContext != null) {
      videoContext.playbackRate(speed);
    }
    updateVideoItemValue(currentSpeedVideoIndex.value, "playbackRate", speed);
    showSpeedSheet.value = false;
  }
  function onVideoPlay(index) {
    if (index != activeVideoIndex.value) {
      pauseVideo(index);
      return null;
    }
    playingIndex.value = index;
    emit("videoPlay", new common_vendor.UTSJSONObject({ index }));
  }
  function onVideoPause(index) {
    if (playingIndex.value == index) {
      playingIndex.value = -1;
    }
    emit("videoPause", new common_vendor.UTSJSONObject({ index }));
  }
  function onVideoEnded(index) {
    if (playingIndex.value == index) {
      playingIndex.value = -1;
    }
    emit("videoEnded", new common_vendor.UTSJSONObject({ index }));
  }
  function onVideoClick(index) {
    if (index != activeVideoIndex.value) {
      return null;
    }
    if (playingIndex.value == index) {
      pauseVideo(index);
    } else {
      playVideo(index);
    }
  }
  function onTimeUpdate(e) {
    const currentTime = e.detail.currentTime;
    const duration = e.detail.duration;
    if (duration > 0) {
      updateVideoItemValue(activeVideoIndex.value, "duration", duration);
      if (!progressDragging.value) {
        updateVideoItemValue(activeVideoIndex.value, "progress", currentTime / duration * 100);
      }
    }
    emit("timeUpdate", new common_vendor.UTSJSONObject({ index: activeVideoIndex.value, event: e }));
  }
  function onLoadedMetadata(e) {
    emit("loadedMetadata", new common_vendor.UTSJSONObject({ index: activeVideoIndex.value, event: e }));
  }
  function goNext(_item = null) {
    emit("goNext");
  }
  common_vendor.watch(() => {
    return props.videoList;
  }, (newVal) => {
    syncVideoList(newVal);
  }, { immediate: true });
  common_vendor.nextTick$1(() => {
    setTimeout(() => {
      playVideo(activeVideoIndex.value);
    }, 30);
  });
  __expose({
    playVideo,
    pauseCurrentVideo,
    showSpeedOptions
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.p({
        name: "grid",
        size: "24",
        class: "data-v-247f5e31"
      }),
      b: common_vendor.o(handleTabChange, "63"),
      c: common_vendor.p({
        list: __props.tabsList,
        current: __props.currentTab,
        lineColor: "#ddd",
        activeStyle: {
          color: "#ddd",
          fontWeight: 400,
          transform: "scale(1)"
        },
        inactiveStyle: {
          color: "#bbb",
          transform: "scale(1)"
        },
        class: "up-short-video__header__tabs data-v-247f5e31"
      }),
      d: common_vendor.p({
        name: "search",
        size: "24",
        class: "data-v-247f5e31"
      }),
      e: common_vendor.f(videoItems.value, (item, index, i0) => {
        return {
          a: common_vendor.sei(getVideoId(index), "video"),
          b: getVideoUrl(item),
          c: index == activeVideoIndex.value,
          d: getPlaybackRate(item),
          e: common_vendor.s(getVideoStyle(index)),
          f: common_vendor.o(($event) => {
            return onVideoPlay(index);
          }, index),
          g: common_vendor.o(($event) => {
            return onVideoPause(index);
          }, index),
          h: common_vendor.o(($event) => {
            return onVideoEnded(index);
          }, index),
          i: common_vendor.o(onTimeUpdate, index),
          j: common_vendor.o(onLoadedMetadata, index),
          k: common_vendor.o(($event) => {
            return onVideoClick(index);
          }, index),
          l: "247f5e31-3-" + i0,
          m: common_vendor.p({
            src: getAuthorAvatar(item),
            size: "50px",
            class: "data-v-247f5e31"
          }),
          n: common_vendor.t(getAuthorName(item)),
          o: common_vendor.t(getAuthorDesc(item)),
          p: "247f5e31-4-" + i0,
          q: "247f5e31-5-" + i0,
          r: common_vendor.p({
            color: "#eee",
            name: isLiked(item) ? "thumb-up-fill" : "thumb-up",
            size: "32px",
            class: "data-v-247f5e31"
          }),
          s: common_vendor.t(getCountText(item, "likeCount")),
          t: common_vendor.o(($event) => {
            return handleLike(item, index);
          }, index),
          v: "247f5e31-6-" + i0,
          w: common_vendor.t(getCountText(item, "commentCount")),
          x: common_vendor.o(($event) => {
            return handleComment(item, index);
          }, index),
          y: "247f5e31-7-" + i0,
          z: common_vendor.t(getCountText(item, "shareCount")),
          A: common_vendor.o(($event) => {
            return handleShare(item, index);
          }, index),
          B: "247f5e31-8-" + i0,
          C: common_vendor.p({
            color: "#eee",
            name: isCollected(item) ? "bookmark-fill" : "bookmark",
            size: "32px",
            class: "data-v-247f5e31"
          }),
          D: common_vendor.t(getCountText(item, "collectCount")),
          E: common_vendor.o(($event) => {
            return handleCollect(item, index);
          }, index),
          F: "actions-" + i0,
          G: common_vendor.r("actions", {
            item,
            index
          }, i0),
          H: index
        };
      }),
      f: common_vendor.p({
        type: "primary",
        size: "mini",
        class: "data-v-247f5e31"
      }),
      g: common_vendor.p({
        color: "#eee",
        name: "chat",
        size: "32px",
        class: "data-v-247f5e31"
      }),
      h: common_vendor.p({
        color: "#eee",
        name: "share",
        size: "32px",
        class: "data-v-247f5e31"
      }),
      i: common_vendor.o(handleSwiperChange, "6c"),
      j: __props.currentVideo,
      k: common_vendor.o(($event) => {
        return showSpeedSheet.value = false;
      }, "bc"),
      l: common_vendor.o(selectSpeed, "ee"),
      m: common_vendor.p({
        show: showSpeedSheet.value,
        actions: speedOptions.value,
        title: "Playback speed",
        class: "data-v-247f5e31"
      }),
      n: common_vendor.o(onProgressChanging, "f4"),
      o: common_vendor.o(onProgressChange, "9a"),
      p: common_vendor.p({
        ["model-value"]: currentProgress.value,
        min: 0,
        max: 100,
        step: 1,
        ["show-value"]: false,
        ["use-native"]: common_vendor.unref(useNativeSlider),
        innerStyle: {
          padding: 0
        },
        activeColor: "rgba(255,255,255,0.32)",
        ["inactive-color"]: "rgba(255,255,255,0.3)",
        ["block-size"]: "6px",
        ["block-color"]: "rgba(255,255,255,0.5)",
        height: "1px",
        class: "data-v-247f5e31"
      }),
      q: common_vendor.o(($event) => {
        return goNext();
      }, "49"),
      r: common_vendor.p({
        text: "Home",
        icon: "home",
        class: "data-v-247f5e31"
      }),
      s: common_vendor.p({
        text: "Discover",
        icon: "photo",
        class: "data-v-247f5e31"
      }),
      t: common_vendor.p({
        text: "Live",
        icon: "play-right",
        class: "data-v-247f5e31"
      }),
      v: common_vendor.p({
        text: "Mine",
        icon: "account",
        class: "data-v-247f5e31"
      }),
      w: common_vendor.p({
        fixed: true,
        placeholder: true,
        safeAreaInsetBottom: true,
        borderColor: "rgba(255,255,255,0.25) !important",
        backgroundColor: "rgba(255,255,255,0.05)",
        class: "data-v-247f5e31"
      }),
      x: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      y: `${_ctx.u_s_b_h}px`,
      z: `${_ctx.u_s_a_i_b}px`,
      A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-247f5e31"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-short-video/up-short-video.js.map
