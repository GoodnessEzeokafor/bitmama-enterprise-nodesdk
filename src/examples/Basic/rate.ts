// import {Ticker } from "types";
import {obj} from "../../index"
import { TEST_API_TOKEN, TEST_ENV } from "../setup";


const bitmama = obj.initialize(TEST_API_TOKEN, TEST_ENV);

/**
 * @func getRate
 * @description rate
 * 
const getRate = async () => {
  const ticker: Ticker = "xlmngn";
  const rate = await bitmama.getRate(ticker);
  return rate;
}

getRate()
  .then(async (res) => {
    console.log(res)
  })
  .catch(e => console.log(e))

 */

/**
 * @func BtcEthRate
 * @description btc to eth rate
 * 
const getBtcEthRate = async () => {
  const rate = bitmama.BtcEthRate()
  return rate
}
getBtcEthRate()
  .then(async (res) => {
    console.log(res);
  })
  .catch((e) => console.log(e))
 
*/



/**
 * @BtcUsdtRate
 * @description btc to usdt rate
 * 
 const getBtcUsdtRate = async () => {
  const rate = bitmama.BtcUsdtRate()
  return rate;
}

getBtcUsdtRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
 */






/**
 * @func BtcUsdcRate
 * @description btc to usdc
 * 
 bitmama.BtcUsdcRate()
  .then((res: any) => console.log(res))
  .catch((e: any) => console.log(e))
 */



/**
 * @func BtcXrpRate
 * @description btc to xrp
 * 
const getBtcXrpRate = async () => {
  const rate = bitmama.BtcXrpRate()
  return rate
}
getBtcXrpRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
*/

/**
 * @func BtcXlmRate
 * @description btc to xlm
 * 
const getBtcXlmRate = async () => {
  const rate = bitmama.BtcXlmRate()
  return rate;
}
getBtcXlmRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
 
 */

  /**
   * @func BtcCeloRate
   * @description btc to celo
   * 
const getBtcCeloRate = async () => {
  const rate = await bitmama.BtcCeloRate()
  return rate
}
getBtcCeloRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   
   */

  /**
   * @func BtcCeurRate
   * @description btc to ceur
   *
const getBtcCeurRate =  async() => {
  const rate = await bitmama.BtcCeurRate()
  return rate
}
getBtcCeurRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   
   */



/**
 * @func BtcNGNRate
 * @description btc to ngn
 * 
const getBtcNGNRate = async () => {
  const rate = await bitmama.BtcNGNRate()
  return rate;
}
getBtcNGNRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
 
 */


  /**
   * @func BtcGHSRate 
   * @description  btc to ghs
   * @rate btc to ghs
   * 
  const getBtcGHSRate = async () => {
  const rate = await bitmama.BtcGHSRate();
  return rate;
}
getBtcGHSRate()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))

   */


 /**
  * @func BtcUsdRate
  * @description btc to usd
  * @rate btc to usd
  * 
const getBtcUsdRate = async () => {
  const rate = await bitmama.BtcUsdRate()
  return rate;
}
getBtcUsdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
  */

  /** 
   * @func  EthNGNRate
   * @description eth to ngn
   * 
const getEthNGNRate = async () => {
  const rate = await bitmama.EthNGNRate();
  return rate;
}
getEthNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */

/**
 * @func EthGHSRate
 * @description
 
 const getEthGHSRate = async () => {
  const rate = await bitmama.EthGHSRate()
  return rate;
}
getEthGHSRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
*/

/**
 * @func
 * @description 
 * 
const getEthBtcRate = async () => {
  const rate = await bitmama.EthBtcRate()
  return rate;
};
getEthBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

  /**
   * @func EthCeloRate
   * @description eth to celo
   * 
const getEthCeloRate = async () => {
  const rate = await bitmama.EthCeloRate();
  return rate;
}
getEthCeloRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

   * @returns @number
   */


  
/**
 * @func EthXrpRate
 * @description eth to xrp
 
 const getEthXrpRate = async () => {
  const rate = await bitmama.EthXrpRate()
  return rate;
}
getEthXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 * @returns 
 */


/**
 * @func EthXlmRate
 * @description eth to xlm
 * 
 
 const getEthXlmRate = async () => {
  const rate = await bitmama.EthXlmRate();
  return rate;
}
getEthXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 */


/**
 * @func  EthCusdRate
 * @description eth to cusd
 * 
const getEthCusdRate = async () => {
  const rate = await bitmama.EthCusdRate()
  return rate;
}
getEthCusdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

  /**
   * @func EthUsdtRate
   * @description eth to usdt
   * 
const getEthUsdtRate = async () => {
  const rate = await bitmama.EthUsdtRate()
  return rate;
}
getEthUsdtRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */

  /**
   * @func EthUsdcRate
   * @description eth to usdc
   * 
   
const getEthUsdcRate = async () => {
  const rate = await bitmama.EthUsdcRate()
  return rate;
}
getEthUsdcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))   
   
   * @returns 
   */

  /**
   * @func EthCeurRate
   * @description eth to ceur
   * 
const getEthCeurRate = async () => {
  const rate = await bitmama.EthCeurRate()
  return rate;
}
getEthCeurRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */
/**
 * @func EthUsdRate
 * @description eth to usdt
 * 
 const getEthUsdRate = async () => {
  const rate = await bitmama.EthUsdRate()
  return rate;
}
getEthUsdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 * @returns 
 */

/**
 * @func CeloNGNRate
 * @description celo to ngn 
 * 
const getCeloNGNRate = async () => {
  const rate = await bitmama.CeloNGNRate()
  return rate;
}
getCeloNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e)) 
 */

/**
 * @func CeloGHSRate
 * @description celo to ghs
 * 
const getCeloGHSRate = async () => {
  const rate = await bitmama.CeloGHSRate()
  return rate;
}
getCeloGHSRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */

/**
 * @func CeloUSDRate
 * @description celo to usd
 * 
const getCeloUSDRate = async () => {
  const rate = await bitmama.CeloUSDRate()
  return rate;
}
getCeloUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

/**
 * @func CeloEthRate
 * @description celo to eth
 * 
const getCeloEthRate = async () => {
  const rate = await bitmama.CeloEthRate();
  return rate;
}
getCeloEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */
/**
 * @function CeloBtcRate
 * @description celo to btc
 * 
 const getCeloBtcRate = async () => {
  const rate = await bitmama.CeloBtcRate()
  return rate;
}
getCeloBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
/**
 * @func CeloXrpRate
 * @description celo to xrp
 * 
const getCeloXrpRate = async () => {
  const rate = await bitmama.CeloXrpRate()
  return rate;
}

getCeloXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

  /**
   * @function CeloXlmRate
   * @description celo to xlm
   * 
const getCeloXlmRate = async () => {
  const rate = await bitmama.CeloXlmRate()
  return rate;
}
getCeloXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */

  /**
   * @func @CeloCusdRate  @CeloCeurRate @CeloUsdtRate @CeloUsdcRate @XrpNGNRate @XrpGHSRate
   * @description celo to cusd, celo to ceur , celo to usdt, celo to usdc , crp to ngn, xrp to ghs
   * 
   * 
   * 
   * celo to cusd
   const getCeloCusdRate = async () => {
      const rate = await bitmama.CeloCusdRate()
      return rate;
    }

  getCeloCusdRate()
    .then(res => console.log(res))
    .catch(e => console.log(e))
   
   * celo to ceur
      const getCeloCeurRate = async () => {
      const rate = await bitmama.CeloCeurRate()
      return rate;
    }
    getCeloCeurRate()
      .then(res => console.log(res))
      .catch(e => console.log(e))
    
    * celo to usdt
   const getCeloUsdtRate = async () => {
      const rate = await bitmama.CeloUsdtRate()
      return rate;
    }
    getCeloUsdtRate()
      .then(res => console.log(res))
      .catch(e => console.log(e))

    * celo to usdc
   const getCeloUsdcRate = async () => {
    const rate = await bitmama.CeloUsdcRate()
      return rate;
    }
    getCeloUsdcRate()
      .then(res => console.log(res))
      .catch(e => console.log(e))

    * xrp to ngn
   
      const getXrpNGNRate = async () => {
        const rate = await bitmama.XrpNGNRate()
        return rate;
      }

      getXrpNGNRate()
        .then(res => console.log(res))
        .catch(e => console.log(e))

    
    * xrp to ghs
   const getXrpGHSRate = async () => {
      const rate = await bitmama.XrpGHSRate()
      return rate;
    }
    getXrpGHSRate()
      .then(res => console.log(res))
      .catch(e => console.log(e))


   */





/**
 * @func  XrpUSDRate
 * @description xrp to usd
 * 
const getXrpUSDRate = async () => {
  const rate = await bitmama.XrpUSDRate()
  return rate;
}
getXrpUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */




/**
 * @func XrpBtcRate
 * @description xrp to btc
 * 
const getXrpBtcRate = async () => {
  const rate = await bitmama.XrpBtcRate()
  return rate;
}
getXrpBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */ 

  /**
   * @func XrpEthRate
   * @description xrp to eth
   * 
const getXrpEthRate = async () => {
  const rate = await bitmama.XrpEthRate()
  return rate;
}
getXrpEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))   
   */


  /**
   * @func @XrpXlmRate @XrpUsdtRate @XrpUsdcRate @XrpCusdRate @XrpCeurRate @XlmNGNRate
   * @description xrp to xlm, xrp to usdt, xrp to usdc , xrp to cusd, xrp to ceur, xlm to ngn
   * 
      * xrp to xlm
         const getXrpXlmRate = async () => {
            const rate = await bitmama.XrpXlmRate()
            return rate;
          }
          getXrpXlmRate()
            .then(res => console.log(res))
            .catch(e => console.log(e))
      * xrp to usdt
        const getXrpUsdtRate = async () => {
          const rate = await bitmama.XrpUsdtRate()
          return rate;
        }
        getXrpUsdtRate()
          .then(res => console.log(res))
          .catch(e => console.log(e))
      * xrp to usdc     
        const getXrpUsdcRate = async () => {
          const rate = await bitmama.XrpUsdcRate()
          return rate;
        }
        getXrpUsdcRate()
          .then(res => console.log(res))
          .catch(e => console.log(e))


      * xrp to cusd
        const getXrpCusdRate = async () => {
          const rate = await bitmama.XrpCusdRate()
          return rate;
        }
        getXrpCusdRate()
          .then(res => console.log(res))
          .catch(e => console.log(e))
      
      
      * xrp to ceur
          const getXrpCeurRate = async () => {
            const rate = await bitmama.XrpCeurRate()
            return rate;
          }
          getXrpCeurRate()
            .then(res => console.log(res))
            .catch(e => console.log(e))
      * xlm to ngn
            const getXlmNGNRate = async () => {
            const rate = await bitmama.XlmNGNRate()
            return rate;
          }
          getXlmNGNRate()
            .then(res => console.log(res))
            .catch(e => console.log(e))
        
        * xlm to ghs
            const getXlmGHSRate = async () => {
              const rate = await bitmama.XlmGHSRate()
              return rate;
            }
            getXlmGHSRate()
              .then(res => console.log(res))
              .catch(e => console.log(e))

        * xlm to usd
            const getXlmUSDRate = async () => {
              const rate = await bitmama.XlmUSDRate()
              return rate;
            }
            getXlmUSDRate()
              .then(res => console.log(res))
              .catch(e => console.log(e))
        
        * xlm to btc
              const getXlmBtcRate = async () => {
                const rate = await bitmama.XlmBtcRate()
                return rate;
              }
              getXlmBtcRate()
                .then(res => console.log(res))
                .catch(e => console.log(e))
      
      
      * xlm to eth 
          const getXlmEthRate = async () => {
            const rate = await bitmama.XlmEthRate()
            return rate;
          }
          getXlmEthRate()
            .then(res => console.log(res))
            .catch(e => console.log(e))


   */










/**
 * @func XlmXrpRate
 * @description xlm to xrp
 * 
const getXlmXrpRate = async () => {
  const rate = await bitmama.XlmXrpRate()
  return rate;
}
getXlmXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

  /**
   * @func  XlmUsdtRate
   * @description xlm to usdt
   * 
const getXlmUsdtRate = async () => {
  const rate = await bitmama.XlmUsdtRate()
  return rate;
}
getXlmUsdtRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

   
   * @returns 
   */

  /**
   * @func XlmUsdcRate
   * @description xlm to usdc
   * 
const getXlmUsdcRate = async () => {
  const rate = await bitmama.XlmUsdcRate()
  return rate;
}
getXlmUsdcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */


  /**
   * @func XlmCusdRate
   * @description xlm to cusd
   * 
const getXlmCusdRate = async () => {
  const rate = await bitmama.XlmCusdRate()
  return rate;
}
getXlmCusdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */

  /**
   * @func XlmCeurRate
   * @description xlm to ceur
   * 
const getXlmCeurRate = async () => {
  const rate = await bitmama.XlmCeurRate()
  return rate;
}
getXlmCeurRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))   
   * @returns 
   */


/**
 * @func UsdtNGNRate
 * @description usdt to ngn
 * 
const getUsdtNGNRate = async () => {
  const rate = await bitmama.UsdtNGNRate()
  return rate;
}
getUsdtNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */
/**
 * @func UsdtGHSRate
 * @description usdt to ghs
 * 
const getUsdtGHSRate = async () => {
  const rate = await bitmama.UsdtGHSRate()
  return rate;
}
getUsdtGHSRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */

  /**
   * @func UsdtUSDRate
   * @description usdt to usd
   * 
const getUsdtUSDRate = async () => {
  const rate = await bitmama.UsdtUSDRate()
  return rate;
}
getUsdtUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */


/**
 * @func UsdtBtcRate
 * @description usdt to btc
 * 
 
 */
const getUsdtBtcRate = async () => {
  const rate = await bitmama.UsdtBtcRate()
  return rate;
}
getUsdtBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

/**
 * @func UsdtEthRate
 * @description usdt to eth
 * 
const getUsdtEthRate = async () => {
  const rate = await bitmama.UsdtEthRate()
  return rate;
}
getUsdtEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */


/**
 * @func UsdtXrpRate
 * @description usdt to xrp
 * 
const getUsdtXrpRate = async () => {
  const rate = await bitmama.UsdtXrpRate()
  return rate;
}
getUsdtXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */


/**
 * @func UsdtXlmRate
 * @description usdt to xlm
 * 
const getUsdtXlmRate = async () => {
  const rate = await bitmama.UsdtXlmRate()
  return rate;
}
getUsdtXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

/**
 * @func UsdtUsdcRate
 * @description usdt to usdc
 * 
 * 
const getUsdtUsdcRate = async () => {
  const rate = await bitmama.UsdtUsdcRate()
  return rate;
}
getUsdtUsdcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */

/**
 * @func UsdtCusdRate
 * @description usdt to cusd
 * 
const getUsdtCusdRate = async () => {
  const rate = await bitmama.UsdtCusdRate()
  return rate;
}
getUsdtCusdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */


/**
 * @func @UsdtCeurRate
 * @description usdt to ceur
 * 
const getUsdtCeurRate = async () => {
  const rate = await bitmama.UsdtCeurRate()
  return rate;
}
getUsdtCeurRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */


/**
 * @func UsdcNGNRate
 * @description usdc to ngn
 * 
 const getUsdcNGNRate = async () => {
  const rate = await bitmama.UsdcNGNRate()
  return rate;
 }

getUsdcNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */
 
/**
 * @func UsdcGHSRate
 * @description usdc to gha
 * 
const getUsdcGHSRate = async () => {
  const rate = await bitmama.UsdcGHSRate()
  return rate;
}
getUsdcGHSRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 
 * @returns 
 */

/**
 * @func UsdcUSDRate
 * @description usdc to usd
 * 
  const getUsdcUSDRate = async () => {
    const rate = await bitmama.UsdcUSDRate()
    return rate;
  }
getUsdcUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */


/**
 * @func UsdcBtcRate
 * @description usdc to btc
 * 

  const getUsdcBtcRate = async () => {
    const rate = await bitmama.UsdcBtcRate()
    return rate;
  }
getUsdcBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
 */

/**
 * @func UsdcEthRate
 * @description usdc to eth
 * 
  const getUsdcEthRate = async () => {
    const rate = await bitmama.UsdcEthRate()
    return rate;
  }
getUsdcEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
 
/**
 * @func UsdcXrpRate
 * @description usdc to xrp 
 * 
  const getUsdcXrpRate = async () => {
    const rate = await bitmama.UsdcXrpRate()
    return rate;
  }
getUsdcXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
 
/**
 * @func UsdcXlmRate 
 * @description usdc to xlm
 * 
   const getUsdcXlmRate = async () => {
    const rate = await bitmama.UsdcXlmRate()
    return rate;
  }
getUsdcXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 * @returns 
 */

/**
 * @func UsdcCusdRate
 * @description usdc to cusd
 * 
  const getUsdcCusdRate = async () => {
    const rate = await bitmama.UsdcCusdRate()
    return rate;
  }
getUsdcCusdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
 */

  /**
   * @func UsdcCeurRate
   * @description usdc to ceur
   * 
   const getUsdcCeurRate = async () => {
    const rate = await bitmama.UsdcCeurRate()
    return rate;
   }
getUsdcCeurRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
   */
   
/**
 * @func CusdNGNRate
 * @description  cusd to ngn
 * 
  const getCusdNGNRate = async () => {
    const rate = await bitmama.CusdNGNRate()
    return  rate
  }
getCusdNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 * @returns 
 */


/**
 * @func CusdGHSRate
 * @description cusd to ghs
 * 
 const getCusdGHSRate = async () => {
    const rate = await bitmama.CusdGHSRate()
    return rate;
  }
getCusdGHSRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
  
/**
 * @func CusdUSDRate
 * @description cusd to usd
 * 
  const getCusdUSDRate = async () => {
    const rate = await bitmama.CusdUSDRate()
    return rate;
  }
getCusdUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))


 * @returns 
 */
 
/**
 * @func CusdBtcRate
 * @description cusd to btc 
 * 
  const getCusdBtcRate = async () => {
    const rate = await bitmama.CusdBtcRate()
    return rate;
  }
getCusdBtcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 * @returns 
 */
 
/**
 * @func CusdEthRate
 * @description cusd to eth
 * 
 const getCusdEthRate = async () => {
  const rate = await bitmama.CusdEthRate()
  return rate;
 }
getCusdEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */

/**
 * @func CusdXrpRate
 * @description cusd to xrp
 * 
  const getCusdXrpRate = async () => {
    const rate = await bitmama.CusdXrpRate()
    return rate;
  }
getCusdXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
 
/** 
 * @func CusdXlmRate
 * @description cusd to xlm
 * 
  const getCusdXlmRate = async () => {
    const rate = await bitmama.CusdXlmRate()
    return rate;
  }
getCusdXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   
 */

/**
 * @func CusdUsdcRate
 * @description cusd to usdc
 * 
 const getCusdUsdcRate = async () => {
    const rate = await bitmama.CusdUsdcRate()
    return rate;
  }
getCusdUsdcRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
  

/**
 * @func CusdCeurRate
 * @description cusd to ceur
 * 
  const getCusdCeurRate = async () => {
    const rate = await bitmama.CusdCeurRate()
    return rate;
  }
getCusdCeurRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
 
/**
 * @func CeurNGNRate
 * @description ceur to ngn
 * 
 * 
   const getCeurNGNRate = async () => {
    const rate = await bitmama.CeurNGNRate()
    return rate;
  }
getCeurNGNRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 */

/**
 * @func CeurGHSRate
 * @description ceur to ghs
 * 
  const getCeurGHSRate = async () => {
    const rate = await bitmama.CeurGHSRate()
    return rate;
  }
getCeurGHSRate().then(res => console.log(res)).catch(e => console.log(e))
  
 */
 

/**
 * @func CeurUSDRate
 * @description ceur to usd
 * 
   const getCeurUSDRate = async () => {
    const rate = await bitmama.CeurUSDRate()
    return rate;
  }
getCeurUSDRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))

 */
  

//   const getCeurBtcRate = async () => {
//     const rate = await bitmama.CeurBtcRate()
//     return rate;
//   }
/**
 * @func CeurEthRate
 * @description ceur to eth
 * 
  const getCeurEthRate = async () => {
    const rate = await bitmama.CeurEthRate()
    return rate;
  }
getCeurEthRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
  
 */
 

/**
 * @func CeurXrpRate
 * @description ceur to xrp 
 * 
  const getCeurXrpRate = async () => {
    const rate = await bitmama.CeurXrpRate()
    return rate;
   }
getCeurXrpRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
   

 */

  
/**
 * @func CeurXlmRate
 * @description ceur to xlm
 * 
    const getCeurXlmRate = async () => {
      const rate = await bitmama.CeurXlmRate()
      return rate;
    }
    
getCeurXlmRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
     
 */


/**
 * @func CeurCusdRate
 * @description ceur to cusd
 * 
const getCeurCusdRate = async () => {
  const rate = await bitmama.CeurCusdRate()
  return rate;
}

getCeurCusdRate()
  .then(res => console.log(res))
  .catch(e => console.log(e))
 
 */
