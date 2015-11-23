/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

var twoSum = function(nums, target) {
  var numbers = {},
    duplicates = {},
    sumSearch = null;
  for (var i = 0; i < nums.length; i++) {
    if (numbers[nums[i]] || numbers[nums[i]] === 0) {
      duplicates[nums[i]] = i;
    } else {
      numbers[nums[i]] = i;
    }
  }
  for (i = 0; i < nums.length; i++) {
    sumSearch = target - nums[i];
    if (sumSearch === nums[i]) {
      if (duplicates[sumSearch] || duplicates[sumSearch] === 0) {
        if (duplicates[sumSearch] < i) {
          return [duplicates[sumSearch] + 1, i + 1];
        } else {
          return [i + 1, duplicates[sumSearch] + 1];
        }
      }
    } else {
      if (numbers[sumSearch] || numbers[sumSearch] === 0) {
        if (numbers[sumSearch] < i) {
          return [numbers[sumSearch] + 1, i + 1];
        } else {
          return [i + 1, numbers[sumSearch] + 1];
        }
      }
    }

  }
}; // linear time and linear space
