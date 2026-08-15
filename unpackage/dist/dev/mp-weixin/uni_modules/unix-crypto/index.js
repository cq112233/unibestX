"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_unixCrypto_rsa = require("./rsa.js");
function aesOptions() {
  return new common_vendor.UTSJSONObject({
    mode: common_vendor.CryptoJS.mode.ECB,
    padding: common_vendor.CryptoJS.pad.Pkcs7
  });
}
function base64Encode(text) {
  return new Promise((resolve, reject) => {
    try {
      resolve(common_vendor.CryptoJS.enc.Base64.stringify(common_vendor.CryptoJS.enc.Utf8.parse(text)));
    } catch (e) {
      reject(e);
    }
  });
}
function base64Decode(base64) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = common_vendor.CryptoJS.enc.Base64.parse(base64);
      const decoded = parsed.toString(common_vendor.CryptoJS.enc.Utf8);
      if (decoded.length == 0 && base64.trim().length > 0) {
        resolve(parsed.toString(common_vendor.CryptoJS.enc.Latin1));
      } else {
        resolve(decoded);
      }
    } catch (e) {
      reject(new Error("Base64 解码失败：输入文本不是有效的 Base64 字符串"));
    }
  });
}
function md5(text) {
  return new Promise((resolve, reject) => {
    try {
      resolve(common_vendor.CryptoJS.MD5(text).toString(common_vendor.CryptoJS.enc.Hex));
    } catch (e) {
      reject(e);
    }
  });
}
function sha256(text) {
  return new Promise((resolve, reject) => {
    try {
      resolve(common_vendor.CryptoJS.SHA256(text).toString(common_vendor.CryptoJS.enc.Hex));
    } catch (e) {
      reject(e);
    }
  });
}
function hmacSha1(text, key) {
  return new Promise((resolve, reject) => {
    try {
      resolve(common_vendor.CryptoJS.HmacSHA1(text, key).toString(common_vendor.CryptoJS.enc.Hex));
    } catch (e) {
      reject(e);
    }
  });
}
function aesEncrypt(text, key) {
  return new Promise((resolve, reject) => {
    try {
      const encrypted = common_vendor.CryptoJS.AES.encrypt(common_vendor.CryptoJS.enc.Utf8.parse(text), common_vendor.CryptoJS.enc.Utf8.parse(key), aesOptions());
      resolve(encrypted.ciphertext.toString(common_vendor.CryptoJS.enc.Hex));
    } catch (e) {
      reject(e);
    }
  });
}
function aesDecrypt(hex, key) {
  return new Promise((resolve, reject) => {
    try {
      const cipherParams = common_vendor.CryptoJS.lib.CipherParams.create(new common_vendor.UTSJSONObject({
        ciphertext: common_vendor.CryptoJS.enc.Hex.parse(hex)
      }));
      const decrypted = common_vendor.CryptoJS.AES.decrypt(cipherParams, common_vendor.CryptoJS.enc.Utf8.parse(key), aesOptions());
      resolve(decrypted.toString(common_vendor.CryptoJS.enc.Utf8));
    } catch (e) {
      reject(e);
    }
  });
}
function desEncrypt(text, key) {
  return new Promise((resolve, reject) => {
    try {
      const encrypted = common_vendor.CryptoJS.DES.encrypt(common_vendor.CryptoJS.enc.Utf8.parse(text), common_vendor.CryptoJS.enc.Utf8.parse(key), aesOptions());
      resolve(encrypted.ciphertext.toString(common_vendor.CryptoJS.enc.Hex));
    } catch (e) {
      reject(e);
    }
  });
}
function desDecrypt(hex, key) {
  return new Promise((resolve, reject) => {
    try {
      const cipherParams = common_vendor.CryptoJS.lib.CipherParams.create(new common_vendor.UTSJSONObject({
        ciphertext: common_vendor.CryptoJS.enc.Hex.parse(hex)
      }));
      const decrypted = common_vendor.CryptoJS.DES.decrypt(cipherParams, common_vendor.CryptoJS.enc.Utf8.parse(key), aesOptions());
      resolve(decrypted.toString(common_vendor.CryptoJS.enc.Utf8));
    } catch (e) {
      reject(e);
    }
  });
}
function rsaGenerateKeyPair(bits) {
  return new Promise((resolve, reject) => {
    var _a;
    try {
      const cryptoObj = (_a = typeof window != "undefined" ? window.crypto : null) !== null && _a !== void 0 ? _a : typeof globalThis != "undefined" ? globalThis.crypto : null;
      const subtle = cryptoObj === null || cryptoObj === void 0 ? null : cryptoObj.subtle;
      if (subtle != null) {
        subtle.generateKey(new common_vendor.UTSJSONObject({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: bits,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256"
        }), true, ["sign", "verify"]).then((keyPair = null) => {
          Promise.all([
            subtle.exportKey("spki", keyPair.publicKey),
            subtle.exportKey("pkcs8", keyPair.privateKey)
          ]).then((buffers) => {
            const pubB64 = common_vendor.index.arrayBufferToBase64(buffers[0]);
            const priB64 = common_vendor.index.arrayBufferToBase64(buffers[1]);
            resolve('{"publicKey":"' + pubB64 + '","privateKey":"' + priB64 + '"}');
          }).catch((_err = null) => {
            resolve(uni_modules_unixCrypto_rsa.rsaGenerateKeyPairUts(bits));
          });
        }).catch((_err = null) => {
          resolve(uni_modules_unixCrypto_rsa.rsaGenerateKeyPairUts(bits));
        });
        return null;
      }
      resolve(uni_modules_unixCrypto_rsa.rsaGenerateKeyPairUts(bits));
    } catch (e) {
      try {
        resolve(uni_modules_unixCrypto_rsa.rsaGenerateKeyPairUts(bits));
      } catch (err) {
        reject(err);
      }
    }
  });
}
function rsaEncrypt(text, publicKey) {
  return new Promise((resolve, reject) => {
    try {
      resolve(uni_modules_unixCrypto_rsa.rsaEncryptUts(text, publicKey));
    } catch (e) {
      reject(e);
    }
  });
}
function rsaDecrypt(hex, privateKey) {
  return new Promise((resolve, reject) => {
    try {
      resolve(uni_modules_unixCrypto_rsa.rsaDecryptUts(hex, privateKey));
    } catch (e) {
      reject(e);
    }
  });
}
function hashHex(text, hashType) {
  if (hashType == "MD5") {
    return common_vendor.CryptoJS.MD5(text).toString(common_vendor.CryptoJS.enc.Hex);
  }
  if (hashType == "SHA-1" || hashType == "SHA1") {
    return common_vendor.CryptoJS.SHA1(text).toString(common_vendor.CryptoJS.enc.Hex);
  }
  return common_vendor.CryptoJS.SHA256(text).toString(common_vendor.CryptoJS.enc.Hex);
}
function rsaSign(text, privateKey, hashType) {
  return new Promise((resolve, reject) => {
    try {
      resolve(uni_modules_unixCrypto_rsa.rsaSignUts(hashHex(text, hashType), hashType, privateKey));
    } catch (e) {
      reject(e);
    }
  });
}
function rsaVerify(text, publicKey, sigHex, hashType) {
  return new Promise((resolve, reject) => {
    try {
      resolve(uni_modules_unixCrypto_rsa.rsaVerifyUts(hashHex(text, hashType), hashType, publicKey, sigHex));
    } catch (e) {
      reject(e);
    }
  });
}
function generateUUID() {
  var _a;
  try {
    const cryptoObj = (_a = typeof window != "undefined" ? window.crypto : null) !== null && _a !== void 0 ? _a : typeof globalThis != "undefined" ? globalThis.crypto : null;
    if (cryptoObj != null && typeof cryptoObj.randomUUID == "function") {
      return cryptoObj.randomUUID();
    }
  } catch (_) {
  }
  const hexDigits = "0123456789abcdef";
  let s = "";
  for (let i = 0; i < 36; i++) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      s += "-";
    } else if (i == 14) {
      s += "4";
    } else {
      const r = Math.floor(Math.random() * 16);
      const val = i == 19 ? r & 3 | 8 : r;
      s += hexDigits.charAt(val);
    }
  }
  return s;
}
exports.aesDecrypt = aesDecrypt;
exports.aesEncrypt = aesEncrypt;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.desDecrypt = desDecrypt;
exports.desEncrypt = desEncrypt;
exports.generateUUID = generateUUID;
exports.hmacSha1 = hmacSha1;
exports.md5 = md5;
exports.rsaDecrypt = rsaDecrypt;
exports.rsaEncrypt = rsaEncrypt;
exports.rsaGenerateKeyPair = rsaGenerateKeyPair;
exports.rsaSign = rsaSign;
exports.rsaVerify = rsaVerify;
exports.sha256 = sha256;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/uni_modules/unix-crypto/index.js.map
