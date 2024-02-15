class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(val) {
        if (typeof val !== 'string' || val.length === 0) {
            console.warn('Invalid book title');
            return
        }

        this._title = val;
    }

    get author() {
        return this._author;
    }

    set author(val) {
        if (typeof val !== 'string' || val.length === 0) {
            console.warn('Invalid book author');
            return
        }

        this._author = val;
    }

    get year() {
        return this._year;
    }

    set year(val) {
        if (typeof val !== 'number' || val < 0) {
            console.warn('Invalid book year');
            return
        }

        this._year = val;
    }

    getInfo() {
        console.log(`Title: ${this._title}\nAuthor: ${this._author}\nYear: ${this._year}`);
    }

    static getOldestBook(books) {
        const sortedBooks = structuredClone(books).sort((a,b) => a._year - b._year);
        return sortedBooks[0];
    }
}

export default Book