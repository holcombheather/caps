'use strict';

jest.mock('../eventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

const eventEmitter = require('../../eventPool');
const { vendorPayload, handleConfirmation } = require('./handler');



console.log = jest.fn();

describe ('Vendor Handler', () => {
  test('emit pickup message and vendor order payload', () => {
    const payload = vendorPayload();
    eventEmitter.emit('PICKUP', payload);
    expect(eventEmitter.emit).toHaveBeenCalledWith('PICKUP', payload);
    expect(payload.orderId).toBeTruthy();
  });

  test('log delivered message and emit vendor thank you payload', () => {
    const payload = {
      "store": 'testStore',
      "orderId": 'testOrderId',
      "customer": 'testCustomer',
      "address": 'testAddress',
    }
    handleConfirmation(payload);
    expect(console.log).toHaveBeenCalledWith(`Thank you for your order ${payload.customer}`);
  });

});
