import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  {id: 1, name: 'Jhon Doe', email: 'johndoe@test.com'},
  {id: 2, name: 'Jane Doe', email: 'janedoe@test.com'},
  {id: 3, name: 'Pepito Perez', email: 'pepito@test.com'}
]

const app = express()
const port = process.env.PORT || 8000

//middleware
app.use(express.json())

//endpoint / routes
app.get('/api/users', (req: Request, res: Response): void => {
  res.status(200).json({ message: 'users found', data: users })
})


app.post('/api/users', (req: Request, res: Response): void => {
  const { name, email }: { name: string; email: string } = req.body
  const id: number = users.length + 1
  const newUser: User = {
    id,
    name,
    email,
  }

  users = [ ...users,  newUser ]
  res.status(201).json({ message: 'users created', data: users })
  
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
