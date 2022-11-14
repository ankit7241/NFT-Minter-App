require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    matic: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.MATIC_PRIVATE_KEY],
    },
  },
};