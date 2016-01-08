# [metalsmith][metalsmith]-remark [![Build Status](https://travis-ci.org/ben-eb/metalsmith-remark.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/metalsmith-remark.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/metalsmith-remark.svg)][deps]

> Convert markdown to html with remark.

*If you have any issues with the output of this plugin, please use the
[remark tracker](https://github.com/wooorm/remark/issues).*


## Install

With [npm](https://npmjs.org/package/metalsmith-remark) do:

```
npm install metalsmith-remark --save
```


## Example

The [remark-html] plugin is bundled for you automatically:

```js
var remark     = require('metalsmith-remark'),
    Metalsmith = require('metalsmith');

Metalsmith('fixtures')
    .use(remark())
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

Add further plugins by passing an array:

```js
var rmBadges   = require('remark-strip-badges'),
    rmParas    = require('remark-squeeze-paragraphs');

Metalsmith('fixtures')
    .use(remark([ rmBadges, rmParas ]))
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```


## Contributing

Pull requests are welcome. If you add functionality, then please add unit
tests to cover it.


## License

MIT © [Ben Briggs](http://beneb.info)


[ci]:          https://travis-ci.org/ben-eb/metalsmith-remark
[deps]:        https://gemnasium.com/ben-eb/metalsmith-remark
[remark-html]: https://github.com/wooorm/remark-html
[metalsmith]:  https://github.com/segmentio/metalsmith
[npm]:         http://badge.fury.io/js/metalsmith-remark
