
import { createQrCells, getQrRenderCountWithQuietZone } from './qrcode.uts'

function makeId(prefix: string): string {
    return prefix + Date.now().toString()
}

function isEmpty(value: any | null): boolean {
    if (value == null) {
        return true
    }
    const text = value.toString()
    return text.length == 0 || text == 'undefined' || text == 'null' || text == '{}' || text == '[]'
}

function getPixelRatio(): number {
    const info = uni.getSystemInfoSync()
    if (info.pixelRatio > 0) {
        return info.pixelRatio
    }
    return 1
}

const __sfc__ = defineComponent({
    name: 'up-qrcode',
    props: {
        cid: {
            type: String,
            default(): string {
                return makeId('up-qrcode-')
            }
        },
        size: {
            type: [Number, String],
            default: 200
        },
        unit: {
            type: String,
            default: 'px'
        },
        show: {
            type: Boolean,
            default: true
        },
        val: {
            type: String,
            default: ''
        },
        background: {
            type: String,
            default: '#ffffff'
        },
        foreground: {
            type: String,
            default: '#000000'
        },
        pdground: {
            type: String,
            default: '#000000'
        },
        icon: {
            type: String,
            default: ''
        },
        iconSize: {
            type: [Number, String],
            default: 40
        },
        lv: {
            type: [Number, String],
            default: 3
        },
        quietZone: {
            type: [Number, String],
            default: 0
        },
        onval: {
            type: Boolean,
            default: true
        },
        loadMake: {
            type: Boolean,
            default: true
        },
        usingComponents: {
            type: Boolean,
            default: true
        },
        showLoading: {
            type: Boolean,
            default: true
        },
        loadingText: {
            type: String,
            default: '生成中'
        },
        allowPreview: {
            type: Boolean,
            default: false
        },
        useRootHeightAndWidth: {
            type: Boolean,
            default: false
        }
    },
    emits: ['result', 'longpressCallback', 'preview', 'error'],
    data() {
        return {
            rootId: makeId('rootId-'),
            cells: [] as Array<UTSJSONObject>,
            loading: false,
            result: '',
            error: '',
            canvasId: makeId('up-qrcode-canvas-'),
            canvasContext: null as CanvasContext | null,
            ctx: null as CanvasRenderingContext2D | null
        }
    },
    computed: {
        sizeLocal(): number {
            return parseFloat(this.size.toString())
        },
        rootStyle(): UTSJSONObject {
            return {
                width: this.useRootHeightAndWidth ? '100%' : this.sizeLocal.toString() + this.unit,
                height: this.useRootHeightAndWidth ? '100%' : this.sizeLocal.toString() + this.unit
            } as UTSJSONObject
        },
        matrixStyle(): UTSJSONObject {
            return {
                width: this.sizeLocal.toString() + this.unit,
                height: this.sizeLocal.toString() + this.unit,
                backgroundColor: this.background
            } as UTSJSONObject
        },
        iconStyle(): UTSJSONObject {
            const iSize = parseFloat(this.iconSize.toString())
            const size = iSize.toString() + this.unit
            return {
                width: size,
                height: size,
                left: ((this.sizeLocal - iSize) / 2).toString() + this.unit,
                top: ((this.sizeLocal - iSize) / 2).toString() + this.unit
            } as UTSJSONObject
        },
        cellSize(): number {
            return this.sizeLocal / getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()))
        },
        canvasStyle(): UTSJSONObject {
            return {
                width: this.sizeLocal.toString() + this.unit,
                height: this.sizeLocal.toString() + this.unit
            } as UTSJSONObject
        }
    },
    watch: {
        val() {
            if (this.onval) {
                this.makeCode()
            }
        },
        size(n: any) { this.makeCode() },
        background(n: any) { this.makeCode() },
        foreground(n: any) { this.makeCode() },
        pdground(n: any) { this.makeCode() }
    },
    mounted(): void {
        if (this.loadMake) {
            this.makeCode()
        }
    },
    methods: {
        makeCode(): void {
            if (isEmpty(this.val)) {
                this.error = '二维码内容不能为空'
                this.cells = [] as Array<UTSJSONObject>
                this.$emit('error', { message: this.error } as UTSJSONObject)
                return
            }
            try {
                this.loading = true
                this.error = ''
                this.cells = createQrCells(this.val, this.foreground, this.background, this.pdground, parseInt(this.lv.toString()), parseInt(this.quietZone.toString()))
                this.result = this.val
                this.loading = false
                this.$nextTick(() => {
                    this.renderCanvas()
                })
                this.$emit('result', this.result)
            } catch (error) {
                this.loading = false
                const err = error as UTSJSONObject
                const message = err['message']
                this.error = message == null ? error.toString() : message.toString()
                this.cells = [] as Array<UTSJSONObject>
                this.$emit('error', { message: this.error } as UTSJSONObject)
            }
        },
        _makeCode(): void {
            this.makeCode()
        },
        _clearCode(): void {
            this.cells = [] as Array<UTSJSONObject>
            this.result = ''
        },
        preview(e: UniPointerEvent): void {
            this.$emit('preview', {
                url: this.result
            } as UTSJSONObject, e)
        },
        longpress(): void {
            this.toTempFilePath({
                success: (res: UTSJSONObject) => {
                    this.$emit('longpressCallback', res['tempFilePath'])
                },
                fail: (_: UTSJSONObject) => {
                    this.$emit('longpressCallback', this.result)
                }
            } as UTSJSONObject)
        },
        toTempFilePath(options: UTSJSONObject): void {
            if (this.error.length > 0 || this.cells.length == 0) {
                this.emitTempFileFail(options, 'up-qrcode content is not ready')
                return
            }
            this.exportImage(options)
        },
        emitTempFileSuccess(options: UTSJSONObject, path: string): void {
            const success = options['success']
            if (success != null) {
                ;(success as (res: UTSJSONObject) => void)({
                    tempFilePath: path
                } as UTSJSONObject)
            }
            const complete = options['complete']
            if (complete != null) {
                ;(complete as (res: UTSJSONObject) => void)({
                    tempFilePath: path
                } as UTSJSONObject)
            }
        },
        emitTempFileFail(options: UTSJSONObject, message: string): void {
            const payload = { __$originalPosition: new UTSSourceMapPosition("payload", "uni_modules/uview-ultra/components/up-qrcode/up-qrcode.uvue", 269, 19), 
                errMsg: message
            } as UTSJSONObject
            const fail = options['fail']
            if (fail != null) {
                ;(fail as (error: UTSJSONObject) => void)(payload)
            }
            const complete = options['complete']
            if (complete != null) {
                ;(complete as (error: UTSJSONObject) => void)(payload)
            }
        },
        exportImage(options: UTSJSONObject): void {
            this.renderCanvas().then(() => {
                const canvas = this.canvasContext
                if (canvas == null) {
                    this.emitTempFileFail(options, 'Canvas is not ready')
                    return
                }
                const path = canvas.toDataURL('image/png', 1)
                this.emitTempFileSuccess(options, path)
            }).catch((error: any | null) => {
                const message = error == null ? 'Canvas init failed' : error.toString()
                this.emitTempFileFail(options, message)
            })
        },
        renderCanvas(): Promise<void> {
            if (this.error.length > 0 || this.cells.length == 0) {
                return Promise.resolve()
            }
            return this.initCanvas().then(() => {
                this.drawQrToCanvas()
            })
        },
        initCanvas(): Promise<void> {
            return new Promise((resolve, reject) => {
                if (this.canvasContext != null && this.ctx != null) {
                    resolve()
                    return
                }
                uni.createCanvasContextAsync({
                    id: this.canvasId.toString() as string.IDString,
                    component: this,
                    success: (context: CanvasContext) => {
                        this.canvasContext = context
                        const ctx = context.getContext('2d')
                        if (ctx == null) {
                            reject(new Error('Canvas context is not ready'))
                            return
                        }
                        const canvas = ctx.canvas
                        const pixelRatio = getPixelRatio()
                        canvas.width = this.sizeLocal * pixelRatio
                        canvas.height = this.sizeLocal * pixelRatio
                        ctx.scale(pixelRatio, pixelRatio)
                        this.ctx = ctx
                        resolve()
                    },
                    fail: (error: UniError) => {
                        reject(error)
                    }
                })
            })
        },
        drawQrToCanvas(): void {
            const context = this.ctx
            if (context == null) {
                return
            }
            const drawSize = this.sizeLocal
            context.clearRect(0, 0, drawSize, drawSize)
            context.fillStyle = this.background
            context.fillRect(0, 0, drawSize, drawSize)
            const count = getQrRenderCountWithQuietZone(this.val, parseFloat(this.lv.toString()), parseFloat(this.quietZone.toString()))
            for (let i = 0; i < this.cells.length; i++) {
                const cell = this.cells[i]
                if (!cell.getBoolean('dark', false)) {
                    continue
                }
                const color = cell.getString('color', this.foreground)
                const row = Math.floor(i / count)
                const col = i % count
                const left = Math.floor(col * drawSize / count)
                const top = Math.floor(row * drawSize / count)
                const right = Math.ceil((col + 1) * drawSize / count)
                const bottom = Math.ceil((row + 1) * drawSize / count)
                context.fillStyle = color
                context.fillRect(left, top, right - left, bottom - top)
            }
            context.draw()
        }
    }
})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpQrcodeUpQrcodeRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)

  return _cE("view", _uM({
    class: "up-qrcode",
    style: _nS(_ctx.rootStyle),
    onLongpress: _ctx.longpress,
    onClick: _ctx.preview
  }), [
    _ctx.error.length > 0
      ? _cE("view", _uM({
          key: 0,
          class: "up-qrcode__error",
          style: _nS(_ctx.matrixStyle)
        }), [
          _cE("text", _uM({ class: "up-qrcode__error-text" }), _tD(_ctx.error), 1 /* TEXT */)
        ], 4 /* STYLE */)
      : _cE("view", _uM({
          key: 1,
          class: "up-qrcode__matrix",
          style: _nS(_ctx.matrixStyle)
        }), [
          _cE("canvas", _uM({
            class: "up-qrcode__canvas",
            id: _ctx.canvasId,
            "canvas-id": _ctx.canvasId,
            style: _nS(_ctx.canvasStyle)
          }), null, 12 /* STYLE, PROPS */, ["id", "canvas-id"]),
          _ctx.icon.length > 0
            ? _cE("image", _uM({
                key: 0,
                class: "up-qrcode__icon",
                src: _ctx.icon,
                mode: "aspectFill",
                style: _nS(_ctx.iconStyle)
              }), null, 12 /* STYLE, PROPS */, ["src"])
            : _cC("v-if", true),
          isTrue(_ctx.showLoading && _ctx.loading)
            ? _cE("view", _uM({
                key: 1,
                class: "up-qrcode__loading"
              }), [
                _cV(_component_up_loading_icon, _uM({
                  vertical: "",
                  text: _ctx.loadingText,
                  textSize: "14px"
                }), null, 8 /* PROPS */, ["text"])
              ])
            : _cC("v-if", true)
        ], 4 /* STYLE */)
  ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["onLongpress", "onClick"])
}
export type UpQrcodeComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpQrcodeUpQrcodeStyles = [_uM([["up-qrcode", _pS(_uM([["display", "flex"], ["position", "relative"]]))], ["up-qrcode__matrix", _pS(_uM([["position", "relative"], ["overflow", "hidden"]]))], ["up-qrcode__canvas", _pS(_uM([["position", "absolute"], ["left", 0], ["top", 0]]))], ["up-qrcode__icon", _pS(_uM([["position", "absolute"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["backgroundColor", "#ffffff"]]))], ["up-qrcode__loading", _pS(_uM([["position", "absolute"], ["left", 0], ["right", 0], ["top", 0], ["bottom", 0], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "rgba(255,255,255,0.8)"]]))], ["up-qrcode__error", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#f8f8f8"]]))], ["up-qrcode__error-text", _pS(_uM([["color", "#fa3534"], ["fontSize", 14]]))]])]

import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
