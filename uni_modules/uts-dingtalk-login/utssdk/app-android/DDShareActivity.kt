package uts.sdk.modules.utsDingtalkLogin

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import com.android.dingtalk.share.ddsharemodule.DDShareApiFactory
import com.android.dingtalk.share.ddsharemodule.IDDAPIEventHandler
import com.android.dingtalk.share.ddsharemodule.message.BaseReq
import com.android.dingtalk.share.ddsharemodule.message.BaseResp
import com.android.dingtalk.share.ddsharemodule.message.SendAuth

class DDShareActivity : Activity(), IDDAPIEventHandler {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        handleIntent(intent)
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        setIntent(intent)
        handleIntent(intent)
    }

    private fun handleIntent(intent: Intent?) {
        if (intent == null) {
            finish()
            return
        }
        val currentAppId = DingTalkManager.currentAppId
        if (currentAppId.isNotEmpty()) {
            try {
                val iddShareApi = DDShareApiFactory.createDDShareApi(this, currentAppId, false)
                iddShareApi.handleIntent(intent, this)
            } catch (e: Exception) {
                e.printStackTrace()
                finish()
            }
        } else {
            finish()
        }
    }

    override fun onReq(req: BaseReq?) {
        finish()
    }

    override fun onResp(baseResp: BaseResp?) {
        if (baseResp is SendAuth.Resp) {
            when (baseResp.mErrCode) {
                BaseResp.ErrCode.ERR_OK -> {
                    DingTalkManager.onSuccess(baseResp.code ?: "")
                }
                BaseResp.ErrCode.ERR_USER_CANCEL -> {
                    DingTalkManager.onFail(-1, "用户取消授权")
                }
                else -> {
                    val msg = baseResp.mErrStr ?: "钉钉授权失败(${baseResp.mErrCode})"
                    DingTalkManager.onFail(baseResp.mErrCode, msg)
                }
            }
        }
        finish()
    }
}
