## Bitmama Enterprse ![Build status](https://travis-ci.com/GoodnessEzeokafor/bitmama-enterprise-nodesdk.svg?branch=main)

Nodejs API wrapper for [Bitmama Enterprise](https://bitmama.io/).
This sdk can be used to create crypto wallet and receive crypto transactions
### Installation

```
npm i bitmama-enterprise-nodesdk
```

### Usage

```js
// Require the library
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
```

#### Making calls to the resources

```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)
const rate= "ethghs";
bitmama.getRate(rate)
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
```



### Resources

- banks
  - list
  - resolve
- wallets
  - create
    - .createCryptoWallet(param)
    - .createCeloWallet(label)
    - .createBtcWallet(label)
    - .createEthWallet(label)
    - .createRippleWallet(label)
    - .createStellarWallet(label)
  - list
- webhooks
  - create
  - get
- rate
  - get
  - tickers

### Contributing
- 

### Examples
## create crypto wallet

```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)
const createWallet = async () => {
  const coin = "xlm";
  const params = {
    coin,
    label:"sdk coin"
  }
  const rate = await bitmama.createCryptoWallet(params);
  return rate;
}

createWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))

```

## create bitcoin wallet
```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


 const createBtcWallet = async () => {
  const rate = await bitmama.createBtcWallet("sdk btc coin");
  return rate;
 }
 
 createBtcWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))

```
## create ethereum wallet
```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

 const createEthWallet = async () => {
  const rate = await bitmama.createEthWallet("sdk eth coin");
  return rate;
 }
 
 createEthWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))

```
## create ripple wallet
```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


 const createRippleWallet = async () => {
  const rate = await bitmama.createRippleWallet("sdk ripple coin");
  return rate;
 }
 
 createRippleWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))


```
## create stellar wallet
```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const createStellarWallet = async () => {
  const rate = await bitmama.createStellarWallet("sdk xlm coin");
  return rate;
 }
 
 createStellarWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))
```
## create celo wallet
```js

const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const createCeloWallet = async () => {
 const wallet = await bitmama.createCeloWallet("sdk celo coin");
 return wallet;
}

createCeloWallet()
 .then(async (res) => {
   console.log(res)
 })
 .catch(e => console.log(e))


```