// 'use strict';

// require('dotenv').config();
// const { Server } = require('socket.io');
// const PORT = process.env.PORT || 3001;
// // const { eventEmitter } = require('./eventPool');

// require('./clients/vendor');
// // require('./driver'); // TODO: uncomment

// console.log(PORT);
// const io = new Server(PORT);

// const caps = io.of('/caps');

// caps.on('connection', (socket) => {
//   console.log('Socket is connected to caps namespace', socket.id);

//   // JOIN ROOM
//   socket.on('JOIN', (payload) => {
//     console.log('ROOM NAME:', payload['store']);
//     socket.join(payload['store']);
//   });

//   // PICKUP - broadcast all except sender
//   socket.on('PICKUP', (payload) => {
//     socket.broadcast.emit('PICKUP', payload);
//     const timestamp = new Date();
//     console.log(
//       `EVENT: {
//         event: 'PICKUP',
//         time: ${timestamp},
//         payload: {
//           store: ${payload['store']},
//           orderId: ${payload['orderId']},
//           customer: ${payload['customer']},
//           address: ${payload['address']},
//         }
//       }`);
//   });

//   // IN-TRANSIT - emitted to vendors only in appropriate room
//   socket.on('IN-TRANSIT', (payload) => {
//     socket.to(payload.store).emit('IN-TRANSIT', payload);
//     const timestamp = new Date();
//     console.log(
//       `EVENT: {
//         event: 'IN-TRANSIT',
//         time: ${timestamp},
//         payload: {
//           store: ${payload['store']},
//           orderId: ${payload['orderId']},
//           customer: ${payload['customer']},
//           address: ${payload['address']},
//         }
//       }`);
//   });
//   // DELIVERED - emitted to vendors only in appropriate room
//   socket.on('DELIVERED', (payload) => {
//     socket.to(payload.store).emit('DELIVERED', payload);
//     const timestamp = new Date();
//     console.log(
//       `EVENT: {
//         event: 'DELIVERED',
//         time: ${timestamp},
//         payload: {
//           store: ${payload['store']},
//           orderId: ${payload['orderId']},
//           customer: ${payload['customer']},
//           address: ${payload['address']},
//         }
//       }`);
//   });
// });


