const clonServer = require('supertest')
const app = require('../../app')
const { connect, disconnected, cleanup } = require('../../config/database')

describe('Healthcheck', () => {

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnected()
  })


  it('should address ready ok', async () => {
    const res = await clonServer(app).get('/api/healthcheck')

    expect(res.statusCode).toBe(200)
    expect(res.body.message).toMatch(/App is up and running/i)
  })
})