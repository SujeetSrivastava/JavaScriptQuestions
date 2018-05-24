//Find Out the Standard deviation for below orders
let orders = [1,2,3,4,5,6,7,15,16,17,25,8,20, 21];

//Solution
function Standarddeviation(orders){
    let arrAverage = arr => arr.reduce((sum, x)=> x+sum,0)/arr.length;
    let avgOrder = arrAverage(orders);
    let difference = orders.map(x=>x-avgOrder).map(x => x * x);
    let variance =  arrAverage(difference);
    let standardDeviation = Math.sqrt(variance);
    let isQutLayer = orders.map(x => x - avgOrder - standardDeviation >0);
    return isQutLayer;
    }

console.log(isQutLayer);