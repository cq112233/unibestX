/*
 * @Author       : jry
 * @Description  :
 * @version      : 4.0
 * @Date         : 2025-11-18 09:30:08
 * @LastAuthor   : jry
 * @lastTime     : 2025-11-18 09:30:08
 * @FilePath     : /uview-ultra/uni_modules/uview-ultra/components/up-dropdown/dropdown.uts
 */
import config from '../../libs/config/config'

export default {
    // dropdown组件
    dropdown: {
        activeColor: config.getString('color.up-primary'),
        inactiveColor: '#606266',
        closeOnClickMask: true,
        closeOnClickSelf: true,
        duration: 300,
        height: 40,
        borderBottom: false,
        titleSize: 14,
        borderRadius: 0,
        menuIcon: 'arrow-down',
        menuIconSize: 14
    }
} as UTSJSONObject