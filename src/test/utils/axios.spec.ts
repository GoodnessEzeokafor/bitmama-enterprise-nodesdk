/** Mock Test
 * https://jestjs.io/docs/mock-functions
 */
import client from "utils/axios";
import { mockaddWebhookParam, mockAddWebhookResponse, mockBankResolveParam, mockBankResolveResponse, mockCoin, mockCreateCryptoAddressResponse, mockCreateCryptoWalletRequest, mockGetWebhookResponse, mockListBankResponse, mockListCryptoWalletResponse, mockPagination, mockRateResponse, mockTestBaseUrl, mockTestToken, mockTicker } from "../setup";
jest.mock("axios");
describe("mock test case for utils/axios.ts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // create crypto wallet
  describe("create crypto address", () => {
    test("should return address details", async () => {
      const spy = jest
        .spyOn(client, "createWalletAddress")
        .mockResolvedValueOnce(mockCreateCryptoAddressResponse);
      const res = await client.createWalletAddress(mockTestBaseUrl, mockTestToken, mockCreateCryptoWalletRequest);
      expect(res?.qrCode).toBe(mockCreateCryptoAddressResponse.qrCode);
      expect(res?.coin).toBe(mockCreateCryptoAddressResponse.coin);
      expect(res?.address).toBe(mockCreateCryptoAddressResponse.address);
      expect(res).toMatchObject(mockCreateCryptoAddressResponse);
      expect(spy).toHaveBeenCalledTimes(1);

    });
  });

  // return crypto wallets
  describe("return crypto wallets", () => {
    test("should return crypto wallets", async () => {
      const spy = jest
      .spyOn(client, "getWalletAddress")
        .mockResolvedValueOnce(mockListCryptoWalletResponse);
      const res = await client.getWalletAddress(mockTestBaseUrl, mockTestToken,mockCoin,mockPagination);
      // expect(res?.qrCode).toBe(mockCreateCryptoAddressResponse.qrCode);
      // expect(res?.coin).toBe(mockCreateCryptoAddressResponse.coin);
      // expect(res?.address).toBe(mockCreateCryptoAddressResponse.address);
      expect(res).toMatchObject(mockListCryptoWalletResponse);
      expect(res.stats).toMatchObject(mockListCryptoWalletResponse.stats);
      expect(res.stats.page).toBe(mockPagination.page);
      expect(res.stats.size).toBe(mockPagination.size);
      expect(res.data).toMatchObject(mockListCryptoWalletResponse.data);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  // returns crypto exchange rate

  describe("return crypto rate", () => {
    test("should return crypto rate", async () => {
      const spy = jest
        .spyOn(client, "getRate")
        .mockResolvedValueOnce(mockRateResponse);
      const res = await client.getRate(mockTestBaseUrl, mockTestToken, mockTicker);
      expect(res).toMatchObject(mockRateResponse);
      expect(res.buy).toBe(mockRateResponse.buy);
      expect(res.sell).toBe(mockRateResponse.sell);
      expect(spy).toHaveBeenCalledTimes(1);
    })
  });


  // create webhook
  describe("test case for creating webhook", () => {
    test("should return a message", async () => {
      const spy = jest
        .spyOn(client, "createWebhookEndpoint")
        .mockResolvedValueOnce(mockAddWebhookResponse);
      const res = await client.createWebhookEndpoint(mockTestBaseUrl, mockTestToken, mockaddWebhookParam);
      expect(res).toBe(mockAddWebhookResponse);
      expect(spy).toBeCalledWith(mockTestBaseUrl, mockTestToken, mockaddWebhookParam);
      expect(spy).toHaveBeenCalledTimes(1);

        
    })
  })
  // returns webhook
  describe("returns your webhook", () => {
    test("should return webhook endpoint", async () => {
      const spy = jest
        .spyOn(client, "getWebhookEndpoint")
        .mockResolvedValueOnce(mockGetWebhookResponse);
      const res = await client.getWebhookEndpoint(mockTestBaseUrl, mockTestToken);
      expect(res).toMatchObject(mockGetWebhookResponse);
      expect(res.secret).toBe(mockGetWebhookResponse.secret);
      expect(res.endpoint).toBe(mockGetWebhookResponse.endpoint);
      expect(spy).toHaveBeenCalledTimes(1);
    })
  });

  // resolve bank account
  describe("resolve bank account", () => {
    test("should return bank details", async () => {
      const spy = jest
        .spyOn(client, "resolveBank")
        .mockResolvedValueOnce(mockBankResolveResponse);
      const res = await client.resolveBank(mockTestBaseUrl, mockTestToken, mockBankResolveParam);
      expect(res.account_number).toBe(mockBankResolveResponse.account_number);
      expect(res.account_name).toBe(mockBankResolveResponse.account_name);
      expect(spy).toBeCalledWith(mockTestBaseUrl, mockTestToken, mockBankResolveParam);
      expect(spy).toHaveBeenCalledTimes(1);

    });
  })
  // returns bank lists
  describe("return bank list", () => {
    test("should return bank list", async () => {
      const spy = jest
        .spyOn(client, "listBanks")
        .mockResolvedValueOnce(mockListBankResponse);
      const res = await client.listBanks(mockTestBaseUrl, mockTestToken, 'ng');
      expect(res).toMatchObject(mockListBankResponse);
      expect(res.length).toEqual(3);
      expect(spy).toHaveBeenCalledTimes(1);      
    })
  })

});
