let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var getMaxArrNumber = function (arr) {
	return Math.max.apply(null, arr);
}

var maxSequence = function(arr){
    if(arr.length === 0 ) return 0;
    if(allNegatives(arr)) return getMaxArrNumber(arr);
    if(allPositives(arr)) return sum(arr);

    var curr_max = 0, max_so_far = 0;

    for(var i = 0; i < arr.length; i++){
        curr_max = Math.max(0, curr_max + arr[i]);
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}

/*console.log(maxSequence([-2, -18, -3, -4, -12, -2, -19, -5, -4])); // returns -2
console.log(maxSequence([])); // returns 0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); // returns 23
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6*/