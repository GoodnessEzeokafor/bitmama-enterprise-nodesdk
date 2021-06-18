import 'module-alias/register';
import "reflect-metadata";
import resources from "resources/index"
import { BankCountryCode, BankResolveParam, Coin, CreateWalletParam, Environment, Pagination, Ticker } from 'types';
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
const obj = {
  resources: resources,
  TOKEN: '',
  ENV: '',
  BASE_URL:'',
  init: (TOKEN: string, ENV: Environment): any => {
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
  createCryptoWallet: async(param:CreateWalletParam) => {
    const res = await resources.wallet.create(obj.BASE_URL, obj.TOKEN, param);
    return res;
  },
  listCryptoWallet: async(coin:Coin,pagination:Pagination) => {
    return resources.wallet.get(obj.BASE_URL, obj.TOKEN, coin, pagination);
  },
  enterpriseWallet: () => {
    return resources.wallet.wallets(obj.BASE_URL, obj.TOKEN);
  },
  getRate: (ticker: Ticker) => {
    return resources.rates.rates(obj.BASE_URL, obj.TOKEN,ticker);
  },
  getTickers: () => {
    return resources.rates.tickers();
  },
  createWebhook: (endpoint: string) => {
    
    return resources.webhooks.create(obj.BASE_URL, obj.TOKEN, endpoint);
  },
  getWebhook: () => {
    return resources.webhooks.get(obj.BASE_URL, obj.TOKEN);
  },
  listBanks: (countryCode:BankCountryCode) => {
    return resources.banks.list(obj.BASE_URL, obj.TOKEN,countryCode);
  },
  resolveBankAccount: (param:BankResolveParam) => {
    return resources.banks.resolve(obj.BASE_URL, obj.TOKEN, param);
  },

}



const initialization = obj.init
const BitmamaEnterprise = initialization.bind(obj)
export default BitmamaEnterprise


