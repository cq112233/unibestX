class RsaPublicKey extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          modulus: { type: "Unknown", optional: false },
          exponent: { type: "Unknown", optional: false }
        };
      },
      name: "RsaPublicKey"
    };
  }
  constructor(options, metadata = RsaPublicKey.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.modulus = this.__props__.modulus;
    this.exponent = this.__props__.exponent;
    delete this.__props__;
  }
}
class RsaPrivateKey extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          modulus: { type: "Unknown", optional: false },
          privateExponent: { type: "Unknown", optional: false }
        };
      },
      name: "RsaPrivateKey"
    };
  }
  constructor(options, metadata = RsaPrivateKey.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.modulus = this.__props__.modulus;
    this.privateExponent = this.__props__.privateExponent;
    delete this.__props__;
  }
}
class DerElement extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          tag: { type: Number, optional: false },
          contentStart: { type: Number, optional: false },
          contentLen: { type: Number, optional: false },
          nextStart: { type: Number, optional: false }
        };
      },
      name: "DerElement"
    };
  }
  constructor(options, metadata = DerElement.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.tag = this.__props__.tag;
    this.contentStart = this.__props__.contentStart;
    this.contentLen = this.__props__.contentLen;
    this.nextStart = this.__props__.nextStart;
    delete this.__props__;
  }
}
const B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function bytesToHex(bytes) {
  let result = "";
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i] | 0;
    result += (b < 16 ? "0" : "") + b.toString(16);
  }
  return result;
}
function hexToBytes(hex) {
  const len = hex.length / 2;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}
function textToBytes(text) {
  return new TextEncoder().encode(text);
}
function bytesToText(bytes) {
  return new TextDecoder().decode(bytes);
}
function subBytes(bytes, start, end) {
  const len = end - start;
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    out[i] = bytes[start + i];
  }
  return out;
}
function stripPem(pem) {
  const lines = pem.split("\n");
  let body = "";
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("-----") >= 0) {
      continue;
    }
    body = body + lines[i];
  }
  let result = "";
  for (let i = 0; i < body.length; i++) {
    const c = body.charAt(i);
    if (B64_CHARS.indexOf(c) >= 0 || c == "=") {
      result += c;
    }
  }
  return result;
}
function base64DecodeToBytes(b64) {
  let clean = stripPem(b64);
  while (clean.length % 4 != 0) {
    clean = clean + "=";
  }
  return new Uint8Array(uni.base64ToArrayBuffer(clean));
}
function derReadElement(bytes, start) {
  const tag = bytes[start] | 0;
  const l0 = bytes[start + 1] | 0;
  let len = 0;
  let headerLen = 2;
  if (l0 < 128) {
    len = l0;
  } else {
    const numLen = l0 & 127;
    for (let i = 0; i < numLen; i++) {
      len = len * 256 + (bytes[start + 2 + i] | 0);
    }
    headerLen = 2 + numLen;
  }
  const contentStart = start + headerLen;
  return new DerElement({ tag, contentStart, contentLen: len, nextStart: contentStart + len });
}
function derIntegerValue(bytes, elem) {
  return trimZero(subBytes(bytes, elem.contentStart, elem.contentStart + elem.contentLen));
}
function parsePublicKey(pem) {
  const der = base64DecodeToBytes(pem);
  const outer = derReadElement(der, 0);
  const content = subBytes(der, outer.contentStart, outer.contentStart + outer.contentLen);
  const first = derReadElement(content, 0);
  if (first.tag == 2) {
    const n_1 = derIntegerValue(content, first);
    const eElem_1 = derReadElement(content, first.nextStart);
    const e_1 = derIntegerValue(content, eElem_1);
    return new RsaPublicKey({ modulus: n_1, exponent: e_1 });
  }
  const algo = derReadElement(content, 0);
  const bit = derReadElement(content, algo.nextStart);
  const pkcs1 = subBytes(content, bit.contentStart + 1, bit.contentStart + bit.contentLen);
  const pk1 = derReadElement(pkcs1, 0);
  const nElem = derReadElement(pkcs1, pk1.contentStart);
  const n = derIntegerValue(pkcs1, nElem);
  const eElem = derReadElement(pkcs1, nElem.nextStart);
  const e = derIntegerValue(pkcs1, eElem);
  return new RsaPublicKey({ modulus: n, exponent: e });
}
function parsePrivateKeyPkcs1(pkcs1) {
  const outer = derReadElement(pkcs1, 0);
  const content = subBytes(pkcs1, outer.contentStart, outer.contentStart + outer.contentLen);
  const ver = derReadElement(content, 0);
  const nElem = derReadElement(content, ver.nextStart);
  const n = derIntegerValue(content, nElem);
  const eElem = derReadElement(content, nElem.nextStart);
  const dElem = derReadElement(content, eElem.nextStart);
  const d = derIntegerValue(content, dElem);
  return new RsaPrivateKey({ modulus: n, privateExponent: d });
}
function parsePrivateKey(pem) {
  const der = base64DecodeToBytes(pem);
  const outer = derReadElement(der, 0);
  const content = subBytes(der, outer.contentStart, outer.contentStart + outer.contentLen);
  const first = derReadElement(content, 0);
  if (first.tag == 2) {
    const second = derReadElement(content, first.nextStart);
    if (second.tag == 2) {
      const n = derIntegerValue(content, second);
      const eElem = derReadElement(content, second.nextStart);
      const dElem = derReadElement(content, eElem.nextStart);
      const d = derIntegerValue(content, dElem);
      return new RsaPrivateKey({ modulus: n, privateExponent: d });
    }
    const algo = second;
    const octet = derReadElement(content, algo.nextStart);
    const pkcs1 = subBytes(content, octet.contentStart, octet.contentStart + octet.contentLen);
    return parsePrivateKeyPkcs1(pkcs1);
  }
  throw new Error("无法识别的私钥格式，请使用 PKCS#1 或 PKCS#8 密钥");
}
function trimZero(bytes) {
  let start = 0;
  while (start < bytes.length - 1 && bytes[start] == 0) {
    start++;
  }
  return subBytes(bytes, start, bytes.length);
}
function isZero(bytes) {
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] != 0) {
      return false;
    }
  }
  return true;
}
function bigCmp(a, b) {
  if (a.length != b.length) {
    return a.length > b.length ? 1 : -1;
  }
  for (let i = 0; i < a.length; i++) {
    const av = a[i] | 0;
    const bv = b[i] | 0;
    if (av != bv) {
      return av > bv ? 1 : -1;
    }
  }
  return 0;
}
function bigShrBits(a, bits) {
  const out = new Uint8Array(a.length);
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const v = a[i] | 0;
    out[i] = v >> bits | carry;
    carry = (v & (1 << bits) - 1) << 8 - bits;
  }
  return trimZero(out);
}
function trimLE(bytes) {
  let end = bytes.length;
  while (end > 1 && bytes[end - 1] == 0) {
    end = end - 1;
  }
  return subBytes(bytes, 0, end);
}
function toLE(bytes) {
  const out = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    out[i] = bytes[bytes.length - 1 - i];
  }
  return trimLE(out);
}
function toBE(bytes) {
  const out = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    out[i] = bytes[bytes.length - 1 - i];
  }
  return trimZero(out);
}
function bigShlBitsLE(a, bits) {
  const out = new Uint8Array(a.length + 1);
  let carry = 0;
  for (let i = 0; i < a.length; i++) {
    const v = a[i] | 0;
    out[i] = (v << bits | carry) & 255;
    carry = v >> 8 - bits;
  }
  out[a.length] = carry;
  return out;
}
function bigMul(a, b) {
  if (isZero(a) || isZero(b)) {
    return new Uint8Array(1);
  }
  const outLen = a.length + b.length;
  const out = new Uint8Array(outLen);
  for (let i = 0; i < a.length; i++) {
    const ai = a[a.length - 1 - i] | 0;
    let carry = 0;
    for (let j = 0; j < b.length; j++) {
      const bj = b[b.length - 1 - j] | 0;
      const k = outLen - 1 - (i + j);
      const t = (out[k] | 0) + ai * bj + carry;
      out[k] = t & 255;
      carry = t >> 8;
    }
    const k2 = outLen - 1 - (i + b.length);
    out[k2] = (out[k2] | 0) + carry;
  }
  return trimZero(out);
}
function leadingZeroBits(b) {
  let bits = 0;
  let mask = 128;
  while ((b & mask) == 0) {
    bits = bits + 1;
    mask = mask >> 1;
  }
  return bits;
}
function bigGetBit(a, i) {
  const byteIndex = Math.floor(i / 8);
  const bitInByte = 7 - i % 8;
  return (a[byteIndex] | 0) >> bitInByte & 1;
}
function padToN(bytes, n) {
  if (bytes.length >= n) {
    return bytes;
  }
  const out = new Uint8Array(n);
  const gap = n - bytes.length;
  for (let i = 0; i < bytes.length; i++) {
    out[gap + i] = bytes[i];
  }
  return out;
}
function bigMod(a, m) {
  if (bigCmp(a, m) < 0) {
    return a;
  }
  const n = m.length;
  if (n == 1) {
    const mv = m[0] | 0;
    let rem = 0;
    for (let i = 0; i < a.length; i++) {
      rem = (rem * 256 + (a[i] | 0)) % mv;
    }
    const out = new Uint8Array(1);
    out[0] = rem;
    return out;
  }
  const shift = leadingZeroBits(m[0] | 0);
  const v = trimLE(bigShlBitsLE(toLE(m), shift));
  const uArr = bigShlBitsLE(toLE(a), shift);
  const uLen = uArr.length;
  const qLen = uLen - n;
  for (let j = qLen - 1; j >= 0; j--) {
    const uTop = (uArr[j + n] | 0) * 256 + (uArr[j + n - 1] | 0);
    let qhat = Math.floor(uTop / (v[n - 1] | 0));
    if (qhat >= 256) {
      qhat = 255;
    }
    let rhat = uTop - qhat * (v[n - 1] | 0);
    while (qhat >= 256 || qhat * (v[n - 2] | 0) > rhat * 256 + (uArr[j + n - 2] | 0)) {
      qhat = qhat - 1;
      rhat = rhat + (v[n - 1] | 0);
      if (rhat >= 256) {
        break;
      }
    }
    let borrow = 0;
    for (let i = 0; i < n; i++) {
      const p = qhat * (v[i] | 0) + borrow;
      const t = (uArr[j + i] | 0) - (p & 255);
      uArr[j + i] = t & 255;
      borrow = (p >> 8) + (t < 0 ? 1 : 0);
    }
    let hi = (uArr[j + n] | 0) - borrow;
    if (hi < 0) {
      let carry = 0;
      for (let i = 0; i < n; i++) {
        const s = (uArr[j + i] | 0) + (v[i] | 0) + carry;
        uArr[j + i] = s & 255;
        carry = s >> 8;
      }
      hi = hi + carry;
    }
    uArr[j + n] = hi;
  }
  return bigShrBits(toBE(subBytes(uArr, 0, n)), shift);
}
function bigModPow(base, exp, m) {
  let result = new Uint8Array(1);
  result[0] = 1;
  let b = bigMod(base, m);
  const expBits = exp.length * 8;
  for (let i = 0; i < expBits; i++) {
    result = bigMod(bigMul(result, result), m);
    if (bigGetBit(exp, i) == 1) {
      result = bigMod(bigMul(result, b), m);
    }
  }
  return result;
}
function i2osp(x, k) {
  return padToN(x, k);
}
function buildDigestInfo(digestHex, hashType) {
  const digest = hexToBytes(digestHex);
  let prefixHex = "3031300d060960864801650304020105000420";
  if (hashType == "MD5") {
    prefixHex = "3020300c06082a864886f70d020505000410";
  } else if (hashType == "SHA-1" || hashType == "SHA1") {
    prefixHex = "3021300906052b0e03021a05000414";
  }
  const prefix = hexToBytes(prefixHex);
  const out = new Uint8Array(prefix.length + digest.length);
  for (let i = 0; i < prefix.length; i++) {
    out[i] = prefix[i];
  }
  for (let i = 0; i < digest.length; i++) {
    out[prefix.length + i] = digest[i];
  }
  return out;
}
function rsaEncryptUts(text, publicKey) {
  const key = parsePublicKey(publicKey);
  const k = key.modulus.length;
  const m = textToBytes(text);
  const mLen = m.length;
  if (mLen > k - 11) {
    throw new Error("RSA 明文过长：最长 " + (k - 11) + " 字节，当前 " + mLen + " 字节");
  }
  const em = new Uint8Array(k);
  em[0] = 0;
  em[1] = 2;
  const psLen = k - mLen - 3;
  for (let i = 0; i < psLen; i++) {
    em[2 + i] = Math.floor(Math.random() * 255) + 1;
  }
  em[k - mLen - 1] = 0;
  for (let i = 0; i < mLen; i++) {
    em[k - mLen + i] = m[i];
  }
  const c = bigModPow(em, key.exponent, key.modulus);
  return bytesToHex(i2osp(c, k));
}
function rsaDecryptUts(hex, privateKey) {
  const key = parsePrivateKey(privateKey);
  const k = key.modulus.length;
  const c = hexToBytes(hex);
  if (c.length != k) {
    throw new Error("RSA 密文长度不正确：应为 " + k + " 字节，实际 " + c.length + " 字节");
  }
  const m = bigModPow(c, key.privateExponent, key.modulus);
  const em = i2osp(m, k);
  if (em[0] != 0 || em[1] != 2) {
    throw new Error("RSA 解密失败：填充头无效");
  }
  let sep = -1;
  for (let i = 2; i < k; i++) {
    if (em[i] == 0) {
      sep = i;
      break;
    }
  }
  if (sep < 10) {
    throw new Error("RSA 解密失败：填充无效");
  }
  return bytesToText(subBytes(em, sep + 1, k));
}
function rsaSignUts(digestHex, hashType, privateKey) {
  const key = parsePrivateKey(privateKey);
  const k = key.modulus.length;
  const t = buildDigestInfo(digestHex, hashType);
  const tLen = t.length;
  if (tLen > k - 11) {
    throw new Error("RSA 签名摘要过长：密钥至少需要 " + (tLen + 11) + " 字节");
  }
  const em = new Uint8Array(k);
  em[0] = 0;
  em[1] = 1;
  const psLen = k - tLen - 3;
  for (let i = 0; i < psLen; i++) {
    em[2 + i] = 255;
  }
  em[k - tLen - 1] = 0;
  for (let i = 0; i < tLen; i++) {
    em[k - tLen + i] = t[i];
  }
  const s = bigModPow(em, key.privateExponent, key.modulus);
  return bytesToHex(i2osp(s, k));
}
function rsaVerifyUts(digestHex, hashType, publicKey, sigHex) {
  const key = parsePublicKey(publicKey);
  const k = key.modulus.length;
  const s = hexToBytes(sigHex);
  if (s.length != k) {
    return false;
  }
  const m = bigModPow(s, key.exponent, key.modulus);
  const em = i2osp(m, k);
  if (em[0] != 0 || em[1] != 1) {
    return false;
  }
  let sep = -1;
  for (let i = 2; i < k; i++) {
    if (em[i] == 0) {
      sep = i;
      break;
    }
    if (em[i] != 255) {
      return false;
    }
  }
  if (sep < 10) {
    return false;
  }
  const t = buildDigestInfo(digestHex, hashType);
  if (k - sep - 1 != t.length) {
    return false;
  }
  for (let i = 0; i < t.length; i++) {
    if (em[sep + 1 + i] != t[i]) {
      return false;
    }
  }
  return true;
}
function bigIntToDerInteger(n = null) {
  let hex = n.toString(16);
  if (hex.length % 2 != 0) {
    hex = "0" + hex;
  }
  const firstByte = parseInt(hex.substring(0, 2), 16);
  if (firstByte >= 128) {
    hex = "00" + hex;
  }
  const bytes = hexToBytes(hex);
  const len = bytes.length;
  let header;
  if (len < 128) {
    header = new Uint8Array([2, len]);
  } else if (len < 256) {
    header = new Uint8Array([2, 129, len]);
  } else {
    header = new Uint8Array([2, 130, Math.floor(len / 256), len % 256]);
  }
  const out = new Uint8Array(header.length + bytes.length);
  for (let i = 0; i < header.length; i++)
    out[i] = header[i];
  for (let i = 0; i < bytes.length; i++)
    out[header.length + i] = bytes[i];
  return out;
}
function derSequence(items) {
  let totalLen = 0;
  for (let i = 0; i < items.length; i++) {
    totalLen += items[i].length;
  }
  let header;
  if (totalLen < 128) {
    header = new Uint8Array([48, totalLen]);
  } else if (totalLen < 256) {
    header = new Uint8Array([48, 129, totalLen]);
  } else {
    header = new Uint8Array([48, 130, Math.floor(totalLen / 256), totalLen % 256]);
  }
  const out = new Uint8Array(header.length + totalLen);
  for (let i = 0; i < header.length; i++)
    out[i] = header[i];
  let offset = header.length;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      out[offset + j] = items[i][j];
    }
    offset += items[i].length;
  }
  return out;
}
function getRandomBigInt(bits) {
  const bytes = Math.ceil(bits / 8);
  let hex = "";
  for (let i = 0; i < bytes; i++) {
    const b = Math.floor(Math.random() * 256);
    hex += (b < 16 ? "0" : "") + b.toString(16);
  }
  let n = globalThis.BigInt("0x" + hex);
  const one = globalThis.BigInt(1);
  const shiftVal = globalThis.BigInt(bits - 1);
  n = n | one << shiftVal;
  n = n | one;
  return n;
}
function bigIntModPow(base = null, exp = null, mod = null) {
  const zero = globalThis.BigInt(0);
  const one = globalThis.BigInt(1);
  const two = globalThis.BigInt(2);
  let res = one;
  base = base % mod;
  while (exp > zero) {
    if (exp % two == one) {
      res = res * base % mod;
    }
    base = base * base % mod;
    exp = exp / two;
  }
  return res;
}
function isProbablePrime(n = null, k = 5) {
  const zero = globalThis.BigInt(0);
  const one = globalThis.BigInt(1);
  const two = globalThis.BigInt(2);
  const three = globalThis.BigInt(3);
  const four = globalThis.BigInt(4);
  if (n <= one || n == four)
    return false;
  if (n <= three)
    return true;
  let d = n - one;
  let s = zero;
  while (d % two == zero) {
    d = d / two;
    s = s + one;
  }
  const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  for (let i = 0; i < smallPrimes.length; i++) {
    const p = globalThis.BigInt(smallPrimes[i]);
    if (n % p == zero) {
      return n == p;
    }
  }
  for (let i = 0; i < k; i++) {
    const a = two + globalThis.BigInt(Math.floor(Math.random() * 1e4)) % (n - four);
    let x = bigIntModPow(a, d, n);
    if (x == one || x == n - one)
      continue;
    let composite = true;
    for (let r = one; r < s; r = r + one) {
      x = bigIntModPow(x, two, n);
      if (x == n - one) {
        composite = false;
        break;
      }
    }
    if (composite)
      return false;
  }
  return true;
}
function getPrime(bits) {
  while (true) {
    const p = getRandomBigInt(bits);
    if (isProbablePrime(p))
      return p;
  }
}
function bigIntModInverse(a = null, m = null) {
  const zero = globalThis.BigInt(0);
  const one = globalThis.BigInt(1);
  let m0 = m;
  let y = zero;
  let x = one;
  if (m == one)
    return zero;
  while (a > one) {
    const q = a / m;
    let t = m;
    m = a % m;
    a = t;
    t = y;
    y = x - q * y;
    x = t;
  }
  if (x < zero) {
    x = x + m0;
  }
  return x;
}
function rsaGenerateKeyPairUts(bits) {
  const primeBits = Math.floor(bits / 2);
  const p = getPrime(primeBits);
  const q = getPrime(primeBits);
  const n = p * q;
  const e = globalThis.BigInt(65537);
  const one = globalThis.BigInt(1);
  const phi = (p - one) * (q - one);
  const d = bigIntModInverse(e, phi);
  const dp = d % (p - one);
  const dq = d % (q - one);
  const qInv = bigIntModInverse(q, p);
  const pkcs1Pub = derSequence([bigIntToDerInteger(n), bigIntToDerInteger(e)]);
  const algo = hexToBytes("300d06092a864886f70d0101010500");
  const bitStringContent = new Uint8Array(1 + pkcs1Pub.length);
  bitStringContent[0] = 0;
  for (let i = 0; i < pkcs1Pub.length; i++)
    bitStringContent[1 + i] = pkcs1Pub[i];
  let bitHeader;
  const bitLen = bitStringContent.length;
  if (bitLen < 128)
    bitHeader = new Uint8Array([3, bitLen]);
  else if (bitLen < 256)
    bitHeader = new Uint8Array([3, 129, bitLen]);
  else
    bitHeader = new Uint8Array([3, 130, Math.floor(bitLen / 256), bitLen % 256]);
  const bitString = new Uint8Array(bitHeader.length + bitStringContent.length);
  for (let i = 0; i < bitHeader.length; i++)
    bitString[i] = bitHeader[i];
  for (let i = 0; i < bitStringContent.length; i++)
    bitString[bitHeader.length + i] = bitStringContent[i];
  const spkiDer = derSequence([algo, bitString]);
  const pubB64 = uni.arrayBufferToBase64(spkiDer.buffer);
  const version0 = hexToBytes("020100");
  const pkcs1Pri = derSequence([
    version0,
    bigIntToDerInteger(n),
    bigIntToDerInteger(e),
    bigIntToDerInteger(d),
    bigIntToDerInteger(p),
    bigIntToDerInteger(q),
    bigIntToDerInteger(dp),
    bigIntToDerInteger(dq),
    bigIntToDerInteger(qInv)
  ]);
  const octLen = pkcs1Pri.length;
  let octHeader;
  if (octLen < 128)
    octHeader = new Uint8Array([4, octLen]);
  else if (octLen < 256)
    octHeader = new Uint8Array([4, 129, octLen]);
  else
    octHeader = new Uint8Array([4, 130, Math.floor(octLen / 256), octLen % 256]);
  const octString = new Uint8Array(octHeader.length + pkcs1Pri.length);
  for (let i = 0; i < octHeader.length; i++)
    octString[i] = octHeader[i];
  for (let i = 0; i < pkcs1Pri.length; i++)
    octString[octHeader.length + i] = pkcs1Pri[i];
  const pkcs8Der = derSequence([version0, algo, octString]);
  const priB64 = uni.arrayBufferToBase64(pkcs8Der.buffer);
  return '{"publicKey":"' + pubB64 + '","privateKey":"' + priB64 + '"}';
}
export {
  rsaEncryptUts as a,
  rsaDecryptUts as b,
  rsaSignUts as c,
  rsaVerifyUts as d,
  rsaGenerateKeyPairUts as r
};
//# sourceMappingURL=rsa.js.map
