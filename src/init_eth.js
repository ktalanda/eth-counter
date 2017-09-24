import Web3 from "web3";
import SampleContract from "../contracts/Sample.sol";

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log("No web3 provider found.");
    }
});

SampleContract.setProvider(window.web3.currentProvider);
