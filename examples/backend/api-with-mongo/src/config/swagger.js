const path = require('path')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

const { version } = require('../../package.json')
const routesAPI = path.join(__dirname, '../api/**/index.js')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'todo API Documentation',
      version,
      description: 'API Documentation to example',
      license: {
        name: 'MIT',
        url: 'https://mit.com'
      },
      contact: {
        name: 'Jhon Doe',
        url: 'https://johndoe.com',
        email: 'jhondoe@test.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local Server'
      },
      {
        url: 'http://apitop27-render.com',
        description: 'Production Server'
      }
    ]
  },
  apis: [routesAPI], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`Swagger docs running on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs