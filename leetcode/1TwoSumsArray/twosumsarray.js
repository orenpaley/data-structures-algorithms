const twoSumPrimitive = function (nums, target) {
  // primitive solution
  let i = 0;
  let j = 0;

  while (i < nums.length - 1) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
      i++;
    }
  }
  return [-1, -1];
};

const twoSumHash = function (nums, target) {
  let hash = new Map();
  // [2,3,7,11] -> 9
  // hash = {2:0, 3:1, 7:2, 11:3}

  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - hash[nums[i]];
    if (hash.has(complement) && hash[complement] !== i)
      return [hash[complement], i];
  }
};
