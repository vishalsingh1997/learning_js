// console.log("abcd".charAt(0).toUpperCase());

let str = "abcd"

const baba = (st) => {
    xxx = st.split('').map((vl, i) => {
        if (i === 0) {
            console.log(vl.toUpperCase());
        } else {
            console.log(vl);
        }
    })

    console.log(xxx);
}


console.log(baba(str));
