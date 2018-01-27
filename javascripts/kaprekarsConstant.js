/* 
The Problem :: Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
*/

function KaprekarsConstant(num) { 

    var digitArray = getDigitArray(num);
    var descendingNum = sortDesc(digitArray);
    var ascendingNum = sortAsc(digitArray);
    var diff = descendingNum - ascendingNum;
    if (diff == 6174)
        return 1;
    else
        return KaprekarsConstant(diff) + 1; 
}

function getDigitArray(num) {
    
    var thousandsPlace = Math.floor(num / 1000);
    var hundreds = (num % 1000);
    var hundredsPlace = Math.floor(hundreds / 100);
    var tens = (hundreds % 100);
    var tensPlace = Math.floor(tens / 10);
    var ones = (tens % 10);
    
    return [thousandsPlace, hundredsPlace, tensPlace, ones];
}
    
function sortDesc(digitArray) {
    
    digitArray.sort(function(a, b){return b-a});
    return (digitArray[0] * 1000)  + (digitArray[1] * 100) + (digitArray[2] * 10) + digitArray[3];
}

function sortAsc(digitArray) {
    
    digitArray.sort(function(a, b){return a-b});
    return (digitArray[0] * 1000)  + (digitArray[1] * 100) + (digitArray[2] * 10) + digitArray[3];
}
   
// keep this function call here 
//KaprekarsConstant(readline());
var num = prompt("Enter number argument: ");
console.log("Initial Number :: ", num);
console.log("Count to reach Kaprekars Constant = ", KaprekarsConstant(num));


// other solutions
/*
function routine(num) {
    var smallNum = String(num).split('').sort((a, b) => a - b).join('');
    var bigNum = String(num).split('').sort((a, b) => b - a).join('');
    if (bigNum.length < 4) {
        bigNum += '0'.repeat(4 - bigNum.length);
    }
    var difference = Math.abs(Number(bigNum) - Number(smallNum));
    return difference;
}

function KaprekarsConstant(num) { 
    if (num === 6174) return 0;
    var difference = routine(num);
    return 1 + KaprekarsConstant(difference);
}
*/

/*
function KaprekarsConstant(num) { 
  var large,small,myNum,count=0,numArr;
  
  function recur(myNum){
    count++
    large = Number(String(myNum).split('').sort(function(a,b){return b-a}).join('')); 
    small = Number(String(myNum).split('').sort(function(a,b){return a-b}).join(''));
    myNum = large - small;
    if(myNum === 6174){
      return count; 
    }
    
    numArr = String(myNum).split('');
    while(numArr.length < 4){
      numArr.push(0);
    }
    myNum = Number(numArr.join(''));
    return recur(myNum);
  }
  return recur(num);
}
*/

