/**
 *  Get webhook endpoint
*/



import BitmamaEnterprise from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";



// setup credentials
const bitmama = BitmamaEnterprise.initialize(TEST_API_TOKEN, TEST_ENV);
bitmama.getWebhook()
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e));
