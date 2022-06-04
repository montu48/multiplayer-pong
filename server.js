const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

const PORT = 3000;

let readyPlayerCount = 0;
server.listen(PORT)
console.log("Connected")

io.on('connection', (socket) => {
    console.log("Hi",socket.id)

    socket.on('ready',()=>{
        console.log("Player Ready",socket.id)

        readyPlayerCount++;

        if(readyPlayerCount === 2){
            socket.emit("startGame",socket.id)
        }
    })
})