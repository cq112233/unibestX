import { c as clamp, p as padZero } from "../../libs/utils/basic.js";
import { a as ColorPickerRGB, b as ColorPickerHSV } from "./type.js";
import "../../libs/plugin/coloruts/constant.js";
import "../../libs/plugin/coloruts/type.js";
import "../../libs/plugin/dateuts/type.js";
import "../../libs/plugin/dateuts/locale.js";
const defaultColor = "#1989fa";
const parseNumber = (value, fallback) => {
  const parsed = parseFloat(value);
  if (isNaN(parsed)) {
    return fallback;
  }
  return parsed;
};
const clampInt = (value, minValue, maxValue) => {
  return Math.round(clamp(value, minValue, maxValue));
};
const clampAlpha = (value) => {
  return clamp(Math.round(value * 100) / 100, 0, 1);
};
const percentToAlpha = (value) => {
  return clampAlpha(value / 100);
};
const parseRgbaColor = (value) => {
  const matched = value.trim().match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d*\.?\d+)\s*\)$/i);
  if (matched == null)
    return null;
  const rText = matched[1];
  const gText = matched[2];
  const bText = matched[3];
  const aText = matched[4];
  if (rText == null || gText == null || bText == null || aText == null)
    return null;
  return {
    r: clampInt(parseInt(rText), 0, 255),
    g: clampInt(parseInt(gText), 0, 255),
    b: clampInt(parseInt(bText), 0, 255),
    a: clampAlpha(parseNumber(aText, 1)),
    format: "RGBA"
  };
};
const parseHexColor = (value) => {
  const raw = value.trim();
  const matched = raw.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
  if (matched == null)
    return null;
  const hexSource = matched[1];
  if (hexSource == null)
    return null;
  let hex = hexSource.toUpperCase();
  if (hex.length == 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  if (hex.length == 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: 1,
      format: "HEX"
    };
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: clampAlpha(parseInt(hex.slice(6, 8), 16) / 255),
    format: "RGBA"
  };
};
const parseRgbColor = (value) => {
  const matched = value.trim().match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
  if (matched == null)
    return null;
  const rText = matched[1];
  const gText = matched[2];
  const bText = matched[3];
  if (rText == null || gText == null || bText == null)
    return null;
  return {
    r: clampInt(parseInt(rText), 0, 255),
    g: clampInt(parseInt(gText), 0, 255),
    b: clampInt(parseInt(bText), 0, 255),
    a: 1,
    format: "RGB"
  };
};
const parseColor = (value) => {
  const rgbaParsed = parseRgbaColor(value);
  if (rgbaParsed != null)
    return rgbaParsed;
  const rgbParsed = parseRgbColor(value);
  if (rgbParsed != null)
    return rgbParsed;
  const hexParsed = parseHexColor(value);
  if (hexParsed != null)
    return hexParsed;
  return parseHexColor(defaultColor);
};
const formatAlpha = (value) => {
  const fixed = Math.round(value * 100) / 100;
  let text = fixed.toString();
  if (text.indexOf(".") >= 0) {
    text = text.replace(/0+$/, "").replace(/\.$/, "");
  }
  return text;
};
const rgbaToHex = (r, g, b, a = null) => {
  const rgbHex = `#${padZero(r.toString(16))}${padZero(g.toString(16))}${padZero(b.toString(16))}`;
  if (a == null || clampAlpha(a) >= 1) {
    return rgbHex;
  }
  const alphaHex = padZero(clampInt(clampAlpha(a) * 255, 0, 255).toString(16));
  return `${rgbHex}${alphaHex}`;
};
const rgbToHsv = (r, g, b) => {
  const rValue = r / 255;
  const gValue = g / 255;
  const bValue = b / 255;
  const max = Math.max(rValue, gValue, bValue);
  const min = Math.min(rValue, gValue, bValue);
  const delta = max - min;
  let hue = 0;
  if (delta > 0) {
    if (max == rValue) {
      hue = 60 * ((gValue - bValue) / delta % 6);
    } else if (max == gValue) {
      hue = 60 * ((bValue - rValue) / delta + 2);
    } else {
      hue = 60 * ((rValue - gValue) / delta + 4);
    }
  }
  if (hue < 0) {
    hue += 360;
  }
  const saturation = max == 0 ? 0 : delta / max;
  return new ColorPickerHSV({
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    v: Math.round(max * 100)
  });
};
const hsvToRgb = (h, s, v) => {
  const hue = (h % 360 + 360) % 360;
  const saturation = clamp(s, 0, 100) / 100;
  const value = clamp(v, 0, 100) / 100;
  const chroma = value * saturation;
  const segment = hue / 60;
  const x = chroma * (1 - Math.abs(segment % 2 - 1));
  const match = value - chroma;
  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;
  if (segment >= 0 && segment < 1) {
    rPrime = chroma;
    gPrime = x;
  } else if (segment < 2) {
    rPrime = x;
    gPrime = chroma;
  } else if (segment < 3) {
    gPrime = chroma;
    bPrime = x;
  } else if (segment < 4) {
    gPrime = x;
    bPrime = chroma;
  } else if (segment < 5) {
    rPrime = x;
    bPrime = chroma;
  } else {
    rPrime = chroma;
    bPrime = x;
  }
  return new ColorPickerRGB({
    r: clampInt((rPrime + match) * 255, 0, 255),
    g: clampInt((gPrime + match) * 255, 0, 255),
    b: clampInt((bPrime + match) * 255, 0, 255)
  });
};
export {
  parseHexColor as a,
  parseNumber as b,
  clampInt as c,
  defaultColor as d,
  percentToAlpha as e,
  clampAlpha as f,
  rgbToHsv as g,
  hsvToRgb as h,
  formatAlpha as i,
  parseColor as p,
  rgbaToHex as r
};
//# sourceMappingURL=utils.js.map
