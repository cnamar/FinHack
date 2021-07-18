import { ethers } from 'hardhat';


async function main() {

  const Payloop = await ethers.getContractFactory("Payloop");
  const payloop = await Payloop.deploy();

  await payloop.deployed();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
