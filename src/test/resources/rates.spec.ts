import rates from "resources/rates"
import { mockTestBaseUrl, mockTestToken } from "test/setup";
import { Ticker } from "types";


const mockResourcesRates = {
  buy: 1,
  sell:1.5
}
const mockResourcesRatesTicker: Ticker = "btcusd"
const mockResourcesTickers:Ticker[] = [
  'xlmusd',
  'xlmeur',
  'xlmngn',
  'btcghs',
  'ethghs',
  'usdghs',
  'xlmghs',
  'btcusd',
  'ethusd',
  'btcngn',
  'ethngn',
  'usdngn',
  'xrpusd',
  'xrpngn',
  'xrpghs',
  'xrpeur',
  'usdeur',
  'celousd',
  'celongn',
  'celoghs',
  'eurghs',
  'eurngn'
]

describe("tests case for resources/rates", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // test case for rates
  test("should return buy/sell rates", async() => {
    const spy = jest
      .spyOn(rates, "rates")
      .mockResolvedValueOnce(mockResourcesRates);
    const res = await rates.rates(mockTestBaseUrl, mockTestToken, mockResourcesRatesTicker)
    expect(res.buy).toBe(mockResourcesRates.buy)
    expect(res.sell).toBe(mockResourcesRates.sell)
    expect(spy).toBeCalledWith(mockTestBaseUrl, mockTestToken, mockResourcesRatesTicker)
    expect(spy).toHaveBeenCalledTimes(1);
  })

  // test case for tickers
  test("should return all the tickers", async () => {
    const res = await rates.tickers()
    expect(res).toMatchObject(mockResourcesTickers)
    
  })


  // mock test case for EthNGNRate 
  test("should return buy/sell rates for EthNGNRate ", async() => {
    const spy = jest
      .spyOn(rates, "EthNGNRate")
      .mockResolvedValueOnce(mockResourcesRates);
    const res = await rates.EthNGNRate(mockTestBaseUrl, mockTestToken)
    expect(res.buy).toBe(mockResourcesRates.buy)
    expect(res.sell).toBe(mockResourcesRates.sell)
    // // expect(spy).toBeCalledWith(mockTestBaseUrl, mockTestToken, "ethngn")
    // expect(axios).toBeCalledWith(mockTestBaseUrl, mockTestToken, "ethngn")
    
    expect(spy).toHaveBeenCalledTimes(1);
  })

})