// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// src/setupTests.js
// Polyfill for TextEncoder/TextDecoder in older Node.js versions
if (typeof TextEncoder === 'undefined') {
  const { TextEncoder } = require('util');
  global.TextEncoder = TextEncoder;
}

if (typeof TextDecoder === 'undefined') {
  const { TextDecoder } = require('util');
  global.TextDecoder = require('util').TextDecoder;
}