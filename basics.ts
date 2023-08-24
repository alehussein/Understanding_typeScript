function adding(num1: number, num2: number, showResult: boolean, phrase: string) {
  let result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 6;
const printResult = true;
const resultPhrase = "Result is: ";

adding(number1, number2, printResult, resultPhrase);
