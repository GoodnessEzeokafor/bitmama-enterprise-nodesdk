

/**
 *  Get all tickers on Enterprise 
*/
import {obj} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";
const bitmama = obj.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.tickers()
  .then((res: any) => {
    console.log(res);
  })
  .catch((e: any | Error | unknown) => console.log(e));