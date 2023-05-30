// Як називати змінні 

// const user = 'Vlad';

// const 1user - error

// const USER 
// const user

// const userName - camelCase

// snake_case
// const user_name

// PascalCase
// const UserName - для запису класів

// kebab-case
// const user-name

// Числа

// const num = 42 // integer
// const float = 42.1 // float
// const pow = 10e2 // 1000

// Округлення чисел

// const num = 42.53

// console.log(4245..toFixed(1))

// console.log(Math.floor(num)) // 42
// console.log(Math.ceil(num)) // 43
// console.log(Math.round(num)) // 43


// console.log(num.toFixed(1)); // 42.5
// console.log(num.toFixed(4)); // 42.5300

// console.log(Math.trunc(num)) // 42 - обрізає

// console.log(0.1 + 0.2) // 0.30000000000000004
// console.log(0.4 + 0.2) // 0.6000000000000001

// Перетворення чисел

// let num = '42'
// console.log(typeof num)
// const num1 = Number(num) 
// const num2 = +num

// console.log(num1, num2);

// let pix = '42px';

// console.log(parseInt(pix)); // Повертає ціле значення

// const boolean = 435252;

// console.log(boolean.toString());

// Boolean

// let value = 0 // '', null, undefined, NaN;
// console.log(Boolean(value))

// const question = +prompt('How are you?')

// if (question) {
//   alert('ok')
// } else {
//   alert('No answer')
// }

// Арифметичні оператори

// console.log(4 + 2)
// console.log(4 - 2)
// console.log(4 * 2)
// console.log(4 / 2)
// console.log(12 % 5)
// console.log(4 ** 2)

// Оператори порівняння

// console.log(4 > 2)
// console.log(4 < 2)
// console.log(4 >= 2)
// console.log(4 <= 2)
// console.log(4 == 2) // false
// !
// console.log(4 !== 2)
// console.log(4 != 2)
// console.log(4 === 2)

// console.log('a' > 'A')
// console.log('a' > 'B')

// console.log('a'.charCodeAt())
// console.log('!'.charCodeAt())

// console.log(true == 1);
// console.log(true === 1)

// console.log(false == 0); // true

// console.log(null == undefined)

// console.log(null > 0) // false
// console.log(null < 0) // false
// console.log(null >= 0) // true
// console.log(null <= 0) // true
// console.log(null == 0) // false

// if else

// const num = 12

// if (num < 20) {
//   console.log('num < 20')
// } else if (num > 50) {
//   console.log('num > 50')
// } else {
//   console.log('num > 20 && num < 50')
// }

// Тернарний оператор ?

// const user = 'Ivan';

// console.log(user.toLocaleLowerCase()  === 'ivan'? 'Привіт Іван' : 'Невідомий юзер');

// const age = 16

// const result = age >= 18 ? 'Доступ дозволено' : age < 10 ? 'Доступ заборонено' : 'Доступ дозволено';

// console.log(result)

// && логічне І

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true && true) // false


// const user = 'vlad'

// console.log(user === 'vlad' && 'Hello vlad')

// || - Логічне або



// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || null) // false

// const user = 'Gogi'

// console.log(user == 'admin' || user == 'адмін' || user == 'админ')

// const ok = confirm('Are you sure')
// const str = prompt('enter vladralets/hw-2')

// const res = str == 'vladralets/hw-2'

// alert(res && ok ? 'Repo deleted' : 'Denied')

// ! не

// console.log(!true)
// console.log(!false)

// console.log(!1);

// console.log(!'')

// console.log(!'Hello');


// console.log(!null);
// console.log(!undefined);

const num = 3;

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// switch (num) {
//   case 42:
//     console.log('num =  42')
//     break;
//   case 43:
//     console.log('num =  43')
//     break
//   default:
//     console.log('невідомо')
//     break;
// }

// const char = prompt('Char')

// switch (char) {
//   case '+':
//     a + b
//     break;
//   case '-': 
//     a -b;
//     break;
//   default:
//     break;
// }

// const userAge = prompt('Скільки вам років');

// userAge >= 18 ? console.log('Вхід дозволено !') : console.log('Вхід заборонено !');

// const user = 'ivan';

// console.log(user.toLowerCase() === 'ivan' ? 'Привіт іван' : 'Невідомий user !');