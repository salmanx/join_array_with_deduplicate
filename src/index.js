function joinArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    // Check if the current element exists in the first array
    let indexInArr1 = arr1.indexOf(arr2[i]);

    // If found and the next sibling matches, remove the element and its sibling from arr2
    if (indexInArr1 !== -1 && arr1[indexInArr1 + 1] === arr2[i + 1]) {
      arr2.splice(i, 2);
      i--;
    }
  }

  return arr1.concat(arr2);
}

module.exports = joinArrays;
