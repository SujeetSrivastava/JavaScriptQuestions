/*Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 1012*/

function nextPrime(n){
    if(n<2){
        return 2;
    }
    while(true){
        var isPrime = true;
        n=n+1;
        var sqrt = parseInt(Math.sqrt(n));
        for(var i = 2; i<=sqrt;i++){
            if(n % i == 0 ){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            return n;
        }
    }
}

console.log(nextPrime(200));


// Other Solution

const nextPrime = (n) => isPrime(n + 1) ? n + 1 : nextPrime(n + 1);

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
        return false;
        }
    }
    
    return true;
}