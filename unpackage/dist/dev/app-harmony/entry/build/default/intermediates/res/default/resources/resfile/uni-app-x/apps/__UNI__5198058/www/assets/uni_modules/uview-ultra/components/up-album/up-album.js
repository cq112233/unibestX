import { _ as __easycom_0 } from "../up-text/up-text.js";
import "../../libs/composable/useMp.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { a as addUnit, g as getPx, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { d as defProps } from "./album.js";
import { i as imageProps } from "../up-image/image.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, unref: _unref, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpAlbumUpAlbum";
const { ref, computed, watch, getCurrentInstance } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    //   ...mpSharedMpOptions,
    name: "up-album"
  },
  __dynamicSharedData: true,
  __hash: "2b65dcfc",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-album/up-album.uvue",
  __name: "up-album",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpAlbumUpAlbumSharedData", sharedDataClassId: 0 })));
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
    computed(() => {
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_text = __easycom_0;
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return showUrls.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 3, { flexWrap: __props.autoWrap ? "wrap" : "nowrap" });
        });
        _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 1, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
        })), () => {
          return _for_item0.value;
        }, (__sharedData_VFor1, _for_item1, _for_key1) => {
          _renderSharedDataEffect(() => {
            const _imageHeight = imageHeight.value;
            _setSharedDataStyle(__sharedData_VFor1, 4, [imageStyle.value(_for_key0.value + 1, _for_key1.value + 1)]);
            _setSharedDataAttr(__sharedData_VFor1, 5, _toSharedDataString(getSrc(_for_item1.value)));
            _setSharedDataAttr(__sharedData_VFor1, 6, _toSharedDataImageMode(__props.urls.length == 1 ? _imageHeight != "0px" && _imageHeight != "0rpx" ? __props.singleMode : "widthFix" : __props.multipleMode));
            _setSharedDataStyle(__sharedData_VFor1, 7, [
              {
                width: imageWidth.value,
                height: _imageHeight,
                borderRadius: __props.shape == "circle" ? "10000px" : _unref(addUnit)(__props.radius)
              }
            ]);
          });
          _createSharedDataIf(() => {
            return false;
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor1, 2, {
                borderRadius: __props.shape == "circle" ? "50%" : _unref(addUnit)(__props.radius)
              });
            });
            const n7 = _createSharedDataComponentWithFallback(_component_up_text, "661a3723-" + _for_key1.value, {
              text: () => {
                return `+${__props.urls.length - parseInt(__props.maxCount.toString())}`;
              },
              color: "#fff",
              size: () => {
                return parseInt(__props.multipleSize.toString()) * 0.3;
              },
              align: "center",
              customStyle: "justify-content: center"
            });
            _setSharedData(__sharedData_VFor1, 1, n7?.sharedData);
          });
          _setSharedDataEvent(__sharedData_VFor1, 3, ($event) => {
            return onPreviewTap($event, getSrc(_for_item1.value));
          });
          return null;
        }, (__sharedData_VFor1, item, index1) => {
          return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index1));
        }, 1);
        _setSharedDataTemplateRef(__sharedData_VFor0, 2, (n10) => {
          _setTemplateRef(n10, "up-album__row", true);
        });
        return null;
      }, (__sharedData_VFor0, arr, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-album.js.map
