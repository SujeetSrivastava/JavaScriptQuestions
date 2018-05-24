//Solution 1
function createPhoneNumber(numbers){
    var number = numbers.join('');
    return '(' + number.slice(0, 3) + ') ' + number.slice(3, 6)  + '-' + number.slice(6, 10);
}

//Solution 2
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

//Solution 3
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

//Solution 4
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}

//Solution 5

function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}