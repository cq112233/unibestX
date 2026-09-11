/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
export function colorGradient(startColor: string = 'rgb(0, 0, 0)',
	endColor = 'rgb(255, 255, 255)', step: number = 10): Array<string> {
	// console.log('startColor', startColor)
	let startColorRgb = hexToRgb(startColor, false);
	let startRGB: number[] = [];
	if (startColorRgb instanceof Array) {
		startRGB = startColorRgb as number[] // 转换为rgb数组模式
		const startR:number = startRGB[0]
		const startG:number = startRGB[1]
		const startB:number = startRGB[2]
		
		const endRGB:number[]= hexToRgb(endColor, false) as number[]
		const endR:number = endRGB[0]
		const endG:number = endRGB[1]
		const endB:number = endRGB[2]
		
		const sR = (endR - startR) / step // 总差值
		const sG = (endG - startG) / step
		const sB = (endB - startB) / step
		
		const colorArr: Array<string> = []
		for (let i = 0; i < step; i++) {
		  // 计算每一步的hex值
			let sr: string = JSON.stringify(Math.round((sR * i + startR)))
			let sg: string = JSON.stringify(Math.round((sG * i + startG)))
			let sb: string = JSON.stringify(Math.round((sB * i + startB)))
		  let hex = rgbToHex(`rgb(${sr},${sg},${sb})`)
		  // 确保第一个颜色值为startColor的值
		  if (i == 0) hex = rgbToHex(startColor)
		  // 确保最后一个颜色值为endColor的值
		  if (i == step - 1) hex = rgbToHex(endColor)
		  colorArr.push(hex)
		}
		return colorArr
	}
	return []
}

// CSS 颜色名称到 RGB 值的映射表
const cssColors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
};

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
export function hexToRgb(sColor: string, str: boolean = true): any {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    sColor = sColor.toLowerCase()
    
    // 检查是否为CSS颜色名称
    if (cssColors[sColor] != null) {
		// @ts-ignore
        sColor = cssColors[sColor].toString()
    }
    
    if (sColor != ''  && reg.test(sColor)
		) {
		// 16进制转换为rgb数组
        if (sColor.length == 4) {
            let sColorNew = '#'
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
            }
            sColor = sColorNew
        }
        // 处理六位的颜色值
        const sColorChange: number[] = []
        for (let i = 1; i < 7; i += 2) {
			// console.log('###',sColor.slice(i, i + 2), '###')
			// console.log(parseInt(`0x${sColor.slice(i, i + 2)}`))
            sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`))
        }
        if (str == false) {
			// console.log('strtrue', sColorChange)
            return sColorChange
        }
		let sc0 = JSON.stringify(sColorChange[0])
		let sc1 = JSON.stringify(sColorChange[1])
		let sc2 = JSON.stringify(sColorChange[2])
        return `rgb(${sc0},${sc1},${sc2})`
    }
	// rgb字符串转换为rgb数组
	if (/^(rgb|RGB)/.test(sColor)) {
        const arr: string[] = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
		let arrNumber: number[] = []
		arr.forEach(val => {
			arrNumber.push(parseInt(val))
		})
		return arrNumber
    }
    return sColor
}

// 将rgb表示方式转换为hex表示方式
export function rgbToHex(rgb: string): string {
    const _this = rgb
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    if (/^(rgb|RGB)/.test(_this)) {
        const aColor: string[] = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
        let strHex = '#'
        for (let i = 0; i < aColor.length; i++) {
            let hex = parseInt(aColor[i]).toString(16)
            hex = (hex).length == 1 ? `${0}${hex}` : hex // 保证每个rgb的值为2位
            if (hex === '0') {
                hex += hex
            }
            strHex += hex
        }
        if (strHex.length != 7) {
            strHex = _this
        }
        return strHex
    } else if (reg.test(_this)) {
        // const aNum = _this.replace(/#/, '').split('')
        // if (aNum.length === 6) {
        //     return _this
        // } if (aNum.length === 3) {
        //     let numHex = '#'
        //     for (let i = 0; i < aNum.length; i += 1) {
        //         numHex += (aNum[i] + aNum[i])
        //     }
        //     return numHex
        // }
    }
	return _this
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
export function colorToRgba(color: string, alpha: number): string {
    color = rgbToHex(color)
    // 十六进制颜色值的正则表达式
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    /* 16进制颜色转为RGB格式 */
    let sColor = color.toLowerCase()
    if (sColor != '' && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#'
            for (let i = 1; i < 4; i += 1) {
                sColorNew = sColorNew + sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
            }
            sColor = sColorNew
        }
        // 处理六位的颜色值
        const sColorChange = [] as Array<number>
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`))
        }
        // return sColorChange.join(',')
        return `rgba(${sColorChange.join(',')},${alpha})`
    }

    return sColor
}

export default {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
}