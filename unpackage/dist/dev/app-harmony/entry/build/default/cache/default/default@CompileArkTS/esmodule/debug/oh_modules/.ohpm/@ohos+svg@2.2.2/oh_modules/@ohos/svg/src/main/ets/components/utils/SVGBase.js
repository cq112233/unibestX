/**
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MyRect from '@normalized:N&&&@ohos/svg/src/main/ets/components/utils/Rect&2.2.2';
import { Ruleset, Source } from '@normalized:N&&&@ohos/svg/src/main/ets/components/utils/CSSParser&2.2.2';
import { SVGParseException } from '@normalized:N&&&@ohos/svg/src/main/ets/components/SVGParseException&2.2.2';
import { SVGParserImpl } from '@normalized:N&&&@ohos/svg/src/main/ets/components/utils/SVGParserImpl&2.2.2';
import { SVGExternalFileResolver } from '@normalized:N&&&@ohos/svg/src/main/ets/components/SVGExternalFileResolver&2.2.2';
import util from '@ohos:util';
import { GlobalContext } from '@normalized:N&&&@ohos/svg/src/main/ets/components/GlobalContext&2.2.2';
export class SVGBase {
    constructor(enableInternalEntities, fileResolver) {
        this.externalFileResolver = new SVGExternalFileResolver();
        this.rootElement = null;
        this.title = "";
        this.desc = "";
        this.renderDPI = 96;
        this.cssRules = new Ruleset();
        this.idToElementMap = new Map();
        this.enableInternalEntities = enableInternalEntities;
        this.externalFileResolver = fileResolver;
    }
    static getFromString(svg) {
        return this.createParser().parseString(svg);
    }
    static getFromResource(media, callback, context) {
        if (context != undefined) {
        }
        else {
            context = GlobalContext.getContext().getObject("context");
        }
        let value = context.resourceManager.getMediaContentSync(media.id);
        if (value) {
            let data = this.unit8ArrayToString(value);
            let svgBase = this.getFromString(data);
            callback(svgBase);
        }
    }
    static unit8ArrayToString(fileData) {
        let textDecoder = util.TextDecoder.create("utf-8", { ignoreBOM: true });
        return textDecoder.decodeWithStream(fileData, { stream: false });
    }
    static getFromRawfile(rawfileName, callback, context) {
        if (context != undefined) {
        }
        else {
            context = GlobalContext.getContext().getObject("context");
        }
        let value = context.resourceManager.getRawFileContentSync(rawfileName);
        if (value) {
            let data = this.unit8ArrayToString(value);
            let svgBase = this.getFromString(data);
            callback(svgBase);
        }
    }
    setRenderDPI(dpi) {
        this.renderDPI = dpi;
    }
    getRenderDPI() {
        return this.renderDPI;
    }
    static createParser() {
        return new SVGParserImpl().setInternalEntitiesEnabled(this.enableInternalEntitiesSingleton)
            .setExternalFileResolver(this.externalFileResolverSingleton);
    }
    getRootElement() {
        return this.rootElement;
    }
    setRootElement(rootElement) {
        this.rootElement = rootElement;
    }
    resolveIRI(iri) {
        if (iri == null)
            return null;
        iri = this.cssQuotedString(iri);
        if (iri.length > 1 && iri.startsWith("#")) {
            return this.getElementById(iri.substring(1));
        }
        return null;
    }
    cssQuotedString(str) {
        if (str.startsWith("\"") && str.endsWith("\"")) {
            str = str.substring(1, str.length - 1).replace("\\\"", "\"");
        }
        else if (str.startsWith("'") && str.endsWith("'")) {
            str = str.substring(1, str.length - 1).replace("\\'", "'");
        }
        return str.replace("\\\n", "").replace("\\A", "\n");
    }
    addCSSRules(ruleset) {
        this.cssRules.addAll(ruleset);
    }
    getCSSRules() {
        return this.cssRules.getRules();
    }
    hasCSSRules() {
        return !this.cssRules.isEmpty();
    }
    clearRenderCSSRules() {
        this.cssRules.removeFromSource(Source.RenderOptions);
    }
    setTitle(title) {
        this.title = title;
    }
    setDesc(desc) {
        this.desc = desc;
    }
    getElementById(id) {
        if (id == null || id.length == 0)
            return null;
        if (id == (this.rootElement.id))
            return this.rootElement;
        if (this.idToElementMap.has(id))
            return this.idToElementMap.get(id);
        let result = this.getElementById2(this.rootElement, id);
        this.idToElementMap.set(id, result);
        return result;
    }
    getElementById2(obj, id) {
        // @ts-ignore
        let elem = obj;
        if (id == elem.id)
            return elem;
        for (let i = 0; i < obj.getChildren().length; i++) {
            let child = obj.getChildren()[i];
            if (!(child instanceof SvgElementBase))
                continue;
            let childElem = child;
            if (id == childElem.id)
                return childElem;
            if (child.type.indexOf("SvgContainer") > -1) {
                // @ts-ignore
                let found = this.getElementById2(child, id);
                if (found != null)
                    return found;
            }
        }
        return null;
    }
    getElementsByTagName(nodeName, result, obj) {
        if (!result) {
            result = new Array();
        }
        if (!obj) {
            obj = this.rootElement;
        }
        if (obj.getNodeName() == (nodeName)) {
            result.push(obj);
        }
        if (obj.type == "SvgContainer") {
            // @ts-ignore
            obj.getChildren().forEach(child => {
                this.getElementsByTagName(nodeName, result, child);
            });
        }
        return result;
    }
}
SVGBase.DEFAULT_PICTURE_WIDTH = 512;
SVGBase.DEFAULT_PICTURE_HEIGHT = 512;
SVGBase.SQRT2 = 1.414213562373095;
SVGBase.externalFileResolverSingleton = null;
SVGBase.enableInternalEntitiesSingleton = true;
export class Unit {
}
Unit.px = "px";
Unit.em = "em";
Unit.ex = "ex";
Unit.in = "in";
Unit.cm = "cm";
Unit.mm = "mm";
Unit.pt = "pt";
Unit.pc = "pc";
Unit.percent = "percent";
export var GradientSpread;
(function (GradientSpread) {
    GradientSpread["pad"] = "pad";
    GradientSpread["reflect"] = "reflect";
    GradientSpread["repeat"] = "repeat";
})(GradientSpread || (GradientSpread = {}));
export class Box {
    constructor(minX, minY, width, height) {
        this.minX = minX;
        this.minY = minY;
        this.width = width;
        this.height = height;
    }
    copy(copy) {
        this.minX = copy.minX;
        this.minY = copy.minY;
        this.width = copy.width;
        this.height = copy.height;
    }
    static fromLimits(minX, minY, maxX, maxY) {
        return new Box(minX, minY, maxX - minX, maxY - minY);
    }
    toRectF() {
        return new MyRect(this.minX, this.minY, this.maxX(), this.maxY());
    }
    maxX() {
        return this.minX + this.width;
    }
    maxY() {
        return this.minY + this.height;
    }
    union(other) {
        if (other.minX < this.minX)
            this.minX = other.minX;
        if (other.minY < this.minY)
            this.minY = other.minY;
        if (other.maxX() > this.maxX())
            this.width = other.maxX() - this.minX;
        if (other.maxY() > this.maxY())
            this.height = other.maxY() - this.minY;
    }
    toString() {
        return "[" + this.minX + " " + this.minY + " " + this.width + " " + this.height + "]";
    }
}
export class SvgPaint {
}
export class Colour extends SvgPaint {
    constructor(val) {
        super();
        this.colour = val;
    }
    toString() {
        return `#%08x ${this.colour}`;
    }
}
Colour.BLACK = new Colour("#000000");
Colour.TRANSPARENT = new Colour("#ffffffff");
export class CurrentColor extends SvgPaint {
    constructor() {
        super();
    }
    static getInstance() {
        return this.instance;
    }
}
CurrentColor.instance = new CurrentColor();
export class PaintReference extends SvgPaint {
    constructor(href, fallback) {
        super();
        this.href = href;
        this.fallback = fallback;
    }
    toString() {
        return this.href + " " + this.fallback;
    }
}
export class Length {
    constructor(value, unit) {
        this.value = value;
        if (unit == undefined) {
            unit = Unit.px;
        }
        this.unit = unit;
    }
    floatValueBox(renderer) {
        switch (this.unit) {
            case Unit.em:
                return this.value * renderer.getCurrentFontSize();
            case Unit.ex:
                return this.value * renderer.getCurrentFontXHeight();
            case Unit.in:
                return this.value * renderer.getDPI();
            case Unit.cm:
                return this.value * renderer.getDPI() / 2.54;
            case Unit.mm:
                return this.value * renderer.getDPI() / 25.4;
            case Unit.pt:
                return this.value * renderer.getDPI() / 72;
            case Unit.pc:
                return this.value * renderer.getDPI() / 6;
            case Unit.percent:
                let viewPortUser = renderer.getCurrentViewPortInUserUnits();
                if (viewPortUser == null)
                    return this.value;
                return this.value * viewPortUser.width / 100;
            case Unit.px:
            default:
                return this.value;
        }
    }
    floatValueX(renderer) {
        switch (this.unit) {
            case Unit.em:
                return this.value * renderer.getCurrentFontSize();
            case Unit.ex:
                return this.value * renderer.getCurrentFontXHeight();
            case Unit.in:
                return px2vp(this.value * renderer.getDPI());
            case Unit.cm:
                return px2vp(this.value * renderer.getDPI() / 2.54);
            case Unit.mm:
                return px2vp(this.value * renderer.getDPI() / 25.4);
            case Unit.pt:
                return px2vp(this.value * renderer.getDPI() / 72);
            case Unit.pc:
                return px2vp(this.value * renderer.getDPI() / 6);
            case Unit.percent:
                let viewPortUser = renderer.getCurrentViewPortInUserUnits();
                if (viewPortUser == null)
                    return px2vp(this.value);
                return px2vp(this.value * viewPortUser.width / 100);
            case Unit.px:
            default:
                return px2vp(this.value);
        }
    }
    floatValueY(renderer) {
        if (this.unit == Unit.percent) {
            let viewPortUser = renderer.getCurrentViewPortInUserUnits();
            if (viewPortUser == null)
                return px2vp(this.value);
            return px2vp(this.value * viewPortUser.height / 100);
        }
        return this.floatValueX(renderer);
    }
    getFloatValue() {
        return this.value;
    }
    floatValue(renderer, max) {
        if (max) {
            if (this.unit == Unit.percent) {
                return this.value * max / 100;
            }
            return this.floatValueX(renderer);
        }
        else {
            if (this.unit == Unit.percent) {
                let viewPortUser = renderer.getCurrentViewPortInUserUnits();
                if (viewPortUser == null)
                    return this.value;
                let w = viewPortUser.width;
                let h = viewPortUser.height;
                if (w == h)
                    return this.value * w / 100;
                let n = (Math.sqrt(w * w + h * h) / SVGBase.SQRT2);
                return px2vp(this.value * n / 100);
            }
            return this.floatValueX(renderer);
        }
    }
    floatValueWithDpi(dpi) {
        switch (this.unit) {
            case Unit.in:
                return this.value * dpi;
            case Unit.cm:
                return this.value * dpi / 2.54;
            case Unit.mm:
                return this.value * dpi / 25.4;
            case Unit.pt:
                return this.value * dpi / 72;
            case Unit.pc:
                return this.value * dpi / 6;
            case Unit.px:
            case Unit.em:
            case Unit.ex:
            case Unit.percent:
            default:
                return this.value;
        }
    }
    isZero() {
        return this.value == 0;
    }
    isNegative() {
        return this.value < 0;
    }
    toString() {
        return this.value + this.unit.toString();
    }
}
Length.ZERO = new Length(0);
export class CSSClipRect {
    constructor(top, right, bottom, left) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}
export class SvgObject {
    constructor() {
        this.isRender = true;
        this.type = "";
    }
    getNodeName() {
        return "";
    }
}
export class SvgElementBase extends SvgObject {
    constructor() {
        super(...arguments);
        this.id = null;
        this.spacePreserve = null;
        this.baseStyle = null;
        this.style = null;
        this.classNames = null;
    }
    toString() {
        return this.getNodeName();
    }
}
export class SvgElement extends SvgElementBase {
    constructor() {
        super(...arguments);
        this.boundingBox = null;
    }
}
export class SvgConditionalElement extends SvgElement {
    constructor() {
        super(...arguments);
        this.requiredFeatures = null;
        this.requiredExtensions = null;
        this.systemLanguage = null;
        this.requiredFormats = null;
        this.requiredFonts = null;
    }
    setRequiredFeatures(features) {
        this.requiredFeatures = features;
    }
    getRequiredFeatures() {
        return this.requiredFeatures;
    }
    setRequiredExtensions(extensions) {
        this.requiredExtensions = extensions;
    }
    getRequiredExtensions() {
        return this.requiredExtensions;
    }
    setSystemLanguage(languages) {
        this.systemLanguage = languages;
    }
    getSystemLanguage() {
        return this.systemLanguage;
    }
    setRequiredFormats(mimeTypes) {
        this.requiredFormats = mimeTypes;
    }
    getRequiredFormats() {
        return this.requiredFormats;
    }
    setRequiredFonts(fontNames) {
        this.requiredFonts = fontNames;
    }
    getRequiredFonts() {
        return this.requiredFonts;
    }
}
export class SvgConditionalContainer extends SvgElement {
    constructor() {
        super(...arguments);
        this.children = [];
        this.requiredFeatures = null;
        this.requiredExtensions = null;
        this.systemLanguage = null;
        this.requiredFormats = null;
        this.requiredFonts = null;
        this.type = "SvgContainer | SvgConditional";
    }
    getChildren() {
        return this.children;
    }
    addChild(elem) {
        this.children.push(elem);
    }
    setRequiredFeatures(features) {
        this.requiredFeatures = features;
    }
    getRequiredFeatures() {
        return this.requiredFeatures;
    }
    setRequiredExtensions(extensions) {
        this.requiredExtensions = extensions;
    }
    getRequiredExtensions() {
        return this.requiredExtensions;
    }
    setSystemLanguage(languages) {
        this.systemLanguage = languages;
    }
    getSystemLanguage() {
        return null;
    }
    setRequiredFormats(mimeTypes) {
        this.requiredFormats = mimeTypes;
    }
    getRequiredFormats() {
        return this.requiredFormats;
    }
    setRequiredFonts(fontNames) {
        this.requiredFonts = fontNames;
    }
    getRequiredFonts() {
        return this.requiredFonts;
    }
}
export class SvgPreserveAspectRatioContainer extends SvgConditionalContainer {
    constructor() {
        super(...arguments);
        this.preserveAspectRatio = null;
    }
}
export class SvgViewBoxContainer extends SvgPreserveAspectRatioContainer {
}
export class Svg extends SvgViewBoxContainer {
    getNodeName() {
        return "svg";
    }
}
export class Group extends SvgConditionalContainer {
    setTransform(transform) {
        this.transform = transform;
    }
    getNodeName() {
        return "group";
    }
}
export class Defs extends Group {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "defs";
    }
}
export class GraphicsElement extends SvgConditionalElement {
    setTransform(transform) {
        this.transform = transform;
    }
}
export class A extends Group {
    getNodeName() {
        return "a";
    }
}
export class Use extends Group {
    getNodeName() {
        return "use";
    }
}
export class Path2 extends GraphicsElement {
    getNodeName() {
        return "path";
    }
}
export class Rect2 extends GraphicsElement {
    getNodeName() {
        return "rect";
    }
}
export class Circle2 extends GraphicsElement {
    getNodeName() {
        return "circle";
    }
}
export class Ellipse2 extends GraphicsElement {
    getNodeName() {
        return "ellipse";
    }
}
export class Line2 extends GraphicsElement {
    getNodeName() {
        return "line";
    }
}
export class PolyLine extends GraphicsElement {
    getNodeName() {
        return "polyline";
    }
}
export class Polygon2 extends PolyLine {
    getNodeName() {
        return "polygon";
    }
}
export class TextContainer extends SvgConditionalContainer {
    addChild(elem) {
        try {
            this.children.push(elem);
        }
        catch (e) {
        }
    }
}
export class TextPositionedContainer extends TextContainer {
    constructor() {
        super(...arguments);
        this.x = null;
        this.y = null;
        this.dx = null;
        this.dy = null;
    }
}
export class Text2 extends TextPositionedContainer {
    setTransform(transform) {
        this.transform = transform;
    }
    getNodeName() {
        return "text";
    }
}
export class TSpan extends TextPositionedContainer {
    setTextRoot(obj) {
        this.textRoot = obj;
    }
    getTextRoot() {
        return this.textRoot;
    }
    getNodeName() {
        return "tspan";
    }
}
export class TextSequence extends SvgObject {
    constructor(text) {
        super();
        this.text = text;
    }
    toString() {
        return "TextChild: '" + this.text + "'";
    }
    setTextRoot(obj) {
        this.textRoot = obj;
    }
    getTextRoot() {
        return this.textRoot;
    }
}
export class TRef extends TextContainer {
    setTextRoot(obj) {
        this.textRoot = obj;
    }
    getTextRoot() {
        return this.textRoot;
    }
    getNodeName() {
        return "tref";
    }
}
export class TextPath extends TextContainer {
    setTextRoot(obj) {
        this.textRoot = obj;
    }
    getTextRoot() {
        return this.textRoot;
    }
    getNodeName() {
        return "textPath";
    }
}
export class Switch extends Group {
    getNodeName() {
        return "switch";
    }
}
export class Symbol extends SvgViewBoxContainer {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "symbol";
    }
}
export class Marker extends SvgViewBoxContainer {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "marker";
    }
}
export class GradientElement extends SvgElementBase {
    constructor() {
        super(...arguments);
        this.children = new Array();
        this.type = "SvgContainer";
    }
    getChildren() {
        return this.children;
    }
    addChild(elem) {
        if (elem instanceof Stop) {
            this.children.push(elem);
        }
        else {
            throw new SVGParseException("Gradient elements cannot contain " + elem + " elements.");
        }
    }
}
export class Stop extends SvgElementBase {
    constructor() {
        super(...arguments);
        this.type = "SvgContainer";
    }
    getChildren() {
        return [];
    }
    addChild(elem) {
    }
    getNodeName() {
        return "stop";
    }
}
export class SvgLinearGradient extends GradientElement {
    getNodeName() {
        return "linearGradient";
    }
}
export class SvgRadialGradient extends GradientElement {
    getNodeName() {
        return "radialGradient";
    }
}
export class ClipPath extends Group {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "clipPath";
    }
}
export class Pattern extends SvgViewBoxContainer {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "pattern";
    }
}
export class Image2 extends SvgPreserveAspectRatioContainer {
    setTransform(transform) {
        this.transform = transform;
    }
    getNodeName() {
        return "image";
    }
}
export class View extends SvgViewBoxContainer {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return View.NODE_NAME;
    }
}
View.NODE_NAME = "view";
export class Mask extends SvgConditionalContainer {
    constructor() {
        super(...arguments);
        this.isRender = false;
    }
    getNodeName() {
        return "mask";
    }
}
export class SolidColor extends SvgElementBase {
    constructor() {
        super(...arguments);
        this.type = "SvgContainer";
    }
    getChildren() {
        return new Array();
    }
    addChild(elem) {
    }
    getNodeName() {
        return "solidColor";
    }
}
export class PathDefinition {
    constructor() {
        this.commandsLength = 0;
        this.coordsLength = 0;
        this.commands = new Array(8);
        this.coords = new Array(16);
    }
    isEmpty() {
        return this.commandsLength == 0;
    }
    addCommand(value) {
        if (this.commandsLength == this.commands.length) {
            let newCommands = new Array(this.commands.length * 2);
            for (let i = 0; i < this.commands.length; i++) {
                newCommands[i] = this.commands[i];
            }
            this.commands = newCommands;
        }
        this.commands[this.commandsLength++] = value;
    }
    coordsEnsure(num) {
        if (this.coords.length < (this.coordsLength + num)) {
            let newCoords = new Array(this.coords.length * 2);
            for (let i = 0; i < this.coords.length; i++) {
                newCoords[i] = this.coords[i];
            }
            this.coords = newCoords;
        }
    }
    moveTo(x, y) {
        this.addCommand(PathDefinition.MOVETO);
        this.coordsEnsure(2);
        this.coords[this.coordsLength++] = x;
        this.coords[this.coordsLength++] = y;
    }
    lineTo(x, y) {
        this.addCommand(PathDefinition.LINETO);
        this.coordsEnsure(2);
        this.coords[this.coordsLength++] = x;
        this.coords[this.coordsLength++] = y;
    }
    cubicTo(x1, y1, x2, y2, x3, y3) {
        this.addCommand(PathDefinition.CUBICTO);
        this.coordsEnsure(6);
        this.coords[this.coordsLength++] = x1;
        this.coords[this.coordsLength++] = y1;
        this.coords[this.coordsLength++] = x2;
        this.coords[this.coordsLength++] = y2;
        this.coords[this.coordsLength++] = x3;
        this.coords[this.coordsLength++] = y3;
    }
    quadTo(x1, y1, x2, y2) {
        this.addCommand(PathDefinition.QUADTO);
        this.coordsEnsure(4);
        this.coords[this.coordsLength++] = x1;
        this.coords[this.coordsLength++] = y1;
        this.coords[this.coordsLength++] = x2;
        this.coords[this.coordsLength++] = y2;
    }
    arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        let arc = PathDefinition.ARCTO | (largeArcFlag ? 2 : 0) | (sweepFlag ? 1 : 0);
        this.addCommand(arc);
        this.coordsEnsure(5);
        this.coords[this.coordsLength++] = rx;
        this.coords[this.coordsLength++] = ry;
        this.coords[this.coordsLength++] = xAxisRotation;
        this.coords[this.coordsLength++] = x;
        this.coords[this.coordsLength++] = y;
    }
    close() {
        this.addCommand(PathDefinition.CLOSE);
    }
    enumeratePath(handler) {
        let coordsPos = 0;
        for (var commandPos = 0; commandPos < this.commandsLength; commandPos++) {
            let command = this.commands[commandPos];
            switch (command) {
                case PathDefinition.MOVETO:
                    handler.moveTo(this.coords[coordsPos++], this.coords[coordsPos++]);
                    break;
                case PathDefinition.LINETO:
                    handler.lineTo(this.coords[coordsPos++], this.coords[coordsPos++]);
                    break;
                case PathDefinition.CUBICTO:
                    handler.cubicTo(this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++]);
                    break;
                case PathDefinition.QUADTO:
                    handler.quadTo(this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++]);
                    break;
                case PathDefinition.CLOSE:
                    handler.close();
                    break;
                default:
                    let largeArcFlag = (command & 2) != 0;
                    let sweepFlag = (command & 1) != 0;
                    handler.arcTo(this.coords[coordsPos++], this.coords[coordsPos++], this.coords[coordsPos++], largeArcFlag, sweepFlag, this.coords[coordsPos++], this.coords[coordsPos++]);
            }
        }
    }
}
PathDefinition.MOVETO = 0;
PathDefinition.LINETO = 1;
PathDefinition.CUBICTO = 2;
PathDefinition.QUADTO = 3;
PathDefinition.ARCTO = 4;
PathDefinition.CLOSE = 8;
//# sourceMappingURL=SVGBase.js.map