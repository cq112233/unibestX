"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useFormData = (model = null) => {
  if (model == null || typeof model != "object" || Array.isArray(model)) {
    return new common_vendor.UTSJSONObject({});
  }
  if (common_vendor.UTS.isInstanceOf(model, common_vendor.UTSJSONObject)) {
    return model;
  }
  return common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(model));
};
exports.useFormData = useFormData;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-form/useForm.js.map
