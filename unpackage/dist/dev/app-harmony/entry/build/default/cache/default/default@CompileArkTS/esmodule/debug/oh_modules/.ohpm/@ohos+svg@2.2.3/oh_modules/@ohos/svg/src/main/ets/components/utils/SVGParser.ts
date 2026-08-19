import type { SVGBase } from './SVGBase';
import type { SVGExternalFileResolver } from '../SVGExternalFileResolver';
export interface SVGParser {
    parseString(str: string): SVGBase;
    setInternalEntitiesEnabled(enable: boolean): SVGParser;
    setExternalFileResolver(fileResolver: SVGExternalFileResolver): SVGParser;
}
