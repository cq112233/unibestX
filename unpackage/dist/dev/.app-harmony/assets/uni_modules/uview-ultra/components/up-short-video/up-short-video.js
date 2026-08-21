import { _ as __easycom_1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-tabs/up-tabs.js";
import { _ as __easycom_2 } from "../up-avatar/up-avatar.js";
import { _ as __easycom_3 } from "../up-button/up-button.js";
import { _ as __easycom_4 } from "../up-action-sheet/up-action-sheet.js";
import { _ as __easycom_1$2 } from "../up-slider/up-slider.js";
import { _ as __easycom_6 } from "../up-tabbar-item/up-tabbar-item.js";
import { _ as __easycom_7 } from "../up-tabbar/up-tabbar.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataSlot: _createSharedDataSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataFor: _createSharedDataFor, unref: _unref } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideo";
const { ref, computed, watch, nextTick, getCurrentInstance } = globalThis.Vue;
const DEFAULT_ASPECT_RATIO = 16 / 9;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-short-video"
  },
  __dynamicSharedData: true,
  __hash: "14f3fe0a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-short-video/up-short-video.uvue",
  __name: "up-short-video",
  props: {
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
  },
  emits: [
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
  ],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideoSharedData", sharedDataClassId: 0 })));
    function createSpeedOptions() {
      const options = [];
      const values = [0.5, 0.75, 1, 1.25, 1.5, 2];
      for (let i = 0; i < values.length; i++) {
        const item = new UTSJSONObject({});
        item["name"] = `${values[i]}x`;
        item["value"] = values[i];
        options.push(item);
      }
      return options;
    }
    function copyObject(item) {
      const copied = new UTSJSONObject({});
      const keys = UTSJSONObject.keys(item);
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
    const instance = getCurrentInstance();
    const internalVideoList = ref([]);
    const showSpeedSheet = ref(false);
    const currentSpeedVideoIndex = ref(0);
    const speedOptions = ref(createSpeedOptions());
    const activeVideoIndex = ref(props.currentVideo);
    const windowWidth = ref(uni.getWindowInfo().windowWidth);
    const windowHeight = ref(uni.getWindowInfo().windowHeight);
    const videoItems = computed(() => {
      return internalVideoList.value;
    });
    let useNativeSlider = ref(false);
    const progressDragging = ref(false);
    const playingIndex = ref(-1);
    function getVideoItem(index) {
      const list = videoItems.value;
      if (index < 0 || index >= list.length) {
        return null;
      }
      return list[index];
    }
    const currentProgress = computed(() => {
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
      const style = new UTSJSONObject({});
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
      return author == null ? new UTSJSONObject({}) : author;
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
      return uni.createVideoContext(id, instance === null || instance === void 0 ? null : instance.proxy);
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
      nextTick(() => {
        playVideo(curIndex);
      });
      emit("videoChange", curIndex);
    }
    function handleLike(item, index) {
      emit("like", new UTSJSONObject({ item, index }));
    }
    function handleComment(item, index) {
      emit("comment", new UTSJSONObject({ item, index }));
    }
    function handleShare(item, index) {
      emit("share", new UTSJSONObject({ item, index }));
    }
    function handleCollect(item, index) {
      emit("collect", new UTSJSONObject({ item, index }));
    }
    function onProgressChanging(value) {
      const progress = normalizeNumber(value, 0);
      progressDragging.value = true;
      updateVideoItemValue(activeVideoIndex.value, "progressValue", progress);
      emit("progressChanging", new UTSJSONObject({
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
      emit("progressChange", new UTSJSONObject({
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
      emit("videoPlay", new UTSJSONObject({ index }));
    }
    function onVideoPause(index) {
      if (playingIndex.value == index) {
        playingIndex.value = -1;
      }
      emit("videoPause", new UTSJSONObject({ index }));
    }
    function onVideoEnded(index) {
      if (playingIndex.value == index) {
        playingIndex.value = -1;
      }
      emit("videoEnded", new UTSJSONObject({ index }));
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
      emit("timeUpdate", new UTSJSONObject({ index: activeVideoIndex.value, event: e }));
    }
    function onLoadedMetadata(e) {
      emit("loadedMetadata", new UTSJSONObject({ index: activeVideoIndex.value, event: e }));
    }
    function goNext(_item = null) {
      emit("goNext");
    }
    watch(() => {
      return props.videoList;
    }, (newVal) => {
      syncVideoList(newVal);
    }, { immediate: true });
    nextTick(() => {
      setTimeout(() => {
        playVideo(activeVideoIndex.value);
      }, 30);
    });
    __expose({
      playVideo,
      pauseCurrentVideo,
      showSpeedOptions
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      const _component_up_tabs = __easycom_1$1;
      const _component_video = _resolveComponent("video");
      const _component_up_avatar = __easycom_2;
      const _component_up_button = __easycom_3;
      const _component_swiper_item = _resolveComponent("swiper-item");
      const _component_swiper = _resolveComponent("swiper");
      const _component_up_action_sheet = __easycom_4;
      const _component_up_slider = __easycom_1$2;
      const _component_up_tabbar_item = __easycom_6;
      const _component_up_tabbar = __easycom_7;
      _createSharedDataSlot("menu", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "61f2ccf2", {
          name: "grid",
          size: "24"
        });
        _setSharedData(__sharedData, 3, n2?.sharedData);
      });
      const n4 = _createSharedDataComponentWithFallback(_component_up_tabs, "61f2c626", {
        list: () => {
          return __props.tabsList;
        },
        current: () => {
          return __props.currentTab;
        },
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
        onChange: () => {
          return handleTabChange;
        },
        class: "up-short-video__header__tabs"
      });
      _setSharedData(__sharedData, 4, n4?.sharedData);
      _createSharedDataSlot("search", null, null, () => {
        const n7 = _createSharedDataComponentWithFallback(_component_up_icon, "61f29f32", {
          name: "search",
          size: "24"
        });
        _setSharedData(__sharedData, 5, n7?.sharedData);
      });
      const n40 = _createSharedDataComponentWithFallback(_component_swiper, "61f29828", {
        vertical: true,
        autoplay: false,
        onChange: () => {
          return handleSwiperChange;
        },
        current: () => {
          return __props.currentVideo;
        },
        class: "up-short-video__content"
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return videoItems.value;
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            const n39 = _createSharedDataComponentWithFallback(_component_swiper_item, "11cc87b5-" + _for_key0.value, null, {
              "default": _withSharedDataVaporCtx(() => {
                const _on_play = () => {
                  return onVideoPlay(_for_key0.value);
                };
                const _on_pause = () => {
                  return onVideoPause(_for_key0.value);
                };
                const _on_ended = () => {
                  return onVideoEnded(_for_key0.value);
                };
                const n12 = _createSharedDataComponentWithFallback(_component_video, "11cc8f35-" + _for_key0.value, {
                  id: () => {
                    return getVideoId(_for_key0.value);
                  },
                  src: () => {
                    return getVideoUrl(_for_item0.value);
                  },
                  autoplay: () => {
                    return _for_key0.value == activeVideoIndex.value;
                  },
                  controls: false,
                  "show-fullscreen-btn": false,
                  "show-play-btn": false,
                  "show-center-play-btn": false,
                  "enable-progress-gesture": true,
                  loop: true,
                  "playback-rate": () => {
                    return getPlaybackRate(_for_item0.value);
                  },
                  "object-fit": "contain",
                  style: () => {
                    return getVideoStyle(_for_key0.value);
                  },
                  onPlay: () => {
                    return _on_play;
                  },
                  onPause: () => {
                    return _on_pause;
                  },
                  onEnded: () => {
                    return _on_ended;
                  },
                  onTimeupdate: () => {
                    return onTimeUpdate;
                  },
                  onLoadedmetadata: () => {
                    return onLoadedMetadata;
                  }
                });
                _setSharedData(__sharedData_VFor0, 2, n12?.sharedData);
                _setSharedDataEvent(__sharedData_VFor0, 18, () => {
                  return onVideoClick(_for_key0.value);
                });
                const n14 = _createSharedDataComponentWithFallback(_component_up_avatar, "11ccaa2f-" + _for_key0.value, {
                  src: () => {
                    return getAuthorAvatar(_for_item0.value);
                  },
                  size: "50px"
                });
                _setSharedData(__sharedData_VFor0, 3, n14?.sharedData);
                _renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  _setSharedData(__sharedData_VFor0, 19, _toDisplayString(getAuthorName(_item)));
                  _setSharedData(__sharedData_VFor0, 20, _toDisplayString(getAuthorDesc(_item)));
                });
                const n20 = _createSharedDataComponentWithFallback(_component_up_button, "11cd080c-" + _for_key0.value, {
                  type: "primary",
                  size: "mini"
                }, {
                  "default": _withSharedDataVaporCtx(() => {
                  }, "string")
                });
                _setSharedData(__sharedData_VFor0, 4, n20?.sharedData);
                _createSharedDataSlot("actions", {
                  item: () => {
                    return _for_item0.value;
                  },
                  index: () => {
                    return _for_key0.value;
                  }
                }, (data) => {
                  return _setSharedData(__sharedData_VFor0, 5, data);
                }, () => {
                  const n25 = _createSharedDataComponentWithFallback(_component_up_icon, "11cd1350-" + _for_key0.value, {
                    color: "#eee",
                    name: () => {
                      return isLiked(_for_item0.value) ? "thumb-up-fill" : "thumb-up";
                    },
                    size: "32px"
                  });
                  _setSharedData(__sharedData_VFor0, 6, n25?.sharedData);
                  _setSharedDataEvent(__sharedData_VFor0, 10, () => {
                    return handleLike(_for_item0.value, _for_key0.value);
                  });
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData_VFor0, 14, _toDisplayString(getCountText(_for_item0.value, "likeCount")));
                  });
                  const n28 = _createSharedDataComponentWithFallback(_component_up_icon, "11cd1ed5-" + _for_key0.value, {
                    color: "#eee",
                    name: "chat",
                    size: "32px"
                  });
                  _setSharedData(__sharedData_VFor0, 7, n28?.sharedData);
                  _setSharedDataEvent(__sharedData_VFor0, 11, () => {
                    return handleComment(_for_item0.value, _for_key0.value);
                  });
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData_VFor0, 15, _toDisplayString(getCountText(_for_item0.value, "commentCount")));
                  });
                  const n31 = _createSharedDataComponentWithFallback(_component_up_icon, "11cd78c8-" + _for_key0.value, {
                    color: "#eee",
                    name: "share",
                    size: "32px"
                  });
                  _setSharedData(__sharedData_VFor0, 8, n31?.sharedData);
                  _setSharedDataEvent(__sharedData_VFor0, 12, () => {
                    return handleShare(_for_item0.value, _for_key0.value);
                  });
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData_VFor0, 16, _toDisplayString(getCountText(_for_item0.value, "shareCount")));
                  });
                  const n34 = _createSharedDataComponentWithFallback(_component_up_icon, "11cd83d2-" + _for_key0.value, {
                    color: "#eee",
                    name: () => {
                      return isCollected(_for_item0.value) ? "bookmark-fill" : "bookmark";
                    },
                    size: "32px"
                  });
                  _setSharedData(__sharedData_VFor0, 9, n34?.sharedData);
                  _setSharedDataEvent(__sharedData_VFor0, 13, () => {
                    return handleCollect(_for_item0.value, _for_key0.value);
                  });
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData_VFor0, 17, _toDisplayString(getCountText(_for_item0.value, "collectCount")));
                  });
                });
              })
            });
            _setSharedData(__sharedData_VFor0, 1, n39?.sharedData);
            return n39;
          }, (__sharedData_VFor0, item, index) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
          }, 34);
        })
      });
      _setSharedData(__sharedData, 0, n40?.sharedData);
      const _on_close = () => {
        return showSpeedSheet.value = false;
      };
      const n41 = _createSharedDataComponentWithFallback(_component_up_action_sheet, "11cd8f15", {
        show: () => {
          return showSpeedSheet.value;
        },
        actions: () => {
          return speedOptions.value;
        },
        title: "Playback speed",
        onClose: () => {
          return _on_close;
        },
        onSelect: () => {
          return selectSpeed;
        }
      });
      _setSharedData(__sharedData, 2, n41?.sharedData);
      const n42 = _createSharedDataComponentWithFallback(_component_up_slider, "11cde90e", {
        "model-value": () => {
          return currentProgress.value;
        },
        min: 0,
        max: 100,
        step: 1,
        "show-value": false,
        "use-native": () => {
          return _unref(useNativeSlider);
        },
        innerStyle: { padding: 0 },
        activeColor: "rgba(255,255,255,0.32)",
        "inactive-color": "rgba(255,255,255,0.3)",
        "block-size": "6px",
        "block-color": "rgba(255,255,255,0.5)",
        height: "1px",
        onChanging: () => {
          return onProgressChanging;
        },
        onChange: () => {
          return onProgressChange;
        }
      });
      _setSharedData(__sharedData, 11, n42?.sharedData);
      _createSharedDataSlot("tabbar", null, null, () => {
        const n50 = _createSharedDataComponentWithFallback(_component_up_tabbar, "11cdfc31", {
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true,
          borderColor: "rgba(255,255,255,0.25) !important",
          backgroundColor: "rgba(255,255,255,0.05)"
        }, {
          "default": _withSharedDataVaporCtx(() => {
            const _on_click = () => {
              return goNext();
            };
            const n46 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "11ce0750", {
              onClick: () => {
                return _on_click;
              },
              text: "Home",
              icon: "home"
            });
            _setSharedData(__sharedData, 7, n46?.sharedData);
            const n47 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "11ce5a06", {
              text: "Discover",
              icon: "photo"
            });
            _setSharedData(__sharedData, 8, n47?.sharedData);
            const n48 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "11ce5da4", {
              text: "Live",
              icon: "play-right"
            });
            _setSharedData(__sharedData, 9, n48?.sharedData);
            const n49 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "11ce612e", {
              text: "Mine",
              icon: "account"
            });
            _setSharedData(__sharedData, 10, n49?.sharedData);
          })
        });
        _setSharedData(__sharedData, 6, n50?.sharedData);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-short-video.js.map
