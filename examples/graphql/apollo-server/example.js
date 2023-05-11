import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const options = {
  listen: { port: 8080 }
}

const { url } = await startStandaloneServer(server, options);
console.log(`🚀  Server ready at: ${url}`)
