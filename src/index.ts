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
  tickers: () => {
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
  // btc to eth rate
  BtcEthRate: () => {
    return resources.rates.BtcEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to usdt
  BtcUsdtRate: () => {
    return resources.rates.BtcUsdtRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to usdc
  BtcUsdcRate: () => {
    return resources.rates.BtcUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to xrp
  BtcXrpRate: () => {
    return resources.rates.BtcXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to xlm
  BtcXlmRate: () => {
    return resources.rates.BtcXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to celo rate
  BtcCeloRate: () => {
    return resources.rates.BtcCeloRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to cusd
  BtcCusdRate: () => {
    return resources.rates.BtcCeloRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to ceur
  BtcCeurRate: () => {
    return resources.rates.BtcCeurRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to ngn
  BtcNGNRate: () => {
    return resources.rates.BtcNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  //btc to ghs
  BtcGHSRate:() => {
    return resources.rates.BtcGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // btc to usd
  BtcUsdRate: () => {
    return resources.rates.BtcUsdRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to ngn
  EthNGNRate: () => {
    return resources.rates.EthNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to ghs
  EthGHSRate:() => {
    return resources.rates.EthGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to btc
  EthBtcRate: () => {
    return resources.rates.EthBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to celo
  EthCeloRate: () => {
    return resources.rates.EthCeloRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to xrp 
  EthXrpRate: () => {
    return resources.rates.EthXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to xlm
  EthXlmRate:() => {
    return resources.rates.EthXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to cusd
  EthCusdRate: () => {
    return resources.rates.EthCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to usdt
  EthUsdtRate: () => {
    return resources.rates.EthUsdtRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to usdc
  EthUsdcRate: () => {
    return resources.rates.EthUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to ceur
  EthCeurRate: () => {
    return resources.rates.EthCeurRate(obj.BASE_URL, obj.TOKEN);
  },
  // eth to usd
  EthUsdRate: () => {
    return resources.rates.EthUsdRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to ngn
  CeloNGNRate: () => {
    return resources.rates.CeloNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to ghs
  CeloGHSRate: () => {
    return resources.rates.CeloGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to usd
  CeloUSDRate: () => {
    return resources.rates.CeloUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to eth
  CeloEthRate: () => {
    return resources.rates.CeloEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to btc 
  CeloBtcRate: () => {
    return resources.rates.CeloBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to xrp
  CeloXrpRate: () => {
    return resources.rates.CeloEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to xlm
  CeloXlmRate: () => {
    return resources.rates.CeloXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to cusd
  CeloCusdRate: () => {
    return resources.rates.CeloCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to ceur
  CeloCeurRate: () => {
    return resources.rates.CeloCeurRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to usdt
  CeloUsdtRate: () => {
    return resources.rates.CeloUsdtRate(obj.BASE_URL, obj.TOKEN);
  },
  // celo to usdc
  CeloUsdcRate: () => {
    return resources.rates.CeloUsdcRate(obj.BASE_URL, obj.TOKEN);
  },

  // xrp to ngn
  // xrp to ghs
  // xrp to usd
  // xrp to btc
  // xrp to eth
  // xrp to xrp
  // xrp to xlm
  // xrp to usdt
  // xrp to usdc
  // xrp to cusd
  // xrp to ceur


  // xlm to ngn
  // xlm to ghs
  // xlm to usd
  // xlm to btc
  // xlm to eth
  // xlm to xrp
  // xlm to xlm
  // xlm to usdt
  // xlm to usdc
  // xlm to cusd
  // xlm to ceur



    // xlm to ngn
  // xlm to ghs
  // xlm to usd
  // xlm to btc
  // xlm to eth
  // xlm to xrp
  // xlm to xlm
  // xlm to usdt
  // xlm to usdc
  // xlm to cusd
  // xlm to ceur

  // usdt to ngn
  // usdt to ghs
  // usdt to usd
  // usdt to btc
  // usdt to eth
  // usdt to xrp
  // usdt to xlm
  // usdt to usdc
  // usdt to cusd
  // usdt to ceur

// usdc to ngn
  // usdc to ghs
  // usdc to usd
  // usdc to btc
  // usdc to eth
  // usdc to xrp
  // usdc to xlm
  // usdc to cusd
  // usdc to ceur



  // cusd to ngn
  // cusd to ghs
  // cusd to usd
  // cusd to btc
  // cusd to eth
  // cusd to xrp
  // cusd to xlm
  // usdc to cusd
  // cusd to ceur




    // ceur to ngn
  // ceur to ghs
  // ceur to usd
  // ceur to btc
  // ceur to eth
  // ceur to xrp
  // ceur to xlm
  // ceur to cusd
  // ceur to ceur

}
const initialization = obj.init
const BitmamaEnterprise = initialization.bind(obj)
export default BitmamaEnterprise


