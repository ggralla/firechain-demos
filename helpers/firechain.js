import Web3 from "web3";
import abi from "../contracts/abi_firechain.json";


// Uses websocket provider by default
export var w3 = new Web3("wss://chain.txt.rs:443");


var ethPrivKey;
if (!ethPrivKey) {
  const newWallet = w3.eth.accounts.wallet.create(1)[0];
  ethPrivKey = newWallet.privateKey;
}
// TODO what is wallet vs account?
const account = w3.eth.accounts.privateKeyToAccount(ethPrivKey);

const CONTRACT_ADDR = "0x6954fd4298F36FE38f254CF6789ebF755bb0035E";
export const contract = new w3.eth.Contract(abi, CONTRACT_ADDR);

export function fireRead(key) {
    const convKey = w3.utils.asciiToHex(key).padEnd(66,"0") ;
    const ret = contract.methods
        .read(account.address, convKey)
        .estimateGas()
        .then((gasEstimate) => {
          contract.methods
            .read(account.address, convKey)
            .send({ gas: gasEstimate })
    })
    .catch(error=> console.log("READ ERROR", error))
    return ret;
}

export function fireWrite(key, value) {
    contract.methods.write(account.address, key, value);
}
