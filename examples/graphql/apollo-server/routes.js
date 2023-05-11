import { expressMiddleware } from '@apollo/server/express4';

import helloWorld from './api/helloWorld/index.js'

function routesConfig(app, graphqlServer) {
  // Rest API
  app.use('/', helloWorld);

  // GraphQL
  app.use('/graphql', expressMiddleware(graphqlServer));
}

export default routesConfig;
