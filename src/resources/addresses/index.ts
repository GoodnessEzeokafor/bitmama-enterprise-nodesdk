import { Coin, CreateWalletParam, Pagination } from "types"
import axiosLib from "utils/axios"


const wallet = {
  create: async(url: string, token: string, param:CreateWalletParam) => {
    return await axiosLib.createWalletAddress(url, token, param);
  },
  get: async(url: string, token: string,coin:Coin, pagination:Pagination) => {
    return await axiosLib.getWalletAddress(url, token, coin, pagination);
  },
  wallets: async (url: string, token: string) => {
    return await axiosLib.listWallets(url, token);
  }
}
export default wallet