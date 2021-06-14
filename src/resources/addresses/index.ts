import { Coin, CreateWalletParam, Pagination } from "types"
import axiosLib from "utils/axios"

// const root = "/address"
const wallet = {
  create: async(url: string, token: string, param:CreateWalletParam) => {
    return await axiosLib.createWalletAddress(url, token, param);
  },
  get: (url: string, token: string,coin:Coin, pagination:Pagination) => {
    console.log(url)
    console.log(token)
    console.log(coin)
    console.log(pagination)
  },
  wallets: async (url: string, token: string) => {
    return await axiosLib.listWallets(url, token);
  }
}
export default wallet