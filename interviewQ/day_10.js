// checking a given number is existing in poe=wer of 2 or not.

const isPowerTwo = (num) => {
    let output = false
    if (num >= 2) {
        for (let i = 1; i < num; i++) {
            if (2 ** i === num) {
                output = true
            }
        }
    }
    return output
}


// console.log(isPowerTwo(1));

// -------------- Finding sum of square of a given array------------


arr = [1, 2, 3]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += (arr[i] * arr[i]);
// }

// console.log(sum);
let total = arr.map((val, sum = 0) => sum +=(val*val))
console.log(total);

// console.log(arr.reduce((acc, curr) => acc = acc + (curr * curr), 0));