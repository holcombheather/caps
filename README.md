# LAB - Class 13 | Message Queues

## Project: CAPS

A real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).

### Authors: Heather Holcomb | 401d53

***

### Problem Domain

**CAPS Phase 3**: Complete work on a multi-day build of our delivery tracking system, adding queued delivery.

In this phase, we are going to implement a system to guarantee that notification payloads are read by their intended subscriber. Rather than just triggering an event notification and hope that client applications respond, we’re going to implement a “Queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

In this final phase, we’ll be implementing a “Queue” feature on the Server, allowing Driver and Vendor clients to subscribe to messages added for pickup and delivered events within their respective client queues.

***

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/caps/actions)
- [back-end dev server url](https://caps-z2cc.onrender.com)
- [Whiteboard](https://www.figma.com/file/LmkZ4QxH40tRryEP8EIPrf/Whiteboard-401d53?type=whiteboard&node-id=0%3A1&t=t9QcXiax6SKKr7d3-1)

***

### Collaborators

- Referenced lecture demo for class 13 with instructor Ryan Gallaway
- Reference lecture code review in class 14 with instructor Ryan Gallaway
- Used AI to help write tests using a template I authored by referencing the tests from the lecture above and modifying it to my needs.


***

### Setup

#### How to initialize this application
1. Clone this repo into your local environment
2. `npm init -y`
3. `npm i jest chance eslint socket.io socket.io-client`
4. Copy Code Fellows config files `cp -r ../seattle-code-javascript-401d53/configs/ .`

#### `.env` requirements

- `PORT` - 3001  (see `.env.sample`)

#### How to run this application

- `npm start` or `nodemon`

#### Features

In Phase 3, we are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and “scanning” package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver any packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive “delivery” notifications from the Queue system.

- Here are the high level stories related to this new set of requirements.
  - As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
  - As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
  - As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
  - As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
  - As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

- And as developers, here are some of the development stories that are newly relevant to the above.
  - As a developer, I want to create a system of tracking who is subscribing to each event.
  - As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
  - As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
  - As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
  - As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

#### Tests

To run tests, use the command `npm test` in your terminal

#### UML
![UML image](UML_lab11.png)

