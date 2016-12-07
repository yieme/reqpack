'use strict';

function toCamelCase(str) { // attribution: http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
  // Lower cases the string
  return str.toLowerCase()
    // Replaces any - or _ characters with a space
    .replace( /[-_]+/g, ' ')
    // Removes any non alphanumeric characters
    .replace( /[^\w\s]/g, '')
    // Uppercases the first character in each group immediately following a space
    // (delimited by spaces)
    .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
    // Removes spaces
    .replace( / /g, '' );
}



function reqpack(list) {
  if (!list) {
    var path     = require('path')
    var packPath = path.resolve(__dirname, 'package.json')
    var pack     = require(packPath)
    list         = pack.dependencies
  }
  var R = {}
  if (Array.isArray(list)) {
    list.forEach(function(key) {
      R[toCamelCase(key)] = require(key)
    })
  } else {
    for (var key in list) {
      R[toCamelCase(key)] = require(key)
    }
  }
  return R
}

module.exports = reqpack
