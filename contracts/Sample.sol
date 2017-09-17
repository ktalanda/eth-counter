pragma solidity ^0.4.8;

contract Sample {
    address[16] public sampleArray;

    function adopt(uint id) public returns (uint) {
        sampleArray[id] = msg.sender;
        return id;
    }

    function getAdopters() public returns (address[16]) {
        return sampleArray;
    }
}
