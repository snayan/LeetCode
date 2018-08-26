/**

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

 **/

/*
方法一
*/
var twoSum = function(nums, target) {
  let l = nums.length;
  if (l < 2) {
    return [];
  }
  for (let i = 0; i < l; i++) {
    let first = nums[i];
    let second = target - first;
    let j = nums.indexOf(second);
    if (~j && i !== j) {
      return [i, j];
    }
  }
  return [];
};

/*
方法二
*/
var twoSum = function(nums, target) {
  let l = nums.length;
  let first = null;
  let second = null;
  let hash = {};
  for (let i = 0, j = undefined; i < l; i++) {
    first = nums[i];
    second = target - first;
    j = hash[second];
    if (j !== undefined) {
      return [i, j];
    } else {
      hash[first] = i;
    }
  }
  return [];
};


let a = [2, 7, 11, 15];
let b = 9;
console.log(twoSum(a, b));
