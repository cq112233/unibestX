export interface CSSStyleValue {
    toString(): string;
}

declare var CSSStyleValue: {
    prototype: CSSStyleValue;
    new(): CSSStyleValue;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue/parse_static) */
    parse(property: string, cssText: string): CSSStyleValue;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue/parseAll_static) */
    parseAll(property: string, cssText: string): CSSStyleValue[];
};

export type CSSNumericBaseType = "angle" | "flex" | "frequency" | "length" | "percent" | "resolution" | "time";

export type CSSMathOperator = "clamp" | "invert" | "max" | "min" | "negate" | "product" | "sum";

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray) */
interface CSSNumericArray {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray/length) */
    readonly length: number;

    forEach(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;

    [index: number]: CSSNumericValue;
}

declare var CSSNumericArray: {
    prototype: CSSNumericArray;
    new(): CSSNumericArray;
};

export interface CSSNumericType {
    angle?: number;
    flex?: number;
    frequency?: number;
    length?: number;
    percent?: number;
    percentHint?: CSSNumericBaseType;
    resolution?: number;
    time?: number;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly) */
export interface DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly a: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly b: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly c: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly d: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly e: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly f: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/is2D) */
    readonly is2D: boolean;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/isIdentity) */
    readonly isIdentity: boolean;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m11: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m12: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m13: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m14: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m21: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m22: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m23: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m24: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m31: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m32: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m33: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m34: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m41: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m42: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m43: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m44: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipX) */
    flipX(): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipY) */
    flipY(): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/inverse) */
    inverse(): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/multiply) */
    multiply(other?: DOMMatrixInit): DOMMatrix;

    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;

    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;

    rotateFromVector(x?: number, y?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale) */
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number,
        originZ?: number): DOMMatrix;

    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;

    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;

    skewX(sx?: number): DOMMatrix;

    skewY(sy?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat32Array) */
    toFloat32Array(): Float32Array;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat64Array) */
    toFloat64Array(): Float64Array;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toJSON) */
    toJSON(): any;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/transformPoint) */
    transformPoint(point?: DOMPointInit): DOMPoint;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/translate) */
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;

    toString(): string;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

export interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}

export interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}

export interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly) */
export interface DOMPointReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w) */
    readonly w: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x) */
    readonly x: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y) */
    readonly y: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z) */
    readonly z: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform) */
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON) */
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/fromPoint_static) */
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint) */
export interface DOMPoint extends DOMPointReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w) */
    w: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x) */
    x: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y) */
    y: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z) */
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint_static) */
    fromPoint(other?: DOMPointInit): DOMPoint;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix) */
export interface DOMMatrix extends DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    a: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    b: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    c: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    d: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    e: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    f: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m11: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m12: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m13: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m14: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m21: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m22: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m23: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m24: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m31: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m32: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m33: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m34: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m41: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m42: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m43: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m44: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/invertSelf) */
    invertSelf(): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/multiplySelf) */
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/preMultiplySelf) */
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;

    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;

    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateSelf) */
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;

    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;

    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number,
        originZ?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/setMatrixValue) */
    setMatrixValue(transformList: string): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewXSelf) */
    skewXSelf(sx?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewYSelf) */
    skewYSelf(sy?: number): DOMMatrix;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/translateSelf) */
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};


export type CSSNumberish = number | CSSNumericValue;

export interface CSSNumericValue extends CSSStyleValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/add) */
    add(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/div) */
    div(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/equals) */
    equals(...value: CSSNumberish[]): boolean;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/max) */
    max(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/min) */
    min(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/mul) */
    mul(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/sub) */
    sub(...values: CSSNumberish[]): CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/to) */
    to(unit: string): CSSUnitValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/toSum) */
    toSum(...units: string[]): CSSMathSum;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type) */
    type(): CSSNumericType;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue) */
export interface CSSUnitValue extends CSSNumericValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/unit) */
    readonly unit: string;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/value) */
    value: number;
}

declare var CSSUnitValue: {
    prototype: CSSUnitValue;
    new(value: number, unit: string): CSSUnitValue;
};


export interface CSSMathClamp extends CSSMathValue {
    readonly lower: CSSNumericValue;
    readonly upper: CSSNumericValue;
    readonly value: CSSNumericValue;
}

declare var CSSMathClamp: {
    prototype: CSSMathClamp;
    new(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): CSSMathClamp;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert) */
export interface CSSMathInvert extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert/value) */
    readonly value: CSSNumericValue;
}

declare var CSSMathInvert: {
    prototype: CSSMathInvert;
    new(arg: CSSNumberish): CSSMathInvert;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax) */
export interface CSSMathMax extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax/values) */
    readonly values: CSSNumericArray;
}

declare var CSSMathMax: {
    prototype: CSSMathMax;
    new(...args: CSSNumberish[]): CSSMathMax;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin) */
export interface CSSMathMin extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin/values) */
    readonly values: CSSNumericArray;
}

declare var CSSMathMin: {
    prototype: CSSMathMin;
    new(...args: CSSNumberish[]): CSSMathMin;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate) */
export interface CSSMathNegate extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate/value) */
    readonly value: CSSNumericValue;
}

declare var CSSMathNegate: {
    prototype: CSSMathNegate;
    new(arg: CSSNumberish): CSSMathNegate;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct) */
export interface CSSMathProduct extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct/values) */
    readonly values: CSSNumericArray;
}

declare var CSSMathProduct: {
    prototype: CSSMathProduct;
    new(...args: CSSNumberish[]): CSSMathProduct;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum) */
export interface CSSMathSum extends CSSMathValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum/values) */
    readonly values: CSSNumericArray;
}

declare var CSSMathSum: {
    prototype: CSSMathSum;
    new(...args: CSSNumberish[]): CSSMathSum;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue) */
export interface CSSMathValue extends CSSNumericValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue/operator) */
    readonly operator: CSSMathOperator;
}

declare var CSSMathValue: {
    prototype: CSSMathValue;
    new(): CSSMathValue;
};


/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent) */
export interface CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/is2D) */
    is2D: boolean;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/toMatrix) */
    toMatrix(): DOMMatrix;

    toString(): string;
}

declare var CSSTransformComponent: {
    prototype: CSSTransformComponent;
    new(): CSSTransformComponent;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue) */
export interface CSSTransformValue extends CSSStyleValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/is2D) */
    readonly is2D: boolean;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/length) */
    readonly length: number;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/toMatrix) */
    toMatrix(): DOMMatrix;

    forEach(callbackfn: (value: CSSTransformComponent, key: number, parent: CSSTransformValue) => void,
        thisArg?: any): void;

    [index: number]: CSSTransformComponent;
}

declare var CSSTransformValue: {
    prototype: CSSTransformValue;
    new(transforms: CSSTransformComponent[]): CSSTransformValue;
};


/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate) */
export interface CSSRotate extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/angle) */
    angle: CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/x) */
    x: CSSNumberish;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/y) */
    y: CSSNumberish;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/z) */
    z: CSSNumberish;
}

declare var CSSRotate: {
    prototype: CSSRotate;
    new(angle: CSSNumericValue): CSSRotate;
    new(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): CSSRotate;
};


/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale) */
export interface CSSScale extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/x) */
    x: CSSNumberish;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/y) */
    y: CSSNumberish;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/z) */
    z: CSSNumberish;
}

declare var CSSScale: {
    prototype: CSSScale;
    new(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): CSSScale;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew) */
export interface CSSSkew extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ax) */
    ax: CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ay) */
    ay: CSSNumericValue;
}

declare var CSSSkew: {
    prototype: CSSSkew;
    new(ax: CSSNumericValue, ay: CSSNumericValue): CSSSkew;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX) */
export interface CSSSkewX extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX/ax) */
    ax: CSSNumericValue;
}

declare var CSSSkewX: {
    prototype: CSSSkewX;
    new(ax: CSSNumericValue): CSSSkewX;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY) */
export interface CSSSkewY extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY/ay) */
    ay: CSSNumericValue;
}

declare var CSSSkewY: {
    prototype: CSSSkewY;
    new(ay: CSSNumericValue): CSSSkewY;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate) */
export interface CSSTranslate extends CSSTransformComponent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/x) */
    x: CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/y) */
    y: CSSNumericValue;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/z) */
    z: CSSNumericValue;
}

declare var CSSTranslate: {
    prototype: CSSTranslate;
    new(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): CSSTranslate;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue) */
export interface CSSVariableReferenceValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/fallback) */
    readonly fallback: CSSUnparsedValue | null;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/variable) */
    variable: string;
}

declare var CSSVariableReferenceValue: {
    prototype: CSSVariableReferenceValue;
    new(variable: string, fallback?: CSSUnparsedValue | null): CSSVariableReferenceValue;
};

export type CSSUnparsedSegment = string | CSSVariableReferenceValue;

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue) */
export interface CSSUnparsedValue extends CSSStyleValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue/length) */
    readonly length: number;

    forEach(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;

    [index: number]: CSSUnparsedSegment;
}

declare var CSSUnparsedValue: {
    prototype: CSSUnparsedValue;
    new(members: CSSUnparsedSegment[]): CSSUnparsedValue;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue) */
export interface CSSVariableReferenceValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/fallback) */
    readonly fallback: CSSUnparsedValue | null;

    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/variable) */
    variable: string;
}

declare var CSSVariableReferenceValue: {
    prototype: CSSVariableReferenceValue;
    new(variable: string, fallback?: CSSUnparsedValue | null): CSSVariableReferenceValue;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly) */
export interface StylePropertyMapReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/size) */
    readonly size: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/get) */
    get(property: string): undefined | CSSStyleValue;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/getAll) */
    getAll(property: string): CSSStyleValue[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/has) */
    has(property: string): boolean;
    forEach(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

declare var StylePropertyMapReadOnly: {
    prototype: StylePropertyMapReadOnly;
    new(): StylePropertyMapReadOnly;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap) */
export interface StylePropertyMap extends StylePropertyMapReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/append) */
    append(property: string, ...values: (CSSStyleValue | string)[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/clear) */
    clear(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/delete) */
    delete(property: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/set) */
    set(property: string, ...values: (CSSStyleValue | string)[]): void;
}

declare var StylePropertyMap: {
    prototype: StylePropertyMap;
    new(): StylePropertyMap;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue) */
export interface CSSKeywordValue extends CSSStyleValue {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue/value) */
    value: string;
}

declare var CSSKeywordValue: {
    prototype: CSSKeywordValue;
    new(value: string): CSSKeywordValue;
};

export type CSSKeywordish = string | CSSKeywordValue;
