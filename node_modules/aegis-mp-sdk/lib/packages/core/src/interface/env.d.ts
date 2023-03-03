export declare enum Environment {
    production = "production",
    development = "development",
    gray = "gray",
    pre = "pre",
    daily = "daily",
    local = "local",
    test = "test",
    others = "others"
}
export declare const isEnvironment: (val: string) => boolean;
