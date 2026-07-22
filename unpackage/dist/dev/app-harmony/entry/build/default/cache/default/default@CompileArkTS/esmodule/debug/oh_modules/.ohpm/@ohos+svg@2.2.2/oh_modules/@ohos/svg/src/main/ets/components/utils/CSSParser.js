import { Style } from '@normalized:N&&&@ohos/svg/src/main/ets/components/utils/Style&2.2.2';
import { CSSTextScanner } from '@normalized:N&&&@ohos/svg/src/main/ets/components/utils/CSSTextScanner&2.2.2';
import LogUtil from '@normalized:N&&&@ohos/svg/src/main/ets/components/LogUtil&2.2.2';
export class CSSParser {
    constructor(rendererMediaType, source, externalFileResolver) {
        this.inMediaRule = false;
        if (rendererMediaType == undefined) {
            this.deviceMediaType = "screen";
        }
        if (source == undefined) {
            source = Source.Document;
        }
        if (externalFileResolver == undefined) {
            externalFileResolver == null;
        }
        this.deviceMediaType = rendererMediaType;
        this.source = source;
        this.externalFileResolver = externalFileResolver;
    }
    parse(sheet) {
        let scan = new CSSTextScanner(sheet);
        scan.skipWhitespace();
        return this.parseRuleset(scan);
    }
    static mediaMatches(mediaListStr, rendererMediaType) {
        let scan = new CSSTextScanner(mediaListStr);
        scan.skipWhitespace();
        let mediaList = CSSParser.parseMediaList(scan);
        return this.mediaMatchesArray(mediaList, rendererMediaType);
    }
    static mediaMatchesArray(mediaList, rendererMediaType) {
        if (mediaList.length == 0)
            return true;
        for (let i = 0; i < mediaList.length; i++) {
            if (mediaList[i] == "all" || mediaList[i] == rendererMediaType)
                return true;
        }
        return false;
    }
    static parseMediaList(scan) {
        let typeList = new Array();
        while (!scan.empty()) {
            let type = scan.nextWord();
            if (type == null)
                break;
            try {
                typeList.push(type);
            }
            catch (e) {
            }
            if (!scan.skipCommaWhitespace())
                break;
        }
        return typeList;
    }
    parseAtRule(ruleset, scan) {
        let atKeyword = scan.nextIdentifier();
        scan.skipWhitespace();
        if (atKeyword == null) {
            LogUtil.error("Invalid '@' rule");
            throw new Error("Invalid '@' rule");
        }
        if (!this.inMediaRule && atKeyword == "media") {
            let mediaList = CSSParser.parseMediaList(scan);
            if (!scan.consume('{')) {
                LogUtil.error("Invalid '@' rule");
                throw new Error("Invalid @media rule: missing rule set");
            }
            scan.skipWhitespace();
            if (CSSParser.mediaMatchesArray(mediaList, this.deviceMediaType)) {
                this.inMediaRule = true;
                ruleset.addAll(this.parseRuleset(scan));
                this.inMediaRule = false;
            }
            else {
                this.parseRuleset(scan);
            }
            if (!scan.empty() && !scan.consume('}')) {
                LogUtil.error("Invalid @media rule: expected '}' at end of rule set");
                throw new Error("Invalid @media rule: expected '}' at end of rule set");
            }
        }
        else if (!this.inMediaRule && atKeyword == "import") {
            let file = scan.nextURL();
            if (file == null)
                file = scan.nextCSSString();
            if (file == null) {
                LogUtil.error("Invalid @import rule: expected string or url()");
                throw new Error("Invalid @import rule: expected string or url()");
            }
            scan.skipWhitespace();
            let mediaList = CSSParser.parseMediaList(scan);
            if (!scan.empty() && !scan.consume(';')) {
                LogUtil.error("Invalid @media rule: expected '}' at end of rule set");
                throw new Error("Invalid @media rule: expected '}' at end of rule set");
            }
            if (this.externalFileResolver != null && CSSParser.mediaMatchesArray(mediaList, this.deviceMediaType)) {
                let css = this.externalFileResolver.resolveCSSStyleSheet(file);
                if (css == null)
                    return;
                ruleset.addAll(this.parse(css));
            }
        }
        else {
            this.skipAtRule(scan);
        }
        scan.skipWhitespace();
    }
    skipAtRule(scan) {
        let depth = 0;
        while (!scan.empty()) {
            let ch = scan.nextChar();
            if (ch == ';' && depth == 0)
                return;
            if (ch == '{')
                depth++;
            else if (ch == '}' && depth > 0) {
                if (--depth == 0)
                    return;
            }
        }
    }
    parseRuleset(scan) {
        let ruleset = new Ruleset();
        try {
            while (!scan.empty()) {
                if (scan.consume("<!--"))
                    continue;
                if (scan.consume("-->"))
                    continue;
                if (scan.consume('@')) {
                    this.parseAtRule(ruleset, scan);
                    continue;
                }
                if (this.parseRule(ruleset, scan))
                    continue;
                break;
            }
        }
        catch (e) {
            console.info(CSSParser.TAG + "CSS parser terminated early due to error: " + e.getMessage());
            LogUtil.error(CSSParser.TAG + "CSS parser terminated early due to error: " + e.getMessage());
        }
        return ruleset;
    }
    parseRule(ruleset, scan) {
        let selectors = scan.nextSelectorGroup();
        if (selectors != null && selectors.length > 0) {
            if (!scan.consume('{')) {
                LogUtil.error("Malformed rule block: expected '{'");
                throw new Error("Malformed rule block: expected '{'");
            }
            scan.skipWhitespace();
            let ruleStyle = this.parseDeclarations(scan);
            scan.skipWhitespace();
            for (let i = 0; i < selectors.length; i++) {
                if (selectors[i] != undefined) {
                    ruleset.add(new Rule(selectors[i], ruleStyle, this.source));
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    parseDeclarations(scan) {
        let ruleStyle = new Style();
        do {
            let propertyName = scan.nextIdentifier();
            scan.skipWhitespace();
            if (!scan.consume(':')) {
                LogUtil.error('%{public}s', "Expected ':'");
                throw new Error("Expected ':'");
            }
            scan.skipWhitespace();
            let propertyValue = scan.nextPropertyValue();
            if (propertyValue == null) {
                LogUtil.error("Expected property value");
                throw new Error("Expected property value");
            }
            scan.skipWhitespace();
            if (scan.consume('!')) {
                scan.skipWhitespace();
                if (!scan.consume("important")) {
                    LogUtil.error("Malformed rule set: found unexpected '!'");
                    throw new Error("Malformed rule set: found unexpected '!'");
                }
                scan.skipWhitespace();
            }
            scan.consume(';');
            let attr = "{\"" + propertyName + "\":\"" + propertyValue + "\"}";
            Style.processStyleProperty(ruleStyle, JSON.parse(attr), false);
            scan.skipWhitespace();
        } while (!scan.empty() && !scan.consume('}'));
        return ruleStyle;
    }
    static parseClassAttribute(val) {
        let scan = new CSSTextScanner(val);
        let classNameList = null;
        while (!scan.empty()) {
            let className = scan.nextToken();
            if (className == null)
                continue;
            if (classNameList == null)
                classNameList = new Array();
            classNameList.push(className);
            scan.skipWhitespace();
        }
        return classNameList;
    }
    static ruleMatch(ruleMatchContext, selector, obj) {
        if (selector.size() == 1)
            return this.selectorMatch(ruleMatchContext, selector.get(0), obj);
        let ancestors = new Array();
        let parent = obj.parent;
        while (parent != null) {
            ancestors.push(parent);
            // @ts-ignore
            parent = parent.parent;
        }
        return this.ruleMatch2(ruleMatchContext, selector, selector.size() - 1, ancestors, ancestors.length - 1, obj);
    }
    static ruleMatch2(ruleMatchContext, selector, selPartPos, ancestors, ancestorsPos, obj) {
        let sel = selector.get(selPartPos);
        if (!this.selectorMatch(ruleMatchContext, sel, obj))
            return false;
        if (sel.combinator == Combinator.DESCENDANT) {
            if (selPartPos == 0)
                return true;
            while (ancestorsPos >= 0) {
                if (this.ruleMatchOnAncestors(ruleMatchContext, selector, selPartPos - 1, ancestors, ancestorsPos))
                    return true;
                ancestorsPos--;
            }
            return false;
        }
        else if (sel.combinator == Combinator.CHILD) {
            return this.ruleMatchOnAncestors(ruleMatchContext, selector, selPartPos - 1, ancestors, ancestorsPos);
        }
        else {
            let childPos = this.getChildPosition(ancestors, ancestorsPos, obj);
            if (childPos <= 0)
                return false;
            let prevSibling = obj.parent.getChildren()[childPos - 1];
            return this.ruleMatch2(ruleMatchContext, selector, selPartPos - 1, ancestors, ancestorsPos, prevSibling);
        }
    }
    static ruleMatchOnAncestors(ruleMatchContext, selector, selPartPos, ancestors, ancestorsPos) {
        let sel = selector.get(selPartPos);
        // @ts-ignore
        let obj = ancestors[ancestorsPos];
        if (!this.selectorMatch(ruleMatchContext, sel, obj))
            return false;
        if (sel.combinator == Combinator.DESCENDANT) {
            if (selPartPos == 0)
                return true;
            while (ancestorsPos > 0) {
                if (this.ruleMatchOnAncestors(ruleMatchContext, selector, selPartPos - 1, ancestors, --ancestorsPos))
                    return true;
            }
            return false;
        }
        else if (sel.combinator == Combinator.CHILD) {
            return this.ruleMatchOnAncestors(ruleMatchContext, selector, selPartPos - 1, ancestors, ancestorsPos - 1);
        }
        else {
            let childPos = this.getChildPosition(ancestors, ancestorsPos, obj);
            if (childPos <= 0)
                return false;
            let prevSibling = obj.parent.getChildren()[childPos - 1];
            return this.ruleMatch2(ruleMatchContext, selector, selPartPos - 1, ancestors, ancestorsPos, prevSibling);
        }
    }
    static getChildPosition(ancestors, ancestorsPos, obj) {
        if (ancestorsPos < 0)
            return 0;
        if (ancestors[ancestorsPos] != obj.parent)
            return -1;
        let childPos = 0;
        for (let i = 0; i < obj.parent.getChildren().length; i++) {
            if (obj.parent.getChildren()[i] == obj)
                return childPos;
            childPos++;
        }
        return -1;
    }
    static selectorMatch(ruleMatchContext, sel, obj) {
        if (sel.tag != null && sel.tag != obj.getNodeName().toLowerCase())
            return false;
        if (sel.attribs != null) {
            let count = sel.attribs.length;
            for (let i = 0; i < count; i++) {
                let attr = sel.attribs[i];
                switch (attr.name) {
                    case this.ID:
                        if (attr.value != obj.id)
                            return false;
                        break;
                    case this.CLASS:
                        if (obj.classNames == null)
                            return false;
                        if (obj.classNames.indexOf(attr.value) == -1)
                            return false;
                        break;
                    default:
                        return false;
                }
            }
        }
        if (sel.pseudos != null) {
            let count = sel.pseudos.length;
            for (let i = 0; i < count; i++) {
                let pseudo = sel.pseudos[i];
                if (!pseudo.matches(ruleMatchContext, obj))
                    return false;
            }
        }
        return true;
    }
}
CSSParser.TAG = "CSSParser";
CSSParser.CSS_MIME_TYPE = "text/css";
CSSParser.ID = "id";
CSSParser.CLASS = "class";
CSSParser.SPECIFICITY_ID_ATTRIBUTE = 1000000;
CSSParser.SPECIFICITY_ATTRIBUTE_OR_PSEUDOCLASS = 1000;
CSSParser.SPECIFICITY_ELEMENT_OR_PSEUDOELEMENT = 1;
export var Combinator;
(function (Combinator) {
    Combinator[Combinator["DESCENDANT"] = 0] = "DESCENDANT";
    Combinator[Combinator["CHILD"] = 1] = "CHILD";
    Combinator[Combinator["FOLLOWS"] = 2] = "FOLLOWS";
})(Combinator || (Combinator = {}));
export var AttribOp;
(function (AttribOp) {
    AttribOp[AttribOp["EXISTS"] = 0] = "EXISTS";
    AttribOp[AttribOp["EQUALS"] = 1] = "EQUALS";
    AttribOp[AttribOp["INCLUDES"] = 2] = "INCLUDES";
    AttribOp[AttribOp["DASHMATCH"] = 3] = "DASHMATCH";
})(AttribOp || (AttribOp = {}));
export class PseudoClassIdents {
}
PseudoClassIdents.target = "target";
PseudoClassIdents.root = "root";
PseudoClassIdents.nth_child = "nth_child";
PseudoClassIdents.nth_last_child = "nth_last_child";
PseudoClassIdents.nth_of_type = "nth_of_type";
PseudoClassIdents.nth_last_of_type = "nth_last_of_type";
PseudoClassIdents.first_child = "first_child";
PseudoClassIdents.last_child = "last_child";
PseudoClassIdents.first_of_type = "first_of_type";
PseudoClassIdents.last_of_type = "last_of_type";
PseudoClassIdents.only_child = "only_child";
PseudoClassIdents.only_of_type = "only_of_type";
PseudoClassIdents.empty = "empty";
PseudoClassIdents.not = "not";
PseudoClassIdents.link = "link";
PseudoClassIdents.visited = "visited";
PseudoClassIdents.hover = "hover";
PseudoClassIdents.active = "active";
PseudoClassIdents.focus = "focus";
PseudoClassIdents.enabled = "enabled";
PseudoClassIdents.disabled = "disabled";
PseudoClassIdents.checked = "checked";
PseudoClassIdents.indeterminate = "indeterminate";
PseudoClassIdents.lang = "lang";
export var Source;
(function (Source) {
    Source[Source["Document"] = 0] = "Document";
    Source[Source["RenderOptions"] = 1] = "RenderOptions";
})(Source || (Source = {}));
export class Attrib {
    constructor(name, op, value) {
        this.name = name;
        this.operation = op;
        this.value = value;
    }
}
export class SimpleSelector {
    constructor(combinator, tag) {
        this.attribs = null;
        this.pseudos = null;
        this.combinator = (combinator != null) ? combinator : Combinator.DESCENDANT;
        this.tag = tag;
    }
    addAttrib(attrName, op, attrValue) {
        if (this.attribs == null)
            this.attribs = new Array();
        this.attribs.push(new Attrib(attrName, op, attrValue));
    }
    addPseudo(pseudo) {
        if (this.pseudos == null)
            this.pseudos = new Array();
        this.pseudos.push(pseudo);
    }
}
export class Ruleset {
    constructor() {
        this.rules = null;
    }
    add(rule) {
        if (this.rules == null)
            this.rules = new Array();
        for (let i = 0; i < this.rules.length; i++) {
            let nextRule = this.rules[i];
            if (nextRule.selector.specificity > rule.selector.specificity) {
                this.rules.push(rule);
                return;
            }
        }
        this.rules.push(rule);
    }
    addAll(rules) {
        if (rules.rules == null)
            return;
        if (this.rules == null)
            this.rules = new Array();
        for (let i = 0; i < rules.rules.length; i++) {
            this.add(rules.rules[i]);
        }
    }
    getRules() {
        return this.rules;
    }
    isEmpty() {
        return this.rules == null || this.rules.length == 0;
    }
    ruleCount() {
        return (this.rules != null) ? this.rules.length : 0;
    }
    removeFromSource(sourceToBeRemoved) {
        if (this.rules == null)
            return;
        for (let i = 0; i < this.rules.length; i++) {
            if (this.rules[i].source == sourceToBeRemoved)
                this.rules.splice(i, 1);
        }
    }
}
export class Rule {
    constructor(selector, style, source) {
        this.selector = selector;
        this.style = style;
        this.source = source;
    }
}
export class Selector {
    constructor() {
        this.simpleSelectors = null;
        this.specificity = 0;
    }
    add(part) {
        if (this.simpleSelectors == null)
            this.simpleSelectors = new Array();
        this.simpleSelectors.push(part);
    }
    size() {
        return (this.simpleSelectors == null) ? 0 : this.simpleSelectors.length;
    }
    get(i) {
        return this.simpleSelectors[i];
    }
    isEmpty() {
        return (this.simpleSelectors == null) || this.simpleSelectors.length == 0;
    }
    addedIdAttribute() {
        this.specificity += CSSParser.SPECIFICITY_ID_ATTRIBUTE;
    }
    addedAttributeOrPseudo() {
        this.specificity += CSSParser.SPECIFICITY_ATTRIBUTE_OR_PSEUDOCLASS;
    }
    addedElement() {
        this.specificity += CSSParser.SPECIFICITY_ELEMENT_OR_PSEUDOELEMENT;
    }
}
export class RuleMatchContext {
}
export class PseudoClassAnPlusB {
    constructor(a, b, isFromStart, isOfType, nodeName) {
        this.a = a;
        this.b = b;
        this.isFromStart = isFromStart;
        this.isOfType = isOfType;
        this.nodeName = nodeName;
    }
    matches(ruleMatchContext, obj) {
        let nodeNameToCheck = (this.isOfType && this.nodeName == null) ? obj.getNodeName() : this.nodeName;
        let childPos = 0;
        let childCount = 1;
        if (obj.parent != null) {
            childCount = 0;
            for (let i = 0; i < obj.parent.getChildren().length; i++) {
                let child = obj.parent.getChildren()[i];
                if (child == obj)
                    childPos = childCount;
                if (nodeNameToCheck == null || child.getNodeName() == nodeNameToCheck)
                    childCount++;
            }
        }
        childPos = this.isFromStart ? childPos + 1
            : childCount - childPos;
        if (this.a == 0) {
            return childPos == this.b;
        }
        return ((childPos - this.b) % this.a) == 0 &&
            (childPos - this.b == 0 || (childPos - this.b > 0 ? 1 : -1) == (this.a > 0 ? 1 : -1));
    }
}
export class PseudoClassOnlyChild {
    constructor(isOfType, nodeName) {
        this.isOfType = isOfType;
        this.nodeName = nodeName;
    }
    matches(ruleMatchContext, obj) {
        let nodeNameToCheck = (this.isOfType && this.nodeName == null) ? obj.getNodeName() : this.nodeName;
        let childCount = 1;
        if (obj.parent != null) {
            childCount = 0;
            for (let i = 0; i < obj.parent.getChildren().length; i++) {
                let child = obj.parent.getChildren()[i];
                if (nodeNameToCheck == null || child.getNodeName() == nodeNameToCheck)
                    childCount++;
            }
        }
        return (childCount == 1);
    }
}
export class PseudoClassRoot {
    matches(ruleMatchContext, obj) {
        return obj.parent == null;
    }
}
export class PseudoClassEmpty {
    matches(ruleMatchContext, obj) {
        // @ts-ignore
        if (obj instanceof SvgContainer)
            // @ts-ignore
            return obj.getChildren().length == 0;
        else
            return true;
    }
}
export class PseudoClassNot {
    constructor(selectorGroup) {
        this.selectorGroup = selectorGroup;
    }
    matches(ruleMatchContext, obj) {
        for (let i = 0; i < this.selectorGroup.length; i++) {
            if (CSSParser.ruleMatch(ruleMatchContext, this.selectorGroup[i], obj))
                return false;
        }
        return true;
    }
    getSpecificity() {
        let highest = Number.MIN_VALUE;
        for (let i = 0; i < this.selectorGroup.length; i++) {
            if (this.selectorGroup[i].specificity > highest)
                highest = this.selectorGroup[i].specificity;
        }
        return highest;
    }
}
export class PseudoClassTarget {
    matches(ruleMatchContext, obj) {
        if (ruleMatchContext != null)
            return obj == ruleMatchContext.targetElement;
        else
            return false;
    }
}
export class PseudoClassNotSupported {
    constructor(clazz) {
        this.clazz = clazz;
    }
    matches(ruleMatchContext, obj) {
        return false;
    }
}
//# sourceMappingURL=CSSParser.js.map