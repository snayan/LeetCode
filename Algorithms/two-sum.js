/**
 * Created by zhangyang on 06/11/2016.
 */

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 **/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var l = nums.length - 1,
        sub = null,
        tmp = null,
        value = null,
        hash = {};
    while (l >= 0) {
        value = nums[l];
        sub = target - value;
        tmp = hash[sub];
        if (tmp && tmp != l) {
            return [l, tmp];
        } else {
            hash[value] = l;
        }
        l = l - 1;
    }
};