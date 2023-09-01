import { hasChecked } from "./api-calls/has-checked.js";
import { connectWalletBtn, connectedAddressSpan, retrieveNftBtn ,nftImage, checkInBtn} from "./dom-elements.js";
import { handleCheckIn } from "./event-handlers/handle-checkin.js";
import { handleMint } from "./event-handlers/handle-mint.js";
import { reloadConnectedAccount } from "./event-handlers/reload-connected-account.js";
import { connectWallet,getConnectedAccount } from "./metamask-connection/connect-wallet.js";
import { shortenEthereumAddress } from "./utils/shorter-address.js";

//import CONTRACT_DATA from "../build/contracts/EventesseExperience.json" assert{type:"json"} 

export async function loadImage(){
    const checked = await hasChecked()
    console.log(checked)
        nftImage.src = checked.hasChecked? "https://ipfs.moralis.io:2053/ipfs/QmSVBPw3ZBzGGvGGRCjk31PZPFHF9CzGiaqRTpDCCaCh37/after.png":"https://ipfs.moralis.io:2053/ipfs/QmSVBPw3ZBzGGvGGRCjk31PZPFHF9CzGiaqRTpDCCaCh37/before.png"
}

//let eventesseExperience 
if(window.ethereum){
    loadImage()
    //const web3 = new Web3(window.ethereum)
    //let connectedChainId 
    //web3.eth.net.getId().then((chainId)=> {
   //     connectedChainId = Number(chainId)
        
    //    eventesseExperience = new web3.eth.Contract(CONTRACT_DATA.abi,CONTRACT_DATA.networks[connectedChainId].address)
    //}) 
    getConnectedAccount().then((connectedAccount)=>{
        connectedAddressSpan.innerText = shortenEthereumAddress(connectedAccount.toLowerCase())
        document.getElementsByClassName("intro-message")[0].style.display = "none"
    })
    window.ethereum.on("accountsChanged",()=>{
        reloadConnectedAccount().then(()=>{
            loadImage()
        })
        
    })
}


connectWalletBtn.addEventListener("click",async()=>{
   
    try {
        const connectedAccount = await connectWallet()
        connectedAddressSpan.innerText = shortenEthereumAddress(connectedAccount.toLowerCase())
        document.getElementsByClassName("intro-message")[0].style.display = "none"

    } catch (error) {
        
    }
})

checkInBtn.addEventListener("click",()=>{
    handleCheckIn()
})
retrieveNftBtn.addEventListener("click",()=>{
    handleMint()
})