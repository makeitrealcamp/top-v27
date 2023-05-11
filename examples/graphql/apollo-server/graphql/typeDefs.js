const typeDefs = `#graphql
  # This "Book" type defines the queryable fields for every book in our data source.

  type Book {
    id: ID!
    "The title of the book"
    title: String
    "The author of the book"
    author: String
  }

  input createBookInput {
    title: String!
    author: String!
  }

  # The "Query" type is special: it lists all of the available queries that

  type Query {

    "A simple type for gettinf started"
    helloWorld: String

    "Fetches an array of books!"
    allBooks: [Book]

    singleBook(title: String! author: String!): Book

    getById(id: ID!): Book
  }

  type Mutation {
    addBook(input: createBookInput): Book
  }
`;

export default typeDefs