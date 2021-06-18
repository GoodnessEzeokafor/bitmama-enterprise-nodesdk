export const errorResponse = (e:any | Error | any) => {
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