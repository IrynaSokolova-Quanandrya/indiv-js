/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Видалення (по індексу), метод indexOf()
 */
const cardToRemove = 'Карточка-3';

let index = cards.indexOf(cardToRemove);
let splice = cards.splice(index, 1);

const deleteCard = function (cardsArr, card) {
  let index = cardsArr.indexOf(card);
  let splice = cardsArr.splice(index, 1);

  return cardsArr;
};

deleteCard(cards, cardToRemove);
deleteCard(['card1', 'card2', 'card3'], 'card2');
deleteCard([1, 3, 5, 10], 10);

/*
 * Додавання (по індексу)
 */

const cardToInsert = 'Карточка-6';

cards.push(cardToInsert);
console.log(cards);

/*
 * Оновлення (по індексу)
 */
const cardToUpdate = 'Карточка-4';
const idx = cards.indexOf(cardToUpdate);

cards.splice(idx, 1, cardToInsert);

console.log(cards);

const x = 5;
const y = 10;
const z = 5;

console.log('x > y:', x > y); // false
console.log('x < y:', x < y); // true
console.log('x < z:', x < z); // false
console.log('x <= z:', x <= z); // true
console.log('x === y:', x === y); // false
console.log('x === z:', x === z); // true
console.log('x !== y:', x !== y); // true
console.log('x !== z:', x !== z); // false
