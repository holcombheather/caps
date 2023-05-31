'use strict';

const eventEmitter = require('../eventPool');

const { vendorPayload, handleDelivered } = require('./handler');

eventEmitter.on('DELIVERED', handleDelivered);

eventEmitter.emit('PICKUP', vendorPayload());
