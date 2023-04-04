// Given an array of 1s and 0s which has all 
// 1s first followed by all 0s, write a function 
//called countZeroes, which returns 
// the number of zeroes in the array.

//  l m     r       
// [1,0,0,0,0]

const countZeroes = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === 1) left = middle + 1;
    else if (arr[middle - 1] === 0) right = middle - 1;
    else return (arr.slice(middle)).length;
    }
  return 0;
    } ;
  

module.exports = countZeroes