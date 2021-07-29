import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
// import { calculateFee, gasPrice } from "@cosmjs/stargate";
import {
    coin,
    coins,
    GasPrice,
    MsgDelegate as LaunchpadMsgDelegate,
    Secp256k1HdWallet,
  } from "@cosmjs/launchpad";
import * as fs from "fs";

const rpcEndpoint = "https://rpc-juno.itastakers.com/";

/// UPLOAD CONTRACT
const wasm = fs.readFileSync("file-id"); /// here is where the uploaded file is called
const codeMeta = {
  source: "https://crates.io/api/v1/crates/hackatom/not-yet-released/download",
  builder: "cosmwasm/rust-optimizer:0.10.8",
};
// const uploadReceipt = await client.upload(
//   alice.address0,
//   wasm,
//   uploadFee,
//   codeMeta,
//   "Upload hackatom contract",
// );
// console.info("Upload succeeded. Receipt:", uploadReceipt);

/// INTANTIATE
// const instantiateFee = calculateFee(500_000, GasPrice);

// This contract specific message is passed to the contract

// const msg = {
//   beneficiary: <key>.address1,
//   verifier: <key>.address0,
// };
// const { contractAddress } = await client.instantiate(
//   alice.address0,
//   uploadReceipt.codeId,
//   msg,
//   "My instance",
//   instantiateFee,
//   { memo: `Create a hackatom instance` },
// );
// console.info(`Contract instantiated at: `, contractAddress);

// EXECUTE CONTRACT

// const executeFee = calculateFee(300_000, GasPrice);
// const result = await client.execute(alice.address0, contractAddress, { release: {} }, executeFee);
// const wasmEvent = result.logs[0].events.find((e) => e.type === "wasm");
// console.info("The `wasm` event emitted by the contract execution:", wasmEvent);


// const repoRoot = process.cwd() + "/../.."; // This assumes you are in `packages/cli`
// const hackatom = `${repoRoot}/scripts/wasmd/contracts/hackatom.wasm`;
// await main(hackatom);
// console.info("The show is over.");

// function calculateFee(arg0: number, GasPrice: typeof GasPrice) {
//   throw new Error("Function not implemented.");
// }
