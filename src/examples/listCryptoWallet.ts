/**
 *  Get crypto wallet using sdk
*/


import { Coin, Pagination } from "../types";
import {Enterprise} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";


const coin: Coin = "celo";
const pagination: Pagination = {
  page: 1,
  size: 2
};

// setup credentials
const bitmama = Enterprise.initialize(TEST_API_TOKEN, TEST_ENV);
const call = async (cn: Coin, pagin: Pagination) => {
  const data = await bitmama.listCryptoWallet(cn, pagin);
  console.log(data);
  return;
};
call(coin, pagination);
  