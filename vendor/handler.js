'use strict';

const Chance = require('chance');
const chance = new Chance();

function vendorPayload() {
  return {
    "store": chance.company(),
    "orderId": chance.guid(),
    "customer": chance.email(),
    "address": chance.address(),
  }
}

function handleConfirmation(payload) {
  console.log(`Thank you for your order ${payload.orderId}`);
}

module.exports = { vendorPayload, handleConfirmation }
