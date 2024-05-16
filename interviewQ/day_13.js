let arr = [1, 1, 1, 2, 5, 42, 46, 1, 2, 3, 2, 3, 5, 6, 4, 6, 8, 5, 8, 998]

let unique = [...new Set(arr)]
// console.log(unique.sort((a,b)=>a-b));

let count = {};
// arr.forEach((num)=>{count[num]=(count[num] || 0)+ 1})
arr.map((num)=>{count[num]=(count[num]|| 0) + 1})

// console.log(count);
// let mult = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {})

// console.log(mult);


console.log(true + true);