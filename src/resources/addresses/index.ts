import { Coin, Pagination } from "types"

// const root = "/address"
const wallet = {
  create: (url: string, token: string) => {
    console.log(url)
    console.log(token)
  },
  get: (url: string, token: string,coin:Coin, pagination:Pagination) => {
    console.log(url)
    console.log(token)
    console.log(coin)
    console.log(pagination)
  },
  wallets: (url: string, token: string) => {
    console.log(url)
    console.log(token)
  }
}
export default wallet