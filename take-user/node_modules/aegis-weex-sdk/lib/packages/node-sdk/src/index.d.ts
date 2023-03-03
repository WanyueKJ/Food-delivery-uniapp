import Core, { Config, SendFail, SendOption, SendSuccess } from "../../core/src";
import { BaseProtocal } from './protocol/protocol_base';
import { SelectorBase } from './selector/selector_base';
export default class Aegis extends Core {
    static sessionID: string;
    reportSpeedLog: import("../../core/src").Pipeline<any, any>;
    protected selector: SelectorBase;
    protected reqProtocol: BaseProtocal;
    constructor(config: Config);
    request(options: SendOption, success?: SendSuccess, fail?: SendFail): void;
    setSessionID(sessionId?: string): void;
    protected initSelector(): void;
    protected initProtocol(): void;
    get getBean(): string;
}
