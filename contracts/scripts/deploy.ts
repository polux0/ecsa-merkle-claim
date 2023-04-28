import { ethers, run } from "hardhat";
import {MerkleClaimERC20 } from "../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  const {ecsaERC20Address, root, adminWithdrawalTimestamp} = {
    ecsaERC20Address: '0x0f46D83A1E53829453262AAb4DB70144d364D25f',
    root: '0xf9769d32f000668255ae0eb16cfb6ab3138a1e93c0f6cda963e62cbc8a8dae4c',
    adminWithdrawalTimestamp: Math.floor((new Date().setFullYear(new Date().getFullYear() + 1)) / 1000) // timestamp at the moment of deployment + 1 year
  }
  console.log(`\n🤖 deployer address ${deployer.address}\n`)

  // Deploy the MerkleClaimERC20
  const MerkleClaimERC20 = await ethers.getContractFactory('MerkleClaimERC20')
  const merkleClaimERC20Contract = await MerkleClaimERC20.deploy(ecsaERC20Address, root, adminWithdrawalTimestamp) as MerkleClaimERC20; // as MerkleClaimERC20
  await merkleClaimERC20Contract.deployed()
  console.log(`🎥 MerkleClaimERC20 contract deployed at ${merkleClaimERC20Contract.address}\n`)

  // MerkleClaimERC20 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: merkleClaimERC20Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
      ecsaERC20Address,
      root,
      adminWithdrawalTimestamp
    ],
    contract: "contracts/MerkleClaimERC20.sol:MerkleClaimERC20"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
