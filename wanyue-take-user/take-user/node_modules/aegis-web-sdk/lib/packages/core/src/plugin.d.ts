import Core from './core';
declare type PluginConfig = boolean | any;
interface PluginOption<Aegis> {
    name: string;
    init?: (this: PluginOption<Aegis> & PluginMethod<Aegis>, config: PluginConfig) => void;
    onNewAegis?: (this: PluginOption<Aegis> & PluginMethod<Aegis>, aegis: Aegis, option: PluginConfig) => void;
    destroy?: Function;
    [key: string]: any;
}
interface PluginMethod<Aegis> {
    $walk: (cb: (aegis: Aegis, config: PluginConfig) => void) => void;
    $getConfig: (aegis: Aegis) => PluginConfig;
    [key: string]: any;
}
export default class Plugin<Aegis = Core> {
    aegisPlugin: boolean;
    name: string;
    option: PluginOption<Aegis>;
    private instances;
    private inited;
    constructor(option: PluginOption<Aegis>);
    patch(aegis: Aegis): void;
    unpatch(aegis: Aegis): void;
    countInstance(): number;
    uninstall(aegis: Aegis): void;
    private walk;
    private canUse;
    private getConfig;
    private exist;
    private triggerInit;
    private triggerOnNewAegis;
}
export {};
