"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-barcode"
}, { __name: "up-barcode", props: {
  value: {
    type: [String, Number],
    default: ""
  },
  format: {
    type: String,
    default: "auto"
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 80
  },
  displayValue: {
    type: Boolean,
    default: true
  },
  text: {
    type: String,
    default: ""
  },
  fontOptions: {
    type: String,
    default: ""
  },
  font: {
    type: String,
    default: "monospace"
  },
  textAlign: {
    type: String,
    default: "center"
  },
  textPosition: {
    type: String,
    default: "bottom"
  },
  textMargin: {
    type: Number,
    default: 2
  },
  fontSize: {
    type: Number,
    default: 14
  },
  background: {
    type: String,
    default: "#ffffff"
  },
  lineColor: {
    type: String,
    default: "#000000"
  },
  margin: {
    type: Number,
    default: 10
  },
  marginTop: {
    type: Number,
    default: -1
  },
  marginBottom: {
    type: Number,
    default: -1
  },
  marginLeft: {
    type: Number,
    default: -1
  },
  marginRight: {
    type: Number,
    default: -1
  },
  useCanvas: {
    type: Boolean,
    default: true
  }
}, emits: ["rendered", "error"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function stringValue(value = null) {
    return value == null ? "" : value.toString();
  }
  function normalizeNumber(value = null, defaultValue) {
    if (typeof value === "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function digitAt(value, index) {
    return parseInt(value.substring(index, index + 1));
  }
  function code128Patterns() {
    return [
      "11011001100",
      "11001101100",
      "11001100110",
      "10010011000",
      "10010001100",
      "10001001100",
      "10011001000",
      "10011000100",
      "10001100100",
      "11001001000",
      "11001000100",
      "11000100100",
      "10110011100",
      "10011011100",
      "10011001110",
      "10111001100",
      "10011101100",
      "10011100110",
      "11001110010",
      "11001011100",
      "11001001110",
      "11011100100",
      "11001110100",
      "11101101110",
      "11101001100",
      "11100101100",
      "11100100110",
      "11101100100",
      "11100110100",
      "11100110010",
      "11011011000",
      "11011000110",
      "11000110110",
      "10100011000",
      "10001011000",
      "10001000110",
      "10110001000",
      "10001101000",
      "10001100010",
      "11010001000",
      "11000101000",
      "11000100010",
      "10110111000",
      "10110001110",
      "10001101110",
      "10111011000",
      "10111000110",
      "10001110110",
      "11101110110",
      "11010001110",
      "11000101110",
      "11011101000",
      "11011100010",
      "11011101110",
      "11101011000",
      "11101000110",
      "11100010110",
      "11101101000",
      "11101100010",
      "11100011010",
      "11101111010",
      "11001000010",
      "11110001010",
      "10100110000",
      "10100001100",
      "10010110000",
      "10010000110",
      "10000101100",
      "10000100110",
      "10110010000",
      "10110000100",
      "10011010000",
      "10011000010",
      "10000110100",
      "10000110010",
      "11000010010",
      "11001010000",
      "11110111010",
      "11000010100",
      "10001111010",
      "10100111100",
      "10010111100",
      "10010011110",
      "10111100100",
      "10011110100",
      "10011110010",
      "11110100100",
      "11110010100",
      "11110010010",
      "11011011110",
      "11011110110",
      "11110110110",
      "10101111000",
      "10100011110",
      "10001011110",
      "10111101000",
      "10111100010",
      "11110101000",
      "11110100010",
      "10111011110",
      "10111101110",
      "11101011110",
      "11110101110",
      "11010000100",
      "11010010000",
      "11010011100",
      "11000111010"
    ];
  }
  function leftOddCodes() {
    return ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"];
  }
  function leftEvenCodes() {
    return ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"];
  }
  function rightCodes() {
    return ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"];
  }
  function code39Map() {
    return new common_vendor.UTSJSONObject({
      "0": "101001101101",
      "1": "110100101011",
      "2": "101100101011",
      "3": "110110010101",
      "4": "101001101011",
      "5": "110100110101",
      "6": "101100110101",
      "7": "101001011011",
      "8": "110100101101",
      "9": "101100101101",
      "A": "110101001011",
      "B": "101101001011",
      "C": "110110100101",
      "D": "101011001011",
      "E": "110101100101",
      "F": "101101100101",
      "G": "101010011011",
      "H": "110101001101",
      "I": "101101001101",
      "J": "101011001101",
      "K": "110101010011",
      "L": "101101010011",
      "M": "110110101001",
      "N": "101011010011",
      "O": "110101101001",
      "P": "101101101001",
      "Q": "101010110011",
      "R": "110101011001",
      "S": "101101011001",
      "T": "101011011001",
      "U": "110010101011",
      "V": "100011101010111",
      "W": "111000111010101",
      "X": "100010111010111",
      "Y": "111000101110101",
      "Z": "100011101110101",
      "-": "100010101110111",
      ".": "111000101011101",
      " ": "100011101011101",
      "*": "100010111011101",
      "$": "100010001000101",
      "/": "100010001010001",
      "+": "100010100010001",
      "%": "101000100010001"
    });
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const canvasId = common_vendor.ref("up-barcode-" + Date.now().toString());
  const barcodeImage = common_vendor.ref("");
  const showCanvas = common_vendor.ref(false);
  let canvasContext = null;
  let ctx = null;
  const bars = common_vendor.ref([]);
  const canvasWidth = common_vendor.ref(200);
  const canvasHeight = common_vendor.ref(80);
  const error = common_vendor.ref("");
  const marginTopValue = common_vendor.computed(() => {
    return props.marginTop >= 0 ? props.marginTop : props.margin;
  });
  const marginBottomValue = common_vendor.computed(() => {
    return props.marginBottom >= 0 ? props.marginBottom : props.margin;
  });
  const marginLeftValue = common_vendor.computed(() => {
    return props.marginLeft >= 0 ? props.marginLeft : props.margin;
  });
  const marginRightValue = common_vendor.computed(() => {
    return props.marginRight >= 0 ? props.marginRight : props.margin;
  });
  const displayText = common_vendor.computed(() => {
    return props.text.length > 0 ? props.text : stringValue(props.value);
  });
  const showTopText = common_vendor.computed(() => {
    return props.displayValue && props.textPosition == "top" && error.value.length == 0;
  });
  const showBottomText = common_vendor.computed(() => {
    return props.displayValue && props.textPosition != "top" && error.value.length == 0;
  });
  const showImage = common_vendor.computed(() => {
    return props.useCanvas == false && barcodeImage.value.length > 0 && error.value.length == 0;
  });
  const rootStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: canvasWidth.value.toString() + "px",
      minHeight: canvasHeight.value.toString() + "px",
      paddingTop: marginTopValue.value.toString() + "px",
      paddingBottom: marginBottomValue.value.toString() + "px",
      paddingLeft: marginLeftValue.value.toString() + "px",
      paddingRight: marginRightValue.value.toString() + "px",
      backgroundColor: props.background
    });
  });
  const barcodeStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: props.width.toString() + "px",
      height: props.height.toString() + "px",
      backgroundColor: props.background
    });
  });
  const canvasStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: canvasWidth.value.toString() + "px",
      height: canvasHeight.value.toString() + "px"
    });
  });
  const imageStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: canvasWidth.value.toString() + "px",
      height: canvasHeight.value.toString() + "px"
    });
  });
  const textStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: props.fontSize.toString() + "px",
      lineHeight: (props.fontSize + props.textMargin).toString() + "px",
      color: props.lineColor,
      textAlign: props.textAlign
    });
  });
  function getBarStyle(bar) {
    return new common_vendor.UTSJSONObject({
      width: normalizeNumber(bar["width"], 1).toString() + "px",
      height: props.height.toString() + "px",
      backgroundColor: stringValue(bar["color"])
    });
  }
  function getErrorMessage(err = null) {
    if (err == null)
      return "";
    const errObj = err;
    const message = errObj["message"];
    return message == null ? err.toString() : message.toString();
  }
  function createBars(bits) {
    const list = [];
    if (bits.length == 0)
      return list;
    const moduleWidth = props.width / bits.length;
    let current = bits.substring(0, 1);
    let count = 1;
    for (let i = 1; i < bits.length; i++) {
      const bit = bits.substring(i, i + 1);
      if (bit == current) {
        count++;
      } else {
        list.push(new common_vendor.UTSJSONObject({
          color: current == "1" ? props.lineColor : props.background,
          width: count * moduleWidth
        }));
        current = bit;
        count = 1;
      }
    }
    list.push(new common_vendor.UTSJSONObject({
      color: current == "1" ? props.lineColor : props.background,
      width: count * moduleWidth
    }));
    return list;
  }
  function encodeCode128(data) {
    const chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    const codes = [];
    let checksum = 104;
    codes.push(104);
    for (let i = 0; i < data.length; i++) {
      const code = chars.indexOf(data.substring(i, i + 1));
      if (code < 0) {
        throw new Error("Invalid character in CODE128");
      }
      codes.push(code);
      checksum += code * (i + 1);
    }
    codes.push(checksum % 103);
    codes.push(106);
    const patterns = code128Patterns();
    let barcode = "";
    for (let i = 0; i < codes.length; i++) {
      barcode += patterns[codes[i]];
    }
    return barcode + "00000";
  }
  function encodeCode39(data) {
    const codes = code39Map();
    const val = data.toUpperCase();
    let barcode = stringValue(codes["*"]);
    for (let i = 0; i < val.length; i++) {
      const char = val.substring(i, i + 1);
      const code = codes[char];
      if (code == null) {
        throw new Error("Invalid character in CODE39");
      }
      barcode += "0" + code.toString();
    }
    return barcode + "0" + stringValue(codes["*"]);
  }
  function encodeEAN13(data) {
    if (!/^\d{13}$/.test(data)) {
      throw new Error("EAN13 must be 13 digits");
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const digit = digitAt(data, i);
      sum += i % 2 == 0 ? digit : digit * 3;
    }
    const checkDigit = (10 - sum % 10) % 10;
    if (digitAt(data, 12) != checkDigit) {
      throw new Error("Invalid EAN13 check digit");
    }
    const leftData = data.substring(1, 7);
    const rightData = data.substring(7, 13);
    const parity = [
      "LLLLLL",
      "LLGLGG",
      "LLGGLG",
      "LLGGGL",
      "LGLLGG",
      "LGGLLG",
      "LGGGLL",
      "LGLGLG",
      "LGLGGL",
      "LGGLGL"
    ];
    const odd = leftOddCodes();
    const even = leftEvenCodes();
    const right = rightCodes();
    const pattern = parity[digitAt(data, 0)];
    let barcode = "101";
    for (let i = 0; i < leftData.length; i++) {
      const digit = digitAt(leftData, i);
      barcode += pattern.substring(i, i + 1) == "L" ? odd[digit] : even[digit];
    }
    barcode += "01010";
    for (let i = 0; i < rightData.length; i++) {
      barcode += right[digitAt(rightData, i)];
    }
    return barcode + "101";
  }
  function encodeEAN8(data) {
    if (!/^\d{8}$/.test(data)) {
      throw new Error("EAN8 must be 8 digits");
    }
    let sum = 0;
    for (let i = 0; i < 7; i++) {
      const digit = digitAt(data, i);
      sum += digit * (i % 2 == 0 ? 3 : 1);
    }
    const checkDigit = (10 - sum % 10) % 10;
    if (digitAt(data, 7) != checkDigit) {
      throw new Error("Invalid EAN8 check digit");
    }
    const odd = leftOddCodes();
    const right = rightCodes();
    let barcode = "101";
    for (let i = 0; i < 4; i++) {
      barcode += odd[digitAt(data, i)];
    }
    barcode += "01010";
    for (let i = 4; i < 8; i++) {
      barcode += right[digitAt(data, i)];
    }
    return barcode + "101";
  }
  function encodeEAN52(data, fmt) {
    const length = fmt == "EAN5" ? 5 : 2;
    if (data.length != length || !/^\d+$/.test(data)) {
      throw new Error(fmt + " must be " + length.toString() + " digits");
    }
    const codes = leftOddCodes();
    let barcode = "1011";
    for (let i = 0; i < data.length; i++) {
      if (i > 0) {
        barcode += "01";
      }
      barcode += codes[digitAt(data, i)];
    }
    return barcode;
  }
  function encodeUPCA(data) {
    let val = data;
    if (/^\d{11}$/.test(val)) {
      let sum = 0;
      for (let i = 0; i < 11; i++) {
        const digit = digitAt(val, i);
        sum += i % 2 == 0 ? digit * 3 : digit;
      }
      val += ((10 - sum % 10) % 10).toString();
    }
    if (!/^\d{12}$/.test(val)) {
      throw new Error("UPC-A must be 11 or 12 digits");
    }
    return encodeEAN13("0" + val);
  }
  function encodeUPCE(data) {
    let val = data;
    if (/^\d{7}$/.test(val)) {
      let sum = 0;
      for (let i = 0; i < 7; i++) {
        const digit = digitAt(val, i);
        sum += i % 2 == 0 ? digit * 3 : digit;
      }
      val += ((10 - sum % 10) % 10).toString();
    }
    if (!/^\d{8}$/.test(val)) {
      throw new Error("UPC-E must be 7 or 8 digits");
    }
    const odd = leftOddCodes();
    const even = leftEvenCodes();
    const middle = val.substring(1, 7);
    const checkDigit = val.substring(7, 8);
    let pattern = "EEOOOO";
    if (checkDigit == "0" || checkDigit == "1" || checkDigit == "2" || checkDigit == "3") {
      pattern = "EEEEOO";
    } else if (checkDigit == "4") {
      pattern = "EEEOOO";
    }
    let barcode = "101";
    for (let i = 0; i < middle.length; i++) {
      const digit = digitAt(middle, i);
      barcode += pattern.substring(i, i + 1) == "E" ? even[digit] : odd[digit];
    }
    return barcode + "010101101";
  }
  function encodeBarcode(val, fmt) {
    switch (fmt) {
      case "CODE39":
        return encodeCode39(val);
      case "EAN13":
        return encodeEAN13(val);
      case "EAN8":
        return encodeEAN8(val);
      case "EAN5":
      case "EAN2":
        return encodeEAN52(val, fmt);
      case "UPC":
      case "UPCA":
        return encodeUPCA(val);
      case "UPCE":
        return encodeUPCE(val);
      case "CODE128":
      case "auto":
      default:
        return encodeCode128(val);
    }
  }
  function initCanvas() {
    return new Promise((resolve, reject) => {
      common_vendor.index.createCanvasContextAsync({
        id: canvasId.value,
        component: instance === null || instance === void 0 ? null : instance.proxy,
        success: (context) => {
          canvasContext = context;
          ctx = context.getContext("2d");
          resolve();
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  function drawCanvasText(context, barcodeY, textHeight) {
    const txt = displayText.value;
    const textX = props.textAlign == "left" ? marginLeftValue.value : props.textAlign == "right" ? canvasWidth.value - marginRightValue.value : canvasWidth.value / 2;
    let textY = props.textPosition == "top" ? marginTopValue.value + props.fontSize : barcodeY + props.height + props.textMargin + props.fontSize;
    if (textY > canvasHeight.value - marginBottomValue.value) {
      textY = canvasHeight.value - marginBottomValue.value - 2;
    }
    context.fillStyle = props.lineColor;
    context.font = props.fontOptions.length > 0 ? props.fontOptions + " " + props.fontSize.toString() + "px " + props.font : props.fontSize.toString() + "px " + props.font;
    context.textAlign = props.textAlign;
    context.fillText(txt, textX, textY);
  }
  function drawCanvasBarcode() {
    return new Promise((resolve, reject) => {
      const context = ctx;
      if (context == null) {
        reject(new Error("Canvas is not ready"));
        return null;
      }
      try {
        const bits = encodeBarcode(stringValue(props.value), props.format);
        context.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
        context.fillStyle = props.background;
        context.fillRect(0, 0, canvasWidth.value, canvasHeight.value);
        let barcodeY = marginTopValue.value;
        const textHeight = props.displayValue ? props.fontSize + props.textMargin : 0;
        if (props.displayValue && props.textPosition == "top") {
          barcodeY += textHeight;
        }
        const moduleWidth = props.width / Math.max(1, bits.length);
        context.fillStyle = props.lineColor;
        let x = marginLeftValue.value;
        for (let i = 0; i < bits.length; i++) {
          if (bits.substring(i, i + 1) == "1") {
            context.fillRect(x, barcodeY, moduleWidth + 0.5, props.height);
          }
          x += moduleWidth;
        }
        if (props.displayValue) {
          drawCanvasText(context, barcodeY, textHeight);
        }
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
  function exportImage() {
    return new Promise((resolve, reject) => {
      showCanvas.value = true;
      common_vendor.nextTick$1(() => {
        initCanvas().then(() => {
          drawCanvasBarcode().then(() => {
            if (canvasContext == null) {
              showCanvas.value = false;
              reject(new Error("Canvas is not ready"));
              return null;
            }
            const dataUrl = canvasContext.toDataURL("image/png", 1);
            showCanvas.value = false;
            emit("rendered", new common_vendor.UTSJSONObject({ type: "image", value: props.value, path: dataUrl }));
            resolve(dataUrl);
          }).catch((err = null) => {
            showCanvas.value = false;
            reject(err);
          });
        }).catch((err = null) => {
          showCanvas.value = false;
          reject(err);
        });
      });
    });
  }
  function generateBarcode() {
    try {
      error.value = "";
      const bits = encodeBarcode(stringValue(props.value), props.format);
      bars.value = createBars(bits);
      const textHeight = props.displayValue ? props.fontSize + props.textMargin : 0;
      canvasWidth.value = props.width + marginLeftValue.value + marginRightValue.value;
      canvasHeight.value = props.height + marginTopValue.value + marginBottomValue.value + textHeight;
      if (props.useCanvas == false) {
        common_vendor.nextTick$1(() => {
          exportImage().then((path) => {
            barcodeImage.value = path;
          }).catch((err = null) => {
            emit("error", err);
          });
        });
      } else {
        barcodeImage.value = "";
      }
      emit("rendered", new common_vendor.UTSJSONObject({
        type: props.useCanvas == false ? "image" : "view",
        value: props.value,
        format: props.format,
        path: barcodeImage.value
      }));
    } catch (err) {
      const message = getErrorMessage(err);
      error.value = message.length > 0 ? message : "生成条码失败";
      bars.value = [];
      emit("error", new common_vendor.UTSJSONObject({
        message: error.value,
        value: props.value,
        format: props.format
      }));
    }
  }
  function toTempFilePath(options = new common_vendor.UTSJSONObject({})) {
    const success = options["success"];
    const fail = options["fail"];
    exportImage().then((path) => {
      if (success != null) {
        success(new common_vendor.UTSJSONObject({ tempFilePath: path, path }));
      }
    }).catch((err = null) => {
      if (fail != null) {
        fail(err);
      } else {
        emit("error", err);
      }
    });
  }
  common_vendor.watch(() => {
    return [
      props.value,
      props.format,
      props.width,
      props.height,
      props.displayValue,
      props.text,
      props.textPosition,
      props.textMargin,
      props.fontSize,
      props.background,
      props.lineColor,
      props.margin
    ];
  }, () => {
    generateBarcode();
  });
  common_vendor.onMounted(() => {
    generateBarcode();
  });
  __expose({
    generateBarcode,
    toTempFilePath
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: showCanvas.value
    }, showCanvas.value ? {
      b: common_vendor.sei(canvasId.value, "canvas"),
      c: canvasId.value,
      d: common_vendor.s(canvasStyle.value)
    } : {}, {
      e: showImage.value
    }, showImage.value ? {
      f: barcodeImage.value,
      g: common_vendor.s(imageStyle.value)
    } : common_vendor.e({
      h: showTopText.value
    }, showTopText.value ? {
      i: common_vendor.t(displayText.value),
      j: common_vendor.s(textStyle.value)
    } : {}, {
      k: error.value.length > 0
    }, error.value.length > 0 ? {
      l: common_vendor.t(error.value),
      m: common_vendor.s(barcodeStyle.value)
    } : {
      n: common_vendor.f(bars.value, (bar, index, i0) => {
        return {
          a: index,
          b: common_vendor.s(getBarStyle(bar))
        };
      }),
      o: common_vendor.s(barcodeStyle.value)
    }, {
      p: showBottomText.value
    }, showBottomText.value ? {
      q: common_vendor.t(displayText.value),
      r: common_vendor.s(textStyle.value)
    } : {}), {
      s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      t: common_vendor.s(rootStyle.value),
      v: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9e34eb30"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-barcode/up-barcode.js.map
