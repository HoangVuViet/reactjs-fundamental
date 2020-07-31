function add(
  num1: number,
  num2: number,
  showResult: boolean,
  resultPhrase: string
) {
  // if (typeof num1 !== 'number' && typeof num2 !== 'number') {
  //   throw new Error('Incorrect Input');
  // }
  const result = num1 + num2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return num1 + num2;
  }
}
let num1: number;
num1 = 5;
const num2 = 3.2;
const printResult = true;
const resultPhrase = 'Result is:';
const result = add(num1, num2, printResult, resultPhrase);
//Enum
enum Role {
  'ADMIN',
  'USER',
  'DEV',
}
//Object types

const person = {
  name: 'Hoang',
  age: 21,
  hobbies: ['Sports', 'Coding'],
  role: Role.ADMIN,
};
console.log(person);

// Void
function logSomething(): void {
  console.log('Hello World!');
}
logSomething();
