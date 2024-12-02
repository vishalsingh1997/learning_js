
// 659839 -> 6+5+9+8+3+8 =39 -> 3+9 -> 12 -> 1+2 -> 3 // answer is 3



function addnum(data) {
    let result = String(data).split('').map((item) => {
        return Number(item)
    }).reduce((a, b) => a + b)
  


    if (result > 9) {
        addnum(result)
    } else {
        console.log(result);
    }

}


addnum(659838)


