import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import server from './Route/Imgroute'

const port = 8188

const app = new Hono()

app.get('/', async (c) => {
  return c.text("Hono server running")
})

console.log(`Server is running on port ${port}`)

app.route("/img/",server);

serve({
  fetch: app.fetch,
  port
})