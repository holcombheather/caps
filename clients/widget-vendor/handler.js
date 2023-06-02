'use strict';

const Chance = require('chance');
const chance = new Chance();
const store = 'acme-widgets';

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
};

function handleConfirmation(payload) {
  console.log(`Thank you for your order ${payload.customer}`);
}

module.exports = { vendorPayload, handleConfirmation };