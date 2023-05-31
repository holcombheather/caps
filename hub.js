'use strict';

const eventEmitter = require('./eventPool');

const logEvent = (eventName) => (payload) => {
  const timestamp = new Date();
  console.log(
    `EVENT: {
      event: ${eventName},
      time: ${timestamp},
      payload: ${JSON.stringify(payload)}
  }`);
};

require('./vendor');
require('./driver');


eventEmitter.on('PICKUP', logEvent('PICKUP'));
eventEmitter.on('IN-TRANSIT', logEvent('IN-TRANSIT'));
eventEmitter.on('DELIVERED', logEvent('DELIVERED'));
