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

const CONTRACT_ADDR = w3.utils.toChecksumAddress("0x02dB0556424733e0a4a85970c9A104E20555415E");
export const contract = new w3.eth.Contract(abi, CONTRACT_ADDR);
console.log(account);
contract.options.from = account.address;

export function fireRead(key) {
    const convKey = w3.utils.asciiToHex(key).padEnd(66,"0") ;
    const ret = contract.methods
        .read(account.address, convKey)
        .estimateGas()
        .then((gasEstimate) => {
          contract.methods
            .read(account.address, convKey)
            .call().then((response) => {
                console.log("read", response);
            })
    })
    .catch(error=> console.log("READ ERROR", error))
    return ret;
}

export async function fireWrite(key, value) {
    const convKey = w3.utils.asciiToHex(key).padEnd(66,"0") ;
    const convValue = w3.utils.asciiToHex(value).padEnd(66,"0") ;
    //const nonce = await w3.eth.getTransactionCount(account.address, 'pending')
    const ret = await contract.methods.write(account.address, convKey, {value: convValue}).send({gas:99999});
    console.log(ret)
    return ret;
}

export async function fireCreate() {
    const ret = await contract.methods.createStore(account.address).send({gas:999999});
    console.log(ret)
    return ret;
}
