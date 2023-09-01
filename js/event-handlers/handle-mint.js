import { getNFT } from "../api-calls/get-nft.js";
import { hasChecked } from "../api-calls/has-checked.js";
import { mint } from "../api-calls/mint.js";
import { nftImage, retrieveNftBtn } from "../dom-elements.js";
import { loadImage } from "../index.js";


function renderResponse(transactionHash){
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("intro-message")
    mainDiv.innerHTML= `
        <h1>Token Minted!</h1>
        <p>Transaction hash: ${transactionHash}</p>
        <p>Follow your transaction <a target="_blank" href="https://testnet.ftmscan.com/tx/${transactionHash}">HERE!</a></p>
    `
    return mainDiv
}

  
//https://ipfs.moralis.io:2053/ipfs/
export async function handleMint(){
    try {
        retrieveNftBtn.style.display = "none"
        document.getElementById("loading-p").style.display = "block"
        const response = await mint()
        document.getElementById("loading-p").style.display = "none"
        document.getElementById("main").append(renderResponse(response.transactionHash))
       loadImage()
    } catch (error) {
        console.log(error)
        retrieveNftBtn.style.display = "inline"
        document.getElementById("loading-p").style.display = "none"
        //alert("Something Wrong")
    }


}