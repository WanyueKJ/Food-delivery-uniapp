import { SelectorBase } from '../selector/selector_base';
import { Config, SendOption, SendSuccess, SendFail } from "../../../core/src";
export interface ProtocolOptions extends Pick<Config, 'protocol'> {
    selector: SelectorBase;
    keepalive: boolean;
}
export declare type ProtocalClassType = new (options: ProtocolOptions) => BaseProtocal;
export declare abstract class BaseProtocal {
    protected selector: SelectorBase;
    protected protocol: Config['protocol'];
    protected keepalive: boolean;
    constructor(options: ProtocolOptions);
    abstract send(options: SendOption, opt: {
        success?: SendSuccess;
        fail?: SendFail;
        bean?: string;
    }): void;
}
