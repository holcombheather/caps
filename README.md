# LAB - Class 11 | Event Driven Applications

## Project: CAPS

Dynamic API Phase 1: Build your core, standards compliant Express server

### Authors: Heather Holcomb | 401d53

***

### Problem Domain

**CAPS Phase 1**: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.

***

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/basic-express-server/actions)
- [back-end dev server url]()

***

### Collaborators

- Referenced lecture demo for class 11 with instructor Ryan Gallaway

***

### Setup

#### How to initialize this application
1. Clone this repo into your local environment
2. `npm init -y`
3. `npm i cors express jest supertest dotenv`
4. Copy Code Fellows config files `cp -r ../seattle-code-javascript-401d53/configs/ .`

#### `.env` requirements (where applicable)

- `PORT` - 3001  (see `.env.sample`)

#### How to run this application

- `npm start` or `nodemon`

#### Features / Routes

- Person Route
  - Method: GET
  - Path: /person
    - Expects a query string from the user with a “name” property
    - When present, output JSON to the client with this shape: { name: "name provided" }
    - Without a name in the query string, force a “500” error

#### Tests

To run tests, use the command `npm test` in your terminal

 PASS  __tests__/server.test.js
  Server
    ✓ handles the root path (21 ms)
    ✓ handles success route (2 ms)
    ✓ 404 on a bad route (2 ms)
    ✓ 404 on a bad method (3 ms)
    ✓ 500 if no name in the query string (2 ms)
    ✓ 200 if the name is in the query string (2 ms)
    ✓ Given a name in the query string, the output object is correct (2 ms)

 PASS  src/middleware/logger.test.js
  logger middleware
    ✓ Logs the method and path of the request (1 ms)
    ✓ Calls next with no arguments

 PASS  src/middleware/validator.test.js
  Validator middleware
    ✓ Calls next with error message if no name provided (1 ms)
    ✓ Calls next with no arguments if name provided

#### UML
![UML image](UML_lab02.png)

