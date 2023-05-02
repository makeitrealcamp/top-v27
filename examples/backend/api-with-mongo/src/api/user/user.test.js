const clonServer = require('supertest')
const app = require('../../app')
const { connect, disconnected, cleanup } = require('../../config/database')

describe('User', () => {
  const user = { name: 'Jhon Doe', email: 'testemail@test.com', password: '1234' }

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnected()
  })

  it('should create a user correctly', async () => {
    const res = await clonServer(app).post('/api/users/signup').send(user)

    expect(res.statusCode).toBe(201)
    expect(res.body.data).toHaveProperty('token')
    expect(res.body.data.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
  })

  it('should not create user when there is no email',  async () => {
    const res = await clonServer(app).post('/api/users/signup').send({ ...user, email: undefined })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch('User could not created')
  })

  it('should not crate user when email is invalid',async () => {
    const res = await clonServer(app).post('/api/users/signup').send({ ...user, email: 'testema' })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toMatch(/invalid email/i)
  })

  it('should not create user when email already exist', async () => {
    await clonServer(app).post('/api/users/signup').send(user)
    const res = await clonServer(app).post('/api/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toMatch(/email already exist/i)
  })

  it('should login user correctly', async () => {
    await clonServer(app).post('/api/users/signup').send(user)
    const { statusCode, body } = await clonServer(app).post('/api/users/signin').send(user)

    expect(statusCode).toBe(200)
    expect(body.message).toMatch(/user login successfully/i)    
  })

  it('should not login user if email does not exist', async () => {
    const { statusCode, body } = await clonServer(app).post('/api/users/signin').send(user)

    expect(statusCode).toBe(400)
    expect(body.message).toMatch(/user could not login/i)    
  })

  it('shoulf not login of incorrect password', async () => {
    await clonServer(app).post('/api/users/signup').send(user)
    const { statusCode, body } = await clonServer(app).post('/api/users/signin').send({ ...user, password: "nose" })

    expect(statusCode).toBe(400)
    expect(body.message).toMatch(/user could not login/i)    
    expect(body.error).toMatch(/email o contraseña invalidos/i)    
  })
})