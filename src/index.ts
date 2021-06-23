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
  XrpNGNRate: () => {
    return resources.rates.XrpNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to ghs
  XrpGHSRate: () => {
    return resources.rates.XrpGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to usd
  XrpUSDRate: () => {
    return resources.rates.XrpUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to btc
  XrpBtcRate: () => {
    return resources.rates.XrpBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to eth
  XrpEthRate: () => {
    return resources.rates.XrpEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to xlm
  XrpXlmRate: () => {
    return resources.rates.XrpXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to usdt
  XrpUsdtRate: () => {
    return resources.rates.XrpUsdtRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to usdc
  XrpUsdcRate: () => {
    return resources.rates.XrpUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to cusd
  XrpCusdRate: () => {
    return resources.rates.XrpCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // xrp to ceur
  XrpCeurRate: () => {
    return resources.rates.XrpCeurRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to ngn
  XlmNGNRate: () => {
    return resources.rates.XlmNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to ghs
  XlmGHSRate: () => {
    return resources.rates.XlmGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to usd
  XlmUSDRate: () => {
    return resources.rates.XlmUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to btc
  XlmBtcRate: () => {
    return resources.rates.XlmBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to eth
  XlmEthRate: () => {
    return resources.rates.XlmEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to xrp
  XlmXrpRate: () => {
    return resources.rates.XlmXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to usdt
  XlmUsdtRate: () => {
    return resources.rates.XlmUsdtRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to usdc
  XlmUsdcRate: () => {
    return resources.rates.XlmUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to cusd
  XlmCusdRate: () => {
    return resources.rates.XlmCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // xlm to ceur
  XlmCeurRate: () => {
    return resources.rates.XlmCeurRate(obj.BASE_URL, obj.TOKEN);
  },


  // usdt to ngn
  UsdtNGNRate: () => {
    return resources.rates.UsdtNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to ghs
  UsdtGHSRate: () => {
    return resources.rates.UsdtGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to usd
  UsdtUSDRate: () => {
    return resources.rates.UsdtUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to btc
  UsdtBtcRate: () => {
    return resources.rates.UsdtBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to eth
  UsdtEthRate: () => {
    return resources.rates.UsdtEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to xrp
  UsdtXrpRate: () => {
    return resources.rates.UsdtXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to xlm
  UsdtXlmRate: () => {
    return resources.rates.UsdtXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to usdc
  UsdtUsdcRate: () => {
    return resources.rates.UsdtUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to cusd
  UsdtCusdRate: () => {
    return resources.rates.UsdtCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdt to ceur
  UsdtCeurRate: () => {
    return resources.rates.UsdtCeurRate(obj.BASE_URL, obj.TOKEN);
  },
// usdc to ngn
  UsdcNGNRate: () => {
    return resources.rates.UsdcNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to ghs
  UsdcGHSRate: () => {
    return resources.rates.UsdcGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to usd
  UsdcUSDRate: () => {
    return resources.rates.UsdcUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to btc
  UsdcBtcRate: () => {
    return resources.rates.UsdcBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to eth
  UsdcEthRate: () => {
    return resources.rates.UsdcEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to xrp
  UsdcXrpRate: () => {
    return resources.rates.UsdcXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to xlm
  UsdcXlmRate: () => {
    return resources.rates.UsdcXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to cusd
  UsdcCusdRate: () => {
    return resources.rates.UsdcCusdRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to ceur
  UsdcCeurRate: () => {
    return resources.rates.UsdcCeurRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to ngn
  CusdNGNRate: () => {
    return resources.rates.CusdNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to ghs
  CusdGHSRate: () => {
    return resources.rates.CusdGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to usd
  CusdUSDRate: async() => {
    return await resources.rates.CusdUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to btc
  CusdBtcRate: async() => {
    return await resources.rates.CusdBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to eth
  CusdEthRate: async() => {
    return await resources.rates.CusdEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to xrp
  CusdXrpRate: async() => {
    return await resources.rates.CusdXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to xlm
  CusdXlmRate: async() => {
    return await resources.rates.CusdXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // usdc to cusd
  CusdUsdcRate: async() => {
    return await resources.rates.CusdUsdcRate(obj.BASE_URL, obj.TOKEN);
  },
  // cusd to ceur
  CusdCeurRate: async() => {
    return await resources.rates.CusdCeurRate(obj.BASE_URL, obj.TOKEN);
  },

  // ceur to ngn
  CeurNGNRate: () => {
    return resources.rates.CeurNGNRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to ghs
  CeurGHSRate: () => {
    return resources.rates.CeurGHSRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to usd
  CeurUSDRate: () => {
    return resources.rates.CeurUSDRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to btc
  CeurBtcRate: () => {
    return resources.rates.CeurBtcRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to eth
  CeurEthRate: () => {
    return resources.rates.CeurEthRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to xrp
  CeurXrpRate: () => {
    return resources.rates.CeurXrpRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to xlm
  CeurXlmRate: () => {
    return resources.rates.CeurXlmRate(obj.BASE_URL, obj.TOKEN);
  },
  // ceur to cusd
  CeurCusdRate: () => {
    return resources.rates.CeurCusdRate(obj.BASE_URL, obj.TOKEN);
  },
}
const initialization = obj.init
const BitmamaEnterprise = initialization.bind(obj)
export default BitmamaEnterprise


