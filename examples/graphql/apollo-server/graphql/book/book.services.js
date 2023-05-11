import Book from './book.model.js';

export function getAllBooks() {
  return Book.find();
}

export function getSingleBook({ title, author }) {
  return Book.findOne({
    $or: [
      { title: { $regex: `${title}`, $options: 'i' } },
      { author: { $regex: `${author}`, $options: 'i' } }
    ],
   });
}

export function getById(id) {
  return Book.findById(id);
}

export function addBook(input) {
  const { title, author } = input;

  const book = new Book({
    title,
    author,
  });

  return book.save();
}
