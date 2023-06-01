'use strict';

const io  = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';
let socket = io.connect(SERVER_URL);


function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  socket.emit('IN-TRANSIT', payload);

  setTimeout(() => {
    handleDelivered(payload);
  }, 3000);
}


function handleDelivered(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  socket.emit('DELIVERED', payload);
}

module.exports = { handlePickup, handleDelivered };


