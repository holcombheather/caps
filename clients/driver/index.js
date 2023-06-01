'use strict';

require('dotenv').config();
const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';
const { handlePickup }  = require('./handler');

let socket = io.connect(SERVER_URL);

socket.on('PICKUP', (payload) => handlePickup(payload));

