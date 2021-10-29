// tslint:disable-next-line: no-var-requires
// require('module-alias/register');

import chai from "chai";

const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const calculator = require("../../src/main").calculator;

describe("Checking calculator operations", function () {
  it("should return value 9", function () {
    const res = calculator(5, 4, "+");
    expect(res).equals(9);
  });

  it("should return value 1", function () {
    const res = calculator(5, 4, "-");
    expect(res).equals(1);
  });

  it("should return value 20", function () {
    const res = calculator(5, 4, "*");
    expect(res).equals(20);
  });

  it("should return value 2", function () {
    const res = calculator(8, 4, "/");
    expect(res).equals(2);
  });

  it("should return error message", function () {
    const res = calculator(5, 4, "0");
    expect(res).equals("Please provide valid arithmetical operation..");
  });

  it("should return error message", function () {
    const res = calculator();
    expect(res).equals("Please provide all required fields..");
  });

  it("should return error message", function () {
    const res = calculator(5, "+");
    expect(res).equals("Please provide all required fields..");
  });
});
