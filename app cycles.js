// Цикли

// while 

// const users = ['Vova', 'Vlad', 'Diva', 'Max', 'Liza', 'Yurii'];

// const users = [
//   {
//     name: 'Vova',
//     isHere: true,
//   },
//   {
//     name: 'Liza',
//     isHere: false,
//   },
//   {
//     name: 'Dima',
//     isHere: true,
//   },
//   {
//     name: 'Max',
//     isHere: false,
//   }
// ]

// let i = 0;

// while (i <= users.length - 1) {
//   if (users[i].isHere) {
//     console.log(users[i].name)
//   }
//   i++
// }

// const votes = [true, false, false, false, true]

// let negative = 0;
// let positive = 0;

// let i = 0;

// while (i <= votes.length - 1) {
//   if (votes[i]) {
//     positive++
//   } else {
//     negative++
//   }
//   i++
// }

// console.log(positive > negative ? 'Рішення прийнято' : 'Рішення не прийнято');

// do while

// let i = 0;

// do {
//   console.log(i);
//   i++
// } while (i <= 10)

// for
// const random = 50;

// for (let i = 0; i <= 100; i++) {
//   console.log(i)
//   if(i === random) {
//     break;
//   }
// }

// const random = 50;

// for (let i = 0; i <= 60; i++) {
//   if(i === random) {
//     continue;
//   }
//   console.log(i)
// }

// let i = 0;
// let j = 0;

// for (; i <= 10; ) {
//   console.log(i)
// }


// console.log(i++) // 0
// console.log(i++) // 1

// console.log(++j) // 1
// console.log(++j) // 2

// console.log(i) // 2
// console.log(j) // 2
