const Media = require("./Media");

// import the Media class:

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static longestMovie(movies) {
    let Longest;
    let longestMovie = 0;
    for (const movie of movies) {
      if (movie.duration > longestMovie) {
        longestMovie = movie.duration;
        Longest = movie;
      }
    }
    return Longest;
  }
}
// don't change below
module.exports = Movie;
