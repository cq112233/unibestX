"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_unixCrypto_index = require("../../../../uni_modules/unix-crypto/index.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CryptoDemoCard",
  setup(__props) {
    const base64Input = common_vendor.ref("hello uni-app x");
    const base64EncodeResult = common_vendor.ref("");
    const base64DecodeResult = common_vendor.ref("");
    const hashInput = common_vendor.ref("hello uni-app x");
    const md5Result = common_vendor.ref("");
    const sha256Result = common_vendor.ref("");
    const hmacText = common_vendor.ref("hello uni-app x");
    const hmacKey = common_vendor.ref("secret-key");
    const hmacResult = common_vendor.ref("");
    const aesText = common_vendor.ref("hello uni-app x");
    const aesKey = common_vendor.ref("1234567890abcdef");
    const aesEncryptResult = common_vendor.ref("");
    const aesDecryptResult = common_vendor.ref("");
    const desText = common_vendor.ref("hello uni-app x");
    const desKey = common_vendor.ref("12345678");
    const desEncryptResult = common_vendor.ref("");
    const desDecryptResult = common_vendor.ref("");
    const rsaText = common_vendor.ref("hello uni-app x");
    const rsaPublicKey = common_vendor.ref("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLJXnLrDV0RxJWMHlsNc2glZlGd9GsJh6XV9LRsgLSlPYz2xEm751nqG1MLtkX+m/ov7YMNwyhwhw13PFCPfcpm0klWkcKPteEPOXUx3H6mVL2YMNUREtsMxub1zrvo0GNm688Py/8WhXzzxXT/nDe0owpCMmaQWaGP/diX7T7uQIDAQAB");
    const rsaPrivateKey = common_vendor.ref("MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMslecusNXRHElYweWw1zaCVmUZ30awmHpdX0tGyAtKU9jPbESbvnWeobUwu2Rf6b+i/tgw3DKHCHDXc8UI99ymbSSVaRwo+14Q85dTHcfqZUvZgw1RES2wzG5vXOu+jQY2brzw/L/xaFfPPFdP+cN7SjCkIyZpBZoY/92JftPu5AgMBAAECgYEAqjidxPdo1yUSjVwS8oRm6A9SnwSZkZljesdhZMq3qMKfRrZiufCAQbKU2whKatgz26CAp92c3RIs10lqc2o+5oKBOPNnAJXCmnjwNG9tlbKs0SpZjAgKgYv/uHlr2YX10xBQi1C7M2ySdbshj0inyyxzb6ibVJTmpHCFSkW1920CQQD/w6OYh87KOUYjan950HaSnc1g20HtI0rzRALRogGeQpo1qSeShfFGYOM219ee+9zawZLpw0X1W7BnH2vkNOXzAkEAy1VrNa4m0uC6NO+ytTEM6G+/WE8CuInIDvUzypLN8pNhev5/cPVzdZOcVlQLFZiPGe0vdu+hXmFvYYqWiymmowJANGdtea85241opZEIlXj1Eo1qq1HBbEky7i0dNr6u/jI/TodeKFNxYC4x3+bRsy1/zwKii2sLRn6G4lo5zQRZqQJAe8cA34mnOqHw2H6+BAza9bfo/EIEvv+o2Got3/gkBLHxGmVIgSP56C42clrw8HGRU1AOn9FaI1Ee83rhD9AIDwJAFs5T4UMe07NfVUIlN1jxyHvRwyXWjgex+6JbYXmhV9wjQ+taO74aO4cRwKhe0Yi5smGSR7+mzgJhJNdxn+5ntQ==");
    const rsaKeyPairResult = common_vendor.ref("");
    const rsaEncryptResult = common_vendor.ref("");
    const rsaDecryptResult = common_vendor.ref("");
    const rsaSignResult = common_vendor.ref("");
    const rsaVerifyResult = common_vendor.ref("");
    function errorMessage(e = null) {
      if (common_vendor.UTS.isInstanceOf(e, Error)) {
        return e.message;
      }
      return common_vendor.UTS.JSON.stringify(e);
    }
    function handleBase64Encode() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          base64EncodeResult.value = yield uni_modules_unixCrypto_index.base64Encode(base64Input.value);
          base64DecodeResult.value = "";
        } catch (e) {
          base64EncodeResult.value = errorMessage(e);
        }
      });
    }
    function handleBase64Decode() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const target = base64EncodeResult.value.length > 0 ? base64EncodeResult.value : base64Input.value;
          base64DecodeResult.value = yield uni_modules_unixCrypto_index.base64Decode(target);
        } catch (e) {
          base64DecodeResult.value = errorMessage(e);
        }
      });
    }
    function handleMd5() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          md5Result.value = yield uni_modules_unixCrypto_index.md5(hashInput.value);
        } catch (e) {
          md5Result.value = errorMessage(e);
        }
      });
    }
    function handleSha256() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          sha256Result.value = yield uni_modules_unixCrypto_index.sha256(hashInput.value);
        } catch (e) {
          sha256Result.value = errorMessage(e);
        }
      });
    }
    function handleHmac() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          hmacResult.value = yield uni_modules_unixCrypto_index.hmacSha1(hmacText.value, hmacKey.value);
        } catch (e) {
          hmacResult.value = errorMessage(e);
        }
      });
    }
    function handleAesEncrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          aesEncryptResult.value = yield uni_modules_unixCrypto_index.aesEncrypt(aesText.value, aesKey.value);
          aesDecryptResult.value = "";
        } catch (e) {
          aesEncryptResult.value = errorMessage(e);
        }
      });
    }
    function handleAesDecrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          aesDecryptResult.value = yield uni_modules_unixCrypto_index.aesDecrypt(aesEncryptResult.value, aesKey.value);
        } catch (e) {
          aesDecryptResult.value = errorMessage(e);
        }
      });
    }
    function handleDesEncrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          desEncryptResult.value = yield uni_modules_unixCrypto_index.desEncrypt(desText.value, desKey.value);
          desDecryptResult.value = "";
        } catch (e) {
          desEncryptResult.value = errorMessage(e);
        }
      });
    }
    function handleDesDecrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          desDecryptResult.value = yield uni_modules_unixCrypto_index.desDecrypt(desEncryptResult.value, desKey.value);
        } catch (e) {
          desDecryptResult.value = errorMessage(e);
        }
      });
    }
    function handleRsaGenerateKeyPair() {
      var _a, _b;
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const jsonStr = yield uni_modules_unixCrypto_index.rsaGenerateKeyPair(1024);
          rsaKeyPairResult.value = jsonStr;
          try {
            const keyData = common_vendor.UTS.JSON.parse(jsonStr);
            const pub = (_a = keyData["publicKey"]) !== null && _a !== void 0 ? _a : "";
            if (pub.length > 0) {
              rsaPublicKey.value = pub;
            }
            const pri = (_b = keyData["privateKey"]) !== null && _b !== void 0 ? _b : "";
            if (pri.length > 0) {
              rsaPrivateKey.value = pri;
            }
          } catch (err) {
            common_vendor.index.__f__("error", "at src/pages/function/components/CryptoDemoCard.uvue:374", "Failed to parse RSA keypair:", err);
          }
        } catch (e) {
          rsaKeyPairResult.value = errorMessage(e);
        }
      });
    }
    function handleRsaEncrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          rsaEncryptResult.value = yield uni_modules_unixCrypto_index.rsaEncrypt(rsaText.value, rsaPublicKey.value);
          rsaDecryptResult.value = "";
        } catch (e) {
          rsaEncryptResult.value = errorMessage(e);
        }
      });
    }
    function handleRsaDecrypt() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          rsaDecryptResult.value = yield uni_modules_unixCrypto_index.rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value);
        } catch (e) {
          rsaDecryptResult.value = errorMessage(e);
        }
      });
    }
    function handleRsaSign() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          rsaSignResult.value = yield uni_modules_unixCrypto_index.rsaSign(rsaText.value, rsaPrivateKey.value, "SHA-256");
          rsaVerifyResult.value = "";
        } catch (e) {
          rsaSignResult.value = errorMessage(e);
        }
      });
    }
    function handleRsaVerify() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const ok = yield uni_modules_unixCrypto_index.rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, "SHA-256");
          rsaVerifyResult.value = ok ? "通过 (true)" : "未通过 (false)";
        } catch (e) {
          rsaVerifyResult.value = errorMessage(e);
        }
      });
    }
    const uuidResult = common_vendor.ref("");
    function handleGenerateUUID() {
      uuidResult.value = uni_modules_unixCrypto_index.generateUUID();
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: base64Input.value,
        b: common_vendor.o(($event) => {
          return base64Input.value = $event.detail.value;
        }, "e0"),
        c: common_vendor.o(handleBase64Encode, "c9"),
        d: common_vendor.o(handleBase64Decode, "d5"),
        e: common_vendor.t(base64EncodeResult.value),
        f: common_vendor.t(base64DecodeResult.value),
        g: hashInput.value,
        h: common_vendor.o(($event) => {
          return hashInput.value = $event.detail.value;
        }, "88"),
        i: common_vendor.o(handleMd5, "50"),
        j: common_vendor.o(handleSha256, "7a"),
        k: common_vendor.t(md5Result.value),
        l: common_vendor.t(sha256Result.value),
        m: hmacText.value,
        n: common_vendor.o(($event) => {
          return hmacText.value = $event.detail.value;
        }, "b3"),
        o: hmacKey.value,
        p: common_vendor.o(($event) => {
          return hmacKey.value = $event.detail.value;
        }, "bd"),
        q: common_vendor.o(handleHmac, "27"),
        r: common_vendor.t(hmacResult.value),
        s: aesText.value,
        t: common_vendor.o(($event) => {
          return aesText.value = $event.detail.value;
        }, "03"),
        v: aesKey.value,
        w: common_vendor.o(($event) => {
          return aesKey.value = $event.detail.value;
        }, "f2"),
        x: common_vendor.o(handleAesEncrypt, "f0"),
        y: common_vendor.o(handleAesDecrypt, "0d"),
        z: common_vendor.t(aesEncryptResult.value),
        A: common_vendor.t(aesDecryptResult.value),
        B: desText.value,
        C: common_vendor.o(($event) => {
          return desText.value = $event.detail.value;
        }, "52"),
        D: desKey.value,
        E: common_vendor.o(($event) => {
          return desKey.value = $event.detail.value;
        }, "97"),
        F: common_vendor.o(handleDesEncrypt, "33"),
        G: common_vendor.o(handleDesDecrypt, "54"),
        H: common_vendor.t(desEncryptResult.value),
        I: common_vendor.t(desDecryptResult.value),
        J: rsaText.value,
        K: common_vendor.o(($event) => {
          return rsaText.value = $event.detail.value;
        }, "da"),
        L: common_vendor.o(handleRsaGenerateKeyPair, "ad"),
        M: common_vendor.o(handleRsaEncrypt, "68"),
        N: rsaPublicKey.value,
        O: common_vendor.o(($event) => {
          return rsaPublicKey.value = $event.detail.value;
        }, "04"),
        P: rsaPrivateKey.value,
        Q: common_vendor.o(($event) => {
          return rsaPrivateKey.value = $event.detail.value;
        }, "9a"),
        R: common_vendor.o(handleRsaDecrypt, "e5"),
        S: common_vendor.o(handleRsaSign, "c6"),
        T: common_vendor.o(handleRsaVerify, "d4"),
        U: common_vendor.t(rsaKeyPairResult.value),
        V: common_vendor.t(rsaEncryptResult.value),
        W: common_vendor.t(rsaDecryptResult.value),
        X: common_vendor.t(rsaSignResult.value),
        Y: common_vendor.t(rsaVerifyResult.value),
        Z: common_vendor.o(handleGenerateUUID, "38"),
        aa: common_vendor.t(uuidResult.value),
        ab: common_vendor.gei(_ctx, ""),
        ac: common_vendor.p({
          title: "加密解密工具 (crypto)",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-597f98d7"
        }),
        ad: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-597f98d7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/CryptoDemoCard.js.map
