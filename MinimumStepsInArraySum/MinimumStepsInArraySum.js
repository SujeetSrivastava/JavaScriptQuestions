//Min Steps needed by adding each element of array to get required value
//like => 8 9 10 4 2 to get result 23, steps counts will be :
//1. 2+4 = 6
//2. 6+ 8 = 14
//3. 9 + 14 = 23

// so sout put should be 3 
function minimumSteps(numbers, value){
    let i=0;
    let j = numbers.length -1
    let temp;
    numbers.sort((a,b)=>a-b);
    for(i,j; i<j;){
        temp = numbers[i] + numbers[j];
        if(temp === value){
            i++;
            j--;
        }else if(temp < value){
            i=i+1;
        }else{
            j=j-1;
        }
    }
    return i;
}


console.log(minimumSteps([8,9,10,4,2], 23));