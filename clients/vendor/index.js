'use strict';

require('dotenv').config();
const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';
const { vendorPayload, handleConfirmation, testPayload } = require('./handler');

let socket = io.connect(SERVER_URL);

socket.on('DELIVERED', (payload) => handleConfirmation(payload));

setInterval(() => {
  // const payload = vendorPayload();
  const payload = testPayload;

  socket.emit('PICKUP', payload);
}, 5000);
