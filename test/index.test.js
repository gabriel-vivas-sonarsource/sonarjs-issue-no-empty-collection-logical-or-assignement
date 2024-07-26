import { add } from "../src/index.js";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("index", () => {
  describe("add", () => {
    it("returns the sum of its two arguments", () => {
      let number1 = 2;
      let number2 = 3;

      let result = add(number1, number2);

      assert.equal(result, number1 + number2);
    });
  });
});
