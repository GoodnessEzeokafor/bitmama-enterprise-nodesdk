import 'module-alias/register';
import "reflect-metadata";
import resources from "resources/index"
/**
 * 
 * @param params 
 * @param structure 
 *    - base function thats takes three parameters
 *        * TOKEN  - string - Bitmama enterprise token
 *        * ENV  - env - test || prod
 * 
 *    - load resources  
 *    - config axios - base options with parameters
 */
const STAGING_URL: string = "https://enterprise-api-staging.bitmama.io/v1";
const PRODUCTION_URL: string = "https://enterprise-api.bitmama.io/v1";
const obj:Record<string, any> = {
  resources: resources,
  TOKEN: '',
  ENV: '',
  BASE_URL:'',
  init: (TOKEN: string, ENV: string): any => {
    try {
      const envList: string[] = ['prod', 'production', 'dev', 'development'];
      const isInEnvList = envList.includes(String(ENV).trim());
      if (typeof TOKEN !== "string") throw new Error(`${TOKEN} should be a string`);
      if (typeof ENV !== "string") throw new Error(`${ENV} should be a string`);
      if (!isInEnvList) throw new Error(`${ENV} should either be a dev or prod`);
      obj.BASE_URL = ENV === "prod" || ENV === "production" ? PRODUCTION_URL : STAGING_URL;
      // set values
      obj.TOKEN = TOKEN;
      obj.ENV = ENV;
      return obj;
    } catch (e: any | Error | unknown) {
      throw e.message;
    }
  },
  createWallet: () => {
    // obj.init();
    return resources.wallet.create(obj.BASE_URL, obj.TOKEN);
  },
  listWallet: (coin:string,pagination:Record<string, number>) => {
    return resources.wallet.list(obj.BASE_URL, obj.TOKEN, coin, pagination);
  },
  getRate: (ticker: string) => {
    return resources.rate.rates(obj.BASE_URL, obj.TOKEN,ticker);
  },
  enterpriseWallet: () => {
    return resources.wallet.wallets(obj.BASE_URL, obj.TOKEN);
  }
  getTickers: () => {
    return resources.rate.tickers(obj.BASE_URL, obj.TOKEN);
  },
  createWebhook: () => {
    
  },
  getWebhook: () => {
    
  },
  listBank: () => {
    
  },
  resolveBankAccount: () => {
    
  },
  
}


const initialization = obj.init
const BitmamaEnterprise = initialization.bind(obj)
export default BitmamaEnterprise


