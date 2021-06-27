// import 'module-alias/register';
// import "reflect-metadata";
import resources from "./resources/index"
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
// const Enterprise = () 
export const Enterprise = {
  TOKEN: '',
  ENV: '',
  BASE_URL:'',
  initialize: (TOKEN: string, ENV: Environment): any => {
    try {
      const envList: string[] = ['prod', 'production', 'dev', 'development'];
      const isInEnvList = envList.includes(String(ENV).trim());
      if (typeof TOKEN !== "string") throw new Error(`${TOKEN} should be a string`);
      if (typeof ENV !== "string") throw new Error(`${ENV} should be a string`);
      if (!isInEnvList) throw new Error(`${ENV} should either be a dev or prod`);
      Enterprise.BASE_URL = ENV === "prod" || ENV === "production" ? PRODUCTION_URL : STAGING_URL;
      // set values
      Enterprise.TOKEN = TOKEN;
      Enterprise.ENV = ENV;
      return Enterprise;
    } catch (e: any | Error | unknown) {
      throw e.message;
    }
  },
  createCryptoWallet: async(param:CreateWalletParam) => {
    const res = await resources.wallet.create(Enterprise.BASE_URL, Enterprise.TOKEN, param);
    return res;
  },
  listCryptoWallet: async(coin:Coin,pagination:Pagination) => {
    return resources.wallet.get(Enterprise.BASE_URL, Enterprise.TOKEN, coin, pagination);
  },
  enterpriseWallet: () => {
    return resources.wallet.wallets(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  getRate: async(ticker: Ticker) => {
    return await resources.rates.rates(Enterprise.BASE_URL, Enterprise.TOKEN,ticker);
  },
  tickers: () => {
    return resources.rates.tickers();
  },
  createWebhook: (endpoint: string) => {
    return resources.webhooks.create(Enterprise.BASE_URL, Enterprise.TOKEN, endpoint);
  },
  getWebhook: () => {
    return resources.webhooks.get(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  listBanks: (countryCode:BankCountryCode) => {
    return resources.banks.list(Enterprise.BASE_URL, Enterprise.TOKEN,countryCode);
  },
  resolveBankAccount: (param:BankResolveParam) => {
    return resources.banks.resolve(Enterprise.BASE_URL, Enterprise.TOKEN, param);
  },
  // btc to eth rate
  BtcEthRate: () => {
    return resources.rates.BtcEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to usdt
  BtcUsdtRate: () => {
    return resources.rates.BtcUsdtRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to usdc
  BtcUsdcRate: () => {
    return resources.rates.BtcUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to xrp
  BtcXrpRate: () => {
    return resources.rates.BtcXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to xlm
  BtcXlmRate: () => {
    return resources.rates.BtcXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to celo rate
  BtcCeloRate: () => {
    return resources.rates.BtcCeloRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to cusd
  BtcCusdRate: () => {
    return resources.rates.BtcCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to ceur
  BtcCeurRate: () => {
    return resources.rates.BtcCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to ngn
  BtcNGNRate: () => {
    return resources.rates.BtcNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  //btc to ghs
  BtcGHSRate:() => {
    return resources.rates.BtcGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // btc to usd
  BtcUsdRate: () => {
    return resources.rates.BtcUsdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to ngn
  EthNGNRate: () => {
    return resources.rates.EthNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to ghs
  EthGHSRate:() => {
    return resources.rates.EthGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to btc
  EthBtcRate: () => {
    return resources.rates.EthBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to celo
  EthCeloRate: () => {
    return resources.rates.EthCeloRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to xrp 
  EthXrpRate: () => {
    return resources.rates.EthXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to xlm
  EthXlmRate:() => {
    return resources.rates.EthXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to cusd
  EthCusdRate: () => {
    return resources.rates.EthCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to usdt
  EthUsdtRate: () => {
    return resources.rates.EthUsdtRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to usdc
  EthUsdcRate: () => {
    return resources.rates.EthUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to ceur
  EthCeurRate: () => {
    return resources.rates.EthCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // eth to usd
  EthUsdRate: () => {
    return resources.rates.EthUsdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to ngn
  CeloNGNRate: () => {
    return resources.rates.CeloNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to ghs
  CeloGHSRate: () => {
    return resources.rates.CeloGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to usd
  CeloUSDRate: () => {
    return resources.rates.CeloUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to eth
  CeloEthRate: () => {
    return resources.rates.CeloEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to btc 
  CeloBtcRate: () => {
    return resources.rates.CeloBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to xrp
  CeloXrpRate: () => {
    return resources.rates.CeloXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to xlm
  CeloXlmRate: () => {
    return resources.rates.CeloXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to cusd
  CeloCusdRate: () => {
    return resources.rates.CeloCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to ceur
  CeloCeurRate: () => {
    return resources.rates.CeloCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to usdt
  CeloUsdtRate: () => {
    return resources.rates.CeloUsdtRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // celo to usdc
  CeloUsdcRate: () => {
    return resources.rates.CeloUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },

  // xrp to ngn
  XrpNGNRate: () => {
    return resources.rates.XrpNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to ghs
  XrpGHSRate: () => {
    return resources.rates.XrpGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to usd
  XrpUSDRate: () => {
    return resources.rates.XrpUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to btc
  XrpBtcRate: () => {
    return resources.rates.XrpBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to eth
  XrpEthRate: () => {
    return resources.rates.XrpEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to xlm
  XrpXlmRate: () => {
    return resources.rates.XrpXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to usdt
  XrpUsdtRate: () => {
    return resources.rates.XrpUsdtRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to usdc
  XrpUsdcRate: () => {
    return resources.rates.XrpUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to cusd
  XrpCusdRate: () => {
    return resources.rates.XrpCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xrp to ceur
  XrpCeurRate: () => {
    return resources.rates.XrpCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to ngn
  XlmNGNRate: () => {
    return resources.rates.XlmNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to ghs
  XlmGHSRate: () => {
    return resources.rates.XlmGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to usd
  XlmUSDRate: () => {
    return resources.rates.XlmUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to btc
  XlmBtcRate: () => {
    return resources.rates.XlmBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to eth
  XlmEthRate: () => {
    return resources.rates.XlmEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to xrp
  XlmXrpRate: () => {
    return resources.rates.XlmXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to usdt
  XlmUsdtRate: () => {
    return resources.rates.XlmUsdtRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to usdc
  XlmUsdcRate: () => {
    return resources.rates.XlmUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to cusd
  XlmCusdRate: () => {
    return resources.rates.XlmCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // xlm to ceur
  XlmCeurRate: () => {
    return resources.rates.XlmCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },


  // usdt to ngn
  UsdtNGNRate: () => {
    return resources.rates.UsdtNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to ghs
  UsdtGHSRate: () => {
    return resources.rates.UsdtGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to usd
  UsdtUSDRate: () => {
    return resources.rates.UsdtUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to btc
  UsdtBtcRate: () => {
    return resources.rates.UsdtBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to eth
  UsdtEthRate: () => {
    return resources.rates.UsdtEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to xrp
  UsdtXrpRate: () => {
    return resources.rates.UsdtXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to xlm
  UsdtXlmRate: () => {
    return resources.rates.UsdtXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to usdc
  UsdtUsdcRate: () => {
    return resources.rates.UsdtUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to cusd
  UsdtCusdRate: () => {
    return resources.rates.UsdtCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdt to ceur
  UsdtCeurRate: () => {
    return resources.rates.UsdtCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
// usdc to ngn
  UsdcNGNRate: () => {
    return resources.rates.UsdcNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to ghs
  UsdcGHSRate: () => {
    return resources.rates.UsdcGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to usd
  UsdcUSDRate: () => {
    return resources.rates.UsdcUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to btc
  UsdcBtcRate: () => {
    return resources.rates.UsdcBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to eth
  UsdcEthRate: () => {
    return resources.rates.UsdcEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to xrp
  UsdcXrpRate: () => {
    return resources.rates.UsdcXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to xlm
  UsdcXlmRate: () => {
    return resources.rates.UsdcXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to cusd
  UsdcCusdRate: () => {
    return resources.rates.UsdcCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to ceur
  UsdcCeurRate: () => {
    return resources.rates.UsdcCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to ngn
  CusdNGNRate: () => {
    return resources.rates.CusdNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to ghs
  CusdGHSRate: () => {
    return resources.rates.CusdGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to usd
  CusdUSDRate: async() => {
    return await resources.rates.CusdUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to btc
  CusdBtcRate: async() => {
    return await resources.rates.CusdBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to eth
  CusdEthRate: async() => {
    return await resources.rates.CusdEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to xrp
  CusdXrpRate: async() => {
    return await resources.rates.CusdXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to xlm
  CusdXlmRate: async() => {
    return await resources.rates.CusdXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // usdc to cusd
  CusdUsdcRate: async() => {
    return await resources.rates.CusdUsdcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // cusd to ceur
  CusdCeurRate: async() => {
    return await resources.rates.CusdCeurRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },

  // ceur to ngn
  CeurNGNRate: () => {
    return resources.rates.CeurNGNRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to ghs
  CeurGHSRate: () => {
    return resources.rates.CeurGHSRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to usd
  CeurUSDRate: () => {
    return resources.rates.CeurUSDRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to btc
  CeurBtcRate: () => {
    return resources.rates.CeurBtcRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to eth
  CeurEthRate: () => {
    return resources.rates.CeurEthRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to xrp
  CeurXrpRate: () => {
    return resources.rates.CeurXrpRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to xlm
  CeurXlmRate: () => {
    return resources.rates.CeurXlmRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
  // ceur to cusd
  CeurCusdRate: () => {
    return resources.rates.CeurCusdRate(Enterprise.BASE_URL, Enterprise.TOKEN);
  },
}
// const initialization = Enterprise.init
// const BitmamaEnterprise = initialization.bind(Enterprise)



