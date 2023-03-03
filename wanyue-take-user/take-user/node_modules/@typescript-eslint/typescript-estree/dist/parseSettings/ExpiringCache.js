"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExpiringCache_cacheDurationSeconds;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiringCache = exports.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = void 0;
exports.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = 30;
const ZERO_HR_TIME = [0, 0];
/**
 * A map with key-level expiration.
 */
class ExpiringCache {
    constructor(cacheDurationSeconds) {
        _ExpiringCache_cacheDurationSeconds.set(this, void 0);
        /**
         * The mapping of path-like string to the resolved TSConfig(s)
         */
        this.map = new Map();
        __classPrivateFieldSet(this, _ExpiringCache_cacheDurationSeconds, cacheDurationSeconds, "f");
    }
    set(key, value) {
        this.map.set(key, {
            value,
            lastSeen: __classPrivateFieldGet(this, _ExpiringCache_cacheDurationSeconds, "f") === 'Infinity'
                ? // no need to waste time calculating the hrtime in infinity mode as there's no expiry
                    ZERO_HR_TIME
                : process.hrtime(),
        });
        return this;
    }
    get(key) {
        const entry = this.map.get(key);
        if ((entry === null || entry === void 0 ? void 0 : entry.value) != null) {
            if (__classPrivateFieldGet(this, _ExpiringCache_cacheDurationSeconds, "f") === 'Infinity') {
                return entry.value;
            }
            const ageSeconds = process.hrtime(entry.lastSeen)[0];
            if (ageSeconds < __classPrivateFieldGet(this, _ExpiringCache_cacheDurationSeconds, "f")) {
                // cache hit woo!
                return entry.value;
            }
            else {
                // key has expired - clean it up to free up memory
                this.cleanupKey(key);
            }
        }
        // no hit :'(
        return undefined;
    }
    cleanupKey(key) {
        this.map.delete(key);
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
}
exports.ExpiringCache = ExpiringCache;
_ExpiringCache_cacheDurationSeconds = new WeakMap();
//# sourceMappingURL=ExpiringCache.js.map