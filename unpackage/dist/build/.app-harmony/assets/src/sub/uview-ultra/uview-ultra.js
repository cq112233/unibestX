import { _ as __easycom_0 } from "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_1 } from "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import { _ as __easycom_2 } from "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import "../../store/index.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../uni_modules/uview-ultra/components/up-cell-group/cellGroup.js";
import "../../utils/systemInfo.js";
import "../../tabbar/config.js";
import "../../tabbar/types.js";
import "../../tabbar/index.js";
import "../../tabbar/helper/index.js";
import "../../tabbar/helper/store.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraUviewUltra";
const { computed } = globalThis.Vue;
const demoCount = 86;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/uview-ultra.uvue",
  __name: "uview-ultra",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const themeColor = computed(() => {
      return appStore.state.theme;
    });
    function goToDemo(page) {
      uni.navigateTo({
        url: `/src/sub/uview-ultra/demos/${page}/${page}`
      });
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_cell = __easycom_1;
      const _component_up_cell_group = __easycom_2;
      const n281 = _createSharedDataComponent(AppKu, "078c97b3", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "uview-ultra 示例", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n280 = _createSharedDataComponent(LayoutComponent, "56c57689", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "uview-ultra 示例", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _setSharedData(__sharedData, 179, _toDisplayString(demoCount));
              const n49 = _createSharedDataComponentWithFallback(_component_up_cell_group, "fc2d7e7c", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click = () => {
                    return goToDemo("coupon");
                  };
                  const n9 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d7d84", {
                    title: "Coupon 优惠券",
                    "is-link": "",
                    onClick: () => {
                      return _on_click;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n7 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d75fa", {
                        name: "coupon",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 4, n7?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 3, n9?.sharedData);
                  const _on_click1 = () => {
                    return goToDemo("pdf-reader");
                  };
                  const n12 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d687a", {
                    title: "PdfReader PDF 阅读",
                    "is-link": "",
                    onClick: () => {
                      return _on_click1;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d60b2", {
                        name: "file-text-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 6, n10?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 5, n12?.sharedData);
                  const _on_click2 = () => {
                    return goToDemo("tree");
                  };
                  const n15 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d5838", {
                    title: "Tree 树形",
                    "is-link": "",
                    onClick: () => {
                      return _on_click2;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n13 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2d50b8", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 8, n13?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 7, n15?.sharedData);
                  const _on_click3 = () => {
                    return goToDemo("barcode");
                  };
                  const n18 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2d4874", {
                    title: "Barcode 条形码",
                    "is-link": "",
                    onClick: () => {
                      return _on_click3;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c9dfc", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 10, n16?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 9, n18?.sharedData);
                  const _on_click4 = () => {
                    return goToDemo("poster");
                  };
                  const n21 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c95c0", {
                    title: "Poster 海报",
                    "is-link": "",
                    onClick: () => {
                      return _on_click4;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n19 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c8e38", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 12, n19?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 11, n21?.sharedData);
                  const _on_click5 = () => {
                    return goToDemo("short-video");
                  };
                  const n24 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c85fa", {
                    title: "ShortVideo 短视频",
                    "is-link": "",
                    onClick: () => {
                      return _on_click5;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c7e0a", {
                        name: "play-right",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 14, n22?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 13, n24?.sharedData);
                  const _on_click6 = () => {
                    return goToDemo("color-picker");
                  };
                  const n27 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c70ac", {
                    title: "ColorPicker 颜色选择",
                    "is-link": "",
                    onClick: () => {
                      return _on_click6;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n25 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2c68b6", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 16, n25?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 15, n27?.sharedData);
                  const _on_click7 = () => {
                    return goToDemo("cropper");
                  };
                  const n30 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2c6072", {
                    title: "Cropper 裁剪",
                    "is-link": "",
                    onClick: () => {
                      return _on_click7;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n28 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2bbb12", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 18, n28?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 17, n30?.sharedData);
                  const _on_click8 = () => {
                    return goToDemo("dragsort");
                  };
                  const n33 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2badbe", {
                    title: "Dragsort 拖拽排序",
                    "is-link": "",
                    onClick: () => {
                      return _on_click8;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n31 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ba600", {
                        name: "order",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 20, n31?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 19, n33?.sharedData);
                  const _on_click9 = () => {
                    return goToDemo("signature");
                  };
                  const n36 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b9dc2", {
                    title: "Signature 签名",
                    "is-link": "",
                    onClick: () => {
                      return _on_click9;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n34 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b9604", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 22, n34?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 21, n36?.sharedData);
                  const _on_click10 = () => {
                    return goToDemo("table2");
                  };
                  const n39 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b8dc0", {
                    title: "Table2 表格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click10;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n37 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2b8638", {
                        name: "grid",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 24, n37?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 23, n39?.sharedData);
                  const _on_click11 = () => {
                    return goToDemo("title");
                  };
                  const n42 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2b78e6", {
                    title: "Title 标题",
                    "is-link": "",
                    onClick: () => {
                      return _on_click11;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n40 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ad3b8", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 26, n40?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 25, n42?.sharedData);
                  const _on_click12 = () => {
                    return goToDemo("cascader");
                  };
                  const n45 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2acb4a", {
                    title: "Cascader 级联选择器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click12;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n43 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2ac38a", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 28, n43?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 27, n45?.sharedData);
                  const _on_click13 = () => {
                    return goToDemo("float-button");
                  };
                  const n48 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2abb4e", {
                    title: "FloatButton 悬浮按钮",
                    "is-link": "",
                    onClick: () => {
                      return _on_click13;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n46 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2aae6c", {
                        name: "plus-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 30, n46?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 29, n48?.sharedData);
                })
              });
              _setSharedData(__sharedData, 2, n49?.sharedData);
              const n136 = _createSharedDataComponentWithFallback(_component_up_cell_group, "fc2a97aa", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click14 = () => {
                    return goToDemo("button");
                  };
                  const n54 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2a96b2", {
                    title: "Button 按钮",
                    "is-link": "",
                    onClick: () => {
                      return _on_click14;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n52 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2a8f00", {
                        name: "plus-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 33, n52?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 32, n54?.sharedData);
                  const _on_click15 = () => {
                    return goToDemo("icon");
                  };
                  const n57 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29e90c", {
                    title: "Icon 图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click15;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n55 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29e18c", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 35, n55?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 34, n57?.sharedData);
                  const _on_click16 = () => {
                    return goToDemo("text");
                  };
                  const n60 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29d438", {
                    title: "Text 文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click16;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n58 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29ccb8", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 37, n58?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 36, n60?.sharedData);
                  const _on_click17 = () => {
                    return goToDemo("link");
                  };
                  const n63 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29c448", {
                    title: "Link 超链接",
                    "is-link": "",
                    onClick: () => {
                      return _on_click17;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n61 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29bcc6", {
                        name: "attach",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 39, n61?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 38, n63?.sharedData);
                  const _on_click18 = () => {
                    return goToDemo("empty");
                  };
                  const n66 = _createSharedDataComponentWithFallback(_component_up_cell, "fc29b486", {
                    title: "Empty 空白页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click18;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n64 = _createSharedDataComponentWithFallback(_component_up_icon, "fc29ad00", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 41, n64?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 40, n66?.sharedData);
                  const _on_click19 = () => {
                    return goToDemo("divider");
                  };
                  const n69 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2901cc", {
                    title: "Divider 分割线",
                    "is-link": "",
                    onClick: () => {
                      return _on_click19;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n67 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28fa3e", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 43, n67?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 42, n69?.sharedData);
                  const _on_click20 = () => {
                    return goToDemo("loading-icon");
                  };
                  const n72 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28f1d6", {
                    title: "LoadingIcon 加载图标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click20;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n70 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28ea0a", {
                        name: "reload",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 45, n70?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 44, n72?.sharedData);
                  const _on_click21 = () => {
                    return goToDemo("skeleton");
                  };
                  const n75 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28dcb4", {
                    title: "Skeleton 骨架屏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click21;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n73 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28d4f8", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 47, n73?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 46, n75?.sharedData);
                  const _on_click22 = () => {
                    return goToDemo("tag");
                  };
                  const n78 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28cc8a", {
                    title: "Tag 标签",
                    "is-link": "",
                    onClick: () => {
                      return _on_click22;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n76 = _createSharedDataComponentWithFallback(_component_up_icon, "fc28c538", {
                        name: "tags",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 49, n76?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 48, n78?.sharedData);
                  const _on_click23 = () => {
                    return goToDemo("badge");
                  };
                  const n81 = _createSharedDataComponentWithFallback(_component_up_cell, "fc28bcfc", {
                    title: "Badge 徽标",
                    "is-link": "",
                    onClick: () => {
                      return _on_click23;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n79 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2817ce", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 51, n79?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 50, n81?.sharedData);
                  const _on_click24 = () => {
                    return goToDemo("avatar");
                  };
                  const n84 = _createSharedDataComponentWithFallback(_component_up_cell, "fc280a44", {
                    title: "Avatar 头像",
                    "is-link": "",
                    onClick: () => {
                      return _on_click24;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n82 = _createSharedDataComponentWithFallback(_component_up_icon, "fc2802bc", {
                        name: "account",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 53, n82?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 52, n84?.sharedData);
                  const _on_click25 = () => {
                    return goToDemo("card");
                  };
                  const n87 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27fa50", {
                    title: "Card 卡片",
                    "is-link": "",
                    onClick: () => {
                      return _on_click25;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n85 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27f2d0", {
                        name: "map",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 55, n85?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 54, n87?.sharedData);
                  const _on_click26 = () => {
                    return goToDemo("list");
                  };
                  const n90 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27eac0", {
                    title: "List 列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click26;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n88 = _createSharedDataComponentWithFallback(_component_up_icon, "fc27e340", {
                        name: "list-dot",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 57, n88?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 56, n90?.sharedData);
                  const _on_click27 = () => {
                    return goToDemo("swiper");
                  };
                  const n93 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27d5bc", {
                    title: "Swiper 轮播图",
                    "is-link": "",
                    onClick: () => {
                      return _on_click27;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n91 = _createSharedDataComponentWithFallback(_component_up_icon, "fc273088", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 59, n91?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 58, n93?.sharedData);
                  const _on_click28 = () => {
                    return goToDemo("image");
                  };
                  const n96 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27284a", {
                    title: "Image 图片组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click28;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n94 = _createSharedDataComponentWithFallback(_component_up_icon, "fc272098", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 61, n94?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 60, n96?.sharedData);
                  const _on_click29 = () => {
                    return goToDemo("transition");
                  };
                  const n99 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27185a", {
                    title: "Transition 动画过渡",
                    "is-link": "",
                    onClick: () => {
                      return _on_click29;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n97 = _createSharedDataComponentWithFallback(_component_up_icon, "fc270b7e", {
                        name: "play-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 63, n97?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 62, n99?.sharedData);
                  const _on_click30 = () => {
                    return goToDemo("steps");
                  };
                  const n102 = _createSharedDataComponentWithFallback(_component_up_cell, "fc27030a", {
                    title: "Steps 步骤条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click30;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n100 = _createSharedDataComponentWithFallback(_component_up_icon, "fc26fb84", {
                        name: "order",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 65, n100?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 64, n102?.sharedData);
                  const _on_click31 = () => {
                    return goToDemo("grid");
                  };
                  const n105 = _createSharedDataComponentWithFallback(_component_up_cell, "fc26f344", {
                    title: "Grid 宫格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click31;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n103 = _createSharedDataComponentWithFallback(_component_up_icon, "fc26ebba", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 67, n103?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 66, n105?.sharedData);
                  const _on_click32 = () => {
                    return goToDemo("line");
                  };
                  const n108 = _createSharedDataComponentWithFallback(_component_up_cell, "fc264084", {
                    title: "Line 线条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click32;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n106 = _createSharedDataComponentWithFallback(_component_up_icon, "fc263904", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 69, n106?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 68, n108?.sharedData);
                  const _on_click33 = () => {
                    return goToDemo("album");
                  };
                  const n111 = _createSharedDataComponentWithFallback(_component_up_cell, "fc2630c6", {
                    title: "Album 相册",
                    "is-link": "",
                    onClick: () => {
                      return _on_click33;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n109 = _createSharedDataComponentWithFallback(_component_up_icon, "fc262942", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 71, n109?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 70, n111?.sharedData);
                  const _on_click34 = () => {
                    return goToDemo("gap");
                  };
                  const n114 = _createSharedDataComponentWithFallback(_component_up_cell, "fc262104", {
                    title: "Gap 间隔槽",
                    "is-link": "",
                    onClick: () => {
                      return _on_click34;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n112 = _createSharedDataComponentWithFallback(_component_up_icon, "fc261986", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 73, n112?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 72, n114?.sharedData);
                  const _on_click35 = () => {
                    return goToDemo("sticky");
                  };
                  const n117 = _createSharedDataComponentWithFallback(_component_up_cell, "fc260c32", {
                    title: "Sticky 吸顶",
                    "is-link": "",
                    onClick: () => {
                      return _on_click35;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n115 = _createSharedDataComponentWithFallback(_component_up_icon, "fc260476", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 75, n115?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 74, n117?.sharedData);
                  const _on_click36 = () => {
                    return goToDemo("table");
                  };
                  const n120 = _createSharedDataComponentWithFallback(_component_up_cell, "89843868", {
                    title: "Table 表格",
                    "is-link": "",
                    onClick: () => {
                      return _on_click36;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n118 = _createSharedDataComponentWithFallback(_component_up_icon, "898430da", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 77, n118?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 76, n120?.sharedData);
                  const _on_click37 = () => {
                    return goToDemo("lazy-load");
                  };
                  const n123 = _createSharedDataComponentWithFallback(_component_up_cell, "89842864", {
                    title: "LazyLoad 懒加载",
                    "is-link": "",
                    onClick: () => {
                      return _on_click37;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n121 = _createSharedDataComponentWithFallback(_component_up_icon, "89841b90", {
                        name: "photo",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 79, n121?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 78, n123?.sharedData);
                  const _on_click38 = () => {
                    return goToDemo("loadmore");
                  };
                  const n126 = _createSharedDataComponentWithFallback(_component_up_cell, "89841352", {
                    title: "Loadmore 加载更多",
                    "is-link": "",
                    onClick: () => {
                      return _on_click38;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n124 = _createSharedDataComponentWithFallback(_component_up_icon, "89840b94", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 81, n124?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 80, n126?.sharedData);
                  const _on_click39 = () => {
                    return goToDemo("parse");
                  };
                  const n129 = _createSharedDataComponentWithFallback(_component_up_cell, "8984031c", {
                    title: "Parse 富文本解析",
                    "is-link": "",
                    onClick: () => {
                      return _on_click39;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n127 = _createSharedDataComponentWithFallback(_component_up_icon, "8983fb92", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 83, n127?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 82, n129?.sharedData);
                  const _on_click40 = () => {
                    return goToDemo("qrcode");
                  };
                  const n132 = _createSharedDataComponentWithFallback(_component_up_cell, "89835062", {
                    title: "Qrcode 二维码",
                    "is-link": "",
                    onClick: () => {
                      return _on_click40;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n130 = _createSharedDataComponentWithFallback(_component_up_icon, "898348d8", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 85, n130?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 84, n132?.sharedData);
                  const _on_click41 = () => {
                    return goToDemo("waterfall");
                  };
                  const n135 = _createSharedDataComponentWithFallback(_component_up_cell, "8983409c", {
                    title: "Waterfall 瀑布流",
                    "is-link": "",
                    onClick: () => {
                      return _on_click41;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n133 = _createSharedDataComponentWithFallback(_component_up_icon, "898338dc", {
                        name: () => {
                          return "grid";
                        },
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 87, n133?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 86, n135?.sharedData);
                })
              });
              _setSharedData(__sharedData, 31, n136?.sharedData);
              const n190 = _createSharedDataComponentWithFallback(_component_up_cell_group, "898321d6", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click42 = () => {
                    return goToDemo("input");
                  };
                  const n141 = _createSharedDataComponentWithFallback(_component_up_cell, "89831bc8", {
                    title: "Input 输入框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click42;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n139 = _createSharedDataComponentWithFallback(_component_up_icon, "89831442", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 90, n139?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 89, n141?.sharedData);
                  const _on_click43 = () => {
                    return goToDemo("checkbox");
                  };
                  const n144 = _createSharedDataComponentWithFallback(_component_up_cell, "89830bd4", {
                    title: "Checkbox 复选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click43;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n142 = _createSharedDataComponentWithFallback(_component_up_icon, "8982666e", {
                        name: "checkbox-mark",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 92, n142?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 91, n144?.sharedData);
                  const _on_click44 = () => {
                    return goToDemo("radio");
                  };
                  const n147 = _createSharedDataComponentWithFallback(_component_up_cell, "898258e0", {
                    title: "Radio 单选框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click44;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n145 = _createSharedDataComponentWithFallback(_component_up_icon, "8982515a", {
                        name: "checkmark-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 94, n145?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 93, n147?.sharedData);
                  const _on_click45 = () => {
                    return goToDemo("switch");
                  };
                  const n150 = _createSharedDataComponentWithFallback(_component_up_cell, "898248dc", {
                    title: "Switch 开关",
                    "is-link": "",
                    onClick: () => {
                      return _on_click45;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n148 = _createSharedDataComponentWithFallback(_component_up_icon, "89824154", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 96, n148?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 95, n150?.sharedData);
                  const _on_click46 = () => {
                    return goToDemo("rate");
                  };
                  const n153 = _createSharedDataComponentWithFallback(_component_up_cell, "898238e0", {
                    title: "Rate 评分",
                    "is-link": "",
                    onClick: () => {
                      return _on_click46;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n151 = _createSharedDataComponentWithFallback(_component_up_icon, "89823160", {
                        name: "star",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 98, n151?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 97, n153?.sharedData);
                  const _on_click47 = () => {
                    return goToDemo("number-box");
                  };
                  const n156 = _createSharedDataComponentWithFallback(_component_up_cell, "8982240e", {
                    title: "NumberBox 步进器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click47;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n154 = _createSharedDataComponentWithFallback(_component_up_icon, "89817ea2", {
                        name: "plus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 100, n154?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 99, n156?.sharedData);
                  const _on_click48 = () => {
                    return goToDemo("slider");
                  };
                  const n159 = _createSharedDataComponentWithFallback(_component_up_cell, "89817666", {
                    title: "Slider 滑块",
                    "is-link": "",
                    onClick: () => {
                      return _on_click48;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n157 = _createSharedDataComponentWithFallback(_component_up_icon, "89816ede", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 102, n157?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 101, n159?.sharedData);
                  const _on_click49 = () => {
                    return goToDemo("textarea");
                  };
                  const n162 = _createSharedDataComponentWithFallback(_component_up_cell, "898166a0", {
                    title: "Textarea 多行文本",
                    "is-link": "",
                    onClick: () => {
                      return _on_click49;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n160 = _createSharedDataComponentWithFallback(_component_up_icon, "898159cc", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 104, n160?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 103, n162?.sharedData);
                  const _on_click50 = () => {
                    return goToDemo("upload");
                  };
                  const n165 = _createSharedDataComponentWithFallback(_component_up_cell, "8981515c", {
                    title: "Upload 上传",
                    "is-link": "",
                    onClick: () => {
                      return _on_click50;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n163 = _createSharedDataComponentWithFallback(_component_up_icon, "898149d4", {
                        name: "arrow-up",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 106, n163?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 105, n165?.sharedData);
                  const _on_click51 = () => {
                    return goToDemo("search");
                  };
                  const n168 = _createSharedDataComponentWithFallback(_component_up_cell, "89814190", {
                    title: "Search 搜索",
                    "is-link": "",
                    onClick: () => {
                      return _on_click51;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n166 = _createSharedDataComponentWithFallback(_component_up_icon, "898139de", {
                        name: "search",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 108, n166?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 107, n168?.sharedData);
                  const _on_click52 = () => {
                    return goToDemo("form");
                  };
                  const n171 = _createSharedDataComponentWithFallback(_component_up_cell, "89808ede", {
                    title: "完整 Form 表单示例",
                    "is-link": "",
                    onClick: () => {
                      return _on_click52;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n169 = _createSharedDataComponentWithFallback(_component_up_icon, "89808754", {
                        name: "edit-pen",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 110, n169?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 109, n171?.sharedData);
                  const _on_click53 = () => {
                    return goToDemo("pagination");
                  };
                  const n174 = _createSharedDataComponentWithFallback(_component_up_cell, "89807ee6", {
                    title: "Pagination 分页器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click53;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n172 = _createSharedDataComponentWithFallback(_component_up_icon, "89807722", {
                        name: "more-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 112, n172?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 111, n174?.sharedData);
                  const _on_click54 = () => {
                    return goToDemo("keyboard");
                  };
                  const n177 = _createSharedDataComponentWithFallback(_component_up_cell, "89806996", {
                    title: "Keyboard 键盘",
                    "is-link": "",
                    onClick: () => {
                      return _on_click54;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n175 = _createSharedDataComponentWithFallback(_component_up_icon, "89806206", {
                        name: "grid-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 114, n175?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 113, n177?.sharedData);
                  const _on_click55 = () => {
                    return goToDemo("dropdown");
                  };
                  const n180 = _createSharedDataComponentWithFallback(_component_up_cell, "89805996", {
                    title: "Dropdown 下拉菜单",
                    "is-link": "",
                    onClick: () => {
                      return _on_click55;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n178 = _createSharedDataComponentWithFallback(_component_up_icon, "898051d8", {
                        name: "arrow-down-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 116, n178?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 115, n180?.sharedData);
                  const _on_click56 = () => {
                    return goToDemo("swipe-action");
                  };
                  const n183 = _createSharedDataComponentWithFallback(_component_up_cell, "897fabb2", {
                    title: "SwipeAction 滑动操作",
                    "is-link": "",
                    onClick: () => {
                      return _on_click56;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n181 = _createSharedDataComponentWithFallback(_component_up_icon, "897f9ea6", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 118, n181?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 117, n183?.sharedData);
                  const _on_click57 = () => {
                    return goToDemo("code-input");
                  };
                  const n186 = _createSharedDataComponentWithFallback(_component_up_cell, "897f966a", {
                    title: "CodeInput 验证码输入",
                    "is-link": "",
                    onClick: () => {
                      return _on_click57;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n184 = _createSharedDataComponentWithFallback(_component_up_icon, "897f8ea4", {
                        name: "lock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 120, n184?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 119, n186?.sharedData);
                  const _on_click58 = () => {
                    return goToDemo("code");
                  };
                  const n189 = _createSharedDataComponentWithFallback(_component_up_cell, "897f8668", {
                    title: "Code 验证码倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click58;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n187 = _createSharedDataComponentWithFallback(_component_up_icon, "897f7ee0", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 122, n187?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 121, n189?.sharedData);
                })
              });
              _setSharedData(__sharedData, 88, n190?.sharedData);
              const n250 = _createSharedDataComponentWithFallback(_component_up_cell_group, "897ec528", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click59 = () => {
                    return goToDemo("alert");
                  };
                  const n195 = _createSharedDataComponentWithFallback(_component_up_cell, "897ec430", {
                    title: "Alert 警告提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click59;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n193 = _createSharedDataComponentWithFallback(_component_up_icon, "897ebca8", {
                        name: "info-circle",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 125, n193?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 124, n195?.sharedData);
                  const _on_click60 = () => {
                    return goToDemo("calendar");
                  };
                  const n198 = _createSharedDataComponentWithFallback(_component_up_cell, "897eb434", {
                    title: "Calendar 日历",
                    "is-link": "",
                    onClick: () => {
                      return _on_click60;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n196 = _createSharedDataComponentWithFallback(_component_up_icon, "897eaca4", {
                        name: "calendar",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 127, n196?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 126, n198?.sharedData);
                  const _on_click61 = () => {
                    return goToDemo("picker");
                  };
                  const n201 = _createSharedDataComponentWithFallback(_component_up_cell, "897e9f20", {
                    title: "Picker 选择器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click61;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n199 = _createSharedDataComponentWithFallback(_component_up_icon, "897e9796", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 129, n199?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 128, n201?.sharedData);
                  const _on_click62 = () => {
                    return goToDemo("datetime-picker");
                  };
                  const n204 = _createSharedDataComponentWithFallback(_component_up_cell, "897e8f5a", {
                    title: "DatetimePicker 时间选择",
                    "is-link": "",
                    onClick: () => {
                      return _on_click62;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n202 = _createSharedDataComponentWithFallback(_component_up_icon, "897e8758", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 131, n202?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 130, n204?.sharedData);
                  const _on_click63 = () => {
                    return goToDemo("action-sheet");
                  };
                  const n207 = _createSharedDataComponentWithFallback(_component_up_cell, "897ddc5a", {
                    title: "ActionSheet 动作面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click63;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n205 = _createSharedDataComponentWithFallback(_component_up_icon, "897dd464", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 133, n205?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 132, n207?.sharedData);
                  const _on_click64 = () => {
                    return goToDemo("notice-bar");
                  };
                  const n210 = _createSharedDataComponentWithFallback(_component_up_cell, "897dcbf2", {
                    title: "NoticeBar 滚动通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click64;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n208 = _createSharedDataComponentWithFallback(_component_up_icon, "897dc42e", {
                        name: "volume",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 135, n208?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 134, n210?.sharedData);
                  const _on_click65 = () => {
                    return goToDemo("collapse");
                  };
                  const n213 = _createSharedDataComponentWithFallback(_component_up_cell, "897db6d8", {
                    title: "Collapse 折叠面板",
                    "is-link": "",
                    onClick: () => {
                      return _on_click65;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n211 = _createSharedDataComponentWithFallback(_component_up_icon, "897daf1a", {
                        name: "arrow-down",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 137, n211?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 136, n213?.sharedData);
                  const _on_click66 = () => {
                    return goToDemo("toast");
                  };
                  const n216 = _createSharedDataComponentWithFallback(_component_up_cell, "897da6a8", {
                    title: "Toast 消息提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click66;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n214 = _createSharedDataComponentWithFallback(_component_up_icon, "897d9f20", {
                        name: "chat",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 139, n214?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 138, n216?.sharedData);
                  const _on_click67 = () => {
                    return goToDemo("notify");
                  };
                  const n219 = _createSharedDataComponentWithFallback(_component_up_cell, "897d96e4", {
                    title: "Notify 消息通知",
                    "is-link": "",
                    onClick: () => {
                      return _on_click67;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n217 = _createSharedDataComponentWithFallback(_component_up_icon, "897cf1ae", {
                        name: "bell",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 141, n217?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 140, n219?.sharedData);
                  const _on_click68 = () => {
                    return goToDemo("loading-page");
                  };
                  const n222 = _createSharedDataComponentWithFallback(_component_up_cell, "897ce45c", {
                    title: "LoadingPage 加载页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click68;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n220 = _createSharedDataComponentWithFallback(_component_up_icon, "897cdc68", {
                        name: "more-dot-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 143, n220?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 142, n222?.sharedData);
                  const _on_click69 = () => {
                    return goToDemo("overlay");
                  };
                  const n225 = _createSharedDataComponentWithFallback(_component_up_cell, "897cd3f0", {
                    title: "Overlay 遮罩层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click69;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n223 = _createSharedDataComponentWithFallback(_component_up_icon, "897ccc62", {
                        name: "scan",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 145, n223?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 144, n225?.sharedData);
                  const _on_click70 = () => {
                    return goToDemo("modal");
                  };
                  const n228 = _createSharedDataComponentWithFallback(_component_up_cell, "897cbf10", {
                    title: "Modal 模态框",
                    "is-link": "",
                    onClick: () => {
                      return _on_click70;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n226 = _createSharedDataComponentWithFallback(_component_up_icon, "897cb760", {
                        name: "email",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 147, n226?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 146, n228?.sharedData);
                  const _on_click71 = () => {
                    return goToDemo("popup");
                  };
                  const n231 = _createSharedDataComponentWithFallback(_component_up_cell, "897caf22", {
                    title: "Popup 弹出层",
                    "is-link": "",
                    onClick: () => {
                      return _on_click71;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n229 = _createSharedDataComponentWithFallback(_component_up_icon, "897c09f2", {
                        name: "server-man",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 149, n229?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 148, n231?.sharedData);
                  const _on_click72 = () => {
                    return goToDemo("no-network");
                  };
                  const n234 = _createSharedDataComponentWithFallback(_component_up_cell, "897c01aa", {
                    title: "NoNetwork 无网络提示",
                    "is-link": "",
                    onClick: () => {
                      return _on_click72;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n232 = _createSharedDataComponentWithFallback(_component_up_icon, "897bf9ba", {
                        name: "wifi-off",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 151, n232?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 150, n234?.sharedData);
                  const _on_click73 = () => {
                    return goToDemo("line-progress");
                  };
                  const n237 = _createSharedDataComponentWithFallback(_component_up_cell, "897bec5e", {
                    title: "LineProgress 线型进度",
                    "is-link": "",
                    onClick: () => {
                      return _on_click73;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n235 = _createSharedDataComponentWithFallback(_component_up_icon, "897be464", {
                        name: "minus",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 153, n235?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 152, n237?.sharedData);
                  const _on_click74 = () => {
                    return goToDemo("circle-progress");
                  };
                  const n240 = _createSharedDataComponentWithFallback(_component_up_cell, "897bdc26", {
                    title: "CircleProgress 圆形进度条",
                    "is-link": "",
                    onClick: () => {
                      return _on_click74;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n238 = _createSharedDataComponentWithFallback(_component_up_icon, "897bd422", {
                        name: "reload",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 155, n238?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 154, n240?.sharedData);
                  const _on_click75 = () => {
                    return goToDemo("count-down");
                  };
                  const n243 = _createSharedDataComponentWithFallback(_component_up_cell, "897bc6a2", {
                    title: "CountDown 倒计时",
                    "is-link": "",
                    onClick: () => {
                      return _on_click75;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n241 = _createSharedDataComponentWithFallback(_component_up_icon, "896809a0", {
                        name: "clock",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 157, n241?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 156, n243?.sharedData);
                  const _on_click76 = () => {
                    return goToDemo("count-to");
                  };
                  const n246 = _createSharedDataComponentWithFallback(_component_up_cell, "89680162", {
                    title: "CountTo 数字滚动",
                    "is-link": "",
                    onClick: () => {
                      return _on_click76;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n244 = _createSharedDataComponentWithFallback(_component_up_icon, "8967f9a6", {
                        name: "play-right-fill",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 159, n244?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 158, n246?.sharedData);
                  const _on_click77 = () => {
                    return goToDemo("copy");
                  };
                  const n249 = _createSharedDataComponentWithFallback(_component_up_cell, "8967ec14", {
                    title: "Copy 文本复制",
                    "is-link": "",
                    onClick: () => {
                      return _on_click77;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n247 = _createSharedDataComponentWithFallback(_component_up_icon, "8967e490", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 161, n247?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 160, n249?.sharedData);
                })
              });
              _setSharedData(__sharedData, 123, n250?.sharedData);
              const n277 = _createSharedDataComponentWithFallback(_component_up_cell_group, "8967cdc6", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const _on_click78 = () => {
                    return goToDemo("navbar");
                  };
                  const n255 = _createSharedDataComponentWithFallback(_component_up_cell, "8967ccce", {
                    title: "Navbar 导航栏",
                    "is-link": "",
                    onClick: () => {
                      return _on_click78;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n253 = _createSharedDataComponentWithFallback(_component_up_icon, "8967c51a", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 164, n253?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 163, n255?.sharedData);
                  const _on_click79 = () => {
                    return goToDemo("navbar-mini");
                  };
                  const n258 = _createSharedDataComponentWithFallback(_component_up_cell, "89671a12", {
                    title: "NavbarMini 迷你导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click79;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n256 = _createSharedDataComponentWithFallback(_component_up_icon, "89671220", {
                        name: "arrow-left",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 166, n256?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 165, n258?.sharedData);
                  const _on_click80 = () => {
                    return goToDemo("back-top");
                  };
                  const n261 = _createSharedDataComponentWithFallback(_component_up_cell, "896709d8", {
                    title: "BackTop 返回顶部",
                    "is-link": "",
                    onClick: () => {
                      return _on_click80;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n259 = _createSharedDataComponentWithFallback(_component_up_icon, "8967021c", {
                        name: "arrow-upward",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 168, n259?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 167, n261?.sharedData);
                  const _on_click81 = () => {
                    return goToDemo("tabbar");
                  };
                  const n264 = _createSharedDataComponentWithFallback(_component_up_cell, "8966f490", {
                    title: "Tabbar 底部导航",
                    "is-link": "",
                    onClick: () => {
                      return _on_click81;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n262 = _createSharedDataComponentWithFallback(_component_up_icon, "8966ed04", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 170, n262?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 169, n264?.sharedData);
                  const _on_click82 = () => {
                    return goToDemo("tabs");
                  };
                  const n267 = _createSharedDataComponentWithFallback(_component_up_cell, "8966e4c8", {
                    title: "Tabs 标签页",
                    "is-link": "",
                    onClick: () => {
                      return _on_click82;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n265 = _createSharedDataComponentWithFallback(_component_up_icon, "8966dd46", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 172, n265?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 171, n267?.sharedData);
                  const _on_click83 = () => {
                    return goToDemo("subsection");
                  };
                  const n270 = _createSharedDataComponentWithFallback(_component_up_cell, "89663760", {
                    title: "Subsection 分段器",
                    "is-link": "",
                    onClick: () => {
                      return _on_click83;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n268 = _createSharedDataComponentWithFallback(_component_up_icon, "89662f9c", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 174, n268?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 173, n270?.sharedData);
                  const _on_click84 = () => {
                    return goToDemo("index-list");
                  };
                  const n273 = _createSharedDataComponentWithFallback(_component_up_cell, "8966224a", {
                    title: "IndexList 索引列表",
                    "is-link": "",
                    onClick: () => {
                      return _on_click84;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n271 = _createSharedDataComponentWithFallback(_component_up_icon, "89661a5c", {
                        name: "list",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 176, n271?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 175, n273?.sharedData);
                  const _on_click85 = () => {
                    return goToDemo("mp-html");
                  };
                  const n276 = _createSharedDataComponentWithFallback(_component_up_cell, "89661220", {
                    title: "MpHtml 富文本组件",
                    "is-link": "",
                    onClick: () => {
                      return _on_click85;
                    }
                  }, {
                    "icon": _withSharedDataVaporCtx(() => {
                      const n274 = _createSharedDataComponentWithFallback(_component_up_icon, "89660a90", {
                        name: "file-text",
                        color: () => {
                          return themeColor.value;
                        },
                        size: "20",
                        class: "mr-_b8px_B"
                      });
                      _setSharedData(__sharedData, 178, n274?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 177, n276?.sharedData);
                })
              });
              _setSharedData(__sharedData, 162, n277?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n280.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n281.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b8px_B":{"":{"marginRight":8}}};
const _style_1 = {};
const uviewUltra = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  uviewUltra as default
};
