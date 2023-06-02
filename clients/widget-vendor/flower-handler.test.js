'use strict';

jest.mock('socket.io-client');

const io = require('socket.io-client');
const { vendorPayload, handleConfirmation } = require('./handler');

const mockEmit = jest.fn();

io.mockReturnValue({
  emit: mockEmit,
  on: jest.fn(),
});

const socket = io();

describe('Vendor Handler', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockEmit.mockClear();
  });

  test('emit pickup message and vendor order payload', () => {
    const payload = vendorPayload();
    socket.emit('PICKUP', payload);
    expect(mockEmit).toHaveBeenCalledWith('PICKUP', payload);
    expect(payload.orderId).toBeTruthy();
  });

  test('log delivered message and emit vendor thank you payload', () => {
    console.log = jest.fn();
    const payload = {
      'store': 'testStore',
      'orderId': 'testOrderId',
      'customer': 'testCustomer',
      'address': 'testAddress',
    };
    handleConfirmation(payload);
    expect(console.log).toHaveBeenCalledWith(`Thank you for your order ${payload.customer}`);
  });
});




// 'use strict';

// jest.mock('../eventPool', () => {
//   return {
//     on: jest.fn(),
//     emit: jest.fn(),
//   };
// });

// const eventEmitter = require('../../eventPool');
// const { vendorPayload, handleConfirmation } = require('./handler');



// console.log = jest.fn();

// describe ('Vendor Handler', () => {
//   test('emit pickup message and vendor order payload', () => {
//     const payload = vendorPayload();
//     eventEmitter.emit('PICKUP', payload);
//     expect(eventEmitter.emit).toHaveBeenCalledWith('PICKUP', payload);
//     expect(payload.orderId).toBeTruthy();
//   });

//   test('log delivered message and emit vendor thank you payload', () => {
//     const payload = {
//       "store": 'testStore',
//       "orderId": 'testOrderId',
//       "customer": 'testCustomer',
//       "address": 'testAddress',
//     }
//     handleConfirmation(payload);
//     expect(console.log).toHaveBeenCalledWith(`Thank you for your order ${payload.customer}`);
//   });

// });
