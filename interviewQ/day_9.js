// no of vowels in a given string 
let str = "Hello baby, how are you?"
let vowels = ['a', 'e', 'i', 'o', 'u', ['f', 'g', ['t', 'y']]]
let arr = ['d', 'f']




// ----------------- finding vowels in given array ---------------------
const checkVowels = (x) => {
    if (!vowels.includes(x)) {
        console.log(`${x} is not a vowels`);
        return false
    }
    return `${x} is a vowels`
}
// console.log(checkVowels('i'));

// ---------------- count of vowels in string -----------------------

const vowelsCount = (data) => {
    let count = 0

    data.toLowerCase().split('').map((char) => {
        vowels.includes(char) && count++
    })

    return count
}

// console.log(vowelsCount(str));


