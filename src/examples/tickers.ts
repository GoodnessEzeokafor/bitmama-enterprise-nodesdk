

/**
 *  Get all tickers on Enterprise 
*/
import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";
const bitmama = BitmamaEnterprise(TEST_API_TOKEN, TEST_ENV);
bitmama.getTickers()
  .then((res: any) => {
    console.log(res);
  })
  .catch((e: any | Error | unknown) => console.log(e));