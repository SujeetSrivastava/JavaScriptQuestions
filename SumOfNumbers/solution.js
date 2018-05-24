


function GetSum( a,b )
{
    if(a>b){
        a = b + (b=a, 0);
    }
    for(let i=a+1;i<=b;i++){
        a+=i;
    }
    return a;
}


//Other Solution

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}



