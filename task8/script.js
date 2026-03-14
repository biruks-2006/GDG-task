const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, rating: 4.8 },
  { title: "1984", author: "George Orwell", year: 1949, rating: 4.6 },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    rating: 4.0,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    rating: 4.7,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    rating: 4.3,
  },
];
const bookTitles = books.map((book) => book.title);
console.log("Book Titles:", bookTitles);
const highRatedBooks = books.filter((book) => book.rating >= 4.5);
console.log("High Rated Books:", highRatedBooks);
