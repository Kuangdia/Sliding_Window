/*
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.
*/

/*
Input: s = "zxyzxyz"
Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Input: s = "xxxx"
Output: 1

*/

function lengthOfLongestSubstring(s) {
  let map = new Map(); // To store each character's most recent index
  let maxLen = 0; // To keep track of the maximum substring length found
  let left = 0; // Left boundary of the sliding window

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // If current character is found in map, update left boundary to avoid duplicates
      left = Math.max(map.get(s[i]) + 1, left);
    }
    map.set(s[i], i); // Update the latest index of the current character
    maxLen = Math.max(maxLen, i - left + 1); // calculates the current position i and start of substring (left). This calculation tells us the length of the current window (substring) that we are considering.
    /*
    Suppose left is at index 3 and i is at index 5.
    The characters involved might be something like "abcde", where left points to 'd' (index 3) and i points to 'f' (index 5).
    The calculation i - left would be 5 - 3 = 2. However, the substring 'def' has a length of 3 characters.
    Adding 1 corrects this: 5 - 3 + 1 = 3, giving the correct length of the substring.
    */
  }

  return maxLen; // Return the maximum length of substring without repeating characters
}

console.log(lengthOfLongestSubstring("zxyzxyz"));
