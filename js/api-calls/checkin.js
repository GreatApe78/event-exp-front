

export async function checkIn(){

    const connectedAccount = sessionStorage.getItem("connectedAccount")
   
    const response = await fetch("https://eventesse-experience-demo.onrender.com/checkin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({to:connectedAccount.toLowerCase()})
    })
    console.log(response.status)
    if(response.status!==200) throw new Error("Some Error Ocurred")
    const resJson = await response.json()

    return resJson

}