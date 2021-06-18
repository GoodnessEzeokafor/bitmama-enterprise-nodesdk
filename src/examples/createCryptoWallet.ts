/**
 *  Create crypto wallet using sdk
*/

import { Coin, CreateWalletParam } from "types";
import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";

const label: string = "test label";
const coin: Coin = "celo";
const param: CreateWalletParam = { label, coin };

// setup credentials
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.createCryptoWallet(param)
  .then((res: any) => {
    console.log(res);
  })
  .catch((e: any | Error | unknown) => console.log(e));