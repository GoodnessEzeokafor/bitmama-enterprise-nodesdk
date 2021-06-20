import { errorResponse } from "utils/error";

export const mockErrorObject1 = {
  response: {
    data: {
      message:"TOKEN_HEADER_NOT_SET"
    }
  }
}

errorResponse(mockErrorObject1)