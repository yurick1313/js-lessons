// Об'єкти

// const obj = {
//   name: 'Gogi',
// };

// const newObj = obj;

// console.log(obj.name);
// console.log(newObj.name);

// console.log(obj === newObj);

// obj.name = 'Vlad'
// console.log(newObj.name);

// const secObj = {
//   name: 'Gogi',
// };

// console.log(obj === secObj);

// const obj = {};

// Object.create()

// const obj = Object.create();


// const div = document.getElementsByClassName('gogi')

// console.log(div)

// Методи об'єктів

// const user = {
//   name: 'Vlad',
//   age: 25,
//   isProgrammer: true,
// }

// Object.keys()
// Object.values()

// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object.entires(obj);

// console.log(Object.entries(user));

// Object.assign(obj, obj);

// user.lastName = 'Ralets'

// console.log(user.lastName);

// const nat = {
//   nationality: 'UKR'
// }

// // const arr = [];

// console.log(Object.assign(nat, user));

// Object.freeze();

// Object.freeze(user)

// user.name = 26

// console.log(user);

// Object.seal()

// Object.seal(user);

// user.city = 'Prague';
// user.name = 'Gogi'

// console.log(user);

// Object.hasOwnProperty()

// console.log(user.hasOwnProperty('name'));

// const user = {
//   name: 'Gogi',
//   age: 42,
//   sayHello: () => {
//     console.log('Hello!');
//   }
// }

// user.sayHello()

// this

// const newUser = {
//   name: 'Gogi',
//   sayHello: function() {
//     console.log(`Hello` + this.name);
//   },
// }

// newUser.sayHello()

// console.log(newUser)

// Функція конструктор

// function User(name, age) {
//   this.name = name;
//   this.age = age;
  // this.sayHi = function() {
  //   console.log('Hello' + this.name)
  // }
// }

// const me = new User('Vlad', 25);

// console.log(me.name);