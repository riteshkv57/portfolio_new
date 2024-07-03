const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

const rooms = {};

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomCode) => {
    if (rooms[roomCode]) {
      socket.join(roomCode);
    } else {
      socket.emit('roomNotFound');
    }
  });

  socket.on('generateRoom', () => {
    const roomCode = generateRoomCode();
    rooms[roomCode] = true;
    socket.emit('roomGenerated', roomCode);
  });
});

const generateRoomCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
