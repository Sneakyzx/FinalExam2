function convertToRoman(num) {
    let Number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let Roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    let result = [];
  
    const findElement = e => {
      return e <= num;
    };

    while (num > 0) {
        
      let convertNum = Number.find(findElement);
  
      result.push(Roman[Number.indexOf(convertNum)]);
      num -= convertNum;
    }
    let newResult = result.join("");
  
    return newResult;
  }
  
  export default convertToRoman;
  