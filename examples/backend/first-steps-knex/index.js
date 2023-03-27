const express = require('express')
const morgan = require('morgan')
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'postgres'
  }
});

// crear tabla de productos
knex.schema.hasTable('products').then((exists) => {
  if(!exists) {

    knex.schema.createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.decimal('price');
    }).then(() => {
      console.log('Tabla de productos creada !');
    }).catch(error => {
      console.error('Erro al crear la tabla productos', error)
    })

  }
})

const app = express()
const port = 8080

app.use(morgan('tiny'))
app.use(express.json())


//CRUD
// Create - Read - Update - delete
// POST - GET - PUT - DELETED

//endpoints
// http://localhost:8080
app.get('/api/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Ok!' })
})

// POST
app.post('/api/products', (req, res) => {
  const { name, description, price } = req.body
  knex('products')
    .insert({ name, description, price })
    .then(() => {
      res.status(201).json({ message: 'product created successfully'})
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

//GET
app.get('/api/products', (req, res) => {
  knex.select('*')
    .from('products')
    .then((data) => {
      res.status(200).json({ message: 'products found successfully', data})
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

//PUT
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { name, description, price } = req.body
  knex('products')
    .where({ id })
    .update({ name, description, price })
    .then(() => {
      res.status(202).json({ message: 'product updated successfully'})
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
} )

//DELETE
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  knex('products')
    .where({ id })
    .del()
    .then(() => {
      res.status(202).json({ message: 'product deleted successfully'})
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})