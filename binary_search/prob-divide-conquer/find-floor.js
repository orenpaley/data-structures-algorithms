/*
Write a function called findFloor which accepts a sorted array and a 
value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array 
which is smaller than or equal to x. 
If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

Constraints

Time Complexity: O(log N)*/

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      // If the mid element is equal to x, it is the floor of x
      return arr[mid];
    } else if (arr[mid] < x) {
      // If the mid element is less than x, update the floor and search the right half
      floor = arr[mid];
      left = mid + 1;
    } else {
      // If the mid element is greater than x, search the left half
      right = mid - 1;
    }
  }

  return floor;
}

module.exports = findFloor;
