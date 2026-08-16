const { ref, provide } = globalThis.Vue;
class UseChildren extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          childrenList: { type: "Unknown", optional: false },
          linkChildren: { type: "Unknown", optional: false }
        };
      },
      name: "UseChildren"
    };
  }
  constructor(options, metadata = UseChildren.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.childrenList = this.__props__.childrenList;
    this.linkChildren = this.__props__.linkChildren;
    delete this.__props__;
  }
}
class UseChildrenProvice extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          link: { type: "Unknown", optional: false },
          unlink: { type: "Unknown", optional: false },
          childrenList: { type: "Unknown", optional: false }
        };
      },
      name: "UseChildrenProvice"
    };
  }
  constructor(options, metadata = UseChildrenProvice.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.link = this.__props__.link;
    this.unlink = this.__props__.unlink;
    this.childrenList = this.__props__.childrenList;
    delete this.__props__;
  }
}
function useChildren(componentName) {
  const childrenList = ref([]);
  const getChildIndex = (child) => {
    return childrenList.value.indexOf(child);
  };
  const linkChildren = () => {
    const link = (child) => {
      if (child.proxy != null) {
        childrenList.value.push(child);
      }
    };
    const unlink = (child) => {
      const index = getChildIndex(child);
      if (index != -1) {
        childrenList.value.splice(index, 1);
      }
    };
    provide(`${componentName}-Relation`, new UseChildrenProvice({
      link,
      unlink,
      childrenList
    }));
  };
  return new UseChildren({
    childrenList,
    linkChildren
  });
}
export {
  useChildren as u
};
//# sourceMappingURL=useChildren.js.map
