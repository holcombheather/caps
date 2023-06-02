'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;


const server = new Server();

const caps = server.of('/caps');


caps.on('connection', (socket) => {
  console.log('Socket is connected to caps', socket.id);
  socket.onAny((event, payload) => {
    let timestamp = new Date();
    console.log('ROOM NAME:', payload['store'],{ event, timestamp, payload });
  });

  socket.on('JOIN', (payload) => {
    socket.join(payload['store']);
  });


  // PICKUP - broadcast all except sender
  socket.on('PICKUP', (payload) => {
    socket.broadcast.emit('PICKUP', payload);
  });

  // IN-TRANSIT - emitted to vendors only in appropriate room
  socket.on('IN-TRANSIT', (payload) => {
    socket.to(payload.store).emit('IN-TRANSIT', payload);
  });


  // DELIVERED - emitted to vendors only in appropriate room
  socket.on('DELIVERED', (payload) => {
    socket.to(payload.store).emit('DELIVERED', payload);
  });

});


console.log('Listening on PORT:', PORT);
server.listen(PORT);
