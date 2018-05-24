function michealPays(costs) {
    let payment = 0;
    if(costs<5){
        payment = costs;
    }else{
        payment = costs/3 > 10 ? (costs - 10) : (costs * 2 / 3); 
    }
    return Math.round(payment*100)/100;
}