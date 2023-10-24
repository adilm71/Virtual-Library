const Media = require("./Media");

// import the Media class:

// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(books) {
    let highestBook;
    let highestRating = 0;
    for (const book of books) {
      if (book.rating > highestRating) {
        highestRating = book.rating;
        highestBook = book;
      }
    }
    return highestBook;
  }
}
// don't change below
module.exports = Book;
