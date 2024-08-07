/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Complex64 = require( '@stdlib/complex-float32-ctor' );
var isNegativeZerof = require( '@stdlib/math-base-assert-is-negative-zerof' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );


// MAIN //

/**
* Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @param {Complex64} z - complex number
* @param {number} y - number from which to derive the sign
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var realf = require( '@stdlib/complex-float32-real' );
* var imagf = require( '@stdlib/complex-float32-imag' );
*
* var v = cflipsignf( new Complex64( -4.0, 5.0 ), -55.0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 4.0
*
* var im = imagf( v );
* // returns -5.0
*/
function cflipsignf( z, y ) {
	var re = realf( z );
	var im = imagf( z );
	if ( y < 0 || isNegativeZerof( y ) ) {
		re = -re;
		im = -im;
	}
	return new Complex64( re, im );
}


// EXPORTS //

module.exports = cflipsignf;
