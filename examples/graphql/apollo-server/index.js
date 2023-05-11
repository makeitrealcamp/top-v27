import { server } from './app.js'

const port = 8080

server.listen(8080, () => {
  console.log(`Server running at http://localhost:${port}`);
})