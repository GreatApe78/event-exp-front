

export async function mint(){

    const connectedAccount = sessionStorage.getItem("connectedAccount")
    JSON.stringify({to:connectedAccount.toLowerCase()})
    const response = await fetch("https://eventesse-experience-demo.onrender.com/mint",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({to:connectedAccount.toLowerCase()})
    })
    if(response.status!==200) throw new Error("Some Error Ocurred")
    const resJson = await response.json()

    return resJson

}