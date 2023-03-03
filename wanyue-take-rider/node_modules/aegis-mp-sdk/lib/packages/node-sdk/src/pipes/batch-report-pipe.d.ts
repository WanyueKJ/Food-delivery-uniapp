import { Pipe, Config } from "../../../core/src";
export declare const createBatchReportPipe: (config?: Config | undefined, option?: {
    maxLength?: number | undefined;
    batchNum?: number | undefined;
    allowNextRound?: (() => boolean) | undefined;
} | undefined) => Pipe;
