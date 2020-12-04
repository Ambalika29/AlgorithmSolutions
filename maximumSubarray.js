// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
       return 0;
   }
   let max = -Infinity;
   let cumulativeMax = 0;
   for (let i = 0; i<nums.length; i++) {
       cumulativeMax = Math.max(nums[i], cumulativeMax + nums[i]);
       max = Math.max(max, cumulativeMax);
   }

   return max;
};

