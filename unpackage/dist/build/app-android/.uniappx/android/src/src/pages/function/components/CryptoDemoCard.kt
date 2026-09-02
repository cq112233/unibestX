@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIB120614
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenSrcPagesFunctionComponentsCryptoDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsCryptoDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsCryptoDemoCard
            val _cache = __ins.renderCache
            val base64Input = ref("hello uni-app x")
            val base64EncodeResult = ref("")
            val base64DecodeResult = ref("")
            val hashInput = ref("hello uni-app x")
            val md5Result = ref("")
            val sha256Result = ref("")
            val hmacText = ref("hello uni-app x")
            val hmacKey = ref("secret-key")
            val hmacResult = ref("")
            val aesText = ref("hello uni-app x")
            val aesKey = ref("1234567890abcdef")
            val aesEncryptResult = ref("")
            val aesDecryptResult = ref("")
            val desText = ref("hello uni-app x")
            val desKey = ref("12345678")
            val desEncryptResult = ref("")
            val desDecryptResult = ref("")
            val rsaText = ref("hello uni-app x")
            val rsaPublicKey = ref("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLJXnLrDV0RxJWMHlsNc2glZlGd9GsJh6XV9LRsgLSlPYz2xEm751nqG1MLtkX+m/ov7YMNwyhwhw13PFCPfcpm0klWkcKPteEPOXUx3H6mVL2YMNUREtsMxub1zrvo0GNm688Py/8WhXzzxXT/nDe0owpCMmaQWaGP/diX7T7uQIDAQAB")
            val rsaPrivateKey = ref("MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMslecusNXRHElYweWw1zaCVmUZ30awmHpdX0tGyAtKU9jPbESbvnWeobUwu2Rf6b+i/tgw3DKHCHDXc8UI99ymbSSVaRwo+14Q85dTHcfqZUvZgw1RES2wzG5vXOu+jQY2brzw/L/xaFfPPFdP+cN7SjCkIyZpBZoY/92JftPu5AgMBAAECgYEAqjidxPdo1yUSjVwS8oRm6A9SnwSZkZljesdhZMq3qMKfRrZiufCAQbKU2whKatgz26CAp92c3RIs10lqc2o+5oKBOPNnAJXCmnjwNG9tlbKs0SpZjAgKgYv/uHlr2YX10xBQi1C7M2ySdbshj0inyyxzb6ibVJTmpHCFSkW1920CQQD/w6OYh87KOUYjan950HaSnc1g20HtI0rzRALRogGeQpo1qSeShfFGYOM219ee+9zawZLpw0X1W7BnH2vkNOXzAkEAy1VrNa4m0uC6NO+ytTEM6G+/WE8CuInIDvUzypLN8pNhev5/cPVzdZOcVlQLFZiPGe0vdu+hXmFvYYqWiymmowJANGdtea85241opZEIlXj1Eo1qq1HBbEky7i0dNr6u/jI/TodeKFNxYC4x3+bRsy1/zwKii2sLRn6G4lo5zQRZqQJAe8cA34mnOqHw2H6+BAza9bfo/EIEvv+o2Got3/gkBLHxGmVIgSP56C42clrw8HGRU1AOn9FaI1Ee83rhD9AIDwJAFs5T4UMe07NfVUIlN1jxyHvRwyXWjgex+6JbYXmhV9wjQ+taO74aO4cRwKhe0Yi5smGSR7+mzgJhJNdxn+5ntQ==")
            val rsaKeyPairResult = ref("")
            val rsaEncryptResult = ref("")
            val rsaDecryptResult = ref("")
            val rsaSignResult = ref("")
            val rsaVerifyResult = ref("")
            fun gen_errorMessage_fn(e: Any): String {
                if (e is UTSError) {
                    return (e as UTSError).message
                }
                return JSON.stringify(e)
            }
            val errorMessage = ::gen_errorMessage_fn
            fun gen_handleBase64Encode_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            base64EncodeResult.value = await(base64Encode(base64Input.value))
                            base64DecodeResult.value = ""
                        }
                         catch (e: Throwable) {
                            base64EncodeResult.value = errorMessage(e)
                        }
                })
            }
            val handleBase64Encode = ::gen_handleBase64Encode_fn
            fun gen_handleBase64Decode_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            val target = if (base64EncodeResult.value.length > 0) {
                                base64EncodeResult.value
                            } else {
                                base64Input.value
                            }
                            base64DecodeResult.value = await(base64Decode(target))
                        }
                         catch (e: Throwable) {
                            base64DecodeResult.value = errorMessage(e)
                        }
                })
            }
            val handleBase64Decode = ::gen_handleBase64Decode_fn
            fun gen_handleMd5_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            md5Result.value = await(md5(hashInput.value))
                        }
                         catch (e: Throwable) {
                            md5Result.value = errorMessage(e)
                        }
                })
            }
            val handleMd5 = ::gen_handleMd5_fn
            fun gen_handleSha256_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            sha256Result.value = await(sha256(hashInput.value))
                        }
                         catch (e: Throwable) {
                            sha256Result.value = errorMessage(e)
                        }
                })
            }
            val handleSha256 = ::gen_handleSha256_fn
            fun gen_handleHmac_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            hmacResult.value = await(hmacSha1(hmacText.value, hmacKey.value))
                        }
                         catch (e: Throwable) {
                            hmacResult.value = errorMessage(e)
                        }
                })
            }
            val handleHmac = ::gen_handleHmac_fn
            fun gen_handleAesEncrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            aesEncryptResult.value = await(aesEncrypt(aesText.value, aesKey.value))
                            aesDecryptResult.value = ""
                        }
                         catch (e: Throwable) {
                            aesEncryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleAesEncrypt = ::gen_handleAesEncrypt_fn
            fun gen_handleAesDecrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            aesDecryptResult.value = await(aesDecrypt(aesEncryptResult.value, aesKey.value))
                        }
                         catch (e: Throwable) {
                            aesDecryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleAesDecrypt = ::gen_handleAesDecrypt_fn
            fun gen_handleDesEncrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            desEncryptResult.value = await(desEncrypt(desText.value, desKey.value))
                            desDecryptResult.value = ""
                        }
                         catch (e: Throwable) {
                            desEncryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleDesEncrypt = ::gen_handleDesEncrypt_fn
            fun gen_handleDesDecrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            desDecryptResult.value = await(desDecrypt(desEncryptResult.value, desKey.value))
                        }
                         catch (e: Throwable) {
                            desDecryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleDesDecrypt = ::gen_handleDesDecrypt_fn
            fun gen_handleRsaGenerateKeyPair_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            val jsonStr = await(rsaGenerateKeyPair(1024))
                            rsaKeyPairResult.value = jsonStr
                            try {
                                val keyData = JSON.parse(jsonStr) as UTSJSONObject
                                val pub = (keyData["publicKey"] ?: "") as String
                                if (pub.length > 0) {
                                    rsaPublicKey.value = pub
                                }
                                val pri = (keyData["privateKey"] ?: "") as String
                                if (pri.length > 0) {
                                    rsaPrivateKey.value = pri
                                }
                            }
                             catch (err: Throwable) {
                                console.error("Failed to parse RSA keypair:", err)
                            }
                        }
                         catch (e: Throwable) {
                            rsaKeyPairResult.value = errorMessage(e)
                        }
                })
            }
            val handleRsaGenerateKeyPair = ::gen_handleRsaGenerateKeyPair_fn
            fun gen_handleRsaEncrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            rsaEncryptResult.value = await(rsaEncrypt(rsaText.value, rsaPublicKey.value))
                            rsaDecryptResult.value = ""
                        }
                         catch (e: Throwable) {
                            rsaEncryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleRsaEncrypt = ::gen_handleRsaEncrypt_fn
            fun gen_handleRsaDecrypt_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            rsaDecryptResult.value = await(rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value))
                        }
                         catch (e: Throwable) {
                            rsaDecryptResult.value = errorMessage(e)
                        }
                })
            }
            val handleRsaDecrypt = ::gen_handleRsaDecrypt_fn
            fun gen_handleRsaSign_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            rsaSignResult.value = await(rsaSign(rsaText.value, rsaPrivateKey.value, "SHA-256"))
                            rsaVerifyResult.value = ""
                        }
                         catch (e: Throwable) {
                            rsaSignResult.value = errorMessage(e)
                        }
                })
            }
            val handleRsaSign = ::gen_handleRsaSign_fn
            fun gen_handleRsaVerify_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            val ok = await(rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, "SHA-256"))
                            rsaVerifyResult.value = if (ok) {
                                "通过 (true)"
                            } else {
                                "未通过 (false)"
                            }
                        }
                         catch (e: Throwable) {
                            rsaVerifyResult.value = errorMessage(e)
                        }
                })
            }
            val handleRsaVerify = ::gen_handleRsaVerify_fn
            val uuidResult = ref("")
            fun gen_handleGenerateUUID_fn() {
                uuidResult.value = generateUUID()
            }
            val handleGenerateUUID = ::gen_handleGenerateUUID_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "加密解密工具 (crypto)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "1. Base64 编码 / 解码"),
                            _cE("input", _uM("modelValue" to base64Input.value, "onInput" to fun(`$event`: UniInputEvent){
                                base64Input.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要编码的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-15ounam-m wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleBase64Encode), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "编码")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-x8830x-r wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleBase64Decode), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "解码")
                                ))
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "编码结果 (Base64):"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(base64EncodeResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "解码结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(base64DecodeResult.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "2. MD5 / SHA-256 摘要"),
                            _cE("input", _uM("modelValue" to hashInput.value, "onInput" to fun(`$event`: UniInputEvent){
                                hashInput.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要计算摘要的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-a9cvf4-x wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleMd5), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "MD5")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1lg57za-y wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleSha256), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "SHA-256")
                                ))
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "MD5:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(md5Result.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "SHA-256:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-159osg-z wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(sha256Result.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "3. HMAC-SHA1 签名"),
                            _cE("input", _uM("modelValue" to hmacText.value, "onInput" to fun(`$event`: UniInputEvent){
                                hmacText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要签名的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("input", _uM("modelValue" to hmacKey.value, "onInput" to fun(`$event`: UniInputEvent){
                                hmacKey.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入密钥 key", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1mrou86-11 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleHmac), _uA(
                                _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "计算 HMAC-SHA1")
                            )),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-137543e-w", "style" to _nS(_uM("font-family" to "monospace"))), _tD(hmacResult.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "4. AES 加密 / 解密 (key 需 16 位)"),
                            _cE("input", _uM("modelValue" to aesText.value, "onInput" to fun(`$event`: UniInputEvent){
                                aesText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要加密的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("input", _uM("modelValue" to aesKey.value, "onInput" to fun(`$event`: UniInputEvent){
                                aesKey.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入 16 位密钥", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-szquah-12 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleAesEncrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "加密")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-aqzh5-13 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleAesDecrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "解密")
                                ))
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "加密结果 (hex):"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(aesEncryptResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "解密结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(aesDecryptResult.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "5. DES 加密 / 解密 (key 需 8 位)"),
                            _cE("input", _uM("modelValue" to desText.value, "onInput" to fun(`$event`: UniInputEvent){
                                desText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要加密的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("input", _uM("modelValue" to desKey.value, "onInput" to fun(`$event`: UniInputEvent){
                                desKey.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入 8 位密钥", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-xjd3x3-14 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleDesEncrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "加密")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-3vwplv-15 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleDesDecrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "解密")
                                ))
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "加密结果 (hex):"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(desEncryptResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "解密结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(desDecryptResult.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "6. RSA 非对称加密 / 签名 (示例密钥 1024 位)"),
                            _cE("input", _uM("modelValue" to rsaText.value, "onInput" to fun(`$event`: UniInputEvent){
                                rsaText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要加密 / 签名的文本", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1j7sztc-16 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleRsaGenerateKeyPair), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "生成密钥对")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-s6x1vz-17 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleRsaEncrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "公钥加密")
                                ))
                            )),
                            _cE("input", _uM("modelValue" to rsaPublicKey.value, "onInput" to fun(`$event`: UniInputEvent){
                                rsaPublicKey.value = `$event`.detail.value
                            }
                            , "placeholder" to "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-1s1mjhg-9"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("input", _uM("modelValue" to rsaPrivateKey.value, "onInput" to fun(`$event`: UniInputEvent){
                                rsaPrivateKey.value = `$event`.detail.value
                            }
                            , "placeholder" to "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）", "class" to "wtu-pcar7m-a wtu-im8kej-b wtu-gp5z9k-c wtu-1j56kvu-d wtu-14iesb0-3 wtu-66kyd8-4 wtu-18nprza-e wtu-bdtmoe-6 wtu-1jg4z3q-f wtu-18k3p2j-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-19z8y3q-h wtu-hj68nu-i wtu-1s1mjhg-9"), _uA(
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-6rbxlm-18 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleRsaDecrypt), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "私钥解密")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-1ac3pue-19 wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1vx8xro-p", "onClick" to handleRsaSign), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "SHA-256 签名")
                                )),
                                _cE("view", _uM("class" to "wtu-1vkw08h-j wtu-f3mfu0-k wtu-xyjw4i-l wtu-p8gyew-1a wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o", "onClick" to handleRsaVerify), _uA(
                                    _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "验签")
                                ))
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "密钥对结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(rsaKeyPairResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "加密结果 (hex):"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(rsaEncryptResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "解密结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(rsaDecryptResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "签名结果 (hex):"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(rsaSignResult.value), 5),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t wtu-137543e-w"), "验签结果:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jg4z3q-f wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(rsaVerifyResult.value), 5)
                        )),
                        _cE("view", _uM("class" to "wtu-9h5gkp-0 wtu-1w4w6li-1 wtu-10y74dr-2 wtu-14iesb0-3 wtu-66kyd8-4 wtu-8apbzm-5"), _uA(
                            _cE("text", _uM("class" to "wtu-bdtmoe-6 wtu-16mxvjr-7 wtu-19n0869-8 wtu-1s1mjhg-9"), "7. UUID 生成 (v4)"),
                            _cE("view", _uM("class" to "wtu-o6c3eh-10 wtu-f3mfu0-k wtu-xyjw4i-l wtu-1322i0s-1b wtu-qbc0lv-n wtu-19z8y3q-h wtu-hj68nu-i wtu-1i4ccha-o wtu-1s1mjhg-9", "onClick" to handleGenerateUUID), _uA(
                                _cE("text", _uM("class" to "wtu-7s6w8j-q wtu-bdtmoe-6 wtu-16mxvjr-7"), "生成 UUID")
                            )),
                            _cE("text", _uM("class" to "wtu-26e19f-s wtu-11l2toq-t"), "生成的 UUID:"),
                            _cE("text", _uM("class" to "result-text wtu-26e19f-s wtu-rggjlv-u wtu-1jc7f14-1c wtu-17238c4-v", "style" to _nS(_uM("font-family" to "monospace"))), _tD(uuidResult.value), 5)
                        ))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-9h5gkp-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1w4w6li-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-10y74dr-2" to _pS(_uM("marginBottom" to 16)), "wtu-14iesb0-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-66kyd8-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-8apbzm-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-bdtmoe-6" to _pS(_uM("fontSize" to 13)), "wtu-16mxvjr-7" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-19n0869-8" to _pS(_uM("color" to "#1e293b")), "wtu-1s1mjhg-9" to _pS(_uM("marginBottom" to 8)), "wtu-pcar7m-a" to _pS(_uM("height" to 38)), "wtu-im8kej-b" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-gp5z9k-c" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1j56kvu-d" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-18nprza-e" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-1jg4z3q-f" to _pS(_uM("color" to "#334155")), "wtu-18k3p2j-g" to _pS(_uM("marginBottom" to 12)), "wtu-19z8y3q-h" to _pS(_uM("flexDirection" to "row")), "wtu-hj68nu-i" to _pS(_uM("alignItems" to "center")), "wtu-1vkw08h-j" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-f3mfu0-k" to _pS(_uM("height" to 36)), "wtu-xyjw4i-l" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-15ounam-m" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-qbc0lv-n" to _pS(_uM("display" to "flex")), "wtu-1i4ccha-o" to _pS(_uM("justifyContent" to "center")), "wtu-1vx8xro-p" to _pS(_uM("marginRight" to 8)), "wtu-7s6w8j-q" to _pS(_uM("color" to "#ffffff")), "wtu-x8830x-r" to _pS(_uM("backgroundColor" to "#6366f1")), "wtu-26e19f-s" to _pS(_uM("fontSize" to 12)), "wtu-11l2toq-t" to _pS(_uM("color" to "#64748b")), "wtu-rggjlv-u" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-17238c4-v" to _pS(_uM("marginTop" to 2)), "wtu-137543e-w" to _pS(_uM("marginTop" to 8)), "wtu-a9cvf4-x" to _pS(_uM("backgroundColor" to "#f59e0b")), "wtu-1lg57za-y" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-159osg-z" to _pS(_uM("color" to "#059669")), "wtu-o6c3eh-10" to _pS(_uM("width" to "100%")), "wtu-1mrou86-11" to _pS(_uM("backgroundColor" to "#0ea5e9")), "wtu-szquah-12" to _pS(_uM("backgroundColor" to "#8b5cf6")), "wtu-aqzh5-13" to _pS(_uM("backgroundColor" to "#d946ef")), "wtu-xjd3x3-14" to _pS(_uM("backgroundColor" to "#14b8a6")), "wtu-3vwplv-15" to _pS(_uM("backgroundColor" to "#f97316")), "wtu-1j7sztc-16" to _pS(_uM("backgroundColor" to "#0d9488")), "wtu-s6x1vz-17" to _pS(_uM("backgroundColor" to "#0284c7")), "wtu-6rbxlm-18" to _pS(_uM("backgroundColor" to "#7c3aed")), "wtu-1ac3pue-19" to _pS(_uM("backgroundColor" to "#db2777")), "wtu-p8gyew-1a" to _pS(_uM("backgroundColor" to "#65a30d")), "wtu-1322i0s-1b" to _pS(_uM("backgroundColor" to "#2563eb")), "wtu-1jc7f14-1c" to _pS(_uM("color" to "#2563eb")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
