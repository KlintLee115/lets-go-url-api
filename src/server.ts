import { Server } from 'node:http'
import { env } from './env'

const server = new Server()

server.on('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ PROD_URL: env.PROD_URL }))
})

server.listen(env.PORT, undefined, () =>
    console.log(`listening on http://localhost:${env.PORT}`),
)