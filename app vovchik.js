// // HW_3 (08.05.2023)
//
// const entry = (oldNum1, oldChar, oldNum2) =>{
//     num1 = prompt('Enter number one', oldNum1)
//     char = prompt('Enter char (+, -, *, /)', oldChar)
//     num2 = prompt('Enter number two', oldNum2)
//     upNum1 = +num1
//     upNum2 = +num2
// }
// entry();
//
// while (isNaN(upNum1) || !upNum1 || isNaN(upNum2) || !upNum2) {
//     if (isNaN(upNum1) || !upNum1) {
//         const errorMessage = isNaN(num1) ? 'Please check your entered number!' : 'Sorry, the number is absent!';
//         alert(errorMessage);
//     }
//     if (isNaN(upNum2) || !upNum2) {
//         const errorMessage = isNaN(num2) ? 'Please check your entered number!' : 'Sorry, the number is absent!';
//         alert(errorMessage);
//     }
//     let oldNum1 = num1;
//     let oldChar = char;
//     let oldNum2 = num2;
//     entry(oldNum1, oldChar, oldNum2)
// }
//
// const calculator = (a, char, b) => {
//     switch (char) {
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//     }
// }
// console.log(calculator(upNum1, char, upNum2))
//
// // HW_2 (04.05.2023)
//
// let number = +prompt('Enter number');
// while (number%1!==0 || !number) {
//     if (number % 1 !== 0) {
//         alert('Sorry, the number is not an integer')
//         let oldNumber = number;
//         number = prompt(`Enter number, because ${oldNumber} is not an integer`);
//     }
//     if (!number) {
//         alert('Sorry, the number is absent')
//         number = +prompt(`Enter number`);
//     }
// }
// let x = 0
// for(let i=1; i<=number; i++){
//     if(i%5!==0){
//         continue;
//     }
//     console.log(i)
//     x++
// }
// if(x===0){
//     confirm('Sorry, no numbers')
// }

// HW_1 (01.05.2023)
// let name = prompt('Enter your name:')
// let age = prompt('Enter your age:')
// while(!name || !age || isNaN(age)){
//     alert('Please check your entered data!');
//     let oldName = name;
//     let oldAge = age;
//     name = prompt('Enter your name:', oldName);
//     age = prompt('Enter your age:', oldAge);
// }
//
// if (age < 18) {
//     alert('You are not allowed to visit this website.');
// } else if (age >= 18 && age <= 22) {
//     result = confirm('Are you sure you want to continue?');
//     if (result === true) {
//         alert(`Welcome, ${name}`);
//     } else {
//         alert('You are not allowed to visit this website.');
//     }
// } else {
//     alert(`Welcome, ${name}`);
// }


// const name = prompt('Enter your name')
// const age = Number(prompt('Enter your age'));
//
// if(age< 18){
//     alert('go back to school!')
// } else {
//     const sum = +prompt('Enter code')
//      if(sum>=500){
//         alert(`${name} thnks`)
//      } else {
//         alert('FOFF')
//      }
// }
//
// const numb1 = prompt('number 1')

// const num = 42.543
//
// console.log(Math.floor(num)) // 42 в більшу
// console.log(Math.ceil(num)) // 43
// console.log(Math.round(num)) // 43
// console.log(Math.trunc(num)) // 42
// console.log(num.toFixed(1)) // 42,5
// console.log(num.toFixed(5)) // 42,54300
//перетворення чисел
// let num = '42'
// console.log(typeof num)
// const num1 = Number(num)
// const num2 = +num
// console.log(num1, num2)
//
// let pix ='42px'
// console.log(parseInt(pix)); // повертає ціле значення
// // console.log(typeof parseInt(pix));
// const boolean = 234345356;
// console.log(boolean.toString());

// let value = 0 - '', null, undefined, NaN
// let value = 234
// console.log(Boolean(value));

// const question = prompt('Whats up?')
//
// if (question){
//     alert('ok')
// } else {
//     alert('no answer')
// }

// Арифметичні оператори
// console.log(4+2)
// console.log(4-2)
// console.log(4*2)
// console.log(4/2)
// console.log(4%2) - залишкове занчення
// console.log(4**2) -// в степені

// оперативны порівняння
// console.log(4>2)
// console.log(4<2)
// console.log(4>=2)
// console.log(4<=2)
// console.log(4 == 2) // false
// console.log(4 !== 2)
// console.log(4 != 2)
// console.log(4 === 2)
// console.log('a' > 'A')
// console.log('a' > 'B')
// console.log('a'.charCodeAt())
// console.log('!'.charCodeAt())

// console.log(true == 1);
// console.log(true === 1);
// console.log(false == 0);
// console.log(null == undefined);
// console.log(false == undefined);

// console.log(null>0) // false
// console.log(null<0) // false
// console.log(null>=0) // true
// console.log(null<=0) // true
// console.log(null==0) // false

// const num = 52
//
// if(num<20){
//     console.log('num < 24')
// } else if (num>50) {
//     console.log('num > 50')
// } else {
//     console.log('num>20 && num<50')
// }
// Тернарний оператор
// const user ='Ivan'
// console.log(user.toLocaleLowerCase() === 'Ivan' ? 'Hi, Ivan' : 'NaN User')

// const age = 20;
// const result = age>= 18 ? 'Pass' : age<10 ? 'Foff' : 'Pass'
// console.log(result)

// && - логічне і
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(1 && 5); // false
// console.log(0 && 5); // false

// const user = 'Vlad';
// console.log(user ==='Vlad' && 'Hello Vlad')

// || - логічне або
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || false); // false
// console.log(false || null); // null

// const user = 'Gogi'
// // console.log(user == 'Vlad' || user == 'Gogi')
// console.log(user == 'admin' || user == 'адмін' || user == 'админ')
// const ok = confirm('Are you sure')
// const str = prompt('Enter Qwerty12345')
// const res = str == 'Qwerty12345'
// alert(res && ok ? 'Deleted' : 'Denied')

// ! no

// console.log(!true) // false
// console.log(!false) // true
//
// console.log(!1); // false
// console.log(!''); // true

// Lesson 3

// while
// do while
// let i=0;
// do{
//     console.log(i);
//     i++
// } while (i<=30)

// for
// const  random = 20;
// for(let i=0; i<=100; i++){
//     if(i===random){
//         break;
//     }
//     console.log(i);
// }
// break - зупиняє
// continue - продовжує виключивши значення
// const  random = 20;
// for(let i=0; i<=40; i++){
//     if(i===random){
//         continue;
//     }
//     console.log(i);
// }
// i++ and ++i
// let i = 0;
// let j = 0;
// console.log(i++)
// console.log(i++)
// console.log(++j)
// console.log(++j)

// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         continue;
//     }
//     console.log(i)
// }

// const number = prompt('Enter number')
// for(let i=0; i<=10; i++){
//     // let y = number * i;
//     console.log(`${number} x ${i}= ${number * i}`)
// }

// let votes = [];
// let i = 0;
// while (i < 6) {
//     const vote = confirm('Are you vote?')
//     votes.push(vote)
//     i++
// }
// let yes = no = 0;
// for (let j = 0; j <= votes.length - 1; j++) {
//     votes[j] ? yes++ : no++
// }
// if (yes >= (votes.length * 0.6)) {
//     console.log('Done!')
// } else {
//     console.log('Not done!')
// }

// Lesson 4

// function showUserName(){
//     console.log('Vova')
// }
//
// function showUserNameTwo(name, LastName){
//     console.log(name, LastName)
// }
//
// showUserName();
// showUserNameTwo('Vova', 'Mk')

// function getSum(a, b){
//     console.log(a+b)
// }
// getSum(2,5)

// function getSumTwo(a, b){
//     let sum = a + b;
//     return sum
// }
// console.log(getSumTwo(7,7))
//
// const getName = function (){
//     console.log('Vova')
// }
// getName();
//
//  const button = document.querySelector('#button')
// button.onclick = getName();

// arrow function

// const getLastName = (nameX) => {
//     console.log(nameX);
// }
// button.onclick = getLastName('Vova')

// const getLastName = (nameX) => {
//     return nameX
// }
// const res = getLastName('Vlados')
// console.log(res)

// const sum1 = +prompt('Enter number one')
// const char = prompt('Enter char')
// const sum2 = +prompt('Enter number two')
//
// const calculator = (a, char, b) => {
//     switch (char) {
//         case "*":
//             return a * b;
//             break; // Не обов"язково, якщо є return
//         case "/":
//             return a / b;
//             break;
//         case "+":
//             return a + b;
//             break;
//         case "-":
//             return a - b;
//             break;
//     }
// }
// // console.log(calculator(sum1, char, sum2))
// alert(calculator(sum1, char, sum2))

// const multiply = (arr, num) => {
//     for(let i=0; i <= arr.length - 1; i++){
//         console.log(num*arr[i]);
//     };
// }
// multiply([5,6,9,10], 5)

// const ask = confirm('Open calculator?')
//
// const mult = () => {
//     const num1 = +prompt('Enter number one')
//     const num2 = +prompt('Enter number two')
//     let sum = num1 + num2
//     return sum
// }
// ask && alert(mult())

// let arr = [5.4, 1.2, '2.1', 7.8, '5.6']
//
// const round = () =>{
//     for(let i=0; i<=arr.length - 1; i++){
//         typeof arr[i]==='number' && console.log(Math.floor(arr[i]))
//         // typeof arr[i]!=='number' && console.log(Math.floor(arr[i]))
//     }
// }
// round()

// Lesson 5 (11/05/2023)

// const obj = {
//     name: 'Gogi'
// }
//
// const newObj = obj;
// console.log(obj.name)
// console.log(newObj.name)
//
// console.log(obj===newObj)
//
// obj.name = 'Vald'
// console.log(newObj.name)
//
// const secObj = {
//     name: 'Gogi'
// }
// console.log(obj===secObj)

// const obj = {}
// Object.create()
// const  obj = Object.create()
//
// const div = document.getElementsByClassName('gogi')
// console.log(div)

//  Методи об"єктів

// const user = {
//     name: 'Vlad',
//     age: 25,
//     isProgramer: true
// }

// Object.keys();
// Object.values();

// console.log(Object.keys(user));
// console.log(Object.values(user));
//
// // Object.entries(obj)
//
// console.log(Object.entries(user));
//
// user.lastName = 'Ralets'
//
// console.log(user.lastName);
//
// const nat = {
//     nationality: 'UKR'
// }
//
// // console.log(Object.assign('UKR', user))
// console.log(Object.assign(nat, user))

// Object.freeze();
// Object.freeze(user);
// user.name = 'Vova'
// console.log(user)
//Object.seal()
// Object.seal(user);
// user.city = 'Prague'
// user.name = 'Vova'
// console.log(user)

//Object.hasOwnProperty()
// console.log(user.hasOwnProperty('name'))

// const user = {
//     name: 'Kolia',
//     age: 24,
//     seyHello: () =>{
//         console.log('Hello')
//     }
// }
//
// user.seyHello()

// this
// const newUser = {
//     name: 'Petya',
//     age: 58,
//     seyHello: function () {
//         console.log(`Hello ` + this.name)
//     }
// }
// newUser.seyHello()

// функція конструктор

// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`Hello ` + this.name)
//     }
// }
//
// const me = new User('Vlad', 25);
// console.log(me)


// const cinema = (movieName, ticketCost) => {
//     const movie = {
//         name: movieName,
//         price: ticketCost,
//         discount : function (sale){
//             if(discount<=0 || discount>=1){
//                 console.error('Wrong!')
//                 return;
//             }
//             this.price = this.price * sale
//         }
//     }
//     return movie
// }
// const harryPotter = cinema('Harry Potter', 250)
//
// console.log(harryPotter)
// harryPotter.discount(0.9)

// function createMovie(name, priceTicket){
//     return{
//         name,
//         priceTicket,
//
//         setDiscount: function (discount){
//             if(discount<=0 || discount>=1){
//                 console.error('Wrong!')
//                 return;
//             }
//             this.priceTicket = this.priceTicket*discount
//         }
//     }
// }
// const hp = createMovie('Harry Potter', 100)
// hp.setDiscount(0.9)
// console.log(hp)

// Список дел: Список дел на сегодня
// Задачи:
//     - Посетить врача (Выполнена)
// - Сделать уборку в доме (Не выполнена)
// - Написать отчет по проекту (Выполнена)

// let toDoList = {
//     name: "Список дел на сегодня",
//     tasks:
//         [{
//             name: "Посетить врача",
//             status: true
//         },
//         {
//             name: "Сделать уборку в доме",
//             status: false
//         },
//         {
//             name: "Написать отчет по проекту",
//             status: true
//         }]
// };

// function showList(list){
//     console.log('Список дел: ' +list.name)
//     console.log('Задачи:')
//     for(let i=0; i<=list.tasks.length -1; i++){
//         console.log(`- ${list.tasks[i].name}: (${list.tasks[i].status ? 'Выполнена' : 'Не выполнена'} )`)
//         // console.log(`-` + list.tasks[i].name + ` (` + list.tasks[i].status + ` )`)
//     }
// }
// showList(toDoList);





