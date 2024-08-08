# Given two input arrays containing sequences of integers which may overlap, produce a merged, de-duplicated output array. You may assume

that the input parameters are always one-dimensional arrays of integers. The input arrays may be of arbitrary length.

## Consider the following test cases

```
const input1 = [1, 2, 3, 4];
const input2 = [3, 4, 5, 6];
console.log(joinArrays(input1, input2)); // Expected result: [1, 2, 3, 4, 5, 6]
const input3 = [1, 2, 3, 4];
const input4 = [5, 6, 7, 8];
console.log(joinArrays(input3, input4)); // Expected result: [1, 2, 3, 4, 5, 6, 7, 8]

const input5 = [1, 2, 1, 2];
const input6 = [1, 2, 7, 8];
console.log(joinArrays(input5, input6)); // Expected result: [1, 2, 1, 2, 7, 8]

const input7 = [5, 5, 1, 2];
const input8 = [5, 1, 7, 8];
console.log(joinArrays(input7, input8)); // Expected result: [5, 5, 1, 2, 5, 1, 7, 8]

const input9 = [1, 2, 1, 2];
const input10 = [1, 0, 7, 8];
console.log(joinArrays(input9, input10)); // Expected result: [1, 2, 1, 2, 1, 0, 7, 8]
```
