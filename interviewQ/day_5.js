let str = "Hey baby how are you"

let vowels = ['a', 'e', 'i', 'o', 'u']

const countVowels = (data) => {
    let count = 0


    data.toLowerCase().split('').map((char) => {
        vowels.includes(char) && count++
    })

    return console.log(count);
}

// finding numbeer of vowels in given data 
// countVowels(str)



const showMessage = (marks) => {
    // const message = marks || " Absent"  // showing absent while we put marks = 0; ye bug h
    const message = marks ?? " Absent" // we are using Nullish coalescing operator to fix this bug
    console.log(`Marks are ${message}`);
}

// showMessage(0)


// Find Average of given numbers  

let arr = [2, 4, 6, 8]

const findAverage = (arr) => {
    let total = arr.reduce((acc, curr) => acc + curr, 0)
    let average = total / arr.length
    console.log(average);
}

findAverage(arr)