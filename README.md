
Nodejs API wrapper for [Bitmama Enterprise](https://bitmama.io/).
This sdk can be used to create crypto wallet and receive crypto transactions

### Installation

```
npm install sdk
```

### Usage

```js
// Require the library
const enterprise = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
```

#### Making calls to the resources

```js
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.listBanks(countryCode)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e));
```
```js
const call = async(param) => {
  const data = await bitmama.createCryptoWallet(param);
  console.log(data);
  return
}
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