/* Write a function called findRotatedIndex which accepts a rotated array 
of sorted numbers and an integer. The function should return the index of num 
in the array.
 If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

*/

function findRotatedIndex(arr, num) {
  let start = 0;
  let right = arr.length - 1;

  while (start <= right) {
    const mid = Math.floor((start + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    // check which half of the array is sorted
    if (arr[start] <= arr[mid]) {
      // left half is sorted
      if (arr[start] <= num && num < arr[mid]) {
        // num is in the left half
        right = mid - 1;
      } else {
        // num is in the right half
        start = mid + 1;
      }
    } else {
      // right half is sorted
      if (arr[mid] < num && num <= arr[right]) {
        // num is in the right half
        start = mid + 1;
      } else {
        // num is in the left half
        right = mid - 1;
      }
    }
  }

  return -1; // num not found in arr
}

module.exports = findRotatedIndex;
