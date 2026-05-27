/**
 * BEM 配置类型定义
 * @description 定义 BEM 命名规范中的命名空间和分隔符配置
 */
export type BemConfig = {
	/** 命名空间，用于所有 BEM 类名的前缀 */
	namespace : string
	/** Block 和命名空间之间的分隔符 */
	blockSeparator : string
	/** Element 和 Block 之间的分隔符 */
	elementSeparator : string
	/** Modifier 和 Block/Element 之间的分隔符 */
	modifierSeparator : string
}

/**
 * 默认 BEM 配置
 * @description 使用 'l' 作为命名空间，'-' 作为 block 分隔符，'__' 作为 element 分隔符，'--' 作为 modifier 分隔符
 */
const defaultBem : BemConfig = {
	namespace: 'l',
	blockSeparator: '-',
	elementSeparator: '__',
	modifierSeparator: '--',
}

/**
 * 条件类型，用于判断是否需要生成类名
 * @description 支持布尔值、数字、字符串和 null 类型
 */
type IsType = boolean | number | string | null

/**
 * BEM 类
 * @description 用于生成符合 BEM 命名规范的 CSS 类名
 * @example
 * const bem = createBem('button')
 * bem.b() // 'l-button'
 * bem.e('text') // 'l-button__text'
 * bem.m('primary') // 'l-button--primary'
 * bem.em('text', 'small') // 'l-button__text--small'
 */
class Bem {
	/** 命名空间 */
	private namespace : string
	/** Block 分隔符 */
	private blockSeparator : string
	/** Element 分隔符 */
	private elementSeparator : string
	/** Modifier 分隔符 */
	private modifierSeparator : string
	/** 前缀，由命名空间和 block 组成 */
	private prefix : string

	/**
	 * 构造函数
	 * @param config BEM 配置对象
	 * @param block Block 名称，可以是字符串或数字
	 */
	constructor(
		config : BemConfig,
		block : string | number,
	) {
		this.namespace = config.namespace
		this.blockSeparator = config.blockSeparator
		this.elementSeparator = config.elementSeparator
		this.modifierSeparator = config.modifierSeparator
		this.prefix = this.namespace + this.blockSeparator + block
	}

	/**
	 * 判断是否需要生成类名
	 * @description 当 is 参数为 false、0 或空字符串时，返回 false，表示不需要生成类名；否则返回 true
	 * @param is 条件参数，默认为 true
	 * @returns 是否需要生成类名
	 * @example
	 * shouldGenerate() // true
	 * shouldGenerate(true) // true
	 * shouldGenerate(false) // false
	 * shouldGenerate(0) // false
	 * shouldGenerate('') // false
	 */
	private shouldGenerate(is : IsType = true) : boolean {
		return !(is == false || is == 0 || is == '')
	}

	/**
	 * 生成 Block 类名
	 * @description 返回当前 block 的完整类名
	 * @returns Block 类名字符串
	 * @example
	 * const bem = createBem('button')
	 * bem.b() // 'l-button'
	 */
	b() : string {
		return this.prefix
	}

	/**
	 * 生成 Element 类名
	 * @description 生成 Block__Element 格式的类名，当 is 参数为 false、0 或空字符串时返回空字符串，当 element 为 null 时返回 Block 类名
	 * @param element Element 名称，可以是字符串或数字，为 null 时返回 Block 类名
	 * @param is 条件参数，默认为 true，当为 false、0 或空字符串时不生成类名
	 * @returns Element 类名字符串或空字符串
	 * @example
	 * const bem = createBem('button')
	 * bem.e('text') // 'l-button__text'
	 * bem.e('text', true) // 'l-button__text'
	 * bem.e('text', false) // ''
	 * bem.e('text', 0) // ''
	 * bem.e(null) // 'l-button'
	 */
	e(element : string | number | null, is : IsType = true) : string {
		if (!this.shouldGenerate(is)) {
			return ''
		}
		if (element == null) {
			return this.prefix
		}
		return this.prefix + this.elementSeparator + element
	}

	/**
	 * 生成 Modifier 类名
	 * @description 生成 Block--modifier 格式的类名，当 is 参数为 false、0 或空字符串时返回空字符串，当 modifier 为 null 时返回 Block 类名
	 * @param modifier Modifier 名称，可以是字符串或数字，为 null 时返回 Block 类名
	 * @param is 条件参数，默认为 true，当为 false、0 或空字符串时不生成类名
	 * @returns Modifier 类名字符串或空字符串
	 * @example
	 * const bem = createBem('button')
	 * bem.m('primary') // 'l-button--primary'
	 * bem.m('primary', true) // 'l-button--primary'
	 * bem.m('primary', false) // ''
	 * bem.m('primary', 0) // ''
	 * bem.m(null) // 'l-button'
	 */
	m(modifier : string | number | null, is : IsType = true) : string {
		if (!this.shouldGenerate(is)) {
			return ''
		}
		if (modifier == null || modifier == '') {
			return this.prefix
		}
		return this.prefix + this.modifierSeparator + modifier
	}

	/**
	 * 生成 Element-Modifier 类名
	 * @description 生成 Block__Element--modifier 格式的类名，当 is 参数为 false、0 或空字符串时返回空字符串，当 modifier 为 null 时返回 Element 类名
	 * @param element Element 名称，可以是字符串或数字
	 * @param modifier Modifier 名称，可以是字符串或数字，为 null 时返回 Element 类名
	 * @param is 条件参数，默认为 true，当为 false、0 或空字符串时不生成类名
	 * @returns Element-Modifier 类名字符串或空字符串
	 * @example
	 * const bem = createBem('button')
	 * bem.em('text', 'small') // 'l-button__text--small'
	 * bem.em('text', 'small', true) // 'l-button__text--small'
	 * bem.em('text', 'small', false) // ''
	 * bem.em('text', 'small', 0) // ''
	 * bem.em('text', null) // 'l-button__text'
	 */
	em(
		element : string | number,
		modifier : string | number | null,
		is : IsType = true,
	) : string {
		if (!this.shouldGenerate(is)) {
			return ''
		}
		if (modifier == null) {
			return this.prefix + this.elementSeparator + element
		}
		return (
			this.prefix + this.elementSeparator + element + this.modifierSeparator + modifier
		)
	}

	/**
	 * 生成完整的 BEM 类名（Block-Element-Modifier）
	 * @description 生成完整的 BEM 类名，支持 Block、Block__Element、Block--modifier、Block__Element--modifier 四种格式
	 * @param block Block 名称，可以是字符串或数字
	 * @param element Element 名称，可以是字符串或数字，为 null 时不拼接
	 * @param modifier Modifier 名称，可以是字符串或数字，为 null 时不拼接
	 * @param is 条件参数，默认为 true，当为 false、0 或空字符串时不生成类名
	 * @returns BEM 类名字符串或空字符串
	 * @example
	 * const bem = createBem('button')
	 * bem.bem('button') // 'l-button'
	 * bem.bem('button', 'text') // 'l-button__text'
	 * bem.bem('button', null, 'primary') // 'l-button--primary'
	 * bem.bem('button', 'text', 'small') // 'l-button__text--small'
	 * bem.bem('button', 'text', 'small', false) // ''
	 */
	bem(
		block : string | number,
		element : string | number | null,
		modifier : string | number | null,
		is : boolean | number | string | null = true,
	) : string {
		if (!this.shouldGenerate(is)) {
			return ''
		}

		let className = this.namespace + this.blockSeparator + block
		if (element != null) {
			className += this.elementSeparator + element
		}
		if (modifier != null) {
			className += this.modifierSeparator + modifier
		}
		return className
	}
}

/**
 * 创建 BEM 结构函数
 * @description 根据配置创建一个 BEM 类生成器函数
 * @param config BEM 配置对象
 * @returns 返回一个函数，该函数接收 block 名称并返回 Bem 实例
 * @example
 * const createBem = createBemStruct({ namespace: 'l', blockSeparator: '-', elementSeparator: '__', modifierSeparator: '--' })
 * const bem = createBem('button')
 * bem.b() // 'l-button'
 */
export function createBemStruct(config : BemConfig) : (block : string | number) => Bem {
	return (block : string | number) => {
		return new Bem(config, block)
	}
}

/**
 * 使用默认配置创建 BEM 函数
 * @description 使用默认配置（namespace: 'l', blockSeparator: '-', elementSeparator: '__', modifierSeparator: '--'）创建 BEM 类生成器
 * @example
 * const bem = createBem('button')
 * bem.b() // 'l-button'
 * bem.e('text') // 'l-button__text'
 * bem.m('primary') // 'l-button--primary'
 * bem.em('text', 'small') // 'l-button__text--small'
 */
export const createBem = createBemStruct(defaultBem)