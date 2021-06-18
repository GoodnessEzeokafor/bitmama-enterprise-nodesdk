/**
 *  Resolve bank account using sdk
*/


import {  BankResolveParam } from "types";
import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";


const param: BankResolveParam = {
  // accountNumber: "test_acccount_number",
  // bankCode:"test_bank_code"
  "accountNumber": "0553561556",
    "bankCode": "058"
}
// setup credentials
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.resolveBankAccount(param)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))
  

