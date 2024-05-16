// create a new unique array from given array ---------------------- Method 1--

const uniqueArr = (arr) => {
    let uniqueArray = []

    for (let i of arr) {
        if (uniqueArray.indexOf(i) === -1) {
            uniqueArray.push(i)
        }

    }
    console.log(uniqueArray);

    
}

uniqueArr([1, 1, 2, 5, 5, 6, 4, 6])


// finding unique array using Set method ------------------------------------ Method 2-

const unikArr =(array)=>{
    let uniqueArray = [...new Set(array)]  // here we're creating a new new array with unique values
    console.log(uniqueArray);
}

unikArr([1,2,2,2,5,6,7,9,98,8,8,7]) 



