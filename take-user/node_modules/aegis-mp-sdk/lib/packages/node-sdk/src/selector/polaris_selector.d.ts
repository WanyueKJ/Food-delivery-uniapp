/// <reference types="node" />
import * as url from 'url';
import { SelectorConf } from '../interface/selector';
import { SelectorBase, SelectorResponse, SelectorUpdateInfo } from './selector_base';
interface PolarisInfo {
    namespace: string;
    service: string;
}
export default class PolarisSelector extends SelectorBase {
    protected static consumer: any;
    protected parsedUrl: url.UrlWithStringQuery;
    protected namespace: string;
    protected logPolarisInfo: PolarisInfo;
    protected speedPolarisInfo: PolarisInfo;
    constructor(selectorConf: SelectorConf);
    select(originUrl: string): Promise<[SelectorResponse, Error | null]>;
    update(ctx: any, meta: SelectorUpdateInfo): void;
    protected parseUrlToPolarisInfo(u: string): PolarisInfo;
}
export {};
