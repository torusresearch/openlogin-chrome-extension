import { TssWorker } from "../types";
declare class TssWebWorker implements TssWorker {
    private _wasmUrl;
    constructor(_wasmUrl: string);
    work<T>(method: string, args: string[]): Promise<T>;
}
export default TssWebWorker;
