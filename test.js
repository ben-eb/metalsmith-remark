'use strict';

var test       = require('tape'),
    equal      = require('assert-dir-equal'),
    mdast      = require('./'),
    rmBadges   = require('mdast-strip-badges'),
    rmParas    = require('mdast-squeeze-paragraphs'),
    Metalsmith = require('metalsmith');

test('should convert svg files', function (t) {
    t.plan(2);

    Metalsmith('fixtures')
        .use(mdast([ rmBadges, rmParas ]))
        .build(function (err) {
            t.notOk(err, 'should not error');
            t.doesNotThrow(function () {
                equal('fixtures/build', 'fixtures/expected');
            });
        });
});
