'use strict';

require('dotenv').config();
const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001/caps';
const { handlePickup, handleDelivered }  = require('./handler');

// let socket = io(`${SERVER_URL}/caps`);

let socket = io('http://localhost:3001/caps');

socket.emit('getAll', { queueId: 'driver' });

socket.on('PICKUP', (payload) => {
  handlePickup(socket, payload);
  handleDelivered(socket, payload);
  socket.emit('received', {queueId: 'driver', messageId: payload.messageId});
});
