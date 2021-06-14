import { Ticker } from "types";

// const root = "/address"
const rates = {
  rates: (url: string, token: string, ticker:Ticker) => {
    console.log(url)
    console.log(token)
    console.log(ticker);
  },
  tickers: () => {
    const tickers: Ticker[] = [
      'xlmusd',
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