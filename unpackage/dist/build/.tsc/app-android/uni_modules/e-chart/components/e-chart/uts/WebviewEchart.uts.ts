type EchartEvent = (e: UTSJSONObject) => void;

/**
 * 模拟Echart对象,兼容Webview交互
 */
export default class WebviewEchart {
	private ctx: WebviewContext;
	private onEventMap: Map<string, EchartEvent> = new Map();
	private onceEventMap: Map<string, EchartEvent> = new Map();
    
	constructor(ctx: WebviewContext){
		this.ctx = ctx
	}
	
	init(theme?: string, opts: UTSJSONObject = {}){
		this.ctx.evalJS(`init(${JSON.stringify({theme, opts})})`)
	}
    
    onWebviewMsg(e: UniWebViewMessageEvent){
        console.log('onWebviewMsg', e.detail.data)
        for (let msg of e.detail.data) {
            const msgType = msg['type'] as string;
            const data = msg['data'] as UTSJSONObject;
            
            // 长期监听的事件
           const onEventMap = this.onEventMap.get(msgType)
           
           if(onEventMap != null){
               onEventMap(data)
           }
           
           // 一次性事件
           const onceEvent = this.onceEventMap.get(msgType)
           if(onceEvent != null){
               onceEvent(data)
               this.onceEventMap.delete(msgType)
           }
        }
    }
	
	setOption(option: UTSJSONObject, notMerge: boolean = false, lazyUpdate: boolean = false){
		this.ctx.evalJS(`setOption(${JSON.stringify(option)}, ${notMerge}, ${lazyUpdate})`)
	}
	
	getOption(success: EchartEvent){
	    this.onceEventMap.set('getOption', success)
	    this.ctx.evalJS(`getOption()`)
	}
	
	getWidth(success: EchartEvent){
	    this.onceEventMap.set('getWidth', success)
	    this.ctx.evalJS(`getWidth()`)
	}
	
	getHeight(success: EchartEvent){
	    this.onceEventMap.set('getHeight', success)
	    this.ctx.evalJS(`getHeight()`)
	}
 
    resize(option: UTSJSONObject = {}){
        this.ctx.evalJS(`resize(${JSON.stringify(option)})`)
    }
    
    on(name: string, handler: EchartEvent){
		this.onEventMap.set(name, handler)
		this.ctx.evalJS(`on(${JSON.stringify({name})})`) // 无法传递单纯的string,必须为对象形态的string
    }
    
    on(name: string, query: string | UTSJSONObject, handler: EchartEvent){
		this.onEventMap.set(name, handler)
        this.ctx.evalJS(`on(${JSON.stringify({name, query})})`) // 无法传递单纯的string,必须为对象形态的string
    }
    
    off(name: string){
        this.ctx.evalJS(`off(${JSON.stringify({name})})`)
    }
    
    dispatchAction(option: UTSJSONObject){
        this.ctx.evalJS(`dispatchAction(${JSON.stringify(option)})`)
    }
    
    showLoading(option: UTSJSONObject){
        this.ctx.evalJS(`showLoading(${JSON.stringify(option)})`)
    }
    
    hideLoading(){
        this.ctx.evalJS(`hideLoading()`)
    }
    
    appendData(option: UTSJSONObject){
        this.ctx.evalJS(`appendData(${JSON.stringify(option)})`)
    }
    
    canvasToTempFilePath(option: UTSJSONObject){
        const success = option['success'] as (res: UTSJSONObject) => void;
        this.onceEventMap.set('canvasToTempFilePath', success)
        this.ctx.evalJS(`canvasToTempFilePath()`)
    }   
	
    clear(){
        this.ctx.evalJS(`clear()`)
    }
	
    dispose(){
        this.ctx.evalJS(`dispose()`)
    }
}