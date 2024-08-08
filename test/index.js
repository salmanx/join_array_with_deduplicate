const { expect } = require("chai");
const joinArrays = require("../src/index");

describe("joinArrays", () => {
  it("1: should merge and deduplicate overlapping arrays", () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [3, 4, 5, 6];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("2: should merge non-overlapping arrays", () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [5, 6, 7, 8];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("3: should handle arrays with duplicate elements in the first array", () => {
    const input1 = [1, 2, 1, 2];
    const input2 = [1, 2, 7, 8];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 1, 2, 7, 8]);
  });

  it("4: should handle arrays with duplicate elements in both arrays", () => {
    const input1 = [5, 5, 1, 2];
    const input2 = [5, 1, 7, 8];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([5, 5, 1, 2, 5, 1, 7, 8]);
  });

  it("5: should handle empty first array", () => {
    const input1 = [];
    const input2 = [1, 2, 3, 4];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });

  it("6: should handle empty second array", () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });

  it("7: should handle both arrays being empty", () => {
    const input1 = [];
    const input2 = [];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([]);
  });

  it("8: should handle arrays with all duplicate elements", () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2, 3];
    const result = joinArrays(input1, input2);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});
