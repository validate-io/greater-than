Greater than
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is greater than a comparator value.


## Installation

``` bash
$ npm install validate.io-greater-than
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var isGreaterThan = require( 'validate.io-greater-than' );

console.log( isGreaterThan( 2, 1 ) );
// Returns true

console.log( isGreaterThan( 0, 1 ) );
// Returns false
```

where 

``` javascript
isGreaterThan( value, comparator );
```

The `value` argument is the value to be validated and the `comparator` argument is the value to be compared against.


## Notes

This method validates that both the `comparator` and the `value` are of type `number` before making the comparison. For non-numeric arguments, the method returns `false`.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-greater-than.svg
[npm-url]: https://npmjs.org/package/validate.io-greater-than

[travis-image]: http://img.shields.io/travis/validate-io/greater-than/master.svg
[travis-url]: https://travis-ci.org/validate-io/greater-than

[coveralls-image]: https://img.shields.io/coveralls/validate-io/greater-than/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/greater-than?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/greater-than.svg
[dependencies-url]: https://david-dm.org/validate-io/greater-than

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/greater-than.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/greater-than

[github-issues-image]: http://img.shields.io/github/issues/validate-io/greater-than.svg
[github-issues-url]: https://github.com/validate-io/greater-than/issues