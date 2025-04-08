const { developmentChains } = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25"); // 0.25 is the premium it cost 0.25 per request
const GAS_PRICE_LINK = 1e9; // 1000000000 //

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deploymentsconst;
  const { deployer } = await getNamedAccounts();
  const args = [BASE_FEE, GAS_PRICE_LINK];

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deplying mocks...");

    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: args,
    });
    log("Mocks Deployed!");
    log("__________________________________________");
  }
};

module.exports.tags = ["all", "mocks"];
