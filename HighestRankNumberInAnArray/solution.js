function highestRank(arr){
    let seen = {};
    return arr.reduce((mostfreq,item) => {
        seen[item] = !seen[item] ? 1 : ++seen[item];
        if (seen[item] > mostfreq.freq) {
            mostfreq.item = item;
            ++mostfreq.freq;
        }
        if(item > mostfreq.item && seen[item] == mostfreq.freq){
            mostfreq.item = item; 
        }
        return mostfreq;
    },{item:'',freq:0}).item;
}


console.log(highestRank([7,1,1,2,2,4,7,7]));


