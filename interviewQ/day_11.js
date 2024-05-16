let str = "hello hOw are yOu baBy"


arr = str.toLowerCase().split(' ')

firstLetter = arr.map((ltr) => {
    return ltr.replace(ltr[0],ltr[0].toUpperCase())
})

let firstWord = firstLetter.splice(0,1).join('').toLowerCase()
// console.log(firstLetter);
// console.log(newArr);
let restWord = firstLetter.join('')
console.log(`${firstWord}${restWord}`);

