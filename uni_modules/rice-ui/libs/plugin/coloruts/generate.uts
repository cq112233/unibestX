import { lightColorCount, darkColorCount, darkColorMap } from './constant';
import { getGenHue, getGenSaturation, getGenValue } from "./utils.uts"
import { Coloruts } from "./conversion.uts"
import { GenerateOptions, ColorInput } from "./type.uts"


export function generateColors(color : ColorInput, opts ?: GenerateOptions | null) {
	const patterns = [] as Coloruts[];
	const pColor = new Coloruts(color);
	const hsv = pColor.toHsv();
	for (let i = lightColorCount; i > 0; i--) {
		const c = new Coloruts({
			h: getGenHue(hsv, i, true),
			s: getGenSaturation(hsv, i, true),
			v: getGenValue(hsv, i, true)
		} as UTSJSONObject);
		patterns.push(c);
	}
	patterns.push(pColor);
	for (let i = 1; i <= darkColorCount; i++) {
		const c = new Coloruts({
			h: getGenHue(hsv, i),
			s: getGenSaturation(hsv, i),
			v: getGenValue(hsv, i)
		} as UTSJSONObject);
		patterns.push(c);

	}
	if (opts?.theme == 'dark') {
		return darkColorMap.map(item => new Coloruts(opts.backgroundColor ?? '#141414').mix(patterns[item.index], item.amount).toHexString())
	}
	return patterns.map(c => c.toHexString());
}