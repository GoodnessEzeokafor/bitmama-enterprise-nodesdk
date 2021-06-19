import { Coin, CreateWalletParam, Pagination, Ticker } from "types"

// mock test base url
export const mockTestBaseUrl = "https://enterprise-api-staging.bitmama.io/v1";
// mock test token
export const mockTestToken = "mock_test_token";
// mock response
export const mockCreateCryptoAddressResponse:Record<string, string> = {
  address: '0xcd5fb572a5aa150261f0b5927c6307801b842e6f',
  coin: 'celo',
  qrCode: 'mock_qr_code'
}
export const mockListCryptoWalletResponse: Record<string, any> = {
  stats: { page: 1, size: 2, pages: 1 },
  data: [
    {
      _id: '60227c75857cbd11c34712df',
      address: '0xe2d6f50002c74138257b0bedf7eaaf7b8b594866',
      coin: 'celo',
      label: 'Goody test celo address'
    },
    {
      _id: '6032e7a2e6eb940028c4129e',
      address: '0x071d8cbf448a7ef8d7ea4ceffd41d5f15d87ae52',
      coin: 'celo',
      label: 'Goody test celo'
    }
  ]
};
export const mockRateResponse = {
  buy: 1.5,
  sell: 3.5
}
// mock request
export const mockCreateCryptoWalletRequest: CreateWalletParam = {
  coin: 'celo',
  label: 'test_label'
};
export const mockGetWebhookResponse = {
  endpoint: "https://61e00d0ead25.ngrok.io/webhook",
  secret: "test_secret"
};

export const mockListBankResponse = [
  {
    "id": 1,
    "code": "044",
    "name": "Access Bank"
  },
  {
    "id": 2,
    "code": "023",
    "name": "Citi Bank"
  },
  {
    "id": 4,
    "code": "050",
    "name": "EcoBank PLC"
  },
];
export const mockCoin: Coin = "celo";
export const mockPagination: Pagination = {
  page: 1,
  size: 2
};

export const mockRate = {
  buy: 1.5,
  sell: 3.5
};

export const mockTicker: Ticker = "ethghs";
export const mockBankResolveParam = {
  accountNumber: "0000000000",
  bankCode: "000"
};
export const mockBankResolveResponse = {
  account_number: "0000000000",
  account_name: "Test Account Number"
};