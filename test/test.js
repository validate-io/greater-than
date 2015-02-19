/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isGreaterThan = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-greater-than', function tests() {

	it( 'should export a function', function test() {
		expect( isGreaterThan ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isGreaterThan( 2, 1 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			0,
			true,
			[],
			'5',
			function(){},
			null,
			NaN,
			{'foo':'bar'},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isGreaterThan( values[i], 1 ) );
			assert.ok( !isGreaterThan( -1, values[i] ) );
		}
	});

});
