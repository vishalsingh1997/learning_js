let arr = [1, 2, [54, 74], 8, [4, 5, 84, [8, 45, 6]]]
let arr2 = arr.flat(arr.length)
// console.log(Math.max(...arr2));

console.log(arr2.at(arr2.length - 1));

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array4 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2, ...array4];

// console.log(array3);

