// find factorial of 5 


const factorial = (num) => {
    if (num === 1) {
        return 1
    } else {

        return num * (factorial(num - 1))   // recursion is here where we are calling a function inside function untill basecase doesn't match here basecase is return 1.

    }
}


console.log(factorial(5));



