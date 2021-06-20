import { Ticker } from "types";
import axiosLib from "utils/axios";

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
  }
}
export default rates