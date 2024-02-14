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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

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

To use in Observable,

```javascript
cflipsignf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cflipsignf@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-cflipsignf/tags). For example,

```javascript
cflipsignf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cflipsignf@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cflipsignf = require( 'path/to/vendor/umd/math-base-special-cflipsignf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cflipsignf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cflipsignf;
})();
</script>
```

#### cflipsignf( z, y )

Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

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
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var Complex64 = require( '@stdlib/complex-float32' );
var cflipsignf = require( '@stdlib/math-base-special-cflipsignf' );

var rand = uniform( -50.0, 50.0 );

var z;
var y;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( rand(), rand() );
    y = rand();
    console.log( 'cflipsignf(%s, %d) = %s', z, y, cflipsignf( z, y ) );
}

})();
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/cnegf`][@stdlib/math/base/ops/cnegf]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cflipsign`][@stdlib/math/base/special/cflipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cflipsignf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cflipsignf

[test-image]: https://github.com/stdlib-js/math-base-special-cflipsignf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cflipsignf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cflipsignf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cflipsignf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cflipsignf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cflipsignf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cflipsignf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cflipsignf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cflipsignf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cflipsignf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/ops/cnegf]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/umd

[@stdlib/math/base/special/cflipsign]: https://github.com/stdlib-js/math-base-special-cflipsign/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
