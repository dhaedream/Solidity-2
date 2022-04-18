const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should add my numbers + return sum", async function () {
    //this is how hardhat targets coontract
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    const contract = await greeter.deployed();

    const addNumbersTest = await contract.add(3, 6);
    expect(addNumbersTest).to.equal(9);
  });

  it("Should multiply numbers + return results", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");
    const contract = await greeter.deployed();

    // test git
    const multiNumTest = await contract.multiply(3, 9);
    expect(multiNumTest).to.equal(27);
  });
});
