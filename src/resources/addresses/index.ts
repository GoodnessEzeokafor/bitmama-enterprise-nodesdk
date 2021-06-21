import { Coin, CreateWalletParam, Environment, Pagination } from "types"
import axiosLib from "utils/axios"
import { checkEnv } from "utils/checkEnv";


const wallet = {
  create: async(url: string, token: string, param:CreateWalletParam) => {
    return await axiosLib.createWalletAddress(url, token, param);
  },
  get: async(url: string, token: string,coin:Coin, pagination:Pagination) => {
    return await axiosLib.getWalletAddress(url, token, coin, pagination);
  },
  wallets: async (url: string, token: string) => {
    return await axiosLib.listWallets(url, token);
  },
  createCeloWallet: async (url: string, token: string, label: string) => {
    const coin: Coin = "celo";
    const param: CreateWalletParam = {
      label, coin
    };
    return await axiosLib.createWalletAddress(url, token, param);
  },
  createBtcWallet: async (url: string, token: string, label: string, env: Environment) => {
    checkEnv(env);
    const coin: Coin = env === "prod" || env === "production" ? "btc" : "tbtc";
    const param: CreateWalletParam = {
      label, coin
    };
    return await axiosLib.createWalletAddress(url, token, param);
  },
  createEthWallet: async (url: string, token: string, label: string, env: Environment) => {
    checkEnv(env);
    const coin: Coin = env === "prod" || env === "production" ? "eth" : "teth";
    const param: CreateWalletParam = {
      label, coin
    };
    return await axiosLib.createWalletAddress(url, token, param);
  },
  createRippleWallet: async (url: string, token: string, label: string) => {
    const coin: Coin = "xrp";
    const param: CreateWalletParam = {
      label, coin
    };
    return await axiosLib.createWalletAddress(url, token, param);
  },
  createStellarWallet: async (url: string, token: string, label: string) => {
    const coin: Coin = "xlm";
    const param: CreateWalletParam = {
      label, coin
    };
    return await axiosLib.createWalletAddress(url, token, param);
  }
}
export default wallet