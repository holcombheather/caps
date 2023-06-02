'use strict';

const { io } = require('socket.io-client');
const { vendorPayload, handleConfirmation } = require('./handler');
const { subscribe, trigger } = require('../lib/client');

let socket = io('http://localhost:3001/caps');

setInterval(() => {
  const payload = vendorPayload();
  socket.emit('PICKUP', payload);
}, 5000);



socket.on('DELIVERED', (payload) => handleConfirmation(payload));


