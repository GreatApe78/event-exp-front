
export async function getNFT(){
    const address = sessionStorage.getItem("connectedAccount").toLowerCase()
    const response = await fetch(`https://eventesse-experience-demo.onrender.com/nft/${address}`,{
        method:"GET",
        

    })
    if(response.status!==200) throw new Error("Error in fetch nft")

    const resJson = await response.json()
    return resJson
}