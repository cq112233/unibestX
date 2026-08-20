import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { b as base64Encode, a as base64Decode, m as md5, s as sha256, h as hmacSha1, c as aesEncrypt, d as aesDecrypt, e as desEncrypt, f as desDecrypt, r as rsaGenerateKeyPair, g as rsaEncrypt, i as rsaDecrypt, j as rsaSign, k as rsaVerify, l as generateUUID } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/unix-crypto/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "CryptoDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
      var _a2, _b;
      try {
        const jsonStr = await rsaGenerateKeyPair(1024);
        rsaKeyPairResult.value = jsonStr;
        try {
          const keyData = UTS.JSON.parse(jsonStr);
          const pub = (_a2 = keyData["publicKey"]) !== null && _a2 !== void 0 ? _a2 : "";
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
    const __returned__ = { base64Input, base64EncodeResult, base64DecodeResult, hashInput, md5Result, sha256Result, hmacText, hmacKey, hmacResult, aesText, aesKey, aesEncryptResult, aesDecryptResult, desText, desKey, desEncryptResult, desDecryptResult, rsaText, rsaPublicKey, rsaPrivateKey, rsaKeyPairResult, rsaEncryptResult, rsaDecryptResult, rsaSignResult, rsaVerifyResult, errorMessage, handleBase64Encode, handleBase64Decode, handleMd5, handleSha256, handleHmac, handleAesEncrypt, handleAesDecrypt, handleDesEncrypt, handleDesDecrypt, handleRsaGenerateKeyPair, handleRsaEncrypt, handleRsaDecrypt, handleRsaSign, handleRsaVerify, uuidResult, handleGenerateUUID, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-9h5gkp-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1w4w6li-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-10y74dr-2":{"":{"marginBottom":16}},"wtu-14iesb0-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-66kyd8-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-8apbzm-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-bdtmoe-6":{"":{"fontSize":13}},"wtu-16mxvjr-7":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-19n0869-8":{"":{"color":"#1e293b"}},"wtu-1s1mjhg-9":{"":{"marginBottom":8}},"wtu-pcar7m-a":{"":{"height":38}},"wtu-im8kej-b":{"":{"backgroundColor":"#ffffff"}},"wtu-gp5z9k-c":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-1j56kvu-d":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-18nprza-e":{"":{"borderTopColor":"#cbd5e1","borderRightColor":"#cbd5e1","borderBottomColor":"#cbd5e1","borderLeftColor":"#cbd5e1"}},"wtu-1jg4z3q-f":{"":{"color":"#334155"}},"wtu-18k3p2j-g":{"":{"marginBottom":12}},"wtu-19z8y3q-h":{"":{"flexDirection":"row"}},"wtu-hj68nu-i":{"":{"alignItems":"center"}},"wtu-1vkw08h-j":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-f3mfu0-k":{"":{"height":36}},"wtu-xyjw4i-l":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-15ounam-m":{"":{"backgroundColor":"#10b981"}},"wtu-qbc0lv-n":{"":{"display":"flex"}},"wtu-1i4ccha-o":{"":{"justifyContent":"center"}},"wtu-1vx8xro-p":{"":{"marginRight":8}},"wtu-7s6w8j-q":{"":{"color":"#ffffff"}},"wtu-x8830x-r":{"":{"backgroundColor":"#6366f1"}},"wtu-26e19f-s":{"":{"fontSize":12}},"wtu-11l2toq-t":{"":{"color":"#64748b"}},"wtu-rggjlv-u":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-17238c4-v":{"":{"marginTop":2}},"wtu-137543e-w":{"":{"marginTop":8}},"wtu-a9cvf4-x":{"":{"backgroundColor":"#f59e0b"}},"wtu-1lg57za-y":{"":{"backgroundColor":"#ef4444"}},"wtu-159osg-z":{"":{"color":"#059669"}},"wtu-o6c3eh-10":{"":{"width":"100%"}},"wtu-1mrou86-11":{"":{"backgroundColor":"#0ea5e9"}},"wtu-szquah-12":{"":{"backgroundColor":"#8b5cf6"}},"wtu-aqzh5-13":{"":{"backgroundColor":"#d946ef"}},"wtu-xjd3x3-14":{"":{"backgroundColor":"#14b8a6"}},"wtu-3vwplv-15":{"":{"backgroundColor":"#f97316"}},"wtu-1j7sztc-16":{"":{"backgroundColor":"#0d9488"}},"wtu-s6x1vz-17":{"":{"backgroundColor":"#0284c7"}},"wtu-6rbxlm-18":{"":{"backgroundColor":"#7c3aed"}},"wtu-1ac3pue-19":{"":{"backgroundColor":"#db2777"}},"wtu-p8gyew-1a":{"":{"backgroundColor":"#65a30d"}},"wtu-1322i0s-1b":{"":{"backgroundColor":"#2563eb"}},"wtu-1jc7f14-1c":{"":{"color":"#2563eb"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withDirectives: _withDirectives, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "加密解密工具 (crypto)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "1. Base64 编码 / 解码"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.base64Input = $event),
            placeholder: "请输入要编码的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.base64Input]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-15ounam-m wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleBase64Encode
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "编码")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-x8830x-r wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleBase64Decode
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "解码")
          ])
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "编码结果 (Base64):"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.base64EncodeResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "解码结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.base64DecodeResult),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "2. MD5 / SHA-256 摘要"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.hashInput = $event),
            placeholder: "请输入要计算摘要的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.hashInput]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-a9cvf4-x wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleMd5
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "MD5")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1lg57za-y wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleSha256
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "SHA-256")
          ])
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "MD5:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.md5Result),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "SHA-256:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.sha256Result),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "3. HMAC-SHA1 签名"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.hmacText = $event),
            placeholder: "请输入要签名的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.hmacText]
        ]),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.hmacKey = $event),
            placeholder: "请输入密钥 key",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.hmacKey]
        ]),
        _createElementVNode("view", {
          class: "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1mrou86-11 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
          onClick: $setup.handleHmac
        }, [
          _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "计算 HMAC-SHA1")
        ]),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-137543e-w",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.hmacResult),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "4. AES 加密 / 解密 (key 需 16 位)"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.aesText = $event),
            placeholder: "请输入要加密的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.aesText]
        ]),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.aesKey = $event),
            placeholder: "请输入 16 位密钥",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.aesKey]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-szquah-12 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleAesEncrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "加密")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-aqzh5-13 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleAesDecrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "解密")
          ])
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "加密结果 (hex):"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.aesEncryptResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "解密结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.aesDecryptResult),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "5. DES 加密 / 解密 (key 需 8 位)"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.desText = $event),
            placeholder: "请输入要加密的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.desText]
        ]),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.desKey = $event),
            placeholder: "请输入 8 位密钥",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.desKey]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-xjd3x3-14 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleDesEncrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "加密")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-3vwplv-15 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleDesDecrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "解密")
          ])
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "加密结果 (hex):"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.desEncryptResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "解密结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.desDecryptResult),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "6. RSA 非对称加密 / 签名 (示例密钥 1024 位)"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.rsaText = $event),
            placeholder: "请输入要加密 / 签名的文本",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.rsaText]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1j7sztc-16 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleRsaGenerateKeyPair
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "生成密钥对")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-s6x1vz-17 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleRsaEncrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "公钥加密")
          ])
        ]),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.rsaPublicKey = $event),
            placeholder: "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.rsaPublicKey]
        ]),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.rsaPrivateKey = $event),
            placeholder: "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）",
            class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.rsaPrivateKey]
        ]),
        _createElementVNode("view", { class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }, [
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-6rbxlm-18 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleRsaDecrypt
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "私钥解密")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1ac3pue-19 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: $setup.handleRsaSign
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "SHA-256 签名")
          ]),
          _createElementVNode("view", {
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-p8gyew-1a wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: $setup.handleRsaVerify
          }, [
            _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "验签")
          ])
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "密钥对结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.rsaKeyPairResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "加密结果 (hex):"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.rsaEncryptResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "解密结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.rsaDecryptResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "签名结果 (hex):"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.rsaSignResult),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }, "验签结果:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.rsaVerifyResult),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }, [
        _createElementVNode("text", { class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }, "7. UUID 生成 (v4)"),
        _createElementVNode("view", {
          class: "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1322i0s-1b wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1s1mjhg-9",
          onClick: $setup.handleGenerateUUID
        }, [
          _createElementVNode("text", { class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }, "生成 UUID")
        ]),
        _createElementVNode("text", { class: "wtu-26e19f-s wtu-11l2toq-t" }, "生成的 UUID:"),
        _createElementVNode(
          "text",
          {
            class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jc7f14-1c wtu-17238c4-v",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.uuidResult),
          1
          /* TEXT */
        )
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const CryptoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/CryptoDemoCard.uvue"]]);
export {
  CryptoDemoCard as C
};
//# sourceMappingURL=CryptoDemoCard.js.map
