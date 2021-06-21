import { Coin } from "types";
import { round } from 'lodash';
import axiosLib from "utils/axios";
const isStableCoin = (coin:Coin): boolean => {
  const coins: Coin[] = [
    'usdt',
    'usdc',
    'busd',
    'dai',
    'ust',
    'pax',
    'husd',
    'tusd',
    'jst',
    'usdn',
    'usdt-tron',
    'cusd',
    'husd',
    'gusd',
  ];

  return coins.includes(coin);
}
const isEuroStableCoin = (coin:Coin) => {
  const stableCoins: Coin[] = [
    'ceur'
  ]
  return stableCoins.includes(coin);
}

export const utilRate = async (url: string, token: string, source: Coin, destination: Coin): Promise<number> => {
  try {
    // rate between two dollar stable coins
    if(isStableCoin(source) && isStableCoin(destination)){
      const rate:number = 1
     return Promise.resolve(round(rate));   
    }
    // rate between two euro stable coin
    if(isEuroStableCoin(source) && isEuroStableCoin(destination)){
      const rate:number = 1
     return Promise.resolve(round(rate));   
    }
    // rate between a dollar stable coin and euro stable coin 
    if ((isEuroStableCoin(source) && isStableCoin(destination)) || (isEuroStableCoin(destination) && isStableCoin(source))) {
      const baseDollarReq = await axiosLib.getRate(url, token, `usdeur`);
      const baseRate: number = baseDollarReq['buy'];
      return Promise.resolve(baseRate);
    }
    // if source is stable coin
    if(isStableCoin(source)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${destination}usd`);
      const baseRate: number = baseDollarReq['buy'];
      return Promise.resolve(baseRate);
    }
    // if destination coin is a stable coin
    if (isStableCoin(destination)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${source}usd`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
    }
    //source is an euro stable coin
    if (isEuroStableCoin(source)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${destination}eur`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
    }  
    // destination is an euro stable coin
    if (isEuroStableCoin(destination)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${source}eur`);
      const baseRate: number = baseDollarReq['buy'];
      return Promise.resolve(baseRate);
    }
    const sourceDollarReq = await axiosLib.getRate(url, token, `${source}usd`);
    const destinationDollarReq = await axiosLib.getRate(url, token, `${destination}usd`);
    const baseRate: number = sourceDollarReq['buy'];
    const substrateRate: number = destinationDollarReq['buy'];
    return Promise.resolve(round(baseRate / substrateRate, 5));
  }catch(e){
    return Promise.reject(e);    
  } 
}