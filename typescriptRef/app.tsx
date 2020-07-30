function add(num1: number, num2: number, showResult: boolean) {
  // if (typeof num1 !== 'number' && typeof num2 !== 'number') {
  //   throw new Error('Incorrect Input');
  // }
  if (showResult === true) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}
const num1 = 5;
const num2 = 3.2;
const printResult = true;
const result = add(num1, num2, printResult);
console.log(result);
