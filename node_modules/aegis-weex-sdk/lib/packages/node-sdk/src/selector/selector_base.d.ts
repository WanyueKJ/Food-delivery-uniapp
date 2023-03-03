import { SelectorConf } from '../interface/selector';
export declare enum SelectorTypeEnum {
    IP = 0,
    HOST = 1,
    L5 = 2,
    POLARIS = 3
}
export interface SelectorResponse {
    url?: string;
    type?: SelectorTypeEnum;
    ctx?: any;
}
export interface SelectorUpdateInfo {
    success: boolean;
    cost?: number;
    code?: number;
}
export declare type SelectorClassType = new (selectorConf: SelectorConf) => SelectorBase;
export declare abstract class SelectorBase {
    selectorConf: SelectorConf;
    protected defaultSpeedBaseUrl: string;
    protected defaultLogBaseurl: string;
    constructor(selectorConf: SelectorConf);
    protected replaceUrl(originUrl: string, speedBaseUrl: string, logBaseUrl: string): string;
    abstract select(originUrl: string): Promise<[SelectorResponse, Error | null]>;
    abstract update(ctx: any, meta: SelectorUpdateInfo): void;
}
