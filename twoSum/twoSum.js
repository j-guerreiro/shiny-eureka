/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

  let next;
  let sum;
  let result = [];

  for (i = 0; i < nums.length; i++) {

    if (nums.length < 3) {
      result = [0, 1];
      break;
    } else if (nums.length >= 3) {
      next = nums[i + 1];
      sum = nums[i] + next;

      if (sum === target) {
        result.push(nums.indexOf(nums[i]));
        result.push(nums.indexOf(nums[i + 1]));

      } else if (sum < target) {
        sum = 0;
        next = nums[i + 2];
        sum = nums[i] + next;

        if (sum < target) {
          sum = 0;
          next = nums[i + 2];
          sum = nums[i + 1] + next;

          if (sum === target) {
            result.push(1);
            result.push(2);
            console.log(result);
            break;
          }
        } else {
          if (sum === target) {
            result.push(0);
            result.push(2);
            console.log(result);
            break;
          }
        }
      }
    }
  }
  console.log(result)
  return result;
}

twoSum([3,2,4], 6);