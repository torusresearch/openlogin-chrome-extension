// import * as tss from './dkls/dkls.min.js';
import * as tss from './tss-lib/browser.js';

console.log(tss);
let dkls = await tss.default("./tss-lib/dkls_19.wasm")

export default dkls;