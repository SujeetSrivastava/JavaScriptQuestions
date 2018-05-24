function persistence(num){

    if(num.toString().length <= 1){
        return num
    }
    while(num.toString().length>1){
        num = num.toString().split('').reduce((x,m)=>x*m);
    }
    return num 
}

console.log(persistence(24))


//Other Solution

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

