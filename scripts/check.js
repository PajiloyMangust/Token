const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/uo-JYAa7rMd_6mEZ3mwLEEk_exDhwLuJ');

async function main() {
    try {
        const feeData = await provider.getFeeData();
        
        const gasPrice = feeData.gasPrice;
        console.log(`Current gas price: ${gasPrice} wei`);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
