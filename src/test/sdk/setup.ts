import { CreateWalletParam } from "types"

export const mockTestBaseUrl = "https://enterprise-api-staging.bitmama.io/v1";
export const mockTestToken = "mock_test_token";
export const mockCreateCryptoAddressResponse:Record<string, string> = {
  address: '0xcd5fb572a5aa150261f0b5927c6307801b842e6f',
  coin: 'celo',
  qrCode: 'mock_qr_code'
}

export const mockCreateCryptoWalletRequest: CreateWalletParam = {
  coin: 'celo',
  label: 'test_label'
}