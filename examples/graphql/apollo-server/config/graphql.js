import { ApolloServer } from '@apollo/server';

import typeDefs from '../graphql/typeDefs.js';
import resolvers from '../graphql/resolvers.js';

const graphqlConfig = async (httpServer) => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start()
    console.log('GraphQL server started');


    return server
  } catch (error) {
    console.log('Error starting grahpQL server:', error);
  }
}

export default graphqlConfig