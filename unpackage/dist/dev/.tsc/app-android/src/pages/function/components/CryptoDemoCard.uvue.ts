import Card from '../../basic/components/Card.uvue';
import { ref } from 'vue';
import { aesDecrypt, aesEncrypt, base64Decode, base64Encode, desDecrypt, desEncrypt, generateUUID, hmacSha1, md5, rsaDecrypt, rsaEncrypt, rsaGenerateKeyPair, rsaSign, rsaVerify, sha256 } from '@/uni_modules/unix-crypto';

// ===== 1. Base64 编码 / 解码状态 =====
// 待编码或解码的文本

const __sfc__ = defineComponent({
  __name: 'CryptoDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

// 卡片组件、Vue 响应式 API 与加密工具导入
const base64Input = ref('hello uni-app x');
// Base64 编码结果
const base64EncodeResult = ref('');
// Base64 解码结果
const base64DecodeResult = ref('');

// ===== 2. MD5 / SHA-256 摘要状态 =====
// 待计算摘要的文本
const hashInput = ref('hello uni-app x');
// MD5 摘要计算结果
const md5Result = ref('');
// SHA-256 摘要计算结果
const sha256Result = ref('');

// ===== 3. HMAC-SHA1 签名状态 =====
// 待签名的文本
const hmacText = ref('hello uni-app x');
// 签名密钥（可任意修改）
const hmacKey = ref('secret-key');
// HMAC-SHA1 签名结果
const hmacResult = ref('');

// ===== 4. AES 加密 / 解密状态 =====
// 待加密的文本
const aesText = ref('hello uni-app x');
// AES 密钥（必须 16 位）
const aesKey = ref('1234567890abcdef');
// AES 加密结果（十六进制字符串）
const aesEncryptResult = ref('');
// AES 解密结果（还原后的明文）
const aesDecryptResult = ref('');

// ===== 5. DES 加密 / 解密状态 =====
// 待加密的文本
const desText = ref('hello uni-app x');
// DES 密钥（必须 8 位）
const desKey = ref('12345678');
// DES 加密结果（十六进制字符串）
const desEncryptResult = ref('');
// DES 解密结果（还原后的明文）
const desDecryptResult = ref('');

// ===== 6. RSA 非对称加密状态 =====
// 待加密 / 签名的文本
const rsaText = ref('hello uni-app x');
// RSA 公钥（SPKI，Base64 格式，示例密钥）
const rsaPublicKey = ref('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLJXnLrDV0RxJWMHlsNc2glZlGd9GsJh6XV9LRsgLSlPYz2xEm751nqG1MLtkX+m/ov7YMNwyhwhw13PFCPfcpm0klWkcKPteEPOXUx3H6mVL2YMNUREtsMxub1zrvo0GNm688Py/8WhXzzxXT/nDe0owpCMmaQWaGP/diX7T7uQIDAQAB');
// RSA 私钥（PKCS#8，Base64 格式，示例密钥）
const rsaPrivateKey = ref('MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMslecusNXRHElYweWw1zaCVmUZ30awmHpdX0tGyAtKU9jPbESbvnWeobUwu2Rf6b+i/tgw3DKHCHDXc8UI99ymbSSVaRwo+14Q85dTHcfqZUvZgw1RES2wzG5vXOu+jQY2brzw/L/xaFfPPFdP+cN7SjCkIyZpBZoY/92JftPu5AgMBAAECgYEAqjidxPdo1yUSjVwS8oRm6A9SnwSZkZljesdhZMq3qMKfRrZiufCAQbKU2whKatgz26CAp92c3RIs10lqc2o+5oKBOPNnAJXCmnjwNG9tlbKs0SpZjAgKgYv/uHlr2YX10xBQi1C7M2ySdbshj0inyyxzb6ibVJTmpHCFSkW1920CQQD/w6OYh87KOUYjan950HaSnc1g20HtI0rzRALRogGeQpo1qSeShfFGYOM219ee+9zawZLpw0X1W7BnH2vkNOXzAkEAy1VrNa4m0uC6NO+ytTEM6G+/WE8CuInIDvUzypLN8pNhev5/cPVzdZOcVlQLFZiPGe0vdu+hXmFvYYqWiymmowJANGdtea85241opZEIlXj1Eo1qq1HBbEky7i0dNr6u/jI/TodeKFNxYC4x3+bRsy1/zwKii2sLRn6G4lo5zQRZqQJAe8cA34mnOqHw2H6+BAza9bfo/EIEvv+o2Got3/gkBLHxGmVIgSP56C42clrw8HGRU1AOn9FaI1Ee83rhD9AIDwJAFs5T4UMe07NfVUIlN1jxyHvRwyXWjgex+6JbYXmhV9wjQ+taO74aO4cRwKhe0Yi5smGSR7+mzgJhJNdxn+5ntQ==');
// RSA 密钥对生成结果
const rsaKeyPairResult = ref('');
// RSA 加密结果（十六进制字符串）
const rsaEncryptResult = ref('');
// RSA 解密结果（还原后的明文）
const rsaDecryptResult = ref('');
// RSA 签名结果（十六进制字符串）
const rsaSignResult = ref('');
// RSA 验签结果
const rsaVerifyResult = ref('');

/**
 * 统一提取 Promise 错误信息，方便界面直接展示
 * @param e 捕获到的异常
 * @returns 可读的错误消息字符串
 */
function errorMessage(e: any): string {
  if (e instanceof Error) {
    return e.message;
  }
  return JSON.stringify(e);
}

/** Base64 编码：对输入文本执行编码，并清空上一次的解码结果 */
async function handleBase64Encode() {
  try {
    base64EncodeResult.value = await base64Encode(base64Input.value);
    base64DecodeResult.value = '';
  }
  catch (e: any) {
    base64EncodeResult.value = errorMessage(e);
  }
}

/** Base64 解码：优先解码上一步的编码结果，若无则解码输入框文本 */
async function handleBase64Decode() {
  try {
    const target = base64EncodeResult.value.length > 0 ? base64EncodeResult.value : base64Input.value;
    base64DecodeResult.value = await base64Decode(target);
  }
  catch (e: any) {
    base64DecodeResult.value = errorMessage(e);
  }
}

/** 计算输入文本的 MD5 摘要 */
async function handleMd5() {
  try {
    md5Result.value = await md5(hashInput.value);
  }
  catch (e: any) {
    md5Result.value = errorMessage(e);
  }
}

/** 计算输入文本的 SHA-256 摘要 */
async function handleSha256() {
  try {
    sha256Result.value = await sha256(hashInput.value);
  }
  catch (e: any) {
    sha256Result.value = errorMessage(e);
  }
}

/** 使用密钥对文本计算 HMAC-SHA1 签名 */
async function handleHmac() {
  try {
    hmacResult.value = await hmacSha1(hmacText.value, hmacKey.value);
  }
  catch (e: any) {
    hmacResult.value = errorMessage(e);
  }
}

/** AES 加密：对输入文本使用密钥加密，并清空上一次的解密结果 */
async function handleAesEncrypt() {
  try {
    aesEncryptResult.value = await aesEncrypt(aesText.value, aesKey.value);
    aesDecryptResult.value = '';
  }
  catch (e: any) {
    aesEncryptResult.value = errorMessage(e);
  }
}

/** AES 解密：使用密钥解密上一步的加密结果 */
async function handleAesDecrypt() {
  try {
    aesDecryptResult.value = await aesDecrypt(aesEncryptResult.value, aesKey.value);
  }
  catch (e: any) {
    aesDecryptResult.value = errorMessage(e);
  }
}

/** DES 加密：对输入文本使用密钥加密，并清空上一次的解密结果 */
async function handleDesEncrypt() {
  try {
    desEncryptResult.value = await desEncrypt(desText.value, desKey.value);
    desDecryptResult.value = '';
  }
  catch (e: any) {
    desEncryptResult.value = errorMessage(e);
  }
}

/** DES 解密：使用密钥解密上一步的加密结果 */
async function handleDesDecrypt() {
  try {
    desDecryptResult.value = await desDecrypt(desEncryptResult.value, desKey.value);
  }
  catch (e: any) {
    desDecryptResult.value = errorMessage(e);
  }
}

/** 生成 RSA 密钥对并自动填入输入框 */
async function handleRsaGenerateKeyPair() {
  try {
    const jsonStr = await rsaGenerateKeyPair(1024);
    rsaKeyPairResult.value = jsonStr;
    try {
      /* eslint-disable dot-notation */
      const keyData = UTSAndroid.consoleDebugError(JSON.parse(jsonStr), " at src/pages/function/components/CryptoDemoCard.uvue:362") as UTSJSONObject;
      const pub = (keyData['publicKey'] ?? '') as string;
      if (pub.length > 0) {
        rsaPublicKey.value = pub;
      }
      const pri = (keyData['privateKey'] ?? '') as string;
      if (pri.length > 0) {
        rsaPrivateKey.value = pri;
      }
      /* eslint-enable dot-notation */
    }
    catch (err: any) {
      console.error('Failed to parse RSA keypair:', err, " at src/pages/function/components/CryptoDemoCard.uvue:374");
    }
  }
  catch (e: any) {
    rsaKeyPairResult.value = errorMessage(e);
  }
}

/** RSA 公钥加密：对输入文本使用公钥加密，并清空上一次的解密结果 */
async function handleRsaEncrypt() {
  try {
    rsaEncryptResult.value = await rsaEncrypt(rsaText.value, rsaPublicKey.value);
    rsaDecryptResult.value = '';
  }
  catch (e: any) {
    rsaEncryptResult.value = errorMessage(e);
  }
}

/** RSA 私钥解密：使用私钥解密上一步的加密结果 */
async function handleRsaDecrypt() {
  try {
    rsaDecryptResult.value = await rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value);
  }
  catch (e: any) {
    rsaDecryptResult.value = errorMessage(e);
  }
}

/** RSA SHA-256 签名：使用私钥对输入文本签名 */
async function handleRsaSign() {
  try {
    rsaSignResult.value = await rsaSign(rsaText.value, rsaPrivateKey.value, 'SHA-256');
    rsaVerifyResult.value = '';
  }
  catch (e: any) {
    rsaSignResult.value = errorMessage(e);
  }
}

/** RSA 验签：使用公钥验证上一步的签名 */
async function handleRsaVerify() {
  try {
    const ok = await rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, 'SHA-256');
    rsaVerifyResult.value = ok ? '通过 (true)' : '未通过 (false)';
  }
  catch (e: any) {
    rsaVerifyResult.value = errorMessage(e);
  }
}

// ===== 7. UUID 生成状态与方法 =====
const uuidResult = ref('');

function handleGenerateUUID() {
  uuidResult.value = generateUUID();
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "加密解密工具 (crypto)" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "1. Base64 编码 / 解码"),
        _cE("input", _uM({
          modelValue: base64Input.value,
          onInput: ($event: UniInputEvent) => {(base64Input).value = $event.detail.value},
          placeholder: "请输入要编码的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-15ounam-m wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleBase64Encode
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "编码")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-x8830x-r wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleBase64Decode
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "解码")
          ])
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "编码结果 (Base64):"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(base64EncodeResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "解码结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(base64DecodeResult.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "2. MD5 / SHA-256 摘要"),
        _cE("input", _uM({
          modelValue: hashInput.value,
          onInput: ($event: UniInputEvent) => {(hashInput).value = $event.detail.value},
          placeholder: "请输入要计算摘要的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-a9cvf4-x wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleMd5
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "MD5")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1lg57za-y wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleSha256
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "SHA-256")
          ])
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "MD5:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(md5Result.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "SHA-256:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(sha256Result.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "3. HMAC-SHA1 签名"),
        _cE("input", _uM({
          modelValue: hmacText.value,
          onInput: ($event: UniInputEvent) => {(hmacText).value = $event.detail.value},
          placeholder: "请输入要签名的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("input", _uM({
          modelValue: hmacKey.value,
          onInput: ($event: UniInputEvent) => {(hmacKey).value = $event.detail.value},
          placeholder: "请输入密钥 key",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({
          class: "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1mrou86-11 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
          onClick: handleHmac
        }), [
          _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "计算 HMAC-SHA1")
        ]),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-137543e-w",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(hmacResult.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "4. AES 加密 / 解密 (key 需 16 位)"),
        _cE("input", _uM({
          modelValue: aesText.value,
          onInput: ($event: UniInputEvent) => {(aesText).value = $event.detail.value},
          placeholder: "请输入要加密的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("input", _uM({
          modelValue: aesKey.value,
          onInput: ($event: UniInputEvent) => {(aesKey).value = $event.detail.value},
          placeholder: "请输入 16 位密钥",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-szquah-12 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleAesEncrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "加密")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-aqzh5-13 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleAesDecrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "解密")
          ])
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "加密结果 (hex):"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(aesEncryptResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "解密结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(aesDecryptResult.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "5. DES 加密 / 解密 (key 需 8 位)"),
        _cE("input", _uM({
          modelValue: desText.value,
          onInput: ($event: UniInputEvent) => {(desText).value = $event.detail.value},
          placeholder: "请输入要加密的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("input", _uM({
          modelValue: desKey.value,
          onInput: ($event: UniInputEvent) => {(desKey).value = $event.detail.value},
          placeholder: "请输入 8 位密钥",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-xjd3x3-14 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleDesEncrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "加密")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-3vwplv-15 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleDesDecrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "解密")
          ])
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "加密结果 (hex):"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(desEncryptResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "解密结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(desDecryptResult.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "6. RSA 非对称加密 / 签名 (示例密钥 1024 位)"),
        _cE("input", _uM({
          modelValue: rsaText.value,
          onInput: ($event: UniInputEvent) => {(rsaText).value = $event.detail.value},
          placeholder: "请输入要加密 / 签名的文本",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1j7sztc-16 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleRsaGenerateKeyPair
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "生成密钥对")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-s6x1vz-17 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleRsaEncrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "公钥加密")
          ])
        ]),
        _cE("input", _uM({
          modelValue: rsaPublicKey.value,
          onInput: ($event: UniInputEvent) => {(rsaPublicKey).value = $event.detail.value},
          placeholder: "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("input", _uM({
          modelValue: rsaPrivateKey.value,
          onInput: ($event: UniInputEvent) => {(rsaPrivateKey).value = $event.detail.value},
          placeholder: "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）",
          class: "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({ class: "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9" }), [
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-6rbxlm-18 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleRsaDecrypt
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "私钥解密")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1ac3pue-19 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p",
            onClick: handleRsaSign
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "SHA-256 签名")
          ]),
          _cE("view", _uM({
            class: "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-p8gyew-1a wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o",
            onClick: handleRsaVerify
          }), [
            _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "验签")
          ])
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "密钥对结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(rsaKeyPairResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "加密结果 (hex):"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(rsaEncryptResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "解密结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(rsaDecryptResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "签名结果 (hex):"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(rsaSignResult.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w" }), "验签结果:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(rsaVerifyResult.value), 5 /* TEXT, STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5" }), [
        _cE("text", _uM({ class: "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9" }), "7. UUID 生成 (v4)"),
        _cE("view", _uM({
          class: "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1322i0s-1b wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1s1mjhg-9",
          onClick: handleGenerateUUID
        }), [
          _cE("text", _uM({ class: "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7" }), "生成 UUID")
        ]),
        _cE("text", _uM({ class: "wtu-26e19f-s wtu-11l2toq-t" }), "生成的 UUID:"),
        _cE("text", _uM({
          class: "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jc7f14-1c wtu-17238c4-v",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(uuidResult.value), 5 /* TEXT, STYLE */)
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsCryptoDemoCardStyles = [_uM([["wtu-9h5gkp-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-1w4w6li-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-10y74dr-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-14iesb0-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-66kyd8-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-8apbzm-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-bdtmoe-6", _pS(_uM([["fontSize", 13]]))], ["wtu-16mxvjr-7", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-19n0869-8", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1s1mjhg-9", _pS(_uM([["marginBottom", 8]]))], ["wtu-pcar7m-a", _pS(_uM([["height", 38]]))], ["wtu-im8kej-b", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-gp5z9k-c", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["wtu-1j56kvu-d", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["wtu-18nprza-e", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["wtu-1jg4z3q-f", _pS(_uM([["color", "#334155"]]))], ["wtu-18k3p2j-g", _pS(_uM([["marginBottom", 12]]))], ["wtu-19z8y3q-h", _pS(_uM([["flexDirection", "row"]]))], ["wtu-hj68nu-i", _pS(_uM([["alignItems", "center"]]))], ["wtu-1vkw08h-j", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-f3mfu0-k", _pS(_uM([["height", 36]]))], ["wtu-xyjw4i-l", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-15ounam-m", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-qbc0lv-n", _pS(_uM([["display", "flex"]]))], ["wtu-1i4ccha-o", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1vx8xro-p", _pS(_uM([["marginRight", 8]]))], ["wtu-7s6w8j-q", _pS(_uM([["color", "#ffffff"]]))], ["wtu-x8830x-r", _pS(_uM([["backgroundColor", "#6366f1"]]))], ["wtu-26e19f-s", _pS(_uM([["fontSize", 12]]))], ["wtu-11l2toq-t", _pS(_uM([["color", "#64748b"]]))], ["wtu-rggjlv-u", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-17238c4-v", _pS(_uM([["marginTop", 2]]))], ["wtu-137543e-w", _pS(_uM([["marginTop", 8]]))], ["wtu-a9cvf4-x", _pS(_uM([["backgroundColor", "#f59e0b"]]))], ["wtu-1lg57za-y", _pS(_uM([["backgroundColor", "#ef4444"]]))], ["wtu-159osg-z", _pS(_uM([["color", "#059669"]]))], ["wtu-o6c3eh-10", _pS(_uM([["width", "100%"]]))], ["wtu-1mrou86-11", _pS(_uM([["backgroundColor", "#0ea5e9"]]))], ["wtu-szquah-12", _pS(_uM([["backgroundColor", "#8b5cf6"]]))], ["wtu-aqzh5-13", _pS(_uM([["backgroundColor", "#d946ef"]]))], ["wtu-xjd3x3-14", _pS(_uM([["backgroundColor", "#14b8a6"]]))], ["wtu-3vwplv-15", _pS(_uM([["backgroundColor", "#f97316"]]))], ["wtu-1j7sztc-16", _pS(_uM([["backgroundColor", "#0d9488"]]))], ["wtu-s6x1vz-17", _pS(_uM([["backgroundColor", "#0284c7"]]))], ["wtu-6rbxlm-18", _pS(_uM([["backgroundColor", "#7c3aed"]]))], ["wtu-1ac3pue-19", _pS(_uM([["backgroundColor", "#db2777"]]))], ["wtu-p8gyew-1a", _pS(_uM([["backgroundColor", "#65a30d"]]))], ["wtu-1322i0s-1b", _pS(_uM([["backgroundColor", "#2563eb"]]))], ["wtu-1jc7f14-1c", _pS(_uM([["color", "#2563eb"]]))]])]
