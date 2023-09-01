import { connectedAddressSpan } from "../dom-elements.js";
import { getConnectedAccount } from "../metamask-connection/connect-wallet.js";
import { shortenEthereumAddress } from "../utils/shorter-address.js";



export async function reloadConnectedAccount(){

    try {
        const connectedAccount = await getConnectedAccount()
        connectedAddressSpan.innerText = shortenEthereumAddress(connectedAccount)
    } catch (error) {
       throw new Error("Could not reload connected address") 
    }

}