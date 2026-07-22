import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_upload from '@/uni_modules/uview-ultra/components/up-upload/up-upload.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'upload',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const fileList1 = ref([] as UTSJSONObject[])
const fileList2 = ref([] as UTSJSONObject[])

async function uploadFilePromise(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

async function afterRead(event: UTSJSONObject) {
  const fileData = event.get('file')
  const lists = (Array.isArray(fileData) ? fileData : [fileData]) as UTSJSONObject[]
  let fileListLen = fileList1.value.length
  lists.forEach((item) => {
    fileList1.value.push({
      ...item,
      status: 'uploading',
      message: '上传中'
    } as UTSJSONObject)
  })
  for (let i = 0; i < lists.length; i++) {
    const url = lists[i].getString('url') as string
    const result = await uploadFilePromise(url)
    const item = fileList1.value[fileListLen]
    fileList1.value.splice(fileListLen, 1, Object.assign(item, {
      status: 'success',
      message: '',
      url: result
    }) as UTSJSONObject)
    fileListLen++
  }
}

function deletePic(event: UTSJSONObject) {
  fileList1.value.splice(event.getNumber('index') as number, 1)
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_upload = resolveEasyComponent("up-upload",_easycom_up_upload)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-upload 上传'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-upload 上传",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_upload, _uM({
                  "file-list": fileList1.value,
                  onAfterRead: afterRead,
                  onDelete: deletePic,
                  name: "1",
                  multiple: "",
                  "max-count": 3
                }), null, 8 /* PROPS */, ["file-list"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义上传按钮"),
                _cV(_component_up_upload, _uM({
                  "file-list": fileList2.value,
                  name: "2",
                  multiple: "",
                  "max-count": 3
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_button, _uM({
                      type: "success",
                      text: "选择文件",
                      icon: "plus",
                      size: "mini"
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["file-list"])
              ])
            ])
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
const GenSrcSubUviewUltraDemosUploadUploadStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
