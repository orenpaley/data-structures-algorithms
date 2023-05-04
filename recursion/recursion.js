/** product: calculate the product of an array of numbers. */

function product(nums, total = 1) {
  if (nums.length < 1) return total;
  total *= nums.pop();
  return product(nums, total);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxWord = 0) {
  if (words.length < 1) return maxWord;
  maxWord = Math.max(maxWord, words.pop().length);
  return longest(words, maxWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, output = "", count = 0) {
  if (count > str.length) return output;
  output = output + str.charAt(count);
  count += 2;
  return everyOther(str, output, count);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left > right) return true;
  if (str[left] !== str[right]) return false;
  left++;
  right--;
  return isPalindrome(str, left, right);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[left] === val) return left;
  if (arr[mid] === val) {
    while (arr[mid - 1] === val) {
      mid--;
    }
    return mid;
  }
  if (arr[mid] > val) {
    return findIndex(arr, val, left, mid - 1);
  }
  return findIndex(arr, val, mid + 1, right);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, output = "") {
  str = Array.from(str);
  if (str.length === 0) return output;
  output = output + str.pop();
  return revString(str, output);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let values = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      values = values.concat(gatherStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      values.push(obj[key]);
    }
  }
  return values;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left >= right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[left] === val) return left;
  if (arr[right] === val) return right;
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
