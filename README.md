# [metalsmith][metalsmith]-mdast [![Build Status](https://travis-ci.org/ben-eb/metalsmith-mdast.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/metalsmith-mdast.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/metalsmith-mdast.svg)][deps]

> Convert markdown to html with mdast.

*If you have any issues with the output of this plugin, please use the
[mdast tracker](https://github.com/wooorm/mdast/issues).*

## Install

With [npm](https://npmjs.org/package/metalsmith-mdast) do:

```
npm install metalsmith-mdast --save
```

## Example

The [mdast-html][mdasthtml] plugin is bundled for you automatically:

```js
var mdast      = require('metalsmith-mdast'),
    Metalsmith = require('metalsmith');

Metalsmith('fixtures')
    .use(mdast())
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

Add further plugins by passing an array:

```js
var rmBadges   = require('mdast-strip-badges'),
    rmParas    = require('mdast-squeeze-paragraphs');

Metalsmith('fixtures')
    .use(mdast([ rmBadges, rmParas ]))
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

[ci]:         https://travis-ci.org/ben-eb/metalsmith-mdast
[deps]:       https://gemnasium.com/ben-eb/metalsmith-mdast
[mdasthtml]:  https://github.com/wooorm/mdast-html
[metalsmith]: https://github.com/segmentio/metalsmith
[npm]:        http://badge.fury.io/js/metalsmith-mdast
