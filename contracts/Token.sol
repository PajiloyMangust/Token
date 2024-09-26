
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint256 public immutable TOTAL_SUPPLY_LIMIT;
    
    constructor(address owner, address[] memory initialAddresses, uint256 totalSupplylim) 
                ERC20("MyToken", "TKN") 
                Ownable(owner)
    {
        TOTAL_SUPPLY_LIMIT = totalSupplylim;
        uint256 mintAmount = 100000 * 10 ** 18; 
        
        require(initialAddresses.length > 0, "Address array cannot be empty!!!");
        
        for (uint256 i = 0; i < initialAddresses.length; i++) {
            _mint(initialAddresses[i], mintAmount);
        }
    }

    function mint(address to, uint256 amount) 
    external onlyOwner 
    {
        require(totalSupply() + amount <= TOTAL_SUPPLY_LIMIT, "Total supply limit exceeded!!!");
        _mint(to, amount);
    }
}