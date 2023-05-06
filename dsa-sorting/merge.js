function merge(arr, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      res.push(arr[i]);
      i++;
    } else if (arr[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr[i]);
      res.push(arr2[j]);
      i++;
      j++;
    }
  }
  while (i < arr.length) {
    res.push(arr[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
