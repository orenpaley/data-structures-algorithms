/* 
Given a sorted array and a number, 
write a function called sortedFrequency that 
counts the occurrences of the number in the array
*/

//            m
// [1, 1, 2, 2, 2, 2, 3], 2
const sortedFrequency = (arr, num) => {
  let firstIndex = findFirstIndex(arr, num);
  let lastIndex = findLastIndex(arr, num);

  if (firstIndex === -1 || lastIndex === -1) {
    return -1;
  }

  return lastIndex - firstIndex + 1;
};

function findFirstIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let firstIndex = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    if (arr[mid] === num) {
      firstIndex = mid;
    }
  }

  return firstIndex;
}

function findLastIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let lastIndex = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (arr[mid] === num) {
      lastIndex = mid;
    }
  }

  return lastIndex;
}

module.exports = sortedFrequency;
