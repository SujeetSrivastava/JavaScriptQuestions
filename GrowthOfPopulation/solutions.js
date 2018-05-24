function nbYear(p0, percent, aug,  p){
    var year=0;
    while(p0 < p){
        p0 += parseInt(p0*percent/100)+aug;
        year++;
    }
    return year;
}


//Other Solution 

function nbYear(p0, percent, aug, p) {
    for(var y = 0; p0 < p; y++){
        p0 = p0 * (1 + percent / 100) + aug;
    }
    return y;
}



