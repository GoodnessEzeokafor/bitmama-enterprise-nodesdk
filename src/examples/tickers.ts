

/**
 *  Get all tickers on Enterprise 
*/
import {Enterprise} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";
const bitmama = Enterprise.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.tickers()
  .then((res: any) => {
    console.log(res);
  })
  .catch((e: any | Error | unknown) => console.log(e));