// finding decreasing number and factorial


const decreasingNumber = (x) => {
    if (x > 0) {
        for (let i = x; i >= 0; i--) {
            console.log(i);
        }
    } else {
        console.log("Either no is zero or not greater than zero..");
    }
}

// here we getting output from numbers to zero
// decreasingNumber(10) 



const findFactorial = (num) => {
    if (num >= 0) {
        let factor = 1
        for (let i = 1; i <= num; i++) {
            factor = i * factor
        }
        return console.log(factor);
    } else {
        console.log("Number is less than zero");
    }

}

// here we getting factorial of non negative numbers and zero

// findFactorial(3)


