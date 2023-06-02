'use strict';

const Chance = require('chance');
const chance = new Chance();
const store = '1-800-flowers';

const vendorPayload = (socket, order=null) => {
  if(!order){
    order = {
      store,
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  let payload = {
    event: 'PICKUP',
    messageId: order.orderId,
    queueId: store,
    order,
  };
  console.log('VENDOR: ORDER ready for pickup:', payload);
  // socket.emit('PICKUP', payload);
  return payload;
};

function handleConfirmation(payload) {
  console.log(`Thank you for your order ${payload.order.customer}`);
}

module.exports = { vendorPayload, handleConfirmation };
