package uts.sdk.modules.utsAlipayLogin

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Handler
import android.os.Looper
import com.alipay.sdk.app.AuthTask
import kotlin.concurrent.thread

object AlipayLoginManager {

    private val mainHandler = Handler(Looper.getMainLooper())

    fun isInstalled(context: Context): Boolean {
        return try {
            val pm = context.packageManager
            try {
                pm.getPackageInfo("com.eg.android.AlipayGphone", 0)
                true
            } catch (e: Exception) {
                val uri = Uri.parse("alipays://platformapi/startapp")
                val intent = Intent(Intent.ACTION_VIEW, uri)
                intent.resolveActivity(pm) != null
            }
        } catch (e: Exception) {
            false
        }
    }

    fun auth(
        activity: Activity,
        authInfo: String,
        showLoading: Boolean,
        onSuccess: (resultStatus: String, rawResult: String, authCode: String, userId: String) -> Unit,
        onFail: (errCode: Int, errMsg: String, resultStatus: String) -> Unit,
        onComplete: () -> Unit
    ) {
        // AuthTask.authV2 必须在子线程中调用，否则支付宝 SDK 会抛出异常
        thread {
            try {
                val authTask = AuthTask(activity)
                val rawMap: Map<String, String> = authTask.authV2(authInfo, showLoading)
                val resultStatus = rawMap["resultStatus"] ?: ""
                val result = rawMap["result"] ?: ""
                val memo = rawMap["memo"] ?: ""

                mainHandler.post {
                    if (resultStatus == "9000") {
                        val parsedAuthCode = extractParam(result, "auth_code")
                        val parsedUserId = extractParam(result, "user_id")
                        onSuccess(resultStatus, result, parsedAuthCode, parsedUserId)
                    } else {
                        val errMsg = when (resultStatus) {
                            "6001" -> "用户取消授权"
                            "6002" -> "网络连接出错"
                            "4000" -> if (memo.isNotEmpty()) memo else "系统异常或配置错误"
                            else -> if (memo.isNotEmpty()) memo else "支付宝授权失败($resultStatus)"
                        }
                        val errCode = try { resultStatus.toInt() } catch (e: Exception) { -1 }
                        onFail(errCode, errMsg, resultStatus)
                    }
                    onComplete()
                }
            } catch (e: Exception) {
                e.printStackTrace()
                mainHandler.post {
                    onFail(-999, "调用支付宝 SDK 异常: ${e.message}", "")
                    onComplete()
                }
            }
        }
    }

    private fun extractParam(rawString: String, key: String): String {
        try {
            val pairs = rawString.split("&")
            for (pair in pairs) {
                val kv = pair.split("=", limit = 2)
                if (kv.size == 2 && kv[0] == key) {
                    return kv[1]
                }
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return ""
    }
}
