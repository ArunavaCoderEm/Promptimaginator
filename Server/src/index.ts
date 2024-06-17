import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import server from './Route/Imgroute'
import { cors } from 'hono/cors'

const port = 8188

const app = new Hono()

app.use('/img/*', cors())
app.use(
  '/img/*',
  cors({
    origin: '*',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.get('/', async (c) => {
  return c.text("Hono server running")
})

console.log(`Server is running on port ${port}`)

app.route("/img/",server);

serve({
  fetch: app.fetch,
  port
})