const SmartFarmContract = artifacts.require("SmartFarmContract");

module.exports = function (deployer) {
  deployer.deploy(SmartFarmContract);
};
