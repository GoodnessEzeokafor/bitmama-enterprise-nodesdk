/**
 *  Create webhook endpoint
*/



  


import {obj} from "../index"
import { TEST_API_TOKEN, TEST_ENV } from "./setup";
  
  
  
// setup credentials
const bitmama = obj.initialize(TEST_API_TOKEN, TEST_ENV);
const endpoint:string = "example.com"
bitmama.createWebhook(endpoint)
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e));
    
  
    