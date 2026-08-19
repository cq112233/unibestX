import "../store/index.js";
import { g as getThemeTokens } from "./theme.js";
import { u as useAppStore } from "../store/app.js";
function applyNavbarTheme() {
  getThemeTokens(useAppStore().state.isDark);
}
export {
  applyNavbarTheme as a
};
//# sourceMappingURL=navbar.js.map
