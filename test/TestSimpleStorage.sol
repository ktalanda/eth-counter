pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

  function testSetTransactionNumber() {
    SimpleStorage simpletStorageContract = SimpleStorage(DeployedAddresses.SimpleStorage());
    simpletStorageContract.set(100);

    uint actual = simpletStorageContract.get();
    uint expected = 100;

    Assert.equal(actual, expected, "Transaction number cannot be set properly.");
  }

  function testResetTransactionNumber() {
    SimpleStorage simpletStorageContract = SimpleStorage(DeployedAddresses.SimpleStorage());
    simpletStorageContract.set(100);
    simpletStorageContract.reset();

    uint actual = simpletStorageContract.get();
    uint expected = 0;

    Assert.equal(actual, expected, "Transaction number is not succesfully reset.");
  }

  function testAddTransaction() {
    SimpleStorage simpletStorageContract = SimpleStorage(DeployedAddresses.SimpleStorage());
    simpletStorageContract.set(100);
    simpletStorageContract.add();

    uint actual = simpletStorageContract.get();
    uint expected = 101;

    Assert.equal(actual, expected, "Transaction number is not succesfully reset.");
  }
}
