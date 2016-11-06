/**
 * Created by zhangyang on 06/11/2016.
 */

/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var length = s.length,
        result = 0,
        value = null,
        hash = {};
    if (!length) {
        return 0;
    }
    for (var start = 0, end = 0; end < length; end++) {
        value = s[end];
        hash[value] = hash[value] || -1;
        start = Math.max(start, hash[value]);
        result = Math.max(result, end - start + 1);
        hash[value] = end + 1;
    }
    return result;
};