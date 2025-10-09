/*
 * Об"єкти (робимо плейлист музики: ім"я, рейтинг, треки, кількість треків)
 * - Літерал об"єкту
 * - Властивості, ключі (ім"я) і значення
 * - Як відрізнити об"єкт від області видимості
 */

const movie = {
  title: 'Harry Potter',
  author: 'Joan Rowling',
  pages: 354,
};

console.log(movie);

/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутність властивостей
 */

// console.log(playlist);

const propertyName = 'rating';

/*
 * Короткий запис властивостей
 */
const userName = 'Oleg';
const email = 'mango@mail.com';

const signupData = {
  userName,
  email,
};

// const a = {};
// function name(params) {

//   return {}
// }
// name({})
//   console.log(signupData.username = "Mango");

/*
 * Обчислювані властивості
 */

//  <input name="color" value="tomato" >

const inputName = 'background';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

/*
 * Посилальний тип {} === {}
 */

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = "15";
// b = a
// console.log(a);
// console.log(b);

const obj = {};
const obj1 = obj;

// console.log(obj);
// console.log(obj1);
// console.log(obj === obj1);

obj.name = 'Mango';

// console.log(obj);
// console.log(obj1);
/*
 * Масиви і функції це об"єкти
 */

// const arr = [1, 2, 3, 4];
// console.log(arr);

// arr.greats = 'Hello!'
// console.log(arr);

// function name(params) {

// }
// console.dir(name);

// name.greats = 'Hello1'
// console.dir(name);
