import { mockErrorObject1, mockErrorObject2, mockErrorResponse1, mockErrorResponse2 } from "test/setup";
import { errorResponse } from "utils/error";

describe("mock test case for utils/error.ts", () => {
  describe("test case for errorResponse function", () => {
    test("should throw an *Set Token Headers*", async () => {
      const res = errorResponse(mockErrorObject1);
      expect(res).toThrowError(mockErrorResponse1)
    });
    test("should throw *Invalid Token Sent* errors", async () => {
      const res = errorResponse(mockErrorObject2);
      expect(res).toThrowError(mockErrorResponse2)
    })
  })
})
;