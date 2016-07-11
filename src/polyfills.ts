// Polyfills.ts specifies which libraries are 
// bundled in the polyfills.js created by Webpack
// 
// What is polyfill:
// Polyfills plug gaps in the browser's JavaScript implementation.

import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
