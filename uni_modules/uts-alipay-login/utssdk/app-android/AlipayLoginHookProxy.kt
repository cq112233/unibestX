package uts.sdk.modules.utsAlipayLogin

import android.app.Application
import io.dcloud.uts.UTSAndroidHookProxy

class AlipayLoginHookProxy : UTSAndroidHookProxy {
    override fun onCreate(application: Application) {
        UniUTSMethodRegister.registerUTSMethod()
    }
}
