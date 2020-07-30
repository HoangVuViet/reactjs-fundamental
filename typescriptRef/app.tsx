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
console.log(result);
//Object types
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Hoang',
  age: 21,
  hobbies: ['Sports', 'Coding'],
  role: [2, 'Dev'],
};
person.role.push('Gamer');
console.log(person);
