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
    const payload = {order_id: 1};
    handlePickup(payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.order_id}`);
    expect(eventEmitter.emit).toHaveBeenCalledWith('in-transit', payload);
  });

  test('log confirmation message and emit delivered payload', () => {
    const payload = {order_id: 1};
    handleDelivered(payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered ${payload.order_id}`);
    expect(eventEmitter.emit).toHaveBeenCalledWith('delivered', payload);
  });

});
