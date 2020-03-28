/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */


//YOUR CODE HERE
var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    temp = 0
    temp2 = 0
    for (j = i + 1; j < nums.length; j++) {
      temp = nums[i];
      temp2 = temp + nums[j];
      if(target == temp2){
        console.log(i+" "+j)
      }
    }
  }
};
var nums = [2, 11,7, 15] 
var target = 9
twoSum(nums, target);