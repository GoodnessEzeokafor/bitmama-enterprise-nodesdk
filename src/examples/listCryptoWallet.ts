/**
 *  Get crypto wallet using sdk
*/


import { Coin, Pagination } from "types";
import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";


const coin: Coin = "celo";
const pagination: Pagination = {
  page: 1,
  size: 15
};

// setup credentials
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.listCryptoWallet(coin, pagination)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))
  

