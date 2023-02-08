import * as TssLib from "@toruslabs/tss-lib";
import BN from "bn.js";
import { Socket } from "socket.io-client";
import { Msg } from "./types";
declare type Log = {
    (msg: string): void;
};
export declare class Client {
    session: string;
    index: number;
    parties: number[];
    msgQueue: Msg[];
    pendingReads: {};
    sockets: Socket[];
    endpoints: string[];
    share: string;
    pubKey: string;
    precomputes: string[];
    websocketOnly: boolean;
    tssImportUrl: string;
    _startPrecomputeTime: number;
    _endPrecomputeTime: number;
    _startSignTime: number;
    _endSignTime: number;
    log: Log;
    _ready: boolean;
    _consumed: boolean;
    private _readyResolves;
    private _readyPromises;
    private _readyPromiseAll;
    private _signer;
    private _rng;
    constructor(_session: string, _index: number, _parties: number[], _endpoints: (string | null | undefined)[], _sockets: (Socket | null | undefined)[], _share: string, _pubKey: string, _websocketOnly: boolean, _tssImportUrl: string);
    ready(): Promise<void>;
    precompute(tss: typeof TssLib, additionalParams?: Record<string, unknown>): void;
    sign(tss: typeof TssLib, msg: string, hash_only: boolean, original_message: string, hash_algo: string, additionalParams?: Record<string, unknown>): Promise<{
        r: BN;
        s: BN;
        recoveryParam: number;
    }>;
    lookupEndpoint(session: string, party: number): string;
    cleanup(tss: typeof TssLib, additionalParams?: Record<string, any>): Promise<void>;
}
export {};
