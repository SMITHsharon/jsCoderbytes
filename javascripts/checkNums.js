// For this challenge you will be comparing two numbers and determining which one is greater.

function CheckNums(num1,num2) { 

    if (num1 > num2)
        return "false";
        
    else if (num1 < num2)
        return "true";
    
    return -1; 
}
   
// keep this function call here 
//CheckNums(readline());
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter secone number: ");
console.log("The two numbers are :: ", num1, ", ", num2);
console.log("Second number is greater than first? ", CheckNums(num1, num2));

// cleaner, if returning boolean values; 
// instructions said to return strings "true", "false"
/*
function CheckNums(num1,num2) { 

  if (num1 == num2) {
     return "-1"; 
  }
  else {
    return (num2 > num1); 
  }     
}
*/