// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.

// Example:
// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

// --------------------------------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  if (t.length === 1) return t[0];

  s = s.split("").reduce(function(accum, cur) {
    return accum + cur.charCodeAt(0);
  }, 0);
  t = t.split("").reduce(function(accum, cur) {
    return accum + cur.charCodeAt(0);
  }, 0);

  return String.fromCharCode(t - s);
};
