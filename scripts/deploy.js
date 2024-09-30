
async function main() {

    const initialSupply = ethers.parseUnits("1000000", 18);
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy("0x36D03DcB707132a446c38c407C5c7A81F9541d8f", 
                                        ["0x8fB4FFF3f7Fee32598Ad35e9E5FC64CdFFdeFeA2"], 
                                        initialSupply);
  
    console.log("MyToken deployed to:", myToken.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  