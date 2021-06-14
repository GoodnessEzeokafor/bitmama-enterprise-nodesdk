export type Pagination = {
  page: number,
  size: number,
};
export type Coin = "btc" | "tbtc" | "celo" | "xlm" | "xrp" | "eth" | "teth";
export type Environment = "prod" | "production" | "dev" | "development";
export type Ticker = 'xlmusd' | 'xlmngn' | 'btcghs' | 'ethghs' | 'usdghs' | 'xlmghs' | 'btcusd' | 'ethusd' | 'btcngn' 
            | 'ethngn' | 'usdngn' | 'xrpusd' | 'xrpngn' |'xrpghs' |'celousd' | 'celongn' | 'celoghs' | 'eurghs'| 'eurngn'
export type BankCountryCode = 'ng' | 'gh'
export type BankResolveParam = {
  accountNumber?: string,
  bankCode?:string,
}