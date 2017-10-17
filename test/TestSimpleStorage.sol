pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

  function testAddTransaction() {
    SimpleStorage simpletStorageContract = SimpleStorage(DeployedAddresses.SimpleStorage());
    simpletStorageContract.increment();
    simpletStorageContract.increment();

    uint actual = simpletStorageContract.get();
    uint expected = 2;

    Assert.equal(actual, expected, "Transaction number is not succesfully reset.");
  }
}
