import { getNFT } from "../api-calls/get-nft.js";
import { hasChecked } from "../api-calls/has-checked.js";
import { mint } from "../api-calls/mint.js";
import { nftImage, retrieveNftBtn } from "../dom-elements.js";
import { loadImage } from "../index.js";

export async function addToken(contractAddress,tokenId){
    const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC721',
          options: {
            address: contractAddress, // The address of the token.
            tokenId: tokenId.toString(), // ERC-721 or ERC-1155 token ID.
          },
        },
      });
}
function renderResponse(transactionHash,contractAddress,tokenId){

    const mainDiv = document.createElement("div")
    mainDiv.classList.add("intro-message")
    mainDiv.innerHTML= `
        <h1>Token Minted!</h1>
        <p>Transaction hash: ${transactionHash}</p>
        <p>Follow your transaction <a target="_blank" href="https://testnet.ftmscan.com/tx/${transactionHash}">HERE!</a></p>
        <p>IMPORT YOUR NFT TO YOUR WALLET USING THIS ADDRESS:${contractAddress}</p>
        <p>MINTED TOKEN ID: ${tokenId}</p>
        `
       // <button id="metamask-add">ADD TO METAMASK!</button>
   
    return mainDiv
}

  
//https://ipfs.moralis.io:2053/ipfs/
export async function handleMint(){
    try {
        retrieveNftBtn.style.display = "none"
        document.getElementById("loading-p").style.display = "block"
        const response = await mint()
        document.getElementById("loading-p").style.display = "none"
        document.getElementById("main").append(renderResponse(
            response.transactionHash,
            response.contractAddress,
            response.tokenId
            ))
           // document.getElementById("metamask-add").addEventListener("click",()=>{
           //     addToken(response.contractAddress,response.tokenId)
           // })
       loadImage()
    } catch (error) {
        console.log(error)
        retrieveNftBtn.style.display = "inline"
        document.getElementById("loading-p").style.display = "none"
        //alert("Something Wrong")
    }


}