// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherSubmission {
    address public owner;
    uint256 public totalEthSubmitted;

    event EthSubmitted(address indexed sender, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Fallback function to accept ETH
    receive() external payable {
        totalEthSubmitted += msg.value;
        emit EthSubmitted(msg.sender, msg.value);
    }

    // Function to withdraw ETH from the contract (onlyOwner)
    function withdrawEth(uint256 amount) external onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(amount);
    }
}
