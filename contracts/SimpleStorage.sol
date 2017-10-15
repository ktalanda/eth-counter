pragma solidity ^0.4.4;

contract SimpleStorage {
  uint transactionNumber;

	function set(uint newTransactionNumber) {
		transactionNumber = newTransactionNumber;
	}

  function reset() {
    transactionNumber = 0;
  }

  function get() constant returns (uint) {
    return transactionNumber;
  }

	function add() {
		transactionNumber += 1;
	}
}
