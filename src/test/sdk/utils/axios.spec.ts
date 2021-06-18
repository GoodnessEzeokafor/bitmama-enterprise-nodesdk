import client from "utils/axios";
import { mockCoin, mockCreateCryptoAddressResponse, mockCreateCryptoWalletRequest, mockListCryptoWalletResponse, mockPagination, mockTestBaseUrl, mockTestToken } from "../setup";
jest.mock("axios")

describe("mock test case for utils/axios.ts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

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
});
