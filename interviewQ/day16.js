// we have to finbd the how many time any iteger comes in an array count it ? 


const arr = [1, 5, 2, 6, 5, 2, 1, 1]

let count = {}
let maxCount = 0;
let mode;

// arr.map((item) => {
//     count[item] = (count[item] || 0) + 1  // here we are getting an object in which key is number and value is how may time it occurs
// })

// console.log(count); 


arr.forEach((item, index) => {
    count[item] = (count[item] || 0) + 1

    if (count[item] > maxCount) {
        maxCount = count[item]
        mode = item
    }
})

console.log(mode);




