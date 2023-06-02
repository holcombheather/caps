'use strict';

const io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001/caps';

const socket = io.connect(SERVER_URL);

function subscribe(event, callback) {
  socket.on(event, callback);
}

function trigger(event, payload) {
  socket.emit(event, payload);
}

module.exports = { subscribe, trigger };

