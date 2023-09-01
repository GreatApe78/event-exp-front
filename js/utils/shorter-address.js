export function shortenEthereumAddress(address) {
    if (address.length < 10) {
        return address; // Address is too short, return as-is
    }
    
    const prefix = address.substring(0, 6);
    const suffix = address.substring(address.length - 4);
    
    return `${prefix}...${suffix}`;
}

