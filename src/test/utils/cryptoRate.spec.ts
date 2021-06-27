import { mockTestBaseUrl, mockTestToken } from "../setup";
import { Coin } from "../../types";
import { cryptoRate, isEuroStableCoin, isStableCoin } from "../../utils/cryptoRate";

describe("mock test case for utils/axios.ts", () => {
  let dollarStableCoin: Coin;
  let dollarStableCoin2: Coin;
  let euroStableCoin: Coin;
  let coin: Coin;

  beforeEach(() => {
    dollarStableCoin = "usdt";
    dollarStableCoin2 = "usdc";
    euroStableCoin = "ceur";
    coin = "btc";
  });
  
  afterEach(() => {
    jest.resetAllMocks();
  })

  test("should return true for dollar stable coin", () => {
    const res = isStableCoin(dollarStableCoin);
    expect(res).toBe(true)
  })
  test("should return false for dollar stable coin", () => {
    const res = isStableCoin(coin);
    expect(res).toBe(false)
  })

  test("should return true for euro stable coin", () => {
    const res = isEuroStableCoin(euroStableCoin);
    expect(res).toBe(true)
  })
  test("should return false for dollar stable coin", () => {
    const res = isEuroStableCoin(dollarStableCoin);
    expect(res).toBe(false)
  })

  test("should return 1 from dollar stable coin to dollar stable coin", async() => {
    const res = await cryptoRate(mockTestBaseUrl, mockTestToken, dollarStableCoin, dollarStableCoin2);
    console.log(res)
    expect(res).toBe(1)
  })


})