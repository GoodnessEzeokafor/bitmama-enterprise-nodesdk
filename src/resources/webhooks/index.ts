const webhooks = {
  create: (url:string, token:string, endpoint:string) => {
    console.log(url)
    console.log(token)
    console.log(endpoint)
  },
  get: (url:string, token:string) => {
    console.log(url);
    console.log(token);
  }
}
export default webhooks;
