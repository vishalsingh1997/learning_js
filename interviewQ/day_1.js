
// find longest word in a given sentence..


abc = "hello baby wanna have some coffee elephant"

const longestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    word = str.split(' ').sort((a, b) => b.length - a.length)

    // console.log(word.at(-1));  // finding last word of array using 'at()' method.
    return word.at(-1)
}

// console.log(longestWord(abc));

//------------------------* Q-2 *--------------------------

// Find no of "i" in a word "missisippi"

// method 1 using reduce ---------------------

countletter = (word, char) => {

    let output = word.split('').reduce((accum, curr) => {

        if (curr === char) {
            accum++
        }

        return accum
    }, 0)
    // console.log(output);

}

// console.log(countletter("missisippi", "i"));

// method 2 using for loop ----------------
let inputStr = "misssiiisippiii"

char_i = "i"

totalCount = 0

for(let i=0; i<inputStr.length; i++){
    if(inputStr[i] === char_i){
        totalCount++
    }
}

// console.log(totalCount);

// method 3 using map ---------------------

inputStr.split('').map((ltr)=>{
    if(ltr===char_i){
        totalCount++
    }
})
// console.log(totalCount);





