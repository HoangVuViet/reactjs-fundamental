var user1;
user1 = {
    name: 'Hoang',
    age: 30,
    greet: function (pharse) {
        console.log(pharse + ' ' + this.name);
    }
};
user1.greet('Hello there. I am');
var test = function (info) {
    console.log(info.name);
};
test({ name: 'hoang', age: 30 });
