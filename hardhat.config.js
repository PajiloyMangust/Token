require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/uo-JYAa7rMd_6mEZ3mwLEEk_exDhwLuJ", 
      accounts: ["0x28085a1b0374c732b8b086b1862ce1495998e36977eeb6313075846e6620589c"] 
    }
  }
};
