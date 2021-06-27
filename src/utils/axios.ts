import axios from "axios"
import { BankCountryCode, BankResolveParam, Coin, Pagination } from "../types";
import { errorResponse } from "./error";
const axiosLib = {
  client: async (url: string, token: string) => {
    const client = axios.create({
      baseURL: url,
      headers: { 
        token: token,
        },
    });
    return client;
  },
  // wallets
  createWalletAddress: async (url: string, token: string, param:Record<string, any>) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.post(`/address`, param);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e:any | Error | unknown) {
      errorResponse(e);
    }
  },
  getWalletAddress: async (url: string, token: string,coin:Coin,pagination:Pagination) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/address?page=${pagination.page}&size=${pagination.size}&coin=${coin}`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e:any | Error | unknown) {
      errorResponse(e);
    }
  },
  listWallets: async (url: string, token: string) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/wallet`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e: any | Error | unknown) {
      errorResponse(e);
    }
  },
  // banks
  resolveBank: async(url:string, token:string, params:BankResolveParam) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.post(`/banks/resolve`, params);
      if (res?.data?.message) return res.data.message.data;
      return res?.data;
    } catch (e) {
      errorResponse(e);
    } 
  },
  listBanks: async (url: string, token: string, code: BankCountryCode) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/banks/${code}`);
      if (res?.data?.message) return res.data.message.data;
      return res?.data?.data;
    } catch (e) {
      errorResponse(e);
    }
  },
  // webhooks
  createWebhookEndpoint: async (url: string, token: string, params: Record<string, string>) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.post(`/webhook`, params);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e: any | Error | unknown) {
      errorResponse(e);
    }
  },
  getWebhookEndpoint: async (url: string, token: string) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/webhook`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e: any | Error | unknown) {
      errorResponse(e);
      }
  },
  // rates
  getRate: async(url: string, token: string, ticker: string) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/rate?ticker=${ticker}`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e: any | Error | unknown) {
      errorResponse(e);
    }
  }
}

export default axiosLib;

