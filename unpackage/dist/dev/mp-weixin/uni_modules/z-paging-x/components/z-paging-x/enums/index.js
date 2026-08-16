"use strict";
const common_vendor = require("../../../../../common/vendor.js");
class LoadingType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          Refresher: { type: String, optional: false },
          LoadMore: { type: String, optional: false }
        };
      },
      name: "LoadingType"
    };
  }
  constructor(options, metadata = LoadingType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.Refresher = this.__props__.Refresher;
    this.LoadMore = this.__props__.LoadMore;
    delete this.__props__;
  }
}
class Refresher extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          Default: { type: String, optional: false },
          ReleaseToRefresh: { type: String, optional: false },
          Loading: { type: String, optional: false },
          Complete: { type: String, optional: false }
        };
      },
      name: "Refresher"
    };
  }
  constructor(options, metadata = Refresher.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.Default = this.__props__.Default;
    this.ReleaseToRefresh = this.__props__.ReleaseToRefresh;
    this.Loading = this.__props__.Loading;
    this.Complete = this.__props__.Complete;
    delete this.__props__;
  }
}
class More extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          Default: { type: String, optional: false },
          Loading: { type: String, optional: false },
          NoMore: { type: String, optional: false },
          Fail: { type: String, optional: false }
        };
      },
      name: "More"
    };
  }
  constructor(options, metadata = More.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.Default = this.__props__.Default;
    this.Loading = this.__props__.Loading;
    this.NoMore = this.__props__.NoMore;
    this.Fail = this.__props__.Fail;
    delete this.__props__;
  }
}
class QueryFrom extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          Refresh: { type: String, optional: false },
          UserPullDown: { type: String, optional: false },
          LoadMore: { type: String, optional: false },
          Reload: { type: String, optional: false }
        };
      },
      name: "QueryFrom"
    };
  }
  constructor(options, metadata = QueryFrom.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.Refresh = this.__props__.Refresh;
    this.UserPullDown = this.__props__.UserPullDown;
    this.LoadMore = this.__props__.LoadMore;
    this.Reload = this.__props__.Reload;
    delete this.__props__;
  }
}
class CacheMode extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          Always: { type: String, optional: false },
          Default: { type: String, optional: false }
        };
      },
      name: "CacheMode"
    };
  }
  constructor(options, metadata = CacheMode.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.Always = this.__props__.Always;
    this.Default = this.__props__.Default;
    delete this.__props__;
  }
}
class EnumType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          LoadingType: { type: LoadingType, optional: false },
          More: { type: More, optional: false },
          Refresher: { type: Refresher, optional: false },
          QueryFrom: { type: QueryFrom, optional: false },
          CacheMode: { type: CacheMode, optional: false }
        };
      },
      name: "EnumType"
    };
  }
  constructor(options, metadata = EnumType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.LoadingType = this.__props__.LoadingType;
    this.More = this.__props__.More;
    this.Refresher = this.__props__.Refresher;
    this.QueryFrom = this.__props__.QueryFrom;
    this.CacheMode = this.__props__.CacheMode;
    delete this.__props__;
  }
}
const Enum = new EnumType({
  // 当前加载类型 refresher:下拉刷新 load-more:上拉加载更多
  LoadingType: new LoadingType({
    Refresher: "refresher",
    LoadMore: "load-more"
  }),
  // 下拉刷新状态 default:默认状态 release-to-refresh:松手立即刷新 loading:刷新中 complete:刷新结束
  Refresher: new Refresher({
    Default: "default",
    ReleaseToRefresh: "release-to-refresh",
    Loading: "loading",
    Complete: "complete"
  }),
  // 底部加载更多状态 default:默认状态 loading:加载中 no-more:没有更多数据 fail:加载失败
  More: new More({
    Default: "default",
    Loading: "loading",
    NoMore: "no-more",
    Fail: "fail"
  }),
  // @query触发来源 user-pull-down:用户主动下拉刷新 reload:通过reload触发 refresh:通过refresh触发 load-more:通过滚动到底部加载更多或点击底部加载更多触发
  QueryFrom: new QueryFrom({
    UserPullDown: "user-pull-down",
    Reload: "reload",
    Refresh: "refresh",
    LoadMore: "load-more"
  }),
  // 列表缓存模式
  CacheMode: new CacheMode({
    //默认模式，只会缓存一次
    Default: "default",
    //总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
    Always: "always"
  })
});
exports.Enum = Enum;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x/enums/index.js.map
