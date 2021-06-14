import axios from "axios"
import { Coin, Pagination } from "types";
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
  createWalletAddress: async (url: string, token: string, param:Record<string, any>) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.post(`/address`, param);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e:any | Error | unknown) {
      if (e?.response?.data) {
        if (String(e?.response?.data?.message) === "TOKEN_HEADER_NOT_SET") {
          throw new Error("Set Token Headers");    
        }
        if (String(e?.response?.data?.message) === "INVALID_TOKEN") {
          throw new Error("Invalid Token Sent");    
        }
        throw new Error(String(e?.response?.data?.message));
      };
      throw new Error(String(e));
    }
  },
  getWalletAddress: async (url: string, token: string,coin:Coin,pagination:Pagination) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/address?page=${pagination.page}&size=${pagination.size}&coin=${coin}`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e:any | Error | unknown) {
      if (e?.response?.data) {
        if (String(e?.response?.data?.message) === "TOKEN_HEADER_NOT_SET") {
          throw new Error("Set Token Headers");    
        }
        if (String(e?.response?.data?.message) === "INVALID_TOKEN") {
          throw new Error("Invalid Token Sent");    
        }
        throw new Error(String(e?.response?.data?.message));
      };
      throw new Error(String(e));
    }
  },
  listWallets: async (url: string, token: string) => {
    try {
      const client = await axiosLib.client(url, token);
      const res = await client.get(`/wallet`);
      if (res?.data?.message) return res.data.message;
      return res?.data;
    } catch (e: any | Error | unknown) {
      if (e?.response?.data) {
        if (String(e?.response?.data?.message) === "TOKEN_HEADER_NOT_SET") {
          throw new Error("Set Token Headers");
        }
        if (String(e?.response?.data?.message) === "INVALID_TOKEN") {
          throw new Error("Invalid Token Sent");
        }
        throw new Error(String(e?.response?.data?.message));
      };
      throw new Error(String(e));
    }
  }
}

export default axiosLib;

