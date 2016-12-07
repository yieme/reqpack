'use strict';

var assert = require('assert')
var test   = require('./index.js')

assert(test, 'Missing module: reqpack')

var R = test()
for (var key in R) {
  console.log(key)
}
