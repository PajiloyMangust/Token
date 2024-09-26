const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken contract", function () {
    let Token, myToken, owner, addr1, addr2, addrs;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("MyToken");
        const totalSupplyLim = ethers.parseUnits("1000000", 18);
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        const initialAddresses = [addr1.address, addr2.address];
        myToken = await Token.deploy(owner.address, initialAddresses, totalSupplyLim); 
    });

    it("Should mint 100k tokens to each address passed in constructor", async function () {
        const balanceAddr1 = await myToken.balanceOf(addr1.address);
        const balanceAddr2 = await myToken.balanceOf(addr2.address);
        const expectedAmount = ethers.parseUnits("100000", 18); 

        expect(balanceAddr1).to.equal(expectedAmount);
        expect(balanceAddr2).to.equal(expectedAmount);
    });

    it("Owner should be able to mint tokens within supply limit", async function () {
        const mintAmount = ethers.parseUnits("50000", 18); 
        await myToken.mint(addr1.address, mintAmount);

        const newBalance = await myToken.balanceOf(addr1.address);
        const expectedBalance = ethers.parseUnits("150000", 18); 
        expect(newBalance).to.equal(expectedBalance);
    });

    it("Should not allow minting more than total supply limit", async function () {
        const overLimitAmount = ethers.parseUnits("1000001", 18);  
        await expect(myToken.mint(owner.address, overLimitAmount)).to.be.revertedWith("Total supply limit exceeded!!!");
    });

    it("Should allow only owner to mint tokens", async function () {
        const mintAmount = ethers.parseUnits("50000", 18); 
        myToken.connect(addr1).mint(addr1.address, mintAmount);
        await expect(myToken.connect(addr1).mint(addr1.address, mintAmount))
        .to.be.revertedWithCustomError(myToken, "OwnableUnauthorizedAccount")
        .withArgs(addr1.address); 
    });
});
