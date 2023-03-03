import { SendFail, SendOption, SendSuccess } from "../../../core/src";
import { BaseProtocal, ProtocolOptions } from './protocol_base';
export default class HttpProtocal extends BaseProtocal {
    protected isHttps: boolean;
    protected agent: any;
    constructor(options: ProtocolOptions);
    send(options: SendOption, opt: {
        success?: SendSuccess;
        fail?: SendFail;
        bean?: string;
    }): Promise<void>;
}
