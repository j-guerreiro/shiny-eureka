/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

  // Current number auxiliar variable.
  let currentValue = 0;
  // Sum of the current + next.
  let sum = 0;

  // Indexes of number' that the sum equals targets.
  let firstIndex = 0;
  let secondIndex = 0;

  // Edge cases
  // Single number ex: [3]; index = 0
  // 2 numbers [3,3] (6)

  let counter = 0;
  for (i = 0; i < nums.length; i++) {
    currentValue = nums[counter];

    for (j = 1; j < nums.length; j++) {
      sum = currentValue + nums[j];
      if (sum === target) {
        console.log('entrou')
        firstIndex = i;
        secondIndex = j;

        break;
      }
      counter++;
    }
  }

  let result = [];

  // Edge cases
  if (nums.length === 1) {
    result = [firstIndex];
  } else if (nums.length === 2) {
    result = [0, 1];
  } else if (nums[0] + nums[1] === target) {
    result = [0, 1];
    // default
  } else {
    result = [firstIndex, secondIndex];

    if (result[0] > result[1]) {
      result = result.reverse();
    }
  }
  console.log(result);
}

// Need to fix this edge case:
twoSum([2,5,5,11], 10);