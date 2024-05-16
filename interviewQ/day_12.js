let num = 711

//finding nos by which given no can be divided

const divisbleNos = (num)=>{
    if(num>0){
        for(let i=1; i<num; i++){
            if(num%i == 0){
                console.log(i);
            }
        }
    }else{
        console.log("");
    }
}

divisbleNos(num)

