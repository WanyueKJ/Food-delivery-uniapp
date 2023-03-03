/// <reference types="node" />
import { SelectorBase, SelectorResponse } from './selector_base';
import * as url from 'url';
import { SelectorConf } from '../interface/selector';
export default class IPSelector extends SelectorBase {
    protected parsedUrl: url.UrlWithStringQuery;
    constructor(selectorConf: SelectorConf);
    select(originUrl: string): Promise<[SelectorResponse, Error | null]>;
    update(): void;
}
