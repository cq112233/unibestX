import { defineMixin } from '../vue.uts'
import {
	array as testArray
} from '../function/test.uts'
import { bem, addUnit as _addUnit, addStyle as _addStyle, getPx as _getPx, upGetRect } from '../../libs/function/index';
export const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
        // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
        customStyle: {
            type: [Object, String],
            default: {}
        },
        customClass: {
            type: String,
            default: ''
        },
        // 跳转的页面路径
        url: {
            type: String,
            default: ''
        },
        // 页面跳转的类型
        linkType: {
            type: String,
            default: 'navigateTo'
        }
    },
    data() {
        return {
            parent: null as ComponentPublicInstance|null,
            parentData: {} as UTSJSONObject,
			children: [] as ComponentPublicInstance[],
			childrenRefs: [] as Array<string>
        }
    },
    onLoad() {
    },
    created() {
    },
    computed: {
    },
    methods: {
		$upAddUnit(val: any|null, unit: string|null = ''): string {
			return _addUnit(val, unit)
		},
		$upAddStyle(customStyle: any, target = 'object'): any {
			return _addStyle(customStyle, target)
		},
		$upGetPx(val: any, unit = false): string {
			return _getPx(val, unit)
		},
		/**
	    * 生成bem规则类名
	    * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
	    * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
	    * @param {String} name 组件名称
	    * @param {Array} fixed 一直会存在的类名
	    * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
	    * @returns {Array|string}
	    */
		bem: function (name: string, fixed: Array<string>, change: Array<Array<any>>): string  {
			return bem(name, fixed, change)
		},
        // 跳转某一个页面
        openPage: function(urlKey: string = 'url'): void {
            // const url: string = this.$data?.[urlKey].toString()
            // if (url != '') {
            //     // h5官方回应：发行h5会自动摇树优化，所有使用uni的地方，都会被直接转换成具体的API调用 https://ask.dcloud.net.cn/question/161523?notification_id-1201922__rf-false__item_id-226372
            //     // 使用封装的 route 进行跳转（直接调用方法），不使用 uni 对象
            //     // route({ type: this.linkType, url })
            //     // 执行类似uni.navigateTo的方法
            //     uni[this.linkType]({
            //         url
            //     })
            // }
        },
        $uGetRect(selector: string, all: boolean = false): Promise<NodeInfo> {
			// @ts-ignore
            return upGetRect(selector, all, this)
        },
        // 查询节点信息
        // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
        // 解决办法为在组件根部再套一个没有任何作用的view元素
        upGetRect(selector: string, all: boolean = false): Promise<NodeInfo> {
			// @ts-ignore
            return upGetRect(selector, all, this)
        },
		getChildIndex(ins: ComponentPublicInstance ) {
			let index = -1
			// @ts-ignore
			if (this.parent != null) {
				// @ts-ignore
				(this.parent!!.$data['children'] as ComponentPublicInstance[]).forEach((child: ComponentPublicInstance, idx: number) =>  {
					if (child == ins) {
						index = idx
					}
				})
			}
			return index
		},
        getParent(name: string): ComponentPublicInstance|null {
			// @ts-ignore
            let parent = this.$parent
            // 通过while历遍，这里主要是为了H5需要多层解析的问题
            while (parent != null) {
            	// console.log(parent.$options)
                // 父组件
                if (
					// parent.$options != null &&
					parent.$options['name'] != name) {
                    // 如果组件的name不相等，继续上一级寻找
                    parent = parent.$parent
                } else {
					// 一定要break,return会导致死循环CPU飙升。
					break;
                }
            }
            return parent
        },
		addChild(ins: ComponentPublicInstance): void {
			let exist = false
			// @ts-ignore
			let childs: ComponentPublicInstance[] = this.children
			childs.map((child: ComponentPublicInstance) => {
				// console.log('&&&&&', child)
				if (ins == child) {
					exist = true
				}
			})
			if (exist == false) {
				// console.log('ins&&&&&&&&&', ins)
				// @ts-ignore
				this.children.push(ins)
			}
		},
		addChildRef(str: string): void {
			// @ts-ignore
			let index = this.childrenRefs.indexOf('str')
			if (index <= -1) {
				// @ts-ignore
				this.childrenRefs.push(str)
			}
		},
        /**
         * 获取父组件数据
         * @author jry ijry@qq.com
         * @param parentName 父组件名称如up-row
         * @returns 
         */
        getParentData: function(parentName: string, refMode: boolean = false): any {
            // 避免在created中去定义parent变量
            // 这里的本质原理是，通过获取父组件实例(也即类似up-radio的父组件up-radio-group的this)
            // 将父组件this中对应的参数，赋值给本组件(up-radio的this)的parentData对象中对应的属性
            // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
            // 此处并不会自动更新子组件的数据，而是依赖父组件up-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
			// 注意不能赋值给parent,会导致与addChild中push冲突
            let parent = this.getParent(parentName)
			// @ts-ignore
			this.parent = parent
            if (parent != null) {
				// @ts-ignore
				if (parent?.$data != null && parent?.$data?.['children'] != null) {
					// 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
					if (refMode) {
						// @ts-ignore
						parent?.$callMethod('addChildRef', this.$data['refstr'])
					} else {
						parent?.$callMethod('addChild', this)
					}
				}
                // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
				// @ts-ignore
                UTSJSONObject.keys(this.parentData).map((key: string) => {
                    if (parent?.$props != null && parent?.$props?.[key] != null) {
						// @ts-ignore
						if (this.parentData?.[key] != null) {
							// @ts-ignore
							this.parentData[key] = parent?.$props?.[key]
						}
                    }
					if (parent?.$data != null && parent?.$data?.[key] != null) {
						// @ts-ignore
						if (this.parentData?.[key] != null) {
							// @ts-ignore
							this.parentData[key] = parent?.$data?.[key]
						}
					}
                })
            }
			return {}
        },
        // 阻止事件冒泡
        preventEvent(e: UniEvent ) {
			e.stopPropagation()
        //     e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
        },
        // 空操作
        noop(e: UniEvent) {
             this.preventEvent(e)
        }
    },
    onReachBottom() {
    //     uni.$emit('uOnReachBottom')
    },
    beforeDestroy() {
        // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
        // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
        if (this.$parent && testArray(this.parent.children)) {
            // 组件销毁时，移除父组件中的children数组中对应的实例
            const childrenList = this.parent.children
            childrenList.map((child: ComponentPublicInstance, index: number) => {
                // 如果相等，则移除
                if (child === this) {
                    childrenList.splice(index, 1)
                }
            })
        }
    }
})
