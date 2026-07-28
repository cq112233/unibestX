


//{"version":"5.14"}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/@vue+shared@3.4.21/node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const set3 = new Set(str.split(","));
  return expectsLowerCase ? (val) => set3.has(val.toLowerCase()) : (val) => set3.has(val);
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var NOOP = () => {
};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
var isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
var capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
var def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
var looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
var toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number") {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
var isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}
var toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
var stringifySymbol = (v, i = "") => {
  var _a;
  return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};

// ../uni-app-next/packages/uni-shared/dist/uni-shared.es.js
var BUILT_IN_TAG_NAMES = [
  "ad",
  "ad-content-page",
  "ad-draw",
  "audio",
  "button",
  "camera",
  "canvas",
  "checkbox",
  "checkbox-group",
  "cover-image",
  "cover-view",
  "editor",
  "form",
  "functional-page-navigator",
  "icon",
  "image",
  "input",
  "label",
  "live-player",
  "live-pusher",
  "map",
  "movable-area",
  "movable-view",
  "navigator",
  "official-account",
  "open-data",
  "picker",
  "picker-view",
  "picker-view-column",
  "progress",
  "radio",
  "radio-group",
  "rich-text",
  "scroll-view",
  "slider",
  "swiper",
  "swiper-item",
  "switch",
  "text",
  "textarea",
  "video",
  "view",
  "web-view",
  "location-picker",
  "location-view"
];
var BUILT_IN_TAGS = BUILT_IN_TAG_NAMES.map((tag) => "uni-" + tag);
var TAGS = [
  "app",
  "layout",
  "content",
  "main",
  "top-window",
  "left-window",
  "right-window",
  "tabbar",
  "page",
  "page-head",
  "page-wrapper",
  "page-body",
  "page-refresh",
  "actionsheet",
  "modal",
  "toast",
  "resize-sensor",
  "shadow-root"
].map((tag) => "uni-" + tag);
var UVUE_WEB_BUILT_IN_TAGS = [
  "page-container",
  "list-view",
  "list-item",
  "sticky-section",
  "sticky-header",
  "cloud-db-element",
  "loading-element",
  "loading"
].map((tag) => "uni-" + tag);
var UVUE_MP_BUILT_IN_TAGS = [
  "list-view",
  "list-item",
  "sticky-section",
  "sticky-header",
  "cloud-db-element",
  "loading-element"
].map((tag) => "uni-" + tag);
var UVUE_HARMONY_BUILT_IN_TAGS = [
  // TODO 列出完整列表
  ...BUILT_IN_TAG_NAMES,
  "volume-panel"
];
var UNI_UI_CONFLICT_TAGS = ["list-item"].map((tag) => "uni-" + tag);
var NVUE_CUSTOM_COMPONENTS = [
  "ad",
  "ad-draw",
  "button",
  "checkbox-group",
  "checkbox",
  "form",
  "icon",
  "label",
  "movable-area",
  "movable-view",
  "navigator",
  "picker",
  "progress",
  "radio-group",
  "radio",
  "rich-text",
  "swiper-item",
  "swiper",
  "switch",
  "slider",
  "picker-view",
  "picker-view-column"
];
var UVUE_BUILT_IN_EASY_COMPONENTS = [
  "map",
  "camera",
  "live-player",
  "live-pusher",
  "loading",
  "web-view",
  "rich-text",
  "page-container",
  "editor",
  "video"
];
var UVUE_CUSTOM_COMPONENTS = [
  ...NVUE_CUSTOM_COMPONENTS,
  ...UVUE_BUILT_IN_EASY_COMPONENTS
];
var COMPONENT_SELECTOR_PREFIX = "uni-";
var COMPONENT_PREFIX = "v-" + COMPONENT_SELECTOR_PREFIX;
var LINEFEED = "\n";
var WXS_PROTOCOL = "wxs://";
var WXS_MODULES = "wxsModules";
var RENDERJS_MODULES = "renderjsModules";
var ON_SHOW = "onShow";
var ON_HIDE = "onHide";
var ON_LAUNCH = "onLaunch";
var ON_ERROR = "onError";
var ON_THEME_CHANGE = "onThemeChange";
var ON_PAGE_NOT_FOUND = "onPageNotFound";
var ON_UNHANDLE_REJECTION = "onUnhandledRejection";
var ON_LAST_PAGE_BACK_PRESS = "onLastPageBackPress";
var ON_EXIT = "onExit";
var ON_LOAD = "onLoad";
var ON_READY = "onReady";
var ON_UNLOAD = "onUnload";
var ON_INIT = "onInit";
var ON_SAVE_EXIT_STATE = "onSaveExitState";
var ON_UPLOAD_DOUYIN_VIDEO = "onUploadDouyinVideo";
var ON_LIVE_MOUNT = "onLiveMount";
var ON_TITLE_CLICK = "onTitleClick";
var ON_RESIZE = "onResize";
var ON_BACK_PRESS = "onBackPress";
var ON_PAGE_SCROLL = "onPageScroll";
var ON_TAB_ITEM_TAP = "onTabItemTap";
var ON_REACH_BOTTOM = "onReachBottom";
var ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
var ON_SHARE_TIMELINE = "onShareTimeline";
var ON_SHARE_CHAT = "onShareChat";
var ON_COPY_URL = "onCopyUrl";
var ON_ADD_TO_FAVORITES = "onAddToFavorites";
var ON_SHARE_APP_MESSAGE = "onShareAppMessage";
var ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
var ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
var ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
var ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
var ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
function arrayPop(array) {
  if (array.length === 0) {
    return null;
  }
  return array.pop();
}
function arrayShift(array) {
  if (array.length === 0) {
    return null;
  }
  return array.shift();
}
function arrayFind(array, predicate) {
  const index = array.findIndex(predicate);
  if (index < 0) {
    return null;
  }
  return array[index];
}
function arrayFindLast(array, predicate) {
  const index = array.findLastIndex(predicate);
  if (index < 0) {
    return null;
  }
  return array[index];
}
function arrayAt(array, index) {
  if (index < -array.length || index >= array.length) {
    return null;
  }
  return array.at(index);
}
var UTS_CLASS_METADATA_KIND_LIST = [0, 1, 2];
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
function isPlainObject2(val) {
  if (val == null || typeof val !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}
var UTSError = class extends Error {
  constructor(message) {
    super(message);
  }
};
function isUTSMetadata(metadata) {
  return !!(metadata && UTS_CLASS_METADATA_KIND_LIST.includes(metadata.kind) && metadata.interfaces);
}
function isNativeType(proto) {
  return !proto || proto === Object.prototype;
}
var utsMetadataKey = "$UTSMetadata$";
function getParentTypeList(type) {
  const metadata = utsMetadataKey in type ? type[utsMetadataKey] : {};
  let interfaces = [];
  if (!isUTSMetadata(metadata)) {
    interfaces = [];
  } else {
    interfaces = metadata.interfaces || [];
  }
  const proto = Object.getPrototypeOf(type);
  if (!isNativeType(proto)) {
    interfaces.push(proto.constructor);
  }
  return interfaces;
}
function isImplementationOf(leftType, rightType, visited = []) {
  if (isNativeType(leftType)) {
    return false;
  }
  if (leftType === rightType) {
    return true;
  }
  visited.push(leftType);
  const parentTypeList = getParentTypeList(leftType);
  return parentTypeList.some((parentType) => {
    if (visited.includes(parentType)) {
      return false;
    }
    return isImplementationOf(parentType, rightType, visited);
  });
}
function isInstanceOf(value, type) {
  if (type === UTSValueIterable) {
    return value && value[Symbol.iterator];
  }
  const isNativeInstanceofType = value instanceof type;
  if (isNativeInstanceofType || typeof value !== "object" || value === null) {
    return isNativeInstanceofType;
  }
  const proto = Object.getPrototypeOf(value).constructor;
  return isImplementationOf(proto, type);
}
function isBaseType(type) {
  return type === Number || type === String || type === Boolean;
}
function isUnknownType(type) {
  return type === "Unknown";
}
function isAnyType(type) {
  return type === "Any";
}
function isUTSType(type) {
  return type && type.prototype && type.prototype instanceof UTSType;
}
function normalizeGenericValue(value, genericType, isJSONParse = false) {
  return value == null ? null : isBaseType(genericType) || isUnknownType(genericType) || isAnyType(genericType) ? value : genericType === Array ? new Array(...value) : new genericType(value, void 0, isJSONParse);
}
var UTSType = class _UTSType {
  static get$UTSMetadata$(...args) {
    return {
      name: "",
      kind: 2,
      interfaces: [],
      fields: {}
    };
  }
  get $UTSMetadata$() {
    return _UTSType.get$UTSMetadata$();
  }
  // TODO 缓存withGenerics结果
  static withGenerics(parent, generics, isJSONParse = false) {
    if (isJSONParse) {
      const illegalGeneric = generics.find((item) => !(item === Array || isBaseType(item) || isUnknownType(item) || isAnyType(item) || item === UTSJSONObject2 || item.prototype && item.prototype instanceof _UTSType));
      if (illegalGeneric) {
        throw new Error("Generic is not UTSType or Array or UTSJSONObject or base type, generic: " + illegalGeneric);
      }
    }
    if (parent === Array) {
      return class UTSArray extends _UTSType {
        constructor(options, isJSONParse2 = false) {
          if (!Array.isArray(options)) {
            throw new UTSError(`Failed to contruct type, ${options} is not an array`);
          }
          super();
          return options.map((item) => {
            return normalizeGenericValue(item, generics[0], isJSONParse2);
          });
        }
      };
    } else if (parent === Map || parent === WeakMap) {
      return class UTSMap extends _UTSType {
        constructor(options, isJSONParse2 = false) {
          if (options == null || typeof options !== "object") {
            throw new UTSError(`Failed to contruct type, ${options} is not an object`);
          }
          super();
          const obj = new parent();
          for (const key in options) {
            obj.set(normalizeGenericValue(key, generics[0], isJSONParse2), normalizeGenericValue(options[key], generics[1], isJSONParse2));
          }
          return obj;
        }
      };
    } else if (isUTSType(parent)) {
      return class VirtualClassWithGenerics extends parent {
        static get$UTSMetadata$() {
          return parent.get$UTSMetadata$(...generics);
        }
        constructor(options, metadata = VirtualClassWithGenerics.get$UTSMetadata$(), isJSONParse2 = false) {
          super(options, metadata, isJSONParse2);
        }
      };
    } else {
      return parent;
    }
  }
  constructor() {
  }
  static initProps(options, metadata, isJSONParse = false) {
    if (!isJSONParse) {
      return options;
    }
    const obj = {};
    if (!metadata.fields) {
      return obj;
    }
    for (const key in metadata.fields) {
      const { type, optional, jsonField } = metadata.fields[key];
      const realKey = isJSONParse ? jsonField || key : key;
      if (options[realKey] == null) {
        if (optional) {
          obj[key] = null;
          continue;
        } else {
          throw new UTSError(`Failed to contruct type, missing required property: ${key}`);
        }
      }
      if (isUTSType(type)) {
        obj[key] = isJSONParse ? (
          // @ts-expect-error
          new type(options[realKey], void 0, isJSONParse)
        ) : options[realKey];
      } else if (type === Array) {
        if (!Array.isArray(options[realKey])) {
          throw new UTSError(`Failed to contruct type, property ${key} is not an array`);
        }
        obj[key] = options[realKey];
      } else {
        obj[key] = options[realKey];
      }
    }
    return obj;
  }
};
function initUTSJSONObjectProperties(obj) {
  const propertyList = [
    "_resolveKeyPath",
    "_getValue",
    "toJSON",
    "get",
    "set",
    "getAny",
    "getString",
    "getNumber",
    "getBoolean",
    "getJSON",
    "getArray",
    "toMap",
    "forEach"
  ];
  const propertyDescriptorMap = {};
  for (let i = 0; i < propertyList.length; i++) {
    const property = propertyList[i];
    propertyDescriptorMap[property] = {
      enumerable: false,
      value: obj[property]
    };
  }
  Object.defineProperties(obj, propertyDescriptorMap);
}
function getRealDefaultValue(defaultValue) {
  return defaultValue === void 0 ? null : defaultValue;
}
var UTSJSONObject2 = class {
  static keys(obj) {
    return Object.keys(obj);
  }
  static assign(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
      const source = sources[i];
      for (let key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  constructor(content = {}) {
    if (content instanceof Map) {
      content.forEach((value, key) => {
        this[key] = value;
      });
    } else {
      for (const key in content) {
        if (Object.prototype.hasOwnProperty.call(content, key)) {
          this[key] = content[key];
        }
      }
    }
    initUTSJSONObjectProperties(this);
  }
  _resolveKeyPath(keyPath) {
    let token = "";
    const keyPathArr = [];
    let inOpenParentheses = false;
    for (let i = 0; i < keyPath.length; i++) {
      const word = keyPath[i];
      switch (word) {
        case ".":
          if (token.length > 0) {
            keyPathArr.push(token);
            token = "";
          }
          break;
        case "[": {
          inOpenParentheses = true;
          if (token.length > 0) {
            keyPathArr.push(token);
            token = "";
          }
          break;
        }
        case "]":
          if (inOpenParentheses) {
            if (token.length > 0) {
              const tokenFirstChar = token[0];
              const tokenLastChar = token[token.length - 1];
              if (tokenFirstChar === '"' && tokenLastChar === '"' || tokenFirstChar === "'" && tokenLastChar === "'" || tokenFirstChar === "`" && tokenLastChar === "`") {
                if (token.length > 2) {
                  token = token.slice(1, -1);
                } else {
                  return [];
                }
              } else if (!/^\d+$/.test(token)) {
                return [];
              }
              keyPathArr.push(token);
              token = "";
            } else {
              return [];
            }
            inOpenParentheses = false;
          } else {
            return [];
          }
          break;
        default:
          token += word;
          break;
      }
      if (i === keyPath.length - 1) {
        if (token.length > 0) {
          keyPathArr.push(token);
          token = "";
        }
      }
    }
    return keyPathArr;
  }
  _getValue(keyPath, defaultValue) {
    const keyPathArr = this._resolveKeyPath(keyPath);
    const realDefaultValue = getRealDefaultValue(defaultValue);
    if (keyPathArr.length === 0) {
      return realDefaultValue;
    }
    let value = this;
    for (let i = 0; i < keyPathArr.length; i++) {
      const key = keyPathArr[i];
      if (value instanceof Object) {
        if (key in value) {
          value = value[key];
        } else {
          return realDefaultValue;
        }
      } else {
        return realDefaultValue;
      }
    }
    return value;
  }
  get(key) {
    return this._getValue(key);
  }
  set(key, value) {
    this[key] = value;
  }
  getAny(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    return this._getValue(key, realDefaultValue);
  }
  getString(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const value = this._getValue(key, realDefaultValue);
    if (typeof value === "string") {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getNumber(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const value = this._getValue(key, realDefaultValue);
    if (typeof value === "number") {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getBoolean(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    const boolean = this._getValue(key, realDefaultValue);
    if (typeof boolean === "boolean") {
      return boolean;
    } else {
      return realDefaultValue;
    }
  }
  getJSON(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    let value = this._getValue(key, realDefaultValue);
    if (value instanceof Object) {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  getArray(key, defaultValue) {
    const realDefaultValue = getRealDefaultValue(defaultValue);
    let value = this._getValue(key, realDefaultValue);
    if (value instanceof Array) {
      return value;
    } else {
      return realDefaultValue;
    }
  }
  toMap() {
    let map2 = /* @__PURE__ */ new Map();
    for (let key in this) {
      map2.set(key, this[key]);
    }
    return map2;
  }
  forEach(callback) {
    for (let key in this) {
      callback(this[key], key);
    }
  }
};
var OriginalJSON = JSON;
function createUTSJSONObjectOrArray(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => {
      return createUTSJSONObjectOrArray(item);
    });
  } else if (isPlainObject2(obj)) {
    const result = new UTSJSONObject2({});
    for (const key in obj) {
      const value = obj[key];
      result[key] = createUTSJSONObjectOrArray(value);
    }
    return result;
  }
  return obj;
}
function parseObjectOrArray(object, utsType) {
  const objectType = getType(object);
  if (object === null || objectType !== "object" && objectType !== "array") {
    return object;
  }
  if (utsType && utsType !== UTSJSONObject2) {
    try {
      return new utsType(object, void 0, true);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  if (objectType === "array" || objectType === "object") {
    return createUTSJSONObjectOrArray(object);
  }
  return object;
}
var UTSJSON = {
  parse: (text, reviver, utsType) => {
    if (reviver && (isUTSType(reviver) || reviver === UTSJSONObject2)) {
      utsType = reviver;
      reviver = void 0;
    }
    try {
      const parseResult = OriginalJSON.parse(text, reviver);
      return parseObjectOrArray(parseResult, utsType);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  parseArray(text, utsType) {
    try {
      const parseResult = OriginalJSON.parse(text);
      if (Array.isArray(parseResult)) {
        return parseObjectOrArray(parseResult, utsType ? UTSType.withGenerics(Array, [utsType], true) : void 0);
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  parseObject(text, utsType) {
    try {
      const parseResult = OriginalJSON.parse(text);
      if (Array.isArray(parseResult)) {
        return null;
      }
      return parseObjectOrArray(parseResult, utsType);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  stringify: (value, replacer2, space) => {
    try {
      if (!replacer2) {
        const visited = /* @__PURE__ */ new Set();
        replacer2 = function(_, v) {
          if (typeof v === "object") {
            if (visited.has(v)) {
              return null;
            }
            visited.add(v);
          }
          return v;
        };
      }
      return OriginalJSON.stringify(value, replacer2, space);
    } catch (error) {
      console.error(error);
      return "";
    }
  }
};
function mapGet(map2, key) {
  if (!map2.has(key)) {
    return null;
  }
  return map2.get(key);
}
function stringCodePointAt(str, pos) {
  if (pos < 0 || pos >= str.length) {
    return null;
  }
  return str.codePointAt(pos);
}
function stringAt(str, pos) {
  if (pos < -str.length || pos >= str.length) {
    return null;
  }
  return str.at(pos);
}
function weakMapGet(map2, key) {
  if (!map2.has(key)) {
    return null;
  }
  return map2.get(key);
}
var UTS2 = {
  arrayAt,
  arrayFind,
  arrayFindLast,
  arrayPop,
  arrayShift,
  isInstanceOf,
  UTSType,
  mapGet,
  stringAt,
  stringCodePointAt,
  weakMapGet,
  JSON: UTSJSON
};
var UniError2 = class extends Error {
  constructor(errSubject, errCode, errMsg) {
    let options = {};
    const argsLength = Array.from(arguments).length;
    switch (argsLength) {
      case 0:
        errSubject = "";
        errMsg = "";
        errCode = 0;
        break;
      case 1:
        errMsg = errSubject;
        errSubject = "";
        errCode = 0;
        break;
      case 2:
        errMsg = errSubject;
        options = errCode;
        errCode = options.errCode || 0;
        errSubject = options.errSubject || "";
        break;
    }
    super(errMsg);
    this.name = "UniError";
    this.errSubject = errSubject;
    this.errCode = errCode;
    this.errMsg = errMsg;
    if (options.data) {
      this.data = options.data;
    }
    if (options.cause) {
      this.cause = options.cause;
    }
  }
  set errMsg(msg) {
    this.message = msg;
  }
  get errMsg() {
    return this.message;
  }
  toString() {
    return this.errMsg;
  }
  toJSON() {
    return {
      errSubject: this.errSubject,
      errCode: this.errCode,
      errMsg: this.errMsg,
      data: this.data,
      cause: this.cause && typeof this.cause.toJSON === "function" ? this.cause.toJSON() : this.cause
    };
  }
};
var UTSValueIterable = class {
};
function normalizeStyle2(value) {
  if (value instanceof UTSJSONObject2) {
    const styleObject = {};
    UTSJSONObject2.keys(value).forEach((key) => {
      styleObject[key] = value[key];
    });
    return normalizeStyle(styleObject);
  } else if (value instanceof Map) {
    const styleObject = {};
    value.forEach((value2, key) => {
      styleObject[key] = value2;
    });
    return normalizeStyle(styleObject);
  } else if (isString(value)) {
    return parseStringStyle(value);
  } else if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle2(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else {
    return normalizeStyle(value);
  }
}
function normalizeClass2(value) {
  let res = "";
  if (value instanceof UTSJSONObject2) {
    UTSJSONObject2.keys(value).forEach((key) => {
      if (value[key]) {
        res += key + " ";
      }
    });
  } else if (value instanceof Map) {
    value.forEach((value2, key) => {
      if (value2) {
        res += key + " ";
      }
    });
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass2(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else {
    res = normalizeClass(value);
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass2(klass);
  }
  if (style) {
    props.style = normalizeStyle2(style);
  }
  return props;
}
var lastLogTime = 0;
function formatLog(module, ...args) {
  const now = Date.now();
  const diff = lastLogTime ? now - lastLogTime : 0;
  lastLogTime = now;
  return `[${now}][${diff}ms][${module}]\uFF1A${args.map((arg) => JSON.stringify(arg)).join(" ")}`;
}
function getLen(str = "") {
  return ("" + str).replace(/[^\x00-\xff]/g, "**").length;
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
function removeLeadingSlash(str) {
  return hasLeadingSlash(str) ? str.slice(1) : str;
}
var invokeArrayFns2 = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
var invokeArrayFnsWithResults = (fns, arg) => {
  return fns.map((fn) => fn(arg));
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getGlobalOnce() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  function g3() {
    return this;
  }
  if (typeof g3() !== "undefined") {
    return g3();
  }
  return function() {
    return new Function("return this")();
  }();
}
var g = void 0;
function getGlobal() {
  if (g) {
    return g;
  }
  g = getGlobalOnce();
  return g;
}
var unitRE = new RegExp(`"[^"]+"|'[^']+'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px`, "g");
var defaultRpx2Unit = {
  unit: "rem",
  unitRatio: 10 / 320,
  unitPrecision: 5
};
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function decodedQuery(query = {}) {
  const decodedQuery2 = {};
  Object.keys(query).forEach((name) => {
    try {
      decodedQuery2[name] = decode(query[name]);
    } catch (e) {
      decodedQuery2[name] = query[name];
    }
  });
  return decodedQuery2;
}
var PLUS_RE = /\+/g;
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    let eqPos = searchParam.indexOf("=");
    let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function parseUrl(url) {
  const [path, querystring] = url.split("?", 2);
  return {
    path,
    query: parseQuery(querystring || "")
  };
}
var forcePatchProps = {
  AD: ["data"],
  "AD-DRAW": ["data"],
  "LIVE-PLAYER": ["picture-in-picture-mode"],
  MAP: [
    "markers",
    "polyline",
    "circles",
    "controls",
    "include-points",
    "polygons"
  ],
  PICKER: ["range", "value"],
  "PICKER-VIEW": ["value"],
  "RICH-TEXT": ["nodes"],
  VIDEO: ["danmu-list", "header"],
  "WEB-VIEW": ["webview-styles"]
};
var forcePatchPropKeys = ["animation"];
var forcePatchProp = (el, key) => {
  if (forcePatchPropKeys.indexOf(key) > -1) {
    return true;
  }
  const keys = forcePatchProps[el.nodeName];
  if (keys && keys.indexOf(key) > -1) {
    return true;
  }
  return false;
};
var EventChannel = class {
  constructor(id2, events) {
    this.id = id2;
    this.listener = {};
    this.emitCache = [];
    if (events) {
      Object.keys(events).forEach((name) => {
        this.on(name, events[name]);
      });
    }
  }
  emit(eventName, ...args) {
    const fns = this.listener[eventName];
    if (!fns) {
      return this.emitCache.push({
        eventName,
        args
      });
    }
    fns.forEach((opt) => {
      opt.fn.apply(opt.fn, args);
    });
    this.listener[eventName] = fns.filter((opt) => opt.type !== "once");
  }
  on(eventName, fn) {
    this._addListener(eventName, "on", fn);
    this._clearCache(eventName);
  }
  once(eventName, fn) {
    this._addListener(eventName, "once", fn);
    this._clearCache(eventName);
  }
  off(eventName, fn) {
    const fns = this.listener[eventName];
    if (!fns) {
      return;
    }
    if (fn) {
      for (let i = 0; i < fns.length; ) {
        if (fns[i].fn === fn) {
          fns.splice(i, 1);
          i--;
        }
        i++;
      }
    } else {
      delete this.listener[eventName];
    }
  }
  _clearCache(eventName) {
    for (let index = 0; index < this.emitCache.length; index++) {
      const cache = this.emitCache[index];
      const _name = eventName ? cache.eventName === eventName ? eventName : null : cache.eventName;
      if (!_name)
        continue;
      const location = this.emit.apply(this, [_name, ...cache.args]);
      if (typeof location === "number") {
        this.emitCache.pop();
        continue;
      }
      this.emitCache.splice(index, 1);
      index--;
    }
  }
  _addListener(eventName, type, fn) {
    (this.listener[eventName] || (this.listener[eventName] = [])).push({
      fn,
      type
    });
  }
};
var PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_COPY_URL,
  ON_UPLOAD_DOUYIN_VIDEO,
  ON_LIVE_MOUNT,
  ON_TITLE_CLICK,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootImmediateHook(name) {
  const PAGE_SYNC_HOOKS = [ON_LOAD, ON_SHOW];
  return PAGE_SYNC_HOOKS.indexOf(name) > -1;
}
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
var UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_EXIT,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_COPY_URL,
  ON_UPLOAD_DOUYIN_VIDEO,
  ON_LIVE_MOUNT,
  ON_TITLE_CLICK,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED,
  ON_LAST_PAGE_BACK_PRESS
];
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
var vueApp;
var createVueAppHooks = [];
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
var invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  return createErrorHandler2(app);
});
var E = function() {
};
E.prototype = {
  _id: 1,
  on: function(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx,
      _id: this._id
    });
    return this._id++;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, event) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && event) {
      for (var i = evts.length - 1; i >= 0; i--) {
        if (evts[i].fn === event || evts[i].fn._ === event || evts[i]._id === event) {
          evts.splice(i, 1);
          break;
        }
      }
      liveEvents = evts;
    }
    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
var E$1 = E;
var borderStyles = {
  black: "rgba(0,0,0,0.4)",
  white: "rgba(255,255,255,0.4)"
};
function normalizeTabBarStyles(borderStyle2) {
  if (borderStyle2 && borderStyle2 in borderStyles) {
    return borderStyles[borderStyle2];
  }
  return borderStyle2;
}
function normalizeTitleColor(titleColor) {
  return titleColor === "black" ? "#000000" : "#ffffff";
}
function resolveStringStyleItem(modeStyle, styleItem, key) {
  if (isString(styleItem) && styleItem.startsWith("@")) {
    const _key = styleItem.replace("@", "");
    let _styleItem = modeStyle[_key] || styleItem;
    switch (key) {
      case "titleColor":
        _styleItem = normalizeTitleColor(_styleItem);
        break;
      case "borderStyle":
        _styleItem = normalizeTabBarStyles(_styleItem);
        break;
    }
    return _styleItem;
  }
  return styleItem;
}
function normalizeStyles(pageStyle, themeConfig = {}, mode = "light") {
  const modeStyle = themeConfig[mode];
  const styles = {};
  if (typeof modeStyle === "undefined" || !pageStyle)
    return pageStyle;
  Object.keys(pageStyle).forEach((key) => {
    const styleItem = pageStyle[key];
    const parseStyleItem = () => {
      if (isPlainObject(styleItem))
        return normalizeStyles(styleItem, themeConfig, mode);
      if (isArray(styleItem))
        return styleItem.map((item) => {
          if (isPlainObject(item))
            return normalizeStyles(item, themeConfig, mode);
          return resolveStringStyleItem(modeStyle, item);
        });
      return resolveStringStyleItem(modeStyle, styleItem, key);
    };
    styles[key] = parseStyleItem();
  });
  return styles;
}
var isStringIntegerKey = (key) => typeof key === "string" && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isNumberIntegerKey = (key) => typeof key === "number" && !isNaN(key) && key >= 0 && parseInt(key + "", 10) === key;
var isIntegerKey = (key) => isNumberIntegerKey(key) || isStringIntegerKey(key);

// packages/uni-framework-harmony/src/uts-runtime.ts
var realGlobal = getGlobal();
if (realGlobal.UTS == null && realGlobal.UTSJSONObject == null && realGlobal.UTSValueIterable == null && realGlobal.UniError == null) {
  realGlobal.UTS = UTS2;
  realGlobal.UTSJSONObject = UTSJSONObject2;
  realGlobal.UTSValueIterable = UTSValueIterable;
  realGlobal.UniError = UniError2;
}

// ../uni-app-next/packages/uni-app-vue/dist/uvue.runtime.harmony.esm.dev.js
var uvue_runtime_harmony_esm_dev_exports = {};
__export(uvue_runtime_harmony_esm_dev_exports, {
  BaseTransition: () => BaseTransition,
  BaseTransitionPropsValidators: () => BaseTransitionPropsValidators,
  Comment: () => Comment,
  DeprecationTypes: () => DeprecationTypes,
  EffectScope: () => EffectScope,
  ErrorCodes: () => ErrorCodes,
  ErrorTypeStrings: () => ErrorTypeStrings,
  Fragment: () => Fragment,
  KeepAlive: () => KeepAlive,
  ReactiveEffect: () => ReactiveEffect,
  Static: () => Static,
  Suspense: () => Suspense,
  Teleport: () => Teleport,
  Text: () => Text,
  TrackOpTypes: () => TrackOpTypes,
  TriggerOpTypes: () => TriggerOpTypes,
  UniSharedDataComponentStyleIsolation: () => UniSharedDataComponentStyleIsolation,
  __X_STYLE_ISOLATION__: () => __X_STYLE_ISOLATION__,
  assertNumber: () => assertNumber,
  callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
  callWithErrorHandling: () => callWithErrorHandling,
  camelize: () => camelize,
  capitalize: () => capitalize,
  cloneVNode: () => cloneVNode,
  compatUtils: () => compatUtils,
  computed: () => computed,
  createApp: () => createApp,
  createBlock: () => createBlock,
  createCommentVNode: () => createCommentVNode,
  createElementBlock: () => createElementBlock,
  createElementVNode: () => createBaseVNode,
  createHydrationRenderer: () => createHydrationRenderer,
  createMountPage: () => createMountPage,
  createPropsRestProxy: () => createPropsRestProxy,
  createRenderer: () => createRenderer,
  createSlots: () => createSlots,
  createStaticVNode: () => createStaticVNode,
  createTextVNode: () => createTextVNode,
  createVNode: () => createVNode,
  customRef: () => customRef,
  defineAsyncComponent: () => defineAsyncComponent,
  defineComponent: () => defineComponent,
  defineEmits: () => defineEmits,
  defineExpose: () => defineExpose,
  defineModel: () => defineModel,
  defineOptions: () => defineOptions,
  defineProps: () => defineProps,
  defineSlots: () => defineSlots,
  devtools: () => devtools,
  effect: () => effect,
  effectScope: () => effectScope,
  enableStyleIsolation: () => enableStyleIsolation,
  getCurrentGenericInstance: () => getCurrentGenericInstance,
  getCurrentInstance: () => getCurrentInstance,
  getCurrentScope: () => getCurrentScope,
  getTransitionRawChildren: () => getTransitionRawChildren,
  guardReactiveProps: () => guardReactiveProps,
  h: () => h,
  handleError: () => handleError,
  hasInjectionContext: () => hasInjectionContext,
  hyphenate: () => hyphenate,
  initCustomFormatter: () => initCustomFormatter,
  inject: () => inject,
  injectHook: () => injectHook,
  isInSSRComponentSetup: () => isInSSRComponentSetup,
  isMemoSame: () => isMemoSame,
  isProxy: () => isProxy,
  isReactive: () => isReactive,
  isReadonly: () => isReadonly,
  isRef: () => isRef,
  isRuntimeOnly: () => isRuntimeOnly,
  isShallow: () => isShallow,
  isVNode: () => isVNode,
  logError: () => logError,
  markRaw: () => markRaw,
  mergeDefaults: () => mergeDefaults,
  mergeModels: () => mergeModels,
  mergeProps: () => mergeProps,
  nextTick: () => nextTick,
  normalizeClass: () => normalizeClass2,
  normalizeProps: () => normalizeProps,
  normalizeStyle: () => normalizeStyle2,
  onActivated: () => onActivated,
  onAppHide: () => onAppHide,
  onAppShow: () => onAppShow,
  onBackPress: () => onBackPress,
  onBeforeMount: () => onBeforeMount,
  onBeforeUnmount: () => onBeforeUnmount,
  onBeforeUpdate: () => onBeforeUpdate,
  onDeactivated: () => onDeactivated,
  onError: () => onError,
  onErrorCaptured: () => onErrorCaptured,
  onExit: () => onExit,
  onHide: () => onHide,
  onLastPageBackPress: () => onLastPageBackPress,
  onLaunch: () => onLaunch,
  onLoad: () => onLoad,
  onMounted: () => onMounted,
  onPageHide: () => onPageHide,
  onPageNotFound: () => onPageNotFound,
  onPageScroll: () => onPageScroll,
  onPageShow: () => onPageShow,
  onPullDownRefresh: () => onPullDownRefresh,
  onReachBottom: () => onReachBottom,
  onReady: () => onReady,
  onRenderTracked: () => onRenderTracked,
  onRenderTriggered: () => onRenderTriggered,
  onResize: () => onResize,
  onScopeDispose: () => onScopeDispose,
  onServerPrefetch: () => onServerPrefetch,
  onShareAppMessage: () => onShareAppMessage,
  onShareTimeline: () => onShareTimeline,
  onShow: () => onShow,
  onTabItemTap: () => onTabItemTap,
  onThemeChange: () => onThemeChange,
  onUnhandledRejection: () => onUnhandledRejection,
  onUnload: () => onUnload,
  onUnmounted: () => onUnmounted,
  onUpdated: () => onUpdated,
  openBlock: () => openBlock,
  parseClassList: () => parseClassList,
  parseClassStyles: () => parseClassStyles,
  popScopeId: () => popScopeId,
  provide: () => provide,
  proxyRefs: () => proxyRefs,
  pushScopeId: () => pushScopeId,
  queuePostFlushCb: () => queuePostFlushCb,
  reactive: () => reactive,
  readonly: () => readonly,
  ref: () => ref,
  registerRuntimeCompiler: () => registerRuntimeCompiler,
  render: () => render,
  renderComponentSlot: () => renderComponentSlot,
  renderList: () => renderList,
  renderSlot: () => renderSlot,
  resolveComponent: () => resolveComponent,
  resolveDirective: () => resolveDirective,
  resolveDynamicComponent: () => resolveDynamicComponent,
  resolveFilter: () => resolveFilter,
  resolveTransitionHooks: () => resolveTransitionHooks,
  setBlockTracking: () => setBlockTracking,
  setDevtoolsHook: () => setDevtoolsHook,
  setTransitionHooks: () => setTransitionHooks,
  shallowReactive: () => shallowReactive,
  shallowReadonly: () => shallowReadonly,
  shallowRef: () => shallowRef,
  shallowSsrRef: () => shallowSsrRef,
  ssrContextKey: () => ssrContextKey,
  ssrRef: () => ssrRef,
  ssrUtils: () => ssrUtils,
  stop: () => stop,
  toDisplayString: () => toDisplayString,
  toHandlerKey: () => toHandlerKey,
  toHandlers: () => toHandlers,
  toRaw: () => toRaw,
  toRef: () => toRef,
  toRefs: () => toRefs,
  toValue: () => toValue,
  transformVNodeArgs: () => transformVNodeArgs,
  triggerRef: () => triggerRef,
  unmountPage: () => unmountPage,
  unref: () => unref,
  useAttrs: () => useAttrs,
  useComputedStyle: () => useComputedStyle,
  useCssModule: () => useCssModule,
  useCssStyles: () => useCssStyles,
  useCssVars: () => useCssVars,
  useModel: () => useModel,
  useSSRContext: () => useSSRContext,
  useSlots: () => useSlots,
  useTransitionState: () => useTransitionState,
  vModelDynamic: () => vModelDynamic,
  vModelText: () => vModelText,
  vShow: () => vShow,
  version: () => version,
  warn: () => warn,
  watch: () => watch,
  watchEffect: () => watchEffect,
  watchPostEffect: () => watchPostEffect,
  watchSyncEffect: () => watchSyncEffect,
  withAsyncContext: () => withAsyncContext,
  withCtx: () => withCtx,
  withDefaults: () => withDefaults,
  withDirectives: () => withDirectives,
  withKeys: () => withKeys,
  withMemo: () => withMemo,
  withModifiers: () => withModifiers,
  withScopeId: () => withScopeId
});
function warn$2(msg) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  console.warn("[Vue warn] ".concat(msg), ...args);
}
var activeEffectScope;
var EffectScope = class {
  constructor() {
    var detached = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      var currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2("cannot run an inactive effect scope.");
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      var i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        var last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
};
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2) {
  var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2("onScopeDispose() is called when there is no active effect scope to be associated with.");
  }
}
var activeEffect;
var ReactiveEffect = class {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (var i = 0; i < this._depsLength; i++) {
        var dep = this.deps[i];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    var lastShouldTrack = shouldTrack;
    var lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
};
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (var i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  var trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  var _effect = new ReactiveEffect(fn, NOOP, () => {
    if (_effect.dirty) {
      _effect.run();
    }
  });
  if (options) {
    extend(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }
  if (!options || !options.lazy) {
    _effect.run();
  }
  var runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
var shouldTrack = true;
var pauseScheduleStack = 0;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    var oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({
        effect: effect2
      }, debuggerEventExtraInfo));
    }
  }
}
var queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;
  pauseScheduling();
  for (var effect2 of dep.keys()) {
    var tracking = void 0;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({
          effect: effect2
        }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
var createDep = (cleanup, computed2) => {
  var dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    var depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    var dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(activeEffect, dep, {
      target,
      type,
      key
    });
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  var deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    var newLength = Number(newValue);
    depsMap.forEach((dep2, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep2);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (var dep of deps) {
    if (dep) {
      triggerEffects(dep, 4, {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
      });
    }
  }
  resetScheduling();
}
function getDepFromReactive(object, key) {
  var _a;
  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  var instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function() {
      var arr = toRaw(this);
      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function() {
      pauseTracking();
      pauseScheduling();
      var raw = toRaw(this);
      if (raw.length > 0) {
        raw[0] = raw[0];
      }
      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var res = raw[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty2(key) {
  var obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
  constructor() {
    var _isReadonly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var _isShallow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    var isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    var targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty2;
      }
    }
    var res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
  constructor() {
    var isShallow2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    var oldValue = target[key];
    if (!this._isShallow) {
      var isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    var hadKey = hasOwn(target, key);
    var oldValue = target[key];
    var result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    var result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
  constructor() {
    var isShallow2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    super(true, isShallow2);
  }
  set(target, key) {
    {
      warn$2('Set operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
    }
    return true;
  }
  deleteProperty(target, key) {
    {
      warn$2('Delete operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
    }
    return true;
  }
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key) {
  var isReadonly2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isShallow2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  target = target["__v_raw"];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  var {
    has: has2
  } = getProto(rawTarget);
  var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key) {
  var isReadonly2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var target = this["__v_raw"];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target) {
  var isReadonly2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  var target = toRaw(this);
  var {
    has: has2,
    get: get2
  } = getProto(target);
  var hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  var oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  var target = toRaw(this);
  var {
    has: has2,
    get: get2
  } = getProto(target);
  var hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  var oldValue = get2 ? get2.call(target, key) : void 0;
  var result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget = isMap(target) ? new Map(target) : new Set(target);
  var result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"];
    var rawTarget = toRaw(target);
    var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function() {
    var target = this["__v_raw"];
    var rawTarget = toRaw(target);
    var targetIsMap = isMap(rawTarget);
    var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === "keys" && targetIsMap;
    var innerIterator = target[method](...arguments);
    var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        var {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function() {
    {
      var key = (arguments.length <= 0 ? void 0 : arguments[0]) ? 'on key "'.concat(arguments.length <= 0 ? void 0 : arguments[0], '" ') : "";
      warn$2("".concat(capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  var mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  var rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    var type = toRawType(target);
    warn$2("Reactive ".concat(type, " contains both the raw and reactive versions of the same object").concat(type === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      warn$2("value cannot be made reactive: ".concat(String(target)));
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  var existingProxy = proxyMap.get(target);
  if (existingProxy) {
    var deref = existingProxy.deref();
    if (deref) {
      return deref;
    }
  }
  var targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  var proxy2 = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, new WeakRef(proxy2));
  return proxy2;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  var raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
var toReactive = (value) => isObject(value) ? reactive(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var COMPUTED_SIDE_EFFECT_WARN = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
var ComputedRefImpl = class {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(() => getter(this._value), () => triggerRefValue(this, this.effect._dirtyLevel === 2 ? 2 : 3));
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    var self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      if (this._warnRecursive) {
        warn$2(COMPUTED_SIDE_EFFECT_WARN, "\n\ngetter: ", this.getter);
      }
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
};
function computed$1(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      warn$2("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(activeEffect, (_a = ref2.dep) != null ? _a : ref2.dep = createDep(() => ref2.dep = void 0, ref2 instanceof ComputedRefImpl ? ref2 : void 0), {
      target: ref2,
      type: "get",
      key: "value"
    });
  }
}
function triggerRefValue(ref2) {
  var dirtyLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
  var newVal = arguments.length > 2 ? arguments[2] : void 0;
  ref2 = toRaw(ref2);
  var dep = ref2.dep;
  if (dep) {
    triggerEffects(dep, dirtyLevel, {
      target: ref2,
      type: "set",
      key: "value",
      newValue: newVal
    });
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    var useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4, newVal);
    }
  }
};
function triggerRef(ref2) {
  triggerRefValue(ref2, 4, ref2.value);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction(source) ? source() : unref(source);
}
var shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    var oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var CustomRefImpl = class {
  constructor(factory) {
    this.dep = void 0;
    this.__v_isRef = true;
    var {
      get: get2,
      set: set3
    } = factory(() => trackRefValue(this), () => triggerRefValue(this));
    this._get = get2;
    this._set = set3;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
};
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if (!isProxy(object)) {
    warn$2("toRefs() expects a reactive object but received a plain one.");
  }
  var ret = isArray(object) ? new Array(object.length) : {};
  for (var key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
var ObjectRefImpl = class {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    var val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
};
var GetterRefImpl = class {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
};
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  var val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
var TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
var TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function(value) {
    return constructor.resolve(callback()).then(function() {
      return value;
    });
  }, function(reason) {
    return constructor.resolve(callback()).then(function() {
      return constructor.reject(reason);
    });
  });
}
function allSettled(arr) {
  var P = this;
  return new P(function(resolve2, reject2) {
    if (!(arr && typeof arr.length !== "undefined")) {
      return reject2(new TypeError(typeof arr + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve2([]);
    var remaining = args.length;
    function res(i2, val) {
      if (val && (typeof val === "object" || typeof val === "function")) {
        var then = val.then;
        if (typeof then === "function") {
          then.call(val, function(val2) {
            res(i2, val2);
          }, function(e) {
            args[i2] = {
              status: "rejected",
              reason: e
            };
            if (--remaining === 0) {
              resolve2(args);
            }
          });
          return;
        }
      }
      args[i2] = {
        status: "fulfilled",
        value: val
      };
      if (--remaining === 0) {
        resolve2(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}
function AggregateError(errors, message) {
  this.name = "AggregateError", this.errors = errors;
  this.message = message || "";
}
AggregateError.prototype = Error.prototype;
function any(arr) {
  var P = this;
  return new P(function(resolve2, reject2) {
    if (!(arr && typeof arr.length !== "undefined")) {
      return reject2(new TypeError("Promise.any accepts an array"));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return reject2();
    var rejectionReasons = [];
    for (var i = 0; i < args.length; i++) {
      try {
        P.resolve(args[i]).then(resolve2).catch(function(error) {
          rejectionReasons.push(error);
          if (rejectionReasons.length === args.length) {
            reject2(new AggregateError(rejectionReasons, "All promises were rejected"));
          }
        });
      } catch (ex) {
        reject2(ex);
      }
    }
  });
}
var setTimeoutFunc = setTimeout;
function isArray2(x) {
  return Boolean(x && typeof x.length !== "undefined");
}
function noop() {
}
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}
function Promise$1(fn) {
  if (!(this instanceof Promise$1)) throw new TypeError("Promises must be constructed via new");
  if (typeof fn !== "function") throw new TypeError("not a function");
  this._state = 0;
  this._handled = false;
  this._value = void 0;
  this._deferreds = [];
  doResolve(fn, this);
}
function handle(self2, deferred) {
  while (self2._state === 3) {
    self2 = self2._value;
  }
  if (self2._state === 0) {
    self2._deferreds.push(deferred);
    return;
  }
  self2._handled = true;
  Promise$1._immediateFn(function() {
    var cb = self2._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self2._state === 1 ? resolve$1 : reject)(deferred.promise, self2._value);
      return;
    }
    var ret;
    try {
      ret = cb(self2._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve$1(deferred.promise, ret);
  });
}
function resolve$1(self2, newValue) {
  try {
    if (newValue === self2) throw new TypeError("A promise cannot be resolved with itself.");
    if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
      var then = newValue.then;
      if (newValue instanceof Promise$1) {
        self2._state = 3;
        self2._value = newValue;
        finale(self2);
        return;
      } else if (typeof then === "function") {
        doResolve(bind(then, newValue), self2);
        return;
      }
    }
    self2._state = 1;
    self2._value = newValue;
    finale(self2);
  } catch (e) {
    reject(self2, e);
  }
}
function reject(self2, newValue) {
  self2._state = 2;
  self2._value = newValue;
  finale(self2);
}
function finale(self2) {
  if (self2._state === 2 && self2._deferreds.length === 0) {
    Promise$1._immediateFn(function() {
      if (!self2._handled) {
        Promise$1._unhandledRejectionFn(self2._value);
      }
    });
  }
  for (var i = 0, len = self2._deferreds.length; i < len; i++) {
    handle(self2, self2._deferreds[i]);
  }
  self2._deferreds = null;
}
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}
function doResolve(fn, self2) {
  var done = false;
  try {
    fn(function(value) {
      if (done) return;
      done = true;
      resolve$1(self2, value);
    }, function(reason) {
      if (done) return;
      done = true;
      reject(self2, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self2, ex);
  }
}
Promise$1.prototype["catch"] = function(onRejected) {
  return this.then(null, onRejected);
};
Promise$1.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};
Promise$1.prototype["finally"] = finallyConstructor;
Promise$1.all = function(arr) {
  return new Promise$1(function(resolve2, reject2) {
    if (!isArray2(arr)) {
      return reject2(new TypeError("Promise.all accepts an array"));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve2([]);
    var remaining = args.length;
    function res(i2, val) {
      try {
        if (val && (typeof val === "object" || typeof val === "function")) {
          var then = val.then;
          if (typeof then === "function") {
            then.call(val, function(val2) {
              res(i2, val2);
            }, reject2);
            return;
          }
        }
        args[i2] = val;
        if (--remaining === 0) {
          resolve2(args);
        }
      } catch (ex) {
        reject2(ex);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};
Promise$1.any = any;
Promise$1.allSettled = allSettled;
Promise$1.resolve = function(value) {
  if (value && typeof value === "object" && value.constructor === Promise$1) {
    return value;
  }
  return new Promise$1(function(resolve2) {
    resolve2(value);
  });
};
Promise$1.reject = function(value) {
  return new Promise$1(function(resolve2, reject2) {
    reject2(value);
  });
};
Promise$1.race = function(arr) {
  return new Promise$1(function(resolve2, reject2) {
    if (!isArray2(arr)) {
      return reject2(new TypeError("Promise.race accepts an array"));
    }
    for (var i = 0, len = arr.length; i < len; i++) {
      Promise$1.resolve(arr[i]).then(resolve2, reject2);
    }
  });
};
Promise$1._immediateFn = // @ts-ignore
typeof setImmediate === "function" && function(fn) {
  setImmediate(fn);
} || function(fn) {
  setTimeoutFunc(fn, 0);
};
Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== "undefined" && console) {
    console.warn("Possible Unhandled Promise Rejection:", err);
  }
};
var lib = Promise$1;
var PromisePolyfill = /* @__PURE__ */ getDefaultExportFromCjs(lib);
function createDecl(prop, value, important, raws, source) {
  var decl = {
    type: "decl",
    prop,
    value: value.toString(),
    raws,
    source
  };
  if (important) {
    decl.important = true;
  }
  return decl;
}
var isNumber = (val) => typeof val === "number";
var cacheStringFunction2 = (fn) => {
  var cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var hyphenateRE2 = /([A-Z])/g;
var hyphenateStyleProperty = cacheStringFunction2((str) => str.replace(hyphenateRE2, (_, m) => {
  if (typeof m === "string") {
    return "-" + m.toLowerCase();
  }
  return m;
}).toLowerCase());
function supportedValueWithTipsReason(k, v, tips) {
  return "ERROR: property value `" + v + "` is not supported for `" + hyphenateStyleProperty(k) + "` " + tips;
}
function splitValues(value) {
  var trimmedValue = value.trim();
  if (!trimmedValue.includes("(")) {
    return trimmedValue.split(/\s+/);
  }
  var parts = [];
  var current = "";
  var depth = 0;
  for (var i = 0; i < trimmedValue.length; i++) {
    var char = trimmedValue[i];
    if (char === "(") {
      depth++;
      current += char;
    } else if (char === ")") {
      if (depth > 0) {
        depth--;
      }
      current += char;
    } else if (/\s/.test(char)) {
      if (depth === 0) {
        if (current) {
          parts.push(current);
          current = "";
        }
      } else {
        if (current.length > 0 && !/\s$/.test(current)) {
          current += " ";
        }
      }
    } else {
      current += char;
    }
  }
  if (current) {
    parts.push(current);
  }
  return parts;
}
var backgroundColor = "backgroundColor";
var backgroundImage = "backgroundImage";
var handleTransformBackground = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  if (value === "none") {
    return [createDecl(backgroundImage, "none", important, raws, source), createDecl(backgroundColor, "transparent", important, raws, source)];
  }
  if (/^#?\S+$/.test(value) || /^rgba?(.+)$/.test(value)) {
    return [createDecl(backgroundImage, "none", important, raws, source), createDecl(backgroundColor, value, important, raws, source)];
  } else if (/^linear-gradient(.+)$/.test(value)) {
    return [createDecl(backgroundImage, value, important, raws, source), createDecl(backgroundColor, "transparent", important, raws, source)];
  } else if (value == "") {
    return [createDecl(backgroundImage, "none", important, raws, source), createDecl(backgroundColor, "transparent", important, raws, source)];
  }
  return [decl];
};
var handleTransformBackgroundNvue = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  if (/^#?\S+$/.test(value) || /^rgba?(.+)$/.test(value)) {
    return [createDecl(backgroundColor, value, important, raws, source)];
  } else if (/^linear-gradient(.+)$/.test(value)) {
    return [createDecl(backgroundImage, value, important, raws, source)];
  } else if (value == "") {
    return [decl];
  }
  return [decl];
};
function createTransformBackground(options) {
  return (decl) => {
    var isUvuePlatform = options.type === "uvue";
    if (isUvuePlatform) {
      return handleTransformBackground(decl);
    } else {
      return handleTransformBackgroundNvue(decl);
    }
  };
}
var borderTop = "borderTop";
var borderRight = "borderRight";
var borderBottom = "borderBottom";
var borderLeft = "borderLeft";
var transformBorderColor = (decl) => {
  var {
    prop,
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var _property_split = hyphenate(prop).split("-");
  var property = _property_split[_property_split.length - 1];
  {
    property = capitalize(property);
  }
  var splitResult = splitValues(value);
  switch (splitResult.length) {
    case 1:
      if (_property_split.length === 3) {
        return [decl];
      }
      splitResult.push(splitResult[0], splitResult[0], splitResult[0]);
      break;
    case 2:
      splitResult.push(splitResult[0], splitResult[1]);
      break;
    case 3:
      splitResult.push(splitResult[1]);
      break;
  }
  return [createDecl(borderTop + property, splitResult[0], important, raws, source), createDecl(borderRight + property, splitResult[1], important, raws, source), createDecl(borderBottom + property, splitResult[2], important, raws, source), createDecl(borderLeft + property, splitResult[3], important, raws, source)];
};
var transformBorderColorNvue = (decl) => {
  var {
    prop,
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var property = hyphenate(prop).split("-")[1];
  {
    property = capitalize(property);
  }
  var splitResult = value.replace(/\s*,\s*/g, ",").split(/\s+/);
  switch (splitResult.length) {
    case 1:
      return [decl];
    case 2:
      splitResult.push(splitResult[0], splitResult[1]);
      break;
    case 3:
      splitResult.push(splitResult[1]);
      break;
  }
  return [createDecl(borderTop + property, splitResult[0], important, raws, source), createDecl(borderRight + property, splitResult[1], important, raws, source), createDecl(borderBottom + property, splitResult[2], important, raws, source), createDecl(borderLeft + property, splitResult[3], important, raws, source)];
};
var transformBorderStyle = transformBorderColor;
var transformBorderStyleNvue = transformBorderColorNvue;
var transformBorderWidth = transformBorderColor;
var transformBorderWidthNvue = transformBorderColorNvue;
function tryExpandSingleValueVarShorthand(decl, props, value) {
  {
    return null;
  }
}
var borderWidth = "Width";
var borderStyle = "Style";
var borderColor = "Color";
var BORDER_WIDTH_REGEXP = /^(?:[\d.]+\S*|thin|medium|thick)$/;
var BORDER_STYLE_REGEXP = /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)$/;
var BORDER_SHORTHAND_VAR_ORDER_WARNING = "__borderShorthandVarOrderWarning";
function createBorderVarOrderWarning(prop, value) {
  return supportedValueWithTipsReason(prop, value, "(border shorthand with CSS variables must follow `width style color`, for example: `1px solid var(--color, #999999)`)");
}
function isCssVarValue(value) {
  return value.startsWith("var(");
}
function isBorderWidthValue(value) {
  return isCssVarValue(value) || BORDER_WIDTH_REGEXP.test(value);
}
function isBorderStyleValue(value) {
  return isCssVarValue(value) || BORDER_STYLE_REGEXP.test(value);
}
function isBorderColorValue(value) {
  return isCssVarValue(value) || !BORDER_WIDTH_REGEXP.test(value) && !BORDER_STYLE_REGEXP.test(value);
}
function createTransformBorder(options) {
  return (decl) => {
    var {
      prop,
      value,
      important,
      raws,
      source
    } = decl;
    var singleVarResult = tryExpandSingleValueVarShorthand();
    if (singleVarResult) {
      return [...transformBorderWidth(singleVarResult[0]), ...transformBorderStyle(singleVarResult[1]), ...transformBorderColor(singleVarResult[2])];
    }
    var splitResult = splitValues(value);
    var havVar = splitResult.some((str) => str.startsWith("var("));
    var result = [];
    if (havVar) {
      if (splitResult.length > 3 || splitResult.length === 3 && (!isBorderWidthValue(splitResult[0]) || !isBorderStyleValue(splitResult[1]) || !isBorderColorValue(splitResult[2]))) {
        decl[BORDER_SHORTHAND_VAR_ORDER_WARNING] = createBorderVarOrderWarning(prop, value);
        return [];
      }
      result = splitResult;
      splitResult = [];
    } else {
      result = [BORDER_WIDTH_REGEXP, BORDER_STYLE_REGEXP, /\S+/].map((item) => {
        var index = splitResult.findIndex((str) => item.test(str));
        return index < 0 ? null : splitResult.splice(index, 1)[0];
      });
    }
    if (splitResult.length > 0 && value != "") {
      return [decl];
    }
    var defaultWidth = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "medium";
    };
    var defaultStyle = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "none";
    };
    var defaultColor = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "#000000";
    };
    return [...transformBorderWidth(createDecl(prop + borderWidth, defaultWidth(result[0]), important, raws, source)), ...transformBorderStyle(createDecl(prop + borderStyle, defaultStyle(result[1]), important, raws, source)), ...transformBorderColor(createDecl(prop + borderColor, defaultColor(result[2]), important, raws, source))];
  };
}
function createTransformBorderNvue(options) {
  return (decl) => {
    var {
      prop,
      value,
      important,
      raws,
      source
    } = decl;
    value = value.trim();
    var splitResult = value.replace(/\s*,\s*/g, ",").split(/\s+/);
    var result = [/^[\d\.]+\S*|^(thin|medium|thick)$/, /^(solid|dashed|dotted|none)$/, /\S+/].map((item) => {
      var index = splitResult.findIndex((str) => item.test(str));
      return index < 0 ? null : splitResult.splice(index, 1)[0];
    });
    if (splitResult.length) {
      return [decl];
    }
    return [createDecl(prop + borderWidth, (result[0] || "0").trim(), important, raws, source), createDecl(prop + borderStyle, (result[1] || "solid").trim(), important, raws, source), createDecl(prop + borderColor, (result[2] || "#000000").trim(), important, raws, source)];
  };
}
var borderTopLeftRadius = "borderTopLeftRadius";
var borderTopRightRadius = "borderTopRightRadius";
var borderBottomRightRadius = "borderBottomRightRadius";
var borderBottomLeftRadius = "borderBottomLeftRadius";
var transformBorderRadius = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var splitResult = splitValues(value);
  if (value.includes("/")) {
    return [decl];
  }
  switch (splitResult.length) {
    case 1:
      splitResult.push(splitResult[0], splitResult[0], splitResult[0]);
      break;
    case 2:
      splitResult.push(splitResult[0], splitResult[1]);
      break;
    case 3:
      splitResult.push(splitResult[1]);
      break;
  }
  return [createDecl(borderTopLeftRadius, splitResult[0], important, raws, source), createDecl(borderTopRightRadius, splitResult[1], important, raws, source), createDecl(borderBottomRightRadius, splitResult[2], important, raws, source), createDecl(borderBottomLeftRadius, splitResult[3], important, raws, source)];
};
var transformBorderRadiusNvue = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var splitResult = value.split(/\s+/);
  if (value.includes("/")) {
    return [decl];
  }
  switch (splitResult.length) {
    case 1:
      return [decl];
    case 2:
      splitResult.push(splitResult[0], splitResult[1]);
      break;
    case 3:
      splitResult.push(splitResult[1]);
      break;
  }
  return [createDecl(borderTopLeftRadius, splitResult[0], important, raws, source), createDecl(borderTopRightRadius, splitResult[1], important, raws, source), createDecl(borderBottomRightRadius, splitResult[2], important, raws, source), createDecl(borderBottomLeftRadius, splitResult[3], important, raws, source)];
};
var flexDirection = "flexDirection";
var flexWrap = "flexWrap";
var transformFlexFlow = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var splitResult = splitValues(value);
  var singleVarResult = tryExpandSingleValueVarShorthand();
  if (singleVarResult) {
    return singleVarResult;
  }
  var result = [/^(column|column-reverse|row|row-reverse)$/, /^(nowrap|wrap|wrap-reverse)$/].map((item) => {
    var index = splitResult.findIndex((str) => item.test(str));
    return index < 0 ? null : splitResult.splice(index, 1)[0];
  });
  if (splitResult.length) {
    return [decl];
  }
  return [createDecl(flexDirection, result[0] || "column", important, raws, source), createDecl(flexWrap, result[1] || "nowrap", important, raws, source)];
};
var top = "Top";
var right = "Right";
var bottom = "Bottom";
var left = "Left";
var createTransformBox = (type) => {
  return (decl) => {
    var {
      value,
      important,
      raws,
      source
    } = decl;
    var splitResult = splitValues(value);
    switch (splitResult.length) {
      case 1:
        splitResult.push(splitResult[0], splitResult[0], splitResult[0]);
        break;
      case 2:
        splitResult.push(splitResult[0], splitResult[1]);
        break;
      case 3:
        splitResult.push(splitResult[1]);
        break;
    }
    return [createDecl(type + top, splitResult[0], important, raws, source), createDecl(type + right, splitResult[1], important, raws, source), createDecl(type + bottom, splitResult[2], important, raws, source), createDecl(type + left, splitResult[3], important, raws, source)];
  };
};
var transformMargin = createTransformBox("margin");
var transformPadding = createTransformBox("padding");
var transitionProperty = "transitionProperty";
var transitionDuration = "transitionDuration";
var transitionTimingFunction = "transitionTimingFunction";
var transitionDelay = "transitionDelay";
var transformTransition = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var result = [];
  var match;
  if (value.includes("cubic-bezier")) {
    var CHUNK_REGEXP = /^(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?\s*((\S*)|cubic-bezier\(.*\))?\s*(\d*\.?\d+(?:ms|s)?)?$/;
    match = value.match(CHUNK_REGEXP);
  } else {
    var _CHUNK_REGEXP = /^(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?\s*(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?$/;
    match = value.match(_CHUNK_REGEXP);
  }
  if (!match) {
    return result;
  }
  match[1] && result.push(createDecl(transitionProperty, match[1], important, raws, source));
  match[2] && result.push(createDecl(transitionDuration, match[2], important, raws, source));
  match[3] && result.push(createDecl(transitionTimingFunction, match[3], important, raws, source));
  match[4] && result.push(createDecl(transitionDelay, match[4], important, raws, source));
  return result;
};
var flexGrow = "flexGrow";
var flexShrink = "flexShrink";
var flexBasis = "flexBasis";
var transformFlex = (decl) => {
  var {
    value,
    important,
    raws,
    source
  } = decl;
  value = value.trim();
  var result = [];
  var splitResult = splitValues(value);
  var singleVarResult = tryExpandSingleValueVarShorthand();
  if (singleVarResult) {
    return singleVarResult;
  }
  var isFlexGrowValid = (v4) => isNumber(Number(v4)) && !Number.isNaN(Number(v4));
  var isFlexShrinkValid = (v4) => isNumber(Number(v4)) && !Number.isNaN(Number(v4)) && Number(v4) >= 0;
  var isFlexBasisValid = (v4) => typeof v4 === "string" && v4.trim() !== "";
  if (splitResult.length === 1) {
    if (value === "none") {
      result.push(createDecl(flexGrow, "0", important, raws, source), createDecl(flexShrink, "0", important, raws, source), createDecl(flexBasis, "auto", important, raws, source));
      return result;
    }
    if (value === "auto") {
      result.push(createDecl(flexGrow, "1", important, raws, source), createDecl(flexShrink, "1", important, raws, source), createDecl(flexBasis, "auto", important, raws, source));
      return result;
    }
    if (value === "initial") {
      result.push(createDecl(flexGrow, "0", important, raws, source), createDecl(flexShrink, "1", important, raws, source), createDecl(flexBasis, "auto", important, raws, source));
      return result;
    }
    var v = splitResult[0];
    if (isFlexGrowValid(v)) {
      if (Number(v) < 0) {
        return [];
      }
      result.push(createDecl(flexGrow, v, important, raws, source), createDecl(flexShrink, "1", important, raws, source), createDecl(flexBasis, "0%", important, raws, source));
      return result;
    } else if (isFlexBasisValid(v)) {
      result.push(createDecl(flexGrow, "1", important, raws, source), createDecl(flexShrink, "1", important, raws, source), createDecl(flexBasis, v, important, raws, source));
      return result;
    } else {
      return [decl];
    }
  } else if (splitResult.length === 2) {
    var [v1, v2] = splitResult;
    if (isFlexGrowValid(v1)) {
      if (isFlexShrinkValid(v2)) {
        result.push(createDecl(flexGrow, v1, important, raws, source), createDecl(flexShrink, v2, important, raws, source), createDecl(flexBasis, "0%", important, raws, source));
        return result;
      } else {
        result.push(createDecl(flexGrow, v1, important, raws, source), createDecl(flexShrink, "1", important, raws, source), createDecl(flexBasis, v2, important, raws, source));
        return result;
      }
    } else {
      return [decl];
    }
  } else if (splitResult.length === 3) {
    var [_v, _v2, v3] = splitResult;
    if (isFlexGrowValid(_v) && isFlexShrinkValid(_v2)) {
      result.push(createDecl(flexGrow, _v, important, raws, source), createDecl(flexShrink, _v2, important, raws, source), createDecl(flexBasis, v3, important, raws, source));
      return result;
    } else {
      return [decl];
    }
  }
  return [decl];
};
function getDeclTransforms(options) {
  var transformBorder = options.type === "uvue" ? createTransformBorder() : createTransformBorderNvue();
  var styleMap = {
    transition: transformTransition,
    border: transformBorder,
    background: createTransformBackground(options),
    ["borderTop"]: transformBorder,
    ["borderRight"]: transformBorder,
    ["borderBottom"]: transformBorder,
    ["borderLeft"]: transformBorder,
    ["borderStyle"]: options.type === "uvue" ? transformBorderStyle : transformBorderStyleNvue,
    ["borderWidth"]: options.type === "uvue" ? transformBorderWidth : transformBorderWidthNvue,
    ["borderColor"]: options.type === "uvue" ? transformBorderColor : transformBorderColorNvue,
    ["borderRadius"]: options.type === "uvue" ? transformBorderRadius : transformBorderRadiusNvue,
    // uvue已经支持这些简写属性，不需要展开
    // margin,padding继续展开，确保样式的优先级
    margin: transformMargin,
    padding: transformPadding,
    ["flexFlow"]: transformFlexFlow
  };
  if (options.type === "uvue") {
    styleMap.flex = transformFlex;
  }
  var result = {};
  {
    result = styleMap;
  }
  return result;
}
var DeclTransforms;
var expanded = Symbol("expanded");
function expand(options) {
  var plugin2 = {
    postcssPlugin: "".concat(options.type || "nvue", ":expand"),
    Declaration(decl, helper) {
      if (decl[expanded]) {
        return;
      }
      if (!DeclTransforms) {
        DeclTransforms = getDeclTransforms(options);
      }
      var transform = DeclTransforms[decl.prop];
      if (transform) {
        var res = transform(decl);
        var reason = decl[BORDER_SHORTHAND_VAR_ORDER_WARNING];
        if (reason && helper && decl.warn) {
          var needLog = false;
          if (options.logLevel === "NOTE") {
            needLog = true;
          } else if (options.logLevel === "ERROR") {
            if (reason.startsWith("ERROR:")) {
              needLog = true;
            }
          } else {
            if (!reason.startsWith("NOTE:")) {
              needLog = true;
            }
          }
          if (needLog) {
            decl.warn(helper.result, reason);
          }
          delete decl[BORDER_SHORTHAND_VAR_ORDER_WARNING];
        }
        var _isSame = res.length === 1 && res[0] === decl;
        if (!_isSame) {
          decl.replaceWith(res);
        }
      }
      decl[expanded] = true;
    }
  };
  return plugin2;
}
var stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg) {
  pauseTracking();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [msg + args.map((a) => {
      var _a, _b;
      return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
    }).join(""), instance && instance.proxy, trace.map((_ref) => {
      var {
        vnode
      } = _ref;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join("\n"), trace]);
  } else {
    var warnArgs = ["[Vue warn]: ".concat(msg), ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push("\n", ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  var normalizedStack = [];
  while (currentVNode) {
    var last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  var logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : ["\n"], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry(_ref2) {
  var {
    vnode,
    recurseCount
  } = _ref2;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(" ...");
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (isFunction(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = toRaw(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}
function assertNumber(val, type) {
  if (val === void 0) {
    return;
  } else if (typeof val !== "number") {
    warn$1("".concat(type, " is not a valid number - got ").concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    warn$1("".concat(type, " is NaN - the duration expression might be incorrect."));
  }
}
var ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "WATCH_GETTER": 2,
  "2": "WATCH_GETTER",
  "WATCH_CALLBACK": 3,
  "3": "WATCH_CALLBACK",
  "WATCH_CLEANUP": 4,
  "4": "WATCH_CLEANUP",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER"
};
var ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  var values = [];
  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;
  if (instance) {
    var cur = instance.parent;
    var exposedInstance = instance.proxy;
    var errorInfo = ErrorTypeStrings$1[type] || type;
    while (cur) {
      var errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    var appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      pauseTracking();
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  {
    var info = ErrorTypeStrings$1[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));
    if (contextVNode) {
      popWarningContext();
    }
    if (err instanceof Error) {
      console.error("---BEGIN:EXCEPTION---".concat(err.message, "\n").concat(err.stack || "", "---END:EXCEPTION---"));
    } else {
      console.error(err);
    }
  }
}
var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ PromisePolyfill.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;
function nextTick(fn) {
  var instance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance();
  var promise = currentFlushPromise || resolvedPromise;
  var current = currentFlushPromise === null || instance === null ? promise : promise.then(() => {
    return new Promise((resolve2) => {
      if (instance === null) {
        resolve2();
      } else {
        instance.$waitNativeRender(() => {
          resolve2();
        });
      }
    });
  });
  return fn ? current.then(this ? fn.bind(this) : fn) : current;
}
function findInsertionIndex(id2) {
  var start = flushIndex + 1;
  var end = queue.length;
  while (start < end) {
    var middle = start + end >>> 1;
    var middleJob = queue[middle];
    var middleJobId = getId(middleJob);
    if (middleJobId < id2 || middleJobId === id2 && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  var i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : isFlushing ? flushIndex + 1 : 0;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    var cb = queue[i];
    if (cb && cb.pre) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
var getId = (job) => job.id == null ? Infinity : job.id;
var comparator = (a, b) => {
  var diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre) return -1;
    if (b.pre && !a.pre) return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  var check = (job2) => checkRecursiveUpdates(seen, job2);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      handleError("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function."), null, 10);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
var isHmrUpdating = false;
var hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  var id2 = instance.type.__hmrId;
  var record = map.get(id2);
  if (!record) {
    createRecord(id2, instance.type);
    record = map.get(id2);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id2, initialDef) {
  if (map.has(id2)) {
    return false;
  }
  map.set(id2, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id2, newRender) {
  var record = map.get(id2);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.effect.dirty = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id2, newComp) {
  var record = map.get(id2);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  var instances = [...record.instances];
  for (var instance of instances) {
    var oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
  }
  queuePostFlushCb(() => {
    for (var _instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(_instance.type));
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (var key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id2, arg) => {
    try {
      return fn(id2, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var devtools$1;
var buffer = [];
var devtoolsNotInstalled = false;
function emit$1(event) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key6 = 1; _key6 < _len5; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event,
      args
    });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach((_ref3) => {
      var {
        event,
        args
      } = _ref3;
      return devtools$1.emit(event, ...args);
    });
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount", app);
}
var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
var devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit", component.appContext.app, component, event, params);
}
function emit(instance, event) {
  if (instance.isUnmounted) return;
  var props = instance.vnode.props || EMPTY_OBJ;
  for (var _len6 = arguments.length, rawArgs = new Array(_len6 > 2 ? _len6 - 2 : 0), _key7 = 2; _key7 < _len6; _key7++) {
    rawArgs[_key7 - 2] = arguments[_key7];
  }
  {
    var {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1('Component emitted event "'.concat(event, '" but it is neither declared in the emits option nor as an "').concat(toHandlerKey(event), '" prop.'));
        }
      } else {
        var validator = emitsOptions[event];
        if (isFunction(validator)) {
          var isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1('Invalid event arguments: event validation failed for event "'.concat(event, '".'));
          }
        }
      }
    }
  }
  var args = rawArgs;
  var isModelListener2 = event.startsWith("update:");
  var modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === "modelValue" ? "model" : modelArg, "Modifiers");
    var {
      number,
      trim
    } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    var lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1('Event "'.concat(lowerCaseEvent, '" is emitted in component ').concat(formatComponentName(instance, instance.type), ' but the handler is registered for "').concat(event, '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "').concat(hyphenate(event), '" instead of "').concat(event, '".'));
    }
  }
  var handlerName;
  var handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  var onceHandler = props[handlerName + "Once"];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  var raw = comp.emits;
  var normalized = {};
  var hasExtends = false;
  if (!isFunction(comp)) {
    var extendEmits = (raw2) => {
      var normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id2) {
  currentScopeId = id2;
}
function popScopeId() {
  currentScopeId = null;
}
var withScopeId = (_id) => withCtx;
function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot = arguments.length > 2 ? arguments[2] : void 0;
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  var renderFnWithContext = function() {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    var prevInstance = setCurrentRenderingInstance(ctx);
    var res;
    try {
      res = fn(...arguments);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
var accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  var {
    type: Component,
    vnode,
    proxy: proxy2,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  var result;
  var fallthroughAttrs;
  var prev = setCurrentRenderingInstance(instance);
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      var proxyToUse = withProxy || proxy2;
      var thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key2, receiver) {
          warn$1("Property '".concat(String(key2), "' was accessed via 'this'. Avoid using 'this' in templates."));
          return Reflect.get(target, key2, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(render2.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      var render22 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render22.length > 1 ? render22(props, true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit: emit2
      } : {
        attrs,
        slots,
        emit: emit2
      }) : render22(
        props,
        null
        /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  var root = result;
  var setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    var keys = Object.keys(fallthroughAttrs);
    var {
      shapeFlag
    } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        var allAttrs = Object.keys(attrs);
        var eventAttrs = [];
        var extraAttrs = [];
        for (var i = 0, l = allAttrs.length; i < l; i++) {
          var key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1("Extraneous non-props attributes (".concat(extraAttrs.join(", "), ") were passed to component but could not be automatically inherited because component renders fragment or text root nodes."));
        }
        if (eventAttrs.length) {
          warn$1("Extraneous non-emits event listeners (".concat(eventAttrs.join(", "), ') were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.'));
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1("Runtime directive used on component with non-element root node. The directives will not function as intended.");
    }
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1("Component inside <Transition> renders non-element root node that cannot be animated.");
    }
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
var getChildRoot = (vnode) => {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  var setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  var recurse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var singleRoot;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
  var res;
  for (var key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
var filterModelListeners = (attrs, props) => {
  var res = {};
  for (var key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
var isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var {
    props: prevProps,
    children: prevChildren,
    component
  } = prevVNode;
  var {
    props: nextProps,
    children: nextChildren,
    patchFlag
  } = nextVNode;
  var emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      var dynamicProps = nextVNode.dynamicProps;
      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl(_ref4, el) {
  var {
    vnode,
    parent
  } = _ref4;
  while (parent) {
    var root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
var COMPONENTS = "components";
var DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;
  if (instance) {
    var Component = instance.type;
    if (type === COMPONENTS) {
      var selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    var res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (warnMissing && !res) {
      var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement." : "";
      warn$1("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name).concat(extra));
    }
    return res;
  } else {
    warn$1("resolve".concat(capitalize(type.slice(0, -1)), " can only be used in render() or setup()."));
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
var isSuspense = (type) => type.__isSuspense;
var suspenseId = 0;
var SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
};
var Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];
  if (isFunction(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  var {
    p: patch,
    o: {
      createElement
    }
  } = rendererInternals;
  var hiddenContainer = createElement("div", container);
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, _ref5) {
  var {
    p: patch,
    um: unmount,
    o: {
      createElement
    }
  } = _ref5;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var {
    activeBranch,
    pendingBranch,
    isInFallback,
    isHydrating
  } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div", container);
      if (isInFallback) {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        suspense.resolve(true);
      } else {
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        var {
          timeout,
          pendingId
        } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
var hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : false;
  if (!hasWarned) {
    hasWarned = true;
    console[console.info ? "info" : "log"]("<Suspense> is an experimental feature and its API will likely change.");
  }
  var {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: {
      parentNode,
      remove: remove2
    }
  } = rendererInternals;
  var parentSuspenseId;
  var isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  var timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
  {
    assertNumber(timeout, "Suspense timeout");
  }
  var initialAnchor = anchor;
  var suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve() {
      var resume = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }
        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }
      var {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      var delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) !== suspense.hiddenContainer) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      var {
        vnode: vnode2,
        activeBranch,
        parentComponent: parentComponent2,
        container: container2,
        namespace: namespace2
      } = suspense;
      triggerEvent(vnode2, "onFallback");
      var anchor2 = next(activeBranch);
      var mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      var hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        var {
          vnode: vnode2
        } = instance;
        {
          pushWarningContext(vnode2);
        }
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace,
          optimized
        );
        if (placeholder) {
          remove2(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        {
          popWarningContext();
        }
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
      }
      if (suspense.pendingBranch) {
        unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  var suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  var {
    shapeFlag,
    children
  } = vnode;
  var isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  var block;
  if (isFunction(s)) {
    var trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if (isArray(s)) {
    var singleChild = filterSingleRoot(s);
    if (!singleChild && s.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
      warn$1("<Suspense> slots expect a single root node.");
    }
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var {
    vnode,
    parentComponent
  } = suspense;
  var el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  var _a;
  return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
}
var ssrContextKey = Symbol.for("v-scx");
var useSSRContext = () => {
  {
    var ctx = inject(ssrContextKey);
    if (!ctx) {
      warn$1("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.");
    }
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watchPostEffect(effect2, options) {
  return doWatch(effect2, null, extend({}, options, {
    flush: "post"
  }));
}
function watchSyncEffect(effect2, options) {
  return doWatch(effect2, null, extend({}, options, {
    flush: "sync"
  }));
}
var INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature.");
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb) {
  var {
    immediate,
    deep,
    flush,
    once: once2,
    onTrack,
    onTrigger
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OBJ;
  if (cb && once2) {
    var _cb = cb;
    cb = function() {
      _cb(...arguments);
      unwatch();
    };
  }
  if (deep !== void 0 && typeof deep === "number") {
    warn$1('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.');
  }
  if (!cb) {
    if (immediate !== void 0) {
      warn$1('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.');
    }
    if (deep !== void 0) {
      warn$1('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.');
    }
    if (once2 !== void 0) {
      warn$1('watch() "once" option is only respected when using the watch(source, callback, options?) signature.');
    }
  }
  var warnInvalidSource = (s) => {
    warn$1("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  };
  var instance = currentInstance;
  var reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    var baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  var cleanup;
  var onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  var ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [getter(), isMultiSource ? [] : void 0, onCleanup]);
    }
    if (flush === "sync") {
      var ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  var job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      var newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  var scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance) job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  var effect2 = new ReactiveEffect(getter, NOOP, scheduler);
  var scope = getCurrentScope();
  var unwatch = () => {
    effect2.stop();
    if (scope) {
      remove(scope.effects, effect2);
    }
  };
  {
    effect2.onTrack = onTrack;
    effect2.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
  } else {
    effect2.run();
  }
  if (ssrCleanup) ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  var cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  var reset = setCurrentInstance(this);
  var res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  var segments = path.split(".");
  return () => {
    var cur = ctx;
    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, depth) {
  var currentDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var seen = arguments.length > 3 ? arguments[3] : void 0;
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value;
    }
    currentDepth++;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, depth, currentDepth, seen);
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], depth, currentDepth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, currentDepth, seen);
    });
  } else if (isPlainObject(value)) {
    for (var key in value) {
      traverse(value[key], depth, currentDepth, seen);
    }
  }
  return value;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    warn$1("withDirectives can only be used inside render functions.");
    return vnode;
  }
  var instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);
  for (var i = 0; i < directives.length; i++) {
    var [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;
  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    var hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, vnode, prevVNode]);
      resetTracking();
    }
  }
}
var leaveCbKey = Symbol("_leaveCb");
var enterCbKey = Symbol("_enterCb");
function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: BaseTransitionPropsValidators,
  setup(props, _ref6) {
    var {
      slots
    } = _ref6;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    return () => {
      var children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      var child = children[0];
      if (children.length > 1) {
        var hasFound = false;
        for (var c of children) {
          if (c.type !== Comment) {
            if (hasFound) {
              warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            child = c;
            hasFound = true;
          }
        }
      }
      var rawProps = toRaw(props);
      var {
        mode
      } = rawProps;
      if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn$1("invalid <transition> mode: ".concat(mode));
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      var innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.effect.dirty = true;
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  var {
    leavingVNodes
  } = state;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  var {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);
  var callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  var callAsyncHook = (hook, args) => {
    var done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  var hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      var hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      var leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      var called = false;
      var done = el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      var key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      var called = false;
      var done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    vnode.component ? vnode.component.subTree : vnode.children ? vnode.children[0] : void 0
  ) : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var parentKey = arguments.length > 2 ? arguments[2] : void 0;
  var ret = [];
  var keyedFragmentCount = 0;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key
      }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (var _i = 0; _i < ret.length; _i++) {
      ret[_i].patchFlag = -2;
    }
  }
  return ret;
}
// @__NO_SIDE_EFFECTS__
function defineComponent$1(options, extraOptions) {
  return isFunction(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({
      name: options.name
    }, extraOptions, {
      setup: options
    }))()
  ) : options;
}
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = {
      loader: source
    };
  }
  var {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;
  var retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  var load = () => {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject2) => {
          var userRetry = () => resolve2(retry());
          var userFail = () => reject2(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (!comp) {
        warn$1("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.");
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent$1({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      var instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      var onError2 = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError2(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      var loaded = ref(false);
      var error = ref();
      var delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError2(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.effect.dirty = true;
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError2(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  var {
    ref: ref2,
    props,
    children,
    ce
  } = parent.vnode;
  var vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, _ref7) {
    var {
      slots
    } = _ref7;
    var instance = getCurrentInstance();
    var sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        var children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    var cache = /* @__PURE__ */ new Map();
    var keys = /* @__PURE__ */ new Set();
    var current = null;
    {
      instance.__v_cache = cache;
    }
    var parentSuspense = instance.suspense;
    var {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: {
          createElement
        }
      }
    } = sharedContext;
    var storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      var instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          invokeArrayFns(instance2.a);
        }
        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
      {
        devtoolsComponentAdded(instance2);
      }
    };
    sharedContext.deactivate = (vnode) => {
      var instance2 = vnode.component;
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          invokeArrayFns(instance2.da);
        }
        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
      {
        devtoolsComponentAdded(instance2);
      }
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        var name = getComponentName(vnode.type);
        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      var cached = cache.get(key);
      if (!current || !isSameVNodeType(cached, current)) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      (_ref8) => {
        var [include, exclude] = _ref8;
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      {
        flush: "post",
        deep: true
      }
    );
    var pendingCacheKey = null;
    var cacheSubtree = () => {
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        var {
          subTree,
          suspense
        } = instance;
        var vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return null;
      }
      var children = slots.default();
      var rawVNode = children[0];
      if (children.length > 1) {
        {
          warn$1("KeepAlive should contain exactly one component child.");
        }
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type;
      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var {
        include,
        exclude,
        max
      } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }
      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
var KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if (isArray(pattern)) {
    return pattern.some((p) => matches(p, name));
  } else if (isString(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : currentInstance;
  var wrappedHook = hook.__wdc || (hook.__wdc = () => {
    var current2 = target;
    while (current2) {
      if (current2.isDeactivated) {
        return;
      }
      current2 = current2.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    var current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  var injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (target) {
    if (isRootHook(type) && target !== target.root) {
      target = target.root;
      if (isRootImmediateHook(type)) {
        var proxy2 = target.proxy;
        callWithAsyncErrorHandling(hook.bind(proxy2), target, type, ON_LOAD === type ? [proxy2.$page.options] : []);
      }
    }
    var hooks = target[type] || (target[type] = []);
    var wrappedHook = hook.__weh || (hook.__weh = function() {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      var reset = setCurrentInstance(target);
      for (var _len7 = arguments.length, args = new Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
        args[_key8] = arguments[_key8];
      }
      var res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    var apiName = toHandlerKey((ErrorTypeStrings$1[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
    warn$1("".concat(apiName, " is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().") + " If you are using async setup(), make sure to register lifecycle hooks before the first await statement.");
  }
}
var createHook = (lifecycle) => function(hook) {
  var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentInstance;
  return (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, function() {
      return hook(...arguments);
    }, target)
  );
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentInstance;
  injectHook("ec", hook, target);
}
function renderList(source, renderItem, cache, index) {
  var ret;
  var cached = cache && cache[index];
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1("The v-for range expect an integer value but got ".concat(source, "."));
    }
    ret = new Array(source);
    for (var _i2 = 0; _i2 < source; _i2++) {
      ret[_i2] = renderItem(_i2 + 1, _i2, void 0, cached && cached[_i2]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i2) => renderItem(item, i2, void 0, cached && cached[i2]));
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);
      for (var _i3 = 0, _l = keys.length; _i3 < _l; _i3++) {
        var key = keys[_i3];
        ret[_i3] = renderItem(source[key], key, _i3, cached && cached[_i3]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  var _loop = function(i2) {
    var slot = dynamicSlots[i2];
    if (isArray(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? function() {
        var res = slot.fn(...arguments);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  };
  for (var i = 0; i < dynamicSlots.length; i++) {
    _loop(i);
  }
  return slots;
}
function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var fallback = arguments.length > 3 ? arguments[3] : void 0;
  var noSlotted = arguments.length > 4 ? arguments[4] : void 0;
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default") props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  var slot = slots[name];
  if (slot && slot.length > 1) {
    warn$1("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.");
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent && validSlotContent.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  var ret = {};
  if (!isObject(obj)) {
    warn$1("v-on with no argument expects an object value.");
    return ret;
  }
  for (var key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? "on:".concat(key) : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
var getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
var publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    // fixed by xxxxxx
    $page: (i) => i.page,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      i.effect.dirty = true;
      queueJob(i.update);
    }),
    // fixed by xxxxxx
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),
    $nextTick: (i) => i.n || (i.n = (fn) => nextTick.bind(i.proxy)(fn, i)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
publicPropertiesMap.$callMethod = (i) => {
  return function(methodName) {
    var proxy2 = getExposeProxy(i) || i.proxy;
    if (!proxy2) {
      return null;
    }
    var method = proxy2[methodName];
    if (method) {
      for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key9 = 1; _key9 < _len8; _key9++) {
        args[_key9 - 1] = arguments[_key9];
      }
      return method(...args);
    }
    console.error("method ".concat(methodName, " not found"));
    return null;
  };
};
var isReservedPrefix = (key) => key === "_" || key === "$";
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
  get(_ref9, key) {
    var {
      _: instance
    } = _ref9;
    var {
      ctx,
      setupState,
      data,
      props,
      accessCache,
      type,
      appContext
    } = instance;
    if (key === "__isVue") {
      return true;
    }
    var normalizedProps;
    if (key[0] !== "$") {
      var n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        markAttrsAccessed();
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1("Property ".concat(JSON.stringify(key), ' must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.'));
      } else if (instance === currentRenderingInstance) {
        warn$1("Property ".concat(JSON.stringify(key), " was accessed during render but is not defined on instance."));
      }
    }
  },
  set(_ref10, key, value) {
    var {
      _: instance
    } = _ref10;
    var {
      data,
      setupState,
      ctx
    } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1('Cannot mutate <script setup> binding "'.concat(key, '" from Options API.'));
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1('Attempting to mutate prop "'.concat(key, '". Props are readonly.'));
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1('Attempting to mutate public property "'.concat(key, '". Properties starting with $ are reserved and readonly.'));
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has(_ref11, key) {
    var {
      _: {
        data,
        setupState,
        accessCache,
        ctx,
        appContext,
        propsOptions
      }
    } = _ref11;
    var normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}
var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    var has2 = key[0] !== "_" && !isGloballyAllowed(key);
    if (!has2 && PublicInstanceProxyHandlers.has(_, key)) {
      warn$1("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }
    return has2;
  }
});
function createDevRenderContext(instance) {
  var target = {};
  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  var {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  var {
    ctx,
    setupState
  } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1("setup() return property ".concat(JSON.stringify(key), ' should not start with "$" or "_" which are reserved prefixes for Vue internals.'));
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
var warnRuntimeUsage = (method) => warn$1("".concat(method, "() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect."));
function defineProps() {
  {
    warnRuntimeUsage("defineProps");
  }
  return null;
}
function defineEmits() {
  {
    warnRuntimeUsage("defineEmits");
  }
  return null;
}
function defineExpose(exposed) {
  {
    warnRuntimeUsage("defineExpose");
  }
}
function defineOptions(options) {
  {
    warnRuntimeUsage("defineOptions");
  }
}
function defineSlots() {
  {
    warnRuntimeUsage("defineSlots");
  }
  return null;
}
function defineModel() {
  {
    warnRuntimeUsage("defineModel");
  }
}
function withDefaults(props, defaults) {
  {
    warnRuntimeUsage("withDefaults");
  }
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  var i = getCurrentInstance();
  if (!i) {
    warn$1("useContext() called without active instance.");
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
  var props = normalizePropsOrEmits(raw);
  for (var key in defaults) {
    if (key.startsWith("__skip")) continue;
    var opt = props[key];
    if (opt) {
      if (isArray(opt) || isFunction(opt)) {
        opt = props[key] = {
          type: opt,
          default: defaults[key]
        };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = {
        default: defaults[key]
      };
    } else {
      warn$1('props default key "'.concat(key, '" has no corresponding declaration.'));
    }
    if (opt && defaults["__skip_".concat(key)]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if (isArray(a) && isArray(b)) return a.concat(b);
  return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  var ret = {};
  var _loop2 = function(key2) {
    if (!excludedKeys.includes(key2)) {
      Object.defineProperty(ret, key2, {
        enumerable: true,
        get: () => props[key2]
      });
    }
  };
  for (var key in props) {
    _loop2(key);
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  var ctx = getCurrentInstance();
  if (!ctx) {
    warn$1("withAsyncContext called without active current instance. This is likely a bug.");
  }
  var awaitable = getAwaitable();
  unsetCurrentInstance();
  if (isPromise(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}
function createDuplicateChecker() {
  var cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1("".concat(type, ' property "').concat(key, '" is already defined in ').concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}
var shouldCacheAccess = true;
function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  var {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  var checkDuplicateProperties = createDuplicateChecker();
  {
    var [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (var _key10 in methods) {
      var methodHandler = methods[_key10];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, _key10, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", _key10);
        }
      } else {
        warn$1('Method "'.concat(_key10, '" has type "').concat(typeof methodHandler, '" in the component definition. Did you reference the function correctly?'));
      }
    }
  }
  if (dataOptions) {
    (function() {
      if (!isFunction(dataOptions)) {
        warn$1("The data option must be a function. Plain object usage is no longer supported.");
      }
      var data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.");
      }
      if (!isObject(data)) {
        warn$1("data() should return an object.");
      } else {
        instance.data = reactive(data);
        {
          var _loop3 = function(_key112) {
            checkDuplicateProperties("Data", _key112);
            if (!isReservedPrefix(_key112[0])) {
              Object.defineProperty(ctx, _key112, {
                configurable: true,
                enumerable: true,
                get: () => data[_key112],
                set: NOOP
              });
            }
          };
          for (var _key11 in data) {
            _loop3(_key11);
          }
        }
      }
    })();
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    var _loop4 = function(_key122) {
      var opt = computedOptions[_key122];
      var get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1('Computed property "'.concat(_key122, '" has no getter.'));
      }
      var set3 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1('Write operation failed: computed property "'.concat(_key122, '" is readonly.'));
      };
      var c = computed({
        get: get2,
        set: set3
      });
      Object.defineProperty(ctx, _key122, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", _key122);
      }
    };
    for (var _key12 in computedOptions) {
      _loop4(_key12);
    }
  }
  if (watchOptions) {
    for (var _key13 in watchOptions) {
      createWatcher(watchOptions[_key13], ctx, publicThis, _key13);
    }
  }
  if (provideOptions) {
    var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key2) => {
      provide(key2, provides[key2]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key2) => {
        Object.defineProperty(exposed, key2, {
          get: () => publicThis[key2],
          set: (val) => publicThis[key2] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  var customApplyOptions = instance.appContext.config.globalProperties.$applyOptions;
  if (customApplyOptions) {
    customApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NOOP;
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  var _loop5 = function(key2) {
    var opt = injectOptions[key2];
    var injected = void 0;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key2, opt.default, true);
      } else {
        injected = inject(opt.from || key2);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key2] = injected;
    }
    {
      checkDuplicateProperties("Inject", key2);
    }
  };
  for (var key in injectOptions) {
    _loop5(key);
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    var handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1('Invalid watch handler specified by key "'.concat(raw, '"'), handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      var _handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(_handler)) {
        watch(getter, _handler, raw);
      } else {
        warn$1('Invalid watch handler specified by key "'.concat(raw.handler, '"'), _handler);
      }
    }
  } else {
    warn$1('Invalid watch option: "'.concat(key, '"'), raw);
  }
}
function resolveMergedOptions(instance) {
  var base = instance.type;
  var {
    mixins,
    extends: extendsOptions
  } = base;
  var {
    mixins: globalMixins,
    optionsCache: cache,
    config: {
      optionMergeStrategies
    }
  } = instance.appContext;
  var cached = cache.get(base);
  var resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var {
    mixins,
    extends: extendsOptions
  } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (var key in from) {
    if (asMixin && key === "expose") {
      warn$1('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    var res = {};
    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp3(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1("root props passed to app.mount() must be an object.");
      rootProps = null;
    }
    var context = createAppContext();
    var installedPlugins = /* @__PURE__ */ new WeakSet();
    var isMounted = false;
    var app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1("app.config cannot be replaced. Modify individual options instead.");
        }
      },
      use(plugin2) {
        for (var _len9 = arguments.length, options = new Array(_len9 > 1 ? _len9 - 1 : 0), _key14 = 1; _key14 < _len9; _key14++) {
          options[_key14 - 1] = arguments[_key14];
        }
        if (installedPlugins.has(plugin2)) {
          warn$1("Plugin has already been applied to target app.");
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1('A plugin must either be a function or an object with an "install" function.');
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? ": ".concat(mixin.name) : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1('Component "'.concat(name, '" has already been registered in target app.'));
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1('Directive "'.concat(name, '" has already been registered in target app.'));
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          }
          var vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          {
            context.reload = () => {
              render2(cloneVNode(vnode), rootContainer, namespace);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          app._instance = vnode.component;
          {
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else {
          warn$1("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else {
          warn$1("Cannot unmount an app that is not mounted.");
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1('App already provides property with key "'.concat(String(key), '". It will be overwritten with the new value.'));
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        var lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
var currentApp = null;
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides;
    var parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    var provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1('injection "'.concat(String(key), '" not found.'));
    }
  } else {
    warn$1("inject() can only be used inside setup() or functional components.");
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
var __X_STYLE_ISOLATION__ = false;
function enableStyleIsolation() {
  __X_STYLE_ISOLATION__ = true;
}
var UniSharedDataComponentStyleIsolation = {
  "Isolated": 0,
  "0": "Isolated",
  "App": 1,
  "1": "App",
  "AppAndPage": 2,
  "2": "AppAndPage"
};
function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var props = {};
  var attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var {
    props,
    attrs,
    vnode: {
      patchFlag
    }
  } = instance;
  var rawCurrentProps = toRaw(props);
  var [options] = instance.propsOptions;
  var hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      var propsToUpdate = instance.vnode.dynamicProps;
      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        var value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = normalizeInheritAttrsValue(instance, key, value);
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = normalizeInheritAttrsValue(instance, key, value);
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    var kebabKey;
    for (var _key15 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, _key15) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(_key15)) === _key15 || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[_key15] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[_key15] = resolvePropValue(options, rawCurrentProps, _key15, void 0, instance, true);
          }
        } else {
          delete props[_key15];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (var _key16 in attrs) {
        if (!rawProps || !hasOwn(rawProps, _key16) && true) {
          delete attrs[_key16];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  var [options, needCastKeys] = instance.propsOptions;
  var hasAttrsChanged = false;
  var rawCastValues;
  if (rawProps) {
    for (var key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      var value = rawProps[key];
      var camelKey = void 0;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          if (__X_STYLE_ISOLATION__) {
            props[camelKey] = resolveExternalClassesPropValue(camelKey, value, options, false);
          } else {
            props[camelKey] = value;
          }
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = normalizeInheritAttrsValue(instance, key, value);
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    var rawCurrentProps = toRaw(props);
    var castValues = rawCastValues || EMPTY_OBJ;
    for (var i = 0; i < needCastKeys.length; i++) {
      var _key17 = needCastKeys[i];
      props[_key17] = resolvePropValue(options, rawCurrentProps, _key17, castValues[_key17], instance, !hasOwn(castValues, _key17));
    }
  }
  return hasAttrsChanged;
}
function toExternalClasses(classes) {
  var trimmed = classes.trim();
  return trimmed ? trimmed.split(/\s+/).map((item) => "^" + item) : [];
}
function normalizeExternalClasses(classes) {
  return toExternalClasses(normalizeClass2(classes));
}
function normalizeInheritAttrsValue(instance, key, value) {
  if (__X_STYLE_ISOLATION__) {
    if (key == "class" || key == "hover-class" || key == "placeholder-class") {
      return toExternalClasses(value).join(" ");
    }
  }
  return value;
}
function resolveExternalClassesPropValue(key, value, options, isAbsent) {
  if (
    // 只有外部传入的 externalClasses 才走这里，没有传入，但有默认值的不应该处理，比如button组件内部hover-class有默认值button-hover
    !isAbsent
  ) {
    var opt = options[key];
    if (opt && opt[
      2
      /* BooleanFlags.externalClasses */
    ]) {
      return normalizeExternalClasses(value);
    }
  }
  return value;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var result = _resolvePropValue(options, props, key, value, instance, isAbsent);
  if (__X_STYLE_ISOLATION__) {
    return resolveExternalClassesPropValue(key, result, options, isAbsent);
  }
  return result;
}
function _resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];
  if (opt != null) {
    var hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      var defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        var {
          propsDefaults
        } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          var reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          reset();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function initExternalClassesOptions(comp) {
  if (isArray(comp.externalClasses)) {
    var cached = comp.__externalClassesOptions;
    if (!cached) {
      comp.__externalClassesOptions = comp.externalClasses.map((className) => camelize(className));
    }
  }
}
function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  var raw = comp.props;
  var normalized = {};
  var needCastKeys = [];
  var hasExtends = false;
  if (!isFunction(comp)) {
    var extendProps = (raw2) => {
      hasExtends = true;
      var [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1("props must be strings when using array syntax.", raw[i]);
      }
      var normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1("invalid props options", raw);
    }
    for (var key in raw) {
      var _normalizedKey = camelize(key);
      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = isArray(opt) || isFunction(opt) ? {
          type: opt
        } : extend({}, opt);
        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (__X_STYLE_ISOLATION__ && comp.__externalClassesOptions && comp.__externalClassesOptions.includes(key)) {
            prop[
              2
              /* externalClasses */
            ] = true;
            prop.skipCheck = true;
          }
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }
  var res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else {
    warn$1('Invalid prop name: "'.concat(key, '" is a reserved property.'));
  }
  return false;
}
function getType2(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    var name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a, b) {
  return getType2(a) === getType2(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  var resolvedValues = toRaw(props);
  var options = instance.propsOptions[0];
  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, shallowReadonly(resolvedValues), !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  var {
    type,
    required,
    validator,
    skipCheck,
    default: defaultValue
  } = prop;
  if (defaultValue == null && required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    var isValid = false;
    var types = isArray(type) ? type : [type];
    var expectedTypes = [];
    for (var i = 0; i < types.length && !isValid; i++) {
      var {
        valid,
        expectedType
      } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
var isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  var valid;
  var expectedType = getType2(type);
  if (isSimpleType(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return 'Prop type [] for prop "'.concat(name, `" won't match anything. Did you mean to use type Array instead?`);
  }
  var message = 'Invalid prop: type check failed for prop "'.concat(name, '". Expected ').concat(expectedTypes.map(capitalize).join(" | "));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }
  message += ", got ".concat(receivedType, " ");
  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return '"'.concat(value, '"');
  } else if (type === "Number") {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
function isExplicable(type) {
  var explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean() {
  for (var _len10 = arguments.length, args = new Array(_len10), _key18 = 0; _key18 < _len10; _key18++) {
    args[_key18] = arguments[_key18];
  }
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
var isInternalKey = (key) => key[0] === "_" || key === "$stable";
var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  var normalized = withCtx(function() {
    if (currentInstance && (!ctx || ctx.root === currentInstance.root)) {
      warn$1('Slot "'.concat(key, '" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.'));
    }
    return normalizeSlotValue(rawSlot(...arguments));
  }, ctx);
  normalized._c = false;
  return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
  var ctx = rawSlots._ctx;
  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function() {
        {
          warn$1('Non-function value encountered for slot "'.concat(key, '". Prefer function slots for better performance.'));
        }
        var normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      })();
    }
  }
};
var normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1("Non-function value encountered for default slot. Prefer function slots for better performance.");
  }
  var normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
var initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    var type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
var updateSlots = (instance, children, optimized) => {
  var {
    vnode,
    slots
  } = instance;
  var needDeletionCheck = true;
  var deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    var type = children._;
    if (type) {
      if (isHmrUpdating) {
        extend(slots, children);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  }
  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  var refValue = vnode.shapeFlag & 4 && !vnode.component.type.rootElement ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var {
    i: owner,
    r: ref2
  } = rawRef;
  if (!owner) {
    warn$1("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    var _isString = isString(ref2);
    var _isRef = isRef(ref2);
    if (_isString || _isRef) {
      var doSet = () => {
        if (rawRef.f) {
          var existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else {
          warn$1("Invalid template ref type:", ref2, "(".concat(typeof ref2, ")"));
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else {
      warn$1("Invalid template ref type:", ref2, "(".concat(typeof ref2, ")"));
    }
  }
}
var hasMismatch = false;
var isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
var isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
var getContainerType = (container) => {
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
var isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  var {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  var hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      warn$1("Attempting to hydrate existing markup but container is empty. Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error("Hydration completed but contains mismatches.");
    }
  };
  var hydrateNode = function(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === "[";
    var onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    var {
      type,
      ref: ref2,
      shapeFlag,
      patchFlag
    } = vnode;
    var domType = node.nodeType;
    vnode.el = node;
    {
      if (!("__vnode" in node)) {
        Object.defineProperty(node, "__vnode", {
          value: vnode,
          enumerable: false
        });
      }
      if (!("__vueParentComponent" in node)) {
        Object.defineProperty(node, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
    }
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    var nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn$1("Hydration text mismatch in", node.parentNode, "\n  - rendered on server: ".concat(JSON.stringify(node.data), "\n  - expected on client: ").concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          var needToAdoptContent = !vnode.children.length;
          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          var container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
          if (isAsyncWrapper(vnode)) {
            var subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else {
          warn$1("Invalid HostVNode type:", type, "(".concat(typeof type, ")"));
        }
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  var hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    var {
      type,
      props,
      patchFlag,
      shapeFlag,
      dirs,
      transition
    } = vnode;
    var forcePatch = type === "input" || type === "option";
    {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      var needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        var content = el.content.firstChild;
        if (needCallTransitionHooks) {
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        var _hasWarned = false;
        while (next) {
          hasMismatch = true;
          if (!_hasWarned) {
            warn$1("Hydration children mismatch on", el, "\nServer rendered element contains more child nodes than client vdom.");
            _hasWarned = true;
          }
          var cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          warn$1("Hydration text content mismatch on", el, "\n  - rendered on server: ".concat(el.textContent, "\n  - expected on client: ").concat(vnode.children));
          el.textContent = vnode.children;
        }
      }
      if (props) {
        {
          for (var key in props) {
            if (propHasMismatch(el, key, props[key], vnode, parentComponent)) {
              hasMismatch = true;
            }
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
            key[0] === ".") {
              patchProp2(el, key, null, props[key], void 0, void 0, parentComponent);
            }
          }
        }
      }
      var vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  var hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned2 = false;
    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if (!hasWarned2) {
          warn$1("Hydration children mismatch on", container, "\nServer rendered element contains fewer child nodes than client vdom.");
          hasWarned2 = true;
        }
        patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
      }
    }
    return node;
  };
  var hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    var {
      slotScopeIds: fragmentSlotScopeIds
    } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };
  var handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    warn$1("Hydration node mismatch:\n- rendered on server:", node, node.nodeType === 3 ? "(text)" : isComment(node) && node.data === "[" ? "(start of fragment)" : "", "\n- expected on client:", vnode.type);
    vnode.el = null;
    if (isFragment) {
      var end = locateClosingAnchor(node);
      while (true) {
        var next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    var next = nextSibling(node);
    var container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
    return next;
  };
  var locateClosingAnchor = function(node) {
    var open = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "[";
    var close = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "]";
    var match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  var replaceNode = (newNode, oldNode, parentComponent) => {
    var parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    var parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  var isTemplateNode = (node) => {
    return node.nodeType === 1 && node.tagName.toLowerCase() === "template";
  };
  return [hydrate, hydrateNode];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
  var _a;
  var mismatchType;
  var mismatchKey;
  var actual;
  var expected;
  if (key === "class") {
    actual = el.getAttribute("class");
    expected = normalizeClass(clientValue);
    if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
      mismatchType = mismatchKey = "class";
    }
  } else if (key === "style") {
    actual = el.getAttribute("style");
    expected = isString(clientValue) ? clientValue : stringifyStyle(normalizeStyle(clientValue));
    var actualMap = toStyleMap(actual);
    var expectedMap = toStyleMap(expected);
    if (vnode.dirs) {
      for (var {
        dir,
        value
      } of vnode.dirs) {
        if (dir.name === "show" && !value) {
          expectedMap.set("display", "none");
        }
      }
    }
    var root = instance == null ? void 0 : instance.subTree;
    if (vnode === root || (root == null ? void 0 : root.type) === Fragment && root.children.includes(vnode)) {
      var cssVars = (_a = instance == null ? void 0 : instance.getCssVars) == null ? void 0 : _a.call(instance);
      for (var key2 in cssVars) {
        expectedMap.set("--".concat(key2), String(cssVars[key2]));
      }
    }
    if (!isMapEqual(actualMap, expectedMap)) {
      mismatchType = mismatchKey = "style";
    }
  } else if (el instanceof SVGElement && isKnownSvgAttr(key) || el instanceof HTMLElement && (isBooleanAttr(key) || isKnownHtmlAttr(key))) {
    if (isBooleanAttr(key)) {
      actual = el.hasAttribute(key);
      expected = includeBooleanAttr(clientValue);
    } else if (clientValue == null) {
      actual = el.hasAttribute(key);
      expected = false;
    } else {
      if (el.hasAttribute(key)) {
        actual = el.getAttribute(key);
      } else if (key === "value" && el.tagName === "TEXTAREA") {
        actual = el.value;
      } else {
        actual = false;
      }
      expected = isRenderableAttrValue(clientValue) ? String(clientValue) : false;
    }
    if (actual !== expected) {
      mismatchType = "attribute";
      mismatchKey = key;
    }
  }
  if (mismatchType) {
    var format = (v) => v === false ? "(not rendered)" : "".concat(mismatchKey, '="').concat(v, '"');
    var preSegment = "Hydration ".concat(mismatchType, " mismatch on");
    var postSegment = "\n  - rendered on server: ".concat(format(actual), "\n  - expected on client: ").concat(format(expected), "\n  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.\n  You should fix the source of the mismatch.");
    {
      warn$1(preSegment, el, postSegment);
    }
    return true;
  }
  return false;
}
function toClassSet(str) {
  return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (var s of a) {
    if (!b.has(s)) {
      return false;
    }
  }
  return true;
}
function toStyleMap(str) {
  var styleMap = /* @__PURE__ */ new Map();
  for (var item of str.split(";")) {
    var [key, value] = item.split(":");
    key = key == null ? void 0 : key.trim();
    value = value == null ? void 0 : value.trim();
    if (key && value) {
      styleMap.set(key, value);
    }
  }
  return styleMap;
}
function isMapEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (var [key, value] of a) {
    if (value !== b.get(key)) {
      return false;
    }
  }
  return true;
}
var supported;
var perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  var needWarn = [];
  if (needWarn.length) {
    var multi = needWarn.length > 1;
    console.warn("Feature flag".concat(multi ? "s" : "", " ").concat(needWarn.join(", "), " ").concat(multi ? "are" : "is", " not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.\n\nFor more details, see https://link.vuejs.org/feature-flags."));
  }
}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  var target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  var {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    forcePatchProp: hostForcePatchProp,
    // fixed by xxxxxx
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  var patch = function(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
    var namespace = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : void 0;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : isHmrUpdating ? false : !!n2.dynamicChildren;
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    var {
      type,
      ref: ref2,
      shapeFlag
    } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else {
          warn$1("Invalid VNode type:", type, "(".concat(typeof type, ")"));
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  var processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children, container),
        // fixed by xxxxxx
        container,
        anchor
      );
    } else {
      var el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  var processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || "", container),
        // fixed by xxxxxx
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  var mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
  };
  var patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  var moveStaticNode = (_ref12, container, nextSibling) => {
    var {
      el,
      anchor
    } = _ref12;
    var next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  var removeStaticNode = (_ref13) => {
    var {
      el,
      anchor
    } = _ref13;
    var next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  var processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  var mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    var el;
    var vnodeHook;
    var {
      props,
      shapeFlag,
      transition,
      dirs
    } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      // fixed by xxxxxx
      container
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (var key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren,
            // fixed by xxxxxx
            vnode.hostInstance
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(
          el,
          "value",
          null,
          props.value,
          namespace,
          [],
          parentComponent,
          null,
          void 0,
          // fixed by xxxxxx
          vnode.hostInstance
        );
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    var needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  var setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      var subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  var mountChildren = function(children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  var patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    var el = n2.el = n1.el;
    var {
      patchFlag,
      dynamicChildren,
      dirs
    } = n2;
    patchFlag |= n1.patchFlag & 16;
    var oldProps = n1.props || EMPTY_OBJ;
    var newProps = n2.props || EMPTY_OBJ;
    var vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
      {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(
              el,
              "class",
              null,
              newProps.class,
              namespace,
              [],
              parentComponent,
              null,
              void 0,
              // fixed by xxxxxx
              n2.hostInstance
            );
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(
            el,
            "style",
            oldProps.style,
            newProps.style,
            namespace,
            [],
            parentComponent,
            null,
            void 0,
            // fixed by xxxxxx
            n2.hostInstance
          );
        }
        if (patchFlag & 8) {
          var propsToUpdate = n2.dynamicProps;
          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key];
            if (next !== prev || // key === 'value' || // fixed by xxxxxx
            hostForcePatchProp && hostForcePatchProp(el, key)) {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                namespace,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren,
                // fixed by xxxxxx
                n2.hostInstance
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  var patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i];
      var container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
    }
  };
  var patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (var key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren,
              // fixed by xxxxxx
              vnode.hostInstance
            );
          }
        }
      }
      for (var _key19 in newProps) {
        if (isReservedProp(_key19)) continue;
        var next = newProps[_key19];
        var prev = oldProps[_key19];
        if (next !== prev && _key19 !== "value" || hostForcePatchProp && hostForcePatchProp(el, _key19)) {
          hostPatchProp(
            el,
            _key19,
            prev,
            next,
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren,
            // fixed by xxxxxx
            vnode.hostInstance
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(
          el,
          "value",
          oldProps.value,
          newProps.value,
          namespace,
          [],
          parentComponent,
          null,
          void 0,
          // fixed by xxxxxx
          vnode.hostInstance
        );
      }
    }
  };
  var processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("", container, true);
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("", container, true);
    var {
      patchFlag,
      dynamicChildren,
      slotScopeIds: fragmentSlotScopeIds
    } = n2;
    if (
      // #5523 dev root fragment may inherit directives
      isHmrUpdating || patchFlag & 2048
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
        {
          traverseStaticChildren(n1, n2);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      }
    }
  };
  var processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  var mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      {
        startMeasure(instance, "init");
      }
      setupComponent(instance);
      {
        endMeasure(instance, "init");
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
    }
    {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };
  var updateComponent = (n1, n2, optimized) => {
    var instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.effect.dirty = true;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  var setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    var componentUpdateFn = () => {
      if (!instance.isMounted) {
        var vnodeHook;
        var {
          el,
          props
        } = initialVNode;
        var {
          bm,
          m,
          parent
        } = instance;
        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          var hydrateSubTree = () => {
            {
              startMeasure(instance, "render");
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, "render");
            }
            {
              startMeasure(instance, "hydrate");
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, "hydrate");
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          {
            startMeasure(instance, "render");
          }
          var subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, "render");
          }
          {
            startMeasure(instance, "patch");
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
          {
            endMeasure(instance, "patch");
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        var {
          next,
          bu,
          u,
          parent: _parent,
          vnode
        } = instance;
        {
          var nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        var originNext = next;
        var _vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        }
        toggleRecurse(instance, true);
        {
          startMeasure(instance, "render");
        }
        var nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, "render");
        }
        var prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, "patch");
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        {
          endMeasure(instance, "patch");
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(_vnodeHook, _parent, next, vnode), parentSuspense);
        }
        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    };
    var effect2 = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      NOOP,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    var update = instance.update = () => {
      if (effect2.dirty) {
        effect2.run();
      }
    };
    update.id = instance.uid;
    toggleRecurse(instance, true);
    {
      effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  var updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  var patchChildren = function(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var {
      patchFlag,
      shapeFlag
    } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      }
    }
  };
  var patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;
    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    }
  };
  var patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1;
    var e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      var _n = c1[e1];
      var _n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(_n, _n2)) {
        patch(_n, _n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      var s1 = i;
      var s2 = i;
      var keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false;
      var maxNewIndexSoFar = 0;
      var newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) {
        newIndexToOldIndexMap[i] = 0;
      }
      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        var newIndex = void 0;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          patched++;
        }
      }
      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];
        var _anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, _nextChild, container, _anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  var move = function(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    var {
      el,
      type,
      transition,
      children,
      shapeFlag
    } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    var needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        var {
          leave,
          delayLeave,
          afterLeave
        } = transition;
        var remove22 = () => hostInsert(el, container, anchor);
        var performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  var unmount = function(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    var shouldInvokeDirs = shapeFlag & 1 && dirs;
    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    var vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  var remove2 = (vnode) => {
    var {
      type,
      el,
      anchor,
      transition
    } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    var performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      var {
        leave,
        delayLeave
      } = transition;
      var performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  var removeFragment = (cur, end) => {
    var next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  var unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    var {
      bum,
      scope,
      update,
      subTree,
      um
    } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  var unmountChildren = function(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  var getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  var isFlushing2 = false;
  var render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, namespace);
    }
    if (!isFlushing2) {
      isFlushing2 = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing2 = false;
    }
    container._vnode = vnode;
  };
  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function resolveChildrenNamespace(_ref14, currentNamespace) {
  var {
    type,
    props
  } = _ref14;
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse(_ref15, allowed) {
  var {
    effect: effect2,
    update
  } = _ref15;
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      var c1 = ch1[i];
      var c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow) traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;
  for (i = 0; i < len; i++) {
    var arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  var subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select, parentComponent) => {
  var targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      warn$1("Current renderer does not support string target for Teleports. (missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector, parentComponent);
      if (!target) {
        warn$1('Failed to locate Teleport target with selector "'.concat(targetSelector, '". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.'));
      }
      return target;
    }
  } else {
    if (!targetSelector && !isTeleportDisabled(props)) {
      warn$1("Invalid Teleport target: ".concat(targetSelector));
    }
    return targetSelector;
  }
};
var TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    var {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: {
        insert,
        querySelector,
        createText,
        createComment
      }
    } = internals;
    var disabled = isTeleportDisabled(n2.props);
    var {
      shapeFlag,
      children,
      dynamicChildren
    } = n2;
    if (isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }
    if (n1 == null) {
      var placeholder = n2.el = // fixed by xxxxxx
      createComment("teleport start", container);
      var mainAnchor = n2.anchor = // fixed by xxxxxx
      createComment("teleport end", container);
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector, parentComponent);
      var targetAnchor = n2.targetAnchor = createText("", container);
      if (target) {
        insert(targetAnchor, target);
        if (namespace === "svg" || isTargetSVG(target)) {
          namespace = "svg";
        } else if (namespace === "mathml" || isTargetMathML(target)) {
          namespace = "mathml";
        }
      } else if (!disabled) {
        warn$1("Invalid Teleport target on mount:", target, "(".concat(typeof target, ")"));
      }
      var mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      var _mainAnchor = n2.anchor = n1.anchor;
      var _target = n2.target = n1.target;
      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;
      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      if (namespace === "svg" || isTargetSVG(_target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(_target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, _mainAnchor, internals, 1);
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector, parentComponent);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          } else {
            warn$1("Invalid Teleport target on update:", _target, "(".concat(typeof _target, ")"));
          }
        } else if (wasDisabled) {
          moveTeleport(n2, _target, _targetAnchor, internals, 1);
        }
      }
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, _ref16, doRemove) {
    var {
      um: unmount,
      o: {
        remove: hostRemove
      }
    } = _ref16;
    var {
      shapeFlag,
      children,
      anchor,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      var shouldRemove = doRemove || !isTeleportDisabled(props);
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, _ref17) {
  var {
    o: {
      insert
    },
    m: move
  } = _ref17;
  var moveType = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 2;
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  var {
    el,
    anchor,
    shapeFlag,
    children,
    props
  } = vnode;
  var isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref18, hydrateChildren) {
  var {
    o: {
      nextSibling,
      parentNode,
      querySelector
    }
  } = _ref18;
  var target = vnode.target = resolveTarget(vnode.props, querySelector, parentComponent);
  if (target) {
    var targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        var targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode) {
  var ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    var node = vnode.children[0].el;
    while (node && node !== vnode.targetAnchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
var Fragment = Symbol.for("v-fgt");
var Text = Symbol.for("v-txt");
var Comment = Symbol.for("v-cmt");
var Static = Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    n1.shapeFlag &= ~256;
    n2.shapeFlag &= ~512;
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
var vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}
var createVNodeWithArgsTransform = function() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key20 = 0; _key20 < _len11; _key20++) {
    args[_key20] = arguments[_key20];
  }
  return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
var InternalObjectKey = "__vInternal";
var normalizeKey = (_ref19) => {
  var {
    key
  } = _ref19;
  return key != null ? key : null;
};
var normalizeRef = (_ref20) => {
  var {
    ref: ref2,
    ref_key,
    ref_for
  } = _ref20;
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? {
    i: currentRenderingInstance,
    r: ref2,
    k: ref_key,
    f: !!ref_for
  } : ref2 : null;
};
function createBaseVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
  var shapeFlag = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : type === Fragment ? 0 : 1;
  var isBlockNode = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false;
  var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false;
  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    // fixed by xxxxxx
    hostInstance: currentRenderingInstance,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  if (type == "button") {
    if (vnode.props == null) vnode.props = {};
    if (!vnode.props["hoverClass"] && !vnode.props["hover-class"]) {
      vnode.props["hoverClass"] = "button-hover";
    }
  }
  return vnode;
}
var createVNode = createVNodeWithArgsTransform;
function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn$1("Invalid vnode type when creating vnode: ".concat(type, "."));
    }
    type = Comment;
  }
  if (isVNode(type)) {
    var cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    var {
      class: klass,
      style
    } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass2(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle2(style);
    }
  }
  var shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var {
    props,
    ref: ref2,
    patchFlag,
    children
  } = vnode;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    // fixed by xxxxxx
    hostInstance: vnode.hostInstance,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ";
  var flag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var asBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  var type = 0;
  var {
    shapeFlag
  } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      var slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      var slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps() {
  var ret = {};
  for (var i = 0; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    for (var key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass2([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle2([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type;
  if (__X_STYLE_ISOLATION__) {
    initExternalClassesOptions(type);
  }
  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    // fixed by xxxxxx 页面的vnode会多一个__page_container__属性，通过它来判断
    // @ts-expect-error
    renderer: (
      // @ts-expect-error
      type.mpType === "app" ? "app" : (
        // @ts-expect-error
        vnode.__page_container__ ? "page" : "component"
      )
    ),
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null,
    $waitNativeRender(fn) {
      var _a, _b;
      var document2 = (_b = (_a = this.proxy) == null ? void 0 : _a.$nativePage) == null ? void 0 : _b.document;
      if (document2) {
        document2.waitNativeRender(fn);
      } else {
        fn();
      }
    }
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (__X_STYLE_ISOLATION__) {
    instance.hostInstance = vnode.hostInstance;
  }
  if (parent) {
    instance.page = parent.root.page;
  }
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
  g3 = getGlobalThis();
  registerGlobalSetter = (key, setter) => {
    var setters;
    if (!(setters = g3[key])) setters = g3[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set3) => set3(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (v) => currentInstance = v);
  setInSSRSetupState = registerGlobalSetter("__VUE_SSR_SETTERS__", (v) => isInSSRComponentSetup = v);
}
var g3;
var registerGlobalSetter;
var setCurrentInstance = (instance) => {
  var prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
var unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, _ref21) {
  var {
    isNativeTag
  } = _ref21;
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  isSSR && setInSSRSetupState(isSSR);
  var {
    props,
    children
  } = instance.vnode;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  var Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      var names = Object.keys(Component.components);
      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      var _names = Object.keys(Component.directives);
      for (var _i4 = 0; _i4 < _names.length; _i4++) {
        validateDirectiveName(_names[_i4]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  var {
    setup
  } = Component;
  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    var reset = setCurrentInstance(instance);
    pauseTracking();
    var setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    reset();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          var name = (_a = Component.name) != null ? _a : "Anonymous";
          warn$1("Component <".concat(name, ">: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered."));
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1("setup() should not return VNodes directly - return a render function instead.");
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1("setup() should return an object. Received: ".concat(setupResult === null ? "null" : typeof setupResult));
  }
  finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
var isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      var template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        {
          startMeasure(instance, "compile");
        }
        var {
          isCustomElement,
          compilerOptions
        } = instance.appContext.config;
        var {
          delimiters,
          compilerOptions: componentCompilerOptions
        } = Component;
        var finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, "compile");
        }
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  {
    var reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (!compile && Component.template) {
      warn$1('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".');
    } else {
      warn$1("Component is missing template or render function.");
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
    get(target, key) {
      markAttrsAccessed();
      track(instance, "get", "$attrs");
      return target[key];
    },
    set() {
      warn$1("setupContext.attrs is readonly.");
      return false;
    },
    deleteProperty() {
      warn$1("setupContext.attrs is readonly.");
      return false;
    }
  }));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  var expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$1("expose() should be called only once per setup().");
      }
      if (exposed != null) {
        var exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1("expose() should be passed a plain object, received ".concat(exposedType, "."));
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return function(event) {
          for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key21 = 1; _key21 < _len12; _key21++) {
            args[_key21 - 1] = arguments[_key21];
          }
          return instance.emit(event, ...args);
        };
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component) {
  var includeInferred = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var name = getComponentName(Component);
  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    var inferFromRegistry = (registry) => {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
  var c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    var i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function useModel(props, name) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OBJ;
  var i = getCurrentInstance();
  if (!i) {
    warn$1("useModel() called without active instance.");
    return ref();
  }
  if (!i.propsOptions[0][name]) {
    warn$1('useModel() called with prop "'.concat(name, '" which is not declared.'));
    return ref();
  }
  var camelizedName = camelize(name);
  var hyphenatedName = hyphenate(name);
  var res = customRef((track2, trigger2) => {
    var localValue;
    watchSyncEffect(() => {
      var propValue = props[name];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger2();
      }
    });
    return {
      get() {
        track2();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        var rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && ("onUpdate:".concat(name) in rawProps || "onUpdate:".concat(camelizedName) in rawProps || "onUpdate:".concat(hyphenatedName) in rawProps)) && hasChanged(value, localValue)) {
          localValue = value;
          trigger2();
        }
        i.emit("update:".concat(name), options.set ? options.set(value) : value);
      }
    };
  });
  var modifierKey = name === "modelValue" ? "modelModifiers" : "".concat(name, "Modifiers");
  res[Symbol.iterator] = () => {
    var i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return {
            value: i2++ ? props[modifierKey] || {} : res,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  };
  return res;
}
function h(type, propsOrChildren, children) {
  var l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  var vueStyle = {
    style: "color:#3ba776"
  };
  var numberStyle = {
    style: "color:#1677ff"
  };
  var stringStyle = {
    style: "color:#f5222d"
  };
  var keywordStyle = {
    style: "color:#eb2f96"
  };
  var formatter = {
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, "VueInstance"];
      } else if (isRef(obj)) {
        return ["div", {}, ["span", vueStyle, genRefFlag(obj)], "<", formatValue2(obj.value), ">"];
      } else if (isReactive(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"], "<", formatValue2(obj), ">".concat(isReadonly(obj) ? " (readonly)" : "")];
      } else if (isReadonly(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"], "<", formatValue2(obj), ">"];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return ["div", {}, ...formatInstance(obj.$)];
      }
    }
  };
  function formatInstance(instance) {
    var blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    var computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    var injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push(["div", {}, ["span", {
      style: keywordStyle.style + ";opacity:0.66"
    }, "$ (internal): "], ["object", {
      object: instance
    }]]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return ["div", {
      style: "line-height:1.25em;margin-bottom:0.6em"
    }, ["div", {
      style: "color:#476582"
    }, type], ["div", {
      style: "padding-left:1.25em"
    }, ...Object.keys(target).map((key) => {
      return ["div", {}, ["span", keywordStyle, key + ": "], formatValue2(target[key], false)];
    })]];
  }
  function formatValue2(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    var Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    var extracted = {};
    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return "ShallowRef";
    }
    if (v.effect) {
      return "ComputedRef";
    }
    return "Ref";
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
function withMemo(memo, render2, cache, index) {
  var cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  var ret = render2();
  ret.memo = memo.slice();
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  var prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (var i = 0; i < prev.length; i++) {
    if (hasChanged(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}
var version = "3.4.21";
var warn = warn$1;
var ErrorTypeStrings = ErrorTypeStrings$1;
var devtools = devtools$1;
var setDevtoolsHook = setDevtoolsHook$1;
var _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode,
  normalizeVNode
};
var ssrUtils = _ssrUtils;
var resolveFilter = null;
var compatUtils = null;
var DeprecationTypes = null;
var NODE_EXT_CLASS_LIST = "classList";
var NODE_EXT_INSTANCE = "instance";
var NODE_EXT_STYLES = "styles";
var NODE_EXT_PARENT_STYLES = "parentStyles";
var NODE_EXT_CLASS_STYLE = "classStyle";
var NODE_EXT_STYLE = "style";
var NODE_EXT_IS_TEXT_NODE = "isTextNode";
var NODE_EXT_CHILD_NODE = "childNode";
var NODE_EXT_PARENT_NODE = "parentNode";
var NODE_EXT_CHILD_NODES = "childNodes";
var RootElementInstanceMap = /* @__PURE__ */ new WeakMap();
var PartElementInstanceMap = /* @__PURE__ */ new WeakMap();
function setNodeExtraData(el, name, value) {
  el.ext.set(name, value);
}
function setRootElementInstance(el, instance) {
  RootElementInstanceMap.set(el, instance);
}
function getRootElementInstance(el) {
  return RootElementInstanceMap.get(el) || null;
}
function getPartElementInstance(el) {
  return PartElementInstanceMap.get(el) || null;
}
function setPartElementInstance(el, instance) {
  PartElementInstanceMap.set(el, instance);
}
function getNodeExtraData(el, name) {
  return el.ext.get(name);
}
function getExtraClassList(el) {
  return getNodeExtraData(el, NODE_EXT_CLASS_LIST);
}
function setExtraClassList(el, classList) {
  setNodeExtraData(el, NODE_EXT_CLASS_LIST, classList);
}
function getExtraInstance(el) {
  return getNodeExtraData(el, NODE_EXT_INSTANCE);
}
function setExtraInstance(el, ins) {
  setNodeExtraData(el, NODE_EXT_INSTANCE, ins);
}
function getExtraStyles(el) {
  return getNodeExtraData(el, NODE_EXT_STYLES);
}
function setExtraStyles(el, styles) {
  setNodeExtraData(el, NODE_EXT_STYLES, styles);
}
function getExtraParentStyles(el) {
  return getNodeExtraData(el, NODE_EXT_PARENT_STYLES);
}
function setExtraParentStyles(el, styles) {
  setNodeExtraData(el, NODE_EXT_PARENT_STYLES, styles);
}
function getExtraClassStyle(el) {
  return getNodeExtraData(el, NODE_EXT_CLASS_STYLE);
}
function setExtraClassStyle(el, classStyle) {
  setNodeExtraData(el, NODE_EXT_CLASS_STYLE, classStyle);
}
function getExtraStyle(el) {
  return getNodeExtraData(el, NODE_EXT_STYLE);
}
function setExtraStyle(el, style) {
  setNodeExtraData(el, NODE_EXT_STYLE, style);
}
function isCommentNode(node) {
  return node.nodeName == "#comment";
}
function isExtraTextNode(el) {
  return getNodeExtraData(el, NODE_EXT_IS_TEXT_NODE) === true;
}
function setExtraIsTextNode(el, isTextNode) {
  setNodeExtraData(el, NODE_EXT_IS_TEXT_NODE, isTextNode);
}
function isTextElement(value) {
  return value instanceof UniTextElement;
}
function getExtraChildNode(el) {
  return getNodeExtraData(el, NODE_EXT_CHILD_NODE);
}
function setExtraChildNode(el, childNode) {
  setNodeExtraData(el, NODE_EXT_CHILD_NODE, childNode);
}
function setExtraParentNode(el, parentNode) {
  setNodeExtraData(el, NODE_EXT_PARENT_NODE, parentNode);
}
function getExtraChildNodes(el) {
  return getNodeExtraData(el, NODE_EXT_CHILD_NODES);
}
function setExtraChildNodes(el, childNodes) {
  setNodeExtraData(el, NODE_EXT_CHILD_NODES, childNodes);
}
function getExtraParentNode(el) {
  return getNodeExtraData(el, NODE_EXT_PARENT_NODE);
}
function each(obj) {
  return Object.keys(obj);
}
function useCssStyles(componentStyles) {
  var normalized = {};
  if (!isArray(componentStyles)) {
    return normalized;
  }
  componentStyles.forEach((componentStyle) => {
    each(componentStyle).forEach((className) => {
      var parentStyles = componentStyle[className];
      var normalizedStyles = normalized[className] || (normalized[className] = {});
      each(parentStyles).forEach((parentSelector) => {
        var parentStyle = parentStyles[parentSelector];
        var normalizedStyle = normalizedStyles[parentSelector] || (normalizedStyles[parentSelector] = {});
        each(parentStyle).forEach((name) => {
          if (name[0] === "!") {
            normalizedStyle[name] = parentStyle[name];
            delete normalizedStyle[name.slice(1)];
          } else {
            if (!hasOwn(normalizedStyle, "!" + name)) {
              normalizedStyle[name] = parentStyle[name];
            }
          }
        });
      });
    });
  });
  return normalized;
}
function hasClass(className, el) {
  if (!el) {
    return [false, null];
  }
  if (!className.endsWith(")")) {
    var classList = el && el.classList;
    return [!!classList && classList.includes(className), el];
  }
  var partStart = className.lastIndexOf("::part(");
  var partName = className.slice(partStart + 7, className.length - 1);
  var part = el.getAnyAttribute("part");
  if (part == null || !part.split(" ").includes(partName)) {
    return [false, null];
  }
  var baseClassName = className.slice(0, partStart);
  var partInstance = getPartElementInstance(el);
  var hostEl = partInstance == null ? void 0 : partInstance.subTree.el;
  if (hostEl == null) {
    return [false, null];
  }
  if (isCommentNode(hostEl)) {
    var instanceClass = partInstance == null ? void 0 : partInstance.attrs.class;
    if (!instanceClass || typeof instanceClass !== "string") {
      return [false, null];
    }
    var _classList = instanceClass.split(" ");
    if (!_classList.includes(baseClassName)) {
      return [false, null];
    }
    return [true, hostEl];
  }
  var [matched, curEl] = hasClass(baseClassName, hostEl);
  if (!matched) {
    return [false, null];
  }
  return [true, curEl];
}
var TYPE_RE = /[+~> ]$/;
var PROPERTY_PARENT_NODE = "parentNode";
var PROPERTY_PREVIOUS_SIBLING = "previousSibling";
function isMatchParentSelector(parentSelector, el) {
  var classArray = parentSelector.split(".");
  for (var i = classArray.length - 1; i > 0; i--) {
    var item = classArray[i];
    var type = item[item.length - 1];
    var className = item.replace(TYPE_RE, "");
    if (type === "~" || type === " ") {
      var property = type === "~" ? PROPERTY_PREVIOUS_SIBLING : PROPERTY_PARENT_NODE;
      while (el) {
        el = el[property];
        var [matched, curEl] = hasClass(className, el);
        if (matched) {
          el = curEl;
          break;
        }
      }
      if (!el) {
        return false;
      }
    } else {
      if (type === ">") {
        el = el && el[PROPERTY_PARENT_NODE];
      } else if (type === "+") {
        el = el && el[PROPERTY_PREVIOUS_SIBLING];
      }
      var [_matched, _curEl] = hasClass(className, el);
      if (!_matched) {
        return false;
      }
      el = _curEl;
    }
  }
  return true;
}
var WEIGHT_IMPORTANT = 1e3;
function parseClassName(_ref22, parentStyles, el) {
  var {
    styles,
    weights
  } = _ref22;
  each(parentStyles).forEach((parentSelector) => {
    if (parentSelector && el) {
      if (!isMatchParentSelector(parentSelector, el)) {
        return;
      }
    }
    var classWeight = parentSelector.split(".").length;
    var style = parentStyles[parentSelector];
    each(style).forEach((name) => {
      var value = style[name];
      var isImportant = name[0] === "!";
      if (isImportant) {
        name = name.slice(1);
      }
      var weight = classWeight + (isImportant ? WEIGHT_IMPORTANT : 0);
      var oldWeight = weights[name] || 0;
      if (weight >= oldWeight) {
        weights[name] = weight;
        styles.set(name, value);
      }
    });
  });
}
var ParseStyleContext = class {
  constructor() {
    this.styles = /* @__PURE__ */ new Map();
    this.weights = {};
  }
};
function parseClassListWithStyleSheet(classList, stylesheet, parentStylesheet) {
  var el = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var context = new ParseStyleContext();
  classList.forEach((className) => {
    var style = stylesheet && stylesheet[className];
    if (style) {
      parseClassName(context, style, el);
    }
    if (parentStylesheet != null) {
      parentStylesheet.forEach((style2) => {
        var parentStyle = style2[className];
        if (parentStyle != null) {
          parseClassName(context, parentStyle, el);
        }
      });
    }
  });
  return context;
}
function parseClassStyles(el) {
  var _a;
  if (__X_STYLE_ISOLATION__) {
    return parseClassListWithCtx((_a = getExtraClassList(el)) != null ? _a : el.classList, getExtraInstance(el), el);
  }
  var styles = getExtraStyles(el);
  var parentStyles = getExtraParentStyles(el);
  if (styles == null && parentStyles == null || el.classList.length == 0) {
    return new ParseStyleContext();
  }
  return parseClassListWithStyleSheet(el.classList, styles, parentStyles, el);
}
function parseClassList(classList, instance) {
  var el = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  if (__X_STYLE_ISOLATION__ && el) {
    return parseClassListWithCtx(classList, instance, el).styles;
  }
  return parseClassListWithStyleSheet(classList, parseStyleSheet(instance), null, el).styles;
}
function parseStyleSheet(_ref23) {
  var {
    type,
    appContext,
    root
  } = _ref23;
  var component = type;
  var pageInstance = root;
  if (!pageInstance.componentStylesCache) {
    pageInstance.componentStylesCache = /* @__PURE__ */ new Map();
  }
  var cache = pageInstance.componentStylesCache.get(component);
  if (!cache) {
    var addAppStyles2 = function() {
      if (appContext && __globalStyles) {
        var globalStyles = isArray(__globalStyles) ? __globalStyles : [__globalStyles];
        styles.push(...globalStyles);
      }
    }, addPageStyles2 = function() {
      if (!isPage && isArray(page.styles)) {
        styles.push(...page.styles);
      }
    };
    var __globalStyles = appContext.provides.__globalStyles;
    if (appContext && isArray(__globalStyles)) {
      appContext.provides.__globalStyles = useCssStyles(__globalStyles);
    }
    var page = root.type;
    var isPage = component === page;
    var styles = [];
    if (__X_STYLE_ISOLATION__) {
      var styleIsolation = isPage ? 1 : 0;
      var styleIsolationStr = component.styleIsolation;
      if (styleIsolationStr) {
        if (styleIsolationStr === "isolated") {
          styleIsolation = 0;
        } else if (styleIsolationStr === "app" || styleIsolationStr === "app-shared") {
          styleIsolation = 1;
        } else if (styleIsolationStr === "app-and-page") {
          styleIsolation = isPage ? 1 : 2;
        }
      }
      switch (styleIsolation) {
        case 0:
          if (isArray(component.styles)) {
            styles.push(...component.styles);
          }
          break;
        case 1:
          addAppStyles2();
          if (isArray(component.styles)) {
            styles.push(...component.styles);
          }
          break;
        case 2:
          addAppStyles2();
          if (isArray(component.styles)) {
            styles.push(...component.styles);
          }
          addPageStyles2();
          break;
      }
    } else {
      addAppStyles2();
      addPageStyles2();
      if (isArray(component.styles)) {
        styles.push(...component.styles);
      }
    }
    cache = useCssStyles(styles);
    pageInstance.componentStylesCache.set(component, cache);
  }
  return cache;
}
function extendMap(a, b) {
  b.forEach((value, key) => {
    a.set(key, value);
  });
  return a;
}
function toStyle(el, classStyle, classStyleWeights) {
  var style = getExtraStyle(el);
  return mergeClassStyles(classStyle, classStyleWeights, style);
}
function mergeClassStyles(classStyle, classStyleWeights, style) {
  var res = extendMap(/* @__PURE__ */ new Map(), classStyle);
  if (style != null) {
    style.forEach((value, key) => {
      var weight = classStyleWeights[key];
      if (weight == null || weight < WEIGHT_IMPORTANT) {
        res.set(key, value);
      }
    });
  }
  return res;
}
function parseClassListWithCtx(classList, ctx, el) {
  var context = new ParseStyleContext();
  if (classList.length == 0) {
    return context;
  }
  if (ctx == null) {
    console.warn("parseClass context is null");
    return context;
  }
  classList.forEach((className) => {
    if (className.length == 0) {
      return;
    }
    var currentCtx = null;
    if (className.charAt(0) != "^") {
      currentCtx = ctx;
    } else {
      currentCtx = ctx.hostInstance;
      if (currentCtx != null) {
        var parentLevel = 0;
        while (className.charAt(parentLevel) == "^") {
          parentLevel++;
        }
        if (parentLevel > 0) {
          className = className.slice(parentLevel);
          if (className.length == 0) {
            {
              console.warn("Invalid class name: only contains '^' characters");
            }
            return;
          }
          for (var i = 1; i < parentLevel; i++) {
            if (currentCtx == null) {
              break;
            }
            currentCtx = currentCtx.hostInstance;
          }
        }
      }
    }
    if (currentCtx != null) {
      var parentStyles = parseStyleSheet(currentCtx)[className];
      if (parentStyles != null) {
        parseClassName(context, parentStyles, el);
      }
    }
  });
  return context;
}
function useComputedStyle() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _a;
  var i = getCurrentInstance();
  var r = reactive(/* @__PURE__ */ new Map());
  if (i) {
    var propsDef = i.propsOptions === EMPTY_ARR ? {} : i.propsOptions[0];
    var {
      classAttr,
      styleAttr,
      properties
    } = options;
    var filterProperties = (_a = options.filterProperties) != null ? _a : true;
    if (classAttr || styleAttr) {
      if (classAttr && classAttr in propsDef) {
        classAttr = void 0;
      }
      if (styleAttr && styleAttr in propsDef) {
        styleAttr = void 0;
      }
    } else if (!("class" in propsDef) && !("style" in propsDef)) {
      classAttr = "class";
      styleAttr = "style";
    }
    var computedStyleInterceptor = {
      classAttr,
      styleAttr,
      properties,
      reactiveComputedStyle: r,
      filterProperties
    };
    i.computedStyleInterceptors = i.computedStyleInterceptors || [];
    i.computedStyleInterceptors.push(computedStyleInterceptor);
  } else {
    warn("useComputedStyle() is called when there is no active component instance to be associated with.");
  }
  return r;
}
var excludedPxKeys = /* @__PURE__ */ new Set(["z-index", "opacity", "font-weight", "line-height", "flex-grow", "flex-shrink", "flex"]);
function formatValue(key, value) {
  if (typeof value != "number") {
    return value;
  }
  if (isPxKey(key)) {
    return "".concat(value, "px");
  }
  return "".concat(value);
}
function isPxKey(key) {
  return !excludedPxKeys.has(key);
}
function triggerComputedStyleUpdate(instance, styles) {
  if (instance.computedStyleInterceptors) {
    var keysToDelete = /* @__PURE__ */ new Set();
    var clearStyles = false;
    instance.computedStyleInterceptors.forEach((interceptor) => {
      var r = interceptor.reactiveComputedStyle;
      var properties = interceptor.properties;
      if (properties) {
        styles.forEach((value, key) => {
          var isCSSVar = key.startsWith("--");
          var hyphenatedKey = isCSSVar ? key : hyphenate(key);
          if (properties.includes(hyphenatedKey)) {
            if (value === "" || value == null) {
              r.delete(hyphenatedKey);
            } else {
              r.set(hyphenatedKey, formatValue(hyphenatedKey, value));
            }
            if (interceptor.filterProperties) {
              keysToDelete.add(key);
            }
          }
        });
      } else {
        styles.forEach((value, key) => {
          var isCSSVar = key.startsWith("--");
          var hyphenatedKey = isCSSVar ? key : hyphenate(key);
          if (value === "" || value == null) {
            r.delete(hyphenatedKey);
          } else {
            r.set(hyphenatedKey, formatValue(hyphenatedKey, value));
          }
        });
        clearStyles = true;
      }
    });
    if (clearStyles) {
      styles.clear();
    } else if (keysToDelete.size > 0) {
      keysToDelete.forEach((key) => {
        styles.delete(key);
      });
    }
  }
  return styles;
}
var PartElementContextMap = /* @__PURE__ */ new WeakMap();
function setPartElementContext(el, context) {
  PartElementContextMap.set(el, context);
}
function getPartElementContext(el) {
  return PartElementContextMap.get(el) || null;
}
function patchPart(el, part) {
  var instance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  el.setAnyAttribute("part", part);
  if (instance == null) {
    return;
  }
  setPartElementInstance(el, instance);
  updatePartStyles(el);
}
function updatePartStyles(el) {
  var instance = getPartElementInstance(el);
  if (instance == null) {
    return;
  }
  var part = el.getAttribute("part");
  if (!isString(part) || !part) {
    setPartElementContext(el, new ParseStyleContext());
    mergeAndUpdateClassStyles(el);
    return;
  }
  var hostEl = instance.subTree.el;
  if (hostEl == null || hostEl.tagName == null) {
    return;
  }
  var ownerInstance = instance.vnode.hostInstance;
  if (ownerInstance == null) {
    return;
  }
  var parentStylesheet = ownerInstance.type.styles;
  if (parentStylesheet == null || parentStylesheet.length === 0) {
    return;
  }
  var partList = part.split(" ");
  var context = new ParseStyleContext();
  var stylesUpdated = false;
  var partSelectors = partList.map((partName) => "::part(".concat(partName, ")"));
  var parentStyles = (parentStylesheet != null ? parentStylesheet : []).filter((style3) => partSelectors.some((partSelector2) => style3[partSelector2] != null));
  if (isCommentNode(hostEl)) {
    var instanceClass = instance.attrs.class;
    if (typeof instanceClass === "string") {
      hostEl.classList = instanceClass.split(" ");
    }
  }
  for (var i = 0; i < parentStyles.length; i++) {
    var style = parentStyles[i];
    for (var j = 0; j < partSelectors.length; j++) {
      var partSelector = partSelectors[j];
      if (style[partSelector] != null) {
        var parentPartStyles = style[partSelector];
        for (var parentSelector in parentPartStyles) {
          if (!isMatchParentSelector(parentSelector, hostEl)) {
            continue;
          }
          var style2 = parentPartStyles[parentSelector];
          var weight = parentSelector.split(".").length + 1;
          for (var key in style2) {
            var existing = context.weights[key];
            if (existing == null || weight >= existing) {
              context.styles.set(key, style2[key]);
              context.weights[key] = weight;
              stylesUpdated = true;
            }
          }
        }
      }
    }
  }
  if (!stylesUpdated) {
    return;
  }
  setPartElementContext(el, context);
  mergeAndUpdateClassStyles(el);
}
var ElementClassContextMap = /* @__PURE__ */ new WeakMap();
function setElementClassContext(el, context) {
  ElementClassContextMap.set(el, context);
}
function getElementClassContext(el) {
  return ElementClassContextMap.get(el) || null;
}
function patchClass(el, pre, next) {
  var instance = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!instance) {
    return;
  }
  var classList = next ? next.split(" ") : [];
  if (__X_STYLE_ISOLATION__) {
    setExtraClassList(el, classList);
    var hasCaretPrefix = classList.some((c) => c.charCodeAt(0) == 94);
    el.classList = hasCaretPrefix ? normalizeClassList(classList) : classList;
  } else {
    el.classList = classList;
  }
  if (__X_STYLE_ISOLATION__) {
    setExtraInstance(el, instance);
  } else {
    setExtraStyles(el, parseStyleSheet(instance));
  }
  if (instance.parent != null && instance !== instance.root && el === instance.subTree.el) {
    if (!__X_STYLE_ISOLATION__) {
      setExtraParentStyles(el, instance.parent.type.styles);
    }
    setRootElementInstance(el, instance);
  }
  updateClassStyles(el);
}
function updateClassStyles(el) {
  var parseClassStylesResult = parseClassStyles(el);
  setElementClassContext(el, parseClassStylesResult);
  mergeAndUpdateClassStyles(el);
}
function mergeAndUpdateClassStyles(el) {
  if (el.parentNode == null || isCommentNode(el)) {
    return;
  }
  if (getExtraClassStyle(el) == null) {
    setExtraClassStyle(el, /* @__PURE__ */ new Map());
  }
  var oldClassStyle = getExtraClassStyle(el);
  oldClassStyle.forEach((_value, key) => {
    oldClassStyle.set(key, "");
  });
  var elementClassContext = getElementClassContext(el);
  var partStyleContext = getPartElementContext(el);
  var mergedStyleContext = null;
  if (elementClassContext && partStyleContext) {
    mergedStyleContext = new ParseStyleContext();
    elementClassContext.styles.forEach((value, key) => {
      mergedStyleContext.styles.set(key, value);
      mergedStyleContext.weights[key] = elementClassContext.weights[key];
    });
    partStyleContext.styles.forEach((value, key) => {
      var _a;
      var weight = partStyleContext.weights[key];
      var oldWeight = (_a = mergedStyleContext.weights[key]) != null ? _a : 0;
      if (weight > oldWeight) {
        mergedStyleContext.weights[key] = weight;
        mergedStyleContext.styles.set(key, partStyleContext.styles.get(key));
      }
    });
  } else if (elementClassContext) {
    mergedStyleContext = elementClassContext;
  } else if (partStyleContext) {
    mergedStyleContext = partStyleContext;
  }
  if (mergedStyleContext == null) {
    return;
  }
  mergedStyleContext.styles.forEach((value, key) => {
    oldClassStyle.set(key, value);
  });
  var styles = toStyle(el, oldClassStyle, mergedStyleContext.weights);
  var instance = getRootElementInstance(el);
  if (instance && instance.computedStyleInterceptors) {
    triggerComputedStyleUpdate(instance, styles);
  }
  if (styles.size == 0) {
    return;
  }
  if (el._vsh) {
    styles.set("display", "none");
  }
  el.updateStyle(styles);
}
function normalizeClassList(classList) {
  var len = classList.length;
  if (len == 1) {
    var className = classList[0];
    var start = 1;
    while (start < className.length && className.charCodeAt(start) == 94) {
      start++;
    }
    return [className.slice(start)];
  }
  var seen = /* @__PURE__ */ new Set();
  for (var i = 0; i < len; i++) {
    var _className = classList[i];
    if (_className.charCodeAt(0) == 94) {
      var _start = 1;
      while (_start < _className.length && _className.charCodeAt(_start) == 94) {
        _start++;
      }
      seen.add(_className.slice(_start));
    } else {
      seen.add(_className);
    }
  }
  return Array.from(seen);
}
var rootDocument;
function getDocument() {
  return rootDocument;
}
function setDocument(document2) {
  rootDocument = document2;
}
function updateTextNode(node) {
  var childNode = getExtraChildNode(node);
  if (childNode !== null) {
    var text = childNode.getAttribute("value");
    node.setAttribute("value", text || "");
  }
}
var nodeOps = {
  insert: (el, parent, anchor) => {
    if (isTextElement(parent)) {
      if (isExtraTextNode(el)) {
        var childNode = getExtraChildNode(parent);
        if (childNode !== null) {
          console.error("Multiple text nodes are not allowed.");
        } else {
          setExtraChildNode(parent, el);
          setExtraParentNode(el, parent);
          updateTextNode(parent);
        }
        return;
      }
    }
    if (!anchor) {
      parent.appendChild(el);
    } else {
      parent.insertBefore(el, anchor);
    }
    if (parent.isConnected) {
      updatePartStyles(el);
      updateClassStyles(el);
      updateChildrenClassStyle(el);
    }
  },
  remove: (child) => {
    var parent = child.parentNode;
    if (parent) {
      var childNodes = getExtraChildNodes(parent);
      if (childNodes !== null) {
        var index = childNodes.indexOf(child);
        if (index !== -1) {
          childNodes.splice(index, 1);
          setExtraChildNodes(parent, childNodes);
        }
      }
      parent.removeChild(child);
    }
  },
  createElement: (tag, container) => {
    if (!container) {
      var _document = getDocument();
      if (!_document) {
        throw new Error("document is not defined");
      }
      return _document.createElement(tag);
    } else {
      var _document2 = container.page.document;
      return _document2.createElement(tag);
    }
  },
  createText: (text, container, isAnchor) => {
    var document2 = container.page.document;
    if (isAnchor) {
      return document2.createComment(text);
    }
    var textNode = document2.createElement("text");
    textNode.setAttribute("value", text);
    setExtraIsTextNode(textNode, true);
    return textNode;
  },
  createComment: (text, container) => {
    var document2 = container.page.document;
    return document2.createComment(text);
  },
  setText: (node, text) => {
    node.setAttribute("value", text);
    var parent = getExtraParentNode(node);
    if (parent !== null) {
      updateTextNode(parent);
    }
  },
  setElementText: (el, text) => {
    if (el.tagName !== "TEXT") {
      var childNodes = el.childNodes;
      var textNode = childNodes.find((node) => node.tagName === "TEXT");
      if (!textNode) {
        var textNode2 = nodeOps.createText(text, el);
        el.appendChild(textNode2);
        return;
      }
      el = textNode;
    }
    el.setAttribute("value", text);
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector, parentComponent) => {
    var _a, _b;
    var document2 = (_b = (_a = parentComponent == null ? void 0 : parentComponent.proxy) == null ? void 0 : _a.$nativePage) == null ? void 0 : _b.document;
    if (document2) {
      return document2.querySelector(selector);
    }
    return null;
  }
};
function updateChildrenClassStyle(el) {
  if (el !== null) {
    el.childNodes.forEach((child) => {
      updatePartStyles(child);
      updateClassStyles(child);
      updateChildrenClassStyle(child);
    });
  }
}
function patchAttr(el, key, value) {
  var instance = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (instance) {
    [key, value] = transformAttr(el, key, value, instance);
  }
  el.setAnyAttribute(key, value);
}
var ATTR_HOVER_CLASS = "hoverClass";
var ATTR_PLACEHOLDER_CLASS = "placeholderClass";
var ATTR_PLACEHOLDER_STYLE = "placeholderStyle";
var ATTR_INDICATOR_CLASS = "indicatorClass";
var ATTR_INDICATOR_STYLE = "indicatorStyle";
var ATTR_MASK_CLASS = "maskClass";
var ATTR_MASK_STYLE = "maskStyle";
var CLASS_AND_STYLES = {
  view: {
    class: [ATTR_HOVER_CLASS],
    style: []
  },
  button: {
    class: [ATTR_HOVER_CLASS],
    style: []
  },
  navigator: {
    class: [ATTR_HOVER_CLASS],
    style: []
  },
  input: {
    class: [ATTR_PLACEHOLDER_CLASS],
    style: [ATTR_PLACEHOLDER_STYLE]
  },
  textarea: {
    class: [ATTR_PLACEHOLDER_CLASS],
    style: [ATTR_PLACEHOLDER_STYLE]
  },
  "picker-view": {
    class: [ATTR_INDICATOR_CLASS, ATTR_MASK_CLASS],
    style: [ATTR_INDICATOR_STYLE, ATTR_MASK_STYLE]
  }
};
function transformAttr(el, key, value, instance) {
  if (!value) {
    return [key, value];
  }
  var opts = CLASS_AND_STYLES[el.tagName.toLowerCase()];
  if (opts) {
    var camelized = camelize(key);
    if (opts["class"].indexOf(camelized) > -1) {
      var classStyle = parseClassList(Array.isArray(value) ? value : [value], instance, el);
      if (el.tagName === "BUTTON") {
        if (value === "none" || value == "button-hover" && classStyle.size == 0) {
          return [camelized, value];
        }
      }
      return [camelized, classStyle];
    }
    if (opts["style"].indexOf(camelized) > -1) {
      if (isString(value)) {
        var sytle = parseStringStyle(camelize(value));
        return [camelized, sytle];
      }
      return [camelized, normalizeStyle(value)];
    }
  }
  return [key, value];
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler);
}
function removeEventListener(el, event) {
  el.removeEventListener(event);
}
function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    var [name, options] = parseName(rawName);
    if (nextValue) {
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker);
    } else if (existingInvoker) {
      removeEventListener(el, name);
      invokers[rawName] = void 0;
    }
  }
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function formatEventName(name) {
  if (name === "on-post-message") {
    return "onPostMessage";
  }
  return name;
}
function parseName(name) {
  var options;
  if (optionsModifierRE.test(name)) {
    options = {};
    var m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  var event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [formatEventName(event), options];
}
function createInvoker(initialValue, instance) {
  var invoker = (e) => {
    callWithAsyncErrorHandling(invoker.value, instance, 5, [e]);
  };
  invoker.value = initialValue;
  var modifiers = /* @__PURE__ */ new Set();
  if (isArray(invoker.value)) {
    invoker.value.forEach((v) => {
      if (v.modifiers) {
        v.modifiers.forEach((m) => {
          modifiers.add(m);
        });
      }
    });
  } else {
    if (invoker.value.modifiers) {
      invoker.value.modifiers.forEach((m) => {
        modifiers.add(m);
      });
    }
  }
  invoker.modifiers = [...modifiers];
  return invoker;
}
var processDeclaration = expand({
  type: "uvue"
}).Declaration;
function parseStyleDecl(prop, value) {
  var newValue = String(value);
  var isImportant = newValue.includes("!important");
  var decl = {
    prop,
    value: isImportant ? newValue.replace(/\s*!important/, "") : newValue,
    important: isImportant,
    replaceWith(newProps) {
      props = newProps;
    }
  };
  var props = [decl];
  processDeclaration(decl);
  return props;
}
function isSame(a, b) {
  return isString(a) && isString(b) || typeof a === "number" && typeof b === "number" ? a == b : a === b;
}
function patchStyle(el, prev, next) {
  var instance = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!next) {
    return;
  }
  if (isString(next)) {
    next = parseStringStyle(next);
  }
  var batchedStyles = /* @__PURE__ */ new Map();
  var isPrevObj = prev && !isString(prev);
  if (isPrevObj) {
    (function() {
      var classStyle = getExtraClassStyle(el);
      var style = getExtraStyle(el);
      for (var key2 in prev) {
        if (next[key2] == null) {
          parseStyleDecl(key2.startsWith("--") ? key2 : camelize(key2), prev[key2]).forEach((item) => {
            var key22 = item.prop;
            var value3 = (classStyle == null ? void 0 : classStyle.has(key22)) == true ? classStyle.get(key22) : "";
            batchedStyles.set(key22, value3);
            style == null ? void 0 : style.delete(key22);
          });
        }
      }
      for (var _key22 in next) {
        var value2 = next[_key22];
        var prevValue = prev[_key22];
        if (!isSame(prevValue, value2)) {
          var _key2 = _key22.startsWith("--") ? _key22 : camelize(_key22);
          parseStyleDecl(_key2, value2).forEach((item) => {
            batchedStyles.set(item.prop, item.value);
            style == null ? void 0 : style.set(item.prop, item.value);
          });
        }
      }
    })();
  } else {
    for (var key in next) {
      var value = next[key];
      var _key = key.startsWith("--") ? key : camelize(key);
      setBatchedStyles(batchedStyles, _key, value);
    }
    setExtraStyle(el, batchedStyles);
  }
  if (instance && instance.parent != null && instance !== instance.root && el === instance.subTree.el) {
    setRootElementInstance(el, instance);
    var computedStyleInterceptors = instance == null ? void 0 : instance.computedStyleInterceptors;
    if (computedStyleInterceptors) {
      batchedStyles = triggerComputedStyleUpdate(instance, new Map(batchedStyles));
    }
  }
  if (batchedStyles.size == 0) {
    return;
  }
  if (el._vsh) {
    batchedStyles.set("display", "none");
  }
  el.updateStyle(batchedStyles);
}
function setBatchedStyles(batchedStyles, key, value) {
  parseStyleDecl(key, value).forEach((item) => {
    batchedStyles.set(item.prop, item.value);
  });
}
var vModelTags = ["u-input", "u-textarea"];
var patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren, hostInstance) => {
  if (key === "class") {
    patchClass(el, prevValue, nextValue, hostInstance || parentComponent);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue, hostInstance || parentComponent);
  } else if (key === "part") {
    patchPart(el, nextValue, parentComponent);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key === "modelValue" && vModelTags.includes(el.tagName.toLowerCase())) {
    el.setAnyAttribute("modelValue", nextValue);
    el.setAnyAttribute("value", nextValue);
  } else {
    patchAttr(el, key, nextValue, hostInstance !== null ? hostInstance : parentComponent);
  }
};
function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "$style";
  {
    var instance = getCurrentInstance();
    if (!instance) {
      warn("useCssModule must be called inside setup()");
      return EMPTY_OBJ;
    }
    var modules = instance.type.__cssModules;
    if (!modules) {
      warn("Current instance does not have CSS modules injected.");
      return EMPTY_OBJ;
    }
    var mod = modules[name];
    if (!mod) {
      warn('Current instance does not have CSS module named "'.concat(name, '".'));
      return EMPTY_OBJ;
    }
    return mod;
  }
}
function useCssVars(getter) {
  var instance = getCurrentInstance();
  if (!instance) {
    warn("useCssVars is called without current active component instance.");
    return;
  }
  var setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
  onMounted(() => watchEffect(setVars, {
    flush: "post"
  }));
  onUpdated(setVars);
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    var style = vnode.el.style;
    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  }
}
var getModelAssigner = (vnode) => {
  var fn = vnode.props["onUpdate:modelValue"];
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
var vModelText = {
  created(el, _binding, _vnode, _prevVNode) {
    var trigger2 = getModelAssigner(_vnode);
    el.addEventListener("input", (event) => {
      trigger2(event.detail.value);
    });
  },
  mounted(el, _binding, _vnode, _prevVNode) {
    var _a;
    el.setAnyAttribute("value", (_a = _binding.value) != null ? _a : "");
  },
  beforeUpdate(el, _binding, _vnode, _prevVNode) {
    var _a;
    el.setAnyAttribute("value", (_a = _binding.value) != null ? _a : "");
  }
};
var vModelDynamic = vModelText;
var systemModifiers = ["ctrl", "shift", "alt", "meta"];
var modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e["".concat(m, "Key")] && !modifiers.includes(m))
};
var withModifiers = (fn, modifiers) => {
  return function(event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    for (var _len13 = arguments.length, args = new Array(_len13 > 1 ? _len13 - 1 : 0), _key23 = 1; _key23 < _len13; _key23++) {
      args[_key23 - 1] = arguments[_key23];
    }
    return fn(event, ...args);
  };
};
var withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    var eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey)) {
      return fn(event);
    }
  };
};
var vShow = {
  beforeMount(el, _ref24, _ref25) {
    var {
      value
    } = _ref24;
    var {
      transition
    } = _ref25;
    el._vod = el.style.getPropertyValue("display") === "none" ? "" : "flex";
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, _ref26, _ref27) {
    var {
      value
    } = _ref26;
    var {
      transition
    } = _ref27;
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, _ref28, _ref29) {
    var {
      value,
      oldValue
    } = _ref28;
    var {
      transition
    } = _ref29;
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, _ref30) {
    var {
      value
    } = _ref30;
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.setProperty("display", value ? el._vod : "none");
  el._vsh = !value;
}
var rendererOptions = extend({
  patchProp,
  forcePatchProp
}, nodeOps);
var renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
var render = function() {
  ensureRenderer().render(...arguments);
};
var createApp = function() {
  var app = ensureRenderer().createApp(...arguments);
  var {
    mount,
    unmount
  } = app;
  app.mount = (container) => {
    setDocument(container);
    return mount(container.body);
  };
  app.unmount = () => {
    setDocument(void 0);
    unmount();
    app._container = null;
    app._context.reload = () => {
    };
  };
  return app;
};
function createMountPage(appContext) {
  return function mountPage(pageComponent, pageProps, pageContainer) {
    var vnode = createVNode(pageComponent, pageProps);
    vnode.appContext = appContext;
    vnode.__page_container__ = pageContainer;
    render(vnode, pageContainer);
    var publicThis = vnode.component.proxy;
    publicThis.__page_container__ = pageContainer;
    return publicThis;
  };
}
function unmountPage(pageInstance) {
  var {
    __page_container__
  } = pageInstance;
  if (__page_container__) {
    __page_container__.isUnmounted = true;
    render(null, __page_container__);
    delete pageInstance.__page_container__;
    var vnode = pageInstance.$.vnode;
    delete vnode.__page_container__;
  }
}
var createLifeCycleHook = function(lifecycle) {
  var flag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(hook) {
    var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance();
    !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
  };
};
var onShow = /* @__PURE__ */ createLifeCycleHook(
  ON_SHOW,
  1 | 2
  /* HookFlags.PAGE */
);
var onHide = /* @__PURE__ */ createLifeCycleHook(
  ON_HIDE,
  1 | 2
  /* HookFlags.PAGE */
);
var onLaunch = /* @__PURE__ */ createLifeCycleHook(
  ON_LAUNCH,
  1
  /* HookFlags.APP */
);
var onError = /* @__PURE__ */ createLifeCycleHook(
  ON_ERROR,
  1
  /* HookFlags.APP */
);
var onThemeChange = /* @__PURE__ */ createLifeCycleHook(
  ON_THEME_CHANGE,
  1
  /* HookFlags.APP */
);
var onPageNotFound = /* @__PURE__ */ createLifeCycleHook(
  ON_PAGE_NOT_FOUND,
  1
  /* HookFlags.APP */
);
var onUnhandledRejection = /* @__PURE__ */ createLifeCycleHook(
  ON_UNHANDLE_REJECTION,
  1
  /* HookFlags.APP */
);
var onLastPageBackPress = /* @__PURE__ */ createLifeCycleHook(
  ON_LAST_PAGE_BACK_PRESS,
  1
  /* HookFlags.APP */
);
var onExit = /* @__PURE__ */ createLifeCycleHook(
  ON_EXIT,
  1
  /* HookFlags.APP */
);
var onLoad = /* @__PURE__ */ createLifeCycleHook(
  ON_LOAD,
  2
  /* HookFlags.PAGE */
);
var onReady = /* @__PURE__ */ createLifeCycleHook(
  ON_READY,
  2
  /* HookFlags.PAGE */
);
var onUnload = /* @__PURE__ */ createLifeCycleHook(
  ON_UNLOAD,
  2
  /* HookFlags.PAGE */
);
var onResize = /* @__PURE__ */ createLifeCycleHook(
  ON_RESIZE,
  2
  /* HookFlags.PAGE */
);
var onBackPress = /* @__PURE__ */ createLifeCycleHook(
  ON_BACK_PRESS,
  2
  /* HookFlags.PAGE */
);
var onPageScroll = /* @__PURE__ */ createLifeCycleHook(
  ON_PAGE_SCROLL,
  2
  /* HookFlags.PAGE */
);
var onTabItemTap = /* @__PURE__ */ createLifeCycleHook(
  ON_TAB_ITEM_TAP,
  2
  /* HookFlags.PAGE */
);
var onReachBottom = /* @__PURE__ */ createLifeCycleHook(
  ON_REACH_BOTTOM,
  2
  /* HookFlags.PAGE */
);
var onPullDownRefresh = /* @__PURE__ */ createLifeCycleHook(
  ON_PULL_DOWN_REFRESH,
  2
  /* HookFlags.PAGE */
);
var onShareTimeline = /* @__PURE__ */ createLifeCycleHook(
  ON_SHARE_TIMELINE,
  2
  /* HookFlags.PAGE */
);
var onShareAppMessage = /* @__PURE__ */ createLifeCycleHook(
  ON_SHARE_APP_MESSAGE,
  2
  /* HookFlags.PAGE */
);
var onPageHide = onHide;
var onPageShow = onShow;
var onAppHide = onHide;
var onAppShow = onShow;
function renderComponentSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  if (slots[name]) {
    return slots[name](props);
  }
  return null;
}
var getCurrentGenericInstance = getCurrentInstance;
var defineComponent = (options) => {
  var rootElement = options.rootElement;
  if (rootElement && typeof customElements !== "undefined") {
    {
      customElements.define(rootElement.name, rootElement.class, rootElement.options);
    }
  }
  return /* @__PURE__ */ defineComponent$1(options);
};
var ssrRef = ref;
var shallowSsrRef = shallowRef;

// ../uni-app-next/packages/uni-app-plus/dist/uni.x.runtime.harmony.esm.js
function get$pageByPage(page) {
  return page.vm.$basePage;
}
function getCurrentPage() {
  var pages2 = getCurrentPages();
  var len = pages2.length;
  if (len) {
    return pages2[len - 1];
  }
}
function getCurrentPageMeta() {
  var _getCurrentPage;
  var $page = (_getCurrentPage = getCurrentPage()) === null || _getCurrentPage === void 0 || (_getCurrentPage = _getCurrentPage.vm) === null || _getCurrentPage === void 0 ? void 0 : _getCurrentPage.$basePage;
  if ($page) {
    return $page.meta;
  }
}
function getCurrentPageVm() {
  var _getCurrentPage3;
  var page = (_getCurrentPage3 = getCurrentPage()) === null || _getCurrentPage3 === void 0 ? void 0 : _getCurrentPage3.vm;
  if (page) {
    return page.$vm;
  }
}
var PAGE_META_KEYS = ["navigationBar", "pullToRefresh"];
function initGlobalStyle() {
  return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
}
function initRouteMeta(pageMeta, id2) {
  var globalStyle = initGlobalStyle();
  var res = extend({
    id: id2
  }, globalStyle, pageMeta);
  PAGE_META_KEYS.forEach((name) => {
    res[name] = extend({}, globalStyle[name], pageMeta[name]);
  });
  var {
    navigationBar
  } = res;
  navigationBar.titleText && navigationBar.titleImage && (navigationBar.titleText = "");
  return res;
}
function initPageInternalInstance(openType, url, pageQuery, meta, eventChannel, themeMode) {
  var {
    id: id2,
    route
  } = meta;
  var titleColor = normalizeStyles(meta.navigationBar, __uniConfig.themeConfig, themeMode).titleColor;
  return {
    id: id2,
    path: addLeadingSlash(route),
    route,
    fullPath: url,
    options: pageQuery,
    meta,
    openType,
    eventChannel,
    statusBarStyle: titleColor === "#ffffff" ? "light" : "dark"
  };
}
function invokeHook(vm, name, args) {
  if (isString(vm)) {
    args = name;
    name = vm;
    vm = getCurrentPageVm();
  } else if (typeof vm === "number") {
    var page = getCurrentPages().find((page2) => get$pageByPage(page2).id === vm);
    if (page) {
      vm = page.$vm;
    } else {
      vm = getCurrentPageVm();
    }
  }
  if (!vm) {
    return;
  }
  {
    if (vm.__call_hook) {
      return vm.__call_hook(name, args);
    }
  }
  var hooks = vm.$[name];
  if (name === ON_BACK_PRESS) {
    return hooks && invokeArrayFnsWithResults(hooks, args).some((ret) => ret === true);
  }
  return hooks && invokeArrayFns2(hooks, args);
}
function normalizeRoute(toRoute) {
  if (toRoute.indexOf("/") === 0 || toRoute.indexOf("uni:") === 0) {
    return toRoute;
  }
  var fromRoute = "";
  var pages2 = getCurrentPages();
  if (pages2.length) {
    fromRoute = get$pageByPage(pages2[pages2.length - 1]).route;
  }
  return getRealRoute(fromRoute, toRoute);
}
function getRealRoute(fromRoute, toRoute) {
  if (toRoute.indexOf("/") === 0) {
    return toRoute;
  }
  if (toRoute.indexOf("./") === 0) {
    return getRealRoute(fromRoute, toRoute.slice(2));
  }
  var toRouteArray = toRoute.split("/");
  var toRouteLength = toRouteArray.length;
  var i = 0;
  for (; i < toRouteLength && toRouteArray[i] === ".."; i++) {
  }
  toRouteArray.splice(0, i);
  toRoute = toRouteArray.join("/");
  var fromRouteArray = fromRoute.length > 0 ? fromRoute.split("/") : [];
  fromRouteArray.splice(fromRouteArray.length - i - 1, i + 1);
  return addLeadingSlash(fromRouteArray.concat(toRouteArray).join("/"));
}
function getRouteOptions(path) {
  var alias = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (alias) {
    return __uniRoutes.find((route) => route.path === path || route.alias === path);
  }
  return __uniRoutes.find((route) => route.path === path);
}
function getRouteMeta(path) {
  var routeOptions = getRouteOptions(path);
  if (routeOptions) {
    return routeOptions.meta;
  }
}
var SYSTEM_DIALOG_PAGE_PATH_STARTER = "uni:";
var SYSTEM_DIALOG_ACTION_SHEET_PAGE_PATH = "uni:actionSheet";
function isSystemDialogPage(page) {
  return page.route.startsWith(SYSTEM_DIALOG_PAGE_PATH_STARTER);
}
function isSystemActionSheetDialogPage(page) {
  return page.route.startsWith(SYSTEM_DIALOG_ACTION_SHEET_PAGE_PATH);
}
function dialogPageTriggerParentHide(dialogPage) {
  dialogPageTriggerParentLifeCycle(dialogPage, ON_HIDE);
}
function dialogPageTriggerParentShow(dialogPage) {
  var triggerParentHideDialogPageNum = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  dialogPageTriggerParentLifeCycle(dialogPage, ON_SHOW, triggerParentHideDialogPageNum);
}
function dialogPageTriggerParentLifeCycle(dialogPage, lifeCycle) {
  var triggerParentHideDialogPageNum = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  if (!dialogPage.$triggerParentHide)
    return;
  var pages2 = getCurrentPages();
  var currentPage = pages2[pages2.length - 1];
  if (!currentPage)
    return;
  var parentPage = dialogPage.getParentPage();
  if (!parentPage)
    return;
  if (parentPage !== currentPage)
    return;
  var dialogPages = currentPage.getDialogPages();
  for (var i = 0; i < dialogPages.length; i++) {
    if (!!dialogPages[i].$triggerParentHide) {
      triggerParentHideDialogPageNum++;
      if (triggerParentHideDialogPageNum > 1) {
        return;
      }
    }
  }
  if (triggerParentHideDialogPageNum <= 1) {
    var systemDialogPages = getSystemDialogPages(parentPage);
    for (var _i = 0; _i < systemDialogPages.length; _i++) {
      if (!!systemDialogPages[_i].$triggerParentHide) {
        triggerParentHideDialogPageNum++;
        if (triggerParentHideDialogPageNum > 1) {
          return;
        }
      }
    }
  }
  invokeHook(currentPage.vm, lifeCycle);
}
function getSystemDialogPages(parentPage) {
  if (!parentPage)
    return [];
  {
    return typeof parentPage.__$$getSystemDialogPages === "undefined" ? parentPage.$getSystemDialogPages() : parentPage.__$$getSystemDialogPages();
  }
}
function dialogPageTriggerPrevDialogPageLifeCycle(parentPage, lifeCycle) {
  if (!parentPage)
    return;
  var pages2 = getCurrentPages();
  var currentPage = pages2[pages2.length - 1];
  if (!currentPage || parentPage !== currentPage)
    return;
  var prevDialogPage = getLastDialogPage(currentPage);
  prevDialogPage && invokeHook(prevDialogPage.vm, lifeCycle);
}
function getLastDialogPage(parentPage) {
  var _lastSystemDialogPage, _lastDialogPage$vm;
  if (!parentPage)
    return null;
  var dialogPages = parentPage.getDialogPages();
  var systemDialogPages = getSystemDialogPages(parentPage);
  var lastSystemDialogPage = systemDialogPages[systemDialogPages.length - 1];
  var lastDialogPage = dialogPages[dialogPages.length - 1];
  if (!lastDialogPage)
    return lastSystemDialogPage;
  if (!lastSystemDialogPage)
    return lastDialogPage;
  var lastSystemDialogPageId = ((_lastSystemDialogPage = lastSystemDialogPage.vm) === null || _lastSystemDialogPage === void 0 || (_lastSystemDialogPage = _lastSystemDialogPage.$basePage) === null || _lastSystemDialogPage === void 0 ? void 0 : _lastSystemDialogPage.id) || Number.MAX_SAFE_INTEGER;
  var lastDialogPageId = ((_lastDialogPage$vm = lastDialogPage.vm) === null || _lastDialogPage$vm === void 0 || (_lastDialogPage$vm = _lastDialogPage$vm.$basePage) === null || _lastDialogPage$vm === void 0 ? void 0 : _lastDialogPage$vm.id) || Number.MAX_SAFE_INTEGER;
  return lastSystemDialogPageId > lastDialogPageId ? lastSystemDialogPage : lastDialogPage;
}
function invokeLastDialogPageHookByUniPage(parentPage, hook) {
  var lastDialogPage = getLastDialogPage(parentPage);
  if (lastDialogPage) {
    invokeHook(lastDialogPage.vm, hook);
  }
}
function initPageVm(pageVm, page) {
  pageVm.route = page.route;
  pageVm.$vm = pageVm;
  {
    pageVm.$basePage = page;
  }
  pageVm.$mpType = "page";
  pageVm.$fontFamilySet = /* @__PURE__ */ new Set();
  if (page.meta.isTabBar) {
    pageVm.$.__isTabBar = true;
    pageVm.$.__isActive = true;
  }
}
function createLaunchOptions() {
  return {
    path: "",
    query: {},
    scene: 1001,
    referrerInfo: {
      appId: "",
      extraData: {}
    }
  };
}
function defineGlobalData(app, defaultGlobalData) {
  var options = app.$options || {};
  options.globalData = extend(options.globalData || {}, defaultGlobalData);
  Object.defineProperty(app, "globalData", {
    get() {
      return options.globalData;
    },
    set(newGlobalData) {
      options.globalData = newGlobalData;
    }
  });
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var invokeCallbackId = 1;
var invokeCallbacks = {};
function addInvokeCallback(id2, name, callback) {
  var keepAlive = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  invokeCallbacks[id2] = {
    name,
    keepAlive,
    callback
  };
  return id2;
}
function invokeCallback(id2, res, extras) {
  if (typeof id2 === "number") {
    var opts = invokeCallbacks[id2];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id2];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
function findInvokeCallbackByName(name) {
  for (var key in invokeCallbacks) {
    if (invokeCallbacks[key].name === name) {
      return true;
    }
  }
  return false;
}
function removeKeepAliveApiCallback(name, callback) {
  for (var key in invokeCallbacks) {
    var item = invokeCallbacks[key];
    if (item.callback === callback && item.name === name) {
      delete invokeCallbacks[key];
    }
  }
}
function offKeepAliveApiCallback(name) {
  UniServiceJSBridge.off("api." + name);
}
function onKeepAliveApiCallback(name) {
  UniServiceJSBridge.on("api." + name, (res) => {
    for (var key in invokeCallbacks) {
      var opts = invokeCallbacks[key];
      if (opts.name === name) {
        opts.callback(res);
      }
    }
  });
}
function createKeepAliveApiCallback(name, callback) {
  return addInvokeCallback(invokeCallbackId++, name, callback, true);
}
var API_SUCCESS = "success";
var API_FAIL = "fail";
var API_COMPLETE = "complete";
function getApiCallbacks(args) {
  var apiCallbacks = {};
  for (var name in args) {
    var fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name) {
  var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    beforeAll,
    beforeSuccess
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!isPlainObject(args)) {
    args = {};
  }
  var {
    success,
    fail,
    complete
  } = getApiCallbacks(args);
  var hasSuccess = isFunction(success);
  var hasFail = isFunction(fail);
  var hasComplete = isFunction(complete);
  var callbackId2 = invokeCallbackId++;
  addInvokeCallback(callbackId2, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId2;
}
var HOOK_SUCCESS = "success";
var HOOK_FAIL = "fail";
var HOOK_COMPLETE = "complete";
var globalInterceptors = {};
var scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue2(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    var hooks = interceptors[name];
    if (!isArray(hooks)) {
      return;
    }
    var oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue2(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      var res = queue2(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify(name, fn) {
  return function() {
    var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, extend({}, args), rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject2) => {
      invokeApi(name, fn, extend({}, args, {
        success: resolve2,
        fail: reject2
      }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  var params = args[0];
  if (!options || !options.formatArgs || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  var formatArgs = options.formatArgs;
  var keys = Object.keys(formatArgs);
  for (var i = 0; i < keys.length; i++) {
    var name = keys[i];
    var formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      var errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id2, name, res) {
  var result = {
    errMsg: name + ":ok"
  };
  {
    result.errSubject = name;
  }
  return invokeCallback(id2, extend(res || {}, result));
}
function invokeFail(id2, name, errMsg) {
  var errRes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var errMsgPrefix = name + ":fail";
  var apiErrMsg = "";
  if (!errMsg) {
    apiErrMsg = errMsgPrefix;
  } else if (errMsg.indexOf(errMsgPrefix) === 0) {
    apiErrMsg = errMsg;
  } else {
    apiErrMsg = errMsgPrefix + " " + errMsg;
  }
  var res = extend({
    errMsg: apiErrMsg
  }, errRes);
  {
    if (typeof UniError !== "undefined") {
      res = typeof errRes.errCode !== "undefined" ? new UniError(name, errRes.errCode, apiErrMsg) : new UniError(apiErrMsg, errRes);
    }
  }
  return invokeCallback(id2, res);
}
function beforeInvokeApi(name, args, protocol, options) {
  if (options && options.beforeInvoke) {
    var errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  var errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function checkCallback(callback) {
  if (!isFunction(callback)) {
    throw new Error('Invalid args: type check failed for args "callback". Expected Function');
  }
}
function wrapperOnApi(name, fn, options) {
  return (callback) => {
    checkCallback(callback);
    var errMsg = beforeInvokeApi(name, [callback], void 0, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    var isFirstInvokeOnApi = !findInvokeCallbackByName(name);
    createKeepAliveApiCallback(name, callback);
    if (isFirstInvokeOnApi) {
      onKeepAliveApiCallback(name);
      fn();
    }
  };
}
function wrapperOffApi(name, fn, options) {
  return (callback) => {
    checkCallback(callback);
    var errMsg = beforeInvokeApi(name, [callback], void 0, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    name = name.replace("off", "on");
    removeKeepAliveApiCallback(name, callback);
    var hasInvokeOnApi = findInvokeCallbackByName(name);
    if (!hasInvokeOnApi) {
      offKeepAliveApiCallback(name);
      fn();
    }
  };
}
function parseErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    var id2 = createAsyncApiCallback(name, args, options);
    var errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id2, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id2, name, res),
      reject: (errMsg2, errRes) => invokeFail(id2, name, parseErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineOnApi(name, fn, options) {
  return wrapperOnApi(name, fn, options);
}
function defineOffApi(name, fn, options) {
  return wrapperOffApi(name, fn, options);
}
function defineTaskApi(name, fn, protocol, options) {
  return promisify(name, wrapperTaskApi(name, fn, void 0, options));
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, void 0, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify(name, wrapperAsyncApi(name, fn, void 0, options));
}
var vueApp2;
function getVueApp() {
  return vueApp2;
}
function initVueApp(appVm) {
  var internalInstance = appVm.$;
  Object.defineProperty(internalInstance.ctx, "$children", {
    get() {
      return getAllPages().map((page) => page.$vm);
    }
  });
  var appContext = internalInstance.appContext;
  var mountPage = createMountPage(appContext);
  vueApp2 = extend(appContext.app, {
    mountPage(pageComponent, pageProps, pageContainer) {
      return mountPage(pageComponent, pageProps, pageContainer);
    },
    unmountPage: (pageInstance) => {
      unmountPage(pageInstance);
    }
  });
}
function getPage$BasePage(page) {
  return page.$basePage;
}
var pages = [];
function addCurrentPage(page) {
  var $page = getPage$BasePage(page);
  if (!$page.meta.isNVue) {
    return pages.push(page);
  }
  var index2 = pages.findIndex((p) => getPage$BasePage(p).id === $page.id);
  if (index2 > -1) {
    pages.splice(index2, 1, page);
  } else {
    pages.push(page);
  }
}
function getAllPages() {
  return pages;
}
function getCurrentPages$1() {
  var curPages = getCurrentBasePages();
  {
    return curPages.map((page) => page.$page);
  }
}
function getCurrentBasePages() {
  var curPages = [];
  pages.forEach((page) => {
    if (page.$.__isTabBar) {
      if (page.$.__isActive) {
        curPages.push(page);
      }
    } else {
      curPages.push(page);
    }
  });
  return curPages;
}
function removePage(curPage) {
  var index2 = pages.findIndex((page) => page === curPage);
  if (index2 === -1) {
    return;
  }
  var $basePage = getPage$BasePage(curPage);
  if (!$basePage.meta.isNVue) {
    getVueApp().unmountPage(curPage);
  }
  pages.splice(index2, 1);
  {
    var ins = curPage;
    if (ins.$.page) {
      ins.$.page.vm = null;
      ins.$.page = null;
    }
  }
}
function backbuttonListener() {
  uni.navigateBack({
    from: "backbutton",
    success() {
    }
    // 传入空方法，避免返回Promise，因为onBackPress可能导致fail
  });
}
var enterOptions$1 = /* @__PURE__ */ createLaunchOptions();
var launchOptions$1 = /* @__PURE__ */ createLaunchOptions();
function getLaunchOptions() {
  return extend({}, launchOptions$1);
}
function initLaunchOptions(_ref2) {
  var {
    path,
    query,
    referrerInfo,
    appScheme,
    appLink
  } = _ref2;
  extend(launchOptions$1, {
    path,
    query: query ? parseQuery(query) : {},
    referrerInfo: referrerInfo || {},
    // TODO uni-app x
    channel: void 0,
    launcher: void 0,
    appScheme,
    appLink
  });
  {
    launchOptions$1.query = new UTSJSONObject2(launchOptions$1.query);
  }
  extend(enterOptions$1, launchOptions$1);
  return enterOptions$1;
}
var ON_BACK_BUTTON = "onBackButton";
var ON_POP_GESTURE = "onPopGesture";
var OPEN_DIALOG_PAGE = "openDialogPage";
var homeDialogPages = [];
var homeSystemDialogPages = [];
var currentNormalDialogPage = null;
function setCurrentNormalDialogPage(value) {
  currentNormalDialogPage = value;
}
function getCurrentNormalDialogPage() {
  return currentNormalDialogPage;
}
var currentSystemDialogPage = null;
function setCurrentSystemDialogPage(value) {
  currentSystemDialogPage = value;
}
function getCurrentSystemDialogPage() {
  return currentSystemDialogPage;
}
function setupXPage(instance, pageInstance, pageVm, pageId, pagePath) {
  instance.$dialogPages = ref([]);
  var uniPage;
  if (pageInstance.openType === OPEN_DIALOG_PAGE) {
    if (pagePath.startsWith(SYSTEM_DIALOG_PAGE_PATH_STARTER)) {
      uniPage = getCurrentSystemDialogPage();
      setCurrentSystemDialogPage(null);
    } else {
      uniPage = getCurrentNormalDialogPage();
      setCurrentNormalDialogPage(null);
    }
  } else {
    uniPage = new UniNormalPageImpl();
  }
  pageVm.$.page = uniPage;
  uniPage.route = pageVm.$basePage.route;
  uniPage.optionsByJS = pageVm.$basePage.options;
  Object.defineProperty(uniPage, "options", {
    get: function() {
      return new UTSJSONObject2(pageVm.$basePage.options);
    }
  });
  uniPage.vm = pageVm;
  uniPage.$vm = pageVm;
  if (getPage$BasePage(pageVm).openType !== OPEN_DIALOG_PAGE) {
    addCurrentPageWithInitScope(pageId, pageVm, pageInstance);
  }
}
var nativeApp;
function getNativeApp() {
  return nativeApp;
}
function setNativeApp(app) {
  nativeApp = app;
}
function getPageManager() {
  return nativeApp.pageManager;
}
function removeUrlWrap(source) {
  if (source.startsWith("url(")) {
    if (source.split("format(").length > 1) {
      source = source.split("format(")[0].trim();
    }
    source = source.substring(4, source.length - 1);
  }
  if (source.startsWith('"') || source.startsWith("'")) {
    source = source.substring(1, source.length - 1);
  }
  return source;
}
function getLoadFontFaceOptions(options, res) {
  return {
    family: options.family,
    source: options.source,
    success: (_) => {
      res.resolve(null);
    },
    fail: (error) => {
      res.reject(
        // new LoadFontFaceErrorImpl(
        error.errMsg,
        error.errCode
        // )
      );
    }
  };
}
var loadFontFace = /* @__PURE__ */ defineAsyncApi(API_LOAD_FONT_FACE, (options, res) => {
  options.source = removeUrlWrap(options.source);
  if (options.global === true) {
    var app = getNativeApp();
    var fontInfo = getLoadFontFaceOptions(options, res);
    app.loadFontFace(fontInfo);
  } else {
    var page = getCurrentPage().vm;
    if (!page) {
      res.reject("page is not ready", 99);
      return;
    }
    if (page.$fontFamilySet.has(options.family)) {
      return;
    }
    page.$fontFamilySet.add(options.family);
    var _fontInfo = getLoadFontFaceOptions(options, res);
    page.$nativePage.loadFontFace(_fontInfo);
  }
});
function loadFontFaceByStyles(styles, global2) {
  styles = Array.isArray(styles) ? styles : [styles];
  var fontFaceStyle = [];
  styles.forEach((style) => {
    if (style["@FONT-FACE"]) {
      fontFaceStyle.push(...style["@FONT-FACE"]);
    }
  });
  if (fontFaceStyle.length === 0)
    return;
  fontFaceStyle.forEach((style) => {
    var fontFamily = style["fontFamily"];
    var fontWeight = style["fontWeight"];
    var fontStyle = style["fontStyle"];
    var fontVariant = style["fontVariant"];
    var src = style["src"];
    if (fontFamily != null && src != null) {
      loadFontFace({
        global: global2,
        family: fontFamily,
        source: src,
        desc: {
          style: fontStyle,
          weight: fontWeight,
          variant: fontVariant
        }
      });
    } else {
      console.warn("loadFontFace: fail, font-family or src is null");
    }
  });
}
function initNativePage(vm) {
  var instance = vm.$;
  if (instance.type.mpType === "app") {
    return;
  }
  var pageId = instance.root.attrs.__pageId;
  vm.$nativePage = getNativeApp().pageManager.findPageById(pageId + "");
  if (vm.$page) {
    vm.$page.__nativePageId = vm.$nativePage.pageId;
  }
}
function initFontFace(vm) {
  var _vm$$options$styles;
  var instance = vm.$;
  if (instance.type.mpType === "app") {
    return;
  }
  loadFontFaceByStyles((_vm$$options$styles = vm.$options.styles) !== null && _vm$$options$styles !== void 0 ? _vm$$options$styles : [], false);
}
function initComponentInstance(app) {
  app.config.uniX = {
    beforeSetupPage,
    initNativePage,
    initFontFace
  };
  !app.vapor && app.mixin({
    beforeCreate() {
      initNativePage(this);
    },
    beforeMount() {
      initFontFace(this);
    }
  });
}
var beforeSetupPage = (props, ctx) => {
  var {
    attrs: {
      __pageId,
      __pagePath,
      /*__pageQuery,*/
      __pageInstance
    }
  } = ctx;
  var instance = getCurrentGenericInstance();
  var pageVm = instance.proxy;
  initPageVm(pageVm, __pageInstance);
  {
    setupXPage(instance, __pageInstance, pageVm, __pageId, __pagePath);
    initNativePage(pageVm);
  }
};
function setupPage(component) {
  if (!component.__vapor) {
    var oldSetup = component.setup;
    component.inheritAttrs = false;
    component.setup = (props, ctx) => {
      beforeSetupPage(props, ctx);
      if (oldSetup) {
        return oldSetup(props, ctx);
      }
    };
  }
  return component;
}
function initScope(pageId, vm, pageInstance) {
  {
    Object.defineProperty(vm, "$viewToTempFilePath", {
      get() {
        return vm.$nativePage.viewToTempFilePath.bind(vm.$nativePage);
      }
    });
    Object.defineProperty(vm, "$getPageStyle", {
      get() {
        return vm.$nativePage.getPageStyle.bind(vm.$nativePage);
      }
    });
    Object.defineProperty(vm, "$setPageStyle", {
      get() {
        return vm.$nativePage.setPageStyle.bind(vm.$nativePage);
      }
    });
  }
  vm.getOpenerEventChannel = () => {
    if (!pageInstance.eventChannel) {
      pageInstance.eventChannel = new EventChannel(pageId);
    }
    return pageInstance.eventChannel;
  };
  return vm;
}
function addCurrentPageWithInitScope(pageId, pageVm, pageInstance) {
  addCurrentPage(initScope(pageId, pageVm, pageInstance));
}
function isVuePageAsyncComponent(component) {
  return isFunction(component);
}
var pagesMap = /* @__PURE__ */ new Map();
function definePage(pagePath, asyncComponent) {
  pagesMap.set(pagePath, once(createPageFactory(asyncComponent)));
}
function createPageFactory(component) {
  return () => {
    if (isVuePageAsyncComponent(component)) {
      return component().then((component2) => setupPage(clonedPageComponent(component2.default || component2)));
    }
    return setupPage(clonedPageComponent(component));
  };
}
function clonedPageComponent(component) {
  return extend({}, component);
}
function initRouteOptions(path, openType) {
  var routeOptions = JSON.parse(JSON.stringify(getRouteOptions(path)));
  routeOptions.meta = initRouteMeta(routeOptions.meta);
  if (openType !== "preloadPage" && !__uniConfig.realEntryPagePath && (openType === "reLaunch" || getCurrentPages().length === 0)) {
    routeOptions.meta.isQuit = true;
  } else if (!routeOptions.meta.isTabBar) {
    routeOptions.meta.isQuit = false;
  }
  return routeOptions;
}
var id = 1;
function getWebviewId() {
  return id;
}
function genWebviewId() {
  return id++;
}
function resetWebviewId() {
  id = 1;
}
var ANI_SHOW = "pop-in";
var ANI_DURATION = 300;
var ANI_CLOSE = "pop-out";
function hasLeadingSlash2(str) {
  return str.indexOf("/") == 0;
}
function getRealPath(path) {
  var fix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (hasLeadingSlash2(path)) {
    return path;
  }
  if (fix && path.indexOf(".") !== 0) {
    return "/" + path;
  }
  var currentPage = getCurrentPage().vm;
  var currentPath = !currentPage ? "/" : parseUrl(currentPage.route).path;
  var currentPathArray = currentPath.split("/");
  var pathArray = path.split("/");
  var resultArray = [];
  for (var index2 = 0; index2 < pathArray.length; index2++) {
    var element = pathArray[index2];
    if (element == "..") {
      currentPathArray.pop();
    } else if (element != ".") {
      resultArray.push(element);
    }
  }
  return addLeadingSlash(currentPathArray.concat(resultArray).join("/"));
}
var systemRoutes = [];
function registerSystemRoute(route, page) {
  var meta = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (systemRoutes.find((r) => r.path === route)) {
    return;
  }
  systemRoutes.push({
    path: route,
    meta: extend({
      isQuit: false,
      isEntry: false,
      route,
      navigationBar: {}
    }, meta)
  });
  definePage(route, page);
}
var API_ADD_INTERCEPTOR = "addInterceptor";
var API_REMOVE_INTERCEPTOR = "removeInterceptor";
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    var hooks = interceptors2[name];
    var hook = interceptor[name];
    if (isArray(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
var addInterceptor = /* @__PURE__ */ defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString(method) && isPlainObject(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
});
var removeInterceptor = /* @__PURE__ */ defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString(method)) {
    if (isPlainObject(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
});
var API_ON = "$on";
var API_ONCE = "$once";
var API_OFF = "$off";
var API_EMIT = "$emit";
var EventBus = class {
  constructor() {
    this.$emitter = new E$1();
  }
  on(name, callback) {
    return this.$emitter.on(name, callback);
  }
  once(name, callback) {
    return this.$emitter.once(name, callback);
  }
  off(name, callback) {
    if (!name) {
      this.$emitter.e = {};
      return;
    }
    this.$emitter.off(name, callback);
  }
  emit(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.$emitter.emit(name, ...args);
  }
};
var eventBus = new EventBus();
var $on = /* @__PURE__ */ defineSyncApi(API_ON, (name, callback) => {
  var id2 = eventBus.on(name, callback);
  {
    return id2;
  }
});
var $once = /* @__PURE__ */ defineSyncApi(API_ONCE, (name, callback) => {
  var id2 = eventBus.once(name, callback);
  {
    return id2;
  }
});
var $off = /* @__PURE__ */ defineSyncApi(API_OFF, (name, callback) => {
  if (!isArray(name))
    name = name ? [name] : [];
  name.forEach((n) => {
    eventBus.off(n, callback);
    if (
      // @ts-expect-error
      typeof __uniappx__nativeEventBus !== "undefined"
    ) {
      __uniappx__nativeEventBus.off(n, callback);
    }
  });
});
var $emit = /* @__PURE__ */ defineSyncApi(API_EMIT, function(name) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  eventBus.emit(name, ...args);
});
function __f__(type, filename) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (filename) {
    args.push(filename);
  }
  console[type].apply(console, args);
}
var appHooks = {
  [ON_UNHANDLE_REJECTION]: [],
  [ON_PAGE_NOT_FOUND]: [],
  [ON_ERROR]: [],
  [ON_SHOW]: [],
  [ON_HIDE]: []
};
function injectAppHooks(appInstance) {
  Object.keys(appHooks).forEach((type) => {
    appHooks[type].forEach((hook) => {
      injectHook(type, hook, appInstance);
    });
  });
}
function encodeQueryString(url) {
  if (!isString(url)) {
    return url;
  }
  var index2 = url.indexOf("?");
  if (index2 === -1) {
    return url;
  }
  var query = url.slice(index2 + 1).trim().replace(/^(\?|#|&)/, "");
  if (!query) {
    return url;
  }
  url = url.slice(0, index2);
  var params = [];
  query.split("&").forEach((param) => {
    var parts = param.replace(/\+/g, " ").split("=");
    var key = parts.shift();
    var val = parts.length > 0 ? parts.join("=") : "";
    params.push(key + "=" + encodeURIComponent(val));
  });
  return params.length ? url + "?" + params.join("&") : url;
}
var ANIMATION_IN = ["slide-in-right", "slide-in-left", "slide-in-top", "slide-in-bottom", "fade-in", "zoom-out", "zoom-fade-out", "pop-in", "none"];
var ANIMATION_OUT = ["slide-out-right", "slide-out-left", "slide-out-top", "slide-out-bottom", "fade-out", "zoom-in", "zoom-fade-in", "pop-out", "none"];
var BaseRouteProtocol = {
  url: {
    type: String,
    required: true
  }
};
var API_NAVIGATE_TO = "navigateTo";
var API_REDIRECT_TO = "redirectTo";
var API_RE_LAUNCH = "reLaunch";
var API_SWITCH_TAB = "switchTab";
var API_NAVIGATE_BACK = "navigateBack";
var API_PRELOAD_PAGE = "preloadPage";
var API_UN_PRELOAD_PAGE = "unPreloadPage";
var NavigateToProtocol = /* @__PURE__ */ extend({}, BaseRouteProtocol, createAnimationProtocol(ANIMATION_IN));
var NavigateBackProtocol = /* @__PURE__ */ extend({
  delta: {
    type: Number
  }
}, createAnimationProtocol(ANIMATION_OUT));
var RedirectToProtocol = BaseRouteProtocol;
var ReLaunchProtocol = BaseRouteProtocol;
var SwitchTabProtocol = BaseRouteProtocol;
var NavigateToOptions = /* @__PURE__ */ createRouteOptions(API_NAVIGATE_TO);
var RedirectToOptions = /* @__PURE__ */ createRouteOptions(API_REDIRECT_TO);
var ReLaunchOptions = /* @__PURE__ */ createRouteOptions(API_RE_LAUNCH);
var SwitchTabOptions = /* @__PURE__ */ createRouteOptions(API_SWITCH_TAB);
var NavigateBackOptions = {
  formatArgs: {
    delta(value, params) {
      value = parseInt(value + "") || 1;
      params.delta = Math.min(getCurrentPages().length - 1, value);
    }
  }
};
function createAnimationProtocol(animationTypes) {
  return {
    animationType: {
      type: String,
      validator(type) {
        if (type && animationTypes.indexOf(type) === -1) {
          return "`" + type + "` is not supported for `animationType` (supported values are: `" + animationTypes.join("`|`") + "`)";
        }
      }
    },
    animationDuration: {
      type: Number
    }
  };
}
var navigatorLock;
function beforeRoute() {
  navigatorLock = "";
}
function createRouteOptions(type) {
  return {
    formatArgs: {
      url: createNormalizeUrl(type)
    },
    beforeAll: beforeRoute
  };
}
function createNormalizeUrl(type) {
  return function normalizeUrl(url, params) {
    if (!url) {
      return 'Missing required args: "url"';
    }
    url = normalizeRoute(url);
    var pagePath = url.split("?")[0];
    var routeOptions = getRouteOptions(pagePath, true);
    if (!routeOptions) {
      return "page `" + url + "` is not found";
    }
    if (type === API_NAVIGATE_TO || type === API_REDIRECT_TO) {
      if (routeOptions.meta.isTabBar) {
        return "can not ".concat(type, " a tabbar page");
      }
    } else if (type === API_SWITCH_TAB) {
      if (!routeOptions.meta.isTabBar) {
        return "can not switch to no-tabBar page";
      }
    }
    if ((type === API_SWITCH_TAB || type === API_PRELOAD_PAGE) && routeOptions.meta.isTabBar && params.openType !== "appLaunch") {
      url = pagePath;
    }
    if (routeOptions.meta.isEntry) {
      url = url.replace(routeOptions.alias, "/");
    }
    params.url = encodeQueryString(url);
    if (type === API_UN_PRELOAD_PAGE) {
      return;
    } else if (type === API_PRELOAD_PAGE) {
      {
        if (!routeOptions.meta.isNVue) {
          return "can not preload vue page";
        }
      }
      if (routeOptions.meta.isTabBar) {
        var pages2 = getCurrentPages();
        var tabBarPagePath = routeOptions.path.slice(1);
        if (pages2.find((page) => page.route === tabBarPagePath)) {
          return "tabBar page `" + tabBarPagePath + "` already exists";
        }
      }
      return;
    }
    if (navigatorLock === url && params.openType !== "appLaunch") {
      return "".concat(navigatorLock, " locked");
    }
    if (__uniConfig.ready) {
      navigatorLock = url;
    }
  };
}
var API_LOAD_FONT_FACE = "loadFontFace";
var FRONT_COLORS = ["#ffffff", "#000000"];
var API_SET_NAVIGATION_BAR_COLOR = "setNavigationBarColor";
var SetNavigationBarColorOptions = {
  formatArgs: {
    animation(animation2, params) {
      if (!animation2) {
        animation2 = {
          duration: 0,
          timingFunc: "linear"
        };
      }
      params.animation = {
        duration: animation2.duration || 0,
        timingFunc: animation2.timingFunc || "linear"
      };
    }
  }
};
var SetNavigationBarColorProtocol = {
  frontColor: {
    type: String,
    required: true,
    validator(frontColor) {
      if (FRONT_COLORS.indexOf(frontColor) === -1) {
        return 'invalid frontColor "'.concat(frontColor, '"');
      }
    }
  },
  backgroundColor: {
    type: String,
    required: true
  },
  animation: Object
};
var API_SET_NAVIGATION_BAR_TITLE = "setNavigationBarTitle";
var API_PAGE_SCROLL_TO = "pageScrollTo";
var PageScrollToProtocol = {
  scrollTop: Number,
  selector: String,
  duration: Number
};
var PageScrollToOptions = {
  formatArgs: {
    duration: 300
  }
};
var API_START_PULL_DOWN_REFRESH = "startPullDownRefresh";
var API_STOP_PULL_DOWN_REFRESH = "stopPullDownRefresh";
var IndexProtocol = {
  index: {
    type: Number,
    required: true
  }
};
var IndexOptions = {
  beforeInvoke() {
    var pageMeta = getCurrentPageMeta();
    if (pageMeta && !pageMeta.isTabBar) {
      return "not TabBar page";
    }
  },
  formatArgs: {
    index(value) {
      if (!__uniConfig.tabBar.list[value]) {
        return "tabbar item not found";
      }
    }
  }
};
var API_SET_TAB_BAR_ITEM = "setTabBarItem";
var SetTabBarItemProtocol = /* @__PURE__ */ extend({
  text: String,
  iconPath: String,
  selectedIconPath: String,
  pagePath: String
}, IndexProtocol);
var SetTabBarItemOptions = {
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend({
    pagePath(value, params) {
      if (value) {
        params.pagePath = removeLeadingSlash(value);
      }
    }
  }, IndexOptions.formatArgs)
};
var API_SET_TAB_BAR_STYLE = "setTabBarStyle";
var SetTabBarStyleProtocol = {
  color: String,
  selectedColor: String,
  backgroundColor: String,
  backgroundImage: String,
  backgroundRepeat: String,
  borderStyle: String
};
var SetTabBarStyleOptions = {
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: {
    backgroundImage(value, params) {
      {
        params.backgroundImage = value;
        return;
      }
    },
    borderStyle(value, params) {
      if (value) {
        params.borderStyle = value === "white" ? "white" : "black";
      }
    }
  }
};
var API_HIDE_TAB_BAR = "hideTabBar";
var API_SHOW_TAB_BAR = "showTabBar";
var API_HIDE_TAB_BAR_RED_DOT = "hideTabBarRedDot";
var HideTabBarRedDotProtocol = IndexProtocol;
var HideTabBarRedDotOptions = IndexOptions;
var API_SHOW_TAB_BAR_RED_DOT = "showTabBarRedDot";
var ShowTabBarRedDotProtocol = IndexProtocol;
var ShowTabBarRedDotOptions = IndexOptions;
var API_REMOVE_TAB_BAR_BADGE = "removeTabBarBadge";
var RemoveTabBarBadgeProtocol = IndexProtocol;
var RemoveTabBarBadgeOptions = IndexOptions;
var API_SET_TAB_BAR_BADGE = "setTabBarBadge";
var SetTabBarBadgeProtocol = /* @__PURE__ */ extend({
  text: {
    type: String,
    required: true
  }
}, IndexProtocol);
var SetTabBarBadgeOptions = {
  beforeInvoke: IndexOptions.beforeInvoke,
  formatArgs: /* @__PURE__ */ extend({
    text(value, params) {
      if (getLen(value) >= 4) {
        params.text = "...";
      }
    }
  }, IndexOptions.formatArgs)
};
function showWebview(nPage, animationType, animationDuration, showCallback) {
  nPage.show(/* @__PURE__ */ new Map([["animationType", animationType], ["animationDuration", animationDuration]]), showCallback);
}
function closeWebview(nPage, animationType, animationDuration, callback) {
  var options = /* @__PURE__ */ new Map([["animationType", animationType]]);
  if (typeof animationDuration === "number") {
    options.set("animationDuration", animationDuration);
  }
  nPage.close(options, callback);
}
var beforeRouteHooks = [];
var afterRouteHooks = [];
var pageReadyHooks = [];
function onBeforeRoute(hook) {
  beforeRouteHooks.push(hook);
}
function onAfterRoute(hook) {
  afterRouteHooks.push(hook);
}
function onPageReady(hook) {
  pageReadyHooks.push(hook);
}
function invokeBeforeRouteHooks(type) {
  invokeArrayFns(beforeRouteHooks, type);
}
function invokeAfterRouteHooks(type) {
  invokeArrayFns(afterRouteHooks, type);
}
function invokePageReadyHooks(page) {
  invokeArrayFns(pageReadyHooks, page);
}
var BORDER_COLORS = /* @__PURE__ */ new Map([["white", "rgba(255, 255, 255, 0.33)"], ["black", "rgba(0, 0, 0, 0.33)"]]);
function getBorderStyle(borderStyle2) {
  var value = BORDER_COLORS.get(borderStyle2);
  if (borderStyle2 && !value) {
    console.warn("4.23 \u7248\u672C\u8D77\uFF0C\u5728 pages.json \u8BBE\u7F6E tabbar borderStyle\u3001\u5728 uni.setTabBarStyle \u8BBE\u7F6E borderStyle \u65F6\u4EC5\u652F\u6301 white/black\uFF0C\u63A8\u8350\u4F7F\u7528 borderColor \u81EA\u5B9A\u4E49\u989C\u8272\u3002");
  }
  return value || BORDER_COLORS.get("black");
}
function fixBorderStyle(tabBarConfig) {
  var borderStyle2 = tabBarConfig.get("borderStyle");
  var borderColor2 = tabBarConfig.get("borderColor");
  var isBorderColorFilled = isString(borderColor2);
  borderStyle2 = getBorderStyle(borderStyle2);
  if (isBorderColorFilled) {
    borderStyle2 = borderColor2;
  }
  tabBarConfig.set("borderStyle", borderStyle2);
  tabBarConfig.delete("borderColor");
}
function parseRedirectInfo(app) {
  var _redirectInfo$get, _redirectInfo$get2, _redirectInfo$get3, _redirectInfo$get4, _redirectInfo$get5;
  var redirectInfo = app.getRedirectInfo();
  var path = (_redirectInfo$get = redirectInfo.get("path")) !== null && _redirectInfo$get !== void 0 ? _redirectInfo$get : "";
  var query = (_redirectInfo$get2 = redirectInfo.get("query")) !== null && _redirectInfo$get2 !== void 0 ? _redirectInfo$get2 : "";
  var userAction = (_redirectInfo$get3 = redirectInfo.get("userAction")) !== null && _redirectInfo$get3 !== void 0 ? _redirectInfo$get3 : false;
  var appScheme = (_redirectInfo$get4 = redirectInfo.get("appScheme")) !== null && _redirectInfo$get4 !== void 0 ? _redirectInfo$get4 : "";
  var appLink = (_redirectInfo$get5 = redirectInfo.get("appLink")) !== null && _redirectInfo$get5 !== void 0 ? _redirectInfo$get5 : "";
  var referrerInfo = {
    appId: app.appid,
    extraData: {}
  };
  return {
    path: path || "",
    query: query ? "?" + query : "",
    referrerInfo,
    userAction,
    appScheme,
    appLink
  };
}
var onTabBarMidButtonTapCallback = [];
var tabBar0 = null;
var selected0 = -1;
var tabs = /* @__PURE__ */ new Map();
function getTabList() {
  var tabConfig = __uniConfig.tabBar ? /* @__PURE__ */ new Map() : null;
  if (__uniConfig.tabBar) {
    for (var key in __uniConfig.tabBar) {
      tabConfig.set(key, __uniConfig.tabBar[key]);
    }
  }
  if (tabConfig === null) {
    return null;
  }
  var list = tabConfig.get("list");
  return list;
}
function init() {
  var _uniConfig$globalSty, _uniConfig$globalSty2;
  var list = getTabList();
  var style = /* @__PURE__ */ new Map();
  style.set("navigationStyle", "custom");
  style.set("pageOrientation", (_uniConfig$globalSty = (_uniConfig$globalSty2 = __uniConfig.globalStyle) === null || _uniConfig$globalSty2 === void 0 ? void 0 : _uniConfig$globalSty2.pageOrientation) !== null && _uniConfig$globalSty !== void 0 ? _uniConfig$globalSty : "portrait");
  var page = getPageManager().createPage(
    "tabBar",
    // id 后增加 Date.now() 保证唯一性，与 android 端统一
    "tabBar_".concat(Date.now()),
    style
  );
  var document2 = page.createDocument(new NodeData("root", "view", /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map([["flex", "1"]])));
  var tabParent = document2.createElement(new NodeData("tabs", "tabs", /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map([["overflow", "hidden"], ["flex", "1"]])));
  document2.appendChild(tabParent);
  tabBar0 = document2.getRealDomNodeById("tabs");
  var _tabBarConfig = extend({}, __uniConfig.tabBar);
  normalizeTabBarStyles2(_tabBarConfig, __uniConfig.themeConfig, getAppThemeFallbackOS());
  var tabBarConfig = /* @__PURE__ */ new Map();
  for (var key in _tabBarConfig) {
    tabBarConfig.set(key, _tabBarConfig[key]);
  }
  fixBorderStyle(tabBarConfig);
  tabBar0.initTabBar(tabBarConfig);
  tabBar0.addEventListener("tabBarItemTap", function(event) {
    var index2 = event.index;
    if (index2 !== selected0) {
      var item = list[index2];
      var path = item.pagePath;
      if (isString(path) && findPageRoute(getRealPath(path, true))) {
        uni.switchTab({
          url: getRealPath(path, true)
        });
      } else {
        console.error("switchTab: pagePath not found");
      }
    }
  });
  tabBar0.addEventListener("tabBarMidButtonTap", function(event) {
    onTabBarMidButtonTapCallback.forEach((callback) => {
      if (typeof callback === "function") {
        callback();
      }
    });
  });
  page.startRender();
  page.show(null);
}
function clearTabBarStatus() {
  tabBar0 = null;
  selected0 = -1;
  tabs.clear();
}
function removeTabBarPage(page) {
  var pagePath = getRealPath(page.route, true);
  if (tabs.get(pagePath) === page) {
    tabs.delete(pagePath);
    if (getTabIndex(pagePath) === selected0) {
      selected0 = -1;
    }
  }
}
function getTabBar() {
  return tabBar0;
}
function getTabIndex(path) {
  var list = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getTabList();
  var selected = -1;
  if (list && list.length !== 0) {
    for (var index2 = 0; index2 < list.length; index2++) {
      var page = list[index2];
      var pagePath = page.pagePath;
      if (isString(pagePath) && getRealPath(pagePath, true) == getRealPath(path, true)) {
        selected = index2;
        break;
      }
    }
  }
  return selected;
}
function findPageRoute(path) {
  return __uniRoutes.find((route) => route.path === path);
}
function createTab(path, query, callback) {
  registerPage({
    url: path,
    path,
    query,
    openType: "switchTab",
    onRegistered() {
      var page = getCurrentPage().vm;
      tabBar0.appendItem(page.$basePage.id.toString());
      callback(page);
    }
  });
}
function findTabPage(path) {
  var _tabs$get;
  var page = (_tabs$get = tabs.get(path)) !== null && _tabs$get !== void 0 ? _tabs$get : null;
  var pages2 = getAllPages();
  pages2.forEach((item) => item.$.__isActive = item === page);
  if (page !== null) {
    var index2 = pages2.indexOf(page);
    if (index2 !== pages2.length - 1) {
      pages2.splice(index2, 1);
      pages2.push(page);
    }
  }
  return page;
}
function isTabPage(page) {
  var has2 = false;
  tabs.forEach((value, key) => {
    if (value === page) {
      has2 = true;
    }
  });
  return has2;
}
var TabPageInfo = class {
  constructor(page, isFirst) {
    this.page = page;
    this.isFirst = isFirst;
  }
};
function getTabPage(path) {
  var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var rebuild = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var callback = arguments.length > 3 ? arguments[3] : void 0;
  var page = findTabPage(path);
  var isFirst = false;
  if (page === null || rebuild) {
    isFirst = true;
    createTab(path, query, (page2) => {
      tabs.set(path, page2);
      callback(new TabPageInfo(page2, isFirst));
    });
  } else {
    callback(new TabPageInfo(page, isFirst));
  }
}
function switchSelect(selected, path) {
  var _getCurrentPage;
  var query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var rebuild = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var callback = arguments.length > 4 ? arguments[4] : void 0;
  var shouldShow = false;
  if (tabBar0 === null) {
    init();
  }
  var currentPage = (_getCurrentPage = getCurrentPage()) === null || _getCurrentPage === void 0 ? void 0 : _getCurrentPage.vm;
  var type = currentPage == null ? "appLaunch" : "switchTab";
  invokeBeforeRouteHooks(type);
  getTabPage(getRealPath(path, true), query, rebuild, (pageInfo) => {
    callback === null || callback === void 0 || callback();
    var page = pageInfo.page;
    if (currentPage !== page) {
      shouldShow = true;
      if (currentPage && isTabPage(currentPage)) {
        invokeHook(currentPage, ON_HIDE);
      }
    }
    tabBar0.switchSelect(page.$basePage.id.toString(), selected);
    if (shouldShow) {
      invokeHook(page, ON_SHOW);
    }
    selected0 = selected;
    invokeAfterRouteHooks(type);
  });
}
var APP_THEME_AUTO = "auto";
var THEME_KEY_PREFIX = "@";
function getAppThemeFallbackOS() {
  var fallbackOSTheme = "light";
  try {
    var appTheme = uni.getAppBaseInfo().appTheme;
    fallbackOSTheme = appTheme;
    if (appTheme === APP_THEME_AUTO) {
      var osTheme = uni.getDeviceInfo().osTheme;
      fallbackOSTheme = osTheme;
    }
    return fallbackOSTheme;
  } catch (e) {
    console.error(e);
    return fallbackOSTheme;
  }
}
var appThemeChangeCallbackId = -1;
function clearAppThemeChangeCallbackId() {
  appThemeChangeCallbackId = -1;
}
function registerThemeChange(callback) {
  try {
    if (appThemeChangeCallbackId !== -1) {
      uni.offAppThemeChange(appThemeChangeCallbackId);
      clearAppThemeChangeCallbackId();
    }
    appThemeChangeCallbackId = uni.onAppThemeChange(function(res1) {
      var appThemeMode = res1["appTheme"];
      callback(appThemeMode);
    });
  } catch (e) {
  }
}
var onThemeChange2 = function(themeMode) {
  var handlePage = () => {
    var pages2 = getAllPages();
    pages2.forEach((page) => {
      var basePage = getPage$BasePage(page);
      var routeOptions = initRouteOptions(basePage.path, "");
      routeOptions.meta.isQuit = basePage.meta.isQuit;
      var style = parsePageStyle(routeOptions);
      page.$page.setPageStyle(new UTSJSONObject2(style));
    });
  };
  handlePage();
  var handleTabBar = () => {
    var tabBar = getTabBar();
    if (tabBar !== null) {
      var tabBarConfig = __uniConfig.getTabBarConfig();
      normalizeTabBarStyles2(tabBarConfig, __uniConfig.themeConfig, themeMode);
      var tabBarStyle = /* @__PURE__ */ new Map();
      var tabBarConfigKeys = Object.keys(tabBarConfig);
      tabBarConfigKeys.forEach((key) => {
        var value = tabBarConfig[key];
        if (isString(value)) {
          tabBarStyle.set(key, value);
        } else if (isArray(value)) {
          var valueAsArray = value;
          var index2 = 0;
          valueAsArray.forEach((item) => {
            var tabBarItemMap = /* @__PURE__ */ new Map();
            tabBarItemMap.set("index", index2);
            Object.keys(item).forEach((tabBarItemkey) => {
              if (item[tabBarItemkey] != null) {
                tabBarItemMap.set(tabBarItemkey, item[tabBarItemkey]);
              }
            });
            tabBar.setTabBarItem(tabBarItemMap);
            index2++;
          });
        }
      });
      fixBorderStyle(tabBarStyle);
      tabBar.setTabBarStyle(tabBarStyle);
    }
  };
  handleTabBar();
};
function normalizePageStyles(pageStyle, themeConfig, themeMode) {
  var themeMap = themeConfig === null || themeConfig === void 0 ? void 0 : themeConfig[themeMode];
  if (!themeMap) {
    return;
  }
  normalizeStyles2(pageStyle, themeMap);
}
function normalizeStyles2(style, themeMap) {
  Object.keys(style).forEach((key) => {
    var value = style[key];
    if (isString(value)) {
      var valueAsString = value;
      if (valueAsString.startsWith(THEME_KEY_PREFIX)) {
        var valueKey = valueAsString.slice(1);
        var configValue = themeMap[valueKey];
        if (configValue != null) {
          style[key] = configValue;
        }
      }
    } else if (isArray(value)) {
      var valueAsArray = value;
      valueAsArray.forEach((item) => {
        normalizeStyles2(item, themeMap);
      });
    } else if (isPlainObject(value)) {
      normalizeStyles2(value, themeMap);
    }
  });
}
function normalizeTabBarStyles2(tabBar, themeConfig, themeMode) {
  if (!themeConfig) {
    return;
  }
  var themeMap = themeConfig[themeMode];
  if (themeMap == null) {
    return;
  }
  normalizeStyles2(tabBar, themeMap);
}
function useTheme() {
  registerThemeChange(onThemeChange2);
}
function setStatusBarStyle() {
  var page;
  {
    var currentPage = getCurrentPage();
    var dialogPages = currentPage === null || currentPage === void 0 ? void 0 : currentPage.getDialogPages();
    var systemDialogPages = getSystemDialogPages(currentPage);
    if (systemDialogPages !== null && systemDialogPages !== void 0 && systemDialogPages.length && dialogPages !== null && dialogPages !== void 0 && dialogPages.length) {
      var lastSystemDialogPage = systemDialogPages[systemDialogPages.length - 1];
      var lastDialogPage = dialogPages[dialogPages.length - 1];
      page = // @ts-expect-error
      Number(lastSystemDialogPage.__nativePageId) > Number(lastDialogPage.__nativePageId) ? lastSystemDialogPage.vm : lastDialogPage.vm;
    } else if (dialogPages !== null && dialogPages !== void 0 && dialogPages.length) {
      page = dialogPages[dialogPages.length - 1].vm;
    } else if (systemDialogPages !== null && systemDialogPages !== void 0 && systemDialogPages.length) {
      page = systemDialogPages[systemDialogPages.length - 1].vm;
    } else {
      page = currentPage === null || currentPage === void 0 ? void 0 : currentPage.vm;
    }
  }
  if (page) {
    var nativePage = page.$nativePage;
    nativePage.applyStatusBarStyle();
  }
}
function closeNativeDialogPage(dialogPage, animationType, animationDuration, callback) {
  var _dialogPage$vm;
  var webview = getNativeApp().pageManager.findPageById(((_dialogPage$vm = dialogPage.vm) === null || _dialogPage$vm === void 0 ? void 0 : _dialogPage$vm.$basePage.id) + "");
  if (webview) {
    closeWebview(webview, animationType || "none", animationDuration || 0, () => {
      getVueApp().unmountPage(dialogPage.vm);
      setStatusBarStyle();
    });
  }
}
var closeDialogPage = (options) => {
  var _options$success, _options$complete;
  var currentPages = getCurrentPages();
  var currentPage = currentPages[currentPages.length - 1];
  if (!currentPage) {
    triggerFailCallback$1(options, "currentPage is null");
    return;
  }
  if ((options === null || options === void 0 ? void 0 : options.animationType) === "pop-out") {
    options.animationType = "none";
  }
  if (options !== null && options !== void 0 && options.dialogPage) {
    var dialogPage = options === null || options === void 0 ? void 0 : options.dialogPage;
    if (!(dialogPage instanceof UniDialogPageImpl)) {
      triggerFailCallback$1(options, "dialogPage is not a valid page");
      return;
    }
    var parentPage = dialogPage.getParentPage();
    if (!isSystemDialogPage(dialogPage)) {
      if (parentPage && (isTabPage(parentPage.vm) || currentPages.indexOf(parentPage) !== -1)) {
        var parentDialogPages = parentPage.getDialogPages();
        var index2 = parentDialogPages.indexOf(dialogPage);
        closeNativeDialogPage(dialogPage, (options === null || options === void 0 ? void 0 : options.animationType) || "auto", (options === null || options === void 0 ? void 0 : options.animationDuration) || ANI_DURATION);
        parentDialogPages.splice(index2, 1);
        if (index2 === parentDialogPages.length) {
          dialogPageTriggerPrevDialogPageLifeCycle(parentPage, ON_SHOW);
        }
      } else {
        triggerFailCallback$1(options, "dialogPage is not a valid page");
        return;
      }
    } else {
      var systemDialogPages = getSystemDialogPages(parentPage);
      if (systemDialogPages) {
        var _index = systemDialogPages.indexOf(dialogPage);
        if (_index > -1) {
          closeNativeDialogPage(dialogPage, (options === null || options === void 0 ? void 0 : options.animationType) || "auto", (options === null || options === void 0 ? void 0 : options.animationDuration) || ANI_DURATION);
          systemDialogPages.splice(_index, 1);
          if (_index === systemDialogPages.length) {
            dialogPageTriggerPrevDialogPageLifeCycle(parentPage, ON_SHOW);
          }
        } else {
          triggerFailCallback$1(options, "dialogPage is not a valid page");
        }
      }
      return;
    }
  } else {
    var dialogPages = currentPage.getDialogPages();
    for (var i = dialogPages.length - 1; i >= 0; i--) {
      closeNativeDialogPage(dialogPages[i], (options === null || options === void 0 ? void 0 : options.animationType) || "auto", (options === null || options === void 0 ? void 0 : options.animationDuration) || ANI_DURATION);
      if (i > 0) {
        invokeHook(dialogPages[i - 1].$vm, ON_SHOW);
      }
      dialogPages[i] = null;
    }
    dialogPages.length = 0;
  }
  var successOptions = {
    errMsg: "closeDialogPage: ok"
  };
  options === null || options === void 0 || (_options$success = options.success) === null || _options$success === void 0 || _options$success.call(options, successOptions);
  options === null || options === void 0 || (_options$complete = options.complete) === null || _options$complete === void 0 || _options$complete.call(options, successOptions);
};
function triggerFailCallback$1(options, errMsg) {
  var _options$fail, _options$complete2;
  var failOptions = new UniError("uni-openDialogPage", 4, "openDialogPage: fail, ".concat(errMsg));
  options === null || options === void 0 || (_options$fail = options.fail) === null || _options$fail === void 0 || _options$fail.call(options, failOptions);
  options === null || options === void 0 || (_options$complete2 = options.complete) === null || _options$complete2 === void 0 || _options$complete2.call(options, failOptions);
}
function parsePageStyle(route) {
  var style = /* @__PURE__ */ new Map();
  var routeMeta = route.meta;
  var routeKeys = [
    "id",
    "route",
    "i18n",
    "isQuit",
    "isEntry",
    "isTabBar",
    "tabBarIndex",
    "tabBarText",
    "windowTop",
    "topWindow",
    "leftWindow",
    "rightWindow",
    "eventChannel",
    // 忽略 initRouteMeta产生的 navigationBar 对象
    "navigationBar"
  ];
  var navKeys = ["navigationBarTitleText", "navigationBarBackgroundColor", "navigationBarTextStyle", "navigationStyle"];
  normalizePageStyles(routeMeta, __uniConfig.themeConfig, getAppThemeFallbackOS());
  Object.keys(routeMeta).forEach((key) => {
    if (!routeKeys.includes(key) && !navKeys.includes(key)) {
      style.set(key, routeMeta[key]);
    }
  });
  var navigationBar = {};
  navKeys.forEach((key) => {
    if (key in routeMeta) {
      navigationBar[key] = routeMeta[key];
    }
  });
  if (Object.keys(navigationBar).length > 0) {
    if (navigationBar.navigationBarTextStyle !== "custom" && !routeMeta.isQuit && routeMeta.route !== __uniConfig.realEntryPagePath) {
      style.set("navigationBarAutoBackButton", true);
    }
    Object.keys(navigationBar).forEach((key) => {
      style.set(key, navigationBar[key]);
    });
  }
  return style;
}
function invokePageOnReady(pageComponentPublicInstance) {
  {
    invokePageReadyHooks(pageComponentPublicInstance);
    invokeHook(pageComponentPublicInstance, ON_READY);
  }
}
function registerPage(_ref, onCreated) {
  var {
    url,
    path,
    query,
    openType,
    webview,
    nvuePageVm,
    eventChannel,
    onRegistered
  } = _ref;
  var delay = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var id2 = genWebviewId();
  var routeOptions = initRouteOptions(path, openType);
  var pageStyle = parsePageStyle(routeOptions);
  if (openType === "reLaunch") {
    pageStyle.set("disableSwipeBack", true);
  }
  var nativePage = getPageManager().createPage(url, id2.toString(), pageStyle);
  if (onCreated) {
    onCreated(nativePage);
  }
  routeOptions.meta.id = parseInt(nativePage.pageId);
  var route = path.slice(1);
  var pageInstance = initPageInternalInstance(
    openType,
    url,
    query,
    routeOptions.meta,
    eventChannel,
    // TODO ThemeMode
    "light"
  );
  function handleHomeDialogPages(homePage, sourceDialogPages, targetDialogPages) {
    sourceDialogPages.forEach((dialogPage) => {
      dialogPage.getParentPage = () => homePage;
      targetDialogPages.push(dialogPage);
    });
    sourceDialogPages.length = 0;
  }
  function fn() {
    createVuePage(id2, route, query, pageInstance, {}, nativePage).then((pageComponentPublicInstance) => {
      var pages2 = getCurrentPages();
      if (pages2.length === 1) {
        var homePage = pages2[0];
        var sourceDialogPages = [];
        var targetDialogPages = [];
        if (homeDialogPages.length) {
          sourceDialogPages = homeDialogPages;
          targetDialogPages = homePage.getDialogPages();
        }
        if (homeSystemDialogPages.length) {
          sourceDialogPages = homeSystemDialogPages;
          targetDialogPages = getSystemDialogPages(homePage);
        }
        handleHomeDialogPages(homePage, sourceDialogPages, targetDialogPages);
      }
      nativePage.addPageEventListener(ON_POP_GESTURE, function(e) {
        uni.navigateBack({
          from: "popGesture",
          fail(e2) {
            if (e2.errMsg.endsWith("cancel")) {
              nativePage.show();
            }
          }
        });
      });
      nativePage.addPageEventListener(ON_UNLOAD, (_) => {
        invokeHook(pageComponentPublicInstance, ON_UNLOAD);
      });
      nativePage.addPageEventListener(ON_READY, (_) => {
        invokePageOnReady(pageComponentPublicInstance);
      });
      nativePage.addPageEventListener(ON_PAGE_SCROLL, (arg) => {
        invokeHook(pageComponentPublicInstance, ON_PAGE_SCROLL, {
          scrollTop: arg.scrollTop
        });
      });
      nativePage.addPageEventListener(ON_PULL_DOWN_REFRESH, (_) => {
        invokeHook(pageComponentPublicInstance, ON_PULL_DOWN_REFRESH);
      });
      nativePage.addPageEventListener(ON_REACH_BOTTOM, (_) => {
        invokeHook(pageComponentPublicInstance, ON_REACH_BOTTOM);
      });
      nativePage.addPageEventListener(ON_RESIZE, (arg) => {
        var args = {
          deviceOrientation: arg.deviceOrientation,
          size: {
            windowWidth: arg.size.windowWidth,
            windowHeight: arg.size.windowHeight,
            screenWidth: arg.size.screenWidth,
            screenHeight: arg.size.screenHeight
          }
        };
        invokeHook(pageComponentPublicInstance, ON_RESIZE, args);
      });
      nativePage.startRender();
      onRegistered === null || onRegistered === void 0 || onRegistered(nativePage);
    });
  }
  if (delay) {
    setTimeout(fn, delay);
  } else {
    fn();
  }
  return nativePage;
}
function registerDialogPage(_ref2, dialogPage, onCreated) {
  var _uniRoutes$find;
  var {
    url,
    path,
    query,
    openType,
    eventChannel,
    onRegistered
  } = _ref2;
  var delay = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var id2 = genWebviewId();
  var routeOptions = initRouteOptions(path, openType);
  var pageStyle = parsePageStyle(routeOptions);
  var routePageMeta = (_uniRoutes$find = __uniRoutes.find((route2) => route2.path === path)) === null || _uniRoutes$find === void 0 ? void 0 : _uniRoutes$find.meta;
  if (!(routePageMeta !== null && routePageMeta !== void 0 && routePageMeta.navigationStyle)) {
    pageStyle.set("navigationStyle", "custom");
  }
  if (!(routePageMeta !== null && routePageMeta !== void 0 && routePageMeta.backgroundColorContent)) {
    pageStyle.set("backgroundColorContent", "transparent");
  }
  if (typeof pageStyle.get("disableSwipeBack") !== "boolean") {
    pageStyle.set("disableSwipeBack", true);
  }
  var parentPage = dialogPage.getParentPage();
  var pageManager = getPageManager();
  var createDialogPage = pageManager.createDialogPage.bind(pageManager);
  var isHarmony = createDialogPage.length === 6;
  var nativePage = isHarmony ? createDialogPage(url, id2.toString(), pageStyle, parentPage === null || parentPage === void 0 ? void 0 : parentPage.getNativePage()) : createDialogPage(
    // @ts-expect-error
    parentPage ? parentPage.__nativePageId : "",
    id2.toString(),
    url,
    pageStyle
  );
  if (onCreated) {
    onCreated(nativePage);
  }
  routeOptions.meta.id = parseInt(nativePage.pageId);
  var route = path.startsWith(SYSTEM_DIALOG_PAGE_PATH_STARTER) ? path : path.slice(1);
  var pageInstance = initPageInternalInstance(
    openType,
    url,
    query,
    routeOptions.meta,
    eventChannel,
    // TODO ThemeMode
    "light"
  );
  function fn() {
    createVuePage(id2, route, query, pageInstance, {}, nativePage).then((pageComponentPublicInstance) => {
      nativePage.addPageEventListener(ON_POP_GESTURE, function(e) {
        closeDialogPage({
          dialogPage
        });
      });
      nativePage.addPageEventListener(ON_UNLOAD, (_) => {
        invokeHook(pageComponentPublicInstance, ON_UNLOAD);
        dialogPageTriggerParentShow(dialogPage, isSystemDialogPage(dialogPage) ? 1 : 0);
      });
      nativePage.addPageEventListener(ON_READY, (_) => {
        invokePageOnReady(pageComponentPublicInstance);
      });
      nativePage.addPageEventListener(ON_PAGE_SCROLL, (arg) => {
        invokeHook(pageComponentPublicInstance, ON_PAGE_SCROLL, arg);
      });
      nativePage.addPageEventListener(ON_PULL_DOWN_REFRESH, (_) => {
        invokeHook(pageComponentPublicInstance, ON_PULL_DOWN_REFRESH);
      });
      nativePage.addPageEventListener(ON_REACH_BOTTOM, (_) => {
        invokeHook(pageComponentPublicInstance, ON_REACH_BOTTOM);
      });
      nativePage.addPageEventListener(ON_RESIZE, (arg) => {
        var args = {
          deviceOrientation: arg.deviceOrientation,
          size: {
            windowWidth: arg.size.windowWidth,
            windowHeight: arg.size.windowHeight,
            screenWidth: arg.size.screenWidth,
            screenHeight: arg.size.screenHeight
          }
        };
        invokeHook(pageComponentPublicInstance, ON_RESIZE, args);
      });
      nativePage.startRender();
    });
  }
  if (delay) {
    setTimeout(fn, delay);
  } else {
    fn();
  }
  return nativePage;
}
function createVuePage(__pageId, __pagePath, __pageQuery, __pageInstance, pageOptions, nativePage) {
  var pageNode = nativePage.document.body;
  var app = getVueApp();
  var component = pagesMap.get(__pagePath)();
  var mountPage = (component2) => app.mountPage(component2, extend({
    __pageId,
    __pagePath,
    __pageQuery,
    __pageInstance
  }, __pageQuery), pageNode);
  if (isPromise(component)) {
    return component.then((component2) => mountPage(component2)).catch((err) => {
      console.error(err);
      throw err;
    });
  }
  return {
    then(fn) {
      return fn(mountPage(component));
    }
  };
}
var isInitEntryPage = false;
function initEntry(app) {
  if (isInitEntryPage) {
    return;
  }
  isInitEntryPage = true;
  var entryPagePath;
  var entryPageQuery;
  var redirectInfo = app.getRedirectInfo();
  if (redirectInfo.size > 0) {
    var {
      path,
      query
      /* referrerInfo, appScheme, appLink */
    } = parseRedirectInfo(app);
    if (path) {
      entryPagePath = path;
      entryPageQuery = query;
    }
  }
  if (!entryPagePath || entryPagePath === __uniConfig.entryPagePath) {
    if (entryPageQuery) {
      __uniConfig.entryPageQuery = entryPageQuery;
    }
    return;
  }
  var entryRoute = addLeadingSlash(entryPagePath);
  var routeOptions = getRouteOptions(entryRoute);
  if (!routeOptions) {
    return;
  }
  if (!routeOptions.meta.isTabBar) {
    __uniConfig.realEntryPagePath = __uniConfig.realEntryPagePath || __uniConfig.entryPagePath;
  }
  __uniConfig.entryPagePath = entryPagePath;
  __uniConfig.entryPageQuery = entryPageQuery;
}
function initGlobalEvent(app) {
  app.addKeyEventListener(ON_BACK_BUTTON, () => {
    var currentPage = getCurrentPage();
    if (currentPage) {
      var lastDialogPage = getLastDialogPage(currentPage);
      if (lastDialogPage) {
        handleDialogPageBack(lastDialogPage);
        return true;
      }
    }
    backbuttonListener();
    return true;
  });
}
function handleDialogPageBack(dialogPage) {
  var onBackPressRes = invokeHook(dialogPage.vm, ON_BACK_PRESS, {
    from: "navigateBack"
  });
  if (onBackPressRes !== true) {
    closeDialogPage({
      dialogPage,
      animationType: "auto"
    });
  }
}
var API_GET_LAUNCH_OPTIONS_SYNC = "getLaunchOptionsSync";
var launchOptions = {
  path: "",
  appScheme: null,
  appLink: null
};
var setLaunchOptionsSync = function(options) {
  launchOptions = options;
};
var getLaunchOptionsSync = /* @__PURE__ */ defineSyncApi(API_GET_LAUNCH_OPTIONS_SYNC, () => {
  var baseInfo = getLaunchOptions();
  return Object.assign({}, baseInfo, launchOptions);
});
var API_GET_ENTER_OPTIONS_SYNC = "getEnterOptionsSync";
var enterOptions = {
  path: "",
  appScheme: null,
  appLink: null
};
var setEnterOptionsSync = function(options) {
  enterOptions = options;
};
var getEnterOptionsSync = /* @__PURE__ */ defineSyncApi(API_GET_ENTER_OPTIONS_SYNC, () => {
  var baseInfo = getLaunchOptions();
  return Object.assign({}, baseInfo, enterOptions);
});
function initAppLaunch(appVm) {
  var _app$getLaunchOptions;
  injectAppHooks(appVm.$);
  var {
    entryPagePath,
    entryPageQuery,
    referrerInfo
  } = __uniConfig;
  var args = initLaunchOptions({
    path: entryPagePath,
    query: entryPageQuery,
    referrerInfo
  });
  var app = getNativeApp();
  var schemaLink = (_app$getLaunchOptions = app.getLaunchOptionsSync()) !== null && _app$getLaunchOptions !== void 0 ? _app$getLaunchOptions : {
    appScheme: "",
    appLink: ""
  };
  var appScheme = schemaLink.appScheme == null ? null : schemaLink.appScheme.length === 0 ? null : schemaLink.appScheme;
  var appLink = schemaLink.appLink == null ? null : schemaLink.appLink.length === 0 ? null : schemaLink.appLink;
  var launchOption = extend({}, args, {
    appScheme,
    appLink
  });
  setLaunchOptionsSync(launchOption);
  invokeHook(appVm, ON_LAUNCH, launchOption);
  var showOption = extend({}, launchOption);
  setEnterOptionsSync(showOption);
  invokeHook(appVm, ON_SHOW, showOption);
  var appStyle = appVm.$options.styles;
  if (appStyle) {
    loadFontFaceByStyles(appStyle, true);
  }
  useTheme();
}
function initAppError(appVm, nativeApp2) {
  nativeApp2.addEventListener(ON_ERROR, function(errorEvent) {
    invokeHook(appVm, ON_ERROR, errorEvent.error);
  });
}
var redirectTo = /* @__PURE__ */ defineAsyncApi(API_REDIRECT_TO, (_ref, _ref2) => {
  var {
    url
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var {
    path,
    query
  } = parseUrl(url);
  if (!entryPageState.isReady) {
    redirectToPagesBeforeEntryPages.push({
      args: {
        url,
        path,
        query
      },
      handler: {
        resolve: resolve2,
        reject: reject2
      }
    });
    return;
  }
  _redirectTo({
    url,
    path,
    query
  }).then(resolve2).catch(reject2);
}, RedirectToProtocol, RedirectToOptions);
function _redirectTo(_ref3) {
  var {
    url,
    path,
    query
  } = _ref3;
  return new Promise((resolve2) => {
    setTimeout(() => {
      var lastPage = getCurrentPage().vm;
      var isRegistered = false;
      var isShown = false;
      function callback() {
        if (!(isRegistered && isShown)) {
          return;
        }
        if (lastPage) {
          removePages(lastPage);
        }
        resolve2(void 0);
        setStatusBarStyle();
      }
      invokeAfterRouteHooks(API_REDIRECT_TO);
      showWebview(registerPage({
        url,
        path,
        query,
        openType: isTabPage(lastPage) || getAllPages().length === 1 ? "reLaunch" : "redirectTo",
        onRegistered() {
          isRegistered = true;
          callback();
        }
      }), "none", 0, () => {
        isShown = true;
        callback();
      });
      invokeBeforeRouteHooks(API_REDIRECT_TO);
    }, 0);
  });
}
function removePages(currentPage) {
  if (isTabPage(currentPage)) {
    var pages2 = getAllPages().slice(0, -1);
    pages2.forEach((page) => {
      closePage(page, "none");
    });
  } else {
    closePage(currentPage, "none");
  }
}
var $reLaunch = (_ref, _ref2) => {
  var {
    url
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var {
    path,
    query
  } = parseUrl(url);
  if (!entryPageState.isReady) {
    reLaunchPagesBeforeEntryPages.push({
      args: {
        url
      },
      handler: {
        resolve: resolve2,
        reject: reject2
      }
    });
    return;
  }
  _reLaunch({
    url,
    path,
    query
  }).then(resolve2).catch(reject2);
};
function _reLaunch(_ref3) {
  var {
    url,
    path,
    query
  } = _ref3;
  return new Promise((resolve2) => {
    setTimeout(() => {
      var pages2 = getAllPages().slice(0);
      var selected = getTabIndex(path);
      var isRegistered = false;
      var isShown = false;
      function callback() {
        if (!isRegistered || !isShown) {
          return;
        }
        pages2.forEach((page) => closePage(page, "none"));
        pages2.length = 0;
        resolve2(void 0);
        setStatusBarStyle();
      }
      if (selected === -1) {
        showWebview(registerPage({
          url,
          path,
          query,
          openType: "reLaunch",
          onRegistered() {
            isRegistered = true;
            callback();
          }
        }), "none", 0, () => {
          isShown = true;
          callback();
        });
      } else {
        isRegistered = true;
        isShown = true;
        switchSelect(selected, path, query, true, callback);
      }
    }, 0);
  });
}
var reLaunch = /* @__PURE__ */ defineAsyncApi(API_RE_LAUNCH, $reLaunch, ReLaunchProtocol, ReLaunchOptions);
function closePage(page, animationType, animationDuration) {
  if (page.$page) {
    clearDialogPages(page.$page);
  }
  var nativePage = page.$nativePage;
  nativePage && closeWebview(nativePage, animationType, animationDuration);
  removePage(page);
  removeTabBarPage(page);
}
function updateEntryPageIsReady(path) {
  if (!getCurrentPage() && path === addLeadingSlash(__uniConfig.entryPagePath)) {
    entryPageState.isReady = true;
  }
}
function handleBeforeEntryPageRoutes() {
  if (entryPageState.handledBeforeEntryPageRoutes) {
    return;
  }
  entryPageState.handledBeforeEntryPageRoutes = true;
  var navigateToPages = [...navigateToPagesBeforeEntryPages];
  navigateToPagesBeforeEntryPages.length = 0;
  navigateToPages.forEach((_ref) => {
    var {
      args,
      handler
    } = _ref;
    return $navigateTo(args, handler);
  });
  var switchTabPages = [...switchTabPagesBeforeEntryPages];
  switchTabPagesBeforeEntryPages.length = 0;
  switchTabPages.forEach((_ref2) => {
    var {
      args,
      handler
    } = _ref2;
    return $switchTab(args, handler);
  });
  var redirectToPages = [...redirectToPagesBeforeEntryPages];
  redirectToPagesBeforeEntryPages.length = 0;
  redirectToPages.forEach((_ref3) => {
    var {
      args,
      handler
    } = _ref3;
    return _redirectTo(args).then(handler.resolve).catch(handler.reject);
  });
  var reLaunchPages = [...reLaunchPagesBeforeEntryPages];
  reLaunchPagesBeforeEntryPages.length = 0;
  reLaunchPages.forEach((_ref4) => {
    var {
      args,
      handler
    } = _ref4;
    return $reLaunch(args, handler);
  });
}
function closePreSystemDialogPage(dialogPages, type) {
  var targetSystemDialogPages = dialogPages.filter((page) => page.route.startsWith(type));
  if (targetSystemDialogPages.length > 1) {
    setTimeout(() => {
      closeNativeDialogPage(targetSystemDialogPages[0]);
      dialogPages.splice(dialogPages.indexOf(targetSystemDialogPages[0]), 1);
    }, 150);
  }
}
function clearDialogPages(uniPage) {
  var dialogPages = uniPage.getDialogPages();
  for (var i = dialogPages.length - 1; i >= 0; i--) {
    closeNativeDialogPage(dialogPages[i]);
    if (i > 0) {
      invokeHook(dialogPages[i - 1].vm, ON_SHOW);
    }
  }
  var systemDialogPages = getSystemDialogPages(uniPage);
  for (var _i = 0; _i < systemDialogPages.length; _i++) {
    closeNativeDialogPage(systemDialogPages[_i]);
  }
  systemDialogPages.length = 0;
}
var $switchTab = (args, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var {
    url
  } = args;
  var {
    path,
    query
  } = parseUrl(url);
  updateEntryPageIsReady(path);
  if (!entryPageState.isReady) {
    switchTabPagesBeforeEntryPages.push({
      args,
      handler: {
        resolve: resolve2,
        reject: reject2
      }
    });
    return;
  }
  _switchTab({
    url,
    path,
    query
  }).then(resolve2).catch(reject2);
  handleBeforeEntryPageRoutes();
};
var switchTab = /* @__PURE__ */ defineAsyncApi(API_SWITCH_TAB, $switchTab, SwitchTabProtocol, SwitchTabOptions);
function _switchTab(_ref2) {
  var {
    url,
    path,
    query
  } = _ref2;
  var selected = getTabIndex(path);
  if (selected == -1) {
    return Promise.reject("tab ".concat(path, " not found"));
  }
  var pages2 = getCurrentBasePages();
  return new Promise((resolve2) => {
    setTimeout(() => {
      switchSelect(selected, path, query);
      for (var index2 = pages2.length - 1; index2 >= 0; index2--) {
        var page = pages2[index2];
        if (isTabPage(page)) {
          break;
        }
        closePage(page, "none");
      }
      resolve2(void 0);
    }, 0);
  });
}
var isLaunchWebviewReady = false;
function subscribeWebviewReady(_data, pageId) {
  if (isLaunchWebviewReady) {
    return;
  }
  {
    isLaunchWebviewReady = true;
  }
  onLaunchWebviewReady();
}
function onLaunchWebviewReady() {
  var _routeOptions;
  var entryPagePath = addLeadingSlash(__uniConfig.entryPagePath);
  var routeOptions = getRouteOptions(entryPagePath);
  if (!routeOptions) {
    if (__uniRoutes.length > 0) {
      entryPagePath = __uniRoutes[0].path;
      routeOptions = getRouteOptions(addLeadingSlash(entryPagePath));
    } else {
      console.error("\u672A\u5339\u914D\u5230\u8DEF\u7531\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
      return;
    }
  }
  var args = {
    url: entryPagePath + (__uniConfig.entryPageQuery || ""),
    openType: "appLaunch"
  };
  var handler = {
    resolve() {
    },
    reject() {
    }
  };
  if ((_routeOptions = routeOptions) !== null && _routeOptions !== void 0 && (_routeOptions = _routeOptions.meta) !== null && _routeOptions !== void 0 && _routeOptions.isTabBar) {
    return $switchTab(args, handler);
  }
  return $navigateTo(args, handler);
}
function clearWebviewReady() {
  isLaunchWebviewReady = false;
}
function initSubscribeHandlers() {
  subscribeWebviewReady();
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function initOn(app, unregisterApp2) {
  app.addEventListener(ON_SHOW, /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (event) {
      var _getCurrentPage;
      var app2 = getNativeApp();
      var MAX_TIMEOUT = 200;
      function getNewIntent() {
        return new Promise((resolve2, reject2) => {
          var callbackWrapper = null;
          var handleNewIntent = (newIntent) => {
            var _newIntent$appScheme, _newIntent$appLink;
            clearTimeout(timeout);
            app2.removeEventListener("onNewIntent", callbackWrapper);
            resolve2({
              appScheme: (_newIntent$appScheme = newIntent.appScheme) !== null && _newIntent$appScheme !== void 0 ? _newIntent$appScheme : null,
              appLink: (_newIntent$appLink = newIntent.appLink) !== null && _newIntent$appLink !== void 0 ? _newIntent$appLink : null
            });
          };
          callbackWrapper = app2.addEventListener("onNewIntent", handleNewIntent);
          var timeout = setTimeout(() => {
            app2.removeEventListener("onNewIntent", callbackWrapper);
            var appLink = {
              appScheme: null,
              appLink: null
            };
            resolve2(appLink);
          }, MAX_TIMEOUT);
        });
      }
      var schemaLink = yield getNewIntent();
      var showOptions = extend({
        path: __uniConfig.entryPagePath
      }, schemaLink);
      setEnterOptionsSync(showOptions);
      var page = (_getCurrentPage = getCurrentPage()) === null || _getCurrentPage === void 0 ? void 0 : _getCurrentPage.vm;
      invokeHook(getApp().vm, ON_SHOW, showOptions);
      if (page) {
        invokeHook(page, ON_SHOW);
      }
    });
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  }());
  app.addEventListener(ON_HIDE, function() {
    var _getCurrentPage2;
    var page = (_getCurrentPage2 = getCurrentPage()) === null || _getCurrentPage2 === void 0 ? void 0 : _getCurrentPage2.vm;
    invokeHook(getApp().vm, ON_HIDE);
    if (page) {
      invokeHook(page, ON_HIDE);
    }
  });
  app.addEventListener(ON_EXIT, function() {
    var appInstance = getApp().vm;
    var pages2 = getAllPages().slice(0);
    pages2.forEach((page) => closePage(page, "none"));
    clearTabBarStatus();
    clearWebviewReady();
    resetWebviewId();
    invokeHook(appInstance, ON_EXIT);
    unregisterApp2();
  });
}
function initService(app, unregisterApp2) {
  initOn(app, unregisterApp2);
}
var appCtx;
var entryPageState = {
  isReady: false,
  handledBeforeEntryPageRoutes: false
};
var navigateToPagesBeforeEntryPages = [];
var switchTabPagesBeforeEntryPages = [];
var redirectToPagesBeforeEntryPages = [];
var reLaunchPagesBeforeEntryPages = [];
function initAppVm(appVm) {
  appVm.$vm = appVm;
  appVm.$mpType = "app";
}
function initUniApp(uniApp) {
  uniApp.vm = appCtx;
  uniApp.$vm = appCtx;
  Object.defineProperty(uniApp, "globalData", {
    get: () => {
      return appCtx.globalData || {};
    }
  });
}
function registerApp(appVm, nativeApp2, uniApp) {
  setNativeApp(nativeApp2);
  initVueApp(appVm);
  appCtx = appVm;
  initAppVm(appCtx);
  initUniApp(uniApp);
  var defaultApp = {
    globalData: {}
  };
  extend(appCtx, defaultApp);
  defineGlobalData(appCtx, defaultApp.globalData);
  initService(nativeApp2, unregisterApp);
  initEntry(nativeApp2);
  initEntryPagePath(nativeApp2);
  initGlobalEvent(nativeApp2);
  initAppLaunch(appVm);
  initAppError(appVm, nativeApp2);
  initSubscribeHandlers();
  __uniConfig.ready = true;
}
function unregisterApp() {
  appCtx.$.appContext.app.unmount();
  appCtx = void 0;
  setNativeApp(void 0);
  __uniConfig.ready = false;
}
function initApp(app) {
  initComponentInstance(app);
}
function initEntryPagePath(app) {
  var redirectInfo = app.getRedirectInfo();
  var debugInfo = redirectInfo.get("debug");
  if (debugInfo) {
    var url = debugInfo.get("url");
    if (url && url != __uniConfig.entryPagePath) {
      __uniConfig.realEntryPagePath = __uniConfig.entryPagePath;
      var [path, query] = url.split("?");
      __uniConfig.entryPagePath = path;
      if (query) {
        __uniConfig.entryPageQuery = "?".concat(query);
      }
      return;
    }
  }
  if (__uniConfig.conditionUrl) {
    __uniConfig.realEntryPagePath = __uniConfig.entryPagePath;
    var conditionUrl = __uniConfig.conditionUrl;
    var [_path, _query] = conditionUrl.split("?");
    __uniConfig.entryPagePath = _path;
    if (_query) {
      __uniConfig.entryPageQuery = "?".concat(_query);
    }
  }
}
var $navigateTo = (args, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var {
    url,
    events,
    animationType,
    animationDuration
  } = args;
  var {
    path,
    query
  } = parseUrl(url);
  var [aniType, aniDuration] = initAnimation$1(path, animationType, animationDuration);
  updateEntryPageIsReady(path);
  if (!entryPageState.isReady) {
    navigateToPagesBeforeEntryPages.push({
      args,
      handler: {
        resolve: resolve2,
        reject: reject2
      }
    });
    return;
  }
  _navigateTo({
    url,
    path,
    query,
    events,
    aniType,
    aniDuration
  }).then(resolve2).catch(reject2);
  handleBeforeEntryPageRoutes();
};
var navigateTo = /* @__PURE__ */ defineAsyncApi(API_NAVIGATE_TO, $navigateTo, NavigateToProtocol, NavigateToOptions);
function _navigateTo(_ref2) {
  var _getCurrentPage;
  var {
    url,
    path,
    query,
    events,
    aniType,
    aniDuration
  } = _ref2;
  var currentPage = (_getCurrentPage = getCurrentPage()) === null || _getCurrentPage === void 0 ? void 0 : _getCurrentPage.vm;
  var currentRouteType = currentPage == null ? "appLaunch" : API_NAVIGATE_TO;
  invokeBeforeRouteHooks(currentRouteType);
  invokeHook(ON_HIDE);
  currentPage && invokeLastDialogPageHookByUniPage(currentPage.$page, ON_HIDE);
  var eventChannel = new EventChannel(getWebviewId() + 1, events);
  return new Promise((resolve2) => {
    setTimeout(() => {
      var noAnimation = aniType === "none" || aniDuration === 0;
      function callback(page) {
        showWebview(page, aniType, aniDuration, () => {
          invokeAfterRouteHooks(currentRouteType);
          resolve2({
            eventChannel
          });
          setStatusBarStyle();
        });
      }
      registerPage(
        {
          url,
          path,
          query,
          openType: "navigateTo",
          eventChannel,
          onRegistered(page) {
            if (noAnimation) {
              callback(page);
            }
          }
        },
        noAnimation ? void 0 : callback,
        // 有动画时延迟创建 vm
        noAnimation ? 0 : 1
      );
    }, 0);
  });
}
function initAnimation$1(path, animationType, animationDuration) {
  if (!getCurrentPage()) {
    return ["none", 0];
  }
  var {
    globalStyle
  } = __uniConfig;
  var meta = getRouteMeta(path);
  return [animationType || meta.animationType || globalStyle.animationType || ANI_SHOW, animationDuration || meta.animationDuration || globalStyle.animationDuration || ANI_DURATION];
}
function isDirectPage(page) {
  var _getCurrentPages$;
  return !!__uniConfig.realEntryPagePath && ((_getCurrentPages$ = getCurrentPages$1()[0]) === null || _getCurrentPages$ === void 0 ? void 0 : _getCurrentPages$.vm) === page;
}
function reLaunchEntryPage() {
  var _uniConfig$entryPage;
  __uniConfig.entryPagePath = __uniConfig.realEntryPagePath;
  __uniConfig.realEntryPagePath = "";
  reLaunch({
    url: (_uniConfig$entryPage = __uniConfig.entryPagePath) !== null && _uniConfig$entryPage !== void 0 && _uniConfig$entryPage.startsWith("/") ? __uniConfig.entryPagePath : "/" + __uniConfig.entryPagePath
  });
}
var navigateBack = /* @__PURE__ */ defineAsyncApi(API_NAVIGATE_BACK, (args, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var page = getCurrentPage().vm;
  if (!page) {
    return reject2("getCurrentPages is empty");
  }
  if (
    // popGesture 时不触发 onBackPress 事件，避免引发半屏弹窗这种冲突情况
    args.from !== "popGesture"
  ) {
    var onBackPressRes = invokeHook(page, ON_BACK_PRESS, {
      from: args.from || "navigateBack"
    });
    if (onBackPressRes !== true) {
      var dialogPages = page.$page.getDialogPages();
      if (dialogPages.length > 0) {
        var dialogPage = dialogPages[dialogPages.length - 1];
        onBackPressRes = invokeHook(dialogPage.$vm, ON_BACK_PRESS, {
          from: args.from || "navigateBack"
        });
      }
    }
    if (onBackPressRes === true) {
      return reject2("cancel");
    }
  }
  try {
    uni.hideToast();
    uni.hideLoading();
  } catch (error) {
    console.warn(error);
  }
  if (getPage$BasePage(page).meta.isQuit) {
    invokeHook(getApp().vm, ON_LAST_PAGE_BACK_PRESS);
  } else {
    if (isDirectPage(page)) {
      return reLaunchEntryPage();
    } else {
      var {
        delta,
        animationType,
        animationDuration
      } = args;
      back(delta, animationType, animationDuration);
    }
  }
  return resolve2();
}, NavigateBackProtocol, NavigateBackOptions);
function back(delta, animationType, animationDuration) {
  var pages2 = getCurrentBasePages();
  var len = pages2.length;
  var currentPage = pages2[len - 1];
  if (delta > 1) {
    pages2.slice(len - delta, len - 1).reverse().forEach((deltaPage) => {
      clearDialogPages(deltaPage.$page);
      var webview2 = getNativeApp().pageManager.findPageById(deltaPage.$basePage.id + "");
      if (webview2) {
        closeWebview(webview2, "none", 0);
      }
    });
  }
  var backPage = function(webview2) {
    if (animationType) {
      animationDuration = animationDuration || ANI_DURATION;
    } else {
      if (currentPage.$basePage.openType === "redirectTo") {
        animationType = ANI_CLOSE;
        animationDuration = ANI_DURATION;
      } else {
        animationType = "auto";
      }
    }
    closeWebview(webview2, animationType, animationDuration, () => {
      pages2.slice(len - delta, len).forEach((page) => removePage(page));
      invokeHook(ON_SHOW);
      invokeLastDialogPageHookByUniPage(getCurrentPage(), ON_SHOW);
      setStatusBarStyle();
    });
  };
  var webview = getNativeApp().pageManager.findPageById(currentPage.$basePage.id + "");
  clearDialogPages(currentPage.$page);
  webview && backPage(webview);
}
var openDialogPage = (options) => {
  var _options$success, _options$complete;
  var {
    url,
    animationType,
    animationDuration
  } = options;
  if (!options.url) {
    triggerFailCallback(options, "url is required");
    return null;
  }
  var {
    path,
    query
  } = parseUrl(url);
  path = normalizeRoute(path);
  var normalizeUrl = createNormalizeUrl("navigateTo");
  var errMsg = normalizeUrl(url, {});
  if (errMsg) {
    triggerFailCallback(options, errMsg);
    return null;
  }
  var parentPage = options.parentPage || null;
  var currentPages = getCurrentPages();
  if (parentPage) {
    if (currentPages.indexOf(parentPage) === -1) {
      triggerFailCallback(options, "parentPage is not a valid page");
      return null;
    }
  }
  if (currentPages.length && !parentPage) {
    parentPage = currentPages[currentPages.length - 1];
  }
  var dialogPage = markRaw(new UniDialogPageImpl());
  dialogPage.route = path;
  dialogPage.getParentPage = () => parentPage;
  dialogPage.$component = null;
  dialogPage.$disableEscBack = false;
  dialogPage.$triggerParentHide = !!options.triggerParentHide;
  var systemDialog = isSystemDialogPage(dialogPage);
  if (!systemDialog) {
    if (!parentPage) {
      homeDialogPages.push(dialogPage);
    } else {
      var dialogPages = parentPage.getDialogPages();
      dialogPageTriggerPrevDialogPageLifeCycle(parentPage, ON_HIDE);
      dialogPages.push(dialogPage);
    }
    setCurrentNormalDialogPage(dialogPage);
  } else {
    var targetSystemDialogPages = [];
    if (!parentPage) {
      targetSystemDialogPages = homeSystemDialogPages;
    } else {
      dialogPageTriggerPrevDialogPageLifeCycle(parentPage, ON_HIDE);
      targetSystemDialogPages = getSystemDialogPages(parentPage);
    }
    targetSystemDialogPages.push(dialogPage);
    if (isSystemActionSheetDialogPage(dialogPage)) {
      closePreSystemDialogPage(targetSystemDialogPages, SYSTEM_DIALOG_ACTION_SHEET_PAGE_PATH);
    }
    setCurrentSystemDialogPage(dialogPage);
  }
  var [aniType, aniDuration] = initAnimation(
    path,
    // @ts-expect-error
    animationType,
    animationDuration
  );
  var noAnimation = aniType === "none" || aniDuration === 0;
  function callback(page2) {
    showWebview(page2, aniType, aniDuration, () => {
      beforeRoute();
      dialogPageTriggerParentHide(dialogPage);
    });
  }
  var page = registerDialogPage(
    {
      url,
      path,
      query,
      openType: OPEN_DIALOG_PAGE
    },
    dialogPage,
    noAnimation ? void 0 : callback,
    // 有动画时延迟创建 vm
    noAnimation ? 0 : 1
  );
  if (systemDialog) {
    dialogPage.__nativeType = "systemDialog";
  }
  if (noAnimation) {
    callback(page);
  }
  var successOptions = {
    errMsg: "openDialogPage:ok"
  };
  (_options$success = options.success) === null || _options$success === void 0 || _options$success.call(options, successOptions);
  (_options$complete = options.complete) === null || _options$complete === void 0 || _options$complete.call(options, successOptions);
  return dialogPage;
};
function triggerFailCallback(options, errMsg) {
  var _options$fail, _options$complete2;
  var failOptions = new UniError("uni-openDialogPage", 4, "openDialogPage: fail, ".concat(errMsg));
  (_options$fail = options.fail) === null || _options$fail === void 0 || _options$fail.call(options, failOptions);
  (_options$complete2 = options.complete) === null || _options$complete2 === void 0 || _options$complete2.call(options, failOptions);
}
function initAnimation(path, animationType, animationDuration) {
  if (!getCurrentPage()) {
    return ["none", 0];
  }
  var {
    globalStyle
  } = __uniConfig;
  var meta = getRouteMeta(path);
  var _animationType = animationType || meta.animationType || globalStyle.animationType || ANI_SHOW;
  if (_animationType == "pop-in") {
    _animationType = "none";
  }
  return [_animationType, animationDuration || meta.animationDuration || globalStyle.animationDuration || ANI_DURATION];
}
var setTabBarBadge = /* @__PURE__ */ defineAsyncApi(API_SET_TAB_BAR_BADGE, (_ref, _ref2) => {
  var {
    index: index2,
    text
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.setTabBarBadge(/* @__PURE__ */ new Map([["index", index2], ["text", text]]));
  resolve2();
}, SetTabBarBadgeProtocol, SetTabBarBadgeOptions);
var removeTabBarBadge = /* @__PURE__ */ defineAsyncApi(API_REMOVE_TAB_BAR_BADGE, (_ref, _ref2) => {
  var {
    index: index2
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.removeTabBarBadge(/* @__PURE__ */ new Map([["index", index2]]));
  resolve2();
}, RemoveTabBarBadgeProtocol, RemoveTabBarBadgeOptions);
var setTabBarItem = /* @__PURE__ */ defineAsyncApi(API_SET_TAB_BAR_ITEM, (_ref, _ref2) => {
  var {
    index: index2,
    text,
    iconPath,
    selectedIconPath,
    pagePath,
    visible,
    iconfont
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  var item = /* @__PURE__ */ new Map();
  item.set("index", index2);
  if (typeof text === "string") {
    item.set("text", text);
  }
  if (typeof iconPath === "string") {
    item.set("iconPath", iconPath);
  }
  if (typeof selectedIconPath === "string") {
    item.set("selectedIconPath", selectedIconPath);
  }
  if (typeof pagePath === "string") {
    item.set("pagePath", pagePath);
  }
  if (typeof visible === "boolean") {
    item.set("visible", visible);
  }
  if (iconfont != null) {
    var iconfontOptions = iconfont;
    var _iconfont = /* @__PURE__ */ new Map([["text", iconfontOptions.text], ["selectedText", iconfontOptions.selectedText], ["fontSize", iconfontOptions.fontSize], ["color", iconfontOptions.color], ["selectedColor", iconfontOptions.selectedColor]]);
    item.set("iconfont", _iconfont);
  }
  tabBar.setTabBarItem(item);
  resolve2();
}, SetTabBarItemProtocol, SetTabBarItemOptions);
var setTabBarStyle = /* @__PURE__ */ defineAsyncApi(API_SET_TAB_BAR_STYLE, (options, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  var style = /* @__PURE__ */ new Map([["color", options.color], ["selectedColor", options.selectedColor], ["backgroundColor", options.backgroundColor], ["backgroundImage", options.backgroundImage], ["backgroundRepeat", options.backgroundRepeat], ["borderStyle", options.borderStyle], ["borderColor", options.borderColor]]);
  if (!!options.midButton) {
    var midButtonOptions = options.midButton;
    var midButton = /* @__PURE__ */ new Map([["width", midButtonOptions.width], ["height", midButtonOptions.height], ["iconPath", midButtonOptions.iconPath], ["text", midButtonOptions.text], ["iconPath", midButtonOptions.iconPath], ["iconWidth", midButtonOptions.iconWidth], ["backgroundImage", midButtonOptions.backgroundImage]]);
    if (!!midButtonOptions.iconfont) {
      var iconfontOptions = midButtonOptions.iconfont;
      var iconfont = /* @__PURE__ */ new Map([["text", iconfontOptions.text], ["selectedText", iconfontOptions.selectedText], ["fontSize", iconfontOptions.fontSize], ["color", iconfontOptions.color], ["selectedColor", iconfontOptions.selectedColor]]);
      midButton.set("iconfont", iconfont);
    }
    style.set("midButton", midButton);
  }
  fixBorderStyle(style);
  tabBar.setTabBarStyle(style);
  resolve2();
}, SetTabBarStyleProtocol, SetTabBarStyleOptions);
var hideTabBar = /* @__PURE__ */ defineAsyncApi(API_HIDE_TAB_BAR, (options, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.hideTabBar(/* @__PURE__ */ new Map([["animation", options === null || options === void 0 ? void 0 : options.animation]]));
  resolve2();
});
var showTabBar = /* @__PURE__ */ defineAsyncApi(API_SHOW_TAB_BAR, (args, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var tabBar = getTabBar();
  var animation2 = args && args.animation;
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.showTabBar(/* @__PURE__ */ new Map([["animation", animation2]]));
  resolve2();
});
var showTabBarRedDot = /* @__PURE__ */ defineAsyncApi(API_SHOW_TAB_BAR_RED_DOT, (_ref, _ref2) => {
  var {
    index: index2
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.showTabBarRedDot(/* @__PURE__ */ new Map([["index", index2]]));
  resolve2();
}, ShowTabBarRedDotProtocol, ShowTabBarRedDotOptions);
var hideTabBarRedDot = /* @__PURE__ */ defineAsyncApi(API_HIDE_TAB_BAR_RED_DOT, (_ref, _ref2) => {
  var {
    index: index2
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var tabBar = getTabBar();
  if (tabBar === null) {
    reject2("tabBar is not exist");
    return;
  }
  tabBar.hideTabBarRedDot(/* @__PURE__ */ new Map([["index", index2]]));
  resolve2();
}, HideTabBarRedDotProtocol, HideTabBarRedDotOptions);
var onTabBarMidButtonTap = (cb) => {
  onTabBarMidButtonTapCallback.push(cb);
};
var setNavigationBarColor = /* @__PURE__ */ defineAsyncApi(API_SET_NAVIGATION_BAR_COLOR, (_ref, _ref2) => {
  var {
    frontColor,
    backgroundColor: backgroundColor2
  } = _ref;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref2;
  var page = getCurrentPage();
  if (!page) {
    return reject2("getCurrentPages is empty");
  }
  var appPage = page.vm.$nativePage;
  appPage.updateStyle(/* @__PURE__ */ new Map([["navigationBarTextStyle", frontColor == "#000000" ? "black" : "white"], ["navigationBarBackgroundColor", backgroundColor2]]));
  resolve2();
}, SetNavigationBarColorProtocol, SetNavigationBarColorOptions);
var setNavigationBarTitle = /* @__PURE__ */ defineAsyncApi(API_SET_NAVIGATION_BAR_TITLE, (options, _ref) => {
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var page = getCurrentPage().vm;
  if (page == null) {
    reject2("page is not ready");
    return;
  }
  var appPage = page.$nativePage;
  appPage.updateStyle(/* @__PURE__ */ new Map([["navigationBarTitleText", options.title]]));
  resolve2();
});
var getElementById = /* @__PURE__ */ defineSyncApi("getElementById", (id2) => {
  var page = getCurrentPage();
  if (page == null) {
    return null;
  }
  return page.getElementById(id2);
});
function isVueComponent(comp) {
  var has$instance = typeof comp.$ === "object";
  var has$el = typeof comp.$el === "object";
  return has$instance && has$el;
}
var NodesRefImpl = class {
  constructor(selectorQuery, component, selector, single) {
    this._selectorQuery = selectorQuery;
    this._component = component;
    this._selector = selector;
    this._single = single;
  }
  boundingClientRect(callback) {
    var hasArg = callback === null || typeof callback === "function";
    if (hasArg) {
      this._selectorQuery._push(this._selector, this._component, this._single, {
        id: true,
        dataset: true,
        rect: true,
        size: true
      }, callback);
      return this._selectorQuery;
    } else {
      return this.boundingClientRect(null);
    }
  }
  fields(fields, callback) {
    this._selectorQuery._push(this._selector, this._component, this._single, fields, callback);
    return this._selectorQuery;
  }
  scrollOffset(callback) {
    this._selectorQuery._push(this._selector, this._component, this._single, {
      id: true,
      dataset: true,
      scrollOffset: true
    }, callback);
    return this._selectorQuery;
  }
  context(callback) {
    this._selectorQuery._push(this._selector, this._component, this._single, {
      context: true
    }, callback);
    return this._selectorQuery;
  }
  /**
   * fields({node:true})
   */
  node(_callback) {
    this._selectorQuery._push(this._selector, this._component, this._single, {
      node: true
    }, _callback);
    return this._selectorQuery;
  }
};
var SelectorQueryImpl = class {
  constructor(component) {
    this._component = null;
    this._component = component;
    this._queue = [];
    this._queueCb = [];
  }
  exec(callback) {
    {
      var _this$_component2;
      (_this$_component2 = this._component) === null || _this$_component2 === void 0 || (_this$_component2 = _this$_component2.$) === null || _this$_component2 === void 0 || _this$_component2.$waitNativeRender(() => {
        requestComponentInfo(this._component, this._queue, (res) => {
          var queueCbs = this._queueCb;
          res.forEach((info, _index) => {
            var queueCb = queueCbs[_index];
            if (isFunction(queueCb)) {
              queueCb(info);
            }
          });
          if (callback && isFunction(callback)) {
            callback(res);
          }
        });
      });
    }
    return this._nodesRef;
  }
  in(component) {
    {
      if (component && isVueComponent(component)) {
        this._component = component;
      }
    }
    return this;
  }
  select(selector) {
    this._nodesRef = new NodesRefImpl(this, this._component, selector, true);
    return this._nodesRef;
  }
  selectAll(selector) {
    this._nodesRef = new NodesRefImpl(this, this._component, selector, false);
    return this._nodesRef;
  }
  selectViewport() {
    this._nodesRef = new NodesRefImpl(this, null, "", true);
    return this._nodesRef;
  }
  _push(selector, component, single, fields, callback) {
    this._queue.push({
      component,
      selector,
      single,
      fields
    });
    this._queueCb.push(callback);
  }
};
var QuerySelectorHelper = class _QuerySelectorHelper {
  constructor(element, vnode, fields) {
    this._element = element;
    this._commentStartVNode = vnode;
    this._fields = fields;
  }
  /**
   * entry
   */
  static queryElement(element, selector, all, vnode, fields) {
    return new _QuerySelectorHelper(element, vnode, fields).query(selector, all);
  }
  /**
   * 执行查询
   * @param selector 选择器
   * @param all 是否查询所有 selectAll
   * @returns
   */
  query(selector, all) {
    if (this._element.nodeName == "#comment") {
      return this.queryFragment(this._element, selector, all);
    } else {
      return all ? this.querySelectorAll(this._element, selector) : this.querySelector(this._element, selector);
    }
  }
  queryFragment(el, selector, all) {
    var current = el.nextSibling;
    if (current == null) {
      return null;
    }
    if (all) {
      var result1 = [];
      while (true) {
        var queryResult = this.querySelectorAll(current, selector);
        if (queryResult != null) {
          result1.push(...queryResult);
        }
        current = current.nextSibling;
        if (current == null || this._commentStartVNode.anchor == current) {
          break;
        }
      }
      return result1;
    } else {
      var result2 = null;
      while (true) {
        result2 = this.querySelector(current, selector);
        current = current.nextSibling;
        if (result2 != null || current == null || this._commentStartVNode.anchor == current) {
          break;
        }
      }
      return result2;
    }
  }
  querySelector(element, selector) {
    var element2 = this.querySelf(element, selector);
    if (element2 == null) {
      element2 = element.querySelector(selector);
    }
    if (element2 != null) {
      return this.getNodeInfo(element2);
    }
    return null;
  }
  querySelectorAll(element, selector) {
    var nodesInfoArray = [];
    var element2 = this.querySelf(element, selector);
    if (element2 != null) {
      nodesInfoArray.push(this.getNodeInfo(element));
    }
    var findNodes = element.querySelectorAll(selector);
    findNodes === null || findNodes === void 0 || findNodes.forEach((el) => {
      nodesInfoArray.push(this.getNodeInfo(el));
    });
    return nodesInfoArray;
  }
  querySelf(element, selector) {
    if (element == null || selector.length < 2) {
      return null;
    }
    var selectorType = selector.charAt(0);
    var selectorName = selector.slice(1);
    if (selectorType == "." && element.classList.includes(selectorName)) {
      return element;
    }
    if (selectorType == "#" && element.getAttribute("id") == selectorName) {
      return element;
    }
    if (selector.toUpperCase() == element.nodeName.toUpperCase()) {
      return element;
    }
    return null;
  }
  /**
   * 查询元素信息
   * @param element
   * @returns
   */
  getNodeInfo(element) {
    var _element$getAttribute;
    if (this._fields.node == true) {
      var nodeInfo2 = {
        node: element
      };
      if (this._fields.size == true) {
        var rect2 = element.getBoundingClientRect();
        nodeInfo2.width = rect2.width;
        nodeInfo2.height = rect2.height;
      }
      return nodeInfo2;
    }
    var rect = element.getBoundingClientRect();
    var nodeInfo = {
      id: (_element$getAttribute = element.getAttribute("id")) === null || _element$getAttribute === void 0 ? void 0 : _element$getAttribute.toString(),
      dataset: null,
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height
    };
    return nodeInfo;
  }
};
function requestComponentInfo(vueComponent, queue22, callback) {
  var result = [];
  var el = vueComponent === null || vueComponent === void 0 ? void 0 : vueComponent.$el;
  if (el != null) {
    queue22.forEach((item) => {
      var queryResult = QuerySelectorHelper.queryElement(el, item.selector, !item.single, vueComponent === null || vueComponent === void 0 ? void 0 : vueComponent.$.subTree, item.fields);
      if (queryResult != null) {
        result.push(queryResult);
      }
    });
  }
  callback(result);
}
var createSelectorQuery = function() {
  var instance = getCurrentPage().vm;
  return new SelectorQueryImpl(instance);
};
var CanvasContextImpl = class {
  constructor(element) {
    this._element = element;
  }
  // @ts-expect-error 类型不匹配
  getContext(contextType) {
    return this._element.getContext(contextType);
  }
  toBlob(callback, type, quality) {
    throw new Error("Method not implemented.");
  }
  toDataURL(type, quality) {
    return this._element.toDataURL(type, quality);
  }
  createImage() {
    return new Image();
  }
  createPath2D() {
    return new Path2D();
  }
  requestAnimationFrame(callback) {
    return requestAnimationFrame(callback);
  }
  cancelAnimationFrame(taskId) {
    cancelAnimationFrame(taskId);
  }
};
var createCanvasContextAsync = /* @__PURE__ */ defineAsyncApi("createCanvasContextAsync", (options, _ref) => {
  var _options$component;
  var {
    resolve: resolve2,
    reject: reject2
  } = _ref;
  var page = getCurrentPage().vm;
  if (page == null) {
    return null;
  }
  createSelectorQuery().in((_options$component = options.component) !== null && _options$component !== void 0 ? _options$component : null).select("#" + options.id).fields({
    node: true
  }, (ret) => {
    var node = ret.node;
    if (node != null) {
      resolve2(new CanvasContextImpl(node));
    } else {
      var uniError = new UniError("uni-createCanvasContextAsync", -1, "canvas id invalid.");
      reject2(uniError.errMsg);
    }
  }).exec();
});
function queryElementTop(component, selector) {
  var _component$$el;
  var scrollNode = (_component$$el = component.$el) === null || _component$$el === void 0 ? void 0 : _component$$el.querySelector(selector);
  if (scrollNode != null) {
    return scrollNode.getBoundingClientRect().top;
  }
  return null;
}
var pageScrollTo = /* @__PURE__ */ defineAsyncApi(API_PAGE_SCROLL_TO, (options, res) => {
  var currentPage = getCurrentPage().vm;
  var scrollViewNode = currentPage === null || currentPage === void 0 ? void 0 : currentPage.$el;
  if (scrollViewNode == null || scrollViewNode.tagName != "SCROLL-VIEW") {
    res.reject("selector invalid");
    return;
  }
  var top2 = options.scrollTop;
  if (!!options.selector) {
    top2 = queryElementTop(currentPage, options.selector);
    if (top2 != null) {
      var currentScrollTop = scrollViewNode.scrollTop;
      top2 += currentScrollTop;
    }
  }
  if (top2 == null || top2 < 0) {
    res.reject("top or selector invalid");
    return;
  }
  if (options.offsetTop != null) {
    top2 += options.offsetTop;
  }
  scrollViewNode.scrollTop = top2;
  res.resolve();
}, PageScrollToProtocol, PageScrollToOptions);
var startPullDownRefresh = /* @__PURE__ */ defineAsyncApi(API_START_PULL_DOWN_REFRESH, (_options, res) => {
  var page = getCurrentPage().vm;
  if (page === null) {
    res.reject("page is not ready");
    return;
  }
  page.$nativePage.startPullDownRefresh({
    success: res.resolve,
    fail: (err) => {
      res.reject(err.errMsg, err);
    }
  });
});
var stopPullDownRefresh = /* @__PURE__ */ defineAsyncApi(API_STOP_PULL_DOWN_REFRESH, (_args, res) => {
  var page = getCurrentPage().vm;
  if (page === null) {
    res.reject("page is not ready");
    return;
  }
  page.$nativePage.stopPullDownRefresh();
  res.resolve();
});
var env = {
  USER_DATA_PATH: "unifile://usr/",
  CACHE_PATH: "unifile://cache/",
  SANDBOX_PATH: "unifile://sandbox/",
  TEMP_PATH: "unifile://temp/",
  ANDROID_INTERNAL_SANDBOX_PATH: "unifile://androidInternalSandbox/"
};
var _PerformanceEntryStatus;
var APP_LAUNCH = "appLaunch";
var PERFORMANCE_BUFFER_SIZE = 30;
var ENTRY_TYPE_RENDER = "render";
var ENTRY_TYPE_NAVIGATION = "navigation";
var RENDER_TYPE_FIRST_LAYOUT = "firstLayout";
var RENDER_TYPE_FIRST_RENDER = "firstRender";
var PerformanceEntryStatus = class _PerformanceEntryStatus2 {
  constructor(entryType, name) {
    this._state = _PerformanceEntryStatus2.STATE_EMPTY;
    this._entryData = {
      entryType,
      name,
      duration: 0,
      startTime: 0
    };
  }
  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
    if (this._state == _PerformanceEntryStatus2.STATE_BEFORE) {
      this.executeBefore();
    } else if (this._state == _PerformanceEntryStatus2.STATE_AFTER) {
      this.executeAfter();
    } else if (this._state == _PerformanceEntryStatus2.STATE_READY) {
      this.executeReady();
    }
  }
  get entryData() {
    return this._entryData;
  }
  executeBefore() {
    var _getCurrentPage;
    var page = (_getCurrentPage = getCurrentPage()) === null || _getCurrentPage === void 0 ? void 0 : _getCurrentPage.vm;
    if (page != null) {
      this._entryData.referrerPath = page.route;
    }
  }
  executeAfter() {
    var _getCurrentPage2;
    var page = (_getCurrentPage2 = getCurrentPage()) === null || _getCurrentPage2 === void 0 ? void 0 : _getCurrentPage2.vm;
    if (page != null) {
      this._entryData.pageId = parseInt(page.$nativePage.pageId);
      this._entryData.path = page.route;
    }
  }
  executeReady() {
  }
  getCurrentInnerPage() {
    var _getCurrentPage3;
    var currentPage = (_getCurrentPage3 = getCurrentPage()) === null || _getCurrentPage3 === void 0 ? void 0 : _getCurrentPage3.vm;
    if (currentPage == null) {
      return null;
    }
    return currentPage.$nativePage;
  }
};
_PerformanceEntryStatus = PerformanceEntryStatus;
_PerformanceEntryStatus.STATE_EMPTY = 0;
_PerformanceEntryStatus.STATE_BEFORE = 1;
_PerformanceEntryStatus.STATE_AFTER = 2;
_PerformanceEntryStatus.STATE_READY = 3;
var PerformanceEntryStatusLayout = class extends PerformanceEntryStatus {
  constructor() {
    super(ENTRY_TYPE_RENDER, RENDER_TYPE_FIRST_LAYOUT);
  }
  executeAfter() {
    super.executeAfter();
    this._entryData.startTime = Date.now();
  }
  executeReady() {
    super.executeReady();
    var innerPage = super.getCurrentInnerPage();
    if (innerPage != null) {
      this._entryData.duration = innerPage.getFirstPageLayoutDuration();
    }
  }
};
var PerformanceEntryStatusRender = class extends PerformanceEntryStatus {
  constructor() {
    super(ENTRY_TYPE_RENDER, RENDER_TYPE_FIRST_RENDER);
  }
  executeAfter() {
    super.executeAfter();
    this._entryData.startTime = Date.now();
  }
  executeReady() {
    super.executeReady();
    var innerPage = super.getCurrentInnerPage();
    if (innerPage != null) {
      this._entryData.duration = innerPage.getFirstPageRenderDuration();
    }
  }
};
var PerformanceEntryStatusNavigation = class extends PerformanceEntryStatus {
  constructor(name, navigationType) {
    super(ENTRY_TYPE_NAVIGATION, name);
    this._entryData.navigationType = navigationType;
  }
  executeBefore() {
    super.executeBefore();
    this._entryData.startTime = Date.now();
  }
  executeReady() {
    var innerPage = super.getCurrentInnerPage();
    if (innerPage != null) {
      this._entryData.duration = Date.now() - this._entryData.startTime;
      if (this._entryData.name == APP_LAUNCH) {
        this._entryData.duration += getNativeApp().getAppStartDuration();
      }
    }
  }
};
var PerformanceEntryQueue = class extends Array {
  constructor() {
    super(...arguments);
    this._queueSize = PERFORMANCE_BUFFER_SIZE;
  }
  get queueSize() {
    return this._queueSize;
  }
  set queueSize(value) {
    this._queueSize = value;
    if (this.length > value) {
      this.dequeue(this.length - value);
    }
  }
  push() {
    return this.enqueue(...arguments);
  }
  enqueue() {
    if (this.length > this._queueSize - 1) {
      this.shift();
    }
    return super.push(...arguments);
  }
  dequeue() {
    var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    this.splice(0, count);
  }
};
var PerformanceObserverEntryListImpl = class {
  constructor() {
    this._queue = new PerformanceEntryQueue();
  }
  push() {
    this._queue.push(...arguments);
  }
  getEntries() {
    return this._queue;
  }
  getEntriesByType(entryType) {
    return this._queue.filter((entry) => entry.entryType == entryType);
  }
  getEntriesByName(name, entryType) {
    return this._queue.filter((entry) => entry.entryType == entryType && entry.name == name);
  }
  clear() {
    this._queue.length = 0;
  }
  get bufferSize() {
    return this._queue.queueSize;
  }
  set bufferSize(size2) {
    this._queue.queueSize = size2;
  }
};
var PerformanceObserverImpl = class {
  constructor(performance, callback) {
    this._entryTypes = [];
    this._callback = null;
    this._entryList = new PerformanceObserverEntryListImpl();
    this._owner = performance;
    this._callback = callback;
  }
  observe(options) {
    if ((options === null || options === void 0 ? void 0 : options.entryTypes) != null) {
      this._entryTypes.length = 0;
      this._entryTypes.push(...options.entryTypes);
    }
    if (this._entryTypes.length > 0) {
      this._owner.connect(this);
    } else {
      this.disconnect();
    }
  }
  disconnect() {
    this._entryList.clear();
    this._owner.disconnect(this);
  }
  dispatchCallback() {
    var _this$_callback;
    (_this$_callback = this._callback) === null || _this$_callback === void 0 || _this$_callback.call(this, this._entryList);
  }
  get entryTypes() {
    return this._entryTypes;
  }
  get entryList() {
    return this._entryList;
  }
};
var PerformanceProvider = class {
  constructor() {
    this._entryStatus = [];
  }
  get entryStatus() {
    return this._entryStatus;
  }
  onBefore(type) {
    if (type == APP_LAUNCH || type == API_SWITCH_TAB || type == API_NAVIGATE_TO || type == API_REDIRECT_TO || type == API_NAVIGATE_BACK) {
      this._pushEntryStatus(ENTRY_TYPE_NAVIGATION, this._navigationToName(type), type);
    }
    if (type == APP_LAUNCH || type == API_NAVIGATE_TO || type == API_REDIRECT_TO) {
      this._pushEntryStatus(ENTRY_TYPE_RENDER, RENDER_TYPE_FIRST_LAYOUT, type);
      this._pushEntryStatus(ENTRY_TYPE_RENDER, RENDER_TYPE_FIRST_RENDER, type);
    }
    this._forwardState();
  }
  onAfter(type) {
    this._forwardState();
  }
  onReady() {
    this._forwardState();
  }
  removeAllStatus() {
    this._entryStatus.length = 0;
  }
  _pushEntryStatus(entryType, name, navigationType) {
    var entry = null;
    if (entryType == ENTRY_TYPE_NAVIGATION) {
      entry = new PerformanceEntryStatusNavigation(name, navigationType);
    } else if (entryType == ENTRY_TYPE_RENDER) {
      if (name == RENDER_TYPE_FIRST_LAYOUT) {
        entry = new PerformanceEntryStatusLayout();
      } else if (name == RENDER_TYPE_FIRST_RENDER) {
        entry = new PerformanceEntryStatusRender();
      }
    }
    if (entry != null) {
      this._entryStatus.push(entry);
    }
  }
  _forwardState() {
    this._entryStatus.forEach((entry) => {
      entry.state += 1;
    });
  }
  _navigationToName(type) {
    if (type == APP_LAUNCH) {
      return APP_LAUNCH;
    }
    return "route";
  }
};
var PerformanceAllocate = class {
  constructor(allEntryList, observerList) {
    this._allEntryList = allEntryList;
    this._observerList = observerList;
  }
  pushEntryStatus(status) {
    this.pushAllEntryData(status);
    this.pushObserverList(status);
  }
  pushAllEntryData(status) {
    status.forEach((entryStatus) => {
      this._allEntryList.push(entryStatus.entryData);
    });
  }
  pushObserverList(status) {
    this._observerList.forEach((observer) => {
      var entryList = observer.entryList;
      entryList.clear();
      status.forEach((entryStatus) => {
        var entryData = entryStatus.entryData;
        if (observer.entryTypes.includes(entryData.entryType)) {
          entryList.push(entryData);
        }
      });
      observer.dispatchCallback();
    });
  }
};
var PerformanceImpl = class {
  constructor() {
    this._allEntryList = new PerformanceObserverEntryListImpl();
    this._observerList = [];
    this._provider = new PerformanceProvider();
    this._allocate = new PerformanceAllocate(this._allEntryList, this._observerList);
    onBeforeRoute((type) => {
      this._provider.onBefore(type);
    });
    onAfterRoute((type) => {
      this._provider.onAfter(type);
      if (type == API_NAVIGATE_BACK) {
        this.dispatchObserver();
      }
    });
    onPageReady((page) => {
      this.dispatchObserver();
    });
  }
  dispatchObserver() {
    this._provider.onReady();
    this._allocate.pushEntryStatus(this._provider.entryStatus);
    this._provider.removeAllStatus();
  }
  createObserver(callback) {
    return new PerformanceObserverImpl(this, callback);
  }
  connect(observer) {
    var index2 = this._observerList.indexOf(observer);
    if (index2 < 0) {
      this._observerList.push(observer);
    }
  }
  disconnect(observer) {
    var index2 = this._observerList.indexOf(observer);
    if (index2 >= 0) {
      this._observerList.splice(index2, 1);
    }
  }
  getEntries() {
    return this._allEntryList.getEntries();
  }
  getEntriesByType(entryType) {
    return this._allEntryList.getEntriesByType(entryType);
  }
  getEntriesByName(name, entryType) {
    return this._allEntryList.getEntriesByName(name, entryType);
  }
  setBufferSize(size2) {
    this._allEntryList.bufferSize = size2;
  }
};
var getPerformance = function() {
  return new PerformanceImpl();
};
var callbackId = 1;
var proxy;
var keepAliveCallbacks = {};
function isUniElement(obj) {
  return obj && typeof obj.getNodeId === "function" && obj.pageId;
}
function isComponentPublicInstance(instance) {
  return instance && instance.$ && instance.$.proxy === instance;
}
function parseElement(obj) {
  if (isUniElement(obj)) {
    return obj;
  }
}
function serializeComponentPublicInstance(obj) {
  if (obj.$el) {
    return serializeUniElement(obj.$el, "ComponentPublicInstance");
  } else {
    return {
      __type__: "ComponentPublicInstance",
      pageId: "",
      nodeId: ""
    };
  }
}
function serializeArrayBuffer(obj) {
  if (typeof ArrayBufferWrapper !== "undefined") {
    return {
      __type__: "ArrayBuffer",
      value: new ArrayBufferWrapper(obj)
    };
  }
  return {
    __type__: "ArrayBuffer",
    value: obj
  };
}
function serializeUniElement(el, type) {
  var nodeId = "";
  var pageId = "";
  if (el && el.getNodeId) {
    pageId = el.pageId;
    nodeId = el.getNodeId();
  }
  return {
    __type__: type,
    pageId,
    nodeId
  };
}
function toRaw2(observed) {
  var raw = observed && observed.__v_raw;
  return raw ? toRaw2(raw) : observed;
}
function normalizeArg(arg, callbacks, keepAlive, context) {
  arg = toRaw2(arg);
  var isVaporAndroid = false;
  if (typeof arg === "function") {
    var id2;
    if (keepAlive) {
      var oldId = Object.keys(callbacks).find((id22) => callbacks[id22] === arg);
      id2 = oldId ? parseInt(oldId) : callbackId++;
      callbacks[id2] = arg;
    } else {
      id2 = callbackId++;
      callbacks[id2] = arg;
    }
    return id2;
  } else if (isArray(arg)) {
    context.depth++;
    return arg.map((item) => normalizeArg(item, callbacks, keepAlive, context));
  } else if (arg instanceof ArrayBuffer) {
    if (context.depth > 0) {
      context.nested = true;
    }
    return serializeArrayBuffer(arg);
  } else if (isPlainObject(arg) || isUniElement(arg)) {
    var uniElement = parseElement(arg);
    if (uniElement) {
      if (context.depth > 0 || isVaporAndroid) {
        context.nested = true;
      }
      return serializeUniElement(uniElement, "UniElement");
    } else if (isComponentPublicInstance(arg)) {
      if (context.depth > 0 || isVaporAndroid) {
        context.nested = true;
      }
      return serializeComponentPublicInstance(arg);
    } else {
      var newArg = {};
      Object.keys(arg).forEach((name) => {
        context.depth++;
        newArg[name] = normalizeArg(arg[name], callbacks, keepAlive, context);
      });
      return newArg;
    }
  }
  return arg;
}
function initUTSInstanceMethod(async, opts, instanceId, proxy2) {
  return initProxyFunction("method", async, opts, instanceId, proxy2);
}
function getProxy() {
  if (!proxy) {
    {
      proxy = {
        invokeSync(args, callback) {
          return nativeChannel.invokeSync("APP-SERVICE", args, callback);
        },
        invokeAsync(args, callback) {
          return nativeChannel.invokeAsync("APP-SERVICE", args, callback);
        }
      };
    }
  }
  return proxy;
}
function resolveSyncResult(args, res, returnOptions, instanceId, proxy2) {
  if (!res) {
    throw new Error("\u8FD4\u56DE\u503C\u4E3A\uFF1A" + JSON.stringify(res) + "\uFF1B\u8BF7\u6C42\u53C2\u6570\u4E3A\uFF1A" + JSON.stringify(args));
  }
  if (isString(res)) {
    try {
      res = JSON.parse(res);
    } catch (e) {
      throw new Error("JSON.parse(".concat(res, "): ") + e);
    }
  }
  if (res.errMsg) {
    throw new Error(res.errMsg);
  }
  if (returnOptions) {
    if (returnOptions.type === "interface" && typeof res.params === "number") {
      if (!res.params) {
        return null;
      }
      if (res.params === instanceId && proxy2) {
        return proxy2;
      }
      if (interfaceDefines[returnOptions.options]) {
        var ProxyClass = initUTSProxyClass(extend({
          instanceId: res.params
        }, interfaceDefines[returnOptions.options]));
        return new ProxyClass();
      }
    }
  }
  return res.params;
}
function invokePropGetter(args) {
  if (args.errMsg) {
    throw new Error(args.errMsg);
  }
  delete args.errMsg;
  return resolveSyncResult(args, getProxy().invokeSync(args, () => {
  }));
}
function initProxyFunction(type, async, _ref, instanceId, proxy2) {
  var {
    moduleName,
    moduleType,
    package: pkg,
    class: cls,
    name: methodName,
    method,
    companion,
    keepAlive,
    params: methodParams,
    return: returnOptions,
    errMsg
  } = _ref;
  if (!keepAlive) {
    keepAlive = (methodName.indexOf("on") === 0 || methodName.indexOf("off") === 0) && methodParams.length === 1 && methodParams[0].type === "UTSCallback";
  }
  var baseArgs = instanceId ? {
    moduleName,
    moduleType,
    id: instanceId,
    type,
    name: methodName,
    method: methodParams,
    nested: false,
    keepAlive
  } : {
    moduleName,
    moduleType,
    package: pkg,
    class: cls,
    name: method || methodName,
    type,
    companion,
    method: methodParams,
    nested: false,
    keepAlive
  };
  return function() {
    if (errMsg) {
      throw new Error(errMsg);
    }
    var callbacks = keepAlive ? keepAliveCallbacks : {};
    var invokeCallback2 = (_ref2) => {
      var {
        id: id2,
        name,
        params
      } = _ref2;
      var callback = callbacks[id2];
      if (callback) {
        callback(...params);
        if (!keepAlive) {
          delete callbacks[id2];
        }
      } else {
        console.error("uts\u63D2\u4EF6[".concat(moduleName, "] ").concat(pkg).concat(cls, ".").concat(methodName.replace("ByJs", ""), " ").concat(name, "\u56DE\u8C03\u51FD\u6570\u5DF2\u91CA\u653E\uFF0C\u4E0D\u80FD\u518D\u6B21\u6267\u884C\uFF0C\u53C2\u8003\u6587\u6863\uFF1Ahttps://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#keepalive"));
      }
    };
    var context = {
      depth: 0,
      nested: false
    };
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var invokeArgs = extend({}, baseArgs, {
      params: args.map((arg) => normalizeArg(arg, callbacks, keepAlive, context))
    });
    invokeArgs.nested = context.nested;
    if (async) {
      return new Promise((resolve2, reject2) => {
        getProxy().invokeAsync(invokeArgs, (res) => {
          if (res.type !== "return") {
            invokeCallback2(res);
          } else {
            if (res.errMsg) {
              reject2(res.errMsg);
            } else {
              resolve2(res.params);
            }
          }
        });
      });
    }
    return resolveSyncResult(invokeArgs, getProxy().invokeSync(invokeArgs, invokeCallback2), returnOptions, instanceId, proxy2);
  };
}
function initUTSStaticMethod(async, opts) {
  if (opts.main && !opts.method) {
    if (isUTSiOS()) {
      opts.method = "s_" + opts.name;
    }
  }
  return initProxyFunction("method", async, opts, 0);
}
var initUTSProxyFunction = initUTSStaticMethod;
function parseClassMethodName(name, methods) {
  if (typeof name === "string" && hasOwn(methods, name + "ByJs")) {
    return name + "ByJs";
  }
  return name;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isProxyInterfaceOptions(options) {
  return !isUndefined(options.instanceId);
}
function parseClassPropertySetter(name) {
  return "__$set" + capitalize(name);
}
function initUTSProxyClass(options) {
  var {
    moduleName,
    moduleType,
    package: pkg,
    class: cls,
    methods,
    props,
    setters,
    errMsg
  } = options;
  var baseOptions = {
    moduleName,
    moduleType,
    package: pkg,
    class: cls,
    errMsg
  };
  var instanceId;
  var constructorParams = [];
  var staticMethods = {};
  var staticProps = [];
  var staticSetters = {};
  var isProxyInterface = false;
  if (isProxyInterfaceOptions(options)) {
    isProxyInterface = true;
    instanceId = options.instanceId;
  } else {
    constructorParams = options.constructor.params;
    staticMethods = options.staticMethods;
    staticProps = options.staticProps;
    staticSetters = options.staticSetters;
  }
  if (isUTSiOS()) {
    if (constructorParams.find((p) => p.type === "UTSCallback" || p.type.indexOf("JSONObject") > 0)) {
      constructorParams.push({
        name: "_byJs",
        type: "boolean"
      });
    }
  }
  var ProxyClass = class UTSClass {
    constructor() {
      this.__instanceId = 0;
      if (errMsg) {
        throw new Error(errMsg);
      }
      var target = {};
      if (!isProxyInterface) {
        for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }
        this.__instanceId = initProxyFunction("constructor", false, extend({
          name: "constructor",
          keepAlive: false,
          params: constructorParams
        }, baseOptions), 0).apply(null, params);
      } else if (typeof instanceId === "number") {
        this.__instanceId = instanceId;
      }
      if (!this.__instanceId) {
        throw new Error("new ".concat(cls, " is failed"));
      }
      var instance = this;
      var proxy2 = new Proxy(instance, {
        get(_, name) {
          if (name === "__v_skip") {
            return true;
          }
          if (!target[name]) {
            name = parseClassMethodName(name, methods);
            if (hasOwn(methods, name)) {
              var {
                async,
                keepAlive,
                params: params2,
                return: returnOptions
              } = methods[name];
              target[name] = initUTSInstanceMethod(!!async, extend({
                name,
                keepAlive,
                params: params2,
                return: returnOptions
              }, baseOptions), instance.__instanceId, proxy2);
            } else if (props.includes(name)) {
              return invokePropGetter({
                moduleName,
                moduleType,
                id: instance.__instanceId,
                type: "getter",
                keepAlive: false,
                nested: false,
                name,
                errMsg
              });
            }
          }
          return target[name];
        },
        set(_, name, newValue) {
          if (props.includes(name)) {
            var setter = parseClassPropertySetter(name);
            if (!target[setter]) {
              var param = setters[name];
              if (param) {
                target[setter] = initProxyFunction("setter", false, extend({
                  name,
                  keepAlive: false,
                  params: [param]
                }, baseOptions), instance.__instanceId, proxy2);
              }
            }
            target[parseClassPropertySetter(name)](newValue);
            return true;
          }
          return false;
        }
      });
      return Object.freeze(proxy2);
    }
  };
  var staticPropSetterCache = {};
  var staticMethodCache = {};
  return Object.freeze(new Proxy(ProxyClass, {
    get(target, name, receiver) {
      name = parseClassMethodName(name, staticMethods);
      if (hasOwn(staticMethods, name)) {
        if (!staticMethodCache[name]) {
          var {
            async,
            keepAlive,
            params,
            return: returnOptions
          } = staticMethods[name];
          staticMethodCache[name] = initUTSStaticMethod(!!async, extend({
            name,
            companion: true,
            keepAlive,
            params,
            return: returnOptions
          }, baseOptions));
        }
        return staticMethodCache[name];
      }
      if (staticProps.includes(name)) {
        return invokePropGetter(extend({
          name,
          companion: true,
          type: "getter"
        }, baseOptions));
      }
      return Reflect.get(target, name, receiver);
    },
    set(_, name, newValue) {
      if (staticProps.includes(name)) {
        var setter = parseClassPropertySetter(name);
        if (!staticPropSetterCache[setter]) {
          var param = staticSetters[name];
          if (param) {
            staticPropSetterCache[setter] = initProxyFunction("setter", false, extend({
              name,
              keepAlive: false,
              params: [param]
            }, baseOptions), 0);
          }
        }
        staticPropSetterCache[parseClassPropertySetter(name)](newValue);
        return true;
      }
      return false;
    }
  }));
}
function isUTSAndroid() {
  {
    if (
      // @ts-expect-error
      typeof nativeChannel === "object" && // @ts-expect-error
      nativeChannel && // @ts-expect-error
      nativeChannel.os === "android"
    ) {
      return true;
    }
    return false;
  }
}
function isUTSiOS() {
  return !isUTSAndroid();
}
function initUTSPackageName(name, is_uni_modules) {
  if (isUTSAndroid()) {
    return "uts.sdk." + (is_uni_modules ? "modules." : "") + name;
  }
  return "";
}
function initUTSIndexClassName(moduleName, is_uni_modules) {
  return initUTSClassName(moduleName, isUTSAndroid() ? "IndexKt" : "IndexSwift", is_uni_modules);
}
function initUTSClassName(moduleName, className, is_uni_modules) {
  if (isUTSAndroid()) {
    return className;
  }
  return "UTSSDK" + (is_uni_modules ? "Modules" : "") + capitalize(moduleName) + capitalize(className);
}
var interfaceDefines = {};
function registerUTSInterface(name, define) {
  interfaceDefines[name] = define;
}
var pluginDefines = {};
function registerUTSPlugin(name, define) {
  pluginDefines[name] = define;
}
function requireUTSPlugin(name) {
  var silent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var define = pluginDefines[name];
  if (!define) {
    if (!silent) {
      console.error("".concat(name, " is not found"));
    }
  }
  return define;
}
function __log__(type, filename) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var res = normalizeLog(type, filename, args);
  res && console[type](res);
}
function isDebugMode() {
  return typeof __channelId__ === "string" && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (toRawType(p)) {
    case "Function":
      return "function() { [native code] }";
    default:
      return p;
  }
}
function normalizeLog(type, filename, args) {
  if (isDebugMode()) {
    args.push(filename.replace("at ", "uni-app:///"));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function(v) {
    var type2 = toTypeString(v).toLowerCase();
    if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
      try {
        v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
      } catch (e) {
        v = type2;
      }
    } else {
      if (v === null) {
        v = "---NULL---";
      } else if (v === void 0) {
        v = "---UNDEFINED---";
      } else {
        var vType = toRawType(v).toUpperCase();
        if (vType === "NUMBER" || vType === "BOOLEAN") {
          v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  return msgs.join("---COMMA---") + " " + filename;
}
var index$1 = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $emit,
  $off,
  $on,
  $once,
  __f__,
  __log__,
  addInterceptor,
  closeDialogPage,
  createCanvasContextAsync,
  createSelectorQuery,
  env,
  getElementById,
  getEnterOptionsSync,
  getLaunchOptionsSync,
  getPerformance,
  hideTabBar,
  hideTabBarRedDot,
  initUTSClassName,
  initUTSIndexClassName,
  initUTSPackageName,
  initUTSProxyClass,
  initUTSProxyFunction,
  loadFontFace,
  navigateBack,
  navigateTo,
  onTabBarMidButtonTap,
  openDialogPage,
  pageScrollTo,
  reLaunch,
  redirectTo,
  registerUTSInterface,
  registerUTSPlugin,
  removeInterceptor,
  removeTabBarBadge,
  requireUTSPlugin,
  setNavigationBarColor,
  setNavigationBarTitle,
  setTabBarBadge,
  setTabBarItem,
  setTabBarStyle,
  showTabBar,
  showTabBarRedDot,
  startPullDownRefresh,
  stopPullDownRefresh,
  switchTab
}, Symbol.toStringTag, { value: "Module" });

// ../uni-app-next/packages/uni-app-plus/dist/uni.x.vue.js
function get$pageByPage2(page) {
  return page.vm.$basePage;
}
function getCurrentPage2() {
  const pages2 = getCurrentPages();
  const len = pages2.length;
  if (len) {
    return pages2[len - 1];
  }
}
function getCurrentPageVm2() {
  var _a;
  const page = (_a = getCurrentPage2()) === null || _a === void 0 ? void 0 : _a.vm;
  if (page) {
    return page.$vm;
  }
}
function invokeHook2(vm, name, args) {
  if (isString(vm)) {
    args = name;
    name = vm;
    vm = getCurrentPageVm2();
  } else if (typeof vm === "number") {
    const page = getCurrentPages().find((page2) => get$pageByPage2(page2).id === vm);
    if (page) {
      vm = page.$vm;
    } else {
      vm = getCurrentPageVm2();
    }
  }
  if (!vm) {
    return;
  }
  {
    if (vm.__call_hook) {
      return vm.__call_hook(name, args);
    }
  }
  const hooks = vm.$[name];
  if (name === ON_BACK_PRESS) {
    return hooks && invokeArrayFnsWithResults(hooks, args).some((ret) => ret === true);
  }
  return hooks && invokeArrayFns2(hooks, args);
}
var SYSTEM_DIALOG_PAGE_PATH_STARTER2 = "uni:";
function isSystemDialogPage2(page) {
  return page.route.startsWith(SYSTEM_DIALOG_PAGE_PATH_STARTER2);
}
function getSystemDialogPages2(parentPage) {
  if (!parentPage)
    return [];
  {
    return typeof parentPage.__$$getSystemDialogPages === "undefined" ? parentPage.$getSystemDialogPages() : parentPage.__$$getSystemDialogPages();
  }
}
function invokeNewDialogPageHook(page, hook) {
  const currentPage = getCurrentPage2();
  let shouldInvoke = false;
  if (!currentPage) {
    shouldInvoke = true;
  } else {
    if (isSystemDialogPage2(page)) {
      const systemDialogPages = getSystemDialogPages2(currentPage);
      shouldInvoke = systemDialogPages.includes(page);
    } else {
      const dialogPages = currentPage.getDialogPages();
      shouldInvoke = dialogPages.includes(page);
    }
  }
  shouldInvoke && invokeHook2(page.vm, hook);
}
function getPageInstanceByChild(child) {
  {
    return child.ctx.$basePage;
  }
}
function isDialogPageInstance(vm) {
  if (!vm)
    return false;
  {
    return vm.openType === "openDialogPage";
  }
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component" || // instance.renderer 标识页面是否作为组件渲染
  mpType === "page" && instance.renderer === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
  if (mpType === "page") {
    instance.__isVisible = true;
    try {
      let query = instance.attrs.__pageQuery;
      if (true) {
        query = new UTSJSONObject2(decodedQuery(query));
      }
      if (true) {
        const { setupState } = instance;
        if (!(setupState.__isScriptSetup && hasOwn(setupState, "options"))) {
          publicThis.options = query || {};
        }
      }
      invokeHook2(publicThis, ON_LOAD, query);
      if (!instance.vapor) {
        delete instance.attrs.__pageQuery;
      }
      const $basePage = true ? publicThis.$basePage : publicThis.$page;
      if (!($basePage === null || $basePage === void 0 ? void 0 : $basePage.meta.isTabBar)) {
        if (($basePage === null || $basePage === void 0 ? void 0 : $basePage.openType) !== "preloadPage") {
          if (isDialogPageInstance(getPageInstanceByChild(instance))) {
            invokeNewDialogPageHook(publicThis.$page, ON_SHOW);
          } else {
            invokeHook2(publicThis, ON_SHOW);
          }
        }
      }
    } catch (e) {
      console.error(e.message + LINEFEED + e.stack);
    }
  }
}
function initRenderjs(options, instance) {
  initModules(instance, options.$renderjs, options["$" + RENDERJS_MODULES]);
}
function initModules(instance, modules, moduleIds = {}) {
  if (!isArray(modules)) {
    return;
  }
  const ownerId = instance.uid;
  const $wxsModules = instance.$wxsModules || (instance.$wxsModules = []);
  const ctx = instance.ctx;
  modules.forEach((module) => {
    if (moduleIds[module]) {
      ctx[module] = proxyModule(ownerId, moduleIds[module], module);
      $wxsModules.push(module);
    } else {
      if (true) {
        console.error(formatLog("initModules", modules, moduleIds));
      }
    }
  });
}
function proxyModule(ownerId, moduleId, module) {
  const target = {};
  return new Proxy(target, {
    get(_, p) {
      return target[p] || (target[p] = createModuleFunction(ownerId, moduleId, module, p));
    }
  });
}
function createModuleFunction(ownerId, moduleId, module, name) {
  const target = () => {
  };
  const toJSON = () => WXS_PROTOCOL + JSON.stringify([ownerId, moduleId, module + "." + name]);
  return new Proxy(target, {
    get(_, p) {
      if (p === "toJSON") {
        return toJSON;
      }
      return target[p] || (target[p] = createModuleFunction(ownerId, moduleId, module + "." + name, p));
    },
    apply(_target, _thisArg, args) {
      return WXS_PROTOCOL + JSON.stringify([ownerId, moduleId, module + "." + name, [...args]]);
    }
  });
}
function initWxs(options, instance) {
  initModules(instance, options.$wxs, options["$" + WXS_MODULES]);
}
function applyOptions2(options, instance, publicThis) {
  {
    initWxs(options, instance);
    initRenderjs(options, instance);
  }
  initHooks(options, instance, publicThis);
}
function set2(target, key, val) {
  return target[key] = val;
}
function $callMethod(method, ...args) {
  const fn = this[method];
  if (fn) {
    return fn(...args);
  }
  console.error(`method ${method} not found`);
  return null;
}
function createErrorHandler(app) {
  const userErrorHandler = app.config.errorHandler;
  return function errorHandler(err, instance, info) {
    if (userErrorHandler) {
      userErrorHandler(err, instance, info);
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    if (appInstance[ON_ERROR]) {
      {
        invokeHook2(appInstance.proxy, ON_ERROR, err);
      }
    } else {
      logError(err, info, instance ? instance.$.vnode : null, false);
    }
  };
}
function mergeAsArray2(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray2;
  });
}
var realAtob;
var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = uni.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp2(app) {
  const appConfig = app.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set2;
    globalProperties.$applyOptions = applyOptions2;
    globalProperties.$callMethod = $callMethod;
  }
  {
    invokeCreateVueAppHook(app);
  }
}

// packages/uni-ext-api/uts-runtime-x.js
var realGlobal2 = getGlobal();
if (realGlobal2.UTS == null && realGlobal2.UTSJSONObject == null && realGlobal2.UTSValueIterable == null && realGlobal2.UniError == null) {
  realGlobal2.UTS = UTS2;
  realGlobal2.UTSJSONObject = UTSJSONObject2;
  realGlobal2.UTSValueIterable = UTSValueIterable;
  realGlobal2.UniError = UniError2;
}

// packages/uni-ext-api/x-components/app-harmony/uni-editor.js
var uni_editor_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    class UniEditorFocusEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              html: { type: String, optional: false },
              text: { type: String, optional: false },
              delta: { type: "Any", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorFocusEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.html = this.__props__.html;
        this.text = this.__props__.text;
        this.delta = this.__props__.delta;
        delete this.__props__;
      }
    }
    class UniEditorFocusEvent extends UniCustomEvent {
      constructor(html, text, delta = null) {
        super("focus", new UniEditorFocusEventDetail({ html, text, delta }));
      }
    }
    class UniEditorBlurEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              html: { type: String, optional: false },
              text: { type: String, optional: false },
              delta: { type: "Any", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorBlurEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.html = this.__props__.html;
        this.text = this.__props__.text;
        this.delta = this.__props__.delta;
        delete this.__props__;
      }
    }
    class UniEditorBlurEvent extends UniCustomEvent {
      constructor(html, text, delta = null) {
        super("blur", new UniEditorBlurEventDetail({ html, text, delta }));
      }
    }
    class UniEditorInputEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              html: { type: String, optional: false },
              text: { type: String, optional: false },
              delta: { type: "Any", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorInputEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.html = this.__props__.html;
        this.text = this.__props__.text;
        this.delta = this.__props__.delta;
        delete this.__props__;
      }
    }
    class UniEditorInputEvent extends UniCustomEvent {
      constructor(html, text, delta = null) {
        super("input", new UniEditorInputEventDetail({ html, text, delta }));
      }
    }
    class UniEditorStatusChangeEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              bold: { type: Boolean, optional: true },
              italic: { type: Boolean, optional: true },
              underline: { type: Boolean, optional: true },
              strike: { type: Boolean, optional: true },
              blockquote: { type: Boolean, optional: true },
              codeBlock: { type: Boolean, optional: true },
              align: { type: String, optional: true },
              lineHeight: { type: String, optional: true },
              letterSpacing: { type: String, optional: true },
              marginTop: { type: String, optional: true },
              marginBottom: { type: String, optional: true },
              fontFamily: { type: String, optional: true },
              fontSize: { type: String, optional: true },
              color: { type: String, optional: true },
              backgroundColor: { type: String, optional: true },
              list: { type: String, optional: true },
              header: { type: Number, optional: true },
              script: { type: String, optional: true },
              direction: { type: String, optional: true },
              link: { type: String, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorStatusChangeEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.bold = this.__props__.bold;
        this.italic = this.__props__.italic;
        this.underline = this.__props__.underline;
        this.strike = this.__props__.strike;
        this.blockquote = this.__props__.blockquote;
        this.codeBlock = this.__props__.codeBlock;
        this.align = this.__props__.align;
        this.lineHeight = this.__props__.lineHeight;
        this.letterSpacing = this.__props__.letterSpacing;
        this.marginTop = this.__props__.marginTop;
        this.marginBottom = this.__props__.marginBottom;
        this.fontFamily = this.__props__.fontFamily;
        this.fontSize = this.__props__.fontSize;
        this.color = this.__props__.color;
        this.backgroundColor = this.__props__.backgroundColor;
        this.list = this.__props__.list;
        this.header = this.__props__.header;
        this.script = this.__props__.script;
        this.direction = this.__props__.direction;
        this.link = this.__props__.link;
        delete this.__props__;
      }
    }
    class UniEditorStatusChangeEvent extends UniCustomEvent {
      constructor(formats) {
        super("statuschange", formats);
      }
    }
    class UniEditorElementOptionsSuccessRes extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errMsg: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementOptionsSuccessRes.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errMsg = this.__props__.errMsg;
        delete this.__props__;
      }
    }
    class UniEditorElementOptionsFailRes extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errMsg: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementOptionsFailRes.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errMsg = this.__props__.errMsg;
        delete this.__props__;
      }
    }
    class UniEditorElementOptionsCompleteRes extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errMsg: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementOptionsCompleteRes.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errMsg = this.__props__.errMsg;
        delete this.__props__;
      }
    }
    class UniEditorElementOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementInsertImageOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              src: { type: String, optional: true },
              alt: { type: String, optional: true },
              width: { type: String, optional: true },
              height: { type: String, optional: true },
              extClass: { type: String, optional: true },
              data: { type: "Any", optional: true },
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementInsertImageOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.src = this.__props__.src;
        this.alt = this.__props__.alt;
        this.width = this.__props__.width;
        this.height = this.__props__.height;
        this.extClass = this.__props__.extClass;
        this.data = this.__props__.data;
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementInsertMentionOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              id: { type: String, optional: true },
              name: { type: String, optional: true },
              color: { type: String, optional: true },
              background: { type: String, optional: true },
              radius: { type: String, optional: true },
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementInsertMentionOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.id = this.__props__.id;
        this.name = this.__props__.name;
        this.color = this.__props__.color;
        this.background = this.__props__.background;
        this.radius = this.__props__.radius;
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementInsertTextOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              text: { type: String, optional: true },
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementInsertTextOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.text = this.__props__.text;
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementInsertLinkOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              text: { type: String, optional: true },
              href: { type: String, optional: true },
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementInsertLinkOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.text = this.__props__.text;
        this.href = this.__props__.href;
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementSetContentsOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              delta: { type: "Any", optional: true },
              html: { type: String, optional: true },
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementSetContentsOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.delta = this.__props__.delta;
        this.html = this.__props__.html;
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementGetSelectionTextOptionsRes extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errMsg: { type: String, optional: false },
              text: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementGetSelectionTextOptionsRes.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errMsg = this.__props__.errMsg;
        this.text = this.__props__.text;
        delete this.__props__;
      }
    }
    class UniEditorElementGetSelectionTextOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementGetSelectionTextOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElementGetContentsOptionsRes extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errMsg: { type: String, optional: false },
              delta: { type: "Any", optional: false },
              html: { type: String, optional: false },
              text: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementGetContentsOptionsRes.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errMsg = this.__props__.errMsg;
        this.delta = this.__props__.delta;
        this.html = this.__props__.html;
        this.text = this.__props__.text;
        delete this.__props__;
      }
    }
    class UniEditorElementGetContentsOptions extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              success: { type: "Unknown", optional: true },
              fail: { type: "Unknown", optional: true },
              complete: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniEditorElementGetContentsOptions.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.success = this.__props__.success;
        this.fail = this.__props__.fail;
        this.complete = this.__props__.complete;
        delete this.__props__;
      }
    }
    class UniEditorElement extends UniViewElementImpl {
      constructor() {
        super(...arguments);
        this.tagName = "EDITOR";
        this.nodeName = "EDITOR";
      }
      /**
       * 格式化文本
       * @param name format name
       * @param value format value, optional, default is null
       */
      format(name, value = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.format(name, value);
      }
      /**
       * 插入分割线
       * @param options 回调选项 { success, fail, complete }
       */
      insertDivider(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.insertDivider(options);
      }
      /**
       * 插入图片
       * @param options 图片选项 { src, alt, width, height, extClass, data, success, fail, complete }
       */
      insertImage(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.insertImage(options);
      }
      /**
       * 插入提及
       * @param options 提及选项 { id, name, color, background, radius, success, fail, complete }
       */
      insertMention(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.insertMention(options);
      }
      /**
       * 插入文本
       * @param options 文本选项 { text, success, fail, complete }
       */
      insertText(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.insertText(options);
      }
      /**
       * 插入链接
       * @param options 链接选项 { text, href, success, fail, complete }
       */
      insertLink(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.insertLink(options);
      }
      /**
       * 设置内容
       * @param options 内容选项 { delta, html, success, fail, complete }
       */
      setContents(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.setContents(options);
      }
      /**
       * 获取内容
       * @param options 回调选项 { success, fail, complete }
       * @returns 在 success 回调中返回 { html, text, delta }
       */
      getContents(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.getContents(options);
      }
      /**
       * 清空内容
       * @param options 回调选项 { success, fail, complete }
       */
      clear(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.clear(options);
      }
      /**
       * 移除格式
       * @param options 回调选项 { success, fail, complete }
       */
      removeFormat(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.removeFormat(options);
      }
      /**
       * 撤销
       * @param options 回调选项 { success, fail, complete }
       */
      undo(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.undo(options);
      }
      /**
       * 重做
       * @param options 回调选项 { success, fail, complete }
       */
      redo(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.redo(options);
      }
      /**
       * 失去焦点
       * TODO 和基类冲突，不支持 success 等回调
       */
      blur() {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.blur();
      }
      /**
       * 获取选中文本
       * @param options 回调选项 { success, fail, complete }
       * @returns 在 success 回调中返回 { text }
       */
      getSelectionText(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.getSelectionText(options);
      }
      /**
       * 滚动到可视区域
       * @param options 回调选项 { success, fail, complete }
       */
      scrollIntoView(options = null) {
        var _a;
        (_a = this.vm) === null || _a === void 0 ? null : _a.scrollIntoView(options);
      }
    }
    const EditorTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      UniEditorBlurEvent,
      UniEditorBlurEventDetail,
      UniEditorElement,
      UniEditorFocusEvent,
      UniEditorFocusEventDetail,
      UniEditorInputEvent,
      UniEditorInputEventDetail,
      UniEditorStatusChangeEvent,
      UniEditorStatusChangeEventDetail
    }, Symbol.toStringTag, { value: "Module" }));
    const uniEditor_utsProxy = uni3.requireUTSPlugin("uni_modules/uni-editor");
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      ...{
        name: "editor",
        rootElement: new UTSJSONObject({
          name: "uni-editor-element",
          class: uniEditor_utsProxy.UniEditorElement
        })
      },
      __name: "editor",
      props: {
        readOnly: { type: Boolean, default: false },
        placeholder: { default: "", type: String },
        showImgSize: { type: Boolean, default: false },
        showImgToolbar: { type: Boolean, default: false },
        showImgResize: { type: Boolean, default: false },
        type: { default: null, type: [String, null] },
        name: { type: String }
      },
      emits: ["ready", "statuschange", "focus", "input", "blur"],
      setup(__props, _a) {
        var _b;
        var __expose = _a.expose, __emit = _a.emit;
        function createEditorEventName(name, id2) {
          return `__UNIEDITOR_${name}_${id2}`;
        }
        const rootEl = vue.ref(null);
        let nativeEditor = null;
        const instance = vue.getCurrentInstance();
        const eventSeed = `${(_b = instance === null || instance === void 0 ? null : instance.uid) !== null && _b !== void 0 ? _b : `${Date.now()}-${Math.floor(Math.random() * 1e6)}`}`;
        const webviewId = `editor-webview-${eventSeed}`;
        const props = __props;
        const emit2 = __emit;
        let webviewElement = null;
        let isReady = false;
        let callbackId2 = 0;
        const callbackMap = /* @__PURE__ */ new Map();
        function LOG(...args) {
        }
        function generateCallbackId() {
          return ++callbackId2;
        }
        function handleCallback(cbId, result) {
          let callbacks = UTS.mapGet(callbackMap, cbId);
          if (callbacks == null) {
            LOG("Callback not found for id:", cbId.toString());
            return null;
          }
          callbackMap.delete(cbId);
          uni3.$emit(createEditorEventName("callback", eventSeed), cbId, result);
        }
        function onMessage(event) {
          let data = event.detail.data[0];
          if (data == null) {
            return null;
          }
          LOG("Received message:", UTS.JSON.stringify(data));
          const eventType = data["event"];
          if (eventType == null) {
            return null;
          }
          switch (eventType) {
            case "ready":
              isReady = true;
              emit2("ready");
              break;
            case "focus":
              const focusDetail = data["detail"];
              if (focusDetail != null) {
                const html = focusDetail["html"];
                const text = focusDetail["text"];
                const delta = focusDetail["delta"];
                emit2("focus", new UniEditorFocusEvent(html, text, delta));
              }
              break;
            case "blur":
              const blurDetail = data["detail"];
              if (blurDetail != null) {
                const html = blurDetail["html"];
                const text = blurDetail["text"];
                const delta = blurDetail["delta"];
                emit2("blur", new UniEditorBlurEvent(html, text, delta));
              }
              break;
            case "input":
              const inputDetail = data["detail"];
              if (inputDetail != null) {
                const html = inputDetail["html"];
                const text = inputDetail["text"];
                const delta = inputDetail["delta"];
                emit2("input", new UniEditorInputEvent(html, text, delta));
              }
              break;
            case "statuschange":
              const statusDetail = data["detail"];
              if (statusDetail != null) {
                emit2("statuschange", new UniEditorStatusChangeEvent(new UniEditorStatusChangeEventDetail({
                  bold: statusDetail["bold"],
                  italic: statusDetail["italic"],
                  underline: statusDetail["underline"],
                  strike: statusDetail["strike"],
                  blockquote: statusDetail["blockquote"],
                  align: statusDetail["align"],
                  lineHeight: statusDetail["lineHeight"],
                  letterSpacing: statusDetail["letterSpacing"],
                  marginTop: statusDetail["marginTop"],
                  marginBottom: statusDetail["marginBottom"],
                  fontFamily: statusDetail["fontFamily"],
                  fontSize: statusDetail["fontSize"],
                  color: statusDetail["color"],
                  backgroundColor: statusDetail["backgroundColor"],
                  list: statusDetail["list"],
                  header: statusDetail["header"],
                  script: statusDetail["script"],
                  direction: statusDetail["direction"],
                  link: statusDetail["link"],
                  codeBlock: statusDetail["codeBlock"]
                })));
              }
              break;
            case "callback":
              const callbackDetail = data["detail"];
              if (callbackDetail == null) {
                return null;
              }
              const cbId = callbackDetail["callbackId"];
              const result = callbackDetail["data"];
              if (cbId != null && result != null) {
                handleCallback(cbId, result);
              }
              break;
          }
        }
        function evalJS(js) {
          if (webviewElement == null) {
            return null;
          }
          webviewElement.evalJS(js);
        }
        function initEditorConfig() {
          if (webviewElement == null) {
            return null;
          }
          const config = new UTSJSONObject({
            placeholder: props.placeholder,
            showImgSize: props.showImgSize,
            showImgToolbar: props.showImgToolbar,
            showImgResize: props.showImgResize,
            readOnly: props.readOnly,
            type: props.type
          });
          evalJS(`editorInit(${UTS.JSON.stringify(config)})`);
        }
        function onLoad2() {
          initEditorConfig();
        }
        function escapeString(str) {
          return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r");
        }
        function format(name, value = null) {
          const params = new UTSJSONObject({
            name,
            value
          });
          evalJS(`editorFormat(${UTS.JSON.stringify(params)})`);
        }
        function insertDivider(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorInsertDivider(${cbId})`);
        }
        function insertImage(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          const params = new UTSJSONObject({
            src: options["src"],
            alt: options["alt"],
            width: options["width"],
            height: options["height"],
            extClass: options["extClass"],
            data: options["data"]
          });
          evalJS(`editorInsertImage(${UTS.JSON.stringify(params)}, ${cbId})`);
        }
        function insertText(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          const params = new UTSJSONObject({
            text: options["text"]
          });
          evalJS(`editorInsertText(${UTS.JSON.stringify(params)}, ${cbId})`);
        }
        function insertLink(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          const params = new UTSJSONObject({
            text: options["text"],
            href: options["href"]
          });
          evalJS(`editorInsertLink(${UTS.JSON.stringify(params)}, ${cbId})`);
        }
        function insertMention(options = null, _cbId = null) {
          var _a2, _b2, _c, _d, _e;
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          const params = new UTSJSONObject();
          params["id"] = (_a2 = options === null || options === void 0 ? null : options.id) !== null && _a2 !== void 0 ? _a2 : null;
          params["name"] = (_b2 = options === null || options === void 0 ? null : options.name) !== null && _b2 !== void 0 ? _b2 : null;
          params["color"] = (_c = options === null || options === void 0 ? null : options.color) !== null && _c !== void 0 ? _c : null;
          params["background"] = (_d = options === null || options === void 0 ? null : options.background) !== null && _d !== void 0 ? _d : null;
          params["radius"] = (_e = options === null || options === void 0 ? null : options.radius) !== null && _e !== void 0 ? _e : null;
          evalJS(`editorInsertMention(${UTS.JSON.stringify(params)}, ${cbId})`);
        }
        function setContents(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          const params = new UTSJSONObject({
            delta: options["delta"],
            html: options["html"]
          });
          evalJS(`editorSetContents(${UTS.JSON.stringify(params)}, ${cbId})`);
        }
        function getContents(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorGetContents(${cbId})`);
        }
        function clear2(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorClear(${cbId})`);
        }
        function removeFormat(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorRemoveFormat(${cbId})`);
        }
        function undo(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorUndo(${cbId})`);
        }
        function redo(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorRedo(${cbId})`);
        }
        function blur(options = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorBlur(${cbId})`);
        }
        function getSelectionText(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorGetSelectionText(${cbId})`);
        }
        function scrollIntoView(options = null, _cbId = null) {
          if (options == null) {
            options = new UTSJSONObject({});
          }
          const cbId = _cbId !== null && _cbId !== void 0 ? _cbId : generateCallbackId();
          callbackMap.set(cbId, options);
          evalJS(`editorScrollIntoView(${cbId})`);
        }
        __expose({
          format,
          insertDivider,
          insertImage,
          insertText,
          insertMention,
          insertLink,
          setContents,
          getContents,
          clear: clear2,
          removeFormat,
          undo,
          redo,
          blur,
          getSelectionText,
          scrollIntoView
        });
        vue.onMounted(() => {
          webviewElement = uni3.getElementById(webviewId);
          nativeEditor = new uniEditor_utsProxy.NativeEditor(eventSeed, rootEl.value);
        });
        vue.watch(() => {
          return props.readOnly;
        }, (newVal) => {
          if (isReady) {
            evalJS(`editorSetReadOnly({readOnly: ${newVal}})`);
          }
        });
        vue.watch(() => {
          return props.type;
        }, (newVal = null) => {
          if (isReady) {
            evalJS(`editorSetType({type: '${newVal != null ? escapeString(newVal) : ""}'})`);
          }
        });
        vue.watch(() => {
          return props.placeholder;
        }, (newVal) => {
          if (isReady) {
            evalJS(`editorSetPlaceholder({placeholder: '${escapeString(newVal)}'})`);
          }
        });
        const __UNIEDITOR_FORMAT_EVENT_NAME__ = createEditorEventName("format", eventSeed);
        const __UNIEDITOR_INSERT_DIVIDER_EVENT_NAME__ = createEditorEventName("insertDivider", eventSeed);
        const __UNIEDITOR_INSERT_IMAGE_EVENT_NAME__ = createEditorEventName("insertImage", eventSeed);
        const __UNIEDITOR_INSERT_TEXT_EVENT_NAME__ = createEditorEventName("insertText", eventSeed);
        const __UNIEDITOR_INSERT_LINK_EVENT_NAME__ = createEditorEventName("insertLink", eventSeed);
        const __UNIEDITOR_INSERT_MENTION_EVENT_NAME__ = createEditorEventName("insertMention", eventSeed);
        const __UNIEDITOR_SET_CONTENTS_EVENT_NAME__ = createEditorEventName("setContents", eventSeed);
        const __UNIEDITOR_GET_CONTENTS_EVENT_NAME__ = createEditorEventName("getContents", eventSeed);
        const __UNIEDITOR_CLEAR_EVENT_NAME__ = createEditorEventName("clear", eventSeed);
        const __UNIEDITOR_REMOVE_FORMAT_EVENT_NAME__ = createEditorEventName("removeFormat", eventSeed);
        const __UNIEDITOR_UNDO_EVENT_NAME__ = createEditorEventName("undo", eventSeed);
        const __UNIEDITOR_REDO_EVENT_NAME__ = createEditorEventName("redo", eventSeed);
        const __UNIEDITOR_BLUR_EVENT_NAME__ = createEditorEventName("blur", eventSeed);
        const __UNIEDITOR_GET_SELECTION_TEXT_EVENT_NAME__ = createEditorEventName("getSelectionText", eventSeed);
        const __UNIEDITOR_SCROLL_INTO_VIEW_EVENT_NAME__ = createEditorEventName("scrollIntoView", eventSeed);
        uni3.$on(__UNIEDITOR_FORMAT_EVENT_NAME__, (name, value = null) => {
          format(name, value);
        });
        uni3.$on(__UNIEDITOR_INSERT_DIVIDER_EVENT_NAME__, (options = null, cbId) => {
          insertDivider(options, cbId);
        });
        uni3.$on(__UNIEDITOR_INSERT_IMAGE_EVENT_NAME__, (options = null, cbId) => {
          insertImage(options, cbId);
        });
        uni3.$on(__UNIEDITOR_INSERT_TEXT_EVENT_NAME__, (options = null, cbId) => {
          insertText(options, cbId);
        });
        uni3.$on(__UNIEDITOR_INSERT_MENTION_EVENT_NAME__, (options = null, cbId) => {
          insertMention(options, cbId);
        });
        uni3.$on(__UNIEDITOR_INSERT_LINK_EVENT_NAME__, (options = null, cbId) => {
          insertLink(options, cbId);
        });
        uni3.$on(__UNIEDITOR_SET_CONTENTS_EVENT_NAME__, (options = null, cbId) => {
          setContents(options, cbId);
        });
        uni3.$on(__UNIEDITOR_GET_CONTENTS_EVENT_NAME__, (options = null, cbId) => {
          getContents(options, cbId);
        });
        uni3.$on(__UNIEDITOR_CLEAR_EVENT_NAME__, (options = null, cbId) => {
          clear2(options, cbId);
        });
        uni3.$on(__UNIEDITOR_REMOVE_FORMAT_EVENT_NAME__, (options = null, cbId) => {
          removeFormat(options, cbId);
        });
        uni3.$on(__UNIEDITOR_UNDO_EVENT_NAME__, (options = null, cbId) => {
          undo(options, cbId);
        });
        uni3.$on(__UNIEDITOR_REDO_EVENT_NAME__, (options = null, cbId) => {
          redo(options, cbId);
        });
        uni3.$on(__UNIEDITOR_BLUR_EVENT_NAME__, (options = null) => {
          blur(options);
        });
        uni3.$on(__UNIEDITOR_GET_SELECTION_TEXT_EVENT_NAME__, (options = null, cbId) => {
          getSelectionText(options, cbId);
        });
        uni3.$on(__UNIEDITOR_SCROLL_INTO_VIEW_EVENT_NAME__, (options = null, cbId) => {
          scrollIntoView(options, cbId);
        });
        vue.onBeforeUnmount(() => {
          nativeEditor === null || nativeEditor === void 0 ? null : nativeEditor.dispose();
          nativeEditor = null;
          uni3.$off(__UNIEDITOR_FORMAT_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_INSERT_DIVIDER_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_INSERT_IMAGE_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_INSERT_TEXT_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_SET_CONTENTS_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_GET_CONTENTS_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_CLEAR_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_REMOVE_FORMAT_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_UNDO_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_REDO_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_BLUR_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_GET_SELECTION_TEXT_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_SCROLL_INTO_VIEW_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_INSERT_MENTION_EVENT_NAME__);
          uni3.$off(__UNIEDITOR_INSERT_LINK_EVENT_NAME__);
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("uni-editor-element", new UTSJSONObject({
            style: new UTSJSONObject({ "flex": "1" }),
            ref_key: "rootEl",
            ref: rootEl
          }), [
            vue.createElementVNode("web-view", new UTSJSONObject({
              style: new UTSJSONObject({ "flex": "1" }),
              id: webviewId,
              src: "unifile://static/uni-editor/static/editor.html",
              bounces: false,
              darkMode: false,
              verticalScrollBarAccess: false,
              horizontalScrollBarAccess: false,
              "webview-styles": new UTSJSONObject({ progress: false }),
              onMessage,
              onLoad: onLoad2
            }), null, 32)
          ], 512);
        };
      }
    });
    registerExtApiComponent("Editor", new UTSJSONObject({
      ...EditorTypes,
      default: _sfc_main
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/uni-loading.js
var uni_loading_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    const uniLoading_utsProxy = uni3.requireUTSPlugin("uni_modules/uni-loading");
    class LoadingState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              nativeLoading: { type: "Unknown", optional: true }
            };
          }
        };
      }
      constructor(options, metadata = LoadingState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.nativeLoading = this.__props__.nativeLoading;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      ...{
        name: "loading",
        // @ts-ignore
        rootElement: new UTSJSONObject({
          name: "uni-loading-element",
          class: uniLoading_utsProxy.UniLoadingElement
        })
      },
      __name: "loading",
      props: {
        paused: { type: Boolean, default: false },
        bold: { type: Boolean, default: false },
        iosSpinner: { type: Boolean, default: false }
      },
      setup(__props) {
        const props = __props;
        const style = vue.useComputedStyle({
          properties: [
            "border-top-color",
            "border-left-color",
            "border-right-color",
            "border-bottom-color"
          ],
          filterProperties: true
        });
        const borderColor2 = vue.computed(() => {
          var _a, _b, _c;
          return (_b = (_a = style.get("border-color")) === null || _a === void 0 ? null : _a.toString()) !== null && _b !== void 0 ? _b : (_c = style.get("border-top-color")) === null || _c === void 0 ? null : _c.toString();
        });
        vue.computed(() => {
          var _a;
          return (_a = style.get("color")) === null || _a === void 0 ? null : _a.toString();
        });
        vue.computed(() => {
          var _a;
          return (_a = style.get("animation-timing-function")) === null || _a === void 0 ? null : _a.toString();
        });
        const loadingState = vue.reactive(new LoadingState({
          nativeLoading: null
        }));
        vue.watchEffect(() => {
          var _a;
          let colorValue = borderColor2.value;
          const width = props.bold ? "thick" : "medium";
          (_a = loadingState.nativeLoading) === null || _a === void 0 ? null : _a.updateStyle(colorValue, width);
        });
        vue.watchEffect(() => {
          var _a;
          const paused = props.paused;
          (_a = loadingState.nativeLoading) === null || _a === void 0 ? null : _a.updatePaused(paused);
        });
        const onviewinit = (e) => {
          loadingState.nativeLoading = new uniLoading_utsProxy.NativeLoading(e.detail.element);
        };
        vue.onUnmounted(() => {
          var _a;
          (_a = loadingState.nativeLoading) === null || _a === void 0 ? null : _a.destroy();
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("uni-loading-element", new UTSJSONObject({ class: "default" }), [
            vue.createElementVNode("native-view", new UTSJSONObject({
              class: "defaultNativeView",
              onInit: onviewinit
            }), null, 32)
          ]);
        };
      }
    });
    const _style_0 = { "default": { "": { "width": 16, "height": 16 } }, "defaultNativeView": { "": { "width": "100%", "height": "100%" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiComponent("Loading", new UTSJSONObject({
      default: Loading
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/uni-map-tencent.js
var uni_map_tencent_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    const uniMapTencent_utsProxy = uni3.requireUTSPlugin("uni_modules/uni-map-tencent");
    class UniMapUpdatedEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {};
          }
        };
      }
      constructor(options, metadata = UniMapUpdatedEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        delete this.__props__;
      }
    }
    class UniMapUpdatedEvent extends UniCustomEvent {
      constructor(type, detail) {
        super(type, detail);
      }
    }
    class UniMapTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              latitude: { type: Number, optional: true },
              longitude: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.latitude = this.__props__.latitude;
        this.longitude = this.__props__.longitude;
        delete this.__props__;
      }
    }
    class UniMapTapEvent extends UniPointerEvent {
      constructor(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY) {
        super(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
        this.detail = null;
      }
    }
    class UniMapRegionChangeEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              skew: { type: Number, optional: true },
              rotate: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapRegionChangeEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.skew = this.__props__.skew;
        this.rotate = this.__props__.rotate;
        delete this.__props__;
      }
    }
    class UniMapRegionChangeEvent extends UniCustomEvent {
      constructor(type, detail = null) {
        super(type, detail);
        this.causedBy = null;
      }
    }
    class UniMapMarkerTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              markerId: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapMarkerTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.markerId = this.__props__.markerId;
        delete this.__props__;
      }
    }
    class UniMapMarkerTapEvent extends UniPointerEvent {
      constructor(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY) {
        super(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
        this.detail = null;
      }
    }
    class UniMapControlTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              controlId: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapControlTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.controlId = this.__props__.controlId;
        delete this.__props__;
      }
    }
    class UniMapControlTapEvent extends UniCustomEvent {
      constructor(type, detail) {
        super(type, detail);
      }
    }
    class UniMapAnchorPointTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              latitude: { type: Number, optional: true },
              longitude: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapAnchorPointTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.latitude = this.__props__.latitude;
        this.longitude = this.__props__.longitude;
        delete this.__props__;
      }
    }
    class UniMapAnchorPointTapEvent extends UniPointerEvent {
      constructor(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY) {
        super(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
        this.detail = null;
      }
    }
    class UniMapPoiTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              latitude: { type: Number, optional: true },
              longitude: { type: Number, optional: true },
              name: { type: String, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapPoiTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.latitude = this.__props__.latitude;
        this.longitude = this.__props__.longitude;
        this.name = this.__props__.name;
        delete this.__props__;
      }
    }
    class UniMapPoiTapEvent extends UniPointerEvent {
      constructor(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY) {
        super(type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
        this.detail = null;
      }
    }
    class UniMapCalloutTapEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              markerId: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniMapCalloutTapEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.markerId = this.__props__.markerId;
        delete this.__props__;
      }
    }
    class UniMapCalloutTapEvent extends UniCustomEvent {
      constructor(type, detail) {
        super(type, detail);
      }
    }
    const MapTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      UniMapAnchorPointTapEvent,
      UniMapAnchorPointTapEventDetail,
      UniMapCalloutTapEvent,
      UniMapCalloutTapEventDetail,
      UniMapControlTapEvent,
      UniMapControlTapEventDetail,
      UniMapMarkerTapEvent,
      UniMapMarkerTapEventDetail,
      UniMapPoiTapEvent,
      UniMapPoiTapEventDetail,
      UniMapRegionChangeEvent,
      UniMapRegionChangeEventDetail,
      UniMapTapEvent,
      UniMapTapEventDetail,
      UniMapUpdatedEvent,
      UniMapUpdatedEventDetail
    }, Symbol.toStringTag, { value: "Module" }));
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      ...{
        name: "Map",
        rootElement: new UTSJSONObject({
          name: "uni-map-element",
          class: uniMapTencent_utsProxy.UniMapElement
        })
      },
      __name: "map",
      props: {
        latitude: { default: 0, type: Number },
        longitude: { default: 0, type: Number },
        scale: { default: 16, type: Number },
        theme: { default: "normal", type: String },
        minScale: { default: 3, type: Number },
        maxScale: { default: 20, type: Number },
        layerStyle: { default: "1", type: String },
        markers: { default: null, type: [Array, null] },
        polyline: { default: null, type: [Array, null] },
        circles: { default: null, type: [Array, null] },
        polygons: { default: null, type: [Array, null] },
        controls: { default: null, type: [Array, null] },
        includePoints: { default: null, type: [Array, null] },
        enable3D: { type: Boolean, default: false },
        showCompass: { type: Boolean, default: false },
        enableZoom: { type: Boolean, default: true },
        enableScroll: { type: Boolean, default: true },
        enableRotate: { type: Boolean, default: true },
        rotate: { default: 0, type: Number },
        skew: { default: 0, type: Number },
        enableOverlooking: { type: Boolean, default: false },
        enableSatellite: { type: Boolean, default: false },
        enableTraffic: { type: Boolean, default: false },
        enablePoi: { type: Boolean, default: true },
        enableBuilding: { type: Boolean, default: false },
        showLocation: { type: Boolean, default: false },
        enableIndoorMap: { type: Boolean, default: false }
      },
      emits: ["updated", "click", "tap", "regionchange", "markertap", "controltap", "anchorpointtap", "poitap", "callouttap"],
      setup(__props, _a) {
        var __emit = _a.emit;
        const mapElem = vue.ref(null);
        const natvieElement = vue.ref(null);
        const props = __props;
        let map2 = null;
        const emit2 = __emit;
        vue.watchEffect(() => {
          const latitude = props.latitude;
          const longitude = props.longitude;
          map2 === null || map2 === void 0 ? null : map2.setCenter(latitude, longitude, true);
        });
        vue.watchEffect(() => {
          const scale = props.scale;
          map2 === null || map2 === void 0 ? null : map2.setScale(scale, true);
        });
        vue.watchEffect(() => {
          const theme = props.theme;
          map2 === null || map2 === void 0 ? null : map2.setTheme(theme);
        });
        vue.watchEffect(() => {
          const minScale = props.minScale;
          map2 === null || map2 === void 0 ? null : map2.setMinScale(minScale);
        });
        vue.watchEffect(() => {
          const maxScale = props.maxScale;
          map2 === null || map2 === void 0 ? null : map2.setMaxScale(maxScale);
        });
        vue.watchEffect(() => {
          const layerStyle = props.layerStyle;
          map2 === null || map2 === void 0 ? null : map2.setLayerStyle(layerStyle);
        });
        vue.watchEffect(() => {
          const markers = props.markers;
          if (markers == null) {
            map2 === null || map2 === void 0 ? null : map2.setMarkers([]);
          } else {
            map2 === null || map2 === void 0 ? null : map2.setMarkers(markers);
          }
        });
        vue.watchEffect(() => {
          const polyline = props.polyline;
          if (polyline == null) {
            map2 === null || map2 === void 0 ? null : map2.setPolyline([]);
          } else {
            map2 === null || map2 === void 0 ? null : map2.setPolyline(polyline);
          }
        });
        vue.watchEffect(() => {
          const circles = props.circles;
          if (circles == null) {
            map2 === null || map2 === void 0 ? null : map2.setCircle([]);
          } else {
            map2 === null || map2 === void 0 ? null : map2.setCircle(circles);
          }
        });
        vue.watchEffect(() => {
          const polygons = props.polygons;
          if (polygons == null) {
            map2 === null || map2 === void 0 ? null : map2.setPolygon([]);
          } else {
            map2 === null || map2 === void 0 ? null : map2.setPolygon(polygons);
          }
        });
        vue.watchEffect(() => {
          const controls = props.controls;
          if (controls == null) {
            map2 === null || map2 === void 0 ? null : map2.setControl([]);
          } else {
            map2 === null || map2 === void 0 ? null : map2.setControl(controls);
          }
        });
        vue.watchEffect(() => {
          const includePoints = props.includePoints;
          map2 === null || map2 === void 0 ? null : map2.setIncludePoints(includePoints, true);
        });
        vue.watchEffect(() => {
          const enable3D = props.enable3D;
          map2 === null || map2 === void 0 ? null : map2.enable3D(enable3D);
        });
        vue.watchEffect(() => {
          const showCompass = props.showCompass;
          map2 === null || map2 === void 0 ? null : map2.showCompass(showCompass);
        });
        vue.watchEffect(() => {
          const enableZoom = props.enableZoom;
          map2 === null || map2 === void 0 ? null : map2.enableZoom(enableZoom);
        });
        vue.watchEffect(() => {
          const enableScroll = props.enableScroll;
          map2 === null || map2 === void 0 ? null : map2.enableScroll(enableScroll);
        });
        vue.watchEffect(() => {
          const enableRotate = props.enableRotate;
          map2 === null || map2 === void 0 ? null : map2.enableRotate(enableRotate);
        });
        vue.watchEffect(() => {
          const rotate = props.rotate;
          map2 === null || map2 === void 0 ? null : map2.setRotate(rotate, true);
        });
        vue.watchEffect(() => {
          const skew = props.skew;
          map2 === null || map2 === void 0 ? null : map2.setSkew(skew, true);
        });
        vue.watchEffect(() => {
          const enableOverlooking = props.enableOverlooking;
          map2 === null || map2 === void 0 ? null : map2.setEnableOverlooking(enableOverlooking);
        });
        vue.watchEffect(() => {
          const enableSatellite = props.enableSatellite;
          map2 === null || map2 === void 0 ? null : map2.setEnableSatellite(enableSatellite);
        });
        vue.watchEffect(() => {
          const enableTraffic = props.enableTraffic;
          map2 === null || map2 === void 0 ? null : map2.setEnableTraffic(enableTraffic);
        });
        vue.watchEffect(() => {
          const enablePoi = props.enablePoi;
          map2 === null || map2 === void 0 ? null : map2.setEnablePoi(enablePoi);
        });
        vue.watchEffect(() => {
          const enableBuilding = props.enableBuilding;
          map2 === null || map2 === void 0 ? null : map2.setEnableBuilding(enableBuilding);
        });
        vue.watchEffect(() => {
          const showLocation = props.showLocation;
          map2 === null || map2 === void 0 ? null : map2.setShowLocation(showLocation);
        });
        vue.watchEffect(() => {
          const enableIndoorMap = props.enableIndoorMap;
          map2 === null || map2 === void 0 ? null : map2.setEnableIndoorMap(enableIndoorMap);
        });
        const setDefaultOptions = () => {
          map2 === null || map2 === void 0 ? null : map2.setCenter(props.latitude, props.longitude, false);
          map2 === null || map2 === void 0 ? null : map2.setScale(props.scale, false);
          map2 === null || map2 === void 0 ? null : map2.setTheme(props.theme);
          map2 === null || map2 === void 0 ? null : map2.setMinScale(props.minScale);
          map2 === null || map2 === void 0 ? null : map2.setMaxScale(props.maxScale);
          map2 === null || map2 === void 0 ? null : map2.setLayerStyle(props.layerStyle);
          map2 === null || map2 === void 0 ? null : map2.enable3D(props.enable3D);
          map2 === null || map2 === void 0 ? null : map2.showCompass(props.showCompass);
          map2 === null || map2 === void 0 ? null : map2.enableZoom(props.enableZoom);
          map2 === null || map2 === void 0 ? null : map2.enableScroll(props.enableScroll);
          map2 === null || map2 === void 0 ? null : map2.enableRotate(props.enableRotate);
          map2 === null || map2 === void 0 ? null : map2.setRotate(props.rotate, false);
          map2 === null || map2 === void 0 ? null : map2.setSkew(props.skew, false);
          map2 === null || map2 === void 0 ? null : map2.setEnableOverlooking(props.enableOverlooking);
          let satellite = props.theme == "satellite";
          map2 === null || map2 === void 0 ? null : map2.setEnableSatellite(satellite || props.enableSatellite);
          map2 === null || map2 === void 0 ? null : map2.setEnableTraffic(props.enableTraffic);
          map2 === null || map2 === void 0 ? null : map2.setEnablePoi(props.enablePoi);
          map2 === null || map2 === void 0 ? null : map2.setEnableBuilding(props.enable3D || props.enableBuilding);
          map2 === null || map2 === void 0 ? null : map2.setShowLocation(props.showLocation);
          map2 === null || map2 === void 0 ? null : map2.setEnableIndoorMap(props.enableIndoorMap);
          map2 === null || map2 === void 0 ? null : map2.setIncludePoints(props.includePoints, false);
        };
        const onMapLoadedCallback = (customEvent) => {
          const mapUpdatedEventDetail = new UTSJSONObject({});
          const event = new UniMapUpdatedEvent(customEvent.type, mapUpdatedEventDetail);
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("updated", event);
        };
        const onMapTapCallback = (customEvent) => {
          var _a2, _b, _c, _d, _e, _f;
          const mapTapEventDetail = new UniMapTapEventDetail({
            latitude: customEvent.detail["latitude"],
            longitude: customEvent.detail["longitude"]
          });
          const eventX = (_a2 = customEvent.detail["x"]) !== null && _a2 !== void 0 ? _a2 : 0;
          const eventY = (_b = customEvent.detail["y"]) !== null && _b !== void 0 ? _b : 0;
          const domRect = natvieElement.value.getBoundingClientRect();
          const x = domRect.x + eventX;
          const y = domRect.y + eventY;
          const clientX = x;
          const clientY = y;
          const dx = (_c = customEvent.detail["dx"]) !== null && _c !== void 0 ? _c : 0;
          const dy = (_d = customEvent.detail["dy"]) !== null && _d !== void 0 ? _d : 0;
          const pageX = x + dx;
          const pageY = y + dy;
          const screenX = (_e = customEvent.detail["screenX"]) !== null && _e !== void 0 ? _e : 0;
          const screenY = (_f = customEvent.detail["screenY"]) !== null && _f !== void 0 ? _f : 0;
          const event = new UniMapTapEvent(customEvent.type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
          event.detail = mapTapEventDetail;
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("click", event);
          emit2("tap", event);
        };
        const onMapRegionChange = (customEvent) => {
          const content = customEvent.detail;
          const causedBy = content["causedBy"];
          const mapRegionChangeEventDetail = new UniMapRegionChangeEventDetail({
            skew: content["skew"],
            rotate: content["rotate"]
          });
          const event = new UniMapRegionChangeEvent(customEvent.type, mapRegionChangeEventDetail);
          if (causedBy != null) {
            event.causedBy = causedBy;
          }
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("regionchange", event);
        };
        const onMapMarkerTap = (customEvent) => {
          var _a2, _b, _c, _d, _e, _f;
          const mapMarkerTapEventDetail = new UniMapMarkerTapEventDetail({
            markerId: customEvent.detail["markerId"]
          });
          const eventX = (_a2 = customEvent.detail["x"]) !== null && _a2 !== void 0 ? _a2 : 0;
          const eventY = (_b = customEvent.detail["y"]) !== null && _b !== void 0 ? _b : 0;
          const domRect = natvieElement.value.getBoundingClientRect();
          const x = domRect.x + eventX;
          const y = domRect.y + eventY;
          const clientX = x;
          const clientY = y;
          const dx = (_c = customEvent.detail["dx"]) !== null && _c !== void 0 ? _c : 0;
          const dy = (_d = customEvent.detail["dy"]) !== null && _d !== void 0 ? _d : 0;
          const pageX = x + dx;
          const pageY = y + dy;
          const screenX = (_e = customEvent.detail["screenX"]) !== null && _e !== void 0 ? _e : 0;
          const screenY = (_f = customEvent.detail["screenY"]) !== null && _f !== void 0 ? _f : 0;
          const event = new UniMapMarkerTapEvent(customEvent.type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
          event.detail = mapMarkerTapEventDetail;
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("markertap", event);
        };
        const onMapControlTap = (customEvent) => {
          const mapControlTapEventDetail = new UniMapControlTapEventDetail({
            controlId: customEvent.detail["controlId"]
          });
          const event = new UniMapControlTapEvent(customEvent.type, mapControlTapEventDetail);
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("controltap", event);
        };
        const onMapAnchorPointTap = (customEvent) => {
          var _a2, _b, _c, _d, _e, _f;
          const mapAnchorPointTapEventDetail = new UniMapAnchorPointTapEventDetail({
            latitude: customEvent.detail["latitude"],
            longitude: customEvent.detail["longitude"]
          });
          const eventX = (_a2 = customEvent.detail["x"]) !== null && _a2 !== void 0 ? _a2 : 0;
          const eventY = (_b = customEvent.detail["y"]) !== null && _b !== void 0 ? _b : 0;
          const domRect = natvieElement.value.getBoundingClientRect();
          const x = domRect.x + eventX;
          const y = domRect.y + eventY;
          const clientX = x;
          const clientY = y;
          const dx = (_c = customEvent.detail["dx"]) !== null && _c !== void 0 ? _c : 0;
          const dy = (_d = customEvent.detail["dy"]) !== null && _d !== void 0 ? _d : 0;
          const pageX = x + dx;
          const pageY = y + dy;
          const screenX = (_e = customEvent.detail["screenX"]) !== null && _e !== void 0 ? _e : 0;
          const screenY = (_f = customEvent.detail["screenY"]) !== null && _f !== void 0 ? _f : 0;
          const event = new UniMapAnchorPointTapEvent(customEvent.type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
          event.detail = mapAnchorPointTapEventDetail;
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("anchorpointtap", event);
        };
        const onMapPoiTap = (customEvent) => {
          var _a2, _b, _c, _d, _e, _f;
          const mapPoiTapEventDetail = new UniMapPoiTapEventDetail({
            latitude: customEvent.detail["latitude"],
            longitude: customEvent.detail["longitude"],
            name: customEvent.detail["name"]
          });
          const eventX = (_a2 = customEvent.detail["x"]) !== null && _a2 !== void 0 ? _a2 : 0;
          const eventY = (_b = customEvent.detail["y"]) !== null && _b !== void 0 ? _b : 0;
          const domRect = natvieElement.value.getBoundingClientRect();
          const x = domRect.x + eventX;
          const y = domRect.y + eventY;
          const clientX = x;
          const clientY = y;
          const dx = (_c = customEvent.detail["dx"]) !== null && _c !== void 0 ? _c : 0;
          const dy = (_d = customEvent.detail["dy"]) !== null && _d !== void 0 ? _d : 0;
          const pageX = x + dx;
          const pageY = y + dy;
          const screenX = (_e = customEvent.detail["screenX"]) !== null && _e !== void 0 ? _e : 0;
          const screenY = (_f = customEvent.detail["screenY"]) !== null && _f !== void 0 ? _f : 0;
          const event = new UniMapPoiTapEvent(customEvent.type, x, y, clientX, clientY, pageX, pageY, screenX, screenY);
          event.detail = mapPoiTapEventDetail;
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("poitap", event);
        };
        const onCalloutTap = (customEvent) => {
          const mapCalloutTapEventDetail = new UniMapCalloutTapEventDetail({
            markerId: customEvent.detail["markerId"]
          });
          const event = new UniMapCalloutTapEvent(customEvent.type, mapCalloutTapEventDetail);
          event.target = mapElem.value;
          event.currentTarget = mapElem.value;
          emit2("callouttap", event);
        };
        const onObjectInit = (e) => {
          const onReady2 = () => {
            setDefaultOptions();
          };
          const emits = new UTSJSONObject({ onMapTapCallback, onMapPoiTap, onMapLoadedCallback, onMapMarkerTap, onMapRegionChange });
          map2 = new uniMapTencent_utsProxy.TencentMap(e.detail.element, onReady2, emits);
        };
        vue.onUnmounted(() => {
          map2 === null || map2 === void 0 ? null : map2.destroy();
          map2 = null;
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("uni-map-element", new UTSJSONObject({
            ref_key: "mapElem",
            ref: mapElem,
            class: "uni-root"
          }), [
            vue.createElementVNode("native-view", new UTSJSONObject({
              ref_key: "natvieElement",
              ref: natvieElement,
              onInit: onObjectInit,
              onUpdated: onMapLoadedCallback,
              "on:tapNative": onMapTapCallback,
              onRegionchange: onMapRegionChange,
              onMarkertap: onMapMarkerTap,
              onControltap: onMapControlTap,
              onAnchorpointtap: onMapAnchorPointTap,
              onPoitap: onMapPoiTap,
              onCallouttap: onCalloutTap,
              style: new UTSJSONObject({ "width": "100%", "height": "100%" })
            }), null, 544)
          ], 512);
        };
      }
    });
    const _style_0 = {};
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const Map2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiComponent("Map", new UTSJSONObject({
      ...MapTypes,
      default: Map2
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/uni-page-container.js
var uni_page_container_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    class UniPageContainerElement extends UniViewElementImpl {
    }
    const PageContainerTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      UniPageContainerElement
    }, Symbol.toStringTag, { value: "Module" }));
    class PageContainerManager {
      constructor() {
        this.stack = [];
        this.idCounter = 0;
      }
      register() {
        const id2 = ++this.idCounter;
        this.stack.push(id2);
        return id2;
      }
      unregister(id2) {
        const index = this.stack.indexOf(id2);
        if (index > -1) {
          this.stack.splice(index, 1);
        }
      }
      isTop(id2) {
        return this.stack.length > 0 && this.stack[this.stack.length - 1] == id2;
      }
    }
    const pageContainerManager = new PageContainerManager();
    class PageContainerProps extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              show: { type: Boolean, optional: true },
              duration: { type: Number, optional: true },
              zIndex: { type: Number, optional: true },
              overlay: { type: Boolean, optional: true },
              round: { type: Boolean, optional: true },
              position: { type: "Unknown", optional: true },
              customStyle: { type: String, optional: true },
              overlayStyle: { type: String, optional: true },
              closeOnSlideDown: { type: Boolean, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = PageContainerProps.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.show = this.__props__.show;
        this.duration = this.__props__.duration;
        this.zIndex = this.__props__.zIndex;
        this.overlay = this.__props__.overlay;
        this.round = this.__props__.round;
        this.position = this.__props__.position;
        this.customStyle = this.__props__.customStyle;
        this.overlayStyle = this.__props__.overlayStyle;
        this.closeOnSlideDown = this.__props__.closeOnSlideDown;
        delete this.__props__;
      }
    }
    const MAX_SLIDER_DISTANCE = 100;
    const MIN_SLIDER_VELOCITY = 0.3;
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      ...{
        name: "page-container",
        rootElement: new UTSJSONObject({
          class: UniPageContainerElement
        })
      },
      __name: "page-container",
      props: {
        show: { type: Boolean, default: false },
        duration: { default: 300, type: Number },
        zIndex: { default: 100, type: Number },
        overlay: { type: Boolean, default: true },
        round: { type: Boolean, default: false },
        position: { default: "bottom", type: String },
        customStyle: { default: "", type: String },
        overlayStyle: { default: "", type: String },
        closeOnSlideDown: { type: Boolean, default: false }
      },
      emits: ["beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "clickoverlay"],
      setup(__props, _a) {
        var __emit = _a.emit;
        const props = __props;
        const emits = __emit;
        const showPageContainer = vue.ref(false);
        const isAnimating = vue.ref(false);
        const transitionTimer = vue.ref(null);
        const isEntered = vue.ref(false);
        const instanceId = vue.ref(0);
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;
        let isDragging = false;
        const translateValue = vue.ref(0);
        const overlayStyleMap = vue.computed(() => {
          const styleMap = /* @__PURE__ */ new Map([
            ["z-index", props.zIndex],
            ["transition-duration", props.duration + "ms"]
          ]);
          if (isEntered.value) {
            styleMap.set("opacity", "1").set("pointer-events", "auto");
          }
          return styleMap;
        });
        const innerStyleMap = vue.computed(() => {
          const styleMap = /* @__PURE__ */ new Map([
            ["z-index", props.zIndex + 1],
            ["transition-duration", props.duration + "ms"]
          ]);
          if (translateValue.value != 0 && isDragging) {
            let transformValue = "";
            switch (props.position) {
              case "bottom":
              case "top":
                transformValue = `translateY(${translateValue.value}px)`;
                break;
              case "left":
              case "right":
                transformValue = `translateX(${translateValue.value}px)`;
                break;
            }
            if (transformValue != "") {
              styleMap.set("transform", transformValue);
              styleMap.set("transition", "none");
            }
          } else if (translateValue.value != 0 && !isDragging) {
            styleMap.set("transition", `transform ${props.duration}ms ease`);
          }
          return styleMap;
        });
        const popupClasses = vue.computed(() => {
          const classes = [];
          if (props.position != null) {
            classes.push(`uni-page-container-popup-${props.position}`);
          }
          if (props.round) {
            classes.push("uni-page-container-popup-round");
          }
          if (isEntered.value) {
            classes.push("uni-page-container-popup-enter");
          }
          return classes;
        });
        function clearTransitionTimer() {
          if (transitionTimer.value != null) {
            clearTimeout(transitionTimer.value);
            transitionTimer.value = null;
          }
        }
        function onAnimationEnd(type) {
          isAnimating.value = false;
          clearTransitionTimer();
          if (type == "enter") {
            emits("afterenter");
          } else if (type == "leave") {
            showPageContainer.value = false;
            emits("afterleave");
          }
        }
        function listenTransitionEnd(type) {
          clearTransitionTimer();
          transitionTimer.value = setTimeout(() => {
            onAnimationEnd(type);
          }, props.duration);
        }
        function resetDragState() {
          isDragging = false;
          translateValue.value = 0;
        }
        function openContainer() {
          emits("beforeenter");
          showPageContainer.value = true;
          isEntered.value = false;
          instanceId.value = pageContainerManager.register();
          resetDragState();
          vue.nextTick(() => {
            emits("enter");
            isAnimating.value = true;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                isEntered.value = true;
                listenTransitionEnd("enter");
              });
            });
          });
        }
        function closeContainer() {
          if (isAnimating.value) {
            return null;
          }
          pageContainerManager.unregister(instanceId.value);
          emits("beforeleave");
          isAnimating.value = true;
          vue.nextTick(() => {
            isEntered.value = false;
            emits("leave");
            listenTransitionEnd("leave");
          });
        }
        vue.watch(() => {
          return props.show;
        }, (newVal) => {
          if (newVal && !showPageContainer.value) {
            openContainer();
          } else if (!newVal && showPageContainer.value) {
            closeContainer();
          }
        });
        function onClickOverlay(event) {
          if (isAnimating.value) {
            return null;
          }
          emits("clickoverlay", event);
          vue.nextTick(() => {
            closeContainer();
          });
        }
        function onTouchStart(e) {
          if (!props.closeOnSlideDown) {
            return null;
          }
          if (e.touches.length > 0) {
            const _a2 = e.touches[0], clientX = _a2.clientX, clientY = _a2.clientY;
            touchStartX = clientX;
            touchStartY = clientY;
            touchStartTime = Date.now();
            isDragging = false;
          }
        }
        function onTouchMove(e) {
          if (!props.closeOnSlideDown) {
            e.stopPropagation();
            return null;
          }
          if (e.touches.length > 0) {
            const _a2 = e.touches[0], clientX = _a2.clientX, clientY = _a2.clientY;
            const deltaX = clientX - touchStartX;
            const deltaY = clientY - touchStartY;
            let shouldDrag = false;
            let dragValue = 0;
            switch (props.position) {
              case "bottom":
                if (deltaY > 0) {
                  shouldDrag = true;
                  dragValue = deltaY;
                }
                break;
              case "top":
                if (deltaY < 0) {
                  shouldDrag = true;
                  dragValue = deltaY;
                }
                break;
              case "left":
                if (deltaX < 0) {
                  shouldDrag = true;
                  dragValue = deltaX;
                }
                break;
              case "right":
                if (deltaX > 0) {
                  shouldDrag = true;
                  dragValue = deltaX;
                }
                break;
            }
            if (shouldDrag) {
              isDragging = true;
              translateValue.value = dragValue;
              e.preventDefault();
              e.stopPropagation();
            }
          }
        }
        function onTouchEnd() {
          if (!props.closeOnSlideDown) {
            return null;
          }
          if (isDragging) {
            const deltaTime = Date.now() - touchStartTime;
            const velocity = Math.abs(translateValue.value) / deltaTime;
            if (Math.abs(translateValue.value) > MAX_SLIDER_DISTANCE || velocity > MIN_SLIDER_VELOCITY) {
              resetDragState();
              closeContainer();
            } else {
              resetDragState();
            }
          }
        }
        function onTouchCancel() {
          if (!props.closeOnSlideDown) {
            return null;
          }
          if (isDragging) {
            resetDragState();
          }
        }
        vue.onBackPress(() => {
          if (showPageContainer.value && pageContainerManager.isTop(instanceId.value)) {
            closeContainer();
            return true;
          }
          return false;
        });
        vue.onMounted(() => {
          if (props.show) {
            openContainer();
          }
        });
        vue.onBeforeUnmount(() => {
          clearTransitionTimer();
          if (instanceId.value > 0) {
            pageContainerManager.unregister(instanceId.value);
          }
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            _ctx.overlay && vue.unref(showPageContainer) ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 0,
              class: "uni-page-container-overlay",
              style: vue.normalizeStyle([vue.unref(overlayStyleMap), _ctx.overlayStyle]),
              onClick: onClickOverlay,
              onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["prevent", "stop"]))
            }), null, 36)) : vue.createCommentVNode("", true),
            vue.unref(showPageContainer) ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 1,
              class: vue.normalizeClass(["uni-page-container-popup", vue.unref(popupClasses)]),
              style: vue.normalizeStyle([vue.unref(innerStyleMap), _ctx.customStyle]),
              onTouchstart: onTouchStart,
              onTouchmove: onTouchMove,
              onTouchend: onTouchEnd,
              onTouchcancel: onTouchCancel
            }), [
              vue.renderSlot(_ctx.$slots, "default")
            ], 38)) : vue.createCommentVNode("", true)
          ], 64);
        };
      }
    });
    const _style_0 = { "uni-page-container-popup": { "": { "backgroundColor": "#ffffff", "boxSizing": "border-box", "overflow": "hidden", "position": "fixed", "transitionProperty": "transform,opacity", "transitionTimingFunction": "ease" } }, "uni-page-container-overlay": { "": { "backgroundColor": "rgba(0,0,0,0.7)", "height": "100%", "left": 0, "position": "fixed", "top": 0, "transitionProperty": "opacity", "transitionTimingFunction": "ease", "width": "100%", "opacity": 0, "pointerEvents": "none" } }, "uni-page-container-popup-right": { "": { "left": 0, "right": 0, "top": 0, "height": "100%", "width": "100%", "transform": "translateX(100%)" }, ".uni-page-container-popup-enter": { "transform": "translateX(0)" } }, "uni-page-container-popup-left": { "": { "left": 0, "right": 0, "top": 0, "height": "100%", "width": "100%", "transform": "translateX(-100%)" }, ".uni-page-container-popup-enter": { "transform": "translateX(0)" } }, "uni-page-container-popup-bottom": { "": { "bottom": 0, "left": 0, "width": "100%", "transform": "translateY(100%)" }, ".uni-page-container-popup-enter": { "transform": "translateY(0)" }, ".uni-page-container-popup-round": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0 } }, "uni-page-container-popup-top": { "": { "left": 0, "top": 0, "width": "100%", "transform": "translateY(-100%)" }, ".uni-page-container-popup-enter": { "transform": "translateY(0)" }, ".uni-page-container-popup-round": { "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "uni-page-container-popup-center": { "": { "top": 0, "left": 0, "width": "100%", "height": "100%", "transform": "scale(0.98)", "transformOrigin": "center", "transitionProperty": "opacity,transform", "transitionTimingFunction": "ease", "opacity": 0 }, ".uni-page-container-popup-enter": { "transform": "scale(1)", "opacity": 1 } }, "@TRANSITION": { "uni-page-container-popup": { "property": "transform,opacity", "timingFunction": "ease" }, "uni-page-container-overlay": { "property": "opacity", "timingFunction": "ease" }, "uni-page-container-popup-center": { "property": "opacity,transform", "timingFunction": "ease" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const PageContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiComponent("PageContainer", new UTSJSONObject({
      ...PageContainerTypes,
      default: PageContainer
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/uni-rich-text.js
var uni_rich_text_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    class UniRichTextItemClickEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              src: { type: String, optional: true },
              href: { type: String, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = UniRichTextItemClickEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.src = this.__props__.src;
        this.href = this.__props__.href;
        delete this.__props__;
      }
    }
    class UniRichTextItemClickEvent extends UniCustomEvent {
      constructor(type, detail) {
        super(type, detail);
      }
    }
    const RichTextTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      UniRichTextItemClickEvent,
      UniRichTextItemClickEventDetail
    }, Symbol.toStringTag, { value: "Module" }));
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "rich-text",
      props: {
        nodes: { default: "", type: null },
        mode: { default: "web", type: String },
        selectable: { type: Boolean, default: false },
        selectionHandleColor: { default: "#B4D5FE", type: String },
        selectionBackgroundColor: { default: "#B4D5FE", type: String }
      },
      emits: ["itemclick"],
      setup(__props, _a) {
        var _b, _c;
        var __emit = _a.emit;
        const props = __props;
        const emit2 = __emit;
        (_c = (_b = vue.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy) === null || _c === void 0 ? null : _c.$page;
        const webviewRef = vue.ref(null);
        let webviewSrc = "about:blank";
        const htmlContent = vue.ref("");
        const style = vue.useComputedStyle({
          properties: ["font-family", "line-height", "font-size", "color"],
          filterProperties: false
        });
        const fontFamily = vue.computed(() => {
          var _a2, _b2;
          return (_b2 = (_a2 = style.get("font-family")) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b2 !== void 0 ? _b2 : "-apple-system, HelveticaNeue";
        });
        const lineHeight = vue.computed(() => {
          var _a2, _b2;
          return (_b2 = (_a2 = style.get("line-height")) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b2 !== void 0 ? _b2 : "1.5";
        });
        const fontSize = vue.computed(() => {
          var _a2, _b2;
          return (_b2 = (_a2 = style.get("font-size")) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b2 !== void 0 ? _b2 : "16px";
        });
        const color = vue.computed(() => {
          var _a2, _b2;
          return (_b2 = (_a2 = style.get("color")) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b2 !== void 0 ? _b2 : null;
        });
        let isWebviewLoaded = false;
        let webviewHeight = 0;
        const VOID_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"];
        function generateHTML(nodes) {
          let html = "";
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node["text"] != null) {
              html += node["text"];
            } else {
              if (node["name"] != null) {
                const name = node["name"];
                html += `<${name}`;
                if (node["attrs"] != null) {
                  const attrs = node["attrs"];
                  const keys = UTSJSONObject.keys(attrs);
                  for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    const value = attrs[key];
                    html += ` ${key}="${value}"`;
                  }
                }
                if (VOID_ELEMENTS.includes(name)) {
                  html += " />";
                } else {
                  html += ">";
                  if (node["children"] != null) {
                    const children = node["children"];
                    if (UTS.isInstanceOf(children, Array)) {
                      html += generateHTML(children);
                    }
                  }
                  html += `</${name}>`;
                }
              }
            }
          }
          return html;
        }
        function createHTMLString() {
          const bodyColorStyle = color.value != null ? `
		color: ${color.value};` : "";
          return `<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<style>
	body {
		background-color: transparent;
		font-family: ${fontFamily.value};
		line-height: ${lineHeight.value};
		font-size: ${fontSize.value};
		${bodyColorStyle}
		overflow-x: hidden;
		overflow-wrap: break-word;
		word-wrap: break-word;
	}
	img {
		max-width: 100%;
		height: auto;
	}
	* {
		margin: 0;
	}
	</style>
	<script lang="uts">
		function postMessage(m) {
			window.__uniapp_x_.postMessage(JSON.stringify(m));
		}
		function updateSelection(enabled) {
			if (enabled) {
				var style = document.getElementById('disable-selection-style');
				if (style) style.remove();
				document.documentElement.style.webkitTouchCallout = 'default';
			} else {
				if (!document.getElementById('disable-selection-style')) {
					var style = document.createElement('style');
					style.id = 'disable-selection-style';
					style.textContent = '* { -webkit-user-select: none !important; user-select: none !important; }';
					document.head.appendChild(style);
				}
				document.documentElement.style.webkitTouchCallout = 'none';
			}
		}
		window.onload = function () {
			var aTags = document.getElementsByTagName('a');
			for (var i = 0; i < aTags.length; i++) {
				aTags[i].addEventListener('click', function (event) {
					event.preventDefault();
					var href = event.target.href;
					postMessage({ data: { linkClick: href } });
				});
			}
			var imgTags = document.getElementsByTagName('img');
			for (var i = 0; i < imgTags.length; i++) {
				imgTags[i].addEventListener('click', function (event) {
					var src = event.target.src;
					postMessage({ data: { imgClick: src } });
				});
			}
			updateSelection(${props.selectable})
		};
	<\/script>
</head>
<body>
	${htmlContent.value}
</body>
</html>`;
        }
        function loadHtmlContent(asyncLoad) {
          if (!isWebviewLoaded)
            return null;
          if (null == webviewRef.value) {
            if (null == webviewRef.value) {
              if (asyncLoad) {
                vue.nextTick(() => {
                  loadHtmlContent(false);
                });
              }
              return null;
            }
          }
          const fullHtml = createHTMLString();
          webviewRef.value.loadData({ data: fullHtml });
        }
        function updateSelectable() {
          var _a2;
          {
            (_a2 = webviewRef.value) === null || _a2 === void 0 ? null : _a2.evalJS(`updateSelection(${props.selectable})`);
          }
        }
        vue.watch([fontFamily, lineHeight, fontSize, color], () => {
          loadHtmlContent(true);
        });
        vue.watch(() => {
          return props.selectable;
        }, () => {
          updateSelectable();
        });
        vue.watch(() => {
          return props.nodes;
        }, (nodes = null, oldNodes = null) => {
          if (UTS.isInstanceOf(nodes, Array)) {
            htmlContent.value = generateHTML(nodes);
          } else if (typeof nodes == "string") {
            htmlContent.value = nodes;
          } else {
            htmlContent.value = "";
          }
          loadHtmlContent(true);
        }, { immediate: true });
        const onWebViewLoad = (event) => {
          if (null == webviewRef.value || !isWebviewLoaded) {
            webviewRef.value = event.target;
            isWebviewLoaded = true;
            loadHtmlContent(false);
          }
        };
        const onWebviewContentHeightChange = (event) => {
          var _a2;
          if (event.detail.height != webviewHeight && event.detail.height != 8) {
            webviewHeight = event.detail.height;
            (_a2 = webviewRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("height", `${webviewHeight}px`);
          }
        };
        const onWebViewMessage = (event) => {
          if (event.detail.data.length > 0) {
            const data = event.detail.data[0];
            let src = null;
            let href = null;
            if (data["linkClick"] != null) {
              href = data["linkClick"];
            } else if (data["imgClick"] != null) {
              src = data["imgClick"];
            }
            const eventDetail = new UniRichTextItemClickEventDetail({ src, href });
            const itemClickEvent = new UniRichTextItemClickEvent("itemclick", eventDetail);
            emit2("itemclick", itemClickEvent);
          }
        };
        vue.onBeforeUnmount(() => {
          webviewRef.value = null;
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", null, [
            vue.createElementVNode("web-view", new UTSJSONObject({
              style: new UTSJSONObject({ "width": "100%", "height": "0px" }),
              ref_key: "webviewRef",
              ref: webviewRef,
              src: vue.unref(webviewSrc),
              bounces: false,
              verticalScrollBarAccess: false,
              onContentheightchange: onWebviewContentHeightChange,
              onMessage: onWebViewMessage,
              onLoad: onWebViewLoad
            }), null, 40, ["src"])
          ]);
        };
      }
    });
    registerExtApiComponent("RichText", new UTSJSONObject({
      ...RichTextTypes,
      default: _sfc_main
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/uni-video.js
var uni_video_default = (uni3, Vue, { registerExtApiComponent }) => {
  (function(vue) {
    "use strict";
    function formatTime(val) {
      val = val > 0 && val < Infinity ? val : 0;
      const h2 = Math.floor(val / 3600);
      const m = Math.floor(val % 3600 / 60);
      const s = Math.floor(val % 3600 % 60);
      const hStr = (h2 < 10 ? "0" : "") + h2;
      const mStr = (m < 10 ? "0" : "") + m;
      const sStr = (s < 10 ? "0" : "") + s;
      let str = mStr + ":" + sStr;
      if (hStr !== "00") {
        str = hStr + ":" + str;
      }
      return str;
    }
    class UniVideoBaseEvent extends UniCustomEvent {
      constructor(target, type, detail) {
        super(type, detail);
        if (this.target == null) {
          this.target = target;
        }
        this.currentTarget = target;
      }
    }
    class UniVideoEvent extends UniVideoBaseEvent {
      constructor(target, type) {
        super(target, type, new UTSJSONObject({}));
      }
    }
    class UniVideoControlsToggleEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              show: { type: Boolean, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoControlsToggleEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.show = this.__props__.show;
        delete this.__props__;
      }
    }
    class UniVideoControlsToggleEvent extends UniVideoBaseEvent {
      constructor(target, show) {
        super(target, "controlstoggle", new UniVideoControlsToggleEventDetail({ show }));
      }
    }
    class UniVideoErrorEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              errSubject: { type: String, optional: false },
              errCode: { type: "Unknown", optional: false },
              errMsg: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoErrorEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.errSubject = this.__props__.errSubject;
        this.errCode = this.__props__.errCode;
        this.errMsg = this.__props__.errMsg;
        delete this.__props__;
      }
    }
    class UniVideoErrorEvent extends UniVideoBaseEvent {
      constructor(target, errCode, errMsg) {
        super(target, "error", new UniVideoErrorEventDetail({
          errSubject: "uni-video",
          errCode,
          errMsg
        }));
      }
    }
    class UniVideoFullScreenChangeEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              fullScreen: { type: Boolean, optional: false },
              direction: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoFullScreenChangeEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.fullScreen = this.__props__.fullScreen;
        this.direction = this.__props__.direction;
        delete this.__props__;
      }
    }
    class UniVideoFullScreenChangeEvent extends UniVideoBaseEvent {
      constructor(target, fullScreen, direction = "horizontal") {
        super(target, "fullscreenchange", new UniVideoFullScreenChangeEventDetail({
          fullScreen,
          direction
        }));
      }
    }
    class UniVideoFullScreenClickEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              screenX: { type: Number, optional: false },
              screenY: { type: Number, optional: false },
              screenWidth: { type: Number, optional: false },
              screenHeight: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoFullScreenClickEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.screenX = this.__props__.screenX;
        this.screenY = this.__props__.screenY;
        this.screenWidth = this.__props__.screenWidth;
        this.screenHeight = this.__props__.screenHeight;
        delete this.__props__;
      }
    }
    class UniVideoFullScreenClickEvent extends UniVideoBaseEvent {
      constructor(target, screenX, screenY, screenWidth, screenHeight) {
        super(target, "fullscreenclick", new UniVideoFullScreenClickEventDetail({
          screenX,
          screenY,
          screenWidth,
          screenHeight
        }));
      }
    }
    class UniVideoProgressEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              buffered: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoProgressEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.buffered = this.__props__.buffered;
        delete this.__props__;
      }
    }
    class UniVideoProgressEvent extends UniVideoBaseEvent {
      constructor(target, buffered) {
        super(target, "progress", new UniVideoProgressEventDetail({
          buffered
        }));
      }
    }
    class UniVideoTimeUpdateEventDetail extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              currentTime: { type: Number, optional: false },
              duration: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UniVideoTimeUpdateEventDetail.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.currentTime = this.__props__.currentTime;
        this.duration = this.__props__.duration;
        delete this.__props__;
      }
    }
    class UniVideoTimeUpdateEvent extends UniVideoBaseEvent {
      constructor(target, currentTime, duration) {
        super(target, "timeupdate", new UniVideoTimeUpdateEventDetail({
          currentTime,
          duration
        }));
      }
    }
    const VideoTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      UniVideoControlsToggleEvent,
      UniVideoControlsToggleEventDetail,
      UniVideoErrorEvent,
      UniVideoErrorEventDetail,
      UniVideoEvent,
      UniVideoFullScreenChangeEvent,
      UniVideoFullScreenChangeEventDetail,
      UniVideoFullScreenClickEvent,
      UniVideoFullScreenClickEventDetail,
      UniVideoProgressEvent,
      UniVideoProgressEventDetail,
      UniVideoTimeUpdateEvent,
      UniVideoTimeUpdateEventDetail
    }, Symbol.toStringTag, { value: "Module" }));
    const uniVideo_utsProxy = uni3.requireUTSPlugin("uni_modules/uni-video");
    const ICON_BACK = "\uE601";
    const ICON_PLAY = "\uEA24";
    const ICON_PAUSH = "\uEA25";
    const ICON_DANMU = "\uEA26";
    const ICON_DANMU_ACTIVE = "\uEA27";
    const ICON_FULLSCREEN_CLOSE = "\uEA28";
    const ICON_FULLSCREEN = "\uEA29";
    const ICON_VOLUME = "\uEA30";
    const ICON_VOLUME_MUTE = "\uEA31";
    const ICON_BRIGHTNESS = "\uEA32";
    class VideoState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              start: { type: Boolean, optional: false },
              src: { type: String, optional: false },
              playing: { type: Boolean, optional: false },
              currentTime: { type: Number, optional: false },
              duration: { type: Number, optional: false },
              currentDuration: { type: Number, optional: false },
              progress: { type: Number, optional: false },
              buffered: { type: Number, optional: false },
              pauseUpdatingCurrentTime: { type: Boolean, optional: false },
              loading: { type: Boolean, optional: false },
              prepared: { type: Boolean, optional: false },
              isError: { type: Boolean, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = VideoState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.start = this.__props__.start;
        this.src = this.__props__.src;
        this.playing = this.__props__.playing;
        this.currentTime = this.__props__.currentTime;
        this.duration = this.__props__.duration;
        this.currentDuration = this.__props__.currentDuration;
        this.progress = this.__props__.progress;
        this.buffered = this.__props__.buffered;
        this.pauseUpdatingCurrentTime = this.__props__.pauseUpdatingCurrentTime;
        this.loading = this.__props__.loading;
        this.prepared = this.__props__.prepared;
        this.isError = this.__props__.isError;
        delete this.__props__;
      }
    }
    class UseVideoReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: VideoState, optional: false },
              muted: { type: "Unknown", optional: false },
              play: { type: "Unknown", optional: false },
              pause: { type: "Unknown", optional: false },
              toggle: { type: "Unknown", optional: false },
              stop: { type: "Unknown", optional: false },
              seek: { type: "Unknown", optional: false },
              playbackRate: { type: "Unknown", optional: false },
              mute: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseVideoReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.muted = this.__props__.muted;
        this.play = this.__props__.play;
        this.pause = this.__props__.pause;
        this.toggle = this.__props__.toggle;
        this.stop = this.__props__.stop;
        this.seek = this.__props__.seek;
        this.playbackRate = this.__props__.playbackRate;
        this.mute = this.__props__.mute;
        delete this.__props__;
      }
    }
    class FullscreenState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              fullscreen: { type: Boolean, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = FullscreenState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.fullscreen = this.__props__.fullscreen;
        delete this.__props__;
      }
    }
    class UseFullscreenReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: FullscreenState, optional: false },
              requestFullscreen: { type: "Unknown", optional: false },
              exitFullscreen: { type: "Unknown", optional: false },
              toggleFullscreen: { type: "Unknown", optional: false },
              fullscreenchange: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseFullscreenReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.requestFullscreen = this.__props__.requestFullscreen;
        this.exitFullscreen = this.__props__.exitFullscreen;
        this.toggleFullscreen = this.__props__.toggleFullscreen;
        this.fullscreenchange = this.__props__.fullscreenchange;
        delete this.__props__;
      }
    }
    class UseVolumeReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: VolumeState, optional: false },
              updateVolume: { type: "Unknown", optional: false },
              clearChangeShowToast: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseVolumeReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.updateVolume = this.__props__.updateVolume;
        this.clearChangeShowToast = this.__props__.clearChangeShowToast;
        delete this.__props__;
      }
    }
    class VolumeState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              minVolume: { type: Number, optional: false },
              maxVolume: { type: Number, optional: false },
              currentVolumeLevel: { type: Number, optional: false },
              showToast: { type: Boolean, optional: false },
              positionX: { type: Number, optional: true }
            };
          }
        };
      }
      constructor(options, metadata = VolumeState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.minVolume = this.__props__.minVolume;
        this.maxVolume = this.__props__.maxVolume;
        this.currentVolumeLevel = this.__props__.currentVolumeLevel;
        this.showToast = this.__props__.showToast;
        this.positionX = this.__props__.positionX;
        delete this.__props__;
      }
    }
    class UseDoubleClickReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              onClick: { type: "Unknown", optional: false },
              TIME_MAX: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseDoubleClickReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.onClick = this.__props__.onClick;
        this.TIME_MAX = this.__props__.TIME_MAX;
        delete this.__props__;
      }
    }
    class ControlsState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              seeking: { type: Boolean, optional: false },
              touching: { type: Boolean, optional: false },
              controlsTouching: { type: Boolean, optional: false },
              toggleControlsTimer: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = ControlsState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.seeking = this.__props__.seeking;
        this.touching = this.__props__.touching;
        this.controlsTouching = this.__props__.controlsTouching;
        this.toggleControlsTimer = this.__props__.toggleControlsTimer;
        delete this.__props__;
      }
    }
    class UseControlsReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: ControlsState, optional: false },
              clickProgress: { type: "Unknown", optional: false },
              toggleControls: { type: "Unknown", optional: false },
              autoHideStart: { type: "Unknown", optional: false },
              autoHideEnd: { type: "Unknown", optional: false },
              controlsClick: { type: "Unknown", optional: true },
              centerPlayBtnShow: { type: "Unknown", optional: false },
              controlsShow: { type: "Unknown", optional: false },
              controlsVisible: { type: "Unknown", optional: false },
              onBallTouchstart: { type: "Unknown", optional: false },
              onBallTouchmove: { type: "Unknown", optional: false },
              onBallTouchend: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseControlsReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.clickProgress = this.__props__.clickProgress;
        this.toggleControls = this.__props__.toggleControls;
        this.autoHideStart = this.__props__.autoHideStart;
        this.autoHideEnd = this.__props__.autoHideEnd;
        this.controlsClick = this.__props__.controlsClick;
        this.centerPlayBtnShow = this.__props__.centerPlayBtnShow;
        this.controlsShow = this.__props__.controlsShow;
        this.controlsVisible = this.__props__.controlsVisible;
        this.onBallTouchstart = this.__props__.onBallTouchstart;
        this.onBallTouchmove = this.__props__.onBallTouchmove;
        this.onBallTouchend = this.__props__.onBallTouchend;
        delete this.__props__;
      }
    }
    class GestureState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              seeking: { type: Boolean, optional: false },
              hasSought: { type: Boolean, optional: false },
              toastThin: { type: Boolean, optional: false },
              gestureType: { type: "Unknown", optional: false },
              volumeOld: { type: Number, optional: false },
              volumeNew: { type: Number, optional: false },
              currentTimeOld: { type: Number, optional: false },
              currentTimeNew: { type: Number, optional: false },
              doubleClickTime: { type: Number, optional: false },
              brightnessOld: { type: Number, optional: false },
              brightnessNew: { type: Number, optional: false },
              containerRect: { type: ContainerRect, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = GestureState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.seeking = this.__props__.seeking;
        this.hasSought = this.__props__.hasSought;
        this.toastThin = this.__props__.toastThin;
        this.gestureType = this.__props__.gestureType;
        this.volumeOld = this.__props__.volumeOld;
        this.volumeNew = this.__props__.volumeNew;
        this.currentTimeOld = this.__props__.currentTimeOld;
        this.currentTimeNew = this.__props__.currentTimeNew;
        this.doubleClickTime = this.__props__.doubleClickTime;
        this.brightnessOld = this.__props__.brightnessOld;
        this.brightnessNew = this.__props__.brightnessNew;
        this.containerRect = this.__props__.containerRect;
        delete this.__props__;
      }
    }
    class TouchStartOrigin extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              x: { type: Number, optional: false },
              y: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = TouchStartOrigin.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.x = this.__props__.x;
        this.y = this.__props__.y;
        delete this.__props__;
      }
    }
    class UseGestureReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: GestureState, optional: false },
              onTouchstart: { type: "Unknown", optional: false },
              onTouchend: { type: "Unknown", optional: false },
              onTouchmove: { type: "Unknown", optional: false },
              onClick: { type: "Unknown", optional: false },
              changeProgress: { type: "Unknown", optional: false },
              changeToastThin: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseGestureReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.onTouchstart = this.__props__.onTouchstart;
        this.onTouchend = this.__props__.onTouchend;
        this.onTouchmove = this.__props__.onTouchmove;
        this.onClick = this.__props__.onClick;
        this.changeProgress = this.__props__.changeProgress;
        this.changeToastThin = this.__props__.changeToastThin;
        delete this.__props__;
      }
    }
    class ContainerRect extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              width: { type: Number, optional: false },
              height: { type: Number, optional: false },
              x: { type: Number, optional: false },
              y: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = ContainerRect.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.width = this.__props__.width;
        this.height = this.__props__.height;
        this.x = this.__props__.x;
        this.y = this.__props__.y;
        delete this.__props__;
      }
    }
    class DanmuState extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              enable: { type: Boolean, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = DanmuState.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.enable = this.__props__.enable;
        delete this.__props__;
      }
    }
    class UseDanmuReturn extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              state: { type: DanmuState, optional: false },
              toggleDanmu: { type: "Unknown", optional: false },
              updateDanmu: { type: "Unknown", optional: false },
              playDanmu: { type: "Unknown", optional: false },
              sendDanmu: { type: "Unknown", optional: false }
            };
          }
        };
      }
      constructor(options, metadata = UseDanmuReturn.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.state = this.__props__.state;
        this.toggleDanmu = this.__props__.toggleDanmu;
        this.updateDanmu = this.__props__.updateDanmu;
        this.playDanmu = this.__props__.playDanmu;
        this.sendDanmu = this.__props__.sendDanmu;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      ...{
        name: "video",
        // @ts-ignore
        rootElement: new UTSJSONObject({
          name: "uni-video-element",
          class: uniVideo_utsProxy.UniVideoElement
        })
      },
      __name: "video",
      props: {
        src: { type: String },
        duration: { type: Number },
        controls: { type: Boolean, default: true },
        danmuList: { default: [], type: Array },
        danmuBtn: { type: Boolean, default: false },
        enableDanmu: { type: Boolean, default: false },
        autoplay: { type: Boolean, default: false },
        loop: { type: Boolean, default: false },
        muted: { type: Boolean, default: false },
        objectFit: { default: "contain", type: String },
        poster: { type: String },
        direction: { default: 90, type: null },
        showProgress: { type: Boolean, default: true },
        initialTime: { default: 0, type: Number },
        showFullscreenBtn: { type: Boolean, default: true },
        pageGesture: { type: Boolean, default: false },
        vslideGesture: { type: Boolean, default: false },
        vslideGestureInFullscreen: { type: Boolean, default: true },
        enableProgressGesture: { type: Boolean, default: true },
        showPlayBtn: { type: Boolean, default: true },
        showCenterPlayBtn: { type: Boolean, default: true },
        showLoading: { type: Boolean, default: true },
        showMuteBtn: { type: Boolean, default: false },
        enablePlayGesture: { type: Boolean, default: false },
        title: { type: String },
        httpCache: { type: Boolean, default: false },
        header: { type: null },
        codec: { default: "hardware", type: String }
      },
      emits: ["play", "pause", "ended", "waiting", "timeupdate", "fullscreenchange", "error", "progress", "fullscreenclick", "controlstoggle"],
      setup(__props, _a) {
        var _b;
        var __emit = _a.emit;
        function eventWrapper(event, fn = null) {
          fn === null || fn === void 0 ? null : fn(event);
          event.stopPropagation();
        }
        function formatTime$1(val) {
          return formatTime(val);
        }
        const emit2 = __emit;
        const props = __props;
        let brightness = new uniVideo_utsProxy.Brightness();
        let video = null;
        const rootRef = vue.ref(null);
        const containerRef = vue.ref(null);
        const slotsRef = vue.ref(null);
        const progressRef = vue.ref(null);
        const progressBarRef = vue.ref(null);
        const playedRef = vue.ref(null);
        const windowInfo = uni3.getWindowInfo();
        const danmuRef = vue.ref(null);
        vue.ref(null);
        const safeTop = vue.ref(0);
        const options = new UTSJSONObject({
          src: props.src,
          previewUri: props.poster
        });
        const instance = vue.getCurrentInstance();
        const eventSeed = (_b = instance === null || instance === void 0 ? null : instance.uid) !== null && _b !== void 0 ? _b : Date.now();
        let gestureState = null;
        let useGestureReturn = null;
        function useVideo() {
          const muted = vue.ref(false);
          const state = vue.reactive(new VideoState({
            start: false,
            src: props.src,
            playing: false,
            currentTime: 0,
            duration: 0,
            currentDuration: 0,
            progress: 0,
            buffered: 0,
            pauseUpdatingCurrentTime: false,
            loading: true,
            prepared: false,
            isError: false
          }));
          const play = (event = null) => {
            if (!state.prepared) {
              state.loading = !state.isError;
            }
            state.start = true;
            video === null || video === void 0 ? null : video.play();
          };
          const pause = (event = null) => {
            video === null || video === void 0 ? null : video.pause();
          };
          const toggle = (event = null) => {
            if (state.playing) {
              pause(event);
            } else {
              play(event);
            }
          };
          const seek = (position) => {
            if (!isNaN(position)) {
              video === null || video === void 0 ? null : video.seek(position);
            }
          };
          const stop2 = (event = null) => {
            video === null || video === void 0 ? null : video.stop();
          };
          const playbackRate = (rate) => {
            if (video != null)
              video.playbackRate = rate;
          };
          const mute = (_muted) => {
            muted.value = _muted;
            if (video != null)
              video.muted = _muted;
          };
          let srcStopHandle = null;
          let mutedStopHandle = null;
          let posterStopHandle = null;
          let objectFitStopHandle = null;
          let autoplayStopHandle = null;
          let loopStopHandle = null;
          let durationStopHandle = null;
          vue.onMounted(() => {
            vue.nextTick(() => {
              vue.watchEffect(() => {
                muted.value = props.muted === true;
              });
              srcStopHandle = vue.watch(() => {
                return props.src;
              }, (src) => {
                state.start = false;
                state.prepared = false;
                state.playing = false;
                state.loading = true;
                state.isError = false;
                state.currentTime = 0;
                state.duration = 0;
                state.progress = 0;
                state.buffered = 0;
                if (video != null) {
                  video.src = src;
                }
              });
              vue.watch(() => {
                return state.buffered;
              }, (buffered) => {
              });
              mutedStopHandle = vue.watch(() => {
                return props.muted;
              }, (muted2) => {
                mute(muted2);
              }, { immediate: true });
              posterStopHandle = vue.watch(() => {
                return props.poster;
              }, (poster) => {
                if (video != null) {
                  video.poster = poster;
                }
              }, { immediate: true });
              objectFitStopHandle = vue.watch(() => {
                return props.objectFit;
              }, (objectFit = null) => {
                if (video != null) {
                  video.objectFit = objectFit;
                }
              }, { immediate: true });
              autoplayStopHandle = vue.watch(() => {
                return props.autoplay;
              }, (autoplay) => {
                if (video != null) {
                  video.autoplay = autoplay;
                }
              }, { immediate: true });
              loopStopHandle = vue.watch(() => {
                return props.loop;
              }, (loop) => {
                if (video != null) {
                  video.loop = loop;
                }
              }, { immediate: true });
              durationStopHandle = vue.watch([() => {
                return state.duration;
              }, () => {
                return props.duration;
              }], () => {
                var _a2, _b2;
                state.currentDuration = ((_a2 = props.duration) !== null && _a2 !== void 0 ? _a2 : 0) > 0 ? (_b2 = props.duration) !== null && _b2 !== void 0 ? _b2 : 0 : state.duration;
              }, { immediate: true });
            });
          });
          vue.onBeforeUnmount(() => {
            srcStopHandle === null || srcStopHandle === void 0 ? null : srcStopHandle();
            mutedStopHandle === null || mutedStopHandle === void 0 ? null : mutedStopHandle();
            posterStopHandle === null || posterStopHandle === void 0 ? null : posterStopHandle();
            objectFitStopHandle === null || objectFitStopHandle === void 0 ? null : objectFitStopHandle();
            autoplayStopHandle === null || autoplayStopHandle === void 0 ? null : autoplayStopHandle();
            loopStopHandle === null || loopStopHandle === void 0 ? null : loopStopHandle();
            durationStopHandle === null || durationStopHandle === void 0 ? null : durationStopHandle();
          });
          return new UseVideoReturn({
            state,
            play,
            pause,
            toggle,
            stop: stop2,
            seek,
            playbackRate,
            mute,
            muted
          });
        }
        const useVideoReturn = useVideo();
        const videoState = useVideoReturn.state;
        function useFullscreen() {
          const pages2 = getCurrentPages();
          let page = pages2[pages2.length - 1];
          const state = vue.reactive(new FullscreenState({
            fullscreen: false
          }));
          const requestFullscreen = (options2 = null) => {
            video === null || video === void 0 ? null : video.requestFullscreen(options2);
          };
          const exitFullscreen = () => {
            video === null || video === void 0 ? null : video.exitFullscreen();
          };
          const toggleFullscreen = (fullscreen) => {
            if (state.fullscreen) {
              exitFullscreen();
            } else {
              requestFullscreen(null);
            }
          };
          vue.onBeforeUnmount(exitFullscreen);
          vue.onMounted(() => {
            vue.nextTick(() => {
              var _a2;
              let uniPage = (_a2 = rootRef.value) === null || _a2 === void 0 ? null : _a2.uniPage;
              if (uniPage != null && page !== uniPage) {
                page = uniPage;
              }
            });
          });
          const fullscreenchange = (event) => {
            let timeout = 500;
            setTimeout(() => {
              var _a2, _b2;
              (_b2 = (_a2 = containerRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRectAsync()) === null || _b2 === void 0 ? null : _b2.then((rect) => {
                gestureState.containerRect.height = rect.height;
                gestureState.containerRect.width = rect.width;
                gestureState.containerRect.x = rect.x;
                gestureState.containerRect.y = rect.y;
                state.fullscreen = (page === null || page === void 0 ? null : page.fullscreenElement) != null;
                const isVertical = rect.height > rect.width;
                if (state.fullscreen && isVertical) {
                  safeTop.value = windowInfo.statusBarHeight;
                } else {
                  safeTop.value = 0;
                }
                emit2("fullscreenchange", new UniVideoFullScreenChangeEvent(rootRef.value, state.fullscreen, isVertical ? "vertical" : "horizontal"));
              });
            }, timeout);
          };
          return new UseFullscreenReturn({
            state,
            requestFullscreen,
            exitFullscreen,
            toggleFullscreen,
            fullscreenchange
          });
        }
        const useFullScreenReturn = useFullscreen();
        const fullscreenState = useFullScreenReturn.state;
        const titleBarStyle = vue.computed(() => {
          return null;
        });
        function useVolume() {
          const state = vue.reactive(new VolumeState({
            minVolume: 0,
            maxVolume: 0,
            currentVolumeLevel: 0,
            showToast: false,
            positionX: null
          }));
          let showToastTimer = null;
          function changeShowToast() {
            if (showToastTimer != null)
              return null;
            showToastTimer = setTimeout(() => {
              state.showToast = false;
              gestureState.toastThin = false;
              showToastTimer = null;
            }, 1e3);
          }
          const clearChangeShowToast = () => {
            const timer = showToastTimer;
            if (timer == null)
              return null;
            clearTimeout(timer);
            showToastTimer = null;
          };
          function useShowToast() {
            state.showToast = true;
            clearChangeShowToast();
            changeShowToast();
            useGestureReturn.changeToastThin();
          }
          let audioManager = null;
          audioManager = new uniVideo_utsProxy.AudioManager((volume = null) => {
            if (gestureState.gestureType === "volume")
              return null;
            useShowToast();
            state.currentVolumeLevel = volume;
          });
          state.minVolume = audioManager.minVolume;
          state.maxVolume = audioManager.maxVolume;
          state.currentVolumeLevel = audioManager.currentVolume;
          vue.watchEffect(() => {
            const isFullscreen = fullscreenState.fullscreen;
            if (isFullscreen) {
              state.positionX = -100;
            } else {
              state.positionX = null;
            }
          });
          vue.onBeforeUnmount(() => {
            audioManager.offVolumeChange();
            state.positionX = null;
          });
          const updateVolume = (nextVolume) => {
            if (nextVolume > state.maxVolume) {
              nextVolume = state.maxVolume;
            }
            if (nextVolume < state.minVolume) {
              nextVolume = state.minVolume;
            }
            useShowToast();
            state.currentVolumeLevel = nextVolume;
          };
          return new UseVolumeReturn({
            state,
            updateVolume,
            clearChangeShowToast
          });
        }
        const useVolumeReturn = useVolume();
        const volumeState = useVolumeReturn.state;
        function useDoubleClick(doubleClick) {
          let firstEvent = null;
          let timeout = 0;
          const TIME_MAX = 200;
          const PAGE_MAX = 44;
          const onClick = (event) => {
            clearTimeout(timeout);
            if (firstEvent != null && Math.abs(event.pageX - firstEvent.pageX) <= PAGE_MAX && Math.abs(event.pageY - firstEvent.pageY) <= PAGE_MAX && event.timeStamp - firstEvent.timeStamp <= TIME_MAX) {
              doubleClick(event);
              firstEvent = null;
              return null;
            }
            firstEvent = event;
            timeout = setTimeout(() => {
              firstEvent = null;
            }, TIME_MAX);
          };
          return new UseDoubleClickReturn({
            onClick,
            TIME_MAX
          });
        }
        let controlsState = null;
        function useControls(seeking = null) {
          const centerPlayBtnShow = vue.computed(() => {
            return props.showCenterPlayBtn && !videoState.start;
          });
          const controlsVisible = vue.ref(true);
          const controlsShow = vue.computed(() => {
            return !centerPlayBtnShow.value && props.controls && controlsVisible.value;
          });
          const state = vue.reactive(new ControlsState({
            seeking: false,
            touching: false,
            controlsTouching: false,
            toggleControlsTimer: 0
          }));
          const clickProgress = (event) => {
            if (event.target != null) {
              const clientRect = event.target.getBoundingClientRect();
              const w = clientRect.width;
              const x = event.x - clientRect.x;
              let progress = 0;
              if (x >= 0 && x <= w) {
                progress = x / w;
                useVideoReturn.seek(videoState.currentDuration * progress);
              }
            }
          };
          const controlsClick = (_ = null) => {
            clearTimeout(controlsState.toggleControlsTimer);
          };
          const toggleControls = (event) => {
            if (fullscreenState.fullscreen) {
              emit2("fullscreenclick", new UniVideoFullScreenClickEvent(rootRef.value, event.screenX, event.screenY, gestureState.containerRect.width, gestureState.containerRect.height));
            }
            state.toggleControlsTimer = setTimeout(() => {
              const targetVisible = !controlsVisible.value;
              controlsVisible.value = targetVisible;
              emit2("controlstoggle", new UniVideoControlsToggleEvent(rootRef.value, targetVisible));
            }, gestureState.doubleClickTime);
          };
          let hideTiming = 0;
          const autoHideStart = () => {
            hideTiming = setTimeout(() => {
              controlsVisible.value = false;
            }, 3e3);
          };
          const autoHideEnd = () => {
            if (hideTiming != 0) {
              clearTimeout(hideTiming);
            }
          };
          vue.onBeforeUnmount(() => {
            if (hideTiming != 0) {
              clearTimeout(hideTiming);
            }
          });
          vue.watch(() => {
            return controlsShow.value && videoState.playing && !state.controlsTouching;
          }, (val) => {
            if (val) {
              autoHideStart();
            } else {
              autoHideEnd();
            }
          });
          let originX = 0;
          let originY = 0;
          let moveOnce = true;
          let originProgress = 0;
          let cachedProgressBarWidth = 0;
          const onBallTouchend = (event) => {
            state.controlsTouching = false;
            if (state.touching) {
              if (!moveOnce) {
                event.stopPropagation();
                useVideoReturn.seek(videoState.currentDuration * videoState.progress / 100);
              }
              state.touching = false;
            }
          };
          const onBallTouchmove = (event) => {
            if (!state.touching)
              return null;
            const toucher = event.touches[0];
            const pageX = toucher.pageX;
            const pageY = toucher.pageY;
            if (moveOnce && Math.abs(pageX - originX) < Math.abs(pageY - originY)) {
              onBallTouchend(event);
              return null;
            }
            moveOnce = false;
            let progress = originProgress + (pageX - originX) / cachedProgressBarWidth * 100;
            if (progress < 0) {
              progress = 0;
            } else if (progress > 100) {
              progress = 100;
            }
            videoState.progress = progress;
            seeking === null || seeking === void 0 ? null : seeking(videoState.currentDuration * progress / 100);
            state.seeking = true;
            event.stopPropagation();
            if (!fullscreenState.fullscreen) {
              event.preventDefault();
            }
          };
          const onBallTouchstart = (event) => {
            var _a2;
            state.controlsTouching = true;
            const toucher = event.touches[0];
            originX = toucher.pageX;
            originY = toucher.pageY;
            originProgress = videoState.progress;
            moveOnce = true;
            state.touching = true;
            const progressEl = progressBarRef.value;
            if (progressEl != null) {
              cachedProgressBarWidth = (_a2 = progressEl.getBoundingClientRect().width) !== null && _a2 !== void 0 ? _a2 : progressEl.offsetWidth;
            }
          };
          return new UseControlsReturn({
            state,
            clickProgress,
            toggleControls,
            autoHideStart,
            autoHideEnd,
            controlsClick,
            centerPlayBtnShow,
            controlsShow,
            controlsVisible,
            onBallTouchstart,
            onBallTouchmove,
            onBallTouchend
          });
        }
        const useControlsReturn = useControls((currentTimeNew) => {
          gestureState.currentTimeNew = currentTimeNew;
        });
        controlsState = useControlsReturn.state;
        function useGesture() {
          let changeToastThinTimer = null;
          const containerRect = vue.reactive(new ContainerRect({
            width: 0,
            height: 200,
            x: 0,
            y: 0
          }));
          const state = vue.reactive(new GestureState({
            seeking: false,
            hasSought: false,
            gestureType: "none",
            volumeOld: 0,
            volumeNew: 0,
            currentTimeOld: 0,
            currentTimeNew: 0,
            doubleClickTime: 0,
            brightnessOld: brightness.getBrightness(),
            brightnessNew: brightness.getBrightness(),
            containerRect,
            toastThin: false
          }));
          const changeToastThin = () => {
            if (state.gestureType !== "none" && changeToastThinTimer != null)
              return null;
            changeToastThinTimer = setTimeout(() => {
              state.toastThin = true;
            }, 500);
          };
          const touchStartOrigin = new TouchStartOrigin({
            x: 0,
            y: 0
          });
          const changeProgress = (x) => {
            const duration = videoState.currentDuration;
            let currentTimeNew = x / 600 * duration + state.currentTimeOld;
            if (currentTimeNew < 0) {
              currentTimeNew = 0;
            } else if (currentTimeNew > duration) {
              currentTimeNew = duration;
            }
            state.currentTimeNew = currentTimeNew;
          };
          const onTouchstart = (event) => {
            const toucher = event.touches[0];
            touchStartOrigin.x = toucher.pageX;
            touchStartOrigin.y = toucher.pageY;
            state.gestureType = "none";
            state.volumeOld = 0;
            state.hasSought = false;
            if (fullscreenState.fullscreen) {
              event.stopPropagation();
            }
          };
          const onTouchmove = (event) => {
            if (!videoState.start)
              return null;
            function stop2() {
              if (!fullscreenState.fullscreen) {
                event.preventDefault();
              } else {
                event.stopPropagation();
              }
            }
            if (fullscreenState.fullscreen) {
              stop2();
            }
            const containerCenter = (containerRect.x + containerRect.width) / 2;
            const gestureType = state.gestureType;
            if (gestureType === "stop") {
              return null;
            }
            const toucher = event.touches[0];
            const pageX = toucher.pageX;
            const pageY = toucher.pageY;
            const origin = touchStartOrigin;
            function changeVolume(y) {
              const valueOld = state.volumeOld;
              let value;
              if (typeof valueOld === "number") {
                value = valueOld - y / containerRect.height * volumeState.maxVolume;
                if (value < volumeState.minVolume) {
                  value = volumeState.minVolume;
                } else if (value > volumeState.maxVolume) {
                  value = volumeState.maxVolume;
                }
                useVolumeReturn.updateVolume(value);
                state.volumeNew = value;
              }
            }
            function changeBrightness(y) {
              const valueOld = state.brightnessOld;
              let value;
              if (typeof valueOld === "number") {
                value = valueOld - y / containerRect.height;
                if (value < 0) {
                  value = 0;
                } else if (value > 1) {
                  value = 1;
                }
                brightness.setBrightness(value);
                state.brightnessNew = value;
              }
            }
            switch (gestureType) {
              case "progress":
                stop2();
                changeProgress(pageX - origin.x);
                state.seeking = true;
                break;
              case "volume":
                stop2();
                changeVolume(pageY - origin.y);
                break;
              case "brightness":
                stop2();
                changeBrightness(pageY - origin.y);
                break;
            }
            if (gestureType !== "none") {
              return null;
            }
            const absX = Math.abs(pageX - origin.x);
            const absY = Math.abs(pageY - origin.y);
            if (absX > absY) {
              if (!props.enableProgressGesture) {
                state.gestureType = "stop";
                return null;
              }
              state.gestureType = "progress";
              state.currentTimeOld = videoState.currentTime;
              state.currentTimeNew = videoState.currentTime;
            } else if (absX < absY) {
              if (props.pageGesture || props.vslideGesture || fullscreenState.fullscreen && props.vslideGestureInFullscreen) {
                if (origin.x > containerCenter) {
                  changeToastThin();
                  state.gestureType = "volume";
                  state.volumeOld = volumeState.currentVolumeLevel;
                } else {
                  changeToastThin();
                  useVolumeReturn.clearChangeShowToast();
                  volumeState.showToast = false;
                  state.toastThin = false;
                  state.gestureType = "brightness";
                  state.brightnessOld = brightness.getBrightness();
                }
              } else {
                state.gestureType = "stop";
              }
            }
          };
          const onTouchend = (event) => {
            if (fullscreenState.fullscreen) {
              event.stopPropagation();
            }
            if (state.gestureType !== "none") {
              state.hasSought = true;
              if (state.gestureType !== "stop") {
                if (!fullscreenState.fullscreen) {
                  event.preventDefault();
                }
              }
            }
            if (state.gestureType === "progress" && state.currentTimeOld !== state.currentTimeNew) {
              useVideoReturn.seek(state.currentTimeNew);
            }
            if (state.gestureType === "volume" || state.gestureType === "brightness") {
              if (state.gestureType === "brightness") {
                state.toastThin = false;
              }
              clearTimeout(changeToastThinTimer);
              changeToastThinTimer = null;
            }
            state.gestureType = "none";
          };
          let doubleClickHandler = null;
          const onClick = (event) => {
            if (state.hasSought) {
              event.stopPropagation();
              state.hasSought = false;
              return null;
            }
            if (doubleClickHandler != null) {
              doubleClickHandler === null || doubleClickHandler === void 0 ? null : doubleClickHandler(event);
            }
          };
          const getContainerRect = () => {
            var _a2, _b2;
            (_b2 = (_a2 = containerRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRectAsync()) === null || _b2 === void 0 ? null : _b2.then((rect) => {
              containerRect.height = rect.height;
              containerRect.width = rect.width;
              containerRect.x = rect.x;
              containerRect.y = rect.y;
            });
          };
          vue.onMounted(() => {
            vue.nextTick(() => {
              getContainerRect();
              vue.watchEffect(() => {
                if (props.enablePlayGesture) {
                  const res = useDoubleClick((event) => {
                    event.stopPropagation();
                    clearTimeout(controlsState.toggleControlsTimer);
                    useVideoReturn.toggle(event);
                    useControlsReturn.controlsVisible.value = true;
                  });
                  state.doubleClickTime = res.TIME_MAX;
                  doubleClickHandler = res.onClick;
                } else {
                  state.doubleClickTime = 0;
                  doubleClickHandler = null;
                }
              });
            });
            const ON_WINDOW_STATUS_CHANGE_EVENT_NAME = `__UNIVIDEO_ON_WINDOW_STATUS_CHANGE_${eventSeed}`;
            const onWindowStatusChange = () => {
              setTimeout(getContainerRect, 200);
            };
            uni3.$on(ON_WINDOW_STATUS_CHANGE_EVENT_NAME, onWindowStatusChange);
            vue.onBeforeUnmount(() => {
              uni3.$off(ON_WINDOW_STATUS_CHANGE_EVENT_NAME, onWindowStatusChange);
            });
          });
          return new UseGestureReturn({
            state,
            onTouchstart,
            onTouchend,
            changeProgress,
            onTouchmove,
            onClick,
            changeToastThin
          });
        }
        useGestureReturn = useGesture();
        gestureState = useGestureReturn.state;
        function useDanmu() {
          var _a2;
          const state = vue.reactive(new DanmuState({
            enable: props.enableDanmu
          }));
          vue.watch(() => {
            return props.enableDanmu;
          }, () => {
            state.enable = props.enableDanmu;
          });
          let danmuIndex = new UTSJSONObject({
            time: 0,
            index: -1
          });
          const danmuList = Array.isArray(props.danmuList) ? (_a2 = UTS.JSON.parseArray(UTS.JSON.stringify(props.danmuList))) !== null && _a2 !== void 0 ? _a2 : [] : [];
          danmuList.sort(function(a = null, b = null) {
            var _a3, _b2;
            return ((_a3 = a.time) !== null && _a3 !== void 0 ? _a3 : 0) - ((_b2 = b.time) !== null && _b2 !== void 0 ? _b2 : 0);
          });
          const toggleDanmu = () => {
            state.enable = !state.enable;
          };
          const playDanmu = (danmu = null) => {
            var _a3, _b2;
            if (rootRef.value == null)
              return null;
            if (danmu.text == null || ((_a3 = danmu.text) === null || _a3 === void 0 ? null : _a3.length) === 0 || danmuRef.value == null) {
              return null;
            }
            const p = rootRef.value.uniPage.createElement("text");
            const danmuContainer = danmuRef.value;
            p.setAnyAttribute("value", (_b2 = danmu.text) !== null && _b2 !== void 0 ? _b2 : "");
            p.style.setProperty("font-size", "14px");
            p.style.setProperty("line-height", "14px");
            p.style.setProperty("position", "absolute");
            p.style.setProperty("color", "#000");
            p.style.setProperty("white-space", "nowrap");
            p.style.setProperty("left", "100%");
            p.style.setProperty("transform", "translateX(0%)");
            p.style.setProperty("bottom", `${Math.random() * 100}%`);
            p.style.setProperty("color", `${danmu.color}`);
            danmuContainer.appendChild(p);
            p.animate([
              new UTSJSONObject({ left: "100%", transform: "translateX(0%)" }),
              new UTSJSONObject({ left: "0%", transform: `translateX(-100%);` })
            ], new UTSJSONObject({
              duration: 3e3,
              easing: "linear"
            }));
            setTimeout(function() {
              p.remove();
            }, 3e3);
            setTimeout(() => {
              const textWidth = p.getBoundingClientRect().width;
              p.animate([
                new UTSJSONObject({ transform: "translateX(0%)" }),
                new UTSJSONObject({ transform: `translateX(-${danmuContainer.getBoundingClientRect().width + textWidth}px)` })
              ], new UTSJSONObject({
                duration: 3e3,
                easing: "linear"
              }));
              setTimeout(function() {
                p.remove();
              }, 3e3);
            }, 100);
          };
          const updateDanmu = () => {
            var _a3, _b2;
            const currentTime = videoState.currentTime;
            const oldDanmuIndex = danmuIndex;
            const newDanmuIndex = new UTSJSONObject({
              time: currentTime,
              index: oldDanmuIndex.index
            });
            if (currentTime > oldDanmuIndex.time) {
              for (let index = oldDanmuIndex.index + 1; index < danmuList.length; index++) {
                const element = danmuList[index];
                if (currentTime >= ((_a3 = element.time) !== null && _a3 !== void 0 ? _a3 : 0)) {
                  newDanmuIndex.index = index;
                  if (videoState.playing && state.enable) {
                    playDanmu(element);
                  }
                } else {
                  break;
                }
              }
            } else if (currentTime < oldDanmuIndex.time) {
              for (let index = oldDanmuIndex.index - 1; index > -1; index--) {
                const element = danmuList[index];
                if (currentTime <= ((_b2 = element.time) !== null && _b2 !== void 0 ? _b2 : 0)) {
                  newDanmuIndex.index = index - 1;
                } else {
                  break;
                }
              }
            }
            danmuIndex = newDanmuIndex;
          };
          const sendDanmu = (danmu = null) => {
            danmuList.splice(danmuIndex.index + 1, 0, {
              text: danmu.text,
              color: danmu.color,
              time: videoState.currentTime
            });
          };
          return new UseDanmuReturn({
            state,
            toggleDanmu,
            updateDanmu,
            playDanmu,
            sendDanmu
          });
        }
        const useDanmuReturn = useDanmu();
        const danmuState = useDanmuReturn.state;
        function useProgressing() {
          const progressing2 = vue.computed(() => {
            return gestureState.gestureType === "progress" || controlsState.touching;
          });
          vue.nextTick(() => {
            vue.watch(progressing2, (val) => {
              videoState.pauseUpdatingCurrentTime = val;
              controlsState.controlsTouching = val;
              if (gestureState.gestureType === "progress" && val) {
                useControlsReturn.controlsVisible.value = true;
              }
            });
            vue.watch([
              () => {
                return videoState.currentTime;
              },
              () => {
                return videoState.currentDuration;
              }
            ], () => {
              const currentDuration = videoState.currentDuration;
              if (currentDuration > 0) {
                videoState.progress = videoState.currentTime / currentDuration * 100;
              } else {
                videoState.progress = 0;
              }
            });
            vue.watch(() => {
              return gestureState.currentTimeNew;
            }, (currentTimeNew) => {
              videoState.currentTime = currentTimeNew;
            });
          });
          return progressing2;
        }
        const progressing = useProgressing();
        const inited = vue.ref(false);
        function onInit(event) {
          video = new uniVideo_utsProxy.Video(event.detail.element, {
            options,
            eventSeed,
            muted: props.muted,
            autoplay: props.autoplay,
            objectFit: props.objectFit,
            loop: props.loop
          });
          inited.value = true;
        }
        vue.ref(0);
        vue.ref(0);
        const ON_TIME_UPDATE_EVENT_NAME = `__UNIVIDEO_ON_TIME_UPDATE_${eventSeed}`;
        const onTimeUpdate = (time) => {
          if (!videoState.pauseUpdatingCurrentTime) {
            videoState.currentTime = time;
          }
          emit2("timeupdate", new UniVideoTimeUpdateEvent(rootRef.value, time, videoState.duration));
          useDanmuReturn.updateDanmu();
        };
        const ON_PLAY_EVENT_NAME = `__UNIVIDEO_ON_PLAY_${eventSeed}`;
        const onPlay = () => {
          videoState.loading = false;
          videoState.start = true;
          videoState.playing = true;
          useControlsReturn.controlsVisible.value = true;
          uni3.setKeepScreenOn({ keepScreenOn: true });
          emit2("play", new UniVideoEvent(rootRef.value, "play"));
        };
        const ON_PAUSE_EVENT_NAME = `__UNIVIDEO_ON_PAUSE_${eventSeed}`;
        const onPause = () => {
          videoState.loading = false;
          videoState.playing = false;
          useControlsReturn.controlsVisible.value = true;
          uni3.setKeepScreenOn({ keepScreenOn: false });
          emit2("pause", new UniVideoEvent(rootRef.value, "pause"));
        };
        const ON_ERROR_EVENT_NAME = `__UNIVIDEO_ON_ERROR_${eventSeed}`;
        const onError2 = () => {
          videoState.isError = true;
          videoState.loading = false;
          videoState.playing = false;
          useControlsReturn.controlsVisible.value = true;
          uni3.setKeepScreenOn({ keepScreenOn: false });
          emit2("error", new UniVideoErrorEvent(rootRef.value, 200001, ""));
        };
        const ON_ENDED_EVENT_NAME = `__UNIVIDEO_ON_ENDED_${eventSeed}`;
        const onEnded = () => {
          videoState.loading = false;
          videoState.playing = false;
          useControlsReturn.controlsVisible.value = true;
          uni3.setKeepScreenOn({ keepScreenOn: false });
          emit2("ended", new UniVideoEvent(rootRef.value, "ended"));
        };
        const ON_PREPARED_EVENT_NAME = `__UNIVIDEO_ON_PREPARED_${eventSeed}`;
        const onPrepared = (duration) => {
          var _a2, _b2;
          videoState.prepared = true;
          videoState.isError = false;
          videoState.loading = false;
          videoState.duration = duration;
          const initialTime = (_a2 = props.initialTime) !== null && _a2 !== void 0 ? _a2 : 0;
          if (initialTime > 0) {
            useVideoReturn.seek(initialTime);
          } else if (typeof props.poster === "undefined" || ((_b2 = props.poster) === null || _b2 === void 0 ? null : _b2.length) === 0) {
            video === null || video === void 0 ? null : video.displayTheFirstFrame();
          }
        };
        const ON_SEND_DANMU_EVENT_NAME = `__UNIVIDEO_SEND_DANMU_${eventSeed}`;
        const onSendDanmu = (res) => {
          useDanmuReturn.sendDanmu({
            text: res["text"],
            color: res["color"],
            time: res["time"]
          });
        };
        const ON_WAITING_EVENT_NAME = `__UNIVIDEO_ON_WAITING_${eventSeed}`;
        const onWaiting = () => {
          if (videoState.playing) {
            videoState.loading = true;
          }
          emit2("waiting", new UniVideoEvent(rootRef.value, "waiting"));
        };
        const ON_PROGRESS_EVENT_NAME = `__UNIVIDEO_ON_PROGRESS_${eventSeed}`;
        const onProgress = (buffered) => {
          emit2("progress", new UniVideoProgressEvent(rootRef.value, buffered));
        };
        uni3.$on(ON_TIME_UPDATE_EVENT_NAME, onTimeUpdate);
        uni3.$on(ON_PLAY_EVENT_NAME, onPlay);
        uni3.$on(ON_PAUSE_EVENT_NAME, onPause);
        uni3.$on(ON_ERROR_EVENT_NAME, onError2);
        uni3.$on(ON_ENDED_EVENT_NAME, onEnded);
        uni3.$on(ON_PREPARED_EVENT_NAME, onPrepared);
        uni3.$on(ON_SEND_DANMU_EVENT_NAME, onSendDanmu);
        uni3.$on(ON_WAITING_EVENT_NAME, onWaiting);
        uni3.$on(ON_PROGRESS_EVENT_NAME, onProgress);
        vue.onBeforeUnmount(() => {
          uni3.$off(ON_TIME_UPDATE_EVENT_NAME, onTimeUpdate);
          uni3.$off(ON_PLAY_EVENT_NAME, onPlay);
          uni3.$off(ON_PAUSE_EVENT_NAME, onPause);
          uni3.$off(ON_ERROR_EVENT_NAME, onError2);
          uni3.$off(ON_ENDED_EVENT_NAME, onEnded);
          uni3.$off(ON_PREPARED_EVENT_NAME, onPrepared);
          uni3.$off(ON_SEND_DANMU_EVENT_NAME, onSendDanmu);
          uni3.$off(ON_WAITING_EVENT_NAME, onWaiting);
          uni3.$off(ON_PROGRESS_EVENT_NAME, onProgress);
          uni3.setKeepScreenOn({ keepScreenOn: false });
        });
        return (_ctx = null, _cache = null) => {
          var _a2;
          const _component_loading = vue.resolveComponent("loading");
          return vue.openBlock(), vue.createElementBlock("uni-video-element", new UTSJSONObject({
            class: "uni-video",
            ref_key: "rootRef",
            ref: rootRef,
            onClick: _cache[18] || (_cache[18] = (...args) => {
              return vue.unref(useControlsReturn).toggleControls && vue.unref(useControlsReturn).toggleControls(...args);
            }),
            onFullscreenchange: _cache[19] || (_cache[19] = (...args) => {
              return vue.unref(useFullScreenReturn).fullscreenchange && vue.unref(useFullScreenReturn).fullscreenchange(...args);
            })
          }), [
            vue.createElementVNode("view", new UTSJSONObject({
              class: "uni-video-container",
              ref_key: "containerRef",
              ref: containerRef,
              onClick: _cache[12] || (_cache[12] = (...args) => {
                return vue.unref(useGestureReturn).onClick && vue.unref(useGestureReturn).onClick(...args);
              }),
              onTouchstart: _cache[13] || (_cache[13] = (...args) => {
                return vue.unref(useGestureReturn).onTouchstart && vue.unref(useGestureReturn).onTouchstart(...args);
              }),
              onTouchmove: _cache[14] || (_cache[14] = (...args) => {
                return vue.unref(useGestureReturn).onTouchmove && vue.unref(useGestureReturn).onTouchmove(...args);
              }),
              onTouchend: _cache[15] || (_cache[15] = (...args) => {
                return vue.unref(useGestureReturn).onTouchend && vue.unref(useGestureReturn).onTouchend(...args);
              }),
              onTouchcancel: _cache[16] || (_cache[16] = (...args) => {
                return vue.unref(useGestureReturn).onTouchend && vue.unref(useGestureReturn).onTouchend(...args);
              }),
              onFullscreenchange: _cache[17] || (_cache[17] = (...args) => {
                return vue.unref(useFullScreenReturn).fullscreenchange && vue.unref(useFullScreenReturn).fullscreenchange(...args);
              })
            }), [
              props.showLoading && vue.unref(videoState).start && vue.unref(videoState).loading ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 0,
                class: "uni-video-loading",
                style: new UTSJSONObject({ "justify-content": "center", "align-items": "center" })
              }), [
                vue.createVNode(_component_loading, new UTSJSONObject({ style: new UTSJSONObject({ "width": "54px", "height": "54px", "border-color": "#d3d3d3" }) }))
              ])) : vue.createCommentVNode("", true),
              vue.createElementVNode("native-view", new UTSJSONObject({
                class: "native-view-video",
                onInit
              }), null, 32),
              vue.unref(inited) ? (vue.openBlock(), vue.createElementBlock("volume-panel", new UTSJSONObject({
                key: 1,
                "volume-level": vue.unref(volumeState).currentVolumeLevel,
                "position-x": vue.unref(volumeState).positionX
              }), null, 8, ["volume-level", "position-x"])) : vue.createCommentVNode("", true),
              vue.withDirectives(vue.createElementVNode("view", new UTSJSONObject({
                ref_key: "danmuRef",
                ref: danmuRef,
                class: "uni-video-danmu"
              }), null, 512), [
                [vue.vShow, vue.unref(videoState).start && vue.unref(danmuState).enable]
              ]),
              vue.unref(fullscreenState).fullscreen && vue.unref(useControlsReturn).controlsShow.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 2,
                ref: "titleBarRef",
                class: "uni-video-bar_outside uni-video-title-bar_outside",
                style: vue.normalizeStyle((_a2 = vue.unref(titleBarStyle)) !== null && _a2 !== void 0 ? _a2 : {}),
                onClick: eventWrapper
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni-video-bar_container" }), [
                  vue.createElementVNode("view", new UTSJSONObject({ class: "uni-video-bar" }), [
                    vue.createElementVNode("view", new UTSJSONObject({
                      class: "uni-video-volume-button",
                      onClick: _cache[0] || (_cache[0] = () => {
                        return vue.unref(useFullScreenReturn).exitFullscreen();
                      })
                    }), [
                      vue.createElementVNode("text", new UTSJSONObject({ class: "uni-icon uni-video-back-button-icon" }), vue.toDisplayString(ICON_BACK))
                    ]),
                    vue.createElementVNode("view", new UTSJSONObject({ class: "uni-video-title-view" }), [
                      vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-title" }), vue.toDisplayString(_ctx.title), 1)
                    ])
                  ])
                ])
              ], 4)) : vue.createCommentVNode("", true),
              vue.unref(useControlsReturn).controlsShow.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 3,
                ref: "controlsBarRef",
                class: vue.normalizeClass({ "uni-video-bar_outside": true, "uni-video-fullscreen-bar_outside": vue.unref(fullscreenState).fullscreen }),
                onClick: eventWrapper
              }), [
                props.showPlayBtn || props.showProgress || props.showMuteBtn || props.danmuBtn || props.showFullscreenBtn ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 0,
                  class: "uni-video-bar_container"
                }), [
                  vue.createElementVNode("view", new UTSJSONObject({
                    class: vue.normalizeClass({ "uni-video-bar": true, "uni-video-bar_fullscreen": vue.unref(fullscreenState).fullscreen })
                  }), [
                    vue.createElementVNode("view", new UTSJSONObject({
                      class: "uni-video-controls",
                      onClick: _cache[7] || (_cache[7] = (event = null) => {
                        return eventWrapper(event, vue.unref(useControlsReturn).controlsClick);
                      })
                    }), [
                      props.showPlayBtn && !vue.unref(videoState).isError ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                        key: 0,
                        class: "uni-video-control-button",
                        onClick: _cache[1] || (_cache[1] = (...args) => {
                          return vue.unref(useVideoReturn).toggle && vue.unref(useVideoReturn).toggle(...args);
                        })
                      }), [
                        vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-icon uni-video-control-button-icon" }), vue.toDisplayString(!vue.unref(videoState).playing ? ICON_PLAY : ICON_PAUSH), 1)
                      ])) : vue.createCommentVNode("", true),
                      props.showProgress ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                        key: 1,
                        class: "uni-video-current-time"
                      }), [
                        vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-current-time-text" }), vue.toDisplayString(formatTime$1(vue.unref(videoState).currentTime)), 1)
                      ])) : vue.createCommentVNode("", true),
                      props.showProgress ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                        key: 2,
                        class: "uni-video-progress-container",
                        ref_key: "progressRef",
                        ref: progressRef,
                        onClick: _cache[6] || (_cache[6] = (...args) => {
                          return vue.unref(useControlsReturn).clickProgress && vue.unref(useControlsReturn).clickProgress(...args);
                        })
                      }), [
                        vue.createElementVNode("view", new UTSJSONObject({
                          ref_key: "progressBarRef",
                          ref: progressBarRef,
                          class: vue.normalizeClass({
                            "uni-video-progress": true,
                            "uni-video-progress-progressing": vue.unref(progressing)
                          })
                        }), [
                          vue.createElementVNode("view", new UTSJSONObject({
                            flatten: "",
                            class: "uni-video-progress-bar-container"
                          }), [
                            vue.createElementVNode("view", new UTSJSONObject({
                              flatten: "",
                              class: "uni-video-progress-buffered"
                            })),
                            vue.createElementVNode("view", new UTSJSONObject({
                              flatten: "",
                              ref_key: "playedRef",
                              ref: playedRef,
                              class: "uni-video-progress-played",
                              style: vue.normalizeStyle({ "transform": `scaleX(${vue.unref(videoState).progress / 100})` })
                            }), null, 4)
                          ]),
                          vue.createElementVNode("view", new UTSJSONObject({
                            class: "uni-video-ball-container",
                            style: vue.normalizeStyle({ "transform": `translateX(${vue.unref(videoState).progress}%)` })
                          }), [
                            vue.createElementVNode("view", new UTSJSONObject({
                              class: vue.normalizeClass({
                                "uni-video-ball": true,
                                "uni-video-ball-progressing": vue.unref(progressing)
                              }),
                              onTouchstart: _cache[2] || (_cache[2] = (...args) => {
                                return vue.unref(useControlsReturn).onBallTouchstart && vue.unref(useControlsReturn).onBallTouchstart(...args);
                              }),
                              onTouchmove: _cache[3] || (_cache[3] = (...args) => {
                                return vue.unref(useControlsReturn).onBallTouchmove && vue.unref(useControlsReturn).onBallTouchmove(...args);
                              }),
                              onTouchend: _cache[4] || (_cache[4] = (...args) => {
                                return vue.unref(useControlsReturn).onBallTouchend && vue.unref(useControlsReturn).onBallTouchend(...args);
                              }),
                              onTouchcancel: _cache[5] || (_cache[5] = (...args) => {
                                return vue.unref(useControlsReturn).onBallTouchend && vue.unref(useControlsReturn).onBallTouchend(...args);
                              })
                            }), [
                              vue.createElementVNode("view", new UTSJSONObject({
                                class: vue.normalizeClass({
                                  "uni-video-inner": true,
                                  "uni-video-ball-progressing": vue.unref(progressing)
                                })
                              }), null, 2)
                            ], 34)
                          ], 4)
                        ], 2)
                      ], 512)) : vue.createCommentVNode("", true),
                      props.showProgress ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                        key: 3,
                        class: "uni-video-duration"
                      }), [
                        vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-current-time-text" }), vue.toDisplayString(formatTime$1(vue.unref(videoState).currentDuration)), 1)
                      ])) : vue.createCommentVNode("", true)
                    ]),
                    props.showMuteBtn ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                      key: 0,
                      class: "uni-video-volume-button",
                      onClick: _cache[8] || (_cache[8] = () => {
                        return vue.unref(useVideoReturn).mute(!vue.unref(useVideoReturn).muted.value);
                      })
                    }), [
                      vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-icon uni-video-volume-button-icon" }), vue.toDisplayString(vue.unref(useVideoReturn).muted.value ? ICON_VOLUME_MUTE : ICON_VOLUME), 1)
                    ])) : vue.createCommentVNode("", true),
                    props.danmuBtn ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                      key: 1,
                      class: "uni-video-danmu-button",
                      onClick: _cache[9] || (_cache[9] = (...args) => {
                        return vue.unref(useDanmuReturn).toggleDanmu && vue.unref(useDanmuReturn).toggleDanmu(...args);
                      })
                    }), [
                      vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-icon uni-video-danmu-button-icon" }), vue.toDisplayString(vue.unref(danmuState).enable ? ICON_DANMU_ACTIVE : ICON_DANMU), 1)
                    ])) : vue.createCommentVNode("", true),
                    props.showFullscreenBtn ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                      key: 2,
                      class: "uni-video-fullscreen-btn",
                      onClick: _cache[10] || (_cache[10] = () => {
                        return vue.unref(useFullScreenReturn).toggleFullscreen(!vue.unref(fullscreenState).fullscreen);
                      })
                    }), [
                      vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-icon uni-video-fullscreen-icon" }), vue.toDisplayString(!vue.unref(fullscreenState).fullscreen ? ICON_FULLSCREEN : ICON_FULLSCREEN_CLOSE), 1)
                    ])) : vue.createCommentVNode("", true)
                  ], 2)
                ])) : vue.createCommentVNode("", true),
                vue.renderSlot(_ctx.$slots, "controls")
              ], 2)) : vue.createCommentVNode("", true),
              vue.unref(useControlsReturn).centerPlayBtnShow.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 4,
                class: "uni-video-cover",
                onClick: eventWrapper
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "uni-video-icon uni-video-cover-play-button",
                  onClick: _cache[11] || (_cache[11] = ($event = null) => {
                    return eventWrapper($event, vue.unref(useVideoReturn).play);
                  })
                }), vue.toDisplayString(ICON_PLAY))
              ])) : vue.createCommentVNode("", true),
              vue.unref(gestureState).gestureType !== "none" || vue.unref(volumeState).showToast ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 5,
                class: "uni-video-loading",
                onClick: eventWrapper
              }), [
                vue.unref(gestureState).gestureType === "brightness" ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 0,
                  class: vue.normalizeClass({
                    "uni-video-toast-container": true,
                    "uni-video-toast-container-thin": vue.unref(gestureState).toastThin
                  }),
                  style: vue.normalizeStyle({ marginTop: `${vue.unref(safeTop) + 5}px` })
                }), [
                  vue.withDirectives(vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-icon uni-video-toast-icon" }), vue.toDisplayString(ICON_BRIGHTNESS), 512), [
                    [vue.vShow, !vue.unref(gestureState).toastThin]
                  ]),
                  vue.createElementVNode("view", new UTSJSONObject({
                    class: "uni-video-toast-draw",
                    style: vue.normalizeStyle({ width: `${vue.unref(gestureState).brightnessNew * 100}%` })
                  }), null, 4)
                ], 6)) : vue.createCommentVNode("", true),
                (vue.unref(volumeState).showToast || vue.unref(gestureState).gestureType === "volume") && vue.unref(fullscreenState).fullscreen ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 1,
                  class: vue.normalizeClass({
                    "uni-video-toast-container": true,
                    "uni-video-toast-container-thin": vue.unref(gestureState).toastThin
                  }),
                  style: vue.normalizeStyle({ marginTop: `${vue.unref(safeTop) + 5}px` })
                }), [
                  !vue.unref(gestureState).toastThin && vue.unref(volumeState).currentVolumeLevel > 0 && (vue.unref(volumeState).showToast || vue.unref(gestureState).gestureType === "volume") ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                    key: 0,
                    class: "uni-video-icon uni-video-toast-icon"
                  }), vue.toDisplayString(ICON_VOLUME))) : !vue.unref(gestureState).toastThin ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                    key: 1,
                    class: "uni-video-icon uni-video-toast-icon"
                  }), vue.toDisplayString(ICON_VOLUME_MUTE))) : vue.createCommentVNode("", true),
                  vue.createElementVNode("view", new UTSJSONObject({
                    class: "uni-video-toast-draw",
                    style: vue.normalizeStyle({ width: `${vue.unref(volumeState).currentVolumeLevel / vue.unref(volumeState).maxVolume * 100}%` })
                  }), null, 4)
                ], 6)) : vue.createCommentVNode("", true)
              ])) : vue.createCommentVNode("", true),
              vue.unref(progressing) ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 6,
                class: vue.normalizeClass({
                  "uni-video-toast": true,
                  "uni-video-toast-progress": vue.unref(progressing)
                })
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni-video-toast-title" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-toast-title-current-time uni-video-toast-title-text" }), vue.toDisplayString(formatTime$1(vue.unref(gestureState).currentTimeNew)), 1),
                  vue.createElementVNode("text", new UTSJSONObject({ class: "uni-video-toast-title-text" }), "/ " + vue.toDisplayString(formatTime$1(vue.unref(videoState).currentDuration)), 1)
                ])
              ], 2)) : vue.createCommentVNode("", true),
              vue.createElementVNode("view", new UTSJSONObject({
                class: "uni-video-slots",
                ref_key: "slotsRef",
                ref: slotsRef
              }), [
                vue.renderSlot(_ctx.$slots, "default")
              ], 512)
            ], 544)
          ], 544);
        };
      }
    });
    const _style_0 = { "uni-video-slots": { "": { "position": "absolute", "zIndex": 0, "left": 0, "top": 0, "width": "100%", "height": "100%", "overflow": "hidden" } }, "uni-video-icon": { "": { "fontFamily": "uni-video-icon", "textAlign": "center" } }, "uni-icon": { "": { "fontFamily": "uni-icon", "textAlign": "center" } }, "uni-video": { "": { "width": 300, "height": 225, "lineHeight": 0, "overflow": "hidden", "position": "relative" } }, "uni-video-gesture-brightness": { "": { "width": "100%", "height": "100%", "position": "absolute", "top": 0, "left": 0, "overflow": "hidden", "backgroundColor": "#000000" } }, "uni-video-gesture-volume": { "": { "width": "100%", "height": "100%", "position": "absolute", "top": 0, "left": 0, "overflow": "hidden", "backgroundColor": "#000000" } }, "uni-video-container": { "": { "width": "100%", "height": "100%", "position": "absolute", "top": 0, "left": 0, "overflow": "hidden", "backgroundColor": "#000000" } }, "native-view-video": { "": { "width": "100%", "height": "100%" } }, "uni-video-cover": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "width": "100%", "height": "100%", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "zIndex": 10 } }, "uni-video-cover-play-button": { "": { "width": 75, "height": 75, "lineHeight": "75px", "fontSize": 60, "color": "rgba(255,255,255,0.5)" } }, "uni-video-cover-duration": { "": { "color": "#ffffff", "fontSize": 16, "lineHeight": 1, "marginTop": 10 } }, "uni-video-bar_outside": { "": { "width": "100%", "height": 44, "backgroundImage": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))", "overflow": "hidden", "position": "absolute", "bottom": 0, "left": 0, "right": 0, "boxSizing": "content-box", "zIndex": 1 } }, "uni-video-title-bar_outside": { "": { "top": 0, "paddingTop": "var(--uni-safe-area-inset-top)", "paddingBottom": 15, "backgroundImage": "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5))" } }, "uni-video-fullscreen-bar_outside": { "": { "height": 60, "paddingTop": 15, "paddingBottom": "var(--uni-safe-area-inset-bottom)" } }, "uni-video-bar_container": { "": { "width": "100%", "height": "100%", "overflow": "visible", "paddingLeft": "var(--uni-safe-area-inset-left)", "paddingRight": "var(--uni-safe-area-inset-right)" } }, "uni-video-bar": { "": { "width": "100%", "height": "100%", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexDirection": "row", "alignItems": "center", "overflow": "visible" }, ".uni-video-bar_fullscreen": { "paddingBottom": 15 } }, "uni-video-controls": { "": { "height": "100%", "marginTop": 0, "marginRight": 4, "marginBottom": 0, "marginLeft": 4, "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "overflow": "visible" } }, "uni-video-current-time": { "": { "height": "100%", "justifyContent": "center" } }, "uni-video-duration": { "": { "height": "100%", "justifyContent": "center" } }, "uni-video-current-time-text": { "": { "fontSize": 15, "color": "rgba(255,255,255,0.5)" } }, "uni-video-progress-container": { "": { "height": "100%", "flexGrow": 1, "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingLeft": 12, "paddingRight": 12, "overflow": "visible" } }, "uni-video-progress-bar-container": { "": { "borderTopLeftRadius": 2e4, "borderTopRightRadius": 2e4, "borderBottomRightRadius": 2e4, "borderBottomLeftRadius": 2e4, "width": "100%", "height": "100%", "position": "absolute", "left": 0, "top": 0, "overflow": "hidden", "backgroundColor": "rgba(255,255,255,0.3)" } }, "uni-video-progress-played": { "": { "position": "absolute", "left": 0, "top": 0, "width": "100%", "height": "100%", "backgroundColor": "#ffffff", "transformOrigin": "left center", "transform": "scaleX(0)" } }, "uni-video-progress-buffered": { "": { "position": "absolute", "left": 0, "top": 0, "width": "100%", "height": "100%", "backgroundColor": "rgba(255,255,255,0.3)" } }, "uni-video-ball-container": { "": { "width": "100%", "height": "100%", "position": "absolute", "left": 0, "overflow": "visible", "justifyContent": "center" } }, "uni-video-ball": { "": { "width": 8, "height": 8, "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14, "boxSizing": "content-box", "marginLeft": -16, "overflow": "visible" }, ".uni-video-ball-progressing": { "width": 16, "height": 16 } }, "uni-video-inner": { "": { "width": "100%", "height": "100%", "backgroundColor": "#ffffff", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "boxShadow": "0px 0px 2px #ccc" }, ".uni-video-ball-progressing": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "uni-video-volume-button": { "": { "width": 24, "height": "100%", "justifyContent": "center", "whiteSpace": "nowrap", "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2 } }, "uni-video-danmu-button": { "": { "width": 24, "height": "100%", "justifyContent": "center", "whiteSpace": "nowrap", "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2 } }, "uni-video-volume-button-icon": { "": { "lineHeight": "24px", "color": "rgba(255,255,255,0.5)", "fontSize": 20 } }, "uni-video-danmu-button-icon": { "": { "lineHeight": "24px", "color": "rgba(255,255,255,0.5)", "fontSize": 24 } }, "uni-video-control-button": { "": { "width": 20, "height": "100%", "justifyContent": "center", "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 0, "marginLeft": -4, "marginRight": -6, "boxSizing": "content-box" } }, "uni-video-control-button-icon": { "": { "fontSize": 18, "lineHeight": "20px", "color": "rgba(255,255,255,0.5)" } }, "uni-video-progress": { "": { "width": "100%", "height": 4, "position": "relative", "flexDirection": "row", "alignItems": "center", "overflow": "visible" }, ".uni-video-progress-progressing": { "height": 8 } }, "uni-video-danmu": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "width": "100%", "height": "100%", "marginTop": 14, "marginBottom": 44, "zIndex": 0, "overflow": "visible" } }, "uni-video-fullscreen-btn": { "": { "width": 32, "height": "100%", "justifyContent": "center", "boxSizing": "content-box" } }, "uni-video-fullscreen-icon": { "": { "fontSize": 20, "lineHeight": "32px", "color": "rgba(255,255,255,0.5)" } }, "uni-video-toast": { "": { "pointerEvents": "none", "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "overflow": "visible" }, ".uni-video-toast-progress": { "backgroundColor": "rgba(0,0,0,0.5)", "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "paddingTop": 6, "paddingRight": 6, "paddingBottom": 6, "paddingLeft": 6 } }, "uni-video-toast-title": { "": { "flexDirection": "row" } }, "uni-video-toast-title-text": { "": { "color": "rgba(255,255,255,0.6)", "fontSize": 24, "lineHeight": "24px" }, ".uni-video-toast-title-current-time": { "color": "rgba(255,255,255,0.9)" } }, "uni-video-loading": { "": { "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "zIndex": 10, "pointerEvents": "none" } }, "uni-video-back-button-icon": { "": { "fontSize": 26, "lineHeight": "26px", "color": "rgba(255,255,255,0.5)" } }, "uni-video-title-view": { "": { "marginLeft": 10 } }, "uni-video-title": { "": { "fontSize": 18, "lineHeight": "20px", "color": "rgba(255,255,255,0.5)" } }, "uni-video-toast-icon": { "": { "fontSize": 20, "position": "absolute", "left": 10, "color": "#222222", "zIndex": 1 } }, "uni-video-toast-container": { "": { "position": "relative", "flexDirection": "row", "alignItems": "center", "width": "22%", "minWidth": 100, "maxWidth": 200, "height": 30, "maxHeight": 30, "minHeight": 6, "backgroundColor": "rgba(0,0,0,0.4)", "boxShadow": "0px 0px 2px #ccc", "marginTop": 5, "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto", "borderTopLeftRadius": 30, "borderTopRightRadius": 30, "borderBottomRightRadius": 30, "borderBottomLeftRadius": 30, "overflow": "hidden", "transitionProperty": "height", "transitionDuration": "0.2s", "transitionTimingFunction": "ease-in-out", "opacity": 0.6 }, ".uni-video-toast-container-thin": { "height": 6 } }, "uni-video-toast-draw": { "": { "height": "100%", "backgroundColor": "#ffffff" } }, "uni-video-poster": { "": { "width": "100%", "height": "100%", "position": "absolute" } }, "@TRANSITION": { "uni-video-toast-container": { "property": "height", "duration": "0.2s", "timingFunction": "ease-in-out" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiComponent("Video", new UTSJSONObject({
      ...VideoTypes,
      default: Video
    }));
  })(Vue);
};

// packages/uni-ext-api/x-components/app-harmony/index.js
function initUniExtApiComponents(uni3, options) {
  uni3.requireUTSPlugin("uni_modules/uni-editor", true) && uni_editor_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni3.requireUTSPlugin("uni_modules/uni-loading", true) && uni_loading_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni3.requireUTSPlugin("uni_modules/uni-map-tencent", true) && uni_map_tencent_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_page_container_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_rich_text_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni3.requireUTSPlugin("uni_modules/uni-video", true) && uni_video_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
}

// packages/uni-ext-api/x-pages/app-harmony/uni-actionSheet.js
var uni_actionSheet_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    const ON_LOAD2 = "onLoad";
    const ON_READY2 = "onReady";
    const ON_RESIZE2 = "onResize";
    const createLifeCycleHook2 = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
      !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
    };
    const onLoad2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_LOAD2,
      2
      /* HookFlags.PAGE */
    );
    const onReady2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_READY2,
      2
      /* HookFlags.PAGE */
    );
    const onResize2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_RESIZE2,
      2
      /* HookFlags.PAGE */
    );
    class I18nCancelText extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              en: { type: String, optional: false },
              es: { type: String, optional: false },
              fr: { type: String, optional: false },
              zhHans: { type: String, optional: false },
              zhHant: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = I18nCancelText.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.en = this.__props__.en;
        this.es = this.__props__.es;
        this.fr = this.__props__.fr;
        this.zhHans = this.__props__.zhHans;
        this.zhHant = this.__props__.zhHant;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "actionSheet",
      setup(__props) {
        const pageInstance = vue.getCurrentInstance().proxy;
        const uniPageInstance = pageInstance.$page;
        const show = vue.ref(false);
        const i18nCancelText = vue.reactive(new I18nCancelText({
          en: "Cancel",
          es: "Cancelar",
          fr: "Annuler",
          zhHans: "\u53D6\u6D88",
          zhHant: "\u53D6\u6D88"
        }));
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const title = vue.ref(null);
        const itemList = vue.ref([]);
        const optionCancelText = vue.ref(null);
        const titleColor = vue.ref(null);
        const itemColor = vue.ref(null);
        const cancelColor = vue.ref(null);
        const backgroundColor2 = vue.ref(null);
        const language = vue.ref("zhHans");
        const theme = vue.ref("light");
        const isLandscape = vue.ref(false);
        const bottomNavigationHeight = vue.ref(0);
        const appTheme = vue.ref(null);
        const hostTheme = vue.ref(null);
        const menuItemClicked = vue.ref(false);
        const cancelButtonClicked = vue.ref(false);
        const closeActionSheet = () => {
          show.value = false;
          setTimeout(() => {
            uni3.closeDialogPage(new UTSJSONObject({
              dialogPage: uniPageInstance
            }));
          }, 250);
        };
        const handleMenuItemClick = (tapIndex) => {
          menuItemClicked.value = true;
          closeActionSheet();
          uni3.$emit(successEventName.value, tapIndex);
        };
        const handleCancel = () => {
          cancelButtonClicked.value = true;
          closeActionSheet();
          uni3.$emit(failEventName.value, new UTSJSONObject({}));
        };
        const handleThemeChange = () => {
          if (hostTheme.value != null) {
            theme.value = hostTheme.value;
          } else if (appTheme.value != null) {
            theme.value = appTheme.value;
          }
        };
        onLoad2((options = null) => {
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          successEventName.value = options["successEventName"];
          failEventName.value = options["failEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            itemList.value = data["itemList"];
            if (data["title"] != null) {
              title.value = data["title"];
            }
            if (data["cancelText"] != null) {
              optionCancelText.value = data["cancelText"];
            }
            if (data["titleColor"] != null) {
              titleColor.value = data["titleColor"];
            }
            if (data["itemColor"] != null) {
              itemColor.value = data["itemColor"];
            }
            if (data["cancelColor"] != null) {
              cancelColor.value = data["cancelColor"];
            }
            if (data["backgroundColor"] != null) {
              backgroundColor2.value = data["backgroundColor"];
            }
          });
          uni3.$emit(readyEventName.value, new UTSJSONObject({}));
          const systemInfo = uni3.getSystemInfoSync();
          const osLanguage = systemInfo.osLanguage;
          const appLanguage = systemInfo.appLanguage;
          if (appLanguage != null) {
            language.value = appLanguage;
          } else if (osLanguage != null) {
            language.value = osLanguage;
          }
          const systemAppTheme = systemInfo.appTheme;
          if (systemAppTheme != null && systemAppTheme != "auto") {
            appTheme.value = systemAppTheme;
            handleThemeChange();
          }
          const systemOsTheme = systemInfo.osTheme;
          if (systemOsTheme != null && appTheme.value == null) {
            appTheme.value = systemOsTheme;
            handleThemeChange();
          }
          isLandscape.value = systemInfo.deviceOrientation == "landscape";
        });
        const cancelText = vue.computed(() => {
          if (optionCancelText.value != null) {
            const res = optionCancelText.value;
            return res;
          }
          if (language.value.startsWith("en")) {
            return i18nCancelText["en"];
          }
          if (language.value.startsWith("es")) {
            return i18nCancelText["es"];
          }
          if (language.value.startsWith("fr")) {
            return i18nCancelText["fr"];
          }
          if (language.value.startsWith("zhHans")) {
            return i18nCancelText["zhHans"];
          }
          if (language.value.startsWith("zhHant")) {
            return i18nCancelText["zhHant"];
          }
          return "\u53D6\u6D88";
        });
        const computedBackgroundColor = vue.computed(() => {
          return backgroundColor2.value !== null ? backgroundColor2.value : theme.value == "dark" ? "#2C2C2B" : "#ffffff";
        });
        const hoverClass = vue.computed(() => {
          return theme.value == "dark" ? "uni-action-sheet_dialog__hover__dark__mode" : "uni-action-sheet_dialog__hover";
        });
        onReady2(() => {
          bottomNavigationHeight.value = uniPageInstance.safeAreaInsets.bottom;
          setTimeout(() => {
            show.value = true;
          }, 10);
        });
        onResize2((_) => {
          const systemInfo = uni3.getSystemInfoSync();
          isLandscape.value = systemInfo.deviceOrientation == "landscape";
        });
        vue.onBeforeUnmount(() => {
          if (!menuItemClicked.value && !cancelButtonClicked.value) {
            uni3.$emit(failEventName.value, new UTSJSONObject({}));
          }
          uni3.$off(optionsEventName.value, null);
          uni3.$off(readyEventName.value, null);
          uni3.$off(successEventName.value, null);
          uni3.$off(failEventName.value, null);
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", null, [
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-action-sheet_dialog__mask", new UTSJSONObject({ "uni-action-sheet_dialog__mask__show": show.value })]),
              onClick: handleCancel
            }), null, 2),
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-action-sheet_dialog__container", new UTSJSONObject({
                "uni-action-sheet_dialog__show": show.value,
                "uni-action-sheet_dark__mode": theme.value == "dark",
                "uni-action-sheet_landscape__mode": isLandscape.value
              })])
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                style: vue.normalizeStyle(backgroundColor2.value != null ? { backgroundColor: backgroundColor2.value } : {}),
                class: vue.normalizeClass(["uni-action-sheet_dialog__menu", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark", "uni-action-sheet_landscape__mode": isLandscape.value })])
              }), [
                title.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 0,
                  class: vue.normalizeClass(["uni-action-sheet_dialog__title border-b", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark", "uni-action-sheet_landscape__mode": isLandscape.value })])
                }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    style: vue.normalizeStyle(titleColor.value != null ? { color: titleColor.value } : {}),
                    class: vue.normalizeClass(["uni-action-sheet_dialog__title__text", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark" })])
                  }), vue.toDisplayString(title.value), 7)
                ], 2)) : vue.createCommentVNode("", true),
                vue.createElementVNode("scroll-view", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-action-sheet_dialog__cell__container", new UTSJSONObject({ "uni-action-sheet_landscape__mode": isLandscape.value })])
                }), [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(itemList.value, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                      key: index,
                      class: vue.normalizeClass(["uni-action-sheet_dialog__cell", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark", "uni-action-sheet_landscape__mode": isLandscape.value, "border-t": index !== 0 })]),
                      "hover-class": hoverClass.value,
                      onClick: ($event = null) => {
                        return handleMenuItemClick(index);
                      }
                    }), [
                      vue.createElementVNode("text", new UTSJSONObject({
                        style: vue.normalizeStyle(itemColor.value != null ? { color: itemColor.value } : {}),
                        class: vue.normalizeClass(["uni-action-sheet_dialog__cell__text", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark" })])
                      }), vue.toDisplayString(item), 7)
                    ], 10, ["hover-class", "onClick"]);
                  }), 128))
                ], 2)
              ], 6),
              vue.createElementVNode("view", new UTSJSONObject({
                style: vue.normalizeStyle(backgroundColor2.value != null ? { backgroundColor: backgroundColor2.value } : {}),
                class: vue.normalizeClass(["uni-action-sheet_dialog__action", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark", "uni-action-sheet_landscape__mode": isLandscape.value })]),
                "hover-class": hoverClass.value,
                onClick: handleCancel
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  style: vue.normalizeStyle(cancelColor.value != null ? { color: cancelColor.value } : {}),
                  class: vue.normalizeClass(["uni-action-sheet_dialog__action__text", new UTSJSONObject({ "uni-action-sheet_dark__mode": theme.value == "dark" })])
                }), vue.toDisplayString(cancelText.value), 7)
              ], 14, ["hover-class"]),
              !isLandscape.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                key: 0,
                style: vue.normalizeStyle({ height: `${bottomNavigationHeight.value}px`, backgroundColor: computedBackgroundColor.value })
              }), null, 4)) : vue.createCommentVNode("", true)
            ], 2)
          ]);
        };
      }
    });
    const _style_0 = { "uni-action-sheet_dialog__mask": { "": { "position": "fixed", "zIndex": 999, "top": 0, "right": 0, "left": 0, "bottom": 0, "opacity": 0, "backgroundColor": "rgba(0,0,0,0.6)", "transitionProperty": "opacity", "transitionDuration": "0.1s" } }, "uni-action-sheet_dialog__mask__show": { "": { "opacity": 1 } }, "uni-action-sheet_dialog__container": { "": { "position": "fixed", "width": "100%", "left": 0, "bottom": 0, "zIndex": 999, "transform": "translate(0, 100%)", "transitionProperty": "transform", "transitionDuration": "0.15s", "backgroundColor": "#f7f7f7", "borderTopLeftRadius": 12, "borderTopRightRadius": 12 }, ".uni-action-sheet_dialog__show": { "transform": "translate(0, 0)" }, ".uni-action-sheet_dark__mode": { "backgroundColor": "#1D1E1E" }, ".uni-action-sheet_landscape__mode": { "width": 300, "position": "fixed", "left": "50%", "right": "auto", "top": "50%", "bottom": "auto", "zIndex": 999, "transform": "translate(-50%, -50%)", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomLeftRadius": 5, "borderBottomRightRadius": 5 } }, "uni-action-sheet_dialog__menu": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "overflow": "hidden", "backgroundColor": "#ffffff" }, ".uni-action-sheet_dark__mode": { "backgroundColor": "#2C2C2B" }, ".uni-action-sheet_landscape__mode": { "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomLeftRadius": 5, "borderBottomRightRadius": 5, "boxShadow": "0 0 20px 5px rgba(0, 0, 0, 0.3)" } }, "uni-action-sheet_dialog__title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 }, ".uni-action-sheet_landscape__mode": { "paddingTop": 10, "paddingRight": 6, "paddingBottom": 10, "paddingLeft": 6 } }, "uni-action-sheet_dialog__cell": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 }, ".uni-action-sheet_landscape__mode": { "paddingTop": 10, "paddingRight": 6, "paddingBottom": 10, "paddingLeft": 6 } }, "uni-action-sheet_dialog__action": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "marginTop": 8, "backgroundColor": "#ffffff" }, ".uni-action-sheet_dark__mode": { "backgroundColor": "#2C2C2B" }, ".uni-action-sheet_landscape__mode": { "display": "none", "paddingTop": 10, "paddingRight": 6, "paddingBottom": 10, "paddingLeft": 6 } }, "border-t": { "": { "borderTopWidth": "1rpx", "borderTopStyle": "solid", "borderTopColor": "#e5e5e5" }, ".uni-action-sheet_dark__mode": { "borderTopColor": "#2F3131" } }, "border-b": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#e5e5e5" }, ".uni-action-sheet_dark__mode": { "borderBottomColor": "#2F3131" } }, "uni-action-sheet_dialog__title__text": { "": { "lineHeight": 1.4, "textAlign": "center", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis", "color": "#666666" }, ".uni-action-sheet_dark__mode": { "color": "#999999" } }, "uni-action-sheet_dialog__cell__text": { "": { "lineHeight": 1.4, "textAlign": "center", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis", "color": "#000000" }, ".uni-action-sheet_dark__mode": { "color": "#ffffff" } }, "uni-action-sheet_dialog__action__text": { "": { "lineHeight": 1.4, "textAlign": "center", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis", "color": "#000000" }, ".uni-action-sheet_dark__mode": { "color": "#ffffff" } }, "uni-action-sheet_dialog__cell__container": { "": { "maxHeight": 330 }, ".uni-action-sheet_landscape__mode": { "maxHeight": 260 } }, "uni-action-sheet_dialog__hover": { "": { "backgroundColor": "#efefef" } }, "uni-action-sheet_dialog__hover__dark__mode": { "": { "backgroundColor": "#1c1c1c" } }, "@TRANSITION": { "uni-action-sheet_dialog__mask": { "property": "opacity", "duration": "0.1s" }, "uni-action-sheet_dialog__container": { "property": "transform", "duration": "0.15s" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const ActionSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:actionSheet", ActionSheet, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-chooseLocation.js
var uni_chooseLocation_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    class ControlPosition extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              left: { type: Number, optional: false },
              top: { type: Number, optional: false },
              width: { type: Number, optional: false },
              height: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = ControlPosition.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.left = this.__props__.left;
        this.top = this.__props__.top;
        this.width = this.__props__.width;
        this.height = this.__props__.height;
        delete this.__props__;
      }
    }
    class Control extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              id: { type: Number, optional: false },
              position: { type: ControlPosition, optional: false },
              iconPath: { type: String, optional: false },
              clickable: { type: Boolean, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = Control.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.id = this.__props__.id;
        this.position = this.__props__.position;
        this.iconPath = this.__props__.iconPath;
        this.clickable = this.__props__.clickable;
        delete this.__props__;
      }
    }
    class PoiLocation extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              latitude: { type: Number, optional: false },
              longitude: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = PoiLocation.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.latitude = this.__props__.latitude;
        this.longitude = this.__props__.longitude;
        delete this.__props__;
      }
    }
    class LastPoi extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              latitude: { type: Number, optional: true },
              longitude: { type: Number, optional: true },
              selected: { type: Number, optional: false },
              pois: { type: "Unknown", optional: false },
              scrollTop: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = LastPoi.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.latitude = this.__props__.latitude;
        this.longitude = this.__props__.longitude;
        this.selected = this.__props__.selected;
        this.pois = this.__props__.pois;
        this.scrollTop = this.__props__.scrollTop;
        delete this.__props__;
      }
    }
    class Poi extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              title: { type: String, optional: false },
              address: { type: String, optional: false },
              distance: { type: Number, optional: false },
              distanceStr: { type: String, optional: false },
              location: { type: PoiLocation, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = Poi.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.title = this.__props__.title;
        this.address = this.__props__.address;
        this.distance = this.__props__.distance;
        this.distanceStr = this.__props__.distanceStr;
        this.location = this.__props__.location;
        delete this.__props__;
      }
    }
    class SafeArea extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              top: { type: Number, optional: false },
              bottom: { type: Number, optional: false },
              left: { type: Number, optional: false },
              right: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = SafeArea.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.top = this.__props__.top;
        this.bottom = this.__props__.bottom;
        this.left = this.__props__.left;
        this.right = this.__props__.right;
        delete this.__props__;
      }
    }
    class IconPath extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              target: { type: String, optional: false },
              success: { type: String, optional: false },
              position: { type: String, optional: false },
              search: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = IconPath.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.target = this.__props__.target;
        this.success = this.__props__.success;
        this.position = this.__props__.position;
        this.search = this.__props__.search;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "chooseLocation",
      setup(__props) {
        const defaultPoi = new PoiLocation({
          latitude: 39.908823,
          longitude: 116.39747
        });
        const languageData = new UTSJSONObject({
          "en": new UTSJSONObject({
            "ok": "ok",
            "cancel": "cancel",
            "locationLoading": "positioning...",
            "search": "Search location"
          }),
          "zh-Hans": new UTSJSONObject({
            "ok": "\u786E\u5B9A",
            "cancel": "\u53D6\u6D88",
            "locationLoading": "\u83B7\u53D6\u5B9A\u4F4D\u4E2D...",
            "search": "\u641C\u7D22\u5730\u70B9"
          }),
          "zh-Hant": new UTSJSONObject({
            "ok": "\u78BA\u5B9A",
            "cancel": "\u53D6\u6D88",
            "locationLoading": "\u7372\u53D6\u5B9A\u4F4D\u4E2D...",
            "search": "\u8490\u7D22\u5730\u9EDE"
          })
        });
        const currentInstance2 = vue.getCurrentInstance().proxy;
        const uniPage = currentInstance2.$page;
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const mapId = vue.ref(`UniMap1_${(Math.random() * 1e6).toString(36)}`);
        const isFocus = vue.ref(false);
        const latitude = vue.ref(0);
        const longitude = vue.ref(0);
        const locationComplete = vue.ref(false);
        const locationLoading = vue.ref(false);
        const chooseLocationOptions = vue.reactive({});
        const pageIndex = vue.ref(1);
        const pageSize = vue.ref(20);
        const pois = vue.ref([]);
        const selected = vue.ref(-1);
        const searchValue = vue.ref("");
        const safeArea = vue.reactive(new SafeArea({
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }));
        const icon = vue.reactive(new IconPath({
          target: "\uE683",
          success: "\uE631",
          position: "\uE653",
          search: "\uE7AD"
        }));
        vue.ref(0);
        const searchLoading = vue.ref(false);
        const language = vue.ref("zh-Hans");
        const scrollTop = vue.ref(0);
        const isLandscape = vue.ref(false);
        const theme = vue.ref("light");
        const searchValueChangeTimer = vue.ref(-1);
        const lastPoi = vue.reactive(new LastPoi({
          latitude: null,
          longitude: null,
          selected: -1,
          pois: [],
          scrollTop: 0
        }));
        const errMsg = vue.ref("");
        const callUniMapCoErr = vue.ref(false);
        const useUniCloud = vue.ref(true);
        const mapHeight = vue.ref(350);
        const timeoutTimers = vue.ref([]);
        const mapTargetRef = vue.ref(null);
        const scrollRef = vue.ref(null);
        const checkUniCloud = () => {
          if (typeof uniCloud == "undefined" || typeof uniCloud.config == "undefined" || uniCloud.config.spaceId == "") {
            errMsg.value = "uni.chooseLocation \u4F9D\u8D56 uniCloud \u7684 uni-map-common \u63D2\u4EF6\uFF0C\u8BF7\u5148\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u5E76\u5B89\u88C5 uni-map-common \u63D2\u4EF6\uFF0C\u63D2\u4EF6\u5730\u5740\uFF1Ahttps://ext.dcloud.net.cn/plugin?id=13872";
            useUniCloud.value = false;
            uni3.__f__("error", "at uni_modules/uni-chooseLocation/pages/chooseLocation/chooseLocation.uvue:213", errMsg.value);
          }
        };
        const initPageOptions = (options) => {
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          successEventName.value = options["successEventName"];
          failEventName.value = options["failEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            if (data["latitude"] != null) {
              chooseLocationOptions.latitude = data["latitude"];
            }
            if (data["longitude"] != null) {
              chooseLocationOptions.longitude = data["longitude"];
            }
            if (data["keyword"] != null) {
              let keyword = data["keyword"];
              chooseLocationOptions.keyword = keyword;
              searchValue.value = keyword;
            } else {
              chooseLocationOptions.keyword = "";
            }
            if (data["payload"] != null) {
              chooseLocationOptions.payload = data["payload"];
            }
          });
          uni3.$emit(readyEventName.value, new UTSJSONObject({}));
        };
        const callUniMapCo = (action, data) => {
          let promise = new Promise((resolve2, reject2) => {
            if (useUniCloud.value == false) {
              reject2(errMsg.value);
              return null;
            }
            errMsg.value = "";
            const uniMapCo = uniCloud.importObject("uni-map-co", new UTSJSONObject({
              customUI: true
            }));
            let chooseLocationData = new UTSJSONObject({
              action,
              data
            });
            if (chooseLocationOptions.payload != null) {
              chooseLocationData["payload"] = chooseLocationOptions.payload;
            }
            uniMapCo.chooseLocation(chooseLocationData).then((res) => {
              resolve2(res);
            }).catch((err = null) => {
              if (UTS.isInstanceOf(err, UniCloudError)) {
                const cloudError = err;
                const errCode = cloudError.errCode;
                const errorMsg = cloudError.errMsg;
                const errSubject = cloudError.errSubject;
                if (errorMsg.indexOf("\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728") > -1 || errorMsg.indexOf("\u672A\u5339\u914D") > -1) {
                  errMsg.value = "uni.chooseLocation \u4F9D\u8D56 uniCloud \u7684 uni-map-common \u63D2\u4EF6\uFF0C\u8BF7\u5B89\u88C5 uni-map-common \u63D2\u4EF6\uFF0C\u63D2\u4EF6\u5730\u5740\uFF1Ahttps://ext.dcloud.net.cn/plugin?id=13872";
                  uni3.__f__("error", "at uni_modules/uni-chooseLocation/pages/chooseLocation/chooseLocation.uvue:283", errMsg.value);
                } else {
                  errMsg.value = errorMsg;
                  uni3.__f__("error", "at uni_modules/uni-chooseLocation/pages/chooseLocation/chooseLocation.uvue:286", "\u83B7\u53D6POI\u4FE1\u606F\u5931\u8D25\uFF0C" + UTS.JSON.stringify(new UTSJSONObject({ errCode, errMsg: errorMsg, errSubject })));
                }
              }
              reject2(err);
            });
          });
          promise.then((res = null) => {
            callUniMapCoErr.value = false;
          }).catch((err = null) => {
            callUniMapCoErr.value = true;
          });
          return promise;
        };
        const calcDirection = (poi1, poi2) => {
          const toRadians = (angle2) => {
            return angle2 * (Math.PI / 180);
          };
          const toDegrees = (angle2) => {
            return angle2 * (180 / Math.PI);
          };
          const lat1 = toRadians(poi1.latitude);
          const lon1 = toRadians(poi1.longitude);
          const lat2 = toRadians(poi2.latitude);
          const lon2 = toRadians(poi2.longitude);
          const dLon = lon2 - lon1;
          const y = Math.sin(dLon) * Math.cos(lat2);
          const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
          const angleRadians = Math.atan2(y, x);
          let angle = toDegrees(angleRadians);
          angle = (angle + 360) % 360;
          if (angle < 22.5 || angle >= 337.5) {
            return "\u5317";
          } else if (angle >= 22.5 && angle < 67.5) {
            return "\u4E1C\u5317";
          } else if (angle >= 67.5 && angle < 112.5) {
            return "\u4E1C";
          } else if (angle >= 112.5 && angle < 157.5) {
            return "\u4E1C\u5357";
          } else if (angle >= 157.5 && angle < 202.5) {
            return "\u5357";
          } else if (angle >= 202.5 && angle < 247.5) {
            return "\u897F\u5357";
          } else if (angle >= 247.5 && angle < 292.5) {
            return "\u897F";
          } else {
            return "\u897F\u5317";
          }
        };
        const distanceHandle = (distance) => {
          if (distance < 1e3) {
            return distance + "m";
          } else {
            return parseFloat((distance / 1e3).toFixed(2)) + "km";
          }
        };
        const safeSetTimeout = (callback, delay) => {
          let timerId = -1;
          timerId = setTimeout(() => {
            callback();
            const index = timeoutTimers.value.indexOf(timerId);
            if (index > -1) {
              timeoutTimers.value.splice(index, 1);
            }
          }, delay);
          timeoutTimers.value.push(timerId);
          return timerId;
        };
        const updateScrollTop = (scrollTopValue) => {
          safeSetTimeout(() => {
            scrollTop.value = scrollTopValue;
          }, 10);
        };
        const poiHandle = (poisData) => {
          let list = poisData.map((item, index2) => {
            const location = item["location"];
            let distance = item["distance"];
            let lat = location["lat"];
            let lng = location["lng"];
            if (distance == 0) {
              lat = latitude.value;
              lng = longitude.value;
            }
            return new Poi({
              title: item["title"],
              address: item["address"],
              distance,
              distanceStr: distanceHandle(distance),
              location: new PoiLocation({
                latitude: lat,
                longitude: lng
              })
            });
          });
          let index = pageIndex.value;
          if (index == 1) {
            pois.value = list;
            updateScrollTop(0);
          } else {
            pois.value = pois.value.concat(list);
          }
        };
        const getPoi = (type) => {
          let searchVal = searchValue.value;
          let lat = latitude.value;
          let lng = longitude.value;
          let index = pageIndex.value;
          let size2 = pageSize.value;
          if (["searchValueChange"].indexOf(type) == -1) {
            searchLoading.value = true;
          }
          if (searchVal != "" && searchVal.length > 0) {
            callUniMapCo("search", new UTSJSONObject({
              keyword: searchVal,
              location: new UTSJSONObject({
                lat,
                lng
              }),
              radius: 5e3,
              auto_extend: 1,
              orderby: "weight",
              page_index: index,
              page_size: size2
            })).then((res) => {
              var _a, _b;
              let poisData = (_b = (_a = res.getJSON("result")) === null || _a === void 0 ? null : _a.getJSON("result")) === null || _b === void 0 ? null : _b.getArray("data");
              poiHandle(poisData);
              searchLoading.value = false;
            }).catch((err = null) => {
              searchLoading.value = false;
            });
          } else {
            callUniMapCo("location2address", new UTSJSONObject({
              location: `${lat},${lng}`,
              get_poi: 1,
              poi_options: new UTSJSONObject({
                radius: 3e3,
                policy: index == 1 ? 3 : 4,
                roadlevel: 1,
                homeorcorp: 1,
                page_index: index,
                page_size: size2
              })
            })).then((res) => {
              var _a, _b;
              let poisData = (_b = (_a = res.getJSON("result")) === null || _a === void 0 ? null : _a.getJSON("result")) === null || _b === void 0 ? null : _b.getArray("pois");
              poiHandle(poisData);
              if (pois.value.length > 0 && index == 1) {
                let poi = pois.value[0];
                if (poi.distance > 0) {
                  let poi1 = poi.location;
                  let poi2 = new PoiLocation({
                    latitude: latitude.value,
                    longitude: longitude.value
                  });
                  let distance = poi.distance;
                  let direction = calcDirection(poi1, poi2);
                  if (poi.address.indexOf("\u7C73") == -1) {
                    let suffix = `\u5411${direction}${distance}\u7C73`;
                    let newPoi = new Poi({
                      title: `${poi.title}${suffix}`,
                      address: `${poi.address}${suffix}`,
                      distance: 0,
                      distanceStr: distanceHandle(distance),
                      location: poi2
                    });
                    pois.value.unshift(newPoi);
                  }
                }
                searchLoading.value = false;
                if (selected.value == -1) {
                  safeSetTimeout(() => {
                    selected.value = 0;
                  }, 20);
                  lastPoi.latitude = latitude.value;
                  lastPoi.longitude = longitude.value;
                  lastPoi.selected = selected.value;
                  lastPoi.pois = pois.value;
                }
              }
            }).catch((err = null) => {
              searchLoading.value = false;
            });
          }
        };
        const getLocation = () => {
          if (chooseLocationOptions.latitude != null && chooseLocationOptions.longitude != null) {
            latitude.value = chooseLocationOptions.latitude;
            longitude.value = chooseLocationOptions.longitude;
            locationComplete.value = true;
            safeSetTimeout(() => {
              getPoi("getLocation");
            }, 100);
          } else {
            locationLoading.value = true;
            uni3.getLocation(new UTSJSONObject({
              type: "gcj02",
              success: (res) => {
                latitude.value = res.latitude;
                longitude.value = res.longitude;
                locationComplete.value = true;
                locationLoading.value = false;
                getPoi("getLocation");
              },
              fail: (err) => {
                uni3.__f__("error", "at uni_modules/uni-chooseLocation/pages/chooseLocation/chooseLocation.uvue:504", "getLocationErr: ", err);
                latitude.value = defaultPoi.latitude;
                longitude.value = defaultPoi.longitude;
                locationComplete.value = true;
                locationLoading.value = false;
                getPoi("getLocation");
              }
            }));
          }
        };
        const getSafeAreaInsets = () => {
          const info = uni3.getWindowInfo();
          safeArea.top = info.safeAreaInsets.top;
          safeArea.bottom = info.safeAreaInsets.bottom;
          safeArea.left = info.safeAreaInsets.left;
          safeArea.right = info.safeAreaInsets.right;
        };
        const getMapContext = () => {
          return uni3.createMapContext(mapId.value, currentInstance2);
        };
        const regionchange = (e) => {
          let causedBy = e.causedBy;
          if (e.type !== "end" || causedBy != "drag" || locationComplete.value == false) {
            return null;
          }
          const mapContext = getMapContext();
          if (mapContext != null) {
            mapContext.getCenterLocation(new UTSJSONObject({
              success: (res) => {
                let latitudeDiff = Math.abs(res.latitude - latitude.value);
                let longitudeDiff = Math.abs(res.longitude - longitude.value);
                if (latitudeDiff > 1e-6 || longitudeDiff > 1e-6) {
                  latitude.value = parseFloat(res.latitude.toFixed(6));
                  longitude.value = parseFloat(res.longitude.toFixed(6));
                  searchValue.value = "";
                  selected.value = -1;
                  pageIndex.value = 1;
                  getPoi("regionchange");
                  const element = mapTargetRef.value;
                  if (element != null) {
                    const duration = 250;
                    element.style.setProperty("transition-duration", `${duration}ms`);
                    element.style.setProperty("transform", "translateY(0px)");
                    element.style.setProperty("transform", "translateY(-15px)");
                    safeSetTimeout(() => {
                      element.style.setProperty("transform", "translateY(0px)");
                    }, duration);
                  }
                }
              }
            }));
          }
        };
        const clearSearchValueChangeTimer = () => {
          if (searchValueChangeTimer.value != -1) {
            clearTimeout(searchValueChangeTimer.value);
            searchValueChangeTimer.value = -1;
          }
        };
        const clearAllTimeoutTimers = () => {
          timeoutTimers.value.forEach((timer) => {
            if (timer != -1) {
              clearTimeout(timer);
            }
          });
          timeoutTimers.value = [];
        };
        const poiSearch = (type) => {
          clearSearchValueChangeTimer();
          pageIndex.value = 1;
          selected.value = -1;
          getPoi(type);
        };
        const searchValueChange = (e) => {
          clearSearchValueChangeTimer();
          searchValueChangeTimer.value = setTimeout(() => {
            poiSearch("searchValueChange");
          }, 200);
        };
        const cancelSearch = () => {
          isFocus.value = false;
          searchValue.value = "";
          if (lastPoi.latitude != null) {
            latitude.value = lastPoi.latitude;
          }
          if (lastPoi.longitude != null) {
            longitude.value = lastPoi.longitude;
          }
          if (lastPoi.pois.length - 1 > lastPoi.selected) {
            pois.value = lastPoi.pois;
            selected.value = lastPoi.selected;
            updateScrollTop(lastPoi.scrollTop);
          } else {
            poiSearch("cancelSearch");
          }
        };
        const selectPoi = (item, index) => {
          isFocus.value = false;
          selected.value = index;
          latitude.value = item.location.latitude;
          longitude.value = item.location.longitude;
          if (searchValue.value == chooseLocationOptions.keyword) {
            lastPoi.latitude = latitude.value;
            lastPoi.longitude = longitude.value;
            lastPoi.selected = selected.value;
            lastPoi.pois = pois.value;
            const scrollElement = scrollRef.value;
            if (scrollElement != null) {
              const scrollTopVal = scrollElement.scrollTop;
              lastPoi.scrollTop = scrollTopVal;
              scrollTop.value = scrollTopVal;
            }
          }
        };
        const scrolltolower = () => {
          pageIndex.value++;
          getPoi("scrolltolower");
        };
        const mapReset = () => {
          isFocus.value = false;
          pageIndex.value = 1;
          selected.value = -1;
          getLocation();
        };
        const closeDialogPage2 = () => {
          uni3.closeDialogPage(new UTSJSONObject({
            dialogPage: uniPage
          }));
        };
        const back2 = () => {
          uni3.$emit(failEventName.value, 1);
          closeDialogPage2();
        };
        const confirm = () => {
          if (selected.value < 0) {
            if (callUniMapCoErr.value) {
              uni3.$emit(successEventName.value, new UTSJSONObject({
                name: "",
                address: "",
                latitude: parseFloat(latitude.value.toFixed(6)),
                longitude: parseFloat(longitude.value.toFixed(6))
              }));
              closeDialogPage2();
            }
            return null;
          }
          let item = pois.value[selected.value];
          let res = new UTSJSONObject({
            name: item.title,
            address: item.address,
            latitude: item.location.latitude,
            longitude: item.location.longitude
          });
          uni3.$emit(successEventName.value, res);
          closeDialogPage2();
        };
        const getSystemInfo = () => {
          const info = uni3.getWindowInfo();
          safeArea.top = info.safeAreaInsets.top;
          safeArea.bottom = info.safeAreaInsets.bottom;
          safeArea.left = info.safeAreaInsets.left;
          safeArea.right = info.safeAreaInsets.right;
          let screenHeight = info.screenHeight;
          mapHeight.value = (screenHeight - safeArea.top - safeArea.bottom) * 0.6;
          const systemInfo = uni3.getSystemInfoSync();
          const appLanguage = systemInfo.appLanguage;
          language.value = appLanguage;
          const osTheme = systemInfo.osTheme;
          const appTheme = systemInfo.appTheme;
          if (appTheme != null && appTheme != "auto") {
            theme.value = appTheme;
          } else if (osTheme != null) {
            theme.value = osTheme;
          }
          isLandscape.value = systemInfo.deviceOrientation == "landscape";
        };
        const languageCom = vue.computed(() => {
          const textInfo = languageData[language.value] != null ? languageData[language.value] : languageData["zh-Hans"];
          return textInfo;
        });
        const darkClassCom = vue.computed(() => {
          return theme.value == "dark" ? "uni-choose-location-dark" : "uni-choose-location-light";
        });
        const landscapeClassCom = vue.computed(() => {
          return isLandscape.value ? "uni-choose-location-landscape" : "uni-choose-location-vertical";
        });
        const mapBoxStyleCom = vue.computed(() => {
          let list = [];
          if (!useUniCloud.value) {
            list.push(`flex: 1;`);
          }
          if (!isLandscape.value) {
            let top_1 = isFocus.value ? (300 - mapHeight.value) / 2 : 0;
            list.push(`transform:translateY(${top_1}px);`);
            list.push(`height:${mapHeight.value}px;`);
          }
          return list.join("");
        });
        const poiBoxStyleCom = vue.computed(() => {
          let list = [];
          if (!isLandscape.value) {
            let top_2 = isFocus.value ? 300 : mapHeight.value;
            list.push(`top:${top_2}px;`);
          }
          return list.join("");
        });
        const resetStyleCom = vue.computed(() => {
          let list = [];
          if (!isLandscape.value) {
            let bottom2 = isFocus.value ? (mapHeight.value - 300) / 2 + 300 - mapHeight.value : 0;
            list.push(`transform:translateY(${bottom2}px);`);
          }
          return list.join("");
        });
        vue.onLoad((options) => {
          checkUniCloud();
          initPageOptions(options);
          getSystemInfo();
          getLocation();
        });
        vue.onReady(() => {
          getSafeAreaInsets();
        });
        vue.onUnload(() => {
          uni3.$off(optionsEventName.value, null);
          uni3.$off(readyEventName.value, null);
          uni3.$off(successEventName.value, null);
          uni3.$off(failEventName.value, null);
          clearSearchValueChangeTimer();
          clearAllTimeoutTimers();
        });
        vue.onResize(() => {
          getSystemInfo();
        });
        return (_ctx = null, _cache = null) => {
          const _component_map = vue.resolveComponent("map");
          const _component_loading = vue.resolveComponent("loading");
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            class: vue.normalizeClass(["uni-choose-location", darkClassCom.value])
          }), [
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-choose-location-map-box", [landscapeClassCom.value]]),
              style: vue.normalizeStyle(mapBoxStyleCom.value)
            }), [
              vue.createVNode(_component_map, new UTSJSONObject({
                class: "uni-choose-location-map",
                id: mapId.value,
                latitude: latitude.value,
                longitude: longitude.value,
                "layer-style": theme.value == "dark" ? "2" : "1",
                "show-compass": false,
                "enable-zoom": true,
                "enable-scroll": true,
                "enable-rotate": false,
                "enable-poi": true,
                "show-location": true,
                onRegionchange: regionchange
              }), null, 8, ["id", "latitude", "longitude", "layer-style"]),
              vue.createElementVNode("view", new UTSJSONObject({
                class: "uni-choose-location-map-target",
                ref_key: "mapTargetRef",
                ref: mapTargetRef
              }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "uni-choose-location-icons uni-choose-location-map-target-icon" }), vue.toDisplayString(icon.target), 1)
              ], 512),
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-choose-location-map-reset", [landscapeClassCom.value, darkClassCom.value]]),
                onClick: mapReset,
                style: vue.normalizeStyle(resetStyleCom.value)
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-choose-location-icons uni-choose-location-map-reset-icon", [darkClassCom.value]])
                }), vue.toDisplayString(icon.position), 3)
              ], 6)
            ], 6),
            vue.createElementVNode("view", new UTSJSONObject({
              class: "uni-choose-location-nav",
              style: vue.normalizeStyle("height:" + (60 + safeArea.top) + "px;")
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-choose-location-nav-btn uni-choose-location-nav-back-btn", [landscapeClassCom.value]]),
                style: vue.normalizeStyle(safeArea.top > 0 ? "top: " + safeArea.top + "px;" : "")
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "uni-choose-location-nav-text uni-choose-location-nav-back-text",
                  onClick: back2
                }), vue.toDisplayString(languageCom.value["cancel"]), 1)
              ], 6),
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-choose-location-nav-btn uni-choose-location-nav-confirm-btn", [landscapeClassCom.value, selected.value < 0 && !callUniMapCoErr.value ? "disable" : "active"]]),
                style: vue.normalizeStyle(safeArea.top > 0 ? "top: " + safeArea.top + "px;" : ""),
                onClick: confirm
              }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "uni-choose-location-nav-text uni-choose-location-nav-confirm-text" }), vue.toDisplayString(languageCom.value["ok"]), 1)
              ], 6)
            ], 4),
            useUniCloud.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 0,
              class: vue.normalizeClass(["uni-choose-location-poi", [landscapeClassCom.value, darkClassCom.value]]),
              style: vue.normalizeStyle(poiBoxStyleCom.value)
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-choose-location-poi-search", [darkClassCom.value]])
              }), [
                vue.createElementVNode("view", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-choose-location-poi-search-box", [darkClassCom.value]])
                }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: vue.normalizeClass(["uni-choose-location-icons uni-choose-location-search-icon", [darkClassCom.value]])
                  }), vue.toDisplayString(icon.search), 3),
                  vue.withDirectives(vue.createElementVNode("input", new UTSJSONObject({
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event = null) => {
                      return searchValue.value = $event;
                    }),
                    type: "text",
                    placeholder: languageCom.value["search"],
                    class: vue.normalizeClass(["uni-choose-location-poi-search-input uni-choose-location-icons", [darkClassCom.value]]),
                    onFocus: _cache[1] || (_cache[1] = ($event = null) => {
                      return isFocus.value = true;
                    }),
                    onConfirm: _cache[2] || (_cache[2] = ($event = null) => {
                      return poiSearch("poiSearch");
                    }),
                    onInput: searchValueChange
                  }), null, 42, ["placeholder"]), [
                    [vue.vModelText, searchValue.value]
                  ])
                ], 2),
                isFocus.value || searchValue.value != "" ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                  key: 0,
                  class: "uni-choose-location-poi-search-cancel",
                  onClick: cancelSearch
                }), vue.toDisplayString(languageCom.value["cancel"]), 1)) : vue.createCommentVNode("", true)
              ], 2),
              vue.createElementVNode("scroll-view", new UTSJSONObject({
                ref_key: "scrollRef",
                ref: scrollRef,
                "scroll-with-animation": false,
                direction: "vertical",
                "scroll-top": scrollTop.value,
                "lower-threshold": 50,
                onScrolltolower: scrolltolower,
                class: "uni-choose-location-poi-list"
              }), [
                errMsg.value != "" ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 0,
                  class: "uni-choose-location-poi-search-error"
                }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: vue.normalizeClass(["uni-choose-location-poi-search-error-text", [darkClassCom.value]])
                  }), vue.toDisplayString(errMsg.value), 3)
                ])) : locationLoading.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 1,
                  class: "uni-choose-location-poi-search-loading"
                }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: vue.normalizeClass(["uni-choose-location-poi-search-loading-text", [darkClassCom.value]])
                  }), vue.toDisplayString(languageCom.value["locationLoading"]), 3)
                ])) : searchLoading.value && pageIndex.value == 1 ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 2,
                  class: "uni-choose-location-poi-search-loading"
                }), [
                  vue.createVNode(_component_loading, new UTSJSONObject({
                    class: vue.normalizeClass(["uni-choose-location-poi-search-loading-item", [darkClassCom.value]])
                  }), null, 8, ["class"])
                ])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, new UTSJSONObject({ key: 3 }), vue.renderList(pois.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                    key: index,
                    class: vue.normalizeClass(["uni-choose-location-poi-item", [landscapeClassCom.value]]),
                    onClick: ($event = null) => {
                      return selectPoi(item, index);
                    }
                  }), [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("text", new UTSJSONObject({
                          class: vue.normalizeClass(["uni-choose-location-poi-item-title-text", [darkClassCom.value]])
                        }), vue.toDisplayString(item.title), 3)
                      ]),
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("text", new UTSJSONObject({
                          class: vue.normalizeClass(["uni-choose-location-poi-item-detail-text", [darkClassCom.value]])
                        }), vue.toDisplayString(item.distance > 0 ? item.distanceStr + " | " : "") + vue.toDisplayString(item.address), 3)
                      ])
                    ]),
                    selected.value == index ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                      key: 0,
                      class: "uni-choose-location-icons uni-choose-location-poi-item-selected-icon"
                    }), vue.toDisplayString(icon.success), 1)) : vue.createCommentVNode("", true),
                    vue.createElementVNode("view", new UTSJSONObject({
                      class: vue.normalizeClass(["uni-choose-location-poi-item-after", [darkClassCom.value]])
                    }), null, 2)
                  ], 10, ["onClick"]);
                }), 128)),
                searchLoading.value && pageIndex.value > 1 ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  key: 4,
                  class: "uni-choose-location-poi-search-loading"
                }), [
                  vue.createVNode(_component_loading, new UTSJSONObject({
                    class: vue.normalizeClass(["uni-choose-location-poi-search-loading-item", [darkClassCom.value]])
                  }), null, 8, ["class"])
                ])) : vue.createCommentVNode("", true)
              ], 40, ["scroll-top"])
            ], 6)) : vue.createCommentVNode("", true)
          ], 2);
        };
      }
    });
    const _style_0 = { "uni-choose-location-icons": { "": { "fontFamily": "UniChooseLocationFontFamily", "fontSize": 16, "fontStyle": "normal" } }, "uni-choose-location": { "": { "position": "relative", "left": 0, "top": 0, "width": "100%", "height": "100%", "backgroundImage": "none", "backgroundColor": "#f8f8f8", "zIndex": 999 } }, "uni-choose-location-map-box": { "": { "position": "relative", "width": "100%", "height": 350 }, ".uni-choose-location-vertical": { "transitionProperty": "transform", "transitionDuration": "0.25s", "transitionTimingFunction": "ease-out" }, ".uni-choose-location-landscape": { "height": "100%" } }, "uni-choose-location-map": { "": { "width": "100%", "height": "100%" } }, "uni-choose-location-map-target": { "": { "position": "absolute", "left": "50%", "bottom": "50%", "width": 50, "height": 50, "marginLeft": -25, "transitionProperty": "transform", "transitionDuration": "0.25s", "transitionTimingFunction": "ease-out" } }, "uni-choose-location-map-target-icon": { "": { "fontSize": 50, "color": "#f0493e" } }, "uni-choose-location-map-reset": { "": { "position": "absolute", "left": 20, "bottom": 40, "width": 40, "height": 40, "boxSizing": "border-box", "backgroundColor": "#ffffff", "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20, "pointerEvents": "auto", "boxShadow": "0px 0px 20px 2px rgba(0, 0, 0, .3)", "zIndex": 9, "display": "flex", "justifyContent": "center", "alignItems": "center" }, ".uni-choose-location-vertical": { "transitionProperty": "transform", "transitionDuration": "0.25s", "transitionTimingFunction": "ease-out" }, ".uni-choose-location-landscape": { "left": 40, "bottom": 40 } }, "uni-choose-location-map-reset-icon": { "": { "fontSize": 26, "textAlign": "center", "lineHeight": "40px" } }, "uni-choose-location-nav": { "": { "position": "absolute", "top": 0, "left": 0, "width": "100%", "height": 60, "backgroundColor": "rgba(0,0,0,0)", "backgroundImage": "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0))" } }, "uni-choose-location-nav-btn": { "": { "position": "absolute", "top": 5, "left": 5, "width": 64, "height": 44, "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5 }, ".uni-choose-location-nav-confirm-btn": { "left": "auto", "right": 5 }, ".uni-choose-location-nav-confirm-btn.active:active": { "opacity": 0.7 }, ".uni-choose-location-nav-confirm-btn.disable": { "opacity": 0.4 }, ".uni-choose-location-landscape": { "top": 10, "left": 20 }, ".uni-choose-location-nav-confirm-btn.uni-choose-location-landscape": { "left": "auto", "right": 20 } }, "uni-choose-location-nav-confirm-text": { "": { "backgroundColor": "#007aff", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5 } }, "uni-choose-location-nav-back-text": { "": { "color": "#ffffff" } }, "uni-choose-location-nav-text": { "": { "paddingTop": 8, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "fontSize": 14, "textAlign": "center", "color": "#ffffff" } }, "uni-choose-location-poi": { "": { "position": "absolute", "top": 350, "width": "100%", "bottom": 0, "backgroundColor": "#ffffff", "zIndex": 10 }, ".uni-choose-location-vertical": { "transitionProperty": "top", "transitionDuration": "0.25s", "transitionTimingFunction": "ease-out" }, ".uni-choose-location-landscape": { "position": "absolute", "top": 80, "right": 25, "width": 300, "bottom": 20, "maxHeight": 600, "boxShadow": "0px 0px 20px 2px rgba(0, 0, 0, .3)", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5 } }, "uni-choose-location-poi-search": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "height": 50, "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8, "backgroundColor": "#ffffff" } }, "uni-choose-location-poi-search-box": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "height": 32, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "backgroundColor": "#ededed" } }, "uni-choose-location-poi-search-input": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "height": "100%", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "backgroundImage": "none", "backgroundColor": "#ededed" } }, "uni-choose-location-poi-search-cancel": { "": { "marginLeft": 5, "color": "#007aff", "fontSize": 15, "textAlign": "center" } }, "uni-choose-location-poi-list": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "uni-choose-location-poi-search-loading": { "": { "display": "flex", "alignItems": "center", "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0 } }, "uni-choose-location-poi-search-loading-text": { "": { "color": "#191919" } }, "uni-choose-location-poi-search-error": { "": { "display": "flex", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-choose-location-poi-search-error-text": { "": { "color": "#191919", "fontSize": 14 } }, "uni-choose-location-poi-item": { "": { "position": "relative", "paddingTop": 15, "paddingRight": 40, "paddingBottom": 15, "paddingLeft": 10 }, ".uni-choose-location-landscape": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-choose-location-poi-item-title-text": { "": { "fontSize": 14, "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis", "color": "#191919" } }, "uni-choose-location-poi-item-detail-text": { "": { "fontSize": 12, "marginTop": 5, "color": "#b2b2b2", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis" } }, "uni-choose-location-poi-item-selected-icon": { "": { "position": "absolute", "top": "50%", "right": 10, "width": 26, "height": 26, "marginTop": -13, "color": "#007aff", "fontSize": 24 } }, "uni-choose-location-poi-item-after": { "": { "position": "absolute", "height": 1, "left": 10, "bottom": 0, "right": 10, "width": "auto", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f8f8f8" } }, "uni-choose-location-search-icon": { "": { "color": "#808080", "paddingLeft": 5 } }, "uni-choose-location-poi-search-loading-item": { "": { "width": 28, "height": 28, "borderTopColor": "#D0D0D0", "borderRightColor": "#D0D0D0", "borderBottomColor": "#D0D0D0", "borderLeftColor": "#D0D0D0" } }, "uni-choose-location-dark": { ".uni-choose-location-map-reset": { "backgroundColor": "#111111", "boxShadow": "0px 0px 5px 1px rgba(0, 0, 0, .3)" }, ".uni-choose-location-poi-search-box": { "backgroundColor": "#111111" }, ".uni-choose-location-search-icon": { "color": "#d1d1d1" }, ".uni-choose-location-poi-search-loading-text": { "color": "#d1d1d1" }, ".uni-choose-location-poi-search": { "backgroundColor": "#181818" }, ".uni-choose-location-poi-search-input": { "backgroundImage": "none", "backgroundColor": "#111111", "color": "#d1d1d1" }, ".uni-choose-location-poi-item-title-text": { "color": "#d1d1d1" }, ".uni-choose-location-poi-item-detail-text": { "color": "#595959" }, ".uni-choose-location-poi": { "backgroundColor": "#181818" }, ".uni-choose-location-poi-item-after": { "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#1e1e1e" }, ".uni-choose-location-map-reset-icon": { "color": "#d1d1d1" }, ".uni-choose-location-poi-search-error-text": { "color": "#d1d1d1" }, ".uni-choose-location-poi-search-loading-item": { "borderTopColor": "#d1d1d1", "borderRightColor": "#d1d1d1", "borderBottomColor": "#d1d1d1", "borderLeftColor": "#d1d1d1" } }, "@FONT-FACE": [{ "fontFamily": "UniChooseLocationFontFamily", "src": "url('data:font/ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzI8Rkp9AAABjAAAAGBjbWFw0euemwAAAgAAAAGyZ2x5ZuUB/iAAAAPAAAACsGhlYWQp23fyAAAA4AAAADZoaGVhB94DhgAAALwAAAAkaG10eBQAAAAAAAHsAAAAFGxvY2EBUAG+AAADtAAAAAxtYXhwARIAfQAAARgAAAAgbmFtZUTMSfwAAAZwAAADS3Bvc3RLRtf0AAAJvAAAAFIAAQAAA4D/gABcBAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAUAAQAAAAEAAIZo1N5fDzz1AAsEAAAAAADjXhn6AAAAAONeGfoAAP+ABAADgQAAAAgAAgAAAAAAAAABAAAABQBxAAMAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAQEAAGQAAUAAAKJAswAAACPAokCzAAAAesAMgEIAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAwOYx560DgP+AAAAD3ACAAAAAAQAAAAAAAAAAAAAAAAACBAAAAAQAAAAEAAAABAAAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABcgABAAAAAABsAAMAAQAAACwAAwAKAAABcgAEAEAAAAAKAAgAAgAC5jHmU+aD563//wAA5jHmU+aD563//wAAAAAAAAAAAAEACgAKAAoACgAAAAIAAwAEAAEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAEAAAAAAAAAABAAA5jEAAOYxAAAAAgAA5lMAAOZTAAAAAwAA5oMAAOaDAAAABAAA560AAOetAAAAAQAAAAAAAABIAGYBCAFYAAIAAP/SA4cDNgAdACoAACUGBwYnLgEnJjc+ATc2Fx4BFxYHBgcXHgEOAiYnJTI+ATQuASIOARQeAQJlSFdVT1FsDQwdHodWU1JTeBQUFhc+7AUFBAsPEAX+T0uASkqAln9LS3/MMwkIICKLV1RQUnMQEBoagVZTUlU+7AYPDwsEBAbrSoCWf0tLf5aASgAAAAEAAAAAA8ACyAANAAATNwU3Njc2NxcHBgcGB0A5AQdAVGaPnxdXbWuWfAGPN986TFl8hTpVbG6aiQAAAAMAAP+ABAADgQAzAGcAcAAAAQYHBgcGBxUUBi4BPQEmJyYnJicjIiY+ATsBNjc2NzY3NTQ2MhYdARYXFhcWFzM2HgEGKwIiJj4BOwEmJyYnJicVFAYiJj0BBgcGBwYHMzYeAQYrARYXFhcWFzU0Nh4BHQE2NzY3NiUiJjQ2MhYUBgOyBjk3WlxtDxUPbF1aNzgGNAsPAQ4LNAY4N1pdbA8VD21cWjc5BjMLDwEPC2eaCg8BDgqaBjIwT1BfDxUPXlFOMTEGmAsPAQ8LmQYxMU5RXhAVDl9QTzAy/ocWHR0rHh4BZmxdWjc4BzMLDwEOCzMHODdaXWwQFA9tXFo3OQY0ChAOCzUGOTdaXG0BDxUQEBQPX1BPMDEHmQsODwqZBzEwT1BfAQ8VEF5RTjExBpgLDwEOC5gGMTFOUUUdKx4eKx0AAAMAAP+BAyoDfgAIACYAMwAABRQWMjY0JiIGExEUBisBIiY1ES4BJyY1NDc2NzYyFxYXFhUUBw4BAwYeAj4BNC4CDgEBwCU1JiY1JWoGBEAEB0d1ISIpJ0RFokVEJykiIXX9AiRATEImJT9KQCdUEhkZIxkZAXH+iAQGBgQBeApTP0FJUUVEJykpJ0RFUUlBP1MBIiZDJwImQks/JQEjPQAAABIA3gABAAAAAAAAABMAAAABAAAAAAABABsAEwABAAAAAAACAAcALgABAAAAAAADABsANQABAAAAAAAEABsAUAABAAAAAAAFAAsAawABAAAAAAAGABsAdgABAAAAAAAKACsAkQABAAAAAAALABMAvAADAAEECQAAACYAzwADAAEECQABADYA9QADAAEECQACAA4BKwADAAEECQADADYBOQADAAEECQAEADYBbwADAAEECQAFABYBpQADAAEECQAGADYBuwADAAEECQAKAFYB8QADAAEECQALACYCR0NyZWF0ZWQgYnkgaWNvbmZvbnRVbmlDaG9vc2VMb2NhdGlvbkZvbnRGYW1pbHlSZWd1bGFyVW5pQ2hvb3NlTG9jYXRpb25Gb250RmFtaWx5VW5pQ2hvb3NlTG9jYXRpb25Gb250RmFtaWx5VmVyc2lvbiAxLjBVbmlDaG9vc2VMb2NhdGlvbkZvbnRGYW1pbHlHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AFUAbgBpAEMAaABvAG8AcwBlAEwAbwBjAGEAdABpAG8AbgBGAG8AbgB0AEYAYQBtAGkAbAB5AFIAZQBnAHUAbABhAHIAVQBuAGkAQwBoAG8AbwBzAGUATABvAGMAYQB0AGkAbwBuAEYAbwBuAHQARgBhAG0AaQBsAHkAVQBuAGkAQwBoAG8AbwBzAGUATABvAGMAYQB0AGkAbwBuAEYAbwBuAHQARgBhAG0AaQBsAHkAVgBlAHIAcwBpAG8AbgAgADEALgAwAFUAbgBpAEMAaABvAG8AcwBlAEwAbwBjAGEAdABpAG8AbgBGAG8AbgB0AEYAYQBtAGkAbAB5AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQIBAwEEAQUBBgAGc291c3VvB2dvdXh1YW4HZGluZ3dlaQtkaXR1LXR1ZGluZwAAAAA=') format('truetype')" }], "@TRANSITION": { "uni-choose-location-map-box": { "property": "transform", "duration": "0.25s", "timingFunction": "ease-out" }, "uni-choose-location-map-target": { "property": "transform", "duration": "0.25s", "timingFunction": "ease-out" }, "uni-choose-location-map-reset": { "property": "transform", "duration": "0.25s", "timingFunction": "ease-out" }, "uni-choose-location-poi": { "property": "top", "duration": "0.25s", "timingFunction": "ease-out" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const ChooseLocation = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:chooseLocation", ChooseLocation, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-modal.js
var uni_modal_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "uniModal",
      setup(__props) {
        const theme = vue.ref("light");
        const isDark = vue.computed(() => {
          return theme.value == "dark";
        });
        const language = vue.ref("zh-Hans");
        const i18nCancelText = new UTSJSONObject({
          en: "Cancel",
          es: "Cancelar",
          fr: "Annuler",
          "zh-Hans": "\u53D6\u6D88",
          "zh-Hant": "\u53D6\u6D88"
        });
        const i18nConfirmText = new UTSJSONObject({
          en: "OK",
          es: "Confirmar",
          fr: "Confirmer",
          "zh-Hans": "\u786E\u5B9A",
          "zh-Hant": "\u78BA\u5B9A"
        });
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const title = vue.ref("");
        const content = vue.ref("");
        const showCancel = vue.ref(true);
        const editable = vue.ref(false);
        const placeholderText = vue.ref(null);
        const inputConfirmText = vue.ref(null);
        const inputCancelText = vue.ref(null);
        const cancelColor = vue.ref("#000000");
        const confirmColor = vue.ref("#4A5E86");
        const inputBottom = vue.ref("0px");
        const maxScrollHeight = vue.ref("192px");
        const inputCancelColor = vue.ref(null);
        const inputConfirmColor = vue.ref(null);
        const hoverClassName = vue.ref("uni-modal-dialog__action--hover");
        const showAnim = vue.ref(false);
        const isAutoHeight = vue.ref(true);
        const appThemeChangeCallbackId2 = vue.ref(-1);
        const hasTitle = vue.computed(() => {
          return title.value != "";
        });
        const instance = vue.getCurrentInstance();
        const cancelText = vue.computed(() => {
          if (inputCancelText.value != null) {
            return inputCancelText.value;
          }
          if (language.value.startsWith("en")) {
            return i18nCancelText["en"];
          }
          if (language.value.startsWith("es")) {
            return i18nCancelText["es"];
          }
          if (language.value.startsWith("fr")) {
            return i18nCancelText["fr"];
          }
          if (language.value.startsWith("zh-Hans")) {
            return i18nCancelText["zh-Hans"];
          }
          if (language.value.startsWith("zh-Hant")) {
            return i18nCancelText["zh-Hant"];
          }
          return "\u53D6\u6D88";
        });
        const confirmText = vue.computed(() => {
          if (inputConfirmText.value != null) {
            return inputConfirmText.value;
          }
          if (language.value.startsWith("en")) {
            return i18nConfirmText["en"];
          }
          if (language.value.startsWith("es")) {
            return i18nConfirmText["es"];
          }
          if (language.value.startsWith("fr")) {
            return i18nConfirmText["fr"];
          }
          if (language.value.startsWith("zh-Hans")) {
            return i18nConfirmText["zh-Hans"];
          }
          if (language.value.startsWith("zh-Hant")) {
            return i18nConfirmText["zh-Hant"];
          }
          return "\u786E\u5B9A";
        });
        const onInputBlur = (e) => {
          setTimeout(() => {
            inputBottom.value = "0px";
          }, 220);
        };
        const onInputKeyboardChange = (e) => {
          const keyBoardHeight = e.detail.height;
          if (keyBoardHeight > 0) {
            inputBottom.value = `${keyBoardHeight / 2}px`;
          }
        };
        const isValidColor = (inputColor = null) => {
          const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          if (inputColor == null) {
            return false;
          }
          return hexColorRegex.test(inputColor);
        };
        const updateUI = () => {
          if (isValidColor(inputConfirmColor.value)) {
            confirmColor.value = inputConfirmColor.value;
          } else {
            if (theme.value == "dark") {
              confirmColor.value = "#7388a2";
            } else {
              confirmColor.value = "#4A5E86";
            }
          }
          if (isValidColor(inputCancelColor.value)) {
            cancelColor.value = inputCancelColor.value;
          } else {
            if (theme.value == "dark") {
              cancelColor.value = "#a5a5a5";
            } else {
              cancelColor.value = "#000000";
            }
          }
          if (theme.value == "dark") {
            hoverClassName.value = "uni-modal-dialog__action--hover-dark";
          } else {
            hoverClassName.value = "uni-modal-dialog__action--hover";
          }
        };
        const closeModal = () => {
          showAnim.value = false;
          setTimeout(() => {
            var _a;
            uni3.closeDialogPage(new UTSJSONObject({
              dialogPage: (_a = instance === null || instance === void 0 ? null : instance.proxy) === null || _a === void 0 ? null : _a.$page
            }));
          }, 300);
        };
        const handleCancel = () => {
          closeModal();
          const ret = new UTSJSONObject({
            cancel: true,
            confirm: false
          });
          uni3.$emit(successEventName.value, UTS.JSON.stringify(ret));
        };
        const handleSure = () => {
          closeModal();
          const ret = new UTSJSONObject({
            cancel: false,
            confirm: true,
            content: editable.value ? content.value : null
          });
          uni3.$emit(successEventName.value, UTS.JSON.stringify(ret));
        };
        vue.onReady(() => {
          setTimeout(() => {
            showAnim.value = true;
          }, 10);
        });
        vue.onLoad((options) => {
          var _a;
          const systemInfo = uni3.getSystemInfoSync();
          const osLanguage = systemInfo.osLanguage;
          const scrollHeight = Math.floor(systemInfo.screenHeight * 0.55);
          maxScrollHeight.value = scrollHeight + "px";
          const appLanguage = systemInfo.appLanguage;
          if (appLanguage != null) {
            language.value = appLanguage;
          } else if (osLanguage != null) {
            language.value = osLanguage;
          }
          const appTheme = systemInfo.appTheme;
          if (appTheme != null) {
            const osTheme = (_a = systemInfo.osTheme) !== null && _a !== void 0 ? _a : "light";
            theme.value = "auto" == appTheme ? osTheme : appTheme;
          }
          appThemeChangeCallbackId2.value = uni3.onAppThemeChange((res) => {
            theme.value = res.appTheme;
            updateUI();
          });
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          successEventName.value = options["successEventName"];
          failEventName.value = options["failEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            if (data["title"] != null) {
              title.value = data["title"];
            }
            if (data["content"] != null) {
              content.value = data["content"];
            }
            if (data["showCancel"] != null) {
              showCancel.value = data["showCancel"];
            }
            if (data["editable"] != null) {
              editable.value = data["editable"];
            }
            if (data["placeholderText"] != null) {
              placeholderText.value = data["placeholderText"];
            }
            if (data["confirmText"] != null) {
              inputConfirmText.value = data["confirmText"];
            }
            if (data["cancelText"] != null) {
              inputCancelText.value = data["cancelText"];
            }
            if (data["confirmColor"] != null) {
              inputConfirmColor.value = data["confirmColor"];
            }
            if (data["cancelColor"] != null) {
              inputCancelColor.value = data["cancelColor"];
            }
            updateUI();
          });
          uni3.$emit(readyEventName.value, new UTSJSONObject({}));
        });
        vue.onUnload(() => {
          uni3.$off(optionsEventName.value, null);
          uni3.$off(readyEventName.value, null);
          uni3.$off(successEventName.value, null);
          uni3.$off(failEventName.value, null);
          uni3.offAppThemeChange(appThemeChangeCallbackId2.value);
        });
        vue.onBackPress((_) => {
          const ret = new UTSJSONObject({
            cancel: false,
            confirm: false
          });
          uni3.$emit(successEventName.value, UTS.JSON.stringify(ret));
          return false;
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            class: vue.normalizeClass(["uni-modal-mask", new UTSJSONObject({ "uni-modal-mask--show": showAnim.value, "uni-modal-mask--hide": !showAnim.value })])
          }), [
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-modal-dialog", new UTSJSONObject({ "uni-modal-dialog--show": showAnim.value, "uni-modal--dark": isDark.value })]),
              style: vue.normalizeStyle({ bottom: inputBottom.value })
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-modal-dialog__inner", new UTSJSONObject({ "uni-modal--dark": isDark.value })])
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni-modal-dialog__title__container" }), [
                  hasTitle.value ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                    key: 0,
                    "max-lines": "2",
                    class: vue.normalizeClass(["uni-modal-dialog__title", new UTSJSONObject({ "uni-modal--dark": isDark.value })])
                  }), vue.toDisplayString(title.value), 3)) : vue.createCommentVNode("", true)
                ]),
                vue.createElementVNode("view", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-modal-dialog__body", new UTSJSONObject({ "no-title": !hasTitle.value })])
                }), [
                  editable.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", new UTSJSONObject({
                    key: 0,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event = null) => {
                      return content.value = $event;
                    }),
                    class: vue.normalizeClass(["uni-modal-dialog__textarea", new UTSJSONObject({ "uni-modal--dark": isDark.value })]),
                    "placeholder-class": "uni-modal-dialog__textarea-placeholder",
                    focus: true,
                    "adjust-position": false,
                    onBlur: onInputBlur,
                    onKeyboardheightchange: onInputKeyboardChange,
                    "auto-height": isAutoHeight.value,
                    placeholder: placeholderText.value
                  }), null, 42, ["auto-height", "placeholder"])), [
                    [vue.vModelText, content.value]
                  ]) : content.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("scroll-view", new UTSJSONObject({
                    key: 1,
                    class: "uni-modal-dialog__scroll",
                    "show-scrollbar": "true",
                    style: vue.normalizeStyle({ maxHeight: maxScrollHeight.value })
                  }), [
                    vue.createElementVNode("text", new UTSJSONObject({ class: "uni-modal-dialog__message" }), vue.toDisplayString(content.value), 1)
                  ], 4)) : vue.createCommentVNode("", true)
                ], 2),
                vue.createElementVNode("view", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-modal-dialog__divider", new UTSJSONObject({ "uni-modal--dark": isDark.value })])
                }), null, 2),
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni-modal-dialog__actions" }), [
                  showCancel.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                    key: 0,
                    class: "uni-modal-dialog__action uni-modal-dialog__action--cancel",
                    "hover-class": hoverClassName.value,
                    onClick: handleCancel
                  }), [
                    vue.createElementVNode("text", new UTSJSONObject({
                      style: vue.normalizeStyle({ color: cancelColor.value }),
                      "max-lines": "1",
                      class: "uni-modal-dialog__action-text"
                    }), vue.toDisplayString(cancelText.value), 5)
                  ], 8, ["hover-class"])) : vue.createCommentVNode("", true),
                  showCancel.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                    key: 1,
                    class: vue.normalizeClass(["uni-modal-dialog__split", new UTSJSONObject({ "uni-modal--dark": isDark.value })])
                  }), null, 2)) : vue.createCommentVNode("", true),
                  vue.createElementVNode("view", new UTSJSONObject({
                    class: "uni-modal-dialog__action",
                    "hover-class": hoverClassName.value,
                    onClick: handleSure
                  }), [
                    vue.createElementVNode("text", new UTSJSONObject({
                      style: vue.normalizeStyle({ color: confirmColor.value }),
                      "max-lines": "1",
                      class: "uni-modal-dialog__action-text uni-modal-dialog__action-text--confirm"
                    }), vue.toDisplayString(confirmText.value), 5)
                  ], 8, ["hover-class"])
                ])
              ], 2)
            ], 6)
          ], 2);
        };
      }
    });
    const _style_0 = { "uni-modal-mask": { "": { "display": "flex", "height": "100%", "width": "100%", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.55)", "transitionProperty": "opacity" } }, "uni-modal-mask--hide": { "": { "transitionDuration": "0s", "opacity": 0 } }, "uni-modal-mask--show": { "": { "transitionDuration": "0.1s", "opacity": 1 } }, "uni-modal-dialog": { "": { "width": "80%", "backgroundColor": "#ffffff", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)", "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16, "opacity": 0, "transform": "scale(0.9)", "transitionDuration": "0.1s", "transitionProperty": "opacity,transform" }, ".uni-modal-dialog--show": { "opacity": 1, "transform": "scale(1)" }, ".uni-modal--dark": { "backgroundColor": "#272727" } }, "uni-modal-dialog__inner": { "": { "width": "100%", "height": "100%", "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 }, ".uni-modal--dark": { "backgroundColor": "#272727" } }, "uni-modal-dialog__title__container": { "": { "paddingTop": 33, "paddingRight": 24, "paddingBottom": 18, "paddingLeft": 24 } }, "uni-modal-dialog__title": { "": { "fontSize": 17, "fontWeight": 600, "textAlign": "center", "textOverflow": "ellipsis", "lines": 2, "lineHeight": "22px" }, ".uni-modal--dark": { "color": "#cfcfcf" } }, "uni-modal-dialog__body": { "": { "justifyContent": "center", "alignItems": "center", "paddingTop": 0, "paddingRight": 24, "paddingBottom": 0, "paddingLeft": 24, "marginBottom": 13 }, ".no-title": { "marginTop": -10, "marginBottom": 20 } }, "uni-modal-dialog__scroll": { "": { "maxHeight": 192, "marginTop": 2, "marginRight": 2, "marginBottom": 2, "marginLeft": 2, "width": "100%" } }, "uni-modal-dialog__message": { "": { "fontSize": 17, "fontWeight": "normal", "textAlign": "center", "color": "#7f7f7f", "lineHeight": "1.5em", "width": "100%", "paddingBottom": 10 } }, "uni-modal-dialog__textarea": { "": { "fontSize": 17, "backgroundColor": "#f6f6f6", "color": "#000000", "width": "96%", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "marginTop": 2, "marginBottom": 7, "maxHeight": 192 }, ".uni-modal--dark": { "backgroundColor": "#3d3d3d", "color": "#cfcfcf" } }, "uni-modal-dialog__textarea-placeholder": { "": { "color": "#808080" } }, "uni-modal-dialog__divider": { "": { "width": "100%", "height": 1, "transform": "scaleY(0.5)", "backgroundColor": "#e3e3e3" }, ".uni-modal--dark": { "backgroundColor": "#303030" } }, "uni-modal-dialog__actions": { "": { "display": "flex", "width": "100%", "height": 56, "flexDirection": "row", "overflow": "hidden" } }, "uni-modal-dialog__action": { "": { "width": "50%", "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexGrow": 1 } }, "uni-modal-dialog__action--hover": { "": { "width": "50%", "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#efefef" } }, "uni-modal-dialog__action--hover-dark": { "": { "width": "50%", "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#1c1c1c" } }, "uni-modal-dialog__action-text": { "": { "letterSpacing": 1, "fontSize": 17, "textAlign": "center", "lines": 1, "whiteSpace": "nowrap", "fontWeight": 600 } }, "uni-modal-dialog__action-text--confirm": { "": { "color": "#4A5E86" } }, "uni-modal-dialog__split": { "": { "width": 1, "height": "100%", "transform": "scaleX(0.5)", "backgroundColor": "#e3e3e3" }, ".uni-modal--dark": { "backgroundColor": "#303030" } }, "@TRANSITION": { "uni-modal-mask": { "property": "opacity" }, "uni-modal-mask--hide": { "duration": "0s" }, "uni-modal-mask--show": { "duration": "0.1s" }, "uni-modal-dialog": { "duration": "0.1s", "property": "opacity,transform" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const UniModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:uniModal", UniModal, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-openLocation.js
var uni_openLocation_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    const uniOpenLocation_utsProxy = uni3.requireUTSPlugin("uni_modules/uni-openLocation");
    const targetPath = "unifile://static/uni-openLocation/static/target.png";
    class AafeArea extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              top: { type: Number, optional: false },
              bottom: { type: Number, optional: false },
              left: { type: Number, optional: false },
              right: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = AafeArea.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.top = this.__props__.top;
        this.bottom = this.__props__.bottom;
        this.left = this.__props__.left;
        this.right = this.__props__.right;
        delete this.__props__;
      }
    }
    class IconPath extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              target: { type: String, optional: false },
              position: { type: String, optional: false },
              navigation: { type: String, optional: false },
              back: { type: String, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = IconPath.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.target = this.__props__.target;
        this.position = this.__props__.position;
        this.navigation = this.__props__.navigation;
        this.back = this.__props__.back;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "openLocation",
      setup(__props) {
        const languageData = new UTSJSONObject({
          en: new UTSJSONObject({
            navigation: "navigation"
          }),
          "zh-Hans": new UTSJSONObject({
            navigation: "\u5BFC\u822A"
          }),
          "zh-Hant": new UTSJSONObject({
            navigation: "\u5C0E\u822A"
          })
        });
        const currentInstance2 = vue.getCurrentInstance().proxy;
        const uniPage = currentInstance2.$page;
        const id1 = `UniMap1_${(Math.random() * 1e6).toString(36)}`;
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const openLocationOptions = vue.ref({
          latitude: 0,
          longitude: 0,
          scale: 18,
          name: "",
          address: ""
        });
        const safeArea = vue.ref(new AafeArea({
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }));
        const icon = vue.ref(new IconPath({
          target: "\uE683",
          position: "\uE653",
          navigation: "\uE640",
          back: "\uE651"
        }));
        const language = vue.ref("zh-Hans");
        const isLandscape = vue.ref(false);
        const theme = vue.ref("light");
        const mapId = vue.ref(id1);
        const latitude = vue.ref(0);
        const longitude = vue.ref(0);
        const markers = vue.ref([]);
        const languageCom = vue.computed(() => {
          const textInfo = languageData[language.value] != null ? languageData[language.value] : languageData["zh-Hans"];
          return textInfo;
        });
        const darkClassCom = vue.computed(() => {
          return theme.value == "dark" ? "uni-open-location-dark" : "uni-open-location-light";
        });
        const landscapeClassCom = vue.computed(() => {
          return isLandscape.value ? "uni-open-location-landscape" : "";
        });
        const initPageOptions = (options) => {
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          successEventName.value = options["successEventName"];
          failEventName.value = options["failEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            uni3.__f__("log", "at uni_modules/uni-openLocation/pages/openLocation/openLocation.uvue:130", "data: ", UTS.JSON.stringify(data));
            if (data["latitude"] != null) {
              openLocationOptions.value.latitude = data["latitude"];
              latitude.value = openLocationOptions.value.latitude;
            }
            if (data["longitude"] != null) {
              openLocationOptions.value.longitude = data["longitude"];
              longitude.value = openLocationOptions.value.longitude;
            }
            if (data["scale"] != null) {
              openLocationOptions.value.scale = data["scale"];
            }
            if (data["name"] != null) {
              openLocationOptions.value.name = data["name"];
            }
            if (data["address"] != null) {
              openLocationOptions.value.address = data["address"];
            }
            setTimeout(() => {
              markers.value = [
                {
                  id: 1,
                  latitude: openLocationOptions.value.latitude,
                  longitude: openLocationOptions.value.longitude,
                  iconPath: targetPath,
                  width: 50,
                  height: 50
                }
              ];
            }, 300);
            uni3.$emit(successEventName.value, new UTSJSONObject({}));
          });
          uni3.$emit(readyEventName.value, new UTSJSONObject({}));
        };
        const getSystemInfo = () => {
          const info = uni3.getWindowInfo();
          safeArea.value.top = info.safeAreaInsets.top;
          safeArea.value.bottom = info.safeAreaInsets.bottom;
          safeArea.value.left = info.safeAreaInsets.left;
          safeArea.value.right = info.safeAreaInsets.right;
          const systemInfo = uni3.getSystemInfoSync();
          const appLanguage = systemInfo.appLanguage;
          language.value = appLanguage;
          const osTheme = systemInfo.osTheme;
          const appTheme = systemInfo.appTheme;
          if (appTheme != null && appTheme != "auto") {
            theme.value = appTheme;
          } else if (osTheme != null) {
            theme.value = osTheme;
          }
          isLandscape.value = systemInfo.deviceOrientation == "landscape";
        };
        const closeDialogPage2 = () => {
          uni3.closeDialogPage(new UTSJSONObject({
            dialogPage: uniPage
          }));
        };
        const back2 = () => {
          closeDialogPage2();
        };
        const getMapContext = () => {
          return uni3.createMapContext(mapId.value, currentInstance2);
        };
        const moveToLocation = () => {
          const mapContext = getMapContext();
          if (mapContext != null) {
            mapContext.moveToLocation(new UTSJSONObject({}));
          }
        };
        const mapReset = () => {
          moveToLocation();
        };
        const navigation = () => {
          const appBaseInfo = uni3.getAppBaseInfo();
          const src = appBaseInfo.packageName;
          const list = ["\u817E\u8BAF\u5730\u56FE", "\u9AD8\u5FB7\u5730\u56FE", "\u767E\u5EA6\u5730\u56FE"];
          uni3.showActionSheet({
            itemList: list,
            success: (res) => {
              let index = res.tapIndex;
              if (index >= 0) {
                let item = list[index];
                try {
                  let url = "";
                  if (item == "\u817E\u8BAF\u5730\u56FE") {
                    url = `qqmap://map/routeplan?type=drive&from=\u6211\u7684\u4F4D\u7F6E&fromcoord=CurrentLocation&to=${openLocationOptions.value.name}&tocoord=${openLocationOptions.value.latitude},${openLocationOptions.value.longitude}&referer=1`;
                  } else if (item == "\u9AD8\u5FB7\u5730\u56FE") {
                    url = `amapuri://route/plan?dlat=${openLocationOptions.value.latitude}&dlon=${openLocationOptions.value.longitude}&dname=${openLocationOptions.value.name}&sname=\u6211\u7684\u4F4D\u7F6E&t=0&sourceApplication=${src}`;
                  } else if (item == "\u767E\u5EA6\u5730\u56FE") {
                    url = `baidumap://map/direction?origin=\u6211\u7684\u4F4D\u7F6E&destination=latlng:${openLocationOptions.value.latitude},${openLocationOptions.value.longitude}|name:${openLocationOptions.value.name}&coord_type=gcj02&mode=driving&src=${src}`;
                  } else if (item == "\u82F9\u679C\u5730\u56FE") {
                  } else if (item == "\u534E\u4E3A\u5730\u56FE") {
                    url = `petalmaps://route?saddr=\u6211\u7684\u4F4D\u7F6E&daddr=${openLocationOptions.value.latitude},${openLocationOptions.value.longitude}&type=drive&utm_source=${src}`;
                  }
                  if (url != "") {
                    try {
                      uniOpenLocation_utsProxy.openSchema(url);
                    } catch (err) {
                      uni3.showToast({
                        title: `\u6253\u5F00\u5931\u8D25${err.message}`,
                        icon: "none"
                      });
                    }
                  }
                } catch (err) {
                  uni3.__f__("error", "at uni_modules/uni-openLocation/pages/openLocation/openLocation.uvue:341", err);
                }
              }
            }
          });
        };
        vue.onLoad((options) => {
          initPageOptions(options);
          getSystemInfo();
        });
        vue.onUnload(() => {
          uni3.$off(optionsEventName.value, null);
          uni3.$off(readyEventName.value, null);
          uni3.$off(successEventName.value, null);
          uni3.$off(failEventName.value, null);
        });
        vue.onResize(() => {
          const systemInfo = uni3.getSystemInfoSync();
          isLandscape.value = systemInfo.deviceOrientation == "landscape";
        });
        return (_ctx = null, _cache = null) => {
          const _component_map = vue.resolveComponent("map");
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({ class: "uni-open-location" }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "uni-open-location-map-box" }), [
              vue.createVNode(_component_map, new UTSJSONObject({
                class: "uni-open-location-map",
                id: vue.unref(mapId),
                ref: vue.unref(mapId),
                latitude: vue.unref(latitude),
                longitude: vue.unref(longitude),
                scale: vue.unref(openLocationOptions).scale,
                markers: vue.unref(markers),
                "layer-style": vue.unref(theme) == "dark" ? "2" : "1",
                "show-compass": false,
                "enable-zoom": true,
                "enable-scroll": true,
                "enable-rotate": false,
                "enable-poi": true,
                "show-location": true
              }), null, 8, ["id", "latitude", "longitude", "scale", "markers", "layer-style"]),
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-open-location-map-reset", [vue.unref(darkClassCom)]]),
                onClick: mapReset
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-open-location-icons uni-open-location-map-reset-icon", [vue.unref(darkClassCom)]])
                }), vue.toDisplayString(vue.unref(icon).position), 3)
              ], 2)
            ]),
            vue.createElementVNode("view", new UTSJSONObject({
              class: "uni-open-location-nav",
              style: vue.normalizeStyle("height:" + (60 + vue.unref(safeArea).top) + "px;")
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-open-location-nav-btn uni-open-location-nav-back-btn", [vue.unref(landscapeClassCom)]]),
                style: vue.normalizeStyle(vue.unref(safeArea).top > 0 ? "top: " + vue.unref(safeArea).top + "px;" : "")
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni-open-location-nav-btn-bg" })),
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "uni-open-location-nav-text uni-open-location-nav-back-text uni-open-location-icons",
                  onClick: back2
                }), vue.toDisplayString(vue.unref(icon).back), 1)
              ], 6)
            ], 4),
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-open-location-footer", [vue.unref(darkClassCom)]])
            }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "uni-open-location-address" }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-open-location-name-text", [vue.unref(darkClassCom)]])
                }), vue.toDisplayString(vue.unref(openLocationOptions).name), 3),
                vue.createElementVNode("text", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-open-location-address-text", [vue.unref(darkClassCom)]])
                }), vue.toDisplayString(vue.unref(openLocationOptions).address), 3)
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "uni-open-location-footer-icon-btns" }), [
                vue.createElementVNode("view", new UTSJSONObject({
                  class: "uni-open-location-footer-icon-btns-item",
                  onClick: navigation
                }), [
                  vue.createElementVNode("view", new UTSJSONObject({
                    class: vue.normalizeClass(["uni-open-location-footer-icon-box", [vue.unref(darkClassCom)]])
                  }), [
                    vue.createElementVNode("text", new UTSJSONObject({ class: "uni-open-location-icons uni-open-location-navigation" }), vue.toDisplayString(vue.unref(icon).navigation), 1)
                  ], 2),
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: vue.normalizeClass(["uni-open-location-footer-btn-text", [vue.unref(darkClassCom)]])
                  }), vue.toDisplayString(vue.unref(languageCom)["navigation"]), 3)
                ])
              ])
            ], 2)
          ]);
        };
      }
    });
    const _style_0 = { "uni-open-location-icons": { "": { "fontFamily": "UniOpenLocationFontFamily", "fontSize": 16, "fontStyle": "normal" } }, "uni-open-location": { "": { "position": "relative", "left": 0, "top": 0, "width": "100%", "height": "100%", "backgroundImage": "none", "backgroundColor": "#f8f8f8", "zIndex": 999, "display": "flex", "flexDirection": "column" } }, "uni-open-location-map-box": { "": { "width": "100%", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "uni-open-location-map": { "": { "width": "100%", "height": "100%" } }, "uni-open-location-map-reset": { "": { "position": "absolute", "left": 20, "bottom": 40, "width": 40, "height": 40, "boxSizing": "border-box", "backgroundColor": "#ffffff", "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20, "pointerEvents": "auto", "boxShadow": "0px 0px 20px 2px rgba(0, 0, 0, 0.3)", "zIndex": 9, "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "uni-open-location-map-reset-icon": { "": { "fontSize": 26, "textAlign": "center", "lineHeight": "40px" } }, "uni-open-location-nav": { "": { "position": "absolute", "top": 0, "left": 0, "width": "100%", "height": 60, "backgroundColor": "rgba(0,0,0,0)", "backgroundImage": "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))" } }, "uni-open-location-nav-btn": { "": { "position": "absolute", "top": 5, "left": 5, "width": 44, "height": 44, "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "uni-open-location-nav-btn-bg": { "": { "width": 20, "height": 20, "backgroundColor": "#cbcbcb", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10, "overflow": "hidden", "position": "absolute" } }, "uni-open-location-nav-back-text": { ".uni-open-location-icons": { "color": "#ffffff", "fontSize": 26 } }, "uni-open-location-footer": { "": { "height": 150, "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "overflow": "hidden", "backgroundColor": "#ffffff", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20 } }, "uni-open-location-address": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "uni-open-location-name-text": { "": { "fontSize": 18, "fontWeight": "bold", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "uni-open-location-address-text": { "": { "fontSize": 16, "marginTop": 10, "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "uni-open-location-footer-icon-btns": { "": { "width": 100, "display": "flex", "flexDirection": "row", "justifyContent": "flex-end" } }, "uni-open-location-footer-icon-btns-item": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "opacity:active": 0.6 } }, "uni-open-location-footer-icon-box": { "": { "backgroundColor": "#f8f8f8", "width": 40, "height": 40, "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": 6 } }, "uni-open-location-navigation": { ".uni-open-location-icons": { "color": "#007aff", "fontSize": 24 } }, "uni-open-location-footer-btn-text": { "": { "fontSize": 12, "textAlign": "center" } }, "uni-open-location-dark": { ".uni-open-location-map-reset": { "backgroundColor": "#111111" }, ".uni-open-location-map-reset-icon": { "color": "#d1d1d1" }, ".uni-open-location-footer": { "backgroundColor": "#181818" }, ".uni-open-location-name-text": { "color": "#fafafa" }, ".uni-open-location-address-text": { "color": "#fafafa" }, ".uni-open-location-footer-icon-box": { "backgroundColor": "#393939" }, ".uni-open-location-footer-btn-text": { "color": "#909090" } }, "@FONT-FACE": [{ "fontFamily": "UniOpenLocationFontFamily", "src": "url('data:font/ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzI8MUlTAAABjAAAAGBjbWFwgOWDPQAAAgQAAAHIZ2x5ZhfxkmkAAAPcAAAD3GhlYWQpzkauAAAA4AAAADZoaGVhB94DhwAAALwAAAAkaG10eBgAAAAAAAHsAAAAGGxvY2EDjAKGAAADzAAAAA5tYXhwARQAfwAAARgAAAAgbmFtZYQALlwAAAe4AAADM3Bvc3Rnid8OAAAK7AAAAGgAAQAAA4D/gABcBAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYAAQAAAAEAAP9wa2RfDzz1AAsEAAAAAADjV4FYAAAAAONXgVgAAP+ABAADgQAAAAgAAgAAAAAAAAABAAAABgBzAAQAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAQEAAGQAAUAAAKJAswAAACPAokCzAAAAesAMgEIAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAwOYc5oMDgP+AAAAD3ACAAAAAAQAAAAAAAAAAAAAAAAACBAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAABQAAAAMAAAAsAAAABAAAAXwAAQAAAAAAdgADAAEAAAAsAAMACgAAAXwABABKAAAADAAIAAIABOYc5kDmUeZT5oP//wAA5hzmQOZR5lPmg///AAAAAAAAAAAAAAABAAwADAAMAAwADAAAAAEAAwACAAQABQAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAATAAAAAAAAAAFAADmHAAA5hwAAAABAADmQAAA5kAAAAADAADmUQAA5lEAAAACAADmUwAA5lMAAAAEAADmgwAA5oMAAAAFAAAAAACkAOoA+gGcAe4AAAAEAAAAAAPfAvYASQBSAGkAcgAAATQmIyIHJy4BJyYrAScmJyYrASIHBg8BIyIHBg8CJiMiBhQWOwEVBhcWFxYXFjsBMjY9ARYXFj8BFRQWOwEyNjc2NzY3Nic+AQUiJjQ2MhYUBiUGJyYvASImNTc+ATMhMhYfARQGIwcGFyImNDYyFhQGA94tIRQSOwQMBAcKXQ0EEA8S1BIPEAQNXQwIBQcFOxIUIS0tIQECEQ0KBQsIEk8QEhIPw5UhEhBPEBYECA4QCAsGHCb9GiEvL0IuLgFtJ1ZPI4kRFhMGEBABwhAQBhMWECMqbyEuLkIvLwGUFR0GqAcbBQdEDgcHBwcORAoHEQyoBh0qHgMpeVkxGQgIGBEsAgEMDAMsERgXEhY+RzdHFwMcxzBEMDBEMOgGAQEEEBgRUBYRERZQERgFB+wwRDAwRDAAAgAA/6oD1gNXABQAKQAAASIHBgcGFhcWFxYyNzY3NjQnJicmBx4BDwEXFhQPAQ4BLwEuAT8BNhYXAgB/bmo+QQFAPmpu/21qP0BAP2ptAQoCCtTTCwkCCiQL6RMDEesLJQoDVkA+am7/bmo+QEA+am7/bmo+QN8LIQvAvQkhDAMLBQnPETMU0goDCwABAAAAAAN/AwAAAwAACQEFEwN+/QQBPH4DAP7ChP7EAAMAAP+ABAADgQAzAGcAcAAAAQYHBgcGBxUUBi4BPQEmJyYnJicjIiY+ATsBNjc2NzY3NTQ2MhYdARYXFhcWFzM2HgEGKwIiJj4BOwEmJyYnJicVFAYiJj0BBgcGBwYHMzYeAQYrARYXFhcWFzU0Nh4BHQE2NzY3NiUiJjQ2MhYUBgOyBjk3WlxtDxUPbF1aNzgGNAsPAQ4LNAY4N1pdbA8VD21cWjc5BjMLDwEPC2eaCg8BDgqaBjIwT1BfDxUPXlFOMTEGmAsPAQ8LmQYxMU5RXhAVDl9QTzAy/ocWHR0rHh4BZmxdWjc4BzMLDwEOCzMHODdaXWwQFA9tXFo3OQY0ChAOCzUGOTdaXG0BDxUQEBQPX1BPMDEHmQsODwqZBzEwT1BfAQ8VEF5RTjExBpgLDwEOC5gGMTFOUUUdKx4eKx0AAAMAAP+BAyoDfgAIACYAMwAABRQWMjY0JiIGExEUBisBIiY1ES4BJyY1NDc2NzYyFxYXFhUUBw4BAQYeAj4BLgMOAQHAJTUmJjUlagYEQAQHR3UhIiknREWiRUQnKSIhdf7lAitPXFAuAS1LW00vVBIZGSMZGQFx/ogEBgYEAXgKUz9BSVFFRCcpKSdERVFJQT9TAR0uUTACLk9cTC0CK0sAAAAAAAASAN4AAQAAAAAAAAATAAAAAQAAAAAAAQAZABMAAQAAAAAAAgAHACwAAQAAAAAAAwAZADMAAQAAAAAABAAZAEwAAQAAAAAABQALAGUAAQAAAAAABgAZAHAAAQAAAAAACgArAIkAAQAAAAAACwATALQAAwABBAkAAAAmAMcAAwABBAkAAQAyAO0AAwABBAkAAgAOAR8AAwABBAkAAwAyAS0AAwABBAkABAAyAV8AAwABBAkABQAWAZEAAwABBAkABgAyAacAAwABBAkACgBWAdkAAwABBAkACwAmAi9DcmVhdGVkIGJ5IGljb25mb250VW5pT3BlbkxvY2F0aW9uRm9udEZhbWlseVJlZ3VsYXJVbmlPcGVuTG9jYXRpb25Gb250RmFtaWx5VW5pT3BlbkxvY2F0aW9uRm9udEZhbWlseVZlcnNpb24gMS4wVW5pT3BlbkxvY2F0aW9uRm9udEZhbWlseUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQAVQBuAGkATwBwAGUAbgBMAG8AYwBhAHQAaQBvAG4ARgBvAG4AdABGAGEAbQBpAGwAeQBSAGUAZwB1AGwAYQByAFUAbgBpAE8AcABlAG4ATABvAGMAYQB0AGkAbwBuAEYAbwBuAHQARgBhAG0AaQBsAHkAVQBuAGkATwBwAGUAbgBMAG8AYwBhAHQAaQBvAG4ARgBvAG4AdABGAGEAbQBpAGwAeQBWAGUAcgBzAGkAbwBuACAAMQAuADAAVQBuAGkATwBwAGUAbgBMAG8AYwBhAHQAaQBvAG4ARgBvAG4AdABGAGEAbQBpAGwAeQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgECAQMBBAEFAQYBBwAGZGFjaGUxE2FuZ2xlLWxlZnQtY2lyY2xlLXMHZGFvaGFuZwdkaW5nd2VpC2RpdHUtdHVkaW5nAAA=') format('truetype')" }] };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const OpenLocation = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:openLocation", OpenLocation, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-picker.js
var uni_picker_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    class SelectedData extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              year: { type: Number, optional: false },
              month: { type: Number, optional: false },
              day: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = SelectedData.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.year = this.__props__.year;
        this.month = this.__props__.month;
        this.day = this.__props__.day;
        delete this.__props__;
      }
    }
    class TimeData extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              h: { type: Number, optional: false },
              m: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = TimeData.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.h = this.__props__.h;
        this.m = this.__props__.m;
        delete this.__props__;
      }
    }
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "picker",
      setup(__props) {
        const show = vue.ref(false);
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const cancelEventName = vue.ref("");
        const selectorChangeEventName = vue.ref("");
        const multiSelectorChangeEventName = vue.ref("");
        const timeChangeEventName = vue.ref("");
        const columnChangeEventName = vue.ref("");
        const mode = vue.ref("selector");
        const range = vue.ref([]);
        const rangeKey = vue.ref("");
        const value = vue.ref([]);
        const eventValue = vue.ref([]);
        const prevMultiValue = vue.ref([]);
        const selected = vue.reactive(new SelectedData({
          year: (/* @__PURE__ */ new Date()).getFullYear(),
          month: (/* @__PURE__ */ new Date()).getMonth() + 1,
          day: (/* @__PURE__ */ new Date()).getDate()
        }));
        const years = vue.ref([]);
        const initMonths = () => {
          const result = [];
          for (let i = 1; i <= 12; i++) {
            result.push(i);
          }
          return result;
        };
        const months = vue.ref(initMonths());
        const days = vue.ref([]);
        const hours = vue.ref([]);
        const minutes = vue.ref([]);
        const fields = vue.ref("day");
        const start = vue.ref([]);
        const end = vue.ref([]);
        const yearRange = vue.ref([]);
        const timer = vue.ref(0);
        const theme = vue.ref("light");
        const maskTopStyle = vue.ref("background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255, 255, 255, 0));");
        const maskBottomStyle = vue.ref("background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, 1));");
        const i18nText = new UTSJSONObject({
          "en": new UTSJSONObject({
            "cancel": "Cancel",
            "confirm": "OK",
            "year": "",
            "month": "",
            "day": "",
            "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
          }),
          "es": new UTSJSONObject({
            "cancel": "Cancelar",
            "confirm": "Aceptar",
            "year": "",
            "month": "",
            "day": "",
            "months": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
          }),
          "fr": new UTSJSONObject({
            "cancel": "Annuler",
            "confirm": "Valider",
            "year": "",
            "month": "",
            "day": "",
            "months": ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Juin", "Juil", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"]
          }),
          "zh-Hans": new UTSJSONObject({
            "cancel": "\u53D6\u6D88",
            "confirm": "\u786E\u5B9A",
            "year": "\u5E74",
            "month": "\u6708",
            "day": "\u65E5",
            "months": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
          }),
          "zh-Hant": new UTSJSONObject({
            "cancel": "\u53D6\u6D88",
            "confirm": "\u78BA\u5B9A",
            "year": "\u5E74",
            "month": "\u6708",
            "day": "\u65E5",
            "months": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
          })
        });
        const language = vue.ref("zh-Hans");
        const instance = vue.getCurrentInstance();
        const formatSingle = (num) => {
          return num.toString().padStart(2, "0");
        };
        const createNumberRange = (start2, end2) => {
          const result = [];
          for (let i = start2; i <= end2; i++) {
            result.push(i);
          }
          return result;
        };
        const createStringRange = (start2, end2) => {
          const result = [];
          for (let i = start2; i <= end2; i++) {
            result.push(i.toString().padStart(2, "0"));
          }
          return result;
        };
        const clamp = (value2, min, max) => {
          if (value2 < min)
            return min;
          if (value2 > max)
            return max;
          return value2;
        };
        const i18nHandle = (key, defaultVal = null) => {
          let langObj = null;
          if (language.value.startsWith("en")) {
            langObj = i18nText["en"];
          } else if (language.value.startsWith("es")) {
            langObj = i18nText["es"];
          } else if (language.value.startsWith("fr")) {
            langObj = i18nText["fr"];
          } else if (language.value.startsWith("zh-Hans")) {
            langObj = i18nText["zh-Hans"];
          } else if (language.value.startsWith("zh-Hant")) {
            langObj = i18nText["zh-Hant"];
          }
          if (langObj != null) {
            const result = langObj[key];
            return result != null ? result : defaultVal;
          }
          return defaultVal;
        };
        const selectedDate = vue.computed(() => {
          const year = selected.year, month = selected.month, day = selected.day;
          switch (fields.value) {
            case "year":
              return `${year}`;
            case "month":
              return `${year}-${formatSingle(month)}`;
            case "day":
              return `${year}-${formatSingle(month)}-${formatSingle(day)}`;
            default:
              return `${year}-${formatSingle(month)}-${formatSingle(day)}`;
          }
        });
        const indicatorStyle = vue.computed(() => {
          const color = theme.value == "dark" ? "#3B3B3B" : "#F5F5F5";
          return `height:50px;background:rgba(255,255,255,0);border-top:1px ${color} solid;border-bottom:1px ${color} solid;`;
        });
        const cancelText = vue.computed(() => {
          return i18nHandle("cancel", "\u53D6\u6D88");
        });
        const confirmText = vue.computed(() => {
          return i18nHandle("confirm", "\u786E\u5B9A");
        });
        const yearText = vue.computed(() => {
          return i18nHandle("year", "\u5E74");
        });
        const monthText = vue.computed(() => {
          return i18nHandle("month", "\u6708");
        });
        const dayText = vue.computed(() => {
          return i18nHandle("day", "\u65E5");
        });
        const monthsText = vue.computed(() => {
          let monthsList = months.value;
          const defaultMonths = i18nText["zh-Hans"]["months"];
          let i18months = i18nHandle("months", defaultMonths);
          let arr = [];
          monthsList.forEach((v) => {
            let index = v - 1;
            arr.push(i18months[index].toString().padStart(2, "0"));
          });
          return arr;
        });
        const getItemText = (item = null) => {
          if (item == null)
            return "";
          if (rangeKey.value != null && rangeKey.value != "") {
            if (typeof item == "object") {
              const jsonStr = UTS.JSON.stringify(item);
              const obj = UTS.JSON.parse(jsonStr);
              const text = obj[rangeKey.value];
              if (text != null) {
                return text.toString();
              }
            }
            return "";
          }
          return item.toString();
        };
        const closeDialog = () => {
          show.value = false;
          clearTimeout(timer.value);
          timer.value = setTimeout(() => {
            var _a;
            const dialogPages = (_a = instance === null || instance === void 0 ? null : instance.proxy) === null || _a === void 0 ? null : _a.$page;
            uni3.closeDialogPage(new UTSJSONObject({
              dialogPage: dialogPages
            }));
          }, 300);
        };
        const getStartYear = () => {
          return parseInt(start.value.length > 0 && start.value[0] != null && start.value[0].length > 0 ? start.value[0] : "1970");
        };
        const getEndYear = () => {
          return parseInt(end.value.length > 0 && end.value[0] != null && end.value[0].length > 0 ? end.value[0] : "2099");
        };
        const calculateRanges = () => {
          const startYear = getStartYear();
          const endYear = getEndYear();
          yearRange.value = [
            years.value.findIndex((y) => {
              return y >= startYear;
            }),
            years.value.findIndex((y) => {
              return y >= endYear;
            })
          ];
        };
        const getYears = () => {
          const startYear = getStartYear();
          const endYear = getEndYear();
          return createNumberRange(startYear, endYear);
        };
        const getMonths = (year) => {
          let startMonth = 1;
          let endMonth = 12;
          if (year == parseInt(start.value[0])) {
            const startValue1 = start.value[1];
            startMonth = startValue1 != null && startValue1.length > 0 ? parseInt(startValue1) : 1;
          }
          if (year == parseInt(end.value[0])) {
            const endValue1 = end.value[1];
            endMonth = endValue1 != null && endValue1.length > 0 ? parseInt(endValue1) : 12;
          }
          return createNumberRange(startMonth, endMonth);
        };
        const getDays = (currentYear, currentMonth) => {
          let startDay = 1;
          let endDay = new Date(currentYear, currentMonth, 0).getDate();
          if (currentYear == parseInt(start.value[0]) && currentMonth == parseInt(start.value[1])) {
            const startValue2 = start.value[2];
            startDay = startValue2 != null && startValue2.length > 0 ? parseInt(startValue2) : 1;
          }
          if (currentYear == parseInt(end.value[0]) && currentMonth == parseInt(end.value[1])) {
            const endValue2 = end.value[2];
            const parsedEndDay = endValue2 != null && endValue2.length > 0 ? parseInt(endValue2) : endDay;
            endDay = Math.min(endDay, parsedEndDay);
          }
          return createNumberRange(startDay, endDay);
        };
        const updateDateColumns = () => {
          years.value = getYears();
          months.value = getMonths(selected.year);
          days.value = getDays(selected.year, selected.month);
        };
        const getHours = () => {
          const startValue0 = start.value[0];
          const sH = parseInt(startValue0 != null && startValue0.length > 0 ? startValue0 : "1");
          const endValue0 = end.value[0];
          const eH = parseInt(endValue0 != null && endValue0.length > 0 ? endValue0 : "12");
          return createStringRange(sH, eH);
        };
        const getMinutes = (hour) => {
          let startMinute = 0;
          let endMinute = 59;
          if (hour == parseInt(start.value[0])) {
            const startValue1 = start.value[1];
            startMinute = startValue1 != null && startValue1.length > 0 ? parseInt(startValue1) : 1;
          }
          if (hour == parseInt(end.value[0])) {
            const endValue1 = end.value[1];
            endMinute = endValue1 != null && endValue1.length > 0 ? parseInt(endValue1) : 12;
          }
          return createStringRange(startMinute, endMinute);
        };
        const updateTimeColumns = () => {
          hours.value = getHours();
          const now = /* @__PURE__ */ new Date();
          const minutesValue = now.getHours();
          minutes.value = getMinutes(minutesValue);
        };
        const adjustTime = (h2, m) => {
          if (start.value.length == 0 || end.value.length == 0)
            return new TimeData({ h: h2, m });
          const startHour = parseInt(start.value[0]);
          const startMinute = parseInt(start.value[1]);
          const endHour = parseInt(end.value[0]);
          const endMinute = parseInt(end.value[1]);
          const current = h2 * 60 + m;
          const startTotal = startHour * 60 + startMinute;
          const endTotal = endHour * 60 + endMinute;
          if (current < startTotal) {
            return new TimeData({ h: startHour, m: startMinute });
          } else if (current > endTotal) {
            return new TimeData({ h: endHour, m: endMinute });
          } else {
            if (h2 == startHour && m < startMinute)
              return new TimeData({ h: h2, m: startMinute });
            if (h2 == endHour && m > endMinute)
              return new TimeData({ h: h2, m: endMinute });
            return new TimeData({ h: h2, m });
          }
        };
        const initTimeValue = (timeValue) => {
          let h2 = parseInt(timeValue[0]);
          let m = parseInt(timeValue[1]);
          const adjusted = adjustTime(h2, m);
          const hStr = adjusted.h.toString().padStart(2, "0");
          const mStr = adjusted.m.toString().padStart(2, "0");
          return [
            hours.value.findIndex((e) => {
              return e == hStr;
            }),
            minutes.value.findIndex((e) => {
              return e == mStr;
            })
          ];
        };
        const switchTheme = (themeValue) => {
          if (themeValue == "light") {
            maskTopStyle.value = "background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255, 255, 255, 0));";
            maskBottomStyle.value = "background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, 1));";
          } else {
            maskTopStyle.value = "background-image: linear-gradient(to bottom, rgba(44, 44, 43, 1), rgba(44, 44, 43, 0));";
            maskBottomStyle.value = "background-image: linear-gradient(to bottom, rgba(44, 44, 43, 0), rgba(44, 44, 43, 1));";
          }
        };
        const confirm = () => {
          const val = eventValue.value;
          const modeValue = mode.value;
          switch (modeValue) {
            case "selector":
              uni3.$emit(selectorChangeEventName.value, val[0]);
              break;
            case "multiSelector":
              uni3.$emit(multiSelectorChangeEventName.value, val);
              break;
            case "time":
              const h_1 = hours.value[val[0]];
              const m = minutes.value[val[1]];
              uni3.$emit(timeChangeEventName.value, `${h_1}:${m}`);
              break;
            case "date":
              uni3.$emit(timeChangeEventName.value, selectedDate.value);
              break;
          }
          closeDialog();
        };
        const close = () => {
          uni3.$emit(cancelEventName.value);
          closeDialog();
        };
        const handleChange = (e) => {
          const val = e.detail.value;
          if (mode.value == "date") {
            let yIdx = val[0];
            let mIdx = val.length >= 2 && val[1] != null ? val[1] : 0;
            let dIdx = val.length == 3 && val[2] != null ? val[2] : 0;
            yIdx = clamp(yIdx, yearRange.value[0], yearRange.value[1]);
            const currentYear = years.value[yIdx];
            let sy = parseInt(start.value[0]);
            let sm = parseInt(start.value[1]);
            let ey = parseInt(end.value[0]);
            let em = parseInt(end.value[1]);
            if (currentYear == sy || currentYear == ey) {
              let newMonths = getMonths(currentYear);
              if (months.value.length !== newMonths.length) {
                calculateRanges();
                const originalMonth = months.value[mIdx];
                mIdx = newMonths.findIndex((month) => {
                  return month === originalMonth;
                });
                mIdx = mIdx < 0 ? 0 : mIdx;
                months.value = newMonths;
              }
            } else {
              if (months.value.length != 12) {
                const nowMonth = months.value[mIdx];
                months.value = getMonths(currentYear);
                calculateRanges();
                mIdx = nowMonth - 1;
              }
            }
            mIdx = clamp(mIdx, 0, months.value.length - 1);
            const monthsValue = months.value[mIdx];
            if (currentYear == sy && monthsValue == sm || currentYear == ey && monthsValue == em) {
              let newDays = getDays(currentYear, monthsValue);
              if (days.value.length != newDays.length) {
                calculateRanges();
                let dayIdx = newDays.length - 1;
                if (currentYear == sy && monthsValue == sm) {
                  dIdx = dIdx - dayIdx < 0 ? 0 : dIdx - dayIdx;
                }
                if (currentYear == ey && monthsValue == em) {
                  dIdx = dayIdx < 0 ? 0 : dayIdx;
                }
                days.value = newDays;
              }
            } else {
              const nowDay = days.value[dIdx];
              days.value = getDays(currentYear, monthsValue);
              calculateRanges();
              dIdx = days.value.findIndex((day) => {
                return day === nowDay;
              });
              dIdx = dIdx < 0 ? 0 : dIdx;
            }
            if (dIdx >= days.value.length) {
              dIdx = 0;
            }
            selected.year = years.value[yIdx];
            selected.month = months.value[mIdx];
            selected.day = days.value[dIdx];
            const indices = fields.value == "year" ? [yIdx] : fields.value == "month" ? [yIdx, mIdx] : [yIdx, mIdx, dIdx];
            value.value = indices;
            eventValue.value = indices.slice();
          } else if (mode.value == "time") {
            let h_idx = val[0];
            let m_idx = val[1];
            let h_2 = parseInt(hours.value[h_idx]);
            let m = parseInt(minutes.value[m_idx]);
            let sh = parseInt(start.value[0]);
            let eh = parseInt(end.value[0]);
            const adjusted = adjustTime(h_2, m);
            h_2 = adjusted.h;
            m = adjusted.m;
            const hStr = h_2.toString().padStart(2, "0");
            const mStr = m.toString().padStart(2, "0");
            const newHIdx = hours.value.findIndex((e2) => {
              return e2 == hStr;
            });
            let newMIdx = minutes.value.findIndex((e2) => {
              return e2 == mStr;
            });
            if (h_2 == sh || h_2 == eh) {
              const newMinutes = getMinutes(h_2);
              if (minutes.value.length !== newMinutes.length) {
                const originalMinute = minutes.value[newMIdx];
                newMIdx = newMinutes.findIndex((m2) => {
                  return m2 === originalMinute;
                });
                newMIdx = newMIdx < 0 ? 0 : newMIdx;
                minutes.value = newMinutes;
              }
            } else {
              if (minutes.value.length != 60) {
                const nowMinutes = minutes.value[newMIdx];
                minutes.value = getMinutes(h_2);
                newMIdx = parseInt(nowMinutes);
              }
            }
            const indices = [newHIdx, newMIdx];
            value.value = indices;
            eventValue.value = indices.slice();
          } else if (mode.value == "multiSelector") {
            const newValue = val;
            const oldValue = prevMultiValue.value;
            newValue.forEach((v, column) => {
              if (oldValue[column] !== v) {
                uni3.$emit(columnChangeEventName.value, column, v);
              }
            });
            prevMultiValue.value = [...newValue];
            eventValue.value = [...newValue];
          } else {
            eventValue.value = val;
          }
        };
        vue.onLoad((options) => {
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          cancelEventName.value = options["cancelEventName"];
          selectorChangeEventName.value = options["selectorChangeEventName"];
          multiSelectorChangeEventName.value = options["multiSelectorChangeEventName"];
          timeChangeEventName.value = options["timeChangeEventName"];
          columnChangeEventName.value = options["columnChangeEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            if (data["mode"] != null) {
              mode.value = data["mode"];
            }
            if (data["range"] != null) {
              range.value = data["range"];
            }
            if (data["rangeKey"] != null) {
              rangeKey.value = data["rangeKey"];
            }
            if (data["selectorValue"] != null) {
              value.value = [data["selectorValue"]];
            }
            if (data["multiSelectorValue"] != null) {
              value.value.length = 0;
              const multiSelectorValue = data["multiSelectorValue"];
              const len = range.value.length;
              const arr = [];
              for (let i = 0; i < len; i++) {
                arr.push(0);
              }
              arr.forEach((_, index) => {
                let val = multiSelectorValue[index] != null ? multiSelectorValue[index] : 0;
                value.value.push(val);
              });
              prevMultiValue.value = value.value.slice();
            }
            if (data["timeValue"] != null) {
              const timeVal = data["timeValue"];
              start.value = data["start"];
              end.value = data["end"];
              updateTimeColumns();
              value.value = initTimeValue(timeVal);
            }
            if (data["dateValue"] != null) {
              const dateValue = data["dateValue"];
              const year = dateValue[0];
              const month = dateValue[1];
              const day = dateValue[2];
              fields.value = data["fields"];
              const startData = data["start"];
              start.value = startData != null ? startData : ["1970", "01", "01"];
              const endData = data["end"];
              end.value = endData != null ? endData : ["2099", "12", "31"];
              const parsedYear = parseInt(year);
              selected.year = parsedYear != null && !isNaN(parsedYear) ? parsedYear : (/* @__PURE__ */ new Date()).getFullYear();
              const parsedMonth = parseInt(month);
              selected.month = parsedMonth != null && !isNaN(parsedMonth) ? parsedMonth : 1;
              const parsedDay = parseInt(day);
              selected.day = parsedDay != null && !isNaN(parsedDay) ? parsedDay : 1;
              selected.year = clamp(selected.year, parseInt(start.value[0]), parseInt(end.value[0]));
              selected.month = clamp(selected.month, 1, 12);
              selected.day = clamp(selected.day, 1, new Date(selected.year, selected.month, 0).getDate());
              updateDateColumns();
              const yIdx = years.value.findIndex((y) => {
                return y == selected.year;
              });
              const mIdx = months.value.findIndex((m) => {
                return m == selected.month;
              });
              const dIdx = days.value.findIndex((d) => {
                return d == selected.day;
              });
              switch (fields.value) {
                case "year":
                  value.value = [yIdx];
                  break;
                case "month":
                  value.value = [yIdx, mIdx];
                  break;
                case "day":
                  value.value = [yIdx, mIdx, dIdx];
                  break;
              }
            }
            eventValue.value = value.value;
            calculateRanges();
          });
          uni3.$emit(readyEventName.value);
          const systemInfo = uni3.getDeviceInfo();
          const appBaseInfo = uni3.getAppBaseInfo();
          const appLanguage = appBaseInfo.appLanguage;
          const osLanguage = systemInfo.osLanguage;
          if (appLanguage != null) {
            language.value = appLanguage;
          } else if (osLanguage != null) {
            language.value = osLanguage;
          }
          const osTheme = systemInfo.osTheme;
          const appTheme = appBaseInfo.appTheme;
          if (appTheme != null) {
            theme.value = appTheme;
          } else if (osTheme != null) {
            theme.value = osTheme;
          }
          if (osTheme != null) {
            theme.value = osTheme;
          }
          switchTheme(theme.value);
          uni3.onAppThemeChange((res) => {
            theme.value = res.appTheme;
            switchTheme(theme.value);
          });
          uni3.onOsThemeChange((res) => {
            theme.value = res.osTheme;
            switchTheme(theme.value);
          });
        });
        vue.onReady(() => {
          setTimeout(() => {
            show.value = true;
          }, 10);
        });
        vue.onUnload(() => {
          uni3.$off(optionsEventName.value, null);
          uni3.$off(cancelEventName.value, null);
          if (timer.value != 0) {
            clearTimeout(timer.value);
          }
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            class: vue.normalizeClass(["uni-picker__container", ["uni-picker-theme--" + vue.unref(theme)]])
          }), [
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-picker__mask", new UTSJSONObject({ "picker__ani-show": vue.unref(show) })]),
              onClick: close
            }), null, 2),
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-picker__inner-box", [vue.unref(show) ? "picker__ani-box-show" : "", "inner-box--" + vue.unref(theme)]])
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(["uni-picker__header-btn", ["header-btn--" + vue.unref(theme)]]),
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                }, ["stop"]))
              }), [
                vue.createElementVNode("text", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-picker__header-btn-cancel", ["header-btn-cannel--" + vue.unref(theme)]]),
                  onClick: close
                }), vue.toDisplayString(vue.unref(cancelText)), 3),
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "uni-picker__header-btn-ok",
                  onClick: confirm
                }), vue.toDisplayString(vue.unref(confirmText)), 1)
              ], 2),
              vue.createElementVNode("view", new UTSJSONObject({ class: "uni-picker__view" }), [
                vue.createElementVNode("picker-view", new UTSJSONObject({
                  style: new UTSJSONObject({ "flex": "1" }),
                  onChange: handleChange,
                  "mask-top-style": vue.unref(maskTopStyle),
                  "mask-bottom-style": vue.unref(maskBottomStyle),
                  indicatorStyle: vue.unref(indicatorStyle),
                  value: vue.unref(value)
                }), [
                  vue.unref(mode) == "selector" ? (vue.openBlock(), vue.createElementBlock("picker-view-column", new UTSJSONObject({ key: 0 }), [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(range), (item = null, selectorIdx) => {
                      return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                        key: selectorIdx,
                        class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                      }), vue.toDisplayString(getItemText(item)), 3);
                    }), 128))
                  ])) : vue.createCommentVNode("", true),
                  vue.unref(mode) == "multiSelector" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, new UTSJSONObject({ key: 1 }), vue.renderList(vue.unref(range), (item = null, multiIdx) => {
                    return vue.openBlock(), vue.createElementBlock("picker-view-column", new UTSJSONObject({ key: multiIdx }), [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (column = null, colIdx) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: colIdx,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(getItemText(column)), 3);
                      }), 128))
                    ]);
                  }), 128)) : vue.createCommentVNode("", true),
                  vue.unref(mode) == "time" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, new UTSJSONObject({ key: 2 }), [
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(hours), (h2, hIdx) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: h2,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(h2), 3);
                      }), 128))
                    ]),
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(minutes), (m, mIdx) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: m,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(m), 3);
                      }), 128))
                    ])
                  ], 64)) : vue.createCommentVNode("", true),
                  vue.unref(mode) == "date" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, new UTSJSONObject({ key: 3 }), [
                    vue.createElementVNode("picker-view-column", null, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(years), (year) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: year,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(year) + vue.toDisplayString(vue.unref(yearText)), 3);
                      }), 128))
                    ]),
                    vue.unref(fields) != "year" ? (vue.openBlock(), vue.createElementBlock("picker-view-column", new UTSJSONObject({ key: 0 }), [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(monthsText), (month) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: month,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(month) + vue.toDisplayString(vue.unref(monthText)), 3);
                      }), 128))
                    ])) : vue.createCommentVNode("", true),
                    vue.unref(fields) == "day" ? (vue.openBlock(), vue.createElementBlock("picker-view-column", new UTSJSONObject({ key: 1 }), [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(days), (day) => {
                        return vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                          key: day,
                          class: vue.normalizeClass(["uni-picker__view-item", ["view-item--" + vue.unref(theme)]])
                        }), vue.toDisplayString(formatSingle(day)) + vue.toDisplayString(vue.unref(dayText)), 3);
                      }), 128))
                    ])) : vue.createCommentVNode("", true)
                  ], 64)) : vue.createCommentVNode("", true)
                ], 40, ["mask-top-style", "mask-bottom-style", "indicatorStyle", "value"])
              ])
            ], 2)
          ], 2);
        };
      }
    });
    const _style_0 = { "uni-picker__container": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "uni-picker__mask": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "backgroundColor": "rgba(0,0,0,0.3)", "opacity": 0, "transitionProperty": "opacity", "transitionDuration": "0.3s" } }, "picker__ani-show": { "": { "opacity": 1 } }, "uni-picker__inner-box": { "": { "position": "absolute", "bottom": 0, "left": 0, "right": 0, "height": 300, "transform": "translateY(100%)", "transitionProperty": "transform", "transitionDuration": "0.2s" } }, "picker__ani-box-show": { "": { "transform": "translateY(0%)" } }, "uni-picker__header-btn": { "": { "flexDirection": "row", "justifyContent": "space-between", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f7f7f7" } }, "uni-picker__header-btn-cancel": { "": { "fontSize": 14, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "rgba(0,0,0,0)" } }, "uni-picker__header-btn-ok": { "": { "fontSize": 14, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "color": "#007aff" } }, "uni-picker__view": { "": { "position": "relative", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "uni-picker__view-item": { "": { "width": "100%", "textAlign": "center", "height": 50, "lineHeight": "50px" } }, "inner-box--light": { "": { "backgroundColor": "#ffffff" } }, "header-btn-cannel--light": { "": { "color": "#000000" } }, "inner-box--dark": { "": { "backgroundColor": "#2C2C2B" } }, "header-btn-cannel--dark": { "": { "color": "#ffffff" } }, "view-item--dark": { "": { "color": "#ffffff" } }, "header-btn--dark": { "": { "borderTopColor": "#3B3B3B", "borderRightColor": "#3B3B3B", "borderBottomColor": "#3B3B3B", "borderLeftColor": "#3B3B3B" } }, "@TRANSITION": { "uni-picker__mask": { "property": "opacity", "duration": "0.3s" }, "uni-picker__inner-box": { "property": "transform", "duration": "0.2s" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const Picker = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:picker", Picker, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-previewImage.js
var uni_previewImage_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    class Speed extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              x: { type: Number, optional: false },
              y: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = Speed.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.x = this.__props__.x;
        this.y = this.__props__.y;
        delete this.__props__;
      }
    }
    class Friction {
      // 构造函数，初始化物体的质量（m）、摩擦力大小（f，这里假设是牛顿单位的力，但乘以1000可能是为了转换为某种特定单位）
      constructor(mass, frictionForce) {
        this.endPosition = null;
        this.lastTimeElapsed = null;
        this.totalTimeToStop = 0;
        this.mass = mass;
        this.frictionForce = 1e3 * frictionForce;
        this.startTime = 0;
        this.velocity = new Speed({ x: 0, y: 0 });
        this.acceleration = new Speed({ x: 0, y: 0 });
        this.startPosition = new Speed({ x: 0, y: 0 });
        this.endPosition = null;
        this.lastTimeElapsed = null;
      }
      // 设置物体的速度
      setVelocity(x, y) {
        const speed = Math.sqrt(x * x + y * y);
        this.velocity = new Speed({ x, y });
        this.acceleration = new Speed({
          x: -this.frictionForce * x / speed,
          y: -this.frictionForce * y / speed
        });
        this.totalTimeToStop = Math.abs(x / this.acceleration.x);
        if (Number.isNaN(this.totalTimeToStop)) {
          this.totalTimeToStop = Math.abs(y / this.acceleration.y);
        }
        if (Number.isNaN(this.totalTimeToStop)) {
          this.totalTimeToStop = 0;
        }
        this.startTime = Date.now();
        this.lastTimeElapsed = null;
      }
      // 设置物体的起始位置
      setStartPosition(x, y) {
        this.startPosition = new Speed({ x, y });
      }
      // 设置物体的结束位置
      setEndPosition(x, y) {
        this.endPosition = { x, y };
      }
      // 计算并返回物体在时间 t 时的位置
      positionAtTime(t = null) {
        if (t == null) {
          t = (Date.now() - this.startTime) / 1e3;
        }
        if (t > this.totalTimeToStop) {
          t = this.totalTimeToStop;
          this.lastTimeElapsed = t;
        }
        var x = this.velocity.x * t + 0.5 * this.acceleration.x * t * t + this.startPosition.x;
        var y = this.velocity.y * t + 0.5 * this.acceleration.y * t * t + this.startPosition.y;
        if (this.acceleration.x > 0 && x < this.endPosition.x || this.acceleration.x < 0 && x > this.endPosition.x) {
          x = this.endPosition.x;
        }
        if (this.acceleration.y > 0 && y < this.endPosition.y || this.acceleration.y < 0 && y > this.endPosition.y) {
          y = this.endPosition.y;
        }
        return new Speed({ x, y });
      }
      // 计算并返回物体在时间 t 时的速度
      velocityAtTime(t = null) {
        if (t == null) {
          t = (Date.now() - this.startTime) / 1e3;
        }
        if (t > this.totalTimeToStop) {
          t = this.totalTimeToStop;
        }
        return new UTSJSONObject({
          dx: this.velocity.x + this.acceleration.x * t,
          dy: this.velocity.y + this.acceleration.y * t
        });
      }
      // 计算物体停止前的位移量（这里的方法名可能不准确，因为 delta 通常表示变化量）
      // 注意：这个方法可能是错误的，因为它基于一个不准确的加速度公式
      displacement() {
        var tx = -1.5 * Math.pow(this.velocity.x, 2) / this.acceleration.x;
        if (Number.isNaN(tx)) {
          tx = 0;
        }
        var ty = -1.5 * Math.pow(this.velocity.y, 2) / this.acceleration.y;
        if (Number.isNaN(ty)) {
          ty = 0;
        }
        return new Speed({
          x: tx,
          y: ty
        });
      }
      // 计算物体停止所需的时间（这个方法实际上是多余的，因为已经在 setVelocity 中计算过了）
      timeToStop() {
        return -this.velocity.x / this.acceleration.x;
      }
      // 检查物体是否已经停止或到达结束位置
      isDone() {
        const currentPosition = this.positionAtTime(null);
        return currentPosition.x === this.endPosition.x && currentPosition.y === this.endPosition.y || this.lastTimeElapsed === this.totalTimeToStop;
      }
      // 重新配置物体的质量和摩擦力大小
      reconfigure(mass, frictionForce) {
        this.mass = mass;
        this.frictionForce = 1e3 * frictionForce;
      }
    }
    const DEFAULT_DISTANCE = 4;
    const FAST_SLIDE_LENGTH = 10;
    class Point extends UTS.UTSType {
      static get$UTSMetadata$() {
        return {
          kind: 2,
          get fields() {
            return {
              x: { type: Number, optional: false },
              y: { type: Number, optional: false }
            };
          }
        };
      }
      constructor(options, metadata = Point.get$UTSMetadata$(), isJSONParse = false) {
        super();
        this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
        this.x = this.__props__.x;
        this.y = this.__props__.y;
        delete this.__props__;
      }
    }
    const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
      __name: "uni-previewImageItem",
      props: {
        src: {
          type: String,
          default: ""
        },
        index: {
          type: Number,
          default: -1
        },
        longPressAction: {
          type: Object
        },
        tips: {
          type: Object
        },
        reset: {
          type: Boolean,
          default: false
        }
      },
      setup(__props) {
        const SAVE_IMAGE_LANGUAGE = new UTSJSONObject({
          "en": new UTSJSONObject({
            save_item: "Save Image",
            save_success: "Image saved to album successfully",
            save_fail: "Failed to save image to album"
          }),
          "zh-Hans": new UTSJSONObject({
            save_item: "\u4FDD\u5B58\u56FE\u7247",
            save_success: "\u4FDD\u5B58\u56FE\u7247\u5230\u76F8\u518C\u6210\u529F",
            save_fail: "\u4FDD\u5B58\u56FE\u7247\u5230\u76F8\u518C\u5931\u8D25"
          }),
          "zh-Hant": new UTSJSONObject({
            save_item: "\u5132\u5B58\u5716\u7247",
            save_success: "\u5716\u7247\u5132\u5B58\u5230\u76F8\u7C3F\u6210\u529F",
            save_fail: "\u5716\u7247\u5132\u5B58\u5230\u76F8\u7C3F\u5931\u6557"
          })
        });
        const props = __props;
        const imageView = vue.ref(null);
        const mask = vue.ref(null);
        const imageMode = vue.ref("aspectFit");
        const lastTouchEndTime = vue.ref(0);
        const srcPath = vue.ref("");
        const screenWidth = vue.ref(0);
        const screenHeight = vue.ref(0);
        const scaleSize = vue.ref(1);
        const lastSlideTouch = vue.ref(null);
        const imageTop = vue.ref(0);
        const imageMarginTop = vue.ref(0);
        const imageLeft = vue.ref(0);
        const withAnimation = vue.ref(false);
        const imageHeight = vue.ref(0);
        const historyX = vue.ref([0, 0]);
        const historyY = vue.ref([0, 0]);
        const historyT = vue.ref([0, 0]);
        const _friction = vue.ref(new Friction(1, 2));
        const requestId = vue.ref(-1);
        const needExecLongPress = vue.ref(false);
        const downPoint = vue.ref(null);
        const longPressActionTimeoutId = vue.ref(-1);
        const inScaleMode = vue.ref(false);
        const scaleGestureActive = vue.ref(false);
        const delegateMoveToParent = vue.ref(false);
        const inDoubleTapMode = vue.ref(false);
        const startTimestamp = vue.ref(0);
        const clickTimeoutId = vue.ref(-1);
        const transformOrigin = vue.ref([0, 0]);
        const loadingFinished = vue.ref(false);
        const devicePixelRatio = vue.ref(0);
        const loadError = vue.ref(false);
        const language = vue.ref("zh-Hans");
        const isPreviewImaqeClosed = vue.ref(false);
        const instance = vue.getCurrentInstance().proxy;
        const getSrcLocalPath = (url) => {
          srcPath.value = url;
        };
        vue.watch(() => {
          return props.src;
        }, (newValue, oldValue) => {
          if (newValue != "") {
            getSrcLocalPath(newValue);
          } else {
            loadingFinished.value = true;
            loadError.value = true;
          }
        }, { immediate: true });
        function getSaveLanguageString(name) {
          var value = language.value;
          if (value.startsWith("en")) {
            value = "en";
          } else if (value.startsWith("zh-Hans")) {
            value = "zh-Hans";
          } else if (value.startsWith("zh-Hant")) {
            value = "zh-Hant";
          }
          var object = SAVE_IMAGE_LANGUAGE[value];
          if (object != null) {
            return object[name];
          } else {
            return SAVE_IMAGE_LANGUAGE["en"][name];
          }
        }
        vue.onMounted(() => {
          var dpr = uni3.getDeviceInfo({ filter: ["devicePixelRatio"] }).devicePixelRatio;
          if (dpr == null) {
            devicePixelRatio.value = 1;
          } else {
            devicePixelRatio.value = dpr;
          }
          const systemInfo = uni3.getSystemInfoSync();
          language.value = systemInfo.appLanguage;
        });
        const previewImageError = (e) => {
          var _a;
          (_a = mask.value) === null || _a === void 0 ? null : _a.style.setProperty("point-events", "none");
          loadingFinished.value = true;
          loadError.value = true;
        };
        const isNetPath = (url) => {
          if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("rtmp://") || url.startsWith("rtsp://")) {
            return true;
          }
          return false;
        };
        const saveImageToAlbum = (url) => {
          uni3.saveImageToPhotosAlbum({
            filePath: url,
            success() {
              uni3.showToast({
                position: "bottom",
                title: getSaveLanguageString("save_success")
              });
            },
            fail(e) {
              uni3.showToast({
                position: "bottom",
                title: getSaveLanguageString("save_fail")
              });
            }
          });
        };
        const onLongPressAction = () => {
          var longPressAction = props.longPressAction;
          if (longPressAction == null || longPressAction.itemList.length == 0) {
            longPressAction = {
              itemList: [getSaveLanguageString("save_item")],
              success(e) {
                if (isNetPath(srcPath.value)) {
                  uni3.downloadFile({
                    url: srcPath.value,
                    success(e2) {
                      saveImageToAlbum(e2.tempFilePath);
                    },
                    fail(e2) {
                      uni3.showToast({
                        position: "bottom",
                        title: getSaveLanguageString("save_fail")
                      });
                    }
                  });
                } else {
                  saveImageToAlbum(srcPath.value);
                }
              }
            };
          }
          if (longPressAction != null && longPressAction.itemList.length > 0) {
            uni3.showActionSheet({
              itemList: longPressAction.itemList,
              itemColor: longPressAction.itemColor,
              success: (e) => {
                var _a, _b;
                (_b = (_a = longPressAction).success) === null || _b === void 0 ? null : _b.call(_a, { tapIndex: e.tapIndex, index: props.index });
                uni3.$emit("__UNIPREVIEWLONGPRESS", new UTSJSONObject({ type: "success", tapIndex: e.tapIndex, index: props.index }));
              },
              fail() {
                var _a, _b;
                (_b = (_a = longPressAction).fail) === null || _b === void 0 ? null : _b.call(_a, new PreviewImageErrorImpl(1101001, UniErrorPreviewImage));
                uni3.$emit("__UNIPREVIEWLONGPRESS", new UTSJSONObject({ type: "fail", tapIndex: -1, index: -1 }));
              }
            });
          }
        };
        const preventDefaultScall = (e = null) => {
          e === null || e === void 0 ? null : e.preventDefault();
          e === null || e === void 0 ? null : e.stopPropagation();
        };
        const onInterceptTouchEvent = (e = null) => {
          if (inScaleMode.value || scaleGestureActive.value) {
            preventDefaultScall(e);
            return null;
          }
          clearTimeout(clickTimeoutId.value);
        };
        const shouldDelegateMoveToParent = (slideX, slideY) => {
          if (scaleSize.value <= 1 || screenWidth.value <= 0) {
            return false;
          }
          if (Math.abs(slideX) <= Math.abs(slideY)) {
            return false;
          }
          var scrollWidthLength = screenWidth.value * (scaleSize.value - 1);
          var scrollRadio = transformOrigin.value[0] / screenWidth.value;
          var maxLeft = scrollWidthLength * scrollRadio;
          var minLeft = -(scrollWidthLength * (1 - scrollRadio));
          return imageLeft.value >= maxLeft && slideX > 0 || imageLeft.value <= minLeft && slideX < 0;
        };
        const delegateCurrentMoveToParent = (e, currentSlideTouch) => {
          inScaleMode.value = false;
          scaleGestureActive.value = false;
          delegateMoveToParent.value = true;
          needExecLongPress.value = false;
          clearTimeout(longPressActionTimeoutId.value);
          lastSlideTouch.value = e.touches;
          downPoint.value = new Point({ x: currentSlideTouch.clientX, y: currentSlideTouch.clientY });
          historyX.value = [imageLeft.value, imageLeft.value];
          historyY.value = [imageTop.value, imageTop.value];
          historyT.value = [e.timeStamp, e.timeStamp];
          onInterceptTouchEvent(e);
        };
        const caculatorTransformOrigin = (e = null) => {
          var originalCenterX;
          var originalCenterY;
          if (e != null) {
            if (e.touches.length >= 2) {
              var point1 = e.touches[0];
              var point2 = e.touches[1];
              originalCenterX = (point1.clientX + point2.clientX) / 2;
              originalCenterY = (point1.clientY + point2.clientY) / 2;
              if (scaleSize.value * imageHeight.value < screenHeight.value) {
                originalCenterY = screenHeight.value / 2;
              }
              if (imageHeight.value > screenHeight.value && scaleSize.value >= 1) {
                originalCenterY = originalCenterY - imageTop.value / scaleSize.value;
              }
              var oldTransformOrigin = [transformOrigin.value[0], transformOrigin.value[1]];
              transformOrigin.value = [originalCenterX, originalCenterY];
              if (oldTransformOrigin[0] != 0 && oldTransformOrigin[1] != 1) {
                imageLeft.value = imageLeft.value + (scaleSize.value - 1) * (originalCenterX - oldTransformOrigin[0]);
                imageTop.value = imageTop.value + (scaleSize.value - 1) * (originalCenterY - oldTransformOrigin[1]);
              }
            } else if (e.type == "touchend") {
              if (inDoubleTapMode.value && scaleSize.value == 2 && lastSlideTouch.value != null && lastSlideTouch.value.length == 1) {
                originalCenterX = lastSlideTouch.value[0].clientX;
                originalCenterY = lastSlideTouch.value[0].clientY;
                if (scaleSize.value * imageHeight.value < screenHeight.value) {
                  originalCenterY = screenHeight.value / 2;
                }
                if (imageHeight.value > screenHeight.value) {
                  originalCenterY = originalCenterY - imageTop.value;
                }
                transformOrigin.value = [originalCenterX, originalCenterY];
              }
            }
          }
        };
        const updateStyle = (e = null, xDistance, yDistance) => {
          var _a, _b, _c;
          caculatorTransformOrigin(e);
          if (1 < scaleSize.value) {
            var scrollWidthLength = screenWidth.value * (scaleSize.value - 1);
            var scrollRadio = transformOrigin.value[0] / screenWidth.value;
            if (imageLeft.value > scrollWidthLength * scrollRadio) {
              imageLeft.value = scrollWidthLength * scrollRadio;
              onInterceptTouchEvent(e);
            } else if (imageLeft.value < -(scrollWidthLength * (1 - scrollRadio))) {
              imageLeft.value = -(scrollWidthLength * (1 - scrollRadio));
              onInterceptTouchEvent(e);
            } else {
              preventDefaultScall(e);
            }
          } else {
            imageLeft.value = 0;
            onInterceptTouchEvent(e);
          }
          if (screenHeight.value < imageHeight.value * scaleSize.value) {
            var topMargin = (transformOrigin.value[1] - (imageMarginTop.value > 0 ? imageMarginTop.value : 0)) * scaleSize.value - transformOrigin.value[1];
            var bottomMargin = (imageHeight.value + (imageMarginTop.value > 0 ? imageMarginTop.value : 0) - transformOrigin.value[1]) * scaleSize.value - (screenHeight.value - transformOrigin.value[1]);
            if (imageTop.value > topMargin) {
              imageTop.value = topMargin;
            } else if (imageTop.value < -bottomMargin) {
              imageTop.value = -bottomMargin;
            } else {
              if (!Number.isNaN(yDistance) && Math.abs(yDistance - downPoint.value.y) > DEFAULT_DISTANCE) {
                preventDefaultScall(e);
              }
            }
          } else {
            if (!inScaleMode.value) {
              imageTop.value = 0;
              if (!Number.isNaN(yDistance) && Math.abs(yDistance - downPoint.value.y) > DEFAULT_DISTANCE) {
                preventDefaultScall(e);
              }
            } else {
              preventDefaultScall(e);
            }
          }
          (_a = imageView.value) === null || _a === void 0 ? null : _a.style.setProperty("transition-duration", withAnimation.value ? "200ms" : "0ms");
          (_b = imageView.value) === null || _b === void 0 ? null : _b.style.setProperty("transform-origin", transformOrigin.value[0] + "px " + transformOrigin.value[1] + "px");
          (_c = imageView.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(" + imageLeft.value + "px," + imageTop.value + "px) scale(" + scaleSize.value + ")");
        };
        vue.watch(() => {
          return props.reset;
        }, (newValue, oldValue) => {
          if (newValue != oldValue) {
            if (imageView.value != null && scaleSize.value != 1) {
              scaleSize.value = 1;
              imageLeft.value = 0;
              imageTop.value = 0;
              withAnimation.value = false;
              updateStyle(null, NaN, NaN);
            }
          }
        }, { immediate: true });
        function doTransform(callback) {
          requestId.value = requestAnimationFrame(() => {
            callback();
            if (!_friction.value.isDone())
              doTransform(callback);
          });
        }
        function closePreviewImage() {
          isPreviewImaqeClosed.value = true;
          uni3.$emit("__UNIPREVIEWIMAGECLOSE");
        }
        const onstart = (e) => {
          if (isPreviewImaqeClosed.value)
            return null;
          inScaleMode.value = false;
          scaleGestureActive.value = false;
          delegateMoveToParent.value = false;
          withAnimation.value = false;
          cancelAnimationFrame(requestId.value);
          clearTimeout(clickTimeoutId.value);
          lastSlideTouch.value = e.touches;
          historyX.value = [0, 0];
          historyY.value = [0, 0];
          historyT.value = [0, 0];
          downPoint.value = new Point({ x: e.touches[0].clientX, y: e.touches[0].clientY });
          inDoubleTapMode.value = false;
          startTimestamp.value = e.timeStamp;
          e.preventDefault();
          needExecLongPress.value = true;
          longPressActionTimeoutId.value = setTimeout(() => {
            if (needExecLongPress.value) {
              onLongPressAction();
            }
          }, 350);
        };
        const onmove = (e) => {
          if (isPreviewImaqeClosed.value)
            return null;
          if (e.touches.length == 1) {
            var currentSlideTouch = e.touches[0];
            if (delegateMoveToParent.value) {
              needExecLongPress.value = false;
              clearTimeout(longPressActionTimeoutId.value);
              lastSlideTouch.value = e.touches;
              downPoint.value = new Point({ x: currentSlideTouch.clientX, y: currentSlideTouch.clientY });
              historyX.value = [imageLeft.value, imageLeft.value];
              historyY.value = [imageTop.value, imageTop.value];
              historyT.value = [e.timeStamp, e.timeStamp];
              onInterceptTouchEvent(e);
              return null;
            }
            if (lastSlideTouch.value != null && lastSlideTouch.value.length != 1) {
              lastSlideTouch.value = e.touches;
              downPoint.value = new Point({ x: currentSlideTouch.clientX, y: currentSlideTouch.clientY });
              historyX.value = [imageLeft.value, imageLeft.value];
              historyY.value = [imageTop.value, imageTop.value];
              historyT.value = [e.timeStamp, e.timeStamp];
              if (scaleSize.value > 1 || inScaleMode.value || scaleGestureActive.value) {
                preventDefaultScall(e);
              } else {
                onInterceptTouchEvent(e);
              }
              return null;
            }
            if (lastSlideTouch.value != null) {
              var slideX = currentSlideTouch.clientX - lastSlideTouch.value[0].clientX;
              var slideY = currentSlideTouch.clientY - lastSlideTouch.value[0].clientY;
              if (shouldDelegateMoveToParent(slideX, slideY)) {
                delegateCurrentMoveToParent(e, currentSlideTouch);
                return null;
              }
              var downX = Math.abs(currentSlideTouch.clientX - downPoint.value.x);
              var downY = Math.abs(currentSlideTouch.clientY - downPoint.value.y);
              if (downX > DEFAULT_DISTANCE || downY > DEFAULT_DISTANCE) {
                needExecLongPress.value = false;
                clearTimeout(longPressActionTimeoutId.value);
                if (scaleSize.value > 1 || imageHeight.value > screenHeight.value) {
                  imageLeft.value = imageLeft.value + slideX;
                  imageTop.value = imageTop.value + slideY;
                  updateStyle(e, currentSlideTouch.clientX, currentSlideTouch.clientY);
                } else {
                  onInterceptTouchEvent(e);
                }
                UTS.arrayShift(historyX.value);
                historyX.value.push(imageLeft.value);
                UTS.arrayShift(historyY.value);
                historyY.value.push(imageTop.value);
                UTS.arrayShift(historyT.value);
                historyT.value.push(e.timeStamp);
                lastSlideTouch.value = e.touches;
                needExecLongPress.value = false;
              } else {
                needExecLongPress.value = true;
              }
            } else {
              lastSlideTouch.value = e.touches;
            }
          } else if (e.touches.length >= 2) {
            inScaleMode.value = true;
            scaleGestureActive.value = true;
            needExecLongPress.value = false;
            clearTimeout(longPressActionTimeoutId.value);
            var currentFirstTouch = e.touches[0];
            var currentSecondTouch = e.touches[1];
            var currentXSlideLength = currentFirstTouch.clientX - currentSecondTouch.clientX;
            var currentYSlideLength = currentFirstTouch.clientY - currentSecondTouch.clientY;
            var currentLongSideLength = Math.sqrt(currentXSlideLength * currentXSlideLength + currentYSlideLength * currentYSlideLength);
            if (lastSlideTouch.value != null && lastSlideTouch.value.length >= 2) {
              var lastFirstTouch = lastSlideTouch.value[0];
              var lastSecondTouch = lastSlideTouch.value[1];
              var lastXSlideLength = lastFirstTouch.clientX - lastSecondTouch.clientX;
              var lastYSlideLength = lastFirstTouch.clientY - lastSecondTouch.clientY;
              var lastLongSideLength = Math.sqrt(lastXSlideLength * lastXSlideLength + lastYSlideLength * lastYSlideLength);
              if (currentLongSideLength != lastLongSideLength) {
                scaleSize.value = scaleSize.value * (currentLongSideLength / lastLongSideLength);
                updateStyle(e, NaN, NaN);
              }
            }
            preventDefaultScall(e);
            needExecLongPress.value = false;
            lastSlideTouch.value = e.touches;
          }
        };
        const onend = (e) => {
          if (isPreviewImaqeClosed.value)
            return null;
          const wasScaleMode = inScaleMode.value || scaleGestureActive.value;
          inScaleMode.value = false;
          needExecLongPress.value = false;
          clearTimeout(longPressActionTimeoutId.value);
          var current = Date.now();
          var handledScaleBounce = false;
          if (historyY.value[0] == 0 && historyY.value[1] == 0 && historyX.value[0] == 0 && historyX.value[1] == 0) {
            withAnimation.value = true;
            if (current - lastTouchEndTime.value < 350) {
              if (lastSlideTouch.value != null && lastSlideTouch.value.length > 0) {
                var downX = Math.abs(lastSlideTouch.value[0].clientX - downPoint.value.x);
                var downY = Math.abs(lastSlideTouch.value[0].clientY - downPoint.value.y);
                if (downX > FAST_SLIDE_LENGTH || downY > FAST_SLIDE_LENGTH) {
                  lastSlideTouch.value = null;
                  return null;
                }
              }
              if (scaleSize.value > 1) {
                scaleSize.value = 1;
                imageLeft.value = 0;
                updateStyle(e, NaN, NaN);
              } else if (scaleSize.value == 1) {
                scaleSize.value = 2;
                inDoubleTapMode.value = true;
                updateStyle(e, NaN, NaN);
              }
            } else if (e.touches.length == 0) {
              if (lastSlideTouch.value != null && lastSlideTouch.value.length == 1) {
                if (e.timeStamp - startTimestamp.value < 160) {
                  if (lastSlideTouch.value != null) {
                    var downX = Math.abs(lastSlideTouch.value[0].clientX - downPoint.value.x);
                    var downY = Math.abs(lastSlideTouch.value[0].clientY - downPoint.value.y);
                    if (downX < FAST_SLIDE_LENGTH && downY < FAST_SLIDE_LENGTH) {
                      clickTimeoutId.value = setTimeout(() => {
                        closePreviewImage();
                      }, 200);
                    }
                  } else {
                    clickTimeoutId.value = setTimeout(() => {
                      closePreviewImage();
                    }, 200);
                  }
                }
              }
              if (scaleSize.value > 3) {
                withAnimation.value = true;
                scaleSize.value = 3;
                updateStyle(e, NaN, NaN);
                handledScaleBounce = true;
              } else if (scaleSize.value < 1) {
                if (wasScaleMode) {
                  withAnimation.value = true;
                }
                scaleSize.value = 1;
                imageLeft.value = 0;
                updateStyle(e, NaN, NaN);
                handledScaleBounce = true;
              }
              lastTouchEndTime.value = current;
            }
          } else {
            if (wasScaleMode) {
              if (scaleSize.value > 3) {
                withAnimation.value = true;
                scaleSize.value = 3;
                updateStyle(e, NaN, NaN);
                handledScaleBounce = true;
              } else if (scaleSize.value < 1) {
                withAnimation.value = true;
                scaleSize.value = 1;
                imageLeft.value = 0;
                updateStyle(e, NaN, NaN);
                handledScaleBounce = true;
              }
              lastTouchEndTime.value = current;
            }
            if (!handledScaleBounce) {
              var deltaTime = historyT.value[1] - historyT.value[0];
              var xv = 0;
              var yv = 0;
              if (deltaTime > 0) {
                xv = 1e3 * (historyX.value[1] - historyX.value[0]) / deltaTime;
                yv = 1e3 * (historyY.value[1] - historyY.value[0]) / deltaTime;
              }
              if (!Number.isFinite(xv)) {
                xv = 0;
              }
              if (!Number.isFinite(yv)) {
                yv = 0;
              }
              _friction.value.setVelocity(xv, yv);
              _friction.value.setStartPosition(imageLeft.value, imageTop.value);
              const x0 = _friction.value.displacement().x;
              const y0 = _friction.value.displacement().y;
              var x = imageLeft.value;
              if (!Number.isNaN(x0))
                x = x0 + imageLeft.value;
              var y = imageTop.value;
              if (!Number.isNaN(y0))
                y = y0 + imageTop.value;
              _friction.value.setEndPosition(x, y);
              doTransform(() => {
                var p = _friction.value.positionAtTime(null);
                if (Number.isNaN(p.x) && Number.isNaN(p.y)) {
                  cancelAnimationFrame(requestId.value);
                }
                if (!Number.isNaN(p.x))
                  imageLeft.value = p.x;
                if (!Number.isNaN(p.y))
                  imageTop.value = p.y;
                updateStyle(e, NaN, NaN);
              });
            }
          }
          lastSlideTouch.value = null;
          scaleGestureActive.value = false;
          delegateMoveToParent.value = false;
        };
        const oncancel = (e) => {
          onend(e);
          clearTimeout(clickTimeoutId.value);
        };
        const caculatorImageSize = (imgWidth, imgHeight) => {
          var _a;
          var scaleImageSize = imgHeight / (imgWidth / screenWidth.value);
          if (scaleImageSize > screenHeight.value) {
            imageHeight.value = scaleImageSize;
            imageMode.value = "aspectFill";
            (_a = imageView.value) === null || _a === void 0 ? null : _a.style.setProperty("height", scaleImageSize + "px");
          } else {
            imageMode.value = "aspectFit";
          }
          imageMarginTop.value = (screenHeight.value - scaleImageSize) / 2;
          imageHeight.value = scaleImageSize;
        };
        const onImageLoad = (e) => {
          var _a;
          (_a = mask.value) === null || _a === void 0 ? null : _a.style.setProperty("point-events", "none");
          uni3.createSelectorQuery().in(instance).select(".uni-preview-image-item").boundingClientRect().exec((ret) => {
            if (ret.length == 1) {
              var rect = imageView.value.getBoundingClientRect();
              screenHeight.value = rect.height;
              screenWidth.value = rect.width;
              if (devicePixelRatio.value == 0) {
                var dpr = uni3.getDeviceInfo({ filter: ["devicePixelRatio"] }).devicePixelRatio;
                if (dpr == null) {
                  devicePixelRatio.value = 1;
                } else {
                  devicePixelRatio.value = dpr;
                }
              }
              caculatorImageSize(e.detail.width / devicePixelRatio.value, e.detail.height / devicePixelRatio.value);
            }
          });
          loadingFinished.value = true;
        };
        const reloadImage = (e) => {
          var _a;
          if (srcPath.value == "") {
            loadingFinished.value = false;
            loadError.value = false;
            setTimeout(() => {
              loadError.value = true;
              loadingFinished.value = true;
            }, 1e3);
            e.stopPropagation();
            return null;
          }
          (_a = mask.value) === null || _a === void 0 ? null : _a.style.setProperty("point-events", "none");
          loadingFinished.value = false;
          loadError.value = false;
          var tempPath = srcPath.value + "";
          srcPath.value = "";
          setTimeout(() => {
            srcPath.value = tempPath;
          }, 100);
          e.stopPropagation();
        };
        return (_ctx = null, _cache = null) => {
          const _component_loading = vue.resolveComponent("loading");
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            style: new UTSJSONObject({ "flex": "1" }),
            class: "uni-preview-image-item-background"
          }), [
            vue.createElementVNode("image", new UTSJSONObject({
              ref_key: "imageView",
              ref: imageView,
              mode: imageMode.value,
              class: "uni-preview-image-item",
              src: srcPath.value,
              onError: previewImageError,
              onLoad: onImageLoad
            }), null, 40, ["mode", "src"]),
            vue.createElementVNode("view", new UTSJSONObject({
              ref_key: "mask",
              ref: mask,
              class: "uni-preview-image-patch",
              onTouchstart: onstart,
              onTouchmove: onmove,
              onTouchend: onend,
              onTouchcancel: oncancel
            }), null, 544),
            !loadingFinished.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 0,
              class: "uni-preview-image-loading"
            }), [
              vue.createVNode(_component_loading, new UTSJSONObject({ style: new UTSJSONObject({ "margin": "auto", "width": "54px", "height": "54px", "border-color": "#d3d3d3" }) }))
            ])) : vue.createCommentVNode("", true),
            loadError.value ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 1,
              style: new UTSJSONObject({ "align-items": "center", "justify-content": "center", "position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0" }),
              onClick: closePreviewImage
            }), [
              vue.createElementVNode("image", new UTSJSONObject({
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMAf/kN/BOp7IxPBsMz9NzMRi0h4L7Q5pFjnhfVmIN3WUo6W6NUPrVtJ0yhcR84ApfrAAADTElEQVR42u3b3XaiMBSG4V1CABFBhFr/f1q1Tmf2/d/eHJoYrNJvu1a6Vp7zzrwthAAJFARBEARBEARBEPxmqtiuk3bZTJmnzbJN1ttC0SNeSJ76k71yhyrbqbs9LF4zG8Z8U9TO1Pc9wkG7JOI7Rh/jb3pkg96X/JBqcKtHNGhW8sOW284eyaD9K/cyrN0ewSA9577iTDk9YkGDlH+gOVo9ckH5G/9MvHF7mGCTin/spK978KAiZUA5sXvwoPGIO8XVfDM4TxZEi0k92HzdGoTTwuzBg7ZR5//yNlDOQDysUu4wOlo9DPbE7Ihuzg354RSzI2a5oHHk/sLZgr5xnrs/IhdUjNyrnb47KJOnBU3SrvngvnH5nKC8Ylv0iVxJ8aDrf7Us6GGHVD5owLZW9TrcpXSQTtmS5NTLohIOmrNlRX2pRjRoz5aEenth0SB7ampzrAcPmtnjS4E9eJA1RqIC7MGD3tn0ifbgQUtrvkB78KCddcBqtAcPStiQoT14kIrM+x8t28PomM/gHjxoaJ5BC7QHD1IxX3zAPXjQHzaM4R48KDOfd8R7GJtX38R7GDuFBnAPHlTwRazFexiaWCvywNoImpMHzIlsQx4YWue0B8xRX5MHGiNoQh5IjSBNHoiMoJw84F2Qd4fMu5Pau2Hv3YXRu6nDu8nVu9sP5wYNpmNz4MK3sLiD9dQA3+TjVnxxIvgxCDflixeSfVCEX+4cCX2Ulr2wpUT4ywbQv8i+sOGvY0AZO6MWfWEF0SPziOX4UecMHfPOVQR/6QmoYzacyQC/FoYHCLdkwV+c97dh045M+NJCf3UE/KnhxReXbhi46qPLU668ZeAMghfwXAkDo1V+iZO+2LImBL4InCdsKXMC4MvkumVLfCQAvpGgKNm2IQC81YI+I7adCABvRqmHfKXRBAC36+gs4ivpmQDYhqbFeuT+yJ4AyJYvOnZtJo6AORXZFKfGqyl3GDn5z942qCf14O/qNeZOKXS85DdWNjUB5LeetppA+OZc4AHh6duXkdNZfoM3rxQBxLfAV8j0Lv+RQHkggPxnFDMCSH9oEid7Akh/inOaaQKIfqwUV28HRTD8c660aYYf6/e9oiAIgiAIgiAIguAX+w9i21DdU9TtnwAAAABJRU5ErkJggg==",
                onClick: reloadImage,
                mode: "aspectFit",
                style: new UTSJSONObject({ "width": "70px", "height": "70px" })
              }))
            ])) : vue.createCommentVNode("", true)
          ]);
        };
      }
    });
    const _style_0$1 = { "uni-preview-image-item": { "": { "width": "100%", "height": "100%", "transitionProperty": "transform", "transitionDuration": "0ms" } }, "uni-preview-image-patch": { "": { "width": "100%", "height": "100%", "backgroundColor": "rgba(0,0,0,0)", "position": "absolute" } }, "uni-preview-image-loading": { "": { "position": "absolute", "top": 0, "bottom": 0, "left": 0, "right": 0, "pointerEvents": "none" } }, "uni-preview-image-item-background": { "": { "backgroundColor": "#000000" } }, "uni-preview-image-tips-retry": { "": { "color": "#0000FF", "fontSize": 18, "marginTop": 16, "textDecorationLine": "underline" } }, "uni-preview-image-tips-error": { "": { "fontSize": 18, "color": "#FF0000" } }, "@TRANSITION": { "uni-preview-image-item": { "property": "transform", "duration": "0ms" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const uniPreviewImageItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "previewImage",
      setup(__props) {
        const urls = vue.ref(null);
        const current = vue.ref(0);
        const resetCurrent = vue.ref(0);
        const loop = vue.ref(false);
        const disableTouch = vue.ref(false);
        const numberIndicator = vue.ref("");
        const indicatorIndex = vue.ref(0);
        const indicator = vue.ref("number");
        const longPressAction = vue.ref(null);
        const tips = vue.ref(null);
        const pageInstance = vue.getCurrentInstance().proxy;
        const uniPageInstance = pageInstance.$page;
        vue.onUnload(() => {
          uni3.$off("__UNIPREVIEWIMAGE");
          uni3.$off("__UNIPREVIEWIMAGECLOSE");
          uni3.$off("__UNIPREVIEWLONGPRESS");
          uni3.$off("__CLOSEPREVIEWIMAGE");
        });
        const __onPreviewLoadCallback = (result) => {
          urls.value = result["urls"];
          if (result["current"] != null) {
            var c = result["current"];
            if (typeof c == "number") {
              var d = c;
              if (d < 0 || d > urls.value.length)
                d = 0;
              current.value = d;
            } else if (typeof c == "string") {
              var index = urls.value.indexOf(c);
              if (index < 0) {
                index = 0;
              }
              current.value = index;
            }
            indicatorIndex.value = current.value;
            resetCurrent.value = current.value;
          }
          if (result["indicator"] != null) {
            indicator.value = result["indicator"];
          }
          if (result["longPressActions"] != null) {
            longPressAction.value = {
              itemList: result["longPressActions"]["itemList"],
              itemColor: result["longPressActions"]["itemColor"]
            };
          }
          if (result["loop"] != null) {
            loop.value = result["loop"];
          }
          numberIndicator.value = current.value + 1 + " / " + urls.value.length;
        };
        const onPreviewImageChanged = (e) => {
          var _a;
          numberIndicator.value = e.detail.current + 1 + " / " + ((_a = urls.value) === null || _a === void 0 ? null : _a.length);
          indicatorIndex.value = e.detail.current;
          current.value = e.detail.current;
        };
        function onPreviewImageFinish(e) {
          current.value = e.detail.current;
          resetCurrent.value = e.detail.current;
        }
        const shouldRender = (index) => {
          var _a;
          const len = (_a = urls.value) === null || _a === void 0 ? null : _a.length;
          if (len == null) {
            return false;
          }
          if (len <= 3) {
            return true;
          }
          const c = current.value;
          if (index == c)
            return true;
          if (loop.value) {
            const prev = c == 0 ? len - 1 : c - 1;
            const next = c == len - 1 ? 0 : c + 1;
            const prev2 = prev == 0 ? len - 1 : prev - 1;
            const next2 = next == len - 1 ? 0 : next + 1;
            if (index == prev || index == next || index == prev2 || index == next2) {
              return true;
            }
          } else {
            if (Math.abs(index - c) <= 2) {
              return true;
            }
          }
          return false;
        };
        const setDisableTouch = (isDisable = null) => {
        };
        const closePreviewPage = () => {
          var swiper = uniPageInstance.getElementById("previewSwiper");
          swiper === null || swiper === void 0 ? null : swiper.style.setProperty("transition-duration", "300ms");
          swiper === null || swiper === void 0 ? null : swiper.style.setProperty("transition-property", "opacity");
          swiper === null || swiper === void 0 ? null : swiper.style.setProperty("opacity", "0");
          setTimeout(function() {
            uni3.closeDialogPage(new UTSJSONObject({
              dialogPage: uniPageInstance,
              animationType: "none"
            }));
          }, 300);
        };
        vue.onLoad(() => {
          uni3.$once("__onPreviewLoadCallback", __onPreviewLoadCallback);
          uni3.$emit("__onPreviewLoad", null);
          uni3.$on("__UNIPREVIEWIMAGE", setDisableTouch);
          uni3.$on("__UNIPREVIEWIMAGECLOSE", closePreviewPage);
          uni3.$on("__CLOSEPREVIEWIMAGE", () => {
            closePreviewPage();
          });
        });
        vue.onBackPress((options) => {
          return false;
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            id: "previewSwiper",
            style: new UTSJSONObject({ "flex": "1" })
          }), [
            vue.createElementVNode("swiper", new UTSJSONObject({
              style: new UTSJSONObject({ "flex": "1", "background-color": "black" }),
              "indicator-dots": false,
              circular: vue.unref(loop),
              current: vue.unref(current),
              onChange: onPreviewImageChanged,
              onAnimationfinish: onPreviewImageFinish,
              "disable-touch": vue.unref(disableTouch)
            }), [
              vue.unref(urls) != null ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, new UTSJSONObject({ key: 0 }), vue.renderList(vue.unref(urls), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                  shouldRender(index) ? (vue.openBlock(), vue.createBlock(vue.unref(uniPreviewImageItem), new UTSJSONObject({
                    key: 0,
                    index,
                    src: item,
                    longPressAction: vue.unref(longPressAction),
                    tips: vue.unref(tips),
                    reset: index == vue.unref(resetCurrent)
                  }), null, 8, ["index", "src", "longPressAction", "tips", "reset"])) : vue.createCommentVNode("", true)
                ]);
              }), 256)) : vue.createCommentVNode("", true)
            ], 40, ["circular", "current", "disable-touch"]),
            vue.unref(indicator) == "number" ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 0,
              class: "uni-preview-image-number-indicator-layout"
            }), [
              vue.createElementVNode("text", new UTSJSONObject({ class: "uni-preview-image-number-indicator" }), vue.toDisplayString(vue.unref(numberIndicator)), 1)
            ])) : vue.createCommentVNode("", true),
            vue.unref(indicator) == "default" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
              key: 1,
              class: "uni-preview-image-default-indicator-layout"
            }), [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(urls).length, (i) => {
                return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
                  class: vue.normalizeClass(["uni-preview-image-default-indicator", vue.unref(indicatorIndex) + 1 == i ? "uni-preview-image-default-indicator-active" : "uni-preview-image-default-indicator-default"])
                }), null, 2);
              }), 256))
            ], 512)), [
              [vue.vShow, vue.unref(urls) != null]
            ]) : vue.createCommentVNode("", true)
          ]);
        };
      }
    });
    const _style_0 = { "uni-preview-image-default-indicator": { "": { "width": 9, "height": 9, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopLeftRadius": 9, "borderTopRightRadius": 9, "borderBottomRightRadius": 9, "borderBottomLeftRadius": 9, "marginTop": 2, "marginRight": 3, "marginBottom": 2, "marginLeft": 3, "borderTopWidth": 0.1, "borderRightWidth": 0.1, "borderBottomWidth": 0.1, "borderLeftWidth": 0.1, "borderTopColor": "#AAAAAA", "borderRightColor": "#AAAAAA", "borderBottomColor": "#AAAAAA", "borderLeftColor": "#AAAAAA" } }, "uni-preview-image-default-indicator-default": { "": { "backgroundColor": "#AAAAAA" } }, "uni-preview-image-default-indicator-active": { "": { "backgroundColor": "#ffffff" } }, "uni-preview-image-default-indicator-layout": { "": { "bottom": "var(--uni-safe-area-inset-bottom)", "marginBottom": 8, "flexDirection": "row", "position": "absolute", "left": 0, "right": 0, "justifyContent": "center" } }, "uni-preview-image-number-indicator-layout": { "": { "position": "absolute", "left": 0, "right": 0, "top": "var(--uni-safe-area-inset-top)", "marginTop": 8 } }, "uni-preview-image-number-indicator": { "": { "color": "#FFFFFF", "fontSize": 16, "marginTop": "auto", "marginRight": "auto", "marginBottom": "auto", "marginLeft": "auto", "paddingTop": 8, "paddingRight": 20, "paddingBottom": 8, "paddingLeft": 20, "backgroundColor": "rgba(0,0,0,0.3)", "lineHeight": 1, "borderTopLeftRadius": 32, "borderTopRightRadius": 32, "borderBottomRightRadius": 32, "borderBottomLeftRadius": 32 } } };
    const PreviewImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:previewImage", PreviewImage, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-showLoading.js
var uni_showLoading_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    const ON_LOAD2 = "onLoad";
    const ON_READY2 = "onReady";
    const ON_UNLOAD2 = "onUnload";
    const createLifeCycleHook2 = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
      !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
    };
    const onLoad2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_LOAD2,
      2
      /* HookFlags.PAGE */
    );
    const onReady2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_READY2,
      2
      /* HookFlags.PAGE */
    );
    const onUnload2 = /* @__PURE__ */ createLifeCycleHook2(
      ON_UNLOAD2,
      2
      /* HookFlags.PAGE */
    );
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "showLoading",
      setup(__props) {
        const readyEventName = vue.ref("");
        const optionsEventName = vue.ref("");
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const title = vue.ref("");
        const showAnim = vue.ref(false);
        const iosSpinner = vue.ref(true);
        onReady2(() => {
          setTimeout(() => {
            showAnim.value = true;
          }, 10);
        });
        onLoad2((options = null) => {
          readyEventName.value = options["readyEventName"];
          optionsEventName.value = options["optionsEventName"];
          successEventName.value = options["successEventName"];
          failEventName.value = options["failEventName"];
          uni3.$on(optionsEventName.value, (data) => {
            if (data["title"] != null) {
              title.value = data["title"];
            }
            if (data["iosSpinner"] != null) {
              iosSpinner.value = data["iosSpinner"];
            }
          });
          uni3.$emit(readyEventName.value, new UTSJSONObject({}));
          uni3.$emit(successEventName.value, "");
        });
        onUnload2(() => {
          uni3.$off(optionsEventName.value, null);
          uni3.$off(readyEventName.value, null);
          uni3.$off(successEventName.value, null);
          uni3.$off(failEventName.value, null);
        });
        return (_ctx = null, _cache = null) => {
          const _component_loading = vue.resolveComponent("loading");
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            class: vue.normalizeClass(["uni-loading-mask", new UTSJSONObject({ "uni-loading-mask--show": showAnim.value })])
          }), [
            vue.createElementVNode("view", new UTSJSONObject({
              class: vue.normalizeClass(["uni-loading-dialog", new UTSJSONObject({ "uni-loading-dialog--show": showAnim.value })])
            }), [
              vue.createVNode(_component_loading, new UTSJSONObject({
                class: "uni-loading-dialog__spinner",
                "ios-spinner": iosSpinner.value
              }), null, 8, ["ios-spinner"]),
              title.value ? (vue.openBlock(), vue.createElementBlock("text", new UTSJSONObject({
                key: 0,
                class: "uni-loading-dialog__title",
                "max-lines": "1"
              }), vue.toDisplayString(title.value), 1)) : vue.createCommentVNode("", true)
            ], 2)
          ], 2);
        };
      }
    });
    const _style_0 = { "uni-loading-mask": { "": { "display": "flex", "height": "100%", "width": "100%", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0)", "transitionDuration": "0.1s", "transitionProperty": "opacity", "opacity": 0 } }, "uni-loading-mask--show": { "": { "opacity": 1 } }, "uni-loading-dialog": { "": { "display": "flex", "justifyContent": "center", "alignItems": "center", "minWidth": 136, "maxWidth": "600rpx", "height": 136, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "rgba(76,76,76,1)", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "opacity": 0, "transform": "scale(0.9)", "transitionDuration": "0.1s", "transitionProperty": "opacity,transform" }, ".uni-loading-dialog--show": { "opacity": 1, "transform": "scale(1)" } }, "uni-loading-dialog__spinner": { "": { "width": 36, "height": 36, "borderTopColor": "#FFFFFF", "borderRightColor": "#FFFFFF", "borderBottomColor": "#FFFFFF", "borderLeftColor": "#FFFFFF" } }, "uni-loading-dialog__title": { "": { "marginTop": 14, "color": "#FFFFFF", "fontSize": 16, "lines": 1, "textAlign": "center", "textOverflow": "ellipsis" } }, "@TRANSITION": { "uni-loading-mask": { "duration": "0.1s", "property": "opacity" }, "uni-loading-dialog": { "duration": "0.1s", "property": "opacity,transform" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const ShowLoading = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:showLoading", ShowLoading, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/uni-verify.js
var uni_verify_default = (uni3, Vue, { registerExtApiPage }) => {
  (function(vue) {
    "use strict";
    const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
      __name: "verifyTemplatePage",
      setup(__props) {
        var _a, _b;
        const page = (_b = (_a = vue.getCurrentInstance()) === null || _a === void 0 ? null : _a.proxy) === null || _b === void 0 ? null : _b.$page;
        const successEventName = vue.ref("");
        const failEventName = vue.ref("");
        const closeEventName = vue.ref("");
        const unloadEventName = vue.ref("");
        const uniVerifyManager = vue.ref(null);
        const isFullScreen = vue.ref(false);
        const privacyUrl = vue.ref("");
        const privacyName = vue.ref("");
        const phoneNumber = vue.ref("");
        const slogan = vue.ref("");
        const buttonTitle = vue.ref("\u4E00\u952E\u767B\u5F55");
        const logoPath = vue.ref("");
        const contentStyle = vue.ref("");
        const closeIcon = vue.ref("\uE650");
        const theme = vue.ref("");
        const isPreLogin = vue.ref(true);
        const isCloseTransition = vue.ref(false);
        function close() {
          const animationType = isFullScreen.value == true ? "slide-out-bottom" : "none";
          uni3.closeDialogPage(new UTSJSONObject({
            dialogPage: page,
            animationType
          }));
          if (isPreLogin.value == true) {
            const loginFail = new UTSJSONObject({ code: 30001 });
            uni3.$emit(failEventName.value, loginFail);
          }
          uni3.$off(successEventName.value);
          uni3.$off(failEventName.value);
          uni3.$off(closeEventName.value);
        }
        function closeFunc() {
          var _a2;
          if (isFullScreen.value == true) {
            close();
          } else {
            isCloseTransition.value = true;
            const pageElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-page-content");
            (_a2 = pageElement === null || pageElement === void 0 ? null : pageElement.style) === null || _a2 === void 0 ? null : _a2.setProperty("transform", `translate(0%,100%)`);
          }
        }
        function transitionEndFunc() {
          if (isCloseTransition.value == true) {
            isCloseTransition.value = false;
            close();
          }
        }
        function pushPrivacyUrl() {
          let url = "uni:verifyWebPage?url=" + privacyUrl.value + "&title=" + privacyName.value + "&animationType=slide-out-bottom&theme=" + theme.value;
          uni3.openDialogPage({
            url,
            animationType: "slide-in-bottom",
            fail(err) {
              uni3.__f__("log", "at uni_modules/uni-verify/pages/verifyTemplatePage/verifyTemplatePage.uvue:93", err);
            }
          });
        }
        function loginIn() {
          var _a2;
          const privacyCheckBoxElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-privacy-checkbox");
          const numberTextElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-number-text");
          const sloganTextElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-slogan-text");
          const loginButtonElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-login-button");
          const privacyTextElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-privacy-text");
          if (numberTextElement != null && sloganTextElement != null && loginButtonElement != null && privacyCheckBoxElement != null && privacyTextElement != null) {
            (_a2 = uniVerifyManager.value) === null || _a2 === void 0 ? null : _a2.customLogin({
              numberTextElement,
              sloganTextElement,
              loginButtonElement,
              privacyCheckBoxElement,
              privacyTextElement,
              success: (res) => {
                const loginSuccess = new UTSJSONObject({ openId: res.openId, accessToken: res.accessToken });
                uni3.$emit(successEventName.value, loginSuccess);
              },
              fail: (error) => {
                if (error.errCode == 40001) {
                  uni3.showToast({
                    title: "\u8BF7\u540C\u610F\u670D\u52A1\u6761\u6B3E",
                    duration: 2e3
                  });
                  return null;
                }
                uni3.__f__("log", "at uni_modules/uni-verify/pages/verifyTemplatePage/verifyTemplatePage.uvue:123", error);
                const loginFail = new UTSJSONObject({ code: error.errCode, cause: error.cause });
                uni3.$emit(failEventName.value, loginFail);
              }
            });
          }
        }
        vue.onLoad((options) => {
          if (options["successEventName"] != null) {
            successEventName.value = options["successEventName"];
          }
          if (options["failEventName"] != null) {
            failEventName.value = options["failEventName"];
          }
          if (options["closeEventName"] != null) {
            closeEventName.value = options["closeEventName"];
            uni3.$on(closeEventName.value, (res) => {
              if (res["isPreLogin"] != null) {
                isPreLogin.value = res["isPreLogin"];
              }
              closeFunc();
            });
          }
          if (options["unloadEventName"] != null) {
            unloadEventName.value = options["unloadEventName"];
          }
          if (options["fullScreen"] != null) {
            const fullScreen = options["fullScreen"];
            isFullScreen.value = fullScreen == "true" ? true : false;
          }
          if (options["logoPath"] != null) {
            logoPath.value = options["logoPath"];
          }
          if (options["loginBtnText"] != null) {
            buttonTitle.value = options["loginBtnText"];
          }
          const appInfo = uni3.getAppBaseInfo();
          let themeValue = "light";
          const appTheme = appInfo.appTheme;
          if (appTheme != null && appTheme != "auto") {
            themeValue = appTheme;
          } else if (appTheme == "auto") {
            const deviceInfo = uni3.getDeviceInfo();
            const osTheme = deviceInfo.osTheme;
            if (osTheme != null) {
              themeValue = osTheme;
            }
          }
          theme.value = themeValue;
          const frontColor = theme.value == "dark" ? "white" : "black";
          let style = new UTSJSONObject({ navigationBarTextStyle: frontColor, disableSwipeBack: true });
          page === null || page === void 0 ? null : page.setPageStyle(style);
          if (options["backgroundColor"] != null) {
            const backgroundColor2 = options["backgroundColor"];
            if (backgroundColor2 != null && backgroundColor2.length > 0) {
              contentStyle.value = "backgroundColor:" + backgroundColor2;
            } else {
              const color = themeValue == "dark" ? "#181818" : "#ffffff";
              contentStyle.value = "backgroundColor:" + color;
            }
          }
          if (options["privacyName"] != null) {
            privacyName.value = options["privacyName"];
          }
          if (options["phoneNumber"] != null) {
            phoneNumber.value = options["phoneNumber"];
          }
          if (options["slogan"] != null) {
            slogan.value = options["slogan"];
          }
          if (options["privacyUrl"] != null) {
            const privacyUrlValue = options["privacyUrl"];
            const url = decodeURIComponent(privacyUrlValue);
            if (url != null) {
              privacyUrl.value = url;
            }
          }
          uniVerifyManager.value = uni3.getUniVerifyManager();
        });
        vue.onBackPress((_) => {
          closeFunc();
          return true;
        });
        vue.onReady(() => {
          var _a2;
          const pageElement = page === null || page === void 0 ? null : page.getElementById("uni-verify-id-page-content");
          (_a2 = pageElement === null || pageElement === void 0 ? null : pageElement.style) === null || _a2 === void 0 ? null : _a2.setProperty("transform", `translate(0%,0%)`);
        });
        vue.onShow(() => {
          const frontColor = theme.value == "dark" ? "white" : "black";
          let style = new UTSJSONObject({ navigationBarTextStyle: frontColor, disableSwipeBack: true });
          page === null || page === void 0 ? null : page.setPageStyle(style);
        });
        vue.onUnload(() => {
          uni3.$emit(unloadEventName.value, new UTSJSONObject({}));
          uni3.$off(unloadEventName.value);
        });
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({ class: "uni_verify_template_container" }), [
            vue.createElementVNode("view", new UTSJSONObject({
              id: "uni-verify-id-page-content",
              onTransitionend: _cache[0] || (_cache[0] = ($event = null) => {
                return transitionEndFunc();
              }),
              class: vue.normalizeClass(vue.unref(isFullScreen) ? "uni_verify_template_full_content" : "uni_verify_template_half_content"),
              style: vue.normalizeStyle(vue.unref(contentStyle))
            }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: vue.normalizeClass(vue.unref(isFullScreen) ? "uni_verify_template_full_safe_content" : "uni_verify_template_half_safe_content")
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_template_close_container" }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: "uni_verify_template_close_icon",
                    onClick: closeFunc
                  }), vue.toDisplayString(vue.unref(closeIcon)), 1)
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_template_info_container" }), [
                  vue.createElementVNode("image", new UTSJSONObject({
                    class: "uni_verify_template_logo_icon",
                    src: vue.unref(logoPath)
                  }), null, 8, ["src"]),
                  vue.createElementVNode("text", new UTSJSONObject({
                    id: "uni-verify-id-number-text",
                    class: "uni_verify_template_phone_number"
                  }), vue.toDisplayString(vue.unref(phoneNumber)), 1),
                  vue.createElementVNode("text", new UTSJSONObject({
                    id: "uni-verify-id-slogan-text",
                    class: "uni_verify_template_slogan"
                  }), vue.toDisplayString(vue.unref(slogan)), 1),
                  vue.createElementVNode("button", new UTSJSONObject({
                    id: "uni-verify-id-login-button",
                    class: "uni_verify_template_login_button",
                    onClick: loginIn
                  }), vue.toDisplayString(vue.unref(buttonTitle)), 1)
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_template_privacy_container" }), [
                  vue.createElementVNode("checkbox", new UTSJSONObject({
                    id: "uni-verify-id-privacy-checkbox",
                    class: "uni_verify_template_privacy_checkbox",
                    checked: false
                  })),
                  vue.createElementVNode("text", new UTSJSONObject({ class: "uni_verify_template_privacy_normal" }), "\u767B\u5F55\u5373\u540C\u610F"),
                  vue.createElementVNode("text", new UTSJSONObject({
                    id: "uni-verify-id-privacy-text",
                    class: "uni_verify_template_privacy_href",
                    onClick: pushPrivacyUrl
                  }), vue.toDisplayString(vue.unref(privacyName)), 1)
                ])
              ], 2)
            ], 38)
          ]);
        };
      }
    });
    const _style_0$1 = { "uni_verify_template_container": { "": { "width": "100%", "height": "100%", "backgroundColor": "rgba(0,0,0,0.3)" } }, "uni_verify_template_half_content": { "": { "width": "100%", "top": "30%", "height": "70%", "backgroundColor": "#FFFFFF", "transform": "translate(0%, 100%)", "transitionProperty": "transform", "transitionDuration": "0.3s" } }, "uni_verify_template_full_content": { "": { "width": "100%", "height": "100%", "backgroundColor": "#FFFFFF" } }, "uni_verify_template_full_safe_content": { "": { "paddingTop": "var(--uni-safe-area-inset-top)", "width": "100%", "height": "100%" } }, "uni_verify_template_half_safe_content": { "": { "width": "100%", "height": "100%" } }, "uni_verify_template_close_container": { "": { "paddingTop": 20, "width": "100%", "left": "90%" } }, "uni_verify_template_close_icon": { "": { "color": "#808080", "fontFamily": "uni-icon", "fontSize": 24 } }, "uni_verify_template_info_container": { "": { "top": 30, "width": "100%", "height": "100%", "alignItems": "center" } }, "uni_verify_template_logo_icon": { "": { "marginTop": 30, "width": 80, "height": 80 } }, "uni_verify_template_phone_number": { "": { "marginTop": 20, "fontSize": 24, "fontWeight": "bold", "color": "#808080" } }, "uni_verify_template_slogan": { "": { "marginTop": 10, "fontSize": 12, "color": "#808080" } }, "uni_verify_template_login_button": { "": { "color": "#FFFFFF", "backgroundColor": "#3973FF", "marginTop": 40, "fontSize": 18, "width": 200, "height": 48 } }, "uni_verify_template_privacy_checkbox": { "": { "paddingLeft": 3, "transform": "scale(0.65)" } }, "uni_verify_template_privacy_container": { "": { "position": "absolute", "bottom": 50, "flexDirection": "row", "width": "100%", "justifyContent": "center" } }, "uni_verify_template_privacy_normal": { "": { "paddingTop": 4, "fontSize": 14, "color": "#808080" } }, "uni_verify_template_privacy_href": { "": { "paddingTop": 4, "fontSize": 14, "color": "#3973FF" } }, "@TRANSITION": { "uni_verify_template_half_content": { "property": "transform", "duration": "0.3s" } } };
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const VerifyTemplatePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
      __name: "verifyWebPage",
      setup(__props) {
        var _a, _b;
        const page = (_b = (_a = vue.getCurrentInstance()) === null || _a === void 0 ? null : _a.proxy) === null || _b === void 0 ? null : _b.$page;
        const url = vue.ref("");
        const title = vue.ref("");
        const animationType = vue.ref("slide-out-bottom");
        const backIcon = vue.ref("\uE601");
        const backgroundStyle = vue.ref("");
        const titleStyle = vue.ref("");
        vue.onLoad((options) => {
          if (options["url"] != null) {
            url.value = options["url"];
          }
          if (options["title"] != null) {
            title.value = options["title"];
          }
          if (options["animationType"] != null) {
            animationType.value = options["animationType"];
          }
          if (options["theme"] != null) {
            const theme = options["theme"];
            const frontColor = theme == "dark" ? "white" : "black";
            const backgroundColor2 = theme == "dark" ? "#181818" : "#ffffff";
            backgroundStyle.value = "backgroundColor:" + backgroundColor2;
            const titleColor = theme == "dark" ? "#ffffff" : "#181818";
            titleStyle.value = "color:" + titleColor;
            let style = new UTSJSONObject({ navigationBarTextStyle: frontColor, disableSwipeBack: true });
            page === null || page === void 0 ? null : page.setPageStyle(style);
          }
        });
        function onBack() {
          uni3.closeDialogPage(new UTSJSONObject({
            dialogPage: page,
            animationType: animationType.value,
            fail(err) {
              uni3.__f__("log", "at uni_modules/uni-verify/pages/verifyWebPage/verifyWebPage.uvue:56", err);
            }
          }));
        }
        return (_ctx = null, _cache = null) => {
          return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            class: "uni_verify_web_background",
            style: vue.normalizeStyle(vue.unref(backgroundStyle))
          }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_web_container" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_web_nav" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_web_left_content" }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: "uni_verify_web_left_icon",
                    onClick: _cache[0] || (_cache[0] = ($event = null) => {
                      return onBack();
                    }),
                    style: vue.normalizeStyle(vue.unref(titleStyle))
                  }), vue.toDisplayString(vue.unref(backIcon)), 5)
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "uni_verify_web_title_content" }), [
                  vue.createElementVNode("text", new UTSJSONObject({
                    class: "uni_verify_web_title",
                    style: vue.normalizeStyle(vue.unref(titleStyle))
                  }), vue.toDisplayString(vue.unref(title)), 5)
                ])
              ]),
              vue.createElementVNode("web-view", new UTSJSONObject({
                class: "uni_verify_web_webview_container",
                src: vue.unref(url)
              }), null, 8, ["src"])
            ])
          ], 4);
        };
      }
    });
    const _style_0 = { "uni_verify_web_background": { "": { "backgroundColor": "#FFFFFF", "width": "100%", "height": "100%" } }, "uni_verify_web_nav": { "": { "height": 45, "width": "100%", "position": "relative", "flexDirection": "row", "justifyContent": "space-between" } }, "uni_verify_web_left_content": { "": { "justifyContent": "center", "alignItems": "center", "width": 40, "height": "100%" } }, "uni_verify_web_left_icon": { "": { "top": 5, "height": "100%", "fontFamily": "uni-icon", "fontSize": 26 } }, "uni_verify_web_title_content": { "": { "position": "absolute", "height": "100%", "top": 0, "bottom": 0, "left": 45, "right": 45, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni_verify_web_title": { "": { "color": "#000000", "fontSize": 17 } }, "uni_verify_web_container": { "": { "paddingTop": "var(--uni-safe-area-inset-top)", "width": "100%", "position": "absolute", "height": "100%" } }, "uni_verify_web_webview_container": { "": { "backgroundColor": "#f1f1f1", "paddingTop": 10, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "width": "100%" } } };
    const VerifyWebPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
    registerExtApiPage("uni:verifyTemplatePage", VerifyTemplatePage, new UTSJSONObject({ disableSwipeBack: false }));
    registerExtApiPage("uni:verifyWebPage", VerifyWebPage, new UTSJSONObject({ disableSwipeBack: false }));
  })(Vue);
};

// packages/uni-ext-api/x-pages/app-harmony/index.js
function initUniExtApiPages(uni3, options) {
  uni_actionSheet_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_chooseLocation_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_modal_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_openLocation_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_picker_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_previewImage_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_showLoading_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
  uni_verify_default(uni3, uvue_runtime_harmony_esm_dev_exports, options);
}

// packages/uni-framework-harmony/src/init.ts
function getUniNativeAppImpl() {
  const uniNativeAppImpl = getUniApp();
  return uniNativeAppImpl;
}
var plugin = {
  install(app) {
    initComponents(app);
    initApp2(app);
    initMount(app);
    initApp(app, getUniNativeAppImpl());
  }
};
var runtimeComponents = {};
function initComponents(app) {
  initUniExtApiComponents(index$1, {
    registerExtApiComponent(name, component) {
      runtimeComponents[name] = component;
    }
  });
  for (const name in runtimeComponents) {
    const item = runtimeComponents[name];
    Object.keys(item).forEach((key) => {
      if (key === "default") {
        const component = item[key];
        app.component(name, component);
        const rootElement = component.rootElement;
        if (rootElement) {
          customElements.define(rootElement.name, rootElement.class);
        }
      } else {
        globalThis[key] = item[key];
      }
    });
  }
}
function initMount(app) {
  const { mount } = app;
  app.mount = (rootContainer) => {
    if (rootContainer !== "#app") {
      throw new Error("rootContainer must be #app");
    }
    const instance = mount(document);
    registerApp(instance, getUniNativeAppImpl(), getApp());
    return instance;
  };
}
var createApp2 = createApp;
var createSSRApp = function(...args) {
  const app = createApp2.apply(uvue_runtime_harmony_esm_dev_exports, args);
  const options = app._component;
  options.mpType = "app";
  options.render = function() {
  };
  if (options.styles) {
    app.provide("__globalStyles", options.styles);
  }
  app.use(plugin);
  return app;
};
var definePage2 = function(pagePath, asyncComponent) {
  asyncComponent.mpType = "page";
  definePage(pagePath, asyncComponent);
};
function initPages() {
  initUniExtApiPages(index$1, {
    registerExtApiPage: registerSystemRoute
  });
}
var uni2 = index$1;

// packages/uni-framework-harmony/src/global.ts
var g2 = new Function("return this")();
if (typeof globalThis === "undefined") {
  g2.globalThis = g2;
}
var global_default = g2;

// packages/uni-framework-harmony/src/css.ts
function initVar(uni3) {
  global_default.CSS_VAR_STATUS_BAR_HEIGHT = 20;
  try {
    global_default.CSS_VAR_STATUS_BAR_HEIGHT = uni3.getSystemInfoSync().statusBarHeight;
  } catch {
    console.error("CSS_VAR_STATUS_BAR_HEIGHT init fail");
  }
  global_default.CSS_VAR_WINDOW_TOP = 0;
  global_default.CSS_VAR_WINDOW_BOTTOM = 0;
}

// packages/uni-framework-harmony/src/index.ts
global_default.uni = uni2;
global_default.getCurrentPages = getCurrentPages$1;
global_default.getCurrentPagesForNativeChannel = () => getCurrentPages$1();
global_default.__definePage = definePage2;
global_default.Vue = Object.assign({}, uvue_runtime_harmony_esm_dev_exports, {
  createSSRApp
});
global_default.__uniSystemRoutes = systemRoutes;
global_default.enableStyleIsolation = enableStyleIsolation;
export {
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  DeprecationTypes,
  EffectScope,
  ErrorCodes,
  ErrorTypeStrings,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  TrackOpTypes,
  TriggerOpTypes,
  UTS2 as UTS,
  UTSJSONObject2 as UTSJSONObject,
  UTSValueIterable,
  UniError2 as UniError,
  UniSharedDataComponentStyleIsolation,
  __X_STYLE_ISOLATION__,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createBaseVNode as createElementVNode,
  createHydrationRenderer,
  createMountPage,
  createPropsRestProxy,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncApi,
  defineAsyncComponent,
  defineComponent,
  defineEmits,
  defineExpose,
  defineModel,
  defineOffApi,
  defineOnApi,
  defineOptions,
  defineProps,
  defineSlots,
  defineSyncApi,
  defineTaskApi,
  devtools,
  effect,
  effectScope,
  enableStyleIsolation,
  getCurrentGenericInstance,
  getCurrentInstance,
  getCurrentScope,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hyphenate,
  initCustomFormatter,
  initPages,
  initVar,
  inject,
  injectHook,
  isInSSRComponentSetup,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  logError,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass2 as normalizeClass,
  normalizeProps,
  normalizeStyle2 as normalizeStyle,
  onActivated,
  onAppHide,
  onAppShow,
  onBackPress,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onError,
  onErrorCaptured,
  onExit,
  onHide,
  onLastPageBackPress,
  onLaunch,
  onLoad,
  onMounted,
  onPageHide,
  onPageNotFound,
  onPageScroll,
  onPageShow,
  onPullDownRefresh,
  onReachBottom,
  onReady,
  onRenderTracked,
  onRenderTriggered,
  onResize,
  onScopeDispose,
  onServerPrefetch,
  onShareAppMessage,
  onShareTimeline,
  onShow,
  onTabItemTap,
  onThemeChange,
  onUnhandledRejection,
  onUnload,
  onUnmounted,
  onUpdated,
  openBlock,
  parseClassList,
  parseClassStyles,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderComponentSlot,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  shallowSsrRef,
  ssrContextKey,
  ssrRef,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue,
  transformVNodeArgs,
  triggerRef,
  unmountPage,
  unref,
  useAttrs,
  useComputedStyle,
  useCssModule,
  useCssStyles,
  useCssVars,
  useModel,
  useSSRContext,
  useSlots,
  useTransitionState,
  vModelDynamic,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId
};
/**
* @dcloudio/uni-app-nvue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.4.21
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
