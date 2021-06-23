/**
 *  Get rate between crypto currencies 
*/


// import {Ticker } from "types";
import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";



// const rate: Ticker = "ethghs";
// setup credentials
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);

// implementation 1
// bitmama.BtcCusdRate()
//   .then((res: any) => console.log(res))
//   .catch((e: any) => console.log(e))
  

// implementation 2
const rate = async () => {
  const rate1 = await bitmama.BtcUsdRate();
  return rate1;
}
rate()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))