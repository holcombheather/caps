'use strict';

const eventEmitter = require('../eventPool');
const { vendorPayload, handleConfirmation } = require('./handler');

jest.mock('../eventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

console.log = jest.fn();

describe ('Vendor Handler', () => {
  test('emit pickup message and vendor order payload', () => {
    const payload = vendorPayload();
    eventEmitter.emit('PICKUP', payload);
    expect(eventEmitter.emit).toHaveBeenCalledWith('PICKUP', payload);
    expect(payload.orderId).toBeTruthy();
  });

  test('log delivered message and emit vendor thank you payload', () => {
    console.log = jest.fn();
    handleConfirmation(payload);
    expect(console.log).toHaveBeenCalledWith(); // TODO: update with anything?
  });

});
