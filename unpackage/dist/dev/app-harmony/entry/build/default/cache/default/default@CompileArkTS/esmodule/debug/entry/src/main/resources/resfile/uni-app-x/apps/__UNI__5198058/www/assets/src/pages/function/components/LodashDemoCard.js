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
const _style_0 = {"wtu-1u1vbk3-0":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-vhwil1-1":{"":{"color":"#1e293b"}},"wtu-g2bdc6-2":{"":{"color":"#64748b"}},"wtu-qhe427-3":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-12jpf2i-4":{"":{"color":"#334155"}},"wtu-71osv8-5":{"":{"color":"#059669"}},"wtu-1olf5ta-6":{"":{"color":"#3b82f6"}},"wtu-zvxz19-7":{"":{"width":"100%"}},"wtu-78ho70-8":{"":{"backgroundColor":"#f1f5f9"}},"wtu-lfvf6n-9":{"":{"display":"flex"}},"wtu-11fbh7u-a":{"":{"flexDirection":"row"}},"wtu-hehpb2-b":{"":{"alignItems":"center"}},"wtu-ltxxn6-c":{"":{"justifyContent":"center"}},"wtu-trlwv5-d":{"":{"color":"#475569"}},"wtu-t30dgu-e":{"":{"color":"#d97706"}},"wtu-20vb01-f":{"":{"justifyContent":"space-between"}},"wtu-dvbist-g":{"":{"color":"#ec4899"}},"wtu-15b9oe7-h":{"":{"backgroundColor":"#fce7f3"}},"wtu-fwu98w-i":{"":{"color":"#be185d"}},"wtu-en1iwp-j":{"":{"color":"#8b5cf6"}},"wtu-1a9i6pt-k":{"":{"color":"#06b6d4"}},"wtu-13awefi-l":{"":{"color":"#10b981"}},"wtu-1a16q90-m":{"":{"flexDirection":"column"}},"wtu-cgohmy-n":{"":{"color":"#94a3b8"}},"wtu-6l0vg0-o":{"":{"color":"#f59e0b"}},"wtu-l4ptrb-p":{"":{"backgroundColor":"#fef3c7"}},"wtu-1cplfqo-q":{"":{"color":"#b45309"}},"wtu-1nj84tt-r":{"":{"color":"#6366f1"}},"wtu-1uaoxco-s":{"":{"backgroundColor":"#e0e7ff"}},"wtu-1v1bob5-t":{"":{"color":"#4338ca"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "Lodash 工具库 (iRainna-lodash)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-vhwil1-1 mb-8px" }, "1. 数组切片去重与随机打乱 (chunk, uniq, shuffle)"),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "原始数组 (带重复元素):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-qhe427-3 wtu-12jpf2i-4 mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.rawArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.uniq 去重结果:"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-71osv8-5 mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.uniqArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-12px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.chunk 切片结果 (每组 3 个):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-12px wtu-qhe427-3 wtu-1olf5ta-6 mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.chunkedArray),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "wtu-zvxz19-7 h-36px rounded-8px wtu-78ho70-8 wtu-lfvf6n-9 wtu-11fbh7u-a wtu-hehpb2-b wtu-ltxxn6-c",
          onClick: $setup.handleShuffle
        }, [
          _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-trlwv5-d" }, "点击使用 _.shuffle 打乱数组")
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-vhwil1-1 mb-8px" }, "2. 对象深拷贝与安全取值 (get, cloneDeep)"),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.get(obj, 'user.info.name', '未找到'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-1olf5ta-6 mt-2px",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getNameResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.get(obj, 'user.invalid.path', '安全兜底值'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-t30dgu-e mt-2px",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getFallbackResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-[#e2e8f0] pt-8px mt-8px mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2 mb-4px" }, "深拷贝防污染对比 (点击修改深拷贝副本的值):"),
          _createElementVNode("view", { class: "wtu-11fbh7u-a wtu-20vb01-f mb-4px" }, [
            _createElementVNode("text", { class: "text-12px wtu-trlwv5-d" }, "原对象 age:"),
            _createElementVNode(
              "text",
              { class: "text-12px wtu-1u1vbk3-0 wtu-12jpf2i-4" },
              _toDisplayString($setup.rawObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", { class: "wtu-11fbh7u-a wtu-20vb01-f mb-8px" }, [
            _createElementVNode("text", { class: "text-12px wtu-trlwv5-d" }, "副本对象 age:"),
            _createElementVNode(
              "text",
              { class: "text-12px wtu-1u1vbk3-0 wtu-dvbist-g" },
              _toDisplayString($setup.clonedObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", {
            class: "wtu-zvxz19-7 h-36px rounded-8px wtu-15b9oe7-h wtu-lfvf6n-9 wtu-11fbh7u-a wtu-hehpb2-b wtu-ltxxn6-c",
            onClick: $setup.mutateClonedObj
          }, [
            _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-fwu98w-i" }, "修改副本 age (+1)")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-vhwil1-1 mb-8px" }, "3. 字符串修饰与格式化 (camelCase, kebabCase)"),
        _createElementVNode("view", { class: "mb-12px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2 mb-4px" }, "输入文本:"),
          _withDirectives(_createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputText = $event),
              class: "wtu-zvxz19-7 h-36px px-12px rounded-6px border-width-1px border-style-solid border-color-[#cbd5e1] text-13px wtu-vhwil1-1",
              placeholder: "请输入待转换文本"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [_vModelText, $setup.inputText]
          ])
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.camelCase (驼峰):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-en1iwp-j mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.camelCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.kebabCase (短横线):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-1a9i6pt-k mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.kebabCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-6px" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.capitalize (首字母大写):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px wtu-1u1vbk3-0 wtu-13awefi-l mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.capitalizeResult),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-vhwil1-1 mb-8px" }, "4. 防抖函数与随机数 (debounce, random)"),
        _createElementVNode("view", { class: "wtu-11fbh7u-a wtu-hehpb2-b wtu-20vb01-f mb-12px" }, [
          _createElementVNode("view", { class: "wtu-1a16q90-m" }, [
            _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "防抖点击触发次数 (400ms):"),
            _createElementVNode("text", { class: "text-12px wtu-cgohmy-n" }, "连击时仅在停止 400ms 后加 1")
          ]),
          _createElementVNode(
            "text",
            { class: "text-20px wtu-1u1vbk3-0 wtu-6l0vg0-o" },
            _toDisplayString($setup.debouncedCount),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "wtu-zvxz19-7 h-36px rounded-8px wtu-l4ptrb-p wtu-lfvf6n-9 wtu-11fbh7u-a wtu-hehpb2-b wtu-ltxxn6-c mb-12px",
          onClick: $setup.handleDebounceClick
        }, [
          _createElementVNode("text", { class: "text-13px wtu-1u1vbk3-0 wtu-1cplfqo-q" }, "快速连击测试防抖")
        ]),
        _createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-[#e2e8f0] pt-8px wtu-11fbh7u-a wtu-hehpb2-b wtu-20vb01-f" }, [
          _createElementVNode("text", { class: "text-12px wtu-g2bdc6-2" }, "_.random(1, 100) 随机数:"),
          _createElementVNode("view", { class: "wtu-11fbh7u-a wtu-hehpb2-b" }, [
            _createElementVNode(
              "text",
              { class: "text-14px wtu-1u1vbk3-0 wtu-1nj84tt-r mr-12px" },
              _toDisplayString($setup.randomValue),
              1
              /* TEXT */
            ),
            _createElementVNode("view", {
              class: "px-8px py-4px rounded-4px wtu-1uaoxco-s",
              onClick: $setup.generateRandom
            }, [
              _createElementVNode("text", { class: "text-11px wtu-1u1vbk3-0 wtu-1v1bob5-t" }, "重新生成")
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
