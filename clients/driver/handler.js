'use strict';

function handlePickup(socket, payload) {
  setTimeout(() => {
    socket.emit('JOIN', payload);
    console.log('DRIVER: picked up', payload.orderId);
    socket.emit('IN-TRANSIT', payload);
  }, 1000);
}

function handleDelivered(socket, payload) {
  setTimeout(() => {
    console.log('DRIVER: delivered', payload.orderId);
    socket.emit('DELIVERED', payload);
  }, 2000);
}

module.exports = { handlePickup, handleDelivered };
