const arr = [2, 45, 3, 67, 34, 34, 345, 567, 123];


let largestNo = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNo) {
        largestNo = arr[i]
        // console.log(largestNo);
    }
}

// console.log(largestNo);
// console.log(Math.max(...arr));
// console.log(arr.sort((a,b)=>b-a));



const arr2 = [2, 45, 3, 67, 34, 34, 345, 567, 123];

// console.log(arr2[0]);
for (let i = 0; i < arr2.length; i++) {
    //    console.log(arr2[i]);
    for (let j = i; j < arr2.length; j++) {
        if (arr2[i] < arr2[j]) {
            // console.log(arr2[j]);
        }
    }
}




let arr3 = ["hfhg", "fdgjhdf", "fghjd", "ghjf"]

console.log(String(arr3).replace(',', ' '))


let arr4 = 123456

console.log(arr4.toString().split(''));