const useFormData = (model = null) => {
  if (model == null || typeof model != "object" || Array.isArray(model)) {
    return new UTSJSONObject({});
  }
  if (UTS.isInstanceOf(model, UTSJSONObject)) {
    return model;
  }
  return UTS.JSON.parseObject(UTS.JSON.stringify(model));
};
export {
  useFormData as u
};
//# sourceMappingURL=useForm.js.map
