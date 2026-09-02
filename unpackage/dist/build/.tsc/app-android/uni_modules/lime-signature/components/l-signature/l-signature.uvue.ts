import { Signature } from './signature.uts'





	import { LimeSignatureToTempFilePathOptions, LimeSignatureToFileSuccess, LimeSignatureOptions } from '../../index.uts'
	// type SignatureToFileSuccessCallback = (res : UTSJSONObject) => void
	// type SignatureToFileFailCallback = (res : TakeSnapshotFail) => void
	// type SignatureToFileCompleteCallback = (res : any) => void

	
	
const __sfc__ = defineComponent({
  __name: 'l-signature',
  props: {
		styles: {
			type: String,
			default: ''
		},
		penColor: {
			type: String,
			default: 'black'
		},
		penSize: {
			type: Number,
			default: 2
		},
		backgroundColor: {
			type: String,
			default: ''
		},
		openSmooth: {
			type: Boolean,
			default: false
		},
		minLineWidth: {
			type: Number,
			default: 2
		},
		maxLineWidth: {
			type: Number,
			default: 6
		},
		minSpeed: {
			type: Number,
			default: 1.5
		},
		maxWidthDiffRate: {
			type: Number,
			default: 20
		},
		maxHistoryLength: {
			type: Number,
			default: 20
		},
		disableScroll: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		landscape: {
			type: Boolean,
			default: false
		},
	},
  emits: ['change'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	// @ts-nocheck
	/**
	 * Signature 电子签名板组件
	 * @description 用于实现手写签名功能，支持多种画笔设置和手势控制
	 * <br>插件类型：LSignatureComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-signature
	 * 
	 * @property {string} styles 画布容器样式
	 * @property {string} penColor 画笔颜色
	 * @property {number} penSize 画笔基础粗细
	 * @property {string} backgroundColor 画布背景色
	 * @property {boolean} openSmooth 启用笔迹平滑
	 * @property {number} minLineWidth 最小笔触宽度
	 * @property {number} maxLineWidth 最大笔触宽度
	 * @property {number} minSpeed 最小绘制速度（像素/秒）
	 * @property {number} maxWidthDiffRate 宽度变化率限制
	 * @property {number} maxHistoryLength 撤销历史记录数
	 * @property {boolean} disableScroll 禁止滚动穿透
	 * @property {boolean} disabled 禁用签名板
	 * @property {boolean} landscape 横屏模式
	 * @event {Function} change 绘制内容变化时触发
	 */
	

	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	const props = __props

	const drawableStyle = computed<string>(() : string => {
		let style : string = ''

		if (props.backgroundColor != '') {
			style += `background-color: ${props.backgroundColor};`
		}
		if (props.styles != '') {
			style += props.styles
		}
		return style
	})


	const signatureRef = ref<UniCanvasElement | null>(null)




	const signatureCanvasRef = ref<UniElement | null>(null)
	let signatureLandscapeRef = ref<UniElement | null>(null)
	let landscapeStyle = ref<Map<string, string>>(new Map())
	let landscapeImageStyle = ref<Map<string, string>>(new Map())

	const getNativeElement = () : UniCanvasElement | null => {
		if (signatureRef.value != null) {
			return signatureRef.value as UniCanvasElement;
		}
		try {
			const el = uni.getElementById('l-signature-native') as UniCanvasElement | null
			if (el != null) {
				return el;
			}
		} catch (_e) {}
		return null;
	}















	let isCanvasEmpty = true
	let signature : Signature | null = null
	let url = ref('')
	// 检查并触发事件的方法
	const checkAndEmitEmptyStatus = () => {





		// @ts-ignore
		const isEmpty = signature?.isEmpty ?? true

		if (isEmpty != isCanvasEmpty) {
			isCanvasEmpty = isEmpty
			emit('change', isCanvasEmpty)
		}
	}
	








































	const onAppTouchStart = (event : UniTouchEvent) => {
		try {
			signature?.onTouchStart(event)
		} catch (e : any) {
			console.error('--- [l-signature] onAppTouchStart ERROR ---', e)
		}
	}
	const onAppTouchMove = (event : UniTouchEvent) => {
		try {
			signature?.onTouchMove(event)
		} catch (e : any) {
			console.error('--- [l-signature] onAppTouchMove ERROR ---', e)
		}
	}
	const onAppTouchEnd = (event : UniTouchEvent) => {
		try {
			signature?.onTouchEnd(event)
			setTimeout(() => {
				checkAndEmitEmptyStatus()
			}, 0)
		} catch (e : any) {
			console.error('--- [l-signature] onAppTouchEnd ERROR ---', e)
		}
	}


	const clear = () => {
		signature?.clear()
		checkAndEmitEmptyStatus()  // 状态检查
	}
	const redo = () => {
		signature?.redo()
		checkAndEmitEmptyStatus()  // 状态检查
	}
	const undo = () => {
		signature?.undo()
		checkAndEmitEmptyStatus()  // 状态检查
	}
	const canvasToTempFilePath = (options : LimeSignatureToTempFilePathOptions) => {
		const success = options.success // as SignatureToFileSuccessCallback | null
		const fail = options.fail // as SignatureToFileFailCallback | null
		const complete = options.complete// as SignatureToFileCompleteCallback | null
		const format = options.format ?? 'png'

		const targetEl = getNativeElement()
		targetEl?.takeSnapshot({
			format,
			success: (res) => {
				if (props.landscape) {
					url.value = res.tempFilePath;
					signatureLandscapeRef.value?.getBoundingClientRectAsync()?.then(rect=>{
						setTimeout(() => {
							signatureLandscapeRef.value?.takeSnapshot({
								format,
								success: (res2) => {
									success?.({
										tempFilePath: res2.tempFilePath,
										isEmpty: signature?.isEmpty ?? false
									} as LimeSignatureToFileSuccess)
								}
							})
						}, 300)
					})
				} else {
					success?.({
						tempFilePath: res.tempFilePath,
						isEmpty: signature?.isEmpty ?? false
					} as LimeSignatureToFileSuccess)
				}
			},
			fail: (res) => {
				fail?.(res)
			},
			complete: (res) => {
				complete?.(res)
			}
		} as TakeSnapshotOptions)
















































































































	}

	__expose({
		clear,
		redo,
		undo,
		canvasToTempFilePath,
	})
































































































	onMounted(() => {
		nextTick(() => {
			setTimeout(()=>{
				const targetEl = getNativeElement()
				const rect = targetEl?.getBoundingClientRect()
				const width = rect?.width ?? 0
				const height = rect?.height ?? 0

				landscapeStyle.value.set('width', `${height}px`)
				landscapeStyle.value.set('height', `${width}px`)
				landscapeImageStyle.value.set('width', `${width}px`)
				landscapeImageStyle.value.set('height', `${height}px`)
				landscapeImageStyle.value.set('transform', `rotate(-90deg) translateX(-${width}px)`)

				if (targetEl != null) {
					signature = new Signature(targetEl)
				}




				watchEffect(() => {
					const options : LimeSignatureOptions = {
						penColor: props.penColor,
						openSmooth: props.openSmooth,
						disableScroll: props.disableScroll,
						disabled: props.disabled,
						penSize: props.penSize,
						minLineWidth: props.minLineWidth,
						maxLineWidth: props.maxLineWidth,
						minSpeed: props.minSpeed,
						maxWidthDiffRate: props.maxWidthDiffRate,
						maxHistoryLength: props.maxHistoryLength
					}

					signature?.setOption(options)
					signature?.onChange((_isEmpty: boolean)=>{
						checkAndEmitEmptyStatus()
					})

				})

			}, 300)
		})
	})

	onUnmounted(() => {








	})

return (): any | null => {

  return _cE("view", _uM({
    class: "l-signature",
    style: _nS([unref(drawableStyle), _uM({"touch-action":"none"})]),
    onTouchstart: withModifiers(onAppTouchStart, ["stop","prevent"]),
    onTouchmove: withModifiers(onAppTouchMove, ["stop","prevent"]),
    onTouchend: withModifiers(onAppTouchEnd, ["stop","prevent"])
  }), [
    _cE("canvas", _uM({
      id: "l-signature-native",
      ref_key: "signatureRef",
      ref: signatureRef,
      "disable-scroll": "true",
      style: _nS(_uM({"width":"100%","height":"100%","touch-action":"none"})),
      onTouchstart: withModifiers(onAppTouchStart, ["stop","prevent"]),
      onTouchmove: withModifiers(onAppTouchMove, ["stop","prevent"]),
      onTouchend: withModifiers(onAppTouchEnd, ["stop","prevent"])
    }), null, 36 /* STYLE, NEED_HYDRATION */),
    isTrue(_ctx.landscape)
      ? _cE("view", _uM({
          key: 0,
          class: "l-signature-landscape",
          ref_key: "signatureLandscapeRef",
          ref: signatureLandscapeRef,
          style: _nS([unref(landscapeStyle)])
        }), [
          _cE("image", _uM({
            class: "l-signature-image",
            style: _nS([unref(landscapeImageStyle)]),
            src: unref(url)
          }), null, 12 /* STYLE, PROPS */, ["src"])
        ], 4 /* STYLE */)
      : _cC("v-if", true)
  ], 36 /* STYLE, NEED_HYDRATION */)
}
}

})
export default __sfc__
export type LSignatureComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesLimeSignatureComponentsLSignatureLSignatureStyles = [_uM([["l-signature", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["width", "100%"], ["height", "100%"]]))], ["l-signature__canvas", _pS(_uM([["width", "100%"], ["height", "100%"]]))], ["l-signature-landscape", _pS(_uM([["position", "absolute"], ["pointerEvents", "none"], ["overflow", "visible"], ["left", "99.9%"]]))], ["l-signature-image", _pS(_uM([["transformOrigin", "0% 0%"]]))]])]
