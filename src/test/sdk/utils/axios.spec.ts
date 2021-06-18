import client from "utils/axios";
import { mockCreateCryptoAddressResponse, mockCreateCryptoWalletRequest, mockTestBaseUrl, mockTestToken } from "../setup";
jest.mock("axios")

describe("mock test case for utils/axios.ts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("create crypto address",() => {
    // mockAxios.g
    test("should return address details", async() => {
        const spy = jest
        .spyOn(client, "createWalletAddress")
        .mockResolvedValueOnce(mockCreateCryptoAddressResponse);
      const res = await client.createWalletAddress(mockTestBaseUrl, mockTestToken, mockCreateCryptoWalletRequest);
      expect(res?.qrCode).toBe(mockCreateCryptoAddressResponse.qrCode);
      expect(res?.coin).toBe(mockCreateCryptoAddressResponse.coin);
      expect(res?.address).toBe(mockCreateCryptoAddressResponse.address);
      expect(res).toMatchObject(mockCreateCryptoAddressResponse);
      expect(spy).toHaveBeenCalledTimes(1);
    })
})

});
