/* eslint-disable import/extensions */
import Book from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(val) {
    if (typeof val !== 'string' || val.length === 0) {
      console.warn('Invalid file format');
      return;
    }

    this._fileFormat = val;
  }

  getInfo() {
    super.getInfo();
    console.log(`File Format: ${this._fileFormat}`);
  }

  static fromBookToEbook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;
