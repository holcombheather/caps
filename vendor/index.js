'use strict';

const eventEmitter = require('../eventPool');

const { vendorPayload, handleConfirmation } = require('./handler');


eventEmitter.on('DELIVERED', handleConfirmation);


setInterval(() => {
  const payload = vendorPayload();
  eventEmitter.emit('PICKUP', payload);
}, 5000);
