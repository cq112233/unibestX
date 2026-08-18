import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_gap from '@/uni_modules/uview-ultra/components/up-gap/up-gap.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
import { ref, watch } from 'vue'
import { chooseFile } from './utils.uts'
import { addStyle, addUnit, toast } from '../../libs/function/index.uts'
import { func as testFunc, promise as testPromise, image as testImage, video as testVideo } from '../../libs/function/test.uts'
import { t as $t } from '../../libs/i18n/index.uts'
import { UPUploadListItem, UPUploadFileChoosed, UPUploadChooseFileOptions } from './types.uts'

type UPUploadReadCallback = (file: Array<UPUploadFileChoosed | null>, detail: UTSJSONObject) => any


const __sfc__ = defineComponent({
  __name: 'up-upload',
name: "up-upload",
  props: {
	accept: {
		type: String,
		default: 'image'
	},
	extension: {
		type: Array as PropType<Array<string>>,
		default: () => [] as Array<string>
	},
	capture: {
		type: [Array, String],
		default: () => ['album', 'camera'] as Array<string>
	},
	compressed: {
		type: Boolean,
		default: true
	},
	camera: {
		type: String,
		default: 'back'
	},
	maxDuration: {
		type: Number,
		default: 60
	},
	uploadIcon: {
		type: String,
		default: 'camera-fill'
	},
	uploadIconColor: {
		type: String,
		default: '#D3D4D6'
	},
	useBeforeRead: {
		type: Boolean,
		default: false
	},
	afterRead: {
		type: Function,
		default: null
	},
	beforeRead: {
		type: Function,
		default: null
	},
	previewFullImage: {
		type: Boolean,
		default: true
	},
	maxCount: {
		type: [String, Number],
		default: 52
	},
	disabled: {
		type: Boolean,
		default: false
	},
	imageMode: {
		type: String,
		default: 'aspectFill'
	},
	name: {
		type: String,
		default: ''
	},
	sizeType: {
		type: Array as PropType<Array<string>>,
		default: () => ['original', 'compressed'] as Array<string>
	},
	multiple: {
		type: Boolean,
		default: false
	},
	deletable: {
		type: Boolean,
		default: true
	},
	maxSize: {
		type: [String, Number],
		default: Number.MAX_VALUE
	},
	fileList: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	uploadText: {
		type: String,
		default: ''
	},
	width: {
		type: [String, Number],
		default: 80
	},
	height: {
		type: [String, Number],
		default: 80
	},
	previewImage: {
		type: Boolean,
		default: true
	},
	autoDelete: {
		type: Boolean,
		default: false
	},
	autoUpload: {
		type: Boolean,
		default: false
	},
	autoUploadApi: {
		type: String,
		default: ''
	},
	autoUploadDriver: {
		type: String,
		default: ''
	},
	autoUploadAuthUrl: {
		type: String,
		default: ''
	},
	autoUploadHeader: {
		type: Object as PropType<UTSJSONObject>,
		default: () => ({}) as UTSJSONObject
	},
	getVideoThumb: {
		type: Boolean,
		default: false
	},
	customAfterAutoUpload: {
		type: Boolean,
		default: false
	},
	videoPreviewObjectFit: {
		type: String,
		default: 'cover'
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ['error', 'beforeRead', 'oversize', 'afterRead', 'delete', 'clickPreview', 'update:fileList', 'afterAutoUpload'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const lists = ref<Array<UPUploadListItem>>([])
const isInCount = ref<boolean>(true)
const popupShow = ref<boolean>(false)
const currentItemIndex = ref<number>(-1)

const customUploadStyle = computed((): UTSJSONObject => {
	return addStyle(props.customStyle) as UTSJSONObject
})

const itemDimensionStyle = computed((): UTSJSONObject => {
	return {
		width: addUnit(props.width),
		height: addUnit(props.height)
	} as UTSJSONObject
})

function getProgressStyle(item: any): UTSJSONObject {
	const it = item as UTSJSONObject
	const prog = (it['progress'] as number | null) ?? 0
	return {
		width: `${prog}%`
	} as UTSJSONObject
}

function formatFileList() {
	let fileList = props.fileList as UTSJSONObject[]
	let maxCount = parseInt(props.maxCount.toString())
	let resLists = [] as UPUploadListItem[]
	fileList.forEach((item: UTSJSONObject) => {
		const name = item['name'] != null
			? item['name'] as string
			: item['url'] != null ? item['url'] as string : item['thumb'] as string
		let tmp = UTSJSONObject.assign(UTSJSONObject.assign({}, item), {
			isImage: item['name'] != null ? testImage(item['name'] as string) : (props.accept == 'image' ?? testImage(name)),
			isVideo: item['name'] != null ? testVideo(item['name'] as string) : (props.accept == 'video' ?? testVideo(name)),
			deletable: typeof item.deletable == 'boolean' ? item.deletable : props.deletable,
		})
		let tmpObj = (UTSAndroid.consoleDebugError(JSON.parse<UPUploadListItem>(JSON.stringify(tmp)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:357"))
		if (tmpObj != null) {
			resLists.push(tmpObj!)
		}
	})
	lists.value = resLists
	isInCount.value = resLists.length < maxCount
}

watch((): Array<UTSJSONObject> => props.fileList, () => {
	formatFileList()
}, { immediate: true, deep: true })

watch((): boolean => props.deletable, () => {
	formatFileList()
})

watch((): any => props.maxCount, () => {
	formatFileList()
})

watch((): string => props.accept, () => {
	formatFileList()
})

watch(popupShow, (newVal: boolean) => {
	if (!newVal) {
		currentItemIndex.value = -1
	}
})

function convertFileToUTSJSON(file: Array<UPUploadFileChoosed | null>): Array<UTSJSONObject> {
	const result: Array<UTSJSONObject> = []
	file.forEach((item: UPUploadFileChoosed | null) => {
		if (item != null) {
			const obj = UTSAndroid.consoleDebugError(JSON.parseObject(JSON.stringify(item)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:392")
			if (obj != null) {
				result.push(obj)
			}
		}
	})
	return result
}

function getDetail(index: number | null = null): UTSJSONObject {
	return {
		name: props.name,
		index: index == null ? props.fileList.length : index,
	} as UTSJSONObject
}

function getOtherItemText(item: UPUploadListItem): string {
	const isVid = item.isVideo || (item.type != null && item.type == 'video')
	if (isVid) {
		if (item.name != null && (item.name as string) != '') return item.name as string
		return $t("up.common.video")
	}
	if (item.name != null && (item.name as string) != '') return item.name as string
	return $t("up.common.file")
}

function onAfterRead(file: Array<UPUploadFileChoosed | null>) {
	let maxSize = parseFloat(props.maxSize.toString())
	let afterRead = props.afterRead
	const even = (item: UPUploadFileChoosed | null): boolean => {
		let tmp: number = (item != null && item.size != null) ? item.size : 0
		return tmp > maxSize
	}
	const oversize = file.some(even)
	if (oversize) {
		toast($t("up.upload.sizeExceed", {} as UTSJSONObject))
		emit('oversize', UTSJSONObject.assign({
			file: convertFileToUTSJSON(file)
		}, getDetail(null)))
		return
	}
	if (typeof afterRead == 'function') {
		;(afterRead as UPUploadReadCallback)(file, getDetail(null))
	}
	emit('afterRead', UTSJSONObject.assign({
		file: convertFileToUTSJSON(file)
	}, getDetail(null)))
}

function onBeforeRead(file: Array<UPUploadFileChoosed | null>) {
	let beforeRead = props.beforeRead
	let useBeforeRead = props.useBeforeRead
	let res: any = file
	if (beforeRead != null && testFunc(beforeRead)) {
		res = (beforeRead as UPUploadReadCallback)(file, getDetail(null))
	}
	if (useBeforeRead) {
		emit(
			'beforeRead',
			UTSJSONObject.assign(UTSJSONObject.assign({
				file: convertFileToUTSJSON(file)
			}, getDetail(null)), {
				callback: (ok: boolean) => {
					if (ok) {
						onAfterRead(file)
					}
				},
			})
		)
		return
	}
	if (typeof res == 'boolean' && !(res as boolean)) {
		return
	}
	const readFile = (res != null ? res : file) as Array<UPUploadFileChoosed | null>
	onAfterRead(readFile)
}

function chooseFileAction(params: UTSJSONObject): boolean {
	let maxCount = parseInt(props.maxCount.toString())
	let disabled = props.disabled
	if (disabled) return false
	const chooseParams = UTSJSONObject.assign({
		accept: props.accept,
		extension: props.extension,
		multiple: props.multiple,
		capture: props.capture,
		compressed: props.compressed,
		maxDuration: props.maxDuration,
		sizeType: props.sizeType,
		camera: props.camera,
	}, {
		maxCount: maxCount - lists.value.length,
		...params
	})
	let chooseParamsObj = UTSAndroid.consoleDebugError(JSON.parseObject<UPUploadChooseFileOptions>(JSON.stringify(chooseParams)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:487")
	if (chooseParamsObj != null) {
		chooseFile(chooseParamsObj).then((res: Array<UPUploadFileChoosed|null>) => {
			onBeforeRead(res)
		})
	}
	return true
}

function onChooseTap(): void {
	chooseFileAction({} as UTSJSONObject)
}

function videoErrorCallback() {}

function deleteItem(index: number) {
	const currentFileList = [...props.fileList]
	if (props.autoDelete) {
		currentFileList.splice(index, 1)
		emit('update:fileList', currentFileList)
	} else {
		emit(
			'delete',
			UTSJSONObject.assign(UTSJSONObject.assign({}, getDetail(index)), {
				file: currentFileList[index],
			})
		)
	}
}

function onPreviewImage(previewItem: UPUploadListItem, index: number) {
	if (!previewItem.isImage || !props.previewFullImage) return
	let current = 0
	const urls = [] as Array<string>
	let imageIndex = 0
	for (let i = 0; i < lists.value.length; i++) {
		const item = lists.value[i]
		if (item.isImage || (item.type != null && item.type == 'image')) {
			urls.push(item.url != null ? item.url as string : item.thumb as string)
			if (i == index) {
				current = imageIndex
			}
			imageIndex += 1
		}
	}
	if (urls.length < 1) {
		return
	}
	uni.previewImage({
		urls: urls,
		current: current,
		fail() {
			toast($t("up.upload.previewImageFail", {} as UTSJSONObject))
		},
	})
}

function onPreviewVideo(previewItem: UPUploadListItem, index: number) {
	if (!props.previewFullImage) return
	popupShow.value = true
	currentItemIndex.value = index
}

function onClickPreview(item: UPUploadListItem, index: number) {
	if (props.previewFullImage) {
		switch (item.type) {
			case 'image':
				onPreviewImage(item, index)
				break
			case 'video':
				onPreviewVideo(item, index)
				break
			default:
				break
		}
	}
	emit(
		'clickPreview',
		UTSJSONObject.assign(UTSJSONObject.assign({}, item as any as UTSJSONObject), getDetail(index))
	)
}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_gap = resolveEasyComponent("up-gap",_easycom_up_gap)
const _component_video = resolveComponent("video")
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)

  return _cE("view", _uM({
    class: "up-upload",
    style: _nS(unref(customUploadStyle))
  }), [
    _cE("view", _uM({ class: "up-upload__wrap" }), [
      isTrue(_ctx.previewImage)
        ? _cE(Fragment, _uM({ key: 0 }), RenderHelpers.renderList(lists.value, (item, index, __index, _cached): any => {
            return _cE("view", _uM({
              class: "up-upload__wrap__preview",
              key: index
            }), [
              isTrue(item.isImage || (item.type != null && item.type == 'image'))
                ? _cE("image", _uM({
                    key: 0,
                    src: item.thumb != null ? item.thumb : item.url,
                    mode: _ctx.imageMode,
                    class: "up-upload__wrap__preview__image",
                    onClick: () => {onClickPreview(item, index)},
                    style: _nS(unref(itemDimensionStyle))
                  }), null, 12 /* STYLE, PROPS */, ["src", "mode", "onClick"])
                : isTrue((item.isVideo || (item.type != null && item.type == 'video')) && _ctx.getVideoThumb)
                  ? _cE("view", _uM({
                      key: 1,
                      class: "up-upload__wrap__preview__video",
                      style: _nS(unref(itemDimensionStyle))
                    }), [
                      isTrue(item.thumb)
                        ? _cE("image", _uM({
                            key: 0,
                            src: item.thumb,
                            mode: _ctx.imageMode,
                            class: "up-upload__wrap__preview__image",
                            onClick: () => {onClickPreview(item, index)},
                            style: _nS(unref(itemDimensionStyle))
                          }), null, 12 /* STYLE, PROPS */, ["src", "mode", "onClick"])
                        : _cV(_component_up_icon, _uM({
                            key: 1,
                            color: "#80CBF9",
                            size: "26",
                            name: item.isVideo || (item.type != null && item.type == 'video') ? 'movie' : 'file-text'
                          }), null, 8 /* PROPS */, ["name"]),
                      item.status == 'success'
                        ? _cE("view", _uM({
                            key: 2,
                            class: "up-upload__wrap__play",
                            onClick: () => {onClickPreview(item, index)}
                          }), [
                            renderSlot(_ctx.$slots, "playIcon"),
                            _ctx.$slots['playIcon'] == null
                              ? _cV(_component_up_icon, _uM({
                                  key: 0,
                                  class: "up-upload__wrap__play__icon",
                                  name: "play-right",
                                  size: "22px"
                                }))
                              : _cC("v-if", true)
                          ], 8 /* PROPS */, ["onClick"])
                        : _cC("v-if", true)
                    ], 4 /* STYLE */)
                  : _cE("view", _uM({
                      key: 2,
                      class: "up-upload__wrap__preview__other",
                      onClick: () => {onClickPreview(item, index)},
                      style: _nS(unref(itemDimensionStyle))
                    }), [
                      _cV(_component_up_icon, _uM({
                        color: "#80CBF9",
                        size: "26",
                        name: item.isVideo || (item.type != null && item.type == 'video') ? 'movie' : 'folder'
                      }), null, 8 /* PROPS */, ["name"]),
                      _cE("text", _uM({ class: "up-upload__wrap__preview__other__text" }), _tD(getOtherItemText(item)), 1 /* TEXT */)
                    ], 12 /* STYLE, PROPS */, ["onClick"]),
              isTrue(item.status == 'uploading' || item.status == 'failed')
                ? _cE("view", _uM({
                    key: 3,
                    class: "up-upload__status"
                  }), [
                    _cE("view", _uM({ class: "up-upload__status__icon" }), [
                      item.status == 'failed'
                        ? _cV(_component_up_icon, _uM({
                            key: 0,
                            name: "close-circle",
                            color: "#ffffff",
                            size: "25"
                          }))
                        : _cV(_component_up_loading_icon, _uM({
                            key: 1,
                            size: "22",
                            mode: "circle"
                          }))
                    ]),
                    isTrue(item.message != null && item.message != '')
                      ? _cE("text", _uM({
                          key: 0,
                          class: "up-upload__status__message"
                        }), _tD(item.message), 1 /* TEXT */)
                      : _cC("v-if", true),
                    _cV(_component_up_gap, _uM({
                      class: "up-upload__progress",
                      height: "3px",
                      style: _nS(getProgressStyle(item))
                    }), null, 8 /* PROPS */, ["style"])
                  ])
                : _cC("v-if", true),
              isTrue(item.status != 'uploading' && (_ctx.deletable || item.deletable))
                ? _cE("view", _uM({
                    key: 4,
                    class: "up-upload__deletable",
                    onClick: withModifiers(() => {deleteItem(index)}, ["stop"])
                  }), [
                    _cE("view", _uM({ class: "up-upload__deletable__icon" }), [
                      _cV(_component_up_icon, _uM({
                        name: "close",
                        color: "#ffffff",
                        size: "10"
                      }))
                    ])
                  ], 8 /* PROPS */, ["onClick"])
                : _cC("v-if", true),
              renderSlot(_ctx.$slots, "success", {}, (): any[] => [
                item.status == 'success'
                  ? _cE("view", _uM({
                      key: 0,
                      class: "up-upload__success"
                    }), [
                      _cE("view", _uM({ class: "up-upload__success__icon" }), [
                        _cV(_component_up_icon, _uM({
                          name: "checkmark",
                          color: "#ffffff",
                          size: "12"
                        }))
                      ])
                    ])
                  : _cC("v-if", true)
              ])
            ])
          }), 128 /* KEYED_FRAGMENT */)
        : _cC("v-if", true),
      isTrue(isInCount.value)
        ? _cE(Fragment, _uM({ key: 1 }), [
            _ctx.$slots['trigger'] != null
              ? _cE("view", _uM({
                  key: 0,
                  onClick: onChooseTap
                }), [
                  renderSlot(_ctx.$slots, "trigger")
                ])
              : isTrue(_ctx.$slots['trigger'] == null && (_ctx.$slots['default'] != null || _ctx.$slots['$default'] != null))
                ? _cE("view", _uM({
                    key: 1,
                    onClick: onChooseTap
                  }), [
                    renderSlot(_ctx.$slots, "default")
                  ])
                : _cE("view", _uM({
                    key: 2,
                    class: _nC(["up-upload__button", [_ctx.disabled ? 'up-upload__button--disabled' : '']]),
                    "hover-class": !_ctx.disabled ? 'up-upload__button--hover' : '',
                    "hover-stay-time": "150",
                    onClick: onChooseTap,
                    style: _nS(unref(itemDimensionStyle))
                  }), [
                    _cV(_component_up_icon, _uM({
                      name: _ctx.uploadIcon,
                      size: "26",
                      color: _ctx.uploadIconColor
                    }), null, 8 /* PROPS */, ["name", "color"]),
                    _ctx.uploadText != ''
                      ? _cE("text", _uM({
                          key: 0,
                          class: "up-upload__button__text"
                        }), _tD(_ctx.uploadText), 1 /* TEXT */)
                      : _cC("v-if", true)
                  ], 14 /* CLASS, STYLE, PROPS */, ["hover-class"])
          ], 64 /* STABLE_FRAGMENT */)
        : _cC("v-if", true)
    ]),
    _cV(_component_up_popup, _uM({
      mode: "center",
      show: popupShow.value,
      "onUpdate:show": $event => {(popupShow).value = $event}
    }), _uM({
      default: withSlotCtx((): any[] => [
        isTrue(popupShow.value)
          ? _cV(_component_video, _uM({
              key: 0,
              id: "myVideo",
              src: currentItemIndex.value >= 0 ? lists.value[currentItemIndex.value].url : '',
              onError: videoErrorCallback,
              "show-center-play-btn": "",
              "object-fit": _ctx.videoPreviewObjectFit,
              "show-fullscreen-btn": "true",
              "enable-play-gesture": "",
              controls: "",
              autoplay: true,
              "auto-pause-if-open-native": "",
              "initial-time": 0.1
            }), null, 8 /* PROPS */, ["src", "object-fit"])
          : _cC("v-if", true)
      ]),
      _: 1 /* STABLE */
    }), 8 /* PROPS */, ["show", "onUpdate:show"])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpUploadComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpUploadUpUploadStyles = [_uM([["up-upload", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-upload__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"]]))], ["up-upload__wrap__preview", _pS(_uM([["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2], ["marginTop", 0], ["marginRight", 8], ["marginBottom", 8], ["marginLeft", 0], ["position", "relative"], ["overflow", "hidden"], ["display", "flex"], ["flexDirection", "row"]]))], ["up-upload__wrap__preview__image", _pS(_uM([["width", 80], ["height", 80]]))], ["up-upload__wrap__preview__video", _pS(_uM([["width", 80], ["height", 80], ["backgroundColor", "#f2f2f2"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "column"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-upload__wrap__preview__other", _pS(_uM([["width", 80], ["height", 80], ["backgroundColor", "#f2f2f2"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "column"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-upload__wrap__preview__video__text", _pS(_uM([["fontSize", 11], ["color", "#909193"], ["marginTop", 2]]))], ["up-upload__wrap__preview__other__text", _pS(_uM([["fontSize", 11], ["color", "#909193"], ["marginTop", 2]]))], ["up-upload__wrap__play", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["bottom", 0], ["right", 0], ["display", "flex"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-upload__wrap__play__icon", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["opacity", 0.8]]))], ["up-upload__deletable", _pS(_uM([["position", "absolute"], ["top", 0], ["right", 0], ["backgroundColor", "#373737"], ["height", 14], ["width", 14], ["display", "flex"], ["flexDirection", "row"], ["borderBottomLeftRadius", 100], ["alignItems", "center"], ["justifyContent", "center"], ["zIndex", 3]]))], ["up-upload__deletable__icon", _pS(_uM([["position", "absolute"], ["transform", "scale(0.7)"], ["top", 0], ["right", 0]]))], ["up-upload__success", _pS(_uM([["position", "absolute"], ["bottom", 0], ["right", 0], ["display", "flex"], ["flexDirection", "row"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "rgba(0,0,0,0)"], ["borderLeftColor", "rgba(0,0,0,0)"], ["borderBottomColor", "#5ac725"], ["borderRightColor", "#5ac725"], ["borderTopWidth", 9], ["borderRightWidth", 9], ["borderBottomWidth", 9], ["borderLeftWidth", 9], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-upload__success__icon", _pS(_uM([["position", "absolute"], ["transform", "scale(0.7)"], ["bottom", -10], ["right", -10]]))], ["up-upload__progress", _pS(_uM([["!backgroundColor", "var(--theme-color, #0957de)"], ["position", "absolute"], ["bottom", 0], ["left", 0]]))], ["up-upload__status", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["left", 0], ["right", 0], ["backgroundColor", "rgba(0,0,0,0.5)"], ["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-upload__status__icon", _pS(_uM([["position", "relative"], ["zIndex", 1]]))], ["up-upload__status__message", _pS(_uM([["fontSize", 12], ["color", "#FFFFFF"], ["marginTop", 5]]))], ["up-upload__button", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["width", 80], ["height", 80], ["backgroundColor", "#f4f5f7"], ["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2], ["marginTop", 0], ["marginRight", 8], ["marginBottom", 8], ["marginLeft", 0], ["boxSizing", "border-box"]]))], ["up-upload__button__text", _pS(_uM([["fontSize", 11], ["color", "#909193"], ["marginTop", 2]]))], ["up-upload__button--hover", _pS(_uM([["backgroundColor", "#e6e7e9"]]))], ["up-upload__button--disabled", _pS(_uM([["opacity", 0.5]]))]])]
