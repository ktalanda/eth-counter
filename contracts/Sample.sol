pragma solidity ^0.4.8;

contract Sample {
    address[16] public sampleArray;

    function run(uint id) public returns (uint) {
        sampleArray[id] = msg.sender;
        return id;
    }
}
