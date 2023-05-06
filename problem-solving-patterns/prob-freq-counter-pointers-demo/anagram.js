/* write a function that takes two strings and sees if the 
2nd string is an annagram of the 1st

1: create a freqCount helper function
2: call freqCount on both strings
3: loop over keys of first and vals of first string see if 2nd string has
those keys and vals
4: make sure to check their lengths first and return false if not same
*/

function anagram(str, str2) {
  if (typeof str !== "string" || typeof str2 !== "string") return false;
  if (str.length !== str2.length) return false;

  const getFreqCount = (str) => {
    let freqCount = {};
    let arr = str.toLowerCase().split("");
    for (let letter of arr) {
      freqCount[letter] = freqCount[letter] + 1 || 1;
    }
    return freqCount;
  };
  let countStr = getFreqCount(str);
  let countStr2 = getFreqCount(str2);

  for (let k in countStr) {
    if (k in countStr2) {
      if (countStr2[k] !== countStr[k]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

module.exports = anagram;
