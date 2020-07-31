class Person {
  id: string;
  name: string;
  employees: string[] = [];
  constructor(i: string, n: string) {
    this.name = n;
    this.id = i;
  }
  describe = () => {
    console.log('User description: ' + this.name);
  };
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class Student extends Person {
  email: string;
  grade: number;
  constructor(id: string, name: string, email: string, grade: number) {
    super(id, name);
    this.email = email;
    this.grade = grade;
  }
  addEmployee(name: string) {
    if (name === 'Vu') {
      return;
    }
    this.employees.push(name);
  }
}
// class AccountingPerson extends Person {
//   private lastReport: string;
//   // get mostRecentReport() {
//   //   if (this.lastReport) {
//   //     return this.lastReport;
//   //   }
//   //   throw new Error('No report found!');
//   // }
// }
const User = new Student('st1', 'Hoang', 'hoang9cnd@gmail.com', 9);
const persons = ['Hoang', 'Vu', 'Viet'];
persons.forEach((el) => User.addEmployee(el));
// //print employees
// User.printEmployeeInfo();
//
console.log(User);
// const applyUser = { describe: User.describe };
// console.log(applyUser.describe);
// User.describe();
