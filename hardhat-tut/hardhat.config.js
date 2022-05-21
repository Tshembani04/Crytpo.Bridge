// https://eth-rinkeby.alchemyapi.io/v2/IdnR1ZKIdk6SmD1gy31v8wBpOW6u1fbZ

require('@nomiclabs/hardhat-waffle');
//Create a a module.exports file

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/IdnR1ZKIdk6SmD1gy31v8wBpOW6u1fbZ',
      accounts : ['4a004ebb2ae7ca303e290c4dcfd543aec5512d887ce2266fd7b229c1d90cb74c'],
    },
  },
};

