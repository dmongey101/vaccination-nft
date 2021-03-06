var TestAsset = artifacts.require("TestAsset");
module.exports = function(deployer) {
  deployer.deploy(TestAsset);
};