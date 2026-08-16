/**
 * 模拟Echart对象,兼容Webview交互 (支持 Vapor 蒸汽模式与 VDOM 模式)
 */
export default class WebviewEchart {
	constructor(canvasId, webviewCtx = null, element = null){
		this.canvasId = typeof canvasId === 'string' ? canvasId : '';
		this.ctx = typeof canvasId === 'object' ? canvasId : (webviewCtx || element);
		this.element = element;
		this.webviewCtx = webviewCtx;
		this.onEventMap = {};
		this.onceEventMap = {};
	}
	
	evalJS(code){
		if (this.element && typeof this.element.evalJS === 'function') {
			this.element.evalJS(code);
			return;
		}
		if (this.webviewCtx && typeof this.webviewCtx.evalJS === 'function') {
			this.webviewCtx.evalJS(code);
			return;
		}
		if (this.ctx && typeof this.ctx.evalJS === 'function') {
			this.ctx.evalJS(code);
			return;
		}
		if (typeof uni !== 'undefined' && this.canvasId) {
			if (typeof uni.getElementById === 'function') {
				const el = uni.getElementById(this.canvasId);
				if (el && typeof el.evalJS === 'function') {
					this.element = el;
					el.evalJS(code);
					return;
				}
			}
			if (typeof uni.createWebviewContext === 'function') {
				try {
					const ctx = uni.createWebviewContext(this.canvasId);
					if (ctx && typeof ctx.evalJS === 'function') {
						this.webviewCtx = ctx;
						ctx.evalJS(code);
						return;
					}
				} catch (e) {}
			}
		}
	}
	
	init(theme, opts){
		this.evalJS(`init(${JSON.stringify({theme, opts})})`)
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
		this.evalJS(`setOption(${JSON.stringify(option)}, ${notMerge}, ${lazyUpdate})`)
	}
	
	getOption(success){
	    this.onceEventMap['getOption'] = success;
	    this.evalJS(`getOption()`)
	}
	
	getWidth(success){
	    this.onceEventMap['getWidth'] = success;
	    this.evalJS(`getWidth()`)
	}
	
	getHeight(success){
	    this.onceEventMap['getHeight'] = success;
	    this.evalJS(`getHeight()`)
	}
 
    resize(option = {}){
        this.evalJS(`resize(${JSON.stringify(option)})`)
    }
    
    on(name, query, handler){
		if (typeof query === 'function') {
			this.onEventMap[name] = query;
			this.evalJS(`on(${JSON.stringify({name})})`)
		} else{
			this.onEventMap[name] = handler;
			this.evalJS(`on(${JSON.stringify({name, query})})`)
		}
    }
    
    off(name){
        this.evalJS(`off(${JSON.stringify({name})})`)
    }
    
    dispatchAction(option){
        this.evalJS(`dispatchAction(${JSON.stringify(option)})`)
    }
    
    showLoading(option){
        this.evalJS(`showLoading(${JSON.stringify(option)})`)
    }
    
    hideLoading(){
        this.evalJS(`hideLoading()`)
    }
    
    appendData(option){
        this.evalJS(`appendData(${JSON.stringify(option)})`)
    }
    
    canvasToTempFilePath(option){
        this.onceEventMap['canvasToTempFilePath'] = option.success
        this.evalJS(`canvasToTempFilePath()`)
    }   
	
    clear(){
        this.evalJS(`clear()`)
    }
	
    dispose(){
        this.evalJS(`dispose()`)
    }
}