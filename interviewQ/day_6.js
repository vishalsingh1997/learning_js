// comaparing two array with their index and value and data type are equal or not 
let arr1 = [1, 2, 3]
let arr2 = [1, 2,4]

const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((currVal, ind) => currVal === arr2[ind])

}

console.log(isArrayEqual(arr1, arr2));