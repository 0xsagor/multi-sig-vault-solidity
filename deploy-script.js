const { ethers } = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await ethers.getSigners();
  const MultiSig = await ethers.getContractFactory("MultiSigWallet");
  
  // Deploy 2-of-3 MultiSig
  const wallet = await MultiSig.deploy(
    [deployer.address, owner2.address, owner3.address], 
    2
  );

  await wallet.waitForDeployment();
  console.log("MultiSig Wallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
