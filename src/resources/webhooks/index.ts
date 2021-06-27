import axiosLib from "../../utils/axios";

const webhooks = {
  create: async(url:string, token:string, endpoint:string) => {
    const data = { endpoint };
    return await axiosLib.createWebhookEndpoint(url, token, data);

  },
  get: async (url: string, token: string) => {
    return await axiosLib.getWebhookEndpoint(url, token);
  }
}
export default webhooks;
