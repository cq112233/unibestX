"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upAlbum_album = require("./album.js");
const uni_modules_uviewUltra_components_upImage_image = require("../up-image/image.js");
if (!Array) {
  const _easycom_up_text_1 = common_vendor.resolveComponent("up-text");
  _easycom_up_text_1();
}
const _easycom_up_text = () => "../up-text/up-text.js";
if (!Math) {
  _easycom_up_text();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  //   ...mpSharedMpOptions,
  name: "up-album"
}, { __name: "up-album", props: {
  // 图片地址，Array<String>|Array<Object>形式
  urls: {
    type: Array,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getArray("album.urls")
  },
  // 指定从数组的对象元素中读取哪个属性作为图片地址
  keyName: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getString("album.keyName")
  },
  // 单图时，图片长边的长度
  singleSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getNumber("album.singleSize")
  },
  // 多图时，图片边长
  multipleSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getNumber("album.multipleSize")
  },
  // 多图时，图片水平和垂直之间的间隔
  space: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getNumber("album.space")
  },
  // 单图时，图片缩放裁剪的模式
  singleMode: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getString("album.singleMode")
  },
  // 多图时，图片缩放裁剪的模式
  multipleMode: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getString("album.multipleMode")
  },
  // 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
  maxCount: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getNumber("album.maxCount")
  },
  // 是否可以预览图片
  previewFullImage: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getBoolean("album.previewFullImage")
  },
  // 每行展示图片数量，如设置，singleSize和multipleSize将会无效
  rowCount: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getNumber("album.rowCount")
  },
  // 超出maxCount时是否显示查看更多的提示
  showMore: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getBoolean("album.showMore")
  },
  // 图片形状，circle-圆形，square-方形
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.shape")
  },
  // 圆角，单位任意
  radius: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upImage_image.imageProps.getNumber("image.radius")
  },
  // 自适应换行
  autoWrap: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getBoolean("album.autoWrap")
  },
  // 单位
  unit: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getString("album.unit")
  },
  // 阻止点击冒泡
  stop: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlbum_album.defProps.getBoolean("album.stop")
  }
  // ...propsAlbum.props,
  // ...commonProps
}, emits: ["preview", "albumWidth"], setup(__props, _a) {
  var __emit = _a.emit;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const preventEvent = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI().preventEvent;
  const singleWidth = common_vendor.ref(0);
  const singleHeight = common_vendor.ref(0);
  const singlePercent = common_vendor.ref(0.6);
  const getSrc = (item = null) => {
    if (typeof item == "object") {
      let item1 = item;
      return props.keyName != "" && item1.getString(props.keyName) != null ? item1.getString(props.keyName) : item1.getString("src");
    } else {
      return item.toString();
    }
  };
  const getComponentWidth = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
        uni_modules_uviewUltra_libs_function_index.upGetRect(".up-album__row", false, instance).then((res = null) => {
          let size = res;
          let width = size.width;
          if (width != null) {
            singleWidth.value = width * singlePercent.value;
          }
        });
      });
    });
  };
  const showUrls = common_vendor.computed(() => {
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
    common_vendor.index.getImageInfo({
      src,
      success: (res) => {
        const isHorizotal = res.width >= res.height;
        singleWidth.value = isHorizotal ? props.singleSize : res.width / res.height * uni_modules_uviewUltra_libs_function_index.getPx(props.singleSize);
        singleHeight.value = !isHorizotal ? props.singleSize : res.height / res.width * singleWidth.value;
      },
      fail: () => {
        getComponentWidth();
      }
    });
  };
  common_vendor.onMounted(() => {
    if (props.urls.length == 1) {
      getImageRect();
    }
  });
  common_vendor.watch(() => {
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
  const imageStyle = common_vendor.computed(() => {
    return (index1, index2) => {
      const space = props.space, rowCount = props.rowCount;
      props.multipleSize;
      props.urls;
      const rowLen = showUrls.value.length;
      props.urls.length;
      const style = new UTSJSONObject(
        {
          marginRight: uni_modules_uviewUltra_libs_function_index.addUnit(space),
          marginBottom: uni_modules_uviewUltra_libs_function_index.addUnit(space)
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
  const imageWidth = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.urls.length == 1 ? singleWidth.value : props.multipleSize, props.unit);
  });
  const imageHeight = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.urls.length == 1 ? singleHeight.value : props.multipleSize, props.unit);
  });
  const albumWidth = common_vendor.computed(() => {
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
      common_vendor.index.previewImage({
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
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(showUrls.value, (arr, index, i0) => {
        return {
          a: common_vendor.f(arr, (item, index1, i1) => {
            return common_vendor.e({
              a: getSrc(item),
              b: __props.showMore && __props.urls.length > parseInt(__props.rowCount.toString()) * showUrls.value.length && index === showUrls.value.length - 1 && index1 === showUrls.value[showUrls.value.length - 1].length - 1
            }, __props.showMore && __props.urls.length > parseInt(__props.rowCount.toString()) * showUrls.value.length && index === showUrls.value.length - 1 && index1 === showUrls.value[showUrls.value.length - 1].length - 1 ? {
              c: "cc69f70e-0-" + i0 + "-" + i1,
              d: common_vendor.p({
                text: `+${__props.urls.length - parseInt(__props.maxCount.toString())}`,
                color: "#fff",
                size: parseInt(__props.multipleSize.toString()) * 0.3,
                align: "center",
                customStyle: "justify-content: center",
                class: "data-v-cc69f70e"
              }),
              e: __props.shape == "circle" ? "50%" : _ctx.$upAddUnit(__props.radius)
            } : {}, {
              f: index1,
              g: common_vendor.s(imageStyle.value(index + 1, index1 + 1)),
              h: common_vendor.o(($event) => {
                return onPreviewTap($event, getSrc(item));
              }, index1)
            });
          }),
          b: common_vendor.sei("r0-cc69f70e-" + index, "view", "up-album__row", {
            "f": 1
          }),
          c: index
        };
      }),
      b: __props.urls.length == 1 ? imageHeight.value != "0px" && imageHeight.value != "0rpx" ? __props.singleMode : "widthFix" : __props.multipleMode,
      c: common_vendor.s({
        width: imageWidth.value,
        height: imageHeight.value,
        borderRadius: __props.shape == "circle" ? "10000px" : _ctx.$upAddUnit(__props.radius)
      }),
      d: albumWidth.value,
      e: __props.autoWrap ? "wrap" : "nowrap",
      f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      g: `${_ctx.u_s_b_h}px`,
      h: `${_ctx.u_s_a_i_b}px`,
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc69f70e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-album/up-album.js.map
