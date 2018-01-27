// function finds the factorial of num
function FirstFactorial(num) { 

	if ((num == 0) || (num == 1))
	{
		return 1;
	}
	else // num > 1
	num = num * FirstFactorial(num-1);

	return num; 
}
   
//FirstFactorial(num);
var num = prompt("Enter number for factorial: ");
if (num < 0)
{
	alert("You must enter a non-negative integer");
}
else
{
	console.log(num,"! = ", FirstFactorial(num));
}



/*
var rl = require('readline');

var i = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

i.question('Find XFactorial ; X = ', (num) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);

function FirstFactorial(num) { 

	if (num < 0)
		alert("You must enter a non-negative integer");

	  if ((num == 0) || (num == 1))
	  {
	  	return 1;
	  }
	  else // num > 1
	    num = num * FirstFactorial(num-1);

	  return num; 
}
   
//FirstFactorial(readline());
FirstFactorial(num);

  i.close();
  process.stdin.destroy();
});
*/

