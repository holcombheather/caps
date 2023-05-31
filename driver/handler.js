'use strict';

const eventEmitter = require('../eventPool');

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventEmitter.emit('IN-TRANSIT', payload);
}


function handleDelivered(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  eventEmitter.emit('delivered', payload);
}

module.exports = { handlePickup, handleDelivered };


