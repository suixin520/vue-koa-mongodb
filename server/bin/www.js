const app = require('../app')
const debug = require('debug')('vue:server')
const http = require('http')

const PORT = normalizePort(process.env.PORT || '8088')
const server = http.createServer(app.callback())

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port) || port >= 0) { return port }
  return false
}

function onError(e) {
  if (e.syscall !== 'listen') throw e

  const bind = typeof PORT == 'string' ? 'Pipe ' + PORT : 'port' + PORT

  switch(e.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break;
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  let bind = typeof addr === 'string' ? 'pipe ' + addr :'port '+ addr.port
  debug('Listening on ' + bind)
}