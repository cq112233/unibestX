/*
 * @Author       : jry
 * @Description  :
 * @version      : 4.0
 * @Date         : 2025-12-19 20:17:21
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-19 20:17:21
 * @FilePath     : /uview-ultra/libs/config/props/search.js
 */
import { t } from '../../libs/i18n/index.js'
export default {
    // search
    search: {
        shape: 'round',
        bgColor: '#f2f2f2',
        placeholder: t("up.search.placeholder"),
        clearabled: true,
        focus: false,
        showAction: true,
        actionStyle: {},
        actionText: t("up.common.search"),
        inputAlign: 'left',
        inputStyle: {},
        disabled: false,
        borderColor: 'transparent',
        searchIconColor: '#909399',
        searchIconSize: 22,
        color: '#606266',
        placeholderColor: '#909399',
        searchIcon: 'search',
        iconPosition: 'left',
        margin: '0',
        animation: false,
        value: '',
        maxlength: '-1',
        height: 32,
        label: null,
        adjustPosition: true,
        autoBlur: true
    }
}
