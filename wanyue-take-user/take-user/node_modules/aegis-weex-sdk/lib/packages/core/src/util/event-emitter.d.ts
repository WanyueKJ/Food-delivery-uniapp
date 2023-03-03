export interface InterfaceEventEmitter {
    indexOf: Function;
    on: Function;
    one: Function;
    emit: Function;
    remove: Function;
    clear: Function;
}
export declare class EventEmitter {
    private eventsList;
    constructor();
    indexOf(array: any[], value: any): number;
    on(name: string, callback: Function, type?: number): this | undefined;
    one(name: string, callback: Function): void;
    emit: (name: string, data: any) => this | undefined;
    remove(name: string, callback: Function): this | null | undefined;
    clear(): void;
}
