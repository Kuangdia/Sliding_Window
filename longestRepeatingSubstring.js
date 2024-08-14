/*
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
*/

/*
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Input: s = "AAABABB", k = 1
Output: 5
*/

// time complexity O(n)
function characterReplacement(s, k) {
  let maxFreq = 0;
  const count = {};
  let maxLength = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    count[char] = (count[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[char]);

    /*
    The difference between these two values (i - left + 1 - maxFreq) is the number of characters in the window that are not the most common character and hence would need to be replaced to make the entire window uniform.

    i - left + 1 calculates the total number of elements in the window. This addition of 1 is crucial because indexing is zero-based, and without adding 1, the length would be off by one.

    maxFreq represents the frequency of the most common character within the window. It tells us how many characters in the window are the same and do not need to be changed to achieve uniformity.
    */
    while (i - left + 1 - maxFreq > k) {
      count[s[left]]--; // Reduce the count of the leftmost character
      left++; // Shrink the window from the left
    }

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement("AAABABB", 1));
