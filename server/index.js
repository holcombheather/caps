'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const Queue = require('./lib/queue');
const capsQueue = new Queue();
const driverQueue = new Queue();

const server = new Server();

const caps = server.of('/caps');


caps.on('connection', (socket) => {
  console.log('Socket is connected to caps', socket.id);
  socket.onAny((event, payload) => {
    let timestamp = new Date();
    // console.log('ROOM NAME:', payload['store'],{ event, timestamp, payload });
    console.log('ROOM NAME:', payload,{ event, timestamp, payload });
  });

  socket.on('JOIN', (payload) => {
    // socket.join(payload['store']);
    socket.join(payload);
  });


  // PICKUP - broadcast all except sender
  socket.on('PICKUP', (payload) => {
    //TODO: pickup message queue
    let driverQueue = capsQueue.read('driver');
    if(!driverQueue){
      let driverKey = capsQueue.store('driver', new Queue());
      driverQueue = capsQueue.read(driverKey);
    }
    driverQueue.store(payload.messageId, payload);
    socket.broadcast.emit('PICKUP', payload);
  });

  // IN-TRANSIT - emitted to vendors only in appropriate room
  socket.on('IN-TRANSIT', (payload) => {
    socket.to(payload.store).emit('IN-TRANSIT', payload);
  });

  // DELIVERED - emitted to vendors only in appropriate room
  socket.on('DELIVERED', (payload) => {
    //TODO: delivered message queue
    socket.to(payload.store).emit('DELIVERED', payload);
  });

  socket.on('getAll', (payload) => {
    console.log('attempting to get all');
    let currentQueue = capsQueue.read(payload.queueId);
    if(currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        let message = currentQueue.read(messageId);
        socket.emit(payload.event, message);
      });

    }

  });
});


console.log('Listening on PORT:', PORT);
server.listen(PORT);
