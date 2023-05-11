import bookResolver from "./book/book.resolver.js";

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world',
    ...bookResolver.Query
  },

  Mutation: {
    ...bookResolver.Mutation
  }
};

export default resolvers