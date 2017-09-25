const Sample = artifacts.require("../contracts/Sample.sol");

module.exports = function(deployer) {
    deployer.deploy(Sample);
};