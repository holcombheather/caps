'use strict';

const Chance = require('chance');
const chance = new Chance();

function vendorPayload() {
  return {
    "store": chance.company(),
    "orderId": chance.guid(),
    "customer": chance.name(),
    "address": chance.address(),
  }
}

function handleConfirmation(payload) {
  console.log(`Thank you for your order ${payload.customer}`);
}

module.exports = { vendorPayload, handleConfirmation }
