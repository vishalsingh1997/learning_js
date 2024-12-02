// find fibonacci of given number which is sum of preeceeding two numbers 

// e.g.  0, 1, 1, 2, 3, 5, 8, 13, 21 

const fibonacci = (num) => {
    // base case 
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(10));
