const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');
const crypto = require('crypto');

// Helper functions
function ensureBuffer(input) {
    if (input instanceof Uint8Array) return Buffer.from(input);
    if (Buffer.isBuffer(input)) return input;
    if (typeof input === 'string') return Buffer.from(input, 'hex');
    throw new Error('Invalid input type: expected Uint8Array, Buffer, or string');
}

function bufferToHex(buffer) {
    return buffer.toString('hex');
}

function isValidPrivateKey(privateKey) {
    return ecc.isPrivate(ensureBuffer(privateKey));
}

function isValidPublicKey(publicKey) {
    return ecc.isPoint(ensureBuffer(publicKey));
}

function derivePublicKey(privateKey) {
    const privKeyBuffer = ensureBuffer(privateKey);
    if (!isValidPrivateKey(privKeyBuffer)) throw new Error('Invalid private key');
    return ecc.pointFromScalar(privKeyBuffer, true);
}

// Tagged hash function as defined in BIP340 and referenced in BIP352
function taggedHash(tag, ...args) {
    const tagHash = crypto.createHash('sha256').update(tag).digest();
    const preimage = Buffer.concat([tagHash, tagHash, ...args.map(ensureBuffer)]);
    return crypto.createHash('sha256').update(preimage).digest();
}

// Sender functions
function createSilentPayment(recipientScanPubKey, recipientSpendPubKey, senderPrivKey, amount) {
    try {
        console.log('\n--- Creating Silent Payment ---');
        console.log('Enhancing Privacy and Fungibility in Bitcoin');

        recipientScanPubKey = ensureBuffer(recipientScanPubKey);
        recipientSpendPubKey = ensureBuffer(recipientSpendPubKey);
        senderPrivKey = ensureBuffer(senderPrivKey);

        // Key Privacy Feature: No Address Reuse
        console.log('\nStep 1: Validate input keys');
        if (!isValidPublicKey(recipientScanPubKey)) throw new Error('Invalid recipient scan public key');
        if (!isValidPublicKey(recipientSpendPubKey)) throw new Error('Invalid recipient spend public key');
        if (!isValidPrivateKey(senderPrivKey)) throw new Error('Invalid sender private key');
        console.log('Recipient Scan Public Key:', bufferToHex(recipientScanPubKey));
        console.log('Recipient Spend Public Key:', bufferToHex(recipientSpendPubKey));
        console.log('Sender Private Key:', bufferToHex(senderPrivKey));

        console.log('\nStep 2: Derive sender\'s public key');
        const senderPubKey = derivePublicKey(senderPrivKey);
        console.log('Derived Sender Public Key:', bufferToHex(senderPubKey));

        // Key Component: Ephemeral Keys
        console.log('\nStep 3: Generate ephemeral key');
        const r = crypto.randomBytes(32);
        const R = derivePublicKey(r);
        console.log('Ephemeral private key r:', bufferToHex(r));
        console.log('Ephemeral public key R:', bufferToHex(R));

        // Key Component: Tagged Hashes
        console.log('\nStep 4: Compute shared secret');
        const e = taggedHash('BIP0352/generate', recipientScanPubKey, R);
        console.log('Shared secret e:', bufferToHex(e));
        const P = derivePublicKey(e);
        console.log('Point P:', bufferToHex(P));

        // Key Component: Output Keys
        console.log('\nStep 5: Compute output key');
        const T = ecc.pointAdd(recipientScanPubKey, P);
        if (!T) throw new Error('Failed to add points');
        console.log('Point T (recipient_scan_pubkey + P):', bufferToHex(T));
        const t = taggedHash('BIP0352/tweak', T, recipientSpendPubKey, R);
        console.log('Tweak t:', bufferToHex(t));

        const outputKey = ecc.pointAdd(recipientSpendPubKey, derivePublicKey(t));
        if (!outputKey) throw new Error('Failed to compute output key');

        // Key Privacy Feature: Stealth Addresses
        console.log('\nSilent Payment created successfully');
        console.log('Final Output Key (Stealth Address):', bufferToHex(outputKey));
        console.log('Amount:', amount);

        return { outputKey, R, amount };
    } catch (error) {
        console.error('Error creating silent payment:', error.message);
        return null;
    }
}

// Recipient functions
function scanForPayments(scanPrivKey, spendPubKey, incomingOutputs) {
    const receivedPayments = [];

    console.log('\n--- Scanning for Silent Payments ---');
    console.log('Enhancing Privacy: Hidden Recipient');

    scanPrivKey = ensureBuffer(scanPrivKey);
    spendPubKey = ensureBuffer(spendPubKey);

    // Key Components: Scan Keys and Spend Keys
    if (!isValidPrivateKey(scanPrivKey)) throw new Error('Invalid scan private key');
    if (!isValidPublicKey(spendPubKey)) throw new Error('Invalid spend public key');

    console.log('Scan Private Key:', bufferToHex(scanPrivKey));
    console.log('Spend Public Key:', bufferToHex(spendPubKey));

    for (const output of incomingOutputs) {
        try {
            const { outputKey, R, amount } = output;

            // Key Privacy Feature: Unlinkable Payments
            console.log('\nChecking output for potential payment:', bufferToHex(outputKey));

            // Reconstructing the Stealth Address
            console.log('Step 1: Compute shared secret (recipient side)');
            const scanPubKey = derivePublicKey(scanPrivKey);
            const e = taggedHash('BIP0352/generate', scanPubKey, R);
            const P = derivePublicKey(e);
            console.log('Shared secret e:', bufferToHex(e));
            console.log('Point P:', bufferToHex(P));

            console.log('Step 2: Compute output key (recipient side)');
            const T = ecc.pointAdd(scanPubKey, P);
            if (!T) throw new Error('Failed to add points');
            console.log('Point T (scan_pubkey + P):', bufferToHex(T));
            const t = taggedHash('BIP0352/tweak', T, spendPubKey, R);
            console.log('Tweak t:', bufferToHex(t));

            const tweakPubKey = derivePublicKey(t);
            const calculatedOutputKey = ecc.pointAdd(spendPubKey, tweakPubKey);
            if (!calculatedOutputKey) throw new Error('Failed to compute output key');
            console.log('Calculated Output Key:', bufferToHex(calculatedOutputKey));

            // Verifying the Payment
            if (ecc.isPoint(calculatedOutputKey) && ecc.isPoint(ensureBuffer(outputKey)) &&
                Buffer.compare(calculatedOutputKey, ensureBuffer(outputKey)) === 0) {
                receivedPayments.push({ amount, outputKey: calculatedOutputKey });
                console.log('Silent Payment detected! Amount:', amount);
            } else {
                console.log('No matching payment found for this output');
            }
        } catch (error) {
            console.error('Error scanning payment:', error.message);
        }
    }

    return receivedPayments;
}

// Demo
try {
    console.log('\n=== Silent Payments: Enhancing Bitcoin Privacy ===');

    // Key Components: Generating necessary keys
    console.log('\nGenerating keys for demonstration');
    const recipientScanPrivKey = crypto.randomBytes(32);
    const recipientSpendPrivKey = crypto.randomBytes(32);
    const recipientSpendPubKey = derivePublicKey(recipientSpendPrivKey);
    const recipientScanPubKey = derivePublicKey(recipientScanPrivKey);

    const senderPrivKey = crypto.randomBytes(32);

    console.log('Recipient Scan Private Key:', bufferToHex(recipientScanPrivKey));
    console.log('Recipient Spend Private Key:', bufferToHex(recipientSpendPrivKey));
    console.log('Recipient Scan Public Key:', bufferToHex(recipientScanPubKey));
    console.log('Recipient Spend Public Key:', bufferToHex(recipientSpendPubKey));
    console.log('Sender Private Key:', bufferToHex(senderPrivKey));

    // Creating a Silent Payment
    console.log('\nCreating a silent payment');
    const payment = createSilentPayment(recipientScanPubKey, recipientSpendPubKey, senderPrivKey, 100000);

    if (payment) {
        // Simulating blockchain and demonstrating privacy features
        console.log('\nSimulating blockchain outputs');
        const incomingOutputs = [
            payment,
            { outputKey: derivePublicKey(crypto.randomBytes(32)), R: derivePublicKey(crypto.randomBytes(32)), amount: 50000 } // Decoy output for privacy
        ];

        // Scanning for payments: Demonstrating how recipients detect their payments
        console.log('\nScanning for payments');
        const receivedPayments = scanForPayments(recipientScanPrivKey, recipientSpendPubKey, incomingOutputs);

        console.log('\nScan complete. Received Payments:', receivedPayments.length);
        receivedPayments.forEach((payment, index) => {
            console.log(`Payment ${index + 1}:`,
                { amount: payment.amount, outputKey: bufferToHex(payment.outputKey) }
            );
        });
    } else {
        console.log('Failed to create silent payment');
    }
} catch (error) {
    console.error('Error in demo:', error.message);
}