'use strict';

jest.mock('socket.io-client');

const io = require('socket.io-client');
const { handlePickup, handleDelivered } = require('./handler');

const mockEmit = jest.fn();

io.mockReturnValue({
  emit: mockEmit,
  on: jest.fn(),
});

const socket = io();

console.log = jest.fn();

describe ('Driver Handler', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockEmit.mockClear();
    console.log.mockClear();
  });

  test('log pickup message and emit in-transit payload', () => {
    const payload = {orderId: 1};
    handlePickup(socket, payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    expect(mockEmit).toHaveBeenCalledWith('IN-TRANSIT', payload);
  });

  test('log confirmation message and emit delivered payload', () => {
    const payload = {orderId: 1};
    handleDelivered(socket, payload);
    expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderId}`);
    expect(mockEmit).toHaveBeenCalledWith('DELIVERED', payload);
  });

});



// 'use strict';

// const eventEmitter = require('../../eventPool');
// const { handlePickup, handleDelivered } = require('./handler');

// jest.mock('../eventPool', () => {
//   return {
//     on: jest.fn(),
//     emit: jest.fn(),
//   };
// });

// console.log = jest.fn();

// describe ('Driver Handler', () => {
//   test('log pickup message and emit in-transit payload', () => {
//     const payload = {orderId: 1};
//     handlePickup(payload);
//     expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
//     expect(eventEmitter.emit).toHaveBeenCalledWith('IN-TRANSIT', payload);
//   });

//   test('log confirmation message and emit delivered payload', () => {
//     const payload = {order_id: 1};
//     handleDelivered(payload);
//     expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderId}`);
//     expect(eventEmitter.emit).toHaveBeenCalledWith('DELIVERED', payload);
//   });

// });
