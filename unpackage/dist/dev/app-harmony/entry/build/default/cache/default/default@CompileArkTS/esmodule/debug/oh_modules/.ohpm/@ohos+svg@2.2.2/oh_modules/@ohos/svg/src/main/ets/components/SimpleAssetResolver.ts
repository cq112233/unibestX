import { SVGExternalFileResolver } from "@normalized:N&&&@ohos/svg/src/main/ets/components/SVGExternalFileResolver&2.2.2";
export default class SimpleAssetResolver extends SVGExternalFileResolver {
    private static TAG: string = "SimpleAssetResolver";
    private assetManager: any;
    public constructor(assetManager: any) {
        super();
        this.assetManager = assetManager;
    }
    private supportedFormats: Array<String> = new Array();
    public resolveFont(fontFamily: String, fontWeight: number, fontStyle: string, fontStretch: number): any {
        return null;
    }
    public resolveImage(filename: String): any {
        console.info(SimpleAssetResolver.TAG + "resolveImage(" + filename + ")");
        try {
        }
        catch (e) {
            return null;
        }
    }
    isFormatSupported(mimeType: string): boolean {
        return this.supportedFormats.indexOf(mimeType) >= 0;
    }
    public resolveCSSStyleSheet(url: string): string {
        console.info(SimpleAssetResolver.TAG, "resolveCSSStyleSheet(" + url + ")");
        return this.getAssetAsString(url);
    }
    private getAssetAsString(url: string): string {
        return "";
    }
}
