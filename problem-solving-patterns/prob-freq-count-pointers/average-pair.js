/*
averagePair

Write a function called averagePair. Given a sorted array of
 integers and a target average, determine if there is a 
 pair of values in the array where the average of the 
 pair equals the target average.
 There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

inputs: arr-> [sorted ints]
        targ-> int
        if targ is average of any pair of values in arr return true
        use multiple pointers to reduce runtime
if lrAvg is less than targ left goes up 1
if lrAvg is greater than targ right goes down 1
    
*/

function averagePair(arr, targ) {
  let left = 0;
  let right = arr.length - 1;
  if (typeof targ !== "number") return false;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg < targ) left++;
    else if (avg > targ) right--;
    else return true;
  }
  return false;
}

module.exports = { averagePair };
