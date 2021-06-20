
Nodejs API wrapper for [Bitmama Enterprise](https://bitmama.io/).

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
The resource methods accepts are promisified, but can receive optional callback as the last argument.

```ts

const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.listBanks(countryCode)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e));
```


### Resources

- customer
  - create
  - get
  - list
  - update
- transaction
  - initialize
  - charge
  - get
  - list
  - totals
  - verify
- plan
  - create
  - get
  - list
  - update
- page
  - create
  - get
  - list
  - update
- subscription
  - create
  - disable
  - enable
  - get
  - list
- subaccount
  - create
  - get
  - list
  - listBanks
  - update
- Miscellanous
  - list_banks
  - resolve_bin
  


### Contributing
- To ensure consistent code style, please follow the [editorconfig rules](http://obem.be/2015/06/01/a-quick-note-on-editorconfig.html) in .editorconfig

### Tests

To run tests, add your Paystack test secret key to `package.json`. (The test line should look something like this: `env KEY=sk_test_1a68ac96a0171fb72111a24295d8d31d41c28eed ./node_modules/.bin/mocha...`). Now run:

```
npm test
```

If you are contributing to the repo, kindly update the necessary test file in `/test` or add a new one and ensure all tests are passed before sending a PR.

### Todo

- Proper resource examples
- ES6 support
