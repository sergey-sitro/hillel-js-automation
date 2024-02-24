/* eslint-disable import/extensions */
import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('1984', 'George Orwell', 1948);

const book2 = new Book(
  'Atomic Habits. An Easy and Proven Way to Build Good Habits and Break Bad Ones',
  'James Clear',
  2018,
);

const book3 = new Book(
  'The Art of War',
  'Sun Tzu',
  475,
);

book1.getInfo();
console.log('_____________');
book2.getInfo();
console.log('_____________');
book3.getInfo();
console.log('_____________');

const eBook = new EBook(
  'Normal People',
  'Sally Rooney',
  2018,
  'pdf',
);

eBook.getInfo();
console.log('_____________');

console.log(Book.getOldestBook([book1, book2, book3, eBook]));
console.log('_____________');

console.log(EBook.fromBookToEbook(book1, 'epub'));
