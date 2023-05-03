// BINARY SEARCH
// **takes a sorted array only , finds the middlepoint,
// compares the value to the target value and goes to next mid point accordingly
// repeat until value found then
// return target found or -1 if not found
//  l     t m       r
// [1,2,3,4,5,6,7,8,9]

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return `target: ${target} found`;
    if (arr[middle] < target) left = middle + 1;
    if (arr[middle] > target) right = middle - 1;
  }
  return -1;
};

const binarySearchRecursive = (arr, target) => {
  let newArr = [];
  let middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) return `target: ${target} found`;
  if (arr.length < 2) return -1;
  if (arr[middle] > target) newArr = arr.slice(0, middle);
  if (arr[middle] < target) newArr = arr.slice(middle, arr.length);
  return binarySearchRecursive(newArr, target);
};
