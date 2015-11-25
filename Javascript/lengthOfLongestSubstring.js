/*
Given a string, find the length of the longest substring without repeating characters. 
For example, the longest substring without repeating letters for "abcabcbb" is "abc", 
which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*/

var lengthOfLongestSubstring = function(s) {
  var currentSubstringCache = {},
    currentSubstring = s.charAt(0),
    longestSubstring = null;
  currentSubstringCache[s.charAt(0)] = s.charAt(0);
  for (var i = 1; i < s.length; i++) {
    if (!currentSubstringCache[s.charAt(i)]) {
      currentSubstringCache[s.charAt(i)] = s.charAt(i);
      currentSubstring += s.charAt(i);
    } else {
      if (!longestSubstring || currentSubstring > longestSubstring) {
        longestSubstring = currentSubstring;
      }
      currentSubstring = '';
      currentSubstringCache = {};
    }
  }
  if (longestSubstring === null) {
    return s.length;
  } else {
    return longestSubstring.length;
  }
}; //time complexity is O(N)
