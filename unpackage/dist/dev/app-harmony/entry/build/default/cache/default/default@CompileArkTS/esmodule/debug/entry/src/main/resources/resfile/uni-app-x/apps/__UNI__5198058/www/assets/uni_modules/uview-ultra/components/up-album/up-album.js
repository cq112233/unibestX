import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
const { defineComponent, getCurrentInstance, ref, computed, onMounted, watch, resolveDynamicComponent, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, createElementVNode, createVNode, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { a as addUnit, g as getPx, s as sleep, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-album/album&";
import { i as imageProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-image/image&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    //   ...mpSharedMpOptions,
    name: "up-album"
  },
  __name: "up-album",
  props: {
    // 图片地址，Array<String>|Array<Object>形式
    urls: {
      type: Array,
      default: defProps.getArray("album.urls")
    },
    // 指定从数组的对象元素中读取哪个属性作为图片地址
    keyName: {
      type: String,
      default: defProps.getString("album.keyName")
    },
    // 单图时，图片长边的长度
    singleSize: {
      type: [String, Number],
      default: defProps.getNumber("album.singleSize")
    },
    // 多图时，图片边长
    multipleSize: {
      type: [String, Number],
      default: defProps.getNumber("album.multipleSize")
    },
    // 多图时，图片水平和垂直之间的间隔
    space: {
      type: [String, Number],
      default: defProps.getNumber("album.space")
    },
    // 单图时，图片缩放裁剪的模式
    singleMode: {
      type: String,
      default: defProps.getString("album.singleMode")
    },
    // 多图时，图片缩放裁剪的模式
    multipleMode: {
      type: String,
      default: defProps.getString("album.multipleMode")
    },
    // 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
    maxCount: {
      type: [String, Number],
      default: defProps.getNumber("album.maxCount")
    },
    // 是否可以预览图片
    previewFullImage: {
      type: Boolean,
      default: defProps.getBoolean("album.previewFullImage")
    },
    // 每行展示图片数量，如设置，singleSize和multipleSize将会无效
    rowCount: {
      type: [String, Number],
      default: defProps.getNumber("album.rowCount")
    },
    // 超出maxCount时是否显示查看更多的提示
    showMore: {
      type: Boolean,
      default: defProps.getBoolean("album.showMore")
    },
    // 图片形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: imageProps.getString("image.shape")
    },
    // 圆角，单位任意
    radius: {
      type: [String, Number],
      default: imageProps.getNumber("image.radius")
    },
    // 自适应换行
    autoWrap: {
      type: Boolean,
      default: defProps.getBoolean("album.autoWrap")
    },
    // 单位
    unit: {
      type: String,
      default: defProps.getString("album.unit")
    },
    // 阻止点击冒泡
    stop: {
      type: Boolean,
      default: defProps.getBoolean("album.stop")
    }
    // ...propsAlbum.props,
    // ...commonProps
  },
  emits: ["preview", "albumWidth"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const preventEvent = useUltraUI().preventEvent;
    const singleWidth = ref(0);
    const singleHeight = ref(0);
    const singlePercent = ref(0.6);
    const getSrc = (item = null) => {
      if (typeof item == "object") {
        let item1 = item;
        return props.keyName != "" && item1.getString(props.keyName) != null ? item1.getString(props.keyName) : item1.getString("src");
      } else {
        return item.toString();
      }
    };
    const getComponentWidth = async () => {
      sleep(30).then(() => {
        upGetRect(".up-album__row", false, instance).then((res = null) => {
          let size = res;
          let width = size.width;
          if (width != null) {
            singleWidth.value = width * singlePercent.value;
          }
        });
      });
    };
    const showUrls = computed(() => {
      if (props.autoWrap) {
        return [props.urls.slice(0, parseInt(props.maxCount.toString()))];
      } else {
        const arr = [];
        props.urls.map((item = null, index) => {
          if (index + 1 <= parseInt(props.maxCount.toString())) {
            const itemIndex = Math.floor(index / parseInt(props.rowCount.toString()));
            if (arr.length == 0 || itemIndex >= arr.length) {
              arr.push([]);
            }
            arr[arr.length - 1].push(item);
          }
        });
        return arr;
      }
    });
    const getImageRect = () => {
      const src = getSrc(props.urls[0]);
      uni.getImageInfo({
        src,
        success: (res) => {
          const isHorizotal = res.width >= res.height;
          singleWidth.value = isHorizotal ? props.singleSize : res.width / res.height * getPx(props.singleSize);
          singleHeight.value = !isHorizotal ? props.singleSize : res.height / res.width * singleWidth.value;
        },
        fail: () => {
          getComponentWidth();
        }
      });
    };
    onMounted(() => {
      if (props.urls.length == 1) {
        getImageRect();
      }
    });
    watch(() => {
      return props.urls;
    }, (newVal) => {
      if (newVal.length == 1) {
        getImageRect();
      }
    }, {
      // 侦听器延迟到组件渲染之后触发
      flush: "post",
      immediate: false
    });
    const imageStyle = computed(() => {
      return (index1, index2) => {
        const space = props.space, rowCount = props.rowCount;
        props.multipleSize;
        props.urls;
        const rowLen = showUrls.value.length;
        props.urls.length;
        const style = new UTSJSONObject(
          {
            marginRight: addUnit(space),
            marginBottom: addUnit(space)
          }
          // 如果为最后一行，则每个图片都无需下边框
        );
        if (index1 === rowLen && !props.autoWrap)
          style.marginBottom = 0;
        if (!props.autoWrap) {
          if (index2 === parseInt(rowCount.toString()) || index1 == rowLen && index2 == showUrls.value[index1 - 1].length)
            style.marginRight = 0;
        }
        return style;
      };
    });
    const imageWidth = computed(() => {
      return addUnit(props.urls.length == 1 ? singleWidth.value : props.multipleSize, props.unit);
    });
    const imageHeight = computed(() => {
      return addUnit(props.urls.length == 1 ? singleHeight.value : props.multipleSize, props.unit);
    });
    const albumWidth = computed(() => {
      let width = 0;
      if (props.urls.length == 1) {
        width = singleWidth.value;
      } else {
        width = showUrls.value[0].length * parseInt(props.multipleSize.toString()) + parseInt(props.space.toString()) * (showUrls.value[0].length - 1);
      }
      emit("albumWidth", width);
      return width;
    });
    const onPreviewTap = (e = null, url) => {
      let ee = e;
      const urls = props.urls.map((item = null) => {
        return getSrc(item);
      });
      if (props.previewFullImage) {
        uni.previewImage({
          current: url,
          urls
        });
        if (props.stop) {
          preventEvent(ee);
        }
      } else {
        emit("preview", new UTSJSONObject({
          urls,
          currentIndex: urls.indexOf(url)
        }));
      }
    };
    const __returned__ = { instance, props, emit, preventEvent, singleWidth, singleHeight, singlePercent, getSrc, getComponentWidth, showUrls, getImageRect, imageStyle, imageWidth, imageHeight, albumWidth, onPreviewTap };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-album": { "": { "display": "flex", "flexDirection": "column" } }, "up-album__row": { "": { "display": "flex", "flexDirection": "row" } }, "up-album__row__wrapper": { "": { "position": "relative" } }, "up-album__row__wrapper__text": { "": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.3)", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_0);
  return openBlock(), createElementBlock("view", { class: "up-album" }, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.showUrls, (arr, index) => {
        return openBlock(), createElementBlock("view", {
          class: "up-album__row",
          ref_for: true,
          ref: "up-album__row",
          forComputedUse: $setup.albumWidth,
          key: index,
          style: normalizeStyle({ flexWrap: $props.autoWrap ? "wrap" : "nowrap" })
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(arr, (item, index1) => {
              return openBlock(), createElementBlock("view", {
                class: "up-album__row__wrapper",
                key: index1,
                style: normalizeStyle([$setup.imageStyle(index + 1, index1 + 1)]),
                onClick: ($event) => $setup.onPreviewTap($event, $setup.getSrc(item))
              }, [
                createElementVNode("image", {
                  src: $setup.getSrc(item),
                  mode: $props.urls.length == 1 ? $setup.imageHeight != "0px" && $setup.imageHeight != "0rpx" ? $props.singleMode : "widthFix" : $props.multipleMode,
                  style: normalizeStyle([
                    {
                      width: $setup.imageWidth,
                      height: $setup.imageHeight,
                      borderRadius: $props.shape == "circle" ? "10000px" : _ctx.$upAddUnit($props.radius)
                    }
                  ])
                }, null, 12, ["src", "mode"]),
                $props.showMore && $props.urls.length > parseInt($props.rowCount.toString()) * $setup.showUrls.length && index === $setup.showUrls.length - 1 && index1 === $setup.showUrls[$setup.showUrls.length - 1].length - 1 ? (openBlock(), createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "up-album__row__wrapper__text",
                    style: normalizeStyle({
                      borderRadius: $props.shape == "circle" ? "50%" : _ctx.$upAddUnit($props.radius)
                    })
                  },
                  [
                    createVNode(_component_up_text, {
                      text: `+${$props.urls.length - parseInt($props.maxCount.toString())}`,
                      color: "#fff",
                      size: parseInt($props.multipleSize.toString()) * 0.3,
                      align: "center",
                      customStyle: "justify-content: center"
                    }, null, 8, ["text", "size"])
                  ],
                  4
                  /* STYLE */
                )) : createCommentVNode("v-if", true)
              ], 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 12, ["forComputedUse"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-album/up-album.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-album.js.map
