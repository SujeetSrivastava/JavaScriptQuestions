//With Recursion

// function factoWithRecursionFunk(num){
//     var result = num;
//     if(num<-1){
//         return -1
//     }else if(num == 0){
//         return 1
//     }else{
//         return (num * factoFunk(num-1));
//     }
// }

//without Recursion with While loop

// function factoWithWhileLoop(num){
//     var result = num;
//     if(num == 0 ||  num == 1){
//         return 1;
//     }

//     while(num > 1){
//         num--;
//         result = result * num;
//     }
//     return result
// }

function factoWithForLoop(num){
    if(num == 0 ||  num == 1){
        return 1;
    }

    for(num = num-1; num>1; num--){
        num = num * num;
    }
    return num
}
console.log('factoWithForLoop = ', factoWithForLoop(5));

