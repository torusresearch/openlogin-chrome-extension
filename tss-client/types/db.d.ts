import { DB } from "./types";
declare class WebDb implements DB {
    get: (key: string) => Promise<string>;
    set: (key: string, value: string) => Promise<void>;
}
export declare const localStorageDB: WebDb;
export {};
