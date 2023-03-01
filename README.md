<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cflipsignf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import cflipsignf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cflipsignf@esm/index.mjs';
```

#### cflipsignf( z, y )

Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs';

var v = cflipsignf( new Complex64( -4.0, 5.0 ), -1.0 );
// returns <Complex64>

var re = real( v );
// returns 4.0

var im = imag( v );
// returns -5.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import cflipsignf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cflipsignf@esm/index.mjs';

var rand = uniform( -50.0, 50.0 );

var z;
var y;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( rand(), rand() );
    y = rand();
    console.log( 'cflipsignf(%s, %d) = %s', z, y, cflipsignf( z, y ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cflipsignf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cflipsignf

[test-image]: https://github.com/stdlib-js/math-base-special-cflipsignf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cflipsignf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cflipsignf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cflipsignf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cflipsignf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cflipsignf/main/LICENSE

</section>

<!-- /.links -->
