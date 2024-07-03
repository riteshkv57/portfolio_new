import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [roomCode, setRoomCode] = useState('');
  const [generatedRoomCode, setGeneratedRoomCode] = useState(null);

  const joinRoom = () => {
    socket.emit('joinRoom', roomCode);
  };

  const generateRoom = () => {
    socket.emit('generateRoom');
  };

  socket.on('roomGenerated', (code) => {
    setGeneratedRoomCode(code);
  });

  socket.on('roomNotFound', () => {
    alert('Room not found. Please enter a valid code.');
  });

  return (
    <div className="App">
      <h1>File Sharing App</h1>

      <div>
        <label>Enter Room Code:</label>
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>

      <div>
        <button onClick={generateRoom}>Generate Room</button>
        {generatedRoomCode && (
          <p>Room generated. Share this code: {generatedRoomCode}</p>
        )}
      </div>
    </div>
  );
}

export default App;
