// @flow
import {
  Client,
  makeIpAddress,
  // makeUrlAddress
} from './Client';

// Standard JS way of using the client
// const client = new Client('10.3.2.1');

// Recommended way of using a client w/ Flow Type w/ validator functions that
// work both at runtime and statically
const ipAddress = makeIpAddress('10.3.2.1');

if (ipAddress) {
  new Client(ipAddress);
}

