import { getAllBooks, addBook, getById, getSingleBook } from './book.services.js';

const query = {
  allBooks: async (parent, args) => {
    const books = await getAllBooks();
    return books;
  },
  singleBook: async (parent, args) => {
    const book = await getSingleBook(args);
    return book;
  },
  getById: async (_, args) => {
    const { id } = args;
    const book = await getById(id);
    return book;
  }
}

const mutation = {
  addBook: async(_, { input }) => {
    const book = await addBook(input);
    return book;
  }
}

export default {
  query,
  mutation,
};
