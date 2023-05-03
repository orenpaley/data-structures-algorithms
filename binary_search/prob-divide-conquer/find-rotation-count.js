/*
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

*/

// find smalleset number in array then return index of smallest number

//  l             r
//  7, 9, 11, 12, 5]

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // If the subarray is already sorted, return the number of rotations
    if (arr[left] <= arr[right]) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid - 1 + arr.length) % arr.length;

    // If the mid element is the smallest element, return the number of rotations
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }

    // If the right half is unsorted, search for the pivot in the right half
    if (arr[mid] <= arr[right]) {
      right = mid - 1;
    }

    // If the left half is unsorted, search for the pivot in the left half
    else if (arr[mid] >= arr[left]) {
      left = mid + 1;
    }
  }

  return -1; // Array not rotated
}

module.exports = findRotationCount;
