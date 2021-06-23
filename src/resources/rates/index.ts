import { Ticker } from "types";
import axiosLib from "utils/axios";
import { cryptoRate } from "utils/cryptoRate";

// const root = "/address"
const rates = {
  rates: async(url: string, token: string, ticker:Ticker) => {
    return await axiosLib.getRate(url, token, ticker);
  },
  tickers: async() => {
    const tickers: Ticker[] = [
      'xlmusd',
      'xlmeur',
      'xlmngn',
      'btcghs',
      'ethghs',
      'usdghs',
      'xlmghs',
      'btcusd',
      'ethusd',
      'btcngn',
      'ethngn',
      'usdngn',
      'xrpusd',
      'xrpngn',
      'xrpghs',
      'xrpeur',
      'usdeur',
      'celousd',
      'celongn',
      'celoghs',
      'eurghs',
      'eurngn'
    ];
    return tickers;
  },
  // ethereum
  EthNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "ethngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  EthGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "ethghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  EthBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "btc");
    return rate;
  },
  EthCeloRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "celo");
    return rate;
  },
  EthXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "xrp");
    return rate;
  },
  EthXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "xlm");
    return rate;
  },
  EthCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "cusd");
    return rate;
  },
  EthUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "usdt");
    return rate;
  },
  EthUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "usdc");
    return rate;
  },
  EthCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "ceur");
    return rate;
  },
  EthUsdRate: async (url: string, token: string) => {
    const ticker: Ticker = "ethusd";
    return await axiosLib.getRate(url, token, ticker);
  },
  // bitcoin
  BtcUsdRate: async (url: string, token: string) => {
    const ticker: Ticker = "btcusd";
    return await axiosLib.getRate(url, token, ticker);
  },
  BtcNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "btcngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  BtcGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "btcghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  BtcEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "eth");
    return rate;
  },
  BtcCeloRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "celo");
    return rate;
  },
  BtcXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "xrp");
    return rate;
  },
  BtcXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "xlm");
    return rate;
  },
  BtcCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "cusd");
    return rate;
  },
  BtcCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "ceur");
    return rate;
  },
  BtcUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "usdt");
    return rate;
  },
  BtcUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "usdc");
    return rate;
  },
  // celo
  CeloNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "celongn";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeloGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "celoghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeloEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "celo", "eth");
    return rate;
  },
  CeloXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "celo", "xrp");
    return rate;
  },
  CeloXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "eth");
    return rate;
  },
  CeloCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "cusd");
    return rate;
  },
  CeloCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "btc", "ceur");
    return rate;
  },
  CeloUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "celo", "usdt");
    return rate;
  },
  CeloUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "celo", "usdc");
    return rate;
  },
  CeloUSDRate: async (url: string, token: string) => {
    const ticker: Ticker = "btcusd";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeloBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "celo", "btc");
    return rate;
  },
  // ripple
  XrpNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "xrpngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  XrpGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "xrpghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  XrpUSDRate: async (url: string, token: string) => {
    const ticker: Ticker = "xrpusd";
    return await axiosLib.getRate(url, token, ticker);
  },
  XrpEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "eth");
    return rate;
  },
  XrpBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "btc");
    return rate;
  },
  XrpXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "eth");
    return rate;
  },
  XrpCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "cusd");
    return rate;
  },
  XrpCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "ceur");
    return rate;
  },
  XrpUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "usdt");
    return rate;
  },
  XrpUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xrp", "usdc");
    return rate;
  },
  // stellar
  XlmNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "xlmngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  XlmGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "xlmghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  XlmUSDRate: async (url: string, token: string) => {
    const ticker: Ticker = "xlmusd";
    return await axiosLib.getRate(url, token, ticker);
  },
  XlmXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "xrp");
    return rate;
  },
  XlmBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "btc");
    return rate;
  },
  XlmEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "eth");
    return rate;
  },
  XlmCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "cusd");
    return rate;
  },
  XlmCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "ceur");
    return rate;
  },
  XlmUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "usdt");
    return rate;
  },
  XlmUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "xlm", "usdc");
    return rate;
  },
  // cusd
  CusdNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  CusdGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  CusdUSDRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "usd");
    return rate;
  },
  CusdBtcRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "btc");
    return rate;
  },
  CusdEthRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "eth");
    return rate;
  },
  CusdXlmRate: async (url: string, token: string):Promise<number> => {
    const rate:number = await cryptoRate(url, token, "cusd", "xlm");
    return rate;
  },
  CusdCeurRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "ceur");
    return rate;
  },
  CusdUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "cusd", "usdt");
    return rate;
  },
  CusdUsdcRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "usdc");
    return rate;
  },
  CusdXrpRate: async (url: string, token: string) => {
    const rate = await cryptoRate(url, token, "cusd", "xrp");
    return rate;
  },
  // ceur
  CeurNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "eurngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeurGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "eurghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeurUSDRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdeur";
    return await axiosLib.getRate(url, token, ticker);
  },
  CeurEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "eth");
    return rate;
  },
  CeurXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "xrp");
    return rate;
  },
  CeurBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "btc");
    return rate;
  },
  CeurXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "eth");
    return rate;
  },
  CeurCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "cusd");
    return rate;
  },
  CeurUsdtRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "usdt");
    return rate;
  },
  CeurUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "ceur", "usdc");
    return rate;
  },
  UsdtGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  UsdtNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdngn";
    return await axiosLib.getRate(url, token, ticker);
  },
  UsdtUSDRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "usd");
    return rate;
  },
  UsdtBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "btc");
    return rate;
  },
  UsdtEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "eth");
    return rate;
  },
  UsdtXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "xrp");
    return rate;
  },
  UsdtXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "xlm");
    return rate;
  },
  UsdtUsdcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "usdc");
    return rate;
  },
  UsdtCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "cusd");
    return rate;
  },
  UsdtCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "ceur");
    return rate;
  },
  UsdcNGNRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  UsdcGHSRate: async (url: string, token: string) => {
    const ticker: Ticker = "usdghs";
    return await axiosLib.getRate(url, token, ticker);
  },
  UsdcUSDRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdt", "usd");
    return rate;
  },

  UsdcBtcRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "btc");
    return rate;
  },
  UsdcEthRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "eth");
    return rate;
  },
  UsdcXrpRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "xrp");
    return rate;
  },
  UsdcXlmRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "xlm");
    return rate;
  },
  UsdcCusdRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "cusd");
    return rate;
  },
  UsdcCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "usdc", "ceur");
    return rate;
  }
}
export default rates