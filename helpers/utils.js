import { localStorageDB } from "../tss-client/tssClient.cjs.js";
import BN from "https://unpkg.com/bn.js@5.2.1/lib/bn.js";
import eccrypto from "https://unpkg.com/@toruslabs/eccrypto@1.1.8/browser.js";
import EC from "https://unpkg.com/elliptic@6.5.4/lib/elliptic.js";
import { io, Socket } from "https://unpkg.com/socket.io-client@4.4.1/build/cjs/index.js";

export function getEcCrypto(){
  // eslint-disable-next-line new-cap
  return new EC.ec("secp256k1");
}

export const getLagrangeCoeff = (parties, party) => {
  const ec = getEcCrypto();
  const partyIndex = new BN(party + 1);
  let upper = new BN(1);
  let lower = new BN(1);
  for (let i = 0; i < parties.length; i += 1) {
    const otherParty = parties[i];
    const otherPartyIndex = new BN(parties[i] + 1);
    if (party !== otherParty) {
      upper = upper.mul(otherPartyIndex.neg());
      upper = upper.umod(ec.curve.n);
      let temp = partyIndex.sub(otherPartyIndex);
      temp = temp.umod(ec.curve.n);
      lower = lower.mul(temp).umod(ec.curve.n);
    }
  }

  const delta = upper.mul(lower.invm(ec.curve.n)).umod(ec.curve.n);
  return delta;
};

export const distributeShares = async (privKey, parties , endpoints, localClientIndex, session ) => {
  const additiveShares = [];
  const ec = getEcCrypto();
  let shareSum = new BN(0);
  for (let i = 0; i < parties.length - 1; i++) {
    const share = new BN(eccrypto.generatePrivate());
    additiveShares.push(share);
    shareSum = shareSum.add(share);
  }

  const finalShare = privKey.sub(shareSum.umod(ec.curve.n)).umod(ec.curve.n);
  additiveShares.push(finalShare);
  const reduced = additiveShares.reduce((acc, share) => acc.add(share).umod(ec.curve.n), new BN(0));

  if (reduced.toString(16) !== privKey.toString(16)) {
    throw new Error("additive shares dont sum up to private key");
  }

  // denormalise shares
  const shares = additiveShares.map((additiveShare, party) => {
    return additiveShare.mul(getLagrangeCoeff(parties, party).invm(ec.curve.n)).umod(ec.curve.n);
  });

  console.log(
    "shares",
    shares.map((s) => s.toString(16, 64))
  );

  const waiting = [];
  for (let i = 0; i < parties.length; i++) {
    const share = shares[i];
    if (i === localClientIndex) {
      waiting.push(localStorageDB.set(`session-${session}:share`, Buffer.from(share.toString(16, 64), "hex").toString("base64")));
      continue;
    }
    waiting.push(

      fetch( `${endpoints[i]}/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify({
          session,
          share: Buffer.from(share.toString(16, 64), "hex").toString("base64"),
        }),
      })
      .then((res) => res.text())
      .then((res) => {
        console.log(res)
        return res
      })

      // axios
      //   .post(`${endpoints[i]}/share`, {
      //     session,
      //     share: Buffer.from(share.toString(16, 64), "hex").toString("base64"),
      //   })
      //   .then((res) => res.data)
    );
  }
  await Promise.all(waiting);
};

export const createSockets = async (wsEndpoints ) => {
  return wsEndpoints.map((wsEndpoint) => {
    if (wsEndpoint === null || wsEndpoint === undefined) {
      return null ;
    }
    return io(wsEndpoint, { transports: ["websocket", "polling"], withCredentials: true, reconnectionDelayMax: 10000, reconnectionAttempts: 10 });
  });
};

export const isMobileDevice = () => {
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};
