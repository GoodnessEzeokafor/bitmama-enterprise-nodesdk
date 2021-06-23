import { Ticker } from "types";
import axiosLib from "utils/axios";
import { cryptoRate } from "utils/swapRate";

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
  EthCeurRate: async (url: string, token: string) => {
    const rate = cryptoRate(url, token, "eth", "ceur");
    return rate;
  },

  // bitcoin
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
    const rate = cryptoRate(url, token, "btc", "eth");
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
  // celo

  // ripple

  // stellar

  // cusd

  // ceur


}
export default rates