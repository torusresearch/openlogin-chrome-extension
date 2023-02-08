import { createSockets, distributeShares } from "./utils";
import eccrypto from "https://unpkg.com/@toruslabs/eccrypto@1.1.8/browser.js";
import BN from "https://unpkg.com/bn.js@5.2.1/lib/bn.js";

import { Client, localStorageDB } from "../tss-client/tssClient.umd.min.js";
import * as tss from "../tss-lib/browser.js";
import EC from "https://unpkg.com/elliptic@6.5.4/lib/elliptic.js";
import { log } from "./log";
import { keccak256 } from "https://unpkg.com/browse/@toruslabs/openlogin-utils@2.13.0/dist/openloginUtils.umd.min.js";

export function getEcCrypto(){
    // eslint-disable-next-line new-cap
    return new EC.ec("secp256k1");
}
  

export const setupMockShares = async (endpoints, session ,parties, clientIndex , ec) => {
    const privKey = new BN(eccrypto.generatePrivate());
    // (window as any).privKey = privKey;
    const pubKeyElliptic = ec.curve.g.mul(privKey);
    const pubKeyX = pubKeyElliptic.getX().toString(16, 64);
    const pubKeyY = pubKeyElliptic.getY().toString(16, 64);
    const pubKeyHex = `${pubKeyX}${pubKeyY}`;
    const pubKey = Buffer.from(pubKeyHex, "hex").toString("base64");

    // distribute shares to servers and local device
    await distributeShares(privKey, parties, endpoints, clientIndex, session);

    return { pubKey, privKey };
};

export const setupSockets = async (tssWSEndpoints ) => {    
    const sockets = await createSockets(tssWSEndpoints);

    // wait for websockets to be connected
    await new Promise((resolve) => {
        const checkConnectionTimer = setInterval(() => {
            for (let i = 0; i < sockets.length; i++) {
            if (sockets[i] !== null && !sockets[i].connected) return;
            }
            clearInterval(checkConnectionTimer);
            resolve(true);
        }, 100);
    });

    return sockets;
};

export const generateEndpoints = (servers  , parties, clientIndex, region) => {
    const endpoints  = [];
    const tssWSEndpoints= [];
    // generate endpoints for servers
    let serverPortOffset = 1;
    const basePort = 8000;
    for (let i = 0; i < parseInt(servers, 10) + 1; i++) {
        parties.push(i);
        if (i === clientIndex) {
            endpoints.push(null );
            tssWSEndpoints.push(null );
        } else if (region !== "localhost") {
            endpoints.push(`https://tss-server-${region}-${serverPortOffset}.web3auth.io`);
            tssWSEndpoints.push(`https://tss-server-${region}-${serverPortOffset}.web3auth.io`);
            serverPortOffset++;
        } else {
            endpoints.push(`http://localhost:${basePort + serverPortOffset}`);
            tssWSEndpoints.push(`http://localhost:${basePort + serverPortOffset}`);
            serverPortOffset++;
        }
    }
    return { endpoints, tssWSEndpoints, parties };
};



export const runDKLS = async ( msg, tssImportUrl , clientIndex, targetServer, region, partiesInitial=[]  ) => {
    const msgHash = keccak256(msg).slice(2);
    const ec = getEcCrypto();
    const session = `test:${Date.now()}`;
    console.log(partiesInitial);
    // generate endpoints for servers
    const { endpoints, tssWSEndpoints, parties } = generateEndpoints( targetServer, partiesInitial, clientIndex, region);

    console.log("parties", parties)

    
    // setup mock shares, sockets and tss wasm files.
    // const [{ pubKey, privKey }, sockets] = await Promise.all([
    const {pubKey, privKey} = await  setupMockShares(endpoints, session, parties, clientIndex, ec );
    console.log(pubKey)
    const sockets = await  setupSockets(tssWSEndpoints);
    console.log("sockets setup")
    // ]);

    console.log("sockets setup")

    // const tssImportUrl = `dkls_19.wasm`;
    await tss.default(tssImportUrl);
    // get the shares.
    console.log(`session-${session}:share`)
    
    const share = await localStorageDB.get(`session-${session}:share`);

    console.log("share", share)
    console.log("sockets", sockets)
    console.log("endpoints", endpoints)
    console.log("parties", parties)
    console.log("clientIndex", clientIndex)
    console.log("session", session)
    console.log("pubKey", pubKey)
    console.log("tssImportUrl", tssImportUrl)
    console.log(tss);
    const client = new Client(session, clientIndex, parties, endpoints, sockets, share, pubKey, true, tssImportUrl);
    client.log = log;
    // initiate precompute
    client.precompute(tss);
    await client.ready();

    console.log("client ready")

    console.log(msgHash)
    console.log(msg)

    // initiate signature.
    // const signature = await client.sign(tss, msgHash.toString("base64"), true, msg, "keccak256");

    // initiate signature.
    const signature = await client.sign(tss, Buffer.from(msgHash, "hex").toString("base64"), true, msg, "keccak256");

    console.log("signature created");
    const hexToDecimal = (x) => ec.keyFromPrivate(x, "hex").getPrivate().toString(10);
    const pubk = ec.recoverPubKey(hexToDecimal(msgHash), signature, signature.recoveryParam, "hex");

    client.log(`pubkey, ${JSON.stringify(pubKey)}`);
    client.log(`msgHash: 0x${msgHash}`);
    client.log(`signature: 0x${signature.r.toString(16, 64)}${signature.s.toString(16, 64)}${new BN(27 + signature.recoveryParam).toString(16)}`);

    
    // client.log(`address: 0x${Buffer.from(privateToAddress(`0x${privKey.toString(16, 64)}`)).toString("hex")}`);
    const passed = ec.verify(msgHash, signature, pubk);

    client.log(`passed: ${passed}`);
    client.log(`precompute time: ${client._endPrecomputeTime - client._startPrecomputeTime}`);
    // logger({ type: LOGGER_TYPES.DKLS19, log: `[${region}] precompute time: ${client._endPrecomputeTime - client._startPrecomputeTime}ms` });
    client.log(`signing time: ${client._endSignTime - client._startSignTime}`);
    // logger({ type: LOGGER_TYPES.DKLS19, log: `[${region}] signing time: ${client._endSignTime - client._startSignTime}ms` });
    await client.cleanup(tss);
    client.log("client cleaned up");
}