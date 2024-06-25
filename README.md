# Silent Payments Demo

## Overview

This project demonstrates the implementation of Silent Payments, a privacy-enhancing technique for Bitcoin transactions
as proposed in [BIP 352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki). Silent Payments aim to improve
transaction privacy and fungibility in Bitcoin by creating unique, unlinkable addresses for each payment.

## Features

- Implementation of the Silent Payments protocol
- Creation of Silent Payments
- Scanning and detection of received Silent Payments
- Demonstration of key privacy features:
    - No address reuse
    - Stealth addresses
    - Hidden recipients
    - Unlinkable payments

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Dependencies

This project relies on the following npm packages:

- [`bitcoinjs-lib`](https://github.com/bitcoinjs/bitcoinjs-lib): For Bitcoin-related cryptographic operations
- [`tiny-secp256k1`](https://github.com/bitcoinjs/tiny-secp256k1): For elliptic curve operations
- `crypto`: Node.js built-in crypto module

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/TheCryptoDonkey/silent-payments.git
   cd silent-payments
   ```

2. Install the required dependencies:
   ```
   npm install
   cd silent-payments-presentation
   npm install
   cd ..
   ```

## Usage

To run the Silent Payments demo:

```
  node index.js
```

## Usage

To run the Silent Payments Presentation:

```
  npm start
```

This will execute the demonstration, which includes:

1. Generating keys for a mock sender and recipient
2. Creating a Silent Payment
3. Simulating blockchain outputs
4. Scanning for and detecting the Silent Payment

## Code Structure

- `index.js`: The main file containing the implementation and demo
- Helper functions for key operations and data conversion
- `createSilentPayment()`: Function to create a Silent Payment
- `scanForPayments()`: Function to scan for and detect Silent Payments
- A demo section that ties everything together

## Educational Purpose

This project is intended for educational purposes to demonstrate the concepts behind Silent Payments. It is not intended for use in production environments or with real Bitcoin transactions.

## Contributing

Contributions to improve the demo or extend its functionality are welcome. Please feel free to submit issues or pull requests.

## License

[MIT License](LICENSE)

## References

- [BIP 352: Silent Payments](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)
- [BIP 47: Reusable Payment Codes for Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki)
- [Bitcoin Improvement Proposals (BIPs)](https://github.com/bitcoin/bips)
- [Bitcoin Developer Guide](https://developer.bitcoin.org/)
- [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook) by Andreas M. Antonopoulos

## Further Reading

- [Privacy in Bitcoin](https://en.bitcoin.it/wiki/Privacy)
- [Bitcoin Privacy and Fungibility](https://bitcoin.org/en/protect-your-privacy)
- [Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)

## Disclaimer

This is a demonstration project and should not be used for actual Bitcoin transactions. Always use thoroughly tested and audited code for any cryptocurrency operations.