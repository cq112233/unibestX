// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif


/**
 * 将 CSS 字符串转换为样式对象
 * @param css CSS 字符串，例如 "color: red; font-size: 16px;"
 * @returns CSSProperties 对象
 */
export function parseStyle(css : string | UTSJSONObject | null) : UTSJSONObject {
	// #ifdef APP-ANDROID
	if(css == null) return {}
	// #endif
	// #ifndef APP-ANDROID
	if(!css) return {}
	// #endif
	if(typeof css == 'object') return css as UTSJSONObject
	
	
	const style : UTSJSONObject = {};

	(css as string).split(';').forEach(decl => {
		// #ifdef APP-ANDROID
		const res = decl.split(':').map(s => s.trim());
		if(res.length > 1) {
			const [prop, val] = res;
			if (prop != '' && val != '') {
				const camelProp = prop!.replace(/-([a-z])/g, (_a: string|null, b: string, _c: number, _d: string):string => {
					return b.toUpperCase()
				});
				style[camelProp] = val!;
			}
		}
		// #endif
		
		// #ifndef APP-ANDROID
		const [prop, val] = decl.split(':').map(s => s.trim());
		if (prop && val) {
			const camelProp = prop.replace(/-([a-z])/g, (_, c) => {
				return c.toUpperCase()
			});
			style[camelProp] = val;
		}
		// #endif
	});

	return style;
}