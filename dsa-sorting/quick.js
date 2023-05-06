/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      // Swap elements
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }

  let pivotIndex = pivot(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex, right);

  return arr;
}
module.exports = { quickSort, pivot };
