/**
 * @param {number} x
 * @return {boolean}
 * LeetCode challenge
 */
const isPalindrome = (number) => {

  if (number < 0) {
    console.log('Is not a palindrome! :( ');
    return false;
  } else {
    // Negative/positive flag.
    let isNegative = number < 0 ? true : false;

    // Removes (minus) sign from number
    // if the number is not positive.
    if (isNegative) {
      number *= -1;
      console.log(number);
    }

    // Converts number to string array.
    // Ex: 123 to ['1','2','3'];
    let numberArray = number.toString().split("");

    // Converts each array string number into integers
    // and push into new array.
    let intArray = [];

    for (let i = 0; i < numberArray.length; i++) {
      intArray.push(parseInt(numberArray[i]));
    }

    // Negative check, if true make first number negative.
    if (isNegative) {
      intArray[0] *= -1;
    }

    let reversedArray = [];

    for (let i = 0; i < numberArray.length; i++) {
      reversedArray.push(intArray[i]);
    }

    reversedArray = reversedArray.reverse();

    console.log('Reversed: ', reversedArray);
    console.log('Non reversed: ', intArray);

    let isEqual = 0;

    for (let i = 0; i < intArray.length; i++) {
      if (intArray[i] === reversedArray[i]) {
        isEqual++;
      }
    }

    if (isEqual === intArray.length) {
      console.log('Is palindrome! :D ');
      return true;
    } else {
      console.log('Is not a palindrome! :(')
      return false;
    }
  }
};

isPalindrome();