function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length/2; i++) {
    const z = word.length - 1 - i;
    if (word[i] !== word[z]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/
  //iterate from the beginning of the string to the middle of the string
  // compare the letter we're iterating over to the corresponding letter at the end of the string
  // if the letters don't match, return false
  // if we reach the middle, and all the letters match, return true
/*
  Add written explanation of your solution here
*/
  //The function. isPalindrome, takes an input (string) and checks whether it's the string can be spelt backwards the same way.
  //To do this, the corresponding first word of the string is compared with its last words, second letter with the second last letter
  // and the process is reiterated for the rest of the string.
  //This is a test for palindromes and returns true if the word can be spelt the same way backwards. 
  //If the word cannot otherwise be spelt backwards, it returns false.

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("panama"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
