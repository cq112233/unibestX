import "./useChildren.js";
const { inject, getCurrentInstance, computed, onUnmounted, ref } = globalThis.Vue;
class UseParent extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          childIndex: { type: "Unknown", optional: false }
        };
      },
      name: "UseParent"
    };
  }
  constructor(options, metadata = UseParent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.childIndex = this.__props__.childIndex;
    delete this.__props__;
  }
}
function useParent(componentName) {
  const parent = inject(`${componentName}-Relation`, null);
  if (parent != null) {
    const instance = getCurrentInstance();
    parent.link(instance);
    const childIndex = computed(() => {
      return parent.childrenList.value.indexOf(instance);
    });
    onUnmounted(() => {
      parent.unlink(instance);
    });
    return new UseParent({
      childIndex
    });
  }
  return new UseParent({
    childIndex: ref(-1)
  });
}
export {
  useParent as u
};
//# sourceMappingURL=useParent.js.map
