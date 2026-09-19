package uts.sdk.modules.utsDingtalkLogin

import android.app.Activity
import com.android.dingtalk.share.ddsharemodule.DDShareApiFactory
import com.android.dingtalk.share.ddsharemodule.message.SendAuth

object DingTalkManager {
    var currentAppId: String = ""
    private var successCallback: ((String) -> Unit)? = null
    private var failCallback: ((Int, String) -> Unit)? = null
    private var completeCallback: (() -> Unit)? = null

    fun isInstalled(activity: Activity, appId: String): Boolean {
        return try {
            val key = if (appId.isNotEmpty()) appId else "default_key"
            val api = DDShareApiFactory.createDDShareApi(activity, key, false)
            if (api.isDDAppInstalled) {
                return true
            }
            try {
                activity.packageManager.getPackageInfo("com.alibaba.android.rimet", 0)
                true
            } catch (e: Exception) {
                false
            }
        } catch (e: Exception) {
            false
        }
    }

    fun login(
        activity: Activity,
        appId: String,
        state: String,
        onSuccess: (String) -> Unit,
        onFail: (Int, String) -> Unit,
        onComplete: () -> Unit
    ) {
        this.currentAppId = appId
        this.successCallback = onSuccess
        this.failCallback = onFail
        this.completeCallback = onComplete

        try {
            val api = DDShareApiFactory.createDDShareApi(activity, appId, false)
            if (!api.isDDAppInstalled) {
                onFail(-2, "手机未安装钉钉客户端")
                onComplete()
                clear()
                return
            }

            val req = SendAuth.Req().apply {
                scope = SendAuth.Req.SNS_LOGIN
                this.state = if (state.isNotEmpty()) state else "dingtalk_auth_state"
            }

            val result = api.sendReq(req)
            if (!result) {
                onFail(-3, "唤起钉钉客户端失败")
                onComplete()
                clear()
            }
        } catch (e: Exception) {
            onFail(-4, "发起钉钉授权异常: ${e.message}")
            onComplete()
            clear()
        }
    }

    fun onSuccess(authCode: String) {
        successCallback?.invoke(authCode)
        completeCallback?.invoke()
        clear()
    }

    fun onFail(code: Int, msg: String) {
        failCallback?.invoke(code, msg)
        completeCallback?.invoke()
        clear()
    }

    private fun clear() {
        successCallback = null
        failCallback = null
        completeCallback = null
    }
}
