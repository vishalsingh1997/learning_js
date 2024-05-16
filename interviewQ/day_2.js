// Sorting an array in ascending order without usin basic sort method


arr1 = [2, 7, 3, 22,41, 8, 5, 6, 10]

odd = arr1.filter((a)=>a%2 !=0)
// console.log(odd);
sum = arr1.reduce((acc,curr)=>acc=acc+curr)
// console.log(sum);

// console.log(Math.max(...arr1));

sortAsc = (arr) => {
    return arr.sort((a, b) => a - b)  // here we're using comaparison method inside sort 
}
// console.log(sortAsc(arr1))


var obj = {};
array1 = {name:"vishal",age:"xxx"}





// Loop to insert key & value in this object one by one
// for (var i = 0; i < keys.length; i++) {
//     obj[keys[i]] = values[i];

// }