/**
 *  List banks using sdk
*/


import { BankCountryCode } from "../types";
import {obj} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";


const countryCode: BankCountryCode = "ng";
// setup credentials
const bitmama = obj.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.listBanks(countryCode)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))
  

