import BitmamaEnterprise from "../../index";
import { mockaddWebhookParam, mockAddWebhookResponse, mockBankResolveParam, mockBankResolveResponse, mockCoin, mockCreateCryptoAddressResponse, mockCreateCryptoWalletRequest, mockGetWebhookResponse, mockListBankResponse, mockListCryptoWalletResponse, mockPagination, mockRateResponse, mockTestBaseUrl, mockTestToken, mockTicker, mockTickers } from "../setup";

describe("Test case for sdk", () => {
  let bitmama: any;
  beforeEach(() => {
    bitmama = BitmamaEnterprise(mockTestToken, "dev");
  });  
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("test initialization", () => {
    expect(bitmama.TOKEN).toBe(mockTestToken);
    expect(bitmama.ENV).toBe("dev");
    expect(bitmama.BASE_URL).toBe(mockTestBaseUrl);
  })

  test("test *createCryptoWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createCryptoWallet")
    .mockResolvedValueOnce(mockCreateCryptoAddressResponse);
    const res = await bitmama.createCryptoWallet(mockCreateCryptoWalletRequest);
    expect(res?.qrCode).toBe(mockCreateCryptoAddressResponse.qrCode);
    expect(res?.coin).toBe(mockCreateCryptoAddressResponse.coin);
    expect(res?.address).toBe(mockCreateCryptoAddressResponse.address);
    expect(res).toMatchObject(mockCreateCryptoAddressResponse);
    expect(spy).toHaveBeenCalledTimes(1);
  })
  test("test *listCryptoWallet* func", async () => {
    const spy = jest
      .spyOn(bitmama, "listCryptoWallet")
        .mockResolvedValueOnce(mockListCryptoWalletResponse);
    const res = await bitmama.listCryptoWallet(mockCoin, mockPagination);
    expect(res).toMatchObject(mockListCryptoWalletResponse);
    expect(res.stats).toMatchObject(mockListCryptoWalletResponse.stats);
    expect(res.stats.page).toBe(mockPagination.page);
    expect(res.stats.size).toBe(mockPagination.size);
    expect(res.data).toMatchObject(mockListCryptoWalletResponse.data);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(mockCoin, mockPagination)
  });

  test("test *createWebhook* func", async () => {
    const spy = jest
      .spyOn(bitmama, "createWebhook")
      .mockResolvedValueOnce(mockAddWebhookResponse);
    const res = await bitmama.createWebhook(mockaddWebhookParam.endpoint);
    expect(res).toBe(mockAddWebhookResponse);
    expect(spy).toBeCalledWith(mockaddWebhookParam.endpoint);
    expect(spy).toHaveBeenCalledTimes(1);

  });

  test("test *getWebhook* func", async () => {
    const spy = jest
      .spyOn(bitmama, "getWebhook")
      .mockResolvedValueOnce(mockGetWebhookResponse);
    const res = await bitmama.getWebhook();
    expect(res).toMatchObject(mockGetWebhookResponse);
    expect(res.secret).toBe(mockGetWebhookResponse.secret);
    expect(res.endpoint).toBe(mockGetWebhookResponse.endpoint);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith();

  });

  test("test *getRate* func", async () => {
    const spy = jest
      .spyOn(bitmama, "getRate")
      .mockResolvedValueOnce(mockRateResponse);
    const res = await bitmama.getRate(mockTicker);
    expect(res).toMatchObject(mockRateResponse);
    expect(res.buy).toBe(mockRateResponse.buy);
    expect(res.sell).toBe(mockRateResponse.sell);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(mockTicker);
  });

  test("test *getTickers* func", async () => {
    const spy = jest
      .spyOn(bitmama, "tickers")
      .mockResolvedValueOnce(mockTickers)
    const res = await bitmama.tickers();
    expect(res).toMatchObject(mockTickers);
    expect(spy).toHaveBeenCalledTimes(1);

  })

  test("test *listBanks* func", async () => {
    const spy = jest
    .spyOn(bitmama, "listBanks")
    .mockResolvedValueOnce(mockListBankResponse);
  const res = await bitmama.listBanks('ng');
  expect(res).toMatchObject(mockListBankResponse);
  expect(res.length).toEqual(3);
  expect(spy).toHaveBeenCalledTimes(1); 
  });

  test("test *resolveBankAccount* func", async () => {
    const spy = jest
    .spyOn(bitmama, "resolveBankAccount")
    .mockResolvedValueOnce(mockBankResolveResponse);
  const res = await bitmama.resolveBankAccount(mockBankResolveParam);
  expect(res.account_number).toBe(mockBankResolveResponse.account_number);
  expect(res.account_name).toBe(mockBankResolveResponse.account_name);
  expect(spy).toBeCalledWith( mockBankResolveParam);
  expect(spy).toHaveBeenCalledTimes(1);
  });


})