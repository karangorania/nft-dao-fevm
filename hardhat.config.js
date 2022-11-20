require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */

const { PHRASE } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    wallaby: {
      url: 'https://wallaby.node.glif.io/rpc/v0',
      accounts: {
        mnemonic: PHRASE,
      },
    },
  },
};
