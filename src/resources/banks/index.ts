import { BankCountryCode, BankResolveParam } from "types";
import axiosLib from "utils/axios";

const banks = {
  list: async(url:string, token:string, countryCode:BankCountryCode) => {
    return await axiosLib.listBanks(url, token, countryCode);
  },
  resolve: async(url:string, token:string,param:BankResolveParam) => {
    return await axiosLib.resolveBank(url, token, param);
  }
}
export default banks;
