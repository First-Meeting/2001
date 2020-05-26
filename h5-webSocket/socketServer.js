const ws = require('ws')
const host = "localhost"
const port = 9000
const server = new ws.Server({
  host,
  port
})

let count = 10000
const clients = []

server.on('connection',client => {
  client.name = ++count 
  clients[client.name] = client
  
  client.on('message', msg => {
    boradcast(msg)
  })
})

function boradcast (msg) {
  for(let key in clients ){
    clients[ key ].send(msg.toString())
  }
}


server.on('listening',() => {
  console.log(`The server is running at: ws://${host}:${port}`)
})

