function findLongestWordLength(str) {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("Hello World"));
console.log(findLongestWordLength("Learn hard to make the world better with software"));