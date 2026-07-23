// ../uni-app-next/node_modules/.pnpm/@vue+shared@3.4.21/node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const set = new Set(str.split(","));
  return expectsLowerCase ? (val) => set.has(val.toLowerCase()) : (val) => set.has(val);
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var isArray = Array.isArray;
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
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);

// ../uni-app-next/packages/uni-nvue-styler/dist/uni-nvue-styler.es.js
function createDecl(prop, value, important, raws, source) {
  const decl = {
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
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
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
  const trimmedValue = value.trim();
  if (!trimmedValue.includes("(")) {
    return trimmedValue.split(/\s+/);
  }
  const parts = [];
  let current = "";
  let depth = 0;
  for (let i = 0; i < trimmedValue.length; i++) {
    const char = trimmedValue[i];
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
  let { value, important, raws, source } = decl;
  value = value.trim();
  if (value === "none") {
    return [
      createDecl(backgroundImage, "none", important, raws, source),
      createDecl(backgroundColor, "transparent", important, raws, source)
    ];
  }
  if (/^#?\S+$/.test(value) || /^rgba?(.+)$/.test(value)) {
    return [
      createDecl(backgroundImage, "none", important, raws, source),
      createDecl(backgroundColor, value, important, raws, source)
    ];
  } else if (/^linear-gradient(.+)$/.test(value)) {
    return [
      createDecl(backgroundImage, value, important, raws, source),
      createDecl(backgroundColor, "transparent", important, raws, source)
    ];
  } else if (value == "") {
    return [
      createDecl(backgroundImage, "none", important, raws, source),
      createDecl(backgroundColor, "transparent", important, raws, source)
    ];
  }
  return [decl];
};
var handleTransformBackgroundNvue = (decl) => {
  const { value, important, raws, source } = decl;
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
    const isUvuePlatform = options.type === "uvue";
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
  let { prop, value, important, raws, source } = decl;
  value = value.trim();
  const _property_split = hyphenate(prop).split("-");
  let property = _property_split[_property_split.length - 1];
  {
    property = capitalize(property);
  }
  const splitResult = splitValues(value);
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
  return [
    createDecl(borderTop + property, splitResult[0], important, raws, source),
    createDecl(borderRight + property, splitResult[1], important, raws, source),
    createDecl(borderBottom + property, splitResult[2], important, raws, source),
    createDecl(borderLeft + property, splitResult[3], important, raws, source)
  ];
};
var transformBorderColorNvue = (decl) => {
  let { prop, value, important, raws, source } = decl;
  value = value.trim();
  let property = hyphenate(prop).split("-")[1];
  {
    property = capitalize(property);
  }
  const splitResult = value.replace(/\s*,\s*/g, ",").split(/\s+/);
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
  return [
    createDecl(borderTop + property, splitResult[0], important, raws, source),
    createDecl(borderRight + property, splitResult[1], important, raws, source),
    createDecl(borderBottom + property, splitResult[2], important, raws, source),
    createDecl(borderLeft + property, splitResult[3], important, raws, source)
  ];
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
    const { prop, value, important, raws, source } = decl;
    const singleVarResult = tryExpandSingleValueVarShorthand();
    if (singleVarResult) {
      return [
        ...transformBorderWidth(singleVarResult[0]),
        ...transformBorderStyle(singleVarResult[1]),
        ...transformBorderColor(singleVarResult[2])
      ];
    }
    let splitResult = splitValues(value);
    const havVar = splitResult.some((str) => str.startsWith("var("));
    let result = [];
    if (havVar) {
      if (splitResult.length > 3 || splitResult.length === 3 && (!isBorderWidthValue(splitResult[0]) || !isBorderStyleValue(splitResult[1]) || !isBorderColorValue(splitResult[2]))) {
        decl[BORDER_SHORTHAND_VAR_ORDER_WARNING] = createBorderVarOrderWarning(prop, value);
        return [];
      }
      result = splitResult;
      splitResult = [];
    } else {
      result = [BORDER_WIDTH_REGEXP, BORDER_STYLE_REGEXP, /\S+/].map((item) => {
        const index = splitResult.findIndex((str) => item.test(str));
        return index < 0 ? null : splitResult.splice(index, 1)[0];
      });
    }
    if (splitResult.length > 0 && value != "") {
      return [decl];
    }
    const defaultWidth = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "medium";
    };
    const defaultStyle = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "none";
    };
    const defaultColor = (str) => {
      if (str != null) {
        return str.trim();
      }
      return "#000000";
    };
    return [
      ...transformBorderWidth(createDecl(prop + borderWidth, defaultWidth(result[0]), important, raws, source)),
      ...transformBorderStyle(createDecl(prop + borderStyle, defaultStyle(result[1]), important, raws, source)),
      ...transformBorderColor(createDecl(prop + borderColor, defaultColor(result[2]), important, raws, source))
    ];
  };
}
function createTransformBorderNvue(options) {
  return (decl) => {
    let { prop, value, important, raws, source } = decl;
    value = value.trim();
    const splitResult = value.replace(/\s*,\s*/g, ",").split(/\s+/);
    const result = [
      /^[\d\.]+\S*|^(thin|medium|thick)$/,
      /^(solid|dashed|dotted|none)$/,
      /\S+/
    ].map((item) => {
      const index = splitResult.findIndex((str) => item.test(str));
      return index < 0 ? null : splitResult.splice(index, 1)[0];
    });
    if (splitResult.length) {
      return [decl];
    }
    return [
      createDecl(prop + borderWidth, (result[0] || "0").trim(), important, raws, source),
      createDecl(prop + borderStyle, (result[1] || "solid").trim(), important, raws, source),
      createDecl(prop + borderColor, (result[2] || "#000000").trim(), important, raws, source)
    ];
  };
}
var borderTopLeftRadius = "borderTopLeftRadius";
var borderTopRightRadius = "borderTopRightRadius";
var borderBottomRightRadius = "borderBottomRightRadius";
var borderBottomLeftRadius = "borderBottomLeftRadius";
var transformBorderRadius = (decl) => {
  let { value, important, raws, source } = decl;
  value = value.trim();
  const splitResult = splitValues(value);
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
  return [
    createDecl(borderTopLeftRadius, splitResult[0], important, raws, source),
    createDecl(borderTopRightRadius, splitResult[1], important, raws, source),
    createDecl(borderBottomRightRadius, splitResult[2], important, raws, source),
    createDecl(borderBottomLeftRadius, splitResult[3], important, raws, source)
  ];
};
var transformBorderRadiusNvue = (decl) => {
  let { value, important, raws, source } = decl;
  value = value.trim();
  const splitResult = value.split(/\s+/);
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
  return [
    createDecl(borderTopLeftRadius, splitResult[0], important, raws, source),
    createDecl(borderTopRightRadius, splitResult[1], important, raws, source),
    createDecl(borderBottomRightRadius, splitResult[2], important, raws, source),
    createDecl(borderBottomLeftRadius, splitResult[3], important, raws, source)
  ];
};
var flexDirection = "flexDirection";
var flexWrap = "flexWrap";
var transformFlexFlow = (decl) => {
  let { value, important, raws, source } = decl;
  value = value.trim();
  const splitResult = splitValues(value);
  const singleVarResult = tryExpandSingleValueVarShorthand();
  if (singleVarResult) {
    return singleVarResult;
  }
  const result = [
    /^(column|column-reverse|row|row-reverse)$/,
    /^(nowrap|wrap|wrap-reverse)$/
  ].map((item) => {
    const index = splitResult.findIndex((str) => item.test(str));
    return index < 0 ? null : splitResult.splice(index, 1)[0];
  });
  if (splitResult.length) {
    return [decl];
  }
  return [
    createDecl(flexDirection, result[0] || "column", important, raws, source),
    createDecl(flexWrap, result[1] || "nowrap", important, raws, source)
  ];
};
var top = "Top";
var right = "Right";
var bottom = "Bottom";
var left = "Left";
var createTransformBox = (type) => {
  return (decl) => {
    const { value, important, raws, source } = decl;
    const splitResult = splitValues(value);
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
    return [
      createDecl(type + top, splitResult[0], important, raws, source),
      createDecl(type + right, splitResult[1], important, raws, source),
      createDecl(type + bottom, splitResult[2], important, raws, source),
      createDecl(type + left, splitResult[3], important, raws, source)
    ];
  };
};
var transformMargin = createTransformBox("margin");
var transformPadding = createTransformBox("padding");
var transitionProperty = "transitionProperty";
var transitionDuration = "transitionDuration";
var transitionTimingFunction = "transitionTimingFunction";
var transitionDelay = "transitionDelay";
var transformTransition = (decl) => {
  let { value, important, raws, source } = decl;
  value = value.trim();
  const result = [];
  let match;
  if (value.includes("cubic-bezier")) {
    const CHUNK_REGEXP = /^(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?\s*((\S*)|cubic-bezier\(.*\))?\s*(\d*\.?\d+(?:ms|s)?)?$/;
    match = value.match(CHUNK_REGEXP);
  } else {
    const CHUNK_REGEXP = /^(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?\s*(\S*)?\s*(\d*\.?\d+(?:ms|s)?)?$/;
    match = value.match(CHUNK_REGEXP);
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
  let { value, important, raws, source } = decl;
  value = value.trim();
  const result = [];
  const splitResult = splitValues(value);
  const singleVarResult = tryExpandSingleValueVarShorthand();
  if (singleVarResult) {
    return singleVarResult;
  }
  const isFlexGrowValid = (v) => isNumber(Number(v)) && !Number.isNaN(Number(v));
  const isFlexShrinkValid = (v) => isNumber(Number(v)) && !Number.isNaN(Number(v)) && Number(v) >= 0;
  const isFlexBasisValid = (v) => typeof v === "string" && v.trim() !== "";
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
    const v = splitResult[0];
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
    const [v1, v2] = splitResult;
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
    const [v1, v2, v3] = splitResult;
    if (isFlexGrowValid(v1) && isFlexShrinkValid(v2)) {
      result.push(createDecl(flexGrow, v1, important, raws, source), createDecl(flexShrink, v2, important, raws, source), createDecl(flexBasis, v3, important, raws, source));
      return result;
    } else {
      return [decl];
    }
  }
  return [decl];
};
function getDeclTransforms(options) {
  const transformBorder = options.type === "uvue" ? createTransformBorder() : createTransformBorderNvue();
  const styleMap = {
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
  let result = {};
  {
    result = styleMap;
  }
  return result;
}
var DeclTransforms;
var expanded = Symbol("expanded");
function expand(options) {
  const plugin = {
    postcssPlugin: `${options.type || "nvue"}:expand`,
    Declaration(decl, helper) {
      if (decl[expanded]) {
        return;
      }
      if (!DeclTransforms) {
        DeclTransforms = getDeclTransforms(options);
      }
      const transform = DeclTransforms[decl.prop];
      if (transform) {
        const res = transform(decl);
        const reason = decl[BORDER_SHORTHAND_VAR_ORDER_WARNING];
        if (reason && helper && decl.warn) {
          let needLog = false;
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
        const isSame = res.length === 1 && res[0] === decl;
        if (!isSame) {
          decl.replaceWith(res);
        }
      }
      decl[expanded] = true;
    }
  };
  return plugin;
}
export {
  expand
};
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.4.21
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
