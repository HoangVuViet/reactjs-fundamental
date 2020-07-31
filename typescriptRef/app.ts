interface Person {
  name?: string;
  age?: number;
  greet?(phrase: string): void;
}
let user1: Person;
user1 = {
  name: 'Hoang',
  age: 30,
  greet(pharse: string) {
    console.log(pharse + ' ' + this.name);
  },
};
user1.greet('Hello there. I am');
const test = (info: Person) => {
  console.log(info.name);
};
test({ name: 'hoang', age: 30 });
