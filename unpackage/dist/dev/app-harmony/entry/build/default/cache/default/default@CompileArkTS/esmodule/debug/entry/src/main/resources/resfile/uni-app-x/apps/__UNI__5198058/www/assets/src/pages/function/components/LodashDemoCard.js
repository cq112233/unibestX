import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { u as uniq, c as chunk, g as get, a as cloneDeep, b as camelCase, k as kebabCase, d as capitalize, r as random, s as shuffle, e as debounce } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/iRainna-lodash/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "LodashDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const rawArray = ref([1, 2, 2, 3, 4, 4, 5, 6, 7, 8]);
    const uniqArray = computed(() => {
      return uniq(rawArray.value);
    });
    const chunkedArray = computed(() => {
      const result = chunk(uniqArray.value, 3);
      return UTS.JSON.stringify(result);
    });
    function handleShuffle() {
      rawArray.value = shuffle(rawArray.value);
    }
    const rawObj = new UTSJSONObject({
      user: new UTSJSONObject({
        info: new UTSJSONObject({
          name: "UniAppX Developer",
          age: 25
        })
      })
    });
    const getNameResult = computed(() => {
      return get(rawObj, "user.info.name", "未找到");
    });
    const getFallbackResult = computed(() => {
      return get(rawObj, "user.invalid.path", "兜底结果: 未查找到路径");
    });
    const clonedObj = ref(cloneDeep(rawObj));
    const rawObjAge = ref(get(rawObj, "user.info.age", 0));
    const clonedObjAge = computed(() => {
      return get(clonedObj.value, "user.info.age", 0);
    });
    function mutateClonedObj() {
      const user = clonedObj.value["user"];
      const info = user["info"];
      const currentAge = info["age"] + 1;
      info["age"] = currentAge;
    }
    const inputText = ref("hello_world lodash-demo-test");
    const camelCaseResult = computed(() => {
      return camelCase(inputText.value);
    });
    const kebabCaseResult = computed(() => {
      return kebabCase(inputText.value);
    });
    const capitalizeResult = computed(() => {
      return capitalize(inputText.value);
    });
    const debouncedCount = ref(0);
    const randomValue = ref(random(1, 100));
    function incrementCount() {
      debouncedCount.value += 1;
    }
    const debouncedIncrement = debounce(incrementCount, 400);
    function handleDebounceClick() {
      debouncedIncrement();
    }
    function generateRandom() {
      randomValue.value = random(1, 100);
    }
    const __returned__ = { rawArray, uniqArray, chunkedArray, handleShuffle, rawObj, getNameResult, getFallbackResult, clonedObj, rawObjAge, clonedObjAge, mutateClonedObj, inputText, camelCaseResult, kebabCaseResult, capitalizeResult, debouncedCount, randomValue, incrementCount, debouncedIncrement, handleDebounceClick, generateRandom, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-99n919-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-15nin6-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-kwjfx7-2":{"":{"marginBottom":16}},"wtu-1ip6ax4-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-1379u88-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1v5vx5i-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-wt9zgi-6":{"":{"fontSize":13}},"wtu-1u1vbk3-7":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-vhwil1-8":{"":{"color":"#1e293b"}},"wtu-12p3ytc-9":{"":{"marginBottom":8}},"wtu-nlue1j-a":{"":{"fontSize":12}},"wtu-g2bdc6-b":{"":{"color":"#64748b"}},"wtu-qhe427-c":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-12jpf2i-d":{"":{"color":"#334155"}},"wtu-efn5x4-e":{"":{"marginTop":2}},"wtu-71osv8-f":{"":{"color":"#059669"}},"wtu-1ukgctb-g":{"":{"marginBottom":12}},"wtu-1olf5ta-h":{"":{"color":"#3b82f6"}},"wtu-zvxz19-i":{"":{"width":"100%"}},"wtu-1hlaid0-j":{"":{"height":36}},"wtu-kkfitq-k":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-78ho70-l":{"":{"backgroundColor":"#f1f5f9"}},"wtu-lfvf6n-m":{"":{"display":"flex"}},"wtu-11fbh7u-n":{"":{"flexDirection":"row"}},"wtu-hehpb2-o":{"":{"alignItems":"center"}},"wtu-ltxxn6-p":{"":{"justifyContent":"center"}},"wtu-trlwv5-q":{"":{"color":"#475569"}},"wtu-t30dgu-r":{"":{"color":"#d97706"}},"wtu-ie0kbi-s":{"":{"height":1}},"wtu-x0rgyb-t":{"":{"backgroundColor":"#e2e8f0"}},"wtu-26he62-u":{"":{"marginTop":10,"marginBottom":10}},"wtu-16b98e4-v":{"":{"marginBottom":4}},"wtu-20vb01-w":{"":{"justifyContent":"space-between"}},"wtu-dvbist-x":{"":{"color":"#ec4899"}},"wtu-15b9oe7-y":{"":{"backgroundColor":"#fce7f3"}},"wtu-fwu98w-z":{"":{"color":"#be185d"}},"wtu-11xru9i-10":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-ehidfg-11":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-119kf4q-12":{"":{"borderTopColor":"#cbd5e1","borderRightColor":"#cbd5e1","borderBottomColor":"#cbd5e1","borderLeftColor":"#cbd5e1"}},"wtu-en1iwp-13":{"":{"color":"#8b5cf6"}},"wtu-1a9i6pt-14":{"":{"color":"#06b6d4"}},"wtu-qji53e-15":{"":{"marginBottom":6}},"wtu-13awefi-16":{"":{"color":"#10b981"}},"wtu-1a16q90-17":{"":{"flexDirection":"column"}},"wtu-cgohmy-18":{"":{"color":"#94a3b8"}},"wtu-vf75qw-19":{"":{"fontSize":20}},"wtu-6l0vg0-1a":{"":{"color":"#f59e0b"}},"wtu-l4ptrb-1b":{"":{"backgroundColor":"#fef3c7"}},"wtu-1cplfqo-1c":{"":{"color":"#b45309"}},"wtu-ualvb1-1d":{"":{"fontSize":14}},"wtu-1nj84tt-1e":{"":{"color":"#6366f1"}},"wtu-adf0bz-1f":{"":{"marginRight":12}},"wtu-1fv5emj-1g":{"":{"paddingLeft":8,"paddingRight":8}},"wtu-ersrk-1h":{"":{"paddingTop":4,"paddingBottom":4}},"wtu-6f80ei-1i":{"":{"borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomRightRadius":4,"borderBottomLeftRadius":4}},"wtu-1uaoxco-1j":{"":{"backgroundColor":"#e0e7ff"}},"wtu-1m61e6s-1k":{"":{"fontSize":11}},"wtu-1v1bob5-1l":{"":{"color":"#4338ca"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "Lodash 工具库 (iRainna-lodash)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }, [
        _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }, "1. 数组切片去重与随机打乱 (chunk, uniq, shuffle)"),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "原始数组 (带重复元素):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-qhe427-c wtu-12jpf2i-d wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.rawArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.uniq 去重结果:"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-71osv8-f wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.uniqArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1ukgctb-g" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.chunk 切片结果 (每组 3 个):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-nlue1j-a wtu-qhe427-c wtu-1olf5ta-h wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.chunkedArray),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-78ho70-l wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p",
          onClick: $setup.handleShuffle
        }, [
          _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-trlwv5-q" }, "点击使用 _.shuffle 打乱数组")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }, [
        _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }, "2. 对象深拷贝与安全取值 (get, cloneDeep)"),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.get(obj, 'user.info.name', '未找到'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1olf5ta-h wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getNameResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.get(obj, 'user.invalid.path', '安全兜底值'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-t30dgu-r wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getFallbackResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u" }),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v" }, "深拷贝防污染对比 (点击修改深拷贝副本的值):"),
          _createElementVNode("view", { class: "wtu-11fbh7u-n wtu-20vb01-w wtu-16b98e4-v" }, [
            _createElementVNode("text", { class: "wtu-nlue1j-a wtu-trlwv5-q" }, "原对象 age:"),
            _createElementVNode(
              "text",
              { class: "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-12jpf2i-d" },
              _toDisplayString($setup.rawObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", { class: "wtu-11fbh7u-n wtu-20vb01-w wtu-12p3ytc-9" }, [
            _createElementVNode("text", { class: "wtu-nlue1j-a wtu-trlwv5-q" }, "副本对象 age:"),
            _createElementVNode(
              "text",
              { class: "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-dvbist-x" },
              _toDisplayString($setup.clonedObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", {
            class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-15b9oe7-y wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p",
            onClick: $setup.mutateClonedObj
          }, [
            _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-fwu98w-z" }, "修改副本 age (+1)")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }, [
        _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }, "3. 字符串修饰与格式化 (camelCase, kebabCase)"),
        _createElementVNode("view", { class: "wtu-1ukgctb-g" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v" }, "输入文本:"),
          _withDirectives(_createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputText = $event),
              class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-11xru9i-10 wtu-ehidfg-11 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-119kf4q-12 wtu-wt9zgi-6 wtu-vhwil1-8",
              placeholder: "请输入待转换文本"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [_vModelText, $setup.inputText]
          ])
        ]),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.camelCase (驼峰):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-en1iwp-13 wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.camelCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-12p3ytc-9" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.kebabCase (短横线):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1a9i6pt-14 wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.kebabCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-qji53e-15" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.capitalize (首字母大写):"),
          _createElementVNode(
            "text",
            {
              class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-13awefi-16 wtu-efn5x4-e",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.capitalizeResult),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "wtu-99n919-0 wtu-15nin6-1 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }, [
        _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }, "4. 防抖函数与随机数 (debounce, random)"),
        _createElementVNode("view", { class: "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w wtu-1ukgctb-g" }, [
          _createElementVNode("view", { class: "wtu-1a16q90-17" }, [
            _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "防抖点击触发次数 (400ms):"),
            _createElementVNode("text", { class: "wtu-nlue1j-a wtu-cgohmy-18" }, "连击时仅在停止 400ms 后加 1")
          ]),
          _createElementVNode(
            "text",
            { class: "wtu-vf75qw-19 wtu-1u1vbk3-7 wtu-6l0vg0-1a" },
            _toDisplayString($setup.debouncedCount),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-l4ptrb-1b wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p wtu-1ukgctb-g",
          onClick: $setup.handleDebounceClick
        }, [
          _createElementVNode("text", { class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1cplfqo-1c" }, "快速连击测试防抖")
        ]),
        _createElementVNode("view", { class: "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u" }),
        _createElementVNode("view", { class: "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w" }, [
          _createElementVNode("text", { class: "wtu-nlue1j-a wtu-g2bdc6-b" }, "_.random(1, 100) 随机数:"),
          _createElementVNode("view", { class: "wtu-11fbh7u-n wtu-hehpb2-o" }, [
            _createElementVNode(
              "text",
              { class: "wtu-ualvb1-1d wtu-1u1vbk3-7 wtu-1nj84tt-1e wtu-adf0bz-1f" },
              _toDisplayString($setup.randomValue),
              1
              /* TEXT */
            ),
            _createElementVNode("view", {
              class: "wtu-1fv5emj-1g wtu-ersrk-1h wtu-6f80ei-1i wtu-1uaoxco-1j",
              onClick: $setup.generateRandom
            }, [
              _createElementVNode("text", { class: "wtu-1m61e6s-1k wtu-1u1vbk3-7 wtu-1v1bob5-1l" }, "重新生成")
            ])
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const LodashDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/LodashDemoCard.uvue"]]);
export {
  LodashDemoCard as L
};
//# sourceMappingURL=LodashDemoCard.js.map
