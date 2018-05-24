function digital_root(num){
    let sum=0;
    while(num>0){
        sum+=num%10;
        num= parseInt(num/10);
    }
    return sum;
}


console.log(digital_root(123));