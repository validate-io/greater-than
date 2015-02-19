'use strict';

var isGreaterThan = require( './../lib' );

console.log( isGreaterThan( 2, 1 ) );
// returns true

console.log( isGreaterThan( 0, 1 ) );
// returns false