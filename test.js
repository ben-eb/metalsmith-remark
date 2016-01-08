'use strict';

var ava        = require('ava'),
    equal      = require('assert-dir-equal'),
    remark     = require('./'),
    rmBadges   = require('remark-strip-badges'),
    rmParas    = require('remark-squeeze-paragraphs'),
    metalsmith = require('metalsmith');

ava('should convert markdown files', function (t) {
    return new Promise(function (resolve) {
        metalsmith('fixtures')
            .use(remark([ rmBadges, rmParas ]))
            .build(function (err) {
                t.notOk(err, 'should not error');
                t.doesNotThrow(function () {
                    equal('fixtures/build', 'fixtures/expected');
                });
                resolve();
            });
    });
});
