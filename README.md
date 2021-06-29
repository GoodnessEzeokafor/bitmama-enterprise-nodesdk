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
    - getRate(ticker)
    - BtcEthRate()
    - BtcUsdtRate()
    - BtcUsdcRate()
    - BtcXrpRate()
    - BtcXlmRate()
    - BtcCeloRate()
    - BtcCusdRate()
    - BtcCeurRate()
    - BtcNGNRate()
    - BtcGHSRate()
    - BtcUsdRate()
    - EthNGNRate()
    - EthGHSRate()
    - EthBtcRate()
    - EthCeloRate()
    - EthXrpRate()
    - EthXlmRate()
    - EthCusdRate()
    - EthUsdtRate()
    - EthUsdcRate()
    - EthCeurRate()
    - EthUsdRate()
    - CeloNGNRate()
    - CeloGHSRate()
    - CeloUSDRate()
    - CeloEthRate()
    - CeloBtcRate()
    - CeloXrpRate()
    - CeloXlmRate()
    - CeloCusdRate()
    - CeloCeurRate()
    - CeloUsdtRate()
    - CeloUsdcRate()
    - XrpNGNRate()
    - XrpGHSRate()
    - XrpUSDRate()
    - XrpBtcRate: ()
    - XrpEthRate()
    - XrpXlmRate()
    - XrpUsdtRate()
    - XrpUsdcRate()
    - XrpCusdRate()
    - XrpCeurRate()
    - XlmNGNRate()
    - XlmGHSRate()
    - XlmUSDRate()
    - XlmBtcRate()
    - XlmEthRate()
    - XlmXrpRate()
    - XlmUsdtRate()
    - XlmUsdcRate()
    - XlmCusdRate()
    - XlmCeurRate()
    - UsdtNGNRate()
    - UsdtGHSRate()
    - UsdtUSDRate()
    - UsdtBtcRate()
    - UsdtEthRate()
    - UsdtXrpRate()
    - UsdtXlmRate()
    - UsdtUsdcRate()
    - UsdtCusdRate()
    - UsdtCeurRate()
    - UsdcNGNRate()
    - UsdcGHSRate()
    - UsdcUSDRate()
    - UsdcBtcRate()
    - UsdcEthRate()
    - UsdcXrpRate()
    - UsdcXlmRate()
    - UsdcCusdRate()
    - UsdcCeurRate()
    - CusdNGNRate()
    - CusdGHSRate()
    - CusdUSDRate()     
    - CusdBtcRate()
    - CusdEthRate()
    - CusdXrpRate()
    - CusdXlmRate()
    - CusdUsdcRate()
    - CusdCeurRate()
    - CeurNGNRate()
    - CeurGHSRate()
    - CeurUSDRate()
    - CeurBtcRate()
    - CeurEthRate()
    - CeurXrpRate()
    - CeurXlmRate()
    - CeurCusdRate()

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

## BTC to NGN rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getBtcNGNRate = async () => {
  const rate = await bitmama.BtcNGNRate()
  return rate;
}
getBtcNGNRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
 
```
## ETH to NGN rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getEthNGNRate = async () => {
  const rate = await bitmama.EthNGNRate();
  return rate;
}
getEthNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

```
## CELO to NGN rate 
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getCeloNGNRate = async () => {
  const rate = await bitmama.CeloNGNRate()
  return rate;
}
getCeloNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e)) 

```
## XRP to NGN rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

  const getXrpNGNRate = async () => {
    const rate = await bitmama.XrpNGNRate()
    return rate;
  }

  getXrpNGNRate()
    .then(res => console.log(res))
    .catch(e => console.log(e))

```
## XLM to NGN rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getXlmNGNRate = async () => {
  const rate = await bitmama.XlmNGNRate()
  return rate;
}
getXlmNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
```

## BTC to ETH rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getBtcEthRate = async () => {
  const rate = bitmama.BtcEthRate()
  return rate
}
getBtcEthRate()
  .then(async (res) => {
    console.log(res);
  })
  .catch((e) => console.log(e))
```
## BTC to USDT rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


 const getBtcUsdtRate = async () => {
  const rate = bitmama.BtcUsdtRate()
  return rate;
}

getBtcUsdtRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
```
## BTC to USDC rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

 bitmama.BtcUsdcRate()
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))

```
## BTC to XRP rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


const getBtcXrpRate = async () => {
  const rate = bitmama.BtcXrpRate()
  return rate
}
getBtcXrpRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
```
## BTC to XLM rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getBtcXlmRate = async () => {
  const rate = bitmama.BtcXlmRate()
  return rate;
}
getBtcXlmRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
```
## BTC to CELO rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getBtcCeloRate = async () => {
  const rate = await bitmama.BtcCeloRate()
  return rate
}
getBtcCeloRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   
```
## BTC to CUSD rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


const getBtcCeurRate =  async() => {
  const rate = await bitmama.BtcCeurRate()
  return rate
}
getBtcCeurRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   
```
## BTC to CEUR rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)


const getBtcCeurRate =  async() => {
  const rate = await bitmama.BtcCeurRate()
  return rate
}
getBtcCeurRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   
```
## BTC to NGN rate
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

const getBtcNGNRate = async () => {
  const rate = await bitmama.BtcNGNRate()
  return rate;
}
getBtcNGNRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
 
```
## BTC to GHS rate 
```js
const enterprise = require("bitmama-enterprise-nodesdk").Enterprise
const bitmama = enterprise.initialize(TOKEN, ENV)

  const getBtcGHSRate = async () => {
    const rate = await bitmama.BtcGHSRate();
    return rate;
  }
getBtcGHSRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))

```
