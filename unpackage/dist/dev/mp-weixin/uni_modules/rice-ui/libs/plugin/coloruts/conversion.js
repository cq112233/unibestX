"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_riceUi_libs_plugin_coloruts_constant = require("./constant.js");
require("./type.js");
const uni_modules_riceUi_libs_plugin_coloruts_utils = require("./utils.js");
class Coloruts {
  constructor(input) {
    this.isValid = true;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    this._h = null;
    this._s = null;
    this._l = null;
    this._v = null;
    this._max = null;
    this._min = null;
    this._brightness = null;
    function isRgb() {
      const inp = input;
      return inp["r"] != null && inp["g"] != null && inp["b"] != null;
    }
    function isHsl() {
      const inp = input;
      return inp["h"] != null && inp["s"] != null && inp["l"] != null;
    }
    function isHsv() {
      const inp = input;
      return inp["h"] != null && inp["s"] != null && inp["v"] != null;
    }
    if (typeof input == "string") {
      let matchPrefix = function(prefix) {
        return trimStr.startsWith(prefix);
      };
      const trimStr = input.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix("rgb")) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix("hsl")) {
        this.fromHslString(trimStr);
      } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
        this.fromHsvString(trimStr);
      } else {
        const presetColor = uni_modules_riceUi_libs_plugin_coloruts_constant.presetColors[trimStr.toLowerCase()];
        if (presetColor != null) {
          this.fromHexString(parseInt(presetColor, 36).toString(16).padStart(6, "0"));
        }
      }
    } else if (common_vendor.UTS.isInstanceOf(input, Coloruts)) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._s = input._s;
      this._l = input._l;
      this._v = input._v;
    } else if (isRgb()) {
      const data = input;
      this.r = uni_modules_riceUi_libs_plugin_coloruts_utils.limitRange(data["r"]);
      this.g = uni_modules_riceUi_libs_plugin_coloruts_utils.limitRange(data["g"]);
      this.b = uni_modules_riceUi_libs_plugin_coloruts_utils.limitRange(data["b"]);
      this.a = typeof data["a"] == "number" ? uni_modules_riceUi_libs_plugin_coloruts_utils.limitRange(data["a"], 1) : 1;
    } else if (isHsl()) {
      this.fromHsl(input);
    } else if (isHsv()) {
      this.fromHsv(input);
    } else {
      common_vendor.index.__f__("warn", "at uni_modules/rice-ui/libs/plugin/coloruts/conversion.uts:78", `不支持当前的颜色值。${input}`);
    }
  }
  fromHexString(trimStr) {
    const withoutPrefix = trimStr.replace("#", "");
    function connectNum(index1, index2 = null) {
      if (index2 == null || index2 == 0) {
        index2 = index1;
      }
      const str = `${withoutPrefix[index1]}${withoutPrefix[index2]}`;
      return parseInt(str, 16);
    }
    if (withoutPrefix.length < 6) {
      this.r = connectNum(0, null);
      this.g = connectNum(1, null);
      this.b = connectNum(2, null);
      this.a = withoutPrefix.length >= 4 ? connectNum(3, null) / 255 : 1;
    } else {
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix.length >= 7 ? connectNum(6, 7) / 255 : 1;
    }
  }
  fromHsv(hsva) {
    const h = hsva["h"];
    const s = hsva["s"];
    const v = hsva["v"];
    const a = hsva["a"];
    this._h = h % 360;
    this._s = s;
    this._v = v;
    this.a = typeof a == "number" ? a : 1;
    const vv = Math.round(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;
    if (s <= 0) {
      return null;
    }
    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = Math.round(v * (1 - s) * 255);
    const q = Math.round(v * (1 - s * ff) * 255);
    const t = Math.round(v * (1 - s * (1 - ff)) * 255);
    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }
  fromHsl(hsla) {
    const h = hsla["h"];
    const s = hsla["s"];
    const l = hsla["l"];
    const a = hsla["a"];
    this._h = h % 360;
    this._s = s;
    this._l = l;
    this.a = typeof a == "number" ? a : 1;
    if (s <= 0) {
      const rgb = Math.round(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
    }
    let r = 0, g = 0, b = 0;
    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    this.r = Math.round((r + lightnessModification) * 255);
    this.g = Math.round((g + lightnessModification) * 255);
    this.b = Math.round((b + lightnessModification) * 255);
  }
  fromHslString(trimStr) {
    const cells = uni_modules_riceUi_libs_plugin_coloruts_utils.splitColorStr(trimStr, uni_modules_riceUi_libs_plugin_coloruts_utils.parseHSVorHSL);
    this.fromHsl(new common_vendor.UTSJSONObject({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3]
    }));
  }
  fromHsvString(trimStr) {
    const cells = uni_modules_riceUi_libs_plugin_coloruts_utils.splitColorStr(trimStr, uni_modules_riceUi_libs_plugin_coloruts_utils.parseHSVorHSL);
    this.fromHsv(new common_vendor.UTSJSONObject({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3]
    }));
  }
  fromRgbString(trimStr) {
    const cells = uni_modules_riceUi_libs_plugin_coloruts_utils.splitColorStr(trimStr, (num, txt) => {
      return txt.includes("%") ? Math.round(num / 100 * 255) : num;
    });
    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
  _c(input) {
    return new Coloruts(input);
  }
  getMax() {
    if (this._max == null) {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }
  getMin() {
    if (this._min == null) {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }
  getHue() {
    if (this._h == null) {
      const delta = this.getMax() - this.getMin();
      if (delta == 0) {
        this._h = 0;
      } else {
        this._h = Math.round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
      }
    }
    return this._h;
  }
  getSaturation() {
    if (this._s == null) {
      const delta = this.getMax() - this.getMin();
      if (delta == 0) {
        this._s = 0;
      } else {
        this._s = delta / this.getMax();
      }
    }
    return this._s;
  }
  getValue() {
    if (this._v == null) {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }
  getLightness() {
    if (this._l == null) {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }
  getBrightness() {
    if (this._brightness == null) {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
    }
    return this._brightness;
  }
  /**
   * 颜色格式转为 {h,s,v,a}
   */
  toHsv() {
    return new common_vendor.UTSJSONObject({
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    });
  }
  /**
   * 颜色格式转为 {r,g,b,a}
   */
  toRgb() {
    return new common_vendor.UTSJSONObject({
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    });
  }
  /**
   * 颜色格式转为 rgb/rgba
   */
  toRgbString() {
    return this.a != 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  /**
   * 颜色格式转为 hex值
   */
  toHexString() {
    let hex = "#";
    const rHex = this.r.toString(16);
    hex += rHex.length == 2 ? rHex : "0" + rHex;
    const gHex = this.g.toString(16);
    hex += gHex.length == 2 ? gHex : "0" + gHex;
    const bHex = this.b.toString(16);
    hex += bHex.length == 2 ? bHex : "0" + bHex;
    if (typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const aHex = Math.round(this.a * 255).toString(16);
      hex += aHex.length == 2 ? aHex : "0" + aHex;
    }
    return hex;
  }
  /**
   * 将当前颜色与另一种颜色混合一定量，从0到100。
   * 0表示没有混合（返回当前颜色）。
   */
  mix(input, amount = 50) {
    const color = this._c(input);
    const p = amount / 100;
    const calc = (key) => {
      if (key == "r")
        return (color.r - this.r) * p + this.r;
      if (key == "g")
        return (color.g - this.g) * p + this.g;
      if (key == "b")
        return (color.b - this.b) * p + this.b;
      if (key == "a")
        return (color.a - this.a) * p + this.a;
      return 0;
    };
    const rgba = new common_vendor.UTSJSONObject({
      r: Math.round(calc("r")),
      g: Math.round(calc("g")),
      b: Math.round(calc("b")),
      a: Math.round(calc("a") * 100) / 100
    });
    return this._c(rgba);
  }
  /**
   * 将颜色与纯白色混合，从0到100。
   * 提供0将什么都不做，提供100将始终返回白色。
   */
  tint(amount = 10) {
    return this.mix(new common_vendor.UTSJSONObject({ r: 255, g: 255, b: 255, a: 1 }), amount);
  }
  /**
   * 将颜色与纯黑色混合，从0到100。
   * 提供0将什么都不做，提供100将始终返回黑色。
   * amount 默认10
   */
  shade(amount = 10) {
    return this.mix(new common_vendor.UTSJSONObject({ r: 0, g: 0, b: 0, a: 1 }), amount);
  }
  /**
   * 将当前的颜色加深
   * amount 默认10
   */
  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c(new common_vendor.UTSJSONObject({
      h,
      s,
      l,
      a: this.a
    }));
  }
  /**
   * 将当前的颜色变亮
   * amount 默认10
   */
  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c(new common_vendor.UTSJSONObject({
      h,
      s,
      l,
      a: this.a
    }));
  }
  /**
   * 返回当前颜色是否为深色
   */
  isDark() {
    return this.getBrightness() < 128;
  }
  /**
   * 返回当前颜色是否为亮色
   */
  isLight() {
    return this.getBrightness() >= 128;
  }
}
exports.Coloruts = Coloruts;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/coloruts/conversion.js.map
