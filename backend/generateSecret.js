// Load the crypto module in Node.js
const crypto = require('crypto');

// Generate a 32-byte (256-bit) secure random string
const secret = crypto.randomBytes(32).toString('hex');

// Output the secret to the console
console.log("Generated Secret:", secret);
