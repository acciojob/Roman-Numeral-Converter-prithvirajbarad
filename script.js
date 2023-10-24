function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	 let romanNumeral = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      romanNumeral += romanNumerals[i];
      num -= values[i];
    }
  }

  return romanNumeral;
}

// Get the necessary DOM elements
const numberInput = document.getElementById("number-input");
const convertButton = document.getElementById("convert-button");
const resultDiv = document.getElementById("result");

// Add click event listener to the convert button
convertButton.addEventListener("click", () => {
  const inputNumber = parseInt(numberInput.value, 10);
  const romanNumeral = convertToRoman(inputNumber);
  resultDiv.textContent = `Roman Numeral: ${romanNumeral}`;
});