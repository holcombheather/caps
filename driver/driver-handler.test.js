'use strict';

const eventEmitter = require('../eventPool');
const { handlePickup, handleDelivered } = require('./handler');

jest.mock('../eventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

console.log = jest.fn();

describe ('Driver Handler', () => {
  test('log pickup message and emit in-transit payload', () => {
    const payload = {orderId: 1};
    handlePickup(payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    expect(eventEmitter.emit).toHaveBeenCalledWith('IN-TRANSIT', payload);
  });

  test('log confirmation message and emit delivered payload', () => {
    const payload = {order_id: 1};
    handleDelivered(payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderId}`);
    expect(eventEmitter.emit).toHaveBeenCalledWith('DELIVERED', payload);
  });

});
