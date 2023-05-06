// add whatever parameters you deem necessary
/* 
constructNote

Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

input: msg -> str lowercase
       letters-> str lowercase

       output true or false
       use freqCounter
       for each letter in messageFreq decrement from that key in lettersFreq

*/
function constructNote(msg, letters) {
  if (msg.length > letters.length) return false;

  const lettersFreq = {};
  for (let letter of letters) {
    lettersFreq[letter] = (lettersFreq[letter] || 0) + 1;
  }

  for (let msgLetter of msg) {
    if (!(msgLetter in lettersFreq) || lettersFreq[msgLetter] === 0) {
      return false;
    }
    lettersFreq[msgLetter]--;
  }

  return true;
}
module.exports = { constructNote };
