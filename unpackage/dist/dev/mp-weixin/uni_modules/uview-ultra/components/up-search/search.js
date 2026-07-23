"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const defProps = new UTSJSONObject({
  // search
  search: new UTSJSONObject({
    shape: "round",
    bgColor: "#f2f2f2",
    placeholder: uni_modules_uviewUltra_libs_i18n_index.t("up.search.placeholder", new UTSJSONObject({})),
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: new UTSJSONObject({}),
    actionText: uni_modules_uviewUltra_libs_i18n_index.t("up.common.search", new UTSJSONObject({})),
    inputAlign: "left",
    inputStyle: new UTSJSONObject({}),
    disabled: false,
    borderColor: "transparent",
    searchIconColor: "#909399",
    searchIconSize: 22,
    color: "#606266",
    placeholderColor: "#909399",
    searchIcon: "search",
    iconPosition: "left",
    margin: "0",
    animation: false,
    value: "",
    maxlength: "-1",
    height: 32,
    label: null,
    adjustPosition: true,
    autoBlur: true
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-search/search.js.map
