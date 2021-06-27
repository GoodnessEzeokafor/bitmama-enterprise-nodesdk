/**
 *  Get webhook endpoint
*/



import {Enterprise} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";



// setup credentials
const bitmama = Enterprise.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.getWebhook()
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e));
