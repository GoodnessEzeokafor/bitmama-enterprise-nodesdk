import {Enterprise} from "../../index"
import { TEST_API_TOKEN, TEST_ENV } from "../setup";


const bitmama = Enterprise.initialize(TEST_API_TOKEN, TEST_ENV);
/**
 * @func createCryptoWallet
 * @description create crypto wallet
 * 
 * 
  const createWallet = async () => {
   const coin: Coin = "xlm";
   const params = {
     coin,
     label:"sdk coin"
   }
  const rate = await bitmama.createCryptoWallet(params);
  return rate;
}

createWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))

 */



/**
 * @func createCeloWallet
 * @description create celo wallet
 * 
 const createCeloWallet = async () => {
 const rate = await bitmama.createCeloWallet("sdk celo coin");
 return rate;
}

createCeloWallet()
 .then(async (res) => {
   console.log(res)
 })
 .catch(e => console.log(e))

 * 
*/



/**
 * @func createBtcWallet
 * @description create btc wallet
 * 
 * 
 const createBtcWallet = async () => {
  const rate = await bitmama.createBtcWallet("sdk btc coin");
  return rate;
 }
 
 createBtcWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))
 

*/





/**
 * @func createEthWallet
 * @description create eth wallet
 * 
 * 
 const createEthWallet = async () => {
  const rate = await bitmama.createEthWallet("sdk eth coin");
  return rate;
 }
 
 createEthWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))
 

*/


/**
 * @func createRippleWallet
 * @description create eth wallet
 * 
 * 
 const createRippleWallet = async () => {
  const rate = await bitmama.createRippleWallet("sdk ripple coin");
  return rate;
 }
 
 createRippleWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))
 
*/

/**
 * @func createStellarWallet
 * @description create eth wallet
 * 
*/
const createStellarWallet = async () => {
  const rate = await bitmama.createStellarWallet("sdk xlm coin");
  return rate;
 }
 
 createStellarWallet()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))
 


