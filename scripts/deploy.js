
async function main() {

    const initialSupply = ethers.parseUnits("1000000", 18);
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy("0x36D03DcB707132a446c38c407C5c7A81F9541d8f", 
                                        ["0x8fB4FFF3f7Fee32598Ad35e9E5FC64CdFFdeFeA2",
                                         "0xB6a2d1e056ED7b1760f5067a5EFfe98e3c5FcbC9",
                                         "0x608665E2a2dB4e5B08DB7B8b64c1b32a7C94d0e9"], 
                                        initialSupply);
    await myToken.waitForDeployment();
    console.log("MyToken deployed to:", myToken.target);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
