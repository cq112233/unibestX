import { C as Card } from "../../basic/components/Card.js";
import { u as uniq, c as chunk, g as get, a as cloneDeep, b as camelCase, k as kebabCase, d as capitalize, r as random, s as shuffle, e as debounce } from "../../../../uni_modules/iRainna-lodash/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = { "bg-__e0e7ff_": { "": { "backgroundImage": "none", "backgroundColor": "#e0e7ff" } }, "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__fce7f3_": { "": { "backgroundImage": "none", "backgroundColor": "#fce7f3" } }, "bg-__fef3c7_": { "": { "backgroundImage": "none", "backgroundColor": "#fef3c7" } }, "border-color-__cbd5e1_": { "": { "borderTopColor": "#cbd5e1", "borderRightColor": "#cbd5e1", "borderBottomColor": "#cbd5e1", "borderLeftColor": "#cbd5e1" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-36px": { "": { "height": 36 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mr-12px": { "": { "marginRight": 12 } }, "mt-2px": { "": { "marginTop": 2 } }, "mt-8px": { "": { "marginTop": 8 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pt-8px": { "": { "paddingTop": 8 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "px-8px": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "py-4px": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__06b6d4_": { "": { "color": "#06b6d4" } }, "text-__10b981_": { "": { "color": "#10b981" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__3b82f6_": { "": { "color": "#3b82f6" } }, "text-__4338ca_": { "": { "color": "#4338ca" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__6366f1_": { "": { "color": "#6366f1" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__8b5cf6_": { "": { "color": "#8b5cf6" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__b45309_": { "": { "color": "#b45309" } }, "text-__be185d_": { "": { "color": "#be185d" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-__ec4899_": { "": { "color": "#ec4899" } }, "text-__f59e0b_": { "": { "color": "#f59e0b" } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-20px": { "": { "fontSize": 20 } }, "w-full": { "": { "width": "100%" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "Lodash 工具库 (iRainna-lodash)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-8px" }, "1. 数组切片去重与随机打乱 (chunk, uniq, shuffle)"),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "原始数组 (带重复元素):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-medium text-__334155_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.rawArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.uniq 去重结果:"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__059669_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString(JSON.stringify($setup.uniqArray)),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-12px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.chunk 切片结果 (每组 3 个):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-12px font-medium text-__3b82f6_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.chunkedArray),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "w-full h-36px rounded-8px bg-__f1f5f9_ flex flex-row items-center justify-center",
          onClick: $setup.handleShuffle
        }, [
          _createElementVNode("text", { class: "text-13px font-bold text-__475569_" }, "点击使用 _.shuffle 打乱数组")
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-8px" }, "2. 对象深拷贝与安全取值 (get, cloneDeep)"),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.get(obj, 'user.info.name', '未找到'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__3b82f6_ mt-2px",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getNameResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.get(obj, 'user.invalid.path', '安全兜底值'):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__d97706_ mt-2px",
              style: { "font-family": "monospace" }
            },
            ' "' + _toDisplayString($setup.getFallbackResult) + '" ',
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-__e2e8f0_ pt-8px mt-8px mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_ mb-4px" }, "深拷贝防污染对比 (点击修改深拷贝副本的值):"),
          _createElementVNode("view", { class: "flex-row justify-between mb-4px" }, [
            _createElementVNode("text", { class: "text-12px text-__475569_" }, "原对象 age:"),
            _createElementVNode(
              "text",
              { class: "text-12px font-bold text-__334155_" },
              _toDisplayString($setup.rawObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
            _createElementVNode("text", { class: "text-12px text-__475569_" }, "副本对象 age:"),
            _createElementVNode(
              "text",
              { class: "text-12px font-bold text-__ec4899_" },
              _toDisplayString($setup.clonedObjAge),
              1
              /* TEXT */
            )
          ]),
          _createElementVNode("view", {
            class: "w-full h-36px rounded-8px bg-__fce7f3_ flex flex-row items-center justify-center",
            onClick: $setup.mutateClonedObj
          }, [
            _createElementVNode("text", { class: "text-13px font-bold text-__be185d_" }, "修改副本 age (+1)")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-8px" }, "3. 字符串修饰与格式化 (camelCase, kebabCase)"),
        _createElementVNode("view", { class: "mb-12px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_ mb-4px" }, "输入文本:"),
          _withDirectives(_createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputText = $event),
              class: "w-full h-36px px-12px rounded-6px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__1e293b_",
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
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.camelCase (驼峰):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__8b5cf6_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.camelCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-8px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.kebabCase (短横线):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__06b6d4_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.kebabCaseResult),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "mb-6px" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.capitalize (首字母大写):"),
          _createElementVNode(
            "text",
            {
              class: "result-text text-13px font-bold text-__10b981_ mt-2px",
              style: { "font-family": "monospace" }
            },
            _toDisplayString($setup.capitalizeResult),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-8px" }, "4. 防抖函数与随机数 (debounce, random)"),
        _createElementVNode("view", { class: "flex-row items-center justify-between mb-12px" }, [
          _createElementVNode("view", { class: "flex-col" }, [
            _createElementVNode("text", { class: "text-12px text-__64748b_" }, "防抖点击触发次数 (400ms):"),
            _createElementVNode("text", { class: "text-12px text-__94a3b8_" }, "连击时仅在停止 400ms 后加 1")
          ]),
          _createElementVNode(
            "text",
            { class: "text-20px font-bold text-__f59e0b_" },
            _toDisplayString($setup.debouncedCount),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", {
          class: "w-full h-36px rounded-8px bg-__fef3c7_ flex flex-row items-center justify-center mb-12px",
          onClick: $setup.handleDebounceClick
        }, [
          _createElementVNode("text", { class: "text-13px font-bold text-__b45309_" }, "快速连击测试防抖")
        ]),
        _createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-__e2e8f0_ pt-8px flex-row items-center justify-between" }, [
          _createElementVNode("text", { class: "text-12px text-__64748b_" }, "_.random(1, 100) 随机数:"),
          _createElementVNode("view", { class: "flex-row items-center" }, [
            _createElementVNode(
              "text",
              { class: "text-14px font-bold text-__6366f1_ mr-12px" },
              _toDisplayString($setup.randomValue),
              1
              /* TEXT */
            ),
            _createElementVNode("view", {
              class: "px-8px py-4px rounded-4px bg-__e0e7ff_",
              onClick: $setup.generateRandom
            }, [
              _createElementVNode("text", { class: "text-11px font-bold text-__4338ca_" }, "重新生成")
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
