


export async function connectWallet(){
    if(!window.ethereum){
        alert("Install Metamask to run this application!")
        return
    }
    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts()
    sessionStorage.setItem("connectedAccount",accounts[0])
    return accounts[0]
}


export async function getConnectedAccount(){
    try {
        if(!window.ethereum){
            alert("Install Metamask to run this application!")
            return
        }
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        sessionStorage.setItem("connectedAccount",accounts[0])
        console.log(accounts[0])
        return accounts[0]
    } catch (error) {
        throw new Error("Could not get accounts")
    }
    
}