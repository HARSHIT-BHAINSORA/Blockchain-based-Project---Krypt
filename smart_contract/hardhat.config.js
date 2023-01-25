require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/-SzjOkTi-NWlwn-g2ETxB1HMpjJg1X4Q',
      accounts: ['19b1a6e466dede0b6e625827254ff1ad168d1a33e4003aa1c4917648e0993712'],
    },
  },
};