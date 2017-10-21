pragma solidity ^0.4.4;

contract SimpleCounter {
  uint transactionNumber = 0;

  function get() constant returns (uint) {
    return transactionNumber;
  }

	function increment() {
		transactionNumber += 1;
	}
}
