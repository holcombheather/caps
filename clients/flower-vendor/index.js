'use strict';

// require('dotenv').config();
const { io } = require('socket.io-client');
// const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001/caps';
const { vendorPayload, handleConfirmation } = require('./handler');
// const Chance = require('chance');
// const chance = new Chance();

let socket = io('http://localhost:3001/caps');

setInterval(() => {
  const payload = vendorPayload();
  socket.emit('PICKUP', payload);
}, 8000);

// setInterval(() => {
//   let payload = {
//     store: '1-206-flowers',
//     orderId: chance.guid(),
//     customer: chance.name(),
//     address: chance.address(),
//   }
//   socket.emit('JOIN', payload);
//   socket.emit('PICKUP', payload);

// }, 5000);


socket.on('DELIVERED', (payload) => handleConfirmation(payload));


