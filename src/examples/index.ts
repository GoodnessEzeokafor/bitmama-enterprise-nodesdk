import BitmamaEnterprise from "../index"

const bitmama = BitmamaEnterprise("3ee3701e057b26c6b55d0bee2", "dev")
bitmama.enterpriseWallet()
  .then((res: any) => {
    console.log(res);
  })
  .catch((e: any) => console.log(e));
// const body = {
//   coin: "celo",
//   label:"from sdk",
// }
// bitmama.createWallet(body)
//   .then((res:any) => {
//          console.log(res)
//   })
//   .catch((e:any) => console.log(e))
       
  // 3ee3701e057b26c6b55d0bee2