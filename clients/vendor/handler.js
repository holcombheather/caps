'use strict';

// const io  = require('socket.io-client');
// const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';


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

function testPayload () {
  return {
    store: '1-206-flowers',
    orderId: '1234',
    customer: 'Test Testerson',
    address: '123 Test St',
  }
}

module.exports = { vendorPayload, handleConfirmation, testPayload }
