import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { b as base64Encode, a as base64Decode, m as md5, s as sha256, h as hmacSha1, c as aesEncrypt, d as aesDecrypt, e as desEncrypt, f as desDecrypt, r as rsaGenerateKeyPair, g as rsaEncrypt, i as rsaDecrypt, j as rsaSign, k as rsaVerify, l as generateUUID } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/unix-crypto/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsCryptoDemoCard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "0470005b",
  __className,
  __filename: "src/pages/function/components/CryptoDemoCard.uvue",
  __name: "CryptoDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsCryptoDemoCardSharedData", sharedDataClassId: 0 })));
    const base64Input = ref("hello uni-app x");
    const base64EncodeResult = ref("");
    const base64DecodeResult = ref("");
    const hashInput = ref("hello uni-app x");
    const md5Result = ref("");
    const sha256Result = ref("");
    const hmacText = ref("hello uni-app x");
    const hmacKey = ref("secret-key");
    const hmacResult = ref("");
    const aesText = ref("hello uni-app x");
    const aesKey = ref("1234567890abcdef");
    const aesEncryptResult = ref("");
    const aesDecryptResult = ref("");
    const desText = ref("hello uni-app x");
    const desKey = ref("12345678");
    const desEncryptResult = ref("");
    const desDecryptResult = ref("");
    const rsaText = ref("hello uni-app x");
    const rsaPublicKey = ref("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLJXnLrDV0RxJWMHlsNc2glZlGd9GsJh6XV9LRsgLSlPYz2xEm751nqG1MLtkX+m/ov7YMNwyhwhw13PFCPfcpm0klWkcKPteEPOXUx3H6mVL2YMNUREtsMxub1zrvo0GNm688Py/8WhXzzxXT/nDe0owpCMmaQWaGP/diX7T7uQIDAQAB");
    const rsaPrivateKey = ref("MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMslecusNXRHElYweWw1zaCVmUZ30awmHpdX0tGyAtKU9jPbESbvnWeobUwu2Rf6b+i/tgw3DKHCHDXc8UI99ymbSSVaRwo+14Q85dTHcfqZUvZgw1RES2wzG5vXOu+jQY2brzw/L/xaFfPPFdP+cN7SjCkIyZpBZoY/92JftPu5AgMBAAECgYEAqjidxPdo1yUSjVwS8oRm6A9SnwSZkZljesdhZMq3qMKfRrZiufCAQbKU2whKatgz26CAp92c3RIs10lqc2o+5oKBOPNnAJXCmnjwNG9tlbKs0SpZjAgKgYv/uHlr2YX10xBQi1C7M2ySdbshj0inyyxzb6ibVJTmpHCFSkW1920CQQD/w6OYh87KOUYjan950HaSnc1g20HtI0rzRALRogGeQpo1qSeShfFGYOM219ee+9zawZLpw0X1W7BnH2vkNOXzAkEAy1VrNa4m0uC6NO+ytTEM6G+/WE8CuInIDvUzypLN8pNhev5/cPVzdZOcVlQLFZiPGe0vdu+hXmFvYYqWiymmowJANGdtea85241opZEIlXj1Eo1qq1HBbEky7i0dNr6u/jI/TodeKFNxYC4x3+bRsy1/zwKii2sLRn6G4lo5zQRZqQJAe8cA34mnOqHw2H6+BAza9bfo/EIEvv+o2Got3/gkBLHxGmVIgSP56C42clrw8HGRU1AOn9FaI1Ee83rhD9AIDwJAFs5T4UMe07NfVUIlN1jxyHvRwyXWjgex+6JbYXmhV9wjQ+taO74aO4cRwKhe0Yi5smGSR7+mzgJhJNdxn+5ntQ==");
    const rsaKeyPairResult = ref("");
    const rsaEncryptResult = ref("");
    const rsaDecryptResult = ref("");
    const rsaSignResult = ref("");
    const rsaVerifyResult = ref("");
    function errorMessage(e = null) {
      if (UTS.isInstanceOf(e, Error)) {
        return e.message;
      }
      return UTS.JSON.stringify(e);
    }
    async function handleBase64Encode() {
      try {
        base64EncodeResult.value = await base64Encode(base64Input.value);
        base64DecodeResult.value = "";
      } catch (e) {
        base64EncodeResult.value = errorMessage(e);
      }
    }
    async function handleBase64Decode() {
      try {
        const target = base64EncodeResult.value.length > 0 ? base64EncodeResult.value : base64Input.value;
        base64DecodeResult.value = await base64Decode(target);
      } catch (e) {
        base64DecodeResult.value = errorMessage(e);
      }
    }
    async function handleMd5() {
      try {
        md5Result.value = await md5(hashInput.value);
      } catch (e) {
        md5Result.value = errorMessage(e);
      }
    }
    async function handleSha256() {
      try {
        sha256Result.value = await sha256(hashInput.value);
      } catch (e) {
        sha256Result.value = errorMessage(e);
      }
    }
    async function handleHmac() {
      try {
        hmacResult.value = await hmacSha1(hmacText.value, hmacKey.value);
      } catch (e) {
        hmacResult.value = errorMessage(e);
      }
    }
    async function handleAesEncrypt() {
      try {
        aesEncryptResult.value = await aesEncrypt(aesText.value, aesKey.value);
        aesDecryptResult.value = "";
      } catch (e) {
        aesEncryptResult.value = errorMessage(e);
      }
    }
    async function handleAesDecrypt() {
      try {
        aesDecryptResult.value = await aesDecrypt(aesEncryptResult.value, aesKey.value);
      } catch (e) {
        aesDecryptResult.value = errorMessage(e);
      }
    }
    async function handleDesEncrypt() {
      try {
        desEncryptResult.value = await desEncrypt(desText.value, desKey.value);
        desDecryptResult.value = "";
      } catch (e) {
        desEncryptResult.value = errorMessage(e);
      }
    }
    async function handleDesDecrypt() {
      try {
        desDecryptResult.value = await desDecrypt(desEncryptResult.value, desKey.value);
      } catch (e) {
        desDecryptResult.value = errorMessage(e);
      }
    }
    async function handleRsaGenerateKeyPair() {
      var _a, _b;
      try {
        const jsonStr = await rsaGenerateKeyPair(1024);
        rsaKeyPairResult.value = jsonStr;
        try {
          const keyData = UTS.JSON.parse(jsonStr);
          const pub = (_a = keyData["publicKey"]) !== null && _a !== void 0 ? _a : "";
          if (pub.length > 0) {
            rsaPublicKey.value = pub;
          }
          const pri = (_b = keyData["privateKey"]) !== null && _b !== void 0 ? _b : "";
          if (pri.length > 0) {
            rsaPrivateKey.value = pri;
          }
        } catch (err) {
          uni.__f__("error", "at src/pages/function/components/CryptoDemoCard.uvue:374", "Failed to parse RSA keypair:", err);
        }
      } catch (e) {
        rsaKeyPairResult.value = errorMessage(e);
      }
    }
    async function handleRsaEncrypt() {
      try {
        rsaEncryptResult.value = await rsaEncrypt(rsaText.value, rsaPublicKey.value);
        rsaDecryptResult.value = "";
      } catch (e) {
        rsaEncryptResult.value = errorMessage(e);
      }
    }
    async function handleRsaDecrypt() {
      try {
        rsaDecryptResult.value = await rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value);
      } catch (e) {
        rsaDecryptResult.value = errorMessage(e);
      }
    }
    async function handleRsaSign() {
      try {
        rsaSignResult.value = await rsaSign(rsaText.value, rsaPrivateKey.value, "SHA-256");
        rsaVerifyResult.value = "";
      } catch (e) {
        rsaSignResult.value = errorMessage(e);
      }
    }
    async function handleRsaVerify() {
      try {
        const ok = await rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, "SHA-256");
        rsaVerifyResult.value = ok ? "通过 (true)" : "未通过 (false)";
      } catch (e) {
        rsaVerifyResult.value = errorMessage(e);
      }
    }
    const uuidResult = ref("");
    function handleGenerateUUID() {
      uuidResult.value = generateUUID();
    }
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      const n97 = _createSharedDataComponent(
        Card,
        "7eab2e55",
        { title: "加密解密工具 (crypto)" },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n1 = _createSharedDataComponentWithFallback(_component_input, "fece1fe2", {
              value: () => {
                return base64Input.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return base64Input.value = _value;
                };
              },
              placeholder: "请输入要编码的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 1, n1?.sharedData);
            _setSharedDataEvent(__sharedData, 12, handleBase64Encode);
            _setSharedDataEvent(__sharedData, 13, handleBase64Decode);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 27, _toDisplayString(base64EncodeResult.value));
              _setSharedData(__sharedData, 28, _toDisplayString(base64DecodeResult.value));
            });
            const n14 = _createSharedDataComponentWithFallback(_component_input, "daf6c3f4", {
              value: () => {
                return hashInput.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return hashInput.value = _value;
                };
              },
              placeholder: "请输入要计算摘要的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 2, n14?.sharedData);
            _setSharedDataEvent(__sharedData, 14, handleMd5);
            _setSharedDataEvent(__sharedData, 15, handleSha256);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 29, _toDisplayString(md5Result.value));
              _setSharedData(__sharedData, 30, _toDisplayString(sha256Result.value));
            });
            const n27 = _createSharedDataComponentWithFallback(_component_input, "daf5c386", {
              value: () => {
                return hmacText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return hmacText.value = _value;
                };
              },
              placeholder: "请输入要签名的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
            });
            _setSharedData(__sharedData, 3, n27?.sharedData);
            const n28 = _createSharedDataComponentWithFallback(_component_input, "daf5113e", {
              value: () => {
                return hmacKey.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return hmacKey.value = _value;
                };
              },
              placeholder: "请输入密钥 key",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 4, n28?.sharedData);
            _setSharedDataEvent(__sharedData, 16, handleHmac);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 31, _toDisplayString(hmacResult.value));
            });
            const n35 = _createSharedDataComponentWithFallback(_component_input, "daf43746", {
              value: () => {
                return aesText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return aesText.value = _value;
                };
              },
              placeholder: "请输入要加密的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
            });
            _setSharedData(__sharedData, 5, n35?.sharedData);
            const n36 = _createSharedDataComponentWithFallback(_component_input, "daf427c0", {
              value: () => {
                return aesKey.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return aesKey.value = _value;
                };
              },
              placeholder: "请输入 16 位密钥",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 6, n36?.sharedData);
            _setSharedDataEvent(__sharedData, 17, handleAesEncrypt);
            _setSharedDataEvent(__sharedData, 18, handleAesDecrypt);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 32, _toDisplayString(aesEncryptResult.value));
              _setSharedData(__sharedData, 33, _toDisplayString(aesDecryptResult.value));
            });
            const n49 = _createSharedDataComponentWithFallback(_component_input, "daf321c4", {
              value: () => {
                return desText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return desText.value = _value;
                };
              },
              placeholder: "请输入要加密的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
            });
            _setSharedData(__sharedData, 7, n49?.sharedData);
            const n50 = _createSharedDataComponentWithFallback(_component_input, "daf3123e", {
              value: () => {
                return desKey.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return desKey.value = _value;
                };
              },
              placeholder: "请输入 8 位密钥",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 8, n50?.sharedData);
            _setSharedDataEvent(__sharedData, 19, handleDesEncrypt);
            _setSharedDataEvent(__sharedData, 20, handleDesDecrypt);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 34, _toDisplayString(desEncryptResult.value));
              _setSharedData(__sharedData, 35, _toDisplayString(desDecryptResult.value));
            });
            const n63 = _createSharedDataComponentWithFallback(_component_input, "daf16e4a", {
              value: () => {
                return rsaText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return rsaText.value = _value;
                };
              },
              placeholder: "请输入要加密 / 签名的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
            });
            _setSharedData(__sharedData, 9, n63?.sharedData);
            _setSharedDataEvent(__sharedData, 21, handleRsaGenerateKeyPair);
            _setSharedDataEvent(__sharedData, 22, handleRsaEncrypt);
            const n69 = _createSharedDataComponentWithFallback(_component_input, "daf138c0", {
              value: () => {
                return rsaPublicKey.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return rsaPublicKey.value = _value;
                };
              },
              placeholder: "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
            });
            _setSharedData(__sharedData, 10, n69?.sharedData);
            const n70 = _createSharedDataComponentWithFallback(_component_input, "daf085c0", {
              value: () => {
                return rsaPrivateKey.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return rsaPrivateKey.value = _value;
                };
              },
              placeholder: "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 11, n70?.sharedData);
            _setSharedDataEvent(__sharedData, 23, handleRsaDecrypt);
            _setSharedDataEvent(__sharedData, 24, handleRsaSign);
            _setSharedDataEvent(__sharedData, 25, handleRsaVerify);
            _setSharedDataEvent(__sharedData, 26, handleGenerateUUID);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 36, _toDisplayString(rsaKeyPairResult.value));
              _setSharedData(__sharedData, 37, _toDisplayString(rsaEncryptResult.value));
              _setSharedData(__sharedData, 38, _toDisplayString(rsaDecryptResult.value));
              _setSharedData(__sharedData, 39, _toDisplayString(rsaSignResult.value));
              _setSharedData(__sharedData, 40, _toDisplayString(rsaVerifyResult.value));
              _setSharedData(__sharedData, 41, _toDisplayString(uuidResult.value));
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n97.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const CryptoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  CryptoDemoCard as C
};
//# sourceMappingURL=CryptoDemoCard.js.map
