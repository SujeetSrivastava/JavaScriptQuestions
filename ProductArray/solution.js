function productArray(numbers){
  let len = numbers.length;
  let left = new Array(len);
  let right = new Array(len);
  
  left[0]=1;
  for(let i=1;i<len;i++){
    left[i]=left[i-1] * numbers[i-1];
  }
  console.log(left) ;
  
  right[len-1]=1;
  
  for(let j=len-2; j>=0;j--){
    right[j]=right[j+1]* numbers[j+1];
  }
  console.log(right);
  
  return numbers.map((el,index) => left[index] * right[index]);
}

productArray([12,20]);



///Other solution

const productArray = a => a.map(n => a.reduce((p, n) => p * n, 1) / n);


//
function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}