import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_input from '@/uni_modules/uview-ultra/components/up-input/up-input.uvue'
import _easycom_up_form_item from '@/uni_modules/uview-ultra/components/up-form-item/up-form-item.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_radio from '@/uni_modules/uview-ultra/components/up-radio/up-radio.uvue'
import _easycom_up_radio_group from '@/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue'
import _easycom_up_checkbox from '@/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue'
import _easycom_up_checkbox_group from '@/uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue'
import _easycom_up_switch from '@/uni_modules/uview-ultra/components/up-switch/up-switch.uvue'
import _easycom_up_rate from '@/uni_modules/uview-ultra/components/up-rate/up-rate.uvue'
import _easycom_up_number_box from '@/uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue'
import _easycom_up_slider from '@/uni_modules/uview-ultra/components/up-slider/up-slider.uvue'
import _easycom_up_textarea from '@/uni_modules/uview-ultra/components/up-textarea/up-textarea.uvue'
import _easycom_up_upload from '@/uni_modules/uview-ultra/components/up-upload/up-upload.uvue'
import _easycom_up_form from '@/uni_modules/uview-ultra/components/up-form/up-form.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_calendar from '@/uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue'
import _easycom_up_picker from '@/uni_modules/uview-ultra/components/up-picker/up-picker.uvue'
import _easycom_up_datetime_picker from '@/uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.uvue'
import _easycom_up_action_sheet from '@/uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { reactive, ref } from 'vue'

// ==================== 表单数据模型 ====================

const __sfc__ = defineComponent({
  __name: 'form',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const formModel = reactive({
  name: '',
  gender: '',
  birthday: '',
  country: '',
  stayTime: '',
  fruit: 'apple',
  hobbies: ['reading'] as string[],
  notification: true,
  rate: 4,
  count: 1,
  satisfaction: 80,
  intro: '',
  photos: [] as UTSJSONObject[],
})

const formRules = { __$originalPosition: new UTSSourceMapPosition("formRules", "src/sub/uview-ultra/demos/form/form.uvue", 217, 7), 
  name: [
    {
      required: true,
      message: '请填写姓名',
      trigger: ['blur', 'change'],
    },
    {
      min: 2,
      max: 10,
      message: '姓名长度在2到10个字符',
      trigger: ['blur', 'change'],
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
      trigger: ['change'],
    },
  ],
  birthday: [
    {
      required: true,
      message: '请选择出生日期',
      trigger: ['change'],
    },
  ],
  intro: [
    {
      required: true,
      message: '请填写个人简介',
      trigger: ['blur', 'change'],
    }
  ]
} as UTSJSONObject

const uForm = ref(null as ComponentPublicInstance | null)

// ==================== 表单操作 ====================
const uploadList = ref([] as UTSJSONObject[])

function submitForm() {
  const form = uForm.value
  if (form != null) {
    (form.$callMethod('validate') as Promise<any>).then((res: any) => {
      uni.showToast({
        title: '验证通过，提交成功！',
        icon: 'success',
      })
      console.log('提交的数据：', formModel, " at src/sub/uview-ultra/demos/form/form.uvue:267")
    }).catch((err: any | null) => {
      console.log('验证失败:', err, " at src/sub/uview-ultra/demos/form/form.uvue:269")
      uni.showToast({
        title: '请检查必填项',
        icon: 'error',
      })
    })
  }
}

function resetForm() {
  const form = uForm.value
  if (form != null) {
    form.$callMethod('resetFields')
    formModel.gender = ''
    formModel.birthday = ''
    formModel.country = ''
    formModel.stayTime = ''
    formModel.hobbies = ['reading'] as string[]
    uploadList.value = [] as UTSJSONObject[]
    uni.showToast({
      title: '已重置表单',
      icon: 'none',
    })
  }
}

// ==================== 性别选择 (ActionSheet) ====================
const genderActionShow = ref(false)
const genderActions = ref([
  { name: '男' },
  { name: '女' },
  { name: '保密' }
] as UTSJSONObject[])

function onGenderSelect(item: UTSJSONObject) {
  formModel.gender = item.getString('name') ?? ''
  genderActionShow.value = false
  // 主动触发校验
  const form = uForm.value
  if (form != null) {
    form.$callMethod('validateField', 'gender')
  }
}

// ==================== 日期范围选择 (Calendar) ====================
const calendarShow = ref(false)

function onCalendarConfirm(dates: string[]) {
  if (dates.length > 0) {
    if (dates.length > 1) {
      formModel.stayTime = `${dates[0]} 至 ${dates[dates.length - 1]}`
    } else {
      formModel.stayTime = dates[0]
    }
  }
  calendarShow.value = false
}

// ==================== 国籍选择 (Picker) ====================
const pickerShow = ref(false)
const pickerColumns = ref([
  ['中国', '美国', '日本', '英国', '法国', '德国', '澳大利亚'],
] as string[][])

function onPickerConfirm(e: UTSJSONObject): void {
  // eslint-disable-next-line dot-notation
  const indexs = e['indexs'] as number[]
  if (indexs.length > 0) {
    formModel.country = pickerColumns.value[0][indexs[0]]
  }
  pickerShow.value = false
}

// ==================== 出生日期选择 (DatetimePicker) ====================
const datetimePickerShow = ref(false)
const datetimePickerValue = ref(new Date().getTime() as any)

function onDatetimePickerConfirm(e: UTSJSONObject): void {
  // eslint-disable-next-line dot-notation
  const value = e['value']
  if (value != null) {
    datetimePickerValue.value = value
    let timestamp = 0
    if (typeof value === 'number') {
      timestamp = value as number
    } else {
      timestamp = Number.parseInt(value.toString())
    }
    const d = new Date(timestamp)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    const monthStr = month < 10 ? `0${month}` : `${month}`
    const dateStr = date < 10 ? `0${date}` : `${date}`
    formModel.birthday = `${year}-${monthStr}-${dateStr}`
    
    // 主动触发校验
    const form = uForm.value
    if (form != null) {
      form.$callMethod('validateField', 'birthday')
    }
  }
  datetimePickerShow.value = false
}

// ==================== 图片上传 ====================
function onUploadAfterRead(e: UTSJSONObject): void {
  // eslint-disable-next-line dot-notation
  const file = e['file'] as Array<UTSJSONObject>
  file.forEach((item: UTSJSONObject) => {
    uploadList.value.push(UTSJSONObject.assign({} as UTSJSONObject, item))
  })
  formModel.photos = uploadList.value
}

function onUploadDelete(e: UTSJSONObject): void {
  // eslint-disable-next-line dot-notation
  const index = e['index'] as number
  if (index >= 0 && index < uploadList.value.length) {
    uploadList.value.splice(index, 1)
  }
  formModel.photos = uploadList.value
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_input = resolveEasyComponent("up-input",_easycom_up_input)
const _component_up_form_item = resolveEasyComponent("up-form-item",_easycom_up_form_item)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_radio = resolveEasyComponent("up-radio",_easycom_up_radio)
const _component_up_radio_group = resolveEasyComponent("up-radio-group",_easycom_up_radio_group)
const _component_up_checkbox = resolveEasyComponent("up-checkbox",_easycom_up_checkbox)
const _component_up_checkbox_group = resolveEasyComponent("up-checkbox-group",_easycom_up_checkbox_group)
const _component_up_switch = resolveEasyComponent("up-switch",_easycom_up_switch)
const _component_up_rate = resolveEasyComponent("up-rate",_easycom_up_rate)
const _component_up_number_box = resolveEasyComponent("up-number-box",_easycom_up_number_box)
const _component_up_slider = resolveEasyComponent("up-slider",_easycom_up_slider)
const _component_up_textarea = resolveEasyComponent("up-textarea",_easycom_up_textarea)
const _component_up_upload = resolveEasyComponent("up-upload",_easycom_up_upload)
const _component_up_form = resolveEasyComponent("up-form",_easycom_up_form)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_calendar = resolveEasyComponent("up-calendar",_easycom_up_calendar)
const _component_up_picker = resolveEasyComponent("up-picker",_easycom_up_picker)
const _component_up_datetime_picker = resolveEasyComponent("up-datetime-picker",_easycom_up_datetime_picker)
const _component_up_action_sheet = resolveEasyComponent("up-action-sheet",_easycom_up_action_sheet)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-form 表单'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Form 表单",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "demo-block" }), [
              _cV(_component_up_form, _uM({
                ref_key: "uForm",
                ref: uForm,
                model: formModel,
                rules: formRules,
                "label-width": "90px",
                "error-type": "toast"
              }), _uM({
                default: withSlotCtx((): any[] => [
                  _cV(_component_up_form_item, _uM({
                    label: "姓名",
                    prop: "name",
                    "border-bottom": true,
                    required: ""
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_input, _uM({
                        modelValue: formModel.name,
                        "onUpdate:modelValue": $event => {(formModel.name) = $event},
                        placeholder: "请输入姓名",
                        border: "none",
                        clearable: ""
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "性别",
                    prop: "gender",
                    "border-bottom": true,
                    onClick: () => {genderActionShow.value = true},
                    required: ""
                  }), _uM({
                    right: withSlotCtx((): any[] => [
                      _cV(_component_up_icon, _uM({
                        name: "arrow-right",
                        color: "#c0c4cc",
                        size: "16"
                      }))
                    ]),
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_input, _uM({
                        modelValue: formModel.gender,
                        "onUpdate:modelValue": $event => {(formModel.gender) = $event},
                        disabled: "",
                        "disabled-color": "#ffffff",
                        placeholder: "请选择性别",
                        border: "none"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["onClick"]),
                  _cV(_component_up_form_item, _uM({
                    label: "出生日期",
                    prop: "birthday",
                    "border-bottom": true,
                    onClick: () => {datetimePickerShow.value = true},
                    required: ""
                  }), _uM({
                    right: withSlotCtx((): any[] => [
                      _cV(_component_up_icon, _uM({
                        name: "arrow-right",
                        color: "#c0c4cc",
                        size: "16"
                      }))
                    ]),
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_input, _uM({
                        modelValue: formModel.birthday,
                        "onUpdate:modelValue": $event => {(formModel.birthday) = $event},
                        disabled: "",
                        "disabled-color": "#ffffff",
                        placeholder: "请选择出生日期",
                        border: "none"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["onClick"]),
                  _cV(_component_up_form_item, _uM({
                    label: "国籍",
                    prop: "country",
                    "border-bottom": true,
                    onClick: () => {pickerShow.value = true}
                  }), _uM({
                    right: withSlotCtx((): any[] => [
                      _cV(_component_up_icon, _uM({
                        name: "arrow-right",
                        color: "#c0c4cc",
                        size: "16"
                      }))
                    ]),
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_input, _uM({
                        modelValue: formModel.country,
                        "onUpdate:modelValue": $event => {(formModel.country) = $event},
                        disabled: "",
                        "disabled-color": "#ffffff",
                        placeholder: "请选择国籍",
                        border: "none"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["onClick"]),
                  _cV(_component_up_form_item, _uM({
                    label: "行程时间",
                    prop: "stayTime",
                    "border-bottom": true,
                    onClick: () => {calendarShow.value = true}
                  }), _uM({
                    right: withSlotCtx((): any[] => [
                      _cV(_component_up_icon, _uM({
                        name: "arrow-right",
                        color: "#c0c4cc",
                        size: "16"
                      }))
                    ]),
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_input, _uM({
                        modelValue: formModel.stayTime,
                        "onUpdate:modelValue": $event => {(formModel.stayTime) = $event},
                        disabled: "",
                        "disabled-color": "#ffffff",
                        placeholder: "请选择日期范围",
                        border: "none"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["onClick"]),
                  _cV(_component_up_form_item, _uM({
                    label: "水果最爱",
                    prop: "fruit",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_radio_group, _uM({
                        modelValue: formModel.fruit,
                        "onUpdate:modelValue": $event => {(formModel.fruit) = $event},
                        placement: "row"
                      }), _uM({
                        default: withSlotCtx((): any[] => [
                          _cV(_component_up_radio, _uM({
                            name: "apple",
                            label: "苹果"
                          })),
                          _cE("view", _uM({ class: "w-10px" })),
                          _cV(_component_up_radio, _uM({
                            name: "banana",
                            label: "香蕉"
                          })),
                          _cE("view", _uM({ class: "w-10px" })),
                          _cV(_component_up_radio, _uM({
                            name: "orange",
                            label: "橘子"
                          }))
                        ]),
                        _: 1 /* STABLE */
                      }), 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "兴趣爱好",
                    prop: "hobbies",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_checkbox_group, _uM({
                        modelValue: formModel.hobbies,
                        "onUpdate:modelValue": $event => {(formModel.hobbies) = $event},
                        placement: "row"
                      }), _uM({
                        default: withSlotCtx((): any[] => [
                          _cV(_component_up_checkbox, _uM({
                            name: "reading",
                            label: "阅读"
                          })),
                          _cE("view", _uM({ class: "w-10px" })),
                          _cV(_component_up_checkbox, _uM({
                            name: "sports",
                            label: "运动"
                          })),
                          _cE("view", _uM({ class: "w-10px" })),
                          _cV(_component_up_checkbox, _uM({
                            name: "music",
                            label: "音乐"
                          }))
                        ]),
                        _: 1 /* STABLE */
                      }), 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "通知开关",
                    prop: "notification",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_switch, _uM({
                        modelValue: formModel.notification,
                        "onUpdate:modelValue": $event => {(formModel.notification) = $event},
                        "active-color": "#2979ff"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "服务评分",
                    prop: "rate",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_rate, _uM({
                        modelValue: formModel.rate,
                        "onUpdate:modelValue": $event => {(formModel.rate) = $event},
                        count: 5
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "购买数量",
                    prop: "count",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_number_box, _uM({
                        modelValue: formModel.count,
                        "onUpdate:modelValue": $event => {(formModel.count) = $event},
                        min: 1,
                        max: 100
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "满意度",
                    prop: "satisfaction",
                    "border-bottom": true
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_slider, _uM({
                        modelValue: formModel.satisfaction,
                        "onUpdate:modelValue": $event => {(formModel.satisfaction) = $event},
                        min: 0,
                        max: 100,
                        "show-value": true,
                        style: _nS(_uM({"width":"100%"}))
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "style"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "个人简介",
                    prop: "intro",
                    "border-bottom": true,
                    "label-position": "top"
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_textarea, _uM({
                        modelValue: formModel.intro,
                        "onUpdate:modelValue": $event => {(formModel.intro) = $event},
                        placeholder: "请输入个人简介",
                        count: "",
                        maxlength: 100
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1 /* STABLE */
                  })),
                  _cV(_component_up_form_item, _uM({
                    label: "相关照片",
                    prop: "photos",
                    "border-bottom": true,
                    "label-position": "top"
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cV(_component_up_upload, _uM({
                        "file-list": uploadList.value,
                        multiple: true,
                        "max-count": 3,
                        width: "80px",
                        height: "80px",
                        onAfterRead: onUploadAfterRead,
                        onDelete: onUploadDelete
                      }), null, 8 /* PROPS */, ["file-list"])
                    ]),
                    _: 1 /* STABLE */
                  }))
                ]),
                _: 1 /* STABLE */
              }), 8 /* PROPS */, ["model"]),
              _cE("view", _uM({ class: "mt-20px flex-row justify-between" }), [
                _cE("view", _uM({ class: "flex-1 mr-10px" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "提交表单",
                    onClick: submitForm
                  }))
                ]),
                _cE("view", _uM({ class: "flex-1 ml-10px" }), [
                  _cV(_component_up_button, _uM({
                    type: "info",
                    text: "重置表单",
                    onClick: resetForm
                  }))
                ])
              ])
            ]),
            _cV(_component_up_calendar, _uM({
              show: calendarShow.value,
              mode: "range",
              onConfirm: onCalendarConfirm,
              onClose: () => {calendarShow.value = false}
            }), null, 8 /* PROPS */, ["show", "onClose"]),
            _cV(_component_up_picker, _uM({
              show: pickerShow.value,
              columns: pickerColumns.value,
              onConfirm: onPickerConfirm,
              onCancel: () => {pickerShow.value = false},
              onClose: () => {pickerShow.value = false}
            }), null, 8 /* PROPS */, ["show", "columns", "onCancel", "onClose"]),
            _cV(_component_up_datetime_picker, _uM({
              modelValue: datetimePickerValue.value,
              "onUpdate:modelValue": $event => {(datetimePickerValue).value = $event},
              show: datetimePickerShow.value,
              mode: "date",
              "min-date": 0,
              onConfirm: onDatetimePickerConfirm,
              onCancel: () => {datetimePickerShow.value = false},
              onClose: () => {datetimePickerShow.value = false}
            }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "show", "onCancel", "onClose"]),
            _cV(_component_up_action_sheet, _uM({
              show: genderActionShow.value,
              actions: genderActions.value,
              title: "请选择性别",
              onSelect: onGenderSelect,
              onClose: () => {genderActionShow.value = false}
            }), null, 8 /* PROPS */, ["show", "actions", "onClose"])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubUviewUltraDemosFormFormStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["blur", _pS(_uM([["filter", "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)"], ["--un-blur", "blur(8rpx)"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["ml-10px", _pS(_uM([["marginLeft", 10]]))], ["mr-10px", _pS(_uM([["marginRight", 10]]))], ["mt-20px", _pS(_uM([["marginTop", 20]]))], ["none", _pS(_uM([["display", "none"]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["w-10px", _pS(_uM([["width", 10]]))], ["section-title", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 8], ["paddingLeft", 16], ["fontSize", 18], ["fontWeight", "bold"], ["color", "#303133"]]))], ["demo-block", _pS(_uM([["marginTop", 0], ["marginRight", 12], ["marginBottom", 12], ["marginLeft", 12], ["paddingTop", 12], ["paddingRight", 16], ["paddingBottom", 12], ["paddingLeft", 16], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8], ["boxShadow", "0 2px 12px rgba(0, 0, 0, 0.05)"]]))]])]
