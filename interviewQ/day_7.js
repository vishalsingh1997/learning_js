// Q.  Find sum of all digits of a number? No should be atleast 5 digits.

const totalSumNum = (num) => {
    arr = num.toString().split('')

    if (arr.length >= 5) {
        console.log(arr.length);
        sum = 0
        let total = arr.map((i) => sum = Number(i) + sum)
        console.log(sum);
        return console.log(total); // it will retun a new array where 1st element will added with 2nd.

        // let total = arr.reduce((acc, curr) => Number(acc) + Number(curr), 0)
        // console.log(total);
    } else {
        return console.log("No is less tha 5 digits");
    }

}

totalSumNum(154546512545432475457)


