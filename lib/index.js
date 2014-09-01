/**
*
*	VALIDATE: greater-than
*
*
*	DESCRIPTION:
*		- Validates if a value is greater than a comparator value.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: greater_than( value, comparator )
	*	Validates if a value is greater than a comparator.
	*
	* @param {Number} value - value to be validated
	* @param {Number} comparator - value against which to make the comparison
	* @returns {Boolean} boolean indicating whether value is greater than comparator
	*/
	function greater_than( value, comparator ) {
		if ( typeof value !== 'number' || value !== value ) {
			return false;
		}
		return ( value > comparator );
	} // end FUNCTION greater_than()


	// EXPORTS //

	module.exports = greater_than;

})();