/*
 * Знайомство з масивами
 * - Объявлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

// const arrayNum = [1, 15, 94, 0, 1, 15];
// const arrayNames = ['Bogdan', 'Ira', 'Olga'];

// console.log(arrayNames[3]);

/*
 * Передача по посиланню і по значенню
 * - Примітиви і складні типи данних
 * - Посисальна рівність (referential equality)
 */

/*
 * Перебор (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
 */

// const names = ['Bogdan', 'Ira', 'Olga'];

// for (let i = 0; i < names.length; i += 1) {
//   console.log(`name: `, names[i]);
//   //   names[i] += '-1';
// }

// // console.log(names);

// for (let name of names) {
//   console.log(`name: `, name);
//   name += '-1';
// }
// console.log(names);
// Методи split() і join()

const names = ['Bogdan', 'Ira', 'Olga'];

const joinedNames = names.join(', ');
console.log(joinedNames);

const str = 'Hello, world!';
console.log(str.split(' '));

// Методи indexOf() і includes()

// Методи push(), pop(), shift(), unshift()

// // Метод slice()

// Метод splice()

// Метод concat()
