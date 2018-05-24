
function maxGap (numbers){
    //your code here
    var max =0;
    var sortedArr =[];
    numbers.forEach(function(element) {
        sortedArr.push(element);
    });
    sortedArr.sort((a,b)=>a-b);
    for (i=1; i<sortedArr.length; i++){
        max = Math.max(max,sortedArr[i]-sortedArr[i-1]);
    }
    return max;
}

console.log(maxGap([13,10,2,9,5]));


//other solution
function maxGap (numbers){
    const sorted = numbers.sort((a, b) => a - b)
    return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
}