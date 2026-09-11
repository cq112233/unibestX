const UP_COLLAPSE_PROPS = "upCollapseProps";
const UP_COLLAPSE_REGISTER = "upCollapseRegister";
const UP_COLLAPSE_UNREGISTER = "upCollapseUnregister";
const UP_COLLAPSE_TOGGLE = "upCollapseToggle";
class CollapseItemChild extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          elId: { type: String, optional: false },
          name: { type: String, optional: false },
          isOpen: { type: "Unknown", optional: false },
          setOpen: { type: "Unknown", optional: false }
        };
      }
    };
  }
  constructor(options, metadata = CollapseItemChild.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.elId = this.__props__.elId;
    this.name = this.__props__.name;
    this.isOpen = this.__props__.isOpen;
    this.setOpen = this.__props__.setOpen;
    delete this.__props__;
  }
}
export {
  CollapseItemChild as C,
  UP_COLLAPSE_PROPS as U,
  UP_COLLAPSE_REGISTER as a,
  UP_COLLAPSE_UNREGISTER as b,
  UP_COLLAPSE_TOGGLE as c
};
