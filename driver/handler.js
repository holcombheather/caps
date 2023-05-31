'use strict';

const eventEmitter = require('../eventPool');

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventEmitter.emit('IN-TRANSIT', payload);

  setTimeout(() => {
    handleDelivered(payload);
  }, 3000);
}


function handleDelivered(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  eventEmitter.emit('DELIVERED', payload);
}

module.exports = { handlePickup, handleDelivered };


