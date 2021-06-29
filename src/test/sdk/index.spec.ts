import {Enterprise} from "../../index";
import { mockaddWebhookParam, mockAddWebhookResponse, mockBankResolveParam, mockBankResolveResponse, mockBtcLabel, mockBtcResponse, mockCeloLabel, mockCeloResponse, mockCoin, mockCreateCryptoAddressResponse, mockCreateCryptoWalletRequest, mockEthLabel, mockEthResponse, mockGetWebhookResponse, mockListBankResponse, mockListCryptoWalletResponse, mockPagination, mockRateResponse, mockTestBaseUrl, mockTestToken, mockTicker, mockTickers, mockXlmLabel, mockXlmResponse, mockXrpLabel, mockXrpResponse } from "../setup";

describe("Test case for sdk", () => {
  let bitmama: any;
  beforeEach(() => {
    bitmama = Enterprise.initialize(mockTestToken, "dev");
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

  test("test *createCeloWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createCeloWallet")
    .mockResolvedValueOnce(mockCeloResponse);
    const res = await bitmama.createCeloWallet(mockCeloLabel);
    expect(res?.qrCode).toBe(mockCeloResponse.qrCode);
    expect(res?.coin).toBe(mockCeloResponse.coin);
    expect(res?.coin).toBe("celo");
    expect(res?.address).toBe(mockCeloResponse.address);
    expect(res).toMatchObject(mockCeloResponse);
    expect(spy).toHaveBeenCalledTimes(1);
  })
  test("test *createBtcWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createBtcWallet")
    .mockResolvedValueOnce(mockBtcResponse);
    const res = await bitmama.createBtcWallet(mockBtcLabel);
    expect(res?.qrCode).toBe(mockBtcResponse.qrCode);
    expect(res?.coin).toBe(mockBtcResponse.coin);
    expect(res?.coin).toBe("btc");
    expect(res?.address).toBe(mockBtcResponse.address);
    expect(res).toMatchObject(mockBtcResponse);
    expect(spy).toHaveBeenCalledTimes(1);
  })
  test("test *createEthWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createEthWallet")
    .mockResolvedValueOnce(mockEthResponse);
    const res = await bitmama.createEthWallet(mockEthLabel);
    expect(res?.qrCode).toBe(mockEthResponse.qrCode);
    expect(res?.coin).toBe(mockEthResponse.coin);
    expect(res?.coin).toBe("eth");
    expect(res?.address).toBe(mockEthResponse.address);
    expect(res).toMatchObject(mockEthResponse);
    expect(spy).toHaveBeenCalledTimes(1);
  })
  test("test *createRippleWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createRippleWallet")
    .mockResolvedValueOnce(mockXrpResponse);
    const res = await bitmama.createRippleWallet(mockXrpLabel);
    expect(res?.qrCode).toBe(mockXrpResponse.qrCode);
    expect(res?.coin).toBe(mockXrpResponse.coin);
    expect(res?.coin).toBe("xrp");
    expect(res?.address).toBe(mockXrpResponse.address);
    expect(res).toMatchObject(mockXrpResponse);
    expect(spy).toHaveBeenCalledTimes(1);
  })
  test("test *createStellarWallet* func", async () => {
    const spy = jest
    .spyOn(bitmama, "createStellarWallet")
    .mockResolvedValueOnce(mockXlmResponse);
    const res = await bitmama.createStellarWallet(mockXlmLabel);
    expect(res?.qrCode).toBe(mockXlmResponse.qrCode);
    expect(res?.coin).toBe(mockXlmResponse.coin);
    expect(res?.coin).toBe("xlm");
    expect(res?.address).toBe(mockXlmResponse.address);
    expect(res).toMatchObject(mockXlmResponse);
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