import { i as isDark } from "../../store/useConfig.js";
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
