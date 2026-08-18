import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { u as uniq, c as chunk, g as get, a as cloneDeep, b as camelCase, k as kebabCase, d as capitalize, r as random, s as shuffle, e as debounce } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/iRainna-lodash/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsLodashDemoCard";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "60851be2",
  __className,
  __filename: "src/pages/function/components/LodashDemoCard.uvue",
  __name: "LodashDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsLodashDemoCardSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      const n60 = _createSharedDataComponent(
        Card,
        "772f6fae",
        { title: "Lodash 工具库 (iRainna-lodash)" },
        {
          "default": _withSharedDataVaporCtx(() => {
            _setSharedDataEvent(__sharedData, 2, handleShuffle);
            _setSharedDataEvent(__sharedData, 3, mutateClonedObj);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 6, _toDisplayString(JSON.stringify(rawArray.value)));
              _setSharedData(__sharedData, 7, _toDisplayString(JSON.stringify(uniqArray.value)));
              _setSharedData(__sharedData, 8, _toDisplayString(chunkedArray.value));
              _setSharedData(__sharedData, 9, _toDisplayString(getNameResult.value));
              _setSharedData(__sharedData, 10, _toDisplayString(getFallbackResult.value));
              _setSharedData(__sharedData, 11, _toDisplayString(rawObjAge.value));
              _setSharedData(__sharedData, 12, _toDisplayString(clonedObjAge.value));
            });
            const n33 = _createSharedDataComponentWithFallback(_component_input, "23662565", {
              value: () => {
                return inputText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return inputText.value = _value;
                };
              },
              class: "w-full h-36px px-12px rounded-6px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__1e293b_",
              placeholder: "请输入待转换文本"
            });
            _setSharedData(__sharedData, 1, n33?.sharedData);
            _setSharedDataEvent(__sharedData, 4, handleDebounceClick);
            _setSharedDataEvent(__sharedData, 5, generateRandom);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 13, _toDisplayString(camelCaseResult.value));
              _setSharedData(__sharedData, 14, _toDisplayString(kebabCaseResult.value));
              _setSharedData(__sharedData, 15, _toDisplayString(capitalizeResult.value));
              _setSharedData(__sharedData, 16, _toDisplayString(debouncedCount.value));
              _setSharedData(__sharedData, 17, _toDisplayString(randomValue.value));
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n60.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const LodashDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  LodashDemoCard as L
};
//# sourceMappingURL=LodashDemoCard.js.map
