import { i as isDark } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
const { ref, watch, nextTick } = globalThis.Vue;
function useCssVar(prop, target) {
  const variable = ref("");
  const updateCssVar = () => {
    if (target.value != null && prop != "") {
      variable.value = target.value.style.getPropertyValue(prop);
    }
  };
  watch([target, isDark], async () => {
    await nextTick();
    if (target.value != null) {
      updateCssVar();
    }
  }, {
    immediate: true
  });
  return variable;
}
export {
  useCssVar as u
};
//# sourceMappingURL=index.js.map
