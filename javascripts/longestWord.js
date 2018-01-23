// function returns the longest word in given string (sen)
function LongestWord(sen) { 

  var wordArray = sen.split(" ");
  var letters = /^[A-Za-z]+$/;
  var wordLength = 0;
  var tempWordLength = 0;
  var longestWord = "";
  
  for (var i=0; i < wordArray.length; i++)
  {
      if (wordArray[i].match(letters))
        tempWordLength = wordArray[i].length;
        
      if (tempWordLength > wordLength)
      {
        wordLength = tempWordLength;
        longestWord = wordArray[i];
      }
        
  }
  sen = longestWord;
  return sen; 
         
}
   
// keep this function call here 
//LongestWord(readline());
var testString = prompt("Enter string for finding longest word: ");
console.log("String :: ", testString);
console.log("longest word in string is :: ", LongestWord(testString));