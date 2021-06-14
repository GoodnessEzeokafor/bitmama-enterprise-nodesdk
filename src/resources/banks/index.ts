import { BankCountryCode, BankResolveParam } from "types";

const banks = {
  list: (url:string, token:string, countryCode:BankCountryCode) => {
    console.log(url);
    console.log(token);
    console.log(countryCode);
  },
  resolve: (url:string, token:string,param:BankResolveParam) => {
    console.log(url);
    console.log(token);
    console.log(param);
  }
}
export default banks;
