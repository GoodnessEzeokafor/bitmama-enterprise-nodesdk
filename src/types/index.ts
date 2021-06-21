export type Pagination = {
  page: number,
  size: number,
};

export type Coin = "btc" | "tbtc" | "celo" | "xlm" | "xrp" | "eth" | "teth" | 'ceur' | 'usdt' |
  'usdc' | 'busd' | 'dai' | 'ust' | 'pax' | 'husd' | 'tusd' | 'jst' | 'usdn' | 'usdt-tron' | 'cusd' |
  'husd' | 'gusd';
   
export type Environment = "prod" | "production" | "dev" | "development";

export type Ticker = 'xlmusd' | 'xlmngn' | 'btcghs' | 'ethghs' | 'usdghs' | 'xlmghs' | 'btcusd' | 'ethusd' | 'btcngn'
  | 'ethngn' | 'usdngn' | 'xrpusd' | 'xrpngn' | 'xrpghs' | 'celousd' | 'celongn' | 'celoghs' | 'eurghs' | 'eurngn' | 'xlmeur'
  | 'usdeur' | 'xrpeur' | 'usdeur';
  
export type BankCountryCode = 'ng' | 'gh';

export type BankResolveParam = {
  accountNumber?: string,
  bankCode?: string,
};

export type CreateWalletParam = {
  coin: Coin,
  label: string,
};