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

export const utilRate = async (url: string, token: string, base: Coin, substrate: Coin): Promise<number> => {
  try{
    if(isStableCoin(base) && isStableCoin(substrate)){
      const rate:number = 1
     return Promise.resolve(round(rate));   
    }
    if(isEuroStableCoin(base) && isEuroStableCoin(substrate)){
      const rate:number = 1
     return Promise.resolve(round(rate));   
    }

    if ((isEuroStableCoin(base) && isStableCoin(substrate)) || (isEuroStableCoin(substrate) && isStableCoin(base))) {
      const baseDollarReq = await axiosLib.getRate(url, token, `usdeur`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);      
    }
    // subtrate is stable coin
    if (isStableCoin(substrate)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${base}usd`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
    }
    // base is stable coin
    if(isStableCoin(base)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${substrate}usd`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
    }
  
    // subtrate is an euro stable coin
    if (isEuroStableCoin(substrate)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${base}eur`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
      
    }
    //base is an euro stable coin
    if (isEuroStableCoin(base)){
      const baseDollarReq = await axiosLib.getRate(url, token, `${substrate}eur`);
      const baseRate: number = baseDollarReq['buy'];
      console.log("BASE RATE",baseRate)
      return Promise.resolve(baseRate);
    }

    const baseDollarReq = await axiosLib.getRate(url, token, `${base}usd`);
    const substrateDollarReq = await axiosLib.getRate(url, token, `${substrate}usd`);
    const baseRate: number = baseDollarReq['buy'];
    const substrateRate: number = substrateDollarReq['buy'];
    return Promise.resolve(round(baseRate / substrateRate, 5));  
  }catch(e){
    return Promise.reject(e);    
  } 
}