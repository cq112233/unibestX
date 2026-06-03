/**
 * 模拟Echart对象,兼容Webview交互
 */
export default class WebviewEchart {
	constructor(ctx){
		this.ctx = ctx;
		this.onEventMap = {};
		this.onceEventMap = {};
	}
	
	init(theme, opts){
		this.ctx.evalJS(`init(${JSON.stringify({theme, opts})})`)
	}
    
    onWebviewMsg(e){
		const msgList = e.detail.data;
        console.log('onWebviewMsg', msgList)
        for (let msg of msgList) {
            const msgType = msg.type;
            const data = msg.data;
            
            // 长期监听的事件
           const onEventMap = this.onEventMap[msgType]
           
           if(onEventMap != null){
               onEventMap(data)
           }
           
           // 一次性事件
           const onceEvent = this.onceEventMap[msgType]
           if(onceEvent != null){
               onceEvent(data);
			   this.onceEventMap[msgType] = null;
           }
        }
    }
	
	setOption(option, notMerge = false, lazyUpdate = false){
		this.ctx.evalJS(`setOption(${JSON.stringify(option)}, ${notMerge}, ${lazyUpdate})`)
	}
	
	getOption(success){
	    this.onceEventMap['getOption'] = success;
	    this.ctx.evalJS(`getOption()`)
	}
	
	getWidth(success){
	    this.onceEventMap['getWidth'] = success;
	    this.ctx.evalJS(`getWidth()`)
	}
	
	getHeight(success){
	    this.onceEventMap['getHeight'] = success;
	    this.ctx.evalJS(`getHeight()`)
	}
 
    resize(option = {}){
        this.ctx.evalJS(`resize(${JSON.stringify(option)})`)
    }
    
    on(name, query, handler){
		if (typeof query === 'function') {
			this.onEventMap[name] = query;
			this.ctx.evalJS(`on(${JSON.stringify({name})})`)
		} else{
			this.onEventMap[name] = handler;
			this.ctx.evalJS(`on(${JSON.stringify({name, query})})`)
		}
    }
    
    off(name){
        this.ctx.evalJS(`off(${JSON.stringify({name})})`)
    }
    
    dispatchAction(option){
        this.ctx.evalJS(`dispatchAction(${JSON.stringify(option)})`)
    }
    
    showLoading(option){
        this.ctx.evalJS(`showLoading(${JSON.stringify(option)})`)
    }
    
    hideLoading(){
        this.ctx.evalJS(`hideLoading()`)
    }
    
    appendData(option){
        this.ctx.evalJS(`appendData(${JSON.stringify(option)})`)
    }
    
    canvasToTempFilePath(option){
        this.onceEventMap['canvasToTempFilePath'] = option.success
        this.ctx.evalJS(`canvasToTempFilePath()`)
    }   
	
    clear(){
        this.ctx.evalJS(`clear()`)
    }
	
    dispose(){
        this.ctx.evalJS(`dispose()`)
    }
}