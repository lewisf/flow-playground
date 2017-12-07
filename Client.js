// @flow
// export class Client {
//   constructor(ipAddress) {
//     this.target = ipAddress;
//   }
// };

const IP_ADDRESS_REGEX = /asdf/;
const URL_REGEX = /asdf/;
export opaque type IpAddress = string;
export opaque type UrlAddress = string;

export class Client {
  target: IpAddress | UrlAddress

  constructor(target: IpAddress | UrlAddress) {
    this.target = target;
  }
};

export function makeIpAddress(maybeIpAddress: string): ?IpAddress {
  if (IP_ADDRESS_REGEX.test(maybeIpAddress)) {
    return (maybeIpAddress: IpAddress);
  } else {
    return null;
  }
}

export function makeUrlAddress(maybeUrlAddress: string): ?IpAddress {
  if (URL_REGEX.test(maybeUrlAddress)) {
    return (maybeUrlAddress: IpAddress);
  } else {
    return null;
  }
}
