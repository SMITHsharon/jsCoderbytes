//For this challenge you will be adding up all the numbers from 1 to a certain argument.
function SimpleAdding(num) { 

    sum = 0;
    for (var i=0; i<=num; i++)
    {
        sum += i;
    }
  
  return sum; 
         
}
   
// keep this function call here 
//SimpleAdding(readline());
var num = prompt("Enter number argument: ");
console.log("String :: ", num);
console.log("simple sum = ", SimpleAdding(num));


// recursive :: 
/*
function SimpleAdding(num) { 
  if (num === 1) {
    return 1;
  }
  else {
    return num + SimpleAdding(num -1);
  }
}
*/