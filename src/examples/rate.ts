/**
 *  Get rate between currencies 
*/


import {Ticker } from "../types";
import {Enterprise} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";



const rate: Ticker = "ethghs";
// setup credentials
const bitmama = Enterprise.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.getRate(rate)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))
  

