/*
 给定一个字符串，找出不含有重复字符的最长子串的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 无重复字符的最长子串是 "abc"，其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 无重复字符的最长子串是 "b"，其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 无重复字符的最长子串是 "wke"，其长度为 3。
     请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let v, i, j;
  let hash = {};
  let l = s.length;
  let r = [];
  if (l < 2) {
    return l;
  }
  for (i = 0, j = 0; i < l; i++) {
    v = s[i];
    if (hash[v] > j - 1) {
      r.push(i - j);
      j = hash[v] + 1;
    }
    hash[v] = i;
  }
  r.push(i - j);
  return Math.max.apply(null, r);
};

console.log(lengthOfLongestSubstring('pwwkew'));
