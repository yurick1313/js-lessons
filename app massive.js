// Масиви

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];

// Обявлення масивів

// const arr = [];
// const secArr = new Array()

// const cars = [
//   'Audi',
//   'Volkswagen',
//   'Volvo',
//   'Suzuki',
//   'ZAZ',
// ];

// []

// console.log(cars[1])

//.at()
// console.log(cars.at(1))

// console.log(cars[cars.length-1])
// console.log(cars.at(-2))

// Додавання та видалення

// .push() - Додає в кінець

// cars.push('Skoda');
// console.log(cars);

// .unshift() - Додає на початок

// cars.unshift('Lamborghini');
// console.log(cars)

// .pop() - видаляє останній елемент масиву

// cars.pop()
// console.log(cars)

// .shift() - видаляє перший елемент

// cars.shift()
// console.log(cars)

// .splice()

// cars.splice(1, 2)
// console.log(cars)

// cars.splice(1, 1, 'Subaru', 'Mercedes')
// console.log(cars)

// const numArr = [1, 2, 3]

// numArr[5] = 4
// numArr[4] // 
// console.log(numArr);

// .slice()

// const newCars = cars.slice(0, 3)
// console.log(newCars)

// const newArr = [cars[0], cars[1], cars[2]]

// const autoPark = cars.concat(['Seat', 'Mitsubishi']);

// console.log(autoPark)

// Перебір масивів

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// for of

// for (let car of cars) {
//   console.log(car)
// }

// for in

// for (const index in cars) {
//   console.log(cars[index])
// }

// console.log(cars.length)

// .forEach()

// cars.forEach((car, index) => {
//   console.log(`${index + 1} ${car}`)
// })

// .map()

// const capCars = cars.map(car => car.toUpperCase())

// console.log(capCars)

// const numbers = [1, 2, 3]

// const multNum = numbers.map(num => num * 2)

// console.log(multNum)

// const domElements = cars.map(car => `<li>${car}</li>`)
// console.log(domElements)

// .filter()

// const filterCars = cars.filter(car => car.length > 3)

// console.log(filterCars)

// .reduce()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const sum = numbers.reduce((acc, num) => acc + num, 1)

// console.log(sum) // 37

// .join()

// const str = cars.join(' ')

// console.log(str)

// const strArr = ['t','e','s','t'];

// console.log(strArr.join(''))

// .split()
// const carStr = 'Audi  Volkswagen  Volvo  Suzuki  ZAZ ';
// console.log(carStr.split('  '))

// .reverse()

// console.log(cars.reverse())

// .some()

// const isExist = cars.some(car => car.toLowerCase() === 'audi')

// console.log(isExist)

// .every()

// const arr = [1, 2, 3, 4, 5, 6, 7, 'addd']

// const isAllNum = arr.every(num => num < 10)

// console.log(isAllNum)

// .find()

// const users = [
//   {id: 1, name: 'Vova'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Bob'},
//   {id: 4, name: 'John'},
// ];

// const user = users.find(user => user.id === 3).name

// console.log(user)

// .findIndex()

// const carIndex = cars.findIndex(car => car === 'ZAZ');

// console.log(carIndex)

// .includes()

// const isExist = cars.includes('Lada')

// console.log(isExist)

// .sort()

// const numbers = [1, 2, 5, 45, 3, 6, 8, 7];

// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))

// const filteredCars = cars.sort((a, b) => {
//     if(a > b) {
//       return 1
//     }
//     if(a < b) {
//       return -1
//     }
//     return 0
//   }
// )

// console.log(filteredCars)

// Array.isArray()
// const user = {
//   name: 'Vova',
//   age: 20,
// }

// console.log(Array.isArray(user)) 