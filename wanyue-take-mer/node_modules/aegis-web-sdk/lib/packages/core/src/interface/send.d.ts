export interface SendOption {
    url: string;
    method?: 'get' | 'post';
    contentType?: string;
    data?: any;
    addBean?: boolean;
    from?: string;
    beanFilter?: string[];
    type?: SendType;
    log?: any;
    success?: (data: any) => void;
    fail?: (err: any) => void;
    sendBeacon?: boolean;
    requestConfig?: {
        [key: string]: any;
    };
}
export declare enum SendType {
    LOG = "log",
    SPEED = "speed",
    PERFORMANCE = "performance",
    OFFLINE = "offline",
    WHITE_LIST = "whiteList",
    VITALS = "vitals",
    PV = "pv",
    CUSTOM_PV = "customPV",
    EVENT = "event",
    CUSTOM = "custom",
    SDK_ERROR = "sdkError",
    SET_DATA = "setData",
    LOAD_PACKAGE = "loadPackage"
}
export declare type SendSuccess = (data: any) => void;
export declare type SendFail = (err: any) => void;
