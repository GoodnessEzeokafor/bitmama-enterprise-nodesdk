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

  .catch((e: any) => console.log(e));
```



### Resources

- banks
  - list
  - resolve
- wallets
  - create
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
- view examples folder to see list of examples on how to use this sdk