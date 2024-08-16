/*
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.
*/

/*
Input: s1 = "abc", s2 = "lecabee"
Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Input: s1 = "abc", s2 = "lecaabee"
Output: false
*/

// Time complexity O(n * m)
// n is the length of s1 and m is the length of s2
function checkInclusion(s1, s2) {
  let s1Len = s1.length;
  let s2Len = s2.length;

  // Iterate over s2 with a sliding window of size s1.length
  // must be less than or equal to s2Len - s1Len to get the last iteration
  for (let i = 0; i <= s2Len - s1Len; i++) {
    let set = new Map();

    // Initialize the map with the frequency of characters in s1
    for (let char of s1) {
      set.set(char, (set.get(char) || 0) + 1);
    }

    // Iterate through the window in s2
    // i + s1Len is fixed length of the sliding window
    for (let j = i; j < i + s1Len; j++) {
      if (set.has(s2[j])) {
        let count = set.get(s2[j]);
        // if all letters matched then they should eventually all be deleted
        if (count === 1) {
          set.delete(s2[j]); // If this was the last occurrence, delete it from the map
        } else {
          set.set(s2[j], count - 1); // Otherwise, decrement the count
        }
      } else {
        break; // If a character is found that is not in s1, break early
      }
    }

    // If the set is empty, all characters matched in the correct frequency
    if (set.size === 0) {
      return true;
    }
  }
  return false;
}

console.log(checkInclusion("abc", "lecabee"));
