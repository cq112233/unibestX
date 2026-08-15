"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_iRainnaLodash_index = require("../../../../uni_modules/iRainna-lodash/index.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LodashDemoCard",
  setup(__props) {
    const rawArray = common_vendor.ref([1, 2, 2, 3, 4, 4, 5, 6, 7, 8]);
    const uniqArray = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.uniq(rawArray.value);
    });
    const chunkedArray = common_vendor.computed(() => {
      const result = uni_modules_iRainnaLodash_index.chunk(uniqArray.value, 3);
      return common_vendor.UTS.JSON.stringify(result);
    });
    function handleShuffle() {
      rawArray.value = uni_modules_iRainnaLodash_index.shuffle(rawArray.value);
    }
    const rawObj = new common_vendor.UTSJSONObject(
      {
        user: new common_vendor.UTSJSONObject({
          info: new common_vendor.UTSJSONObject({
            name: "UniAppX Developer",
            age: 25
          })
        })
      }
      // 使用 get 链式安全取值 (避免空指针/未定义路径崩溃)
    );
    const getNameResult = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.get(rawObj, "user.info.name", "未找到");
    });
    const getFallbackResult = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.get(rawObj, "user.invalid.path", "兜底结果: 未查找到路径");
    });
    const clonedObj = common_vendor.ref(uni_modules_iRainnaLodash_index.cloneDeep(rawObj));
    const rawObjAge = common_vendor.ref(uni_modules_iRainnaLodash_index.get(rawObj, "user.info.age", 0));
    const clonedObjAge = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.get(clonedObj.value, "user.info.age", 0);
    });
    function mutateClonedObj() {
      const user = clonedObj.value["user"];
      const info = user["info"];
      const currentAge = info["age"] + 1;
      info["age"] = currentAge;
    }
    const inputText = common_vendor.ref("hello_world lodash-demo-test");
    const camelCaseResult = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.camelCase(inputText.value);
    });
    const kebabCaseResult = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.kebabCase(inputText.value);
    });
    const capitalizeResult = common_vendor.computed(() => {
      return uni_modules_iRainnaLodash_index.capitalize(inputText.value);
    });
    const debouncedCount = common_vendor.ref(0);
    const randomValue = common_vendor.ref(uni_modules_iRainnaLodash_index.random(1, 100));
    function incrementCount() {
      debouncedCount.value += 1;
    }
    const debouncedIncrement = uni_modules_iRainnaLodash_index.debounce(incrementCount, 400);
    function handleDebounceClick() {
      debouncedIncrement();
    }
    function generateRandom() {
      randomValue.value = uni_modules_iRainnaLodash_index.random(1, 100);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(JSON.stringify(rawArray.value)),
        b: common_vendor.t(JSON.stringify(uniqArray.value)),
        c: common_vendor.t(chunkedArray.value),
        d: common_vendor.o(handleShuffle, "e7"),
        e: common_vendor.t(getNameResult.value),
        f: common_vendor.t(getFallbackResult.value),
        g: common_vendor.t(rawObjAge.value),
        h: common_vendor.t(clonedObjAge.value),
        i: common_vendor.o(mutateClonedObj, "1d"),
        j: inputText.value,
        k: common_vendor.o(($event) => {
          return inputText.value = $event.detail.value;
        }, "75"),
        l: common_vendor.t(camelCaseResult.value),
        m: common_vendor.t(kebabCaseResult.value),
        n: common_vendor.t(capitalizeResult.value),
        o: common_vendor.t(debouncedCount.value),
        p: common_vendor.o(handleDebounceClick, "f8"),
        q: common_vendor.t(randomValue.value),
        r: common_vendor.o(generateRandom, "a3"),
        s: common_vendor.gei(_ctx, ""),
        t: common_vendor.p({
          title: "Lodash 工具库 (iRainna-lodash)",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9a7b991c"
        }),
        v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a7b991c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/LodashDemoCard.js.map
