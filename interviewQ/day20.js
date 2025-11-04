// Input: "A2B3C4D5"
// Output: "AABBBCCCCDDDDD"

let inputStr = "A2B3C4D5"

let result = ""

for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i]
    const count = Number(inputStr[i + 1])

    result = result + char.repeat(count)   
}

console.log("result---- ", result);


// more problems 


// String compression & expansion

// Decompress the string
// Input: "A2B3C4D5"
// Output: "AABBBCCCCDDDDD"

// Run-length encoding (case insensitive)
// Input: "aaAAAbbBB"
// Output: "a5b4"

// Count frequency of each character (non-consecutive)
// Input: "AABBCD"
// Output: { A: 2, B: 2, C: 1, D: 1 }

// Find the longest run of the same character
// Input: "AAABBBBCCDDDDDD"
// Output: "D6"

// Remove consecutive duplicates
// Input: "AABBBCCDAA"
// Output: "ABCDA"

// Bonus (slightly trickier)

// Group consecutive letters by case
// Input: "aaBBccDDDDDaa"
// Output: [ "aa", "BB", "cc", "DDDDD", "aa" ]

// Alternate case pattern detection
// Input: "aAaAaA" → Output: true (alternates upper/lower)

// Replace repeating characters with * except first
// Input: "mississippi" → Output: "mis*is*ip*i"

// Check if string has repeating pattern
// Input: "abcabcabc" → Output: true (pattern: "abc")

// Count groups of consecutive identical characters
// Input: "AAABBAAC" → Output: 5 (groups: AAA, BB, AA, C)