package uts.sdk.modules.utsDingtalkLogin

import android.app.Application
import io.dcloud.uts.UTSAndroidHookProxy

class DingtalkLoginHookProxy : UTSAndroidHookProxy {
    override fun onCreate(application: Application) {
        UniUTSMethodRegister.registerUTSMethod()
    }
}
