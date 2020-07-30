function add(num1, num2) {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    throw new Error('Incorrect Input');
  }
  return num1 + num2;
}
var num1 = 5;
var num2 = 3.2;
var result = add(num1, num2);
console.log(result);
